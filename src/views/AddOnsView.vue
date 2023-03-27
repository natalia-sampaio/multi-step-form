<script setup>
import { useRouter,  } from 'vue-router';
import AddOnItem from '../components/AddOnItem.vue';
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';

const router = useRouter();

const nextStep = () => {
    router.push('/finishing-up')
}

const goBack = () => {
    router.push('/select-plan')
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
        <template #title>Pick add-ons</template>
        <template #description>Please provide your name, email address and phone number.</template>
        <template #body>
            <AddOnItem title="Online service" description="Access to multiplayer games" idName="onlineService">
                <template #monthlyPrice v-if="!yearly">+$1/mo</template>
                <template #yearlyPrice v-else>+$10/yr</template>
            </AddOnItem>
            <AddOnItem title="Larger storage" description="Extra 1TB of cloud save" idName="largerStorage">
                <template #monthlyPrice v-if="!yearly">+$2/mo</template>
                <template #yearlyPrice v-else>+$20/yr</template>
            </AddOnItem>
            <AddOnItem title="Customizable profile" description="Custom theme on your profile" idName="customProfile">
                <template #monthlyPrice v-if="!yearly">+$2/mo</template>
                <template #yearlyPrice v-else>+$20/yr</template>
            </AddOnItem>
        </template>
        <template #buttons>
            <button class="text-gray-cool m-4 justify-self-start" @click="goBack">Go back</button>
            <Button :extraClasses="'bg-blue-marine justify-self-end'" :name="'Next Step'" @click="nextStep"/>
        </template>
    </Card>
</template>