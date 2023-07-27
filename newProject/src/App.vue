<template>
  <h4>App Comnponent</h4>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <Conditions/> -->
  <!-- <Methods/> -->
  <!-- <Form/> -->
  <!-- <Computed/> -->
  <!-- <Watcher/>
  <Props  name="DEB" heroName="SuperMan"/>
  <Props name="Ria" heroName="Antman"/>
  <Props  :name="name" :heroName="heroName"/> -->

  <!-- Props  -->

  <!-- <Article id="article-vue" title="Change India" :likes='50' :isPublished="true"/> -->
  <!-- <button @click="showPopup = true">Show Popup</button>
  <Popup v-show="showPopup" @close="closePopup" /> -->
  <!-- <Input v-model="name" /> -->

  <!-- Slot in vue  -->
  <!-- <Card></Card>
  <Card>Card Content 1</Card>
  <Card>
    <h2>Hello India</h2>
  </Card>
  <Card><img src="https://picsum.photos/200" /></Card>

  <Card>
    <template v-slot:header>
      <h3>Header</h3>
    </template>
    <template v-slot:default>
      <img src="https://picsum.photos/200" />
    </template>
    <template v-slot:footer>
      <button>Veiw Default</button>
    </template>
  </Card> -->


  <!-- Slot Props  -->
  <!-- <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.fName }} - {{ slotProps.lName }}
    </template>
  </NameList>
  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.lName }} - {{ slotProps.fName }}
    </template>
  </NameList> -->

  <!-- Style with Scoped  -->
  <!-- <ChildStyle>
    <h4> Child Style Slot Component </h4> // it take the style from the app
  </ChildStyle> -->


  <!-- Dynamic Component -->
  <!-- <button @click="activeTab = 'TabA'">Tab A</button>
  <button @click="activeTab = 'TabB'">Tab B</button>
  <button @click="activeTab = 'TabC'">Tab C</button>
 <keep-alive>

   <component :is="activeTab"/>
 </keep-alive> -->
  <!-- <TabA v-if="activeTab === 'TabA'" />
  <TabB v-if="activeTab === 'TabB'" />
  <TabC v-if="activeTab === 'TabC'" /> -->

  <!-- HTTP API Request -->
  <!-- <HostList/>
  <CreatePost/> -->

  <TemplateRef/>

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
import Popup from './components/Popup.vue';
import Input from './components/Input.vue';
import Card from './components/Card.vue';
import NameList from './components/NameList.vue'
import ChildStyle from './components/ChildStyle.vue';
import TabA from './components/TabA.vue';
import TabB from './components/TabB.vue';
import TabC from './components/TabC.vue';
import HostList from './components/HostList.vue';
import CreatePost from './components/CreatePost.vue';
import TemplateRef from './components/TemplateRef.vue'


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
    Popup,
    Input,
    Card,
    NameList,
    ChildStyle,
    TabA,
    TabB,
    TabC,
    HostList,
    CreatePost,
    TemplateRef
  },
  data() {
    return {
      // name: 'Shiswas',
      // heroName: 'Batman',
      // showPopup: false
      name: '',
      activeTab: 'TabA',
    }
  },
  // methods: {
  //   // closePopup(name) {
  //   //   this.showPopup = false;
  //   //   console.log('name', name);
  //   // },
   
  // }
}
</script>


<style scoped>
h4 {
  color: orange
}
</style>
