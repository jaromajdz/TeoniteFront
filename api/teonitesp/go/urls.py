from django.urls import path

from django.conf.urls import include

from rest_framework.routers import DefaultRouter


from . import views

#router =  DefaultRouter()
#router.register('words', views.WordsCountView, base_name='words')


urlpatterns = [
    path('authors/', views.AuthoursApiView.as_view()),
    path('stats/', views.WordsCountApiView.as_view()),
    path('stats/<str:authorname>/', views.WordsCountApiView.as_view())
    #path('', include(router.urls))
]
