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

                if (resp.data.success) {

                    this.project = resp.data.result

                } else {

                    this.$router.push({ name: 'NotFoundView' });

                }
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

        <div class="container py-5">
            <div class="row py-5">

                <!-- <ProjectCard :project="project"></ProjectCard> -->

                <!-- <ProjectCard :thumb="project.thumb" :base_url="base_url" :title="project.title" :type="project.type"
                    :description="project.description" :link_github="project.link_github"
                    :link_project_online="project.link_project_online" :technologies="project.technologies"
                    :slug="project.slug"></ProjectCard> -->

                <div class="col">
                    <img class="img-fluid" :src="base_url + '/storage/' + project.thumb" alt="">
                </div>

                <div class="col">
                    <h1>{{ project.title }}</h1>

                    <div v-if="project.type">
                        <div class="badge bg-success text-warning">
                            {{ project.type.type }}
                        </div>
                    </div>

                    <div v-if="project.technologies">
                        <div v-for="technology in project.technologies" class="badge bg-primary mx-1">
                            {{ technology.tech }}
                        </div>
                    </div>

                    <hr>

                    <p>
                        <strong>Description: </strong>
                        {{ project.description }}
                    </p>

                    <hr>
                    <div class="d-flex justify-content-around pb-2">
                        <a :href="project.link_github">
                            <i class="fa-brands fa-github fa-2xl"></i>
                        </a>
                        <a :href="project.link_project_online">
                            <i class="fa-solid fa-globe fa-2xl"></i>
                        </a>

                    </div>

                </div>


            </div>
        </div>
    </div>
    <div v-else>
        <div class="container">

            <div class="" aria-hidden="true">
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

<style lang=scss scoped>
@import url(../../src/style.scss);

$bln-primary: #76BED0;
$bln-secondary: #dc3543;
$bln-success: #F7CB15;
$bln-light: #ffff;
$bln-dark: #1b1b1b;

a {
    color: $bln-dark;
    text-decoration: none;
    transition: .5s;

    &:hover {
        color: $bln-secondary;
    }
}
</style>