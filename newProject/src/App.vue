<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <Conditions/> -->
  <!-- <Methods/> -->
  <!-- <Form/> -->
  <!-- <Computed/> -->
  <!-- <Watcher/>
  <Props  name="DEB" heroName="SuperMan"/>
  <Props name="Ria" heroName="Antman"/>
  <Props  :name="name" :heroName="heroName"/> -->
  <!-- <Article id="article-vue" title="Change India" :likes='50' :isPublished="true"/> -->
  <button @click="showPopup = true">Show Popup</button>
  <Popup v-show="showPopup" @close="closePopup" />
</template>


<script>
import HelloWorld from './components/HelloWorld.vue';
import Conditions from './components/Condtions.vue';
import Methods from './components/Methods.vue';
import Form from './components/Form.vue';
import Computed from './components/Computed.vue';
import Watcher from './components/Watcher.vue'
import Props from './components/Props.vue';
import Article from './components/Article.vue';
import Popup from './components/Popup.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Conditions,
    Methods,
    Form,
    Computed,
    Watcher,
    Props,
    Article,
    Popup
  },
  data() {
    return {
      name: 'Shiswas',
      heroName: 'Batman',
      showPopup: false
    }
  },
  methods: {
    closePopup(name) {
      this.showPopup = false;
      console.log('name', name);
    }
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
