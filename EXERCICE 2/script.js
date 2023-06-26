function fetchAge() {
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value.trim();
  
    if (name === "") {
      alert("Please enter a name.");
      return;
    }
  
    fetch(`https://api.agify.io/?name=${name}`)
      .then(response => response.json())
      .then(data => {
        displayResult(name, data.age);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  
    nameInput.value = "";
  }
  
  function displayResult(name, age) {
    var resultsContainer = document.getElementById("resultsContainer");
  
    var resultDiv = document.createElement("div");
    resultDiv.innerHTML = `Name: ${name}, Age: ${age}`;
    resultsContainer.appendChild(resultDiv);
  }