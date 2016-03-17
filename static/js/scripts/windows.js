define([], function () {
	console.log('iniciando windows.js');

	var obj = {
		windowBase: $('#core-windowBase').html(),
		openWindow: function (_windowId, _windowTitle, _windowContentElementId) {
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
		},
		closeWindow: function (_windowId, _windowContentElementId) {
			$(_windowContentElementId).appendTo('#core-hiddenElements');
			$(_windowContentElementId).hide();
			$(_windowId).remove();
		}
	};

	return obj;
});
