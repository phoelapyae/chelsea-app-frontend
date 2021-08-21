<template>
    <div>
        <ul class="navbar-nav mr-auto">
                    <li 
                        class="nav-item active"
                        v-for='(cat,index) in news'
                        :key="index"
                    >
                        {{ cat.title }}
                    </li>
                </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    props: ['id'],
    created(){
        this.$store.dispatch('FETCH_NEWS',1)
    },
    updated(){
        
    },
    computed: mapState(['news'])
}
</script>

<style scoped>

</style>