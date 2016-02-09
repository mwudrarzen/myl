#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as user_login, authenticate, logout as user_logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import HttpResponseRedirect, Http404
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

	return render(request, 'signup.html', {'core_content': False, 'form': form})

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
				error = 'Modificar este texto de error al login'
				return render(request, 'login.html', {'form': form, 'error': error})
	else:
		form = AuthenticationForm()

	return render(request, 'login.html', {'core_content': False, 'form': form})

@login_required(login_url='/login/')
def logout(request):
	user_logout(request)
	return HttpResponseRedirect('/login/')

@login_required(login_url='/login/')
def core(request):
	return render(request, 'core.html')

@login_required(login_url='/login/')
def start(request):
	if request.is_ajax():
		return render(request, 'start.html')
	else:
		raise Http404
