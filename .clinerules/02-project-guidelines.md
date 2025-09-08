---
description:
globs:
alwaysApply: true
---

# React Router 7 Project Guidelines

## Documentation Resources

- Refer to the following documentation pages for guidance:
- https://reactrouter.com/start/data/routing
- [Route Module](mdc:https:/reactrouter.com/start/framework/route-module)
- [Rendering](mdc:https:/reactrouter.com/start/framework/rendering)
- [Data Loading](mdc:https:/reactrouter.com/start/framework/data-loading)
- [Actions](mdc:https:/reactrouter.com/start/framework/actions)
- [Navigating](mdc:https:/reactrouter.com/start/framework/navigating)

## Package Installation

- Do **not** install Remix packages; they are incompatible with React Router 7.

## Routing

This project **does not** use file base routing. All routes should be declared on `routes.ts` and the correspondent route modules should be stored on `~/routes`.

Route Modules should export at least one function that is the React function, which is exported by default. Other exports can be: loader, action, ErrorBoundary.

## Data Loading

- Prefer server-side data loading over client-side unless otherwise specified.
- Data loading should always occur on route modules and never on the feature components.

## Feature Components

Should be placed under `~/features` and their React function should **not** be exported by default.

Example:

```typescript
export function ComponentName() {}
```

## Import Statements

- Use `~` for imports instead of relative paths.
- Use `'react-router'` for React Router tools, not `'react-router-dom'`.

## UI Components

- Use Shadcn UI for building the UI. Exclusively.
- Use icons from Lucide React. Exclusively.
- Installed Shadcn UI components are located in `~/components/ui`.
- If a component is missing, install it using Shadcn's CLI.
