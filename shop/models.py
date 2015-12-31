from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models

class Icon(models.Model):
	name = models.CharField(max_length=32, blank=False)
	cost = models.IntegerField(default=1275, blank=False)
	path = models.CharField(max_length=64, default='/static/img/icons/default.png', blank=False)
	enabled = models.BooleanField(default=True)

	def __str__(self):
		return self.name
