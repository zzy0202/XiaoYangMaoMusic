<template>
  <div class="HeaderMusicmain">
    <Banner style="height: 240px"></Banner>
    <div class="newSong">

    </div>
  </div>
</template>

<script>
import Banner from "@/components/HeaderMusicPage/Banner";
export default {
  name: "HeaderMusicPage",
  components:{
    Banner,
  },
}
</script>

<style scoped lang="less">
 .HeaderMusicmain {
   width: 1334px;
   height: 100%;
   background-color: rgba(36, 39, 59, 0.3);
   border-radius: 20px;
   display: flex;
   justify-content: center;
   align-items: flex-start;
 }
</style>
