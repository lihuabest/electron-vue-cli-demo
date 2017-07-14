<template>
    <div class="head-tool">
        <ul>
            <li>
                <i class="fa fa-external-link" aria-hidden="true"></i>
            </li>
            <li>
                <i class="fa fa-minus" aria-hidden="true" @click="handleWndow('window-minimize')"></i>
            </li>
            <li>
                <i class="fa fa-window-maximize" aria-hidden="true" @click="handleWndow('window-maximize')"></i>
            </li>
            <li>
                <i class="fa fa-times" aria-hidden="true" @click="handleWndow('window-close')"></i>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HeadTool',
        methods: {
            handleWndow: function (type) {
                this.$ipc.send(type);
            }
        }
    }
</script>

<style scope lang="scss">
    .head-tool {
        float: right;
        height: 50px;
        line-height: 50px;
        -webkit-app-region: no-drag;
        li {
            display: inline-block;
            padding: 0 2px;
            &:last-child {
                margin-right: 10px;
            }
            i {
                color: #E29595;
                font-size: 18px;
                &:hover {
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }
</style>
