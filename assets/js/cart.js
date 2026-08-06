import { products } from './products-data.js';

// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ===== INITIALIZE CART BADGE =====
(function initCartBadge() {
    updateCartBadge();
})();

// ===== CORE CART FUNCTIONS =====

// Add to cart
function addToCart(productId, quantity = 1) {
    const product = products[productId];
    if (!product) {
        console.error('Product not found for ID:', productId);
        showNotification('Product not found!');
        return;
    }

    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.images.main,
            type: product.type
        });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update UI
    updateCartBadge();
    animateCartIcon();
    
    // Show notification
    if (existingItem) {
        showNotification(`Updated quantity for ${product.name} (${existingItem.quantity} total)`);
    } else {
        showNotification(`${product.name} added to cart!`);
    }
    
    // Update button feedback
    const buttons = document.querySelectorAll(`[onclick*="addToCart(${productId})"]`);
    buttons.forEach(btn => {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa fa-check me-2"></i> Added!';
        btn.style.background = '#28a745';
        btn.style.color = 'white';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.style.color = '';
        }, 1500);
    });
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    
    // If on cart page, re-render
    if (document.getElementById('cart-items-container')) {
        renderCartItems();
    } else {
        showNotification('Item removed from cart');
    }
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            if (document.getElementById('cart-items-container')) {
                renderCartItems();
            }
            updateCartBadge();
        }
    }
}

// ===== UI UPDATES =====

// Update cart badge - shows number of UNIQUE ITEMS
function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const uniqueItems = cart.length;
        const oldValue = badge.textContent;
        badge.textContent = uniqueItems;
        badge.style.display = uniqueItems > 0 ? 'block' : 'block'; // Always show badge
        
        // Animate on change
        if (oldValue !== String(uniqueItems)) {
            badge.classList.add('badge-pop');
            setTimeout(() => {
                badge.classList.remove('badge-pop');
            }, 300);
        }
    }
}

// Animate cart icon
function animateCartIcon() {
    const cartIcon = document.querySelector('.shopping-cart .fa-shopping-cart') || 
                     document.querySelector('.fa-shopping-cart');
    if (cartIcon) {
        cartIcon.classList.add('cart-bounce');
        setTimeout(() => {
            cartIcon.classList.remove('cart-bounce');
        }, 500);
    }
}

// ===== CART PAGE FUNCTIONS =====

// Render cart items on cart page
function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5">
                <i class="fa fa-shopping-cart fa-4x text-secondary mb-3"></i>
                <h4 class="text-light mb-2">Your cart is empty</h4>
                <p class="text-secondary mb-4">Looks like you haven't added any items yet</p>
                <a href="shop.html" class="btn px-4 py-2" style="background: var(--primary); color: white; border-radius: 30px;">
                    Continue Shopping
                </a>
            </div>
        `;
        updateSummary(0);
        return;
    }

    let cartHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        cartHTML += `
            <div class="cart-item d-flex align-items-center gap-3 border-bottom border-secondary pb-3 mb-3" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
                <div class="flex-grow-1">
                    <h6 class="text-light mb-1">${item.name}</h6>
                    <small class="text-secondary">${item.type || 'Shoe'}</small>
                    <div class="d-flex align-items-center gap-3 mt-2">
                        <div class="quantity-selector d-flex align-items-center">
                            <button class="btn btn-sm btn-outline-secondary" onclick="window.updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                            <span class="px-3 text-light">${item.quantity}</span>
                            <button class="btn btn-sm btn-outline-secondary" onclick="window.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                        <span class="text-light fw-bold">$${itemTotal.toFixed(2)}</span>
                    </div>
                </div>
                <button class="btn btn-sm btn-outline-danger" onclick="window.removeFromCart(${item.id})">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        `;
    });

    container.innerHTML = cartHTML;
    updateSummary(subtotal);
}

// Update order summary
function updateSummary(subtotal) {
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
    const shippingEl = document.getElementById('shipping');
    
    if (subtotalEl) {
        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    }
    
    let total = subtotal;
    
    // Check for discount
    const discountRow = document.getElementById('discount-row');
    const discountAmountEl = document.getElementById('discount-amount');
    
    if (discountRow && discountRow.style.display !== 'none' && discountAmountEl) {
        const discountText = discountAmountEl.textContent.replace('-$', '').trim();
        const discountAmount = parseFloat(discountText) || 0;
        total = subtotal - discountAmount;
    }
    
    // Calculate shipping
    if (shippingEl) {
        if (subtotal >= 75) {
            shippingEl.textContent = 'Free';
        } else if (subtotal > 0) {
            shippingEl.textContent = '$5.00';
            total += 5;
        } else {
            shippingEl.textContent = 'Free';
        }
    }
    
    if (totalEl) {
        totalEl.textContent = `$${total.toFixed(2)}`;
    }
}

// ===== PROMO CODE =====

// Apply promo code
function applyPromo() {
    const promoInput = document.getElementById('promo-code');
    const promoMessage = document.getElementById('promo-message');
    const discountRow = document.getElementById('discount-row');
    const discountAmount = document.getElementById('discount-amount');
    
    if (!promoInput || !promoMessage) return;
    
    const code = promoInput.value.trim().toUpperCase();
    
    if (!code) {
        promoMessage.textContent = 'Please enter a promo code';
        promoMessage.style.color = '#ffc107';
        return;
    }
    
    // Calculate subtotal
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (code === 'STRIDE20') {
        const discount = subtotal * 0.2;
        
        if (discountRow && discountAmount) {
            discountRow.style.display = 'flex';
            discountAmount.textContent = `-$${discount.toFixed(2)}`;
        }
        
        promoMessage.textContent = '✅ Promo code applied! 20% off';
        promoMessage.style.color = '#28a745';
        
        updateSummary(subtotal);
    } else {
        promoMessage.textContent = '❌ Invalid promo code';
        promoMessage.style.color = '#dc3545';
        if (discountRow) {
            discountRow.style.display = 'none';
        }
    }
}

// ===== CHECKOUT =====

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty! Add some items first.');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your order! 🎉\n\nTotal: $${total.toFixed(2)}\n\nThis would redirect to checkout.`);
}

// ===== WISHLIST =====

function addToWishlist(productId) {
    const product = products[productId];
    if (!product) return;
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    if (!wishlist.find(item => item.id === productId)) {
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images.main
        });
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification(`${product.name} added to wishlist! ❤️`);
    } else {
        showNotification(`${product.name} is already in your wishlist`);
    }
}

// ===== NOTIFICATIONS =====

function showNotification(message) {
    let notificationContainer = document.getElementById('notification-container');
    
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        notificationContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            max-width: 350px;
        `;
        document.body.appendChild(notificationContainer);
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
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
    notification.innerHTML = `
        <div class="d-flex align-items-center gap-2">
            <i class="fa fa-check-circle" style="color: #ff6b35;"></i>
            <span>${message}</span>
        </div>
    `;
    
    notificationContainer.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===== INITIALIZE =====

document.addEventListener('DOMContentLoaded', function() {
    // Update cart badge
    updateCartBadge();
    
    // If on cart page, render cart items
    if (document.getElementById('cart-items-container')) {
        renderCartItems();
    }
});

// ===== ADD CSS ANIMATIONS =====

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    @keyframes cartBounce {
        0% { transform: scale(1); }
        30% { transform: scale(1.3); }
        50% { transform: scale(0.9); }
        70% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    @keyframes badgePop {
        0% { transform: scale(0.5); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
    }
    .cart-bounce {
        animation: cartBounce 0.5s ease;
    }
    .badge-pop {
        animation: badgePop 0.3s ease;
    }
`;
document.head.appendChild(style);

// ===== EXPOSE GLOBALLY =====
window.addToCart = addToCart;
window.addToWishlist = addToWishlist;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.applyPromo = applyPromo;
window.checkout = checkout;
window.renderCartItems = renderCartItems;
window.updateCartBadge = updateCartBadge;
window.products = products;