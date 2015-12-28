if(settings.community) {
	define([], function () {
		//
		console.log('iniciando community.js');

		var communityObj = {
			inicializar: function () {
				console.log('inicializando communityObj');
				$('head').append($('<link rel="stylesheet" type="text/css">').attr('href', '/static/css/community.css'));
				this.renderizar();
			},
			renderizar: function () {
			}
		};
		communityObj.inicializar();

		var module = new Object();
		module.communityObj = communityObj;
		return module;
		//
	});
}