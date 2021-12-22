<template>
  <div class="container bootstrap snippets bootdey.com">
    <div class="row">
      <div class="col-md-12">
        <!-- start:chat room -->
        <div class="box">
          <div class="chat-room">
            <!-- start: Left -->
            <!-- <LeftMain @catId="getAll" /> -->
            <LeftMain/>
            <!-- end: Left -->
            <!-- start:middle -->
            <MiddleMain :messages="messages" />
            <!-- end: middle -->

            <!-- start:rigt -->
            <RightMain :users="onlineUsers" />
            <!-- end:right-->
          </div>
        </div>
        <!-- end:chat room -->
      </div>
    </div>
  </div>
</template>

<script>
import { GetCookie,CheckUser } from "../assets/Js/View/Core";
import LeftMain from "../components/Left/LeftMain.vue";
import MiddleMain from "../components/Middle/MiddleMain.vue";
import RightMain from "../components/Right/RightMain.vue";
import * as signalR from "@microsoft/signalr";
export default {
  name: "Home",
  components: {
    LeftMain,
    MiddleMain,
    RightMain,
  },
  data() {
    return {
      messages: [],  
      onlineUsers:[], 
    };
  },
  methods:{
async GetAllMessage(catId,catName)
{
    const cookie = GetCookie("CodeChatCookie");
    CheckUser(catId,catName); 
    if (catId === undefined) {
    return;
    }
    const requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + cookie,
    },
    mode: "cors",
    };
    await fetch(
    `http://localhost:7007/message/getall/${catId}`,
    requestOptions
    )
    .then((response) => response.json())
    .then((data) => 
    {
        if(data)
        {
        this.messages = data.data; 
        console.log(this.messages);                
        }         
    })
    .catch((error) => {
        this.messages = [];
        console.error("Error:", error);
    });    
    
    await this.SignalRSocket(catId);
    console.log(catId); 
},
SignalRSocket(categoryId)
{       
  
    if (categoryId === undefined) {
      return;
    }   
    const hubConnection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Debug)
      .withUrl("http://localhost:7002/ChatHub", {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();
    hubConnection.start();
    let connectionMessage = hubConnection; 
    connectionMessage.on(categoryId, (all) => 
    {
      all = JSON.parse(all);
      var userMessage = {
         id: all.Id,
         text: all.Text,
         userId:all.UserId,
         userName:all.UserName,
         categoryName: all.CategoryName,
         createdOn: all.CreatedOn,
        };          
        this.messages.push(userMessage);
      console.log(this.messages);         
    });
},

  UserConnected()
      {
        const hubConnectionUser = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Debug)
        .withUrl("http://localhost:7002/UserHub", {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets,
        })
        .build();
        let connectionUser = hubConnectionUser;
        connectionUser.start(); 
        connectionUser.on("UserConnected",user => {
        this.onlineUsers = JSON.parse(user);   
        console.log(this.onlineUsers);    
        }    
      );  
    }
  },
async beforeMount() {  
    var catId = this.$route.params.categoryId;
    var catName =this.$route.params.categoryName; 
    this.UserConnected();  
    await this.GetAllMessage(catId,catName);    
    document.getElementsByClassName('scroll')[0].scrollTop =  document.getElementsByClassName('scroll')[0].scrollHeight
  }, 
};
</script>

<style>
body {
  background: #f5f5f5;
}
.chat-room {
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  table-layout: fixed;
  width: 99%;
  min-height: 99%;
  position: absolute;
}

.chat-room aside {
  display: table-cell;
  float: none;
  padding: 0;
  vertical-align: top;
}

.chat-room .kiri-side .user-head {
  background: #2980b9;
  color: #ffffff;
  min-height: 70px;
  padding: 15px;
}

.pull-left {
  float: none;
  margin-left: 40%;
  color: red;
}

.chat-room .user-head i {
  float: left;
  font-size: 40px;
  margin-right: 10px;
}

.chat-room .user-head h3 {
  margin: 6px 0 0 0;
  font-weight: 100;
  letter-spacing: 1px;
}

.chat-room-head {
  background: #3498db;
  color: #ffffff;
  min-height: 70px;
  padding: 15px;
}

ul.chat-user {
  margin-bottom: 200px;
}

ul.chat-user li {
  border-bottom: none;
}

ul.chat-user li a:hover {
  background: none;
  color: #6a6a6a;
}

.chat-room .kiri-side footer {
  background: #d5d7de;
  padding: 15px;
  height: 70px;
  width: 25%;
  position: absolute;
  bottom: 0;
}

.chat-room .left-side footer a.chat-dropdown {
  background: #96979a;
  border-radius: 2px;
  color: #fff;
  font-size: 10px;
  margin-top: 10px;
  padding: 3px 5px;
}

.room-desk {
  display: inline-block;
  margin-bottom: 30px;
  width: 100%;
  padding: 15px;
}

.room-desk h4 {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 16px;
  margin: 5px 0 0 0;
}

.room-box {
  border: 1px solid #f7f8fa;
  background: #f7f8fa;
  padding: 10px;
  display: inline-block;
  width: 100%;
  margin-top: 10px;
}

.room-box h5 {
  margin: 0 0 5px 0;
  font-weight: 300;
  font-size: 16px;
}
.room-box h5 a {
  color: #00a9b4;
}

.invite-row {
  background: #e5e8ef;
  padding: 6px 0px;
  display: inline-block;
  width: 100%;
}

.invite-row h4 {
  font-size: 16px;
  font-weight: 300;
}

ul.chat-available-user {
  padding: 10px;
  list-style: none;
}

ul.chat-available-user li {
  margin-bottom: 15px;
}

ul.chat-available-user li a {
  color: #6a6a6a;
  text-decoration: none;
}
ul.chat-available-user li i {
  padding-right: 5px;
  font-size: 10px;
}

a.guest-on {
  color: #6a6a6a;
  margin-top: 8px;
  display: inline-block;
}

a.guest-on i {
  background: #40cabe;
  color: #fff;
  padding: 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  margin-right: 5px;
}

.lobby {
  padding: 0 !important;
}
</style>
