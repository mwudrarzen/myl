define([], function () {
	console.log('iniciando head.js');

	var headObj = {
		inicializar: function () {
			console.log('inicializando headObj');
			this.renderizar();
		},
		renderizar: function () {
			//
		}
	};

	headObj.inicializar();

	return headObj;
});
