<template>
    <div>
        <button                
        class="btn btn-primary sendButton"
        >
        Send
        </button>
    </div>
</template>

<script>
export default {
    name:"SendButton",
}
</script>

<style scoped>
.sendButton {
  margin-top: 1%;
  margin-left: 90%;
  position: absolute;
  bottom: 30%;
  color: red;
}

.btn-key {
  background: #1abc9c;
}

.btn-key:hover {
  background: #16a085;
}
</style>
