import { reactive } from "vue";

export const store = reactive({
  title: "Boolflix",
  apiUri: "https://api.themoviedb.org/3",
  apiKey: "fa0c19b166c045afa7235b79cf4a7b53",

  movies: [],
});
