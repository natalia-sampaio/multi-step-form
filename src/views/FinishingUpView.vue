<script setup>
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import FinishingUpItem from '../components/FinishingUpitem.vue';
import { usePlanStore } from '../stores/plan';

const planStore = usePlanStore()
</script>

<script>
export default {
    props: {
        yearly: Boolean
    },
    methods: {
        confirm() {
            this.$router.push('/thank-you');
        },
        goBack() {
            this.$router.push('/add-ons');
        },
        change() {
            this.$router.push('/select-plan');
        }
    }
}
</script>

<template>
    <Card>
        <template #title>Finishing up</template>
        <template #description>Double-check everything looks OK before confirming.</template>
        <template #body>
            <div class="bg-magnolia rounded-md p-4">
                <div class="flex justify-between border-b border-gray-light pb-2">
                    <div class="grid place-items-start">
                        <span class="capitalize">{{ planStore.plan }} (<span v-if="!yearly">Monthly</span><span v-else>Yearly</span>)</span>
                        <button class="text-gray-cool underline font-medium" @click="change">Change</button>              
                    </div>
                    <div>
                        <span v-if="!yearly">${{ planStore.monthlyPrice }}/mo</span>
                        <span v-else>${{ planStore.yearlyPrice }}/yr</span>
                    </div>
                </div>
                <p v-if="planStore.addOnsIsEmpty" class="text-gray-cool mt-2">No add-ons where selected.</p>
                <FinishingUpItem v-else v-for="addOn in planStore.addOns">
                    <template #addOn>{{ addOn.title }}</template>
                    <template #monthlyPrice v-if="!yearly">+${{ addOn.monthlyPrice }}/mo</template>
                    <template #yearlyPrice v-else>+${{ addOn.yearlyPrice }}/yr</template>
                </FinishingUpItem>
            </div>
            <div>
                <div class="flex justify-between p-4">
                    <span class="text-gray-cool">Total (<span v-if="!yearly">per month</span><span v-else>per year</span>)</span>
                    <div class="text-blue-purplish">
                        <span v-if="!yearly">+${{ planStore.totalMonthlyPrice }}/mo</span>
                        <span v-else>+${{ planStore.totalYearlyPrice }}/yr</span>
                    </div>
                </div>
            </div>
        </template>
        <template #buttons>
            <button class="text-gray-cool m-4 justify-self-start" @click="goBack">Go back</button>
            <Button :extraClasses="'bg-blue-purplish justify-self-end'" :name="'Confirm'" @click="confirm"/>
        </template>
    </Card>
</template>