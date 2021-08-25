<template>
    <div>
        <div>
            <img class="fixture-bg-image" src="../assets/photos/cfc12.jpeg" alt="">
        </div>
        <div class="row p-4 match-content">
            <div class="col-md-8">
                <slot></slot>
            </div>
            <div class="col-md-4">
                <div v-for="(latestNews,index) in news" :key="index">
                    <div class="row">
                        <div class="col news-item p-2">
                            <div class="cover-title">
                                <p class="news-title p-2 text-white">{{ latestNews.title }}</p>
                                <span class="publish-date text-white">{{ latestNews.publish_date }}</span>
                            </div>
                            <img class="news-image" :src="latestNews.image" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        news: {
            type: [Array, Object],
            required: true
        },
    },
}
</script>

<style scoped>

.match-content{
    background: rgb(224, 235, 235);
}
.fixture-bg-image {
    width: 100%;
    height: 300px;
}

/* Latest news style  */
.news-item{
    height: 310px;
    background: rgb(236, 236, 241);
}

.news-image {
    position: absolute;
    height: 300px;
    width: 100%;
    opacity: 0.7;
}

.news-title {
    font-family: 'Teko', sans-serif;
    font-size: 2.2rem;
}

.cover-title {
    position: absolute;
    z-index: 99;
}

.publish-date {
    margin-left: 5%;
}

</style>