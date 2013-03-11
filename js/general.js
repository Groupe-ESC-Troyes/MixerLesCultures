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
	
	$('#form').submit(function(event){
		event.preventDefault();
		$.post('mailer.php', $(this).serialize()).success(function(){
			$('#form .form').slideUp(function(){
				$('#form .answer').slideDown();
			});
		});
	});
});