<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const { increment } = counterStore
</script>

<template>
  <div pt-20vh all:transition-200 flex="~ col gap-y-xl" items-center>
    <span>hello world !</span>
    <div flex="~ gap-x-xl" items-center>
      <span>{{ count }}</span>
      <a-button @click="increment">
        <div flex items-center>
          <i i-carbon-thumbs-up></i>
          click me!
        </div>
      </a-button>
    </div>
  </div>
</template>
