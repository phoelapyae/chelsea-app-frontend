<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                  <v-card width="500" class="mx-auto mt-5">
                    <v-card-title>
                      <h1>Singup</h1>
                    </v-card-title>
                    <v-card-text>
                       <v-form @submit.prevent="register" ref="singUpForm" v-model="formValidity">
                         <v-text-field 
                          label="Enter Fullname"
                          v-model="name"
                          required
                          ></v-text-field>

                          <v-text-field 
                          label="Enter email"
                          v-model="email"
                          :rules="emailRules"
                          required
                          ></v-text-field>

                          <v-text-field v-model="dob" readonly></v-text-field>
                          <div class="row" justify="left">
                              <v-date-picker v-model="dob"></v-date-picker>
                          </div>

                          <v-text-field 
                            label="Password" 
                            :type="showPassword ? 'text' : 'password'" 
                            prepend-icon="mdi-lock" 
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                            v-model="password"
                          ></v-text-field>

                          <v-text-field 
                            label="Confirm Password" 
                            :type="showConfirmPassword ? 'text' : 'password'" 
                            prepend-icon="mdi-lock" 
                            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showConfirmPassword = !showConfirmPassword"
                            v-model="password_confirmation"
                          ></v-text-field>

                          <v-checkbox
                            v-model="agreeToTerms"
                            label="Agree terms & conditions."
                            color="red"
                            :rules="agreeToTermsRules"
                            required
                          ></v-checkbox>

                           <!-- <v-card-actions> -->
                      <v-btn class="mr-4" :disabled="!formValidity" type="submit">Sing Up</v-btn>
                      <!-- <v-btn class="mr-4" @click="formValidate">Validate Form</v-btn>
                      <v-btn class="mr-4" @click="resetValidation()">Reset Validation</v-btn>
                      <v-btn @click="reset">Reset</v-btn> -->
                    <!-- </v-card-actions> -->

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
        data: () => ({
            name: '',
            email: '',
            dob: '',
            password: '',
            password_confirmation: '',
            agreeToTerms: false,
            agreeToTermsRules: [
                value => !!value || 'You must agree terms and conditions to sing up for an account.'
            ],
            emailRules: [
                value => !!value || 'Required email address.',
                value => value.indexOf('@') !== 0 || 'Email should have a username.',
                value => value.includes('@') || 'Email should have a @ simbol.',
                value => value.indexOf('.') - value.indexOf('@') > 1 || 'Email should have a domain.',
                value => value.indexOf('.') <= value.length - 3 || 'Email should contain a valid domain extension.'
            ],
            formValidity: false,
            showPassword: false,
            showConfirmPassword: false
        }),
        methods: {
            resetValidation(){
                this.$refs.singUpForm.resetValidation()
            },
            reset(){
                this.$refs.singUpForm.reset()
            },
            formValidate(){
                this.$refs.singUpForm.validate()
            },
            register(){
              console.log('Hit to the register form');
              this.$store.dispatch('register', {
                name: this.name,
                email: this.email,
                dob: this.dob,
                password: this.password,
                password_confirmation: this.password_confirmation
              })
              .then(() => {
                this.$router.push({ name: 'account'})
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