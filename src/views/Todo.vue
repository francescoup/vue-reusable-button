<template><div>
    <h2>todo list</h2>
    <input v-model="todo" @keyup="addTodo">
    <ul v-for="item in list" key="item">
        <li>{{ item }}<span @click="removeTodo(item)">x</span></li>
    </ul>
    <Button background="red" msg="hello" :disabled="true"/>
    <Button background="blue" msg="ciao" :disabled="false"/>
</div>
    
</template>

<script setup>
import { ref } from 'vue';
import Button from '../components/Button.vue'

const todo = ref('')
const list = ref([])

function addTodo(e){
    if(e.key === 'Enter' && list.value){
        if(!list.value.includes(todo.value)){
            list.value.push(todo.value)
        }
        
        todo.value = '' 
    }
   
}

function removeTodo(parametro){
    list.value = list.value.filter(t => t != parametro)
}

</script>