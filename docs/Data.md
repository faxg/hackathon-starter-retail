Sales Data, Recipes and Store-/Shelf-Layout
===========================================
 
The purchases made by 10'000 selected customers between January 2019
and July 2020 are available. The customers are identified by `kundeID`
a number from 100001 to 110000.
APIs for getting all purchases of a customer, all articles bought
in a purchase and which purchase contains a certain article are
available.
In addition these sales data is available as large CSV files for bulk
processing.
 
The full recipes database is available for search.
 
The 3-dimensional model of one store and a sample of a shelf is
available too.
 
How to cross connect the data:
 
 * The `artikelID` is the Migros-internal ID of an article it can be
   used to look up product data via the Products-API.
 * Ingredients allow the mapping between Products and Receipts.
 * The `WarenkorbID` identifies a single shopping cart of articles
   bought by a customer.
 * The `kundeID` is a randomized number, not connected to other data.
 
 
 
 
Documentation
-------------
 
What you are reading rigth now.
 
    GET /hack/doc
 
 
Store Layout
------------
 
3D model of a sample store
 
    GET /hack/store/{storeID:[0-9]+}?fmt={fmt:(?:dwg|obj|mtl)}
 
Returns the 3D model of the store `storeID`.
The fmt parameter select the file format.
 
Note that all stores have the same, artificial 3D model,
the storeID is basically ignored.
 
Example:
 
    curl -o store.dwg "$HOST/hack/store/357?fmt=dwg"
 
 
 
 
Shelf Layout
------------
 
Visualization of a sample shelf
 
    GET /hack/store/{storeID:[0-9]+}/shelf/{shelfID:[0-9]+}
 
Returns a sample shelf layout as PDF for store `storeID` and shelf `shelfID`
Note that all stores and all shelf return the same atrificial example data,
storeID and shelfID are basically ignored.
 
Example:
 
    curl -o shelf.pdf "$HOST/hack/store/357/shelf/12"
 
 
 
 
Purchases
---------
 
List of all purchases/shopping carts of customer
 
    GET /hack/purchase/{kundeID:[0-9]+}
 
Returns a list of all purchases/shopping carts of the customer `kundeID`.
The `kundeID` ranges from 100001 to 110000. Each purchase has the following
fields:
 
    einkaufID             ID of this purchase/shopping cart (column "WarenkorbID" in 
                          the Cart Data API below).
    kundeID               ID of customer
    profitKstID           ID of store
    profitKstNameDe       German name of the store
    genossenschaftsCode   Genossenschaftskürzel (cooperative abbrevation)
    time                  Date-time of purchase, local time, not UTC despite the 'Z' 
 
Example:
 
    curl "$HOST/hack/purchase/102531"
 
Showing customer 102531 shopped 18:25h at Jan. 31th 2019 in "LU MMM Zugerland
Steinhausen". This purchase is identified by `einkaufID` "201901-102531-0006".
 
 
 
Purchase Details
----------------
 
Metadata of a single purchase
 
    GET /hack/purchase/{kundeID:[0-9]+}/{einkaufID:[0-9-]+}
 
Return the detail information about a purchase. The result
contains the following fields:
 
    kundeID          ID of customers
    filialID         ID of the store 
    filialName       German name of Store
    genossenschaft   Genossenschaft (cooperative), abrevated
    datetime         Local time the purchase was made
 
Example:
 
    curl "$HOST/hack/purchase/102531/201901-102531-0006"
 
Customer 102531 shopped 2019-01-31 18:25:32 at "LU MMM Zugerland Steinhausen"
which belongs to the cooperative GMLU.
 
 
 
 
Articels of a Purchase
----------------------
 
Articles of a single purchase/cart
 
    GET /hack/purchase/{kundeID:[0-9]+}/{einkaufID:[0-9-]+}/articles
 
Returns the list of articles the customer `kundeID` bought in purchase `einkaufID`.
The `einkaufID` consists of three parts: `month`-`customerID`-`seqNo`
 
Each entry has the following fields:
 
    artikelID   ID of article.
    menge       Amount (in natural unit like pieces, kg, m, etc.)
 
Example:
 
    curl "$HOST/hack/purchase/102531/201901-102531-0006/articles"
 
So customer 102531 bought 13 articles including 2 bags of morels
article number 104522200000.
 
 
 
Bought
------
 
Purchases/carts which include a certain article
 
    GET /hack/bought/{artikelID:[0-9]+}
 
 
Returns a list of all purchases/shopping carts where article `articleID` was bought.
The ID of a purchase consists of three parts: `month`-`customerID`-`seqNo`
 
Example (article 104522200000 are dried morels, Morchella elata):
 
   curl "$HOST/hack/bought/104522200000"
 
So customer 102531 bought morels 104522200000 in January 2019.
 
 
 
Cart Data
---------
 
Bulk purchase/cart data 
 
    GET /hack/cartdata/{yearmonth:[0-9]+}
 
Returns all purchases of all customers in a given month as a large CSV file
suitable for bulk processing. 
Data is available for the 19 month from January 2019 (yearmonth=201901) to
202007 (yearmonth=202007).
The returned data a zipped CSV file listing all purchases of this month
containing the following columns:
 
    YYYYMM               Year and Month
    KundeID              ID of customer, unique across all months
    WarenkorbID          Sequential number identifying a single purchase of a customer each month
                         Starts afresh at 1 in each file/month
    ProfitKSTID          ID of store
    ProfitKSTNameD       German name of store
    GenossenschaftCode   Abbrevated cooperative name
    TransaktionDatumID   Local date in format YYYY-MM-DD
    TransaktionZeit      Local time in format HHMMSS
    ArtikelID            ID of the article
    Menge                Amount (in natural units like pieces, kg, m, etc.)
 
Example:
 
     curl -o transaction-201908.csv.zip "$HOST/cartdata/201908"
 
 
 
Recipes
-------
 
Elasticsearch Recipes Database
 
    GET|POST /hack/recipe/{index:(?:recipes|ingredients|taxonomies|typeahead)_(?:de|fr|it)}/{api:(?:_search|_count)}
 
Indexes available:
 
    recipes_de, recipes_fr, recipes_it               actual recipes in the given language
    ingredients_de, ingredients_fr, ingredients_it   ingredients database
    taxonomies_de, taxonomies_fr, taxonomies_it      classification of recipes
    typeahead_de, typeahead_fr, typeahead_it         autocompletion typeahead data 
 
Only the _search and _count api endpoints of Elasticsearch are exposed.
See https://www.elastic.co/guide/en/elasticsearch/reference/current/search.html
Note: Ingredients map between Products (recipe_ingredient_ids) and the 
Recipes (ingredients.id). E.g. "Zuckerhut" (product id 271380102100) is
ingredient 16318 of recipe 71829 "Zuckerhutsalat mit Kürbis".
 
Examples:
 
* Full text query of the german recipes database for "Morcheln" (morels).
 
        curl "$HOST/hack/recipe/recipes_de/_search?q=Morcheln"
 
* Searching for reciptes with "Spanferkel" in the title
 
        curl -X POST "$HOST/hack/recipe/recipes_de/_search"  \
           -H "Content-Type: application/json"  \
           -d '{"query": {"match": {"title":{"query":"Spanferkel"}}}}'
 
* Searching recipes containing ingredient 88017 ("Spanferkel"):
 
        curl -X POST "$HOST/hack/recipe/recipes_de/_search"  \
           -H "Content-Type: application/json"  \
           -d '{"query": {"nested":{"path":"ingredients","query": {"term": {"ingredients.id":88017}}}}}'    
 
 