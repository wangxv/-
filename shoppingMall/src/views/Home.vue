<template>
  <div>这个是一个页面</div>
</template>
<script setup>
import {onMounted} from 'vue';
import * as api from '../api/index.js';

onMounted(async () => {
  const data = api.getHomePage();
  console.log(data);
})
</script>
<style lang="less" scoped>
  
</style>