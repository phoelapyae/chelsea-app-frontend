<template>
    <div class="p-3">
        <v-container>
            <v-row>
                <v-col>
                  <v-card class="mx-auto mt-5">
                    <v-card-title>
                        <h3>Update Profile</h3>
                    </v-card-title>
                    <v-card-text>
                       <v-form ref="singUpForm" v-model="formValidity" enctype="multipart/form-data">
                         <v-text-field 
                          label="Enter Fullname"
                          v-model="user.name"
                          required
                          @keyup="updateProfile()"
                          ></v-text-field>

                          <v-text-field v-model="user.dob" readonly></v-text-field>
                          <div class="row" justify="left">
                              <v-date-picker v-model="user.dob" @change="updateProfile()"></v-date-picker>
                          </div>
                          <hr>
                          <div class="mt-4">
                            <label for="">Upload Profile Image</label>
                            <input type="file" id="file" ref="file" v-on:change="uploadAvatar()" placeholder="Upload Profile Picture" class="form-control"/>
                          </div>
                        </v-form>
                    </v-card-text>
                  </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios';
import ProfileService from '@/services/ProfileService.js';
export default {
    data() {
        return {
            user: null,
            avatar: '',
            formValidity: false
        }
    },
    created(){
        this.user = JSON.parse(localStorage.getItem('user'))
        // this.user = this.$store.state.user
    },
    methods: {
        updateProfile(){
            return ProfileService.updateUserProfile({
                'name': this.user.name,
                'dob': this.user.dob,
            })
            .then((result) => {
                const auth_user = result.data
                const currentUser = JSON.parse(localStorage.getItem('user'))
                auth_user.access_token = currentUser.access_token
                this.$store.dispatch('UPDATE_PROFILE',auth_user)
                localStorage.setItem('user', JSON.stringify(auth_user));
            }).catch(err => {
                console.log(err);
            });
        },
        uploadAvatar(){
            this.avatar = this.$refs.file.files[0];
            let formData = new FormData();
            formData.append('file', this.avatar);

            axios.post( 'http://localhost:8000/api/upload-avatar',
            formData,
            {
                headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${this.user.access_token}`
                    }
                }
            ).then((result) => {
                const auth_user = result.data
                const currentUser = JSON.parse(localStorage.getItem('user'))
                auth_user.access_token = currentUser.access_token
                this.$store.dispatch('UPDATE_PROFILE',auth_user)
                localStorage.setItem('user', JSON.stringify(auth_user));
            })
            .catch(function(){
                console.log('FAILURE!!');
            });
        }
    }
}
</script>

<style scoped>

</style>