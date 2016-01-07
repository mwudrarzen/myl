define([], function () {
	console.log('iniciando start.js');

	var startObj = {
		ajustes: {
			backgroundImages: false
		},
		inicializar: function () {
			console.log('inicializando startObj');
			this.renderizar();
		},
		renderizar: function () {
		}
	};

	return startObj;
});