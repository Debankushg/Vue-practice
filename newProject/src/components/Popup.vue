<template>
    <div>
        <h2>This is Pop Up Component</h2>
        <input type="text" v-model="name" />
        <button @click="$emit('close', name)">Close Popup</button>
    </div>
</template>

<script>
export default {
    name: 'Popup',
    emits: {
        close: (name) => {
            if (!name) {
                return false
            } else {
                return true
            }
        }
    },
    data() {
        return {
            name: '',
        }
    },
}
</script>

<style scoped></style>