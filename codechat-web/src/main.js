import { createApp } from 'vue'
import App from './App.vue'
//import {createStore} from 'vuex'
import toastr from "@meforma/vue-toaster"
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret);

// const store = createStore({
//     state()
//     {
//         return{
//             onlineUsers:[]
//         }  
//     },
//     mutations:
//     {
//         OnlineUser(state,payload)
//         {
//             state.onlineUsers.push(payload);          
//         },
//         OfflineUser(state,payload)
//         {
//             state.onlineUsers.pop(payload);
//         }       
//     }
// })


const app = createApp(App)
.component('fa',FontAwesomeIcon)
.use(toastr).use(router).use(library);//.use(store)
app.mount('#app');
