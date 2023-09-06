<script setup>
import { ref, computed } from 'vue';
const emit = defineEmits(['close'])


function closeModal(){
    emit('close')
}








</script>

<template>
    <div @click.self="closeModal" class="backdrop">
        <div class="modal">
           <slot></slot> 
           <div class="action">
            <slot name="links"></slot>
            
           </div><slot name="text"></slot>
        </div>
    </div>
    
</template>

<style>
.backdrop{
    position: fixed;
    top:0;
    left:0;
    background: rgba(0, 0,0, 0.5);
    width: 100%;
    height: 100%;
    transition: 0.5s ease-in;
}
.modal{
    background: rgb(110, 102, 103);
    width: 350px;
    margin: 100px auto;
    padding:3rem;
    border-radius:10px;
    z-index: 9;
    transition: 0.5s ease-in;
}
.action a{
    color:white;
}
</style>