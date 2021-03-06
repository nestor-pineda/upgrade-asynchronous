// #1: Fetch
// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log().

fetch("https://api.agify.io?name=michael")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

const myButton = document.querySelector("button").addEventListener("click", () => {
  const baseUrl = "https://api.nationalize.io";
  const myInput = document.querySelector("input").value;
  const urlWithInput = baseUrl + "/" + myInput + "/";

  fetch(urlWithInput)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  const inesrtParagraph = (x, y, z) => {
    const newP = document.createElement("p");
    const text = document.createTextNode(`El nombre ${x} tiene un ${y} porciento de ser de ${z} y un 6 porciento de ser de MZ.`);
    newP.appendChild(text);
    document.body.appendChild(newP);
  };
  inesrtParagraph("Pedro", 2, "ET");

  /*  const insertButton = () => {
    const myParagraph = document.querySelectorAll("p");
    const createDeleteButton = document.createElement("button");
    createDeleteButton.innerText = "Delete";
    // const textInButton = document.createTextNode("Delete");
    // createDeleteButton.appendChild(textInButton);
    myParagraphs.appendChild(createDeleteButton);
  };

  insertButton(); */
});

// #2: async-await
// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

const runTimeOut = () => {
  const promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });

  promise.then(() => {
    console.log("Time out!");
  });
  /* let promise = async () => {
    
  } */
};

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
/* 
function getCharacters() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((characters) => console.log(characters));
}

getCharacters(); */

const getCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  console.log(data.characters);
};

getCharacters();
