<template>
  <div id="app">
    <NavbarComp />
    <HeroComp />
    <EventsComp />
    <CalendarComp />
    <GalleryComp />
    <ContactsComp />
  </div>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";
import HeroComp from "./components/HeroComp.vue";
import ContactsComp from "./components/ContactsComp.vue";
import GalleryComp from "./components/GalleryComp.vue";
import EventsComp from "./components/EventsComp.vue";
import CalendarComp from "./components/CalendarComp.vue";

export default {
  name: "App",
  components: {
    NavbarComp,
    HeroComp,
    ContactsComp,
    GalleryComp,
    EventsComp,
    CalendarComp,
  },
};
</script>

<style lang="scss">
@import "./assets/style/global.scss";
@import "./assets/style/vars.scss";

@font-face {


  font-family: "Montserrat-regular";
  src: local("Montserrat-regular"),
    url(./fonts/Montserrat-Regular.ttf) format("truetype");

}

#app {
  
}
</style>
