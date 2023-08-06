<template>
    <div>
        <h2>{{ firstName }} {{ lastName }}</h2>
        <h2>{{ fname }} {{ lname }}</h2>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    name: 'DemoTwo',
    setup() {
        const state = reactive({
            firstName: 'Bruce',
            lastName: 'wayne'
        })

        setTimeout(() => {
            state.firstName = 'Cleark'
            state.lastName = 'Kent'
        }, 2000)

        return toRefs(state)
        // return {
        //    firstName: state.firstName,
        //    lastName: state.lastName
        // }
    },
    data() {
        return {
            fname: 'Bruce',
            lname: 'Warne'
        }
    }
}
</script>

<style scoped></style>