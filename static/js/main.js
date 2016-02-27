define(['jqueryui', 'scripts/head', 'scripts/menu'], function (jQueryUI, headModule, menuModule) {
	console.log('iniciando main.js');

	(function () {
		menuModule.botones.accionar(menuModule.botones.objetos.inicio);
		$('#application-loader').fadeOut();
	})();
});
