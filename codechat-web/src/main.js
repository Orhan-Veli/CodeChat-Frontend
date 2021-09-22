import { createApp } from 'vue'
import { createStore } from "vuex";
import App from './App.vue'

const store = createStore({
    state(){
        return{
            id:String,
            name:String,            
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

const app = createApp(App);

app.use(store);
app.mount('#app');
