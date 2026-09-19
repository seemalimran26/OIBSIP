# Tribute Page

A responsive and visually engaging **Tribute Page** created using HTML, CSS, and JavaScript. The page presents information about a notable personality through a structured layout with interactive animations, image sections, a timeline, and responsive navigation.

## Features

* Responsive tribute page design
* Intro loading animation
* Mobile navigation menu
* Smooth anchor scrolling
* Scroll-based reveal animations
* Staggered animation effects for page sections
* Scroll progress indicator
* Header styling changes while scrolling
* Mouse-following cursor glow on desktop
* Subtle parallax effect for the hero image
* Animated timeline progress line
* Keyboard-friendly image cards and gallery items
* Responsive layout for desktop, tablet, and mobile devices

## Technologies Used

* **HTML5** — Structure and content
* **CSS3** — Styling, responsive layout, animations, and visual effects
* **JavaScript** — Interactivity, DOM manipulation, scroll effects, and navigation
* **Intersection Observer API** — Scroll reveal animations
* **CSS Transitions & Transforms** — Interactive animations and visual effects

## Interactive Features

### Intro Loader

When the page loads, an introductory loader is displayed before the main content becomes available.

The loader automatically receives a `done` class after a short delay to complete the intro animation.

### Mobile Navigation

The navigation menu adapts to smaller screens.

Users can open and close the mobile navigation using the menu toggle button. The menu also closes automatically when a navigation link is selected.

### Scroll Reveal

Page elements with the `.reveal` class are observed using the **Intersection Observer API**.

When an element enters the viewport, it receives the `visible` class and appears with a reveal animation.

The animations also use staggered transition delays to create a smoother visual sequence.

### Scroll Progress

A progress indicator at the top of the page shows how far the user has scrolled.

The progress percentage is calculated based on the total document height and current scroll position.

### Header Scroll Effect

The header receives a `scrolled` class when the user scrolls more than 60 pixels.

This allows the header styling to change dynamically while scrolling.

### Cursor Glow

On desktop screens, a cursor glow follows the user's mouse movement.

The effect is disabled on smaller screens to provide a better mobile experience.

### Hero Image Parallax

The hero image frame moves slightly as the user scrolls, creating a subtle parallax effect.

The effect is only enabled on desktop-sized screens.

### Timeline Animation

The tribute page includes a timeline with a dynamically animated progress line.

The progress of the line changes according to the user's scroll position relative to the timeline section.

### Smooth Scrolling

Navigation links pointing to page sections use smooth scrolling instead of instantly jumping to the selected section.

## Responsive Design

The page is designed to work across different screen sizes.

### Desktop

The full layout includes interactive effects such as:

* Cursor glow
* Hero image parallax
* Scroll animations
* Timeline progress

### Mobile

The layout adapts for smaller screens with:

* Mobile navigation
* Responsive content sections
* Touch-friendly controls
* Desktop-only effects disabled where appropriate

## Accessibility

The project includes several accessibility-friendly features:

* Semantic HTML structure
* Keyboard-accessible image and gallery cards
* Navigation controls
* Smooth scrolling for better navigation
* Responsive layout
* Desktop effects limited on smaller devices

Image cards and gallery items are given a `tabindex` so they can receive keyboard focus.

## Project Structure

```text
Tribute-Page/
│
├── index.html
├── style.css
├── script.js
├── images/
│   └── ...
└── README.md
```

## How to Run

1. Download or clone the project.
2. Keep `index.html`, `style.css`, and `script.js` in the correct project folder.
3. Make sure the required images are placed in the appropriate images directory.
4. Open `index.html` in a modern web browser.

No server, database, or additional installation is required.

## JavaScript Functionality

The JavaScript controls the interactive behavior of the page, including:

* Page loading animation
* Mobile navigation
* Scroll reveal animations
* Scroll progress indicator
* Header scroll state
* Mouse cursor glow
* Hero image parallax
* Timeline progress animation
* Smooth section navigation
* Keyboard-friendly image interactions

## Project Purpose

This project was created to practice:

* HTML page structuring
* CSS responsive design
* JavaScript DOM manipulation
* Event listeners
* Intersection Observer API
* Scroll-based animations
* CSS transitions and transforms
* Responsive navigation
* Interactive storytelling through web design

## Author

**Seemal Imran**

BS Information Technology Student
Frontend / Web Development

## License

This project is created for educational and portfolio purposes.
