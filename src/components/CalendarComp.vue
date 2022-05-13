<template>
  <div class="dc-wrapper">
    <div class="dc-title bg-red-400">TITLE</div>
    <div class="row">
      <div class="bg-danger col-xs-12 col-sm-5">text text text</div>
      <div class="bg-primary d-none d-sm-block col-sm-4">IMG</div>
      <div class="bg-secondary d-none d-sm-block col-sm-3">SLIDER</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarComp",
};
</script>

<style lang="scss" scoped>
.dc-title {
  width: 100%;
  height: 200px;
}

.dc-column-container {
  width: 100%;
  height: 350px;
}

.column {
  float: left;
  padding: 10px;
  height: 300px;
}

.left {
  width: 30%;

}

.right {
  width: 20%;
}

.middle {
  width: 50%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
