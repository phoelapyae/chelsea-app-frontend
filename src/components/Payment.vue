<template>
    <div>
        <choose-package-heading :match="match" :payments="payments"></choose-package-heading>

        <div class="text-align-center">
             <v-container
                class="px-0"
                fluid
            >
                <h5 class="text-primary">Choose payment type:</h5>
                <v-radio-group v-model="payment_id">
                    <v-radio
                        v-for="(pay,i) in payments"
                        :key="i"
                        :label="pay.name"
                        :value="pay.id"
                    ></v-radio>
                </v-radio-group>
            </v-container>
            <div class="row">
                <div class="col col-md-8"></div>
                <div class="col col-md-4">
                    <button type="submit" class="btn btn-success text-white" @click="confirmPayment">PROCEED TO CONFIRM</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ChoosePackageHeading from '@/components/ChoosePackageHeading.vue';
import PackageService from '@/services/PackageService.js';

export default {
    data() {
        return {
            payment_id: 0
        }
    },
    components: {
        ChoosePackageHeading
    },
    computed: mapState(['match','pack','cart','payments']),
    methods: {
        confirmPayment(){
            PackageService.orderPackage({
                cart_id: this.cart.id,
                payment_id: this.payment_id
            })
            .then((result) => {
                this.$store.commit('SET_TO_ORDER',result.data.data)
                this.$router.push({ name: 'confirm-payment'})
            }).catch((err) => {
                console.log(err.response);
            });
        }
    }
}
</script>

<style scoped>

</style>