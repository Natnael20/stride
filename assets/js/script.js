(() => {
  const productsRoot = document.getElementById("products-root");
  const productCountEl = document.getElementById("product-count");
  const sortSelect = document.getElementById("sort-select");

  const products = [
    { slug: "velocity-runner-pro", name: "Velocity Runner Pro", category: "Running", price: 179, compareAt: 219, discountPct: 18, rating: 4.9, sizes: 12, badges: ["BESTSELLER"], newest: false, featured: 10, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
    { slug: "streetwise-classic", name: "Streetwise Classic", category: "Sneakers", price: 129, compareAt: null, discountPct: null, rating: 4.8, sizes: 12, badges: ["BESTSELLER"], newest: false, featured: 9, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b8aa?w=600&q=80" },
    { slug: "court-dominator-x", name: "Court Dominator X", category: "Basketball", price: 199, compareAt: null, discountPct: null, rating: 4.7, sizes: 11, badges: ["NEW"], newest: true, featured: 5, image: "https://images.unsplash.com/photo-1515524738708-da3278142c71?w=600&q=80" },
    { slug: "trail-blazer-gtx", name: "Trail Blazer GTX", category: "Boots", price: 189, compareAt: 229, discountPct: 17, rating: 4.8, sizes: 12, badges: [], newest: false, featured: 4, image: "https://images.unsplash.com/photo-1605812860427-4024432a70ea?w=600&q=80" },
    { slug: "marathon-elite", name: "Marathon Elite", category: "Running", price: 249, compareAt: null, discountPct: null, rating: 4.9, sizes: 11, badges: ["NEW"], newest: true, featured: 6, image: "https://images.unsplash.com/photo-1595950653106-6c61ebd9439c?w=600&q=80" },
    { slug: "cloud-9-recovery", name: "Cloud 9 Recovery", category: "Sandals", price: 59, compareAt: null, discountPct: null, rating: 4.8, sizes: 8, badges: ["NEW"], newest: true, featured: 3, image: "https://images.unsplash.com/photo-1603487742137-6748d743c6d4?w=600&q=80" },
    { slug: "court-legacy-low", name: "Court Legacy Low", category: "Sneakers", price: 99, compareAt: null, discountPct: null, rating: 4.5, sizes: 12, badges: [], newest: false, featured: 2, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80" },
    { slug: "comfort-walk-daily", name: "Comfort Walk Daily", category: "Casual", price: 89, compareAt: null, discountPct: null, rating: 4.6, sizes: 12, badges: ["BESTSELLER"], newest: false, featured: 8, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80" },
    { slug: "summer-slide-sport", name: "Summer Slide Sport", category: "Sandals", price: 49, compareAt: null, discountPct: null, rating: 4.5, sizes: 8, badges: ["NEW"], newest: true, featured: 1, image: "https://images.unsplash.com/photo-1551107666-ab592d8eab9a?w=600&q=80" },
    { slug: "retro-runner-87", name: "Retro Runner 87", category: "Sneakers", price: 119, compareAt: 149, discountPct: 20, rating: 4.7, sizes: 12, badges: ["BESTSELLER"], newest: false, featured: 7, image: "https://images.unsplash.com/photo-1491553895911-b0056eecad67?w=600&q=80" },
    { slug: "gym-trainer-360", name: "Gym Trainer 360", category: "Running", price: 139, compareAt: null, discountPct: null, rating: 4.6, sizes: 12, badges: [], newest: false, featured: 2, image: "https://images.unsplash.com/photo-1579338559194-a87d943f5c74?w=600&q=80" },
    { slug: "slip-on-lounge", name: "Slip-On Lounge", category: "Casual", price: 69, compareAt: null, discountPct: null, rating: 4.8, sizes: 14, badges: ["BESTSELLER"], newest: false, featured: 8, image: "https://images.unsplash.com/photo-1617606002779-51e8668837c4?w=600&q=80" },
    { slug: "ankle-boot-moto", name: "Ankle Boot Moto", category: "Boots", price: 219, compareAt: 269, discountPct: 19, rating: 4.7, sizes: 11, badges: [], newest: false, featured: 3, image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80" },
    { slug: "high-top-canvas", name: "High-Top Canvas", category: "Sneakers", price: 79, compareAt: null, discountPct: null, rating: 4.6, sizes: 15, badges: ["BESTSELLER"], newest: false, featured: 6, image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80" },
    { slug: "fresh-foam-daily", name: "Fresh Foam Daily", category: "Running", price: 134, compareAt: null, discountPct: null, rating: 4.7, sizes: 12, badges: ["NEW"], newest: true, featured: 4, image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80" },
    { slug: "chelsea-boot-suede", name: "Chelsea Boot Suede", category: "Boots", price: 189, compareAt: null, discountPct: null, rating: 4.8, sizes: 11, badges: [], newest: false, featured: 5, image: "https://images.unsplash.com/photo-1638247025967-b76e04244d9c?w=600&q=80" },
  ];

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function badgesHtml(p) {
    const parts = [];
    if (p.discountPct != null) {
      parts.push(`<span class="badge text-bg-danger">-${escapeHtml(String(p.discountPct))}%</span>`);
    }
    for (const b of p.badges) {
      const variant = b === "NEW" ? "bg-dark" : "text-bg-secondary";
      parts.push(`<span class="badge ${variant}">${escapeHtml(b)}</span>`);
    }
    return parts.length ? `<div class="position-absolute top-0 start-0 m-2 d-flex flex-wrap gap-1">${parts.join("")}</div>` : "";
  }

  function priceHtml(p) {
    const current = `$${escapeHtml(String(p.price))}`;
    const old = p.compareAt != null
      ? ` <span class="text-muted text-decoration-line-through small">${escapeHtml(`$${p.compareAt}`)}</span>`
      : "";
    return `<div class="fw-semibold mt-2">${current}${old}</div>`;
  }

  function productCard(p) {
    const href = `https://solestyle-colorlib.pages.dev/products/${encodeURIComponent(p.slug)}`;
    return `
<div class="col-12 col-sm-6 col-lg-3" role="listitem">
  <article class="card product-card position-relative h-100 border-0 shadow-sm">
    <a href="${escapeHtml(href)}" class="stretched-link z-2" aria-label="${escapeHtml(p.name)}"></a>
    <div class="position-relative overflow-hidden rounded-top bg-light ratio ratio-1x1">
      <img class="object-fit-cover product-card__img h-100 w-100" src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)} — ${escapeHtml(p.category)}" loading="lazy" width="600" height="600">
      ${badgesHtml(p)}
      <button type="button" class="btn btn-dark btn-sm position-absolute bottom-0 end-0 m-2 add-to-cart shadow-sm z-3" data-product-slug="${escapeHtml(p.slug)}">
        Add to Cart
      </button>
    </div>
    <div class="card-body pt-4">
      <p class="text-secondary text-uppercase small mb-1">${escapeHtml(p.category)}</p>
      <h2 class="h6 card-title fw-semibold mb-1">${escapeHtml(p.name)}</h2>
      <div class="d-flex align-items-center gap-2 text-warning small mb-1" aria-label="Rating ${p.rating} out of 5">
        <i class="fa-solid fa-star" aria-hidden="true"></i>
        <span class="text-body">${escapeHtml(String(p.rating))}</span>
      </div>
      ${priceHtml(p)}
      <p class="text-secondary small mb-0 mt-2">${escapeHtml(String(p.sizes))} sizes available</p>
    </div>
  </article>
</div>`;
  }

  function sortList(list, mode) {
    const copy = [...list];
    switch (mode) {
      case "price-asc":
        return copy.sort((a, b) => a.price - b.price);
      case "price-desc":
        return copy.sort((a, b) => b.price - a.price);
      case "rating":
        return copy.sort((a, b) => b.rating - a.rating);
      case "newest":
        return copy.sort((a, b) => Number(b.newest) - Number(a.newest));
      default:
        return copy.sort((a, b) => b.featured - a.featured);
    }
  }

  function renderInline(list) {
    const sorted = sortList(list, sortSelect.value);
    productsRoot.innerHTML = sorted.map(productCard).join("");
    productCountEl.textContent = String(sorted.length);
  }

  sortSelect?.addEventListener("change", () => renderInline(products));

  productsRoot?.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    btn.classList.toggle("btn-success");
  });

  renderInline(products);
})();
