define(['jquery'], function () {
	$(document).ready(function () {
		var headObj = {
			inicializar: function () {
				console.log('inicializando head.js');
				this.renderizar();
			},
			renderizar: function () {
				switch(general_settings.template) {
					case 'cards': {
						$('#core-head-back').data('url', '/');
						break;
					}
				}
			}
		};
		headObj.inicializar();
	});
});