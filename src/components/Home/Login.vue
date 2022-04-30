<template>
  <div class="loginMain">
    <div class="header" >
      <div class="title" style="font-size: 15px;">登录</div>
      <span @click="close" class="iconfont iconfont icon-close"></span>
    </div>
    <div class="choose" v-if="!loginSuccess">
      <span @click="showRight=true;">短信登录</span>
      <span @click="showRight=false;">密码登录</span>
      <div ref="activeLine" :class="showRight?'':'showLeft'" class="activeLine"></div>
    </div>
    <div class="input" v-if="!loginSuccess">
      <transition :name="showRight?'right':'left'" mode="out-in">
        <div class="inputMain" style="margin-top: 0.1rem;" v-if="!showRight" key="password">
          <input v-model="phoneNumber" placeholder="手机号" class="phoneNumber">
          <input v-model="password" placeholder="密码" class="password">
          <button class="loginSubmit" @click="loginPassword">登录</button>
        </div>
        <div class="inputMain" style="margin-top: 0.1rem;position: relative" v-if="showRight" key="verifyCode">
          <input v-model="phoneNumber" placeholder="手机号" class="phoneNumber">
          <input v-model="captcha" placeholder="验证码" class="password">
          <button :disabled="wait" :class="wait?'deny':''" class="verify" @click="getVerifyCode">{{ message }}</button>
          <button class="loginSubmit" @click="loginVerify">登录</button>
        </div>
      </transition>
    </div>
    <div class="loginSuccess" style="display: flex;justify-content: center;align-items: center;flex-direction: column" v-if="loginSuccess">
      <img style="margin: 0 auto" :src="'./imgs/xiaoyangmao.png'">
      <div style="font-size: 16px;text-align:center;;color: white">登录成功!你好我是小羊猫~</div>
    </div>
  </div>
</template>

<script>
import {checkLoginStatus, getUser, getVerifyCode} from "@/api/loginApi";
import {login} from "@/api/loginApi";

export default {
  name: "Login",
  data() {
    return {
      showRight: true,
      phoneNumber: '',
      password: '',
      captcha: '',
      message: "发送验证码",
      wait: false,
      cookie:null,
      loginSuccess:false,
    }
  },
  methods: {
    async getVerifyCode() {
      let res = await getVerifyCode({phone: this.phoneNumber});
      let number = 60, timer = null;
      this.message = '60s';
      this.wait = true;
      timer = setInterval(() => {
        number--;
        this.message = number + 's';
        if (number === 0) {
          this.wait = false;
          clearInterval(timer);
          this.message = '发送验证码';
        }
      }, 1000)
    },
    async loginPassword() {
      // let res = await login({phone: this.phoneNumber, password: this.password});
      // this.$store.commit('setUserLogin',res);
      let res=200;
      if(res === 200) {
        this.loginSuccess = true;
        let timer = setTimeout(()=>{
          this.$eventBus.$emit('login',false);
        },3000)
      }
    },
    async loginVerify() {
      let res = await login({phone: this.phoneNumber, captcha: this.captcha});
      console.log(res);
    },
    async getInfo() {
      console.log(this.$store.state.user);
      let temp = encodeURIComponent(this.cookie);
      this.cookie = this.$store.state.user.cookie;
      let res =await getUser();
      console.log(res);
    },
    close() {
      this.$eventBus.$emit('login', false);
    }
  }
}
</script>

<style scoped lang="less">
.loginMain {
  width: 550px;
  height: 350px;
  background-color: rgba(36, 18, 18, 0.4);
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -250px 0 0 -250px;
  z-index: 1;
  box-shadow: 0 4px 16px rgba(29, 16, 29, 0.5);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    background-color: rgba(27, 30, 47, 0.4);
    height: 40px;
    padding: 0 25px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    color: #d9d5d5;
  }

  .choose {
    position: relative;
    align-self: flex-start;
    margin-top: 10px;

    span {
      font-size: 15px;
      width: 90px;
      height: 25px;
      color: white;
      display: inline-block;
      margin-left: 28px;
      text-align: center;
    }

    span:hover {
      cursor: pointer;
    }

    .activeLine {
      margin-left: 28px;
      position: absolute;
      height: 3px;
      width: 90px;
      background-color: white;
      bottom: -10px;
      left: 0;
      transition: all 0.5s ease;
      transform: translateX(0);
    }

    .showLeft {
      transform: translateX(118px);
    }
  }

  .input {
    margin-top: 40px;

    .inputMain {
      position: relative;
    }

    input {
      width: 300px;
      height: 45px;
      font-size: 14px;
      margin: 24px auto 30px;
      display: block;
      border: none;
      border-bottom: 1px solid darkgray;
      color: white;
      background-color: rgba(36, 18, 18, 0);
      outline: none;
      input-placehoder: white;
    }

    .verify {
      font-size: 13px;
      background-color: rgba(51, 137, 245);
      border: none;
      color: white;
      width: 90px;
      height: 28px;
      position: absolute;
      bottom: 73px;
      right: 0;
      border-radius: 10px;
      outline: none;
    }

    .loginSubmit {
      font-size: 13px;
      background-color: rgba(51, 137, 245);
      border: none;
      color: white;
      width: 150px;
      height: 39px;
      border-radius: 10px;
      margin: 0 0 0 calc(50% - 75px);
    }

    .verify:hover, .loginSubmit:hover {
      cursor: pointer;
    }

    .deny:hover {
      cursor: not-allowed;
    }
  }
}

.iconfont:hover {
  cursor: pointer;
}

.left-enter-active, .left-leave-active {
  transition: all 0.3s;
}

.left-enter {
  opacity: 0;
  transform: translateX(-0.2rem);
}

.left-leave-to {
  opacity: 0;
  transform: translateX(0.2rem);
}

.right-enter-active, .right-leave-active {
  transition: all 0.3s;
}

.right-enter {
  opacity: 0;
  transform: translateX(0.2rem);
}

.right-leave-to {
  opacity: 0;
  transform: translateX(-0.2rem);
}
</style>
