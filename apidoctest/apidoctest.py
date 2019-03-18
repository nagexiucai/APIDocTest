#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# @Author: nagexiucai
# @E-mail: me@nagexiucai.com

# TODO: 参数校验、多组输入输出断言。

__all__ = ["APIDocTest", "APIDocTestTemplateString"]

class APIDocTest(object):
    '''
    supported fields >>>
    @path-parameters:: bucket=bucket-uuid & object=object-uuid
    @request-parameters:: x=x-int & y=y-str & z=z-uuid
    @request-headers:: Content-Type:application/json & User-Agent:Mozilla/5.0 (X11; Linux x86_64; rv:38.0) Gecko/20100101 Firefox/38.0
    @request-body:: {"who":"alice"}
    @response-headers:: Content-Type:text/html;charset=utf-8 & Server:Werkzeug/0.14.1 Python/2.7.5
    @response-body:: details
    @norm:: ==|~=|##
    in "norm" >>>
    "==" for same
    "~=" for similar
    "##" for casual
    '''
    apidocs = []
    def __init__(self, path, methods, version="1.0.0", name=None, description="nothing"):
        self.path = path
        self.methods = methods
        self.version = version
        self.name = name
        self.description = description
    def __call__(self, f):
        if self.name is None:
            self.name = f.func_name
        if f.__doc__ is None:
            f.__doc__ = ""
        print f.__doc__
        lines = f.__doc__.split("\n")
        data = {}
        for line in lines:
            line = line.strip()
            if line.startswith("@"): # todo: multi-lines.
                item, text = line.split("::") # todo: valid format.
                k = item.lstrip("@").rstrip()
                v = text.strip()
                if k == "request-headers" and v:
                    v = dict([[each for each in header.strip().split(":")] for header in v.split("&")])
                    v = ['"%s":"%s"' % item for item in v.items()]
                    v = ",".join(v)
                    v = "{%s}" % v
                data[k] = v
        me = {"path": self.path, "version": self.version, "methods": self.methods,
              "name": self.name, "description": self.description,
              "data": data}
        APIDocTest.apidocs.append(me)
        return f


def __APIDocTestTemplateString():
    _css = '<link rel="stylesheet" type="text/css" href="static/apidoctest.css">'
    _js = '<script src="static/apidoctest.js"></script>'
    from os.path import abspath, dirname, join
    here = dirname(abspath(__file__))
    templatestring = "{{ data | safe }}"
    with open(join(here, "templates", "apidoctest.html")) as html:
        templatestring = html.read()
        with open(join(here, "static", "apidoctest.css")) as css, open(join(here, "static", "apidoctest.js")) as js:
            css_ = '<style type="text/css">%s</style>' % css.read()
            js_ = '<script type="text/javascript">%s</script>' % js.read()
            templatestring = templatestring.replace(_css, css_).replace(_js, js_)
    return templatestring

APIDocTestTemplateString = __APIDocTestTemplateString()
