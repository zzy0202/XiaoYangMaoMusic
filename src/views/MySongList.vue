<template>
  <div class="mySongListMain">
    <SongListUnit :songListArr="songListArr"></SongListUnit>
  </div>
</template>

<script>
import {getUserPlayList} from "@/api/loginApi";
import SongListUnit from "@/components/SongListUnit";
import {mapState} from "vuex";

export default {
  name: "MySongList",
  components: {SongListUnit},
  data() {
    return {
      songListArr: [],
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
