<template>
    <footer>
              <div class="chat-txt">
               <Message />
              </div>
              <SendButton />
        </footer>
</template>

<script>
import Message from './Message.vue'
import SendButton from './SendButton.vue'
export default {
    name:'ReplySection',
    components:{
        SendButton,
        Message
    }
}
</script>

<style scoped>
.chat-txt {
  float: none;
  width: 100%;
  position: relative;
}

</style>