define(['scripts/head', 'scripts/menu'], function (headModule, menuModule) {
	console.log('iniciando main.js');

	$('#application-loader').fadeOut();
	$('#core-menu-option-start').click();

	$('.help_text').on('mousemove', function(e){
		$('#testasdf').html($(this).data('ht'));
		$('#testasdf').fadeIn(250);
	    $('#testasdf').css({
	    	left:  e.pageX - $('#testasdf').width() - 30,
	    	top:   e.pageY + 30
	    });
	});

	// help text

	var helpTextObj = {
		elementId: '#core-hText',
		isActive: false,
		timer: null,
		delay: 750
	};

	$('.hText').on({
		'mouseenter': function () {
			var self = $(this);
			$(helpTextObj.elementId).html(self.attr('data-hText'));
			helpTextObj.timer = setTimeout(function () {
				helpTextObj.isActive = true;
				$(helpTextObj.elementId).show();
			}, helpTextObj.delay);
		},
		'mousemove': function (e) {
			$(helpTextObj.elementId).css('top', e.pageY + 30);
			if(e.pageX > ($(document).width() / 100) * 70) {
				$(helpTextObj.elementId).css('left', e.pageX - (($(helpTextObj.elementId).width() + 20) + 30));
			}
			else {
				$(helpTextObj.elementId).css('left', e.pageX + 30);
			}
		},
		'mouseleave': function () {
			if(helpTextObj.isActive) {
				$(helpTextObj.elementId).hide();
				$(helpTextObj.elementId).empty();
				helpTextObj.isActive = false;
			}
			else {
				clearTimeout(helpTextObj.timer);
				$(helpTextObj.elementId).empty();
			}
		}
	});
});
