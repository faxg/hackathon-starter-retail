<script>
  import { getContext, onMount } from 'svelte';
  import { Router, Link, Route } from 'svelte-routing';
  import { ROUTER } from 'svelte-routing/src/contexts';

  const { activeRoute } = getContext(ROUTER);

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: 'nav-link active' };
    }
    return { class: 'nav-link'};
  }
</script>

<!-- SideBar -->
<nav
  class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion
  bg-gradient-primary p-0">
  <div class="container-fluid d-flex flex-column p-0">
    <a
      class="navbar-brand d-flex justify-content-center align-items-center
      sidebar-brand m-0"
      href="#">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-apple-alt" />
      </div>
      <div class="sidebar-brand-text mx-3">
        <span>
          Migros
          <br />
          Hackathon
          <br />
          Starter
        </span>
      </div>
    </a>
    <hr class="sidebar-divider my-0" />
    <ul class="nav navbar-nav text-light" id="accordionSidebar">

      <li class="nav-item" role="presentation">
        <Link to="/home" {getProps}>
          <i class="fas fa-home" />
          <span>Home</span>
        </Link>
      </li>
      <li class="nav-item" role="presentation" />
      <li class="nav-item" role="presentation" />
      <li class="nav-item" role="presentation" />
      <li class="nav-item" role="presentation" />
      <li class="nav-item" role="presentation">
        <Link to="/data" {getProps}>
          <i class="fas fa-database" />
          <span>Migros Data Access</span>
        </Link>
        <Link to="/customvision" {getProps}>
          <i class="far fa-eye" />
          <span>Custom Vision</span>
        </Link>
        <Link to="/formrecognizer" {getProps}>
          <i class="fab fa-wpforms" />
          <span>FormRecognizer</span>
        </Link>
        <Link to="/chatbot" {getProps}>
          <i class="fas fa-robot" />
          <span>Chatbot</span>
        </Link>
        <Link to="/maps" {getProps}>
          <i class="fas fa-globe" />
          <span>Bing Maps</span>
        </Link>
        <Link to="/spatialanchors" {getProps}>
          <i class="fas fa-map-marked-alt" />
          <span>Spatial Anchors (AR/VR)</span>
        </Link>
      </li>
    </ul>
    <div class="text-center d-none d-md-inline">
      <button
        class="btn rounded-circle border-0"
        id="sidebarToggle"
        type="button" />
    </div>
  </div>
</nav>
