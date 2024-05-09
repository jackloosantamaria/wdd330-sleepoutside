// import { setLocalStorage } from "./utils.mjs";

// function productDetailsTemplate(product) {
//   return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
//     <h2 class="divider">${product.NameWithoutBrand}</h2>
//     <img
//       class="divider"
//       src="${product.Image}"
//       alt="${product.NameWithoutBrand}"
//     />
//     <p class="product-card__price">$${product.FinalPrice}</p>
//     <p class="product__color">${product.Colors[0].ColorName}</p>
//     <p class="product__description">
//     ${product.DescriptionHtmlSimple}
//     </p>
//     <div class="product-detail__add">
//       <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
//     </div></section>`;
// }

// export default class ProductDetails {
//   constructor(productId, dataSource) {
//     this.productId = productId;
//     this.product = {};
//     this.dataSource = dataSource;
//   }
//   async init() {
//     // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
//     this.product = await this.dataSource.findProductById(this.productId);
//     // once we have the product details we can render out the HTML
//     this.renderProductDetails("main");
//     // once the HTML is rendered we can add a listener to Add to Cart button
//     // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
//     document
//       .getElementById("addToCart")
//       .addEventListener("click", this.addToCart.bind(this));
//   }
//   addToCart() {
    
//     setLocalStorage("so-cart", this.product);
//   }
//   renderProductDetails(selector) {
//     const element = document.querySelector(selector);
//     element.insertAdjacentHTML(
//       "afterBegin",
//       productDetailsTemplate(this.product)
//     );
//   }
// }

// method #2

// import { setLocalStorage, getLocalStorage } from "./utils.mjs";

// function productDetailsTemplate(product) {
//   return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
//     <h2 class="divider">${product.NameWithoutBrand}</h2>
//     <img
//       class="divider"
//       src="${product.Images.PrimaryLarge}"
//       alt="${product.NameWithoutBrand}"
//     />
//     <p class="product-card__price">$${product.FinalPrice}</p>
//     <p class="product__color">${product.Colors[0].ColorName}</p>
//     <p class="product__description">
//     ${product.DescriptionHtmlSimple}
//     </p>
//     <div class="product-detail__add">
//       <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
//     </div></section>`;
// }

// export default class ProductDetails {
//   constructor(productId, dataSource) {
//     this.productId = productId;
//     this.product = {};
//     this.dataSource = dataSource;
//   }
//   async init() {
//     // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
//     this.product = await this.dataSource.findProductById(this.productId);
//     // once we have the product details we can render out the HTML
//     this.renderProductDetails("main");
//     // once the HTML is rendered we can add a listener to Add to Cart button
//     // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
//     document
//       .getElementById("addToCart")
//       .addEventListener("click", this.addToCart.bind(this));
//   }
//   addToCart() {
//     let cartContents = getLocalStorage("so-cart");
//     //check to see if there was anything there
//     if (!cartContents) {
//       cartContents = [];
//     }
//     // then add the current product to the list
//     cartContents.push(this.product);
//     setLocalStorage("so-cart", cartContents);
//   }
//   renderProductDetails(selector) {
//     const element = document.querySelector(selector);
//     element.insertAdjacentHTML(
//       "afterBegin",
//       productDetailsTemplate(this.product)
//     );
//   }
// }

//method #3

import { findProductById } from "./productData.mjs";
import { setLocalStorage } from "./utils.mjs";
import { getLocalStorage } from "./utils.mjs";



export default async function productDetails(productId) {
  const product = await findProductById(productId);
  console.log(product);
  renderProductDetails(product);
  document
    .getElementById("addToCart")
    .addEventListener("click", () => addToCart(product));
}

function addToCart(product) {
  const cartItems = getLocalStorage("so-cart") || [];
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);


}

function renderProductDetails(product) {
  document.querySelector("#productName").innerText = product.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerText =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Image;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
}