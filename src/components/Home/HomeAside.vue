<template>
  <div class="main">
    <div class="recommend">
      <div class="title">推荐</div>
      <div class="content" @click="goPage(item)" v-for="(item,index) in recommendList" :key="index">{{ item }}</div>
    </div>
    <div class="myMusic">
      <div class="title">个人小世界</div>
      <div class="content" @click="goPage(item)" v-for="(item,index) in myList" :key="index">{{ item }}</div>
    </div>
    <div class="theme">
      <div class="title">个人歌单精选</div>
      <div @click="goSongList(item)" class="songList" v-for="(item,index) in playlist" :key="index">
        <img :src="item.coverImgUrl" alt="">
        <span>{{ item.name }}</span>
      </div>

    </div>
  </div>
</template>

<script>
import {getUserPlayList} from "@/api/loginApi";

export default {
  name: "HomeAside",
  data() {
    return {
      recommendList: ['猜你喜欢', '歌曲搜索'],
      myList: ['我的歌单', '我的电台', '本地与下载', '音乐硬盘', '最近播放', '默认列表'],
      playlist: [],
    }
  },
  methods: {
    goPage(item) {
      if (item === '我的歌单') {
        if(this.$store.state.user) {
          this.$router.push({path: '/mySongList'});
        }
        else {
          this.$eventBus.$emit('showMessage', {msg: '尚未登录,请登录后再查看个人歌单'})
        }
      } else if (item === '我的电台') {

      } else if (item === '本地与下载') {

      } else if (item === '猜你喜欢') {
        this.$router.push({path: '/'});
      }
    },
    goSongList(item) {
      this.$router.push({name: "SongList", params: {id: item.id}});
    },
    getJayChou(id) {
      this.$router.push({name: "SongList", params: {id: id}});
    }
  },
  async mounted() {
    if (this.$store.state.user) {
      let result = await getUserPlayList({uid: this.$store.state.user.account.id});
      this.playlist = result.playlist;
      console.log(this.playlist)
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 266px;
  height: 742px;
  overflow: scroll;
  scrollbar-width: none;

  .recommend, .myMusic, .theme {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
      width: 187px;
      height: 23px;
      margin-bottom: 10px;
      font-size: 15px;
      color: #959292;
      margin-top: 8px;
    }

    .content, .songList {
      width: 180px;
      height: 21px;
      padding: 10px;
      font-size: 14.5px;
      margin-left: 6px;
      color: #bbbaba;
      transition: all 0.5s;
      border-radius: 8px;

      img {
        width: 35px;
        height: 35px;
        margin: 10px 0;
        z-index: 99;
        border-radius: 7px;
      }
    }

    .songList {
      margin: 5px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      span {
        font-size: 14px;
        margin-left: 5px;
      }
    }

    .songList:hover {
      cursor: pointer;
    }

    .content:hover {
      background-color: rgb(90, 44, 66);
      cursor: pointer;
      color: white;
    }
  }
}

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
