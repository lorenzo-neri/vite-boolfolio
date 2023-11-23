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
            portfolio_api: '/api/projects?page=',
            projects: [],

            currentPage: 1,

        }
    },
    methods: {
        axiosCall: function () {
            axios
                .get(this.base_url + this.portfolio_api + this.currentPage)
                .then(response => {
                    //console.log(response);
                    this.projects = response.data.result;
                })
                .catch(err => {
                    console.error(err);
                })
        },
        nextPage: function () {
            this.currentPage++

            this.axiosCall()
        },
        prevPage: function () {
            this.currentPage--

            this.axiosCall()
        },
        goFirstPage: function () {

            this.currentPage = 1,

                this.axiosCall()
        },
        goLastPage: function () {

            this.currentPage = this.projects.last_page,

                this.axiosCall()
        },
    },
    mounted() {
        this.axiosCall()
    }

}
</script>

<template>
    <!-- {{ message }} -->

    <!--  <div v-if="projects.title"> -->

    <div id="box" class="container p-2">

        <div aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <a v-if="projects.current_page !== 1" class="page-link" @click="goFirstPage" href="#"
                        aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>


                <li v-if="projects.current_page !== 1" class="page-item"><a @click="prevPage" class="page-link" href="#">{{
                    projects.current_page - 1 }}</a></li>
                <li class="page-item"><a class="page-link bg-secondary" href="#">{{ projects.current_page }}</a></li>
                <li v-if="projects.current_page < projects.last_page" class="page-item"><a @click="nextPage"
                        class="page-link" href="#">{{ projects.current_page + 1 }}</a></li>
                <li class="page-item">
                    <!-- se projects.current_page è minore alle pagine totali non lo faccio vedere  (il dato di last_page lo vedo nella consolle vue) -->

                    <a v-if="projects.current_page < projects.last_page" class="page-link" @click="goLastPage" href="#"
                        aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="row row-cols-3">
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
