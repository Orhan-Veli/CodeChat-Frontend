<template>  
       <aside class="tengah-side">        
            <div class="chat-room-head">
              <h3>Chat Room</h3>
            </div>
             <div>          
            <UserMessage />
             </div>
            <ReplySection />   
          <div><CategoryButton :clicked="myclick($event)"/> </div>       
        </aside>    
           
</template>

<script>
import ReplySection from './ReplySection.vue'
import UserMessage from './UserMessage.vue'
import CategoryButton from '../Left/CategoryButton.vue'
export default {
    name:'MiddleMain',
    components:{
        ReplySection,UserMessage,CategoryButton
    },
    data(){
      return{
        messages:undefined
      }
    },
    methods: {
      myclick(value){
        console.log(value);
      }
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

</style>