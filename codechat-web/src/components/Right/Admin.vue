<template>
<div v-if="userRole == 'Admin'">
<a type="button" href="#" @click="AdminPage">   
    <i class="fa fa-user-secret" style="color:white;"></i>
</a>
</div>
</template>

<script>
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
    const cookie = this.getCookie("CodeChatCookie");
    const requestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + cookie,
    },
    mode: "cors",
    };
    await fetch("http://localhost:7007/user/getuserrole", requestOptions)
    .then((response) => response = response.text())
    .then(json => this.userRole = json)
    .catch((error) => {
        console.error("Error:", error);
      });
    console.log(this.userRole);
    },
    methods:
    {
        getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
        },
        async AdminPage()
        {
           this.$router.push("/Admin");
        },
    }
}
</script>

<style>

</style>