<template>
  <div>
    <nav
      class="
        navbar navbar-expand-lg navbar-dark
        bg-light bg-navbar
        justify-content-center
        pb-0
      "
    >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li
            class="nav-item mr-2"
            v-for="(cat, index) in clubCategories"
            :key="index"
          >
            <router-link
              v-if="cat.id == 1"
              class="nav-link text-dark font-weight-bold"
              :to="{ name: 'matchday-tickets' }"
            >
              {{ cat.name }}
            </router-link>
            <router-link
              v-if="cat.id == 2"
              class="nav-link text-dark font-weight-bold"
              :to="{ name: 'matchday-packages' }"
            >
              {{ cat.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import TicketService from "@/services/TicketService.js";
export default {
  data() {
    return {
      clubCategories: [Array, Object],
    };
  },
  created() {
    // Get club categories
    this.getClubCategories();
  },
  methods: {
    getClubCategories() {
      TicketService.getClubCategories()
        .then((res) => {
          this.clubCategories = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style scoped></style>
