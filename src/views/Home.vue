<template>
  <div class="home">
    <transition name="fade">
      <login v-if="showLogin"></login>
    </transition>
    <div class="bgImage">
      <video autoplay="autoplay" loop="loop" muted="muted">
        <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4">
      </video>
    </div>
    <div class="mainContent">
      <HomeHeader></HomeHeader>
      <div class="bottom">
        <HomeAside></HomeAside>
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view style="height: 742px"></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
    <MusicPlayer></MusicPlayer>
  </div>
</template>

<script>
import HomeHeader from "@/components/Home/HomeHeader";
import HomeAside from "@/components/Home/HomeAside";
import Login from "@/components/Home/Login";
import MusicPlayer from "@/components/MusicPlayer";
export default {
  name: 'Home',
  mounted() {
    this.$eventBus.$on('login', (show) => {
      this.showLogin = show;
    })
  },
  components: {
    MusicPlayer,
    Login,
    HomeAside,
    HomeHeader
  },
  data() {
    return {
      showLogin: false,
    }
  }
}
</script>

<style scoped lang="less">
.home {
  width: 100vw;
  height: 100vh;
}

.bgImage {
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
    position: fixed;
    left: 0;
    top: 0;
  }
}

.mainContent {
  width: 1600px;
  height: 800px;
  background-color: rgba(82, 18, 34, 0.5);
  position: fixed;
  top: 47%;
  left: 50%;
  margin: -400px 0 0 -800px;
  border-radius: 20px;
}

.nav {
  width: 228.5px;
  height: 742px;
}

.bottom {
  display: flex;
}

.content {
  flex: 1;
  height: 742px;
  background-color: orange;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.player {
  //width: 200px;
  //height: 40px;
}
</style>
