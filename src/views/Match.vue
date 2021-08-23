<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-navbar justify-content-center">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li 
                        class="nav-item active"
                        v-for='(type,index) in matchTypes'
                        :key="index"
                    >
                        <router-link class="nav-link text-dark" :to="{ name: 'news', params: {id: type.id} }">
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
import { mapState } from 'vuex';
export default {
    created(){
        this.$store.dispatch('FETCH_MATCH_TYPES')
    },
    computed: mapState(['matchTypes'])
}
</script>

<style scoped>
.bg-navbar{
    background: rgb(192, 189, 214);
}
</style>