<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <router-link class="nav-link" :to="{ name: 'home' }">
            <img alt="Vue logo" src="./assets/photos/chelsea.png" />
          </router-link>
          <ul class="navbar-nav ml-3 mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link text-dark font-weight-bold" :to="{ name: 'news', params: { id: 1 } }">NEWS</router-link> 
            </li>
            <li class="nav-item active">
              <router-link class="nav-link text-dark font-weight-bold" :to="{ name: 'fixtures', params: { id: 1} }">MATCHES</router-link>  
            </li>
            <li class="nav-item active">
              <router-link class="nav-link text-dark font-weight-bold" :to="{ name: 'teams', params: { team_type_id: 1, work_type_id: 1 } }">TEAMS</router-link> 
            </li>
            <li class="nav-item active">
              <router-link class="nav-link text-dark font-weight-bold" :to="{ name: 'tickets' }">TICKETS & MEMBERSHIP</router-link>             
            </li>
            <li class="nav-item active">
              <router-link class="nav-link text-dark font-weight-bold" :to="{ name: 'matchday-tickets' }">CLUB CHELSEA</router-link> 
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link text-dark font-weight-bold" :to="{name: 'login'}">LOG IN</router-link>             
            </li>
            <li class="nav-item active">
              <router-link class="nav-link text-dark font-weight-bold" :to="{name: 'singup'}">SIGN UP</router-link> 
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view class="content"/>
    <hr>
    <Sponsor/>
    <Footer/>
  </div>
</template>

<script>
import Sponsor from '@/components/Sponsor.vue';
import Footer from '@/components/Footer.vue';
export default {
    components: {
        Sponsor,
        Footer
    }
}
</script>

<style>
.content {
background: rgb(224, 235, 235);

}
@import'~bootstrap/dist/css/bootstrap.css';
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");

</style>
