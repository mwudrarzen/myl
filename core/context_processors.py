from django.conf import settings
import json

def global_context(request):
	print(request.user)
	return {
		'last_update': settings.LAST_UPDATE,
		#'user_to_json': json.dumps(request.user),
	}
