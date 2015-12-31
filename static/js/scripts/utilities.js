define([], function () {
	console.log('iniciando utilities.js');

	var utilitiesObj = {
		zumbido: {
			activo: false,
			zumbar: function (elemento) {
				if(this.activo) return false;
				this.activo = true;
				var self = this;
				$(elemento).animate({
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