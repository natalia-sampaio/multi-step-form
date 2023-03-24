<script setup>
</script>

<template>
    <div class="bg-white mx-4 p-6 rounded-xl mt-[-4rem] shadow-xl">
        <h2 class="text-blue-marine font-bold text-xl">
            <slot name="title"></slot>
        </h2>
        <p class="text-gray-cool">
            <slot name="description" class=""></slot>
        </p>
        <div class="mt-3 text-blue-marine font-semibold">
            <slot name="body"></slot>
        </div>
    </div>
</template>