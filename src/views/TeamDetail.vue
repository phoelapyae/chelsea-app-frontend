<template>
    <Team :team_type_id="team.team_type_id" :workTypes="workTypes">
    <div id="team-detail" class="team-detail">
        <div class="team-detail__image">
            <img :src="team.background_avatar" alt="">
        </div>
        <div class="team-detail__personal-information p-5">
            <div class="row">
                <div class="team-detail__number font-weight-bold p-3 text-center">{{ team.number }}</div>
                <div class="team-detail__name text-white">{{ team.name }}</div>
            </div>
            <div class="row mt-4">
                <div class="team-detail__statistics-number px-3">
                    <h4 class="text-center text-white">3</h4>
                    <p class="font-weight-bold text-center text-white">APPEARANCES</p>
                </div>
                <div class="team-detail__statistics-number px-3">
                    <h4 class="text-center text-white">2</h4>
                    <p class="font-weight-bold text-center text-white">CLEAN SHEETS</p>
                </div>
                <div class="team-detail__statistics-number px-3">
                    <h4 class="text-center text-white">10</h4>
                    <p class="font-weight-bold text-center text-white">SAVES</p>
                </div>
                <div class="team-detail__statistics-number px-3">
                    <h4 class="text-center text-white">91%</h4>
                    <p class="font-weight-bold text-center text-white">SHOTS SAVED</p>
                </div>
            </div>
            <div class="mt-5">
                <div class="row">
                    <div class="col col-md-4 personal-information p-3">
                        <h4 class="personal-information__title pb-2 font-weight-bold">PERSONAL INFORMATION</h4>
                        <div class="row mb-1">
                            <div class="col-md-6">Name</div>
                            <div class="col-md-6">{{ team.name }}</div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-6">DATE OF BIRTH</div>
                            <div class="col-md-6">{{ team.date_of_birth }}</div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-6">Birthplace</div>
                            <div class="col-md-6">{{ team.birthplace}}</div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-6">Height</div>
                            <div class="col-md-6">{{ team.height }}</div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-6">Weight</div>
                            <div class="col-md-6">{{ team.weight }}</div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-6">Position</div>
                            <!-- <div class="col-md-6">{{ team.position.name }}</div> -->
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-6">Number</div>
                            <div class="col-md-6">{{ team.number }}</div>
                        </div>
                        <hr>
                    </div>
                    <div class="col-md-8">
                        <div class="biography p-3">
                            <div class="biography__navigation my-5">

                            </div>
                            <h1 class="font-weight-bold">BIOGRAPHY</h1>
                            <div class="biography__media p-4 bg-light" v-html="team.biography"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Team>
</template>

<script>
import TeamService from '@/services/TeamService.js';
import Team from '@/views/Team.vue';
import { mapState } from 'vuex';
export default {
    props: {
        id: {
            required: true
        },
    },
    components: {
        Team
    },
    data() {
        return {
            team: Object,
            required: true
        }
    },
    created(){
        TeamService.getTeamDetail(this.id)
        .then((res) => {
            this.team = res.data.data
        })
        .catch(err => {
            console.log(err.response);
        }),
        this.$store.dispatch('FETCH_WORK_TYPES')
    },
    computed: mapState(['workTypes'])
}
</script>

<style scoped>
.team-detail__personal-information {
    margin-top: -35%;
}
.team-detail__image > img{
    width: 100%;
    height: 100%;
    background-size: cover;
}

.team-detail__number {
    font-size: 6rem;
    background: blue;
    color: #fff;
    width: 160px;
    height: 160px;
    border-radius: 18px;
}

.team-detail__name {
    margin-left: 1rem;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
}

.team-detail__statistics-number {
    padding: 0 1rem;
    border-right: 1px solid #fff;
}

.team-detail__statistics-number > h4 {
    font-size: 3rem;
}

.personal-information {
    width: 386px;
    height: 460px;
    background: #fff;
}

.personal-information__title {
    color: blue;
    border-bottom: 3px solid blue;
}

</style>