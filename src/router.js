// 0.Import the createWebHashHistory and createRouter from vue-router

import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import SingleProjectView from './views/SingleProjectView.vue'

// 1. Define route components.

//createApp(App).mount('#app')

// 2. Define some routes

//const HomeView = '';

const routes = [
    {
        path: '/', component: HomeView
    },
    {
        path: '/project/:slug', name: 'project', component: SingleProjectView
    }
]

// 3. Create the router instance and pass the `routes` option

const router = createRouter({

    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes

})

// export the vue router instance
export { router }