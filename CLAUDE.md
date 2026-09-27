# Project

A small React 19 + TypeScript + Vite SPA — a demo/teaching app ("sample application that can be used for git and GitHub
examples and demos"). MUI for UI, React Router for routing, Microsoft Graph for a SharePoint news feature that's still
stubbed out.

## Layout

index.html entry HTML, loads Google Fonts (Lato, Dancing Script, Lobster) vite.config.ts minimal: react plugin, base '/'
eslint.config.js flat config, js + tseslint recommended + react-hooks + react-refresh .prettierrc tabs, width 4,
printWidth 120, single quotes, jsxSingleQuote .deployment Azure App Service / Kudu build flag public/routes.json SPA
fallback for Azure Static Web Apps src/ main.tsx root: StrictMode > ThemeProvider (Lato) > CssBaseline > App App.tsx
Router > PageLayout > Routes Menu.tsx `ResponsiveAppBar` — top nav, page list is a hardcoded array App.css / index.css
leftover Vite template CSS, barely used pages/ PageLayout + 5 page components services/ GraphService.ts — static-method
class wrapping Graph REST calls msalConfig.tsx OAuth2 client-credentials token fetch (cached, 5-min buffer) interfaces/
IList, IListItem, ISite enums/SpLocation.ts const-object "enum" + matching type utils/UrlUtils.ts static-method class
for SharePoint URL munging assets/ images-store/, sharepoint-icon.png, react.svg

# Instructions

- Keep changes focused and minimal.
- Don't modify unrelated files.
- Prefer existing project patterns.
- Run relevant tests after changes.
- Ask before making large architectural changes.
