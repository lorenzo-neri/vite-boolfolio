// 0.Import the createWebHashHistory and createRouter from vue-router

import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import SingleProjectView from './views/SingleProjectView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactsView from './views/ContactsView.vue'
import NotFoundView from './views/NotFoundView.vue'
import AboutMeView from './views/AboutMeView.vue'
import SingleTypeView from './views/SingleTypeView.vue'
import SingleTechnologyView from './views/SingleTechnologyView.vue'

// 1. Define route components.

//createApp(App).mount('#app')

// 2. Define some routes

//const HomeView = '';

const routes = [
    {
        path: '/', component: HomeView
    },
    {
        path: '/projects', name: 'projects', component: ProjectsView
    },
    {
        path: '/project/:slug', name: 'project', component: SingleProjectView
    },
    {
        path: '/contacts', name: 'ContactsView', component: ContactsView
    },
    {
        path: '/about-me', name: 'AboutMeView', component: AboutMeView
    },
    {
        path: '/type/:slug', name: 'single_type', component: SingleTypeView
    },
    {
        path: '/technology/:slug', name: 'single_tech', component: SingleTechnologyView
    },
    {
        path: '/:pathMatch(.*)*', name: 'NotFoundView', component: NotFoundView
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