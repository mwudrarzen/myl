define([], function () {
	console.log('iniciando templates.js');

	var obj = {
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
				jugar: {
					nombre: 'play',
					titulo: 'Jugar',
					url: '/play/',
					cssPath: '/static/css/play.css',
					jsPath: 'scripts/play',
					elementId: '#core-content-play',
					cargado: false
				},
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
					jsPath: 'scripts/cards',
					elementId: '#core-content-cards',
					cargado: false
				}
			},
			template: undefined,
			cambiar: function (_templateObj) {
				if(this.template != undefined) {
					$(this.template.elementId).hide();
				}
				this.template = _templateObj;
				if(_templateObj.cargado) {
					document.title = _templateObj.titulo + ' - ' + 'Mitos y Leyendas';
					$(_templateObj.elementId).show();
				}
				else {
					$('#core-content-loader').show();
					$.ajax({
						url: _templateObj.url,
						type: 'GET',
						dataType: 'html',
						success: function (response) {
							document.title = _templateObj.titulo + ' - ' + 'Mitos y Leyendas';
							el = $('<div id="' + _templateObj.elementId.substring(1) + '"></div>');
							el.html(response);
							requirejs([_templateObj.jsPath], function () {
								$('#core-content-loader').hide();
								$('#core-content').append(el);
								_templateObj.cargado = true;
							});
						},
						failure: function (errMsg) {
							//meter un reintentar en core-content
							$('#core-content-loader').hide();
							console.log(errMsg);
						}
					});
				}
			}
		}
	};

	return obj;
});