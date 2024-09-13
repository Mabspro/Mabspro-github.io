document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    // News Ticker Animation
    const tickerItems = document.querySelectorAll('.ticker-item');
    let currentItem = 0;

    function animateNewsItem() {
        if (tickerItems.length === 0) {
            console.error("No ticker items found.");
            return;
        }

        // Remove active class from all items
        tickerItems.forEach((item) => item.classList.remove('active'));

        // Add active class to current item
        tickerItems[currentItem].classList.add('active');

        // Move to the next item
        currentItem = (currentItem + 1) % tickerItems.length;

        // Loop the animation
        setTimeout(animateNewsItem, 5000); // Change news every 5 seconds
    }

    if (tickerItems.length > 0) {
        animateNewsItem();
    }

    // Update last updated date
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const now = new Date();
        lastUpdatedElement.textContent = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } else {
        console.error("Element with ID 'last-updated' not found.");
    }

    // Add hover effect to indicators and sectors
    const indicators = document.querySelectorAll('.indicator');
    const sectors = document.querySelectorAll('.sector');

    if (indicators.length === 0) {
        console.warn("No indicators found.");
    }

    if (sectors.length === 0) {
        console.warn("No sectors found.");
    }

    // Additional hover effect logic can be added here if needed
});