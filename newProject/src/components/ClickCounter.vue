<template>
    <button @click="incrementCount">Clicked {{ count }} times</button>
</template>

<script>
import CounterMixin from  '../mixins/counter'
    export default {
        name:'ClickCounter',
        mixins:[CounterMixin]
    }

</script>

<style scoped>

</style>