<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" :to="{ name: 'home' }">HOME</router-link> 
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" :to="{ name: 'news', params: { id: 1 } }">NEWS</router-link> 
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" :to="{ name: 'fixtures', params: { id: 1} }">MATCHES</router-link>  
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" :to="{ name: 'teams' }">TEAMS</router-link> 
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" :to="{ name: 'tickets' }">TICKETS</router-link>             
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" :to="{ name: 'clubs' }">CLUBS</router-link> 
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="">LOG IN</router-link>             
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="">SIGN UP</router-link> 
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
@import'~bootstrap/dist/css/bootstrap.css'

</style>
