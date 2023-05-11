<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <Conditions/> -->
  <!-- <Methods/> -->
  <!-- <Form/> -->
  <!-- <Computed/> -->
  <Watcher/>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue';
import Conditions from './components/Condtions.vue';
import Methods from './components/Methods.vue';
import Form from './components/Form.vue';
import Computed from './components/Computed.vue';
import Watcher from './components/Watcher.vue'


 export default {
  name:'App',
  components:{
    HelloWorld,
    Conditions,
    Methods,
    Form,
    Computed,
    Watcher
  }
 }
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
