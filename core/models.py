from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models

def default_dict():
	to_string = {
		'id': None,
		'nombre': None,
		'utilizable': False,
		'cartas': {}
	}

	for i in range(0, 50):
		to_string['cartas'][str('c%s' % i)] = None

	return str(to_string)

class UserProfile(models.Model):
	user = models.OneToOneField(User)
	oro = models.IntegerField(default=875)
	mazo_de_cartas = models.TextField(default=default_dict())
