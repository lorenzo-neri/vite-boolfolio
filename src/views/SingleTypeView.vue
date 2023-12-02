<script>
import axios from 'axios';

import { state } from '../state';



import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'SingleTypeView',
    components: {
        ProjectCard,
    },
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
            portfolio_api: '/api/types/',
            projects: [],

            projectsType: null,

            currentPage: 1,

            state,

        }
    },
    methods: {
        axiosCall: function () {
            axios
                .get(this.base_url + this.portfolio_api + this.$route.params.slug)
                .then(response => {
                    console.log(response);
                    this.projectsType = response.data.result;
                    console.log(this.projectsType);
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
            <div class="dropdown d-inline-block mt-4">
                <button class="btn dropdown-toggle border border-black" type="button" id="typefilter"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter by Type
                </button>
                <ul class="dropdown-menu border border-black shadow">

                    <div @click="axiosCall">
                        <router-link class="dropdown-item" v-for="type in this.state.types" :to="{
                            name: 'single_type',
                            params: { slug: type.slug }
                        }">
                            {{ type.type }}
                        </router-link>
                    </div>

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


        <div v-if="projectsType" class="row row-cols-3">
            <div v-for="project in projectsType.projects" class="col p-3">

                <ProjectCard :project="project"></ProjectCard>

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
@use '../style.scss' as *;

.dropdown>button {
    background-color: $bln-sw-warning;

    &:hover {
        color: $bln-sw-warning;
        background-color: black;
    }

}

.dropdown-menu {
    background-color: $bln-sw-warning;
    color: black;
    transition: .5s;

    &:hover {
        color: $bln-sw-warning;
        background-color: black;
    }
}



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
