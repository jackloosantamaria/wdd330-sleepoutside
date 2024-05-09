import productList from "./ProductListing.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";



  loadHeaderFooter();
  const category = getParam("category");
  productList(".product-list", "category");
