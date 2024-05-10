//second method

// import productList from "./ProductListing.mjs";
// import { getParam, loadHeaderFooter } from "./utils.mjs";



//   loadHeaderFooter();
//   const category = getParam("category");
//   productList(".product-list", "category");

import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductListing.mjs";

loadHeaderFooter();
const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();