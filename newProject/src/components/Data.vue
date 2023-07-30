<template>
    <div>
        <h2>Optional API- {{ o_firstName }}</h2>
        <h3>Optional api - {{ o_firstName }} {{ o_lastName }} {{ o_heroName }}</h3>
        <h2>Composition API- {{ c_firstName }}</h2>
        <h2>Composition API- {{ greet }}</h2>

        <h2>composition - {{ c_firstName }} {{ c_lastName }} {{ c_heroName }} </h2>
        <h2>compositon -- {{ greetHero }}</h2>

        <h2>composition - {{ state.firstName }} {{ state.lastName }} {{ state.heroName }} </h2>
        <h2>compositon -- {{ reactiveGreetHero }}</h2>
     
        
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
    name: 'Data',
    setup() {
        const c_firstName = ref('CLARK')
        const c_lastName = ref('kent')
        const c_heroName = ref('Superman')

        const greet = ` Hello ${c_firstName.value}`;
        const greetHero = `Hello ${c_firstName.value} ${c_lastName.value} and  ${c_heroName.value}`;

       const state = reactive({
            firstName:'princess',
            lastName: 'Diana',
            heroName: 'Wonder women'
        })

        const reactiveGreetHero = `hello ${state.firstName} ${state.lastName} and ${state.heroName}`
       
        const isLoggedIn  = ref(false)
        const isLoggedInReactive = reactive({
            value:false
        })
        return {
            c_firstName,
            c_lastName,
            c_heroName,
            greet,
            greetHero,
            state,
            reactiveGreetHero,
        }
    },
    data() {
        return {
            o_firstName: 'BRUCE',
            o_lastName: 'Wayne',
            o_heroName: 'Batman',
        }
    }
}
</script>

<style scoped></style>