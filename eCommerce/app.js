// Initialize AngularJS App
const app = angular.module("shopApp", []);

app.controller("ShopController", function($scope) {});

// Product Data
const products = [
  { id: 1, name: "Phone Model A", description: "High-quality smartphone", price: 299, image: "phone1.jpg" },
  { id: 2, name: "Phone Model B", description: "Advanced camera phone", price: 399, image: "phone2.jpg" },
  { id: 3, name: "Phone Model C", description: "Affordable and reliable", price: 199, image: "phone3.jpg" },
  { id: 4, name: "Phone Model D", description: "High-quality smartphone", price: 299, image: "phone1.jpg" },
  { id: 5, name: "Phone Model E", description: "Advanced camera phone", price: 399, image: "phone2.jpg" },
  { id: 6, name: "Phone Model F", description: "Affordable and reliable", price: 199, image: "phone3.jpg" },
  { id: 7, name: "Phone Model G", description: "High-quality smartphone", price: 299, image: "phone1.jpg" },
  { id: 8, name: "Phone Model H", description: "Advanced camera phone", price: 399, image: "phone2.jpg" },
  { id: 9, name: "Phone Model I", description: "Affordable and reliable", price: 199, image: "phone3.jpg" },
  { id: 10, name: "Phone Model J", description: "High-quality smartphone", price: 299, image: "phone1.jpg" },
  { id: 11, name: "Phone Model K", description: "Advanced camera phone", price: 399, image: "phone2.jpg" },
  { id: 12, name: "Phone Model L", description: "Affordable and reliable", price: 199, image: "phone3.jpg" },
  // Add more products as needed
];

const cart = [];

function login() {
  location.replace("https://mgiftsonraj40.github.io/Wolf-LanC/eCommerce/index.html")
}

// Utility Functions
function scrollToShop() {
  document.getElementById('shop-dar').scrollIntoView({ behavior: 'smooth' });
}

function openCart() {
  const cartContainer = document.getElementById('cart');
  cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
  renderCart();
}

// Render Functions
function renderProducts() {
  const shopContainer = document.getElementById('shop');
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>$${product.price}</strong></p>
      <input type="number" min="1" value="1" id="qty-${product.id}">
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    shopContainer.appendChild(productCard);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const quantity = parseInt(document.getElementById(`qty-${id}`).value);
  const cartItem = cart.find(item => item.product.id === id);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '<h2>Cart</h2>';
  let total = 0;
  cart.forEach(item => {
    cartContainer.innerHTML += `
      <p>${item.product.name} x ${item.quantity} - $${item.product.price * item.quantity}</p>
    `;
    total += item.product.price * item.quantity;
  });
  cartContainer.innerHTML += `<p>Total: $${total}</p>`;
}

// Load products on page load
window.addEventListener('load', () => {
  renderProducts();
});
