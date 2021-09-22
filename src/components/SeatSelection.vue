<template>
    <div class="seat-selection">
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
            <form action="post" @submit.prevent="addToCart">
                <div class="row font-weight-bold">
                    <div class="col col-md-8">
                        {{ pack.name }}
                    </div>
                    <div class="col col-md-2">
                        <select name="" id="" class="w-100" @change="calculateTotal" v-model="qty">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div class="col col-md-2">
                        £{{ price }}
                    </div>
                </div>
                <div class="row font-weight-bold total">
                    <div class="col col-md-8">
                    </div>
                    <div class="col col-md-2">
                        Total
                    </div>
                    <div class="col col-md-2">
                        £{{ total }}
                    </div>
                </div>
                <div class="row">
                    <div class="col col-md-10"></div>
                    <div class="col col-md-2">
                    <button type="submit" class="btn btn-success text-white">ADD TO CART</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import PackageService from '@/services/PackageService.js';
import PaymentService from '@/services/PaymentService.js';
import ChoosePackageHeading from './ChoosePackageHeading.vue';

export default {
    components: { ChoosePackageHeading },
    data() {
        return {
            pack: null,
            match: null,
            payments: [Array,Object],
            qty: 0,
            price: 0,
            total: 0
        }
    },
    created(){
        this.getPackageDetail()
        this.getPaymentTypes()
    },
    methods: {
        getPackageDetail(){
            const package_id = this.$route.query.package_id
            const match_id = this.$route.query.match_id
 
            return PackageService.packageDetail(package_id)
            .then((result) => {
                const response = result.data.data
                const matches = response.matches
                this.pack = response
                this.match = matches.find(match => match.id == match_id)

                // Set to state
                this.$store.commit('SET_TO_MATCHES', this.matches)
                this.$store.commit('SET_TO_MATCH', this.match)
                this.$store.commit('SET_TO_PACKAGE', this.pack)
            }).catch((err) => {
                console.log(err.response);
            });
        },
        getPaymentTypes(){
            return PaymentService.paymentTypes()
            .then((result) => {
                this.payments = result.data.data
                this.$store.commit('SET_TO_PAYMENTS', this.payments)
            }).catch((err) => {
                console.log(err.response);
            });
        },
        calculateTotal(){
            this.price = this.pack.price
            this.total = this.qty * this.price
        },
        addToCart(){
            return PackageService.addPackageToCart({
                package_id: this.$route.query.package_id,
                match_id: this.$route.query.match_id,
                qty: this.qty
            })
            .then((result) => {
                const cart = result.data.data
                this.$store.commit('SET_TO_CART', cart)
                this.$router.push({ name: 'shopping-cart'})
            }).catch((err) => {
                console.log(err.response);
            });
        }
    }
}

</script>

<style scoped>
.choose-ticket-heading{
    border-bottom: 1px solid;
    border-top: 1px solid;
}
.total {
    border-top: 1px solid;
}
</style>