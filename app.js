// * EVENT LISTENERS *
// Listen for 'CLICK' on calculate-btn
document.getElementById("calculate-btn").addEventListener("click", function() {
  // * GET USER INPUT *
  const baseInput = document.getElementById("base-input").value;
  const targetInput = document.getElementById("target-input").value;
  const amountInput = document.getElementById("amount-input").value;
  // Call calculate function
  calculateNicToAdd(baseInput, targetInput, amountInput);
});

// CALCULATE
function calculateNicToAdd(base, target, amount) {
  //
  return console.log(base, target, amount);
}
