<template>
  <div class="dc-wrapper">
    <div class="dc-title bg-red-400">TITLE</div>
    <div class="dc-column-container bg-lime-300">
      <div class="column left bg-teal-400 hidden lg:block">text text text</div>
      <div class="column middle bg-yellow-400 sm:w-96">IMG</div>
      <div class="column right bg-blue-400 hidden lg:block">SLIDER</div>
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
