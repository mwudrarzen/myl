define(['jqueryui', 'scripts/utilities'], function (jQueryUI, utilitiesModule) {
	console.log('iniciando windows.js');

	/*var obj = {
		currentZ: 20,
		windowBase: $('#core-windowBase').html(),
		openWindow: function (_windowId, _windowTitle, _windowContentElementId) {
			var self = this;
			var newWindow = $('<div id="' + _windowId.substring(1) + '" class="core-window"></div>');
			newWindow.appendTo('#core-temporalElements');
			newWindow.html(this.windowBase);
			newWindow.find('.core-window-head-title').html(_windowTitle);
			newWindow.find('.core-window-content').append($(_windowContentElementId));
			newWindow.find('.core-window-container').css({
				left: $(document).width() / 2 - $(_windowContentElementId).width() / 2 - 22,
				top: $(document).height() / 2 - $(_windowContentElementId).height() / 2 - 51
			});
			$(_windowContentElementId).show();
			newWindow.find('.core-window-container').draggable({
			});
			newWindow.bind({
				click: function () {
					self.currentZ += 1;
					$(this).find('.core-window-container').zIndex(self.currentZ);
				}
			});
		},
		closeWindow: function (_windowId, _windowContentElementId) {
			$(_windowContentElementId).appendTo('#core-hiddenElements');
			$(_windowContentElementId).hide();
			$(_windowId).remove();
		}
	};*/

	//

	var obj = {
		windowHTML: $('#core-windowHTML').html(),
		openWindow: function (_windowId, _windowTitle, _windowContentElementId) {
			var newWindow = $('<div id="' + _windowId.substring(1) + '"></div>');
			newWindow.html(this.windowHTML);
			newWindow.find('.core-window-head-title').html(_windowTitle);
			newWindow.find('.core-window-content').append($(_windowContentElementId));
			newWindow.appendTo('#core-temporalElements');
			$(_windowContentElementId).show();

		},
		closeWindow: function (_windowId) {
			$(_windowId).find('.core-window-content:first-child').appendTo('#core-hiddenElements').hide();
			$(_windowId).remove();
		}
	};

	return obj;
});
