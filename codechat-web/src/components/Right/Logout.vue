<template>
<button @click="Logout">logout</button>
<fa :icon="['fas','fa-sign-out-alt']" />
</template>

<script>
export default {
    name:'Logout',
    methods:{
        async Logout()
        {
        const requestOptions={
            method:"POST",
        }
        await fetch("http://localhost:7001/api/user/logout", requestOptions)
        .then((response) => {
            if(response)
            {
                this.delete_cookie("CodeChatCookie");
                this.$router.push("/");
            }
        })
        .catch((error) => console.log(error));
        },
        delete_cookie(name) 
        {
            document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    }
}

</script>

<style>
</style>