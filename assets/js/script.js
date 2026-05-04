document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.querySelector('.search-box');

    let boxOn = false;
    // Hide the search box by default
    searchBox.style.display = "none";

    searchIcon.addEventListener('click', () => {
        if(boxOn) {
            searchBox.style.display = "none";
            boxOn = false;
        } else {
            searchBox.style.display = "block";
            boxOn = true;
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            searchBox.style.display = "none";
        }
    });


    const addToCartButtons = document.querySelectorAll('.img-shop a');
    const shoppingCartSpan = document.querySelector('.shopping-cart a span');

    let counter = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            counter++;
            shoppingCartSpan.innerHTML = counter;
        });
    });


    const addToWishList = document.querySelectorAll('.img-shop [aria-label="Add to wishlist"]');

    addToWishList.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

        // Only turn the clicked heart icon red, not all hearts
        const heartIcon = button.querySelector('i');
        if (heartIcon) {
            heartIcon.style.color = 'red';
        }

        let toast = document.getElementById('wishlist-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'wishlist-toast';
            toast.style.display = 'flex';
            toast.style.alignItems = 'center';
            toast.style.gap = '10px';
            toast.style.position = 'fixed';
            toast.style.right = '32px';
            toast.style.bottom = '-60px';
            toast.style.background = 'var(--color-green-500)';
            toast.style.color = '#fff';
            toast.style.padding = '16px 32px';
            toast.style.borderRadius = '30px';
            toast.style.fontWeight = 'bold';
            toast.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            toast.style.zIndex = 10000;
            toast.style.opacity = '0';
            toast.style.transition = 'bottom 0.4s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.25s';
            
            // Create checkmark icon element
            const checkmark = document.createElement('span');
            checkmark.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
            checkmark.style.color = 'var(--color-green-700)';
            checkmark.style.fontSize = '1.2em';
            checkmark.style.marginRight = '8px';

            // Create text element
            const text = document.createElement('span');
            text.innerText = 'Added to wishlist!';

            // Append checkmark and text to toast
            toast.appendChild(checkmark);
            toast.appendChild(text);

            document.body.appendChild(toast);
        }
        
        // Animate the toast in
        setTimeout(() => {
            toast.style.bottom = '32px';
            toast.style.opacity = '1';
        }, 10);
        
        // Animate the toast out after 1.4s
        setTimeout(() => {
            toast.style.bottom = '-60px';
            toast.style.opacity = '0';
        }, 1500);
        })
    })

});