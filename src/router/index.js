import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: 'content.index'
            }
        },
        {
            path: '/content',
            name: 'content.index',
            component: resolve => require(['@/components/content/index/ContentIndexComponent'], resolve),
            children: [
                {
                    path: '/content/',
                    redirect: {
                        name: 'content.index.recommend'
                    }
                },
                {
                    path: '/content/index',
                    name: 'content.index.recommend',
                    pname: 'content.index',
                    component: resolve => require(['@/components/content/index/recommend/ContentIndexRecommendComponent.vue'], resolve)
                },
                {
                    path: '/content/songlist',
                    name: 'content.index.songlist',
                    pname: 'content.index',
                    component: resolve => require(['@/components/content/index/songlist/ContentIndexSonglistComponent.vue'], resolve)
                }
            ]
        },
        {
            path: '/fm',
            name: 'content.fm',
            component: resolve => require(['@/components/content/fm/ContentFmComponent'], resolve)
        }
    ]
})
