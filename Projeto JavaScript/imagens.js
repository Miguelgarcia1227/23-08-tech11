function ampliarImagem(img) { // Definindo uma função que recebe um parâmetro 
	let ampliadaContainer = document.querySelector(".ampliada-container");  // Selecionando o elemento HTML com a classe e armazenando na variável 
	let imgAmpliada = document.querySelector(".ampliada-image"); // 
	imgAmpliada.src = img.src;
	ampliadaContainer.style.display = "flex";
	setTimeout(function() {    //Definindo um tempo que adiciona a classe 
		ampliadaContainer.classList.add("visivel");
	}, 0);
}

document.querySelector(".ampliada-container").addEventListener("click", function() {
	this.classList.remove("visivel");//Adicionando um evento de clique
	setTimeout(function() { //define um tempo que altera o estilo de exibição para fechar a imagem
		document.querySelector(".ampliada-container").style.display = "none";
	}, 0);
});


//função é  um conjunto de instruções que executa uma tarefa//