from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('', views.home, name = 'base-home'),
    path('about/', views.about, name = 'base-about'),
]
