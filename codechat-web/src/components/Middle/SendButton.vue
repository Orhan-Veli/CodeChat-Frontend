<template>
  <textarea
    @keyup.enter="SendParam"
    v-model="messageText"
    ref="messageText"
    class="form-control send-message"
    placeholder="Write a reply..."
  ></textarea>
  <div>
    <button @click="SendParam" class="btn btn-primary sendButton">Send</button>
  </div>
</template>

<script>

import {SendParam} from '@/assets/Js/Middle/SendButton'
export default {
  name: "SendButton",
  methods: {
    async SendParam()
    {
     await SendParam(this.messageText,this.$route.params.categoryId,this.$route.params.categoryName)
      this.$refs.messageText.value = '';
      document.getElementsByClassName('scroll')[0].scrollTop =  document.getElementsByClassName('scroll')[0].scrollHeight
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
