define([], function () {
	console.log('iniciando head.js');

	var obj = {
		botones: {
			objetos: {
				menu: {
					elementId: '#core-head-button-menu',
					contentId: '#core-menu'
				},
				jugar: {
					elementId: '#core-head-button-play',
					contentId: ''
				},
				comunidad: {
					elementId: '#core-head-button-community',
					contentId: '#core-community'
				},
				notificaciones: {
					elementId: '#core-head-button-notifications',
					contentId: '#core-notifications'
				},
				mensajes: {
					elementId: '#core-head-button-messages',
					contentId: '#core-messages'
				},
				ajustes: {
					elementId: '#core-head-button-settings',
					contentId: '#core-settings'
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
				$(buttonObj.elementId).css('color', 'rgb(152, 48, 48)');
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
		obj.botones.accionar(obj.botones.objetos.menu);
	});

	$('#core-head-button-play').click(function () {
		obj.botones.accionar(obj.botones.objetos.jugar);
	});

	$('#core-head-button-community').click(function () {
		obj.botones.accionar(obj.botones.objetos.comunidad);
	});

	$('#core-head-button-notifications').click(function () {
		obj.botones.accionar(obj.botones.objetos.notificaciones);
	});

	$('#core-head-button-messages').click(function () {
		obj.botones.accionar(obj.botones.objetos.mensajes);
	});

	$('#core-head-button-settings').click(function () {
		obj.botones.accionar(obj.botones.objetos.ajustes);
	});

	$('#core-head-button-logout').click(function () {
		obj.botones.accionar(obj.botones.objetos.salir);
	});

	return obj;
});
