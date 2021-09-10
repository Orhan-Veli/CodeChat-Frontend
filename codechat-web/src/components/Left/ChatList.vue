<template>

    <ul class="chat-list">
      <li :key="category.id" v-for="category in categories">
        <CategoryButton category="category.CategoryName" />
      </li>
    </ul>
</template>

<script>
import CategoryButton from './CategoryButton.vue'
export default {
    name:'ChatList',
    components:{
        CategoryButton
    },
    props:{
       categories: Array
    }
}
</script>

<style scoped>
ul.chat-list li a {
  color: #6a6a6a;
  display: block;
  padding: 15px;
  font-weight: 300;
  text-decoration: none;
}
ul.chat-list li a:hover,
ul.chat-list li.active a {
  color: #00a9b4;
  background: #f2f4f7;
}

ul.chat-list li h4 {
  padding: 17px 15px;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid #d5d7de;
}

ul.chat-list li h4 i {
  padding-right: 5px;
}

ul.chat-list li a span {
  padding-left: 10px;
}

ul.chat-list li a i.fa-times {
  color: #9fa3b0;
}

ul.chat-list li.active {
  color: #00a9b4;
  background: #f2f4f7;
}

ul.chat-list {
  border-bottom: 1px solid #d5d7de;
  padding-left: 0;
  list-style: none;
}

</style>