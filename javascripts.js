let quantidade;
let movimentos = 0;
let viradas = 0;
let coincide = 0;

const imgs = ["imgs/bobrossparrot.gif","imgs/bobrossparrot.gif",
            "imgs/explodyparrot.gif","imgs/explodyparrot.gif",
            "imgs/fiestaparrot.gif","imgs/fiestaparrot.gif",
            "imgs/metalparrot.gif","imgs/metalparrot.gif",
            "imgs/revertitparrot.gif","imgs/revertitparrot.gif",
            "imgs/tripletsparrot.gif","imgs/tripletsparrot.gif",
            "imgs/unicornparrot.gif","imgs/unicornparrot.gif"]

function jogo() {

function pergunta() {
    quantidade = Number(prompt("Com quantas cartas você quer jogar? Escolha um valor entre 4 e 14."));
}
pergunta();

while ((quantidade %2 !== 0) || (quantidade < 4) || (quantidade > 14)) {
    alert("Escolha um valor válido.");
    pergunta();
}

if ((quantidade %2 === 0) || (quantidade >= 4) || (quantidade <= 14)) {
    alert("O jogo irá começar. Boa sorte!");
}

function comparador() {
  return Math.random() - 0.5;
}

let imgsshuffled = imgs.slice(0,(quantidade));
imgsshuffled.sort(comparador);

for (let i = 0; i < quantidade; i++) {
    let main = document.querySelector('main');
    main.innerHTML +=   `<div class="carta" data-identifier="carta" onclick="virar(this.querySelector('.verso'),this.querySelector('.frente'),this)">
                              <div class="verso face" data-identifier="verso">
                              <img src="imgs/front.png" alt="verso">
                              </div>
                              <div class="frente face" data-identifier="frente">
                              <img src=${imgsshuffled[i]} alt="frente">
                              </div>
                        </div>`
}

}

function virar(verso,frente,elemento) {

    if(elemento.classList.contains("selecionado") || elemento.classList.contains("match")) {
       return;
    }

   movimentos = movimentos + 1;
   viradas = viradas + 1;

   elemento.classList.add("selecionado")

   verso.classList.remove("verso")
   verso.classList.add("frente")

   frente.classList.remove("frente")
   frente.classList.add("verso")

   if (viradas == 2) {
       let click = document.querySelector(".click_on");
       click.classList.remove("click_on");
       click.classList.add("click_off");

        let selecionada = document.querySelectorAll(".selecionado");
        let carta1 = selecionada[0];
        let carta2 = selecionada[1];

        if (carta1.innerHTML === carta2.innerHTML) {
           carta1.classList.add("match");
           carta2.classList.add("match");

          viradas = 0;

          click.classList.toggle("click_on");
          click.classList.toggle("click_off");

          carta1.classList.remove("selecionado");
          carta2.classList.remove("selecionado");

          coincide = coincide + 1;

          

          return;
    } 

    viradas = 0;

    naovirar()
    naovirar()

    setTimeout(function () {
      click.classList.toggle("click_on")
      click.classList.toggle("click_off")
    }, 1000)
  }
}

function naovirar() {

  let versoCarta = document.querySelector(".selecionado .verso");
  let frenteCarta = document.querySelector(".selecionado .frente");
  let carta = document.querySelector(".selecionado")
  carta.classList.remove("selecionado");

  setTimeout(function() {
    versoCarta.classList.add("frente");
    versoCarta.classList.remove("verso");

    frenteCarta.classList.add("verso");
    frenteCarta.classList.remove("frente");

  }, 1000)
}

jogo();