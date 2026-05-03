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
});