import {renderListWithTemplate} from "./utils.mjs";
import {getData} from "./productData.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Images.PrimaryMedium}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.Name}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`;
  }

export default async function ProductList(selector, category){
    const el = document.querySelector(selector);
    const products = await getData(category);
    console.log(products);
    renderListWithTemplate(productCardTemplate, el, products);
    document.querySelector(".title").innerHTML = category;

}

