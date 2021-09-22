<template>
  <footer>
    <div class="chat-txt">
      <SendButton />
    </div>
  </footer>
</template>

<script>
import SendButton from "./SendButton.vue";
export default {
  name: "ReplySection",
  components: {
    SendButton,
  },
};
</script>

<style scoped>
.chat-txt {
  float: none;
  width: 100%;
  position: relative;
}
</style>