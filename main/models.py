from django.db import models


class ServiceRequest(models.Model):
    name = models.CharField(verbose_name='Имя', max_length=50, blank=True, null=True)
    phone = models.CharField(verbose_name='Телефон', max_length=20)
    utm = models.CharField(verbose_name='UTM', max_length=1000, null=True, blank=True)
    comment = models.CharField(verbose_name='Ответы на Вопросы', max_length=1000, null=True, blank=True)

    def __str__(self):
        return f'{self.name} | {self.phone}'
