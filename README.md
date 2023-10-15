# Project Management App

This project was bootstrapped with Create React App and utilizes React, Material UI, and React Router DOM to build a project management application.

## Overview

The app allows users to:

- View, add, and switch between website, mobile, and conference projects using tabs
- Open a dialog to create new projects by clicking the + button
- Navigation happens client-side using React Router DOM

## Implementation Details

- `App.tsx` renders the main UI with tabs, handles opening the dialog, and manages router navigation
- `MainDialog.tsx` contains the dialog for creating new projects
- `NavigationMenu.tsx` contains the tabs navigation
- `functions/fun.ts` contains a helper function to update the URL parameters
- React state manages dialog open/close and current tab
- Material UI provides responsive UI components
- React Router handles client-side navigation

## Next Steps

- Connect to a backend to save created projects
- Add routes and components to display project details
- Implement user accounts and authentication
