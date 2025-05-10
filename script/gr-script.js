// Sample product data
const products = [
  {
    id: 1,
    name: "Testaki re",
    description: "Relaxing lavender scent in a matte white jar",
    price: 24.99,
    category: "jar",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 2,
    name: "Vanilla Pillar",
    description: "Classic vanilla in a smooth pillar design",
    price: 19.99,
    category: "pillar",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 3,
    name: "Citrus Burst Tealights",
    description: "Set of 12 energizing citrus-scented tealights",
    price: 14.99,
    category: "tealight",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 4,
    name: "Sandalwood Jar",
    description: "Earthy sandalwood in a sleek black jar",
    price: 26.99,
    category: "jar",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 5,
    name: "Ocean Breeze Pillar",
    description: "Fresh ocean scent in a textured pillar",
    price: 22.99,
    category: "pillar",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 6,
    name: "Lemon Grass Tealights",
    description: "Set of 12 refreshing lemongrass tealights",
    price: 16.99,
    category: "tealight",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  }
];

// DOM Elements
const productGrid = document.querySelector('.product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 1500);
});

// Display products
function displayProducts(filter = 'all') {
  productGrid.innerHTML = '';

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(product => product.category === filter);

  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.dataset.category = product.category;

    productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">${product.price.toFixed(2)}€</div>
            </div>
        `;

    productGrid.appendChild(productCard);
  });
}

// Filter products
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    // Filter products
    displayProducts(button.dataset.filter);
  });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize
displayProducts();

