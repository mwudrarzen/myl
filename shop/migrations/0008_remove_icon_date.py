# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-30 04:52
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0007_auto_20151229_0831'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='icon',
            name='date',
        ),
    ]
