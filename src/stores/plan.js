import { defineStore } from 'pinia'

export const usePlanStore = defineStore('plan', {
  state: () => {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      plan: "pro",
      monthlyPrice: 15,
      yearlyPrice: 150,
      yearly: false,
      addOns: []
    }
  },
  getters: {
    count() {
      return this.addOns.length
    }
  }
})
