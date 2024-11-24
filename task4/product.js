const products = [
    { name: 'Product 1', price: 30 },
    { name: 'Product 2', price: 60 },
    { name: 'Product 3', price: 40 },
    { name: 'Product 4', price: 100 }
];

const filterSelect = document.getElementById('filter');
const productContainer = document.getElementById('products');

const displayProducts = (filter) => {
    productContainer.innerHTML = '';
    const filteredProducts = products.filter(product => {
        if (filter === 'low') return product.price < 50;
        if (filter === 'high') return product.price >= 50;
        return true;
    });
    filteredProducts.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `${product.name} - $${product.price}`;
        productContainer.appendChild(div);
    });
};

filterSelect.addEventListener('change', (e) => {
    displayProducts(e.target.value);
});

// Initial display
displayProducts('all');
