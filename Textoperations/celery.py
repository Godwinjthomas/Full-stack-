from __future__ import absolute_import, unicode_literals

import os

from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Textoperations.settings')

Textapp = Celery('Textoperations')

Textapp.config_from_object('django.conf:settings', namespace='CELERY')

Textapp.autodiscover_tasks()
