<template>
  <ul class="chat-list">
    <li :key="category.id" v-for="category in categories">
<a type="button" @click="RouteCategory(category.id,category.name)" href="">
<i class="fa fa-rocket"></i>
        <span>{{ category.name }}</span>
</a>
    </li>
  </ul>
</template>


<script>
import {GetAllCategory,RouteCategory} from '@/assets/Js/Left/CategoryButton'
export default {
  name: "CategoryButton",
  props: ["category"],
  data() {
    return {
      categories: Array,
    };
  },
  methods: {
    RouteCategory(catId,catName)
    {
      RouteCategory(catId,catName);      
    }
  
  },
  async created() {
    this.categories = await GetAllCategory();
  },
};
</script>


<style scoped>
.btn-key {
  background: #1abc9c;
}

.btn-key:hover {
  background: #16a085;
}

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

ul.chat-list li a:focus {
  background: rgb(108, 243, 209);
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