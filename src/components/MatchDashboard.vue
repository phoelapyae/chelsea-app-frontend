<template>
  <div>
    <div class="container matches-dashboard p-4">
      <h5 class="text-center">
        <span class="bg-success text-white">NEXT MATCH</span> 11 DAYS / 22 HOURS
        / 33 MINS
      </h5>
      <div class="row mt-3">
        <div class="col-4 matches-dashboard__item p-3">
          <div class="row">
            <div class="">
              <h6 class="text-uppercase text-primary font-weight-bold">
                {{ data.last_match.competition.name }}
              </h6>
              <p>
                {{ data.last_match.opponent.stadium }} |
                {{ data.last_match.date }}, {{ data.last_match.time }}
              </p>
            </div>
            <div class="">
              <span class="bg-primary text-white">LAST MATCH</span>
            </div>
          </div>
          <div class="row mb-3">
            <div>
              <img :src="data.last_match.opponent.image" alt="" />
              <span>{{ data.last_match.opponent.name }}</span>
            </div>
            <div class="ml-auto">
              <span class="result mr-1 font-weight-bold">1</span>
            </div>
          </div>
          <div class="row">
            <div>
              <img
                class="team-logo mr-1"
                src="../assets/photos/chelsea.png"
                alt=""
              />
              <span>Chelsea</span>
            </div>
            <div class="ml-auto">
              <span class="result mr-1 font-weight-bold">1</span>
            </div>
          </div>
          <div class="row mt-3 justify-content-end">
            <router-link
              class="font-weight-bold nav-link"
              :to="{ name: 'fixtures', params: { id: 1 } }"
              >MORE MATCHES >></router-link
            >
          </div>
        </div>
        <div class="col-4 matches-dashboard__item pl-5">
          <div class="row">
            <div class="">
              <h6 class="text-uppercase text-primary font-weight-bold">
                {{ data.next_match.competition.name }}
              </h6>
              <p>{{ data.next_match.opponent.stadium }} |</p>
              <p>{{ data.next_match.date }}, {{ data.next_match.time }}</p>
            </div>
            <div class="">
              <span class="bg-primary text-white">NEXT MATCH</span>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <div>
                <img :src="data.next_match.opponent.image" alt="" />
                <span>{{ data.next_match.opponent.name }}</span>
              </div>
              <div>
                <img
                  class="team-logo mr-1"
                  src="../assets/photos/chelsea.png"
                  alt=""
                />
                <span>Chelsea</span>
              </div>
            </div>
            <div class="col">
              <h2>{{ data.next_match.day }}</h2>
              <p>{{ data.next_match.month }}</p>
            </div>
          </div>
        </div>
        <div class="col-4 matches-dashboard__item">
          <h6>PREMIER LEAGUE 2021/2022</h6>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>POS</th>
                  <th>TEAM</th>
                  <th>P</th>
                  <th>GD</th>
                  <th>PTS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(league, index) in data.league_tables" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ league.opponent.name }}</td>
                  <td>{{ league.P }}</td>
                  <td>{{ league.GD }}</td>
                  <td>{{ league.pts }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row justify-content-end">
            <router-link
              class="font-weight-bold nav-link"
              :to="{ name: 'league-table' }"
              >MORE MATCHES >></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [Array, Object],
      required: true,
    },
  },
};
</script>

<style scoped>
/** Match Dashboard */
.matches-dashboard {
  position: relative;
  width: 100%;
  height: 400px;
  border: 0.75rem solid #001489;
}

.matches-dashboard__item {
  border-right: 2px solid gray;
}

.team-logo {
  width: 40px;
}

.result {
  font-size: 1.5rem;
}
</style>
