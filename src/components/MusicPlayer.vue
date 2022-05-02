<template>
  <aplayer class="player" ref="aplayer" :autoplay="true" :audio="audio" :fixed="true" :lrcType="1" />
</template>

<script>
export default {
  name: "MusicPlayer",
  mounted() {
    this.$eventBus.$on('playSong', (res) => {
      console.log('我是APLAYER');
      console.log(res);
      this.audio.name = res.songDetails.name;
      if(res.songDetails&&!res.songDetails.song) {
        this.audio.artist = res.songDetails.artists[0].name;
      }
      else {
        this.audio.artist = res.songDetails.song.artists[0].name;
      }
      this.audio.url = res.res.data[0].url;
      this.audio.lrc = res.lyric.lrc.lyric;
      this.audio.cover = res.songDetailsCover.al.picUrl
      // this.audio.cover = res.res.
      const aplayerApp = this.$refs.aplayer;
      aplayerApp.play();
      aplayerApp.play();
    })
  },
  data() {
    return {
      audio: {
        name: '',
        artist: '',
        url: '',
        cover: '',
        lrc: "",
      },
    }
  },
}
</script>

<style scoped>
.player {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
