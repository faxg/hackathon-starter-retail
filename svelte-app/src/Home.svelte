<script>
  import { Router, Link, Route } from 'svelte-routing';
</script>

<div class="container-fluid">
  <!-- Start: Chart -->
  <div class="row">
    <div class="col-lg-7 col-xl-8">
      <div class="card shadow mb-4">
        <div
          class="card-header d-flex justify-content-between align-items-center">
          <h6 class="text-primary font-weight-bold m-0">Congratulations !</h6>
          <div class="dropdown no-arrow">
            <button
              class="btn btn-link btn-sm dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
              type="button">
              <i class="fas fa-ellipsis-v text-gray-400" />
            </button>
            <div
              class="dropdown-menu shadow dropdown-menu-right animated--fade-in"
              role="menu">
              <p class="text-center dropdown-header">dropdown header:</p>
              <a class="dropdown-item" role="presentation" href="#">
                &nbsp;Action
              </a>
              <a class="dropdown-item" role="presentation" href="#">
                &nbsp;Another action
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" role="presentation" href="#">
                &nbsp;Something else here
              </a>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p>
            You have successfully deployed the Migros Hackathon Starter on
            Azure.&nbsp;
            <br />
            You now have the following:
            <br />
          </p>
          <ul>
            <li>Azure Static Web Apps (SWA)</li>
            <li>Azure Functions Serverless backend (/api)</li>
            <li>
              CI/CD pipeline with GitHub Actions. Triggered on
              <em>git push or PR</em>
              &nbsp;
              <em>to master branch</em>
            </li>
            <li>Links to API docs for the Migros Datasets</li>
            <li>Links to documentation of Azure Cognitive Services</li>
          </ul>
          <h3>Challenge Video</h3>
          <iframe
            allowfullscreen=""
            frameborder="0"
            src="https://www.youtube.com/embed/zYNspQScGfw"
            width="560"
            height="315" />
        </div>
      </div>
    </div>
    <div class="col-lg-5 col-xl-4">
      <div class="card shadow mb-4">
        <div
          class="card-header d-flex justify-content-between align-items-center">
          <h6 class="text-primary font-weight-bold m-0">Step-by-Step</h6>
          <div class="dropdown no-arrow">
            <button
              class="btn btn-link btn-sm dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
              type="button">
              <i class="fas fa-ellipsis-v text-gray-400" />
            </button>
            <div
              class="dropdown-menu shadow dropdown-menu-right animated--fade-in"
              role="menu">
              <p class="text-center dropdown-header">dropdown header:</p>
              <a class="dropdown-item" role="presentation" href="#">
                &nbsp;Action
              </a>
              <a class="dropdown-item" role="presentation" href="#">
                &nbsp;Another action
              </a>
              <div class="dropdown-divider" />
              <a class="dropdown-item" role="presentation" href="#">
                &nbsp;Something else here
              </a>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p>How to get up &amp; running:</p>
          <ul>
            <li>Configure MIGROS_API_KEY</li>
            <li>Connect Azure Cognitive Services</li>
            <li>Configure Azure Static Web App</li>
            <li>Familiarize yourself</li>
            <li>Build on top of this...</li>
          </ul>
          <p>More info...</p>
        </div>
      </div>
    </div>
  </div>
  <!-- End: Chart -->
</div>
