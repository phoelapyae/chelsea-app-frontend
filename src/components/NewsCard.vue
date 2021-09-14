<template>
  <div>
    <div v-if="news.length > 0" class="row justify-content-center m-3">
      <div
        class="col-md-3 news-item p-2"
        v-for="(latestNews, index) in news"
        :key="index"
      >
        <router-link
          :to="{ name: 'news-detail', params: { id: latestNews.id } }"
        >
          <div class="cover-title">
            <p class="news-title p-2 text-white">{{ latestNews.title }}</p>
            <span class="publish-date text-white">{{
              latestNews.publish_date
            }}</span>
          </div>
          <img class="news-image" :src="latestNews.image" alt="" />
        </router-link>
      </div>
    </div>
    <div v-else class="text-center no-data-page">
      No data for this page. Please visit later!
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: [Array],
      required: true,
    },
  },
};
</script>

<style scoped>
.news-item {
  height: 310px;
  background: rgb(236, 236, 241);
}

.news-image {
  position: absolute;
  height: 300px;
  width: 296px;
  opacity: 0.7;
}

.news-title {
  font-family: "Teko", sans-serif;
  font-size: 2.2rem;
}

.cover-title {
  position: absolute;
  z-index: 99;
}

.publish-date {
  margin-left: 5%;
}

.no-data-page {
  margin-top: 20%;
  font-family: "Roboto Mono", monospace;
}
</style>
