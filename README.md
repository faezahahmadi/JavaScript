# JavaScript Mini Projects 🚀

A curated collection of **10 vanilla JavaScript projects** — perfect for beginners who want to move beyond theory and build real, interactive web applications. Every project is crafted to reinforce fundamental programming concepts while keeping things fun and practical.

---

## 📋 Projects in Detail

### 1. Counter Application ➕➖
A digital counter that lets you increment, decrement, and reset a numeric value.  
**How it works:**  
– A `count` variable holds the current state.  
– Clicking **Increment** adds `1` (or your custom step size).  
– Clicking **Decrement** subtracts `1` (with optional floor at `0`).  
– The **Reset** button restores the count to `0` and updates the UI instantly.  

**Key concepts:** Variables, functions, DOM manipulation (`textContent`), `addEventListener`.  
**Bonus features:** Step size selector, preventing negative values.

---

### 2. Number Guessing Game 🎯
A classic game where the user tries to guess a randomly generated number between 1 and 100.  
**How it works:**  
- `Math.random()` generates a secret number when the page loads.  
– The user types a guess into an input field and submits it.  
– The app compares the guess and gives feedback: **”Too High”**, **”Too Low”**, or **”Correct!”**.  
– Each incorrect guess increments the **attempts** counter.  
– When the user wins, the **best score** (lowest attempts) is updated and stored.  

**Key concepts:** Conditionals (`if/else`), user input handling (`value`), `Math.floor`, state tracking.

---

### 3. Digital Clock ⏰
A live, updating clock that displays the current time down to the second.  
**How it works:**  
- `new Date()` retrieves the current hour, minute, and second.  
- `setInterval()` runs a function every 1000ms to refresh the display.  
– The time is formatted as `HH:MM:SS AM/PM` using string methods and `padStart()`.  

**Key concepts:** Date object, intervals, string formatting, conditional toggling.  
**Bonus features:** Toggle between 12-hour and 24-hour formats; display the current date.

---

### 4. Temperature Converter 🌡️
A two-way converter between Celsius and Fahrenheit.  
**How it works:**  
– Two input fields (one for °C, one for °F).  
– When the user types in the Celsius field, the Fahrenheit field auto‑updates using `(°C × 9/5) + 32`.  
– When the user types in the Fahrenheit field, the Celsius field updates using `(°F – 32) × 5/9`.  
– Real‑time conversion happens using the `input` event listener.

**Key concepts:** Event listeners (`input`), arithmetic operations, parsing floating‑point numbers (`parseFloat`), real‑time UI updates.

---

### 5. Rock Paper Scissors 🪨📄✂️
Face off against the computer in this timeless hand‑game.  
**How it works:**  
– The user clicks one of three buttons: **Rock**, **Paper**, or **Scissors**.  
– The computer randomly picks one using `Math.random()` mapped to an array of choices.  
– The app compares the two choices using conditional logic to determine **Win**, **Lose**, or **Draw**.  
– Running totals for **Wins**, **Losses**, and **Draws** are displayed and updated after each round.

**Key concepts:** Random generation, array indexing, complex conditionals, score management.

---

### 6. Stopwatch ⏱️
A precision stopwatch tracking hours, minutes, seconds, and milliseconds.  
**How it works:**  
– Three control buttons: **Start**, **Stop**, and **Reset**.  
- **Start** initiates `setInterval()` that updates the display every 10ms.  
– The milliseconds increment from `0` to `99`; when they roll over, seconds increment, and so on.  
- **Stop** clears the interval (`clearInterval()`) to pause the timer.  
- **Reset** stops the timer and resets all values back to `00:00:00:00`.

**Key concepts:** Intervals, interval management (start/stop), time‑based arithmetic, display formatting.

---

### 7. Password Generator 🔐
Create strong, customised random passwords with ease.  
**How it works:**  
– The user enters a desired **password length** (e.g., `12`).  
– Four checkboxes allow selection of character sets: Uppercase (`A-Z`), Lowercase (`a-z`), Numbers (`0-9`), and Symbols (`!@#$...`).  
– Clicking **Generate** builds a character pool based on selected checkboxes, then randomly picks characters to form the password.  
– The **Reset** button clears the generated password and resets the form.

**Key concepts:** Arrays, string manipulation, checkbox state handling (`checked`), dynamic character pooling, loops for generation.

---

### 8. Calculator 🧮
A fully functional basic calculator for everyday arithmetic.  
**How it works:**  
– Users click buttons for digits (`0-9`), operators (`+`, `-`, `×`, `÷`), equals (`=`), and clear (`C`).  
– The display updates as numbers and operators are pressed.  
– When `=` is pressed, the app evaluates the expression (safely handling floats) and shows the result.  
– Supports chained operations (e.g., `5 + 3 – 2 = 6`).

**Key concepts:** Event delegation, string concatenation, `parseFloat` and arithmetic logic, state management for operators and operands.

---

### 9. Quiz Application 📝
A dynamic, multiple‑choice quiz that tests your knowledge.  
**How it works:**  
– A predefined array of question objects (each with a question, 4 options, and the correct answer index).  
– Questions are rendered one at a time using DOM manipulation.  
– The user selects an option via radio buttons and clicks **Next** to proceed.  
– Upon completion, the app calculates the total score (e.g., `7/10`) and displays detailed results.

**Key concepts:** Arrays of objects, dynamic rendering, radio button handling, score aggregation, conditional feedback.

---

### 10. Color Palette Generator 🎨
A visual tool that creates harmonious 5‑color palettes with a single click.  
**How it works:**  
– Clicking **”Generate Palette”** creates 5 random HEX color codes (e.g., `#A1B2C3`).  
– Each color is displayed in a box with its HEX value underneath.  
– Clicking on any color box automatically copies its HEX code to the clipboard using `navigator.clipboard.writeText()`.  
– A subtle tooltip or background flash gives visual feedback when a color is successfully copied.

**Key concepts:** Random HEX generation (`Math.random().toString(16)`), clipboard API, CSS styling for interactive feedback, event bubbling.

---

## 🛠️ Technologies Used

- **HTML5** – semantic structure and accessible forms.
- **CSS3** – flexbox, grid, animations, and responsive layouts.
- **JavaScript (ES6+)** – core logic, DOM traversal, event handling, and browser APIs.

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   Git clone https://github.com/your-username/JavaScript.git


