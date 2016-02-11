define(['jqueryui', 'scripts/head', 'scripts/community'], function (jQueryUI, headModule, communityModule) {
	console.log('iniciando main.js');

	var mainObj = {
		inicializar: function () {
			console.log('inicializando mainObj');
			this.renderizar();
		},
		renderizar: function () {
			this.contenido.cambiar(this.contenido.templates.inicio);
		},
		contenido: {
			templates: {
				inicio: {
					nombre: 'start',
					titulo: 'Inicio',
					url: '/start/',
					cssPath: '/static/css/start.css',
					jsPath: 'scripts/start',
					elementId: '#core-content-start',
					cargado: false
				},
				jugar: {},
				tienda: {
					nombre: 'shop',
					titulo: 'Tienda',
					url: '/shop/',
					cssPath: '/static/css/shop.css',
					jsPath: 'scripts/shop',
					elementId: '#core-content-shop',
					cargado: false
				},
				cartas: {},
				carta: {}
			},
			template: undefined,
			cambiar: function (templateObj) {
				if(this.template != undefined) {
					$(this.template.elementId).hide();
				}
				this.template = templateObj;
				if(templateObj.cargado) {
					document.title = templateObj.titulo + ' - ' + 'Mitos y Leyendas';
					$(templateObj.elementId).show();
				}
				else {
					$('#core-content-loader').show();
					$.ajax({
						url: templateObj.url,
						type: 'GET',
						dataType: 'html',
						success: function (response) {
							document.title = templateObj.titulo + ' - ' + 'Mitos y Leyendas';
							el = $('<div id="' + templateObj.elementId.substring(1) + '"></div>');
							el.html(response);
							requirejs([templateObj.jsPath], function () {
								$('#core-content-loader').hide();
								$('#core-content').append(el);
								templateObj.cargado = true;
							});
						},
						failure: function (errMsg) {
							//meter un reintentar en core-content
							console.log(errMsg);
						}
					});
				}
			}
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

	$('#core-head-button-messages').click(function () {
		mainObj.contenido.cambiar(mainObj.contenido.templates.tienda);
	});
	$('#core-head-button-notifications').click(function () {
		mainObj.contenido.cambiar(mainObj.contenido.templates.inicio);
	});

	mainObj.inicializar();
	loaderObj.inicializar();
});
