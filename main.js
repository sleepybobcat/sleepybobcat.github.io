document.addEventListener("DOMContentLoaded", () => {
  const jokeContainer = document.getElementById("jokeContainer");

  // 1. Make a fetch request to the Dad Joke API
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      "Accept": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      // data.joke has the joke string
      jokeContainer.textContent = data.joke;
    })
    .catch(error => {
      console.error("Error fetching joke:", error);
      jokeContainer.textContent = "Oops! Could not load a joke right now.";
    });
});