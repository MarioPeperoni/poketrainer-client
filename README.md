# PokéTrainer Client

Next.js frontend for the PokéTrainer application.

## How to set up and run the project

### Prerequisites
- Bun installed (https://bun.sh/)
- Backend API running on http://localhost:5017

### Installation

```bash
# Install dependencies
bun install
```

### Environment Variables

Create `.env.local`:
```env
BACKEND_URL=http://localhost:5017
```

### Development

```bash
bun run dev
```

Application will be available at http://localhost:3000

### Production Build

```bash
bun run build
bun run start
```

## Project Structure

```
poketrainer-client/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── DateDisplay.tsx
│   ├── PokemonPreview.tsx
│   ├── PokemonTypeBadge.tsx
│   ├── SuccessDialog.tsx
│   ├── TrainerCard.tsx
│   └── TrainerForm.tsx
├── data/                  # API data fetchers
├── hooks/                 # Custom React hooks
├── providers/             # Context providers
├── queries/               # TanStack Query hooks
├── schemas/               # Zod validation schemas
└── types/                 # TypeScript types
```

## Available Scripts

```bash
bun run dev      # Start development server
bun run build    # Build for production
bun run start    # Start production server
bun run lint     # Run ESLint
```

## Docker Support

Build and run with Docker:

```bash
docker build -t poketrainer-client .
docker run -p 3000:3000 -e BACKEND_URL=http://localhost:5017 poketrainer-client
```