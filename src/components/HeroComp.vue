<template>
  <div class="dc-hero">
    <div class="dc-glass d-none d-lg-block pt-5">
      <h1 class="text-center pt-5">Feel the old japanese tradition</h1>
      <p class="text-center pt-5">Our new JDM collection is here</p>
      <h6 class="text-center pb-5">New events added, go check them.</h6>
      <button class="button-3">See gallery</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HeroComp',
}
</script>

<style lang="scss" scoped>
.dc-hero {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(../assets/img/car.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dc-glass {
  height: 600px;
  width: 800px;
  background: rgba(255, 255, 255, 0.26);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15.1px);
  -webkit-backdrop-filter: blur(15.1px);
  border: 1px solid rgba(255, 255, 255, 0.26);
}

button {
  margin:0 auto;
  display:block;
}


</style>