<template>
    <div class="head-container app-region-drag">
        <HeadToolComponent></HeadToolComponent>
    </div>
</template>

<script>
    import HeadToolComponent from './HeadToolComponent.vue';

    export default {
        name: 'Head',
        components: {
            HeadToolComponent
        }
    }
</script>

<style lang="scss">
    .head-container {
        height: 50px;
        line-height: 50px;
    }
</style>