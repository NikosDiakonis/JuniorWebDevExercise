
const input = document.getElementById("number");
const form = document.querySelector("form");
const message = document.getElementById("message");

function handleFormSubmission(event) {
  event.preventDefault();

  const value = parseInt(input.value, 10);

  if (value <= 10) {
    message.textContent = "Please enter only numbers greater than 10.";
    message.style.color = "red";
    return;
  }

  message.textContent = `The number ${value} is valid!`;
  message.style.color = "green";
}

form.addEventListener("submit", handleFormSubmission);
