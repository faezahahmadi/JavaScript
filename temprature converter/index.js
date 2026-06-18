const celcius = document.getElementById("celcius");
const farenhite = document.getElementById("farenhite");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

function convert() {
  const value = document.getElementById("value").value;
  if (celcius.checked) {
    let far = (Number(value) * 9) / 5 + 32;
    result.textContent = far.toFixed(2) + "°F";
  } else if (farenhite.checked) {
    let cel = ((Number(value) - 32) * 5) / 9;
    result.textContent = cel.toFixed(2) + "°C";
  } else {
    result.textContent = "Please select a unit.";
  }
}

convertBtn.addEventListener("click", convert);
