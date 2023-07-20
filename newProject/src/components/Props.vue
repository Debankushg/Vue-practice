<template>
    <h2>
        Hello {{name}} you are {{ heroName }}
    </h2>
</template>

<script>
    export default {
       name:'Props',
       props:['name', 'heroName'], 
    }
</script>

<style scoped>

</style>