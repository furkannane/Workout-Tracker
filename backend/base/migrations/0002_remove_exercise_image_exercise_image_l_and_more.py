# Generated by Django 4.0 on 2022-12-19 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='exercise',
            name='image',
        ),
        migrations.AddField(
            model_name='exercise',
            name='image_l',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='exercise',
            name='image_s',
            field=models.TextField(default=''),
        ),
    ]
