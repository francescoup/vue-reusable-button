<script setup lang="ts">



withDefaults(
  defineProps<{ 
  msg?: string
  className?:string
  disabled?:boolean
  typeName?:'button' | 'submit' | 'reset' | undefined
  leftIcon?:any
  rightIcon?:any
  centerIcon?:any
  loading?:boolean
  
}>(),
{
  msg:'',
  className:'normal',
  disabled:false,
  typeName:'button',
  loading:false,
  
}
)

const emit = defineEmits<{
  (e: 'handler'):void}>()




</script>

<template>
 <button 
 :class="className"
 :disabled="disabled"
 :type='typeName'
 @click="emit('handler')"


 >
 <svg
      v-if="loading"
      class="loading-button"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  <component
  :is="leftIcon"
  class="left"
 ></component>

 
 <span v-if="msg">{{ msg }}</span>
 <component
 :is="centerIcon"
 class="center"
 ></component>
 <component
  :is="rightIcon"
  class="right"
 ></component>
 </button>
</template>

<style scoped>

button{
  font-size: 1rem;
  font-weight: bold;
  display:inline-flex;
  place-items:center ;
  background: #e5e5e5;
  color:#fff;
  
}
button[disabled]{
  background: #d5d5d5;
  color: #919191;
  cursor: none;
}

.normal{
  background: #e5e5e5;
  color:#3b3b3b;
}
.primary{
  background: #27a98d;
}
.info{
  background: #2f89c5;
}
.danger{
  background: #d04436;
}
.warning{
  background: #db8d0e;
}
.success{
  background: #2bb766;
}
.link{
  background: #2574a7;
}
.normal-outline{
  border:1px solid #3b3b3b;
  color:#3b3b3b;
}
.primary-outline{
  border:1px solid #27a98d;
  color:#27a98d;
}
.info-outline{
  border:1px solid #2f89c5;
  color:#2f89c5;
}
.danger-outline{
  border:1px solid #d04436;
  color:#d04436;
}
.warning-outline{
  border:1px solid #db8d0e;
  color:#db8d0e;
}
.success-outline{
  border:1px solid #2bb766;
  color:#2bb766;
}
.link-outline{
  border:1px solid #2574a7;
  color:#2574a7;
}
.small-text {
  font-size: 0.9rem;
}
.normal-text{
  font-size: 1rem;
}
.medium-text{
font-size: 1.1rem;
}
.large-text{
  font-size: 1.2rem;
}
.square{
  border-radius:0px;
}
.rounded{
  border-radius:20px;
}
.left{
  margin-right: 1rem;
  width: 1.5rem;
  height:1.5rem;
}
.right{
  margin-left: 1rem;
  width: 1.3rem;
  height:1.5rem;
}
.center{
  text-align: center;
  width: 1.3rem;
  height:1.5rem;
}
.loading-button{
  height: 1.3rem;
  width: 1.5rem;
  animation: spin 1s linear infinite;
}
.opacity-25{
  opacity: .25 ;
}

:where(.square, .rounded, .small-text, .normal-text, .medium-text, .large-text) span {
  color:#3b3b3b;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 600px) {
  button{
    width: 100%;
    justify-content: center;
  }
}
</style>
