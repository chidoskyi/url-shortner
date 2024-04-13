from django.urls import path
from .views import index,create,search

urlpatterns = [
    path('', index, name='index'),
    path('create', create, name='create'),
    path('<str:pk>', search, name='search'),
]
