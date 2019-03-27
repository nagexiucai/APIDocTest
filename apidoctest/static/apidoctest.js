function APIDocTest() {
    this.Author = "me@nagexiucai.com";
    this.Version = "1.0.0";
    this.DocVers = {};
    this.APIs = [];
}

APIDocTest.prototype.Unit = function (unit) {
    var form = document.createElement("form");

    // console.log(unit.name);
    // console.log(unit.version);
    // console.log(unit.description);
    // console.log(unit.path);
    // console.log(unit.methods);

    var v = unit.version.replace(/\./g, '-');
    var id = (unit.name + "-" + v).toLowerCase();
    this.DocVers[v] = unit.version;
    this.APIs.push(id);
    form.setAttribute("id", id);
    form.setAttribute("action", "javascript:try{apidoctest.Do('" + id + "');}catch(e){alert(e);}");
    form.setAttribute("class", "unit".concat(" ", v))

    // one by one is better than traversal.
    var divname = document.createElement("div");
    divname.setAttribute("class", "thing");
    var labelname = document.createElement("label");
    labelname.innerHTML = "接口名称";
    divname.appendChild(labelname);
    var name = document.createElement("input");
    name.setAttribute("disabled", "true");
    name.setAttribute("type", "text");
    name.setAttribute("name", "name");
    name.setAttribute("value", unit.name);
    divname.appendChild(name);
    form.appendChild(divname);

    var divversion = document.createElement("div");
    divversion.setAttribute("class", "thing");
    var labelversion = document.createElement("label");
    labelversion.innerHTML = "接口版本";
    divversion.appendChild(labelversion);
    var version = document.createElement("input");
    version.setAttribute("disabled", "true");
    version.setAttribute("type", "text");
    version.setAttribute("name", "version");
    version.setAttribute("value", unit.version);
    divversion.appendChild(version);
    form.appendChild(divversion);

    var divdescription = document.createElement("div");
    divdescription.setAttribute("class", "thing");
    var labeldescription = document.createElement("label");
    labeldescription.innerHTML = "接口描述";
    divdescription.appendChild(labeldescription);
    var description = document.createElement("input");
    description.setAttribute("disabled", "true");
    description.setAttribute("type", "text")
    description.setAttribute("name", "description");
    description.setAttribute("value", unit.description);
    divdescription.appendChild(description);
    form.appendChild(divdescription);

    var divpath = document.createElement("div");
    divpath.setAttribute("class", "thing");
    var labelpath = document.createElement("label");
    labelpath.innerHTML = "请求路径";
    divpath.appendChild(labelpath);
    var path = document.createElement("input");
    path.setAttribute("type", "text");
    path.setAttribute("name", "path");
    path.setAttribute("value", unit.path);
    divpath.appendChild(path);
    form.appendChild(divpath);

    // console.log(unit.data["path-parameters"]);

    var divpps = document.createElement("div");
    divpps.setAttribute("class", "thing");
    var labelpps = document.createElement("label");
    labelpps.innerHTML = "路径参数";
    divpps.appendChild(labelpps);
    var pps = document.createElement("input");
    pps.setAttribute("disabled", "true");
    pps.setAttribute("type", "text");
    pps.setAttribute("name", "path-parameters");
    pps.setAttribute("value", unit.data["path-parameters"]);
    divpps.appendChild(pps);
    form.appendChild(divpps);

    var divmethods = document.createElement("div");
    divmethods.setAttribute("class", "thing");
    var labelmethods = document.createElement("label");
    labelmethods.innerHTML = "请求方法";
    divmethods.appendChild(labelmethods);
    for (var i=0; i<unit.methods.length; i++) {
        var button = document.createElement("input");
        button.setAttribute("type", "submit");
        button.setAttribute("value", unit.methods[i]);
        button.setAttribute("class", "button");
        button.setAttribute("onclick", "javascript:document.getElementById('" + id + "').setAttribute('method','" + unit.methods[i] + "');");
        divmethods.appendChild(button);

    }
    form.appendChild(divmethods);

    // console.log(unit.data);
    // console.log(unit.data["request-headers"]);
    // console.log(unit.data["request-parameters"]);
    // console.log(unit.data["request-body"]);
    // console.log(unit.data["response-headers"]);
    // console.log(unit.data["response-body"]);

    var divreqhds = document.createElement("div");
    divreqhds.setAttribute("class", "thing");
    var labelreqhds = document.createElement("label");
    labelreqhds.innerHTML = "请求头";
    divreqhds.appendChild(labelreqhds);
    var reqhds = document.createElement("textarea");
    reqhds.setAttribute("name", "request-headers");
    reqhds.value = unit.data["request-headers"];
    divreqhds.appendChild(reqhds);
    form.appendChild(divreqhds);

    var divreqps = document.createElement("div");
    divreqps.setAttribute("class", "thing");
    var labelreqps = document.createElement("label");
    labelreqps.innerHTML = "请求参数";
    divreqps.appendChild(labelreqps);
    var reqps = document.createElement("textarea");
    reqps.setAttribute("name", "request-parameters");
    reqps.value = unit.data["request-parameters"];
    divreqps.appendChild(reqps);
    form.appendChild(divreqps);

    var divreqbd = document.createElement("div");
    divreqbd.setAttribute("class", "thing");
    var labelreqbd = document.createElement("label");
    labelreqbd.innerHTML = "请求体";
    divreqbd.appendChild(labelreqbd);
    var reqbd = document.createElement("textarea");
    reqbd.setAttribute("name", "request-body");
    reqbd.value = unit.data["request-body"];
    divreqbd.appendChild(reqbd);
    form.appendChild(divreqbd);

    var divresphdswrap = document.createElement("div");
    divresphdswrap.setAttribute("class", "thing");
        var _divresphds = document.createElement("div");
        _divresphds.setAttribute("class", "thing");
        var _labelresphds = document.createElement("label");
        _labelresphds.innerHTML = "期望响应头";
        _divresphds.appendChild(_labelresphds);
        var _resphds = document.createElement("textarea");
        _resphds.setAttribute("name", "response-headers");
        _resphds.value = unit.data["response-headers"];
        _divresphds.appendChild(_resphds);
        divresphdswrap.appendChild(_divresphds);

        var divresphds_ = document.createElement("div");
        divresphds_.setAttribute("class", "thing");
        var labelresphds_ = document.createElement("label");
        labelresphds_.innerHTML = "实测响应头";
        divresphds_.appendChild(labelresphds_);
        var resphds_ = document.createElement("textarea");
        resphds_.setAttribute("disabled", "true");
        resphds_.setAttribute("id", id + "-resphds");
        divresphds_.appendChild(resphds_);
        divresphdswrap.appendChild(divresphds_);
    form.appendChild(divresphdswrap);

    var divrespbdwrap = document.createElement("div");
    divrespbdwrap.setAttribute("class", "thing");
        var _divrespbd = document.createElement("div");
        _divrespbd.setAttribute("class", "thing");
        var _labelrespbd = document.createElement("label");
        _labelrespbd.innerHTML = "期望响应体";
        _divrespbd.appendChild(_labelrespbd);
        var _respbd = document.createElement("textarea");
        _respbd.setAttribute("name", "response-body");
        _respbd.value = unit.data["response-body"];
        _divrespbd.appendChild(_respbd);
        divrespbdwrap.appendChild(_divrespbd);

        var divrespbd_ = document.createElement("div");
        divrespbd_.setAttribute("class", "thing");
        var labelrespbd_ = document.createElement("label");
        labelrespbd_.innerHTML = "实测响应体";
        divrespbd_.appendChild(labelrespbd_);
        var respbd_ = document.createElement("textarea");
        respbd_.setAttribute("disabled", "true");
        respbd_.setAttribute("id", id + "-respbd");
        divrespbd_.appendChild(respbd_);
        divrespbdwrap.appendChild(divrespbd_);
    form.appendChild(divrespbdwrap);

    var divconclusion = document.createElement("div");
    divconclusion.setAttribute("class", "thing");
    var labelconclusion = document.createElement("label");
    labelconclusion.innerHTML = "结论";
    divconclusion.appendChild(labelconclusion);
    var conclusion = document.createElement("textarea");
    conclusion.setAttribute("disabled", "true");
    conclusion.setAttribute("id", id + "-conclusion");
    divconclusion.appendChild(conclusion);
    form.appendChild(divconclusion);

    return form;
}

APIDocTest.prototype.AJAX = function (data, id) {
    var xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.open(data.method, data.url, true);
    for (var k in data["request-headers"]) {
        var v = data["request-headers"][k];
        xmlhttprequest.setRequestHeader(k, v);
    }
    xmlhttprequest.onreadystatechange = function () {
        if (xmlhttprequest.readyState == 4) {
            var resphds = xmlhttprequest.getAllResponseHeaders();
            var respbd = xmlhttprequest.responseText;
            document.getElementById(id+"-resphds").value = resphds;
            document.getElementById(id+"-respbd").value = respbd;
            // TODO: conclusion.
            // TODO: exceptions.
            var color = "black";
            var result = false;
            if (300>xmlhttprequest.status && xmlhttprequest.status>=200) {
                color = "green";
                result = true;
            }
            else if (400>xmlhttprequest.status && xmlhttprequest.status>=300) {
                color = "orange";
            }
            else if (500>xmlhttprequest.status && xmlhttprequest.status>=400) {
                color = "blue";
            }
            else if (xmlhttprequest.status >= 500) {
                color = "red";
            }
            document.getElementById(id+"-resphds").style.color = color;
            document.getElementById(id+"-respbd").style.color = color;
            return result;
        }
    }
    xmlhttprequest.onerror = function () {
        alert(xmlhttprequest.status + ":" + xmlhttprequest.responseText);
    }
    xmlhttprequest.send(data.body);
}

APIDocTest.prototype.Do = function (id) {
    var form = document.getElementById(id);
    var method = form.method;
    var rawdata = {};
    var inputs = form.getElementsByTagName("input");
    for (var i=0; i<inputs.length; i++) {
        var k = inputs[i].getAttribute("name");
        if (k == null) continue;
        var v = inputs[i].value;
        rawdata[k] = v;
    }
    var textareas = form.getElementsByTagName("textarea");
    for (var i=0; i<textareas.length; i++) {
        var k = textareas[i].getAttribute("name");
        if (k == null) continue;
        var v = textareas[i].value;
        rawdata[k] = v;
    }
    var domain = document.getElementById("domain").value;
    var url = domain + rawdata["path"];
    if (rawdata["request-parameters"]) {
        url = url + "?" + rawdata["request-parameters"];
    }
    var data = {
        "method": method,
        "url": url,
        "request-headers": JSON.parse(rawdata["request-headers"] || "{}"),
        "body": rawdata["request-body"]
    };
    this.AJAX(data, id);
}