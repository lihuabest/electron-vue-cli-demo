<template>
    <div class="head-tool">
        <ul>
            <li>
                <i class="iconfont">&#xe650;</i>
            </li>
            <li>
                <i class="iconfont"  @click="handleWndow('window-minimize')">&#xe656;</i>
            </li>
            <li>
                <i class="iconfont"  @click="handleWndow('window-maximize')">&#xe662;</i>
            </li>
            <li>
                <i class="iconfont" @click="handleWndow('window-close')">&#xe600;</i>
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