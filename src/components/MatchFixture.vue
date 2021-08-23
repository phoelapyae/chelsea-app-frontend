<template>
    <div>
        {{ matches }}
    </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
    created(){
        this.$store.dispatch('FETCH_MATCHES', 1)
    },
    computed: mapState(['matches'])
}
</script>

<style scoped>

</style>