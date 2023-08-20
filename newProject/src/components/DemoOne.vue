<template>
    <div>
        <h3>{{ name }}</h3>
    </div>
</template>

<script>
import {ref} from 'vue'
    export default {
        name:'DemoOne',
        setup(){
            const name = ref('vishwas')


            setTimeout(() =>{
                name.value= 'codeEvolution'
            }, 1000)


            return {
                name,
            }
        }
    }
</script>

<style scoped>

</style>