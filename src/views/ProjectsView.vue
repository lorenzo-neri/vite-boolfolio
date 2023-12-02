<script>
import axios from 'axios';

import { state } from '../state';

import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectsView',
    components: {
        ProjectCard,
    },
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
            portfolio_api: '/api/projects?page=',
            projects: [],

            currentPage: 1,

            state,

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
        this.state.getTypes()
    }

}
</script>

<template>
    <div class="container min-vh-100">

        <div class="row">


            <!-- TYPE  DROPDOWNFILTER -->
            <div class="dropdown open d-inline-block mt-4">
                <button class="btn dropdown-toggle border border-white bg-white shadow" type="button" id="typefilter"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter by Type
                </button>
                <ul class="dropdown-menu border border-white bg-white shadow">

                    <router-link class="dropdown-item" v-for="type in this.state.types" :to="{
                        name: 'type',
                        params: { slug: type.slug }
                    }">
                        {{ type.type }}
                    </router-link>

                </ul>
            </div>


            <div aria-label="Page navigation example">
                <ul class="pagination d-flex justify-content-end">
                    <li class="page-item">
                        <button v-if="projects.current_page !== 1" class="page-link" @click="goFirstPage"
                            aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>


                    <li v-if="projects.current_page !== 1" class="page-item"><button @click="prevPage" class="page-link">{{
                        projects.current_page - 1 }}</button></li>
                    <li class="page-item"><button class="page-link bg-secondary">{{ projects.current_page
                    }}</button>
                    </li>
                    <li v-if="projects.current_page < projects.last_page" class="page-item"><button @click="nextPage"
                            class="page-link">{{ projects.current_page + 1 }}</button></li>
                    <li class="page-item">
                        <!-- se projects.current_page è minore alle pagine totali non lo faccio vedere  (il dato di last_page lo vedo nella consolle vue) -->

                        <button v-if="projects.current_page < projects.last_page" class="page-link" @click="goLastPage"
                            aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </div>

        </div>
        <!-- /.row -->


        <div class="row row-cols-3">
            <div v-for="project in  projects.data" class="col p-3">

                <ProjectCard :thumb="project.thumb" :base_url="base_url" :title="project.title" :type="project.type"
                    :description="project.description" :link_github="project.link_github"
                    :link_project_online="project.link_project_online" :technologies="project.technologies"
                    :slug="project.slug"></ProjectCard>

            </div>
        </div>

        <div class="row">


            <div aria-label="Page navigation example">
                <ul class="pagination d-flex justify-content-end">
                    <li class="page-item">
                        <button v-if="projects.current_page !== 1" class="page-link" @click="goFirstPage"
                            aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>


                    <li v-if="projects.current_page !== 1" class="page-item"><button @click="prevPage" class="page-link">{{
                        projects.current_page - 1 }}</button></li>
                    <li class="page-item"><button class="page-link bg-secondary">{{ projects.current_page
                    }}</button>
                    </li>
                    <li v-if="projects.current_page < projects.last_page" class="page-item"><button @click="nextPage"
                            class="page-link">{{ projects.current_page + 1 }}</button></li>
                    <li class="page-item">
                        <!-- se projects.current_page è minore alle pagine totali non lo faccio vedere  (il dato di last_page lo vedo nella consolle vue) -->

                        <button v-if="projects.current_page < projects.last_page" class="page-link" @click="goLastPage"
                            aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </div>

        </div>
        <!-- /.row -->

    </div>
</template>

<style lang=scss scoped>
$bln-sw-warning: #fee003;
$bln-primary: #76BED0;
$bln-secondary: #dc3543;

.page-link {
    color: $bln-sw-warning;
    background-color: black;
    border: 1px solid black;
    transition: .5s;

    &:hover {
        background-color: $bln-secondary;
        border: 1px solid $bln-sw-warning;
        color: $bln-sw-warning;
    }
}
</style>
