<template>
  <ul class="chat-list">
    <li :key="category.id" v-for="category in categories">
<a type="button" @click="routeCategory(category.id,category.name)" href="">
<i class="fa fa-rocket"></i>
        <span>{{ category.name }}</span>
</a>
    </li>
  </ul>
</template>


<script>
export default {
  name: "CategoryButton",
  props: ["category"],
  data() {
    return {
      categories: Array,
    };
  },
  methods: {
    routeCategory(categoryId,categoryName)
    {
      if(categoryId != undefined || categoryId != '' || categoryId != null)
      {
        this.$router.push({name:"Home",params:{categoryId:categoryId,categoryName:categoryName}})
      }
    },
    getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    },
  },
  async created() {
    const cookie = this.getCookie("CodeChatCookie");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + cookie, 
      },
      mode: "cors",
    };
    await fetch("http://localhost:7007/category/getall", requestOptions)
      .then((response) => response.json())
      .then((data) => (this.categories = data.data))
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(this.categories);
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