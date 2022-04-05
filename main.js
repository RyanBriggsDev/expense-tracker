// Element Selectors
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const list = document.getElementById("listedItems");
const totalBtn = document.getElementById("totalBtn");
let inputtedAmounts = [];

// event listener for form submit
form.addEventListener("submit", (event) => {
  // prevent normal form submission protocol
  event.preventDefault();
  //call form submit function
  formSubmission();
});

// display total function
const displayText = (sum) => {
  let totalDisplayedText = document.getElementById("totalDisplayedText");
  totalDisplayedText.textContent = sum;
};

// form submission function
const formSubmission = (submit) => {
  // grab submitted text
  const amount = document.getElementById("amount").value;
  const item = document.getElementById("item").value;
  // add inputs as list items
  list.innerHTML += `<li id="userTransactionsList"><span id="inputtedAmount">£${amount}</span> on <span id="inputtedItem"></span>${item}</li>`;
  // clear input fields
  form.reset();
  // add user inputted amount to inputtedAmounts array
  inputtedAmounts.push(amount);
  console.log(inputtedAmounts);
  let sum;
  if (inputtedAmounts.length > 0) {
    sum = inputtedAmounts.reduce(function (accumulator, currentValue) {
      return parseInt(accumulator) + parseInt(currentValue);
    });
  } else {
    sum = parseInt(inputtedAmounts[0]);
  }
  displayText(sum);
};