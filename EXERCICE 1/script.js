const loadRulesButton = document.getElementById("RulesButton");
const rulesList = document.getElementById("rulesList");

loadRulesButton.addEventListener("click", () => {
  fetch("becode.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((rule) => {
        const listItem = document.createElement("li");
        listItem.textContent = rule;
        rulesList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
});

// We start by selecting the HTML elements we need to work with:

// loadRulesButton represents the button element with the id "loadRulesButton".
// rulesList represents the unordered list element with the id "rulesList".
// We add an event listener to the loadRulesButton element, listening for the "click" event. This means that when the button is clicked, the specified code will be executed.

// Inside the event listener function, we use the fetch() function to make a request to the "becode.json" file.

// Once the response is received, we use the response.json() method to parse the JSON data from the response.

// The parsed JSON data is then passed to the next .then() method, where we have access to the actual data.

// Inside the second .then() method, we iterate over each rule in the data array.

// For each rule, we create a new list item element (<li>) using document.createElement('li').

// We set the text content of the list item to the current rule using listItem.textContent = rule.

// The list item is then appended as a child to the rulesList unordered list element using rulesList.appendChild(listItem).

// If any errors occur during the fetch request or data processing, the code inside the .catch() method will be executed, and an error message will be logged to the console.

// In simpler terms, the code sets up a button that, when clicked, fetches a JSON file. The JSON data is then parsed, and each rule is displayed as a list item in an unordered list on the webpage. If any errors occur, they are handled and logged to the console.
