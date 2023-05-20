<template>
  <main class="main pt-12 pb-2 px-3">
    <div class="main__tip" :class="{'active-tip': isTipActive}">
      Доступний наступний урок!
    </div>
    <div class="main__container py-3">
      <h1 class="main__title text-3xl font-bold text-white uppercase mb-5">Atom-Test-Task</h1>
      <div class="main__lessons lessons">
        <div class="lessons__body block lg:flex justify-between">
          <div class="lessons__video mb-4">
            <div class="lessons__lesson h-80" v-if="currentLesson">
              <video :src="currentLesson.video_url" ref="videoPlayer" @play="startTimer" @pause="stopTimer" controls></video>
            </div>
            <div class="lesson__title text-white font-bold uppercase text-2xl py-2 underline" v-if="currentLesson">{{ currentLesson.title }}</div>
          </div>
          <div class="lessons__sidebar sidebar">
            <ul class="sidebar__list">
              <li
                class="sidebar__item bg-white p-2 flex items-center mb-2 cursor-pointer transition-all duration-300 hover:bg-slate-300"
                :class="{'unavailable': lesson.isDisable, 'checked': lesson.id === currentLesson?.id}"
                v-for="lesson in lessonsList"
                :key="lesson.id"
                @click="changeCurrentLesson(lesson)"
              >
                <div class="sidebar__image grow-0 shrink-0 basis-12 h-12 mr-4">
                  <img src="../assets/poster.png" alt="poster" class="w-full h-full" />
                </div>
                <div class="sidebar__text text-lg font-bold">{{ lesson.title }}</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="lessons__description py-4 max-w-lg">
          <h2 class="lessons__title text-white font-bold text-xl mb-4">В цьому епізоді ви дізнаєтесь:</h2>
          <div class="lessons__text text-white text-lg" v-html="currentLesson?.description"></div>
        </div>
      </div>
    </div>
  </main>
</template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  
  interface Lesson {
    id: number;
    title: string;
    subtitle: string;
    video_url: string;
    video_time: number;
    description: string;
    isDisable?: boolean;
  }
  
  const props = defineProps({
    lessonsList: {
      type: Array as () => Lesson[],
      required: true,
      default() {
        return [];
      },
    },
  });
  
  const currentTime = ref(0);
  const currentLesson = ref<Lesson | null>(null);
  const isTipActive = ref(false);
  const intervalId = ref(0);
  
  watch(currentLesson, () => {
    currentTime.value = 0;
  });
  
  onMounted(() => {
    currentLesson.value = props.lessonsList[0];
    setTimeout(() => {
      const videoElement = document?.querySelector('video');
      console.log(videoElement)
      if (videoElement) {
        videoElement.addEventListener('seeked', () => {
          console.log(1)
          currentTime.value = Math.floor(videoElement.currentTime);
      });
    }
    }, 0)
  });
  
  function startTimer() {
    intervalId.value = setInterval(() => {
      if (currentLesson.value && currentTime.value === currentLesson.value.video_time) {
        const nextLessonId: number = currentLesson.value.id + 1;
        const nextLesson = props.lessonsList[nextLessonId];
        if (!nextLesson) {
          return;
        }
        if (nextLesson.isDisable) {
          isTipActive.value = true;
          setTimeout(() => {
            isTipActive.value = false;
          }, 2000);
        }
        nextLesson.isDisable = false;
      }
      currentTime.value++;
    }, 1000);
  }
  
  function stopTimer() {
    clearInterval(intervalId.value);
  }
  
  function changeCurrentLesson(lesson: Lesson) {
    currentLesson.value = lesson;
  }
  </script>
  
  <style scoped>
  .lessons__lesson {
    width: 560px;
  }

  @media all and (max-width: 1024px) {
    .lessons__lesson {
        width: 100%;
        margin-bottom: 30px;
        height: auto;
    }
  }
  
  .sidebar {
    width: 420px;
  }

  @media all and (max-width: 1024px) {
    .sidebar{
      width: 100%;
    }
  }
  
  .unavailable {
    pointer-events: none;
    background: #00000056;
    color: #ffffff86;
  }
  
  .main__tip {
    position: fixed;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    font-weight: 700;
    padding: 20px;
    border-radius: 10px;
    color: #142444;
    background: #fff;
    transition: all 0.4s ease 0s;
  }
  
  .active-tip {
    top: 40px;
  }
  
  .checked {
    background: rgb(156 163 175);
  }
  </style>