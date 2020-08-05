# Develop: vmgabriel

"""Module For View in Front-end"""


from django.shortcuts import render

def index(request):
    return render(request, 'index.html')
