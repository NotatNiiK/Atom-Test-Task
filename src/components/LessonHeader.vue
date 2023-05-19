<template>
    <header class="header">
        <div class="header__container py-3 flex justify-between items-center border-b-2 border-white border-solid">
            <el-avatar :size="50" :src="circleUrl" class="cursor-pointer"/>
            <nav class="header__nav">
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
        </div>
    </header>
</template>

<script setup lang="ts">

const circleUrl: string = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';

</script>