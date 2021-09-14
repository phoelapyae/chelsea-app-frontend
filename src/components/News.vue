<template>
  <div>
    <news-card :news="news"></news-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/index.js";
import NewsCard from "@/components/NewsCard.vue";

function getNews(to, next) {
  let id = to.params.id;
  store.dispatch("FETCH_NEWS", id);
  next();
}

export default {
  props: ["id"],
  components: {
    NewsCard,
  },
  beforeRouteEnter(to, from, next) {
    getNews(to, next);
  },
  beforeRouteUpdate(to, from, next) {
    getNews(to, next);
  },
  computed: mapState(["news"]),
};
</script>

<style scoped></style>
