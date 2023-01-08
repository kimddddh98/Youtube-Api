<template>
  <div class="hello">
    <!-- <p v-if="refTest">{{state.testId}}</p> -->
    <div v-for="(item, index) of state.chart" :key="index" >
      {{index+1}}<img :src="item.thumbnails" alt="">
      {{item.title}}
      {{state.testId}}
      <iframe
            id="ytplayer"
            type="text/html"
            width="720"
            height="405"
            :src="item.id"
            frameborder="0"
            ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import {  reactive, defineProps, onMounted } from 'vue';
import axios from 'axios'

const props = defineProps({
  msg:String
})
props

const state = reactive<{
  testId:string
  chart:Youtube[]
}>
({
  testId:'asd',
  chart:[]
})

interface Youtube{
  id:string,
  title:string,
  thumbnails:string
}
onMounted(()=>{
  axios.get('https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL4fGSI1pDJn6jXS_Tv_N9B8Z0HTRVJE0m&part=snippet&maxResults=5&key=AIzaSyDhHWMON8oifUhQdsbG-EFjhBQO5KDztL8')
                    .then(res=>{
                        if(res.data.items){
                          res.data.items.forEach((e:any) => {
                            state.chart.push({
                              thumbnails:e.snippet.thumbnails.default.url, 
                              title:e.snippet.title, 
                              id:'https://www.youtube.com/embed/'+e.snippet.resourceId.videoId})
                          });
                        }
                        
                    })
})
console.log(state.chart)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
