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
  <main style="
  background-image: url(../src/assets/img/space.jpeg);
  /* background-size: cover; */
  background-size: contain;">

    <div class="py-5">

      <div class="pt-5">
        <div class="pt-3">

          <router-view></router-view>

        </div>
      </div>

    </div>

  </main>
  <!-- /MAIN -->

  <AppFooter />
</template>

<style lang=scss scoped>
$bln-primary: #76BED0;
$bln-secondary: #F55D3E;
$bln-success: #F7CB15;
$bln-light: #ffff;
$bln-dark: #1b1b1b;

#black_square {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.308);
}

a {
  color: white;
  text-decoration: none;
  transition: .5s;

  &:hover {
    color: $bln-secondary;
  }
}
</style>
