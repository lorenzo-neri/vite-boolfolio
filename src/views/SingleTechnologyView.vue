<script>
import axios from 'axios';

import { state } from '../state';



import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'SingleTechnologyView',
    components: {
        ProjectCard,
    },
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
            portfolio_api: '/api/technologies/',
            projects: [],

            projectsTechnology: null,

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
                    this.projectsTechnology = response.data.result;
                    console.log(this.projectsType);
                })
                .catch(err => {
                    console.error(err);
                })
        },
    },
    mounted() {
        this.axiosCall()
        this.state.getTypes()
        this.state.getTechnologies()
    }

}
</script>

<template>
    <div class="container min-vh-100">

        <div class="row">

            <div class="d-flex gap-2">


                <!-- TYPE  DROPDOWNFILTER -->
                <div class="dropdown d-inline-block mt-4">
                    <button class="btn dropdown-toggle border border-black" type="button" id="typefilter"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter by Type
                    </button>
                    <ul class="dropdown-menu border border-black shadow">

                        <router-link class="dropdown-item" v-for="type in this.state.types" :to="{
                            name: 'single_type',
                            params: { slug: type.slug }
                        }">
                            {{ type.type }}
                        </router-link>

                    </ul>
                </div>

                <!-- Tech  DROPDOWNFILTER -->
                <div class="dropdown d-inline-block mt-4">
                    <button class="btn dropdown-toggle border border-black" type="button" id="typefilter"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter by Tech
                    </button>
                    <ul class="dropdown-menu border border-black shadow">

                        <div @click="axiosCall">
                            <router-link class="dropdown-item" v-for="technology in this.state.technologies" :to="{
                                name: 'single_tech',
                                params: { slug: technology.slug }
                            }">
                                {{ technology.tech }}
                            </router-link>
                        </div>

                    </ul>
                </div>

            </div>




        </div>
        <!-- /.row -->


        <div v-if="projectsTechnology" class="row row-cols-3">
            <div v-for="project in projectsTechnology.projects" class="col p-3">

                <ProjectCard :project="project"></ProjectCard>

            </div>
        </div>

        <div class="row">




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
