/**
 * Created by LIHUA on 2017/7/13/013.
 */
<template>
    <div>
        <div class="nave">
            <ul>
                <li @click="goto('content.index.recommend')"
                    v-bind:class="{ 'checked': routeName==='content.index.recommend'}">个性推荐</li>
                <li @click="goto('content.index.songlist')"
                    v-bind:class="{ 'checked': routeName==='content.index.songlist'}">歌单</li>
                <li>主播电台</li>
                <li>排行榜</li>
                <li>歌手</li>
                <li>最新音乐</li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                routeName: ''
            };
        },
        methods: {
            goto: function (name) {
                this.$router.push({ name: name });
                this.routeName = name;
            }
        },
        beforeMount: function () {
            let arr = this.$route.name.split('.');
            if (arr.length == 2) {
                this.routeName = `${this.$route.name}.recommend`;
            } else {
                this.routeName = this.$route.name;
            }

        }
    }
</script>

<style scope lang="scss">
    .nave {
        text-align: center;
        margin-bottom: 10px;
        border-bottom: 1px solid #E1E1E2;
        li {
            display: inline-block;
            line-height: 45px;
            height: 45px;
            padding: 0 20px;
            font-size: 14px;
            cursor: pointer;
            position: relative;
            &:hover {
                color: #C62F2F;
            }
            &.checked {
                color: #C62F2F;
                &:after {
                    content: '';
                    position: absolute;
                    width: 56px;
                    height: 2px;
                    background: #C62F2F;
                    bottom: -1px;
                    left: 50%;
                    margin-left: -28px;
                }
            }
        }
    }
</style>

