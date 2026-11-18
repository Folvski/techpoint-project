const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

function renderNotFound(){
    const wrap = document.querySelector("#product-wrap")
    if (!wrap){
        return
    }
    wrap.innerHTML = `
    <p>Товар не найден</p>
    <a href = "catalog.html" class = "btn">Вернуться в каталог</a>
    `;
}

function renderProduct(product){
    const wrap = document.querySelector("#product-wrap");
    if (!wrap) return;

    let imageHtml = "Фото товара";
    if(product.image){
        imageHtml = `<img src="${product.image}" alt="${product.name}" onerror="this.parentNode.textContent = 'Фото товара'">`;
    }

    document.title = product.name + " - TechPoint";
    wrap.innerHTML = `
    <div class="product-img">${imageHtml}</div>

    <div class="product-info">
      <span class="product-cat">${product.category}</span>
      <h1 class="product-title">${product.name}</h1>
      <span class="product-rating">${product.rating.toFixed(1)}★</span>
      <span class="product-price">${formatPrice(product.price)}</span>
      <p class="product-desc">${product.description}</p>
      <button class="btn" data-id="${product.id}">Добавить в корзину</button>
    </div>
  `;
}

getProductById(id)
.then((product) => {
    if(!product){
        renderNotFound();
        return;
    }
    renderProduct(product); 
})