<script setup>
import Card from '../components/Card.vue';
import IconThankYou from '@/components/icons/IconThankYou.vue'
</script>

<template>
    <Card class="grid text-center">
        <template #title>
            <IconThankYou class="w-14 h-14 mx-auto mt-16 mb-6" />
            Thank you!
        </template>
        <template #description>
            Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
        </template>
        <template #body></template>
    </Card>
</template>