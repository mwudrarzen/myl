# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-29 16:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_auto_20151229_1618'),
    ]

    operations = [
        migrations.AlterField(
            model_name='extendeduserprofile',
            name='decks',
            field=models.TextField(default=b"{u'deck_4': {u'is_created': False, u'description': None, u'id': 4, u'cards': {u'card_5': None, u'card_4': None, u'card_7': None, u'card_6': None, u'card_1': None, u'card_3': None, u'card_2': None, u'card_9': None, u'card_8': None, u'card_11': None, u'card_50': None, u'card_10': None, u'card_13': None, u'card_37': None, u'card_36': None, u'card_35': None, u'card_12': None, u'card_33': None, u'card_32': None, u'card_31': None, u'card_30': None, u'card_19': None, u'card_15': None, u'card_39': None, u'card_38': None, u'card_34': None, u'card_14': None, u'card_17': None, u'card_16': None, u'card_18': None, u'card_42': None, u'card_43': None, u'card_40': None, u'card_41': None, u'card_46': None, u'card_47': None, u'card_44': None, u'card_45': None, u'card_48': None, u'card_49': None, u'card_24': None, u'card_25': None, u'card_26': None, u'card_27': None, u'card_20': None, u'card_21': None, u'card_22': None, u'card_23': None, u'card_28': None, u'card_29': None}, u'is_complete': False, u'name': None}, u'deck_5': {u'is_created': False, u'description': None, u'id': 5, u'cards': {u'card_5': None, u'card_4': None, u'card_7': None, u'card_6': None, u'card_1': None, u'card_3': None, u'card_2': None, u'card_9': None, u'card_8': None, u'card_11': None, u'card_50': None, u'card_10': None, u'card_13': None, u'card_37': None, u'card_36': None, u'card_35': None, u'card_12': None, u'card_33': None, u'card_32': None, u'card_31': None, u'card_30': None, u'card_19': None, u'card_15': None, u'card_39': None, u'card_38': None, u'card_34': None, u'card_14': None, u'card_17': None, u'card_16': None, u'card_18': None, u'card_42': None, u'card_43': None, u'card_40': None, u'card_41': None, u'card_46': None, u'card_47': None, u'card_44': None, u'card_45': None, u'card_48': None, u'card_49': None, u'card_24': None, u'card_25': None, u'card_26': None, u'card_27': None, u'card_20': None, u'card_21': None, u'card_22': None, u'card_23': None, u'card_28': None, u'card_29': None}, u'is_complete': False, u'name': None}, u'deck_6': {u'is_created': False, u'description': None, u'id': 6, u'cards': {u'card_5': None, u'card_4': None, u'card_7': None, u'card_6': None, u'card_1': None, u'card_3': None, u'card_2': None, u'card_9': None, u'card_8': None, u'card_11': None, u'card_50': None, u'card_10': None, u'card_13': None, u'card_37': None, u'card_36': None, u'card_35': None, u'card_12': None, u'card_33': None, u'card_32': None, u'card_31': None, u'card_30': None, u'card_19': None, u'card_15': None, u'card_39': None, u'card_38': None, u'card_34': None, u'card_14': None, u'card_17': None, u'card_16': None, u'card_18': None, u'card_42': None, u'card_43': None, u'card_40': None, u'card_41': None, u'card_46': None, u'card_47': None, u'card_44': None, u'card_45': None, u'card_48': None, u'card_49': None, u'card_24': None, u'card_25': None, u'card_26': None, u'card_27': None, u'card_20': None, u'card_21': None, u'card_22': None, u'card_23': None, u'card_28': None, u'card_29': None}, u'is_complete': False, u'name': None}, u'deck_7': {u'is_created': False, u'description': None, u'id': 7, u'cards': {u'card_5': None, u'card_4': None, u'card_7': None, u'card_6': None, u'card_1': None, u'card_3': None, u'card_2': None, u'card_9': None, u'card_8': None, u'card_11': None, u'card_50': None, u'card_10': None, u'card_13': None, u'card_37': None, u'card_36': None, u'card_35': None, u'card_12': None, u'card_33': None, u'card_32': None, u'card_31': None, u'card_30': None, u'card_19': None, u'card_15': None, u'card_39': None, u'card_38': None, u'card_34': None, u'card_14': None, u'card_17': None, u'card_16': None, u'card_18': None, u'card_42': None, u'card_43': None, u'card_40': None, u'card_41': None, u'card_46': None, u'card_47': None, u'card_44': None, u'card_45': None, u'card_48': None, u'card_49': None, u'card_24': None, u'card_25': None, u'card_26': None, u'card_27': None, u'card_20': None, u'card_21': None, u'card_22': None, u'card_23': None, u'card_28': None, u'card_29': None}, u'is_complete': False, u'name': None}, u'deck_1': {u'is_created': False, u'description': None, u'id': 1, u'cards': {u'card_5': None, u'card_4': None, u'card_7': None, u'card_6': None, u'card_1': None, u'card_3': None, u'card_2': None, u'card_9': None, u'card_8': None, u'card_11': None, u'card_50': None, u'card_10': None, u'card_13': None, u'card_37': None, u'card_36': None, u'card_35': None, u'card_12': None, u'card_33': None, u'card_32': None, u'card_31': None, u'card_30': None, u'card_19': None, u'card_15': None, u'card_39': None, u'card_38': None, u'card_34': None, u'card_14': None, u'card_17': None, u'card_16': None, u'card_18': None, u'card_42': None, u'card_43': None, u'card_40': None, u'card_41': None, u'card_46': None, u'card_47': None, u'card_44': None, u'card_45': None, u'card_48': None, u'card_49': None, u'card_24': None, u'card_25': None, u'card_26': None, u'card_27': None, u'card_20': None, u'card_21': None, u'card_22': None, u'card_23': None, u'card_28': None, u'card_29': None}, u'is_complete': False, u'name': None}, u'deck_2': {u'is_created': False, u'description': None, u'id': 2, u'cards': {u'card_5': None, u'card_4': None, u'card_7': None, u'card_6': None, u'card_1': None, u'card_3': None, u'card_2': None, u'card_9': None, u'card_8': None, u'card_11': None, u'card_50': None, u'card_10': None, u'card_13': None, u'card_37': None, u'card_36': None, u'card_35': None, u'card_12': None, u'card_33': None, u'card_32': None, u'card_31': None, u'card_30': None, u'card_19': None, u'card_15': None, u'card_39': None, u'card_38': None, u'card_34': None, u'card_14': None, u'card_17': None, u'card_16': None, u'card_18': None, u'card_42': None, u'card_43': None, u'card_40': None, u'card_41': None, u'card_46': None, u'card_47': None, u'card_44': None, u'card_45': None, u'card_48': None, u'card_49': None, u'card_24': None, u'card_25': None, u'card_26': None, u'card_27': None, u'card_20': None, u'card_21': None, u'card_22': None, u'card_23': None, u'card_28': None, u'card_29': None}, u'is_complete': False, u'name': None}, u'deck_3': {u'is_created': False, u'description': None, u'id': 3, u'cards': {u'card_5': None, u'card_4': None, u'card_7': None, u'card_6': None, u'card_1': None, u'card_3': None, u'card_2': None, u'card_9': None, u'card_8': None, u'card_11': None, u'card_50': None, u'card_10': None, u'card_13': None, u'card_37': None, u'card_36': None, u'card_35': None, u'card_12': None, u'card_33': None, u'card_32': None, u'card_31': None, u'card_30': None, u'card_19': None, u'card_15': None, u'card_39': None, u'card_38': None, u'card_34': None, u'card_14': None, u'card_17': None, u'card_16': None, u'card_18': None, u'card_42': None, u'card_43': None, u'card_40': None, u'card_41': None, u'card_46': None, u'card_47': None, u'card_44': None, u'card_45': None, u'card_48': None, u'card_49': None, u'card_24': None, u'card_25': None, u'card_26': None, u'card_27': None, u'card_20': None, u'card_21': None, u'card_22': None, u'card_23': None, u'card_28': None, u'card_29': None}, u'is_complete': False, u'name': None}, u'deck_8': {u'is_created': False, u'description': None, u'id': 8, u'cards': {u'card_5': None, u'card_4': None, u'card_7': None, u'card_6': None, u'card_1': None, u'card_3': None, u'card_2': None, u'card_9': None, u'card_8': None, u'card_11': None, u'card_50': None, u'card_10': None, u'card_13': None, u'card_37': None, u'card_36': None, u'card_35': None, u'card_12': None, u'card_33': None, u'card_32': None, u'card_31': None, u'card_30': None, u'card_19': None, u'card_15': None, u'card_39': None, u'card_38': None, u'card_34': None, u'card_14': None, u'card_17': None, u'card_16': None, u'card_18': None, u'card_42': None, u'card_43': None, u'card_40': None, u'card_41': None, u'card_46': None, u'card_47': None, u'card_44': None, u'card_45': None, u'card_48': None, u'card_49': None, u'card_24': None, u'card_25': None, u'card_26': None, u'card_27': None, u'card_20': None, u'card_21': None, u'card_22': None, u'card_23': None, u'card_28': None, u'card_29': None}, u'is_complete': False, u'name': None}, u'deck_9': {u'is_created': False, u'description': None, u'id': 9, u'cards': {u'card_5': None, u'card_4': None, u'card_7': None, u'card_6': None, u'card_1': None, u'card_3': None, u'card_2': None, u'card_9': None, u'card_8': None, u'card_11': None, u'card_50': None, u'card_10': None, u'card_13': None, u'card_37': None, u'card_36': None, u'card_35': None, u'card_12': None, u'card_33': None, u'card_32': None, u'card_31': None, u'card_30': None, u'card_19': None, u'card_15': None, u'card_39': None, u'card_38': None, u'card_34': None, u'card_14': None, u'card_17': None, u'card_16': None, u'card_18': None, u'card_42': None, u'card_43': None, u'card_40': None, u'card_41': None, u'card_46': None, u'card_47': None, u'card_44': None, u'card_45': None, u'card_48': None, u'card_49': None, u'card_24': None, u'card_25': None, u'card_26': None, u'card_27': None, u'card_20': None, u'card_21': None, u'card_22': None, u'card_23': None, u'card_28': None, u'card_29': None}, u'is_complete': False, u'name': None}, u'deck_10': {u'is_created': False, u'description': None, u'id': 10, u'cards': {u'card_5': None, u'card_4': None, u'card_7': None, u'card_6': None, u'card_1': None, u'card_3': None, u'card_2': None, u'card_9': None, u'card_8': None, u'card_11': None, u'card_50': None, u'card_10': None, u'card_13': None, u'card_37': None, u'card_36': None, u'card_35': None, u'card_12': None, u'card_33': None, u'card_32': None, u'card_31': None, u'card_30': None, u'card_19': None, u'card_15': None, u'card_39': None, u'card_38': None, u'card_34': None, u'card_14': None, u'card_17': None, u'card_16': None, u'card_18': None, u'card_42': None, u'card_43': None, u'card_40': None, u'card_41': None, u'card_46': None, u'card_47': None, u'card_44': None, u'card_45': None, u'card_48': None, u'card_49': None, u'card_24': None, u'card_25': None, u'card_26': None, u'card_27': None, u'card_20': None, u'card_21': None, u'card_22': None, u'card_23': None, u'card_28': None, u'card_29': None}, u'is_complete': False, u'name': None}}"),
        ),
    ]
