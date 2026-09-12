const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert-btn");
const celsiusResult = document.getElementById("celsius-result");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const kelvinResult = document.getElementById("kelvin-result");
const errorMessage = document.getElementById("error-message");

const mercuryFill = document.getElementById("mercury-fill");
const bulbFill = document.getElementById("bulb-fill");
const marker = document.getElementById("marker");
const ticksGroup = document.getElementById("ticks");

// Gauge geometry: visual range -40C to 60C, mapped onto the tube
const GAUGE_MIN_C = -40;
const GAUGE_MAX_C = 60;
const TUBE_TOP_Y = 30;
const TUBE_BOTTOM_Y = 380; // where mercury column meets the bulb

function celsiusToY(c) {
  const clamped = Math.min(Math.max(c, GAUGE_MIN_C), GAUGE_MAX_C);
  const pct = (clamped - GAUGE_MIN_C) / (GAUGE_MAX_C - GAUGE_MIN_C);
  return TUBE_BOTTOM_Y - pct * (TUBE_BOTTOM_Y - TUBE_TOP_Y);
}

function lerpColor(a, b, t) {
  const ah = parseInt(a.slice(1), 16),
    bh = parseInt(b.slice(1), 16);
  const ar = (ah >> 16) & 255,
    ag = (ah >> 8) & 255,
    ab = ah & 255;
  const br = (bh >> 16) & 255,
    bg = (bh >> 8) & 255,
    bb = bh & 255;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const b2 = Math.round(ab + (bb - ab) * t);
  return "#" + [r, g, b2].map((v) => v.toString(16).padStart(2, "0")).join("");
}

function colorForCelsius(c) {
  const clamped = Math.min(Math.max(c, GAUGE_MIN_C), GAUGE_MAX_C);
  const pct = (clamped - GAUGE_MIN_C) / (GAUGE_MAX_C - GAUGE_MIN_C);
  if (pct < 0.5) return lerpColor("#4cc9f0", "#f4a261", pct / 0.5);
  return lerpColor("#f4a261", "#e6455a", (pct - 0.5) / 0.5);
}

function drawTicks() {
  let svgMarkup = "";
  for (let c = GAUGE_MIN_C; c <= GAUGE_MAX_C; c += 20) {
    const y = celsiusToY(c);
    const f = Math.round((c * 9) / 5 + 32);
    const k = Math.round(c + 273.15);
    svgMarkup += `<line class="tick-line" x1="26" y1="${y}" x2="200" y2="${y}"/>`;
    svgMarkup += `<text class="tick-label" x="4" y="${y + 4}">${c}</text>`;
    svgMarkup += `<text class="tick-label" x="150" y="${y + 4}">${f}</text>`;
    svgMarkup += `<text class="tick-label" x="186" y="${y + 4}">${k}</text>`;
  }
  ticksGroup.innerHTML = svgMarkup;
}

function updateGauge(celsius, hasValue) {
  const color = colorForCelsius(celsius);
  if (!hasValue) {
    mercuryFill.setAttribute("height", 0);
    mercuryFill.setAttribute("y", TUBE_BOTTOM_Y);
    bulbFill.setAttribute("fill", "#33465a");
    marker.classList.remove("active");
    return;
  }
  const y = celsiusToY(celsius);
  mercuryFill.setAttribute("y", y);
  mercuryFill.setAttribute("height", TUBE_BOTTOM_Y - y);
  mercuryFill.setAttribute("fill", color);
  bulbFill.setAttribute("fill", color);
  marker.setAttribute("transform", `translate(0, ${y})`);
  marker.querySelector("polygon").setAttribute("fill", color);
  marker.classList.add("active");
}

function convertTemperature() {
  const temperature = temperatureInput.value;
  const unit = unitSelect.value;
  errorMessage.textContent = "";

  if (temperature === "") {
    showError("Enter a temperature value.");
    clearResults();
    return;
  }

  const value = Number(temperature);
  if (!Number.isFinite(value)) {
    showError("Enter a valid numeric value.");
    clearResults();
    return;
  }

  let celsius, fahrenheit, kelvin;
  if (unit === "celsius") {
    celsius = value;
    fahrenheit = (value * 9) / 5 + 32;
    kelvin = value + 273.15;
  } else if (unit === "fahrenheit") {
    celsius = ((value - 32) * 5) / 9;
    fahrenheit = value;
    kelvin = celsius + 273.15;
  } else {
    kelvin = value;
    celsius = value - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
  }

  if (celsius < -273.15) {
    showError("Temperature cannot be below absolute zero.");
    clearResults();
    return;
  }

  displayResults(celsius, fahrenheit, kelvin);
  updateGauge(celsius, true);
}

function displayResults(celsius, fahrenheit, kelvin) {
  celsiusResult.textContent = celsius.toFixed(2) + " °C";
  fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
  kelvinResult.textContent = kelvin.toFixed(2) + " K";
}

function showError(message) {
  errorMessage.textContent = message;
}

function clearResults() {
  celsiusResult.textContent = "--";
  fahrenheitResult.textContent = "--";
  kelvinResult.textContent = "--";
  updateGauge(0, false);
}

convertButton.addEventListener("click", convertTemperature);
temperatureInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") convertTemperature();
});
temperatureInput.addEventListener("input", convertTemperature);
unitSelect.addEventListener("change", convertTemperature);

drawTicks();
clearResults();
