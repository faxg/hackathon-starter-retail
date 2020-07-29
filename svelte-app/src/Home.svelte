<script>
  import { Router, Link, Route } from 'svelte-routing';

</script>

<div class="container">
  <div >
    <h2 class="title">Migros Hackathon Starter</h2>
    <div>
    Welcome to the Migros Hackathon Starter. This is a demo application that uses Azure Static Web Apps, Azure Functions and several Azure Cognitive Services.
      It also demonstrates how to access and use some of the Migros Data sources.


      <h3 class="title">Getting Started</h3>
      This app can be deployed by generating your own GitHub repo from a template repository.
      <ul class="list">
        <li>Go to ... and create your own repo by clicking </li>
        <li>Click the Deploy to Azure Button and create a new Azure Static Web App</li>
        <li>Use the following settings to configure on the Azure portal: </li>
        <li>Now go to your IDE (like VS.code), git clone your repo</li>
        <li>Add your MIGROS_API_KEY to ...</li>
        <li>`git commit` and `git push` to Github. This will trigger the GH action to deploy the app</li>
        <li> Go to the url of your new app, and use it
      </ul>

    </div>  

    <h3>Configure Data Access</h3>
    Data access to the Migros REST and GraphQL APIs need an API Key. 
    You should have gotten the key with your starter box.


    <h3>Azure Cognitive Services</h3>
    There are several demo pages that leverage Azure Cognitive Services.
    <ul>
      <li>Getting started with Azure Cognitive Services</li>
      <li>Building a chatbot with Azure Bot Service</li>
      <li>Detect objects with Custom Vision</li>
      <li>Form Recognizer</li>
      <li>Bing Maps</li>
      <li>Visual Search</li>
    </ul>
   
    <h3 class="title">Augmented Reality</h3>
    Work with spatial anchors, e.g. "real world" points in AR Applications (Wayfinding)
    Azure Spatial anchors

    <ul>
      <li>Getting started with Azure Cognitive Services</li>
      <li>Building a chatbot with Azure Bot Service</li>
      <li>Detect objects with Custom Vision</li>
      <li>Form Recognizer</li>
      <li>Bing Maps</li>
      <li>Visual Search</li>
    </ul>

  </div>
</div>
<!--
    <div class="button-group">
      <button class="button" aria-label="My List" tabindex="0">
        <Link to="/products">
          <i class="fas fa-clipboard-list" />
          My product list
        </Link>
      </button>

      <button class="button" aria-label="My Discounts">
        <Link to="/discounts">
          <i class="fas fa-money-bill-alt" />
          My Discounts
        </Link>
      </button>

      <button class="button" aria-label="Github repo">
        <a
          href="https://github.com/johnpapa/shopathome"
          target="_blank"
          rel="noopener noreferrer">
          <i class="fab fa-github" />
          Code in GitHub
        </a>
      </button>
    </div>-->

