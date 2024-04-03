let apiKey = "93c7606fb409o3e1fc8t05dec7a84b69";

function showRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let recipeName = document.querySelector("#userRequest");
  let prompt = `Generate a recipe for ${recipeName.value}`;
  let context =
    "You are a chef expert and love to share recipes for a worldwide cuisines, generate a recipe including ingredients and instructions, be polite. Write a recipe in basic HTML and don't specify it in your answer, don't include recipe's title, add ingredients and instructions subtitles as <h4> elements. At the end add <strong>SheCodes AI</strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showRecipe);
  let recipe = document.querySelector("#recipe");
  recipe.classList.remove("hidden");
  recipe.innerHTML = "⏳ Searching for a recipe... Please wait.";
}

let recipeForm = document.querySelector("#recipeForm");
recipeForm.addEventListener("submit", generateRecipe);
