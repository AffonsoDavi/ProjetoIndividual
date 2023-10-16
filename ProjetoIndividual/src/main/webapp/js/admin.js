//FUNCAO PARA ABRIR A PAGINA DE ADM
function abrirPag() {
	var email = document.getElementById("email").value;
	var senha = document.getElementById("password").value;
	if ((email == 'affonsodavi@gmail.com')&&(senha == '123')) {
		window.location.href = 'pages/admin/index.html'
	} else {
		window.location.href = 'pages/site/index.html';
		
		
	}
}




// Função genérica para abrir uma modal
function abrirModal(modalId) {
	var modal = document.getElementById(modalId);
	modal.style.display = 'block';
}

// Função genérica para fechar uma modal
function fecharModal(modalId) {
	var modal = document.getElementById(modalId);
	modal.style.display = 'none';
}




// VERIFICA SE É RELATORIO DE LIVRO OU USUARIO E ABRE A RESPECTIVA MODAL A SEGUIR
function gerarRelatorio() {
	var relatorioTipo = document.getElementById("relatorioTipo").value;

	if (relatorioTipo === "usuarios") {
		fecharModal('modalRelatorio'); // Fecha a primeira modal
		gerarTabelaRelatorioUsuarios(); // Gera a tabela de relatório de usuários
		abrirModal('modalRelatorioUsuarios'); // Abre a segunda modal
	} else if (relatorioTipo === "livros") {
		fecharModal('modalRelatorio'); // Fecha a primeira modal
		gerarTabelaRelatorioLivros();  // Gera a tabela de relatório de lIVROS
		abrirModal('modalRelatorioLivros')  //Abre a segunda modal dos livros
	} else {
		alert("Por favor, selecione um tipo de relatório.");
	}
}

// gera a tabela de relatório de usuários
function gerarTabelaRelatorioUsuarios() {

	//NO FUTURO SUBSTITUIR POR DADOS DO BANCO
	var dadosUsuarios = [
		{ nome: 'Uca', email: 'uail.com', tipo: 'Tipo A', telefone: '123-456-7890', senha: '*****' },
		{ nome: 'Siio', email: 'usumail.com', tipo: 'Aluno', telefone: '987-654-3210', senha: '*****' },

	];

	var tabela = '<table>';
	tabela += '<tr><th>Nome</th><th>E-mail</th><th>Tipo de Usuário</th><th>Telefone</th><th>Senha</th></tr>';

	for (var i = 0; i < dadosUsuarios.length; i++) {
		tabela += '<tr>';
		tabela += '<td>' + dadosUsuarios[i].nome + '</td>';
		tabela += '<td>' + dadosUsuarios[i].email + '</td>';
		tabela += '<td>' + dadosUsuarios[i].tipo + '</td>';
		tabela += '<td>' + dadosUsuarios[i].telefone + '</td>';
		tabela += '<td>' + dadosUsuarios[i].senha + '</td>';
		tabela += '</tr>';
	}

	tabela += '</table>';

	// Exiba a tabela no id "tabelaRelatorioUsuarios"
	document.getElementById('tabelaRelatorioUsuarios').innerHTML = tabela;
}

function gerarTabelaRelatorioLivros() {

	//NO FUTURO SUBSTITUIR POR DADOS DO BANCO
	var dadosLivros = [
		{ titulo: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ titulo: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' }

	];

	var tabela = '<table>';
	tabela += '<tr><th>Titulo</th><th>Autor</th><th>Gênero</th><th>Emprestado?</th></tr>';

	for (var i = 0; i < dadosLivros.length; i++) {
		tabela += '<tr>';
		tabela += '<td>' + dadosLivros[i].titulo + '</td>';
		tabela += '<td>' + dadosLivros[i].autor + '</td>';
		tabela += '<td>' + dadosLivros[i].genero + '</td>';
		tabela += '<td>' + dadosLivros[i].emprestado + '</td>';
		tabela += '</tr>';
	}

	tabela += '</table>';

	// Exiba a tabela no id "tabelaRelatorioLivros"
	document.getElementById('tabelaRelatorioLivros').innerHTML = tabela;
}







//NO FUTURO SUBSTITUIR POR DADOS DO BANCO
var usuariosGeral = {
	quantidade: 100,
	ativos: 75,
	inativos: 25,
	usuarios: [
		{ nome: 'carlin', email: 'carlin@gmaius', telefone: '47lalalaal', tipo: 'pais', senha: '123', ativo: 'sim' },
	]
};

// preenche a modal com os dados dos usuários
function preencherModalUsuarios() {
	document.getElementById('quantidadeUsuarios').innerHTML = usuariosGeral.quantidade; /*INFO É EXIBIDA NO ID "quantidadeUsuarios" */
	document.getElementById('usuariosAtivos').innerHTML = usuariosGeral.ativos; /*INFO É EXIBIDA NO ID "usuariosAtivos" */
	document.getElementById('usuariosInativos').innerHTML = usuariosGeral.inativos;/*INFO É EXIBIDA NO ID "usuariosInativos" */

	var tabelaUsuarios = '<table>';
	tabelaUsuarios += '<tr><th>Nome</th><th>E-mail</th><th>Telefone</th><th>Tipo de Usuário</th><th>Senha</th><th>Ativo ?</th></tr>';

	for (var i = 0; i < usuariosGeral.usuarios.length; i++) {
		tabelaUsuarios += '<tr>';
		tabelaUsuarios += '<td>' + usuariosGeral.usuarios[i].nome + '</td>';
		tabelaUsuarios += '<td>' + usuariosGeral.usuarios[i].email + '</td>';
		tabelaUsuarios += '<td>' + usuariosGeral.usuarios[i].telefone + '</td>';
		tabelaUsuarios += '<td>' + usuariosGeral.usuarios[i].tipo + '</td>';
		tabelaUsuarios += '<td>' + usuariosGeral.usuarios[i].senha + '</td>';
		tabelaUsuarios += '<td>' + (usuariosGeral.usuarios[i].ativo ? 'Sim' : 'Não') + '</td>';
		tabelaUsuarios += '</tr>';
	}

	tabelaUsuarios += '</table>';
	// Exiba a tabela no id "tabelaGerirUsuarios"
	document.getElementById('tabelaGerirUsuarios').innerHTML = tabelaUsuarios;
}







//NO FUTURO SUBSTITUIR POR DADOS DO BANCO
var livrosGeral = {
	total: 100,
	emprestados: 75,
	emEstoque: 25,
	livros: [
		{ titulo: 'a arte do front', autor: 'uchoin', genero: 'Chatisse', emprestado: 'SIM' },
		{ titulo: 'a arte do back', autor: 'silvin', genero: 'Ação', emprestado: 'NAO' },
	]
};

// preenche a modal com os dados dos usuários
function preencherModalLivros() {
	document.getElementById('quantidadeLivros').innerHTML = livrosGeral.total; /*INFO É EXIBIDA NO ID "quantidadeUsuarios" */
	document.getElementById('livrosEmprestados').innerHTML = livrosGeral.emprestados; /*INFO É EXIBIDA NO ID "usuariosAtivos" */
	document.getElementById('livrosEmEstoque').innerHTML = livrosGeral.emEstoque;/*INFO É EXIBIDA NO ID "usuariosInativos" */

	var tabelaLivros = '<table>';
	tabelaLivros += '<tr><th>Nome</th><th>genero</th><th>Autor</th><th>Emprestado?</th></tr>';

	for (var i = 0; i < livrosGeral.livros.length; i++) {
		tabelaLivros += '<tr>';
		tabelaLivros += '<td>' + livrosGeral.livros[i].titulo + '</td>';
		tabelaLivros += '<td>' + livrosGeral.livros[i].genero + '</td>';
		tabelaLivros += '<td>' + livrosGeral.livros[i].autor + '</td>';
		tabelaLivros += '<td>' + livrosGeral.livros[i].emprestado + '</td>';

		tabelaLivros += '</tr>';
	}

	tabelaLivros += '</table>';
	// Exiba a tabela no id "tabelaGerirLivros"
	document.getElementById('tabelaGerirLivros').innerHTML = tabelaLivros;
}




