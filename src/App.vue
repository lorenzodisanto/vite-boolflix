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

    searchSeries() {
      axios
        .get(this.store.apiUri + "/search/tv", {
          params: {
            api_key: store.apiKey,
            query: this.searchTitle,
          },
        })
        .then((res) => {
          console.log(res.data);
          store.series = res.data.results;
        });
    },

    searchContents() {
      this.searchMovie();
      this.searchSeries();
    },

    getFlag(lang) {
      if (lang == "it") {
        return "./public/img-flag/it.png";
      }
      if (lang == "en") {
        return "./public/img-flag/en.png";
      }
      if (lang == "es") {
        return "./public/img-flag/es.png";
      }
      if (lang == "ru") {
        return "./public/img-flag/ru.png";
      }
      if (lang == "ja") {
        return "./public/img-flag/ja.png";
      } else {
        return "./public/img-flag/ndf.png";
      }
    },
  },

  components: { AppHeader },
};
</script>

<template>
  <!-- search bar -->
  <div class="container">
    <h1 class="text-danger">{{ store.title }}</h1>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Inizia Ricerca"
        aria-label="Inizia Ricerca"
        aria-describedby="button"
        v-model="searchTitle"
      />
      <button
        @click="searchContents()"
        class="btn btn-outline-secondary"
        type="button"
        id="button"
      >
        Search
      </button>
    </div>

    <div class="d-flex">
      <!-- lista ricerca film -->
      <div class="me-5">
        <h2>Lista film</h2>
        <ul v-for="movie in store.movies">
          <li>titolo: {{ movie.title }}</li>
          <li>titolo originale: {{ movie.original_title }}</li>
          <li>
            lingua: <img :src="getFlag(movie.original_language)" alt="" />
          </li>
          <li>voto: {{ movie.vote_average }}</li>
        </ul>
      </div>
      <!-- lista ricerca serie tv -->
      <div>
        <h2>Lista serie tv</h2>
        <ul v-for="serie in store.series">
          <li>titolo: {{ serie.name }}</li>
          <li>titolo originale: {{ serie.original_name }}</li>
          <li>
            lingua: <img :src="getFlag(serie.original_language)" alt="" />
          </li>
          <li>voto: {{ serie.vote_average }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
