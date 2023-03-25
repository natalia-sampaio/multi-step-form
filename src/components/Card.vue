<script setup>
</script>

<template>
    <div class="mx-4 p-6 mt-[-4rem] bg-white rounded-xl shadow-xl lg:m-0 lg:h-3/4 lg:px-28 lg:py-16 lg:rounded-tl-none lg:rounded-bl-none lg:shadow-none">
        <h2 class="text-blue-marine font-bold text-xl my-2 lg:text-3xl">
            <slot name="title"></slot>
        </h2>
        <p class="text-gray-cool">
            <slot name="description" class=""></slot>
        </p>
        <div class="mt-3 text-blue-marine font-semibold">
            <slot name="body"></slot>
        </div>
        <div class="grid grid-cols-2 bg-white fixed bottom-0 left-0 w-screen font-semibold lg:relative lg:bottom-auto lg:left-auto lg:w-auto">
            <slot name="button"></slot>
        </div>
    </div>
</template>