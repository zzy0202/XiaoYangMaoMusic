<template>
  <div class="searchMainContainer">
    <Loading v-if="isLoading" class="loading"></Loading>
    <div v-else>
      <h2 class="title">{{ $route.params.keyword }}</h2>
      <span class="result">为你找到{{ resultCount }}个内容</span>
      <el-tabs class="tab" v-model="activeName">
        <el-tab-pane label="歌曲列表" name="first">
          <SongUnit v-if="searchSongArr.length" style="margin: 0 auto 30px" :songData="searchSongArr"></SongUnit>
          <div style="display: flex;justify-content: center;">
            <el-pagination
                layout="prev, pager, next"
                @current-change="changePage"
                :current-page="currentPage"
                style="margin-bottom: 20px;"
                :page-count="1000">
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="歌单" name="second">
          <SongListUnit v-if="searchSongListArr" :songListArr="searchSongListArr"></SongListUnit>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import {getSearchList} from "@/api/MusicApi";
import SongUnit from "@/components/SongUnit";
import SongListUnit from "@/components/SongListUnit";
import Loading from "@/components/Loading"

export default {
  name: "Search",
  components: {
    Loading,
    SongListUnit,
    SongUnit,
  },
  data() {
    return {
      searchSongArr: [],
      searchSongListArr: [],
      resultCount: 0,
      activeName: 'first',
      isLoading: true,
      currentPage: 1,
    }
  },
  async mounted() {
    this.$eventBus.$on('searchSong', async (get) => {
      this.$route.params.keyword = get;
      await this.getSongResult();
      await this.getSongListResult();
    })
    this.getSongListResult();
    this.getSongResult()
  },
  methods: {
    getSongResult() {
      this.isLoading = true;
      getSearchList({keywords: this.$route.params.keyword, offset: (this.currentPage - 1) * 30}).then((res) => {
        if (res) {
          this.resultCount = res.result.songCount;
          this.searchSongArr = res.result.songs;
          this.isLoading = false;
          this.$forceUpdate();
        }
      });
    },
    getSongListResult() {
      getSearchList({keywords: this.$route.params.keyword, type: 1000, limit: 28}).then((res) => {
        this.searchSongListArr = res.result.playlists;
        this.$forceUpdate();
      })
    },
    changePage(offset) {
      this.currentPage = offset;
      this.getSongResult();
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
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
  position: relative;
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;

  }
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

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
