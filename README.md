# waqup Website

A modern, responsive website for waqup - an AI-driven mindfulness and personal development platform.

## Overview

waqup helps users transform their mindset through personalized, AI-driven affirmations and subconscious rewiring. The website serves as the main landing page and marketing platform for the service.

## Structure

The website consists of several key sections:

- **Hero Section**: Main value proposition and call-to-action
- **Features**: Overview of platform capabilities
- **How It Works**: 4-step process explanation
- **Pricing**: Free trial and premium subscription options
- **Testimonials**: User success stories
- **CTA Section**: Final conversion point
- **Footer**: Navigation and legal information

## Technology Stack

- HTML5
- Tailwind CSS (via CDN)
- Inter font family
- Responsive design for all devices

## Development

### Local Development

1. Clone the repository:
```bash
git clone git@github.com:USERNAME/waqup-website.git
cd waqup-website
```

2. Open `index.html` in your browser or use a local server:
```bash
python -m http.server 8000
```

### Future Next.js Migration

The site is prepared for future migration to Next.js with static export:

1. Initialize Next.js:
```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"
```

2. Move `index.html` content to `app/page.tsx`
3. Configure `next.config.js` for static export:
```js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

## Deployment

### Current Deployment (Static)

The site can be deployed via:
- GitHub Pages
- Any static hosting service
- FTP upload to web server

### Future Deployment (Next.js)

When migrated to Next.js:
1. Build the site:
```bash
npm run build
```

2. Deploy options:
- Vercel (recommended)
- GitHub Pages
- FTP upload of `/out` directory

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

Private repository - All rights reserved

## Contact

For questions about the website, contact the development team. 