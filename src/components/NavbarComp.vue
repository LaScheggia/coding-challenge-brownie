<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light dc-nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">JDMsImport</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#jdmshistory">JDMs History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#jdmsevents">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#jdmsgallery">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#jdmscontacts">Contacts</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              F.A.Q.s
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Shop tickets</a></li>
              <li><a class="dropdown-item" href="#">Shop Merch</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Write to us!</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input type="search" placeholder="Search" aria-label="&#128269; Search" />
          <i class="fas fa-search" aria-hidden="true"></i>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComp",
};
</script>

<style lang="scss" scoped>
@import "../assets/style/vars.scss";

ul {
  width: 100%;
  font-size: 0.85rem;
  a {
    padding: 1rem;
    color: rgb(79, 76, 72);
    text-transform: capitalize;
    &:hover,
    &.active {
      border-bottom: 5px solid $dc-accent;
    }
  }
}

input {
  outline: 0;
  border-width: 0 0 2px;
  border-color: $dc-accent;
}

input:active {
  border: none;
  outline: none;
}
</style>
