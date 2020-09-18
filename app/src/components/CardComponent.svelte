<script>
    export let icon = "fa-map-marker-alt" // fa-route fa-receipt fa-shopping-cart
    export let border = "primary" // success info ...
    export let smallTitle = "Shop Location"
    export let bigTitle = "Geolocation data of our stores"
    export let links = [];


</script>

<!-- Start: Card Info -->
<div class="card shadow border-left-{border} py-2">
  <div class="card-body">
    <div class="row align-items-center no-gutters">
      <div class="col mr-2">
        <div class="text-uppercase text-info font-weight-bold text-xs mb-1">
          <span>{smallTitle}</span>
        </div>
        <div class="row no-gutters align-items-center">
          <div class="col-auto">
            <div class="text-dark font-weight-bold h5 mb-0 mr-3">
              <span>{bigTitle}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-auto">
        <i class="fas {icon} fa-2x text-gray-300" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div>
          <ul class="list-inline">
            {#each links as link}
            <li class="list-inline-item"><a href="{link.href}">{link.text}</a></li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End: Card Info -->
