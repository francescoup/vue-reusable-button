<template>
    <button :class="background" :disabled="disabled">{{ msg }}</button>
</template>

<script setup>
defineProps({
    msg:String,
    background:String,
    disabled:Boolean
})

</script>

<style>
.red{
    background: red;
}
.blue{
    background: blue;
}
</style>