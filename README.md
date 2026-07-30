1.	# JavaScript Mini Projects 🚀
2.	
3.	A curated collection of **10 vanilla JavaScript projects** — perfect for beginners who want to move beyond theory and build real, interactive web applications. Every project is crafted to reinforce fundamental programming concepts while keeping things fun and practical.
4.	
5.	---
6.	
7.	## 📋 Projects in Detail
8.	
9.	### 1. Counter Application ➕➖
10.	A digital counter that lets you increment, decrement, and reset a numeric value.  
11.	**How it works:**  
12.	– A `count` variable holds the current state.  
13.	– Clicking **Increment** adds `1` (or your custom step size).  
14.	– Clicking **Decrement** subtracts `1` (with optional floor at `0`).  
15.	– The **Reset** button restores the count to `0` and updates the UI instantly.  
16.	
17.	**Key concepts:** Variables, functions, DOM manipulation (`textContent`), `addEventListener`.  
18.	**Bonus features:** Step size selector, preventing negative values.
19.	
20.	---
21.	
22.	### 2. Number Guessing Game 🎯
23.	A classic game where the user tries to guess a randomly generated number between 1 and 100.  
24.	**How it works:**  
25.	- `Math.random()` generates a secret number when the page loads.  
26.	– The user types a guess into an input field and submits it.  
27.	– The app compares the guess and gives feedback: **”Too High”**, **”Too Low”**, or **”Correct!”**.  
28.	– Each incorrect guess increments the **attempts** counter.  
29.	– When the user wins, the **best score** (lowest attempts) is updated and stored.  
30.	
31.	**Key concepts:** Conditionals (`if/else`), user input handling (`value`), `Math.floor`, state tracking.
32.	
33.	---
34.	
35.	### 3. Digital Clock ⏰
36.	A live, updating clock that displays the current time down to the second.  
37.	**How it works:**  
38.	- `new Date()` retrieves the current hour, minute, and second.  
39.	- `setInterval()` runs a function every 1000ms to refresh the display.  
40.	– The time is formatted as `HH:MM:SS AM/PM` using string methods and `padStart()`.  
41.	
42.	**Key concepts:** Date object, intervals, string formatting, conditional toggling.  
43.	**Bonus features:** Toggle between 12-hour and 24-hour formats; display the current date.
44.	
45.	---
46.	
47.	### 4. Temperature Converter 🌡️
48.	A two-way converter between Celsius and Fahrenheit.  
49.	**How it works:**  
50.	– Two input fields (one for °C, one for °F).  
51.	– When the user types in the Celsius field, the Fahrenheit field auto‑updates using `(°C × 9/5) + 32`.  
52.	– When the user types in the Fahrenheit field, the Celsius field updates using `(°F – 32) × 5/9`.  
53.	– Real‑time conversion happens using the `input` event listener.
54.	
55.	**Key concepts:** Event listeners (`input`), arithmetic operations, parsing floating‑point numbers (`parseFloat`), real‑time UI updates.
56.	
57.	---
58.	
59.	### 5. Rock Paper Scissors 🪨📄✂️
60.	Face off against the computer in this timeless hand‑game.  
61.	**How it works:**  
62.	– The user clicks one of three buttons: **Rock**, **Paper**, or **Scissors**.  
63.	– The computer randomly picks one using `Math.random()` mapped to an array of choices.  
64.	– The app compares the two choices using conditional logic to determine **Win**, **Lose**, or **Draw**.  
65.	– Running totals for **Wins**, **Losses**, and **Draws** are displayed and updated after each round.
66.	
67.	**Key concepts:** Random generation, array indexing, complex conditionals, score management.
68.	
69.	---
70.	
71.	### 6. Stopwatch ⏱️
72.	A precision stopwatch tracking hours, minutes, seconds, and milliseconds.  
73.	**How it works:**  
74.	– Three control buttons: **Start**, **Stop**, and **Reset**.  
75.	- **Start** initiates `setInterval()` that updates the display every 10ms.  
76.	– The milliseconds increment from `0` to `99`; when they roll over, seconds increment, and so on.  
77.	- **Stop** clears the interval (`clearInterval()`) to pause the timer.  
78.	- **Reset** stops the timer and resets all values back to `00:00:00:00`.
79.	
80.	**Key concepts:** Intervals, interval management (start/stop), time‑based arithmetic, display formatting.
81.	
82.	---
83.	
84.	### 7. Password Generator 🔐
85.	Create strong, customised random passwords with ease.  
86.	**How it works:**  
87.	– The user enters a desired **password length** (e.g., `12`).  
88.	– Four checkboxes allow selection of character sets: Uppercase (`A-Z`), Lowercase (`a-z`), Numbers (`0-9`), and Symbols (`!@#$...`).  
89.	– Clicking **Generate** builds a character pool based on selected checkboxes, then randomly picks characters to form the password.  
90.	– The **Reset** button clears the generated password and resets the form.
91.	
92.	**Key concepts:** Arrays, string manipulation, checkbox state handling (`checked`), dynamic character pooling, loops for generation.
93.	
94.	---
95.	
96.	### 8. Calculator 🧮
97.	A fully functional basic calculator for everyday arithmetic.  
98.	**How it works:**  
99.	– Users click buttons for digits (`0-9`), operators (`+`, `-`, `×`, `÷`), equals (`=`), and clear (`C`).  
100.	– The display updates as numbers and operators are pressed.  
101.	– When `=` is pressed, the app evaluates the expression (safely handling floats) and shows the result.  
102.	– Supports chained operations (e.g., `5 + 3 – 2 = 6`).
103.	
104.	**Key concepts:** Event delegation, string concatenation, `parseFloat` and arithmetic logic, state management for operators and operands.
105.	
106.	---
107.	
108.	### 9. Quiz Application 📝
109.	A dynamic, multiple‑choice quiz that tests your knowledge.  
110.	**How it works:**  
111.	– A predefined array of question objects (each with a question, 4 options, and the correct answer index).  
112.	– Questions are rendered one at a time using DOM manipulation.  
113.	– The user selects an option via radio buttons and clicks **Next** to proceed.  
114.	– Upon completion, the app calculates the total score (e.g., `7/10`) and displays detailed results.
115.	
116.	**Key concepts:** Arrays of objects, dynamic rendering, radio button handling, score aggregation, conditional feedback.
117.	
118.	---
119.	
120.	### 10. Color Palette Generator 🎨
121.	A visual tool that creates harmonious 5‑color palettes with a single click.  
122.	**How it works:**  
123.	– Clicking **”Generate Palette”** creates 5 random HEX color codes (e.g., `#A1B2C3`).  
124.	– Each color is displayed in a box with its HEX value underneath.  
125.	– Clicking on any color box automatically copies its HEX code to the clipboard using `navigator.clipboard.writeText()`.  
126.	– A subtle tooltip or background flash gives visual feedback when a color is successfully copied.
127.	
128.	**Key concepts:** Random HEX generation (`Math.random().toString(16)`), clipboard API, CSS styling for interactive feedback, event bubbling.
129.	
130.	---
131.	
132.	## 🛠️ Technologies Used
133.	
134.	- **HTML5** – semantic structure and accessible forms.
135.	- **CSS3** – flexbox, grid, animations, and responsive layouts.
136.	- **JavaScript (ES6+)** – core logic, DOM traversal, event handling, and browser APIs.
137.	
138.	---
139.	
140.	## 🚀 How to Run
141.	
142.	1. Clone the repository:
143.	   ```bash
144.	   Git clone https://github.com/your-username/JavaScript.git


