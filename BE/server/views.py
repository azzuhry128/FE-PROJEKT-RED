import numpy as np
import json
import serializer
from rest_framework.views import APIView
from rest_framework.response import Response

class HomeServices(APIView):

  def get(self, request):
    array = np.array([1,2,3,4,'blyat'])
    # new_array = 
    return Response({"message": "Hello, world!"})