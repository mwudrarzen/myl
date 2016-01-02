#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as user_login, authenticate, logout as user_logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import HttpResponseRedirect
import json

def signup(request):
	if request.user.is_authenticated():
		return HttpResponseRedirect('/')

	if request.method == 'POST':
		form = UserCreationForm(request.POST)
		if form.is_valid:
			form.save()
			return HttpResponseRedirect('/')
	else:
		form = UserCreationForm()

	c = {
		'settings': {
			'template': 'signup',
			'head': False,
			'community': False,
			'js_include': '',
		},
		'form': form,
	}
	c.update({'settings_to_json': json.dumps(c['settings'])})
	return render(request, 'signup.html', c)

def login(request):
	if request.user.is_authenticated():
		return HttpResponseRedirect('/')

	if request.method == 'POST':
		form = AuthenticationForm(request.POST)
		if form.is_valid:
			usuario = authenticate(username=request.POST['username'], password=request.POST['password'])
			if usuario is not None:
				user_login(request, usuario)
				return HttpResponseRedirect('/')
			else:
				error = 'Modificar este texto de error al iniciar sesión'
				return render(request, 'login.html', {'form': form, 'error': error})
	else:
		form = AuthenticationForm()

	c = {
		'settings': {
			'template': 'login',
			'head': False,
			'community': False,
			'js_include': '',
		},
		'form': form,
	}
	c.update({'settings_to_json': json.dumps(c['settings'])})
	return render(request, 'login.html', c)

@login_required(login_url='/login/')
def logout(request):
	user_logout(request)
	return HttpResponseRedirect('/login/')

@login_required(login_url='/login/')
def start(request):
	c = {
		'settings': {
			'template': 'start',
			'head': True,
			'community': True,
			'js_include': 'scripts/start',
		},
	}
	c.update({'settings_to_json': json.dumps(c['settings'])})
	return render(request, 'start.html', c)

##### Testing Socket.IO + NodeJS + Redis + Django #####

import redis as Redis
from django.utils.crypto import get_random_string

redis = Redis.StrictRedis(host='localhost', password='', port=6379, db=0)

def test(request):
	token = get_random_string(32)
	key = 'session:%s' % str(token)
	data = {'user': 'xmars2k1x'}
	value = json.dumps(data)
	redis.setex(key, 86400, value)

	c = {
		'settings': {
			'template': 'test',
			'head': False,
			'community': False,
			'js_include': 'scripts/test',
		},
	}
	c.update({'settings_to_json': json.dumps(c['settings'])})
	response = render(request, 'test.html', c)
	response.set_cookie(key='nodejskey', value=token, max_age=86400, domain=None, secure=None)
	return response

#test changelogtemporal

def changelogtemp(request):
	c = {
		'settings': {
			'template': 'changelogtemp',
			'head': True,
			'community': False,
			'js_include': '',
		},
	}
	c.update({'settings_to_json': json.dumps(c['settings'])})
	return render(request, 'changelogtemp.html', c)