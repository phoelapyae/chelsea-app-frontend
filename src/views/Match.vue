<template>
  <div>
    <nav
      class="
        navbar navbar-expand-lg navbar-dark
        bg-navbar bg-light
        justify-content-center
      "
    >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li
            class="nav-item active"
            v-for="(type, index) in matchTypes"
            :key="index"
          >
            <router-link
              v-if="type.id == 1 || type.id == 2"
              class="nav-link text-dark"
              :to="{ name: 'fixtures', params: { id: type.id } }"
            >
              {{ type.name }}
            </router-link>
            <router-link
              v-else-if="type.id == 3"
              class="nav-link text-dark"
              :to="{ name: 'league-table' }"
            >
              {{ type.name }}
            </router-link>
            <router-link
              v-else-if="type.id == 4"
              class="nav-link text-dark"
              :to="{ name: 'downloadable-fixture' }"
            >
              {{ type.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("FETCH_MATCH_TYPES");
  },
  computed: mapState(["matchTypes"]),
};
</script>

<style scoped>
.bg-navbar {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
</style>
