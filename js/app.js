let amigos = [];

// Adiciona um amigo à lista
function adicionar() {
    let novoAmigo = document.getElementById("nome-amigo").value;
    //verifica se o campo está vazio
    if (novoAmigo === "") {
        alert("Por favor, insira o nome de um amigo.");
        return;
    } else if (amigos.includes(novoAmigo)) {
        alert("Este amigo já está na lista.");
        return;
    } else {
        amigos.push(novoAmigo);
        document.getElementById("lista-amigos").innerHTML = amigos.join(", ");
        document.getElementById("nome-amigo").value = "";
    }
}

// Reinicia a lista de amigos
function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    alert("Lista de amigos reiniciada.");
    document.getElementById("lista-sorteio").innerHTML ="";
}

// Realiza o sorteio entre os amigos
function sortear() {
   embaralha(amigos);
   let quantidade = amigos.length;
   if (quantidade < 4) {
         alert("É necessário ter pelo menos 4 amigos para realizar o sorteio.");
         return;
   }
   document.getElementById("lista-sorteio").innerHTML += amigos[0] + " --> " + amigos[quantidade - 1] + "<br>";
   while (quantidade > 1) {
        document.getElementById("lista-sorteio").innerHTML += amigos[quantidade - 1] + " --> " + amigos[quantidade - 2] + "<br>";
        quantidade--;
   }
   console.log(amigos);
}

// Função para embaralhar a lista de amigos
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}