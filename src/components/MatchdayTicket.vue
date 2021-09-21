<template>
  <div>
    <club-bg-image></club-bg-image>
    <div class="matches p-5">
      <div v-for="(match, index) in matches" :key="index">
        <div
          class="row bg-light p-3 mb-3 matches-card"
          @click="togglePackages(match)"
        >
          <div class="col-md-9">
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
          <div class="col-md-3">
            <h6 class="font-weight-bold text-primary">
              {{ match.competition.name }}
            </h6>
            <span>{{ match.date }}, {{ match.time }}</span>
          </div>
        </div>

        <div v-if="match.expanded == true">
          <div v-for="(pack, index) in match.packages" :key="index">
            <div class="row mb-3 bg-light">
              <div class="col-md-4">
                <img :src="pack.cover_image" alt="" />
              </div>
              <div class="col-md-4 p-3">
                <router-link class="package-name" :to="{name: 'package-detail', params: { package_id: pack.id }}">
                  <h3>{{ pack.name }}</h3>
                </router-link>
                <div class="mt-5">
                  <h3>
                    <span class="text-success">£{{ pack.price }}</span>
                  </h3>
                  <!-- <a href="" class="btn btn-warning text-white font-weight-bold"
                    >LIMITED</a
                  > -->
                  <router-link class="nav-link btn btn-primary" :to="{name: 'seat-selection', query: {package_id: pack.id, match_id: match.id}}">Buy Now</router-link>
                </div>
              </div>
              <div class="col-md-4 p-3">
                <h6 class="text-success">Benefits</h6>
                <div v-for="(benefit, index) in benefits" :key="index">
                  <p>{{ benefit.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TicketService from "@/services/TicketService.js";
import PackageService from "@/services/PackageService.js";
import ClubBgImage from '@/components/ClubBgImage.vue';

export default {
  components: {
    ClubBgImage
  },
  data() {
    return {
      matches: [Array, Object],
      benefits: [Array, Object],
    };
  },
  created() {
    // Get buy tickets
    this.getBuyTickets();

    // Get benefits
    this.getBenefits();
  },
  methods: {
    getBuyTickets() {
      TicketService.buyTickets()
        .then((res) => {
          this.matches = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getBenefits() {
      PackageService.getBenefits()
        .then((res) => {
          this.benefits = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    togglePackages(match) {
      match.expanded = !match.expanded;
    },
  },
};
</script>

<style scoped>
/** Match Styles */
.matches-card {
  cursor: pointer;
}

/** Package Styles */
.package-name {
  text-decoration: none;
}

.package-name:hover {
  color: rgb(5, 168, 5);
}
</style>
