import { defineStore } from 'pinia'

/**
 * @optionStore
 * this is a option store
 */

export const useoptionStore = defineStore('optionStore', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  },
  // pinia 持久化数据存储
  persist: true
})
