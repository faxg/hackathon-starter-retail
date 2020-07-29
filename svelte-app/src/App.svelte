<script>
  import './styles.scss';
  import { Router, Link, Route } from 'svelte-routing';

  import Home from './Home.svelte';
  import Products from './products/Products.svelte';
  import Discounts from './Discounts.svelte';

  // Vision examples
  import CustomVision from './components/vision/CustomVision.svelte';
  import FormRecognizer from './components/vision/FormRecognizer.svelte';

  // Language examples
  import Bot from './components/language/Bot.svelte';

  // Spatial examples
  import Maps from './components/spatial/Maps.svelte';
  import SpatialAnchors from './components/spatial/SpatialAnchors.svelte';

  // Search examples
  import VisualSearch from './components/search/VisualSearch.svelte';
  // cognitive search, custom search

  // AR/VR examples

  import { HeaderBar, NavBar, PageNotFound, Redirect } from './components';

  export let url = '';
</script>

<Router {url}>
  <div class="wrapper">
    <!-- The left side Nav Bar component -->
    <NavBar />

    <!-- The main content area -->
    <div class="content-container">
      
      <HeaderBar />

      <!-- Content area -->
      <div class="container-fluid" id="content">
        <Route path="/">
          <Redirect path="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/discounts" component={Discounts} />

        <Route path="/vision" component={CustomVision} />
        <Route path="/formrecognizer" component={FormRecognizer} />

        <Route path="/chatbot" component={Bot} />

        <Route path="/maps" component={Maps} />
        <Route path="/spatialanchors" component={SpatialAnchors} />

        <Route path="/visualsearch" component={VisualSearch} />

        <Route path="**" component={PageNotFound} />
      </div>
    </div>
  </div>

</Router>
