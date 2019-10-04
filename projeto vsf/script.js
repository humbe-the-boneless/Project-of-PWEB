function validarNomeDataPeso(nome_cadastro, data_cadastro, peso_cadastro){
	if (nome_cadastro.length < 3){
		alert("O campo nome está muito pequeno!");
		return false;
	}
	if (data_cadastro.length != 10){
		alert("Preencha corretamente o campo data!");
		return false;
	}
	if (peso_cadastro.length < 4){
		alert("Preencha corretamente o campo peso! Lembre-se de adicionar a medida 'kg' após o valor, como no exemplo.");
		return false;
	}
	return true;
}

function validarEmail(email_cadastro){
	var email2 = email_cadastro.split("");
	var contador = 0;
	var contador2 = 0;
	var contador3 = 0;
	var contador4 = 0;
	var aux_i = -1;
	var aux2_i = 0;

	for (var i = 0; i < email2.length; i++){
		aux_i++;
	}

	for (var i = 0; i < email2.length; i++){
		if (i > 0 && i != aux_i){
			if (email2[i] === "@"){
				contador++;
				aux2_i = i;
			}
		}
		if (email2[i] === " "){
			contador2++;
		}
		if (i > aux2_i + 1 && i != aux_i){
			if (email2[i] === "."){
				contador3++;
			}
		}
		if (email2[i] === "."){
				contador4++;
		}
	}

	if (contador != 1 || contador2 != 0 || contador3 != contador4 || contador3 == 0){
		return false;
		alert("Insira um e-mail válido!");
	}
	return true;
}

function validarSenha(senha_cadastro, confirmarSenha){
	if (senha_cadastro.length < 6){
		alert("O campo senha está muito pequeno!");
		return false;
	}

	if (confirmarSenha != senha_cadastro){
		alert("As senhas estão diferentes!");
		return false;
	}
	return true;
}

function validarCampos(){
	var confirmarSenha = document.getElementById("confirmacao-senha").value;
	var senha_cadastro = document.getElementById("senha-cadastro").value;
	var email_cadastro = document.getElementById("email-cadastro").value;
	var nome_cadastro = document.getElementById("nome-cadastro").value;
	var data_cadastro = document.getElementById("nascimento-cadastro").value;
	var peso_cadastro = document.getElementById("peso-cadastro").value;
	if (validarNomeDataPeso(nome_cadastro, data_cadastro, peso_cadastro)){
		if (validarEmail(email_cadastro)){
			if (validarSenha(senha_cadastro, confirmarSenha)){
				return true;
			}
		}
	}
	return false;
}

function salvarCadastro(email, senha){
	if (validarCampos()){
		if (sessionStorage.i){
			sessionStorage.i = Number(sessionStorage.i)+1;
		}
		else {
			sessionStorage.i = 1;
		}

		var nome = document.getElementById("nome-cadastro").value;
		sessionStorage.setItem("nome_" +sessionStorage.i, nome);

		var data = document.getElementById("nascimento-cadastro").value;
		sessionStorage.setItem("data_" +sessionStorage.i, data);

		var peso = document.getElementById("peso-cadastro").value;
		sessionStorage.setItem("peso_" +sessionStorage.i, peso);

		var email = document.getElementById("email-cadastro").value;
		sessionStorage.setItem("email_" +sessionStorage.i, email);

		var senha = document.getElementById("senha-cadastro").value;
		sessionStorage.setItem("senha_" +sessionStorage.i, senha);

		window.open("TelaLogin.html");
	}
}

function fazerLogin(){
		var email_login = document.getElementById("email-login").value;
		var senha_login = document.getElementById("senha-login").value;
		window.open("TelaPrincipal.html");
}

function armazenarExercicio(){
	if (localStorage.j){
		localStorage.j = Number(localStorage.j)+1;
	}
	else {
		localStorage.j = 1;
	}

		var exercicio = document.getElementById("exercicio-cadastro").value;
		localStorage.setItem("exercicio_" +localStorage.j, exercicio);

		var repeticoes = document.getElementById("repeticoes-cadastro").value;
		localStorage.setItem("repeticoes_" +localStorage.j, repeticoes);

		var sessoes = document.getElementById("sessoes-cadastro").value;
		localStorage.setItem("sessoes_" +localStorage.j, sessoes);

		var data_exercicio = document.getElementById("data-exercicio-cadastro").value;
		localStorage.setItem("data_exercicio_" +localStorage.j, data_exercicio);

		var carga = document.getElementById("carga-cadastro").value;
		localStorage.setItem("carga_" +localStorage.j, carga);

		var url = document.getElementById("url-cadastro").value;
		localStorage.setItem("url_" +localStorage.j, url);

		var index = localStorage.getItem('key');
		for (var h = 0; h < index; h++){
			var table = document.getElementById("listaTreinos");
			var row = table.insertRow(-1);
			var cel1 = row.insertCell(-1);
			var cel2 = row.insertCell(-1);
			var cel3 = row.insertCell(-1);
			var cel4 = row.insertCell(-1);
			var cel5 = row.insertCell(-1);
			var cel6 = row.insertCell(-1);

			exercicio = 'exercicio'.concat(h.toString());
			repeticoes = 'repeticoes'.concat(h.toString());
			sessoes = 'sessoes'.concat(h.toString());
			data_exercicio = 'data_exercicio'.concat(h.toString());
			carga = 'carga'.concat(h.toString());
			url = 'url'.concat(h.toString());

			cel1.innerHTML = localStorage.getItem("exercicio");
			cel2.innerHTML = localStorage.getItem(repeticoes);
			cel3.innerHTML = localStorage.getItem(sessoes);
			cel4.innerHTML = localStorage.getItem(data_exercicio);
			cel5.innerHTML = localStorage.getItem(carga);
			cel6.innerHTML = localStorage.getItem(url).link('http://www.youtube.com');
		}
}