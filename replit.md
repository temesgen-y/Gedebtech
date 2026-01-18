# wODEB Technologies Website

## Overview

This is a professional enterprise-grade software company website for wODEB Technologies, a software development and technology services company. The website showcases services, projects, industries served, and provides lead generation functionality through contact forms and talent hiring features. The platform is designed to communicate technical excellence and trust to enterprise, government, and startup clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- **Framework**: React with TypeScript running on Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **State Management**: TanStack React Query for server state and data fetching
- **Theme System**: Custom ThemeProvider with light/dark mode support using CSS variables
- **Form Handling**: React Hook Form with Zod validation

**Design Philosophy**: Following Linear, Stripe, and Vercel-inspired aesthetics for professional sophistication. Typography uses Inter for body text and Space Grotesk for display headings.

### Backend Architecture

- **Runtime**: Node.js with Express.js
- **API Design**: RESTful endpoints under `/api/` prefix
- **Build System**: Custom esbuild script for production bundling with selective dependency bundling for cold start optimization
- **Development**: Vite dev server with HMR integration

### Data Storage

- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains all database table definitions
- **Current Tables**: Users and Contact Messages
- **Fallback**: MemStorage class provides in-memory storage when database is unavailable

### Project Structure

```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Backend Express application
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── static.ts     # Static file serving
├── shared/           # Shared code between client/server
│   └── schema.ts     # Database schema and types
└── attached_assets/  # Static images and assets
```

### Key Design Patterns

- **Shared Schema**: Types and validation schemas are shared between frontend and backend via the `shared/` directory
- **Path Aliases**: `@/` maps to client source, `@shared/` maps to shared code
- **API Pattern**: All API calls go through `apiRequest` helper with automatic error handling
- **Component Organization**: UI primitives in `components/ui/`, feature components at top level

## External Dependencies

### Database
- PostgreSQL (via DATABASE_URL environment variable)
- Drizzle ORM for database operations
- drizzle-kit for migrations (`npm run db:push`)

### UI Component Library
- shadcn/ui components built on Radix UI primitives
- Full component suite including dialogs, forms, navigation, and data display

### Key Runtime Dependencies
- express for HTTP server
- @tanstack/react-query for data fetching
- zod for runtime validation
- react-hook-form for form management
- wouter for client routing

### Development Tools
- Vite for frontend bundling and HMR
- esbuild for server bundling
- TypeScript for type safety
- Replit-specific plugins for development experience