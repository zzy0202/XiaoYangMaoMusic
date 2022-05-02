<template>
  <div class="main">
    <MvUnit style="margin-top: 15px;" :mvData="mvData"></MvUnit>
  </div>
</template>

<script>
import {getLatestMv} from "@/api/MusicApi";
import MvUnit from "@/components/MvUnit";

export default {
  name: "HeaderMvPage",
  components: {
    MvUnit,
  },
  data() {
    return {
      mvData: [],
    }
  },
  async mounted() {
    let res;
    res = await getLatestMv();
    this.mvData = res.data;
  }
}
</script>

<style scoped lang="less">
.main {
  overflow: scroll;
  scrollbar-width: none;
  width: 1334px;
  height: 100%;
}

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
