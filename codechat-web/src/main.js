import { createApp } from 'vue'
import { createStore } from "vuex";
import App from './App.vue'
import router from './router'

const store = createStore({
    state(){
        return{
            id:String,
            name:"",            
        }        
    },
    mutations:{
        setId(state,payload)
        {         
            console.log(payload)
            state.id=payload.id; 
            state.name=payload.name;          
        }
    }
})

const app = createApp(App).use(router);

app.use(store);
app.mount('#app');
