$(document).ready(function() {

	// Distribute MainMenu elements
	var totalLiLength = 0;
	$('#MainMenu li a').each(function (i) {
		totalLiLength += $(this).width();
	});
	
	var totalPadding = $('#MainMenu').width() - totalLiLength;
	var liPadding = Math.floor(totalPadding / ($('#MainMenu li').size() * 2));
	var restPadding = totalPadding - (Math.floor(liPadding * $('#MainMenu li').size() * 2)) - 1;
	
	$('#MainMenu li a').each(function (i) {
		if (restPadding > 0) {
			$(this).css('padding-left', liPadding + 1);
		} else {
			$(this).css('padding-left', liPadding);
		}
		restPadding --;
		
		if (restPadding > 0) {
			$(this).css('padding-right', liPadding + 1);
		} else {
			$(this).css('padding-right', liPadding);
		}
		restPadding --;
	});
	
	// PNG-fix
	$('.png').supersleight({shim: '/Templates/Site/js/transparent.gif'});
	
	// Quicksearch
	$('#QuickSearch input[type="text"]').focus(function() {  
		$(this).parent().parent().addClass("selected");
		if (this.value == this.defaultValue){   
			this.value = '';   
		} else {   
			this.select();   
		}   
	}).blur(function() {   
		$(this).parent().parent().removeClass("selected"); 
		if ($.trim(this.value) == ''){   
			this.value = (this.defaultValue ? this.defaultValue : '');   
		}   
	});
	
});
