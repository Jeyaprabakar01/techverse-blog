# TechVerse Blog

A **minimal blog website** developed using **Next.js (App Router)**, **Tailwind CSS**, and **Sanity Headless CMS**, with a strong focus on **architecture**, **SEO**, **performance**, and **scalable content management**.

It includes a **homepage listing all blog posts** and **single blog pages**, featuring **server-side rendering**, **optimized performance**, and **SEO-focused architecture**. Perfect for practicing **dynamic routing**, **server-rendered React**, and **CMS integration**.

TechVerse Blog leverages **server components**, **dynamic metadata generation**, and **Sanity CMS** for structured, scalable content workflows, resulting in a \*\*fast, reliable, and suitable for learning and practice.

---

## Architecture & Project Structure

### **Folder Structure**

```
techverse-blog/
│
├── app/                       # Main Next.js App folder (App Router)
│   ├── [slug]/                # Dynamic route for individual blog posts
│   │   ├── page.tsx           # Page for a single blog post
│   │   └── loading.tsx        # Loading state for the blog post page
│   ├── page.tsx               # Homepage listing all blog posts
│   ├── layout.tsx             # Layout wrapper for all pages
│   └── globals.css            # Global CSS applied across the app
│
├── components/                # Reusable UI components
│   ├── BlogCard.tsx           # Blog post card
│   ├── FeaturedBlogCard.tsx   # Featured blog post card
│   └── BlogList.tsx           # Component to render a list of BlogCards
│
├── lib/                       # Library functions
│   └── sanity/                # Sanity CMS integration
│       ├── client.ts          # Sanity client setup for fetching data
│       ├── posts.ts           # Queries and functions for blog posts
│       └── ImageUrlBuilder.ts # Helper to generate image URLs from Sanity
│
├── utils/                     # General utility functions
│   ├── dateUtils.ts           # Date formatting helpers
│   └── textUtils.ts           # Text formatting helpers
│
├── public/                    # Public assets
│   └── images/
│       └── common/
│           └── thumbnail-placeholder.jpg  # Default blog thumbnail
│
├── types/                     # TypeScript type definitions
│   └── posts.ts               # Types/interfaces for blog posts
│
├── next.config.ts             # Next.js configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # Project overview and setup instructions


```

### **Architectural Highlights**

- **App Router** with full server component rendering
- **Dynamic routes** using `generateStaticParams()`
- **Dynamic metadata** with `generateMetadata()`
- **Decoupled Sanity integration** using modular libraries
- **Reusable UI components (BlogCard, FeaturedBlogCard, BlogList)**
- **Typesafe models** using TypeScript
- **Centralized utilities** for formatting, content parsing
- **Clean, scalable module separation**

This architecture ensures **clarity, modularity, and future scalability**.

---

## Performance Optimizations

### Server Components by Default

No hydration overhead unless necessary. lightweight and fast.

### Server-Side Rendering (SSR) + Static Generation

- Statically pre-renders blog routes via `generateStaticParams()`
- Fetches content on the server → No client-side fetch penalty

### Optimized Image Delivery

- `next/image` for responsive, lazy-loaded images
- Sanity Image CDN for smart resizing + compression

### Tailwind CSS

Lightweight, utility-based styling for fast UI development.

---

## SEO Optimization

### Dynamic Metadata per Blog

Using `generateMetadata()`:

- Dynamic `title`, `description`, `keywords`
- OpenGraph image previews
- Post-specific URLs for better indexing
- Fallback metadata for missing posts

### Global SEO in `layout.tsx`

- Root-level OpenGraph
- Preloaded Google Font (Patrick Hand)
- Descriptive site-wide metadata

### SEO-friendly App Router routing

Clean, crawlable URLs like:

---

## Sanity CMS Integration

- Uses **GROQ queries** for fetching posts
- Centralized data fetching:
  - `getPosts()` → Blog listing
  - `getPost(slug)` → Single blog page
- Real-time preview ready
- Optimized image URLs via Sanity Image Builder
- Supports PortableText rich content

---

## Tech Stack

| Category       | Technologies                      |
| -------------- | --------------------------------- |
| **Framework**  | Next.js 16 (App Router)           |
| **Frontend**   | React 19, Tailwind CSS 4          |
| **CMS**        | Sanity v4                         |
| **Languages**  | TypeScript                        |
| **Deployment** | Vercel                            |
| **Tools**      | ESLint, Prettier, Tailwind Plugin |

---

## Features

- High-performance SSR blog pages
- Clean UI with Tailwind CSS
- Markdown/Rich Text rendering via PortableText
- Reusable and modular components
- Optimized images with fallback placeholder
- Fully typed data models (TypeScript)
- Production-ready SEO implementation
- Strong architecture with separated concerns

---

## Setup Guide

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)

### Sanity Setup

1. **Create Sanity Account**
   - Go to [sanity.io](https://sanity.io)
   - Sign up for a new account
   - Follow the instructions provided after account creation

2. **Get Your Project ID**
   - Once your account is created, you need to create a project under your account
   - Navigate to your Sanity dashboard
   - Click on "Create New Project"
   - Follow the project creation steps

### Project Setup

1. **Clone the Repository**

```bash
   git clone https://github.com/Jeyaprabakar01/techverse-blog.git
   cd techverse-blog
```

2. **Install Dependencies**

```bash
   npm i
```

3. **Configure Environment Variables**
   - Create a `.env` file in the root directory
   - Add your Sanity Project ID:

```
   SANITY_PROJECT_ID=your_project_id_here
```

4. **Run the Development Server**

```bash
   npm run dev
```

### Troubleshooting

If you encounter any issues:

- Ensure your Project ID is correct
- Check that all dependencies installed successfully
- Verify Node.js and npm are properly installed

### Support

For additional help, refer to the [Sanity documentation](https://www.sanity.io/docs).

