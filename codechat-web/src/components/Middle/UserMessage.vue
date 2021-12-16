<template>
  <div :key="message.id" v-for="message in messages">
    <div class="group-rom">
      <div class="first-part">{{ message.userName }} <a type="button" href="#" @click="ReportUser(message.id)"><i class="fa fa-ban"></i></a> 
       
      </div>
      <div class="second-part">{{ message.text }}</div>
      <div class="third-part">{{ fun(message.createdOn) }}</div>
    </div>
  </div>

</template>

<script>
import moment from "moment";

export default {
  name: "UserMessage",
  props: ["messages"],
  data() {
    return {
      dates: Date,
      userId:String
    };
  },

  methods: {
    fun(val) {
      if (val !== undefined) {
        this.dates = moment(val).format("DD.MM.yyyy hh:mm");
        return this.dates;
      }
    },
    async ReportUser(id)
    {
      const cookie = this.getCookie("CodeChatCookie");
      const requestOptions =
      {
        method:"POST",
        headers: 
        { 
          "Content-Type":"application/json",
          "Authorization": "Bearer " + cookie, 
        },
        body:JSON.stringify({MessageId:id,UserId:this.userId})
      };
      await fetch("http://localhost:7007/message/reportmessage",requestOptions)
      .then(response => {
        response.json()
        this.$toast.warning("User reported.",{
              position:"top-left", 
              duration:1000,
              dismissible:true,              
            });
        })
      .catch(error => {
        console.log(error);
      })
    },
    async GetUserId() {
      const cookie = this.getCookie("CodeChatCookie");
      console.log(cookie);
      if (cookie !== null) {
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + cookie,
          },
          mode: "cors",
        };
        await fetch(
          "http://localhost:7007/user/getuserid",
          requestOptions
        )
          .then(async (res) => res=res.text())
          .then(data => this.userId = data)
          .catch((error) => console.log(error));
      } 
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
  beforeMount()
  {
    this.GetUserId();
  }
};
</script>

<style>

.group-rom {
  width: 100%;
  float: left;
  border-bottom: 1px solid #eaebee;
}

.group-rom .first-part,
.group-rom .second-part,
.group-rom .third-part {
  float: left;
  padding: 15px;
}

.group-rom .first-part {
  width: 25%;
}

.group-rom .first-part.odd {
  background: #f7f8fa;
  color: #6a6a6a;
  font-weight: 600;
}

.group-rom .second-part {
  width: 60%;
}

.group-rom .third-part {
  width: 15%;
  color: #d4d3d3;
}
</style>