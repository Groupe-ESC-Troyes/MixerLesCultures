$(function(){
	$('body').addClass('js');
	var $menu = $('#menu'),
		$menulink = $('.menu-toggle');
  
	$menulink.click(function(event){
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		event.preventDefault();
		event.stropPropagation();
		return false;
	});
	$menu.find('a').click(function(){
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
	});
	
	$.localScroll({hash: true});
	$('body').scrollspy({target: '#menu', offset: 100});
	
	$('a.download').click(function(){
		window.pageTracker ? pageTracker._trackEvent('Téléchargement', 'Livre') : _gaq.push(['_trackEvent', 'Téléchargement', 'Livre']);
	});
	
});