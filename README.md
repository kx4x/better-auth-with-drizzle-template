# Next.js + Drizzle + Better Auth Template by kx4x

This is a modern full-stack template that combines Next.js with Drizzle ORM and Better Auth for a seamless development experience.

## Features

- **Next.js 15**: App Router, Server Components, API Routes
- **Drizzle ORM**: Type-safe SQL query builder with PostgreSQL support
- **Better Auth**: Flexible authentication system with multiple strategies
- **TypeScript**: Full type safety across the entire application
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Responsive Design**: Mobile-first approach for all components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL or [Neon Database](https://neon.tech/) (serverless PostgreSQL database)
- A package manager: npm, yarn, pnpm or bun

### Environment Setup

1. **Clone the repository**

```bash
git clone https://github.com/kx4x/better-auth-with-drizzle-template.git
cd better-auth-with-drizzle-template
```

2. **Configure environment variables**

Create a `.env` file in the project root with the following variables:

```env
# PostgreSQL database connection URL
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"

# Authentication secret key (generate a strong key and keep it secret)
BETTER_AUTH_SECRET="your-secret-key-here"

# Application base URL
BETTER_AUTH_URL="http://localhost:3000"
```

> **Tip**: To generate a strong secret key, you can use: `openssl rand -base64 32`

3. **Install dependencies**

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn

# Using pnpm
pnpm install

# Using bun
bun install
```

4. **Set up the database**

Run the migration to create the necessary tables in your database:

```bash
# Using npm
npm run db:push

# Using yarn
yarn db:push

# Using pnpm
pnpm db:push

# Using bun
bun run db:push
```

5. **Start the development server**

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun run dev
```

Now you can access the application at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
/
├── public/             # Static files
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── (auth)/     # Authentication routes
│   │   ├── api/        # API routes
│   │   └── dashboard/  # Protected dashboard
│   ├── components/     # Reusable React components
│   ├── db/             # Drizzle ORM configuration and schema
│   └── lib/            # Utilities and configurations
└── drizzle/            # Drizzle migrations
```

## Authentication

This template uses Better Auth to provide multiple authentication strategies:

- Email/password authentication (enabled by default)

## Customization

### UI and Components

This template uses TailwindCSS and shadcn/ui components.

### Database

The database schema is defined in `src/db/schema.ts`. Modify this file to add or alter tables as needed.

### Adding New Pages

To add new pages, create files inside the `src/app/` directory. The Next.js App Router uses file system conventions for routing.

## Useful Commands

```bash
# Development
bun run dev         # Start the development server

# Database
bun run db:push     # Apply schema to database
bun run db:studio   # Open Drizzle Studio to manage the database
bun run db:generate # Generate a new migration
bun run db:reset    # Reset the database (caution: deletes all data)

# Build and Production
bun run build       # Create a production build
bun run start       # Start the production server
```
