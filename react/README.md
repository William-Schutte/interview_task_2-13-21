# Simple app implementation with no database connection

## Assignment:
Routes:
+ `/` - main
+ `/login` - login page with username and password to be entered
+ `/profile` - page with custom text, unavailable until logged in
+ `/kvazavr` - 404

The header contains the following links:

+ Home (`/`)
+ Profile (`/profile`)
+ Sign in (`/login`)
+ 404 (`/kvazavr`)

If a URL is invalid, redirect to `/kvazavr`

If the user is not authorized, redirect to the page `/login`.
Mock data for login - user: student, password: student

If the data is invalid:
Invalid username or password

If data is valid: redirect to `/profile`

## Tutor Review:

You are a tutor, and your task is to review this code.
