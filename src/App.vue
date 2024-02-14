<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppHeader },
};
</script>

<template>
  <div class="container">
    <h1>{{ store.test }}</h1>
    <app-header> </app-header>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
