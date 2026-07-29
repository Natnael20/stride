// Complete Cart Functionality
// Product database matching your shop items
const products = {
    1: {
        id: 1,
        name: "Nike Free RN Flyknit",
        type: "Running",
        price: 150,
        originalPrice: 218,
        rating: 4.9,
        reviewCount: 234,
        images: { main: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop" }
    },
    2: {
        id: 2,
        name: "Carhartt WIP x Nike Air Force 1 Low",
        type: "Sneakers",
        price: 129,
        originalPrice: 129,
        rating: 4.8,
        reviewCount: 189,
        images: { main: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1000&fit=crop" }
    },
    3: {
        id: 3,
        name: "Nike Air Force 1",
        type: "Basketball",
        price: 199,
        originalPrice: 199,
        rating: 4.7,
        reviewCount: 156,
        images: { main: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800&h=1000&fit=crop" }
    },
    4: {
        id: 4,
        name: "Timberland Men's Earthkeepers Original 6-inch Boot",
        type: "Boots",
        price: 160,
        originalPrice: 160,
        rating: 4.8,
        reviewCount: 142,
        images: { main: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&h=1000&fit=crop" }
    },
    5: {
        id: 5,
        name: "Nike SuperRep Go",
        type: "Running",
        price: 100,
        originalPrice: 100,
        rating: 4.9,
        reviewCount: 98,
        images: { main: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=1000&fit=crop" }
    },
    6: {
        id: 6,
        name: "Adidas Originals Deerupt Runner",
        type: "Sandals",
        price: 120,
        originalPrice: 120,
        rating: 4.8,
        reviewCount: 267,
        images: { main: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&h=1000&fit=crop" }
    },
    7: {
        id: 7,
        name: "Nike SB Dunk High",
        type: "Sneakers",
        price: 110,
        originalPrice: 110,
        rating: 4.5,
        reviewCount: 423,
        images: { main: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&h=1000&fit=crop" }
    },
    8: {
        id: 8,
        name: "Vans Old Skool Sneaker",
        type: "Sneakers",
        price: 70,
        originalPrice: 70,
        rating: 4.7,
        reviewCount: 89,
        images: { main: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=1000&fit=crop" }
    },
    9: {
        id: 9,
        name: "Two Strap slide sandal",
        type: "Sandals",
        price: 50,
        originalPrice: 50,
        rating: 4.6,
        reviewCount: 178,
        images: { main: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&h=1000&fit=crop" }
    },
    10: {
        id: 10,
        name: "Nike Air Force 1 Shado Pastel",
        type: "Training",
        price: 210,
        originalPrice: 210,
        rating: 4.4,
        reviewCount: 312,
        images: { main: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=1000&fit=crop" }
    },
    11: {
        id: 11,
        name: "Puma Court Star",
        type: "Sneakers",
        price: 99,
        originalPrice: 99,
        rating: 4.6,
        reviewCount: 245,
        images: { main: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=1000&fit=crop" }
    },
    12: {
        id: 12,
        name: "Adidas Yeezy Boost 350 V2",
        type: "Sneakers",
        price: 220,
        originalPrice: 220,
        rating: 4.7,
        reviewCount: 134,
        images: { main: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=800&h=1000&fit=crop" }
    },
    13: {
        id: 13,
        name: "Captain Lace-Up Boot",
        type: "Boots",
        price: 199,
        originalPrice: 199,
        rating: 4.5,
        reviewCount: 567,
        images: { main: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&h=1000&fit=crop" }
    },
    14: {
        id: 14,
        name: "Converse Chuck Taylor All Star High Tops",
        type: "Sneakers",
        price: 80,
        originalPrice: 80,
        rating: 4.8,
        reviewCount: 76,
        images: { main: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800&h=1000&fit=crop" }
    },
    15: {
        id: 15,
        name: "Nike Air Max 1 Ultra",
        type: "Sneakers",
        price: 150,
        originalPrice: 150,
        rating: 4.4,
        reviewCount: 198,
        images: { main: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=1000&fit=crop" }
    },
    16: {
        id: 16,
        name: "Winter Boot",
        type: "Boots",
        price: 279,
        originalPrice: 279,
        rating: 4.9,
        reviewCount: 67,
        images: { main: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&h=1000&fit=crop" }
    }
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];

(function immediateBadgeUpdate() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const uniqueItems = cart.length;
        badge.textContent = uniqueItems;
        badge.style.display = 'block';
    }
})();

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

    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartBadge();
    
    animateCartIcon();
    
    if (existingItem) {
        showNotification(`Updated quantity for ${product.name} (${existingItem.quantity} total)`);
    } else {
        showNotification(`${product.name} added to cart!`);
    }
    
    const buttons = document.querySelectorAll(`[onclick="addToCart(${productId})"]`);
    buttons.forEach(btn => {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa fa-check small fa-1x"></i> Added!';
        btn.style.color = 'white';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.style.color = '';
        }, 1500);
    });
    
}

// Animate cart icon when item is added
function animateCartIcon() {
    const cartIcon = document.querySelector('.shopping-cart .fa-shopping-cart');
    if (cartIcon) {
        cartIcon.classList.add('cart-bounce');
        setTimeout(() => {
            cartIcon.classList.remove('cart-bounce');
        }, 500);
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    if (document.getElementById('cart-items-container')) {
        renderCartItems();
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
        }
    }
}

// Update cart badge - shows number of UNIQUE ITEMS (always visible)
function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const uniqueItems = cart.length;
        const oldValue = badge.textContent;
        badge.textContent = uniqueItems;
        badge.style.display = 'block'; // Always show the badge
        
        // Only animate when value changes
        if (oldValue !== String(uniqueItems)) {
            badge.classList.add('badge-pop');
            setTimeout(() => {
                badge.classList.remove('badge-pop');
            }, 300);
        }
    }
}

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
                            <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                            <span class="px-3 text-light">${item.quantity}</span>
                            <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        </div>
                        <span class="text-light fw-bold">$${itemTotal}</span>
                    </div>
                </div>
                <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">
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
        subtotalEl.textContent = `$${subtotal}`;
    }
    
    if (totalEl) {
        let total = subtotal;
        
        const discountRow = document.getElementById('discount-row');
        if (discountRow && discountRow.style.display !== 'none') {
            const discountAmount = parseFloat(document.getElementById('discount-amount')?.textContent.replace('-$', '') || 0);
            total = subtotal - discountAmount;
        }
        
        if (shippingEl) {
            if (subtotal >= 75) {
                shippingEl.textContent = 'Free';
            } else if (subtotal > 0) {
                shippingEl.textContent = '$5.00';
            } else {
                shippingEl.textContent = 'Free';
            }
        }
        
        totalEl.textContent = `$${total.toFixed(2)}`;
    }
}

// Apply promo code
function applyPromo() {
    const promoInput = document.getElementById('promo-code');
    const promoMessage = document.getElementById('promo-message');
    const discountRow = document.getElementById('discount-row');
    const discountAmount = document.getElementById('discount-amount');
    
    if (!promoInput) return;
    
    const code = promoInput.value.trim().toUpperCase();
    
    if (code === 'STRIDE20') {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discount = subtotal * 0.2;
        
        discountRow.style.display = 'flex';
        discountAmount.textContent = `-$${discount.toFixed(2)}`;
        promoMessage.textContent = '✅ Promo code applied! 20% off';
        promoMessage.style.color = '#ff6b35';
        
        updateSummary(subtotal);
    } else if (code) {
        promoMessage.textContent = '❌ Invalid promo code';
        promoMessage.style.color = '#dc3545';
        discountRow.style.display = 'none';
    }
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some items first.');
        return;
    }
    alert('Thank you for your order! 🎉 This would redirect to checkout.');
}

// Show notification
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

// Add to wishlist
function addToWishlist(productId) {
    const product = products[productId];
    if (product) {
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
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    
    if (document.getElementById('cart-items-container')) {
        renderCartItems();
    }
});

// Add CSS animations
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

// Make functions globally available
window.addToCart = addToCart;
window.addToWishlist = addToWishlist;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.applyPromo = applyPromo;
window.checkout = checkout;
window.products = products; 