// Complete Product Database for all 16 shoes
const products = {
    1: {
        id: 1,
        name: "Velocity Runner Pro",
        type: "Running",
        price: 179,
        originalPrice: 218,
        discount: "Save $40",
        rating: 4.9,
        reviewCount: 234,
        description: "Experience the ultimate in running performance with the Velocity Runner Pro. Engineered for speed and comfort, these shoes feature responsive cushioning, breathable mesh upper, and a durable rubber outsole for exceptional traction on any surface.",
        longDescription: "The Velocity Runner Pro represents the pinnacle of running shoe technology. Our team spent over 2 years developing the perfect balance of cushioning and responsiveness. Whether you're training for a marathon or enjoying a casual jog, these shoes provide the support and energy return you need to go the distance.",
        features: [
            "Responsive foam cushioning for maximum energy return",
            "Breathable engineered mesh upper",
            "Durable rubber outsole with strategic traction pattern",
            "Lightweight design at just 8.5 oz",
            "Reflective details for night safety"
        ],
        specifications: [],
        sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13"],
        colors: [
            { name: "Red", code: "#FF5C5C" },
            { name: "Black", code: "#222222" },
            { name: "Blue", code: "#3578e5" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop",
            gallery: [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop",
                "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=1000&fit=crop",
            ]
        },
        inStock: true,
        sku: "VRP-2024-001",
        badge: "BEST SELLER"
    },
    2: {
        id: 2,
        name: "Streetwise Classic",
        type: "Sneakers",
        price: 129,
        originalPrice: 129,
        discount: null,
        rating: 4.8,
        reviewCount: 189,
        description: "Timeless style meets modern comfort. The Streetwise Classic sneakers are designed for everyday wear with premium materials and superior cushioning.",
        longDescription: "Step up your street style with the Streetwise Classic. These sneakers blend retro aesthetics with contemporary comfort technology. The padded collar, arch support, and flexible outsole make them perfect for all-day wear.",
        features: [
            "Premium leather and suede upper",
            "Memory foam insole",
            "Vulcanized rubber outsole",
            "Padded collar and tongue",
            "Classic lace-up closure"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "White", code: "#FFFFFF" },
            { name: "Black", code: "#222222" },
            { name: "Navy", code: "#001f3f" },
            { name: "Gum Brown", code: "#b86b3c" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "SWC-2024-002",
        badge: "BEST SELLER"
    },
    3: {
        id: 3,
        name: "Court Dominator X",
        type: "Basketball",
        price: 199,
        originalPrice: 199,
        discount: null,
        rating: 4.7,
        reviewCount: 156,
        description: "Dominate the court with superior grip, ankle support, and responsive cushioning designed for explosive moves.",
        longDescription: "Take your game to the next level with Court Dominator X. Engineered for basketball players who demand the best in support and responsiveness. The high-top design provides ankle stability while the cushioned midsole absorbs impact on every jump.",
        features: [
            "High-top ankle support",
            "Zoom Air cushioning",
            "Herringbone traction pattern",
            "Reinforced toe cap",
            "Breathable mesh panels"
        ],
        specifications: [],
        sizes: ["8", "9", "10", "11", "12", "13"],
        colors: [
            { name: "Black", code: "#222222" },
            { name: "White", code: "#FFFFFF" },
            { name: "Blue", code: "#3578e5" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "CDX-2024-003",
        badge: "NEW"
    },
    4: {
        id: 4,
        name: "Trail Blazer GTX",
        type: "Boots",
        price: 189,
        originalPrice: 228,
        discount: "17% OFF",
        rating: 4.8,
        reviewCount: 142,
        description: "Conquer any terrain with waterproof protection, rugged traction, and all-day comfort for outdoor adventures.",
        longDescription: "The Trail Blazer GTX is your perfect companion for outdoor exploration. Featuring Gore-Tex waterproofing, aggressive tread pattern, and cushioned support for long hikes.",
        features: [
            "Gore-Tex waterproof membrane",
            "Aggressive lugged outsole",
            "Cushioned EVA midsole",
            "Rock plate protection",
            "Quick-lace system"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "Brown/Olive", code: "#8B5C2A" },
            { name: "Black/Grey", code: "#222222" },
            { name: "Tan", code: "#D2B48C" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "TBG-2024-004",
        badge: "17% OFF"
    },
    5: {
        id: 5,
        name: "Marathon Elite",
        type: "Running",
        price: 249,
        originalPrice: 249,
        discount: null,
        rating: 4.9,
        reviewCount: 98,
        description: "Engineered for marathon runners seeking maximum energy return and lightweight performance.",
        longDescription: "The Marathon Elite is built for speed. Carbon fiber plate, premium foam cushioning, and a breathable upper make this our fastest shoe ever.",
        features: [
            "Carbon fiber propulsion plate",
            "PEBAX foam cushioning",
            "Vaporweave upper",
            "Only 6.7 oz weight",
            "Designed for sub-3 hour marathons"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "Volt/Black", code: "#dfff00" },
            { name: "White", code: "#FFFFFF" },
            { name: "Black", code: "#222222" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=1000&fit=crop",
            gallery: [

            ]
        },
        inStock: true,
        sku: "MRE-2024-005",
        badge: "NEW"
    },
    6: {
        id: 6,
        name: "Cloud 9 Recovery",
        type: "Sandals",
        price: 59,
        originalPrice: 59,
        discount: null,
        rating: 4.8,
        reviewCount: 267,
        description: "Ultimate post-run recovery sandals with cloud-like cushioning and arch support.",
        longDescription: "After a long run, slip into Cloud 9 Recovery sandals. The adaptive cushioning molds to your feet while providing excellent arch support.",
        features: [
            "Dual-density foam footbed",
            "Adjustable straps",
            "Arch support",
            "Machine washable",
            "Zero-drop platform"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "White", code: "#FFFFFF" },
            { name: "Black", code: "#222222" },
            { name: "Grey", code: "#888888" },
            { name: "Coral", code: "#FF7F50" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "C9R-2024-006",
        badge: "NEW"
    },
    7: {
        id: 7,
        name: "Court Legacy Low",
        type: "Sneakers",
        price: 99,
        originalPrice: 99,
        discount: null,
        rating: 4.5,
        reviewCount: 423,
        description: "Classic court-inspired sneakers for everyday style and comfort.",
        longDescription: "The Court Legacy Low brings vintage basketball style to the streets. A timeless silhouette with modern comfort technology.",
        features: [
            "Leather upper",
            "EVA foam midsole",
            "Rubber cupsole",
            "Padded collar",
            "Reinforced toe cap"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "White", code: "#FFFFFF" },
            { name: "Black", code: "#222222" },
            { name: "Red", code: "#FF5C5C" },
            { name: "Blue", code: "#3578e5" },
            { name: "Green", code: "#28a745" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "CLL-2024-007",
        badge: null
    },
    8: {
        id: 8,
        name: "Summit Explorer",
        type: "Boots",
        price: 219,
        originalPrice: 219,
        discount: null,
        rating: 4.7,
        reviewCount: 89,
        description: "Heavy-duty hiking boots designed for extreme terrain and all-day comfort.",
        longDescription: "Summit Explorer boots are built for the toughest trails. Full-grain leather construction and lugged outsoles provide durability and grip.",
        features: [
            "Full-grain leather",
            "Vibram outsole",
            "Waterproof construction",
            "Gusseted tongue",
            "Metal hardware"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "Brown", code: "#8B4513" },
            { name: "Black", code: "#222222" },
            { name: "Dark Grey", code: "#4a4a4a" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "SEX-2024-008",
        badge: "BEST SELLER"
    },
    9: {
        id: 9,
        name: "Aero Glide",
        type: "Running",
        price: 159,
        originalPrice: 159,
        discount: null,
        rating: 4.6,
        reviewCount: 178,
        description: "Lightweight running shoes with responsive cushioning for speed training.",
        longDescription: "The Aero Glide delivers a smooth, energetic ride for daily training. Responsive foam and a breathable upper keep you moving fast.",
        features: [
            "Lightstrike cushioning",
            "Engineered mesh upper",
            "Durable rubber outsole",
            "Reflective overlays"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "Blue", code: "#00CED1" },
            { name: "Black", code: "#222222" },
            { name: "White", code: "#FFFFFF" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "AGL-2024-009",
        badge: "NEW"
    },
    10: {
        id: 10,
        name: "Urban Walker Pro",
        type: "Casual",
        price: 89,
        originalPrice: 99,
        discount: "10% OFF",
        rating: 4.4,
        reviewCount: 312,
        description: "Comfortable everyday walking shoes with memory foam insole and durable construction.",
        longDescription: "Step out in comfort with Urban Walker Pro. Memory foam cushioning and slip-resistant outsoles make these perfect for all-day wear.",
        features: [
            "Memory foam footbed",
            "Slip-resistant outsole",
            "Breathable lining",
            "Padded tongue and collar"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "White", code: "#FFFFFF" },
            { name: "Black", code: "#222222" },
            { name: "Grey", code: "#808080" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "UWP-2024-010",
        badge: "10% OFF"
    },
    11: {
        id: 11,
        name: "Flex Trainer",
        type: "Training",
        price: 119,
        originalPrice: 119,
        discount: null,
        rating: 4.6,
        reviewCount: 245,
        description: "Versatile training shoes for gym workouts, cross-training, and everyday fitness.",
        longDescription: "The Flex Trainer adapts to any workout. Stable base for lifting, flexible forefoot for cardio, and durable construction for indoor/outdoor use.",
        features: [
            "Flat stable sole",
            "Multi-directional grip",
            "Breathable mesh",
            "Heel lockdown"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "Black/Grey", code: "#222222" },
            { name: "White/Red", code: "#FFFFFF" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "FTN-2024-011",
        badge: null
    },
    12: {
        id: 12,
        name: "Trail Runner Pro",
        type: "Trail",
        price: 169,
        originalPrice: 169,
        discount: null,
        rating: 4.7,
        reviewCount: 134,
        description: "Aggressive trail runners with rock plate protection and superior grip on loose terrain.",
        longDescription: "Conquer the trails with Trail Runner Pro. Rock protection, lugged outsoles, and a protective toe cap keep you going on technical terrain.",
        features: [
            "Rock plate protection",
            "4mm lug depth",
            "Toe cap",
            "Gaiter compatible"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "Orange/Black", code: "#FF6600" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "TRP-2024-012",
        badge: "BEST SELLER"
    },
    13: {
        id: 13,
        name: "Comfort Slide",
        type: "Sandals",
        price: 45,
        originalPrice: 55,
        discount: "18% OFF",
        rating: 4.5,
        reviewCount: 567,
        description: "Premium slide sandals for post-workout recovery or casual comfort at home.",
        longDescription: "Slide into comfort with our premium recovery sandals. Soft foam footbed and adjustable straps for a custom fit.",
        features: [
            "Soft foam footbed",
            "Adjustable strap",
            "Lightweight design"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "Black", code: "#222222" },
            { name: "Navy", code: "#001f3f" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "CSL-2024-013",
        badge: "18% OFF"
    },
    14: {
        id: 14,
        name: "Speed Demon",
        type: "Running",
        price: 229,
        originalPrice: 229,
        discount: null,
        rating: 4.8,
        reviewCount: 76,
        description: "Elite racing shoe for competitive runners chasing personal bests.",
        longDescription: "The Speed Demon is our fastest shoe ever. Designed for 5K to marathon distances with maximum energy return.",
        features: [
            "Carbon fiber plate",
            "Supercritical foam",
            "Drag-on outsole"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "Neon Yellow", code: "#CCFF00" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "SDM-2024-014",
        badge: "NEW"
    },
    15: {
        id: 15,
        name: "Lifestyle 001",
        type: "Casual",
        price: 79,
        originalPrice: 79,
        discount: null,
        rating: 4.4,
        reviewCount: 198,
        description: "Minimalist casual sneakers for everyday comfort and style.",
        longDescription: "Clean lines, premium materials, and all-day comfort make Lifestyle 001 your go-to daily sneaker.",
        features: [
            "Canvas upper",
            "Vulcanized sole",
            "Ortholite insole"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "White", code: "#FFFFFF" },
            { name: "Black", code: "#222222" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "LFS-2024-015",
        badge: null
    },
    16: {
        id: 16,
        name: "Winter Boot",
        type: "Boots",
        price: 279,
        originalPrice: 279,
        discount: null,
        rating: 4.9,
        reviewCount: 67,
        description: "Extreme weather boots rated to -30°C with thermal insulation and waterproof protection.",
        longDescription: "Stay warm and dry in the harshest conditions. Winter Boot features Thinsulate insulation, waterproof leather, and aggressive winter tread.",
        features: [
            "Thinsulate insulation",
            "Waterproof leather",
            "Winter rubber compound",
            "Fleece lining"
        ],
        specifications: [],
        sizes: ["7", "8", "9", "10", "11", "12"],
        colors: [
            { name: "Black", code: "#222222" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&h=1000&fit=crop",
            gallery: [
            ]
        },
        inStock: true,
        sku: "WBO-2024-016",
        badge: "BEST SELLER"
    }
};

// Get product ID from URL parameter
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
                            <span class="badge fs-6  rounded-3 p-1 px-3" style="width: auto; height: 30px; background-color: color-mix(in oklab, var(--color-primary-400) 10%, transparent); color: var(--color-primary-400);">${product.type}</span>
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
                        <button class="btn px-5 py-3 fw-bold" style="background: var(--primary); color: white;" onclick="addToCart(${product.id})">
                            <i class="fa fa-shopping-cart me-2"></i> Add to Cart
                        </button>
                        <button class="btn px-4 py-3 border" style="background: transparent; color: var(--primary); border-color: var(--primary);" onclick="addToWishlist(${product.id})">
                            <i class="fa fa-heart-o me-2"></i> Wishlist
                        </button>
                    </div>

                    <div class="mt-4 ">
                        <div class="d-flex justify-content-between align-items-start gap-3" style="border-radius: 1rem; padding: 1rem 1.5rem;" class="d-flex flex-wrap gap-4 align-items-center justify-content-between">
                            <div class="d-flex align-items-center p-3 w-50 " style="background: var(--color-gray-900)">
                                <span class="d-grid">
                                    <span class="text-light ms-3" style="font-size:1.2rem;"><i class="fa fa-truck fs-5 me-2" style="color:var(--color-primary-700);"></i> Free Shipping</span>
                                    <span class="text-secondary small ms-5">On orders over $75</span>
                                </span>
                            </div>
                            <div class="d-flex align-items-center p-3 w-50" style="background: var(--color-gray-900)">
                                <span class="d-grid">
                                    <span class="text-light" style="font-size:1.15rem;"><i class="fa fa-undo me-2" style="color:var(--color-primary-700);"></i> 60-Day Returns</span>
                                    <span class="text-secondary small ms-4">Try it, love it</span>
                                </span>
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

// Global functions for interactions
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
    } else if (tab === 'specs') {
        document.querySelectorAll('.tab-btn')[2].classList.add('active');
        document.getElementById('tab-specs').classList.add('active');
    }
}

window.addToCart = function (productId) {
    const quantity = document.getElementById('quantity-input').value;
    const product = products[productId];
    alert(`Added ${quantity} x ${product.name} to cart!\nSize: ${selectedSize || 'Not selected'}\nColor: ${selectedColor ? 'Selected' : 'Not selected'}`);
}

window.addToWishlist = function (productId) {
    const product = products[productId];
    alert(`${product.name} added to wishlist!`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const productId = getProductIdFromURL();
    renderProduct(productId || 1);
});


