
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1500

// Criando os níveis de dificulade do jogo
var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil')  {
	//1000
	criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	} else {
	document.getElementById('cronometro').innerHTML = tempo // A instrução innerHtml significa dentro da tag HTML
	}
}, 1000)

function posicaoRandomica() {

	// Remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		// Estruturando a contagem de vidas e fim do jogo
		if(vidas > 3){
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
			vidas ++
		}
	}

	// Criando posições aleatórias
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	// Criando o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()

	// Criando a parte CSS do elemento
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'

	// Criando um id para retirar o mosquito da tela antes da criação automática de um novo
	mosquito.id = 'mosquito'

	// Criando a função que remove os mosquitos com o clique
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}

