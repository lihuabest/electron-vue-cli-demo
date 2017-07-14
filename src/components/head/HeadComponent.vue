<template>
    <div class="head-container app-region-drag">
        <span class="title">网易云音乐</span>
        <span class="nave">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </span>
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

<style lang="scss" scoped="">
    .head-container {
        height: 50px;
        line-height: 50px;
        .title {
            color: #fff;
            margin-left: 20px;
        }
        .nave {
            border: 1px solid #A82828;
            border-radius: 2px;
            color: #fff;
            line-height: 20px;
            display: inline-block;
            margin-left: 95px;
            cursor: pointer;
            -webkit-app-region: no-drag;
            i {
                padding: 0 7px;
                line-height: 22px;
                font-size: 12px;

                &:first-child {
                    border-right: 1px solid #A82828;
                }
            }
        }
    }
</style>
