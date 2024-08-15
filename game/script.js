let form_btn = document.querySelector(".form_btn");
let input = document.querySelector(".form_input");
let span = document.querySelector(".result_guess_number");
let randomNumber = Math.floor(Math.random() * 100);
let attempts = 0;
form_btn.addEventListener("click", () => {
  attempts++;
  span.style.fontSize = "20px";
  if (Number(input.value) === randomNumber) {
    span.style.color = "#D5ED9F";
    span.textContent = `You guessed right, it took you ${attempts - 1} attempt`;
  } else if (input.value < randomNumber) {
    span.style.color = "#FF9100";
    span.textContent = `You entered too small a number`;
  } else {
    span.style.color = "#FF9100";
    span.textContent = `You entered too many numbers`;
  }
  input.value = "";
});
console.log(randomNumber);
