<script>
  import { parseItem, parseList } from '../store/http-utils';
  import API from '../store/config';

  let searchText = '';
  let limit = 10;
  let products = [];
  let loading = false;





  async function doSearch() {
    let errorMessage = undefined;
    loading = true;
    try {
      const response = await fetch(`${API}/products/search?text=${searchText}&limit=${limit}`);
      products = await parseList(response);

      loading = false;
      return products;
    } catch (error) {
      errorMessage = 'Unauthorized';
      loading = false;
    }
  }
</script>


<div class="container-fluid">
    <form on:submit|preventDefault={searchText}>
        <div class="form-group">
          <label for="searchProductInput">Search Product</label>
          <input type="text" bind:value={searchText} class="form-control" id="searchProductInput" aria-describedby="searchHelp" placeholder="Enter search text">
          <small id="searchHelp" class="form-text text-muted">This does a fuzzy search against the Migros Products API</small>
          <button type="submit"  on:click="{doSearch}"  class="btn btn-primary mb-2">Search</button>

        </div>
     </form>
     {#if loading}
     Loading...
     {:else}
     <!-- Search Results start here -->
     <div class="row" style="padding-bottom: 15px;">
        {#each products as product}
        <div class="col col-md-4 col-xd-4">
          <!-- Product Card -->
          <div class="card shadow border-left-primary py-2">
            <div class="card-body">
              <div class="row align-items-center no-gutters">
                <div class="col mr-2">
                  <div
                    class="text-uppercase text-primary font-weight-bold text-xs mb-1">
                    <span>id #{product.id}</span>
                  </div>
                  <div class="text-dark font-weight-bold h5 mb-0">
                    <span>{product.name}</span>
                  </div>
                </div>
                <div class="col-auto">
                  <i class="fas fa-shopping-cart fa-2x text-gray-300" />
                </div>
              </div>
              
              <div class="row align-items-center no-gutters">
                <!-- Product image -->
                {#if product.image_transparent}
                  <img alt="{product.description}" class="img-responsive" src="{product.image_transparent.original}" height="75px" />
                {/if}
              </div>

            </div>
          </div>

        </div>
        {/each}
      </div>
     <!-- Search Results END here -->
     {/if}


</div>