# Authify — Login Authentication System

Authify is a frontend-based login authentication system built with **HTML, CSS, and JavaScript**. It provides user registration, login authentication, password validation and hashing, session handling, protected dashboard access, and logout functionality.

The project uses **LocalStorage** to store registered users and maintain the login session. Passwords are hashed using the browser's **SHA-256 Web Crypto API** before being stored.

## Features

### Registration

* Full name, username, email, password, and confirm password fields
* Required-field validation
* Full name minimum length validation
* Username validation
* Email format validation
* Password must contain at least 8 characters
* Password must contain at least one number
* Confirm password matching
* Duplicate username/email detection
* Password strength indicator
* Password visibility toggle
* Loading state while creating an account
* Successful registration redirects to the login page

### Password Security

* Passwords are hashed using **SHA-256**
* The original password is not stored directly in LocalStorage
* Password strength is calculated based on:

  * Minimum length
  * Uppercase letters
  * Lowercase letters
  * Numbers
  * Special characters

The project uses the browser's `crypto.subtle.digest()` method for SHA-256 hashing.

### Login

* Login using username or email
* Password verification
* Empty-field validation
* Password hashing before comparison
* Invalid credential error handling
* Sign-in loading state
* Remember Me option
* Redirect to the dashboard after successful authentication

The login checks the entered username/email and hashed password against the users stored in LocalStorage.

### Dashboard

* Protected dashboard page
* Displays the logged-in user's name
* Displays username and email
* Dynamic user avatar using the first letter of the user's name
* Account status
* Recent activity section
* Session overview
* Logout functionality
* Automatic redirect to login when no logged-in session exists

Dashboard access is protected by checking the `loggedInUser` session stored in LocalStorage.

### Additional Features

* Password Show/Hide functionality
* Responsive authentication pages
* Responsive dashboard
* Mobile-friendly sidebar
* Forgot password informational alert
* Clean authentication UI
* Hover and focus effects
* Font Awesome logout icon
* Google Fonts — Inter

## Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **LocalStorage API**
* **Web Crypto API (SHA-256)**
* **Google Fonts**
* **Font Awesome**

The styling includes responsive layouts for authentication pages and the dashboard, with breakpoints for tablet and mobile screens.

## Project Structure

```text
Authify/
│
├── login.html
├── register.html
├── dashboard.html
├── style.css
├── script.js
└── README.md
```

## How It Works

### 1. Create an Account

The user opens `register.html` and enters:

* Full Name
* Username
* Email
* Password
* Confirm Password

After validation, the password is hashed and the user information is stored in LocalStorage.

### 2. Login

The user enters their username/email and password on `login.html`.

The system:

1. Retrieves registered users from LocalStorage.
2. Hashes the entered password using SHA-256.
3. Finds the matching username/email.
4. Compares the hashed password.
5. Creates a login session if the credentials are correct.
6. Redirects the user to `dashboard.html`.

### 3. Dashboard Protection

When the dashboard loads, the system checks whether a logged-in user exists.

If no session is found, the user is redirected back to the login page. Otherwise, the dashboard displays the user's account information.

### 4. Logout

Clicking the Logout button removes the `loggedInUser` session from LocalStorage and redirects the user to the login page.

## Responsive Design

Authify is designed to work across different screen sizes.

* Desktop authentication layout with two columns
* Single-column authentication layout on smaller screens
* Responsive dashboard statistics
* Responsive dashboard content cards
* Mobile sidebar layout
* Mobile-friendly login options and form spacing

## Important Note

This project is a **frontend authentication demonstration**. It uses browser LocalStorage rather than a server-side database or backend authentication service.

The Forgot Password option currently displays an informational message explaining that a real password-reset system would normally use a backend email service.

## Author

**Seemal Imran**

BS Information Technology
Frontend / Full-Stack Web Development
