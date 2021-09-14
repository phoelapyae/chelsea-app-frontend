<template>
  <div class="container my-4">
    <h1 class="text-center font-weight-bold text-primary my-2">
      MATCHDAY PACKAGES
    </h1>
    <div v-for="(pack, index) in packages" :key="index" class="mb-3">
      <div class="row bg-light">
        <div class="col-md-4">
          <img :src="pack.cover_image" alt="" />
        </div>
        <div class="col-md-4 p-3">
          <h3>{{ pack.name }}</h3>
          <div class="mt-5">
            <h3>
              <span class="text-success">£{{ pack.price }}</span>
            </h3>
          </div>
        </div>
        <div class="col-md-4 p-3">
          <h6 class="text-success">Benefits</h6>
          <div v-for="(benefit, index) in benefits" :key="index">
            <p>{{ benefit.name }}</p>
          </div>
        </div>
      </div>
      <div class="row bg-light p-3 mb-3 justify-content-center">
        <button class="btn btn-primary" @click="toggleMatches(pack)">
          {{ pack.expanded == true ? "Hide" : "Show" }} fixtures
        </button>
      </div>
      <div v-if="pack.expanded == true">
        <div v-for="(match, index) in pack.matches" :key="index">
          <div class="row bg-light p-3 mb-3 matches-card">
            <div class="col-md-4">
              <div>
                <img
                  class="team-logo mr-1 ml-1"
                  src="../assets/photos/cfc-logo.png"
                  alt=""
                />
                <span> V </span>
                <img
                  class="team-logo mr-1 ml-1"
                  :src="match.opponent.image"
                  alt=""
                />
                <span class="font-weight-bold text-primary">{{
                  match.opponent.name
                }}</span>
              </div>
            </div>
            <div class="col-md-6">
              <h6 class="font-weight-bold text-primary">
                {{ match.competition.name }}
              </h6>
              <span>{{ match.date }}, {{ match.time }}</span>
            </div>
            <div class="col-md-2">
              <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TicketService from "@/services/TicketService.js";
export default {
  data() {
    return {
      packages: [Array, Object],
      benefits: [Array, Object],
    };
  },
  created() {
    this.buyPackages();
    this.getBenefits();
  },
  methods: {
    buyPackages() {
      TicketService.getPackages()
        .then((result) => {
          this.packages = result.data.data;
        })
        .catch((err) => {
          console.log(err.response.message);
        });
    },
    getBenefits() {
      TicketService.getBenefits()
        .then((res) => {
          this.benefits = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    toggleMatches(pack) {
      pack.expanded = !pack.expanded;
    },
  },
};
</script>

<style scoped></style>
