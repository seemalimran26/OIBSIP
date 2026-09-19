# Calculator

A simple and interactive **Calculator** built using HTML, CSS, and JavaScript. The calculator provides a clean dark-themed interface and supports basic arithmetic operations with real-time display updates.

## Features

* Addition
* Subtraction
* Multiplication
* Division
* Decimal number support
* **AC** button to clear the calculator
* **Backspace** button to remove the last character
* **Equals** button to calculate the result
* Prevents multiple decimal points in the same number
* Handles division by zero with an error message
* Allows starting a new calculation after displaying a result
* Supports keyboard **Enter** key for calculation
* Responsive design for smaller screens
* Interactive button hover and click effects

## Technologies Used

* **HTML5** — Structure of the calculator
* **CSS3** — Styling, layout, responsive design, and animations
* **JavaScript** — Calculator logic, DOM manipulation, event handling, and validation

## Supported Operations

The calculator supports the following arithmetic operations:

| Operation      | Symbol |
| -------------- | ------ |
| Addition       | `+`    |
| Subtraction    | `-`    |
| Multiplication | `*`    |
| Division       | `/`    |

## How It Works

1. Enter numbers using the calculator buttons.
2. Select an arithmetic operator.
3. Enter the second number.
4. Press `=` to calculate the result.
5. The result is displayed in the calculator screen.

For example:

```text
10 + 5 = 15
```

Another example:

```text
20 / 4 = 5
```

## Calculator Controls

### AC

Clears the complete calculator state and display.

### Backspace

Removes the last character from the current display.

### Operators

The calculator supports:

```text
+
-
*
/
```

### Equals

Calculates the operation using the entered numbers and operator.

## Error Handling

The calculator includes basic validation and error handling.

### Division by Zero

If the user attempts to divide by zero, the calculator displays:

```text
Error
```

The calculator state is then reset so a new calculation can be started.

### Decimal Validation

The calculator prevents entering multiple decimal points in the same number.

For example:

```text
10.5
```

is allowed, while:

```text
10.5.5
```

is prevented.

## JavaScript Functionality

The calculator uses JavaScript to manage its complete functionality.

Important functions include:

* `enterNumber()` — Handles number and decimal input
* `setOperator()` — Sets the selected arithmetic operator
* `calculate()` — Performs the selected calculation
* `clearCalculator()` — Resets the calculator
* `backspace()` — Removes the last entered character

The project also uses DOM event listeners to respond to button clicks and keyboard input.

## User Interface

The calculator has a dark, modern interface with:

* Centered calculator card
* Large display screen
* Four-column button grid
* Separate styling for operators
* Highlighted equals button
* Clear button styling
* Hover and active button animations
* Responsive mobile layout

## Responsive Design

The calculator includes a mobile breakpoint at **400px**.

On smaller screens:

* Calculator width adjusts automatically
* Button height is reduced
* Display height and font size are adjusted
* Padding is reduced for better screen usage

## Project Structure

```text
Calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or clone the project.
2. Keep the following files in the same folder:

```text
index.html
style.css
script.js
```

3. Open `index.html` in a modern web browser.
4. Start performing calculations.

No server, database, or additional installation is required.

## Project Purpose

This project was created to practice:

* JavaScript fundamentals
* DOM manipulation
* Event handling
* Conditional logic
* Arithmetic operations
* Input validation
* Error handling
* CSS Grid
* Responsive web design
* Interactive UI elements

## Author

**Seemal Imran**

BS Information Technology Student
Frontend / Web Development

## License

This project is created for educational and portfolio purposes.
