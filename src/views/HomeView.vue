<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.scss';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'HomeView',
    components: {
        ProjectCard,


        Swiper,
        SwiperSlide,


    },


    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },



    data() {
        return {
            /* message: 'Welcome back Vite+Vue', */
            base_url: 'http://127.0.0.1:8000',
            portfolio_api: '/api/projects?page=',
            projects: [],
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
    },
    mounted() {
        this.axiosCall()
    }

}
</script>

<template>
    <!-- {{ message }} -->

    <!--  <div v-if="projects.title"> -->

    <div class="min-vh-100">


        <div class="p-5 mb-4 bg-black sw_warning">
            <div class="container py-5">
                <div class="display-5 fw-bold">
                    Vuoi sapere da quale pianeta provengo?
                </div>
                <router-link to="/about-me" class="display-5 fw-bold text-black btn btn-danger mt-4">
                    About me
                </router-link>
            </div>
        </div>


        <div class="container p-2">


            <div class="row">

                <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
                    clickable: true,
                }" :navigation="true" :modules="modules" class="mySwiper">


                    <swiper-slide v-for="(project, index) in projects.data" :key="index" :virtualIndex="index">
                        <div class="rettangolo">{{ project.title }}</div>
                    </swiper-slide>


                </swiper>
            </div>

        </div>
    </div>
</template>

<style lang=scss></style>
