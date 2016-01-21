define(['jqueryui', 'waitforimages', 'scripts/head', 'scripts/community', data.js_include, 'scripts/utilities'], function (jQueryUI, waitForImages, headModule, communityModule, includeModule, utilitiesModule) {
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
					if(data.settings.head) {
						$(this.el).css('min-height', $(window).height() - 75);
					}
					else {
						$(this.el).css('min-height', $(window).height());
					}
				}
			}
		}
	};

	var loaderObj = {
		ajustes: {
			fadeInDuration: 500,
			fadeOutDuration: 500
		},
		inicializar: function () {
			console.log('inicializando loaderObj');
			this.cargarImagenes();
		},
		cargarImagenes: function () {
			var self = this;
			$('body').waitForImages(function () {
				if(data.js_include != '') {
					if(includeModule.ajustes.backgroundImages) {
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
			if(data.settings.head) $('#core-head').show();
			$('#core-container').show();
			$('#loader').fadeOut(this.ajustes.fadeOutDuration, function () {
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
