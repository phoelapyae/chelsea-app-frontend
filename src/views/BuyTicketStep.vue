<template>
    <div class="container">
        <h3 class="text-center my-4 font-weight-bold text-primary">BUY VIP TICKETS</h3>
        <div class="ticket-content px-5">
            <div class="row my-2 justify-content-center ticket-content__nav">
                <nav
                    class="
                        navbar navbar-expand-lg navbar-dark
                        bg-navbar
                        justify-content-center
                        pb-0
                    "
                    >
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li
                                class="nav-item"
                                v-for="(step,index) in paymentSteps"
                                :key="index"
                                :class="{active: step.active == 1}"
                                @click.prevent="setActive(step)"
                            >
                                <router-link
                                    class="nav-link text-dark mr-3 text-primary"
                                    :to="{ name: step.id == 1 ? 'seat-selection' : step.id == 2 ? 'shopping-cart' : step.id == 3 ? 'payment' : 'confirm-payment'}"
                                >
                                    {{ step.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import PaymentService from '@/services/PaymentService.js';

export default {
    data() {
        return {
            paymentSteps: [Array,Object],
            paymentTypes: [Array,Object],
            package: null
        }
    },
    created() {
        this.getPaymentSteps()
        this.getPaymentTypes()
        // this.$store.dispatch('FETCH_PACKAGES')
    },
    methods: {
        getPaymentSteps(){
            return PaymentService.paymentSteps()
            .then((result) => {
                this.paymentSteps = result.data.data
            }).catch((err) => {
                console.log(err.response);
            });
        },
        getPaymentTypes(){
            return PaymentService.paymentTypes()
            .then((result) => {
                this.paymentTypes = result.data.data
            }).catch((err) => {
                console.log(err.response);
            });
        },
        setActive(current_step){
            return this.paymentSteps.map(step => {
                return step.id == current_step.id ? step.active = 1 : step.active = 0
            })
        }
    }
}
</script>

<style scoped>
.ticket-content {
    border-top: 40px solid rgb(48, 47, 124);
}
.ticket-content__nav {
    border-bottom: 1px solid #000;
}
.nav-link{
    font-size: 1.3rem;
}

.active{
    border-bottom: 3px solid green;
}
</style>