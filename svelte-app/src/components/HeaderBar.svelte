<script>
  import { getContext, onMount } from 'svelte';
  import HeaderBarBrand from './HeaderBarBrand.svelte';
  import AuthLogin from './AuthLogin.svelte';
  import AuthLogout from './AuthLogout.svelte';

  // info on currently logged in user (undefined if not logged in)
  let userInfo = undefined;
  // available list of social login providers (supported by Azure Statis Web Apps)
  const providers = ['github', 'twitter', 'aad', 'google', 'facebook'];
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

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">

    {#if !userInfo}
      <span class="navbar-brand mb-0 h1">Login:  
        <div class="btn-group" role="group" aria-label="Social Login">
          {#each providers as provider (provider)}
            <AuthLogin {provider} />
          {/each}
        </div>
        </span>
    {:else if userInfo && userInfo.userDetails}
      {userInfo.userDetails} (logged in via '{userInfo.identityProvider}')
      <p />
      <AuthLogout />
    {/if}

  
</nav>
