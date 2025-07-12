# Debug and Fix Type Errors & Broken UI in a Typed React Feature Module

## Task Description

You have joined a team maintaining a React + TypeScript dashboard application. After a recent refactor aimed at improving type safety and file organization, the 'RecentActivities' feature is no longer working:

- The UI section for recent activities is blank,
- The browser console reports a type error for the 'RecentActivities' props,
- Vite and ESLint fail during build and linting due to TypeScript errors about props/interfaces, as well as a wrong import path for the `Activity` type,
- There is a React warning about a missing 'key' prop in list rendering.

## Your Task

1. Inspect the 'RecentActivities' component implementation.
2. Correctly define and use the props interface/type for the component to eliminate implicit `any` usage.
3. Update the `Activity` type import to use the path alias `@models/Activity` as per project conventions.
4. Ensure each activity in the rendered list receives a valid `key` prop.
5. Ensure strict type-checking and lint rules are fully satisfied (no build or lint errors).
6. Provide a concise summary of your changes and why they were necessary.

## Setup Instructions

1. Ensure you have Docker installed on your machine.
2. From the root of this project, run:
    
    ```sh
    ./run.sh
    ```
    
3. The app will be served at [http://localhost:5173](http://localhost:5173).

## What to Fix

- The 'RecentActivities' feature module is broken due to component typing issues, incorrect import path usage, and missing React key props in list rendering. These must be corrected to restore the feature and pass all build/lint checks.

## Expected Outcomes

- The dashboard displays a list of recent activities with no UI errors.
- There are no type or linter errors (strict mode enforced, no implicit-any, correct import alias, key prop present).
- The codebase passes the build and lint scripts without error.
- You provide a short explanation of what you fixed and why.

## Verification

- Open [http://localhost:5173](http://localhost:5173) and confirm the activities display.
- Run `npm run build` and `npm run lint` inside the container or locally to ensure type and lint checks pass with zero errors.
- Review your concise summary of code changes, ensuring it covers the technical root causes and solutions.
