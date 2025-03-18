let amigos = [];

function adicionarAmigo() {
const input = document.getElementById("amigo");
let nome = input.value.trim();

if (nome === "") {
alert("Insira um nome válido.");
return;
}

if (amigos.includes(nome)) {
alert("Esse nome já foi adicionado!");
return;
}

amigos.push(nome);
input.value = "";
atualizarLista();
}

function atualizarLista() {
const lista = document.getElementById("listaAmigos");
lista.innerHTML = "";

amigos.forEach((amigo) => {
let item = document.createElement("li");
item.textContent = amigo;
lista.appendChild(item);
});
}

function sortearAmigo() {
if (amigos.length < 2) {
alert("Adicione pelo menos dois amigos para sortear.");
return;
}

let sorteio = [...amigos];
let resultadoFinal = [];

let tentativa = 0;
let sucesso = false;

while (!sucesso && tentativa < 100) {
// Embaralhamento Fisher-Yates
for (let i = sorteio.length - 1; i > 0; i--) {
let j = Math.floor(Math.random() * (i + 1));
[sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
}

sucesso = true;
for (let i = 0; i < amigos.length; i++) {
if (amigos[i] === sorteio[i]) {
sucesso = false;
break;
}
}
tentativa++;
}

if (!sucesso) {
alert("O sorteio falhou. Tente novamente.");
return;
}

let resultado = document.getElementById("resultado");
resultado.innerHTML = "";

for (let i = 0; i < sorteio.length; i++) {
let amigo1 = amigos[i];
let amigo2 = sorteio[i];

let item = document.createElement("li");
item.textContent = `${amigo1} → ${amigo2}`;
resultado.appendChild(item);
}
}

function reiniciarSorteio() {
amigos = [];
document.getElementById("listaAmigos").innerHTML = "";
document.getElementById("resultado").innerHTML = "";
}
