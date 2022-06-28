<template>
  <div>
     <el-button @click="toggleDark()">toggle theme</el-button>
  <div>
    <router-link to="/login">login</router-link>
  </div>
    home page
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
</template>

<script setup lang="ts">
import { toggleDark } from '../../composables/index'
</script>

<style scoped>

</style>