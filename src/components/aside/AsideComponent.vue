<template>
    <div class="aside-container">
        <div class="aside-section">
            <div class="aside-section-title">推荐</div>
            <div class="aside-section-child">
                <div class="aside-section-item"
                     @click="goto('content.index')"
                    v-bind:class="{ 'checked': routeName==='content.index'}">
                    <i class="fa fa-music f14" aria-hidden="true"></i>
                    <span class="ml6">发现音乐</span>
                </div>
                <div class="aside-section-item"
                     @click="goto('content.fm')"
                     v-bind:class="{ 'checked': routeName==='content.fm'}">
                    <i class="fa fa-bullhorn f14" aria-hidden="true"></i>
                    <span class="ml6">私人FM</span>
                </div>
                <div class="aside-section-item">
                    <i class="fa fa-file-video-o f14" aria-hidden="true"></i>
                    <span class="ml10">MV</span>
                </div>
                <div class="aside-section-item">
                    <i class="fa fa-users f14" aria-hidden="true"></i>
                    <span class="ml8">朋友</span>
                </div>
            </div>
        </div>
        <div class="aside-section">
            <div class="aside-section-title">我的音乐</div>
            <div class="aside-section-child">
                <div class="aside-section-item">
                    <i class="fa fa-quora f14" aria-hidden="true"></i>
                    <span class="ml6">本地音乐</span>
                </div>
                <div class="aside-section-item">
                    <i class="fa fa-download f14" aria-hidden="true"></i>
                    <span class="ml6">下载管理</span>
                </div>
                <div class="aside-section-item">
                    <i class="fa fa-cloud-upload f14" aria-hidden="true"></i>
                    <span class="ml6">我的音乐云盘</span>
                </div>
                <div class="aside-section-item">
                    <i class="fa fa-bookmark-o f14" aria-hidden="true"></i>
                    <span class="ml8">我的收藏</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                // 当前路由名字
                routeName: ''
            };
        },
        name: 'Aside',
        methods: {
            goto: function (name) {
                this.$router.push({ name: name });
                this.routeName = name;
            }
        },
        mounted: function () {
            if (this.$route.name) {
                let arr = this.$route.name.split('.');
                if (arr.length == 2) {
                    this.routeName = this.$route.name;
                } else {
                    this.routeName = `${arr[0]}.${arr[1]}`;
                }
            } else {
                this.routeName = 'content.index';
            }
        }
//        watch: {
//            '$route' (to, from) {
//                console.log(from)
//            }
//        }
    }
</script>

<style scope lang="scss">
    .aside-container {
        height: 570px;
        width: 200px;
        float: left;
        background: #F5F5F7;
        .aside-section {
            color: #5C5C5C;
            font-size: 12px;
            .aside-section-title {
                padding: 6px 8px;
                color: #7D7D7D;
            }
            .aside-section-child {
                .aside-section-item {
                    padding: 7px 20px;
                    &:hover {
                        color: #333;
                        cursor: pointer;
                    }
                    &.checked {
                        background: #E6E7EA;
                        color: #333;
                        position: relative;
                        &:after {
                            content: '';
                            width: 2px;
                            height: 100%;
                            background: #C62F2F;
                            position: absolute;
                            left: 0;
                            top: 0;
                        }
                    }
                }

            }
        }
    }
</style>
