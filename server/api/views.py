from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
import requests

# Create your views here.
@api_view(['GET'])
def get_cat_image(request):
    response = requests.get('https://cataas.com/cat')
    return JsonResponse({'image_url': response.url})

@api_view(['GET'])
def get_cat_fact(request):
    response = requests.get('https://catfact.ninja/fact')
    data = response.json()
    return JsonResponse({'fact': data['fact']})