<script>
  import { getContext, onMount } from 'svelte';
  import { Router, Link, Route } from 'svelte-routing';
  import { ROUTER } from 'svelte-routing/src/contexts';
  
  import AuthLogin from './AuthLogin.svelte';
  import AuthLogout from './AuthLogout.svelte';

  const { activeRoute } = getContext(ROUTER);
  let userInfo = undefined;

  const providers = [ 'github', 'twitter', 'aad', 'google', 'facebook'];

  onMount(async () => (userInfo = await getUserInfo()));

  async function getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
  }

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: 'router-link-active' };
    }
    return {};
  }
</script>



<nav id="sidebar">

  <div class="sidebar-header">
    <h3>Migros <span class="dark">Hackathon</span> Starter</h3>
  </div>

  {#if userInfo}
    <div>
      <p>Welcome <b>{userInfo && userInfo.userDetails}</b></p>
      <p>(logged in via '{userInfo && userInfo.identityProvider}')</p>
    </div>
  {/if}

  <ul class="list-unstyled components">
    <li ><Link to="/home" {getProps}>Home</Link></li>
    <li ><Link to="/products" {getProps}>My List</Link></li>
    <li ><Link to="/vision" {getProps}>Custom Vision</Link></li>
    <li ><Link to="/formrecognizer" {getProps}>FormRecognizer</Link></li>
    <li ><Link to="/chatbot" {getProps}>Chatbot</Link></li>
    <li ><Link to="/maps" {getProps}>Bing Maps</Link></li>
    <li ><Link to="/spatialanchors" {getProps}>Spatial Anchors</Link></li>
    <li ><Link to="/visualsearch" {getProps}>Visual Search</Link></li>
  </ul>
</nav>


