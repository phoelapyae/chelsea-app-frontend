<template>
    <div>
        <choose-package-heading :match="match" :payments="payments"></choose-package-heading>
        <div class="row choose-ticket-heading font-weight-bold">
            <div class="col col-md-8">
                Matchday Package
            </div>
            <div class="col col-md-2">
                Quantity
            </div>
            <div class="col col-md-2">
                Price
            </div>
        </div>
        <div class="p-3">
            <form action="post" @submit.prevent="proceedPayment">
                <div class="row font-weight-bold">
                    <div class="col col-md-8">
                        {{ pack.name }}
                    </div>
                    <div class="col col-md-2">
                        {{ cart.qty }}
                    </div>
                    <div class="col col-md-2">
                        £{{ cart.total }}
                    </div>
                </div>
                <div class="row font-weight-bold total">
                    <div class="col col-md-8">
                    </div>
                    <div class="col col-md-2">
                        Total
                    </div>
                    <div class="col col-md-2">
                        £{{ cart.total }}
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-9"></div>
                    <div class="col col-md-3">
                    <button type="submit" class="btn btn-success text-white">PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ChoosePackageHeading from '@/components/ChoosePackageHeading.vue';

export default {
    components: {
        ChoosePackageHeading
    },
    computed: mapState(['match','cart','pack','payments']),
    methods: {
        proceedPayment(){
            this.$router.push({ name: 'payment'})
        }
    }
}
</script>

<style scoped>

</style>