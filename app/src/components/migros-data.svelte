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
            API under the endpoint <a href="https://hackzurich-api.migros.ch">https://hackzurich-api.migros.ch</a> 
            
            Here's the <a
              href="https://hackzurich-api.migros.ch/doc/index.html">API docs
              (Products and Discounts)</a> and <a href="https://hackzurich-api.migros.ch/hack/doc">Sales
              Data, Recipes and Store-/Shelf-Layout</a>
          </p>
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
              <li> <h5>Configure <code>/api/local.settings.json</code></h5> <br>
                All Values will be available as environment variables (e.g. <code>{` MigrosApiEndpoint `}</code>) during LOCAL runtime.

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
              <li><h5>Sync/update your application settings with Azure </h5>
                Credentials in <code>/api/local.settings.json</code> are of course NOT commited to the Git repository.
                However, you may want to sync them with your Azure Application Settings deployment.
                One easy way to do this is using the VS.code Azure Functions Extension:
                <code> Static Web Apps > [YOUR APP] > [YOUR ENVIRONMENT] > Application Settings > Upload Local Settings </code>
    </li>
          </ol>

        </div>
      </div>
      <!-- End: Basic Card -->
    </div>
  </div>
  <div class="row" style="padding-bottom: 15px;">
    <div class="col">
      <!-- Start: Card Primary -->
      <div class="card shadow border-left-primary py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col mr-2">
              <div
                class="text-uppercase text-primary font-weight-bold text-xs mb-1">
                <span>POS Data</span>
              </div>
              <div class="text-dark font-weight-bold h5 mb-0">
                <span>Point of Sale Data</span>
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-shopping-cart fa-2x text-gray-300" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#">Documentation</a>
                  </li>
                  <li class="list-inline-item"><a href="#">API</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End: Card Primary -->
    </div>
    <div class="col">
      <!-- Start: Card Success -->
      <div class="card shadow border-left-success py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col mr-2">
              <div
                class="text-uppercase text-success font-weight-bold text-xs mb-1">
                <span>Recipe Data</span>
              </div>
              <div class="text-dark font-weight-bold h5 mb-0">
                <span>Incredients for Recipes</span>
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-receipt fa-2x text-gray-300" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#">Documentation</a>
                  </li>
                  <li class="list-inline-item"><a href="#">API</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End: Card Success -->
    </div>
  </div>
  <div class="row" style="padding-bottom: 15px;">
    <div class="col">
      <!-- Start: Card Warning -->
      <div class="card shadow border-left-warning py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col mr-2">
              <div
                class="text-uppercase text-warning font-weight-bold text-xs mb-1">
                <span>Spatial Data</span>
              </div>
              <div class="text-dark font-weight-bold h5 mb-0">
                <span>In-Store navigation data</span>
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-route fa-2x text-gray-300" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#">Documentation</a>
                  </li>
                  <li class="list-inline-item"><a href="#">API</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End: Card Warning -->
    </div>
    <div class="col">
      <!-- Start: Card Info -->
      <div class="card shadow border-left-info py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col mr-2">
              <div
                class="text-uppercase text-info font-weight-bold text-xs mb-1">
                <span>Shop Location</span>
              </div>
              <div class="row no-gutters align-items-center">
                <div class="col-auto">
                  <div class="text-dark font-weight-bold h5 mb-0 mr-3">
                    <span>Geolocation data of our stores</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-auto">
              <i class="fas fa-map-marker-alt fa-2x text-gray-300" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#">Documentation</a>
                  </li>
                  <li class="list-inline-item"><a href="#">API</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End: Card Info -->
    </div>
  </div>
</div>
