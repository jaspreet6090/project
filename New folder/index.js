$('#show-more-content').hide();

$('#show-more').click(function(){
	$('#show-more-content').show(300);
	$('#show-less').show();
	$('#show-more').hide();
});

$('#show-less').click(function(){
	$('#show-more-content').hide(150);
	$('#show-more').show();
	$(this).hide();
});