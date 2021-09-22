<template>
    <div>
        <choose-package-heading :match="match" :payments="payments"></choose-package-heading>

       <div v-if="!confirm">
           <h4>Ticket Detail</h4>
           <table class="table table-striped">
               <tbody>
                   <tr>
                       <td>Package Name:</td>
                       <td>{{ pack.name }}</td>
                   </tr>
                   <tr>
                       <td>Match:</td>
                       <td>CHELSEA vs {{match.opponent.name}}</td>
                   </tr>
                   <tr>
                       <td>Date & Time:</td>
                       <td>{{match.date}}, {{match.time}}</td>
                   </tr>
                   <tr>
                       <td>Quantity:</td>
                       <td>{{cart.qty}}</td>
                   </tr>
                   <tr>
                       <td>Price:</td>
                       <td>{{ pack.price }}</td>
                   </tr>
                   <tr>
                       <td>Total:</td>
                       <td>{{ cart.total }}</td>
                   </tr>
               </tbody>
           </table>
           <div class="row">
                <div class="col col-md-8"></div>
                <div class="col col-md-4">
                    <button type="submit" @click="confirmOrder" class="btn btn-success text-white">CONFIRM PAYMENT</button>
                </div>
            </div>
       </div>
       <div v-else class="p-5">
           <h5 class="text-success text-center">Payment Confirm Successfully!</h5>
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ChoosePackageHeading from '@/components/ChoosePackageHeading.vue';
import PackageService from '@/services/PackageService.js';

export default {
    components: {
        ChoosePackageHeading
    },
    data() {
        return {
            confirm: false
        }
    },
    computed: mapState(['match','pack','cart','order','payments']),
    methods: {
        confirmOrder(){
            PackageService.confirmOrderPackage({
                order_id: this.order.id
            })
            .then((result) => {
                this.$store.commit('SET_TO_ORDER', result.data.data)
                this.confirm = true
            }).catch((err) => {
                console.log(err.response);
            });
        }
    }
}
</script>

<style scoped>

</style>