<script>
  import CardComponent from './CardComponent.svelte';
</script>

<div class="container-fluid">
  <div class="row" style="padding-bottom: 15px;">
    <div class="col">
      <!-- Start: Basic Card -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="text-primary m-0 font-weight-bold">
            How to access the Migros Challenge Data
          </h6>
        </div>
        <div class="card-body">
          <p class="m-0">
            From the Migros/Microsoft team, you'll get an API username and
            password. Use this with <code>HTTP Basic Auth</code> to access the REST
            API under the endpoint at <code>https://hackzurich-api.migros.ch</code>
          </p>

          Here're the docs:
          <ul>
            <li>
              <a href="https://hackzurich-api.migros.ch/doc/index.html">API docs
                (Products and Discounts)</a>
            </li>
            <li>
              <a href="https://hackzurich-api.migros.ch/hack/doc">Sales Data,
                Recipes and Store/Shelf Layout</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- End: Basic Card -->
      <!-- Start: Basic Card -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="text-primary m-0 font-weight-bold">
            Configure credentials for this Static Web App ( <code>/api</code> )
          </h6>
        </div>
        <div class="card-body">
          <ol>
            <li>
              <h5>Configure <code>/api/local.settings.json</code></h5>
              <br /> All Values will be available as environment variables (e.g.
              <code>{` MigrosApiEndpoint `}</code>) during LOCAL runtime.
              <pre>{`
{
    "IsEncrypted": false,
    "Values": {
        "AzureWebJobsStorage": "",
        "FUNCTIONS_WORKER_RUNTIME": "node",
        "MigrosApiPassword": "YOUR-PASSWORD",
        "MigrosApiUsername": "YOUR-USERNAME",
        "MigrosApiVersion": "7",
        "MigrosApiEndpoint": "https://hackzurich-api.migros.ch"
    },
    "Host": {
        "CORS": "http://localhost:3000,http://localhost:4200,http://localhost:5000,http://localhost:8080"
    }
}
                `}
                </pre>
            </li>
            <li>
              <h5>Sync/update your application settings with Azure</h5>
              Credentials in <code>/api/local.settings.json</code> are of course
              NOT commited to the Git repository. However, you may want to sync them
              with your Azure Application Settings deployment. One easy way to do
              this is using the VS.code Azure Functions Extension: <code>
                Static Web Apps > [YOUR APP] > [YOUR ENVIRONMENT] > Application
                Settings > Upload Local Settings
              </code>
            </li>
          </ol>
        </div>
      </div>
      <!-- End: Basic Card -->
    </div>

    <div class="row" style="padding: 30px;">
      <div class="col-4">
        <CardComponent
          border="primary"
          icon="fa-search"
          smallTitle="Product data"
          bigTitle="Search for Migros Products"
          links={[{ href: 'https://hackzurich-api.migros.ch/doc/index.html', text: 'Documentation' }, { href: 'https://hackzurich-api.migros.ch/products', text: 'API' }]} />
      </div>

      <div class="col-4">
        <CardComponent
          border="primary"
          icon="fa-exclamation-circle"
          smallTitle="Discount data"
          bigTitle="Discounts on Products"
          links={[{ href: 'https://hackzurich-api.migros.ch/doc/index.html', text: 'Documentation' }, { href: 'https://hackzurich-api.migros.ch/discounts', text: 'API' }]} />
      </div>

      <div class="col-4">
        <CardComponent
          border="primary"
          icon="fa-cube"
          smallTitle="Store Layout"
          bigTitle="3D model of store layouts"
          links={[{ href: 'https://hackzurich-api.migros.ch/hack/doc', text: 'Documentation' }, { href: 'https://hackzurich-api.migros.ch/hack/store/357?fmt=dwg', text: 'API' }]} />
      </div>

      <div class="col-4">
        <CardComponent
          border="primary"
          icon="fa-archive"
          smallTitle="Shelf Layout"
          bigTitle="Shelf visualization as PDF"
          links={[{ href: 'https://hackzurich-api.migros.ch/hack/doc', text: 'Documentation' }, { href: 'https://hackzurich-api.migros.ch/hack/store/357/shelf/12', text: 'API' }]} />
      </div>

      <div class="col-4">
        <CardComponent
          border="primary"
          icon="fa-history"
          smallTitle="Purchases"
          bigTitle="List of all purchases/shopping carts of customer"
          links={[{ href: 'https://hackzurich-api.migros.ch/hack/doc', text: 'Documentation' }, { href: 'https://hackzurich-api.migros.ch/hack/purchase/102531', text: 'API' }]} />
      </div>

      <div class="col-4">
        <CardComponent
          border="primary"
          icon="fa-info-circle"
          smallTitle="Purchase Details"
          bigTitle="Metadata of a single purchase"
          links={[{ href: 'https://hackzurich-api.migros.ch/hack/doc', text: 'Documentation' }, { href: 'https://hackzurich-api.migros.ch/hack/purchase/102531/201901-102531-0006', text: 'API' }]} />
      </div>

      <div class="col-4">
        <CardComponent
          border="primary"
          icon="fa-list"
          smallTitle="Articles of Purchase"
          bigTitle="Articles of a single purchase/cart"
          links={[{ href: 'https://hackzurich-api.migros.ch/hack/doc', text: 'Documentation' }, { href: 'https://hackzurich-api.migros.ch/hack/purchase/102531/201901-102531-0006/articles', text: 'API' }]} />
      </div>

      <div class="col-4">
        <CardComponent
          border="success"
          icon="fa-receipt"
          smallTitle="Recipe Data"
          bigTitle="Incredients for Recipes"
          links={[{ href: 'https://hackzurich-api.migros.ch/hack/doc', text: 'Documentation' }, { href: 'https://hackzurich-api.migros.ch/hack/recipe/recipes_de/_search?q=Morcheln', text: 'API' }]} />
      </div>

      <div class="col-4">
        <CardComponent
          border="primary"
          icon="fa-shopping-cart"
          smallTitle="Bought"
          bigTitle="Purchases/carts which include a certain article"
          links={[{ href: 'https://hackzurich-api.migros.ch/hack/doc', text: 'Documentation' }, { href: 'https://hackzurich-api.migros.ch/hack/bought/104522200000', text: 'API' }]} />
      </div>

      <div class="col-4">
        <CardComponent
          border="warning"
          icon="fa-shopping-cart"
          smallTitle="Cart Data"
          bigTitle="Bulk purchase/cart data"
          links={[{ href: 'https://hackzurich-api.migros.ch/hack/doc', text: 'Documentation' }, { href: 'https://hackzurich-api.migros.ch/cartdata/201908', text: 'API' }]} />
      </div>
    </div>
  </div>
</div>
