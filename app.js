// Centralized Product List
const productsData = [
  // --- MAKEUP & BEAUTY PRODUCTS ---
  {
    id: 'm1',
    title: 'Velvet Matte Liquid Lipstick (Red Romance)',
    category: 'makeup',
    price: 699,
    rating: 4.8,
    discountPercentage: 20,
    thumbnail: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500',
    description: 'Long-lasting 12-hour matte finish liquid lipstick enriched with Vitamin E and jojoba oil for soft, hydrated lips.'
  },
  {
    id: 'm2',
    title: 'Glow Vitamin C Face Serum (30ml)',
    category: 'beauty',
    price: 1299,
    rating: 4.7,
    discountPercentage: 15,
    thumbnail: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500',
    description: 'Brightening facial serum with 15% Pure Vitamin C and Hyaluronic Acid to fade dark spots and boost skin radiance.'
  },
  {
    id: 'm3',
    title: 'Luxury Rose Floral Eau De Parfum (100ml)',
    category: 'beauty',
    price: 3499,
    rating: 4.9,
    discountPercentage: 10,
    thumbnail: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500',
    description: 'An enchanting fragrance featuring notes of French Rose, Jasmine, and Warm Vanilla.'
  },
  {
    id: 'm4',
    title: '18-Shade Nude Eyeshadow Palette',
    category: 'makeup',
    price: 1499,
    rating: 4.6,
    discountPercentage: 25,
    thumbnail: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500',
    description: 'Highly pigmented matte and shimmer nude shades designed for subtle day looks and bold evening eyes.'
  },
  {
    id: 'm5',
    title: 'Ultra-Lightweight Sunscreen Gel SPF 50',
    category: 'beauty',
    price: 599,
    rating: 4.8,
    discountPercentage: 10,
    thumbnail: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500',
    description: 'Broad-spectrum UVA/UVB defense with zero white cast, non-greasy formula suitable for all skin types.'
  },

  // --- ELECTRONICS & TECH ---
  {
    id: '1',
    title: 'Wireless Bluetooth Headphones',
    category: 'electronics',
    price: 2999,
    rating: 4.8,
    discountPercentage: 15,
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    description: 'High-clarity sound with deep bass, active noise cancellation, and up to 30 hours of battery backup.'
  },
  {
    id: '2',
    title: 'Smart Fitness Watch',
    category: 'accessories',
    price: 1999,
    rating: 4.5,
    discountPercentage: 20,
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    description: 'Track your steps, heart rate, sleep quality, and receive calls & notifications on your wrist.'
  },
  {
    id: '3',
    title: 'Minimalist Red Sneakers',
    category: 'shoes',
    price: 3499,
    rating: 4.7,
    discountPercentage: 10,
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    description: 'Premium quality athletic running shoes with breathable mesh and comfortable cushioned soles.'
  },
  {
    id: '4',
    title: 'Pro Ultra Slim Laptop',
    category: 'laptops',
    price: 64999,
    rating: 4.9,
    discountPercentage: 12,
    thumbnail: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
    description: 'Ultra-fast processor, 16GB RAM, 512GB SSD, stunning 14-inch retina display for work and gaming.'
  },
  {
    id: '5',
    title: 'NextGen 5G Smartphone',
    category: 'smartphones',
    price: 44999,
    rating: 4.6,
    discountPercentage: 10,
    thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
    description: '108MP camera, 120Hz AMOLED display, 5000mAh battery with 67W fast charging support.'
  }
];

// LocalStorage Management
let cart = JSON.parse(localStorage.getItem('shopsphere_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('shopsphere_wishlist')) || [];
let currentTheme = localStorage.getItem('shopsphere_theme') || 'light';

// Theme Management (Light / Dark Mode)
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('shopsphere_theme', theme);
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  }
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function formatINR(price) {
  if (typeof price === 'string' && price.includes('₹')) return price;
  const num = typeof price === 'number' ? price : parseFloat(price) || 0;
  return '₹' + num.toLocaleString('en-IN');
}

function saveCart() {
  localStorage.setItem('shopsphere_cart', JSON.stringify(cart));
  updateBadges();
}

function saveWishlist() {
  localStorage.setItem('shopsphere_wishlist', JSON.stringify(wishlist));
  updateBadges();
}

function updateBadges() {
  const cartBadge = document.getElementById('cart-badge');
  const wishlistBadge = document.getElementById('wishlist-badge');

  if (cartBadge) {
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartBadge.textContent = totalCount;
    cartBadge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  }

  if (wishlistBadge) {
    const totalCount = wishlist.length;
    wishlistBadge.textContent = totalCount;
    wishlistBadge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
  }
}

function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `${type === 'success' ? '✓' : 'ℹ'} ${message}`;

  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function addToCart(product, quantity = 1) {
  const existing = cart.find(item => String(item.id) === String(product.id));
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity: quantity });
  }
  saveCart();
  showToast(`Added to cart! 🛒`);
}

function toggleWishlist(product) {
  const index = wishlist.findIndex(item => String(item.id) === String(product.id));
  if (index > -1) {
    wishlist.splice(index, 1);
    saveWishlist();
    showToast('Removed from wishlist');
    return false;
  } else {
    wishlist.push(product);
    saveWishlist();
    showToast('Added to wishlist! ❤️');
    return true;
  }
}

function isInWishlist(productId) {
  return wishlist.some(item => String(item.id) === String(productId));
}

document.addEventListener('DOMContentLoaded', () => {
  // Inject theme toggle button into navbar
  const navLinks = document.getElementById('nav-links');
  if (navLinks && !document.getElementById('theme-toggle-btn')) {
    const themeBtn = document.createElement('button');
    themeBtn.id = 'theme-toggle-btn';
    themeBtn.className = 'theme-toggle-btn';
    themeBtn.onclick = toggleTheme;
    navLinks.appendChild(themeBtn);
  }

  applyTheme(currentTheme);
  updateBadges();

  const hamburger = document.getElementById('hamburger-btn');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-open');
    });
  }
});
