# Generated by Django 3.2.5 on 2021-07-14 05:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Textapp', '0004_delete_file'),
    ]

    operations = [
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
                ('filesize', models.CharField(max_length=50)),
                ('content', models.CharField(max_length=500)),
                ('modified_date', models.CharField(max_length=50)),
                ('created_date', models.CharField(max_length=50)),
            ],
        ),
    ]
