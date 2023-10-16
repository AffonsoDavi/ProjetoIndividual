function abrirModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function fecharModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Definindo a data de empréstimo automaticamente ao abrir o modal
var dataEmprestimo = document.getElementById('dataEmprestimo');
var dataHoje = new Date(); //cria um objeto do tipo data, para salvar a data assim que essa linha rodar
var day = dataHoje.getDate().toString().padStart(2, '0'); //pega  o dia (o 2 é para pegar somente 2 numeros e o 0 é para ser adicionado caso precise)
var month = (dataHoje.getMonth() + 1).toString().padStart(2, '0'); // Meses começam de 0, então adicionamos 1
var year = dataHoje.getFullYear(); //pega o ano
var dataFormatada = `${day}/${month}/${year}`; //formata a data para dia/mes/ano
dataEmprestimo.value = dataFormatada; //seta a data de emprestimo do dia de hoje

// Definindo a data máxima permitida para a data de devolução (30 dias após a data de empréstimo)
var dataDevolucao = document.getElementById('dataDevolucao');
var dataMaxima = new Date(dataHoje); //pega a data de hoje em uma variavel
dataMaxima.setDate(dataMaxima.getDate() + 30); //define para poder preencher até 30 dias
var dataMaximaFormatada = dataMaxima.toISOString().split('T')[0]; //fprmata a data para separando em dois arrys e pegando o primeiro array
dataDevolucao.setAttribute('max', dataMaximaFormatada); //deixa configurado a data maxima para 30 dias...

// Definindo a data mínima permitida para a data de devolução (hoje)
var dataMinima = new Date(dataHoje); //define a data minima 
var dataMinimaFormatada = dataMinima.toISOString().split('T')[0]; //formata a data separando em dois arrys e pegando o primeiro array
dataDevolucao.setAttribute('min', dataMinimaFormatada); //seta a data minima para o dia de hoje....





var livrosDisponiveis = ['Livro 1', 'Livro 2', 'Livro 3']; // Adapte conforme necessário

function popularLivroSelect() {
    var livroSelect = document.getElementById('livroSelect');
    livrosDisponiveis.forEach(function(livro) {
        var option = document.createElement('option');
        option.text = livro;
        livroSelect.appendChild(option);
    });
}

function tabelaDeLivros(){
    // Dados dos livros
    var livros = [
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
    ];
    // Função para criar a tabela
 	function criarTabela(livros) {
        var tabela = "<table class='tabela' border='1'><tr><th>Nome</th><th>Autor</th><th>Gênero</th><th>Emprestado?</th></tr>";

        for (var i = 0; i < livros.length; i++) {
            tabela += "<tr><td>" + 
            livros[i].Nome + "</td><td>" + 
            livros[i].autor + "</td><td>" + 
            livros[i].genero + "</td><td>" + 
            livros[i].emprestado + "</td></tr>";
        }

        tabela += "</table>";

        return tabela;
    }

    // Inserir tabela no elemento com ID "tabela-container"
    var tabelaContainer = document.getElementById("tabela-container");
    tabelaContainer.innerHTML = criarTabela(livros);
}
tabelaDeLivros();


function infoPerfil(){
	var dadosUsuarios = [
		{ nome: 'Uca', email: 'uail.com', tipo: 'Tipo A', senha: '*****' },
		]
	var nomes = document.getElementById("nomeUsuario");
		nomes.innerHTML = dadosUsuarios[0].nome;
	var email = document.getElementById("email");
		email.innerHTML = dadosUsuarios[0].email;
	var senha = document.getElementById("senha");
		senha.innerHTML = dadosUsuarios[0].senha;
	var tipoUsuario = document.getElementById("tipoUsuario");
		tipoUsuario.innerHTML = dadosUsuarios[0].tipo;
}


function livrosEmprestados(){
    // Dados dos livros
    var livros = [
		{ Nome: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ Nome: 'a arteack', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
		 ];
    // Função para criar a tabela
 		function criarTabela(livros) {
    	    var tabela = "<table><tr><th>Nome</th><th>Autor</th><th>Gênero</th><th>Emprestado?</th></tr>";

    	    for (var i = 0; i < livros.length; i++) {
     	       tabela += "<tr><td>" + 
      	      livros[i].Nome + "</td><td>" + 
      	      livros[i].autor + "</td><td>" + 
      	      livros[i].genero + "</td><td>" + 
     	       livros[i].emprestado + "</td></tr>";
    	    }

     	   tabela += "</table>";

   	     return tabela;
  		}
	// Inserir tabela no elemento com ID "tabela-container"
    var livrosEmprestados = document.getElementById("livrosTabela");
    livrosEmprestados.innerHTML = criarTabela(livros);
}



