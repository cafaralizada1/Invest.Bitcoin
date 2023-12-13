const qutu = document.getElementById('tradingSystemCard')

let page = 1
let limit = 4
async function getProducts() {

    let skip = (page-1) * limit
    const response = await axios.get(`https://65685e799927836bd974a707.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`)
    const data = await response.data;
    db = data;
    db.map(item => {
        const box = document.createElement('box')
        box.className = "tradingSystemCardList"
        box.innerHTML = `
        
            <img src="${item.image}" alt="photo">
            <p>${item.title}</p>
            <h2>${item.price}</h2>
            <button onclick = "addToBasket(${item.id})">Sepete Ekle</button>`
            qutu.append(box);
    })
page++

}
loadBtn.addEventListener('click', function () {
    getProducts()
})

function addToBasket(id){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(db.find(item => item.id == id));
    localStorage.setItem('cart', JSON.stringify(cart));
  
}

getProducts()