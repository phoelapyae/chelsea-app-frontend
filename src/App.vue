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
              <router-link class="nav-link" :to="{ name: 'news' }">NEWS</router-link> 
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" :to="{ name: 'matches' }">MATCHES</router-link>  
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
            <li class="nav-item active">
              <router-link class="nav-link" :to="{ name: 'shops' }">SHOPS</router-link>  
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
          <!-- <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> -->
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style>

@import'~bootstrap/dist/css/bootstrap.css'

</style>
