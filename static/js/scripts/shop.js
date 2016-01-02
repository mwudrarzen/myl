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
			console.log('cargar bgimg shop (llamando funcion en utilities)');
			utilitiesModule.cargarBackgroundImage('/static/img/backgrounds/shop.png', $('#shop-container'), function () {
				console.log('cargado bgimg shop');
				callback();
			});
		},
		navegacion: {
			opcionSeleccionada: false,
			seleccionarOpcion: function (elemento) {
				if(this.opcionSeleccionada) {
					this.deseleccionarOpcion(this.opcionSeleccionada);
				}
				$(elemento).css('color', 'rgb(225, 225, 225)');
				this.opcionSeleccionada = elemento;
			},
			deseleccionarOpcion: function (elemento) {
				$(elemento).css('color', 'rgb(150, 200, 50)');
				this.opcionSeleccionada = false;
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