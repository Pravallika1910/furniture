// This is a simplified example. In a real scenario, you would fetch data from a server.
const products = [
    { name: 'Chair', price: 50, image: 'chair.jpg' },
    { name: 'Table', price: 100, image: 'table.jpg' },
    // Add more products as needed
];

const productContainer = document.querySelector('.product-list');

// Populate product list
products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button>Add to Cart</button>
    `;
    productContainer.appendChild(productItem);
});
