import requests
from django.shortcuts import render, redirect
from main.forms import CreateServiceForm
from django.views.decorators.csrf import csrf_exempt
from main.models import ServiceRequest
from pedicure_sanatera.settings import CRM_URL


def send_request_to_crm(request, data):

    r = requests.post(CRM_URL, data=data)
    if r.status_code == 200:
        return True


@csrf_exempt
def main_view(request):
    """ Функция отображает главную страницу """
    context = {}
    data = {}
    request.session['UTM_DATA'] = request.get_full_path()[2:]
    if request.method == 'POST':
        print(request.POST)
        form = CreateServiceForm(request.POST)
        if form.is_valid():
            form = form.save(commit=False)
            form.utm = str(request.session['UTM_DATA'])
            form.comment = request.POST.get('comment')
            form.save()
            data = {
                'Name': request.POST.get('name'),
                'Phone': request.POST.get('phone'),
                'Utm': str(request.session['UTM_DATA']),
                'Comment': request.POST.get('comment'),
            }
        else:
            # Тут костыль для поля 'tel' - хз где его на фронте!
            if request.POST.get('tel'):
                ServiceRequest.objects.get_or_create(
                    name=request.POST.get('name'),
                    phone=request.POST.get('tel'),
                    utm=str(request.session['UTM_DATA']),
                    comment=request.POST.get('comment'),
                )
                data = {
                    'Name': request.POST.get('name'),
                    'Phone': request.POST.get('tel'),
                    'Utm': str(request.session['UTM_DATA']),
                    'Comment': request.POST.get('comment'),
                }
        if send_request_to_crm(request, data):
            print('Success')

        return redirect('thank_view')

    return render(request, 'main/index.html', context)


def thank_view(request):
    """ Функция отображает главную страницу """

    return render(request, 'main/sendform.php')
