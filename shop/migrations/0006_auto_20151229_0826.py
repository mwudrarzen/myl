# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-29 08:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0005_auto_20151229_0820'),
    ]

    operations = [
        migrations.AlterField(
            model_name='icon',
            name='url',
            field=models.URLField(default='static/img/icons/default.png', max_length=64),
        ),
    ]
