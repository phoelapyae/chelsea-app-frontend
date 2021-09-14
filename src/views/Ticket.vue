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
            v-for="(type, index) in ticketTypes"
            :key="index"
          >
            <router-link
              class="nav-link text-dark font-weight-bold"
              v-if="type.id === 1"
              :to="{ name: 'tickets' }"
            >
              {{ type.name }}
            </router-link>
            <router-link
              class="nav-link text-dark font-weight-bold"
              v-else
              :to="{ name: 'ticket-infos', params: { id: type.id } }"
            >
              {{ type.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <img
        class="w-100"
        src="../assets/photos/cfc-downloadable-image.jpeg"
        alt=""
      />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import TicketService from "@/services/TicketService.js";
export default {
  data() {
    return {
      ticketTypes: [Array, Object],
    };
  },
  created() {
    //Get ticket types
    this.getTicketTypes();
  },
  methods: {
    getTicketTypes() {
      TicketService.getTicketTypes()
        .then((res) => {
          this.ticketTypes = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style scoped></style>
