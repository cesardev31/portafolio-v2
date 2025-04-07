# César Andres Pereira Bernal - Portfolio

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## Overview

This is my professional portfolio website showcasing my skills, experience, and projects as a Full Stack Developer. The site is built with modern web technologies and features a responsive design, dark/light mode, and smooth animations.

## Features

- **Responsive Design**: Looks great on all devices, from mobile to desktop
- **Dark/Light Mode**: Toggle between themes based on your preference
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **Smooth Animations**: Subtle animations using Framer Motion
- **Analytics**: Firebase Analytics integration for visitor tracking
- **SEO Friendly**: Proper meta tags and structured data

## Technologies

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Animation**: Framer Motion
- **UI Components**: Custom components with Radix UI primitives
- **Analytics**: Firebase
- **Deployment**: [Your deployment platform]

## Setup & Development

### Prerequisites

- [Bun](https://bun.sh/) (Package manager)
- Node.js 18+ (Recommended)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/cesardev31/portfolio-v2.git
   cd portfolio-v2
   ```

2. Install dependencies

   ```bash
   bun install
   ```

3. Start the development server

   ```bash
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
bun run build
```

The built files will be in the `dist` directory, ready to be deployed.

### Preview Production Build

```bash
bun run preview
```

## Environment Variables

For Firebase configuration, you can use environment variables:

1. Create a `.env` file in the root directory
2. Add your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

## License

[Your chosen license]

## Contact

- Email: [Your email]
- LinkedIn: [Your LinkedIn profile]
- GitHub: [Your GitHub profile]
