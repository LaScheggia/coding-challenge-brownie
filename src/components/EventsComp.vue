<template >
  <div id="jdmshistory" class="dc-wrapper">
    <div class="p-3 mt-5">
    <h1>JDM is history,</h1>
    <h1>still carrying on today</h1>

    </div>

    <div class="dc-intro">
      <p class="dc-line-height">
        Cupcake ipsum dolor sit amet cupcake sugar plum chocolate. Jujubes
        macaroon danish chocolate bar dessert I love. Chocolate bar jujubes
        dragée candy canes gummi bears gummi bears cake tiramisu chocolate cake.
        Chocolate cookie chocolate cake powder candy canes. Apple pie carrot
        cake gingerbread dragée marshmallow biscuit jujubes jelly-o. Croissant
        chocolate cake candy pie toffee tootsie roll jelly beans. Chocolate bar
        muffin sugar plum powder macaroon I love jelly macaroon.
      </p>
      <p class="dc-line-height">
        Cupcake ipsum dolor sit amet muffin I love caramels. Macaroon muffin
        sweet roll dessert brownie chocolate bar. Bear claw icing sugar plum
        chupa chups marzipan donut I love tiramisu. Cake tart sesame snaps
        halvah wafer cupcake. Donut gummies cotton candy muffin marzipan donut
        toffee dragée. Macaroon I love dessert cookie candy caramels pudding
        jelly-o.
      </p>
    </div>
    <div class="dc-square-container">
      <div class="row">
        <div class="dc-square text-center col-sm-6 d-none d-sm-block">
          <h6 class="uppercase pb-5">Explore Tokio streets</h6>
          <h3 >Explore most famous districts where racers meet every night.</h3>
          <p class="dc-line-height">
            Traveling to Tokyo, Japan can be an incredible experience for car
            lovers. Whether it’s the big events, informal car meets or just
            finding cool stuff parked on the street, there’s never a shortage of
            automotive-related stuff to see and do.
          </p>
          <button class="button-2">See more</button>
        </div>
        <div class="dc-square dc-bg-1 col-sm-6"></div>
      </div>
      <div class="row">
        <div class="dc-square dc-bg-2 col-sm-6"></div>
        <div class="dc-square text-center col-sm-6 d-none d-sm-block">
          <h6 class="uppercase pb-5">Explore Mount Haruna most famous streets</h6>
          <h3>Akina streets</h3>
          <p class="dc-line-height">
            Haruna appears in Initial D under the name Akina (秋名). Akina pass,
            is actually Jomo-Sanzan Panorama Highway. Bunta Fujiwara holds the
            fastest downhill record at Mt. Akina and was the original best
            driver before his son
          </p>

          <button class="button-2">See more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsComp",
};
</script>

<style lang="scss" scoped>
@import "../assets/style/vars.scss";

.dc-intro {
  height: 200px;
  column-count: 2;
}

p {
  padding: 20px;
}

.dc-square {
  height: 500px;
  padding-top: 150px

}

.dc-bg-1 {
  background-image: url(../assets/img/japn-1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 60%;
}

.dc-bg-2 {
  background-image: url(../assets/img/haruna.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 70%;
}
</style>
