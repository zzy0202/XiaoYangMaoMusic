<template>
  <div class="myVideoMain" v-if="!isLoading">
    <video controls="controls" :src="mvData.url"></video>
    <div class="commentContainer">

    </div>
  </div>
</template>

<script>
import {getMVUrl} from "@/api/MusicApi";

export default {
  name: "MvVideoPage",
  data() {
    return {
      isLoading: true,
      mvData: null,
      mvComment: null,
    }
  },
  async mounted() {
    getMVUrl({id: this.$route.params.id}).then(res => {
      this.mvData = res.data;
      this.isLoading = false;
    });
    getMVComment({id: this.$route.params.id}).then(res => {
      this.mvComment = res;
      console.log(res);
    })
  }
}
</script>

<style scoped lang="less">
.myVideoMain {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

video {
  display: block;
  margin: 0 auto;
  width: 1300px;
  height: 600px;
}
</style>
