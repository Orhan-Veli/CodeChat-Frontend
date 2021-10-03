<template>
  <div :key="message.userId" v-for="message in messages">
    <div class="group-rom">
      <div class="first-part">{{ message.userName }}</div>
      <div class="second-part">{{ message.text }}</div>
      <div class="third-part">{{ fun(message.createdOn) }}</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "UserMessage",
  props: ["messages"],
  data() {
    return {
      dates: Date,
    };
  },

  methods: {
    fun(val) {
      if (val !== undefined) {
        this.dates = moment(val).format("DD.MM.yyyy hh:mm");
        return this.dates;
      }
    },
  },
};
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