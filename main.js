$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#closeList').click(function(){
        $('form').slideUp();
    })
    $('form').on('submit', function(e){
        e.preventDefault();
        const tituloDaTarefa = $('#novaTarefa').val();
        const descricaoDaTarefa = $('#descricaoDaTarefa').val();

        // Adiciona a nova tarefa à lista com uma classe 'tarefa'
        const novaTarefa = $(`
            <li class="tarefa">
                <span class="title">${tituloDaTarefa}</span>
                <br>
                <span class="desc">${descricaoDaTarefa}</span>
                <button type="button" class="botao-cancelar">Excluir</button>
            </li>
        `);

        // Adiciona a nova tarefa à lista
        $('#listaDeTarefas').append(novaTarefa);

        // Limpa os campos do formulário
        $('#novaTarefa, #descricaoDaTarefa').val('');
    });

    // Adiciona evento para excluir tarefa
    $('#listaDeTarefas').on('click', '.botao-cancelar', function() {
        $(this).closest('.tarefa').remove();
    });
    $('#listaDeTarefas').on('click', '.tarefa', function() {
        $(this).toggleClass('concluida');
    });
})
