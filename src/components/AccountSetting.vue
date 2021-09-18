<template>
    <div class="p-3">
        <v-container>
            <v-row>
                <v-col>
                    <!-- Card Module -->
                    <v-card class="mx-auto mt-5">
                        <v-card-title>
                            <h3>Change Email</h3>
                        </v-card-title>
                        <v-card-text>
                            <v-form @submit.prevent="updateProfile">
                                <v-text-field 
                                label="Email Address" 
                                prepend-icon="mdi-account-circle"
                                v-model="email"
                                ></v-text-field>
                                <v-btn type="submit">Save Changes</v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <!-- Card Module -->
                    <v-card class="mx-auto mt-5">
                        <v-card-title>
                            <h3>Change Password</h3>
                        </v-card-title>
                        <v-card-text>
                            <v-form @submit.prevent="updateProfile">
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
                                :type="showPassword ? 'text' : 'password'" 
                                prepend-icon="mdi-lock" 
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword"
                                v-model="password_confimation"
                                ></v-text-field>
                                <v-btn type="submit">Save Changes</v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import ProfileService from '@/services/ProfileService.js';

export default {
    data() {
        return {
            email: '',
            password: '',
            password_confimation: '',
            showPassword: false
        }
    },
    methods: {
        updateProfile(){
            return ProfileService.updateUserProfile({
                'email': this.email,
                'password': this.password,
                'password_confirmation': this.password_confimation
            })
            .then((result) => {
                const auth_user = result.data
                const currentUser = JSON.parse(localStorage.getItem('user'))
                auth_user.access_token = currentUser.access_token
                this.$store.dispatch('UPDATE_PROFILE',auth_user)
                localStorage.setItem('user', JSON.stringify(auth_user));
                this.email = ''
            }).catch(err => {
                console.log(err);
            });
        }
    }
}
</script>

<style scoped>

</style>