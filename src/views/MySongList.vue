<template>
  <div class="mySongListMain">
    <Loading class="loading" v-if="isLoading"></Loading>
    <SongListUnit v-else :songListArr="songListArr"></SongListUnit>
  </div>
</template>

<script>
import {getUserPlayList} from "@/api/loginApi";
import SongListUnit from "@/components/SongListUnit";
import Loading from "@/components/Loading";
import {mapState} from "vuex";

export default {
  name: "MySongList",
  components: {SongListUnit, Loading},
  data() {
    return {
      songListArr: [],
      isLoading:true,
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    })
  },
  async mounted() {
    let result = await getUserPlayList({uid: this.user.account.id});
    this.songListArr = result.playlist;
    console.log(this.songListArr);
    setTimeout(()=>{
      this.isLoading = false;
    },2000)
  }
}
</script>

<style scoped lang="less">
.mySongListMain {
  width: 1332px;
  overflow: scroll;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
