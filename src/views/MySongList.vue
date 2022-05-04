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
      isLoading: true,
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
    setTimeout(() => {
      this.isLoading = false;
    }, 700)
  }
}
</script>

<style scoped lang="less">
.mySongListMain {
  width: 1332px;
  overflow: scroll;
  scrollbar-width: none;
}

::v-deep .el-tabs__nav-wrap::after {
  background-color: transparent;
}

::v-deep .el-tabs__active-bar {
  background-color: white;
}

::v-deep .el-tabs__item {
  color: #959592;
}

::v-deep .el-tabs__item.is-active {
  color: white;
}

::v-deep .el-tabs__item:hover {
  color: white;
}

::v-deep .el-pager li,
::v-deep .el-pagination .btn-next,
::v-deep .el-pagination .btn-prev,
::v-deep .el-pager li.btn-quicknext,
::v-deep .el-pager li.btn-quickprev {
  background: none;
  color: white;
}

::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: transparent;
}


::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}


</style>
