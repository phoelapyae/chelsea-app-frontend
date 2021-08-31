<template>
    <div>
        <div>
            <img class="fixture-bg-image" src="../assets/photos/cfc-downloadable-image.jpeg" alt="">
        </div>
        <div class="p-3">
            <p class="font-weight-bold">
                The fixture lists for the 2020/21 season are made available as a Google Sheet document via the link below, from where they can be printed or dowloaded.
            </p>
            <a href="https://docs.google.com/spreadsheets/d/17-i9Ohia8cKcrEbOhWZM6FmzYupt4EiucaZ14gNYdqs/edit#gid=1684209863" target="_blank" class="btn m-5 p-3 font-weight-bold download-button">CLICK FOR A FIXTURE BY A GOOGLE SHEET</a>
            <h2 class="font-weight-bold text-primary p-3">OTHER FORMATS</h2>
            <p class="font-weight-bold">
                The Premier League now make the fixtures available on their website (premierleague.com) in a variety of formats to sync with mobile phones, Gmail and Outlook amongst others.  Simply click the button to go to their website and below and follow the instructions.
            </p>
            <div class="row p-5">
                <img class="download-image mr-5" src="../assets/photos/google.png" alt="">
                <img class="download-image mr-5" src="../assets/photos/apple.png" alt="">
                <img class="download-image mr-5" src="../assets/photos/outlook.png" alt="">
            </div>
            <a href="https://pl.ecal.com/" target="_blank" class="btn m-5 p-3 font-weight-bold download-button">CLICK FOR OTHER FORMATS</a>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.fixture-bg-image {
    width: 100%;
    height: 300px;
}
.download-button {
    border: 1px solid blue;
    color: blue;
    transition: 0.9s all;
}
.download-button:hover {
    background: blueviolet;
    color: #fff;
}
.download-image{
    width: 80px;
    height: 80px;
}
</style>