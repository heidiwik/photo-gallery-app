# Photo Gallery App

A React-based sample application that can be used for git and GitHub examples and demos.

# Important

This repository is intended for demonstration and practice purposes. It is used for security training and may contain known vulnerabilities.

It is intended to be run locally in a controlled environment for learning and experimentation.

**Do not use this repository in production or expose it to the public internet.**

## Tech Stack

- **React 19** with TypeScript
- **React Router** — client-side routing
- **Vite** — build tool and dev server
- **MUI (Material UI)** — component library
- **MSAL** — Microsoft authentication (via `@azure/msal-browser`)
- **Microsoft Graph API** — fetching SharePoint sites, lists, and list items

## Getting Started

### Prerequisites

- Node.js (v18+)
- An Azure AD app registration with a client ID

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_CLIENT_ID=<your-azure-ad-client-id>
VITE_REDIRECT_URL=http://localhost:5173
```

### Install & Run

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Deployment

The `deploy/` folder contains a pre-built version of the app. The `public/routes.json` configures SPA fallback routing
for Azure Static Web Apps.
