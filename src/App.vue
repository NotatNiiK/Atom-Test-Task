<script setup lang="ts">
import { useStore } from './store';
const store = useStore();
console.log(store.count);

</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <el-button type="primary" plain>Primary</el-button>
</template>

