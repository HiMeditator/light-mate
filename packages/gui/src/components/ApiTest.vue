<template>
  <div>
    <h2>API Test</h2>
    <textarea
      v-model="message" rows="4"
      :class="{ invalid: !isJsonValid }"
    ></textarea>
    <button :disabled="!isJsonValid" @click="send()">Send</button>
  </div>
</template>

<script setup lang="ts">
import { sendMessage } from '@/api/sender';
import { ref, computed } from 'vue';
const message = ref('');

const isJsonValid = computed(() => {
  if (!message.value.trim()) {
    return true;
  }
  try {
    const parsed = JSON.parse(message.value);
    return parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed);
  } catch (e) {
    return false;
  }
});

function send() {
  try {
    if(!message.value.trim()) sendMessage({});
    else {
      const msgObj = JSON.parse(message.value)
      sendMessage(msgObj);
    }
  }
  catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
textarea {
  display: block;
  margin-bottom: 10px;
  resize: both;
  border-radius: 2px;
}

textarea:focus {
  outline: none;
  border: 1px solid var(--vscode-button-hoverBackground, #0258a8);
}


textarea.invalid {
  border: 1px solid red !important;
  background-color: #ffe6e6;
}
</style>
