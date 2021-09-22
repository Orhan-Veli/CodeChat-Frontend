<template>
  <textarea
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
import { mapState } from "vuex";
export default {
  name: "SendButton",
  data() {
    return {
      postId: undefined,
    };
  },
  computed: {
    ...mapState(["id", "name"]),
  },
  methods: {
    async sendParam() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Text: this.messageText,
          CategoryId: this.id,
          CategoryName: this.name,
        }),
        mode: "cors",
      };
      await fetch("http://localhost:7002/api/message", requestOptions)
        .then((response) => response.json())
        .then((data) => (this.postId = data))
        .catch((error) => console.log(error));
      this.$refs["messageText"].value = "";
    },
  },
};
</script>

<style scoped>
.sendButton {
  margin-top: 1%;
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
