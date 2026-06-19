# O'Neil Obidiaso - Developer Portfolio

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

> A modern, highly interactive, and accessible developer portfolio showcasing production-grade software engineering projects.

## About The Project

This repository contains my personal developer portfolio, built from the ground up to not only showcase my technical projects but also to serve as a testament to my commitment to modern web development standards. I designed this platform to be a robust, production-ready application that prioritizes performance, accessibility, and a seamless user experience. By leveraging the latest features in the React ecosystem, this project reflects my continuous pursuit of refining my frontend architecture and UX engineering skills.

<details>
<summary><b>🖼️ View Screenshots</b></summary>
<br>

*Placeholder for Home Page Screenshot*  
*Placeholder for Projects Section Screenshot*  
*Placeholder for Dark Mode Screenshot*

</details>

## Key Features

* **Dynamic Theming:** Seamless dark/light mode integration with system preference detection (`next-themes`).
* **Fluid Animations:** Micro-interactions and page transitions powered by Framer Motion, enhancing user engagement without sacrificing performance.
* **Accessible UI:** Built with Radix UI primitives to ensure complete keyboard navigation and screen-reader compatibility.
* **Responsive Architecture:** A mobile-first design system utilizing Tailwind CSS v4 to guarantee flawless layouts across all device viewports.
* **Markdown Integration:** Dynamic rendering of project data and descriptions using `react-markdown` and `rehype-raw`.

## Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Library:** React 19
* **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
* **Animations:** Framer Motion
* **Accessibility:** Radix UI
* **Language:** TypeScript

## Architecture & Implementation Details

* **Component Composition:** Adopted modern React 19 composition patterns to build highly reusable, flexible components. This approach eliminates prop-drilling and boolean prop proliferation, particularly in complex UI elements like the dynamic project cards.
* **Optimized Styling Engine:** Implemented a robust utility-class merging strategy using `clsx` and `tailwind-merge`. This ensures predictable styling overrides and resolves CSS specificity issues common in component libraries.
* **Edge-Ready & Performant:** Structured the Next.js App Router for optimal Static Site Generation (SSG) while maintaining the flexibility to integrate edge runtime features and API routes for dynamic content fetching (e.g., GitHub API integration).

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Ensure you have Node.js 20+ installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/oneil_obidiaso_portfolio.git
   cd oneil_obidiaso_portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## License

Distributed under the MIT License. See `LICENSE` for more information.
