<template>
    <label class="text-blue-marine text-sm grid my-4">
      <div class="flex justify-between lg:mb-2">
        <h3><slot name="label"></slot></h3>
        <span class="text-red-600"><slot name="error"></slot></span>
      </div>
      <slot></slot>
    </label>
</template>
