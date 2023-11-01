$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botão-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const endereçoDaNovaImagem = $('#url-img-nova').val();
        const novaImagem = $('<li style="display: none"></li>');
        $(`<img src="${endereçoDaNovaImagem}"/>`).appendTo(novaImagem);
        $(`
            <div class="overlay-img-link">
                <a href="${endereçoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank" >
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novaImagem);
        $(novaImagem).appendTo('ul');
        $(novaImagem).fadeIn();
        $('#url-img-nova').val('')
    })
})