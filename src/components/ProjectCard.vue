<script>
export default {
    name: 'ProjectCard',
    props: {
        title: String,
        thumb: String,
        base_url: String,
        type: Object,
        technologies: Array,
        description: String,
        link_github: String,
        link_project_online: String,

        slug: String
    }
}
</script>

<template>
    <div class="card h-100 text-center">
        <img class="card-img-top img-fluid" v-if="thumb" :src="base_url + '/storage/' + thumb" alt="">

        <div class="card-body">

            <h2>
                {{ title }}
            </h2>

            <div v-if="type">
                <div class="badge p-2 bg-dark text-align-center sw_warning">
                    {{ type.type }}
                    <span v-if="type.type === 'Frontend'">
                        <i class="fa-brands fa-jedi-order fa-xl"></i>
                    </span>
                    <span v-else-if="type.type === 'Backend'">
                        <i class="fa-brands fa-galactic-republic fa-xl"></i>
                    </span>
                    <span v-else-if="type.type === 'Full Stack'">
                        <i class="fa-brands fa-jedi-order fa-xl"></i>
                        <i class="fa-brands fa-galactic-republic fa-xl ps-1"></i>
                    </span>
                </div>

            </div>
            <hr>
            <div v-if="technologies">
                <div v-for="    technology     in     technologies    " class="badge bg-primary mx-1">
                    {{ technology.tech }}
                </div>

            </div>
            <hr>


            <!-- <p class="card-text">{{ description }}</p> -->

            <div class="d-flex justify-content-around pb-2">
                <a :href="link_github">
                    <i class="fa-brands fa-github fa-2xl"></i>
                </a>
                <a :href="link_project_online">
                    <i class="fa-solid fa-globe fa-2xl"></i>
                </a>

            </div>
        </div>
        <div class="card-footer">

            <router-link :to="{ name: 'project', params: { slug: slug } }">View project</router-link>
        </div>
    </div>
</template>

<style lang=scss>
@import '../style.scss';
</style>
