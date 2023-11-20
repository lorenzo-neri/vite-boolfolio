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
            base_url: 'http://127.0.0.1:8000',
            portfolio_api: '/api/projects',
            project: {},

        }
    },
    mounted() {

        const url = `http://localhost:8000/api/projects/${this.$route.params.slug}`;

        axios.get(url)
            .then(resp => {
                console.log(resp.data.result);
                this.project = resp.data.result
            })
            .catch(err => {
                console.log(err.message);
            })

    }
}
</script>

<template>
    <!-- {{ message }} -->

    <div v-if="project.title">

        <div class="container">
            <div class="row row-cols-4 justify-content-center">

                <!-- <ProjectCard :project="project"></ProjectCard> -->

                <ProjectCard :thumb="project.thumb" :base_url="base_url" :title="project.title" :type="project.type"
                    :description="project.description" :link_github="project.link_github"
                    :link_project_online="project.link_project_online" :technologies="project.technologies"
                    :slug="project.slug"></ProjectCard>

            </div>
        </div>
    </div>
    <div v-else>
        <div class="container">

            <div class="card" aria-hidden="true">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                    </h5>
                    <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                    </p>
                    <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang=scss scoped></style>