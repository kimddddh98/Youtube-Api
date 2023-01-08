<template>
 <router-link to="/">HelloWorld</router-link>

 <router-link to="/test">  test</router-link>
 <router-view></router-view>


</template>

<script setup lang="ts">
import './assets/css/main.css'
import './assets/css/common.css'
import './assets/css/reset.css'
import './assets/scss/sub.scss'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
