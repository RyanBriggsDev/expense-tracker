// Element Selectors
const btn = document.getElementById('btn');
const form = document.getElementById('form');
const list = document.getElementById('listedItems');

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
    //log content
    console.log("£" + amount + " on " + item);
    // clear input fields
    form.reset();
};

// total spent
