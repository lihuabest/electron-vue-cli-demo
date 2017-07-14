<template>
    <div class="content-container">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Content'
    }
</script>

<style scope lang="scss">
    .content-container {
        padding: 0 20px;
        margin-left: 200px;
    }
</style>
