<template>
    <div>
        <h4>CHOOSE YOUR TICKET</h4>
        <div class="row mt-4">
            <div class="col col-md-3">
                <h5 class="font-weight-bold">{{match.opponent.name}}</h5>
                <p>{{match.date}} {{match.time}},</p>
                <p>{{match.opponent.stadium}}</p>
            </div>
            <div class="col col-md-6">
                <p>
                    Select one or more VIP Matchday Packages, and then choose the quantity of each ticket type you would like to buy. We currently accept the following methods of payment for online sales: American Express, MasterCard, Visa.
                </p>
                <p class="font-weight-bold">
                    PLEASE NOTE - Frankies or Health Club packages seats shown will not be the exact seats in the stadium.
                </p>
            </div>
            <div class="col col-md-3">
                <ul>
                    <li class="nav-link icon-list" v-for="(pay,index) in payments" :key="index">
                        <img class="payment-icon" :src="pay.avatar" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            match: {
                required: true
            },
            payments: {
                required: true
            }
        },
    }
</script>

<style scoped>
/** Payment Icons */
.payment-icon{
    width: 100px;
    height: 70px;
}
.icon-list{
    text-align: center;
}
</style>