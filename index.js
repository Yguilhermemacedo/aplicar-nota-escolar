document.getElementById('btn-lancar').addEventListener('click', (event) => {
    event.preventDefault(); // Previne o envio do formulário

    var dados = [
        document.getElementById('nome'),
        document.getElementById('classe'),
        document.getElementById('disciplina'),
        document.getElementById('nota'),
        document.getElementById('idade')
    ];

    // Informações do aluno
    const nome = dados[0].value;
    const classe = dados[1].value;
    const disciplina = dados[2].value;
    const nota = dados[3].value;
    const idade = dados[4].value;

    // Verificar se os campos estão preenchidos
    if (!nome || !classe || !disciplina || !nota || !idade) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Exibir painel de notas
    const painelNotas = document.getElementById('notas');
    painelNotas.style.display = 'block';

    // Adicionar as informações do aluno ao painel
    const infoNome = document.createElement('li');
    infoNome.textContent = `Nome: ${nome}`;

    const infoClasse = document.createElement('li');
    infoClasse.textContent = `Classe: ${classe}`;

    const infoIdade = document.createElement('li');
    infoIdade.textContent = `Idade: ${idade}`;

    const infoLista = document.querySelector('.info-aluno ol');
    infoLista.innerHTML = ''; // Limpar lista antes de adicionar novos itens
    infoLista.appendChild(infoNome);
    infoLista.appendChild(infoClasse);
    infoLista.appendChild(infoIdade);

    // Adicionar as notas do aluno ao painel
    const materiaAluno = document.createElement('li');
    materiaAluno.textContent = `Matéria: ${disciplina}`;

    const notaAluno = document.createElement('li');
    notaAluno.textContent = `Nota: ${nota}`;

    const alunosContainer = document.querySelector('.aluno ol');
    alunosContainer.innerHTML = ''; // Limpar container antes de adicionar novos itens
    alunosContainer.appendChild(materiaAluno);
    alunosContainer.appendChild(notaAluno);

    // Mostrar o Resultado Aprovado/Reprovado
    const resultadoNota = document.getElementById('res');
    if (nota >= 7) {
        resultadoNota.textContent = 'Aprovado';
        resultadoNota.classList.add('aprovado');
        resultadoNota.classList.remove('reprovado');
    } else {
        resultadoNota.textContent = 'Reprovado';
        resultadoNota.classList.add('reprovado');
        resultadoNota.classList.remove('aprovado');
    }
});

// Função para fechar o painel de notas
function fecharPainel() {
    const painelNotas = document.getElementById('notas');
    painelNotas.style.display = 'none';
}
