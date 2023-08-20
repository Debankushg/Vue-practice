<template>
    <div class="card">
        <!-- {{content}} -->
        <!-- <slot>Default Slots Contents</slot> -->
        <div id="card-header">
            <slot name="header"></slot>
        </div>
        <div id="card-content">
            <slot></slot>
        </div>
        <div id="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    // props:['content']
}
</script>

<style scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: antiquewhite;
    color: orangered;
    transition: 0.2s;
    padding: 16px;
    margin-bottom: 20px;
    width: 200px;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>