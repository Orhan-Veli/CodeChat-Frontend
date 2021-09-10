<template>
        <a href="#chat_room.html">
            <i class="fa fa-rocket"></i>
            <span>{{ CategoryName }}</span>
        </a>
</template>


<script>
export default {
    name:'CategoryButton',
    props:
    {
        CategoryName: String
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