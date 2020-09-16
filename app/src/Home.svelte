<script>
  import { Router, Link, Route } from 'svelte-routing';
</script>

<div class="container-fluid">
  <!-- Start: Chart -->
  <div class="row">
    <div class="col-lg-6 col-xl-7">
      <div class="card shadow mb-4">
        <div
          class="card-header d-flex justify-content-between align-items-center">
          <h6 class="text-primary font-weight-bold m-0">Welcome</h6>
        </div>
        <div class="card-body">
          Welcome to the <b>Migros Hackathon Starter</b> on Azure.&nbsp; <br /> This
          is an example application that serves multiple purposes:
          <ul>
            <li>
              <b>Frontend</b>: a website that contains links to docs on the
              Migros Hackathon API and selected Azure Cloud Services. Written in <a
                href="https://svelte.dev/">Svelte</a>, but many frameworks are
              supported (Angular, React, ...)
            </li>
            <li>
              <b>Example API</b>: Serverless (Azure Functions) backend <code>/api</code>
              that retrieves data from the Migros data stores. Written in JavaScript
              / NodeJS
            </li>
          </ul>
          You can clone & deploy this to Azure in 5 minutes. You'll get: <img class="img-fluid" width="100%" alt="SWA Overview" src="https://azurecomcdn.azureedge.net/cvt-4abbf0604519d6747e8628e7d4a627c7bc7d78cea01076877c54698df471f916/images/page/services/app-service/static/value-prop-2.png" />
          <small><a href="https://aka.ms/staticwebapps">Learn more about Azure
              Static Web Apps (SWA)</a></small>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-xl-5">
      <div class="card shadow mb-4">
        <div
          class="card-header d-flex justify-content-between align-items-center">
          <h6 class="text-primary font-weight-bold m-0">Step-by-Step</h6>
        </div>
        <div class="card-body">
          <p>Clone & run this app! It's a good base for your hack project</p>
          <ol>
            <li>
              Clone Github template repository: <a href="https://aka.ms/MigrosHackRepo"> https://aka.ms/MigrosHackRepo </a>
            </li>
            <li>Click "Deploy to Azure" button</li>
            <li>
              Add Credentials to your <code>/api/local.settings.json</code>
            </li>
            <li>Run & debug locally</li>
            <li>Push changes to master branch</li>
            <li>Watch the Github Actions CD pipline</li>
            <li>Your new Static Web App in the Azure Portal</li>
            <li>Next steps</li>
          </ol>
          <p>More info...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Next row -->

  <div class="row">
    <div class="col-lg-6 col-xl-7">
      <div class="card shadow mb-4">
        <div
          class="card-header d-flex justify-content-between align-items-center">
          <h6 class="text-primary font-weight-bold m-0">Challenge Video</h6>
        </div>
        <div class="card-body">
          <h3>Migros "Digital Product Twin" Challenge</h3>
          <!-- svelte-ignore a11y-missing-attribute -->
          <iframe
            src="https://www.youtube.com/embed/LY_zvKKctgQ"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            width="100%"
            height="315" />
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-xl-5">
      <div class="card shadow mb-4">
        <div
          class="card-header d-flex justify-content-between align-items-center">
          <h6 class="text-primary font-weight-bold m-0">Tech Talk</h6>
        </div>
        <div class="card-body">
          <h3>Azure Static Web Apps Tech Talk</h3>
          <br />We will have a Tech Talk on Azure Static Web Apps (SWA) on
          Saturday: <i>Saturday, 19.09., 11:00 - 11:25 (CEST), Auditorium &
            Online</i>
        </div>
      </div>
    </div>
  </div>
  <!-- End: Chart -->
</div>
