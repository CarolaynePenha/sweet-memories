// distribuir cartas
function comparador() {
  return Math.random() - 0.5;
}

let variable = prompt(
  "Qual a quantidade de cartas que deseja?(apenas números pares de 4 a 14)"
);

let cont = variable / 2;

let card1 = {
  image1: "./img/panquecas.gif",
  name: "Panquecas",
};
let card2 = {
  image1: "./img/cake.gif",
  name: "Bolo-de-chocolate",
};
let card3 = {
  image1: "./img/chocolate-quente.gif",
  name: "Chocolate-quente",
};
let card4 = {
  image1: "./img/sorvete.gif",
  name: "Sorvete",
};
let card5 = {
  image1: "./img/maranguinhos.gif",
  name: "Torrada-doce-de-morango",
};
let card6 = {
  image1: "./img/roll.gif",
  name: "Cinnamon-roll",
};
let card7 = {
  image1: "./img/cupcake.gif",
  name: "Cup-cake",
};
let variable2 = variable - 1;
let cards = [card1, card2, card3, card4, card5, card6, card7];
let cards2 = [];
let start = 0;

distribution(variable);
function distribution(variable) {
  let rest = variable % 2;

  while (rest !== 0 || variable < 4 || variable > 14) {
    alert("Digite um número par de 4 a 14");
    variable = prompt(
      "Qual a quantidade de cartas que deseja?(apenas números pares de 4 a 14)"
    );
    rest = variable % 2;
  }

  for (let i = 0; i < cont; i++) {
    cards2[i] = cards[i];
    cards2[variable2 - i] = cards[i];
  }
  cards2.sort(comparador);
  let article = document.querySelector("article");
  article.innerHTML = "";
  for (let i = 0; i < variable; i++) {
    article.innerHTML += `
    <section onclick="toTurn('order${i}','${cards2[i].name}')">
                <div class="front face order${i}">
                <img src="./img/Pink Cupcake  cópia.png" alt="cupcake">
                </div>
                <div class="back face order${i}">
                <img src=${cards2[i]["image1"]} alt=${cards2[i].name}>
                </div>
    </section>`;
  }
}
setInterval(time, 1000);

let interval = "";

// relógio
function time() {
  let clock = document.querySelector(".clock p");
  interval = clock.innerHTML = parseInt(clock.innerHTML) + 1;
}

// virar as cartas
let amountUp = 0;
let name1 = [];
let order = [];
function toTurn(sectionOrder, name) {
  const back = document.querySelector(".back" + "." + sectionOrder);
  back.classList.add("back-turned");
  const front = document.querySelector(".front" + "." + sectionOrder);
  front.classList.add("front-turned");
  name1[amountUp] = name;
  order[amountUp] = sectionOrder;
  amountUp += 1;
  // if (amountUp === 2) {
  //   let button = document.querySelector("button");
  //   button.disabled = "true";
  // }
  setTimeout(toTurnDown, 1000);
  // toTurnDown();
}

// Desvirar as cartas
let end = 0;
let nTries = 0;
function toTurnDown() {
  if (amountUp == 2 && name1[0] !== name1[1]) {
    let back = document.querySelector(".back" + "." + order[0]);
    back.classList.remove("back-turned");
    back = document.querySelector(".back" + "." + order[1]);
    back.classList.remove("back-turned");
    let front = document.querySelector(".front" + "." + order[0]);
    front.classList.remove("front-turned");
    front = document.querySelector(".front" + "." + order[1]);
    front.classList.remove("front-turned");
    amountUp = 0;
    nTries++;
  } else if (amountUp == 2 && name1[0] === name1[1]) {
    amountUp = 0;
    end++;
    nTries++;
  }
  ending();
}

// Finalizar jogo
function ending() {
  if (end === cont) {
    clearInterval(interval);
    alert(`Parabéns!
    Você ganhou em ${nTries} jogadas 
    e levou  ${interval} segundos.`);
    let answer = prompt("Deseja jogar novamente? (Digite S ou N)");
    if (answer.toLowerCase() === "s") {
      cont = 0;
      location.reload();
    } else {
      alert("Obrigada por jogar! Volte novamente.");
    }
  }
}
