<script>
  export let provider = '';

  function goAuth() {
    const { pathname } = window.location;
    const redirect = `post_login_redirect_uri=${pathname}`;
    const url = `/.auth/login/${provider}?${redirect}`;
    window.location.href = url;
  }
</script>

<button type="button" class="btn btn-outline-primary btn-large" alt="log in with {provider}" on:click={goAuth}>
  {#if ['github','twitter','facebook'].includes(provider)}
    <i class="fab fa-{provider}-square" aria-hidden="true"></i>
  {:else if provider == 'google'}
    <i class="fab fa-google" aria-hidden="true"></i>
  {:else if provider == 'aad'}
    <i class="fab fa-microsoft" aria-hidden="true"></i>
  {/if}
</button>
