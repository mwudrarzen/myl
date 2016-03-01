define(['scripts/templates'], function (templatesModule) {
	console.log('iniciando menu.js');

	var obj = {
	};

	$('.core-menu-option').click(function () {
		var el = $(this);
		if($('.core-menu-option-selected').length) {
			if(el.hasClass('core-menu-option-selected')) return false;
			else {
				if(eval($('#core-head-button-menu').attr('data-active'))) {
					$('#core-head-button-menu').click();
				}
				$('.core-menu-option-selected').removeClass('core-menu-option-selected');
			}
		}
		el.addClass('core-menu-option-selected');
		switch(el.attr('id')) {
			case 'core-menu-option-start': {
				templatesModule.cambiar(templatesModule.templates.inicio);
				break;
			}
			case 'core-menu-option-shop': {
				templatesModule.cambiar(templatesModule.templates.tienda);
				break;
			}
			case 'core-menu-option-cards': {
				templatesModule.cambiar(templatesModule.templates.cartas);
				break;
			}
		}
	});

	return obj;
});
