import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductListing.mjs";

loadHeaderFooter();
const category = getParam("category");
console.log("Category:", category);
const dataSource = category ? new ProductData(category) : new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();