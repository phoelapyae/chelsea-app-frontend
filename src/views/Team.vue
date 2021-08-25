<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-light bg-navbar justify-content-center">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li 
                        class="nav-item active"
                        v-for='(type,index) in teamTypes'
                        :key="index"
                    >
                        <router-link class="nav-link text-dark" :to="{ name: 'teams', params: {id: type.id} }">
                            {{ type.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import TeamService from '@/services/TeamService.js';
export default {
    data() {
        return {
            positions: [],
            workTypes: [],
            teamTypes: []
        }
    },
    created(){
        // get positions 
        this.getPositions()

        // get work types 
        this.getWorkTypes()

        // get team types
        this.getTeamTypes()
    },
    methods: {
        getPositions(){
            return TeamService.getPositions()
                .then((res) => {
                    this.positions = res.data.data
                })
                .catch(err => {
                    console.log(err.response);
                })
        },
        getWorkTypes(){
            return TeamService.getWorkTypes()
                .then((res) => {
                    this.workTypes = res.data.data
                })
                .catch(err => {
                    console.log(err.response);
                })
        },
        getTeamTypes(){
            return TeamService.getTeamTypes()
                .then((res) => {
                    this.teamTypes = res.data.data
                })
                .catch(err => {
                    console.log(err.response);
                })
        }
    }        
}
</script>

<style scoped>
.bg-navbar{
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
}
</style>