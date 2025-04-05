// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
  
  // Display products
  const products = [
    { name: "Product 1", price: 19.99 },
    { name: "Product 2", price: 29.99 }
  ];
  
  const productsDiv = document.getElementById('products');
  products.forEach(product => {
    productsDiv.innerHTML += `
      <div class="product">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
      </div>
    `;
  });