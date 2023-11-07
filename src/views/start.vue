<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
</script>

<template>
  <div pt-20vh all:transition-200 flex="~ col gap-y-xl" items-center>
    <span>hello world !</span>
    <div flex="~ gap-x-xl" items-center>
      <span>{{ count }}</span>
      <button rounded h-8 w-20 custom-btn @click="counterStore.increment">
        click me!
      </button>
    </div>
  </div>
</template>
