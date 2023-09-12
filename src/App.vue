<script setup lang="ts">
import Button from './components/Button.vue'
import { EnvelopeIcon, PhoneIcon, MapPinIcon  } from "@heroicons/vue/20/solid"
function eventTest(){
  alert('message test function')
}
</script>

<template>
  <div>
    <h2>Color States</h2>
    <div class="container">
      <Button className="normal" @handler="eventTest"  msg="Normal"/>
      <Button className="primary" msg="Primary" />
      <Button className="link" msg="Link"/>
      <Button className="info"  msg="Info"/>
      <Button className="success" msg="Success"/>
      <Button className="warning" msg="Warning"/>
      <Button className="danger" msg="Danger"/>
    </div>
  </div>
  <div>
    <h2>Color Outline States</h2>
    <div class="container">
      <Button className="normal-outline" msg="Normal"/>
      <Button className="primary-outline" msg="Primary" />
      <Button className="link-outline" msg="Link"/>
      <Button className="info-outline"  msg="Info"/>
      <Button className="success-outline" msg="Success"/>
      <Button className="warning-outline" msg="Warning"/>
      <Button className="danger-outline" msg="Danger"/>
    </div>
  </div>
  <div>
    <h2>Borders</h2>
    <div class="container">
      <Button msg="Normal"/>
      <Button className="square" msg="Square"/>
      <Button className="rounded" msg="Rounded"/>
    </div>
  </div>
  <div>
    <h2>Font Size</h2>
    <div class="container">
      <Button className="small-text" msg="Small"/>
      <Button className="normal-text" msg="Normal"/>
      <Button className="medium-text" msg="Medium"/>
      <Button className="large-text" msg="Large"/>
    </div>
  </div>
 <div>
  <h2>State</h2>
  <div class="container">
    <Button :disabled="true" msg="Disabled"/>
    <Button :loading="true"/>
  </div>
 </div>
 <div>
  <h2>Icons</h2>
  <div class="container">
    <Button className="primary rounded" :leftIcon="EnvelopeIcon" msg="Left Icon" />
    <Button className="info rounded" :rightIcon="PhoneIcon" msg="Right Icon" />
    <Button className="success rounded" :centerIcon="MapPinIcon" />
  </div>
 </div>
 
</template>

<style scoped>

h2{
  font-size: 3rem;
  color:aquamarine;
}
.container{
  display: flex;
  gap:1rem;
  flex-flow:row wrap;
  align-items: center;
  justify-content: center;
}
</style>
