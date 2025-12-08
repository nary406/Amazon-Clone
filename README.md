# Next.js E-commerce Application

This is a fully optimized, production-ready Next.js application converted from a React.js project.

## Project Structure

- `src/app`: App Router pages and layouts.
  - `page.tsx`: Home page.
  - `login/page.tsx`: Login page.
  - `products/page.tsx`: Products listing page.
  - `products/[id]/page.tsx`: Product details page.
  - `cart/page.tsx`: Cart page.
  - `api/`: API routes for backend logic.
- `src/components`: Reusable UI components.
  - `Header`, `HeroBanner`, `ProductCard`, etc.
- `src/context`: React Context for state management (CartContext).
- `src/lib`: Utility functions and libraries.
- `src/hooks`: Custom React hooks.
- `src/services`: API service layer.
- `src/ui`: Generic UI components (buttons, inputs, etc.).
- `src/utils`: Helper functions.
- `src/types`: TypeScript type definitions.

## Key Features

- **Next.js App Router**: Uses the latest Next.js 14+ App Router for routing and layouts.
- **Server Components**: Utilizes Server Components for data fetching (Products, Product Details, Featured Products) to improve performance and SEO.
- **Client Components**: Uses Client Components for interactive elements (Cart, Login, Filters).
- **Context API**: Manages global cart state using React Context.
- **Middleware**: Protects routes using Next.js Middleware.
- **API Routes**: Implements backend logic with Next.js API Routes (mock data provided).
- **Styling**: Uses CSS Modules and global CSS for styling, migrated from the original project.
- **Image Optimization**: Uses `next/image` for optimized image loading.

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Endpoints (Mock)

- `POST /api/login`: Authenticate user.
- `GET /api/products`: Get all products (supports filtering and sorting).
- `GET /api/products/:id`: Get product details.
- `GET /api/prime-deals`: Get exclusive prime deals.

## Authentication

- Uses a mock authentication system.
- Default credentials:
  - Username: `rahul`
  - Password: `rahul@2021`
- Stores JWT in cookies for session management.

## Deployment

The application is ready to be deployed on Vercel or any other Next.js compatible hosting provider.
