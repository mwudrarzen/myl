define(['jqueryui', 'waitForImages', 'scripts/head', 'scripts/community', settings.js_include, 'scripts/utilities'],
	function (jQueryUI, waitForImages, headModule, communityModule, includeModule, utilitiesModule) {

	console.log('iniciando main.js');

	var mainObj = {
		inicializar: function () {
			console.log('inicializando mainObj');
			this.renderizar();
		},
		renderizar: function () {
			this.elementos.coreContent.actualizar();
		},
		elementos: {
			coreContent: {
				el: $('#core-content'),
				actualizar: function() {
					if(settings.head) {
						$(this.el).css('min-height', $(window).height() - 50);
					}
					else {
						$(this.el).css('min-height', $(window).height());
					}
				}
			}
		}
	};

	var loaderObj = {
		settings: {
			fadeInDuration: 750,
			fadeOutDuration: 750
		},
		inicializar: function () {
			console.log('inicializando loaderObj');
			this.cargarImagenes();
		},
		cargarImagenes: function () {
			var self = this;
			$('body').waitForImages(function () {
				if(settings.js_include != '') {
					if(includeModule.settings.backgroundImages) {
						includeModule.cargarBackgroundImages(function () {
							self.finalizar();
						});
					}
					else self.finalizar();
				}
				else self.finalizar();
			});
		},
		finalizar: function () {
			if(settings.head) $('#core-head').show();
			$('#core-container').show();
			$('#loader').fadeOut(this.settings.fadeOutDuration, function () {
				$(this).remove();
			});
		}
	};

	// click
	$('.url').click(function () {
		$(this).css('cursor', 'default');
		location.href = $(this).data('url');
	});

	// otros eventos
	$(window).resize(function () {
		mainObj.elementos.coreContent.actualizar();
	});

	mainObj.inicializar();
	loaderObj.inicializar();
});