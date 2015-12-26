if(settings.head) {
	define([], function () {
		var headObj = {
			inicializar: function () {
				console.log('inicializando head');
				$('head').append($('<link rel="stylesheet" type="text/css">').attr('href', '/static/css/head.css'));
				this.renderizar();
			},
			renderizar: function () {
				switch(settings.template) {
					case 'cards': {
						$('#core-head-back').data('url', '/');
						break;
					}
				}
			},
			botones: {
				botonActivado: false,
				activarBoton: function (boton) {
					if(this.botonActivado != false) {
						$(this.botonActivado).css({
							'background-color': 'transparent'
						});
						$(this.botonActivado).find('.icon').removeClass('core-head-icon-selected').addClass('core-head-icon');
						if($(this.botonActivado).attr('id') == 'core-head-settingsandmore') {
							$(this.botonActivado).find('.icon').removeClass('icon-menu4').addClass('icon-menu3');
						}
					}
					this.botonActivado = boton;
					$(boton).css({
						'background-color': 'rgb(25, 25, 25)'
					});
					$(boton).find('.icon').removeClass('core-head-icon').addClass('core-head-icon-selected');
					if($(boton).attr('id') == 'core-head-settingsandmore') {
						$(boton).find('.icon').removeClass('icon-menu3').addClass('icon-menu4');
					}
				},
				desactivarBoton: function (boton) {
					$(boton).css({
						'background-color': 'transparent'
					});
					$(boton).find('.icon').removeClass('core-head-icon-selected').addClass('core-head-icon');
					if($(boton).attr('id') == 'core-head-settingsandmore') {
						$(boton).find('.icon').removeClass('icon-menu4').addClass('icon-menu3');
					}
					this.botonActivado = false;
				}
			}
		};

		// mouseover
		$('.core-head-button').mouseover(function () {
			if(headObj.botones.botonActivado != this) {
				$(this).css({
					'background-color': 'rgb(40, 40, 40)'
				});
			};
		});

		// mouseout
		$('.core-head-button').mouseout(function () {
			if(headObj.botones.botonActivado != this) {
				$(this).css({
					'background-color': 'transparent'
				});
			}
		});

		// click
		$('.core-head-button').click(function () {
			if(headObj.botones.botonActivado != this) {
				headObj.botones.activarBoton(this);
			}
			else {
				headObj.botones.desactivarBoton(this);
			}
		});

		headObj.inicializar();

		var module = new Object();
		module.headObj = headObj;
		return module;
	});
}