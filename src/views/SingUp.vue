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
                       <v-form ref="singUpForm" v-model="formValidity">
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

                          <v-file-input
                            accept="image/*"
                            label="Profile photo"
                          ></v-file-input>

                          <v-text-field v-model="picker" readonly></v-text-field>
                          <div class="row" justify="left">
                              <v-date-picker v-model="picker"></v-date-picker>
                          </div>
                          
                          <v-checkbox
                            v-model="agreeToTerms"
                            label="Agree terms & conditions."
                            color="red"
                            :rules="agreeToTermsRules"
                            required
                          ></v-checkbox>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn class="mr-4" :disabled="!formValidity">Sing Up</v-btn>
                      <v-btn class="mr-4" @click="formValidate">Validate Form</v-btn>
                      <v-btn class="mr-4" @click="resetValidation()">Reset Validation</v-btn>
                      <v-btn @click="reset">Reset</v-btn>
                    </v-card-actions>
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
            picker: '',
            agreeToTerms: false,
            agreeToTermsRules: [
                value => !!value || 'You must agree terms and conditions to sing up for an account.'
            ],
            email: '',
            emailRules: [
                value => !!value || 'Required email address.',
                value => value.indexOf('@') !== 0 || 'Email should have a username.',
                value => value.includes('@') || 'Email should have a @ simbol.',
                value => value.indexOf('.') - value.indexOf('@') > 1 || 'Email should have a domain.',
                value => value.indexOf('.') <= value.length - 3 || 'Email should contain a valid domain extension.'
            ],
            formValidity: false
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
            }
        }
    }
</script>

<style scoped>

</style>