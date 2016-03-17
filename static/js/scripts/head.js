define(['scripts/templates', 'scripts/windows', 'scripts/modals'], function (templatesModule, windowsModule, modalsModule) {
	console.log('iniciando head.js');

	var obj = {
	};

	$('.core-head-button-default').click(function () {
		var el = $(this);
		if(!eval(el.attr('data-active'))) {
			el.attr('data-active', true);
			el.css('color', 'rgb(152, 48, 48)');
			switch(el.attr('id')) {
				case 'core-head-button-menu': {
					el.removeClass('icon-menu3').addClass('icon-menu4');
					$('#core-menu').show();
					break;
				}
				case 'core-head-button-community': {
					windowsModule.openWindow('#core-communityWindow', 'Comunidad', '#core-community');
					break;
				}
				case 'core-head-button-notifications': {
					windowsModule.openWindow('#core-notificationsWindow', 'Notificaciones', '#core-notifications');
					break;
				}
				case 'core-head-button-messages': {
					windowsModule.openWindow('#core-messagesWindow', 'Mensajes', '#core-messages');
					break;
				}
				case 'core-head-button-settings': {
					windowsModule.openWindow('#core-settingsWindow', 'Ajustes', '#core-settings');
					break;
				}
				case 'core-head-button-logout': {
					//open modal
				}
			}
		}
		else {
			switch(el.attr('id')) {
				case 'core-head-button-menu': {
					el.removeClass('icon-menu4').addClass('icon-menu3');
					$('#core-menu').hide();
					break;
				}
				case 'core-head-button-community': {
					windowsModule.closeWindow('#core-communityWindow', '#core-community');
					break;
				}
				case 'core-head-button-notifications': {
					windowsModule.closeWindow('#core-notificationsWindow', '#core-notifications');
					break;
				}
				case 'core-head-button-messages': {
					windowsModule.closeWindow('#core-messagesWindow', '#core-messages');
					break;
				}
				case 'core-head-button-settings': {
					windowsModule.closeWindow('#core-settingsWindow', '#core-settings');
					break;
				}
				case 'core-head-button-logout': {
					//close modal
				}
			}
			el.css('color', 'rgb(210, 210, 210)');
			el.attr('data-active', false);
		}
	});

	$('#core-head-button-play').click(function () {
		templatesModule.cambiar(templatesModule.templates.jugar);
	});

	return obj;
});
