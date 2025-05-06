# waqup Website

A clean, static marketing website for waqup - an AI-driven mindfulness and personal development platform.

## Overview

This repository contains the source code for the waqup marketing website, which serves as the main landing page and marketing platform for the service. The site is built with semantic HTML5 and CSS, designed to be lightweight and fast.

## Structure

```
waqup-website/
├── index.html          # Main landing page
├── style.css           # All site styles
├── images/            # Image assets
├── fonts/             # Custom fonts (if any)
└── .github/           # GitHub Actions workflow
```

## Development

1. Clone the repository:
```bash
git clone git@github.com:indiasfernandes/waqup-website.git
cd waqup-website
```

2. Make your changes to `index.html` and `style.css`

3. Test locally:
```bash
python -m http.server 8000
```

4. Commit and push your changes:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

## Deployment

The site is automatically deployed to https://waqup.space via GitHub Actions whenever changes are pushed to the `main` branch. The deployment process:

1. Triggers on push to `main`
2. Uploads all files to the FTP server
3. Deploys to the `/public_html/` directory

## Live Site

The website is live at: https://waqup.space

## Future Plans

This static site is designed to be easily converted to a React/Next.js application in the future. The current structure and class names are chosen to make this transition smooth.

## License

Private repository - All rights reserved

## Contact

For questions about the website, contact the development team. 