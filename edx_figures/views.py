from django.shortcuts import render


##
## UI Template rendering views
##

def react_lms_home(request):

    # Placeholder context vars just to illustrate returning API hosts to the
    # client. This one uses a protocol relative url
    context = {
        'react_lms_api_url': '//api.foo.com',
    }
    return render(request, 'edx_figures/index.html', context)
