<script setup>
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import IconArcade from '../components/icons/IconArcade.vue';
import IconAdvanced from '../components/icons/IconAdvanced.vue';
import IconPro from '../components/icons/IconPro.vue';
import SelectPlanItem from '../components/SelectPlanItem.vue';
import { usePlanStore } from '@/stores/plan';

const store = usePlanStore();
</script>

<script>
export default {
    props: {
        yearly: Boolean
    },
    data() {
        return {
            selectedPlan: 3,
            plans: [
                {
                    id: 1,
                    title: 'arcade',
                    monthlyPrice: 9,
                    yearlyPrice: 90,
                    peerName: ' peer/arcade',
                    peerDefinition: ' peer-checked/arcade:bg-alabaster peer-checked/arcade:border-blue-purplish'
                },
                {
                    id: 2,
                    title: 'advanced',
                    monthlyPrice: 12,
                    yearlyPrice: 120,
                    peerName: ' peer/advanced',
                    peerDefinition: ' peer-checked/advanced:bg-alabaster peer-checked/advanced:border-blue-purplish'
                },
                {
                    id: 3,
                    title: 'pro',
                    monthlyPrice: 15,
                    yearlyPrice: 150,
                    peerName: ' peer/pro',
                    peerDefinition: ' peer-checked/pro:bg-alabaster peer-checked/pro:border-blue-purplish'
                }
            ]
        }
    },
    methods: {
        nextStep () {
            const plan = this.plans.find(plan => plan.id === this.selectedPlan) 
            $store.$patch({
                plan: plan.title,
                monthlyPrice: plan.monthlyPrice,
                yearlyPrice: plan.yearlyPrice,
                yearly: this.yearly
            })
            //this.$router.push('/add-ons')
        },
        goBack () {
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <Card>
        <template #title>Select your plan</template>
        <template #description>You have the option of monthly or yearly billing.</template>
        <template #body>
            <fieldset class="lg:flex flex-wrap justify-between">
                <SelectPlanItem v-for="plan in plans" :planId="plan.id" :title="plan.title" :price="!yearly ? plan.monthlyPrice : plan.yearlyPrice" :peerName="plan.peerName" :peerDefinition="plan.peerDefinition" @selectedPlan="planId => selectedPlan = planId">
                    <IconArcade v-if="plan.title == 'arcade'" />
                    <IconAdvanced v-else-if="plan.title == 'advanced'" />
                    <IconPro v-else />
                    <template v-if="!yearly" #monthlyPrice>${{ plan.monthlyPrice }}/mo</template>
                    <template v-else #yearlyPrice>
                        ${{ plan.yearlyPrice }}/yr
                        <p class="text-blue-marine text-xs" >2 months free</p>
                    </template>
                </SelectPlanItem>
            </fieldset>         
            <div class="flex justify-center items-center bg-alabaster p-3 rounded-md mt-6">
                <span class="mr-3">Monthly</span>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer" :checked="yearly" @change="$emit('update:yearly', $event.target.checked)" aria-label="arcade checkbox">
                    <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-blue-marine peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3.5px] after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                </label>
                <span class="ml-3 text-gray-cool">Yearly</span>
            </div>
        </template>
        <template #buttons>
                <button class="text-gray-cool m-4 justify-self-start" @click="goBack">Go back</button>
                <Button :extraClasses="'bg-blue-marine justify-self-end'" :name="'Next Step'" @click="nextStep"/>
        </template>
    </Card>
</template>