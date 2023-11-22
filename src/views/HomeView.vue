<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'HomeView',
    components: {
        ProjectCard,
    },
    data() {
        return {
            /* message: 'Welcome back Vite+Vue', */
            base_url: 'http://127.0.0.1:8000',
            portfolio_api: '/api/projects',
            projects: [],

        }
    },
    mounted() {
        axios
            .get(this.base_url + this.portfolio_api)
            .then(response => {
                console.log(response);
                this.projects = response.data.result;
            })
            .catch(err => {
                console.error(err);
            })
    }
}
</script>

<template>
    <!-- {{ message }} -->

    <!--  <div v-if="projects.title"> -->

    <div id="box" class="container">
        <div class="row row-cols-4">
            <div v-for="project in  projects.data" class="col p-3">



                <ProjectCard :thumb="project.thumb" :base_url="base_url" :title="project.title" :type="project.type"
                    :description="project.description" :link_github="project.link_github"
                    :link_project_online="project.link_project_online" :technologies="project.technologies"
                    :slug="project.slug"></ProjectCard>

            </div>
        </div>
    </div>
</template>

<style lang=scss scoped></style>
