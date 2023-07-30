<template>
    <div>
        <h3>{{ name }}</h3>
    </div>
</template>

<script>
    export default {
        name:'DemoOne',
        setup(){
            let name = 'vishwas'


            setTimeout(() =>{
                name= 'codeEvolution'
                
            }, 1000)


            return {
                name,
            }
        }
    }
</script>

<style scoped>

</style>