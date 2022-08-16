from main.models import ServiceRequest
from django import forms


class CreateServiceForm(forms.ModelForm):
    class Meta:
        model = ServiceRequest
        fields = '__all__'
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'phone': forms.TextInput(attrs={'class': 'form-control'}),
            'utm': forms.TextInput(attrs={'class': 'form-control'}),
        }
        exclude = ['comment']
