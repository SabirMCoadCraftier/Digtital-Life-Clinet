# 🌱 Digital Life Lessons

A full-stack platform where users can create, store, and share meaningful life lessons, personal growth insights, and wisdom gathered over time. Users can organize lessons, mark favorites, track learning progress, and browse public lessons shared by the community.

---

## 🚀 Live Site

- **Live URL:** [https://digital-life-lessions-client.vercel.app/](https://digital-life-lessions-client.vercel.app/)


### 🔑 Admin Credentials (for testing)
| Field | Value |
|---|---|
| Admin Email | `admin2@gmail.com` |
| Admin Password | `Admin2@gmail.com` |

---

## 📖 About the Project

People often learn valuable lessons in life but forget them over time. **Digital Life Lessons** helps preserve personal wisdom, encourages mindful reflection, and allows users to grow by exploring lessons shared by others in the community.

Users register with email/password or Google, start on a **Free** plan, and can upgrade to **Premium** via Stripe for a one-time lifetime payment. Lessons can be marked Public/Private and Free/Premium, with rich engagement features like likes, favorites, comments, and reporting.

---

## ✨ Key Features

- 🔐 Secure authentication (email/password + Google) using **Better Auth**
- 🆓⭐ Free & Premium user tiers with Stripe one-time payment upgrade
- 📝 Create, update, and delete personal life lessons with category & emotional tone tagging
- 🌍 Browse public lessons with **search, filter, sort, and pagination**
- 🔒 Premium lessons are blurred/locked for Free users with an upgrade prompt
- ❤️ Like, 🔖 save to favorites, 💬 comment, and 🚩 report lessons
- 📊 User dashboard with personal analytics, favorites, and profile management
- 🛠️ Admin dashboard to manage users, lessons, featured content, and reported content
- 🎞️ Hero slider, featured lessons, top contributors, and most-saved lessons on the homepage
- 🎬 Smooth UI animations using Framer Motion
- 📱 Fully responsive design across mobile, tablet, and desktop
- 🌗 Dark/Light theme toggle *(optional feature)*
- 📤 Social sharing of lessons via `react-share` *(optional feature)*

---

## 🛠️ Tech Stack

**Frontend:**
- Next.js / React
- Tailwind CSS
- Framer Motion (animations)
- Axios (API requests)
- React Hook Form (forms)

**Backend:**
- Node.js & Express.js
- MongoDB (Mongoose)
- Better Auth (authentication)
- Stripe (payment integration)
- JWT (token verification for protected routes)

---

## 📦 NPM Packages Used

### Client
| Package | Purpose |
|---|---|
| `next` | React framework |
| `axios` | HTTP requests |
| `better-auth` | Authentication |
| `framer-motion` | Animations |
| `react-hook-form` | Form handling |
| `react-hot-toast` / `sweetalert2` | Toast/alert notifications |
| `react-share` | Social media sharing |
| `swiper` | Hero banner/slider |
| `recharts` | Dashboard charts & graphs |
| `react-icons` | Icon library |

### Server
| Package | Purpose |
|---|---|
| `express` | Server framework |
| `mongodb` / `mongoose` | Database & ODM |
| `better-auth` | Authentication |
| `stripe` | Payment processing |
| `jsonwebtoken` | Token verification |
| `cors` | Cross-origin requests |
| `dotenv` | Environment variables |

> Update the tables above with the exact packages actually used in your `package.json`.

---

## 🗂️ Core Pages

| Page | Access |
|---|---|
| Home | Public |
| Public Lessons | Public |
| Lesson Details | Private |
| Login / Register | Public |
| Pricing / Upgrade | Private |
| Payment Success / Cancel | Private |
| Favorites | Private |
| Dashboard (User) | Private |
| Add Lesson | Private |
| My Lessons | Private |
| Update Lesson | Private |
| Admin Dashboard | Private (Admin) |
| 404 Not Found | Public |

---

## 🧩 MongoDB Collections

| Collection | Key Fields |
|---|---|
| `users` | `isPremium`, `role`, `name`, `email`, `photoURL` |
| `lessons` | `title`, `description`, `category`, `emotionalTone`, `visibility`, `accessLevel`, `likes[]`, `likesCount`, `isFeatured`, `isReviewed`, `creatorId` |
| `lessonsReports` | `lessonId`, `reporterUserId`, `reportedUserEmail`, `reason`, `timestamp` |
| `favorites` | `userId`, `lessonId`, `savedAt` |
| `comments` | `lessonId`, `userId`, `text`, `createdAt` |

---

## 🔐 Environment Variables

Create a `.env` file in both the client and server root directories (never commit this file):

**Client `.env`**
```
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_BETTER_AUTH_URL=
NEXT_PUBLIC_GOOGLE_CLIENT_ID=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

**Server `.env`**
```
PORT=
MONGODB_URI=
BETTER_AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
JWT_SECRET=
```

---

## ⚙️ Getting Started Locally

```bash
# Clone the client
git clone https://github.com/your-username/digital-life-lessons-client.git
cd digital-life-lessons-client
npm install
npm run dev

# Clone the server
git clone https://github.com/your-username/digital-life-lessons-server.git
cd digital-life-lessons-server
npm install
npm run dev
```

---

## 🏆 Challenges Implemented

- ✅ Search + Filter + Sort on Public Lessons
- ✅ Server-side token verification on protected routes (owner/admin only edit & delete)
- ✅ Pagination on Public Lessons

---

## 💡 Optional Features Implemented

- [ ] Dark / Light theme toggle
- [ ] Social sharing (Facebook, X, LinkedIn) via `react-share`
- [ ] Export lessons as PDF
- [ ] Estimated reading time auto-calculation
- [ ] User activity heatmap / streak tracker

---

## 📌 Notes

- Built as part of **Programming Hero — Batch 13, Assignment A10**.
- Uses **Better Auth** for authentication and **Stripe test mode** for payments.