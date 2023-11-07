import { defineStore } from 'pinia'

export const useCounterStore = defineStore('Counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return {
    count,
    increment
  }
})
