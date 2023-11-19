<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    ProjectCard,
  },
  data() {
    return {
      message: 'Welcome back Vite+Vue',
      base_url: 'http://127.0.0.1:8000',
      portfolio_api: '/api/projects',
      projects: [],

    }
  },
  mounted() {
    axios
      .get(this.base_url + this.portfolio_api)
      .then(response => {
        console.log(response);
        this.projects = response.data.result;
      })
      .catch(err => {
        console.error(err);
      })
  }
}
</script>

<template>
  <header class="bg-success mb-3 text-center">
    {{ message }}
    <h1>Header</h1>
  </header>

  <div class="container">
    <div class="row row-cols-4">
      <div v-for="project in  projects.data " class="col p-3">

        <ProjectCard :thumb="project.thumb" :base_url="base_url" :title="project.title" :type="project.type"
          :description="project.description" :link_github="project.link_github"
          :link_project_online="project.link_project_online" :technologies="project.technologies"></ProjectCard>

      </div>
    </div>
  </div>

  <footer class="bg-success text-center mt-3">
    <h1 class="m-0">Footer</h1>
  </footer>
</template>

<style lang=scss scoped></style>
