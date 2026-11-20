function createProductCard(product){
    const card = document.createElement("article");
    card.className = "card";

    let imageHtml = "Фото товара";
    if (product.image){
        imageHtml = `<img src = "${product.image}" alt =${product.name} onerror="this.parentNode.textContent = 'Фото товара'">`;
    }

    card.innerHTML = `
    <div class = "card-img">${imageHtml}</div>
    <span class = "card-cat">${product.category}</span>
    <h3 class = "card-title">${product.name}</h3>
    <span class = "card-rating">${product.rating.toFixed(1)} ★</span>
    <span class = "card-price">${formatPrice(product.price)}</span>
    <a href = "product.html?id=${product.id}" class = "btn">Подробнее</a>
    `;
    return card;
}

function renderProducts(containerSelector,products){
    const container = document.querySelector(containerSelector);
    if(!container) return;

    container.innerHTML = "";

    if(products.length === 0){
        container.innerHTML = "<p>Ничего не найдено.</p>";
        return;
    }

    //container.appendChild(...) вставляет готовую карточку в конец контейнера
    products.forEach(product => {
        container.appendChild(createProductCard(product));
    });
}
