# React + Appwrite Blog App

A full-stack blogging platform built with **React**, **Redux Toolkit**, and **Appwrite** as the backend-as-a-service. Users can sign up, log in, and create, edit, publish, and delete blog posts with rich text content and featured images.



---

## Features

- 🔐 **Authentication** — signup, login, and logout using Appwrite Auth, with global auth state managed via Redux
- 📝 **Rich text editor** — TinyMCE-powered content editor for writing posts
- 🖼️ **Image uploads** — featured images stored in Appwrite Storage, served via file previews
- ✍️ **Full CRUD** — create, read, update, and delete posts
- 🟢 **Post status control** — mark posts `active` or `inactive`; only active posts are publicly listed
- 🔗 **Auto-generated slugs** — URL-friendly slugs generated automatically from the post title
- 🔒 **Protected routes** — edit/delete actions restricted to the post's author
- 📱 **Responsive UI** — built with Tailwind CSS

---

## Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Frontend   | React, React Router, Redux Toolkit   |
| Styling    | Tailwind CSS                         |
| Forms      | React Hook Form                      |
| Editor     | TinyMCE                              |
| Backend    | Appwrite (Auth, Databases, Storage)  |
| Build Tool | Vite                                 |

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- An [Appwrite](https://appwrite.io) project with a database, table (collection), and storage bucket set up

### Installation

```bash
git clone https://github.com/Suresh-kumar04/react-appwrite-blog.git
cd react-appwrite-blog
npm install
```

### Environment Variables

Copy the sample environment file and fill in your own Appwrite project credentials:

```bash
cp .env.sample .env
```

```env
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_TABLE_ID=
VITE_APPWRITE_BUCKET_ID=
```

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Project Structure

```
src/
├── appwrite/       # Appwrite service layer (auth + database/storage config)
├── components/     # Reusable UI components (forms, buttons, post cards, etc.)
├── pages/          # Route-level pages (Home, AllPosts, Post, EditPost, AddPost)
├── store/          # Redux store and auth slice
└── App.jsx
```

---

## What I Learned

Building this project involved working through real-world issues beyond just writing features, including:
- Debugging data-shape mismatches between what's saved to and read from the database
- Handling async/await pitfalls that silently return unresolved Promises
- Diagnosing storage permission errors and plan-based feature restrictions on a BaaS platform
- Keeping cloud credentials out of version control with environment variables

---

## Roadmap

- [ ] Comments on posts
- [ ] Pagination for post listings
- [ ] Search functionality
- [ ] Improved responsive design polish

---

## License

This project is open source and available under the [MIT License](LICENSE).
