<template>
    <input type="text" :value="modelValue" @input="emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
    name: 'Input',
    props:{
        modelValue:String
    }
}
</script>

<style scoped>
input[type='text'] {
    display: block;
    width: 400px;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>