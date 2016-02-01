define(['jqueryui', 'waitforimages', 'scripts/head', 'scripts/community', data.js_include], function (jQueryUI, waitForImages, headModule, communityModule, includeModule) {
	console.log('iniciando main.js');

	var mainObj = {
		inicializar: function () {
			console.log('inicializando mainObj');
			this.renderizar();
		},
		renderizar: function () {
			//
		}
	};

	var loaderObj = {
		inicializar: function () {
			console.log('inicializando loaderObj');
			this.renderizar();
		},
		renderizar: function () {
			$('#loader').fadeOut();
		}
	};

	// click
	$('.url').click(function () {
		$(this).css('cursor', 'default');
		location.href = $(this).data('url');
	});

	mainObj.inicializar();
	loaderObj.inicializar();
});
