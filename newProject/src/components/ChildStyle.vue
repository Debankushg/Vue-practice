<template>
    <div>
        <h4>Style component </h4>
          <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ChildStyle'
}
</script>

<style >
h4 {
    color: #fff;
}
</style>