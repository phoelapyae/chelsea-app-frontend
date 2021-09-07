<template>
    <div>
        <Ticket>
            <div class="matches p-5">
                <h3 class="text-uppercase text-primary font-weight-bold mb-2">Matches</h3>
                <div 
                    class="matches__card bg-light p-3 mb-3"
                    v-for="(match,index) in matches"
                    :key="index"
                >
                    <div class="row">
                        <div class="col-md-5">
                            <div>
                                <h6>{{ match.competition.name }}</h6>
                                <p>{{ match.opponent.stadium }} | {{ match.date }}, {{match.time}}</p>
                            </div>
                            <div class="mt-4">
                                <p>
                                    <img class="team-logo mr-1 ml-1" src="../assets/photos/cfc-logo.png" alt="">
                                    <span>Chelsea</span>
                                </p>
                                <p>
                                    <img class="team-logo mr-1 ml-1" :src="match.opponent.image" alt="">
                                    <span>{{match.opponent.name}}</span>
                                </p>
                            </div>
                            <div class="float-right">
                                <a href="#">Ticket Info >></a>
                            </div>
                        </div>
                        <div class="col-md-1">
                            <p>
                                <span class="bg-primary text-white p-1">AVAILABLE</span>
                            </p>
                            <h1 class="font-weight-bold text-primary text-center">{{match.day}}</h1>
                            <h6 class="text-center">SAT</h6>
                        </div>
                        <div class="col-md-6">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>TICKETS TYPE</th>
                                            <th>ON-SALE DATE</th>
                                            <th>STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(cat,index) in match.ticket_categories" :key="index">
                                            <td class="text-primary font-weight-bold">{{cat.name}}</td>
                                            <td>{{cat.date}}</td>
                                            <td>
                                                <span v-if="cat.status == 1"><a href="#" class="btn btn-sm btn-primary">Buy Now</a></span>
                                                <span v-else-if="cat.status == 2">Available Soon</span>
                                                <span v-else>Sold Out</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ticket-info px-5">
                <h3 class="text-uppercase text-primary font-weight-bold mb-2">More Ticket Information</h3>
                <ticket-card :ticketInfos="ticketInfos"></ticket-card>
                <div class="row justify-content-center">
                    <router-link 
                        class="btn btn primary mb-3 all-infos-button p-3 font-weight-bold" 
                        :to="{name: 'ticket-infos', params: { id: 2 }}"
                    >
                        MORE TICKET INFORMATION
                    </router-link>
                </div>
            </div>
        </Ticket>
    </div>
</template>

<script>
import TicketService from '@/services/TicketService.js';
import Ticket from '@/views/Ticket.vue';
import TicketCard from '@/components/TicketCard.vue';

export default {
    components: {
        Ticket,
        TicketCard
    },
    data() {
            return {
                matches: [Array,Object],
                ticketInfos: [Array,Object]
            }
    },
    created(){
        //Get tickets
        this.getTickets()
    },
    methods: {
        getTickets(){
            TicketService.getTickets()
            .then((res) => {
                this.matches = res.data.data.matches
                this.ticketInfos = res.data.data.ticket_infos
            })
            .catch(err => {
                console.log(err.response);
            })
        }
    }   
}
</script>

<style scoped>
.all-infos-button {
    border: 2px solid blue;
    width: 300px;
    color: blue;
    transition: all 0.8s;
}

.all-infos-button:hover {
    background: blue;
    color: #fff;
}
</style>