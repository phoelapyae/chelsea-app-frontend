<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <!-- Card Module -->
          <v-card width="400" class="mx-auto mt-5">
            <v-card-title>
              <h3 class="display-6">Login</h3>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field 
                  label="Email Address" 
                  prepend-icon="mdi-account-circle"
                  v-model="email"
                ></v-text-field>
                <v-text-field 
                  label="Password" 
                  :type="showPassword ? 'text' : 'password'" 
                  prepend-icon="mdi-lock" 
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  v-model="password"
                ></v-text-field>
                <v-btn type="submit">Login</v-btn>
                <router-link :to="{ name: 'singup'}" class="btn">Sing Up</router-link>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
          email: '',
          password: '',
          showPassword: false
        }
    },
    methods: {
      login(){
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'account'})
        })
        .catch(err => {
          console.log(err.response.data.error);
        })
      }
    }
}
</script>

<style scoped>

</style>