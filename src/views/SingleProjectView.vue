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

            projects: {},

        }
    },
    mounted() {

        const url = `http://localhost:8000/api/projects/${this.$route.params.id}`;

        axios.get(url)
            .then(resp => {
                console.log(resp.data.result);
                this.post = resp.data.result
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

            <ProjectCard :thumb="project.thumb" :base_url="base_url" :title="project.title" :type="project.type"
                :description="project.description" :link_github="project.link_github"
                :link_project_online="project.link_project_online" :technologies="project.technologies"
                :slug="project.slug"></ProjectCard>

        </div>
    </div>
</template>

<style lang=scss scoped></style>