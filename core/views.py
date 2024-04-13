from django.shortcuts import render,redirect
from django.http import HttpResponse
import uuid
from .models import Url
from django.http import JsonResponse

# Create your views here.

def index(request):
    return render(request, 'index.html')

def create(request):
    if request.method == "POST":
        link = request.POST['link']
        uid = str(uuid.uuid4())[:5]
        new_url = Url.objects.create(link=link, uuid=uid)  # Use create() method
        
        # Construct the complete URL
        complete_url = request.build_absolute_uri('/') + uid
        
        return JsonResponse({'url': complete_url})  # Return the complete URL as JSON response
    
def search(request, pk):
    url_details = Url.objects.get(uuid=pk)
    return redirect ('https://' + url_details.link)
