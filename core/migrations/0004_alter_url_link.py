# Generated by Django 5.0.4 on 2024-04-12 22:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_url_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='url',
            name='link',
            field=models.CharField(max_length=10000),
        ),
    ]
