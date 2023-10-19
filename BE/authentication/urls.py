from django.urls import path
from .views import Login, Register
from django.views.decorators.csrf import csrf_exempt

urlPatterns = [
  path("login/", csrf_exempt(Login.as_view())),
  path("register/", csrf_exempt(Register.as_view())),
]