<template>
        <a href="#chat-room.html">
            <i class="fa fa-circle text-muted"></i>
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