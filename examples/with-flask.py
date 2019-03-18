#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# @Author: nagexiucai
# @E-mail: me@nagexiucai.com

from flask import blueprints
from apidoctest import APIDocTest

bapidoctest = blueprints.Blueprint("apidoctest", __name__)

@bapidoctest.route("/fuck", methods=["GET", "POST"])
@APIDocTest("/fuck", ["GET", "POST"], name="fuck", description="uncourteous.")
def Fuck():
    '''
    @path-parameters::
    @request-parameters::
    @request-headers:: Content-Type:application/json
    @request-body:: {"who":"unknown"}
    @response-headers:: Content-Type:text/html;charset=utf-8
    @response-body:: "fuck"
    @norm:: ==
    '''
    return "fuck"

@bapidoctest.route("/kiss")
@APIDocTest("/kiss", ["GET"], name="kiss", description="good.")
def Kiss():
    '''
    @path-parameters::
    @request-parameters::
    @request-headers:: Content-Type:text/html;charset=utf-8
    @request-body::
    @response-headers:: Content-Type:text/html;charset=utf-8
    @response-body:: "kiss"
    @norm:: ==
    '''
    return "kiss"

if __name__ == "__main__":
    import sys
    reload(sys)
    sys.setdefaultencoding("utf8")
    from flask import Flask, request, render_template_string
    from apidoctest import APIDocTestTemplateString
    serv = Flask("APIDocTestDemo")
    @serv.route("/", methods=["GET", "POST"])
    def Hi():
        print "Request URL", request.url
        print "Request Parameters", request.args
        print "Request JSON", request.get_json()
        print "Request Headers", request.headers
        return "hi"
    @serv.route("/apidoctest")
    def documents():
        return render_template_string(APIDocTestTemplateString, data=APIDocTest.apidocs)
    serv.register_blueprint(bapidoctest, url_prefix="/what")
    serv.run(debug=False, host="localhost", port=9527)
