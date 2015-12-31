from django.conf import settings
import json

def global_context(request):
	return {
		'last_update': settings.LAST_UPDATE,
	}
