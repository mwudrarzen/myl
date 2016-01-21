define(['scripts/modals', 'scripts/utilities'], function (modalsModule, utilitiesModule) {
	console.log('iniciando shop.js');

	var shopObj = {
		ajustes: {
			backgroundImages: true
		},
		inicializar: function () {
			console.log('inicializando shopObj')
			this.renderizar();
		},
		renderizar: function () {
		},
		cargarBackgroundImages: function (callback) {
			utilitiesModule.cargarBackgroundImage('/static/img/backgrounds/bgimg.png', $('bodys'), function () {
				callback();
			});
		}
	};

	shopObj.inicializar();

	return shopObj;
});