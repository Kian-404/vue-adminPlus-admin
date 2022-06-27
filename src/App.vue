
<template>
  <el-button @click="toggleDark()">toggle theme</el-button>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/test">test</router-link>
  </div>
  <router-view></router-view>
</template>
<script steup lang="ts">
</script>
<script setup lang="ts">
import { toggleDark } from './composables/index'

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
