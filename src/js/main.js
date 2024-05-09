// import ProductData from "./ProductData.mjs";
// import ProdudctList from "./ProductListing.mjs";
// import loadHeaderFooter  from "./utils.mjs";

// loadHeaderFooter();

// const dataSource = new ProductData("tents");
// const element = document.querySelector(".product-list");
// const listing = new ProdudctList("Tents", dataSource, element);

// listing.init();


import ProductList from "./ProductListing.mjs";
import {loadHeaderFooter, getParam} from "./utils.mjs";


loadHeaderFooter();
const category = getParam("category");
ProductList(".product-list", category);

