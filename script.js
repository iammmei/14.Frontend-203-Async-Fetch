const loadRulesButton = document.getElementById("loadRulesButton");
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
