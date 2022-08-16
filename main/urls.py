from django.urls import path
from main import views
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('', views.main_view, name='main_view'),
    path('thanks/', views.thank_view, name='thank_view'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
