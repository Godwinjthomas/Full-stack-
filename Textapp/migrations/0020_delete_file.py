# Generated by Django 3.2.5 on 2021-08-04 09:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Textapp', '0019_remove_file_full_content'),
    ]

    operations = [
        migrations.DeleteModel(
            name='File',
        ),
    ]