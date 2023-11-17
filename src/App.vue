<script>
import axios from 'axios';

export default {
  name: 'App',
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
  {{ message }}

  <div class="container">
    <div class="row">
      <div v-for="project in  projects.data " class="col">
        <div class="card text-center">
          <h2>{{ project.title }}</h2>
          <img :src="base_url + '/storage/' + project.thumb" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang=scss scoped></style>
