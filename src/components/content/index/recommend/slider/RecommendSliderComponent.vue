/**
 * Created by LIHUA on 2017/7/16.
 */

<template>
    <slider class="container" :pages="pages" :sliderinit="sliderinit">
        <!-- slot  -->
    </slider>
</template>

<script>
    import slider from 'vue-concise-slider';

    export default {
        data: function () {
            return {
                pages: [
                    {
                        title: '',
                        style: {
                            background: 'url(http://p1.music.126.net/jNAHyB9qiENa485rRldVeg==/19086422346794182.jpg)'
                        }
                    },
                    {
                        title: '',
                        style: {
                            background: 'url(http://p1.music.126.net/2RkaypWl4vhg133crebONQ==/19076526742148141.jpg)'
                        }
                    },
                    {
                        title: '',
                        style: {
                            background: 'url(http://p1.music.126.net/jNAHyB9qiENa485rRldVeg==/19086422346794182.jpg)'
                        }
                    }
                ],
                sliderinit: {
                    currentPage: 0,//当前页码
                    thresholdDistance: 500, //滑动判定距离
                    thresholdTime: 100, //滑动判定时间
                    autoplay: 4000, //自动滚动[ms]
                    loop: true, //循环滚动
                    direction: 'horizontal',//方向设置，垂直滚动 horizontal vertical
                    infinite: 1, //无限滚动前后遍历数
                    slidesToScroll: 1 //每次滑动项数
                }
            }
        },
        components: {
            slider
        }
    }
</script>

<style lang="scss" scope>
    .container {
        width: 80%;
        height: 190px;
    }
</style>
