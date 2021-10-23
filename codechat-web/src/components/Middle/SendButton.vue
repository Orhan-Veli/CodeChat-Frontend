<template>
  <textarea
    @keyup.enter="sendParam"
    v-model="messageText"
    ref="messageText"
    class="form-control send-message"
    placeholder="Write a reply..."
  ></textarea>
  <div>
    <button @click="sendParam" class="btn btn-primary sendButton">Send</button>
  </div>
</template>

<script>
export default {
  name: "SendButton",
  methods: {
    async sendParam() {
      if(this.messageText == null || this.messageText == "" || this.messageText == undefined)
      {
         this.$toast.warning("Please write reply",{
              position:"top-left",
              duration:1000,
              dismissible:true,              
            });
        return;
      }
      console.log(this.messageText);
      console.log(this.$route.params.categoryId);
      console.log(this.$route.params.categoryName);
      let cookie = this.getCookie("CodeChatCookie");
      const requestOptions = {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": "Bearer " + cookie, 
          },
        body: JSON.stringify({
          Text: this.messageText,
          CategoryId: this.$route.params.categoryId,
          CategoryName: this.$route.params.categoryName,
        }),
        mode: "cors",
      };
      await fetch("http://localhost:7002/api/message", requestOptions)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      this.$refs["messageText"].value = "";
    },
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
  },
};
</script>

<style scoped>
.sendButton {
  margin-bottom: -4%;
  margin-left: 92%;
  position: absolute;
  bottom: 30%;
  color: red;
}
.send-message {
  margin-top: 10px;
  width: 90%;
  height: 60px;
  resize: none;
  position: absolute;
}
</style>
