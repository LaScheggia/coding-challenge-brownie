<template>
  <div>
    <div class="gallery">
      <div class="gallery__column">
        <figure class="gallery__thumb">
          <img
            src="../assets/img/supra.jpg"
            alt=""
            class="gallery__image"
          />
        </figure>

        <figure class="gallery__thumb">
          <img
            src="../assets/img/pink.jpg"
            alt="pinkdetail"
            class="gallery__image"
          />
        </figure>

        <figure class="gallery__thumb">
          <img
            src="../assets/img/dark.jpg"
            alt="Portrait by Alex Perez"
            class="gallery__image"
          />
        </figure>
      </div>

      <div class="gallery__column">
        <figure class="gallery__thumb">
          <img
            src="../assets/img/rss.jpg"
            alt="Pbunch of nissans"
            class="gallery__image"
          />
        </figure>

        <figure class="gallery__thumb">
          <img
            src="../assets/img/dark2.jpg"
            alt="Portrait by Ivana Cajina"
            class="gallery__image"
          />
        </figure>

        <figure class="gallery__thumb">
          <img
            src="../assets/img/car2.jpg"
            alt="Portrait by Sam Burriss"
            class="gallery__image"
          />
        </figure>
      </div>

      <div class="gallery__column">
        <figure class="gallery__thumb">
          <img
            src="../assets/img/dark.jpg"
            alt="Portrait by Mari Lezhava"
            class="gallery__image"
          />
        </figure>

        <figure class="gallery__thumb">
          <img
            src="../assets/img/nissan.jpg"
            alt="nissan"
            class="gallery__image"
          />
        </figure>

      </div>

      <div class="gallery__column">
        <figure class="gallery__thumb">
          <img
            src="../assets/img/bmw.jpg"
            alt="Portrait by Guilian Fremaux"
            class="gallery__image"
          />
        </figure>

        <figure class="gallery__thumb">
          <img
            src="../assets/img/miatina.jpg"
            alt="Portrait by Jasmin Chew"
            class="gallery__image"
          />
        </figure>

        <figure class="gallery__thumb">
          <img
            src="../assets/img/car3.jpg"
            alt=""
            class="gallery__image"
          />
        </figure>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "GalleryComp",
};
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  transition: 0.3s;
  background-color: black;

  &:hover &__image {
    filter: grayscale(1);
  }

  &__column {
    display: flex;
    flex-direction: column;
    width: 25%;
  }

  margin: 2px;
  overflow: hidden;

  &:hover {
    .gallery__image {
      filter: grayscale(0);
    }

    .gallery__caption {
      opacity: 1;
    }
  }

  &__thumb {
    position: relative;
  }

  &__image {
    display: block;
    width: 100%;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
}




</style>
