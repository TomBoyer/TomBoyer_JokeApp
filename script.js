// https://api.blablagues.net/?rub=blagues

//1. tester le link dans mon navigateur

//2. Fetch : appeler l'url, déclarer une res où traduire le .json, déclarer une global stockant ce qu'on a traduit, aller jusqu'à la blague en utilisant le log pour trouver son chemin, l'afficher dans le DOM (logique de test de lecture de la reponse soit dans text soit dans text hidden)
function getJoke() {
  //4. créer une function pour utiliser l'API qui va chercher les blagues

  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((global) => {
      // console.log(global.data.content);

      //2.1 éviter les répititions de "global.data.content." en créant une const
      const joke = global.data.content;
      //console.log(joke);

      header.textContent = joke.text_head;
      content.textContent =
        joke.text !== ""
          ? joke.text
          : joke.text_hidden;
    });
}
//3. Pointer les éléments qu'on va utiliser
const header = document.getElementById("header");
const content = document.getElementById("content");

//5. appeler la function getJoke au chargement de la page
getJoke();

//6. appeler une blague au click sur la page
document.body.addEventListener("click", getJoke);
