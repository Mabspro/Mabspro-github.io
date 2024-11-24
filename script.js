document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");
    console.log(tickerWrapper.innerHTML);


    // Continuous Scrolling News Ticker
    const tickerWrapper = document.querySelector('.ticker-wrapper');
    const tickerItems = document.querySelectorAll('.ticker-item');

    if (tickerItems.length > 0) {
        // Duplicate the ticker items to create an infinite scroll effect
        tickerWrapper.innerHTML += tickerWrapper.innerHTML;

        // Apply smooth scrolling effect using CSS
        tickerWrapper.style.display = "flex";
        tickerWrapper.style.whiteSpace = "nowrap";
        tickerWrapper.style.animation = "tickerScroll 12s linear infinite";
    } else {
        console.error("No ticker items found.");
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
