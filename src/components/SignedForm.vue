<template>
   
    <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" required v-model="email"/>
        <label>Password:</label>
        <input type="password" required v-model="password"/>
        <div v-if="passwordError">
            {{ passwordError }}
        </div>
        <label>Role:</label>
        <select v-model="role">
            <option value="Web developer">Web developer</option>
            <option value="Web designer">Web designer</option>
        </select>
        
        <label >Skills:</label>
        <input type="text" v-model="tempSkill" @keyup="addSkill" placeholder="digit and press enter">
<div class="skills" v-for="skill in skills" key="skill" @click="removeSkill(skill)">
        {{ skill }}
    </div>
<div class="terms">
            <input type="checkbox" required v-model="terms">
            <label>Accept terms and conditions</label>
        </div>
        <button>invia</button>
        <p>{{ email }}</p>
    </form>
    
   
    
    

</template>

<script setup>
import { ref } from 'vue';

const email = ref('')
const password = ref('')
const role = ref('')
const terms = ref(false)
const tempSkill = ref('')
const skills = ref([])
const passwordError = ref('')

function addSkill(e){
    
    if(e.key === 'Enter' && tempSkill.value){
        if(!skills.value.includes(tempSkill.value)){
            skills.value.push(tempSkill.value)
        }
        
        tempSkill.value = ''
    }   
}
function removeSkill(parametro) {
   skills.value =  skills.value.filter(t => t != parametro)
}

function handleSubmit(){
    passwordError.value = password.value.length > 5 ? '' : 'password too short'
    if(!passwordError){
        console.log(email)
}
    }
    
</script>

<style>
form{
    max-width: 420px;
    margin: 30px auto;
    text-align: left;

}

input, select{
    display:block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border:none;
    border-bottom: 1px solid #ddd;
    color:#555;
    margin-bottom: 16px;;
}

input[type="checkbox"]{
display: inline-block;
width: 16px;
margin: 0 10px 0 0;
position:relative;
top:2px;
}

.skills{
    display: inline-block;
    margin: 10px;
    padding: 10px 16px;
    border-radius:8px;
    background: orange;
    color:blueviolet;
}
</style>