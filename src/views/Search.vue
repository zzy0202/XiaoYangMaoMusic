<template>
  <div class="searchMainContainer">
    <h2 class="title">{{ $route.params.keyword }}</h2>
    <span class="result">为你找到{{ resultCount }}个内容</span>
    <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="歌曲列表" name="first">
        <SongUnit :songData="searchArr"></SongUnit>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="MV" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="热门评论" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {getSearchList} from "@/api/MusicApi";
import SongUnit from "@/components/SongUnit";

export default {
  name: "Search",
  components: {
    SongUnit,
  },
  data() {
    return {
      searchArr: [],
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
        if(res) {
          this.resultCount = res.result.songCount;
          this.searchArr = res.result.songs;
          console.log(this.searchArr);
        }
      });
    },
    handleClick(tab, event) {
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getSongResult();
    });
  }
}
</script>

<style scoped lang="less">
.searchMainContainer {
  overflow: scroll;
  scrollbar-width: none;
  border-radius: 10px;

  .title {
    color: white;
    display: inline-block;
    margin: 10px 10px;
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
