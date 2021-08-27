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
    <div class="row px-5 pt-3">
      <h1 class="mr-auto position-title">{{ team_type_id === 1 ? 'MEN' : team_type_id === 2 ? 'WOMEN' : team_type_id === 3 ? 'ACADAMY' : 'ONLOAN' }}</h1>
      <ul class="navbar">
        <li 
          class="nav-link" 
          v-for="(type,index) in workTypes" 
          :key="index"
          @click="activeWorkButton(type.id)"
        >
          <router-link 
            class="work-type-button p-1 font-weight-bold" 
            :class="{'active-work-button': type.active}"
            :to="{ name: 'teams', params: { team_type_id: team_type_id, work_type_id: type.id}}"
          >
            {{ type.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div v-if="teams.length > 0" class="px-4">
      <div class="accordian-content">
        <div v-for="(pos,index) in positions" :key="index">
          <div class="accordian-item">
            <h3 @click="togglePosition(pos.id)" class="font-weight-bold accordian-title">{{ pos.name }}</h3>
            <div v-if="pos.expanded" class="row">
              <div v-for="(team,index) in teams" 
                :key="index">
                  <div 
                    class="col-md-12 accordian-items__card mb-3 mr-2" 
                    v-show="pos.id == team.position.id"
                  >
                    <div class="card-content">
                      <div class="card-content__image">
                        <img v-bind:src="team.avater" alt="">
                      </div>
                      <div class="row card-content__title">
                        <div class="card-content__number p-1">
                          <span class="text-white font-weight-bold">{{ team.number }}</span>
                        </div>
                        <h3 class="text-white font-weight-bold mt-2">
                          {{ team.name }}
                        </h3>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5" v-else>
      <h3>There is no data yet for this page. Please visit later.</h3>
    </div>
  </div>
</template>

<script>
import TeamService from "@/services/TeamService.js";

function getTeams(to, next){
  let team_type_id = to.params.team_type_id
  let work_type_id = to.params.work_type_id
  return TeamService.getTeams(team_type_id, work_type_id)
      .then((res) => {
        var teams = res.data.data
        next()
        return teams
      })
      .catch(err => {
        console.log(err.response);
      })
}

export default {
  props: {
    team_type_id: {
      type: Number,
      default: 1
    },
    work_type_id: {
      type: Number,
      default: 1
    },
  },
  data() {
    return {
      positions: [],
      workTypes: [],
      teamTypes: [],
      teams: [],
      hideCard: false,
      expanded: {
        type: Boolean,
        default: true
      },
      active: {
        type: Boolean,
        default: false
      }
    };
  },
  beforeRouteEnter (to, from, next) {
    getTeams(to, next)
    .then((res) => {
      console.log(res);
    })
  },
  beforeRouteUpdate(to, from, next){
    
    getTeams(to, next)
    .then((res) => {
      // console.log(res);
      this.teams = res.teams 
      this.positions = res.positions
    })
  },
  created() {
    // get work types
    this.getWorkTypes();

    // get team types
    this.getTeamTypes();

    // get teams
    this.getTeams(1,1)

     // get positions
    // this.getPositions();
  },
  methods: {
    getPositions() {
      return TeamService.getPositions()
        .then((res) => {
          this.positions = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getWorkTypes() {
      return TeamService.getWorkTypes()
        .then((res) => {
          this.workTypes = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getTeamTypes() {
      return TeamService.getTeamTypes()
        .then((res) => {
          this.teamTypes = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    getTeams(team_type_id, work_type_id){

      return TeamService.getTeams(team_type_id, work_type_id)
      .then((res) => {
        this.teams = res.data.data.teams
        this.positions = res.data.data.positions
      })
      .catch(err => {
        console.log(err.response);
      })
    },
    togglePosition(id){
      this.positions.map(pos => {
        if (pos.id == id) {
          pos.expanded = !this.expanded
          this.expanded = !this.expanded
        } 
        return pos
      }) 
    },
    setActive(id){
      return this.teamTypes.map(teamType => {
        teamType = id == teamType.id ? teamType.active = true : teamType.active = false
        return teamType
      })
    },
    activeWorkButton(id){
      return this.workTypes.map(workType => {
        workType = id == workType.id ? workType.active = true : workType.active = false
        return workType
      })
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
.accordian-title {
  cursor: pointer;
}

.accordian-items__card {
  height: 400px;
  width: 400px;
  /* background-color: blueviolet; */
}
.hide-card {
  display: none;
}

.card-content__image > img {
  width: 100% !important;
  height: 350px !important;
  transition: all 0.5s;
}

.card-content__image > img:hover {
    box-shadow: 3px 3px 15px 2px rgb(74, 74, 75);
}

div.row.card-content__title {
  margin: -54px 0 0 4px;
}

.card-content__number {
  background-color: blue;
  width: 50px;
  height: 50px;
}
.card-content__number > span {
  font-size: 2.5em;
}

.position-title{
  font-family: 'Rampart One', cursive;
}

.active {
  border-bottom: 2px solid #000;
}

.nav-item:hover{
  border-bottom: 2px solid #000;
}
</style>
