// * EVENT LISTENERS *
// Listen for 'CLICK' on calculate-btn
document.getElementById("calculate-btn").addEventListener("click", function() {
  // * GET USER INPUT *
  const baseInput = document.getElementById("base-input").value;
  const targetInput = document.getElementById("target-input").value;
  const amountInput = document.getElementById("amount-input").value;
  const outputArea = document.getElementById("result");
  // Check for valid inputs
  if (!baseInput && !targetInput && !amountInput) {
    // are they truthy values?
    console.log("no");
  } else {
    console.log("yes");
  }
  // Call calculate function
  calculateNicToAdd(baseInput, targetInput, amountInput, outputArea);
  // Display result
});

// CALCULATE
function calculateNicToAdd(base, target, amount, outputArea) {
  // check for valid inputs

  // Calculate result
  let result = (target / base) * amount;
  // Build output HTML
  let output = `<p class="center-align">
                Adding <strong>${result}mL</strong> of your nicotine base to ${amount}mL of eLiquid will achieve your target strength of ${target}mg.
                </p>
               `;
  // Return output
  return (outputArea.innerHTML = output);
}
