<script setup lang="ts">
import {ref} from 'vue';
import LessonHeader from './components/LessonHeader.vue';
import LessonMain from './components/LessonMain.vue';
import lessons from './api/lessons'
import { useStore } from './store';
const store = useStore();
console.log(store)
const lessonsList = ref(lessons);

</script>

<template>
  <div class="wrapper">
    <LessonHeader />
    <LessonMain :lessons-list="lessonsList"/>
  </div>
</template>

<style>
.wrapper{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

[class*='__container']{
  max-width: 1040px;
  margin: 0 auto;
}
</style>

