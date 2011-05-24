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
		pause: true
	});

function criarPaginador(id, slide) {
		var idFinal = id + 1;
		
		var imgThumb = $(slide).attr('data-urlThumb');
		
		return '<li><a href="#"><img src="' + imgThumb + '" alt="' + slide.title + '" title="'+ slide.title +'" width="180" height="100"></a></li>';
}

$('#carousel').jcarousel();

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





















