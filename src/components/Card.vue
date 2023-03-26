<script setup>
</script>

<template>
    <div class="mx-4 p-6 mt-[-4rem] bg-white rounded-xl shadow-xl lg:m-0 lg:h-3/4 lg:w-1/2 lg:px-28 lg:pt-16 lg:pb-8 lg:rounded-tl-none lg:rounded-bl-none lg:shadow-none lg:grid">
        <h2 class="text-blue-marine font-bold text-xl my-2 lg:text-3xl">
            <slot name="title"></slot>
        </h2>
        <p class="text-gray-cool">
            <slot name="description" class=""></slot>
        </p>
        <div class="mt-3 text-blue-marine font-semibold">
            <slot name="body"></slot>
        </div>
        <div class="grid grid-cols-2 content-center bg-white fixed bottom-0 left-0 w-screen font-semibold lg:static lg:w-auto lg:self-end">
            <slot name="buttons"></slot>
        </div>
    </div>
</template>