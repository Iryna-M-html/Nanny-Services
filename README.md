# Nanny-Services Frontend

## Project Overview

**Nanny-Services** is a modern web platform designed for searching and booking professional nanny services. The application provides a seamless and secure experience for parents to find qualified specialists. Users can explore detailed nanny profiles, utilize a flexible filtering system to find the perfect match, manage a "Favorites" list, and instantly contact chosen candidates.

The application is built using **Next.js 15**, **TypeScript**, **Firebase Realtime Database**, and **Zustand**.

## Author

**Iryna Mokhnata**

- GitHub: [@Iryna-M-html](https://github.com/Iryna-M-html)
- LinkedIn: [linkedin.com/in/iryna-mokhnata](https://www.linkedin.com/in/iryna-mokhnata)
- Email: ivmohnataya@gmail.com

## Live Demo

- [Live site on Vercel](https://nanny-services-two.vercel.app/)

## Pages

### 🏠 Home Page (`/`)
- Welcome banner with a primary Call to Action (CTA).
- "Get Started" button to navigate to the nanny catalog.
- Dynamic statistics and a brief overview of service benefits.

### 📋 Nannies Page (`/nannies`)
- Comprehensive list of available nannies.
- **Flexible Filtering System:**
  - By alphabet (A-Z, Z-A).
  - By price (low to high and vice versa).
  - By popularity (rating).
- Nanny cards with detailed information: experience, education, age of children, and reviews.
- "Load More" button for pagination.
- Ability to add nannies to the "Favorites" list (available for authorized users only).

### ❤️ Favorites Page (`/favorites`)
- Personalized list of selected nannies.
- Quick "remove from favorites" functionality.
- State persistence via Firebase database.

## Technologies Used

- **Next.js 15** (App Router & Turbopack)
- **TypeScript**
- **Firebase** (Authentication & Realtime Database)
- **Zustand** (State management)
- **React Hook Form** & **Yup** (Validation)
- **React Hot Toast** (Notifications)

## API & Database

The project utilizes **Firebase Realtime Database** for storing and retrieving nanny data.

**Database Structure:**
- `/` — The root contains an array of nanny objects (indices 0, 1, 2...).
- Each nanny profile includes: name, location, hourly rate, rating, description, reviews, and an `avatar_url` (hosted on `ftp.goit.study`).

## Features

- **Authentication:** Full registration and login system via Firebase Auth.
- **Image Optimization:** Uses the `next/image` component with configured `remotePatterns` for secure avatar loading.
- **Loading States:** Custom animated sun-themed loader.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.

## Installation

```bash
# Clone the repository
git clone [https://github.com/Iryna-M-html/Nanny-Services.git](https://github.com/Iryna-M-html/Nanny-Services.git)

# Navigate to the project folder
cd Nanny-Services

# Install dependencies
npm install

# Run the project in development mode
npm run dev