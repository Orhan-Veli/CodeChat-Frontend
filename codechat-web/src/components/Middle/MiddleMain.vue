<template>
  <aside class="tengah-side">
    <div class="chat-room-head">
      <h3>Chat Room</h3>
    </div>
    <div class="scroll">
      <UserMessage :messages="messages" />
    </div>
    <ReplySection />
  </aside>
</template>

<script>
import ReplySection from "./ReplySection.vue";
import UserMessage from "./UserMessage.vue";
export default {
  name: "MiddleMain",
  components: {
    ReplySection,
    UserMessage,
  },
  props: ["messages"],
};
</script>

<style scoped>
.scroll {
  height: 780px;
  overflow: scroll;
  width: 100%;
}
.chat-room .tengah-side {
  width: 100%;
  height: 100%;
  background: #fff;
  border-right: 1px solid #e5e8ef;
}

.chat-room .tengah-side footer {
  background: #f6f6f6;
  padding: 0.8%;
  height: 70px;
  width: 65%;
  position: absolute;
  float: left;
  bottom: 0px;
  border-right: 1px solid #e5e8ef;
}

.chat-room-head h3 {
  margin: 5px 0 0;
  font-weight: 100;
  letter-spacing: 1px;
  display: inline-block;
}
</style>