<script>
  import { onMount } from 'svelte';
  import getUserInfo from '../store/auth-utils'

  let userInfo = undefined;

  // when ready, load user profile info
  onMount(async () => (userInfo = await getUserInfo()));


</script>

<nav
  class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar
    static-top">
  <div class="container-fluid">
    <button
      class="btn btn-link d-md-none rounded-circle mr-3"
      id="sidebarToggleTop"
      type="button"><i class="fas fa-bars" /></button>
    <ul class="nav navbar-nav flex-nowrap ml-auto">
      {#if userInfo}
        <li class="nav-item" role="presentation">
            <a class="nav-link" href="/logout">Logout</a>
        </li>
      {:else}
        <li class="nav-item" role="presentation">
            <a class="nav-link" href="/login">
                Login with Github</a>
        </li>
      {/if}


      {#if userInfo}
        <div class="d-none d-sm-block topbar-divider" />
        <li class="nav-item dropdown no-arrow" role="presentation">
            <div class="nav-item dropdown no-arrow">
            <a
                class="dropdown-toggle nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
                href="#"><span
                class="d-none d-lg-inline mr-2 text-gray-600 small">{userInfo.userDetails}</span><img
                class="border rounded-circle img-profile"
                src="/img/shrug.png" /></a>
            <div
                class="dropdown-menu shadow dropdown-menu-right animated--grow-in"
                role="menu">
                <a class="dropdown-item" role="presentation" href="/.auth/me"><i
                    class="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Profile</a><a
                class="dropdown-item"
                role="presentation"
                href="#">
                <div class="dropdown-divider" />
                <a
                class="dropdown-item"
                role="presentation"
                href="/logout"><i
                    class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />&nbsp;Logout</a>
            </div>
            </div>
        </li>
      {/if}

    </ul>
  </div>
</nav>
