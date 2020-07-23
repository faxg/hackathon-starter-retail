<script>
  import { getContext, onMount } from 'svelte';
  import HeaderBarBrand from './HeaderBarBrand.svelte';
  import AuthLogin from './AuthLogin.svelte';
  import AuthLogout from './AuthLogout.svelte';

  // info on currently logged in user (undefined if not logged in)
  let userInfo = undefined;
  // available list of social login providers (supported by Azure Statis Web Apps)
  const providers = [ 'github', 'twitter', 'aad', 'google', 'facebook'];
  // when DOM is mounted, fetch user info 
  onMount(async () => (userInfo = await getUserInfo()));

  // returns the current user info, if authenticated/logged in. Undefined otherwise
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

</script>

<header>
  <nav
    class="navbar has-background-light is-light"
    role="navigation"
    aria-label="main navigation">
    <HeaderBarBrand />
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="">
          <!--<a href="#" class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a href="#" class="button is-light">Log in</a>
          -->
          
            {#if !userInfo}
              Login with:  
              {#each providers as provider (provider)}
                <AuthLogin {provider} /> &nbsp;
              {/each}
            {/if}
            {#if userInfo}
            <div class="user">
                {userInfo && userInfo.userDetails} 
                - {userInfo && userInfo.identityProvider}
                <AuthLogout />
            </div>
            {/if}
          </div>
        </div>

    </div>

  </nav>
</header>
