document.addEventListener('DOMContentLoaded', () => {
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
});