<template>
  <h1>Light Mate</h1>
  <ApiTest />
</template>

<script setup lang="ts">
import ApiTest from './components/ApiTest.vue'
import { onMessage } from './api/listener'
import { initReady } from './api/sender'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  window.addEventListener('message', onMessage)
  initReady()
})

onUnmounted(() => {
  window.removeEventListener('message', onMessage)
})
</script>

<style scoped>

</style>
