<template>
  <div>
    <MatchFixture :news="news">
      <div v-for="(match, index) in matches" :key="index">
        <div class="match-item p-3">
          <p class="mb-0">{{ match.competition.name }}</p>
          <p class="match-date">
            {{ match.opponent.stadium }} - {{ match.date }}, {{ match.time }}
          </p>
          <div class="row">
            <div class="col col-md-5 text-right">
              <span>{{
                match.place == "HOME" ? "Chelsea" : match.opponent.name
              }}</span>
              <img
                v-if="match.place == 'AWAY'"
                class="team-logo mr-1 ml-1"
                :src="match.opponent.image"
                alt=""
              />
              <img
                v-else
                class="team-logo mr-1 ml-1"
                src="../assets/photos/chelsea.png"
                alt=""
              />
            </div>
            <div class="col col-md-2">
              <p class="mb-0 text-center">{{ match.day }}</p>
              <p class="text-center">{{ match.month }}</p>
            </div>
            <div class="col col-md-5">
              <img
                v-if="match.place == 'AWAY'"
                class="team-logo mr-1 ml-1"
                src="../assets/photos/chelsea.png"
                alt=""
              />
              <img
                v-else
                class="team-logo mr-1 ml-1"
                :src="match.opponent.image"
                alt=""
              />
              <span>{{
                match.place == "AWAY" ? "Chelsea" : match.opponent.name
              }}</span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </MatchFixture>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/index.js";
import MatchFixture from "@/components/MatchFixture.vue";

function getMatches(to, next) {
  let id = to.params.id;
  store.dispatch("FETCH_MATCHES", id);
  next();
}
export default {
  components: { MatchFixture },
  data() {
    return {
      news: {
        type: [Array, Object],
        require: true,
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    getMatches(to, next);
  },
  beforeRouteUpdate(to, from, next) {
    getMatches(to, next);
  },
  updated() {
    this.news = this.matches[0].latest_news;
  },
  computed: mapState(["matches"]),
};
</script>

<style scoped>
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
</style>
