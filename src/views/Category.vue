<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-light bg-navbar justify-content-center">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li 
                        class="nav-item active"
                        v-for='(cat,index) in categories'
                        :key="index"
                    >
                        <router-link class="nav-link text-dark" :to="{ name: 'news', params: {id: cat.id} }">
                            {{ cat.name }}
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
        this.$store.dispatch('FETCH_CATEGORIES')
    },
    computed: mapState(['categories'])
}
</script>

<style scoped>
.bg-navbar{
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
}
</style>