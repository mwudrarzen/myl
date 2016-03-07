console.log('iniciando main.js');

requirejs.config({
	baseUrl: '/static/js',
	urlArgs: 'bust=' + (new Date()).getTime(),
	paths: {
		jquery: 'libraries/jquery-2.1.4.min',
		jqueryui: 'libraries/jquery-ui-1.11.4/jquery-ui.min',
		jscookie: 'libraries/js.cookie'
	},
	waitSeconds: 15
});

requirejs(['jquery'], function () {
	requirejs(['jscookie'], function (jsCookie) {
		var csrftoken = jsCookie.get('csrftoken');

		function csrfSafeMethod (method) {
			return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
		}

		$.ajaxSetup({
			beforeSend: function (xhr, settings) {
				if(!csrfSafeMethod(settings.type) && !this.crossDomain) {
					xhr.setRequestHeader("X-CSRFToken", csrftoken);
				}
			}
		});
	});

	$(document).ready(function () {
		requirejs(['scripts/head', 'scripts/menu', 'scripts/help_text'], function () {
			$('#application-loader').fadeOut();
			$('#core-menu-option-start').click();
		});
	});
});
