'''
URL definitions
'''

from django.conf.urls import include, url
from django.views.generic.base import RedirectView

from . import views


urlpatterns = [

    # UI Templates
    url(r'^$', views.react_lms_home, name='edx-figures-home'),
    url('', RedirectView.as_view(pattern_name='react-lms-home'), name="catch-all")
]
