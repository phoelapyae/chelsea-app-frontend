<template>
  <div class="home">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(news,index) in data.news" :key="index" :class="{'active': news.id == 1}">
          <router-link :to="{name: 'news-detail', params: { id: news.id }}">
            <img class="d-block w-100 carousel-item__image" :src="news.image" alt="">
            <div class="carousel-caption d-none d-md-block">
              <h2>{{ news.title }}</h2>
            </div>
          </router-link>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <news-card :news="data.latest_news"></news-card>
    <div class="row p-5 justify-content-center font-weight-bold">
      <router-link class="nav-link all-news-button px-4" :to="{ name: 'news', params: {id: 1} }">
        SEE ALL NEWS
      </router-link>
    </div>
    <match-dashboard :data="data"></match-dashboard>
  </div>
</template>

<script>
import NewService from '@/services/NewService.js';
import NewsCard from '@/components/NewsCard.vue';
import MatchDashboard from '@/components/MatchDashboard.vue';
export default {
  components: {
    NewsCard,
    MatchDashboard
  },
  data() {
    return {
      data: [Array,Object]
    }
  },
  created(){
    NewService.getLatestShow()
    .then((result) => {
      this.data = result.data.data
    }).catch((err) => {
      console.log(err.response);
    });
  }
};
</script>
<style scoped>
.carousel-item__image{
  max-height: 600px !important;
}
.all-news-button {
    border: 1px solid blue;
    color: blue;
    transition: 0.9s all;
}
.all-news-button:hover {
    background: blueviolet;
    color: #fff;
}
</style>