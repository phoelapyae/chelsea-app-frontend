<template>
    <div>
        <div>
            <img class="fixture-bg-image" src="../assets/photos/cfc12.jpeg" alt="">
        </div>
        <div class="row p-4 match-content">
            <div class="col-md-8">
                <div v-for="(match,index) in matches" :key="index">
                    <div class="match-item p-3">
                        <p class="mb-0">{{ match.competition.name }}</p>
                        <p class="match-date">{{ match.opponent.stadium }} - {{ match.date }}, {{ match.time }}</p>
                        <div class="row">
                            <div class="col col-md-5 text-right">
                                <span>{{ match.place == 'HOME' ? 'Chelsea' : match.opponent.name }}</span> 
                                <img v-if="match.place == 'AWAY'" class="team-logo mr-1 ml-1" :src="match.opponent.image" alt="">
                                <img v-else class="team-logo mr-1 ml-1" src="../assets/photos/chelsea.png" alt="">
                            </div>
                            <div class="col col-md-2">
                                <p class="mb-0 text-center">{{ match.day }}</p>
                                <p class="text-center">{{ match.month }}</p>
                            </div>
                            <div class="col col-md-5">
                                <img v-if="match.place == 'AWAY'" class="team-logo mr-1 ml-1" src="../assets/photos/chelsea.png" alt="">
                                <img v-else class="team-logo mr-1 ml-1" :src="match.opponent.image" alt="">
                                
                                <span>{{ match.place == 'AWAY' ? 'Chelsea' : match.opponent.name }}</span>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
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

import { mapState } from 'vuex';
import store from '@/store/index.js';

function getMatches(to,next){
    let id = to.params.id;
    store.dispatch('FETCH_MATCHES', id)
    next()
}
export default {
    data() {
        return {
            news: [Array, Object],
            require: true
        }
    },
    beforeRouteEnter (to, from, next) {
        getMatches(to,next)
    },
    beforeRouteUpdate(to,from,next){
        getMatches(to,next)
    },
    updated(){
        this.news = this.matches[0].latest_news
    },
    computed: mapState(['matches'])
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

.match-item {
    background: rgb(255, 255, 255);
    transition: all 0.3s;
}

.match-item:hover {
    box-shadow: 3px 3px 15px 2px rgb(74, 74, 75);
}

.team-logo {
    width: 50px;
}

.match-date {
    font-size: 0.8rem;
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