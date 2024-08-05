let listaNomes = [];

function adicionar() {
    let nomeEscrito = document.getElementById('nome-amigo').value;
    let nomeIncluido = document.getElementById('lista-amigos');

    if (nomeEscrito.trim() !== '') { 
        if (nomeIncluido.textContent === '') {
            nomeIncluido.textContent = nomeEscrito;
        } else {
            nomeIncluido.textContent = nomeIncluido.textContent + ', ' + nomeEscrito;
        }
        listaNomes.push(nomeEscrito);
        document.getElementById('nome-amigo').value = ''; 
    } else {
        alert("Por favor, insira um nome.");
    }
}

function sortear() {
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';  

    if (listaNomes.length < 2) { 
        alert("Adicione pelo menos dois nomes para sortear.");
        return;
    }

    let nomesEmbaralhados = embaralha(listaNomes.slice());  

    for (let i = 0; i < nomesEmbaralhados.length; i++) {
        if (i === nomesEmbaralhados.length - 1) {
            listaSorteio.innerHTML += `${nomesEmbaralhados[i]} --> ${nomesEmbaralhados[0]}<br>`;
        } else {
            listaSorteio.innerHTML += `${nomesEmbaralhados[i]} --> ${nomesEmbaralhados[i + 1]}<br>`;
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length - 1; indice > 0; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * (indice + 1));
        [lista[indice], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice]];
    }
    return lista;
}

function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    listaNomes = [];
}
