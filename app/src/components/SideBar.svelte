<script>
  import { getContext, onMount } from 'svelte';
  import { Router, Link, Route } from 'svelte-routing';
  import { ROUTER } from 'svelte-routing/src/contexts';
  
  import getUserInfo from '../store/auth-utils'



  // when ready, load user profile info
  let userInfo = undefined;
  onMount(async () => (userInfo = await getUserInfo()));


  const { activeRoute } = getContext(ROUTER);

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: 'nav-link active text-success' };
    }
    return { class: 'nav-link'};
  }
</script>

<!-- SideBar -->

<nav
  class="navbar navbar-dark align-items-start sidebar sidebar-light accordion
    p-0">
  
  <div class="container-fluid d-flex flex-column p-0">

    <a
      class="navbar-brand d-flex justify-content-center align-items-center
      sidebar-brand m-0"
      href="#">
      <div class="sidebar-brand-text mx-3 p-0" >
        <img src="/img/migrosx.svg" width="100%">
        <br> <span class="text-success">Hackathon Starter</span> 
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
    
    <!-- authorized user section START -->
    {#if userInfo}
    <div>
      <hr>
      <ul class="nav navbar-nav text-light">
        <li class="nav-item" role="presentation">
        <Link to="/productsearch" {getProps}>
          <i class="fas fa-search" />
          <span>Migros Product Search</span>
        </Link>
      </li>
      </ul>
    </div>
    {/if}
    <!-- authorized user section END -->


  </div>
</nav>
