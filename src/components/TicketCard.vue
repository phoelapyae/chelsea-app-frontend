<template>
    <div>
        <div class="row">
            <div 
                class="col-md-4 mr-2 mb-2 p-0 ticket-info__card"
                v-for="(info,index) in ticketInfos"
                :key="index"
            >
                <div class="ticket-info__cover-image">
                    <img :src="info.cover_image" alt="">
                </div>
                <p class="mt-2">{{ info.title }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ticketInfos: {
            type: [Array,Object],
            required: true
        }
    }
}
</script>

<style scoped>
/** Ticket Info Styles */
.ticket-info__card {
    max-width: 386px;
    height: 430px;
}
.ticket-info__card:hover {
    cursor: pointer;
}
.ticket-info__cover-image > img {
    width: 100%;
    height: 330px;
}
</style>