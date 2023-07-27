<template>
    <div>
        <input type="text" ref="inputRef"/>
        <HostList ref="hostListRef"/>
    </div>
</template>

<script>
import HostList from './HostList.vue'
    export default {
    name: "TemplateRef",
    mounted() {
        console.log(this.$refs.hostListRef);
        this.$refs.inputRef.focus();
    },
    components: { HostList }
}
</script>

<style scoped>

</style>