const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette");
const colorBoxes = document.querySelectorAll(".color-box");

generateBtn.addEventListener("click", generatePalette);

function generatePalette() {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColor());
  }
  updateUiDisplay(colors);
}

function generateRandomColor() {
  const colorString = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorString[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateUiDisplay(colors) {
  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorDiv = box.querySelector(".color");
    colorDiv.style.backgroundColor = color;
    const hexValue = box.querySelector(".hex-value");

    hexValue.textContent = color;
  });
}

generatePalette();

//copy to clipboard

colorBoxes.forEach((box) => {
  box.addEventListener("click", async () => {
    const hexValue = box.querySelector(".hex-value");
    const originalText = hexValue.textContent;

    try {
      await navigator.clipboard.writeText(originalText);

      hexValue.textContent = "Copied!";
      box.classList.add("copied");

      setTimeout(() => {
        hexValue.textContent = originalText;
        box.classList.remove("copied");
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  });
});
