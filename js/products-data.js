const PRODUCTS_URL = "data/products.json";
let productsCache = null;

function getProducts() {

  if(productsCache){
    return Promise.resolve(productsCache);
  }
  // переписать
  return fetch(PRODUCTS_URL)
  .then((response) => {
 
    if(!response.ok){
      throw new Error ("Не удалось загрузить " + PRODUCTS_URL + ": " + response.status)
    }
    return response.json()
  })
  .then((products) => {
    productsCache = products;
    return products;
  })
  .catch((error) => {
    console.error(error);
    return [];
  });
}

function getProductById(id) {
  const numericId = Number(id); 
  return getProducts()
  .then((products) => {
    for (const product of products) {
      if (product.id === numericId) {
        return product;
      }
    }
    return undefined;
  });
}

function formatPrice(price){
  return price.toFixed(2) + "BYN";
}

