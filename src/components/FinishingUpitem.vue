<template>
    <div class="flex justify-between font-medium py-2">
        <span class="text-gray-cool"><slot name="addOn"></slot></span>
        <div>
            <p><slot name="monthlyPrice"></slot></p>
            <p><slot name="yearlyPrice"></slot></p>
        </div>
    </div>
</template>