from django.http import HttpResponse
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .services import signIn

class Login(APIView):
  def post(self, request):
    try:
      accountData = {
        "id": 1,
        "account_id": 1897,
        "username" : "zeta",
        "password": "180603",
        "user_id": '89874'
      }
      
      formData = request.data
      access_token = signIn(accountData, formData)
      
      return Response({
        "success": True,
        "message": "Login Success",
        "data": {
          "access_token": access_token
          }
        })
    except ValueError as e:
      return Response(e.args[0])
  
class Register(APIView):
  def post(self, request):
    try:
      formData = request.data
      return Response({
        "success": True,
        "message": "Register Success",
        })
    except ValueError as e:
      return Response(e.args[0])