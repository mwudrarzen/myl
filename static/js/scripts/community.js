if(data.settings.community) {
	define([], function () {
		//
		console.log('iniciando community.js');

		var communityObj = {
			inicializar: function () {
				console.log('inicializando communityObj');
				this.renderizar();
			},
			renderizar: function () {
			}
		};

		communityObj.inicializar();

		return communityObj;
	});
}