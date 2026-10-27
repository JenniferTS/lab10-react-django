from django.http import JsonResponse

PRODUCTOS = [
    {"codigo": 1, "descripcion": "Coca cola", "precio": 2.33},
    {"codigo": 2, "descripcion": "Fanta", "precio": 1.7},
]


def listar_productos(request):
    return JsonResponse(PRODUCTOS, safe=False)
