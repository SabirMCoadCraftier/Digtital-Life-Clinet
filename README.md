# Digital Life Lessons

A full-featured online learning platform where users can explore, save, and manage life-skill lessons, while admins can manage users, lessons, and reported content from a dedicated dashboard.



## ✨ Features

- 🔍 Browse and search public lessons with category, tone, and sorting filters
- ❤️ Save lessons to favorites for premium/registered users
- 📊 Role-based dashboard for **Users** and **Admins**
- 📝 Add, update, and manage lessons
- 👥 Admin panel to manage users and reported lessons
- 💳 Payment system for premium access (with success/cancel flow)
- 🔐 Firebase authentication with protected & admin-only routes
- 🌟 Most saved lessons, top contributors, and featured lessons sections
- 📰 Newsletter subscription and testimonials section
- ❓ FAQ, About, Contact, and Privacy Policy pages
- 🚫 Custom 403 (Forbidden) and 404 (Error) pages
- 🎨 Smooth animations using Framer Motion

## 🛠️ Tech Stack

**Client:**
- React (Vite)
- React Router
- TanStack Query (React Query)
- Axios (Secure instance with interceptors)
- Firebase Authentication
- Tailwind CSS
- Framer Motion
- React Icons

## 📁 Project Structure

```
src/
├── Component/        # Reusable UI sections (Hero, About, FAQ, Blog, etc.)
├── Context/           # Auth context
├── Firebase/          # Firebase config
├── Hooks/             # Custom hooks (useAuth, useRole, useAxiosSecure)
├── Layout/             # Root and Dashboard layouts
├── Pages/
│   ├── Auth/           # Login / Register
│   ├── Dashboard/      # User & Admin dashboard pages
│   ├── PuplicLessons/  # Public lessons listing
│   └── Profile/        # User profile
├── Navbar/
├── Footer/
└── AdminRoute.jsx      # Protected admin route
```

## ⚙️ Getting Started

### Prerequisites
- Node.js installed
- A Firebase project (for authentication)

### Installation

```bash
git clone https://github.com/SabirMCoadCraftier/Digtital-Life-Clinet.git
cd digital-life-lessions-client
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory and add your Firebase config:

```
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

### Run the project

```bash
npm run dev
```

## 🔑 User Roles

| Role  | Access                                                                 |
|-------|-------------------------------------------------------------------------|
| User  | Browse lessons, save favorites, add/manage own lessons, premium payment |
| Admin | Manage all users, manage all lessons, handle reported lessons           |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a pull request.

## 📄 License

This project is licensed under the MIT License.
# Project Name

---Digital-life-lessons

🌐 Live Site: https://digital-life-lessons-d2dce.web.app

**Digital Life Lessons** is an interactive platform for browsing, creating, and sharing educational life lessons. It provides a unique experience to learn from life stories, enhance personal growth, and interact with a supportive community.

---

## Features

- ✅ Responsive Navbar & Footer across all pages
- ✅ User Authentication: Email/Password & Google Sign-In
- ✅ Private/Protected Routes for creating, editing, and viewing lessons
- ✅ Browse Public Lessons with filters (category, emotional tone) and sorting (newest, most saved)
- ✅ Premium Upgrade via Stripe for exclusive lessons
- ✅ Comment, Like, Save/Favorite, Share, and Report Life Lessons
- ✅ Admin Dashboard for managing users, lessons, and reported content
- ✅ Interactive Analytics for users and admin
- ✅ Lottie animations for engaging user experience

---

## Pages

**Public Pages:**

- Home (Hero Banner, Featured Lessons, Top Contributors, Most Saved Lessons)
- Public Lessons (Card Layout, Filter, Sort, Search)
- Login / Register
- 404 Not Found

**Private / Protected Pages:**

- Add Lesson
- My Lessons
- Update Lesson
- Lesson Details
- Favorites
- Dashboard (User / Admin)
- Pricing / Upgrade
- Payment Success & Cancel

---

## Dashboard

### User Dashboard

- Overview: Total lessons created, saved, recently added, analytics charts
- Add Lesson: Title, Description, Category, Emotional Tone, Image, Access Level (Free/Premium)
- My Lessons: Table view with Update/Delete, visibility toggle, stats, and favorites
- Favorites: View and manage saved lessons
- Profile: Update name/photo, view created lessons, Premium badge

### Admin Dashboard

- Admin Overview: Total users, lessons, flagged content, most active contributors
- Manage Users: Update role, delete accounts
- Manage Lessons: Delete inappropriate lessons, feature lessons, mark reviewed
- Reported Lessons: Review and take action on flagged content
- Admin Profile: Update photo and display name

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS, React Router, React Hook Form
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Auth + Firebase Admin SDK for token verification
- **Payment Gateway:** Stripe (Test Mode)
- **Deployment:** Vercel (server), firebase(client)

---

## Installation

```bash
# Clone the repository
git clone :https://github.com/abdulmajed123/digital-life-lessions-client
# Go to client folder
cd digital-life-lessons/client

# Install dependencies
npm install

# Start development server
npm start


```
