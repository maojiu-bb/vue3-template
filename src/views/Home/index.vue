<template>
  <div class="index">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="" />
    </div>
    <p>Welcome to use Vue3-Template</p>

    <Test></Test>

    <button class="link" @click="goAboutPage">About Page</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goAboutPage = () => router.push('/about')
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
</style>
