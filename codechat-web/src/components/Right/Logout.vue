<template>
<div>
<a type="button" href="#" @click="Logout()">
<i class="fa fa-sign-out" style="color:white;"></i>
</a>
</div>

</template>

<script>
import {LogOut} from '@/assets/Js/Right/Logout.js'
export default {
    name:'Logout',
    methods:{
        Logout()
        {
            LogOut()
        }
    }
}

</script>

<style>
</style>