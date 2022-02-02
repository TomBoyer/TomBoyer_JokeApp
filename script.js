// https://api.blablagues.net/?rub=blagues

//1. tester le link dans mon navigateur

//2. Fetch : appeler l'url, déclarer une res où traduire le .json, déclarer une global stockant ce qu'on a traduit, aller jusqu'à la blague en utilisant le log pour trouver son chemin, l'afficher dans le DOM (logique de test de lecture de la reponse soit dans text soit dans text hidden)
fetch("https://api.blablagues.net/?rub=blagues")
  .then((res) => res.json())
  .then((global) => {
    // console.log(global.data.content);
    header.textContent = global.data.content.text_head;
    content.textContent =
      global.data.content.text !== ""
        ? global.data.content.text
        : global.data.content.text_hidden;
  });

//3. Pointer les éléments qu'on va utiliser
const header = document.getElementById("header");
const content = document.getElementById("content");
