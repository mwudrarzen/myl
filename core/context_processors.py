from django.conf import settings

def global_context(request):
	return {
		'last_update': settings.LAST_UPDATE,
	}
