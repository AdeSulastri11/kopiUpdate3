const navProducts = document.querySelector("#navbar_products");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    navProducts.classList.add("scrolled");
  } else {
    navProducts.classList.remove("scrolled");
  }
})

// ===========================  PAGE DETAIL PRODUK ====================

// jumlah stock produk
var countStock = [3];
const count = document.querySelectorAll("#count")

// mengisi jumlah stock produk untuk setiap produk
count.forEach((stock) => {
  stock.innerHTML = countStock;
})

const stock = [3, 3, 3, 3]
// masukkan keranjang
const addItems = document.querySelectorAll("#addCart");
const cartCoffee = document.querySelector("#cart");

var cartItems = [];

const products = [
  {
    id: 0,
    image: "../img/kopi-luwak-hitam.jpg",
    name: "Kopi Luwak Hitam",
    price: 13000,
  },
  {
    id: 1,
    image: "../img/kopi-luwak-iceCream.jpg",
    name: "Kopi Ice Cream",
    price: 13000,
  },
  {
    id: 2,
    image: "../img/kopi-luwak-capuccino.jpg",
    name: "Kopi Luwak Capuccino",
    price: 13000,
  },
  {
    id: 3,
    image: "../img/kopi-luwak-latte.jpg",
    name: "Kopi Luwak Latte",
    price: 13000,
  }
]

const cartItem = document.querySelector("#cartItems");
const quantity = document.querySelector(".countQuantity")

addItems.forEach((items, index) => {
  items.addEventListener('click', function () {

    if (stock[index] > 0) {
      stock[index]--
      count[index].innerHTML = stock[index];
      cartItems.push(products[index]);
      // menampilakn produk di cart
      displayCart(products[index]);
      // menambah count item di cart
      displayCountCart()
      // menghitung total item di cart
      displayTotalPrice(products[index])
    } else {
      count[index].innerHTML = "0";
    }
  })
})

// menambah angka di keranjang
var countCartArr = 0;
const countCart = document.querySelector("#count_cart")
function displayCountCart() {
  countCartArr++
  countCart.innerHTML = countCartArr
}

const cart = document.querySelector(".cart_container");
document.querySelector("#cart").onclick = () => {
  cart.classList.toggle("active");
}

// total harga
let totalPrice = 0;
let totalP = Number(totalPrice);
function displayTotalPrice(items) {
  const total = document.querySelector("#total")
  const priceP = Number(items.price)
  totalP = totalP + priceP;
  total.innerHTML = totalP;
}


function displayCart(items) {
  const cartItem = document.querySelector("#cartItems");
  const itemElement = document.createElement("div");

  itemElement.setAttribute("data-id", items.id);

  itemElement.innerHTML = `
      <div class= "img_box">
        <div class="name_img">
          <img src="${items.image}">
          <p>${items.name}</p>
        </div>
        <div class= "quantity">
          <div class="priceCart">
            <iconify-icon class= "deleteItem" icon="typcn:delete"></iconify-icon>
            <span class= "price">
              <p>price:</p>
              <p>Rp${items.price}</p>
            </span>
          </div>
        </div>
      </div>
      `;

  cartItem.appendChild(itemElement);

  const deleteItem = itemElement.querySelector(".deleteItem");
  deleteItem.addEventListener("click", function () {
    const itemId = itemElement.getAttribute("data-id");
    const itemToRemove = document.querySelector(`[data-id="${itemId}"]`);
    cartItem.removeChild(itemToRemove);

    function displayCountCart() {
      countCartArr--
      countCart.innerHTML = countCartArr
    }
    return displayCountCart()

    
  });
  deleteItem.addEventListener("click", function () {
    function displayTotalPrice(items) {
      const total = document.querySelector("#total")
      const priceP = Number(items.price)
      totalP = totalP - priceP;
      total.innerHTML = totalP;
    }
    return displayTotalPrice(items)
  });
}


