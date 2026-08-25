# FutureNest

FutureNest is a small Nuxt website for validating Pinterest traffic around future living, home technology, off-grid ideas, and seasonal campaigns.

The first validation version is intentionally simple:

- Nuxt static generation
- Markdown or local data files for content
- No database or CMS
- Nginx serving the generated files on the Hostinger KVM1 VPS
- Public website: `https://future.lumicore-labs.com`
- Seasonal landing page: `https://future.lumicore-labs.com/halloween`

## Requirements

- Node.js 20 or newer
- npm
- Git

## Local Setup

```bash
npm install
```

Copy `.env.example` to `.env` and fill in values only when a feature requires them. Never commit `.env`.

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Commands

```bash
# Start development server
npm run dev

# Generate static production files
npm run generate

# Build a server-rendered production application if needed later
npm run build

# Preview the generated production output
npm run preview
```

The static deployment files are generated in `.output/public`.

## Project Structure

```text
app/
	app.vue                 Application shell
	pages/                  Route pages, including /halloween
	components/             Reusable UI components
	content/                Markdown content when added
	data/                   Local product and campaign data when added
public/                   Static images and files
nuxt.config.ts            Nuxt configuration
.env.example              Safe environment-variable template
```

## Git Workflow

This folder is a separate Git repository from the Pinterest analytics workspace.

```bash
git status
git add .
git commit -m "Initial FutureNest site"
git push -u origin main
```

Do not commit `.env`, credentials, affiliate tokens, or private analytics configuration.

## Deployment Overview

The current deployment target is a Hostinger KVM1 VPS:

1. Push changes to this repository.
2. SSH into the VPS.
3. Build locally with the supported Node.js version.
4. Commit `.output/public` to this repository.
5. Pull the approved commit in `/var/www/future-nest`.
6. Serve the committed `.output/public` through Nginx.
7. Reload Nginx after validating its configuration.

See the workspace-level [Hostinger deployment guide](../HOSTINGER_VPS_DEPLOYMENT.md) for DNS, Nginx, HTTPS, and deployment commands.

## Validation Rules

- Keep the first version focused on measurable Pinterest traffic.
- Do not add a database, CMS, login, AI planner, or second website during the initial test.
- Keep affiliate disclosures visible on commercial pages.
- Verify product, price, safety, and affiliate claims before publishing.
- Record Pinterest campaign UTM values consistently.

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
