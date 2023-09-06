<template>
<div>
    <div v-for="(cell, index) in cells">
        {{ cell }}{{ index }}
    </div>
</div>

</template>

<script setup>
import { ref } from 'vue';
const cells = ref([
    '','','','','','',
])
</script>

<style>
</style>