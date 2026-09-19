# Temperature Converter

A responsive and interactive **Temperature Converter** built with HTML, CSS, and JavaScript. The application allows users to enter a temperature in Celsius, Fahrenheit, or Kelvin and instantly view the equivalent values in all three temperature scales.

The interface also includes a visual thermometer gauge that updates according to the converted Celsius temperature.

## Features

* Convert temperatures between:

  * Celsius (°C)
  * Fahrenheit (°F)
  * Kelvin (K)
* Instant conversion when the value or input unit changes
* Convert using the **Enter** key or Convert button
* Interactive thermometer gauge
* Dynamic gauge color based on temperature
* Temperature scale markings for Celsius, Fahrenheit, and Kelvin
* Input validation and error messages
* Prevents temperatures below absolute zero
* Results displayed with two decimal places
* Responsive layout for desktop, tablet, and mobile screens
* Reduced-motion support for accessibility
* Clean dark-themed user interface

## Technologies Used

* **HTML5** — Structure of the application
* **CSS3** — Styling, layout, responsive design, animations, and color themes
* **JavaScript** — Temperature conversion, validation, and interactive functionality
* **SVG** — Thermometer gauge and temperature scale
* **Google Fonts** — Space Grotesk and JetBrains Mono

## Temperature Conversion

The application supports conversion between all three temperature scales.

### Celsius to Fahrenheit

```text
°F = (°C × 9/5) + 32
```

### Celsius to Kelvin

```text
K = °C + 273.15
```

### Fahrenheit to Celsius

```text
°C = (°F - 32) × 5/9
```

### Kelvin to Celsius

```text
°C = K - 273.15
```

The remaining values are calculated from the Celsius temperature.

## Thermometer Gauge

The application includes an SVG-based thermometer gauge.

The visual gauge covers a range from:

```text
-40°C to 60°C
```

The gauge automatically:

* Adjusts the mercury level according to the Celsius value
* Changes color according to the temperature
* Displays Celsius, Fahrenheit, and Kelvin scale markings
* Moves the temperature marker to the corresponding position

The gauge uses a color transition from cool blue to orange and then red as the temperature increases.

## Input Validation

The application validates user input before displaying results.

It handles:

* Empty temperature input
* Invalid numeric values
* Temperatures below absolute zero

If the entered temperature is below:

```text
-273.15°C
```

the application displays an error because this is below absolute zero.

## Responsive Design

The layout is designed to work across different screen sizes.

### Desktop

The thermometer gauge and conversion form are displayed side by side.

### Tablet and Mobile

The layout changes to a single-column design for smaller screens.

The result cards also adapt to smaller screen sizes.

## Project Structure

```text
Temperature-Converter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or clone the project.

2. Make sure the following files are in the same folder:

```text
index.html
style.css
script.js
```

3. Open `index.html` in any modern web browser.

No server, database, or additional installation is required.

## How It Works

1. Enter a temperature value.
2. Select the input unit:

   * Celsius
   * Fahrenheit
   * Kelvin
3. Click **Convert** or press **Enter**.
4. The application calculates the equivalent temperatures.
5. The results are displayed in all three units.
6. The thermometer gauge updates according to the Celsius value.

The conversion also runs automatically when the input value or selected unit is changed.

## Accessibility

The project includes basic accessibility features such as:

* Semantic HTML elements
* Labels associated with form controls
* `aria-live` for error messages
* `role="alert"` for validation messages
* Descriptive `aria-label` for the thermometer SVG
* Keyboard support using the Enter key
* Reduced-motion support through `prefers-reduced-motion`

## Project Purpose

This project was created to practice:

* JavaScript calculations
* DOM manipulation
* Event handling
* Form validation
* Dynamic UI updates
* SVG manipulation
* Responsive web design
* CSS animations and transitions

## Author

**Seemal Imran**

BS Information Technology Student
Frontend / Web Development

## License

This project is created for educational and portfolio purposes.
