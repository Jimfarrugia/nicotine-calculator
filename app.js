// * EVENT LISTENERS *
// Listen for 'CLICK' on calculate-btn
document.getElementById("calculate-btn").addEventListener("click", function() {
  // * GET USER INPUT *
  const baseInput = document.getElementById("base-input").value;
  const targetInput = document.getElementById("target-input").value;
  const amountInput = document.getElementById("amount-input").value;
  const outputArea = document.getElementById("result");
  // Call calculate function
  calculateNicToAdd(baseInput, targetInput, amountInput, outputArea);
  // Display result
});

// CALCULATE
function calculateNicToAdd(base, target, amount, outputArea) {
  // perform calculation and return result as html to user
  let output = "test";

  return (outputArea.innerHTML = output);
}
