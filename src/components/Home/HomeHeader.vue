<template>
  <div class="main">
    <!--  用来显示undo,redo键和刷新  -->
    <div class="webFunction">
      <span class="iconfont icon-fanhui" style="margin-left: 30px;"></span>
      <span class="iconfont icon-qianjin"></span>
      <span class="iconfont icon-shuaxin" style="margin-left: 15px;"></span>
    </div>
    <div class="categories">
      <span v-for="(item,i) in categories" :key="i" :class="i===active?'active':''"
            @click="moveBar(i)">{{ item }}</span>
      <div class="moveBar" :style="`transform: translateX(${move}px)`"></div>
    </div>
    <div class="search">
      <span class="iconfont icon-sousuo"></span>
      <input type="text" placeholder="搜索歌曲">
    </div>
    <div class="userPart" v-if="!isLogin">
      <svg t="1651167295788" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="18417" width="200" height="200">
        <path
            d="M889.828994 749.637494c-1.204099-1.720141-119.205779-165.821603-119.205779-287.435579 0-168.401814-76.202251-254.752898-162.725349-286.919536L607.897867 159.973123c0-52.980346-43.175542-95.983874-95.983874-95.983874S415.930119 107.164791 415.930119 159.973123l0 15.309256c-86.523098 32.166639-162.725349 118.517722-162.725349 286.919536 0 121.269948-118.00168 285.199395-119.205779 286.919536-5.332437 7.568621-7.396607 16.857383-5.332437 25.974131 2.064169 8.944734 7.912649 16.685369 15.997312 20.985721 5.676466 3.096254 107.336805 57.280699 233.423148 84.458928 21.32975 66.397447 73.966068 111.29313 133.654964 111.29313s112.325214-44.895683 133.654964-111.29313c126.086343-27.178229 227.746682-81.018646 233.423148-83.942886 8.256677-4.472367 13.933143-12.040988 16.169326-20.985721C897.225601 766.666891 895.333445 757.206115 889.828994 749.637494zM479.919368 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625 17.545439 0 31.994625 14.449185 31.994625 31.994625l0 0.860071c-7.224593-0.516042-14.277171-0.860071-21.32975-0.860071l-21.32975 0c-7.052579 0-14.105157 0.344028-21.32975 0.860071L479.919368 159.973123 479.919368 159.973123zM511.913993 928.016126c-22.361834 0-43.175542-13.417101-57.968755-35.262893 19.26558 2.064169 38.531161 3.268268 57.968755 3.268268s38.875189-1.376113 57.968755-3.268268C555.089535 914.599026 534.275827 928.016126 511.913993 928.016126z"
            p-id="18418" fill="#ffffff"></path>
      </svg>
      <span @click="login">登录</span>
    </div>
    <div class="userPart" v-if="isLogin">
      <svg t="1651167295788" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="18417" width="200" height="200">
        <path
            d="M889.828994 749.637494c-1.204099-1.720141-119.205779-165.821603-119.205779-287.435579 0-168.401814-76.202251-254.752898-162.725349-286.919536L607.897867 159.973123c0-52.980346-43.175542-95.983874-95.983874-95.983874S415.930119 107.164791 415.930119 159.973123l0 15.309256c-86.523098 32.166639-162.725349 118.517722-162.725349 286.919536 0 121.269948-118.00168 285.199395-119.205779 286.919536-5.332437 7.568621-7.396607 16.857383-5.332437 25.974131 2.064169 8.944734 7.912649 16.685369 15.997312 20.985721 5.676466 3.096254 107.336805 57.280699 233.423148 84.458928 21.32975 66.397447 73.966068 111.29313 133.654964 111.29313s112.325214-44.895683 133.654964-111.29313c126.086343-27.178229 227.746682-81.018646 233.423148-83.942886 8.256677-4.472367 13.933143-12.040988 16.169326-20.985721C897.225601 766.666891 895.333445 757.206115 889.828994 749.637494zM479.919368 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625 17.545439 0 31.994625 14.449185 31.994625 31.994625l0 0.860071c-7.224593-0.516042-14.277171-0.860071-21.32975-0.860071l-21.32975 0c-7.052579 0-14.105157 0.344028-21.32975 0.860071L479.919368 159.973123 479.919368 159.973123zM511.913993 928.016126c-22.361834 0-43.175542-13.417101-57.968755-35.262893 19.26558 2.064169 38.531161 3.268268 57.968755 3.268268s38.875189-1.376113 57.968755-3.268268C555.089535 914.599026 534.275827 928.016126 511.913993 928.016126z"
            p-id="18418" fill="#ffffff"></path>
      </svg>
      <span style="font-size: 15px" @click="login">退出账户</span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {getLoginStatus} from "@/api/loginApi";
export default {
  name: "HomeHeader",
  data() {
    return {
      categories: ['音乐', 'MV', '电台', '开发中'],
      move: 0,
      active: 0,
      isLogin:false,
    }
  },
  computed:{
    ...mapState({
      user:(state)=>state.user,
    }),
  },
  async mounted() {
    //此时已经在登录状态了
    if(this.user){
      let res = await getLoginStatus();
      if(res.data.code===200) {
        this.isLogin = true;
      }
    }
    //否则等到eventBus触发登录成功事件时on响应
    else {

    }
  },
  watch:{
    $route:{
      handler:function (newVal,oldVal){
        let moveObj = new Map();
        moveObj.set('HeaderMusicPage',0);
        moveObj.set('HeaderMVPage',1);
        moveObj.set('HeaderRadioPage',2);
        this.move = moveObj.get(newVal.name)*114.2;
        this.active = moveObj.get(newVal.name);
      },
      immediate:true,
    }
  },
  methods: {
    moveBar(index) {
      this.active = index;
      this.move = 114.2 * (index);
      if(index===0) {
        this.$router.push({name:"HeaderMusicPage"});
      }
      else if(index===1) {
        this.$router.push({name:"HeaderMVPage"})
      }
      else if(index===2) {
        this.$router.push({name:"HeaderRadioPage"})
      }
      else if(index===3) {

      }
    },
    login() {
      this.$eventBus.$emit('login',true);
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .webFunction {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 0.6;
    height: 100%;

    span {
      color: lightgrey;
      font-size: 22px;
      margin: 0 9px;
      box-shadow: 0 0 0 transparent;
      transition: all 0.5s;
    }

    span:hover {
      color: white;
      cursor: pointer;
    }
  }

  .categories {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    span {
      flex: 1;
      text-align: center;
      color: #959292;
      font: 15px sans-serif;
      transition: all 0.5s;
    }

    span:hover {
      cursor: pointer;
    }

    .moveBar {
      width: 114.2px;
      height: 2px;
      background-color: white;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all 0.5s;
    }

    .active {
      color: white;
    }
  }

  .search {
    flex: 1;
    height: 100%;
    background-color: rgba(31, 32, 47, 0.66);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 100px;

    span {
      color: grey;
      font-size: 18px;
      line-height: 18px;
      margin-left: 10px;
    }

    input {
      height: 100%;
      border: none;
      flex: 1;
      font-size: 15px;
      margin-left: 10px;
      color: white;
      input-placehoder: white;
      background-color: rgba(31, 32, 47, 0.66);
      outline: none;
    }
  }

  .userPart {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
      text-align: center;
    }

    span {
      color: #959292;
      text-align: center;
      margin-right: 30px;
      margin-left: 15px;
      transition: all 0.5s;
    }
    span:hover {
      color: ghostwhite;
      cursor: pointer;
    }
  }
}
</style>
