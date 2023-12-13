const qutu = document.getElementById("tradingSystemCard")

function getProducts() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    qutu.innerHTML = "";

    cart.map((item, index) => {
        let box = document.createElement('div');
        box.className = "tradingSystemCardList"
        box.innerHTML = `
            <img src="${item.image}" alt="photo">
            <p>${item.title}</p>
            <h2>${item.price}</h2>
            <button onclick = "removeItem(${index})">Sepetden sil</button>`;
        qutu.appendChild(box);
    })
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    getProducts();
}



getProducts()