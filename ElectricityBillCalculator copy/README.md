# Electricity Bill Calculator
A lightweight, vanilla JavaScript web application that collects a consumer's details and electricity consumption (in units), validates the inputs, determines the applicable tariff rate, and dynamically displays the itemized bill.

## Features
* **Consumer Profile Capture:** Collects consumer name, meter number, and total units consumed.
* **Input Validation:** Ensures no required fields are left blank and verifies that units consumed is a valid non-negative number (`0` or greater).
* **Tiered Tariff Lookup:** Automatically selects the applicable per-unit rate (`₹5`, `₹7`, `₹10`, or `₹15`) based on total unit consumption.
* **Dynamic Bill Rendering:** Displays the formatted consumer summary, applied rate, and total payable amount (in `₹`) rounded to two decimal places.

## Tariff Rate Structure
| Units Consumed | Rate Applied (per unit) |
| :--- | :---: |
| 0 – 100 units | **₹5** |
| 101 – 200 units | **₹7** |
| 201 – 300 units | **₹10** |
| Above 300 units | **₹15** |

*(Note: The applied rate multiplies the total units consumed based on the tier reached.)*

## Required HTML Structure
To work properly with this script, your `index.html` must include elements with the following IDs and classes:
* **Form Element:** `#billForm`
* **Input Fields:** `#consumerName`, `#meterNumber`, `#units`
* **Output Containers:** `.display` (wrapper toggled with `.show`) and `#displayResult` (target for the generated `<ul>` bill summary)

## Getting Started
1. Save the HTML and JavaScript files in the same project folder (`index.html` and `script.js`).
2. Add CSS rules for `.display` (e.g., `display: none;`) and `.display.show` (e.g., `display: block;`) to toggle bill visibility.
3. Open `index.html` in any modern web browser.
4. Enter the consumer details and units consumed, then click **Generate Bill**.
