<template>
    <div>
        <h1>NEWS PAGE</h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  created(){

      const apiClient = axios.create({
          baseURL: 'http://localhost:8000/api',
          withCredentials: false,
      })

      return apiClient.get('/news')
        .then(function (res) {
            console.log(res.data);
        })
        .catch(function(res) {
            if(res instanceof Error) {
            console.log(res.message);
            } else {
            console.log(res.data);
            }
        });
  }
}
</script>

<style scoped>

</style>