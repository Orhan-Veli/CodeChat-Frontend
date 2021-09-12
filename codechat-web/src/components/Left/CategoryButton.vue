<template>
        <a type="button" @click="onclick()" href="#chat_room.html" >
            <i class="fa fa-rocket"></i>            
            <span>{{ category.name }}</span>
        </a>
</template>


<script>
export default {
    name:'CategoryButton',
    props:["category"],   
    methods:{
      onclick: function() {
        this.$emit('clicked',this.category.id);        
      }  
    } 
}
</script>


<style scoped>
.btn-key {
  background: #1abc9c;
}

.btn-key:hover {
  background: #16a085;
}
</style>