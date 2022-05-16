<template>
  <div id="jdmscontacts">
    <footer class="dc-footer">
      <div class="container py-5">
        <div class="row py-3">
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">About us</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="#" class="text-muted">Contact Us</a>
              </li>
              <li class="mb-2"><a href="#" class="text-muted">About Us</a></li>
              <li class="mb-2"><a href="#" class="text-muted">Stories</a></li>
              <li class="mb-2"><a href="#" class="text-muted">Press</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Help</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2"><a href="#" class="text-muted">Events</a></li>
              <li class="mb-2"><a href="#" class="text-muted">Tickets</a></li>
              <li class="mb-2">
                <a href="#" class="text-muted">Cancellation</a>
              </li>
              <li class="mb-2"><a href="#" class="text-muted">Refunds</a></li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Policy</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="#" class="text-muted">Return Policy</a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">Terms Of Use</a>
              </li>
              <li class="mb-2"><a href="#" class="text-muted">Security</a></li>
              <li class="mb-2"><a href="#" class="text-muted">Privacy</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2"><a href="#" class="text-muted">Sitemap</a></li>
              <li class="mb-2">
                <a href="#" class="text-muted">Work with us</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">
              Registered Office Address
            </h6>
            <p class="text-muted mb-4">
              497-1002, Kichijoji Minamicho, Musashino-shi, Tokyo, Japan
            </p>
            <ul class="list-inline mt-4">
              <li class="list-inline-item">
                <a href="#" target="_blank" title="twitter"
                  ><i class="fab fa-2x fa-twitter"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="facebook"
                  ><i class="fab fa-2x fa-facebook-f"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="instagram"
                  ><i class="fab fa-2x fa-instagram"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="pinterest"
                  ><i class="fab fa-2x fa-youtube"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" title="vimeo"
                  ><i class="fab fa-2x fa-google"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="dc-rights py-2">
        <div class="container text-center">
          <p class="mb-0">&copy; 2022 All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ContactsComp",

};
</script>

<style lang="scss" scoped>
@import "../assets/style/vars.scss";

.dc-footer {
  background-color: $dc-light;
  font-family: "Montserrat-regular", Helvetica, Arial;
}

i {
  color: #8a7e78;
  font-size: 20px;
}

h6 {
  color: $dc-dark;
}

.dc-rights {
  color: $dc-dark-light;
  background-color: $dc-dark;
}
</style>
