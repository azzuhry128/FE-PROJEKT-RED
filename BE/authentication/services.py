from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

class AuthenticationException(Exception):
  def __init__(self, code, message) -> None:
    self.code = code
    self.message = message

def signIn(account, formData):
  try:
    password = formData['password']
    if password != account['password']:
      raise AuthenticationException(400, "Password is not valid")
    
    user = authenticate(username=formData['username'], password=formData['password'])
    refresh = RefreshToken.for_user(user)
    
    return str(refresh.access_token)
  except AuthenticationException as e:
    raise ValueError({
      "success": False,
      "code": e.code or 500, 
      "message": e.message or 'failed to login'
      })