<template>
  <div class="main">
    <Loading class="loading" v-if="loading"></Loading>
    <MvUnit style="margin-top: 15px;" :mvData="mvData"></MvUnit>
  </div>
</template>

<script>
import {getLatestMv} from "@/api/MusicApi";
import MvUnit from "@/components/MvUnit";
import Loading from "@/components/Loading";
export default {
  name: "HeaderMvPage",
  components: {
    Loading,
    MvUnit,
  },
  data() {
    return {
      mvData: [],
      loading:true,
    }
  },
  async mounted() {
    let res;
    res = await getLatestMv();
    this.loading = false;
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
  position: relative;
}

::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
