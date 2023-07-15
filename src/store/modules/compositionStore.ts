import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * @compositionStore
 * this is a composition store
 */

export const usecompositionStore = defineStore(
  'compositionStore',
  () => {
    const count = ref<number>(0)

    const doubleCount = computed(() => count.value * 2)

    const increment = () => count.value++

    return {
      count,
      doubleCount,
      increment
    }
  },
  // pinia 持久化数据存储
  {
    persist: true
  }
)
