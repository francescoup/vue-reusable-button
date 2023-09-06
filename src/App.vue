<script setup>
import { ref } from 'vue';
import Store from './components/Store.vue';
import router from './router';

const titleBold = ref('my first vue application')
const isOpen = ref(false)
const isOpenTwo = ref(false)
function toggleModal(){
  isOpen.value  = !isOpen.value
}
function toggleModalTwo(){
  isOpenTwo.value = !isOpenTwo.value
}

function back(){
  router.go(-1)
}
</script>

<template>
  <h1>{{ titleBold }}</h1>
  <div>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/contact">Go to Contact</router-link>
    <router-link to="/jobs">jobs</router-link>
    <router-link to="/todo">todo</router-link>
    <router-view v-slot="{ Component }">
  <transition name="slide" mode="out-in">
    <component :is="Component" :key="$route.path"/>
  </transition>
</router-view>
    <button @click="back">back</button>
  </div>
  <Teleport to=".modals" v-if="isOpen">
    <Store @close="toggleModal">
      <template v-slot:links>
        <a href="#">register</a>
      </template>
    <h2>this is a Modal</h2>
    <p>modal example</p>
    </Store>
  </Teleport>
  <div v-if="isOpenTwo">
    <Store @close="toggleModalTwo">
      <template v-slot:text>
        <a href="#">logina</a>
      </template>
    <h1>this is the second modal</h1>
    </Store>
  </div>
  <button @click="toggleModal" >open modal</button>
  <button @click="toggleModalTwo" >open modal two</button>
  
</template>

<style lang="css">

.slide-enter-active,
.slide-leave-active{
  transition: opacity 1s, transform 1s;
}
.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
}
</style>
