// Listen for click on Calculate-Btn
document.getElementById("calculate-btn").addEventListener("click", function() {
  // Get user input
  const baseInput = document.getElementById("base-input").value;
  const targetInput = document.getElementById("target-input").value;
  const amountInput = document.getElementById("amount-input").value;
  const outputArea = document.getElementById("result");
  // Run calculateNicToAdd and display return value.
  outputArea.innerHTML = calculateNicToAdd(baseInput, targetInput, amountInput);
});

// CALCULATE
function calculateNicToAdd(base, target, amount) {
  // Check for invalid inputs
  if (!base || !target || !amount) {
    // values are not truthy
    return `<p>One or more input is invalid.</p>`;
  }
  if (base == 0 || target == 0 || amount == 0) {
    // values cannot be 0
    return `<p>All inputs must be grater than zero.</p>`;
  }

  // calculate result
  let result = (target / base) * amount;
  // round to 2 decimal places
  result = result.toFixed(2);

  // return result
  return `<p class="center-align">
          Adding <strong>${result}mL</strong> of your nicotine base 
          to ${amount}mL of eLiquid <br> will achieve your target strength of ${target}mg.
          </p>
          `;
}
