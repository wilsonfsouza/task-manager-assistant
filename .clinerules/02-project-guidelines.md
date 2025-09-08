---
description: 
globs: 
alwaysApply: true
---
# React Router 7 Project Guidelines

## Documentation Resources
-  Refer to the following documentation pages for guidance:
  - https://reactrouter.com/start/data/routing
  - [Route Module](mdc:https:/reactrouter.com/start/framework/route-module)
  - [Rendering](mdc:https:/reactrouter.com/start/framework/rendering)
  - [Data Loading](mdc:https:/reactrouter.com/start/framework/data-loading)
  - [Actions](mdc:https:/reactrouter.com/start/framework/actions)
  - [Navigating](mdc:https:/reactrouter.com/start/framework/navigating)

## Package Installation
-  Do **not** install Remix packages; they are incompatible with React Router 7.

## Data Loading
-  Prefer server-side data loading over client-side unless otherwise specified.
-  Data loading should always occur on route modules and never on the feature components.

## Import Statements
-  Use `~` for imports instead of relative paths.
-  Use `'react-router'` for React Router tools, not `'react-router-dom'`.

## UI Components
-  Use Shadcn UI for building the UI. Exclusively.
-  Use icons from Lucide React. Exclusively.
-  Installed Shadcn UI components are located in `~/components/ui`.
-  If a component is missing, install it using Shadcn's CLI.