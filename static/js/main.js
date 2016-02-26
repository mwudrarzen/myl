define(['jqueryui', 'scripts/head'], function (jQueryUI, headModule) {
	console.log('iniciando main.js');

	var mainObj = {
		inicializar: function () {
			console.log('inicializando mainObj');
			this.renderizar();
		},
		renderizar: function () {
			menuObj.botones.accionar(menuObj.botones.objetos.inicio);
			$('#application-loader').fadeOut();
		},
		templates: {
			objetos: {
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
				cartas: {
					nombre: 'cards',
					titulo: 'Cartas',
					url: '/cards/',
					cssPath: '/static/css/cards.css',
					jsPath: '',
					elementId: '#core-content-cards',
					cargado: false
				},
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

	var menuObj = {
		botones: {
			objetos: {
				inicio: {
					elementId: '#menu-option-start',
					url: '/start/',
					objeto: mainObj.templates.objetos.inicio
				},
				tienda: {
					elementId: '#menu-option-shop',
					url: '/shop/',
					objeto: mainObj.templates.objetos.tienda
				},
				cartas: {
					elementId: '#menu-option-cards',
					url: '/cards/',
					objeto: mainObj.templates.objetos.cartas
				}
			},
			activo: undefined,
			accionar: function (buttonObj) {
				if(this.activo != undefined) {
					if(buttonObj == this.activo) return false;
					else {
						this.desactivar();
					}
				}
				this.activar(buttonObj);
			},
			activar: function (buttonObj) {
				this.activo = buttonObj;
				mainObj.templates.cambiar(buttonObj.objeto);
				$(buttonObj.elementId).addClass('menu-option-selected');
				if(headModule.botones.activo != undefined) {
					headModule.botones.desactivar();
				}
			},
			desactivar: function () {
				$(this.activo.elementId).removeClass('menu-option-selected');
				this.activo = undefined;
			}
		}
	};

	$('#menu-option-start').click(function () {
		menuObj.botones.accionar(menuObj.botones.objetos.inicio);
	});

	$('#menu-option-shop').click(function () {
		menuObj.botones.accionar(menuObj.botones.objetos.tienda);
	});

	$('#menu-option-cards').click(function () {
		menuObj.botones.accionar(menuObj.botones.objetos.cartas);
	});

	mainObj.inicializar();

	return mainObj;
});
