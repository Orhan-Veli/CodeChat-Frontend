import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'
import toastr from "@meforma/vue-toaster"
import router from './router'

const store = createStore({
    state()
    {
        return{
            onlineUsers:[]
        }  
    },
    mutations:
    {
        OnlineUser(state,payload)
        {
            state.onlineUsers.push(payload);          
        },
        OfflineUser(state,payload)
        {
            state.onlineUsers.pop(payload);
        }       
    }
})


const app = createApp(App).use(toastr).use(router).use(store);
app.mount('#app');
