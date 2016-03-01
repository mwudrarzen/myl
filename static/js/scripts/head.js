define(['scripts/templates', 'scripts/windows', 'scripts/modals'], function (templatesModule, windowsModule, modalsModule) {
	console.log('iniciando head.js');

	var obj = {
	};

	$('.core-head-button-default').click(function () {
		var el = $(this);
		if(!eval(el.attr('data-active'))) {
			el.attr('data-active', true);
			el.css('color', 'rgb(152, 48, 48)');
			if(el.attr('id') == 'core-head-button-menu') {
				el.removeClass('icon-menu3').addClass('icon-menu4');
				$('#core-menu').show();
			}
			else if(el.attr('id') == 'core-head-button-logout') {
				// open modal
			}
			else {
				// open window
			}
		}
		else {
			el.css('color', 'rgb(210, 210, 210)');
			if(el.attr('id') == 'core-head-button-menu') {
				el.removeClass('icon-menu4').addClass('icon-menu3');
				$('#core-menu').hide();
			}
			else if(el.attr('id') == 'core-head-button-logout') {
				// close modal
			}
			else {
				// close window
			}
			el.attr('data-active', false);
		}
	});

	$('#core-head-button-play').click(function () {
		templatesModule.cambiar(templatesModule.templates.jugar);
	});

	return obj;
});
