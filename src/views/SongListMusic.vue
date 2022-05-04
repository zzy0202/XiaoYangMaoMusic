<!--这个是点进去后的歌单页面-->
<template>
  <div class="songListMusicMain">
    <Loading v-if="isLoading" class="loading"></Loading>
    <div v-if="!isLoading">
      <div class="header">
        <img :src="songListData.coverImgUrl" class="coverImg" alt="">
        <div class="content">
          <h3>{{ songListData.name }}</h3>
          <div class="creator" style="display: flex;justify-content: flex-start; align-items: center">
            <img class="avatar" :src="songListData.creator.avatarUrl" alt="">
            <span>{{ songListData.creator.nickname }}</span>
          </div>
          <span class="tags">标签:{{ songListData.tags.join(' ') }}</span>
          <span class="description">简介:{{ songListData.description }}</span>
        </div>
      </div>
      <SongUnit :songData="toShowSongUnit"></SongUnit>
      <div style="display: flex;justify-content: center;">
        <el-pagination
            layout="prev, pager, next"
            @current-change="changePage"
            :current-page="currentPage"
            style="margin-bottom: 20px;"
            :page-count="Math.ceil(totalSongCount/20)">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {getSongListMusic, getSongDetails} from "@/api/MusicApi";
import SongUnit from "@/components/SongUnit";
import Loading from "@/components/Loading"
//dt 是歌曲时间
export default {
  name: "SongListMusic",
  components: {Loading, SongUnit},
  updated() {
    console.log('kskskkksk!K!KKMKSM')
  },
  data() {
    return {
      songListData: [],
      songListEverySong: [],
      toShowSongUnit: [],
      isLoading: true,
      currentPage: 0,
      totalSongCount: 0,
    }
  },
  watch: {
    $route: {
      async handler(newVal, oldVal) {
        this.isLoading=true;
        await this.getMusicList();
        await this.getSongListSong();
        this.isLoading = false;
      },
      immediate:true,
    }
  },
  methods: {
    async getMusicList() {
      let id = this.$route.params.id;   //这个是获取歌单id
      let result = await getSongListMusic({id});    //获取歌单详情
      this.songListData = result.playlist;                 //这个是歌单详情页数据
      this.songListEverySong = result.playlist.trackIds;   //这个是歌单里面的歌曲id数据
      this.totalSongCount = result.playlist.trackIds.length;
      console.log(result);
      this.getSongListSong();
    },
    async getSongListSong() {     //获取歌单里面的每一首歌
      let start = this.currentPage * 20;    //获取歌页里开始的第一首歌
      let end = start + 20;                 //获取歌单页里的最后一首歌
      let getSongListData = this.songListEverySong.slice(start, end);
      console.log(getSongListData);
      let getSongStr = '';
      for (const songListDatum of getSongListData) {
        getSongStr += songListDatum.id + ',';
      }
      getSongStr = getSongStr.substring(0, getSongStr.length - 1);
      let result;
      result = await getSongDetails({ids: getSongStr});
      this.toShowSongUnit = result.songs;
      console.log(this.toShowSongUnit);
      for (const item of this.toShowSongUnit) {
        item.album = item.al;
        item.artists = item.ar;
        item.duration = item.dt;
      }
      this.isLoading = false;
    },
    changePage(offset) {
      this.currentPage = offset;
      this.getSongListSong();
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getMusicList();
      vm.isLoading = true;
    });
  }
}
</script>

<style scoped lang="less">
.songListMusicMain {
  width: 1334px;
  background-color: rgba(36, 39, 59, 0.4);
  overflow: scroll;
  position: relative;
}

.header {
  width: 1236px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  background-color: rgba(129, 129, 134, 0.25);

  img {
    width: 220px;
    height: 220px;
    border-radius: 10px;
    margin-left: 10px;
  }

  .content {
    align-self: start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 20px;

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50px;
    }

    h3 {
      color: white;
      font-size: 20px;
      margin-top: 10px;
    }

    .creator {
      margin-left: -7px;
      margin-top: 20px;
    }

    span {
      margin-left: 15px;
      color: white;
    }

    .description, .tags {
      margin-top: 5px;
      margin-left: 0;
      font-size: 14px;
      color: #a5a4a4;
      margin-bottom: 15px;
    }
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
