<template>
<div v-if="userRole == 'Admin'">
<a type="button" href="#" @click="AdminPage">   
    <i class="fa fa-user-secret" style="color:white;"></i>
</a>
</div>
</template>

<script>
import {GetUserRole} from '@/assets/Js/Right/Admin.js'
export default {
    name:'Admin',
    data:function()
    {
        return{
            userRole:String
        }
    },
   async created()
    {
      this.userRole = await GetUserRole();
      console.log(this.userRole + "orhan role bakıyor");
    },
    methods:
    {      
        async AdminPage()
        {
           this.$router.push("/Admin");
        },
    }
}
</script>

<style>

</style>