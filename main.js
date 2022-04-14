// Element Selectors
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const clearButton = document.getElementById("clear");
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

clearButton.addEventListener("click", (e) => {
  localStorage.removeItem("expenses");
  displayText("0");
  list.innerHTML = "";
});

// display total function
const displayText = (sum) => {
  let totalDisplayedText = document.getElementById("totalDisplayedText");
  totalDisplayedText.textContent = sum;
};

const onLoad = () => {
  //Get all items from local storage
  const storedExpenses = localStorage.getItem("expenses");
  const parsedExpenses = JSON.parse(storedExpenses);
  console.log(parsedExpenses);
  if (parsedExpenses) {
    //Add each item & total value/damage to HTML
    let total = 0;
    for (let i = 0; i < parsedExpenses.length; i++) {
      //ad each element to vairable
      const element = parsedExpenses[i];
      //Add each element amount to our total
      total += parseInt(element.amount);
      //Add each item to HTML
      list.innerHTML += `<li id="userTransactionsList"><span id="inputtedAmount">£${element.amount}</span> on <span id="inputtedItem"></span>${element.item}</li>`;
    }
    displayText(total);
  }
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
  /*
    Add to local storage
  */
  const entry = {
    amount: amount,
    item: item,
  };
  const expensesArray = JSON.parse(localStorage.getItem("expenses"));
  let tobeStringified;
  if (expensesArray) {
    tobeStringified = expensesArray;
  } else {
    tobeStringified = [];
  }
  tobeStringified.push(entry);
  const saveData = JSON.stringify(tobeStringified);
  localStorage.setItem("expenses", saveData);
  // add user inputted amount to inputtedAmounts array
  inputtedAmounts.push(amount);
  //console.log(inputtedAmounts);
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

onLoad();
