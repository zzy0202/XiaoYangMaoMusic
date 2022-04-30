<template>
  <div class="main">
    <div class="iconfont icon-fanhui" style="margin-right: 10px;" @click="moveLeft"></div>
    <div class="banner">
      <div :class="index===current?'active':''||index===left?'activeLeft':''||index===right?'activeRight':''"
           class="bannerImg" v-for="(item,index) in bannerArray"
           :style="`background-image:url('${item.imageUrl}')`"
      >
      </div>
    </div>
    <div class="iconfont icon-qianjin" style="margin-left: 10px;" @click="moveRight"></div>
  </div>
</template>

<script>
import {getBanner} from "@/api/MusicApi";

export default {
  name: "Banner",
  data() {
    return {
      bannerArray: [],
      current: 0,
      left: 5,
      right: 1,
    }
  },
  async mounted() {
    let res = await getBanner({type: 0});
    this.bannerArray = res.banners.splice(1, 7);
    setInterval(()=>{
      this.moveRight();
    },5000)
  },
  methods:{
    moveLeft() {
      this.left--;
      if(this.left===-1) {
        this.left=5;
      }
      this.current--;
      if(this.current===-1) {
        this.current=5;
      }
      this.right--;
      if(this.right===-1) {
        this.right=5;
      }
    },
    moveRight() {
      this.left++;
      if(this.left===6) {
        this.left=0;
      }
      this.current++;
      if(this.current===6) {
        this.current=0;
      }
      this.right++;
      if(this.right===6) {
        this.right=0;
      }
    }
  }
}
</script>

<style scoped lang="less">
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240px;
  margin-top: 10px;
}
.banner {
  width: 1180px;
  height: 240px;
  position: relative;
}
.iconfont {
  font-size: 40px;
  line-height: 100%;
  color: #c6c5c5;
  transition: all 0.5s;
}
.iconfont:hover {
  cursor: pointer;
  color: white;
}
.bannerImg {
  width: 600px;
  height: 240px;
  background-size: 100% 100%;
  position: absolute;
  left: 50%;
  margin: 0 0 0 -300px;
  background-repeat: no-repeat;
  border-radius: 8px;
  transition: all 0.8s;
  transform: translateX(0) scale(0);
  opacity: 0;
}

.active {
  z-index: 999;
  transform: translateX(0) scale(1);
  opacity: 1;
}

.activeLeft {
  transform: translateX(-320px) scale(0.9);
  opacity: 0.5;
}

.activeRight {
  transform: translateX(320px) scale(0.9);
  opacity: 0.5;
}
</style>
