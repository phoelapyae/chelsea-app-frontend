<template>
    <div>
        <h1>Seat Selection Page</h1>
    </div>
</template>

<script>

export default {
    data() {
        return {
            package: null,
            match: null,
            packages: [Array,Object]
        }
    },
    created(){
        console.log(this.getPackages());
    },
    methods: {
        getPackages(){
            let packages = this.$store.state.packages
            if (packages.length !== 0) {
                return packages
            }
            this.$store.dispatch('FETCH_PACKAGES')
            return this.$store.state.packages;
        }
    }
}

</script>

<style scoped>

</style>