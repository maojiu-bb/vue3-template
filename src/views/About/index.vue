<template>
  <div class="index">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="" />
    </div>
    <p>This is About Page</p>

    <Test></Test>

    <div style="margin-top: 25px">
      <span>count:{{ count }}</span>
      <button class="add" @click="add">add</button>
    </div>

    <button class="link" @click="goAboutPage">About Page</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCount } from '@/hooks/useCount'
const { count, add } = useCount()
const router = useRouter()
const goAboutPage = () => router.push('/home')
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
</style>
