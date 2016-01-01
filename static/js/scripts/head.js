if(settings.head) {
	define([], function () {
		//
		console.log('iniciando head.js');

		var headObj = {
			inicializar: function () {
				console.log('inicializando headObj');
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
						// ocultar el contenido
						$('#' + $(this.botonActivado).attr('id') + '-content').hide();
						// restablecer el color
						$(this.botonActivado).find('.icon').removeClass('core-head-icon-selected').addClass('core-head-icon');
						if($(this.botonActivado).attr('id') == 'core-head-user') {
							$(this.botonActivado).find('#core-head-user-name').removeClass('core-head-user-name-selected');
						}
						// restablecer icono de settings and more
						if($(this.botonActivado).attr('id') == 'core-head-settingsandmore') {
							$(this.botonActivado).find('.icon').removeClass('icon-menu4').addClass('icon-menu3');
						}
					}
					this.botonActivado = boton;
					$(boton).css({
						'background-color': 'rgb(40, 40, 40)'
					});
					// mostrar contenido
					this.posicionarContenido($(boton).attr('id') + '-content');
					$('#' + $(boton).attr('id') + '-content').show();
					// cambiar color
					$(boton).find('.icon').removeClass('core-head-icon').addClass('core-head-icon-selected');
					if($(boton).attr('id') == 'core-head-user') {
						$(boton).find('#core-head-user-name').addClass('core-head-user-name-selected');
					}
					// cambiar icono de settings and more
					if($(boton).attr('id') == 'core-head-settingsandmore') {
						$(boton).find('.icon').removeClass('icon-menu3').addClass('icon-menu4');
					}
				},
				desactivarBoton: function (boton) {
					$(boton).css({
						'background-color': 'transparent'
					});
					// ocultar el contenido
					$('#' + $(boton).attr('id') + '-content').hide();
					// restablecer el color
					$(boton).find('.icon').removeClass('core-head-icon-selected').addClass('core-head-icon');
					if($(boton).attr('id') == 'core-head-user') {
						$(boton).find('#core-head-user-name').removeClass('core-head-user-name-selected');
					}
					//
					if($(boton).attr('id') == 'core-head-settingsandmore') {
						$(boton).find('.icon').removeClass('icon-menu4').addClass('icon-menu3');
					}
					this.botonActivado = false;
				},
				posicionarContenido: function (id) {
					id = '#' + id;
					var other = id.replace('-content', '');
					if(!$(id).data('positioned')){
						$(id).css({
							'right': 1230 - ($(other).position().left) - $(other).width() - 5
						});
						$(id).data('positioned', true);
					}
				}
			}
		};

		// mouseover
		$('.core-head-button').mouseover(function () {
			if(headObj.botones.botonActivado != this) {
				$(this).css({
					'background-color': 'rgb(60, 60, 60)'
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
		$('#core-container').click(function () {
			if(headObj.botones.botonActivado != false){
				headObj.botones.desactivarBoton($(headObj.botones.botonActivado));
			}
		});
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
		//
	});
}