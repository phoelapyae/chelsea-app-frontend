<template>
    <div class="news-detail p-3">
        <div class="news-detail__heading p-4">
            <h1 class="font-weight-bold text-primary text-center text-uppercase">{{ news.title }}</h1>
            <div class="row">
                <p class="font-weight-bold">{{ news.publish_date }}</p>
                <div class="ml-3">
                    <span class="mr-3"><i class="social-icon bi bi-facebook"></i></span>
                    <span class="mr-3"><i class="social-icon bi bi-twitter"></i></span>
                </div>
            </div>
            <div class="row mt-2">
                <div class="news-detail__content">
                    <div class="news-detail__content-image">
                        <img :src="news.image" alt="">
                    </div>
                    <div class="news-detail__media p-4">
                        {{ news.description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewService from '@/services/NewService.js';
export default {
    props: {
        id:{
            required: true
        },
    },
    data() {
        return {
            news: []
        }
    },
    created(){
        NewService.getNewsDetail(this.id)
        .then((res) => {
            this.news = res.data.data
        })
        .catch(err => {
            console.log(err.response);
        })
    }
}
</script>

<style scoped>
.social-icon {
    font-size: 1.3rem;
    cursor: pointer;
}
.news-detail__content-image > img {
    width: 100%;
    max-height: 600px;
}
</style>