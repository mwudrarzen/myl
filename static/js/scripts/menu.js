define(['scripts/head', 'scripts/templates'], function (headModule, templatesModule) {
	console.log('iniciando menu.js');

	var obj = {
		botones: {
			objetos: {
				inicio: {
					elementId: '#core-menu-option-start',
					url: '/start/',
					objeto: templatesModule.templates.objetos.inicio
				},
				tienda: {
					elementId: '#core-menu-option-shop',
					url: '/shop/',
					objeto: templatesModule.templates.objetos.tienda
				},
				cartas: {
					elementId: '#core-menu-option-cards',
					url: '/cards/',
					objeto: templatesModule.templates.objetos.cartas
				}
			},
			activo: undefined,
			accionar: function (_buttonObj) {
				if(this.activo != undefined) {
					if(_buttonObj == this.activo) return false;
					else {
						this.desactivar();
					}
				}
				this.activar(_buttonObj);
			},
			activar: function (_buttonObj) {
				this.activo = _buttonObj;
				templatesModule.templates.cambiar(_buttonObj.objeto);
				$(_buttonObj.elementId).addClass('core-menu-option-selected');
				if(headModule.botones.activo != undefined) {
					headModule.botones.desactivar();
				}
			},
			desactivar: function () {
				$(this.activo.elementId).removeClass('core-menu-option-selected');
				this.activo = undefined;
			}
		}
	};

	$('#core-menu-option-start').click(function () {
		obj.botones.accionar(obj.botones.objetos.inicio);
	});

	$('#core-menu-option-shop').click(function () {
		obj.botones.accionar(obj.botones.objetos.tienda);
	});

	$('#core-menu-option-cards').click(function () {
		obj.botones.accionar(obj.botones.objetos.cartas);
	});

	return obj;
});