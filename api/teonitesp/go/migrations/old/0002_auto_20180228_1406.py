# Generated by Django 2.0.2 on 2018-02-28 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('go', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='authors',
            name='author',
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='links',
            name='link',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]