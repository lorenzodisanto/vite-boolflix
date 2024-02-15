<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      store,
      searchTitle: "",
    };
  },

  methods: {
    searchMovie() {
      axios
        .get(this.store.apiUri + "/search/movie", {
          params: {
            api_key: store.apiKey,
            query: this.searchTitle,
          },
        })
        .then((res) => {
          console.log(res.data);
          store.movies = res.data.results;
        });
    },
  },

  components: { AppHeader },
};
</script>

<template>
  <div class="container">
    <h1 class="text-danger">{{ store.title }}</h1>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Scegli film"
        aria-label="Scegli film"
        aria-describedby="button"
        v-model="searchTitle"
      />
      <button
        @click="searchMovie()"
        class="btn btn-outline-secondary"
        type="button"
        id="button"
      >
        Search
      </button>
    </div>

    <!-- lista ricerca film -->
    <div>
      <ul v-for="movie in store.movies">
        <li>titolo: {{ movie.title }}</li>
        <li>titolo originale: {{ movie.original_title }}</li>
        <li>lingua: {{ movie.original_language }}</li>
        <li>voto: {{ movie.vote_average }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
