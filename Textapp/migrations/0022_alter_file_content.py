# Generated by Django 3.2.5 on 2021-08-04 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Textapp', '0021_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='content',
            field=models.TextField(),
        ),
    ]
