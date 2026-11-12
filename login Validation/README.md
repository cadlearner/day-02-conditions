# Client-Side Form Validator
A clean, modular vanilla JavaScript form validation script that checks user registration inputs on submission and provides real-time visual feedback using CSS state classes and inline error messages.

## Features
* **Required Field Validation:** Ensures no input fields are submitted empty and dynamically formats field names from their element IDs.
* **Character Length Checks:** Enforces minimum and maximum character limits for usernames (`3–15` characters) and passwords (`6–25` characters).
* **Email Format Validation:** Uses a regular expression pattern to verify valid email syntax.
* **Password Confirmation Check:** Compares the password and confirm-password fields to ensure they match.
* **Visual State Feedback:** Toggles `.form-control.error` and `.form-control.success` classes on parent containers and populates `<small>` tags with specific error messages.

## Validation Rules
| Field | Element ID | Validation Rules |
| :--- | :--- | :--- |
| **Username** | `#username` | Required, `3` to `15` characters |
| **Email** | `#email` | Required, valid email format (`name@domain.com`) |
| **Password** | `#password` | Required, `6` to `25` characters |
| **Confirm Password** | `#password2` | Required, must match `#password` |

## Required HTML Structure
Each input must be wrapped inside a `.form-control` parent container that includes a `<small>` element for displaying validation messages:

* **Form Element:** `#form`
* **Inputs:** `#username`, `#email`, `#password`, `#password2`
* **Wrapper & Message:** `.form-control` containing `<input>` and `<small>`

## Getting Started
1. Save your HTML, CSS, and JavaScript files (`index.html`, `style.css`, and `script.js`) in the same folder.
2. Style `.form-control.success input` (e.g., green border) and `.form-control.error input` / `.form-control.error small` (e.g., red border and visible error text) in your CSS.
3. Open `index.html` in any modern web browser and test submitting empty or invalid inputs.

