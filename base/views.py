from django.shortcuts import render
from django.http import HttpResponse
# request -> response
# request handler

def home(request):
    return render(request, 'index.html', {'name': 'Codle'})

def about(request):
    return render(request, 'about.html')