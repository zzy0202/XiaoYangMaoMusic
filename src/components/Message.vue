<template>
  <transition name="slide-fade">
    <div class="main" style="z-index: 9999" v-if="show">
      <div style="display: flex;align-items: center;justify-content: flex-start;margin: 10px 10px;position: relative">
        <svg t="1651649175459" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2097" width="200" height="200">
          <path
              d="M512 0a512 512 0 0 0-512 512 512 512 0 0 0 512 512 512 512 0 0 0 512-512 512 512 0 0 0-512-512z"
              fill="#FD6B6D" p-id="2098"></path>
          <path
              d="M513.755429 565.540571L359.277714 720.018286a39.058286 39.058286 0 0 1-55.296-0.073143 39.277714 39.277714 0 0 1 0.073143-55.442286l154.331429-154.331428-155.062857-155.136a36.571429 36.571429 0 0 1 51.712-51.785143l365.714285 365.714285a36.571429 36.571429 0 1 1-51.785143 51.785143L513.755429 565.540571z m157.549714-262.582857a35.254857 35.254857 0 1 1 49.737143 49.737143l-106.057143 108.982857a35.254857 35.254857 0 1 1-49.883429-49.810285l106.203429-108.982858z"
              fill="#FFFFFF" p-id="2099"></path>
        </svg>
        <span>错误信息</span>
        <span @click="show=false;" class="iconfont icon-close close"></span>
      </div>
      <span class="message">{{ msg }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      show: false,
      msg: '',
    }
  },
  mounted() {
    this.$eventBus.$on('showMessage', (data) => {
      this.msg = data.msg;
      this.show = true;
      setTimeout(()=>{
        this.show = false;
      },4000);
    })
  }
}
</script>

<style scoped lang="less">
.main {
  width: 320px;
  height: 100px;
  background-color: white;
  border-radius: 5px;
}

svg {
  width: 25px;
  height: 25px;
}

span {
  font-size: 16px;
  display: inline-block;
  height: 16px;
  line-height: 16px;
  margin-left: 10px;
}

.message {
  margin-left: 40px;
  font-size: 14px;
  margin-top: 10px;
  margin-right: 10px;
}

.close {
  justify-self: flex-end;
  position: absolute;
  right: 10px;
  color: #b6b3b3;
  transition: all 0.5s;
}

.close:hover {
  color: black;
  cursor: pointer;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
