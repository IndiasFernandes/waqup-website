# waQup Pre-release Landing Page

A standalone landing page for collecting founding member signups for waQup. This page is designed to be easily deployable to any static hosting service.

## Structure

```
pre-release/
├── index.html          # Main landing page
├── styles/
│   └── main.css       # Styles for the landing page
├── js/
│   └── main.js        # JavaScript for form handling
└── README.md          # This file
```

## Features

- Modern, responsive design
- Founding member signup form
- Supabase integration for data collection
- No external dependencies (except Google Fonts)
- Mobile-friendly layout

## Setup

1. Replace the Supabase configuration in `js/main.js`:
   ```javascript
   'apikey': 'YOUR_ANON_KEY' // Replace with your actual Supabase anon key
   ```

2. Make sure you have a `waitlist` table in your Supabase database with the following columns:
   - name (text)
   - email (text)
   - interest (text)
   - timestamp (timestamptz)
   - type (text)

3. Deploy the contents of this folder to any static hosting service:
   - GitHub Pages
   - Netlify
   - Vercel
   - Any standard web hosting

## Development

The page is built with vanilla HTML, CSS, and JavaScript. No build tools or npm packages are required. To make changes:

1. Edit `index.html` for structure changes
2. Edit `styles/main.css` for styling changes
3. Edit `js/main.js` for form handling and functionality changes

## Design

The page uses a dark theme with purple accents, matching the main waQup application design. Key design features:

- Inter font family
- Gradient backgrounds
- Glass-morphism effects
- Responsive grid layout
- Smooth animations
- Mobile-first approach

## Browser Support

The page is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The form submits data to Supabase but can be modified to use any backend
- The design is consistent with the main waQup application
- All assets are included in the repository or loaded from CDNs 