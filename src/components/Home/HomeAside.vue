<template>
  <div class="main">
    <div class="recommend">
      <div class="title">推荐</div>
      <div class="content" v-for="(item,index) in recommendList" :key="index">{{item}}</div>
    </div>
    <div class="myMusic">
      <div class="title">个人小世界</div>
      <div class="content" v-for="(item,index) in myList" :key="index">{{item}}</div>
    </div>
    <div class="theme">
      <div class="title">美化</div>
      <div class="content">主题</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAside",
  data() {
    return {
      recommendList:['猜你喜欢','歌曲搜索'],
      myList:['我的收藏','我的电台','本地与下载','音乐硬盘','最近播放','默认列表'],

    }
  }
}
</script>

<style scoped lang="less">
.main {
  width: 266px;
  height: 742px;
  .recommend,.myMusic,.theme {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title {
      width: 187px;
      height: 23px;
      margin-bottom: 10px;
      font-size: 15px;
      color: #959292;
      margin-top: 8px;
    }
    .content {
      width: 180px;
      height: 21px;
      padding: 10px;
      font-size: 14.5px;
      margin-left: 6px;
      color: #bbbaba;
      transition: all 0.5s;
      border-radius: 8px;
    }
    .content:hover {
      background-color: rgb(90, 44, 66);
      cursor: pointer;
      color: white;
    }
  }
}
</style>
