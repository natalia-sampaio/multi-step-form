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
    count: (state) => state.addOns.length,
    addOnsIsEmpty: (state) => state.count === 0,
    totalAddOnsMonthlyPrice() {
      return this.addOns.reduce((acc, addOn) => acc + addOn.monthlyPrice, 0)
    },
    totalAddOnsYearlyPrice() {
      return this.addOns.reduce((acc, addOn) => acc + addOn.yearlyPrice, 0)
    },
    totalMonthlyPrice() {
      return this.totalAddOnsMonthlyPrice + this.monthlyPrice
    },
    totalYearlyPrice() {
      return this.totalAddOnsYearlyPrice + this.yearlyPrice
    }
  }
})
