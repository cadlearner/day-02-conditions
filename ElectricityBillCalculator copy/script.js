const consumerNameInput = document.getElementById("consumerName");
const meterNumberInput = document.getElementById("meterNumber");
const unitsInput = document.getElementById("units");

const form = document.getElementById("billForm");
const displayResult = document.getElementById("displayResult");
const display = document.querySelector(".display");

form.addEventListener("submit", generateBill);

function showError(message) {
  alert(message);
}

const calculateRate = (units) => {
  if (units <= 100) {
    return 5;
  } else if (units <= 200) {
    return 7;
  } else if (units <= 300) {
    return 10;
  } else {
    return 15;
  }
};

function generateBill(e) {
  e.preventDefault();

  const consumerName = consumerNameInput.value.trim();
  const meterNumber = meterNumberInput.value.trim();
  const rawUnits = unitsInput.value.trim();
  const units = Number(rawUnits);

  if (!consumerName || !meterNumber) {
    showError("Please fill in consumer name and meter number.");
    return;
  }

  if (rawUnits === "" || !Number.isFinite(units) || units < 0) {
    showError("Please enter a valid number of units (0 or more).");
    return;
  }

  const rate = calculateRate(units);

  const bill = {
    name: consumerName,
    meterNumber: meterNumber,
    units: units,
    rate: rate,
    totalAmount: units * rate,
  };

  const output = `
    <h2>Electricity Bill</h2>
    <ul>
      <li>Consumer Name: ${bill.name}</li>
      <li>Meter Number: ${bill.meterNumber}</li>
      <li>Total Units Consumed: ${bill.units} units</li>
      <li>Rate Applied: ₹${bill.rate} per unit</li>
      <li><strong>Total Bill Amount: ₹${bill.totalAmount.toFixed(2)}</strong></li>
    </ul>
  `;

  displayResult.innerHTML = output;

  consumerNameInput.value = "";
  meterNumberInput.value = "";
  unitsInput.value = "";
  
  display.classList.add("show");
}
