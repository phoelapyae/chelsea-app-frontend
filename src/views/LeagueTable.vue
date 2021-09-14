<template>
  <div>
    <MatchFixture :news="news">
      <div class="row bg-light p-3">
        <div class="col-md-12">
          <h3>2021/2022</h3>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>POS</th>
                  <th>TEAM</th>
                  <th>P</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>GD</th>
                  <th>PTS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(table, index) in leagueTables" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <img :src="table.opponent.image" alt="" class="mr-2" />
                    <span>{{ table.opponent.name }}</span>
                  </td>
                  <td>{{ table.P }}</td>
                  <td>{{ table.W }}</td>
                  <td>{{ table.D }}</td>
                  <td>{{ table.L }}</td>
                  <td>{{ table.GF }}</td>
                  <td>{{ table.GA }}</td>
                  <td>{{ table.GD }}</td>
                  <td>{{ table.pts }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MatchFixture>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MatchFixture from "@/components/MatchFixture.vue";
export default {
  components: {
    MatchFixture,
  },
  data() {
    return {
      news: {
        type: [Array, Object],
        require: true,
      },
    };
  },
  created() {
    this.$store.dispatch("FETCH_LEAGUE_TABLES");
    // this.news = this.LeagueTables
  },
  updated() {
    this.news = this.leagueTables[0].latest_news;
  },
  computed: mapState(["leagueTables"]),
};
</script>

<style scoped>
.fixture-bg-image {
  width: 100%;
  height: 300px;
}
</style>
