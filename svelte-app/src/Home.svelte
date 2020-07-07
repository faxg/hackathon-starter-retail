<script>
  import { Router, Link, Route } from 'svelte-routing';
</script>

<div class="content-container">
  <div class="content-title-group">

    <h2 class="title">Shop at Home</h2>
    <p>
      Welcome to the Hackathon Starter for Retail. 
      This should get you inspired and started quickly.
    </p>

   <p />
  

    <h3 class="title">Data Access</h3>
    We prepared a set of data sources for you. Access requires authentication, e.g. logged in using one of the 
    supported social login providers.
    The actual data is access through REST APIs that are implemented using Azure Functions.
    Have a look at <code>/api</code>.
    <ul>
      <li>Link1</li>
      <li>Link2</li>
    </ul>

   <p />

    <h3 class="title">Cognitive Services</h3>
    There are several demo pages that leverage Azure Cognitive Services.
    
    <ul>
      <li>Getting started with Azure Cognitive Services</li>
      <li>Building a chatbot with Azure Bot Service</li>
      <li>Detect objects with Custom Vision</li>
      <li>Form Recognizer</li>
      <li>Bing Maps</li>
      <li>Visual Search</li>
    </ul>
    
    <p />

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
  </div>
</div>
