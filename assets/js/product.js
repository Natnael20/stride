// product.js
import { products } from './products-data.js';

function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Render product page
function renderProduct(productId) {
    const product = products[productId];
    if (!product) {
        document.getElementById('product-container').innerHTML = '<div class="col-12 text-center text-light"><h2>Product not found</h2><a href="shop.html" class="btn btn-primary mt-3">Back to Shop</a></div>';
        return;
    }

    // Check if product is in wishlist
    const inWishlist = window.isInWishlist ? window.isInWishlist(product.id) : false;

    // Update breadcrumb
    document.getElementById('typeShoe').innerHTML = `<a href="shop.html?type=${product.type}" class="text-decoration-none text-secondary">${product.type}</a>`;
    document.getElementById('shoeName').innerHTML = product.name;

    // Calculate savings if discount exists
    const savings = product.originalPrice > product.price ? product.originalPrice - product.price : 0;
    const discountPercent = product.discount ? product.discount : (savings > 0 ? Math.round((savings / product.originalPrice) * 100) + '% OFF' : null);

    // Render product HTML
    const productHTML = `
        <div class="col-12 col-lg-6 mb-4">
            <div class="product-image">
                <img src="${product.images.main}" alt="${product.name}" id="main-product-image">
                ${product.badge ? `<span class="badge position-absolute top-0 start-0 mt-3 ms-3" style="background: var(--color-amber-500); z-index: 2;">${product.badge}</span>` : ''}
            </div>
            <div class="thumbnail-images" id="thumbnail-gallery">
                ${product.images.gallery.map((img, idx) => `
                    <div class="thumbnail ${idx === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
                        <img src="${img}" alt="Thumbnail ${idx + 1}">
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="col-12 col-lg-6">
            <div class="mb-3">
                <div class="d-flex align-items-center gap-2 mb-2">
                    <span class="badge fs-6 rounded-3 p-1 px-3" style="width: auto; height: 30px; background-color: color-mix(in oklab, var(--color-primary-400) 10%, transparent); color: var(--color-primary-400);">${product.type}</span>
                    <span class="text-light"><i class="fa fa-star" style="color: #FFD700;"></i></span>
                    <span class="text-light"><i class="fa fa-star" style="color: #FFD700;"></i></span>
                    <span class="text-light"><i class="fa fa-star" style="color: #FFD700;"></i></span>
                    <span class="text-light"><i class="fa fa-star" style="color: #FFD700;"></i></span>
                    <span class="text-light"><i class="fa fa-star" style="color: #FFD700;"></i></span>
                    <span class="text-secondary">${product.rating} (${product.reviewCount} reviews)</span>
                </div>
                <h1 class="text-light fw-bold mb-3" style="font-size: 2.5rem;">${product.name}</h1>
                <div class="d-flex align-items-center gap-3 mb-3">
                    <span class="text-light fw-bold fs-2">$${product.price}</span>
                    ${product.originalPrice > product.price ? `<span class="text-secondary text-decoration-line-through fs-5">$${product.originalPrice}</span>` : ''}
                    ${discountPercent ? `<span class="badge fs-6 rounded-3" style="width: 20%; height: 30px; background-color: color-mix(in oklab, var(--color-primary-400) 10%, transparent); color: var(--color-primary-400);">${discountPercent}</span>` : ''}
                </div>
                <p class="text-light opacity-75 mb-4" style="line-height: 1.6;">${product.description}</p>
            </div>

            <div class="mb-4">
                <h6 class="text-light mb-3">Select Color</h6>
                <div class="d-flex gap-3" id="color-container">
                    ${product.colors.map(color => `
                        <div class="color-option" style="background: ${color.code};" title="${color.name}" onclick="selectColor(this)"></div>
                    `).join('')}
                </div>
            </div>

            <div class="mb-4">
                <h6 class="text-light mb-3">Select Size</h6>
                <div class="d-flex flex-wrap gap-2" id="size-container">
                    ${product.sizes.map(size => `
                        <button class="size-btn" data-size="${size}" onclick="selectSize(this)">${size}</button>
                    `).join('')}
                </div>
            </div>

            <div class="mb-4">
                <h6 class="text-light mb-3">Quantity</h6>
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="changeQuantity(-1)">−</button>
                    <input type="number" class="quantity-input" id="quantity-input" value="1" min="1" max="10" readonly>
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
            </div>

            <div class="d-flex gap-3 mt-4">
                <!-- Add to Cart Button -->
                <button class="btn py-3 fw-bold add-to-cart-btn" style="background: var(--primary); color: white;" onclick="handleAddToCart(${product.id}, this)">
                    <i class="fa fa-shopping-cart me-2"></i> Add to Cart
                </button>
                <!-- Wishlist Button -->
                <button class="btn px-4 py-3 border wishlist-btn" 
                        style="background: ${inWishlist ? 'rgba(255, 68, 68, 0.1)' : 'transparent'}; color: ${inWishlist ? '#ff4444' : 'var(--primary)'}; border-color: ${inWishlist ? '#ff4444' : 'var(--primary)'};" 
                        onclick="toggleWishlist(${product.id})"
                        data-product-id="${product.id}"
                        id="wishlist-btn-${product.id}">
                    <i class="fa ${inWishlist ? 'fa-heart' : 'fa-heart-o'} me-2" id="wishlist-icon-${product.id}" style="color: ${inWishlist ? '#ff4444' : ''};"></i> 
                    <span id="wishlist-text-${product.id}">${inWishlist ? 'Wishlisted' : 'Wishlist'}</span>
                </button>
            </div>

            <div class="mt-4">
                <div class="d-flex justify-content-between flex-wrap gap-3">
                    <div class="d-block p-3 rounded-4" style="background: var(--color-gray-900); flex: 1; min-width: 200px;">
                        <div class="d-flex gap-3 align-items-center">
                            <i class="fa fa-truck fs-4" style="color:var(--color-primary-700);"></i>
                            <span class="text-light" style="font-size:1.1rem; white-space: nowrap;">Free Shipping</span>
                        </div>
                        <span class="text-secondary small" style="margin-left: 40px">On orders over $75</span>
                    </div>
                    
                    <div class="d-block p-3 rounded-4" style="background: var(--color-gray-900); flex: 1; min-width: 200px;">
                        <div class="d-flex gap-3 align-items-center">
                            <i class="fa fa-undo fs-4" style="color:var(--color-primary-700);"></i>
                            <span class="text-light" style="font-size:1.1rem; white-space: nowrap;">60-Day Returns</span>
                        </div>
                        <span class="text-secondary small" style="margin-left: 38px">Try it, love it</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mt-5">
            <div class="detail-tabs">
                <button class="tab-btn active" onclick="switchTab('description')">Description</button>
                <button class="tab-btn" onclick="switchTab('features')">Features</button>
            </div>
            
            <div id="tab-description" class="tab-content active">
                <p class="text-secondary" style="line-height: 1.8;">${product.longDescription || product.description}</p>
            </div>
            <div id="tab-features" class="tab-content">
                <ul class="text-secondary list-unstyled" style="line-height: 2;">
                    ${product.features?.map(f => `<li><i class="fa fa-check-circle me-2" style="color: var(--primary);"></i> ${f}</li>`).join('') || '<li>No features listed</li>'}
                </ul>
            </div>
        </div>
    `;

    document.getElementById('product-container').innerHTML = productHTML;
}

// ===== HANDLE ADD TO CART WITH VALIDATION =====
function handleAddToCart(productId, button) {
    // Check if color is selected
    const activeColor = document.querySelector('.color-option.active');
    if (!activeColor) {
        showNotification('Please select a color');
        return;
    }

    // Check if size is selected
    const activeSize = document.querySelector('.size-btn.active');
    if (!activeSize) {
        showNotification('Please select a size');
        return;
    }

    // Get quantity from input
    const quantityInput = document.getElementById('quantity-input');
    const quantity = parseInt(quantityInput.value) || 1;

    // Call the global addToCart function from app.js
    if (typeof window.addToCart === 'function') {
        window.addToCart(productId, quantity);
    } else {
        console.error('addToCart function not found');
        showNotification('Error adding to cart');
    }

    // Update button feedback - briefly show "Added!"
    if (button) {
        const originalHTML = button.innerHTML;
        const originalBg = button.style.background;
        const originalColor = button.style.color;
        const originalBorder = button.style.border;
        
        button.innerHTML = '<i class="fa fa-check me-2"></i> Added!';
        button.style.background = '#EA580C';
        button.style.color = '#ffffff';
        button.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = originalBg || '';
            button.style.color = originalColor || '';
            button.style.border = originalBorder || '';
            button.disabled = false;
        }, 2000);
    }
}

// ===== SHOW NOTIFICATION =====
function showNotification(message) {
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            max-width: 350px;
        `;
        document.body.appendChild(container);
    }
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        background: #1a1a1a;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        margin-bottom: 10px;
        border-left: 4px solid #ff6b35;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        animation: slideIn 0.3s ease-out;
    `;
    notification.innerHTML = `<span>${message}</span>`;
    
    container.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== GLOBAL FUNCTIONS FOR INTERACTIONS =====
let selectedSize = null;
let selectedColor = null;

window.selectSize = function (btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = btn.getAttribute('data-size');
}

window.selectColor = function (colorDiv) {
    document.querySelectorAll('.color-option').forEach(c => c.classList.remove('active'));
    colorDiv.classList.add('active');
    selectedColor = colorDiv.style.background;
}

window.changeQuantity = function (delta) {
    const input = document.getElementById('quantity-input');
    let newVal = parseInt(input.value) + delta;
    if (newVal < 1) newVal = 1;
    if (newVal > 10) newVal = 10;
    input.value = newVal;
}

window.changeMainImage = function (src, element) {
    document.getElementById('main-product-image').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}

window.switchTab = function (tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    if (tab === 'description') {
        document.querySelector('.tab-btn:first-child').classList.add('active');
        document.getElementById('tab-description').classList.add('active');
    } else if (tab === 'features') {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('tab-features').classList.add('active');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const productId = getProductIdFromURL();
    renderProduct(productId || 1);
});

// Make handleAddToCart globally available
window.handleAddToCart = handleAddToCart;
window.showNotification = showNotification;