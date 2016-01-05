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
		'data': {
			'settings': {
				'head': False,
				'community': False,
			},
			'template': 'signup',
			'js_include': '',
		},
		'form': form,
	}
	c.update({'data_to_json': json.dumps(c['data'])})
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
		'data': {
			'settings': {
				'head': False,
				'community': False,
			},
			'template': 'login',
			'js_include': '',
		},
		'form': form,
	}
	c.update({'data_to_json': json.dumps(c['data'])})
	return render(request, 'login.html', c)

@login_required(login_url='/login/')
def logout(request):
	user_logout(request)
	return HttpResponseRedirect('/login/')

@login_required(login_url='/login/')
def start(request):
	c = {
		'data': {
			'settings': {
				'head': True,
				'community': True,
			},
			'template': 'start',
			'js_include': 'scripts/start',
		},
	}
	c.update({'data_to_json': json.dumps(c['data'])})
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
		'data': {
			'settings': {
				'head': False,
				'community': False,
			},
			'template': 'test',
			'js_include': 'scripts/test',
		},
	}
	c.update({'data_to_json': json.dumps(c['data'])})
	response = render(request, 'test.html', c)
	response.set_cookie(key='nodejskey', value=token, max_age=86400, domain=None, secure=None)
	return response
