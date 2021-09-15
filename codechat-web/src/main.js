import { createApp } from 'vue'
//import { createStore } from "vuex";
import App from './App.vue'

// const store = createStore({
//     state(){
//         return{
//             id:String, 
//             messages:undefined           
//         }
//     },
//     mutations:{
//         setMessages(state, payload){
//              state.messages = payload;
//          },        
//     },
//     getters:{      
//         getMessages: (state) => state.messages  
//     }
// })

const app = createApp(App);

//app.use(store);
app.mount('#app');
