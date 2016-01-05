define([], function () {
	console.log('iniciando utilities.js');

	var utilitiesObj = {
		cargarBackgroundImage: function (ruta, elemento, callback) {
			$('<img>').attr('src', ruta).load(function () {
				$(this).remove();
				$(elemento).css('background-image', 'url("' + ruta + '")');
				callback();
			});
		},
		zumbido: {
			activo: false,
			zumbar: function (id) {
				if(this.activo) return false;
				this.activo = true;
				var self = this;
				$(id).animate({
					'margin-left': -5,
					'margin-right': 5
				}, 100, function () {
					$(this).animate({
						'margin-left': 5,
						'margin-right': -5
					}, 100, function () {
						$(this).animate({
							'margin-left': -5,
							'margin-right': 5
						}, 100, function () {
							$(this).animate({
								'margin-left': 5,
								'margin-right': -5
							}, 100, function () {
								$(this).animate({
									'margin-left': 0,
									'margin-right': 0
								}, 100, function () {
									self.activo = false;
								});
							});
						});
					});
				});
			}
		}
	};

	return utilitiesObj;
})