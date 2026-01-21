// Load listings when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadListings();
});

// Async function to fetch and display listings
async function loadListings() {
    const loading = document.getElementById('loading');
    const errorMessage = document.getElementById('errorMessage');
    const container = document.getElementById('listingsContainer');

    try {
        // Show loading spinner
        loading.classList.remove('d-none');
        errorMessage.classList.add('d-none');

        // Fetch data using AJAX 
        const response = await fetch('data/airbnb_listings2/airbnb_sf_listings_500.json');
        
        // Check if request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse JSON data
        const data = await response.json();
        
        // Get first 50 listings
        const listings = data.slice(0, 50);
        
        // Display listings
        displayListings(listings, container);
        
        // Hide loading spinner
        loading.classList.add('d-none');
        
    } catch (error) {
        console.error('Error loading listings:', error);
        loading.classList.add('d-none');
        errorMessage.classList.remove('d-none');
    }
}

// Function to display listings
function displayListings(listings, container) {
    container.innerHTML = '';
    
    listings.forEach(listing => {
        const card = createListingCard(listing);
        container.appendChild(card);
    });
}

// Function to create a listing card
function createListingCard(listing) {
    // Create column div
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    
    // Extract data with fallbacks
    const name = listing.name || 'Untitled Listing';
    const description = listing.description || listing.summary || 'No description available';
    const price = listing.price || 'N/A';
    const thumbnail = listing.picture_url || listing.thumbnail_url || 'https://via.placeholder.com/400x220?text=No+Image';
    const hostName = listing.host_name || 'Unknown Host';
    const hostPhoto = listing.host_picture_url || listing.host_thumbnail_url || 'https://via.placeholder.com/50?text=Host';
    
    // Parse amenities
    let amenities = [];
    if (listing.amenities) {
        if (typeof listing.amenities === 'string') {
            try {
                amenities = JSON.parse(listing.amenities.replace(/'/g, '"'));
            } catch (e) {
                amenities = listing.amenities.split(',').map(a => a.trim());
            }
        } else if (Array.isArray(listing.amenities)) {
            amenities = listing.amenities;
        }
    }
    
    // Build card HTML 
    col.innerHTML = `
        <div class="card listing-card shadow-sm">
            <img src="${thumbnail}" class="card-img-top listing-image" alt="${escapeHtml(name)}" 
                 onerror="this.src='https://via.placeholder.com/400x220?text=No+Image'">
            <div class="card-body">
                <h5 class="card-title">${escapeHtml(name)}</h5>
                <p class="price-tag mb-3">${price}<small class="text-muted"> /night</small></p>
                <p class="card-text text-muted">${escapeHtml(description.substring(0, 150))}${description.length > 150 ? '...' : ''}</p>
                
                <!-- Host Info -->
                <div class="d-flex align-items-center mb-3 p-2 bg-light rounded">
                    <img src="${hostPhoto}" class="rounded-circle host-photo me-3" alt="${escapeHtml(hostName)}"
                         onerror="this.src='https://via.placeholder.com/50?text=Host'">
                    <div>
                        <small class="text-muted d-block">Hosted by</small>
                        <strong>${escapeHtml(hostName)}</strong>
                    </div>
                </div>
                
                <!-- Amenities -->
                ${amenities.length > 0 ? `
                    <div class="amenities">
                        <h6 class="mb-2">Amenities:</h6>
                        <div class="d-flex flex-wrap gap-2">
                            ${amenities.slice(0, 5).map(amenity => 
                                `<span class="badge bg-secondary amenity-badge">${escapeHtml(amenity)}</span>`
                            ).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    return col;
}

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}