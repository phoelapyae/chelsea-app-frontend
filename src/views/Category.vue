<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-navbar">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li 
                        class="nav-item active"
                        v-for='(cat,index) in categories'
                        :key="index"
                    >
                        <router-link class="nav-link text-dark" :to="{name: 'news', params: {id: cat.id}}">
                            {{ cat.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <News/>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';
import News from '@/components/News.vue';
export default {
    components: {
        News
    },
    created(){
        this.$store.dispatch('FETCH_CATEGORIES')
    },
    computed: mapState(['categories'])
}
</script>

<style scoped>
.bg-navbar{
    background: rgb(236, 228, 228);
}
</style>