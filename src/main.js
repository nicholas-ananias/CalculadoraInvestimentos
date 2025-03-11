import { generateReturnsArray } from "./investimentsGoals.js";

const form = document.getElementById("investiment-form");

function renderProgression(event) {
  event.preventDefault();
  const startingAmount = Number(
    document.getElementById("starting-amount").value
  );
  const additionalContributions = Number(
    document.getElementById("additional-contributions").value
  );
  const timeAmount = Number(document.getElementById("time-amount").value);
  const timeAmountPeriod = document.getElementById("time-amount-period").value;
  const returnRate = Number(document.getElementById("return-rate").value);
  const returnRatePeriod = document.getElementById("evaluation-period").value;
  const taxRate = Number(document.getElementById("tax-rate").value);

  generateReturnsArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    additionalContributions,
    returnRate,
    returnRatePeriod
  );
}

form.addEventListener("submit", renderProgression);
