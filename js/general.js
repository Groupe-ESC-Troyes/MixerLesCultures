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
	
	$.localScroll({hash: true});
	$('body').scrollspy({target: '#menu', offset: 100});
});