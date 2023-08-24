const submitButton = document.getElementById("submitButton");
const resultElement = document.getElementById("result");

submitButton.addEventListener("click", () => {
  const dateInput = document.getElementById("dateInput").value;
  const month = new Date(dateInput).getMonth() + 1;

  let season = "";
  if (month >= 3 && month <= 5) {
    season = "Primavera";
  } else if (month >= 6 && month <= 8) {
    season = "Verão";
  } else if (month >= 9 && month <= 11) {
    season = "Outono";
  } else {
    season = "Inverno";
  }

  resultElement.textContent = `A estação do ano é ${season}.`;
});
