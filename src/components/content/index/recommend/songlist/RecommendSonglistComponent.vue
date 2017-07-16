/**
 * Created by LIHUA on 2017/7/16.
 */

<template>
    <div class="title">
        <span>推荐歌单</span>
        <a href="">更多&gt;</a>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scope>
    .title {
        padding: 5px 0;
        border-bottom: 1px solid #E1E1E1;
        span {
            font-size: 18px;
        }
        a {
            float: right;
            color: #666;
            vertical-align: middle;
            position: relative;
            top: 5px;
            &:hover {
                color: #444;
            }
        }
    }
</style>
