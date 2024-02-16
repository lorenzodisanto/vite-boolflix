<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCard },
};
</script>

<template>
  <div class="container">
    <h2 class="mt-5">Film</h2>
    <div class="row g-3">
      <app-card
        v-for="movie in store.movies"
        :production="movie"
        :key="movie.id"
        class="col-md-4 col-lg-3"
      />
    </div>

    <h2 class="mt-5">Serie Tv</h2>
    <div class="row g-3">
      <app-card
        v-for="serie in store.series"
        :production="serie"
        :key="serie.id"
        class="col-md-4 col-lg-3"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
