<template>
<div v-if="userRole == 'Admin'">
<button @click="AdminPage">admin</button>
<a>   
    <fa :icon="['fas','fa-user-secret']" class="icon alt"/>
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
    await fetch("http://localhost:7001/api/user/getuserrole", requestOptions)
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
           console.log(this.$cookies.get("CodeChatCookie"));
        },
    }
}
</script>

<style>

</style>