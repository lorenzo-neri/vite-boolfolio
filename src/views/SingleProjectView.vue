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


    <div class="container">
        <div class="row row-cols-4">

            <!-- <ProjectCard :project="project"></ProjectCard> -->

            <ProjectCard :thumb="project.thumb" :base_url="base_url" :title="project.title" :type="project.type"
                :description="project.description" :link_github="project.link_github"
                :link_project_online="project.link_project_online" :technologies="project.technologies"
                :slug="project.slug"></ProjectCard>

        </div>
    </div>
</template>

<style lang=scss scoped></style>