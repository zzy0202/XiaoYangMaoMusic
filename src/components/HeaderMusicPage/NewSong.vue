<template>
  <div class="newSongMainContainer">
    <SongUnit :songData="songData"></SongUnit>
  </div>
</template>

<script>
import {getNewSongRecommend} from "@/api/MusicApi";
import SongUnit from "@/components/SongUnit";

export default {
  name: "NewSong",
  components: {SongUnit},
  data() {
    return {
      songData: [],
    }
  },
  async mounted() {
    let res = await getNewSongRecommend({limit: 10});
    this.songData = res.result;
    console.log(res);
    console.log(this.songData);
  },
  filters: {
    timeFormat(value) {
      let time = value / 1000;
      let minute = time / 60;
      let sec = time % 60;
      sec = sec < 10 ? '0' + sec : sec;
      return parseInt(minute) + ":" + parseInt(sec);
    }
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
  flex: 2.5;
}

.songArtist {
  flex: 1;
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
