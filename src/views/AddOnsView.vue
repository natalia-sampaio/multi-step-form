<script setup>
import AddOnItem from '../components/AddOnItem.vue';
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
import { usePlanStore } from '../stores/plan';

</script>

<script>
export default {
    props: {
        yearly: Boolean
    },
    data() {
        return {
            selectedAddons: [],
            addOns: [
                {
                    id: 1,
                    title: 'Online service',
                    monthlyPrice: 1,
                    yearlyPrice: 10,
                    description: 'Access to multiplayer games',
                    idName: 'onlineService'
                },
                {
                    id: 2,
                    title: 'Larger storage',
                    monthlyPrice: 2,
                    yearlyPrice: 20,
                    description: 'Extra 1TB of cloud save',
                    idName: 'largerStorage'
                },
                {
                    id: 3,
                    title: 'Customizable profile',
                    monthlyPrice: 2,
                    yearlyPrice: 20,
                    description: 'Custom theme on your profile',
                    idName: 'customProfile'
                }
            ]
        }
    },
    methods: {
        nextStep() {
            const store = usePlanStore();
            store.$patch({
                addOns: this.selectedAddons
            });
            this.$router.push('/finishing-up');
        },
        goBack() {
            this.$router.push('/select-plan');
        },
        updateAddOns(addOnId) {
            if(!this.selectedAddons.find(addOn => addOn.id === addOnId)){
                const addOn = this.addOns.find(addOn => addOn.id === addOnId);
                this.selectedAddons.push(addOn);
            }
        },
        removeAddon(addOnId) {
            this.selectedAddons.splice(this.selectedAddons.findIndex(addOn => addOn.id === addOnId), 1);
        }
    }
}
</script>

<template>
    <Card>
        <template #title>Pick add-ons</template>
        <template #description>Add-ons help enhance your gaming experience.</template>
        <template #body>
            <AddOnItem v-for="addOn in addOns" :addOnId="addOn.id" :title="addOn.title" :description="addOn.description" :idName="addOn.idName" @selectedAddon="addOnId => updateAddOns(addOnId)" @removedAddon="addOnId => removeAddon(addOnId)">
                <template #monthlyPrice v-if="!yearly">+${{ addOn.monthlyPrice }}/mo</template>
                <template #yearlyPrice v-else>+${{ addOn.yearlyPrice }}/yr</template>
            </AddOnItem>
        </template>
        <template #buttons>
            <button class="text-gray-cool m-4 justify-self-start" @click="goBack">Go back</button>
            <Button :extraClasses="'bg-blue-marine justify-self-end'" :name="'Next Step'" @click="nextStep"/>
        </template>
    </Card>
</template>