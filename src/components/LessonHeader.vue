<template>
    <header class="header">
        <div class="header__container p-3 flex justify-between items-center border-b-2 border-white border-solid">
            <el-avatar :size="50" :src="circleUrl" class="cursor-pointer"/>
            <nav class="header__nav hidden md:block">
                <ul class="header__list flex items-center">
                    <li class="header__item ml-6">
                        <a href="#" class="header__link text-white text-lg transition-all hover:text-gray-600">Home</a>
                    </li>
                    <li class="header__item ml-6">
                        <a href="#" class="header__link text-white text-lg transition-all hover:text-gray-600">About</a>
                    </li>
                    <li class="header__item ml-6">
                        <a href="#" class="header__link text-white text-lg transition-all hover:text-gray-600">Contacts</a>
                    </li>
                </ul>
            </nav>
            <div class="header__burger block md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white cursor-pointer transition-all transition-duration-300 hover:text-white/50">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

const circleUrl: string = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';

</script>