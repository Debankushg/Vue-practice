import { reactive, toRefs } from 'vue';
<template>
    <div>
        <input type="text" placeholder="First Name" v-model="fName" />
        <input type="text" placeholder="Last Name" v-model="lName" />
        <h2>Options Fullname is {{ fullName }}</h2>


        <input type="text" placeholder="First Name" v-model="refFirstName" />
        <input type="text" placeholder="Last Name" v-model="refLastName" />
        <h2>Computed Fullname is {{ computedName }}</h2>


        <input type="text" placeholder="First Name" v-model="reactiveFirstName" />
        <input type="text" placeholder="Last Name" v-model="reactiveLastName" />
        <h2>Reactive Fullname is {{ recativeFullName }}</h2>

    </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from 'vue'
export default {
    name: 'ReplaceComputed',
    setup() {
        const refFirstName = ref('')
        const refLastName = ref('')

        const computedName = computed(function () {
            return `${refFirstName.value} ${refLastName.value}`
        })
        const state = reactive({
            reactiveFirstName: '',
            reactiveLastName:''
        })
        const recativeFullName = computed(function(){
            return `${state.reactiveFirstName} ${state.reactiveLastName}`
        })

        return {
            refFirstName, refLastName, computedName,
            ...toRefs(state),recativeFullName

        }
    },
    data() {
        return {
            fName: '',
            lName: '',
        }
    },
    computed: {
        fullName() {
            return `${this.fName} ${this.lName}`
        }
    }
}
</script>

<style  scoped></style>