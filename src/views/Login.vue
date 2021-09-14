<template>
   <!-- Card Module -->
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h3 class="display-6">Login</h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="Email Address" 
            prepend-icon="mdi-account-circle"
          ></v-text-field>
          <v-text-field 
            label="Password" 
            :type="showPassword ? 'text' : 'password'" 
            prepend-icon="mdi-lock" 
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <router-link :to="{ name: 'singup'}">Sing Up</router-link>
        <v-spacer></v-spacer>
        <v-btn>Login</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'LoginPage',

    data() {
        return {
            showPassword: false
        }
    },
}
</script>

<style scoped>

</style>