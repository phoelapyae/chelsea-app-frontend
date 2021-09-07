<template>
    <div>
        <Ticket>
            <template>
                <div class="p-5">
                    <ticket-card :ticketInfos="ticketInfos"></ticket-card>
                </div>
            </template>
        </Ticket>
    </div>
</template>

<script>
import TicketService from '@/services/TicketService.js';
import Ticket from '@/views/Ticket.vue';
import TicketCard from '@/components/TicketCard.vue';

function getTicketInfos(to, next){
    let id = to.params.id;
    return TicketService.getTicketInfos(id)
    .then((res) => {
        let ticketInfos = res.data.data
        next()
        return ticketInfos
    })
    .catch(err => {
        console.log(err.response);
    })
}

export default {
    components: {
        Ticket,
        TicketCard
    },
    data() {
        return {
            ticketInfos: [Array,Object]
        }
    },
    props: {
        id: {
            required: true,
            default: 2
        },
    },
    beforeRouteEnter (to, from, next) {
        getTicketInfos(to,next)
        .then((res) => {
            console.log(res);
        })
    },
    beforeRouteUpdate (to,from, next) {
        getTicketInfos(to,next)
        .then((res) => {
            this.ticketInfos = res
        })
    },
    created(){
        this.getInfos(this.id)
    },
    methods: {
        getInfos(id){
            TicketService.getTicketInfos(id)
            .then((res) => {
                this.ticketInfos = res.data.data
            })
            .catch(err => {
                console.log(err.response);
            })
        }
    }
}
</script>

<style scoped>

</style>