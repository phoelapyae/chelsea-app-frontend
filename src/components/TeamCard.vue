<template>
    <div>
      <Team :team_type_id="team_type_id" :workTypes="workTypes">
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
                          <router-link :to="{ name: 'team-detail', params: {id: team.id}}">
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
                          </router-link>
                      </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="p-5" v-else>
            <h3>There is no data yet for this page. Please visit later.</h3>
        </div>
      </Team>
    </div>
</template>
<script>

import TeamService from "@/services/TeamService.js";
import Team from '@/views/Team.vue';

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
      default: 1
    },
    work_type_id: {
      default: 1
    },
  },
  data() {
    return {
      positions: [],
      teams: [],
      workTypes: [],
      expanded: {
        type: Boolean,
        default: true
      }
    }
  },
  components: {
    Team
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
      this.teams = res.teams 
      this.positions = res.positions
    })
  },
  created() {
    // get teams
    this.getTeams(1,1)  

    // get work types
    this.getWorkTypes();
  },
  methods: {
    getWorkTypes() {
      return TeamService.getWorkTypes()
        .then((res) => {
          this.workTypes = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
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
    activeWorkButton(id){
      return this.workTypes.map(workType => {
        workType = id == workType.id ? workType.active = true : workType.active = false
        return workType
      })
    }
  }
}
</script>

<style scoped>
/** Accordian header */
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

.card-content {
  cursor: pointer;
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
  margin: -50px 0 0 0px;
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
</style>