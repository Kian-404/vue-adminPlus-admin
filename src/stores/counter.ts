import { defineStore } from 'pinia'

export const userCounterStore = defineStore('conter', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    increment() {
      this.count++;
    }
  }
})