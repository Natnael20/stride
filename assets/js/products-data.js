// products-data.js
export const products = {
    1: {
        id: 1,
        name: "Nike Free RN Flyknit",
        type: "Running",
        price: 150,
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
            { name: "Red", code: "oklch(63.7% .237 25.331)" },
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
        name: "Carhartt WIP x Nike Air Force 1 Low",
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
            gallery: []
        },
        inStock: true,
        sku: "SWC-2024-002",
        badge: "BEST SELLER"
    },
    3: {
        id: 3,
        name: "Nike Air Force 1",
        type: "Sneakers",
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
            gallery: []
        },
        inStock: true,
        sku: "CDX-2024-003",
        badge: "NEW"
    },
    4: {
        id: 4,
        name: "Timberland Men's Earthkeepers Original 6-inch Boot",
        type: "Boots",
        price: 160,
        originalPrice: 160,
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
            { name: "Black/Grey", code: "linear-gradient(135deg, #222 50%, #bbb 50%)" },
            { name: "Tan", code: "#D2B48C" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&h=1000&fit=crop",
            gallery: []
        },
        inStock: true,
        sku: "TBG-2024-004",
        badge: "17% OFF"
    },
    5: {
        id: 5,
        name: "Nike SuperRep Go",
        type: "Running",
        price: 100,
        originalPrice: 100,
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
            { name: "Volt/Black", code: "linear-gradient(135deg, #dfff00 50%, #000 50%)" },
            { name: "White", code: "#FFFFFF" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=1000&fit=crop",
            gallery: []
        },
        inStock: true,
        sku: "MRE-2024-005",
        badge: "NEW"
    },
    6: {
        id: 6,
        name: "Adidas Originals Deerupt Runner",
        type: "Sandals",
        price: 120,
        originalPrice: 120,
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
            gallery: []
        },
        inStock: true,
        sku: "C9R-2024-006",
        badge: "NEW"
    },
    7: {
        id: 7,
        name: "Nike SB Dunk High",
        type: "Sneakers",
        price: 110,
        originalPrice: 110,
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
            gallery: []
        },
        inStock: true,
        sku: "CLL-2024-007",
        badge: null
    },
    8: {
        id: 8,
        name: "Vans Old Skool Sneaker",
        type: "Sneaker",
        price: 70,
        originalPrice: 70,
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
            { name: "Gum/Brown", code: "#b86b3c" },
            { name: "Black", code: "#222222" },
            { name: "Dark Grey", code: "linear-gradient(135deg, #222 50%, #bbb 50%)" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=1000&fit=crop",
            gallery: []
        },
        inStock: true,
        sku: "SEX-2024-008",
        badge: "BEST SELLER"
    },
    9: {
        id: 9,
        name: "Two Strap slide sandal",
        type: "Sandels",
        price: 50,
        originalPrice: 50,
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
            { name: "Dark Turquoise", code: "#00CED1" },
            { name: "Black", code: "#222222" },
            { name: "White", code: "#FFFFFF" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&h=1000&fit=crop",
            gallery: []
        },
        inStock: true,
        sku: "AGL-2024-009",
        badge: "NEW"
    },
    10: {
        id: 10,
        name: "Nike Air Force 1 Shado Pastel",
        type: "Training",
        price: 210,
        originalPrice: 210,
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
            gallery: []
        },
        inStock: true,
        sku: "UWP-2024-010",
        badge: "10% OFF"
    },
    11: {
        id: 11,
        name: "Puma Court Star",
        type: "Puma",
        price: 99,
        originalPrice: 99,
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
            { name: "Black", code: "#222222" },
            { name: "White", code: "#FFFFFF" },
            { name: "Coral", code: "#FF7F50" },
            { name: "Grey", code: "#888" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=1000&fit=crop",
            gallery: []
        },
        inStock: true,
        sku: "FTN-2024-011",
        badge: null
    },
    12: {
        id: 12,
        name: "Addidas Yeezy Boost 350 V2",
        type: "yeezy",
        price: 220,
        originalPrice: 220,
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
            { name: "Coral", code: "#FF6600" },
            { name: "black", code: "#222222" },
            { name: "Red", code: "#FF5C5C" },
            { name: "Blue", code: "#3578e5" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=800&h=1000&fit=crop",
            gallery: []
        },
        inStock: true,
        sku: "TRP-2024-012",
        badge: "BEST SELLER"
    },
    13: {
        id: 13,
        name: "Captain Lace-Up Boot",
        type: "Boot",
        price: 199,
        originalPrice: 199,
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
            { name: "Tan", code: "#D2B48C" },
            { name: "Navy", code: "#001f3f" },
            { name: "Black", code: "#222" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&h=1000&fit=crop",
            gallery: []
        },
        inStock: true,
        sku: "CSL-2024-013",
        badge: "18% OFF"
    },
    14: {
        id: 14,
        name: "Converse CHuch Taylor All star High Tops",
        type: "Running",
        price: 80,
        originalPrice: 80,
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
            { name: "white", code: "#fff" },
            { name: "Black", code: "#222" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800&h=1000&fit=crop",
            gallery: []
        },
        inStock: true,
        sku: "SDM-2024-014",
        badge: "NEW"
    },
    15: {
        id: 15,
        name: "Nike Air Max 1 Ultra",
        type: "Sneakers",
        price: 150,
        originalPrice: 150,
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
            { name: "blue", code: "#3578e5" },
            { name: "Red", code: "oklch(63.7% .237 25.331)" },
            { name: "Black", code: "#222222" },
            { name: "Navy", code: "#001f3f" },
            { name: "Grey", code: "#888" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=1000&fit=crop",
            gallery: []
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
            { name: "Black", code: "#222222" },
            { name: "Gum Brown", code: "#b86b3c" },
            { name: "Grey", code: "#888" }
        ],
        images: {
            main: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800&h=1000&fit=crop",
            gallery: []
        },
        inStock: true,
        sku: "WBO-2024-016",
        badge: "BEST SELLER"
    }
};