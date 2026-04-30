# Nilakshan's Portfolio Website

A modern, full-stack portfolio website built with React (Vite), Node.js (Express), and deployed on Vercel & Render.

## 🎯 Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Beautiful UI** - Modern gradient design with smooth animations
- **Contact Form** - Send emails directly with Nodemailer integration
- **Project Showcase** - Display your projects with filtering
- **Skills Section** - Show off your technical skills
- **CV Download** - Easy CV download button
- **Production Ready** - Configured for deployment on Vercel & Render

## 📁 Project Structure

```
/portfolio
  /client              → React Vite Frontend
    /src
      /components      → Reusable React components
      App.jsx         → Main app component
      index.css       → Tailwind + custom styles
    .env.local        → Local development environment variables
    .env.production   → Production environment variables
    package.json      → Frontend dependencies
    vite.config.js    → Vite configuration
    tailwind.config.js → Tailwind CSS configuration

  /server             → Node.js Express Backend
    server.js         → Main Express server
    package.json      → Backend dependencies
    .env              → Environment variables (NOT in git)

  .gitignore          → Git ignore rules
  README.md           → This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nilakshan-portfolio.git
   cd portfolio
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Development

1. **Start the backend**
   ```bash
   cd server
   npm run dev
   # Server runs on http://localhost:3000
   ```

2. **Start the frontend** (in a new terminal)
   ```bash
   cd client
   npm run dev
   # Frontend runs on http://localhost:5173
   ```

3. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🌐 Deployment

### Deploy Backend on Render

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Create New → Web Service
4. Connect your repository
5. Configure:
   - **Name**: nilakshan-portfolio-api
   - **Root Directory**: server
   - **Build Command**: npm install
   - **Start Command**: node server.js
   - **Instance**: Free
6. Add Environment Variables:
   - `EMAIL_USER`: your-email@gmail.com
   - `EMAIL_PASS`: your-16-character-app-password
   - `NODE_ENV`: production

### Deploy Frontend on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Configure:
   - **Framework**: Vite
   - **Root Directory**: client
   - **Build Command**: npm run build
   - **Output Directory**: dist
5. Add Environment Variable:
   - `VITE_API_URL`: https://your-backend.onrender.com
6. Deploy

## 🔧 Environment Variables

### Frontend (.env.local for dev, .env.production for prod)
```
VITE_API_URL=http://localhost:3000  # Local dev
VITE_API_URL=https://your-backend.onrender.com  # Production
```

### Backend (.env)
```
PORT=3000
NODE_ENV=development
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## 📧 Setting up Gmail App Password

1. Go to [Google Account](https://myaccount.google.com)
2. Navigate to Security
3. Enable 2-Step Verification
4. Search for "App Passwords"
5. Create password for "Mail" on "Windows Computer"
6. Copy the 16-character password
7. Paste in `EMAIL_PASS` environment variable

## 🎨 Customization

### Update Personal Information
- Edit component files in `/client/src/components/`
- Update email in Footer and Hero components
- Add your actual GitHub/LinkedIn links

### Add Your CV
- Place your CV PDF at `/client/public/Nilakshan_CV.pdf`
- The download button in About section will work automatically

### Update Project Images
- Replace gradient colors in Projects.jsx
- Or upload actual project images to `/public` and reference them

### Custom Colors
- Edit Tailwind classes in component files
- Modify CSS in `index.css` for custom animations

## 📚 Technologies Used

### Frontend
- React 18
- Vite
- Tailwind CSS
- Axios
- Modern CSS3 Animations

### Backend
- Node.js
- Express.js
- Nodemailer
- CORS
- dotenv

## ✅ Testing Checklist

Before deployment:
- [ ] Frontend loads on localhost:5173
- [ ] Backend running on localhost:3000
- [ ] Contact form submits successfully
- [ ] CV download works
- [ ] All links working
- [ ] Mobile responsive
- [ ] No console errors

## 📞 Support

For issues or questions:
- Email: nimeshnilakshan858@gmail.com
- GitHub: [Your GitHub](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com)

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ by Nilakshan**
