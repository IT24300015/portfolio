# Nilakshan's Portfolio Website

A modern frontend portfolio website built with React (Vite) and deployed as a static app.

## Features

- Responsive design for mobile, tablet, and desktop
- Hero, About, Skills, Projects, and Contact sections
- Project showcase with three featured projects
- Contact links for email, phone, and GitHub
- Smooth scrolling and polished UI styling

## Project Structure

```
/portfolio
  /client              → React Vite frontend
    /src
      /components      → Reusable React components
      App.jsx         → Main app component
      index.css       → Tailwind + custom styles
    package.json      → Frontend dependencies
    vite.config.js    → Vite configuration
    tailwind.config.js → Tailwind CSS configuration

  .gitignore          → Git ignore rules
  README.md           → This file
```

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/nilakshan-portfolio.git
   cd portfolio/client
   ```

2. Install frontend dependencies
   ```bash
   npm install
   ```

### Development

1. Start the frontend
   ```bash
   npm run dev
   # Frontend runs on http://localhost:5173
   ```

2. Open in browser
   ```
   http://localhost:5173
   ```

## Deployment

This project is configured for GitHub Pages.

Live URL:
https://it24300015.github.io/portfolio/

GitHub Pages setup:
1. Push this repository to GitHub.
2. In GitHub repository settings, open Pages.
3. Set Source to GitHub Actions.
4. Push to `master` branch to trigger deployment.

The workflow builds the Vite app from `client/` and publishes `client/dist` automatically.

## Customization

- Edit component files in `client/src/components/`
- Update project content in `Projects.jsx`
- Update contact details in `Contact.jsx`, `Hero.jsx`, and `Footer.jsx`
- Replace `profile.jpeg` in `client/public/` if needed

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Modern CSS animations

## Support

- Email: nimeshnilakshan858@gmail.com
- GitHub: https://github.com/IT24300015
- LinkedIn: https://linkedin.com/in/nimesh-nilakshan

---

**Made with ❤️ by Nilakshan**