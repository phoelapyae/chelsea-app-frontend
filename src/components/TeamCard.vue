<template>
    <div>
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
export default {
    props: {
        teams: {
            type: Array,
            required: true
        },
        positions: {
            type: Array,
            required: true
        }
    },
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
</style>