<script setup>
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import IconArcade from '../components/icons/IconArcade.vue';
import IconAdvanced from '../components/icons/IconAdvanced.vue';
import IconPro from '../components/icons/IconPro.vue';
import { useRouter } from 'vue-router';
import SelectPlanItem from '../components/SelectPlanItem.vue';

const router = useRouter();

const nextStep = () => {
    router.push('/add-ons')
}

const goBack = () => {
    router.push('/')
}
</script>

<script>
export default {
    props: {
        yearly: Boolean
    }
}
</script>

<template>
    <Card>
        <template #title>Select your plan</template>
        <template #description>You have the option of monthly or yearly billing.</template>
        <template #body>
            <fieldset class="lg:flex flex-wrap justify-between">
                <SelectPlanItem title="arcade" peerName="peer/arcade" peerDefinition="peer-checked/arcade:bg-alabaster peer-checked/arcade:border-blue-purplish">
                    <IconArcade />
                    <template v-if="!yearly" #monthlyPrice>$9/mo</template>
                    <template v-else #yearlyPrice>$90/yr</template>
                </SelectPlanItem>
                <SelectPlanItem title="advanced" peerName="peer/advanced" peerDefinition="peer-checked/advanced:bg-alabaster peer-checked/advanced:border-blue-purplish">
                    <IconAdvanced />
                    <template v-if="!yearly" #monthlyPrice>$12/mo</template>
                    <template v-else #yearlyPrice>$120/yr</template>
                </SelectPlanItem>
                <SelectPlanItem title="pro" peerName="peer/pro" peerDefinition="peer-checked/pro:bg-alabaster peer-checked/pro:border-blue-purplish">
                    <IconPro />
                    <template v-if="!yearly" #monthlyPrice>$15/mo</template>
                    <template v-else #yearlyPrice>$150/yr</template>
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