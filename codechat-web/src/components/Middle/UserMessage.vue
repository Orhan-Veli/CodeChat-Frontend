<template>
    <div class="group-rom">
            <div class="first-part">Cendy Andrianto</div>
            <div class="second-part">Yoman Smith. Please proceed</div>
            <div class="third-part">12:31</div>
    </div> 
</template>

<script>
export default{
    name:"UserMessage",
}
</script>

<style>
.group-rom {
  width: 100%;
  float: left;
  border-bottom: 1px solid #eaebee;
}

.group-rom .first-part,
.group-rom .second-part,
.group-rom .third-part {
  float: left;
  padding: 15px;
}

.group-rom .first-part {
  width: 25%;
}

.group-rom .first-part.odd {
  background: #f7f8fa;
  color: #6a6a6a;
  font-weight: 600;
}

.group-rom .second-part {
  width: 60%;
}

.group-rom .third-part {
  width: 15%;
  color: #d4d3d3;
}
</style>