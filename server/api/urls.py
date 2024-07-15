from django.urls import path
from .views import get_cat_image, get_cat_fact

urlpatterns = [
    path('catimage/', get_cat_image, name='cat_image'),
    path('catfact/', get_cat_fact, name='cat_fact'),
]
