<template>
 <!-- start:aside kiri chat room -->
          <aside class="kiri-side">
            <div class="user-head">
              <i class="fa fa-comments-o"></i>
              <h3>Code Chat</h3>
            </div>
            <ChatList />
          </aside>
          <!-- end:aside kiri chat room -->    
</template>

<script>
import ChatList from './ChatList.vue'
export default {
    name:'LeftMain',
    components : {
      ChatList,
    }
}
</script>

<style scoped>
.chat-room .kiri-side {
  width: 25%;
  background: #e5e8ef;
  border-radius: 4px 0 0 4px;
  -webkit-border-radius: 4px 0 0 4px;
}
.chat-room .kiri-side footer .chat-avatar img {
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  float: left;
}

.chat-room .kiri-side footer .user-status {
  float: left;
  margin: 10px;
}

.chat-room .kiri-side footer .user-status i {
  padding-right: 5px;
}
</style>