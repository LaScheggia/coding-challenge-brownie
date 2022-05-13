<template>
  <div class="dc-wrapper">
    <div class="dc-intro">big lorem bla bla bla</div>
    <div class="dc-square-container">
      <div class="row">
        <div class="dc-square bg-primary hidden-xs col-sm-6 d-none d-sm-block">LOREM LOREM LOREM</div>
        <div class="dc-square bg-danger col-sm-6">I M A G E</div>
      </div>
      <div class="row">
        <div class="dc-square bg-danger col-sm-6">I M A G E</div>
        <div class="dc-square bg-primary hidden-xs col-sm-6 d-none d-sm-block">LOREM LOREM LOREM</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsComp',
}
</script>

<style lang="scss" scoped>
.dc-intro {
  height: 200px;
}

.dc-square {
  height: 500px;
}


</style>