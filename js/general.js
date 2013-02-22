$(function(){
	$('body').addClass('js');
	var $menu = $('#menu'),
		$menulink = $('.menu-toggle');
  
	$menulink.click(function(){
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		return false;
	});
});