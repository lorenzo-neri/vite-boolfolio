<script>
import AppHeader from './components/layouts/AppHeader.vue';
import AppFooter from './components/layouts/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}


</script>

<template>
  <AppHeader></AppHeader>

  <!-- MAIN -->
  <main style="background-color: #76BED0;" class="py-4">

    <router-view></router-view>

  </main>

  <AppFooter />
</template>

<style lang=scss scoped>
$bln-primary: #76BED0;
$bln-secondary: #F55D3E;
$bln-success: #F7CB15;
$bln-light: #ffff;
$bln-dark: #1b1b1b;

a {
  color: white;
  text-decoration: none;
  transition: .5s;

  &:hover {
    color: $bln-secondary;
  }
}
</style>
