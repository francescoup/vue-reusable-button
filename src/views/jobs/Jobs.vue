<template>
    <div>
        
        <h2>jobs in tech works</h2>
        <div v-for="job in jobs" :key="job.id">
            <router-link :to="{name: 'JobsDetails', params:{id:job.id} }">
            {{ job.title }}
            </router-link>
            
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const jobs = ref([
    {
        title:'developer',
        id:1,
        summary:'lorem ipsum'
    },
    {
        title:'designer',
        id:2,
        summary:'lorem ipsum'
    },
    {
        title:'backend',
        id:3,
        summary:'lorem ipsum'
    },
])
</script>

<style>
</style>