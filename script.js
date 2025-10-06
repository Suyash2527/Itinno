const appData = {
  destinations: [
    {
      id: 1,
      name: "Goa Paradise",
      state: "Goa",
      category: "Beach",
      description: "Experience pristine beaches, vibrant nightlife, and Portuguese heritage in India's favorite coastal destination.",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop&q=80",
      price: 15000,
      rating: 4.8,
      duration: "4-7 days",
      bestTime: "Nov-Mar",
      highlights: ["Pristine Beaches", "Nightlife", "Portuguese Heritage", "Water Sports", "Seafood"],
      activities: ["Beach hopping", "Water sports", "Fort visits", "Casino nights", "Spice plantation tours"],
      visits: 1250,
      featured: true
    },
    {
      id: 2,
      name: "Rajasthan Royalty",
      state: "Rajasthan", 
      category: "Historical",
      description: "Discover the land of maharajas with majestic palaces, desert landscapes, and rich cultural heritage.",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop&q=80",
      price: 22000,
      rating: 4.7,
      duration: "7-12 days",
      bestTime: "Oct-Mar",
      highlights: ["Royal Palaces", "Desert Safari", "Cultural Heritage", "Folk Music", "Handicrafts"],
      activities: ["Palace tours", "Desert safari", "Camel rides", "Folk performances", "Shopping"],
      visits: 980,
      featured: true
    },
    {
      id: 3,
      name: "Kerala Backwaters",
      state: "Kerala",
      category: "Nature",
      description: "Experience God's Own Country with serene backwaters, lush greenery, and Ayurvedic wellness.",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop&q=80",
      price: 18000,
      rating: 4.9,
      duration: "5-8 days", 
      bestTime: "Oct-Mar",
      highlights: ["Backwaters", "Ayurveda", "Spice Gardens", "Houseboats", "Tea Plantations"],
      activities: ["Houseboat cruise", "Ayurvedic treatments", "Spice tours", "Kathakali shows", "Beach visits"],
      visits: 1100,
      featured: true
    },
    {
      id: 4,
      name: "Himachal Hills",
      state: "Himachal Pradesh",
      category: "Mountain", 
      description: "Escape to mountain paradise with hill stations, adventure activities, and pristine nature.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
      price: 16000,
      rating: 4.6,
      duration: "5-9 days",
      bestTime: "Apr-Jun, Sep-Nov",
      highlights: ["Snow-capped Mountains", "Adventure Sports", "Hill Stations", "Apple Orchards"],
      activities: ["Trekking", "Paragliding", "Temple visits", "Hill station tours", "River rafting"],
      visits: 850,
      featured: false
    },
    {
      id: 5,
      name: "Kashmir Valley",
      state: "Jammu & Kashmir",
      category: "Mountain",
      description: "Discover paradise on Earth with stunning valleys, pristine lakes, and snow-capped peaks.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80",
      price: 25000,
      rating: 4.8,
      duration: "6-10 days",
      bestTime: "Apr-Oct", 
      highlights: ["Dal Lake", "Mughal Gardens", "Valleys", "Houseboats", "Skiing"],
      activities: ["Shikara rides", "Valley tours", "Garden visits", "Trekking", "Shopping"],
      visits: 720,
      featured: false
    },
    {
      id: 6,
      name: "Golden Triangle",
      state: "Multiple States",
      category: "Historical",
      description: "Experience India's most iconic destinations: Delhi, Agra, and Jaipur in one amazing journey.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop&q=80",
      price: 20000,
      rating: 4.7,
      duration: "7-10 days",
      bestTime: "Oct-Mar",
      highlights: ["Taj Mahal", "Red Fort", "Hawa Mahal", "India Gate", "Qutub Minar"],
      activities: ["Monument tours", "Cultural shows", "Shopping", "Food tours", "Photography"],
      visits: 1500,
      featured: true
    },
    {
      id: 7,
      name: "Spiritual Rishikesh",
      state: "Uttarakhand",
      category: "Spiritual",
      description: "Find inner peace at the Yoga Capital of the World, nestled in the foothills of the Himalayas.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&q=80",
      price: 12000,
      rating: 4.5,
      duration: "4-6 days",
      bestTime: "Oct-Apr",
      highlights: ["Yoga Retreats", "River Ganges", "Temples", "Meditation", "Adventure Sports"],
      activities: ["Yoga classes", "River rafting", "Temple visits", "Meditation", "Bungee jumping"],
      visits: 920,
      featured: false
    },
    {
      id: 8,
      name: "Andaman Islands",
      state: "Andaman & Nicobar",
      category: "Beach",
      description: "Tropical paradise with crystal clear waters, coral reefs, and pristine beaches.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
      price: 35000,
      rating: 4.9,
      duration: "7-10 days",
      bestTime: "Oct-May",
      highlights: ["Coral Reefs", "Scuba Diving", "Pristine Beaches", "Seafood", "Water Sports"],
      activities: ["Scuba diving", "Snorkeling", "Beach hopping", "Island tours", "Water sports"],
      visits: 650,
      featured: true
    }
  ],

  hotels: [
    {
      id: 1,
      name: "Taj Lake Palace, Udaipur",
      location: "Udaipur, Rajasthan",
      description: "Floating marble palace on Lake Pichola, offering royal luxury and stunning lake views.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&q=80",
      pricePerNight: 25000,
      rating: 4.9,
      amenities: ["Lake View", "Spa", "Fine Dining", "Butler Service", "Palace Tours", "WiFi"],
      roomTypes: [
        {"name": "Palace Room", "price": 25000, "capacity": 2},
        {"name": "Luxury Suite", "price": 45000, "capacity": 4},
        {"name": "Royal Suite", "price": 75000, "capacity": 6}
      ],
      featured: true
    },
    {
      id: 2,
      name: "The Leela Goa Beach Resort",
      location: "Goa",
      description: "Luxury beachfront resort with Portuguese architecture and world-class amenities.",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop&q=80",
      pricePerNight: 18000,
      rating: 4.7,
      amenities: ["Beach Access", "Pool", "Spa", "Multiple Restaurants", "Water Sports", "WiFi"],
      roomTypes: [
        {"name": "Ocean View", "price": 18000, "capacity": 2},
        {"name": "Beach Villa", "price": 32000, "capacity": 4}
      ],
      featured: true
    },
    {
      id: 3,
      name: "Wildflower Hall Shimla",
      location: "Shimla, Himachal Pradesh",
      description: "Former residence of Lord Kitchener, offering luxury in the heart of the Himalayas.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&q=80",
      pricePerNight: 22000,
      rating: 4.6,
      amenities: ["Mountain View", "Spa", "Adventure Sports", "Fireplace", "Library", "WiFi"],
      roomTypes: [
        {"name": "Mountain Room", "price": 22000, "capacity": 2},
        {"name": "Valley Suite", "price": 35000, "capacity": 4}
      ],
      featured: true
    },
    {
      id: 4,
      name: "Oberoi Mumbai",
      location: "Mumbai, Maharashtra",
      description: "Luxury hotel in the heart of Mumbai with panoramic views of the Arabian Sea.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop&q=80",
      pricePerNight: 28000,
      rating: 4.8,
      amenities: ["Sea View", "Business Center", "Spa", "Fine Dining", "Gym", "WiFi"],
      roomTypes: [
        {"name": "Deluxe Room", "price": 28000, "capacity": 2},
        {"name": "Executive Suite", "price": 45000, "capacity": 4}
      ],
      featured: false
    },
    {
      id: 5,
      name: "ITC Grand Chola Chennai",
      location: "Chennai, Tamil Nadu", 
      description: "Magnificent luxury hotel inspired by the grandeur of the Chola dynasty.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&q=80",
      pricePerNight: 20000,
      rating: 4.5,
      amenities: ["Pool", "Spa", "Multiple Restaurants", "Business Center", "Gym", "WiFi"],
      roomTypes: [
        {"name": "Luxury Room", "price": 20000, "capacity": 2},
        {"name": "Royal Suite", "price": 38000, "capacity": 4}
      ],
      featured: false
    },
    {
      id: 6,
      name: "The Imperial New Delhi",
      location: "New Delhi",
      description: "Historic luxury hotel in the heart of Delhi, blending colonial charm with modern elegance.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&q=80",
      pricePerNight: 24000,
      rating: 4.6,
      amenities: ["Heritage Charm", "Spa", "Fine Dining", "Business Center", "Garden", "WiFi"],
      roomTypes: [
        {"name": "Imperial Room", "price": 24000, "capacity": 2},
        {"name": "Heritage Suite", "price": 42000, "capacity": 4}
      ],
      featured: true
    }
  ],

  socialPosts: [
    {
      id: 1,
      author: "Priya Sharma",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b6d4f2e8?w=60&h=60&fit=crop&q=80",
      title: "Magical Sunrise at Taj Mahal",
      content: "Woke up at 5 AM to witness this incredible sunrise at the Taj Mahal. The golden light on the marble is absolutely breathtaking! ✨ A bucket list moment that exceeded all expectations.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop&q=80",
      destination: "Golden Triangle",
      tags: ["TajMahal", "Sunrise", "GoldenTriangle", "Incredible"],
      likes: 142,
      comments: 23,
      timeAgo: "2 hours ago",
      liked: false
    },
    {
      id: 2, 
      author: "Ravi Kumar",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&q=80",
      title: "Kerala Backwater Bliss",
      content: "Three days on the backwaters of Kerala and I'm completely mesmerized! 🛶 The serenity, the food, the hospitality - everything is perfect. Already planning my next trip to God's Own Country!",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop&q=80",
      destination: "Kerala Backwaters",
      tags: ["Kerala", "Backwaters", "Houseboat", "Peace"],
      likes: 89,
      comments: 15,
      timeAgo: "5 hours ago",
      liked: true
    },
    {
      id: 3,
      author: "Anjali Patel",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&q=80",
      title: "Rajasthan Desert Adventure",
      content: "Just completed an amazing camel safari in the Thar Desert! 🐪 Sleeping under the stars, folk music by the campfire, and the most incredible sunset views. Rajasthan truly is magical!",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop&q=80",
      destination: "Rajasthan Royalty",
      tags: ["Rajasthan", "Desert", "Camel", "Adventure"],
      likes: 156,
      comments: 31,
      timeAgo: "8 hours ago",
      liked: false
    },
    {
      id: 4,
      author: "Vikram Singh",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&q=80",
      title: "Goa Beach Vibes",
      content: "Nothing beats the laid-back vibes of Goa! 🏖️ Perfect beaches, amazing seafood, and the most relaxed atmosphere. Spent the whole day doing absolutely nothing and loved every minute!",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=400&fit=crop&q=80",
      destination: "Goa Paradise",
      tags: ["Goa", "Beach", "Relaxation", "Paradise"],
      likes: 78,
      comments: 12,
      timeAgo: "1 day ago",
      liked: true
    },
    {
      id: 5,
      author: "Meera Jain",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&q=80",
      title: "Spiritual Journey in Rishikesh",
      content: "Found my inner peace at the Yoga Capital of the World! 🕉️ Morning yoga by the Ganges, evening aarti, and the most spiritual atmosphere. Rishikesh is truly transformative.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop&q=80",
      destination: "Spiritual Rishikesh",
      tags: ["Rishikesh", "Yoga", "Spiritual", "Ganges"],
      likes: 92,
      comments: 18,
      timeAgo: "2 days ago",
      liked: false
    }
  ]
};

// Application State
let appState = {
  currentUser: null,
  currentSection: 'home',
  isNavOpen: false,
  userBookings: [],
  userItineraries: [],
  userPosts: []
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setMinDate();
});

// Initialize the application
function initializeApp() {
  renderDestinations();
  renderHotels();
  renderSocialPosts();
  showSection('home');
  
  // Check if user is logged in (simulate with localStorage)
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    appState.currentUser = JSON.parse(savedUser);
    updateUIForLoggedInUser();
  }
  
  // Initialize event listeners
  initializeEventListeners();
}

// Set minimum date for date inputs
function setMinDate() {
  const today = new Date().toISOString().split('T')[0];
  const startDateInput = document.getElementById('startDate');
  if (startDateInput) {
    startDateInput.min = today;
    startDateInput.value = today; // Set default value to today
  }
  
  // Also set min date for booking modals when they're created
  document.addEventListener('input', function(e) {
    if (e.target.type === 'date' && e.target.name === 'travelDate') {
      e.target.min = today;
    }
    if (e.target.type === 'date' && (e.target.name === 'checkinDate' || e.target.name === 'checkoutDate')) {
      e.target.min = today;
    }
  });
}

// Initialize event listeners
function initializeEventListeners() {
  // Close modals when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
      closeAllModals();
    }
  });

  // Escape key to close modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Prevent form submissions from reloading page
  document.addEventListener('submit', function(e) {
    e.preventDefault();
  });
}

// Section Navigation
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    appState.currentSection = sectionId;
    
    // Update navigation active state
    updateNavigation();
    
    // Special handling for dashboard
    if (sectionId === 'dashboard') {
      renderDashboard();
    }
  }
  
  // Close mobile nav if open
  if (appState.isNavOpen) {
    toggleNav();
  }
}

function updateNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`a[href="#${appState.currentSection}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Mobile Navigation
function toggleNav() {
  appState.isNavOpen = !appState.isNavOpen;
  const navMenu = document.getElementById('navMenu');
  
  if (appState.isNavOpen) {
    navMenu.classList.add('active');
  } else {
    navMenu.classList.remove('active');
  }
}

// Destinations
function renderDestinations() {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;

  const destinationsToShow = appData.destinations.filter(dest => dest.featured);
  
  grid.innerHTML = destinationsToShow.map(destination => `
    <div class="destination-card" onclick="showDestinationDetails(${destination.id})">
      <div class="destination-image" style="background-image: url('${destination.image}')">
        <div class="category-badge">${destination.category}</div>
      </div>
      <div class="destination-content">
        <div class="destination-header">
          <h3 class="destination-title">${destination.name}</h3>
          <div class="destination-price">₹${destination.price.toLocaleString()}</div>
        </div>
        <p class="destination-description">${destination.description}</p>
        <div class="destination-meta">
          <div class="rating">
            <span>⭐ ${destination.rating}</span>
            <span>•</span>
            <span>${destination.duration}</span>
          </div>
          <div class="visits">${destination.visits}+ travelers</div>
        </div>
      </div>
    </div>
  `).join('');
}

function filterDestinations(category) {
  // Update active filter tab
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.target.classList.add('active');
  
  const grid = document.getElementById('destinationsGrid');
  let destinationsToShow;
  
  if (category === 'all') {
    destinationsToShow = appData.destinations;
  } else {
    destinationsToShow = appData.destinations.filter(dest => dest.category === category);
  }
  
  grid.innerHTML = destinationsToShow.map(destination => `
    <div class="destination-card" onclick="showDestinationDetails(${destination.id})">
      <div class="destination-image" style="background-image: url('${destination.image}')">
        <div class="category-badge">${destination.category}</div>
      </div>
      <div class="destination-content">
        <div class="destination-header">
          <h3 class="destination-title">${destination.name}</h3>
          <div class="destination-price">₹${destination.price.toLocaleString()}</div>
        </div>
        <p class="destination-description">${destination.description}</p>
        <div class="destination-meta">
          <div class="rating">
            <span>⭐ ${destination.rating}</span>
            <span>•</span>
            <span>${destination.duration}</span>
          </div>
          <div class="visits">${destination.visits}+ travelers</div>
        </div>
      </div>
    </div>
  `).join('');
}

function showDestinationDetails(destinationId) {
  const destination = appData.destinations.find(dest => dest.id === destinationId);
  if (!destination) return;
  
  const today = new Date().toISOString().split('T')[0];
  
  const modalContent = `
    <form class="auth-form" onsubmit="initiateDestinationBooking(event, ${destination.id})">
      <div style="margin-bottom: 20px;">
        <img src="${destination.image}" alt="${destination.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <div>
            <div class="category-badge" style="position: static; margin-bottom: 8px;">${destination.category}</div>
            <div style="color: var(--color-text-secondary);">${destination.state}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary);">₹${destination.price.toLocaleString()}</div>
            <div style="color: var(--color-text-secondary);">per person</div>
          </div>
        </div>
        <p style="margin-bottom: 20px; line-height: 1.6;">${destination.description}</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
          <div><strong>Duration:</strong> ${destination.duration}</div>
          <div><strong>Best Time:</strong> ${destination.bestTime}</div>
          <div><strong>Rating:</strong> ⭐ ${destination.rating}</div>
          <div><strong>Travelers:</strong> ${destination.visits}+</div>
        </div>
        <div style="margin-bottom: 20px;">
          <strong>Highlights:</strong>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
            ${destination.highlights.map(highlight => `
              <span style="background: var(--color-secondary); padding: 4px 12px; border-radius: 20px; font-size: 12px;">${highlight}</span>
            `).join('')}
          </div>
        </div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Travel Date</label>
        <input type="date" class="form-control" name="travelDate" min="${today}" required>
      </div>
      <div class="form-group">
        <label class="form-label">Number of Travelers</label>
        <select class="form-control" name="travelers" required>
          <option value="">Select...</option>
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
          <option value="5+">5+ People</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Special Requests</label>
        <textarea class="form-control" name="requests" rows="3" placeholder="Any special requirements or preferences..."></textarea>
      </div>
      <button type="submit" class="btn btn--primary btn--full-width">Book This Destination</button>
    </form>
  `;
  
  document.getElementById('bookingModalTitle').textContent = `Book ${destination.name}`;
  document.getElementById('bookingModalContent').innerHTML = modalContent;
  openModal('bookingModal');
}

// Hotels
function renderHotels() {
  const grid = document.getElementById('hotelsGrid');
  if (!grid) return;

  const hotelsToShow = appData.hotels.filter(hotel => hotel.featured);
  
  grid.innerHTML = hotelsToShow.map(hotel => `
    <div class="hotel-card" onclick="showHotelDetails(${hotel.id})">
      <div class="hotel-image" style="background-image: url('${hotel.image}')">
        <div class="hotel-rating">⭐ ${hotel.rating}</div>
      </div>
      <div class="hotel-content">
        <div class="hotel-header">
          <h3 class="hotel-name">${hotel.name}</h3>
          <p class="hotel-location">📍 ${hotel.location}</p>
        </div>
        <div class="hotel-price">₹${hotel.pricePerNight.toLocaleString()}/night</div>
        <p style="color: var(--color-text-secondary); font-size: 14px; margin-bottom: 16px;">${hotel.description}</p>
        <div class="amenities">
          ${hotel.amenities.slice(0, 4).map(amenity => `
            <span class="amenity-tag">${amenity}</span>
          `).join('')}
          ${hotel.amenities.length > 4 ? `<span class="amenity-tag">+${hotel.amenities.length - 4} more</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function filterHotels() {
  const locationFilter = document.getElementById('locationFilter').value;
  const priceFilter = document.getElementById('priceFilter').value;
  
  let filteredHotels = appData.hotels;
  
  // Filter by location
  if (locationFilter !== 'all') {
    filteredHotels = filteredHotels.filter(hotel => 
      hotel.location.includes(locationFilter)
    );
  }
  
  // Filter by price
  if (priceFilter !== 'all') {
    if (priceFilter === '15000-20000') {
      filteredHotels = filteredHotels.filter(hotel => 
        hotel.pricePerNight >= 15000 && hotel.pricePerNight <= 20000
      );
    } else if (priceFilter === '20000-25000') {
      filteredHotels = filteredHotels.filter(hotel => 
        hotel.pricePerNight >= 20000 && hotel.pricePerNight <= 25000
      );
    } else if (priceFilter === '25000+') {
      filteredHotels = filteredHotels.filter(hotel => 
        hotel.pricePerNight >= 25000
      );
    }
  }
  
  const grid = document.getElementById('hotelsGrid');
  grid.innerHTML = filteredHotels.map(hotel => `
    <div class="hotel-card" onclick="showHotelDetails(${hotel.id})">
      <div class="hotel-image" style="background-image: url('${hotel.image}')">
        <div class="hotel-rating">⭐ ${hotel.rating}</div>
      </div>
      <div class="hotel-content">
        <div class="hotel-header">
          <h3 class="hotel-name">${hotel.name}</h3>
          <p class="hotel-location">📍 ${hotel.location}</p>
        </div>
        <div class="hotel-price">₹${hotel.pricePerNight.toLocaleString()}/night</div>
        <p style="color: var(--color-text-secondary); font-size: 14px; margin-bottom: 16px;">${hotel.description}</p>
        <div class="amenities">
          ${hotel.amenities.slice(0, 4).map(amenity => `
            <span class="amenity-tag">${amenity}</span>
          `).join('')}
          ${hotel.amenities.length > 4 ? `<span class="amenity-tag">+${hotel.amenities.length - 4} more</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function showHotelDetails(hotelId) {
  const hotel = appData.hotels.find(h => h.id === hotelId);
  if (!hotel) return;
  
  const today = new Date().toISOString().split('T')[0];
  
  const modalContent = `
    <form class="auth-form" onsubmit="initiateHotelBooking(event, ${hotel.id})">
      <div style="margin-bottom: 20px;">
        <img src="${hotel.image}" alt="${hotel.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <div>
            <h4 style="margin: 0;">${hotel.name}</h4>
            <div style="color: var(--color-text-secondary);">📍 ${hotel.location}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary);">₹${hotel.pricePerNight.toLocaleString()}</div>
            <div style="color: var(--color-text-secondary);">per night</div>
          </div>
        </div>
        <p style="margin-bottom: 20px; line-height: 1.6;">${hotel.description}</p>
        <div style="margin-bottom: 20px;">
          <strong>Amenities:</strong>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
            ${hotel.amenities.map(amenity => `
              <span style="background: var(--color-secondary); padding: 4px 12px; border-radius: 20px; font-size: 12px;">${amenity}</span>
            `).join('')}
          </div>
        </div>
        <div style="margin-bottom: 20px;">
          <strong>Room Types:</strong>
          <div style="margin-top: 8px;">
            ${hotel.roomTypes.map(room => `
              <div style="display: flex; justify-content: space-between; padding: 8px; background: var(--color-bg-1); border-radius: 4px; margin-bottom: 4px;">
                <span>${room.name} (${room.capacity} guests)</span>
                <span style="font-weight: bold;">₹${room.price.toLocaleString()}/night</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Check-in Date</label>
          <input type="date" class="form-control" name="checkinDate" min="${today}" required>
        </div>
        <div class="form-group">
          <label class="form-label">Check-out Date</label>
          <input type="date" class="form-control" name="checkoutDate" min="${today}" required>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Room Type</label>
        <select class="form-control" name="roomType" required>
          <option value="">Select room type...</option>
          ${hotel.roomTypes.map(room => `
            <option value="${room.name}">${room.name} - ₹${room.price.toLocaleString()}/night</option>
          `).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Number of Guests</label>
        <select class="form-control" name="guests" required>
          <option value="">Select...</option>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Special Requests</label>
        <textarea class="form-control" name="requests" rows="3" placeholder="Any special requirements..."></textarea>
      </div>
      <button type="submit" class="btn btn--primary btn--full-width">Book This Hotel</button>
    </form>
  `;
  
  document.getElementById('bookingModalTitle').textContent = `Book ${hotel.name}`;
  document.getElementById('bookingModalContent').innerHTML = modalContent;
  openModal('bookingModal');
}

// AI Planner
function generateItinerary(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const plannerData = {
    destination: formData.get('plannerDestination') || document.getElementById('plannerDestination').value,
    startDate: formData.get('startDate') || document.getElementById('startDate').value,
    duration: parseInt(formData.get('duration') || document.getElementById('duration').value),
    budget: formData.get('budget') || document.getElementById('budget').value,
    travelStyle: formData.get('travelStyle') || document.getElementById('travelStyle').value,
    groupSize: formData.get('groupSize') || document.getElementById('groupSize').value
  };
  
  // Validate required fields
  if (!plannerData.destination || !plannerData.startDate || !plannerData.duration || !plannerData.budget || !plannerData.travelStyle || !plannerData.groupSize) {
    showToast('Please fill in all required fields');
    return;
  }
  
  // Show loading state
  document.getElementById('loadingState').classList.remove('hidden');
  document.getElementById('itineraryDisplay').classList.add('hidden');
  
  // Simulate AI processing
  setTimeout(() => {
    const itinerary = generateAIItinerary(plannerData);
    displayItinerary(itinerary);
    
    document.getElementById('loadingState').classList.add('hidden');
    document.getElementById('itineraryDisplay').classList.remove('hidden');
  }, 3000);
}

function generateAIItinerary(plannerData) {
  const destinationMap = {
    'rajasthan': 'Rajasthan Royal Experience',
    'kerala': 'Kerala Backwaters Journey',
    'goa': 'Goa Beach Paradise',
    'golden-triangle': 'Golden Triangle Heritage',
    'kashmir': 'Kashmir Valley Paradise',
    'himachal': 'Himachal Adventure'
  };
  
  const title = destinationMap[plannerData.destination] || 'Incredible India Experience';
  const budget = plannerData.budget.includes('+') ? 
    parseInt(plannerData.budget.replace(/[^\d]/g, '')) : 
    parseInt(plannerData.budget.split('-')[1]);
  
  // Generate sample itinerary based on Rajasthan template
  const itinerary = {
    title: `${plannerData.duration}-Day ${title}`,
    duration: plannerData.duration,
    totalCost: Math.min(budget, budget * 0.9),
    travelStyle: plannerData.travelStyle,
    groupSize: plannerData.groupSize,
    days: []
  };
  
  // Generate days
  for (let i = 1; i <= plannerData.duration; i++) {
    const day = {
      day: i,
      date: new Date(new Date(plannerData.startDate).getTime() + (i-1) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      activities: generateDayActivities(plannerData.destination, i, plannerData.travelStyle),
      totalCost: Math.floor(budget / plannerData.duration)
    };
    itinerary.days.push(day);
  }
  
  return itinerary;
}

function generateDayActivities(destination, dayNumber, travelStyle) {
  const activityTemplates = {
    'rajasthan': [
      { time: '09:00 AM', name: 'Hawa Mahal Visit', cost: 200 },
      { time: '02:00 PM', name: 'City Palace Tour', cost: 300 },
      { time: '05:00 PM', name: 'Local Markets', cost: 500 },
      { time: '08:00 AM', name: 'Amber Fort', cost: 600 },
      { time: '04:00 PM', name: 'Desert Safari', cost: 1200 }
    ],
    'kerala': [
      { time: '08:00 AM', name: 'Backwater Cruise', cost: 800 },
      { time: '02:00 PM', name: 'Spice Garden Visit', cost: 300 },
      { time: '06:00 PM', name: 'Kathakali Show', cost: 400 }
    ],
    'goa': [
      { time: '09:00 AM', name: 'Beach Hopping', cost: 500 },
      { time: '02:00 PM', name: 'Water Sports', cost: 1000 },
      { time: '06:00 PM', name: 'Sunset Cruise', cost: 800 }
    ]
  };
  
  const templates = activityTemplates[destination] || activityTemplates['rajasthan'];
  return templates.slice(0, Math.min(3, templates.length));
}

function displayItinerary(itinerary) {
  const display = document.getElementById('itineraryDisplay');
  
  display.innerHTML = `
    <div class="itinerary-header">
      <h3 class="itinerary-title">${itinerary.title}</h3>
      <div class="itinerary-meta">
        <span>📅 ${itinerary.duration} days</span>
        <span>💰 ₹${itinerary.totalCost.toLocaleString()}</span>
        <span>👥 ${itinerary.groupSize}</span>
        <span>🎯 ${itinerary.travelStyle}</span>
      </div>
    </div>
    <div class="itinerary-days">
      ${itinerary.days.map(day => `
        <div class="day-item">
          <div class="day-header">
            <div class="day-number">${day.day}</div>
            <div class="day-cost">₹${day.totalCost.toLocaleString()}</div>
          </div>
          <div class="activities">
            ${day.activities.map(activity => `
              <div class="activity-item">
                <div class="activity-info">
                  <div class="activity-time">${activity.time}</div>
                  <div class="activity-name">${activity.name}</div>
                </div>
                <div class="activity-cost">₹${activity.cost}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
      <div style="padding: 20px; text-align: center; border-top: 2px solid var(--color-primary);">
        <button class="btn btn--primary" onclick="saveItinerary('${itinerary.title}')">💾 Save Itinerary</button>
        <button class="btn btn--outline" onclick="shareItinerary('${itinerary.title}')">📤 Share Itinerary</button>
      </div>
    </div>
  `;
}

function saveItinerary(title) {
  if (!appState.currentUser) {
    showToast('Please login to save your itinerary');
    openModal('loginModal');
    return;
  }
  
  appState.userItineraries.push({
    id: Date.now(),
    title: title,
    createdAt: new Date().toISOString().split('T')[0],
    status: 'saved'
  });
  
  showToast('🎉 Itinerary saved successfully!');
}

function shareItinerary(title) {
  showToast('🔗 Itinerary link copied to clipboard!');
}

// Social Media
function renderSocialPosts() {
  const postsContainer = document.getElementById('socialPosts');
  if (!postsContainer) return;
  
  const allPosts = [...appData.socialPosts, ...appState.userPosts];
  
  postsContainer.innerHTML = allPosts.map(post => `
    <div class="social-post">
      <div class="post-header">
        <img src="${post.authorImage}" alt="${post.author}" class="author-avatar">
        <div class="author-info">
          <h4>${post.author}</h4>
          <div class="post-time">${post.timeAgo}</div>
        </div>
      </div>
      <div class="post-content">
        <h3 class="post-title">${post.title}</h3>
        <p class="post-text">${post.content}</p>
        ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image">` : ''}
        <div class="post-tags">
          ${post.tags.map(tag => `
            <a href="#" class="post-tag">#${tag}</a>
          `).join('')}
        </div>
      </div>
      <div class="post-actions">
        <div class="post-stats">
          <button class="like-btn ${post.liked ? 'liked' : ''}" onclick="toggleLike(${post.id})">
            <span>${post.liked ? '❤️' : '🤍'}</span>
            <span>${post.likes}</span>
          </button>
          <button class="comment-btn">
            <span>💬</span>
            <span>${post.comments}</span>
          </button>
        </div>
        <div style="font-size: 12px; color: var(--color-text-secondary);">
          📍 ${post.destination}
        </div>
      </div>
    </div>
  `).join('');
}

function toggleLike(postId) {
  const post = appData.socialPosts.find(p => p.id === postId);
  if (post) {
    if (post.liked) {
      post.likes--;
      post.liked = false;
    } else {
      post.likes++;
      post.liked = true;
    }
    renderSocialPosts();
  }
}

function handleCreatePost(event) {
  event.preventDefault();
  
  if (!appState.currentUser) {
    showToast('Please login to create posts');
    openModal('loginModal');
    return;
  }
  
  const formData = new FormData(event.target);
  const newPost = {
    id: Date.now(),
    author: appState.currentUser.name,
    authorImage: appState.currentUser.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&q=80",
    title: formData.get('title'),
    content: formData.get('content'),
    destination: formData.get('destination'),
    tags: formData.get('tags').split(' ').map(tag => tag.replace('#', '')).filter(tag => tag),
    likes: 0,
    comments: 0,
    timeAgo: 'just now',
    liked: false
  };
  
  appState.userPosts.unshift(newPost);
  renderSocialPosts();
  closeModal('createPostModal');
  showToast('🎉 Your travel story has been shared!');
  
  event.target.reset();
}

// Authentication
function handleLogin(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');
  
  // Simulate login
  const user = {
    id: 1,
    name: "Yash Patel",
    email: email,
    phone: "+91-98765-43210",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    joinDate: "2024-01-15",
    travelStats: {
      destinations: 8,
      trips: 12,
      totalSpent: 185000,
      countries: 1
    }
  };
  
  appState.currentUser = user;
  localStorage.setItem('currentUser', JSON.stringify(user));
  
  updateUIForLoggedInUser();
  closeModal('loginModal');
  showToast(`🎉 Welcome back, ${user.name}!`);
  
  event.target.reset();
}

function handleRegister(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  
  // Simulate registration
  const user = {
    id: Date.now(),
    name: name,
    email: email,
    phone: "",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    joinDate: new Date().toISOString().split('T')[0],
    travelStats: {
      destinations: 0,
      trips: 0,
      totalSpent: 0,
      countries: 0
    }
  };
  
  appState.currentUser = user;
  localStorage.setItem('currentUser', JSON.stringify(user));
  
  updateUIForLoggedInUser();
  closeModal('registerModal');
  showToast(`🎉 Welcome to Incredible India, ${name}!`);
  
  event.target.reset();
}

function handleLogout() {
  appState.currentUser = null;
  localStorage.removeItem('currentUser');
  updateUIForLoggedOutUser();
  showSection('home');
  showToast('👋 You have been logged out successfully');
}

function updateUIForLoggedInUser() {
  document.getElementById('loginNav').classList.add('hidden');
  document.getElementById('registerNav').classList.add('hidden');
  document.getElementById('dashboardNav').classList.remove('hidden');
  document.getElementById('logoutNav').classList.remove('hidden');
}

function updateUIForLoggedOutUser() {
  document.getElementById('loginNav').classList.remove('hidden');
  document.getElementById('registerNav').classList.remove('hidden');
  document.getElementById('dashboardNav').classList.add('hidden');
  document.getElementById('logoutNav').classList.add('hidden');
}

// Dashboard
function renderDashboard() {
  const container = document.getElementById('dashboardContainer');
  
  if (!appState.currentUser) {
    container.innerHTML = `
      <div class="login-required card">
        <div class="card__body">
          <h3>Please Login</h3>
          <p>Please login to access your personal dashboard with bookings, itineraries, and travel stats.</p>
          <button class="btn btn--primary" onclick="openModal('loginModal')">Login Now</button>
        </div>
      </div>
    `;
    return;
  }
  
  const user = appState.currentUser;
  
  container.innerHTML = `
    <div class="dashboard-content">
      <div class="dashboard-header">
        <img src="${user.avatar}" alt="${user.name}" class="user-avatar">
        <h2 class="user-name">${user.name}</h2>
        <p>Member since ${new Date(user.joinDate).toLocaleDateString()}</p>
        <div class="user-stats">
          <div class="user-stat">
            <div class="stat-value">${user.travelStats.destinations}</div>
            <div class="stat-name">Destinations</div>
          </div>
          <div class="user-stat">
            <div class="stat-value">${user.travelStats.trips}</div>
            <div class="stat-name">Trips</div>
          </div>
          <div class="user-stat">
            <div class="stat-value">₹${user.travelStats.totalSpent.toLocaleString()}</div>
            <div class="stat-name">Total Spent</div>
          </div>
          <div class="user-stat">
            <div class="stat-value">${user.travelStats.countries}</div>
            <div class="stat-name">Countries</div>
          </div>
        </div>
      </div>
      
      <div class="dashboard-grid">
        <!-- Analytics Section -->
        <div class="dashboard-section">
          <div class="section-header">
            <h3 class="section-title-small">📊 Travel Analytics</h3>
          </div>
          <div class="section-content">
            <div class="analytics-grid">
              <div class="analytics-chart">
                <h4>Spending Breakdown</h4>
                <div class="chart-container">
                  <div class="chart-bar" style="--value: 65%; --color: var(--color-primary);">
                    <span>Accommodation (65%)</span>
                  </div>
                  <div class="chart-bar" style="--value: 20%; --color: var(--color-warning);">
                    <span>Transport (20%)</span>
                  </div>
                  <div class="chart-bar" style="--value: 10%; --color: var(--color-success);">
                    <span>Food (10%)</span>
                  </div>
                  <div class="chart-bar" style="--value: 5%; --color: var(--color-error);">
                    <span>Activities (5%)</span>
                  </div>
                </div>
              </div>
              
              <div class="analytics-stats">
                <h4>Monthly Spending</h4>
                <div class="monthly-stats">
                  <div class="month-stat">
                    <span class="month">Jan</span>
                    <div class="stat-bar">
                      <div class="stat-fill" style="width: 40%"></div>
                    </div>
                    <span class="amount">₹12,500</span>
                  </div>
                  <div class="month-stat">
                    <span class="month">Feb</span>
                    <div class="stat-bar">
                      <div class="stat-fill" style="width: 70%"></div>
                    </div>
                    <span class="amount">₹22,000</span>
                  </div>
                  <div class="month-stat">
                    <span class="month">Mar</span>
                    <div class="stat-bar">
                      <div class="stat-fill" style="width: 60%"></div>
                    </div>
                    <span class="amount">₹18,750</span>
                  </div>
                  <div class="month-stat">
                    <span class="month">Apr</span>
                    <div class="stat-bar">
                      <div class="stat-fill" style="width: 90%"></div>
                    </div>
                    <span class="amount">₹28,500</span>
                  </div>
                </div>
              </div>
              
              <div class="analytics-insights">
                <h4>Travel Insights</h4>
                <div class="insight-item">
                  <div class="insight-icon">💰</div>
                  <div class="insight-text">
                    <strong>Average Trip Cost:</strong> ₹18,500
                  </div>
                </div>
                <div class="insight-item">
                  <div class="insight-icon">📅</div>
                  <div class="insight-text">
                    <strong>Most Visited Month:</strong> April
                  </div>
                </div>
                <div class="insight-item">
                  <div class="insight-icon">📍</div>
                  <div class="insight-text">
                    <strong>Favorite Destination:</strong> Goa
                  </div>
                </div>
                <div class="insight-item">
                  <div class="insight-icon">🏨</div>
                  <div class="insight-text">
                    <strong>Preferred Stay:</strong> Luxury Hotels
                  </div>
                </div>
              </div>
              
              <div class="analytics-goals">
                <h4>Travel Goals</h4>
                <div class="goal-item">
                  <div class="goal-progress">
                    <div class="progress-circle" style="--progress: 75">
                      <span>75%</span>
                    </div>
                  </div>
                  <div class="goal-info">
                    <h5>Annual Travel Budget</h5>
                    <p>₹1,50,000 / ₹2,00,000</p>
                  </div>
                </div>
                <div class="goal-item">
                  <div class="goal-progress">
                    <div class="progress-circle" style="--progress: 40">
                      <span>40%</span>
                    </div>
                  </div>
                  <div class="goal-info">
                    <h5>Destinations Visited</h5>
                    <p>8 / 20 planned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Rest of the dashboard sections -->
        <div class="dashboard-section">
          <div class="section-header">
            <h3 class="section-title-small">🎫 My Bookings</h3>
          </div>
          <div class="section-content">
            ${appState.userBookings.length ? appState.userBookings.map(booking => `
              <div class="booking-item">
                <div class="item-info">
                  <h5>${booking.title}</h5>
                  <div class="item-meta">📅 ${booking.date} • 👥 ${booking.travelers} travelers</div>
                </div>
                <div class="item-status status-${booking.status}">${booking.status}</div>
              </div>
            `).join('') : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No bookings yet. Start exploring!</p>'}
          </div>
        </div>
        
        <div class="dashboard-section">
          <div class="section-header">
            <h3 class="section-title-small">🗺️ My Itineraries</h3>
          </div>
          <div class="section-content">
            ${appState.userItineraries.length ? appState.userItineraries.map(itinerary => `
              <div class="itinerary-item">
                <div class="item-info">
                  <h5>${itinerary.title}</h5>
                  <div class="item-meta">📅 Created ${itinerary.createdAt}</div>
                </div>
                <div class="item-status status-${itinerary.status}">${itinerary.status}</div>
              </div>
            `).join('') : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No saved itineraries yet. Try our AI planner!</p>'}
          </div>
        </div>
        
        <div class="dashboard-section">
          <div class="section-header">
            <h3 class="section-title-small">📝 My Posts</h3>
          </div>
          <div class="section-content">
            ${appState.userPosts.length ? appState.userPosts.map(post => `
              <div class="post-item">
                <div class="item-info">
                  <h5>${post.title}</h5>
                  <div class="item-meta">📍 ${post.destination} • 👍 ${post.likes} likes</div>
                </div>
              </div>
            `).join('') : '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No posts shared yet. Share your experiences!</p>'}
          </div>
        </div>
        
        <div class="dashboard-section">
          <div class="section-header">
            <h3 class="section-title-small">⭐ Travel Preferences</h3>
          </div>
          <div class="section-content">
            <div style="display: grid; gap: 12px;">
              <div><strong>Preferred Style:</strong> Adventure</div>
              <div><strong>Budget Range:</strong> ₹15,000 - ₹50,000</div>
              <div><strong>Interests:</strong> Photography, Culture, Food</div>
              <div><strong>Next Destination:</strong> Kashmir Valley</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Booking Functions
function initiateDestinationBooking(event, destinationId) {
  event.preventDefault();
  
  if (!appState.currentUser) {
    showToast('Please login to make bookings');
    openModal('loginModal');
    return;
  }
  
  const destination = appData.destinations.find(d => d.id === destinationId);
  const formData = new FormData(event.target);
  
  const booking = {
    id: Date.now(),
    type: 'destination',
    title: destination.name,
    date: formData.get('travelDate'),
    travelers: formData.get('travelers'),
    price: destination.price,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };
  
  appState.userBookings.unshift(booking);
  closeModal('bookingModal');
  showToast(`🎉 ${destination.name} booked successfully!`);
}

function initiateHotelBooking(event, hotelId) {
  event.preventDefault();
  
  if (!appState.currentUser) {
    showToast('Please login to make bookings');
    openModal('loginModal');
    return;
  }
  
  const hotel = appData.hotels.find(h => h.id === hotelId);
  const formData = new FormData(event.target);
  
  const booking = {
    id: Date.now(),
    type: 'hotel',
    title: hotel.name,
    date: `${formData.get('checkinDate')} to ${formData.get('checkoutDate')}`,
    travelers: formData.get('guests'),
    price: hotel.pricePerNight,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };
  
  appState.userBookings.unshift(booking);
  closeModal('bookingModal');
  showToast(`🎉 ${hotel.name} booked successfully!`);
}

// Modal Functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
  document.body.style.overflow = '';
}

function switchModal(fromId, toId) {
  closeModal(fromId);
  setTimeout(() => openModal(toId), 100);
}

// Toast Notification
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  const messageElement = toast.querySelector('.toast-message');
  
  messageElement.textContent = message;
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, duration);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// Initialize welcome message
setTimeout(() => {
  if (!appState.currentUser && Math.random() < 0.3) {
    showToast('🙏 Namaste! Welcome to Incredible India - Your complete travel companion!', 4000);
  }
}, 2000);
// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setMinDate();
});

// Wait for all assets (images, stylesheets) to load before hiding preloader
window.addEventListener('load', function() {
  initializeApp();
  
  // Hide the preloader after a small delay for a smoother transition
  const preloader = document.getElementById('preloader');
  if (preloader) {
    // Add the fade-out class to start the CSS transition
    preloader.classList.add('fade-out'); 
    
    // Remove the element completely after the transition ends
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500); // Matches the opacity transition duration
  }
});
