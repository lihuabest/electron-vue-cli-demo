import Vue from 'vue';
import Router from 'vue-router';
import ContentIndexComponent from '../components/content/index/ContentIndexComponent.vue';
import ContentIndexRecommendComponent from '../components/content/index/recommend/ContentIndexRecommendComponent.vue';
import ContentIndexSonglistComponent from '../components/content/index/songlist/ContentIndexSonglistComponent.vue';
import ContentFmComponent from '../components/content/fm/ContentFmComponent.vue';

Vue.use(Router);

const home = resolve => {
    require.ensure(['@/components/content/index/ContentIndexComponent.vue'], () => {
        resolve(require('@/components/content/index/ContentIndexComponent.vue'))
    }, 'group-foo')
};

const world = resolve => {
    require.ensure(['@/components/content/fm/ContentFmComponent.vue'], () => {
        resolve(require('@/components/content/fm/ContentFmComponent.vue'))
    }, 'group-foo')
};

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/index',
        name: 'content.index',
        // component: resolve => require(['../components/content/index/ContentIndexComponent.vue'], resolve),
        component: home
        // children: [
        //     {
        //         path: '/',
        //         redirect: '/recommend'
        //     },
        //     {
        //         path: '/recommend',
        //         name: 'content.index.recommend',
        //         pname: 'content.index',
        //         component: function (resolve) {
        //             return require(['../components/content/index/recommend/ContentIndexRecommendComponent.vue'], resolve);
        //         }
        //     },
        //     {
        //         path: '/songlist',
        //         name: 'content.index.songlist',
        //         pname: 'content.index',
        //         component: function (resolve) {
        //             return require(['../components/content/index/songlist/ContentIndexSonglistComponent.vue'], resolve);
        //         }
        //     }
        // ]
    },
    {
        path: '/fm',
        name: 'content.fm',
        // component: resolve => require(['../components/content/fm/ContentFmComponent.vue'], resolve)
        component: world
    }
];

export default new Router({
    routes
});
