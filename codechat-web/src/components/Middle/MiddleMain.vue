<template>
       <aside class="tengah-side">
            <div class="chat-room-head">
              <h3>Chat Room</h3>
            </div>
            <div class="group-rom">
              <div class="first-part">Cendy Andrianto</div>
              <div class="second-part">Yoman Smith. Please proceed</div>
              <div class="third-part">12:31</div>
            </div>            
            <ReplySection />
          </aside>         
</template>

<script>
import ReplySection from './ReplySection.vue'
export default {
    name:'MiddleMain',
    components:{
        ReplySection
    }
}
</script>

<style scoped>
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