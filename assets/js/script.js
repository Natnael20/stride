// Function to handle product card clicks and redirect to product page
function setupProductRedirects() {
    // Loop through all product IDs from 1 to 16
    for (let i = 1; i <= 16; i++) {
        const productCard = document.getElementById(i.toString());

        if (productCard) {
            // Make the card clickable
            productCard.style.cursor = 'pointer';

            // Add click event listener
            productCard.addEventListener('click', (e) => {
                // Don't redirect if clicking on Shop Now button or Wishlist button
                if (e.target.closest('.img-shop') ||
                    e.target.closest('.btn') ||
                    e.target.closest('[aria-label="Add to wishlist"]')) {
                    e.stopPropagation();
                    return;
                }

                // Redirect to product.html with the product ID
                window.location.href = `product.html?id=${i}`;
            });
        }
    }
}

function searchfunction() {
    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.querySelector('.search-box');
    const searchSection = document.querySelector('.search-section');

    let boxOn = false;
    // Hide the search box by default
    searchBox.style.display = "none";

    searchIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click from bubbling up
        if(boxOn) {
            searchBox.style.display = "none";
            boxOn = false;
        } else {
            searchBox.style.display = "block";
            boxOn = true;
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchSection.contains(e.target)) {
            searchBox.style.display = "none";
            boxOn = false;
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            searchBox.style.display = "none";
            boxOn = false;
        }
    });

    searchBox.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Initialize when page loads - ONLY FOR SHOP PAGE
document.addEventListener('DOMContentLoaded', () => {
    setupProductRedirects();
    searchfunction();
});