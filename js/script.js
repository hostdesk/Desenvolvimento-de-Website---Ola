/* Author: 
	Joao Stein [http://www.joaostein.com.br + http://www.hostdesk.com.br]
*/

/*----- Cycle Destaque Home -----*/

$(function(){
	$('#destaque').cycle({
		fx: 'fade',
		speed:    1200, 
		timeout:  8000,
		pager:  '.pager',
		pagerAnchorBuilder: criarPaginador,
		before: verificarAnimacao,
		pause: true,
		pagerEvent: 'mouseover'
	});
	
$('#carousel').jcarousel({
	initCallback: giveCarousel,
	scroll: 4
});

function criarPaginador(id, slide) {
	var idFinal = id + 1;
	var imgThumb = $(slide).attr('data-urlThumb');
	return '<li><a href="#"><img src="' + imgThumb + '" alt="' + slide.title + '" title="'+ slide.title +'" width="180" height="100"></a></li>';
}

function giveCarousel(carousel) {
	carouselObject = carousel;
}

function verificarAnimacao(currSlideElement, nextSlideElement, options, forwardFlag) {
	posicaoAtual = options.nextSlide + 1;
	changePosition();
}

function changePosition() {
	if( posicaoAtual % 5 == 0 || posicaoAtual == 1) {
		carouselObject.scroll(posicaoAtual)
	}
}

$('.jcarousel-skin-tango').hover(pagerOverPause, pagerOutResume);

function pagerOverPause(){
	$('#destaque').cycle('pause');
	$('#destaque').addClass('hovered');
}

function pagerOutResume(){
	$('#destaque').cycle('resume');
	$('#destaque').removeClass('hovered');
}

});

/*---- Cycle Home Comprar -----*/

$(function(){
	$('#comprarHome .filtroContent').cycle({
		fx: 'fade',
		speed:    1200, 
		timeout:  8000,
		pager:  '#comprarHomePager',
		pause: true
	});
});

/*---- Cycle Home Alugar -----*/

$(function(){
	$('#alugarTableHome').cycle({
		fx: 'scrollVert',
		speed:    1200, 
		timeout:  8000,
		pager:  '#alugarHomePager',
		pause: true
	});
});

/*---- Efeito de animação da nuvem ----*/

$('html').pan({fps: 15, speed: 2, dir: 'left'});


/*---- Adiciona classe aos terceiros elementos da lista-comprar -----*/

$('#listaComprar .imovelPreview:nth-child(3n)').addClass('retirarMargin');

/*---- Imóvel Interna - Adicionar "/" nos telefones -----*/

$('.dadosAnunciante .telefones span:not(:last-child)').each(formatarTel);
function formatarTel() {
	$(this).append(' /');
}

/*---- Adiciona classe aos segundos thumbs da página interna do imóvel -----*/

$('.imovelInternaThumbWrapper a:nth-child(2n)').addClass('retirarMargin');

/*----- Cycle da interna do Imóvel onde tem os thumbs -----*/

$(function(){
	$('#cycleThumbsImovelInterna').cycle({
		fx: 'fade',
		speed:    1200, 
		timeout:  8000,
		prev: '#imovelInternaPagerContainer .previous',
		next: '#imovelInternaPagerContainer .next',
 		pager:  '#imovelInternaPager',
		pause: true
	});
	
	var larguraTotal= $('#imovelInternaPager').width();
	var larguraFinal= - larguraTotal / 2 + 'px';
	
	var alturaTotal= $('#imovelInternaPager').height();
	var alturaFinal= - alturaTotal / 2 + 'px';
	
	$('#imovelInternaPager').css({
		marginLeft: larguraFinal,
		marginTop: alturaFinal
	});

});

/*----- Function para ativar ColorBox -----*/

$(function(){
	$('.imovelInternaThumbWrapper a').colorbox({
		current: 'Imagem {current} de {total}',
		previous: 'Anterior',
		next: 'Próxima',
		close: 'Fechar'
	});
});

/*------ Cycle Publicade Home ------*/

$(function(){
	$('#cyclePublicidadeHome').cycle();
	
	
})











