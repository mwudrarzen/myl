define([], function () {
	console.log('iniciando shop.js');

	var shopObj = {
		inicializar: function () {
			console.log('inicializando shopObj')
			this.renderizar();
		},
		renderizar: function () {
			//
		}
	};

	shopObj.inicializar();

	return shopObj;
});