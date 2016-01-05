define(['scripts/modals', 'scripts/utilities'], function (modalsModule, utilitiesModule) {
	console.log('iniciando shop.js');

	var shopObj = {
		ajustes: {
			backgroundImages: true
		},
		inicializar: function () {
			console.log('inicializando shopObj')
			this.renderizar();
		},
		renderizar: function () {
			this.navegacion.seleccionarOpcion('#shop-navigation-option-icons');
		},
		cargarBackgroundImages: function (callback) {
			utilitiesModule.cargarBackgroundImage('/static/img/backgrounds/shop.png', $('#shop-container'), function () {
				callback();
			});
		},
		cabeza: {
			el: $('#shop-head'),
			actualizarCLP: function (clp) {
				$(this.el).find('#shop-head-user-clp').html('$' + clp);
			}
		},
		navegacion: {
			opcionSeleccionada: false,
			seleccionarOpcion: function (id) {
				$(id).css('color', 'rgb(225, 225, 225)');
				if(this.opcionSeleccionada) {
					shopObj.contenido.ocultarContenido($(this.opcionSeleccionada).data('cid'));
					this.deseleccionarOpcion(this.opcionSeleccionada);
				}
				shopObj.contenido.mostrarContenido($(id).data('cid'));
				this.opcionSeleccionada = id;
			},
			deseleccionarOpcion: function (id) {
				$(id).css('color', 'rgb(150, 200, 50)');
				this.opcionSeleccionada = false;
			}
		},
		contenido: {
			mostrarContenido: function (id) {
				$(id).show();
			},
			ocultarContenido: function (id) {
				$(id).hide();
			}
		},
		items: {
			comprar: function (tipo, id, elemento) {
				var self = this;
				var datos = {'itemtype': tipo, 'itemid': id};
				$.ajax({
					url: '/shop/buy/',
					type: 'POST',
					data: JSON.stringify(datos),
					dataType: 'json',
					contentType: 'application/json; charset=utf-8',
					success: function (response) {
						if(response['success']) {
							shopObj.cabeza.actualizarCLP(response['data']['clp']);
							if(tipo == 'icon') {
								self.iconos.mostrarIconoAdquirido($(elemento));
							}
						}
						alert(response['success'] + ' - ' + response['data']['text']);
					},
					failure: function (errMsg) {
						console.log(errMsg);
					}
				});
			},
			iconos: {
				mostrarIconoAdquirido: function (elemento) {
					var parent = $(elemento).parent();
					$(parent).addClass('shop-icon-owned-container');
					$(parent).find('.shop-icon-price').html('Adquirido');
					$(elemento).html('Usar');
				}
			}
		}
	};

	// click
	$('.shop-navigation-option').click(function () {
		id = '#' + $(this).attr('id');
		if(shopObj.navegacion.opcionSeleccionada != id) {
			shopObj.navegacion.seleccionarOpcion(id);
		}
		else {
			utilitiesModule.zumbido.zumbar('#shop-content');
		}
	});
	$('.buy').click(function () {
		shopObj.items.comprar($(this).data('itemtype'), $(this).data('itemid'), $(this));
	});

	shopObj.inicializar();

	return shopObj;
});