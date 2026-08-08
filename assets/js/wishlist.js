// wishlist.js
import { products } from './products-data.js';


// ===== WISHLIST STATE =====
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Add to wishlist
function addToWishlist(productId) {
    
    const product = products[productId];
    if (!product) {
        console.error('❌ Product not found for ID:', productId);
        showNotification('Product not found!');
        return;
    }

    // Check if already in wishlist
    const existingItem = wishlist.find(item => item.id === productId);
    
    if (existingItem) {
        showNotification(`${product.name} is already in your wishlist!`);
        return;
    }

    // Add to wishlist
    wishlist.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images.main,
        type: product.type,
        badge: product.badge || null,
        originalPrice: product.originalPrice,
        discount: product.discount,
        rating: product.rating,
        reviewCount: product.reviewCount,
        colors: product.colors,
        sizes: product.sizes,
        addedAt: new Date().toISOString()
    });

    // Save to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Update UI
    updateWishlistBadge();
    updateWishlistButtons(productId, true);
    updateWishlistButtonUI(productId, true);
    updateHeartIcon(productId, true);
    
    // If on wishlist page, re-render
    if (document.getElementById('wishlist-container')) {
        renderWishlistItems();
    }
    
    // Show notification
    showNotification(`${product.name} added to wishlist!`);
    
    // Animate heart icon
    animateHeartIcon();
}

// Remove from wishlist
function removeFromWishlist(productId) {
    
    const product = wishlist.find(item => item.id === productId);
    
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Update UI
    updateWishlistBadge();
    updateWishlistButtons(productId, false);
    updateWishlistButtonUI(productId, false);
    updateHeartIcon(productId, false);
    
    // If on wishlist page, re-render
    if (document.getElementById('wishlist-container')) {
        renderWishlistItems();
    } else {
        showNotification('Removed from wishlist');
    }
}

// Toggle wishlist (add if not exists, remove if exists)
function toggleWishlist(productId) {
    
    const existingItem = wishlist.find(item => item.id === productId);
    
    if (existingItem) {
        removeFromWishlist(productId);
    } else {
        addToWishlist(productId);
    }
}

// Check if product is in wishlist
function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

// Clear all wishlist items
function clearWishlist() {
    if (wishlist.length === 0) {
        showNotification('Your wishlist is already empty');
        return;
    }
    
    // Create and show custom confirmation modal
    showClearConfirmationModal();
}

// Show custom confirmation modal for clearing wishlist
function showClearConfirmationModal() {
    // Remove existing modal if any
    const existingModal = document.getElementById('clear-wishlist-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.id = 'clear-wishlist-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: modalFadeIn 0.3s ease-out;
    `;
    
    // Create modal content
    modal.innerHTML = `
        <div class="modal-box" style="
            background: #1a1a1a;
            border-radius: 16px;
            padding: 40px;
            max-width: 450px;
            width: 90%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.1);
            animation: modalScaleIn 0.3s ease-out;
            position: relative;
            overflow: hidden;
        ">
            <!-- Decorative gradient line at top -->
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #ff4444, #ff6b35, #ff4444);
                background-size: 200% 100%;
                animation: gradientMove 2s ease-in-out infinite;
            "></div>
            
            <!-- Icon -->
            <div style="
                text-align: center;
                margin-bottom: 20px;
                margin-top: 10px;
            ">
                <div style="
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background: rgba(255, 68, 68, 0.15);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                    border: 2px solid rgba(255, 68, 68, 0.3);
                    animation: pulse 2s ease-in-out infinite;
                ">
                    <i class="fa fa-trash-o" style="
                        font-size: 36px;
                        color: #ff4444;
                    "></i>
                </div>
            </div>
            
            <!-- Title -->
            <h3 style="
                color: white;
                text-align: center;
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 12px;
                font-family: inherit;
            ">
                Clear Wishlist?
            </h3>
            
            <!-- Description -->
            <p style="
                color: #999;
                text-align: center;
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 8px;
                font-family: inherit;
            ">
                This will permanently remove all ${wishlist.length} items from your wishlist.
            </p>
            <p style="
                color: #666;
                text-align: center;
                font-size: 14px;
                margin-bottom: 28px;
                font-family: inherit;
            ">
                This action cannot be undone.
            </p>
            
            <!-- Wishlist summary -->
            <div style="
                background: rgba(255, 255, 255, 0.05);
                border-radius: 10px;
                padding: 12px 16px;
                margin-bottom: 28px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border: 1px solid rgba(255, 255, 255, 0.05);
            ">
                <span style="color: #888; font-size: 14px;">
                    <i class="fa fa-heart" style="color: #ff4444; margin-right: 8px;"></i>
                    Items in wishlist
                </span>
                <span style="color: white; font-weight: 600; font-size: 16px;">
                    ${wishlist.length}
                </span>
            </div>
            
            <!-- Buttons -->
            <div style="
                display: flex;
                gap: 12px;
            ">
                <button onclick="closeClearModal()" style="
                    flex: 1;
                    padding: 14px 20px;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 10px;
                    background: transparent;
                    color: #aaa;
                    font-weight: 600;
                    font-size: 15px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-family: inherit;
                " 
                onmouseover="this.style.background='rgba(255,255,255,0.05)'; this.style.color='white';"
                onmouseout="this.style.background='transparent'; this.style.color='#aaa';">
                    Cancel
                </button>
                <button onclick="confirmClearWishlist()" style="
                    flex: 1;
                    padding: 14px 20px;
                    border: none;
                    border-radius: 10px;
                    background: linear-gradient(135deg, #ff4444, #cc0000);
                    color: white;
                    font-weight: 600;
                    font-size: 15px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-family: inherit;
                    box-shadow: 0 4px 15px rgba(255, 68, 68, 0.3);
                " 
                onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 6px 25px rgba(255, 68, 68, 0.4)';"
                onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 4px 15px rgba(255, 68, 68, 0.3)';">
                    <i class="fa fa-trash-o" style="margin-right: 8px;"></i>
                    Clear All
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add keyboard support (Escape to close)
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeClearModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Close when clicking outside the modal box
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeClearModal();
        }
    });
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes modalScaleIn {
            from { 
                transform: scale(0.9) translateY(20px);
                opacity: 0;
            }
            to { 
                transform: scale(1) translateY(0);
                opacity: 1;
            }
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(style);
}

// Close the clear confirmation modal
function closeClearModal() {
    const modal = document.getElementById('clear-wishlist-modal');
    if (modal) {
        modal.style.animation = 'modalFadeOut 0.2s ease-in';
        setTimeout(() => {
            modal.remove();
        }, 200);
    }
}

// Confirm and execute clear wishlist
function confirmClearWishlist() {
    // Close the modal
    closeClearModal();
    
    // Execute the clear
    wishlist = [];
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
    renderWishlistItems();
    
    // Reset all heart icons on the page
    document.querySelectorAll('.wishlist-toggle-btn').forEach(btn => {
        const icon = btn.querySelector('.fa-heart-o, .fa-heart');
        if (icon) {
            icon.className = 'fa fa-heart-o';
            icon.style.color = '';
            btn.style.background = '';
            btn.style.borderColor = '';
        }
    });
    
    // Show success notification with animation
    showNotification('Wishlist cleared successfully!');
}

// Also add the fade out animation
const styleSheet = document.createElement('style');
styleSheet.textContent += `
    @keyframes modalFadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(styleSheet);

// ===== UI UPDATES =====

// Update heart icon color on wishlist page
function updateHeartIcon(productId, inWishlist) {
    
    // Find all heart icons with this product ID on the page
    const allHeartIcons = document.querySelectorAll(`[data-product-id="${productId}"] .fa-heart-o, [data-product-id="${productId}"] .fa-heart`);
    allHeartIcons.forEach(icon => {
        if (inWishlist) {
            icon.className = 'fa fa-heart';
            icon.style.color = '#ff4444';
            const parentSpan = icon.closest('.wishlist-toggle-btn');
            if (parentSpan) {
                parentSpan.style.background = 'rgba(255, 68, 68, 0.15)';
                parentSpan.style.borderColor = 'rgba(255, 68, 68, 0.3)';
            }
        } else {
            icon.className = 'fa fa-heart-o';
            icon.style.color = '';
            const parentSpan = icon.closest('.wishlist-toggle-btn');
            if (parentSpan) {
                parentSpan.style.background = '';
                parentSpan.style.borderColor = '';
            }
        }
    });
    
    // Also update the heart in product cards (for "You might also like" section)
    const productCards = document.querySelectorAll(`.collect-img[id="${productId}"]`);
    productCards.forEach(card => {
        const heartIcon = card.querySelector('.fa-heart-o, .fa-heart');
        if (heartIcon) {
            if (inWishlist) {
                heartIcon.className = 'fa fa-heart';
                heartIcon.style.color = '#ff4444';
                const parentSpan = heartIcon.closest('.wishlist-toggle-btn');
                if (parentSpan) {
                    parentSpan.style.background = 'rgba(255, 68, 68, 0.15)';
                }
            } else {
                heartIcon.className = 'fa fa-heart-o';
                heartIcon.style.color = '';
                const parentSpan = heartIcon.closest('.wishlist-toggle-btn');
                if (parentSpan) {
                    parentSpan.style.background = '';
                }
            }
        }
    });
}

// Update wishlist badge
function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-badge');
    if (badge) {
        const count = wishlist.length;
        badge.textContent = count;
        badge.style.display = count > 0 ? 'block' : 'none';
    }
    
    // Update the "X items saved" text on wishlist page
    const itemsCountText = document.getElementById('wishlist-count');
    if (itemsCountText) {
        itemsCountText.textContent = `${wishlist.length} items saved`;
    }
}

// Update wishlist buttons (for product page)
function updateWishlistButtons(productId, inWishlist) {
    const buttons = document.querySelectorAll(`[data-product-id="${productId}"].wishlist-btn`);
    buttons.forEach(btn => {
        if (inWishlist) {
            btn.classList.add('active');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = 'fa fa-heart me-2';
                icon.style.color = '#ff4444';
            }
            btn.style.color = '#ff4444';
            btn.style.borderColor = '#ff4444';
            btn.style.background = 'rgba(255, 68, 68, 0.1)';
        } else {
            btn.classList.remove('active');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = 'fa fa-heart-o me-2';
                icon.style.color = '';
            }
            btn.style.color = '';
            btn.style.borderColor = '';
            btn.style.background = '';
        }
    });
}

// Update wishlist button UI on product page
function updateWishlistButtonUI(productId, inWishlist) {
    const icon = document.getElementById(`wishlist-icon-${productId}`);
    const text = document.getElementById(`wishlist-text-${productId}`);
    const btn = document.getElementById(`wishlist-btn-${productId}`);
    
    if (icon) {
        icon.className = `fa ${inWishlist ? 'fa-heart' : 'fa-heart-o'} me-2`;
        if (inWishlist) {
            icon.style.color = '#ff4444';
        } else {
            icon.style.color = '';
        }
    }
    
    if (text) {
        text.textContent = inWishlist ? 'Wishlisted' : 'Wishlist';
    }
    
    if (btn) {
        if (inWishlist) {
            btn.style.color = '#ff4444';
            btn.style.borderColor = '#ff4444';
            btn.style.background = 'rgba(255, 68, 68, 0.1)';
        } else {
            btn.style.color = 'var(--primary)';
            btn.style.borderColor = 'var(--primary)';
            btn.style.background = 'transparent';
        }
    }
}

// Animate heart icon
function animateHeartIcon() {
    const heartIcon = document.querySelector('.heart-icon .fa-heart-o, .heart-icon .fa-heart');
    if (heartIcon) {
        heartIcon.classList.add('heart-bounce');
        setTimeout(() => {
            heartIcon.classList.remove('heart-bounce');
        }, 500);
    }
}

// Restore heart states on page load
function restoreHeartStates() {
    
    // Find all wishlist toggle buttons on the page
    const toggleButtons = document.querySelectorAll('.wishlist-toggle-btn');
    
    toggleButtons.forEach(btn => {
        const productId = parseInt(btn.getAttribute('data-product-id'));
        if (productId && !isNaN(productId)) {
            const inWishlist = isInWishlist(productId);
            const icon = btn.querySelector('.fa-heart-o, .fa-heart');
            
            if (icon) {
                if (inWishlist) {
                    icon.className = 'fa fa-heart';
                    icon.style.color = '#ff4444';
                    btn.style.background = 'rgba(255, 68, 68, 0.15)';
                    btn.style.borderColor = 'rgba(255, 68, 68, 0.3)';
                } else {
                    icon.className = 'fa fa-heart-o';
                    icon.style.color = '';
                    btn.style.background = '';
                    btn.style.borderColor = '';
                }
            }
        }
    });
    
    // Also update hearts in "You might also like" section
    const productCards = document.querySelectorAll('.collect-img[id]');
    productCards.forEach(card => {
        const productId = parseInt(card.id);
        if (productId && !isNaN(productId)) {
            const inWishlist = isInWishlist(productId);
            const heartIcon = card.querySelector('.fa-heart-o, .fa-heart');
            if (heartIcon) {
                if (inWishlist) {
                    heartIcon.className = 'fa fa-heart';
                    heartIcon.style.color = '#EA580C';
                    const parentSpan = heartIcon.closest('.wishlist-toggle-btn');
                    if (parentSpan) {
                        parentSpan.style.background = 'rgba(255, 68, 68, 0.15)';
                    }
                } else {
                    heartIcon.className = 'fa fa-heart-o';
                    heartIcon.style.color = '';
                    const parentSpan = heartIcon.closest('.wishlist-toggle-btn');
                    if (parentSpan) {
                        parentSpan.style.background = '';
                    }
                }
            }
        }
    });
    
}

// ===== WISHLIST PAGE FUNCTIONS =====

// Render wishlist items on wishlist page
function renderWishlistItems() {
    const container = document.getElementById('wishlist-container');
    if (!container) {
        return;
    }


    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5">
                <i class="fa fa-heart-o fa-4x text-secondary mb-3"></i>
                <h4 class="text-light mb-2">Your wishlist is empty</h4>
                <p class="text-secondary mb-4">Start saving your favorite items!</p>
                <a href="shop.html" class="btn px-4 py-2" style="background: var(--primary); color: white; border-radius: 30px;">
                    Start Shopping
                </a>
            </div>
        `;
        return;
    }

    let wishlistHTML = `<div class="row p-3">`;

    wishlist.forEach(item => {
        // Calculate discount if any
        const hasDiscount = item.originalPrice && item.originalPrice > item.price;
        const discountPercent = hasDiscount ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : null;
        
        // Get badge
        let badgeHTML = '';
        if (item.badge) {
            badgeHTML = `<span class="badge text-light position-absolute top-0 mt-3 ms-3 z-1" style="background-color: var(--color-amber-500);">${item.badge}</span>`;
        } else if (discountPercent) {
            badgeHTML = `<span class="badge text-light position-absolute top-0 mt-3 ms-3 z-1" style="background-color: var(--primary);">${discountPercent}% OFF</span>`;
        }

        wishlistHTML += `
            <div class="col-6 col-sm-4 col-md-3 mb-4 wishlist-item" data-id="${item.id}">
                <div class="border border-0 position-relative">
                    <div class="collect-img position-relative overflow-hidden" id="${item.id}">
                        ${badgeHTML}
                        <img src="${item.image}" alt="${item.name}" class="img-fluid rounded bg-transparent">
                        <div class="img-shop position-absolute bottom-0 start-50 translate-middle-x d-flex align-items-center justify-content-between gap-1 w-100 ">
                            <button onclick="addToCart(${item.id})" class="btn bg-light mt-1 fw-semibold align-items-center d-flex justify-content-center gap-2 w-100">
                                <i class="fa fa-shopping-cart text-dark" aria-hidden="true"></i>
                                <span style="font-size: clamp(.8em, 1.3vw, 1rem);">Shop Now</span>
                            </button>
                            <button onclick="removeFromWishlist(${item.id})" style="font-size: clamp(1rem, 1.7vw, 1.3rem);" class="mt-1 p-2 border border-0 rounded align-items-center d-flex justify-content-center" style="padding: 12px 12px; aria-label="Remove from wishlist">
                                <i class="fa fa-heart" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-detail">
                        <div class="collect-name d-flex justify-content-between align-items-center">
                            <span class="text-secondary mt-2 mb-3">${item.type || 'Shoe'}</span>
                            ${item.rating ? `<span class="badge me-2 bg-transparent"><i class="fa fa-star me-1 star"></i>${item.rating}</span>` : ''}
                        </div>
                        <p class="mb-3 fw-bold text-light">${item.name}</p>
                        <div class="d-flex align-items-center gap-2">
                            <span class="text-light fw-semibold">$${item.price}</span>
                            ${item.originalPrice && item.originalPrice > item.price ? 
                                `<span class="text-secondary text-decoration-line-through small">$${item.originalPrice}</span>` : 
                                ''}
                        </div>
                        ${item.colors && item.colors.length > 0 ? `
                            <div class="show-color d-flex gap-2 mt-2 mb-2">
                                ${item.colors.slice(0, 4).map(color => `
                                    <span class="color-choice d-inline-block rounded-circle" 
                                          style="background: ${color.code}; width: 20px; height: 20px; border: 1px solid rgba(255,255,255,0.1);" 
                                          title="${color.name}"></span>
                                `).join('')}
                                ${item.colors.length > 4 ? `<span class="text-secondary small">+${item.colors.length - 4}</span>` : ''}
                            </div>
                        ` : ''}
                        ${item.sizes ? `<span class="mt-2 text-light opacity-75 small">${item.sizes.length} sizes available</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    });

    wishlistHTML += `</div>`;
    container.innerHTML = wishlistHTML;
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
        border-left: 4px solid #EA580C;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        animation: slideIn 0.3s ease-out;
    `;
    notification.innerHTML = `
        <div class="d-flex align-items-center gap-2">
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

function initWishlist() {    
    // First, make sure we have the latest wishlist from localStorage
    wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Update wishlist badge
    updateWishlistBadge();
    
    // If on wishlist page, render wishlist items
    if (document.getElementById('wishlist-container')) {
        renderWishlistItems();
    }
    
    // Restore all heart icons on the page
    restoreHeartStates();
    
    // Update "Clear All" button
    const clearBtn = document.querySelector('.clear-all-btn');
    if (clearBtn) {
        // Remove existing listeners to avoid duplicates
        const newClearBtn = clearBtn.cloneNode(true);
        clearBtn.parentNode.replaceChild(newClearBtn, clearBtn);
        newClearBtn.addEventListener('click', clearWishlist);
    }
    
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWishlist);
} else {
    initWishlist();
}

// ===== ADD CSS ANIMATIONS =====

const style = document.createElement('style');
style.textContent = `
    @keyframes heartBounce {
        0% { transform: scale(1); }
        30% { transform: scale(1.4); }
        50% { transform: scale(0.9); }
        70% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .heart-bounce {
        animation: heartBounce 0.5s ease;
    }
    .wishlist-btn.active {
        color: #ff4444 !important;
        border-color: #ff4444 !important;
    }
    .wishlist-btn.active i {
        color: #ff4444 !important;
    }
    .wishlist-btn:hover {
        transform: scale(1.05);
        transition: transform 0.2s ease;
    }
    .color-choice {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: inline-block;
        border: 1px solid rgba(255,255,255,0.1);
    }
    .img-shop {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    .collect-img:hover .img-shop {
        opacity: 1;
    }
    .wishlist-toggle-btn {
        transition: all 0.3s ease;
        border: 1px solid transparent;
        cursor: pointer;
    }
    .wishlist-toggle-btn:hover {
        transform: scale(1.1);
        transition: transform 0.2s ease;
    }
    .fa-heart {
        color: #ff4444 !important;
        transition: color 0.3s ease;
    }
    .fa-heart-o {
        transition: color 0.3s ease;
    }
`;
document.head.appendChild(style);

// ===== EXPOSE EVERYTHING TO GLOBAL WINDOW =====
window.wishlist = wishlist;
window.addToWishlist = addToWishlist;
window.removeFromWishlist = removeFromWishlist;
window.toggleWishlist = toggleWishlist;
window.isInWishlist = isInWishlist;
window.renderWishlistItems = renderWishlistItems;
window.updateWishlistBadge = updateWishlistBadge;
window.updateWishlistButtonUI = updateWishlistButtonUI;
window.clearWishlist = clearWishlist;
window.updateHeartIcon = updateHeartIcon;
window.restoreHeartStates = restoreHeartStates;
window.showClearConfirmationModal = showClearConfirmationModal;
window.closeClearModal = closeClearModal;
window.confirmClearWishlist = confirmClearWishlist;