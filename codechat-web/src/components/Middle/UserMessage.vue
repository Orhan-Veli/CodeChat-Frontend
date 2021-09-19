<template>
<div :key="message.id" v-for="message in messages">
 <div class="group-rom">
            <div class="first-part">{{message.categoryName}}</div>
            <div class="second-part">{{message.text}}</div>
            <div class="third-part">{{fun(message.createdOn)}}</div>
    </div> 
</div>
<div :key="user.id" v-for="user in userMessage">
  <div class="group-rom" >
            <div class="first-part">{{user.categoryName}}</div>
            <div class="second-part">{{user.text}}</div>
            <div class="third-part">{{fun(user.createdOn)}}</div>
    </div> 
</div>

</template>

<script>
import moment from 'moment'
import * as signalR from "@microsoft/signalr"

export default{
    name:"UserMessage",   
    props:["messages"],
    data(){       
      return {
          dates:Date,
          userMessages:[],
          userMessage:{},
          connectionId:undefined,
          connection:undefined          
      }
    },
    async created(){
      const hubConnection = new signalR.HubConnectionBuilder().configureLogging(signalR.LogLevel.Debug).withUrl("http://localhost:7002/ChatHub",{
        skipNegotiation:true,
        transport:signalR.HttpTransportType.WebSockets
      }).build();
      await hubConnection.start();
      this.connectionId=hubConnection.connectionId;
      this.connection = hubConnection;
      await this.connection.on("ReceiveMessage",(val) =>{
        val = JSON.parse(val);
    this.userMessage={
      "id":val.Id,
      "text":val.Text,
      "categoryName":val.CategoryName,
      "createdOn":val.CreatedOn
    }       
        this.userMessages.push(this.userMessage);
        console.log(this.userMessages);  
      })
      
    }, 
    methods:{
       fun(val){
      if(val !== undefined){      
        this.dates = moment(val).format('DD.MM.yyyy hh:mm');
        return this.dates;
        }  
      },
      
    }
  }
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