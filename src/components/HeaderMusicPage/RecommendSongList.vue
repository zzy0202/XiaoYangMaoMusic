<template>
  <div class="recommendMainContent" v-if="!isLoading">
    <div class="songListUnit" v-for="(item,index) in songListArr">
      <img :src="item.coverImgUrl" alt="">
      <span>{{ item.name }}</span>
    </div>
    <div style="display: flex;justify-content: center;width: 100%">
      <el-pagination
          layout="prev, pager, next"
          @current-change="changePage"
          :page-count	="largestPage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {getRecommendSongList} from "@/api/MusicApi";

export default {
  name: "RecommendSongList",
  data() {
    return {
      songListArr: [],
      currentPage:1,
      isLoading:true,
      largestPage:0,
    }
  },
  methods: {
    changePage(offset) {
      this.loadSongList(offset)
    },
    async loadSongList(offset) {
      let res = await getRecommendSongList({limit: 15,offset:offset*15});
      console.log(res);
      this.largestPage = Math.floor(res.total/15);
      this.songListArr = res.playlists;
    }
  },
  async mounted() {
    await this.loadSongList(1);
    this.isLoading=false;
  },
}
</script>

<style scoped lang="less">
.recommendMainContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 95%;
  height: 800px;
  flex-wrap: wrap;
}

.songListUnit {
  width: 240px;
  padding: 0 5px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;

  img {
    width: 220px;
    height: 220px;
    border-radius: 2px;
    box-shadow: 0 0 5px #747373;
    transition: all 0.3s;
  }

  img:hover {
    cursor: pointer;
    box-shadow: 0 3px 3px 3px #393333;
    transform: scale(1.04);
  }

  span {
    font-size: 12px;
    color: white;
    margin-top: 15px;
  }
}

::v-deep .el-pager li,
::v-deep .el-pagination .btn-next,
::v-deep .el-pagination .btn-prev,
::v-deep .el-pager li.btn-quicknext,
::v-deep .el-pager li.btn-quickprev {
  background: none;
  color: white;
}

::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: transparent;
}
</style>
