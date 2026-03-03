from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DocumentViewSet, contact_admin

router = DefaultRouter()
router.register(r'documents', DocumentViewSet, basename='document')

urlpatterns = [
    path('', include(router.urls)),
    path('contact/', contact_admin, name='contact'),
]