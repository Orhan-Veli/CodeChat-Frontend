<template>
        <a href="#chat-room.html">
            <i class="fa fa-circle" style="color:green"></i>
            {{userName}}              
        </a>
</template>

<script>
export default {
    name:'User',
    props:["userName"]
}
</script>

<style scoped>

</style>