<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },

  methods: {
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

    getStar(vote) {
      vote = vote.toFixed() / 2;
      return vote;
    },
  },
};
</script>

<template>
  <!-- cards film -->
  <h2 class="mt-5">Elenco Film</h2>
  <div class="row">
    <div class="col-3" v-for="movie in store.movies">
      <div class="card p-2">
        <img :src="store.posterUrl + movie.poster_path" alt="" />
        <p>titolo: {{ movie.title }}</p>
        <p>titolo originale: {{ movie.original_title }}</p>
        <p>
          lingua:
          <img :src="getFlag(movie.original_language)" alt="" class="flag" />
        </p>
        <p>
          voto:
          <font-awesome-icon
            v-for="i in 5"
            :icon="
              i <= getStar(movie.vote_average)
                ? 'fa-solid fa-star'
                : 'fa-regular fa-star'
            "
          />
          ({{ movie.vote_average }} / 10)
        </p>
      </div>
    </div>
  </div>

  <!-- cards serie tv -->
  <h2 class="mt-5">Elenco Serie Tv</h2>
  <div class="row">
    <div class="col-3" v-for="serie in store.series">
      <div class="card p-2">
        <img :src="store.posterUrl + serie.poster_path" alt="" />
        <p>titolo: {{ serie.name }}</p>
        <p>titolo originale: {{ serie.name }}</p>
        <p>
          lingua:
          <img :src="getFlag(serie.original_language)" alt="" class="flag" />
        </p>
        <p>
          voto:
          <font-awesome-icon
            v-for="i in 5"
            :icon="
              i <= getStar(serie.vote_average)
                ? 'fa-solid fa-star'
                : 'fa-regular fa-star'
            "
          />
          ({{ serie.vote_average }} / 10)
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flag {
  width: 30px;
}
</style>
