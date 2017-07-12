<template>
    <div v-bind:class="{ 'theme-red': theme === 'theme-red' }">
        <HeadComponent></HeadComponent>
        <AsideComponent></AsideComponent>
        <ContentComponent></ContentComponent>
        <PlayComponent></PlayComponent>
    </div>
</template>

<script>
    import './assets/styles/styles.css';

    import HeadComponent from './components/head/HeadComponent.vue';
    import AsideComponent from './components/aside/AsideComponent.vue';
    import ContentComponent from './components/content/ContentComponent.vue';
    import PlayComponent from './components/play/PlayComponent.vue';

    export default {
        name: 'App',
        data: function () {
            return {
                // theme: ''
            };
        },
        components: {
            HeadComponent,
            AsideComponent,
            ContentComponent,
            PlayComponent
        },
        computed: {
            theme () {
                return this.$store.getters.getTheme;
            }
        },
        mounted: function() {
            
        }
    }
</script>

<style lang="scss">
    
</style>



