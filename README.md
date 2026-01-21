# AirBnB-listings

# 🏠 AirBNB Listings Project

A dynamic web application that displays the first 50 AirBNB listings from San Francisco using **JavaScript AJAX (fetch with async/await)** and **Bootstrap 5** for responsive design.

## 🔗 Live Demo

**Deployment URL:** https://kunaltakke.github.io/AirBnB-listings/

## 📋 Project Overview

This project demonstrates the use of modern JavaScript techniques to fetch data from a JSON file and dynamically display it on a web page. Each listing card shows comprehensive property information including images, prices, host details, and amenities.

## ✨ Features

### Core Requirements ✅
- Loads **first 50 listings** from JSON file using **AJAX (fetch with async/await)**
- Displays for each listing:
  - ✅ **Listing name** - Property title
  - ✅ **Description** - Property details (truncated to 150 characters)
  - ✅ **Amenities** - Up to 5 amenities shown as badges
  - ✅ **Host name** - Name of the property host
  - ✅ **Host photo** - Profile picture of the host
  - ✅ **Price** - Nightly rate
  - ✅ **Thumbnail image** - Property photo with fallback
- **Bootstrap 5** for responsive, mobile-friendly design
- **Loading spinner** - Shows while data is being fetched
- **Error handling** - User-friendly error messages

### Technical Features 🚀
- **Async/await** - Modern JavaScript for asynchronous operations
- **Fetch API** - AJAX requests without external libraries
- **DOM Manipulation** - Dynamic HTML generation
- **Template Literals** - Clean, readable HTML string construction
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Fallback Images** - Graceful handling of missing images
- **Security** - HTML escaping to prevent XSS attacks

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with hover effects
- **JavaScript ES6+** - Modern JavaScript features
  - Async/await
  - Fetch API
  - Arrow functions
  - Template literals
  - Array methods (forEach, map, slice)
- **Bootstrap 5.3** - CSS framework (via CDN)
- **JSON** - Data format for listings

## 📁 Project Structure

```
AirBnB-listings/
│
├── index.html                          # Main HTML page
├── debug.html                          # Debug/testing page
│
├── js/
│   └── app.js                         # Main JavaScript application
│
├── styles/
│   └── style.css                      # Custom CSS styles
│
├── data/
│   └── airbnb_listings2/
│       └── airbnb_sf_listings_500.json # San Francisco listings data
│
├── README.md                           # This file
└── LICENSE                             # Project license
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (Python, Node.js, or VS Code Live Server)
- **Important:** The project requires a web server because the Fetch API has CORS restrictions when opening files directly

### Installation

#### 1. Clone or Download the Repository

```bash
git clone https://github.com/YOUR-USERNAME/airbnb-listings.git
cd airbnb-listings
```

Or download as ZIP and extract.

#### 2. Run a Local Web Server

You **MUST** run a web server. Opening `index.html` directly (`file://`) will not work due to CORS restrictions.

**Option A: Python (Recommended)**

```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

**Option B: Node.js http-server**

```bash
# Install globally (one time)
npm install -g http-server

# Run server
http-server
```

**Option C: VS Code Live Server**

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Click "Open with Live Server"

#### 3. Open in Browser

Navigate to:
```
http://localhost:8080
```

## 💻 How It Works

### Data Flow

1. **Page Loads** → HTML creates empty container
2. **JavaScript Executes** → Waits for DOM to be ready
3. **AJAX Request** → Fetches JSON file using `fetch()`
4. **Parse JSON** → Converts raw text to JavaScript array
5. **Slice Data** → Extracts first 50 listings
6. **Loop & Display** → Creates HTML card for each listing
7. **User Sees Results** → 50 listing cards displayed on page

### Key Code Snippets

**AJAX Request with Async/Await:**
```javascript
async function loadListings() {
    const response = await fetch('data/airbnb_listings2/airbnb_sf_listings_500.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    const listings = data.slice(0, 50);
    displayListings(listings);
}
```

**Dynamic HTML Generation:**
```javascript
col.innerHTML = `
    <div class="card">
        <img src="${thumbnail}" alt="${escapeHtml(name)}">
        <h5>${escapeHtml(name)}</h5>
        <p>${price}/night</p>
        <strong>${escapeHtml(hostName)}</strong>
    </div>
`;
```

## 🎨 Customization

### Change Number of Listings

Edit `js/app.js` line 26:
```javascript
const listings = data.slice(0, 50);  // Change 50 to any number
```

### Update Styling

Edit `styles/style.css` to customize:
- Card hover effects
- Colors and fonts
- Spacing and layout
- Image dimensions

### Use Different Data

Replace the JSON file in `data/airbnb_listings2/` with your own data, or update the fetch path in `js/app.js`:
```javascript
const response = await fetch('path/to/your/data.json');
```

## 🧪 Testing & Debugging

### Debug Page

Open `debug.html` in your browser to see:
- Connection status
- Detailed error messages
- Sample data preview
- Path testing results

### Browser Console

Press **F12** and check the **Console** tab for:
- Error messages
- Network requests
- Data loading confirmation

### Common Issues

**"Failed to load listings"**
- ✅ Make sure you're running a web server
- ✅ Check that JSON file exists at correct path
- ✅ Verify URL starts with `http://` not `file://`

**Images not loading**
- ✅ Check internet connection (images load from external URLs)
- ✅ Fallback placeholder images will display automatically

**Bootstrap not styling correctly**
- ✅ Check internet connection (Bootstrap loads from CDN)
- ✅ Verify Bootstrap CSS link in `<head>` section

## 📤 Deployment to GitHub Pages

### Step 1: Create Repository

```bash
git init
git add .
git commit -m "Initial commit: AirBNB Listings project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/airbnb-listings.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to repository **Settings**
2. Navigate to **Pages** (left sidebar)
3. Under **Source**: Select `main` branch, `/ (root)` folder
4. Click **Save**
5. Wait 1-2 minutes for deployment

### Step 3: Update README

Copy your GitHub Pages URL and update the "Live Demo" section at the top of this README.

Your URL will be:
```
https://YOUR-USERNAME.github.io/airbnb-listings/
```

## 📊 Data Source

This project uses San Francisco AirBNB listing data (`airbnb_sf_listings_500.json`) containing 500 properties with information including:
- Property details (name, description, type)
- Pricing information
- Host information (name, photo, details)
- Property amenities
- Location data
- Review scores

Sample data structure:
```json
{
  "id": 958,
  "name": "Serviced apartment in San Francisco",
  "description": "Property description...",
  "price": "$187.00",
  "picture_url": "https://...",
  "host_name": "Holly",
  "host_picture_url": "https://...",
  "amenities": ["WiFi", "Kitchen", "Heating", ...]
}
```

## 🎓 Learning Outcomes

This project demonstrates:

1. **AJAX with Fetch API** - Modern asynchronous data fetching
2. **Async/Await** - Clean asynchronous code handling
3. **JSON Parsing** - Working with structured data
4. **DOM Manipulation** - Dynamic HTML generation with JavaScript
5. **Template Literals** - Modern string interpolation
6. **Array Methods** - forEach, map, slice operations
7. **Error Handling** - Try-catch blocks and user feedback
8. **Responsive Design** - Bootstrap grid system
9. **Security** - HTML escaping and XSS prevention
10. **Web Servers** - Understanding CORS and local development

## 👨‍💻 Author

**Kunal Sachin Takke**
- Student at Northeastern University
- Master's in Computer Science

## 📄 License

This project is created for educational purposes as part of a Northeastern University Web Development course assignment.

## 🙏 Acknowledgments

- **Northeastern University** - Course assignment and guidance
- **Bootstrap Team** - CSS framework
- **Unsplash** - Placeholder images (via URL API)
- **Pravatar** - Host avatar placeholder service
- **AirBNB** - Inspiration and data structure

## 🚀 Future Enhancements

Potential improvements:
- [ ] Add search/filter functionality
- [ ] Implement sorting (price, rating, name)
- [ ] Add pagination or infinite scroll
- [ ] Create detailed view modal for each listing
- [ ] Add map view with location markers
- [ ] Implement favorites/bookmark feature
- [ ] Add price range slider
- [ ] Enable sharing functionality
- [ ] Add animations and transitions
- [ ] Implement dark mode toggle

## 📝 Assignment Requirements Checklist

- [x] Loads first 50 listings from JSON file
- [x] Uses JavaScript fetch() with async/await (AJAX)
- [x] Displays listing name
- [x] Shows description
- [x] Lists amenities
- [x] Shows host name
- [x] Displays host photo
- [x] Shows price per night
- [x] Displays property thumbnail
- [x] Uses Bootstrap for styling
- [x] Responsive design
- [x] Error handling
- [x] Clean, readable code
- [x] Meaningful README with deployment link
- [x] GitHub repository

---

**Last Updated:** January 2026

**Project Status:** ✅ Complete and Ready for Deployment

Made with ❤️ for Northeastern University Web Development Course
