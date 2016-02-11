define([], function () {
	console.log('iniciando head.js');

	var headObj = {
		inicializar: function () {
			console.log('inicializando headObj');
			this.renderizar();
		},
		renderizar: function () {
			//
		},
		botones: {
			objetos: {
				menu: {
					elementId: '#core-head-button-menu',
					contentId: ''
				},
				jugar: {
					elementId: '#core-head-button-play',
					contentId: ''
				},
				comunidad: {
					elementId: '#core-head-button-community',
					contentId: ''
				},
				notificaciones: {
					elementId: '#core-head-button-notifications',
					contentId: ''
				},
				mensajes: {
					elementId: '#core-head-button-messages',
					contentId: ''
				},
				ajustes: {
					elementId: '#core-head-button-settings',
					contentId: ''
				},
				salir: {
					elementId: '#core-head-button-logout',
					contentId: ''
				}
			},
			activo: undefined,
			accionar: function (buttonObj) {
				if(this.activo != undefined) {
					if(buttonObj == this.activo) {
						return this.desactivar();
					}
					else {
						this.desactivar();
					}
				}
				this.activar(buttonObj);
			},
			activar: function (buttonObj) {
				this.activo = buttonObj;
				$(buttonObj.elementId).css('color', 'rgb(152, 152, 152)');
				if(buttonObj == this.objetos.menu) {
					$(buttonObj.elementId).removeClass('icon-menu3').addClass('icon-menu4');
				}
				$(buttonObj.contentId).show();
			},
			desactivar: function () {
				$(this.activo.elementId).css('color', 'rgb(210, 210, 210)');
				if(this.activo == this.objetos.menu) {
					$(this.activo.elementId).removeClass('icon-menu4').addClass('icon-menu3');
				}
				$(this.activo.contentId).hide();
				this.activo = undefined;
			}
		}
	};

	$('#core-head-button-menu').click(function () {
		headObj.botones.accionar(headObj.botones.objetos.menu);
	});

	$('#core-head-button-play').click(function () {
		headObj.botones.accionar(headObj.botones.objetos.jugar);
	});

	$('#core-head-button-community').click(function () {
		headObj.botones.accionar(headObj.botones.objetos.comunidad);
	});

	$('#core-head-button-notifications').click(function () {
		headObj.botones.accionar(headObj.botones.objetos.notificaciones);
	});

	$('#core-head-button-messages').click(function () {
		headObj.botones.accionar(headObj.botones.objetos.mensajes);
	});

	$('#core-head-button-settings').click(function () {
		headObj.botones.accionar(headObj.botones.objetos.ajustes);
	});

	$('#core-head-button-logout').click(function () {
		headObj.botones.accionar(headObj.botones.objetos.salir);
	});

	headObj.inicializar();

	return headObj;
});
