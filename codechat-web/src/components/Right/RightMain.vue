<template>
     <aside class="kanan-side">
            <div class="user-head">
             <!-- <span><Donate /></span>
              <span><Option /></span> -->
              <span><Admin /></span>
              <span><Logout /></span>
            </div>
            <div class="invite-row">
              <h4 class="pull-left">Online Coders</h4>
            </div>
            <ul class="chat-available-user">
              <li :key="user" v-for="user in users">
                 <User :userName="user" />
              </li>            
            </ul>
          </aside>
</template>

<script>
import User from './User.vue'
//import Option from './Option.vue'
//import Donate from './Donate.vue'
import Admin from './Admin.vue'
import Logout from './Logout.vue'
export default {
    name:'RightMain',
    components:{
        User,Admin,Logout
    },
    props:["users"]
}
</script>


<style scoped>
.chat-room .kanan-side {
  width: 25%;
  background: #fff;
}

.chat-room .kanan-side .user-head {
  background: #2980b9;
  color: #ffffff;
  min-height: 70px;
  padding: 15px;
  border-left: 1px solid #2980b9;
  margin-left: -1px;
  position: relative;
}

.chat-room .kanan-side footer {
  background: #fff;
  padding-left: 15px;
  padding-right: 15px;
  height: 70px;
  width: 25%;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #e5e8ef;
}

.chat-tools {
  float: right;
  padding: 3px;
  width: 40px;
  height: 35px;
  line-height: 30px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  text-align: center;
  margin-top: 6px;
  margin-left: 10px;
}

.chat-tools i {
  font-size: 16px !important;
  float: none !important;
  margin-right: 0 !important;
  color: #fff;
}


</style>