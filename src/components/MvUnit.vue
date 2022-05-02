<template>
  <div class="MvUnitMainContainer">
    <div @click="goMvPage(item)" class="mvUnit" v-for="(item,index) in mvData" :key="index">
      <img alt="" :src="item.cover">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MvUnit",
  props: ['mvData'],
  mounted() {

  },
  methods: {
    goMvPage(item) {
      this.$router.push({path: `/mv/${item.id}`})
    }
  }
}
</script>

<style scoped lang="less">
.MvUnitMainContainer {
  display: flex;
  flex-wrap: wrap;
}

.mvUnit {
  width: 400px;
  height: 270px;
  padding: 10px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 390px;
    height: 230px;
    box-shadow: 0 0 5px #747373;
    transition: all 0.5s;
  }

  img:hover {
    box-shadow: 0 3px 10px 3px #312929;
    transform: scale(1.04);
    cursor: pointer;
  }

  span {
    margin-top: 15px;
    color: white;
  }
}
</style>
