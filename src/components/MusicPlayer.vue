<template>
  <aplayer class="player" ref="aplayer" :autoplay="true" :audio="audio" @listAdd="addSong" :fixed="true" :lrcType="1"
           @ended="end"/>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "MusicPlayer",
  data() {
    return {}
  },
  mounted() {
    setTimeout(() => {
      console.log(this.audio);
    }, 5000)
  },
  computed: {
    ...mapState({
      audio: state => state.audio,
    })
  },
  methods: {
    end() {
      this.$refs.aplayer.play();
    },
    addSong() {
      const aplayer_app = this.$refs.aplayer;
      const countSong = this.$store.state.audio.length - 1;
      aplayer_app.switch(countSong);
      aplayer_app.play();
    }
  }
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
