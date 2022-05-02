<template>
  <div class="loadingMain">
    <img :src="'/imgs/xiaoyangmao.png'">
    <span>小羊猫正在努力加载中</span>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
.loadingMain {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -100px;
}
img {
  width: 200px;
  height: 200px;
}
span {
  color: white;
  font-size: 17px;
}
</style>
