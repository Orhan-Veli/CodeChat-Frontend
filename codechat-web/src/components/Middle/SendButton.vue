<template>
    <div>
        <button 
        @click="sendParam"               
        class="btn btn-primary sendButton"
        >
        Send
        </button>
    </div>
</template>

<script>
export default {
    name:"SendButton",
    data(){
        return{
            postId:undefined,
        }
    },
    methods:{
       async sendParam(){
           const requestOptions = {
               method:"POST",
               headers:{"Content-Type":"application/json"},
               body: JSON.stringify({ Text:"asdghasdg",CategoryId:"48b04268-ce54-4ca4-9446-ce367b58be9f",CategoryName:"orhan"}),
               mode:"cors"
           };
           await fetch("http://localhost:7002/api/message",requestOptions)
           .then(response => response.json())
           .then(data=> (this.postId = data)).catch(error => console.log(error));
        }
    }
}
</script>

<style scoped>
.sendButton {
  margin-top: 1%;
  margin-left: 90%;
  position: absolute;
  bottom: 30%;
  color: red;
}


</style>
