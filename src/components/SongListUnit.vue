<!--这个是推荐歌曲单个组件-->
<template>
  <div class="songListUnitMain">
    <div @click="goMusicListPage(item)" class="songListUnit" v-for="(item,index) in songListArr">
      <img :src="item.coverImgUrl" alt="">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongListUnit",
  props: ['songListArr'],
  methods: {
    goMusicListPage(item) {
      this.$router.push({name:"SongList",params:{id:item.id}});
    }
  }
}
</script>

<style scoped>
.songListUnitMain {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 95%;
  flex-wrap: wrap;
}

.songListUnit {
  width: 240px;
  padding: 0 5px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;
}

img {
  width: 220px;
  height: 220px;
  border-radius: 2px;
  box-shadow: 0 0 5px #747373;
  transition: all 0.3s;
}

img:hover {
  cursor: pointer;
  box-shadow: 0 3px 3px 3px #393333;
  transform: scale(1.04);
}

span {
  font-size: 12px;
  color: white;
  margin-top: 15px;
}


</style>
