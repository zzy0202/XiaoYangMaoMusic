<template>
  <aplayer class="player" :audio="audio" :autoplay="false" :lrcType="1" :fixed="true"/>
</template>

<script>
export default {
  name: "MusicPlayer",
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

</style>
