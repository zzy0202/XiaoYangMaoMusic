<template>
  <div class="HeaderMusicMain">
    <Banner style="height: 240px"></Banner>
    <div class="title">最新歌曲</div>
    <NewSong style="flex-shrink: 0"></NewSong>
    <div class="title">推荐歌单</div>
    <RecommendSongList style="flex-shrink: 0"></RecommendSongList>
  </div>
</template>

<script>
import Banner from "@/components/HeaderMusicPage/Banner";
import NewSong from "@/components/HeaderMusicPage/NewSong";
import RecommendSongList from "@/components/HeaderMusicPage/RecommendSongList";
export default {
  name: "HeaderMusicPage",
  components:{
    RecommendSongList,
    Banner,NewSong,
  },
}
</script>

<style scoped lang="less">
 .HeaderMusicMain {
   width: 1334px;
   height: 742px;
   background-color: rgba(36, 39, 59, 0.4);
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   overflow:scroll;
   scrollbar-width: none;
 }
 .title {
   flex-shrink: 0;
   align-self: flex-start;
   margin-left: 35px;
   margin-top: 25px;
   font-size: 15px;
   color: rgba(239, 239, 239, 0.71);
 }
 .test {
   width: 800px;
   height: 900px;
   background-color: pink;
   flex-shrink: 0;
 }
 ::-webkit-scrollbar {
   display: none; /* Chrome Safari */
 }
</style>
