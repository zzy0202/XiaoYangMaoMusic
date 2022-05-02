<template>
  <div class="searchMainContainer">
    <h2 class="title">{{ $route.params.keyword }}</h2>
    <span class="result">为你找到{{ resultCount }}个内容</span>
    <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="歌曲列表" name="first">
        <SongUnit style="margin: 0 auto" :songData="searchSongArr"></SongUnit>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second">
        <SongListUnit :songListArr="searchSongListArr"></SongListUnit>
      </el-tab-pane>
      <el-tab-pane label="MV" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="热门评论" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {getSearchList} from "@/api/MusicApi";
import SongUnit from "@/components/SongUnit";
import SongListUnit from "@/components/SongListUnit";
export default {
  name: "Search",
  components: {
    SongListUnit,
    SongUnit,
  },
  data() {
    return {
      searchSongArr: [],
      searchSongListArr:[],
      resultCount: 0,
      msg: "TESTING",
      activeName: 'first',
    }
  },
  mounted() {

  },
  methods: {
    async getSongResult() {
      getSearchList({keywords: this.$route.params.keyword}).then((res) => {
        if (res) {
          this.resultCount = res.result.songCount;
          this.searchSongArr = res.result.songs;
          console.log(this.searchSongArr);
        }
      });
    },
    async getSongListResult() {
      getSearchList({keywords: this.$route.params.keyword, type: 1000,limit:28}).then((res) => {
        this.searchSongListArr = res.result.playlists;
        console.log(this.searchSongListArr);
      })
    },
    handleClick(tab, event) {
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getSongResult();
      vm.getSongListResult();
    });
  }
}
</script>

<style scoped lang="less">
.searchMainContainer {
  width: 1334px;
  overflow: scroll;
  scrollbar-width: none;
  border-radius: 10px;
  max-width: 1334px;
  background-color: rgba(36, 39, 59, 0.4);
  .title {
    color: white;
    display: inline-block;
    margin: 20px 20px;
  }

  .result {
    font-size: 15px;
    color: #bbb8b8;
    margin-left: 7px;
  }

  .tab {
    margin-left: 30px;
  }
}

::v-deep .el-tabs__nav-wrap::after {
  background-color: transparent;
}

::v-deep .el-tabs__active-bar {
  background-color: white;
}

::v-deep .el-tabs__item {
  color: #959592;
}

::v-deep .el-tabs__item.is-active {
  color: white;
}

::v-deep .el-tabs__item:hover {
  color: white;
}

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
