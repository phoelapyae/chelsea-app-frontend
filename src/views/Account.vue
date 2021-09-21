<template>
    <div class="container">
        <div class="row">
            <div class="col col-md-2">
                <img class="profile-photo" alt="Profile photo" :src="getImage()" />
            </div>
            <div class="col col-md-6 mt-5">
               <h3>{{ user.name }}</h3>
               <p>{{ user.email }}</p>
            </div>
        </div>
        <div class="row mb-3">
            <nav
                class="
                    navbar navbar-expand-lg navbar-dark
                    bg-navbar
                    justify-content-center
                "
                >
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li
                            class="nav-item"
                        >
                            <router-link
                            class="nav-link text-dark"
                            :to="{ name: 'ticket-order' }"
                            >
                            Match Tickets
                            </router-link>
                        </li>
                        <li
                            class="nav-item"
                        >
                            <router-link
                            class="nav-link text-dark"
                            :to="{ name: 'package-order' }"
                            >
                            Match Packages
                            </router-link>
                        </li>
                        <li
                            class="nav-item"
                        >
                            <router-link
                            class="nav-link text-dark"
                            :to="{ name: 'profile' }"
                            >
                            Profile
                            </router-link>
                        </li>
                            <li
                            class="nav-item"
                        >
                            <router-link
                            class="nav-link text-dark"
                            :to="{ name: 'setting' }"
                            >
                            Account Setting
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: null
            }
        },
        created(){
            // this.user = JSON.parse(localStorage.getItem('user'))
            this.user = this.$store.state.user
        },
        methods: {
            getImage(){
                return `${this.user.avatar}`
            }
        }
    }
</script>

<style scoped>
.profile-photo{
    border-radius: 50%;
    width: 100%;
    height: 190px;
}
.active, .nav-item:hover {
    border-bottom: 2px solid #000;
}
</style>