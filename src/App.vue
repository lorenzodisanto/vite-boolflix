<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    searchMovie() {
      axios
        .get(this.store.apiUri + "/search/movie", {
          params: {
            api_key: store.apiKey,
            query: store.searchTitle,
          },
        })
        .then((res) => {
          console.log(res.data);
          store.movies = res.data.results.map((movie) => {
            return {
              id: movie.id,
              title: movie.title,
              original_title: movie.original_title,
              language: movie.original_language,
              vote: movie.vote_average,
              poster: movie.poster_path,
              overview: movie.overview,
            };
          });
        });
    },

    searchSeries() {
      axios
        .get(this.store.apiUri + "/search/tv", {
          params: {
            api_key: store.apiKey,
            query: store.searchTitle,
          },
        })
        .then((res) => {
          console.log(res.data);
          store.series = res.data.results.map((serie) => {
            return {
              id: serie.id,
              title: serie.name,
              original_title: serie.original_name,
              language: serie.original_language,
              vote: serie.vote_average,
              poster: serie.poster_path,
              overview: serie.overview,
            };
          });
        });
    },

    searchContents() {
      this.searchMovie();
      this.searchSeries();
    },
  },

  components: { AppHeader, AppMain },
};
</script>

<template>
  <app-header @click-contents="searchContents"></app-header>
  <app-main></app-main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
