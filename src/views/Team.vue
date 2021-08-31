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
            v-for="(type, index) in teamTypes"
            :key="index"
            @click="setActive(type.id)"
          >
            <router-link
              class="nav-link text-dark font-weight-bold"
              :class="{'active': type.active}"
              :to="{ name: 'teams', params: { team_type_id: type.id, work_type_id: 1 } }"
            >
              {{ type.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <slot></slot>
    <match-dashboard :data="data"></match-dashboard>
  </div>
</template>

<script>
import TeamService from "@/services/TeamService.js";
import MatchDashboard from '@/components/MatchDashboard.vue';
import NewService from '@/services/NewService.js';

export default {
  components: {
    MatchDashboard
  },
  props: {
    team_type_id: {
      required: true
    },
    workTypes: {
      required: null
    }
  },
  data() {
    return {
      teamTypes: [],
      hideCard: false,
      data: [Array,Object]
    };
  },
  created() {
    // get team types
    this.getTeamTypes()

    // Matches Dashboard
    this.getMatchesDashboard()
  },
  methods: {
    getTeamTypes() {
      return TeamService.getTeamTypes()
        .then((res) => {
          this.teamTypes = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    setActive(id){
      this.workTypes.map(workType => {
        workType = workType.id ==1 ? workType.active = true : workType.active = false
        return workType
      })
      return this.teamTypes.map(teamType => {
        teamType = id == teamType.id ? teamType.active = true : teamType.active = false
        return teamType
      })
    },
    getMatchesDashboard(){
      NewService.getLatestShow()
      .then((result) => {
        this.data = result.data.data
      }).catch((err) => {
        console.log(err.response);
      });
    }
  }
};
</script>

<style scoped>
.bg-navbar {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
.work-type-button {
  display: flex;
  border: 1px solid blueviolet;
  align-items: center;
  height: 35px;
  text-decoration: none;
  transition: all 1s;
  letter-spacing: 0.1em;
}

.active-work-button {
  color: #fff;
  background: blueviolet;
  border: 1px solid #fff;

}

.work-type-button:hover {
  color: #fff;
  background: blueviolet;
}

.active {
  border-bottom: 2px solid #000;
}

.nav-item:hover{
  border-bottom: 2px solid #000;
}
</style>
