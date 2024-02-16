<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },

  props: {
    production: Object,
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
  <div>
    <div class="front">
      <img :src="store.posterUrl + production.poster" alt="" />
      <img
        v-if="!production.poster"
        src="https://demofree.sirv.com/nope-not-here.jpg"
        alt=""
      />
      <div class="back">
        <p>titolo: {{ production.title }}</p>
        <p>titolo originale: {{ production.original_title }}</p>
        <p>
          lingua:
          <img :src="getFlag(production.language)" alt="" class="flag" />
        </p>
        <p>
          voto:
          <font-awesome-icon
            v-for="i in 5"
            :icon="
              i <= getStar(production.vote)
                ? 'fa-solid fa-star'
                : 'fa-regular fa-star'
            "
          />
          ({{ production.vote }} / 10)
        </p>
        <p>Descrizione: {{ production.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flag {
  width: 30px;
}

img {
  width: 100%;
}

.fa-star {
  color: #ffc800;
}

.front {
  position: relative;
}

.back {
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  padding: 10px;
  display: none;
  overflow: auto;
}

.front:hover .back {
  display: block;
}
</style>
