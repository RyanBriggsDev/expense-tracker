// Element Selectors
const btn = document.getElementById('btn');
const form = document.getElementById('form');
const list = document.getElementById('listedItems');
const totalBtn = document.getElementById('totalBtn');
let totalDisplayedText = document.getElementById("totalDisplayedText");
let inputtedAmounts = [];

// event listener for form submit
form.addEventListener('submit', (event) => {
    // prevent normal form submission protocol
    event.preventDefault();
    //call form submit function
    formSubmission();
});

// form submission function
const formSubmission = (submit) => {
    // grab submitted text
    const amount = document.getElementById('amount').value;
    const item = document.getElementById('item').value;
    // add inputs as list items
    list.innerHTML += `<li id="userTransactionsList"><span id="inputtedAmount">£${amount}</span> on <span id="inputtedItem"></span>${item}</li>`;
    // clear input fields
    form.reset();
    // add user inputted amount to inputtedAmounts array
    inputtedAmounts.push(amount);
    console.log(inputtedAmounts);
};

    // event listener for total submit
    totalBtn.addEventListener('click', (e) => {
    // prevent normal form submission protocol
    e.preventDefault();
        // add all numbers in array - THIS ISN'T ADDING ARRAY NUMBERS TOGETHER
        let sum = inputtedAmounts.reduce(function (a, b) {
            return a + b;
        });
        console.log(sum);
        // add result of sum to array
        inputtedAmounts.push(sum);
        // changed displayed amount to sum
        const displayText = () => {
            totalDisplayedText.textContent = sum;
        }
        displayText();
        // clear array
        totalDisplayedText = [];
        console.log(totalDisplayedText);
});