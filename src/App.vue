<script setup lang="ts">
import {ref, reactive, readonly, onMounted} from 'vue'
import fetchCount from "../fetchCount";

interface AppInfo {
  name: string,
  content: string
}

const appInfo: AppInfo = reactive({
  name: 'Counter',
  content: 'hello from some app!'
})

const count = ref<number | null>(null)

onMounted(() => {
  fetchCount((initialCount) => {
    count.value = initialCount
  })
})

const addCount = (): void => {
  count.value!++
}
</script>

<template>
  <div>
    <h2>{{ appInfo.name }}</h2>
    <h3>{{ appInfo.content }}</h3>
    <h4>{{ count }}</h4>
    <button @click="addCount">
      Press to increase counter
    </button>
    <button @click="$console.log(count)">
      Console log counter
    </button>
  </div>
</template>

<style scoped>
  body {
    background-color: #888888;
  }
</style>
