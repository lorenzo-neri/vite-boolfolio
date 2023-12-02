<script>
import { state } from '../state';

export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            //base_url: 'http://127.0.0.1:8000',
            portfolio_api: '/api/types/',
            projects: [],
            type: null,

            currentPage: 1,

            state,

        }
    },
}
</script>

<template>
    <div class="card h-100 text-center">
        <img class="card-img-top img-fluid" v-if="project.thumb" :src="state.base_url + 'storage/' + project.thumb" alt="">

        <div class="card-body">

            <h2>
                {{ project.title }}
            </h2>

            <div v-if="project.type">
                <div class="badge p-2 bg-dark text-align-center sw_warning">
                    {{ project.type.type }}
                    <span v-if="project.type.type === 'Frontend'">
                        <i class="fa-brands fa-jedi-order fa-xl"></i>
                    </span>
                    <span v-else-if="project.type.type === 'Backend'">
                        <i class="fa-brands fa-galactic-republic fa-xl"></i>
                    </span>
                    <span v-else-if="project.type.type === 'Full Stack'">
                        <i class="fa-brands fa-jedi-order fa-xl"></i>
                        <i class="fa-brands fa-galactic-republic fa-xl ps-1"></i>
                    </span>
                </div>

            </div>
            <hr>
            <div v-if="project.technologies">
                <div v-for="    technology     in     project.technologies    " class="badge bg-primary mx-1">
                    {{ technology.tech }}
                </div>

            </div>
            <hr>


            <!-- <p class="card-text">{{ description }}</p> -->

            <div class="d-flex justify-content-around pb-2">
                <a :href="project.link_github">
                    <i class="fa-brands fa-github fa-2xl"></i>
                </a>
                <a :href="project.link_project_online">
                    <i class="fa-solid fa-globe fa-2xl"></i>
                </a>

            </div>
        </div>
        <div class="card-footer">

            <router-link :to="{ name: 'project', params: { slug: project.slug } }">View project</router-link>
        </div>
    </div>
</template>

<style lang=scss>
@import '../style.scss';
</style>
