<template>
  <div id="jdmsevents" class="dc-wrapper pb-5">
    <div class="dc-title">
      <div class="mt-5 mb-5">
        <h1>New events</h1>
        <h1 class="pb-5">and news from us</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-5 pt-5">
        <p class="dc-line-height">
          Cupcake cipsum dolor sit amet. Croissant topping candy canes icing
          cookie I love cake jujubes. Cake brownie soufflé cheesecake halvah I
          love tootsie roll cupcake. I love apple pie halvah apple pie candy
          canes candy canes. Donut bonbon fruitcake wafer caramels chocolate
          cake icing sweet roll. Bear claw toffee pudding gingerbread sweet
          wafer pie. I love I love oat cake sweet chocolate candy cupcake.
          Brownie I love I love gummies cupcake chocolate sugar plum bonbon.
          Cupcake sweet cheesecake muffin dessert.
        </p>
      </div>
      <div class="dc-image d-none d-sm-block col-sm-4"><!-- IMG --></div>
      <div class="d-none d-sm-block col-sm-3">
        <div class="dc-press p-4">
          <h6 class="uppercase pt-3 pb-1">press</h6>
          <h6 class="uppercase">16 May 2022</h6>

          <h4 class="pt-5">Most important event</h4>
          <h5>Tickets available</h5>

          <div class="dc-chevron pt-5 bold">
            <i class="fas fa-chevron-left"></i>
            <span>&nbsp; &nbsp; &nbsp;</span>
            <i class="fas fa-chevron-right"></i>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarComp",
};
</script>

<style lang="scss" scoped>
.dc-wrapper {
  font-family: "Miller-Display_30501";
  overflow: hidden;
}

.dc-title {
  width: 100%;
  height: 100px;
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

.dc-image {
  height: 600px;
  background-image: url(../assets/img/jdm-meet.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

i {
  color: #8A7E78;
  font-size: 20px;
  cursor: pointer;
   &:hover{
  transform: scale(2); 
  transition: all .2s ease-in-out; }
}

</style>
