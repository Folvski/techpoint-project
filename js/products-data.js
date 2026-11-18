const PRODUCTS_URL = "data/products.json";

function getProducts() {
  return fetch(PRODUCTS_URL)
  .then((response) => {
    return response.json()
  })
  
  .catch((error) => {
    console.error(error);
    return [];
  });
}

function getProductById(id) { 
  return getProducts()
  .then((products) => {
    for (const product of products) {
      if (product.id === id) {
        return product;
      }
    }
    return undefined;
  });
}

function formatPrice(price){
  return price.toFixed(2) + " BYN";
}

