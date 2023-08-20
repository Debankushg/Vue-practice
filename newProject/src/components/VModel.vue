import { reactive, toRefs } from 'vue';
<template>
    <div>
        <input type="text" placeholder="FirstName" v-model="fName"/>
        <input type="text" placeholder="LastName" v-model="lName"/>


        <input type="text" placeholder="HeroName" v-model="heroName"/>
        <input type="text" placeholder="FirstName" v-model="firstName"/>
        <input type="text" placeholder="LastName" v-model="lastName"/>
    </div>
</template>

<script>
import {ref, reactive,toRefs} from 'vue'
export default {
    name: 'VModel',
    setup(){
        const heroName = ref('')
        const state = reactive({
            firstName:'',
            lastName: '',
        })
        return{
            heroName,
            ...toRefs(state)
        }
    },
    data() {
        return {
            fName: '',
            lName: '',
        }
    },

}
</script>

<style scoped></style>