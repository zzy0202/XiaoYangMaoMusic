<!--这个是音乐列表里的元素组件-->
<template>
  <div class="newSongMain">
    <div class="songUnit" v-for="(item,index) in songData">
      <span style="margin-left: 5px;" class="songName">{{ item.name }}</span>
      <span class="songArtist" v-if="item.song">
        <span class="circle"></span>
        {{ item.song.artists[0].name }}
      </span>
      <span class="songArtist" v-else>
        <span class="circle"></span>
        {{ item.artists[0].name }}
      </span>
      <span class="songTime" v-if="item.song">{{ item.song.duration | timeFormat }}</span>
      <span class="songTime" v-else>{{ item.duration | timeFormat }}</span>

      <span class="album" v-if="item.song">{{ item.song.album.alias[0] }}</span>
      <span class="album" v-else>{{ item.album.name }}</span>

      <span class="operation">
        <span class="play iconfont icon-bofang" @click="playSong(item)"></span>
        <span class="video iconfont icon-yingpian" v-if="item.song&&item.song.mvid!==0"></span>
        <span class="download iconfont icon-xiazai"></span>
      </span>
    </div>
  </div>
</template>

<script>
import {getSongDetails, getSongLyric, getSongUrl, checkMusicAbility} from "@/api/MusicApi";

export default {
  name: "SongUnit",
  props: ['songData'],
  components: {},
  data() {
    return {
      isLoading: true,
    }
  },
  watch: {
    songData: {
      handler(newValue, oldValue) {
        this.songData = newValue;
      },
      immediate: true,
    }
  },
  filters: {
    timeFormat(value) {
      let time = value / 1000;
      let minute = time / 60;
      let sec = time % 60;
      sec = sec < 10 ? '0' + parseInt(sec) : parseInt(sec);
      return parseInt(minute) + ":" + sec;
    }
  },
  methods: {
    async playSong(item) {
      let songIsOk;
      try {
        songIsOk = await checkMusicAbility({id: item.id});
        console.log(songIsOk);
      } catch (err) {
        this.$eventBus.$emit('showMessage',{msg:'该歌曲暂无法使用，可能是没版权，未登录，或者需要网易Vip等原因'})
      }
      if(songIsOk) {
        let res = await getSongUrl({id: item.id});
        let lyric = await getSongLyric({id: item.id});
        let songDetails = await getSongDetails({ids: item.id});
        let audio = {
          name: '',
          url: '',
          cover: '',
          lrc: '',
          artist: '',
        }
        console.log(songDetails);
        console.log(lyric);
        console.log(res);
        audio.name = songDetails.songs[0].name;
        if (songDetails && !songDetails.song) {
          audio.artist = songDetails.songs[0].ar[0].name;
        } else {
          audio.artist = songDetails.song.artists[0].name;
        }
        audio.url = res.data[0].url;
        audio.lrc = lyric.lrc.lyric;
        audio.cover = songDetails.songs[0].al.picUrl;
        this.$store.commit('addSong', audio);
      }
    }
  },
  mounted() {
    console.log(this.songData);
  },
}
</script>

<style scoped lang="less">
.newSongMain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
}

.songUnit {
  width: 1200px;
  height: 46px;
  padding: 2px 18px;
  background-color: rgba(108, 109, 114, 0.25);
  border-bottom: 0.5px solid rgba(121, 106, 106, 0.3);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.songUnit:nth-child(1) {
  border-radius: 10px 10px 0 0;
}

.songUnit:nth-child(10) {
  border-radius: 0 0 10px 10px;
}

.songName {
  width: 466px;
}

.songArtist {
  width: 205px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .circle {
    display: block;
    width: 7px;
    height: 7px;
    background-color: #88d416;
    border-radius: 10px;
    margin-right: 7px;
  }
}

.songTime {
  flex: 0.5;
}

.album {
  flex: 1.5;
  overflow: hidden;
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
}

span {
  color: white;
  font-size: 14px;
}

.operation {
  flex: 0.8;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .iconfont {
    color: white;
    font-size: 26px;
    text-align: center;
    margin: 0 13px;
  }
}

.operation:hover {
  cursor: pointer;
}
</style>
