define(['scripts/utilities'], function (utilitiesModule) {
	console.log('iniciando shop.js');

	var shopObj = {
		settings: {
			backgroundImages: true
		},
		inicializar: function () {
			console.log('inicializando shopObj')
			this.renderizar();
		},
		renderizar: function () {
			this.navegacion.seleccionarOpcion(document.getElementById('shop-navigation-option-decks'));
		},
		cargarBackgroundImages: function (callback) {
			utilitiesModule.cargarBackgroundImage('/static/img/backgrounds/shop.png', $('#shop-container'), function () {
				callback();
			});
		},
		navegacion: {
			opcionSeleccionada: false,
			seleccionarOpcion: function (elemento) {
				$(elemento).css('color', 'rgb(225, 225, 225)');
				if(this.opcionSeleccionada) {
					shopObj.contenido.ocultarContenido($(this.opcionSeleccionada).data('cid'));
					this.deseleccionarOpcion(this.opcionSeleccionada);
				}
				shopObj.contenido.mostrarContenido($(elemento).data('cid'));
				this.opcionSeleccionada = elemento;
			},
			deseleccionarOpcion: function (elemento) {
				$(elemento).css('color', 'rgb(150, 200, 50)');
				this.opcionSeleccionada = false;
			}
		},
		contenido: {
			mostrarContenido: function (id) {
				$(id).show();
			},
			ocultarContenido: function (id) {
				$(id).hide();
			}
		}
	};

	// click
	$('.shop-navigation-option').click(function () {
		if(shopObj.navegacion.opcionSeleccionada != this) {
			shopObj.navegacion.seleccionarOpcion(this);
		}
		else {
			utilitiesModule.zumbido.zumbar($('#shop-content'));
		}
	});

	shopObj.inicializar();

	return shopObj;
});