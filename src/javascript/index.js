import intlTelInput from "intl-tel-input";


import "../styles/sass/styles.scss";


! function() {
    "use strict";

    function e(e) { try { if ("undefined" == typeof console) return; "error" in console ? console.error(e) : console.log(e) } catch (e) {} }

    function t(e) { return d.innerHTML = '<a href="' + e.replace(/"/g, "&quot;") + '"></a>', d.childNodes[0].getAttribute("href") || "" }

    function r(e, t) { var r = e.substr(t, 2); return parseInt(r, 16) }

    function n(n, c) {
        for (var o = "", a = r(n, c), i = c + 2; i < n.length; i += 2) {
            var l = r(n, i) ^ a;
            o += String.fromCharCode(l)
        }
        try { o = decodeURIComponent(escape(o)) } catch (u) { e(u) }
        return t(o)
    }

    function c(t) {
        for (var r = t.querySelectorAll("a"), c = 0; c < r.length; c++) try {
            var o = r[c],
                a = o.href.indexOf(l);
            a > -1 && (o.href = "mailto:" + n(o.href, a + l.length))
        } catch (i) { e(i) }
    }

    function o(t) {
        for (var r = t.querySelectorAll(u), c = 0; c < r.length; c++) try {
            var o = r[c],
                a = o.parentNode,
                i = o.getAttribute(f);
            if (i) {
                var l = n(i, 0),
                    d = document.createTextNode(l);
                a.replaceChild(d, o)
            }
        } catch (h) { e(h) }
    }

    function a(t) { for (var r = t.querySelectorAll("template"), n = 0; n < r.length; n++) try { i(r[n].content) } catch (c) { e(c) } }

    function i(t) { try { c(t), o(t), a(t) } catch (r) { e(r) } }
    var l = "/cdn-cgi/l/email-protection#",
        u = ".__cf_email__",
        f = "data-cfemail",
        d = document.createElement("div");
    i(document),
        function() {
            var e = document.currentScript || document.scripts[document.scripts.length - 1];
            e.parentNode.removeChild(e)
        }()
}();



! function(e) {
    var t = {};

    function d(n) { if (t[n]) return t[n].exports; var i = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(i.exports, i, i.exports, d), i.l = !0, i.exports }
    d.m = e, d.c = t, d.d = function(e, t, n) { d.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, d.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, d.t = function(e, t) {
        if (1 & t && (e = d(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (d.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var i in e) d.d(n, i, function(t) { return e[t] }.bind(null, i));
        return n
    }, d.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return d.d(t, "a", t), t }, d.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, d.p = "", d(d.s = 3)
}([function(e, t, d) {
    "use strict";
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map((function(t) {
                var d = function(e, t) {
                    var d = e[1] || "",
                        n = e[3];
                    if (!n) return d;
                    if (t && "function" == typeof btoa) {
                        var i = (r = n, a = btoa(unescape(encodeURIComponent(JSON.stringify(r)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), "/*# ".concat(s, " */")),
                            o = n.sources.map((function(e) { return "/*# sourceURL=".concat(n.sourceRoot).concat(e, " */") }));
                        return [d].concat(o).concat([i]).join("\n")
                    }
                    var r, a, s;
                    return [d].join("\n")
                }(t, e);
                return t[2] ? "@media ".concat(t[2], "{").concat(d, "}") : d
            })).join("")
        }, t.i = function(e, d) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var n = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                null != o && (n[o] = !0)
            }
            for (var r = 0; r < e.length; r++) {
                var a = e[r];
                null != a[0] && n[a[0]] || (d && !a[2] ? a[2] = d : d && (a[2] = "(".concat(a[2], ") and (").concat(d, ")")), t.push(a))
            }
        }, t
    }
}, function(e, t, d) {
    "use strict";
    var n, i = {},
        o = function() { return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n },
        r = function() {
            var e = {};
            return function(t) {
                if (void 0 === e[t]) {
                    var d = document.querySelector(t);
                    if (window.HTMLIFrameElement && d instanceof window.HTMLIFrameElement) try { d = d.contentDocument.head } catch (e) { d = null }
                    e[t] = d
                }
                return e[t]
            }
        }();

    function a(e, t) {
        for (var d = [], n = {}, i = 0; i < e.length; i++) {
            var o = e[i],
                r = t.base ? o[0] + t.base : o[0],
                a = { css: o[1], media: o[2], sourceMap: o[3] };
            n[r] ? n[r].parts.push(a) : d.push(n[r] = { id: r, parts: [a] })
        }
        return d
    }

    function s(e, t) {
        for (var d = 0; d < e.length; d++) {
            var n = e[d],
                o = i[n.id],
                r = 0;
            if (o) { for (o.refs++; r < o.parts.length; r++) o.parts[r](n.parts[r]); for (; r < n.parts.length; r++) o.parts.push(g(n.parts[r], t)) } else {
                for (var a = []; r < n.parts.length; r++) a.push(g(n.parts[r], t));
                i[n.id] = { id: n.id, refs: 1, parts: a }
            }
        }
    }

    function l(e) {
        var t = document.createElement("style");
        if (void 0 === e.attributes.nonce) {
            var n = d.nc;
            n && (e.attributes.nonce = n)
        }
        if (Object.keys(e.attributes).forEach((function(d) { t.setAttribute(d, e.attributes[d]) })), "function" == typeof e.insert) e.insert(t);
        else {
            var i = r(e.insert || "head");
            if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            i.appendChild(t)
        }
        return t
    }
    var u, c = (u = [], function(e, t) { return u[e] = t, u.filter(Boolean).join("\n") });

    function p(e, t, d, n) {
        var i = d ? "" : n.css;
        if (e.styleSheet) e.styleSheet.cssText = c(t, i);
        else {
            var o = document.createTextNode(i),
                r = e.childNodes;
            r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o)
        }
    }

    function f(e, t, d) {
        var n = d.css,
            i = d.media,
            o = d.sourceMap;
        if (i && e.setAttribute("media", i), o && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleSheet) e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    var $ = null,
        h = 0;

    function g(e, t) {
        var d, n, i;
        if (t.singleton) {
            var o = h++;
            d = $ || ($ = l(t)), n = p.bind(null, d, o, !1), i = p.bind(null, d, o, !0)
        } else d = l(t), n = f.bind(null, d, t), i = function() {
            ! function(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
            }(d)
        };
        return n(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    n(e = t)
                } else i()
            }
    }
    e.exports = function(e, t) {
        (t = t || {}).attributes = "object" == typeof t.attributes ? t.attributes : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = o());
        var d = a(e, t);
        return s(d, t),
            function(e) {
                for (var n = [], o = 0; o < d.length; o++) {
                    var r = d[o],
                        l = i[r.id];
                    l && (l.refs--, n.push(l))
                }
                e && s(a(e, t), t);
                for (var u = 0; u < n.length; u++) {
                    var c = n[u];
                    if (0 === c.refs) {
                        for (var p = 0; p < c.parts.length; p++) c.parts[p]();
                        delete i[c.id]
                    }
                }
            }
    }
}, function(e, t, d) { e.exports = d(13) }, function(e, t, d) { e.exports = d(4) }, function(e, t, d) {
    "use strict";
    d.r(t);
    d(5), d(7);
    var n = d(2),
        i = d.n(n);

    function o(e, t) {
        var d, n, i = e;
        setInterval((function() { d = parseInt(i / 60, 10), n = parseInt(i % 60, 10), d = d < 10 ? "0" + d : d, n = n < 10 ? "0" + n : n, t.textContent = d + ":" + n, --i < 0 && (i = e) }), 1e3)
    }

    function r() { return Math.random().toString(36).slice(-8) }
    window.$ = window.jQuery = d(9), $(".scroll_to_top").on("click", (function() { $([document.documentElement, document.body]).animate({ scrollTop: $(".form_wrapper").offset().top }, 1e3) })), window.onload = function() { document.querySelector("#countdown-span") && o(331, document.querySelector("#countdown-span")), document.querySelector("#countdown-span2") && o(599, document.querySelector("#countdown-span2")) }, $(".prefilled_password input[name=password]").val(r()), $(".generate-pw-btn").click((function(e) { return e.preventDefault(), $("input[name=password]").val(r()), !1 })), d(10), d(12);
    for (var a = document.head.querySelector("[name~=isoCode][content]").content, s = document.getElementsByClassName("phone"), l = document.getElementsByClassName("iti"), u = document.getElementsByClassName("area_code"), c = 0; c < s.length; c++) {
        var p = i()(s[c], { initialCountry: a });
        l[c].style.width = "100%", u[c].value = "+" + p.getSelectedCountryData().dialCode
    }
    $("form").submit((function(e) {
        var t = $(this).serialize(),
            d = $(this).find(".btn_register").text();
        return $(this).find(".btn_register").text("SENDING...").addClass("disabled_bttn"), $("#openModalLoading").addClass("open"), $.ajax({ url: "", type: "POST", data: t, success: function(e) { $(".alert").text("").addClass("d-none"), window.location.href = window.location.origin + "/trading?token=" + e.token }, error: function(e) { setTimeout((function() { $(".btn_register").text(d).removeClass("disabled_bttn"), $("#openModalLoading").removeClass("open"), $(".alert").text("").removeClass("d-none"), $.each(e.responseJSON.errors, (function(e, t) { $(".alert").append(t + "<br />") })) }), 1200) } }), !1
    })), $(".formContainer form").on("submit", (function(e) { return e.preventDefault(), window.location.href = "/", !1 })), document.getElementById("table_profits") && setInterval((function() {
        ! function() {
            for (var e = document.getElementById("table_profits").querySelectorAll("tr"), t = Array.from(e).slice(1), d = t.length - 1; d > 0; d--) {
                var n = Math.floor(Math.random() * (d + 1)),
                    i = t[d];
                t[d] = t[n], t[n] = i
            }
            var o = !0,
                r = !1,
                a = void 0;
            try {
                for (var s, l = t[Symbol.iterator](); !(o = (s = l.next()).done); o = !0) {
                    var u = s.value;
                    $("#table_profits").find("tbody").append(u)
                }
            } catch (e) { r = !0, a = e } finally { try { o || null == l.return || l.return() } finally { if (r) throw a } }
        }()
    }), 3e3)
}, function(e, t, d) {
    var n = d(6);
    "string" == typeof n && (n = [
        [e.i, n, ""]
    ]);
    var i = { insert: "head", singleton: !1 };
    d(1)(n, i);
    n.locals && (e.exports = n.locals)
}, function(e, t, d) {
    (t = e.exports = d(0)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Lato:300,400,700|Oswald:300,400,700&display=swap);", ""]), t.push([e.i, '/*!\n * Bootstrap v4.3.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}figcaption,footer,header,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex="-1"]:focus{outline:0!important}h1,h2,h3,h4{margin-top:0;margin-bottom:.5rem}p{margin-top:0}address,p{margin-bottom:1rem}address{font-style:normal;line-height:inherit}dl,ul{margin-top:0;margin-bottom:1rem}ul ul{margin-bottom:0}b,strong{font-weight:bolder}sub{position:relative;font-size:75%;line-height:0;vertical-align:baseline;bottom:-.25em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}[hidden]{display:none!important}.h1,.h2,.h3,.h4,h1,h2,h3,h4{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.lead{font-size:1.25rem;font-weight:300}.img-fluid{max-width:100%;height:auto}code{font-size:87.5%;color:#e83e8c;word-break:break-word}a>code{color:inherit}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media(min-width:576px){.container{max-width:540px}}@media(min-width:768px){.container{max-width:720px}}@media(min-width:992px){.container{max-width:960px}}@media(min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col,.col-6,.col-lg-3,.col-lg-4,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-10,.col-md-12,.col-sm-12{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-6{flex:0 0 50%;max-width:50%}.offset-3{margin-left:25%}@media(min-width:576px){.col-sm-12{flex:0 0 100%;max-width:100%}.offset-sm-0{margin-left:0}}@media(min-width:768px){.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-12{flex:0 0 100%;max-width:100%}.offset-md-1{margin-left:8.3333333333%}.offset-md-2{margin-left:16.6666666667%}}@media(min-width:992px){.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}select.form-control[multiple],select.form-control[size],textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn:disabled{opacity:.65}.card{display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.alert,.card{position:relative}.alert{padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}@-webkit-keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.media{display:flex;align-items:flex-start}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@-webkit-keyframes spinner-border{to{transform:rotate(1turn)}}@keyframes spinner-border{to{transform:rotate(1turn)}}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1}}.border{border:1px solid #dee2e6!important}.d-none{display:none!important}.d-flex{display:flex!important}@media(min-width:576px){.d-sm-flex{display:flex!important}}.justify-content-center{justify-content:center!important}.align-items-center{align-items:center!important}.float-left{float:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media print{*,:after,:before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}}.modalDialog{height:0;opacity:0;display:none}.modalDialog.open{display:block;height:100vh;position:fixed;font-family:Arial,Helvetica,sans-serif;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.8);z-index:99999;opacity:1;transition:opacity .4s ease-in;pointer-events:none}.modalDialog.open .loading-text{padding-top:20px;font-weight:700;text-align:center;color:#fff}.modalDialog.open>div{width:100%;position:relative;margin:20% auto}.modalDialog.open>div .loading-spinner{position:absolute;top:50%;right:0;bottom:0;left:50%;margin:-35px 0;text-align:center;-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:rotate-forever;animation-name:rotate-forever;-webkit-animation-timing-function:linear;animation-timing-function:linear;height:30px;width:30px;border:8px solid #fff;border-right-color:transparent;border-radius:50%;display:inline-block}@-webkit-keyframes rotate-forever{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}*{box-sizing:border-box}body{font-family:Lato,sans-serif;overflow-x:hidden}.video,img{max-width:100%}.container.terms{padding:40px 0;color:#000}[data-init=registration-popup] .logo{margin:0 auto}.logo{width:200px}.light-purple{color:#7b3dbb}.purple{color:#444573}.dark-purple{color:#322580}.red{color:red}.green{color:#00c500}.gray{color:grey}.orange{color:orange}.white{color:#fff}.yellow{color:#d5c93f}.no-padding{padding:0}.relative{position:relative}.bold{font-weight:700}.intro-section-1{text-align:center;background-color:red;color:#fff;padding:6px 0}.intro-p{margin:0}.intro-part-2{height:120px;display:flex;justify-content:space-between;align-items:center}.exclusive-offers-wrapper{font-weight:700;font-size:1.3em;line-height:1;flex:0 0 30%;display:flex;align-items:center}.flag{width:20%}.dynamic-person-div{padding:0 20px;background-color:#eee;margin:0;display:flex;align-items:center;align-self:stretch}.dynamic-person-p{padding-left:20px}.dynamic-person-img{width:60px;height:60px;border-radius:50%;border:3px solid #d3d31f}.video-form-section{background-image:url(/meida/video-form-blue-bg.jpg);background-position:50%;background-size:cover;background-repeat:no-repeat;padding:50px 0}.video-header,.video-subheader{text-align:center;color:#fff}.video-header{font-size:3.5rem;font-weight:bolder;font-weight:800}.video-subheader{font-size:2em;font-weight:500}.video{border:10px solid #fff}.form-container,.video{box-shadow:0 4px 20.9px 3.1px rgba(13,13,13,.43)}.form-body .alert-danger{z-index:10002}form[data-init][data-mode=slidingform] [data-subject=wrapper]{overflow:visible}.form-control{border-radius:0}.registerBtn{display:block;font-size:20px;position:relative;padding:0;border-radius:6px;background-color:#0069d9;box-shadow:0 4px 20.9px 3.1px rgba(13,13,13,.43);text-transform:uppercase;width:100%;height:64px;cursor:pointer;white-space:normal;margin:0 auto -40px}.generate-pw-btn,.registerBtn{font-weight:700;color:#fff;border:none}.generate-pw-btn{background:#382b79;height:38px;line-height:1;border-radius:5px;padding:5px 10px;font-size:.8em}form{padding:10px}input{height:38px;font-weight:300;border-radius:5px;font-size:16px;color:#495057;line-height:31px;border:none;cursor:auto}input:hover{border:1px solid #3898ec}.registerBtn:hover{color:#fff;background-color:#0069d9;border-color:#0062cc;font-size:21px}.formHeader{background-image:url(/meida/form-header-blue-bg.jpg);background-position:50%;background-size:cover;background-repeat:no-repeat;text-align:center;color:#fff;font-weight:700;margin:0;padding:30px 20px 50px;font-size:2.3rem;letter-spacing:2px}.logos-section{padding:150px 0 50px}.logos-wrapper{display:flex;justify-content:space-between;align-items:center}.logos-wrapper .logo{max-width:30%;width:auto;height:auto}.ask-wrapper,.bid-wrapper{font-size:.9em;font-weight:700;display:flex}.bid-ask-span{font-size:1.7em;font-family:Open Sans,sans-serif;z-index:1}.join-us-section{padding:50px 0;background-image:url(/meida/join-us-bg.jpg);background-size:cover;background-position:50%;background-repeat:no-repeat}.testimonials-section{padding-top:150px;font-family:Open Sans;text-align:center}.testimonials-header{margin-bottom:50px;font-size:2em;color:#322580;z-index:1;position:relative}.testimonial-wrapper{display:flex;justify-content:baseline;background-position:50%;background-size:cover;background-repeat:no-repeat;height:330px;background-color:#343a40!important}.testimonial-wrapper-1{background-image:url(/assets/testimonial1.jpg)}.testimonial-wrapper-2{background-image:url(/assets/testimonial2.jpg)}.testimonial-wrapper-3{background-image:url(/assets/testimonial3.jpg)}.testimonial-wrapper-4{background-image:url(/assets/testimonial4.jpg)}.testimonial-intro-text{width:100%;margin-top:auto;padding-bottom:25px;font-size:1.25em}.testimonial-profit-span{font-size:1.4em;font-weight:700}.testimonial-hover-text{position:absolute;padding-top:15px;padding-left:20px;padding-right:20px;color:#fff;height:100%;transition:.5s ease;font-size:.95em;cursor:pointer;opacity:0}.testimonial-hover-text:hover{background-color:rgba(54,110,231,.5);opacity:1}.features-section{padding:150px 0 300px;font-family:Open Sans;background-image:url(/meida/features-section-blue-bg.jpg);background-repeat:no-repeat;background-size:cover;background-position:50%}.feature-wrapper{background-color:#322b7c;color:#fff;padding:20px 0;box-shadow:0 6px 0 0 #7f57ca;height:100%}.feature-img-wrapper{margin-bottom:50px}.feature-img{height:102px}.feature-header{margin-bottom:50px;font-weight:700;font-size:1.2em}.feature-description{padding:0 20px}.live-results-section{font-family:Open Sans;margin:50px 0}.live-results-table-wrapper{box-shadow:0 10px 36.3px 12.7px rgba(37,26,65,.1);background-color:#fff;border:10px solid #fff;position:relative;top:-265px;padding:0 190px 50px}.live-results-table{width:100%}td,th{width:20%;border-bottom:1px solid #ddd;padding:10px 0}.last-td{border:none}.tick{display:inline-block;background-color:#ebd944;border-radius:50%;width:25px;text-align:center;color:#fff;font-size:1.25em}.live-results-header{margin:50px 0;font-size:3em}.yellow-btn{transform:translateX(-50%);box-shadow:0 4px 0 0 #cab927;cursor:pointer;height:70px;max-width:400px;width:100%;display:block;padding:0;margin:0 auto;text-align:center;background-color:#ebd943;color:#322580;text-transform:uppercase;font-weight:700;border:none;border-radius:5px;font-size:24px}.join-now-btn{position:absolute;top:-45px;left:50%;right:50%}.yellow-btn:hover{font-size:25px}.how-it-works-section{background-color:#0f4bff;height:350px;margin-top:100px;position:relative;font-family:Open Sans}.how-it-works-wrapper{position:relative;top:-260px}.how-it-works-header{margin-bottom:50px}.step-wrapper{box-shadow:0 10px 36.3px 12.7px rgba(37,26,65,.1);position:relative;background:#fff;height:100%}.step-wrapper-1{z-index:3}.step-wrapper-2{z-index:2}.step-wrapper-3{z-index:1}.step-header{padding:10px 0}.step-header-1{background-color:#7b3dbb}.step-header-2{background-color:#372798}.step-header-3{background-color:#0f4dff}.step-img{height:93px}.step-img-wrapper{margin:25px 0}.step-description{padding:0 25px 40px;margin-bottom:0}.open-free-account-btn{position:absolute;bottom:-33px;left:50%;right:50%}.faq-section{padding:50px 0;margin-top:100px;font-family:Open Sans}.faq-section-header{margin-bottom:70px}.faq-wrapper{position:relative;padding:21px 28px 30px 50px;margin-bottom:15px;margin-top:10px;background-color:#fff;box-shadow:0 6px 26.9px 5.1px rgba(37,26,65,.1)}.faq-question{font-size:1.2em}.faq-wrapper:before{display:inline-block;font-size:1.5em;color:#fff;background-color:#7b3dbb;padding:10px 20px;position:absolute;left:-25px;top:62px;box-shadow:0 10px 36.3px 12.7px rgba(37,26,65,.1)}.faq-wrapper-1:before{content:"1"}.faq-wrapper-2:before{content:"2"}.faq-wrapper-3:before{content:"3"}.faq-wrapper-4:before{content:"4"}.faq-wrapper-5:before{content:"5"}.faq-wrapper-6:before{content:"6"}.faq-wrapper-7:before{content:"7"}.faq-wrapper-8:before{content:"8"}.pre-footer-section{background-image:url(/meida/pre-footer-blue-bg.jpg);background-size:cover;background-position:50%;background-repeat:no-repeat;padding:5px 0}.pre-footer-btn{display:block;text-align:center;background-color:#ebd943;color:#322580;font-size:30px;text-transform:uppercase;font-weight:700;padding:0;border-radius:7px;margin:88px auto;box-shadow:0 4px 0 0 #cab927;cursor:pointer;height:125px;width:100%;max-width:460px;border:none}.pre-footer-btn:hover{font-size:34px}.footer{padding:30px 0}.footer-ul{list-style:none;font-weight:700}.footer-ul a{color:#322580}.footer-ul li{display:inline-block;margin-right:30px}.intro-section-mobile{display:none}.padding-left-td{padding-left:7px}.bid-ask-span{transform:scale(1);transform:rotateY(0deg);-webkit-animation:flip 10s cubic-bezier(1,0,0,1) 0s infinite;animation:flip 10s cubic-bezier(1,0,0,1) 0s infinite}@-webkit-keyframes flip{0%{transform:rotateY(0deg) scale(1)}5%{transform:rotateY(180deg) scale(1.7)}10%{transform:rotateY(2turn) scale(1)}to{transform:rotateY(2turn) scale(1)}}@keyframes flip{0%{transform:rotateY(0deg) scale(1)}5%{transform:rotateY(180deg) scale(1.7)}10%{transform:rotateY(2turn) scale(1)}to{transform:rotateY(2turn) scale(1)}}@-webkit-keyframes shake{0%{transform:rotate(0deg) scale(1)}20%{transform:scale(1.1)}30%{transform:rotate(-25deg) scale(1.1)}40%{transform:rotate(25deg) scale(1.1)}50%{transform:rotate(0deg) scale(1.1)}60%{transform:rotate(-25deg) scale(1.1)}80%{transform:rotate(25deg) scale(1.1)}90%{transform:rotate(0deg) scale(1.1)}to{transform:scale(1)}}@keyframes shake{0%{transform:rotate(0deg) scale(1)}20%{transform:scale(1.1)}30%{transform:rotate(-25deg) scale(1.1)}40%{transform:rotate(25deg) scale(1.1)}50%{transform:rotate(0deg) scale(1.1)}60%{transform:rotate(-25deg) scale(1.1)}80%{transform:rotate(25deg) scale(1.1)}90%{transform:rotate(0deg) scale(1.1)}to{transform:scale(1)}}@media screen and (max-width:991px){.feature-wrapper-col{margin-bottom:20px}.formHeader{padding:30px 20px;font-size:1.8rem}.how-it-works-section{height:360px}}@media screen and (max-width:767px){.live-results-table-wrapper{position:static;padding:0;overflow-x:scroll}.how-it-works-section{height:auto;background-color:#fff}.how-it-works-wrapper,.step-wrapper{position:static}.step-wrapper,.step-wrapper-col{margin-bottom:20px}.open-free-account-btn{position:static;transform:none}.how-it-works-btn-wrapper{padding:30px 0;background-color:#0f4bff}.join-now-btn{top:-100px}.join-us-section{padding-bottom:590px}.testimonials-section{padding-top:50px}.logos-wrapper{flex-direction:column}.bid-ask-span{font-size:2em}.logo{display:inline-block;margin-bottom:15px}.features-section{padding:100px 0}.intro-section-mobile{margin-top:150px;background-color:#ddd;display:block}.intro-part-2{height:auto;padding:20px 0;flex-direction:column}.dynamic-person-div{background-color:#ddd;margin:0;display:flex;align-items:center;flex:1;justify-content:center;align-self:stretch;justify-self:stretch;border-top:1px solid #ccc;padding:20px 20px 0}.dynamic-person-p{font-weight:700}.exclusive-offers-wrapper{font-weight:700;font-size:1.3em;line-height:1;flex:0 0 50%;display:flex;align-items:center;justify-content:center;margin-bottom:20px}.exclusive-offers-text{text-align:center}.logo{max-width:100%}.none{display:none}.logos-section{padding-top:50px}[data-init=registration-success] .logo{display:block;margin-bottom:15px}[data-init=registration-success] h1{font-size:2.3em}}@media screen and (max-width:575px){.join-us-section{position:relative}}@media screen and (max-width:350px){.join-us-section{padding-bottom:450px}}input[name=password]{max-width:49%}.section_short_description{padding:50px 0;background-image:url(/meida/join-us-bg.jpg);background-size:cover;background-position:50%;background-repeat:no-repeat}.section_short_description h2{font-family:Open Sans,sans-serif;font-style:normal;font-weight:600;font-size:3em;color:#322580;line-height:1.2;display:block;margin-bottom:50px}.section_short_description h2 span{color:#5f3394}.section_short_description p{font-size:16px;font-weight:300;font-style:normal}.section_short_description .girl_mobile{display:none}@media(max-width:767.98px){.section_short_description{padding-bottom:0}.section_short_description .girl_mobile{display:block}}.section_news{padding-top:60px}.section_news h2{text-align:center;font-size:18px;font-weight:700;color:#6a449b;margin-bottom:30px}.section_news .girl_desktop{position:absolute;top:-322px;left:100px}@media(max-width:991.98px){.section_news .girl_desktop{top:-150px}}@media(max-width:767.98px){.section_news .girl_desktop{display:none}}.disabled_bttn{opacity:.5;pointer-events:none;cursor:default;text-decoration:none}.non_index_page{@import"https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i,900,900i|Oswald:400,500,600,700|Roboto:300,300i,400,400i,700,700i,900,900i"}.non_index_page body{background:#fff;margin:0;padding:0;font-family:Roboto,sans-serif;overflow-x:hidden;color:#333}.non_index_page .white{color:#fff}.non_index_page .bold{font-weight:700}.non_index_page .big-font{font-size:3em}.non_index_page .uppercase{text-transform:uppercase}.non_index_page .text-right{text-align:right}.non_index_page .text-center{text-align:center}.non_index_page .inline-block{display:inline-block}.non_index_page .section1{background:url(/meida/section1bg.jpg) top no-repeat;padding-bottom:30px}.non_index_page .section1 header{background:#fff;padding-top:20px;padding-bottom:20px;margin-bottom:40px}.non_index_page header .media p{text-transform:uppercase;font-weight:300;font-family:Lato,sans-serif;padding:0;margin:5px 0}.non_index_page header .media p strong{font-weight:900}.non_index_page header .media h3,.non_index_page header .media p{padding:0;margin:0}.non_index_page .headline{text-align:center;color:#fff;text-shadow:0 8px 4px rgba(0,0,0,.1)}.non_index_page .formwrap-outer{background:rgba(0,0,0,.4);border:1px solid #7d73a4;padding:10px}.non_index_page .formwrap{background:#fff}.non_index_page .form-body{padding:20px 20px 5px;position:relative;margin-top:-45px}.non_index_page .form-body .form-control{border-radius:0;background:#e7e7e7;font-weight:300;height:40px}.non_index_page .form-body .btn,.non_index_page .form-body button{font-family:Oswald,sans-serif;font-size:24px;color:#fff;text-shadow:.5px .866px 0 rgba(1,198,0,.35);border-radius:4px;text-transform:uppercase;padding:8px 25px;width:100%;background:#0be00b;background:linear-gradient(180deg,#0be00b 0,#01c601);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#0be00b",endColorstr="#01c601",GradientType=0)}.non_index_page .form-body .btn:focus,.non_index_page .form-body .btn:hover,.non_index_page .form-body button:focus,.non_index_page .form-body button:hover{color:#fff;background:#01c601;background:linear-gradient(180deg,#01c601 0,#0be00b);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#01c601",endColorstr="#0be00b",GradientType=0)}.non_index_page .bitcoin{padding:10px 10px 0;text-align:center;display:inline-block}.non_index_page .bitcoin p{display:inline-block;padding:0;margin:0;font-weight:900;font-size:2em}.non_index_page .bitcoin.ask,.non_index_page .bitcoin.ask h2{color:#9f91b4}.non_index_page footer{background:#1a1257;padding-top:30px;padding-bottom:30px;border-top:1px solid #413695;color:#4e43a2}.non_index_page footer p{margin:0;padding:10px 0}.non_index_page .flag-wrapper img{max-width:80px;height:auto}.non_index_page .intro-section-1{text-align:center;background-color:red;color:#fff;padding:6px 0}.non_index_page .intro-p{margin:0}.non_index_page .footer-ul{padding-left:0}.non_index_page footer a{color:#fff}@media screen and (max-width:400px){@-ms-viewport{.non_index_page{width:320px}}}@media(max-width:767px){.non_index_page .logo{text-align:center}.non_index_page .logo img{width:250px}.non_index_page .section1 header{padding-top:10px;padding-bottom:10px;margin-bottom:20px}.non_index_page .section1{padding-top:0;padding-bottom:30px}.non_index_page .formwrap{margin-top:20px}.non_index_page .bitcoin{padding:10px 0 0}}@media(min-width:992px)and (max-width:1199px){.non_index_page .bitcoin{padding:10px 0 0}}.non_index_page .flag-wrapper{position:absolute;right:0;margin-left:10px}.non_index_page .exc{padding-right:75px!important}@media(max-width:767px){.non_index_page .logo img{width:150px}}.non_index_page img{max-width:100%}.non_index_page .form-body .btn,.non_index_page .form-body button{width:auto}.non_index_page .btn{white-space:normal}.non_index_page .form-body{margin-top:0;padding-bottom:20px}.non_index_page .join-us-section{background:#f7f8fa;padding:25px 0}.non_index_page .join-us-section-1-header{color:#ebd943;font-weight:900;margin-bottom:20px;font-size:30px}.non_index_page .join-us-section-1 p{font-size:20px;font-weight:300;color:#282057}.non_index_page .join-us-section-2{background-image:url(/meida/video-form-blue-bg.jpg);background-position:50%;background-size:cover;background-repeat:no-repeat;padding:30px 10px;font-size:20px;font-weight:300;color:#fff}.non_index_page .join-us-section-2-header{color:#ebd943}.non_index_page .join-us-section-3{padding-bottom:70px}.non_index_page .join-us-section-3 img{width:100%}.non_index_page .join-us-section-3-header{text-align:center;color:#ebd943;font-size:30px;font-weight:400;margin-bottom:20px;padding:10px 5px}.non_index_page .join-us-section-3 p{font-size:20px;font-weight:300;color:#282057}.non_index_page .join-us-section-3 .btn-wrapper{padding:20px 0}.non_index_page footer{font-weight:300}.non_index_page footer a{font-weight:500;border-right:1px solid #fff;padding-right:15px;color:#4e43a2}.non_index_page footer a:hover{color:#4e43a2}.non_index_page footer li:last-of-type a{border-right:none}.non_index_page .logo{max-width:320px;height:auto}.non_index_page .exc{padding-left:0!important;padding-right:0!important}.non_index_page .flag-wrapper{position:static;padding-left:25px}.non_index_page footer{background:#fff;border-top:none}.non_index_page .section1{background-image:url(/meida/video-form-blue-bg.jpg);background-position:50%;background-size:cover;background-repeat:no-repeat}.non_index_page .index-redirect{background:#ebd943!important;color:#322580!important;font-weight:700;box-shadow:0 4px 0 0 #9b8e20;transition:all .2s linear;border:1px solid #aaa;border-bottom:none}.non_index_page .index-redirect:hover{transform:scale(1.2)}.non_index_page .section1 header{padding:0}@media(max-width:991px){.non_index_page .join-us-section-3 p{margin-top:25px}.non_index_page .join-us-section-3 .btn-wrapper{text-align:center}}@media(max-width:768px){.non_index_page .logo{width:100%;height:auto}}.non_index_page.contact_page form{background-image:none}.non_index_page.contact_page .contact-us-header{margin:50px 0}.non_index_page.contact_page input{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;padding-right:35px!important;position:relative;z-index:1;padding-left:50px!important;height:50px;border-radius:2px;margin:15px 0;font-size:1.3em}.non_index_page.contact_page textarea{min-height:260px;width:100%;margin-bottom:15px;padding-left:20px;font-size:1.3em;font-weight:400;border-color:#ced4da}.non_index_page.contact_page .form-header-p{font-size:26px;font-weight:700;color:#fff;padding-left:20px;margin-bottom:10px}.non_index_page.contact_page .credentials-inputs-container{display:flex;justify-content:space-between}.non_index_page.contact_page .credentials-inputs-container .input-wrapper{width:49%;position:relative}.non_index_page.contact_page .input-wrapper i{position:absolute;left:15px;top:30px;font-size:1.5em;color:#aaa;z-index:2}.non_index_page.contact_page footer p{font-weight:400}.non_index_page.contact_page .logo{max-width:300px}.non_index_page.contact_page footer{background:#fff;border-top:none}.non_index_page.contact_page footer a{font-weight:500;border-right:1px solid #fff;padding-right:15px;color:#4e43a2}.non_index_page.contact_page footer a:hover{color:#4e43a2}.non_index_page.contact_page .section1{background-image:url(/meida/video-form-blue-bg.jpg);background-position:50%;background-size:cover;background-repeat:no-repeat}.non_index_page.contact_page .btn{width:100%!important;background:#ebd943!important;color:#322580!important;font-weight:700;box-shadow:0 4px 0 0 #cab927}.non_index_page.login_page body{text-align:center;color:#fff}.non_index_page.login_page .headerItemWrapper{font-family:Oswald,sans-serif;text-align:center;display:block;margin-top:14px;margin-bottom:28px;margin-left:15px;padding:16px 13px;border-radius:66px;background-color:#161ca4;box-shadow:0 0 6px 0 #191919;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#fff}.non_index_page.login_page .headerRowContainer{display:flex;justify-content:space-between;align-items:center}.non_index_page.login_page .videoSection{padding:50px 0;background:url(/meida/video-form-blue-bg.jpg);background-position:50%;background-size:cover;background-repeat:no-repeat;border-bottom:8px solid #7f57ca;text-align:center;color:#fff}.non_index_page.login_page .form-section{padding:50px 0;color:#000}.non_index_page.login_page .registerBtn{position:static}.non_index_page.login_page form{padding:15px}.non_index_page.login_page .formHeader{padding:10px 0}.non_index_page.login_page .secondFormSection{padding:50px 0 70px;font-family:Open Sans;background-image:url(/meida/features-section-blue-bg.jpg);background-repeat:no-repeat;background-size:cover;background-position:50%;text-align:center;color:#fff}.non_index_page.login_page .index-link,.non_index_page.login_page .index-link:hover{color:#26cef6}.non_index_page.login_page .registerBtn-2{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:10px 25px;display:flex;align-items:center}.non_index_page.login_page .formwrap-outer{background:initial;border:initial;padding:0}.non_index_page.login_page [data-init=registration-popup]{color:#000}@media(max-width:768px){.non_index_page.login_page .headerRowContainer{flex-wrap:wrap;justify-content:center}.non_index_page.login_page .headerLogo{width:100%}}.non_index_page input[name=password]{max-width:100%}', ""])
}, function(e, t, d) {
    var n = d(8);
    "string" == typeof n && (n = [
        [e.i, n, ""]
    ]);
    var i = { insert: "head", singleton: !1 };
    d(1)(n, i);
    n.locals && (e.exports = n.locals)
}, function(e, t, d) {
    (e.exports = d(0)(!1)).push([e.i, 'body.ready{opacity:1}input{padding:0 10px;line-height:1.5em;width:100%;margin-bottom:10px}[data-triggered-by]{display:none!important;color:#da2832}.intl-tel-input{display:block;margin-bottom:10px;text-align:left;width:100%}.intl-tel-input input{padding-left:48px!important}form[data-init][data-mode=slidingform] [data-subject=wrapper]{position:relative;overflow:hidden}form{position:relative}[data-subject=slide-wrapper][data-proceed],form[data-init][data-mode=slidingform] [data-subject=slide-wrapper]{display:none}[data-subject=slide-wrapper][data-proceed=true]{display:block}[data-init=loading-animation] [data-subject=loading-wrapper]{text-align:center;padding-top:30px}[data-init=loading-animation] [data-subject=after-loading]{text-align:center;display:none}[data-init=loading-animation] [data-subject=msg-scroller]{min-height:50px;padding-top:30px;position:relative}[data-init=loading-animation] [data-subject=msg-keeper]{min-height:100px;position:relative;padding-top:30px}[data-init=loading-animation] [data-subject=msg]{display:block;opacity:0;top:30px;transition:all .3s ease-out}[data-init=loading-animation] [data-subject=msg-scroller] [data-subject=msg]{position:absolute;left:0;right:0;top:60px;margin:auto}[data-dynamic-show],[data-init=versions] [data-version]{display:none}@media(max-width:767px){.error{font-size:10px}}[data-animation-name=check-icon],[data-animation-name=loading-icon],[data-animation-name=next-span]{z-index:1}[data-animation-type=animated-sliding-form] button{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:1!important}[data-animation-type=animated-sliding-form] button:focus{outline:none}[data-animation-name=btn-progbar]{position:absolute;content:"";bottom:0;left:0;width:0;height:100%;background:#201e1f;z-index:0;transition:width .65s ease-out}[data-animation-status=active-loading-btn]{color:#fff!important}[data-animation-type=animated-sliding-form] button span i{transform-origin:center center}[data-animation-type=animated-sliding-form] button span:nth-of-type(2){display:none;font-size:24px}[data-animation-type=animated-sliding-form] [data-animation-status=active-loading-btn] [data-animation-name=next-span],[data-animation-type=animated-sliding-form] button span:nth-of-type(3),[data-animation-type=animated-sliding-form] button span:nth-of-type(5){display:none}[data-animation-type=animated-sliding-form] [data-animation-status=active-loading-btn] span:nth-of-type(2){display:initial}[data-animation-status=active-loading-btn] span:nth-of-type(2) i{-webkit-animation:loading .5s linear infinite;animation:loading .5s linear infinite}[data-animation-type=animated-sliding-form] [data-animation-status=active-loading-btn] span:nth-of-type(3),[data-animation-type=animated-sliding-form] [data-animation-status=active-loading-btn] span:nth-of-type(5){display:none!important}[data-animation-type=animated-sliding-form] [data-animation-status-final=finished-error],[data-animation-type=animated-sliding-form] [data-animation-status-final=finished-error]:focus,[data-animation-type=animated-sliding-form] [data-animation-status-final=finished-error]:hover{background:linear-gradient(45deg,red,#000);color:#fff!important}[data-animation-status-final=finished-error] [data-animation-name=loading-icon],[data-animation-status-final=finished-error] [data-animation-name=next-span]{display:none}[data-animation-status-final=finished-error] [data-animation-name=error-icon]{display:block!important;font-size:24px;-webkit-animation:scale .5s linear;animation:scale .5s linear}[data-animation-status-final=finished-error] [data-animation-name=error-icon] i{transform-origin:center center}[data-animation-type=animated-sliding-form] [data-animation-status-final=finished-success],[data-animation-type=animated-sliding-form] [data-animation-status-final=finished-success]:focus,[data-animation-type=animated-sliding-form] [data-animation-status-final=finished-success]:hover{background:linear-gradient(180deg,#08d908 0,#01ba01);color:#fff!important}[data-animation-status-final=finished-success] [data-animation-name=loading-icon],[data-animation-status-final=finished-success] [data-animation-name=next-span]{display:none!important}[data-animation-status-final=finished-success] [data-animation-name=check-icon]{display:block!important;font-size:24px;-webkit-animation:scale .5s linear;animation:scale .5s linear}[data-animation-status-final=finished-success] [data-animation-name=check-icon] i{transform-origin:center center}@-webkit-keyframes loading{to{transform:rotate(1turn)}}@keyframes loading{to{transform:rotate(1turn)}}@-webkit-keyframes scale{0%{transform:scale(10)}50%{transform:scale(.2)}70%{transform:scale(1.2)}90%{transform:scale(.7)}to{transform:scale(1)}}@keyframes scale{0%{transform:scale(10)}50%{transform:scale(.2)}70%{transform:scale(1.2)}90%{transform:scale(.7)}to{transform:scale(1)}}[data-rule]{width:90%!important;font-size:.8em!important;margin-bottom:0!important;margin-top:10px!important;position:relative!important;line-height:1!important;transition:all .3s ease-out!important;padding-left:10px!important;text-align:left!important;bottom:auto!important;top:auto!important;left:auto!important;right:auto!important;z-index:1!important}[data-rule-status=unpassed]{color:#3b3b3b}[data-rule]:before{content:"";display:block;position:absolute;width:5px;height:5px;border-radius:50%;top:0;bottom:0;margin:auto 0;left:0}[data-rule-status=unpassed]:before{background-color:#000}[data-rule-status=failed]{color:red!important}[data-rule-status=failed]:before{background-color:red}[data-init=pw-show-btn]{position:absolute;top:13px;right:20px;color:#ddd;z-index:2;cursor:pointer}.inner-pw-input-wrapper [data-init=pw-show-btn]{right:auto;left:42%}[data-rule-status=passed]{color:green!important}[data-rule-status=passed]:before{background-color:green}[data-init=pw-example-icon]{position:absolute;color:#000;top:-15px;cursor:pointer;right:0}[data-init=pw-example-wrapper]{position:absolute;background-color:#201e1f;z-index:3;color:#fff;top:-50px;right:28px;height:30px;padding:15px;border-radius:5px;display:none}[data-init=pw-example-span]{height:100%;width:100%;display:flex;align-items:center;font-weight:300}[data-init=registration-popup]{display:none;z-index:10001}[data-init=registration-errors],[data-init=registration-popup] [data-init=registration-error],[data-init=registration-popup] [data-init=success],[data-init=registration-success]{display:none}[data-init=registration-popup].error [data-init=registration-errors]{display:block;padding-top:30px}[data-init=registration-popup] [data-init=close-popup]{cursor:pointer}[data-init=registration-popup] .logo{text-align:center;position:relative}[data-init=registration-popup] .logo img{max-width:200px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}[data-init=registration-popup] .icon img{max-width:100%}[data-init=registration-popup] [data-init=registration-success] header,[data-init=registration-popup] footer{padding:30px 0;height:auto!important}[data-init=registration-popup] [data-init=registration-success] .icon{width:50px;height:50px;float:left;margin-right:10px}[data-init=registration-success-msg]{display:none}[data-init=redirect]{background-color:#18a7f8;color:#fff;font-size:30px;font-weight:700;line-height:1em;padding:10px;width:500px;max-width:100%;border:0;outline:0;border-radius:4px;cursor:pointer}[data-init=registration-popup] .text{margin-left:70px}@media(max-width:767px){[data-init=registration-popup] .logo img{top:-138px}[data-init=registration-popup] [data-init=redirect]{margin:60px auto 40px}[data-init=registration-popup] .text h4{font-size:18px}}@media(max-width:526px){[data-init=registration-popup] .logo img{top:-185px}}@-webkit-keyframes blowUp{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes blowUp{0%{transform:scale(0)}to{transform:scale(1)}}[data-pw-generate=generate] input[name=password]{width:49%!important;display:inline-block!important}.generate-pw-btn{width:49%!important;padding:3px 5px;display:initial;cursor:pointer}.inner-pw-input-wrapper{display:flex;justify-content:space-between}', ""])
}, function(e, t, d) {
    var n;
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */
    ! function(t, d) { "use strict"; "object" == typeof e.exports ? e.exports = t.document ? d(t, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return d(e) } : d(t) }("undefined" != typeof window ? window : this, (function(d, i) {
        "use strict";
        var o = [],
            r = d.document,
            a = Object.getPrototypeOf,
            s = o.slice,
            l = o.concat,
            u = o.push,
            c = o.indexOf,
            p = {},
            f = p.toString,
            $ = p.hasOwnProperty,
            h = $.toString,
            g = h.call(Object),
            m = {},
            b = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
            y = function(e) { return null != e && e === e.window },
            v = { type: !0, src: !0, nonce: !0, noModule: !0 };

        function x(e, t, d) {
            var n, i, o = (d = d || r).createElement("script");
            if (o.text = e, t)
                for (n in v)(i = t[n] || t.getAttribute && t.getAttribute(n)) && o.setAttribute(n, i);
            d.head.appendChild(o).parentNode.removeChild(o)
        }

        function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[f.call(e)] || "object" : typeof e }
        var C = function(e, t) { return new C.fn.init(e, t) },
            _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function k(e) {
            var t = !!e && "length" in e && e.length,
                d = w(e);
            return !b(e) && !y(e) && ("array" === d || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "3.4.1",
            constructor: C,
            length: 0,
            toArray: function() { return s.call(this) },
            get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] },
            pushStack: function(e) { var t = C.merge(this.constructor(), e); return t.prevObject = this, t },
            each: function(e) { return C.each(this, e) },
            map: function(e) { return this.pushStack(C.map(this, (function(t, d) { return e.call(t, d, t) }))) },
            slice: function() { return this.pushStack(s.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(e) {
                var t = this.length,
                    d = +e + (e < 0 ? t : 0);
                return this.pushStack(d >= 0 && d < t ? [this[d]] : [])
            },
            end: function() { return this.prevObject || this.constructor() },
            push: u,
            sort: o.sort,
            splice: o.splice
        }, C.extend = C.fn.extend = function() {
            var e, t, d, n, i, o, r = arguments[0] || {},
                a = 1,
                s = arguments.length,
                l = !1;
            for ("boolean" == typeof r && (l = r, r = arguments[a] || {}, a++), "object" == typeof r || b(r) || (r = {}), a === s && (r = this, a--); a < s; a++)
                if (null != (e = arguments[a]))
                    for (t in e) n = e[t], "__proto__" !== t && r !== n && (l && n && (C.isPlainObject(n) || (i = Array.isArray(n))) ? (d = r[t], o = i && !Array.isArray(d) ? [] : i || C.isPlainObject(d) ? d : {}, i = !1, r[t] = C.extend(l, o, n)) : void 0 !== n && (r[t] = n));
            return r
        }, C.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) { throw new Error(e) },
            noop: function() {},
            isPlainObject: function(e) { var t, d; return !(!e || "[object Object]" !== f.call(e)) && (!(t = a(e)) || "function" == typeof(d = $.call(t, "constructor") && t.constructor) && h.call(d) === g) },
            isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
            globalEval: function(e, t) { x(e, { nonce: t && t.nonce }) },
            each: function(e, t) {
                var d, n = 0;
                if (k(e))
                    for (d = e.length; n < d && !1 !== t.call(e[n], n, e[n]); n++);
                else
                    for (n in e)
                        if (!1 === t.call(e[n], n, e[n])) break; return e
            },
            trim: function(e) { return null == e ? "" : (e + "").replace(_, "") },
            makeArray: function(e, t) { var d = t || []; return null != e && (k(Object(e)) ? C.merge(d, "string" == typeof e ? [e] : e) : u.call(d, e)), d },
            inArray: function(e, t, d) { return null == t ? -1 : c.call(t, e, d) },
            merge: function(e, t) { for (var d = +t.length, n = 0, i = e.length; n < d; n++) e[i++] = t[n]; return e.length = i, e },
            grep: function(e, t, d) { for (var n = [], i = 0, o = e.length, r = !d; i < o; i++) !t(e[i], i) !== r && n.push(e[i]); return n },
            map: function(e, t, d) {
                var n, i, o = 0,
                    r = [];
                if (k(e))
                    for (n = e.length; o < n; o++) null != (i = t(e[o], o, d)) && r.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, d)) && r.push(i);
                return l.apply([], r)
            },
            guid: 1,
            support: m
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) { p["[object " + t + "]"] = t.toLowerCase() }));
        var T =
            /*!
             * Sizzle CSS Selector Engine v2.3.4
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2019-04-08
             */
            function(e) {
                var t, d, n, i, o, r, a, s, l, u, c, p, f, $, h, g, m, b, y, v = "sizzle" + 1 * new Date,
                    x = e.document,
                    w = 0,
                    C = 0,
                    _ = se(),
                    k = se(),
                    T = se(),
                    S = se(),
                    E = function(e, t) { return e === t && (c = !0), 0 },
                    N = {}.hasOwnProperty,
                    L = [],
                    I = L.pop,
                    A = L.push,
                    D = L.push,
                    M = L.slice,
                    j = function(e, t) {
                        for (var d = 0, n = e.length; d < n; d++)
                            if (e[d] === t) return d;
                        return -1
                    },
                    P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    O = "[\\x20\\t\\r\\n\\f]",
                    B = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    R = "\\[" + O + "*(" + B + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + O + "*\\]",
                    z = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                    H = new RegExp(O + "+", "g"),
                    F = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                    q = new RegExp("^" + O + "*," + O + "*"),
                    G = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
                    U = new RegExp(O + "|>"),
                    W = new RegExp(z),
                    K = new RegExp("^" + B + "$"),
                    V = { ID: new RegExp("^#(" + B + ")"), CLASS: new RegExp("^\\.(" + B + ")"), TAG: new RegExp("^(" + B + "|[*])"), ATTR: new RegExp("^" + R), PSEUDO: new RegExp("^" + z), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i") },
                    Y = /HTML$/i,
                    Z = /^(?:input|select|textarea|button)$/i,
                    X = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
                    de = function(e, t, d) { var n = "0x" + t - 65536; return n != n || d ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320) },
                    ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ie = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
                    oe = function() { p() },
                    re = ve((function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }), { dir: "parentNode", next: "legend" });
                try { D.apply(L = M.call(x.childNodes), x.childNodes), L[x.childNodes.length].nodeType } catch (e) {
                    D = {
                        apply: L.length ? function(e, t) { A.apply(e, M.call(t)) } : function(e, t) {
                            for (var d = e.length, n = 0; e[d++] = t[n++];);
                            e.length = d - 1
                        }
                    }
                }

                function ae(e, t, n, i) {
                    var o, a, l, u, c, $, m, b = t && t.ownerDocument,
                        w = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return n;
                    if (!i && ((t ? t.ownerDocument || t : x) !== f && p(t), t = t || f, h)) {
                        if (11 !== w && (c = Q.exec(e)))
                            if (o = c[1]) { if (9 === w) { if (!(l = t.getElementById(o))) return n; if (l.id === o) return n.push(l), n } else if (b && (l = b.getElementById(o)) && y(t, l) && l.id === o) return n.push(l), n } else { if (c[2]) return D.apply(n, t.getElementsByTagName(e)), n; if ((o = c[3]) && d.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(o)), n }
                        if (d.qsa && !S[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                            if (m = e, b = t, 1 === w && U.test(e)) {
                                for ((u = t.getAttribute("id")) ? u = u.replace(ne, ie) : t.setAttribute("id", u = v), a = ($ = r(e)).length; a--;) $[a] = "#" + u + " " + ye($[a]);
                                m = $.join(","), b = ee.test(e) && me(t.parentNode) || t
                            }
                            try { return D.apply(n, b.querySelectorAll(m)), n } catch (t) { S(e, !0) } finally { u === v && t.removeAttribute("id") }
                        }
                    }
                    return s(e.replace(F, "$1"), t, n, i)
                }

                function se() { var e = []; return function t(d, i) { return e.push(d + " ") > n.cacheLength && delete t[e.shift()], t[d + " "] = i } }

                function le(e) { return e[v] = !0, e }

                function ue(e) { var t = f.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

                function ce(e, t) { for (var d = e.split("|"), i = d.length; i--;) n.attrHandle[d[i]] = t }

                function pe(e, t) {
                    var d = t && e,
                        n = d && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (n) return n;
                    if (d)
                        for (; d = d.nextSibling;)
                            if (d === t) return -1;
                    return e ? 1 : -1
                }

                function fe(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

                function $e(e) { return function(t) { var d = t.nodeName.toLowerCase(); return ("input" === d || "button" === d) && t.type === e } }

                function he(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

                function ge(e) { return le((function(t) { return t = +t, le((function(d, n) { for (var i, o = e([], d.length, t), r = o.length; r--;) d[i = o[r]] && (d[i] = !(n[i] = d[i])) })) })) }

                function me(e) { return e && void 0 !== e.getElementsByTagName && e }
                for (t in d = ae.support = {}, o = ae.isXML = function(e) {
                        var t = e.namespaceURI,
                            d = (e.ownerDocument || e).documentElement;
                        return !Y.test(t || d && d.nodeName || "HTML")
                    }, p = ae.setDocument = function(e) {
                        var t, i, r = e ? e.ownerDocument || e : x;
                        return r !== f && 9 === r.nodeType && r.documentElement ? ($ = (f = r).documentElement, h = !o(f), x !== f && (i = f.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), d.attributes = ue((function(e) { return e.className = "i", !e.getAttribute("className") })), d.getElementsByTagName = ue((function(e) { return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length })), d.getElementsByClassName = J.test(f.getElementsByClassName), d.getById = ue((function(e) { return $.appendChild(e).id = v, !f.getElementsByName || !f.getElementsByName(v).length })), d.getById ? (n.filter.ID = function(e) { var t = e.replace(te, de); return function(e) { return e.getAttribute("id") === t } }, n.find.ID = function(e, t) { if (void 0 !== t.getElementById && h) { var d = t.getElementById(e); return d ? [d] : [] } }) : (n.filter.ID = function(e) { var t = e.replace(te, de); return function(e) { var d = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return d && d.value === t } }, n.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && h) {
                                var d, n, i, o = t.getElementById(e);
                                if (o) {
                                    if ((d = o.getAttributeNode("id")) && d.value === e) return [o];
                                    for (i = t.getElementsByName(e), n = 0; o = i[n++];)
                                        if ((d = o.getAttributeNode("id")) && d.value === e) return [o]
                                }
                                return []
                            }
                        }), n.find.TAG = d.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                            var d, n = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) { for (; d = o[i++];) 1 === d.nodeType && n.push(d); return n }
                            return o
                        }, n.find.CLASS = d.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && h) return t.getElementsByClassName(e) }, m = [], g = [], (d.qsa = J.test(f.querySelectorAll)) && (ue((function(e) { $.appendChild(e).innerHTML = "<a id='" + v + "'></a><select id='" + v + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + O + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + v + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + v + "+*").length || g.push(".#.+[+~]") })), ue((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = f.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), $.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        }))), (d.matchesSelector = J.test(b = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && ue((function(e) { d.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), m.push("!=", z) })), g = g.length && new RegExp(g.join("|")), m = m.length && new RegExp(m.join("|")), t = J.test($.compareDocumentPosition), y = t || J.test($.contains) ? function(e, t) {
                            var d = 9 === e.nodeType ? e.documentElement : e,
                                n = t && t.parentNode;
                            return e === n || !(!n || 1 !== n.nodeType || !(d.contains ? d.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, E = t ? function(e, t) { if (e === t) return c = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === f || e.ownerDocument === x && y(x, e) ? -1 : t === f || t.ownerDocument === x && y(x, t) ? 1 : u ? j(u, e) - j(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                            if (e === t) return c = !0, 0;
                            var d, n = 0,
                                i = e.parentNode,
                                o = t.parentNode,
                                r = [e],
                                a = [t];
                            if (!i || !o) return e === f ? -1 : t === f ? 1 : i ? -1 : o ? 1 : u ? j(u, e) - j(u, t) : 0;
                            if (i === o) return pe(e, t);
                            for (d = e; d = d.parentNode;) r.unshift(d);
                            for (d = t; d = d.parentNode;) a.unshift(d);
                            for (; r[n] === a[n];) n++;
                            return n ? pe(r[n], a[n]) : r[n] === x ? -1 : a[n] === x ? 1 : 0
                        }, f) : f
                    }, ae.matches = function(e, t) { return ae(e, null, null, t) }, ae.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== f && p(e), d.matchesSelector && h && !S[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t))) try { var n = b.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { S(t, !0) }
                        return ae(t, f, null, [e]).length > 0
                    }, ae.contains = function(e, t) { return (e.ownerDocument || e) !== f && p(e), y(e, t) }, ae.attr = function(e, t) {
                        (e.ownerDocument || e) !== f && p(e);
                        var i = n.attrHandle[t.toLowerCase()],
                            o = i && N.call(n.attrHandle, t.toLowerCase()) ? i(e, t, !h) : void 0;
                        return void 0 !== o ? o : d.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }, ae.escape = function(e) { return (e + "").replace(ne, ie) }, ae.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, ae.uniqueSort = function(e) {
                        var t, n = [],
                            i = 0,
                            o = 0;
                        if (c = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(E), c) { for (; t = e[o++];) t === e[o] && (i = n.push(o)); for (; i--;) e.splice(n[i], 1) }
                        return u = null, e
                    }, i = ae.getText = function(e) {
                        var t, d = "",
                            n = 0,
                            o = e.nodeType;
                        if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) d += i(e) } else if (3 === o || 4 === o) return e.nodeValue } else
                            for (; t = e[n++];) d += i(t);
                        return d
                    }, (n = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: le,
                        match: V,
                        attrHandle: {},
                        find: {},
                        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                        preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, de), e[3] = (e[3] || e[4] || e[5] || "").replace(te, de), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e }, PSEUDO: function(e) { var t, d = !e[6] && e[2]; return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : d && W.test(d) && (t = r(d, !0)) && (t = d.indexOf(")", d.length - t) - d.length) && (e[0] = e[0].slice(0, t), e[2] = d.slice(0, t)), e.slice(0, 3)) } },
                        filter: {
                            TAG: function(e) { var t = e.replace(te, de).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                            CLASS: function(e) { var t = _[e + " "]; return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && _(e, (function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") })) },
                            ATTR: function(e, t, d) { return function(n) { var i = ae.attr(n, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === d : "!=" === t ? i !== d : "^=" === t ? d && 0 === i.indexOf(d) : "*=" === t ? d && i.indexOf(d) > -1 : "$=" === t ? d && i.slice(-d.length) === d : "~=" === t ? (" " + i.replace(H, " ") + " ").indexOf(d) > -1 : "|=" === t && (i === d || i.slice(0, d.length + 1) === d + "-")) } },
                            CHILD: function(e, t, d, n, i) {
                                var o = "nth" !== e.slice(0, 3),
                                    r = "last" !== e.slice(-4),
                                    a = "of-type" === t;
                                return 1 === n && 0 === i ? function(e) { return !!e.parentNode } : function(t, d, s) {
                                    var l, u, c, p, f, $, h = o !== r ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        m = a && t.nodeName.toLowerCase(),
                                        b = !s && !a,
                                        y = !1;
                                    if (g) {
                                        if (o) {
                                            for (; h;) {
                                                for (p = t; p = p[h];)
                                                    if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                                $ = h = "only" === e && !$ && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if ($ = [r ? g.firstChild : g.lastChild], r && b) {
                                            for (y = (f = (l = (u = (c = (p = g)[v] || (p[v] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] || [])[0] === w && l[1]) && l[2], p = f && g.childNodes[f]; p = ++f && p && p[h] || (y = f = 0) || $.pop();)
                                                if (1 === p.nodeType && ++y && p === t) { u[e] = [w, f, y]; break }
                                        } else if (b && (y = f = (l = (u = (c = (p = t)[v] || (p[v] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] || [])[0] === w && l[1]), !1 === y)
                                            for (;
                                                (p = ++f && p && p[h] || (y = f = 0) || $.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++y || (b && ((u = (c = p[v] || (p[v] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] = [w, y]), p !== t)););
                                        return (y -= i) === n || y % n == 0 && y / n >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) { var d, i = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e); return i[v] ? i(t) : i.length > 1 ? (d = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, d) { for (var n, o = i(e, t), r = o.length; r--;) e[n = j(e, o[r])] = !(d[n] = o[r]) })) : function(e) { return i(e, 0, d) }) : i }
                        },
                        pseudos: {
                            not: le((function(e) {
                                var t = [],
                                    d = [],
                                    n = a(e.replace(F, "$1"));
                                return n[v] ? le((function(e, t, d, i) { for (var o, r = n(e, null, i, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o)) })) : function(e, i, o) { return t[0] = e, n(t, null, o, d), t[0] = null, !d.pop() }
                            })),
                            has: le((function(e) { return function(t) { return ae(e, t).length > 0 } })),
                            contains: le((function(e) {
                                return e = e.replace(te, de),
                                    function(t) { return (t.textContent || i(t)).indexOf(e) > -1 }
                            })),
                            lang: le((function(e) {
                                return K.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, de).toLowerCase(),
                                    function(t) {
                                        var d;
                                        do { if (d = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (d = d.toLowerCase()) === e || 0 === d.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(t) { var d = e.location && e.location.hash; return d && d.slice(1) === t.id },
                            root: function(e) { return e === $ },
                            focus: function(e) { return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                            enabled: he(!1),
                            disabled: he(!0),
                            checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                            selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) { return !n.pseudos.empty(e) },
                            header: function(e) { return X.test(e.nodeName) },
                            input: function(e) { return Z.test(e.nodeName) },
                            button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                            text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                            first: ge((function() { return [0] })),
                            last: ge((function(e, t) { return [t - 1] })),
                            eq: ge((function(e, t, d) { return [d < 0 ? d + t : d] })),
                            even: ge((function(e, t) { for (var d = 0; d < t; d += 2) e.push(d); return e })),
                            odd: ge((function(e, t) { for (var d = 1; d < t; d += 2) e.push(d); return e })),
                            lt: ge((function(e, t, d) { for (var n = d < 0 ? d + t : d > t ? t : d; --n >= 0;) e.push(n); return e })),
                            gt: ge((function(e, t, d) { for (var n = d < 0 ? d + t : d; ++n < t;) e.push(n); return e }))
                        }
                    }).pseudos.nth = n.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) n.pseudos[t] = fe(t);
                for (t in { submit: !0, reset: !0 }) n.pseudos[t] = $e(t);

                function be() {}

                function ye(e) { for (var t = 0, d = e.length, n = ""; t < d; t++) n += e[t].value; return n }

                function ve(e, t, d) {
                    var n = t.dir,
                        i = t.next,
                        o = i || n,
                        r = d && "parentNode" === o,
                        a = C++;
                    return t.first ? function(t, d, i) {
                        for (; t = t[n];)
                            if (1 === t.nodeType || r) return e(t, d, i);
                        return !1
                    } : function(t, d, s) {
                        var l, u, c, p = [w, a];
                        if (s) {
                            for (; t = t[n];)
                                if ((1 === t.nodeType || r) && e(t, d, s)) return !0
                        } else
                            for (; t = t[n];)
                                if (1 === t.nodeType || r)
                                    if (u = (c = t[v] || (t[v] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[n] || t;
                                    else { if ((l = u[o]) && l[0] === w && l[1] === a) return p[2] = l[2]; if (u[o] = p, p[2] = e(t, d, s)) return !0 } return !1
                    }
                }

                function xe(e) {
                    return e.length > 1 ? function(t, d, n) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, d, n)) return !1;
                        return !0
                    } : e[0]
                }

                function we(e, t, d, n, i) { for (var o, r = [], a = 0, s = e.length, l = null != t; a < s; a++)(o = e[a]) && (d && !d(o, n, i) || (r.push(o), l && t.push(a))); return r }

                function Ce(e, t, d, n, i, o) {
                    return n && !n[v] && (n = Ce(n)), i && !i[v] && (i = Ce(i, o)), le((function(o, r, a, s) {
                        var l, u, c, p = [],
                            f = [],
                            $ = r.length,
                            h = o || function(e, t, d) { for (var n = 0, i = t.length; n < i; n++) ae(e, t[n], d); return d }(t || "*", a.nodeType ? [a] : a, []),
                            g = !e || !o && t ? h : we(h, p, e, a, s),
                            m = d ? i || (o ? e : $ || n) ? [] : r : g;
                        if (d && d(g, m, a, s), n)
                            for (l = we(m, f), n(l, [], a, s), u = l.length; u--;)(c = l[u]) && (m[f[u]] = !(g[f[u]] = c));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (l = [], u = m.length; u--;)(c = m[u]) && l.push(g[u] = c);
                                    i(null, m = [], l, s)
                                }
                                for (u = m.length; u--;)(c = m[u]) && (l = i ? j(o, c) : p[u]) > -1 && (o[l] = !(r[l] = c))
                            }
                        } else m = we(m === r ? m.splice($, m.length) : m), i ? i(null, r, m, s) : D.apply(r, m)
                    }))
                }

                function _e(e) {
                    for (var t, d, i, o = e.length, r = n.relative[e[0].type], a = r || n.relative[" "], s = r ? 1 : 0, u = ve((function(e) { return e === t }), a, !0), c = ve((function(e) { return j(t, e) > -1 }), a, !0), p = [function(e, d, n) { var i = !r && (n || d !== l) || ((t = d).nodeType ? u(e, d, n) : c(e, d, n)); return t = null, i }]; s < o; s++)
                        if (d = n.relative[e[s].type]) p = [ve(xe(p), d)];
                        else {
                            if ((d = n.filter[e[s].type].apply(null, e[s].matches))[v]) { for (i = ++s; i < o && !n.relative[e[i].type]; i++); return Ce(s > 1 && xe(p), s > 1 && ye(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(F, "$1"), d, s < i && _e(e.slice(s, i)), i < o && _e(e = e.slice(i)), i < o && ye(e)) }
                            p.push(d)
                        }
                    return xe(p)
                }
                return be.prototype = n.filters = n.pseudos, n.setFilters = new be, r = ae.tokenize = function(e, t) { var d, i, o, r, a, s, l, u = k[e + " "]; if (u) return t ? 0 : u.slice(0); for (a = e, s = [], l = n.preFilter; a;) { for (r in d && !(i = q.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(o = [])), d = !1, (i = G.exec(a)) && (d = i.shift(), o.push({ value: d, type: i[0].replace(F, " ") }), a = a.slice(d.length)), n.filter) !(i = V[r].exec(a)) || l[r] && !(i = l[r](i)) || (d = i.shift(), o.push({ value: d, type: r, matches: i }), a = a.slice(d.length)); if (!d) break } return t ? a.length : a ? ae.error(e) : k(e, s).slice(0) }, a = ae.compile = function(e, t) {
                    var d, i = [],
                        o = [],
                        a = T[e + " "];
                    if (!a) {
                        for (t || (t = r(e)), d = t.length; d--;)(a = _e(t[d]))[v] ? i.push(a) : o.push(a);
                        (a = T(e, function(e, t) {
                            var d = t.length > 0,
                                i = e.length > 0,
                                o = function(o, r, a, s, u) {
                                    var c, $, g, m = 0,
                                        b = "0",
                                        y = o && [],
                                        v = [],
                                        x = l,
                                        C = o || i && n.find.TAG("*", u),
                                        _ = w += null == x ? 1 : Math.random() || .1,
                                        k = C.length;
                                    for (u && (l = r === f || r || u); b !== k && null != (c = C[b]); b++) {
                                        if (i && c) {
                                            for ($ = 0, r || c.ownerDocument === f || (p(c), a = !h); g = e[$++];)
                                                if (g(c, r || f, a)) { s.push(c); break }
                                            u && (w = _)
                                        }
                                        d && ((c = !g && c) && m--, o && y.push(c))
                                    }
                                    if (m += b, d && b !== m) {
                                        for ($ = 0; g = t[$++];) g(y, v, r, a);
                                        if (o) {
                                            if (m > 0)
                                                for (; b--;) y[b] || v[b] || (v[b] = I.call(s));
                                            v = we(v)
                                        }
                                        D.apply(s, v), u && !o && v.length > 0 && m + t.length > 1 && ae.uniqueSort(s)
                                    }
                                    return u && (w = _, l = x), y
                                };
                            return d ? le(o) : o
                        }(o, i))).selector = e
                    }
                    return a
                }, s = ae.select = function(e, t, d, i) {
                    var o, s, l, u, c, p = "function" == typeof e && e,
                        f = !i && r(e = p.selector || e);
                    if (d = d || [], 1 === f.length) {
                        if ((s = f[0] = f[0].slice(0)).length > 2 && "ID" === (l = s[0]).type && 9 === t.nodeType && h && n.relative[s[1].type]) {
                            if (!(t = (n.find.ID(l.matches[0].replace(te, de), t) || [])[0])) return d;
                            p && (t = t.parentNode), e = e.slice(s.shift().value.length)
                        }
                        for (o = V.needsContext.test(e) ? 0 : s.length; o-- && (l = s[o], !n.relative[u = l.type]);)
                            if ((c = n.find[u]) && (i = c(l.matches[0].replace(te, de), ee.test(s[0].type) && me(t.parentNode) || t))) { if (s.splice(o, 1), !(e = i.length && ye(s))) return D.apply(d, i), d; break }
                    }
                    return (p || a(e, f))(i, t, !h, d, !t || ee.test(e) && me(t.parentNode) || t), d
                }, d.sortStable = v.split("").sort(E).join("") === v, d.detectDuplicates = !!c, p(), d.sortDetached = ue((function(e) { return 1 & e.compareDocumentPosition(f.createElement("fieldset")) })), ue((function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") })) || ce("type|href|height|width", (function(e, t, d) { if (!d) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) })), d.attributes && ue((function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") })) || ce("value", (function(e, t, d) { if (!d && "input" === e.nodeName.toLowerCase()) return e.defaultValue })), ue((function(e) { return null == e.getAttribute("disabled") })) || ce(P, (function(e, t, d) { var n; if (!d) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null })), ae
            }(d);
        C.find = T, C.expr = T.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = T.uniqueSort, C.text = T.getText, C.isXMLDoc = T.isXML, C.contains = T.contains, C.escapeSelector = T.escape;
        var S = function(e, t, d) {
                for (var n = [], i = void 0 !== d;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && C(e).is(d)) break;
                        n.push(e)
                    }
                return n
            },
            E = function(e, t) { for (var d = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && d.push(e); return d },
            N = C.expr.match.needsContext;

        function L(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
        var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function A(e, t, d) { return b(t) ? C.grep(e, (function(e, n) { return !!t.call(e, n, e) !== d })) : t.nodeType ? C.grep(e, (function(e) { return e === t !== d })) : "string" != typeof t ? C.grep(e, (function(e) { return c.call(t, e) > -1 !== d })) : C.filter(t, e, d) }
        C.filter = function(e, t, d) { var n = t[0]; return d && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? C.find.matchesSelector(n, e) ? [n] : [] : C.find.matches(e, C.grep(t, (function(e) { return 1 === e.nodeType }))) }, C.fn.extend({
            find: function(e) {
                var t, d, n = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter((function() {
                    for (t = 0; t < n; t++)
                        if (C.contains(i[t], this)) return !0
                })));
                for (d = this.pushStack([]), t = 0; t < n; t++) C.find(e, i[t], d);
                return n > 1 ? C.uniqueSort(d) : d
            },
            filter: function(e) { return this.pushStack(A(this, e || [], !1)) },
            not: function(e) { return this.pushStack(A(this, e || [], !0)) },
            is: function(e) { return !!A(this, "string" == typeof e && N.test(e) ? C(e) : e || [], !1).length }
        });
        var D, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(e, t, d) {
            var n, i;
            if (!e) return this;
            if (d = d || D, "string" == typeof e) {
                if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : M.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || d).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), I.test(n[1]) && C.isPlainObject(t))
                        for (n in t) b(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return (i = r.getElementById(n[2])) && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== d.ready ? d.ready(e) : e(C) : C.makeArray(e, this)
        }).prototype = C.fn, D = C(r);
        var j = /^(?:parents|prev(?:Until|All))/,
            P = { children: !0, contents: !0, next: !0, prev: !0 };

        function O(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this),
                    d = t.length;
                return this.filter((function() {
                    for (var e = 0; e < d; e++)
                        if (C.contains(this, t[e])) return !0
                }))
            },
            closest: function(e, t) {
                var d, n = 0,
                    i = this.length,
                    o = [],
                    r = "string" != typeof e && C(e);
                if (!N.test(e))
                    for (; n < i; n++)
                        for (d = this[n]; d && d !== t; d = d.parentNode)
                            if (d.nodeType < 11 && (r ? r.index(d) > -1 : 1 === d.nodeType && C.find.matchesSelector(d, e))) { o.push(d); break }
                return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
            },
            index: function(e) { return e ? "string" == typeof e ? c.call(C(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(e, t) { return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t)))) },
            addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
        }), C.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return S(e, "parentNode") }, parentsUntil: function(e, t, d) { return S(e, "parentNode", d) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return S(e, "nextSibling") }, prevAll: function(e) { return S(e, "previousSibling") }, nextUntil: function(e, t, d) { return S(e, "nextSibling", d) }, prevUntil: function(e, t, d) { return S(e, "previousSibling", d) }, siblings: function(e) { return E((e.parentNode || {}).firstChild, e) }, children: function(e) { return E(e.firstChild) }, contents: function(e) { return void 0 !== e.contentDocument ? e.contentDocument : (L(e, "template") && (e = e.content || e), C.merge([], e.childNodes)) } }, (function(e, t) { C.fn[e] = function(d, n) { var i = C.map(this, t, d); return "Until" !== e.slice(-5) && (n = d), n && "string" == typeof n && (i = C.filter(n, i)), this.length > 1 && (P[e] || C.uniqueSort(i), j.test(e) && i.reverse()), this.pushStack(i) } }));
        var B = /[^\x20\t\r\n\f]+/g;

        function R(e) { return e }

        function z(e) { throw e }

        function H(e, t, d, n) { var i; try { e && b(i = e.promise) ? i.call(e).done(t).fail(d) : e && b(i = e.then) ? i.call(e, t, d) : t.apply(void 0, [e].slice(n)) } catch (e) { d.apply(void 0, [e]) } }
        C.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) { var t = {}; return C.each(e.match(B) || [], (function(e, d) { t[d] = !0 })), t }(e) : C.extend({}, e);
            var t, d, n, i, o = [],
                r = [],
                a = -1,
                s = function() {
                    for (i = i || e.once, n = t = !0; r.length; a = -1)
                        for (d = r.shift(); ++a < o.length;) !1 === o[a].apply(d[0], d[1]) && e.stopOnFalse && (a = o.length, d = !1);
                    e.memory || (d = !1), t = !1, i && (o = d ? [] : "")
                },
                l = {
                    add: function() { return o && (d && !t && (a = o.length - 1, r.push(d)), function t(d) { C.each(d, (function(d, n) { b(n) ? e.unique && l.has(n) || o.push(n) : n && n.length && "string" !== w(n) && t(n) })) }(arguments), d && !t && s()), this },
                    remove: function() {
                        return C.each(arguments, (function(e, t) {
                            for (var d;
                                (d = C.inArray(t, o, d)) > -1;) o.splice(d, 1), d <= a && a--
                        })), this
                    },
                    has: function(e) { return e ? C.inArray(e, o) > -1 : o.length > 0 },
                    empty: function() { return o && (o = []), this },
                    disable: function() { return i = r = [], o = d = "", this },
                    disabled: function() { return !o },
                    lock: function() { return i = r = [], d || t || (o = d = ""), this },
                    locked: function() { return !!i },
                    fireWith: function(e, d) { return i || (d = [e, (d = d || []).slice ? d.slice() : d], r.push(d), t || s()), this },
                    fire: function() { return l.fireWith(this, arguments), this },
                    fired: function() { return !!n }
                };
            return l
        }, C.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                    ],
                    n = "pending",
                    i = {
                        state: function() { return n },
                        always: function() { return o.done(arguments).fail(arguments), this },
                        catch: function(e) { return i.then(null, e) },
                        pipe: function() {
                            var e = arguments;
                            return C.Deferred((function(d) {
                                C.each(t, (function(t, n) {
                                    var i = b(e[n[4]]) && e[n[4]];
                                    o[n[1]]((function() {
                                        var e = i && i.apply(this, arguments);
                                        e && b(e.promise) ? e.promise().progress(d.notify).done(d.resolve).fail(d.reject) : d[n[0] + "With"](this, i ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        then: function(e, n, i) {
                            var o = 0;

                            function r(e, t, n, i) {
                                return function() {
                                    var a = this,
                                        s = arguments,
                                        l = function() {
                                            var d, l;
                                            if (!(e < o)) {
                                                if ((d = n.apply(a, s)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                l = d && ("object" == typeof d || "function" == typeof d) && d.then, b(l) ? i ? l.call(d, r(o, t, R, i), r(o, t, z, i)) : (o++, l.call(d, r(o, t, R, i), r(o, t, z, i), r(o, t, R, t.notifyWith))) : (n !== R && (a = void 0, s = [d]), (i || t.resolveWith)(a, s))
                                            }
                                        },
                                        u = i ? l : function() { try { l() } catch (d) { C.Deferred.exceptionHook && C.Deferred.exceptionHook(d, u.stackTrace), e + 1 >= o && (n !== z && (a = void 0, s = [d]), t.rejectWith(a, s)) } };
                                    e ? u() : (C.Deferred.getStackHook && (u.stackTrace = C.Deferred.getStackHook()), d.setTimeout(u))
                                }
                            }
                            return C.Deferred((function(d) { t[0][3].add(r(0, d, b(i) ? i : R, d.notifyWith)), t[1][3].add(r(0, d, b(e) ? e : R)), t[2][3].add(r(0, d, b(n) ? n : z)) })).promise()
                        },
                        promise: function(e) { return null != e ? C.extend(e, i) : i }
                    },
                    o = {};
                return C.each(t, (function(e, d) {
                    var r = d[2],
                        a = d[5];
                    i[d[1]] = r.add, a && r.add((function() { n = a }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), r.add(d[3].fire), o[d[0]] = function() { return o[d[0] + "With"](this === o ? void 0 : this, arguments), this }, o[d[0] + "With"] = r.fireWith
                })), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t = arguments.length,
                    d = t,
                    n = Array(d),
                    i = s.call(arguments),
                    o = C.Deferred(),
                    r = function(e) { return function(d) { n[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : d, --t || o.resolveWith(n, i) } };
                if (t <= 1 && (H(e, o.done(r(d)).resolve, o.reject, !t), "pending" === o.state() || b(i[d] && i[d].then))) return o.then();
                for (; d--;) H(i[d], r(d), o.reject);
                return o.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) { d.console && d.console.warn && e && F.test(e.name) && d.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, C.readyException = function(e) { d.setTimeout((function() { throw e })) };
        var q = C.Deferred();

        function G() { r.removeEventListener("DOMContentLoaded", G), d.removeEventListener("load", G), C.ready() }
        C.fn.ready = function(e) { return q.then(e).catch((function(e) { C.readyException(e) })), this }, C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || q.resolveWith(r, [C]))
            }
        }), C.ready.then = q.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? d.setTimeout(C.ready) : (r.addEventListener("DOMContentLoaded", G), d.addEventListener("load", G));
        var U = function(e, t, d, n, i, o, r) {
                var a = 0,
                    s = e.length,
                    l = null == d;
                if ("object" === w(d))
                    for (a in i = !0, d) U(e, t, a, d[a], !0, o, r);
                else if (void 0 !== n && (i = !0, b(n) || (r = !0), l && (r ? (t.call(e, n), t = null) : (l = t, t = function(e, t, d) { return l.call(C(e), d) })), t))
                    for (; a < s; a++) t(e[a], d, r ? n : n.call(e[a], a, t(e[a], d)));
                return i ? e : l ? t.call(e) : s ? t(e[0], d) : o
            },
            W = /^-ms-/,
            K = /-([a-z])/g;

        function V(e, t) { return t.toUpperCase() }

        function Y(e) { return e.replace(W, "ms-").replace(K, V) }
        var Z = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

        function X() { this.expando = C.expando + X.uid++ }
        X.uid = 1, X.prototype = {
            cache: function(e) { var t = e[this.expando]; return t || (t = {}, Z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
            set: function(e, t, d) {
                var n, i = this.cache(e);
                if ("string" == typeof t) i[Y(t)] = d;
                else
                    for (n in t) i[Y(n)] = t[n];
                return i
            },
            get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)] },
            access: function(e, t, d) { return void 0 === t || t && "string" == typeof t && void 0 === d ? this.get(e, t) : (this.set(e, t, d), void 0 !== d ? d : t) },
            remove: function(e, t) { var d, n = e[this.expando]; if (void 0 !== n) { if (void 0 !== t) { d = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in n ? [t] : t.match(B) || []).length; for (; d--;) delete n[t[d]] }(void 0 === t || C.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
            hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !C.isEmptyObject(t) }
        };
        var J = new X,
            Q = new X,
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;

        function de(e, t, d) {
            var n;
            if (void 0 === d && 1 === e.nodeType)
                if (n = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(d = e.getAttribute(n))) {
                    try { d = function(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e) }(d) } catch (e) {}
                    Q.set(e, t, d)
                } else d = void 0;
            return d
        }
        C.extend({ hasData: function(e) { return Q.hasData(e) || J.hasData(e) }, data: function(e, t, d) { return Q.access(e, t, d) }, removeData: function(e, t) { Q.remove(e, t) }, _data: function(e, t, d) { return J.access(e, t, d) }, _removeData: function(e, t) { J.remove(e, t) } }), C.fn.extend({
            data: function(e, t) {
                var d, n, i, o = this[0],
                    r = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = Q.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        for (d = r.length; d--;) r[d] && 0 === (n = r[d].name).indexOf("data-") && (n = Y(n.slice(5)), de(o, n, i[n]));
                        J.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each((function() { Q.set(this, e) })) : U(this, (function(t) {
                    var d;
                    if (o && void 0 === t) return void 0 !== (d = Q.get(o, e)) ? d : void 0 !== (d = de(o, e)) ? d : void 0;
                    this.each((function() { Q.set(this, e, t) }))
                }), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) { return this.each((function() { Q.remove(this, e) })) }
        }), C.extend({
            queue: function(e, t, d) { var n; if (e) return t = (t || "fx") + "queue", n = J.get(e, t), d && (!n || Array.isArray(d) ? n = J.access(e, t, C.makeArray(d)) : n.push(d)), n || [] },
            dequeue: function(e, t) {
                t = t || "fx";
                var d = C.queue(e, t),
                    n = d.length,
                    i = d.shift(),
                    o = C._queueHooks(e, t);
                "inprogress" === i && (i = d.shift(), n--), i && ("fx" === t && d.unshift("inprogress"), delete o.stop, i.call(e, (function() { C.dequeue(e, t) }), o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(e, t) { var d = t + "queueHooks"; return J.get(e, d) || J.access(e, d, { empty: C.Callbacks("once memory").add((function() { J.remove(e, [t + "queue", d]) })) }) }
        }), C.fn.extend({
            queue: function(e, t) {
                var d = 2;
                return "string" != typeof e && (t = e, e = "fx", d--), arguments.length < d ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var d = C.queue(this, e, t);
                    C._queueHooks(this, e), "fx" === e && "inprogress" !== d[0] && C.dequeue(this, e)
                }))
            },
            dequeue: function(e) { return this.each((function() { C.dequeue(this, e) })) },
            clearQueue: function(e) { return this.queue(e || "fx", []) },
            promise: function(e, t) {
                var d, n = 1,
                    i = C.Deferred(),
                    o = this,
                    r = this.length,
                    a = function() {--n || i.resolveWith(o, [o]) };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(d = J.get(o[r], e + "queueHooks")) && d.empty && (n++, d.empty.add(a));
                return a(), i.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            re = r.documentElement,
            ae = function(e) { return C.contains(e.ownerDocument, e) },
            se = { composed: !0 };
        re.getRootNode && (ae = function(e) { return C.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument });
        var le = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === C.css(e, "display") },
            ue = function(e, t, d, n) { var i, o, r = {}; for (o in t) r[o] = e.style[o], e.style[o] = t[o]; for (o in i = d.apply(e, n || []), t) e.style[o] = r[o]; return i };

        function ce(e, t, d, n) {
            var i, o, r = 20,
                a = n ? function() { return n.cur() } : function() { return C.css(e, t, "") },
                s = a(),
                l = d && d[3] || (C.cssNumber[t] ? "" : "px"),
                u = e.nodeType && (C.cssNumber[t] || "px" !== l && +s) && ie.exec(C.css(e, t));
            if (u && u[3] !== l) {
                for (s /= 2, l = l || u[3], u = +s || 1; r--;) C.style(e, t, u + l), (1 - o) * (1 - (o = a() / s || .5)) <= 0 && (r = 0), u /= o;
                u *= 2, C.style(e, t, u + l), d = d || []
            }
            return d && (u = +u || +s || 0, i = d[1] ? u + (d[1] + 1) * d[2] : +d[2], n && (n.unit = l, n.start = u, n.end = i)), i
        }
        var pe = {};

        function fe(e) {
            var t, d = e.ownerDocument,
                n = e.nodeName,
                i = pe[n];
            return i || (t = d.body.appendChild(d.createElement(n)), i = C.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), pe[n] = i, i)
        }

        function $e(e, t) { for (var d, n, i = [], o = 0, r = e.length; o < r; o++)(n = e[o]).style && (d = n.style.display, t ? ("none" === d && (i[o] = J.get(n, "display") || null, i[o] || (n.style.display = "")), "" === n.style.display && le(n) && (i[o] = fe(n))) : "none" !== d && (i[o] = "none", J.set(n, "display", d))); for (o = 0; o < r; o++) null != i[o] && (e[o].style.display = i[o]); return e }
        C.fn.extend({ show: function() { return $e(this, !0) }, hide: function() { return $e(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() { le(this) ? C(this).show() : C(this).hide() })) } });
        var he = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            me = /^$|^module$|\/(?:java|ecma)script/i,
            be = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

        function ye(e, t) { var d; return d = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && L(e, t) ? C.merge([e], d) : d }

        function ve(e, t) { for (var d = 0, n = e.length; d < n; d++) J.set(e[d], "globalEval", !t || J.get(t[d], "globalEval")) }
        be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td;
        var xe, we, Ce = /<|&#?\w+;/;

        function _e(e, t, d, n, i) {
            for (var o, r, a, s, l, u, c = t.createDocumentFragment(), p = [], f = 0, $ = e.length; f < $; f++)
                if ((o = e[f]) || 0 === o)
                    if ("object" === w(o)) C.merge(p, o.nodeType ? [o] : o);
                    else if (Ce.test(o)) {
                for (r = r || c.appendChild(t.createElement("div")), a = (ge.exec(o) || ["", ""])[1].toLowerCase(), s = be[a] || be._default, r.innerHTML = s[1] + C.htmlPrefilter(o) + s[2], u = s[0]; u--;) r = r.lastChild;
                C.merge(p, r.childNodes), (r = c.firstChild).textContent = ""
            } else p.push(t.createTextNode(o));
            for (c.textContent = "", f = 0; o = p[f++];)
                if (n && C.inArray(o, n) > -1) i && i.push(o);
                else if (l = ae(o), r = ye(c.appendChild(o), "script"), l && ve(r), d)
                for (u = 0; o = r[u++];) me.test(o.type || "") && d.push(o);
            return c
        }
        xe = r.createDocumentFragment().appendChild(r.createElement("div")), (we = r.createElement("input")).setAttribute("type", "radio"), we.setAttribute("checked", "checked"), we.setAttribute("name", "t"), xe.appendChild(we), m.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue;
        var ke = /^key/,
            Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Se = /^([^.]*)(?:\.(.+)|)/;

        function Ee() { return !0 }

        function Ne() { return !1 }

        function Le(e, t) { return e === function() { try { return r.activeElement } catch (e) {} }() == ("focus" === t) }

        function Ie(e, t, d, n, i, o) {
            var r, a;
            if ("object" == typeof t) { for (a in "string" != typeof d && (n = n || d, d = void 0), t) Ie(e, a, d, n, t[a], o); return e }
            if (null == n && null == i ? (i = d, n = d = void 0) : null == i && ("string" == typeof d ? (i = n, n = void 0) : (i = n, n = d, d = void 0)), !1 === i) i = Ne;
            else if (!i) return e;
            return 1 === o && (r = i, (i = function(e) { return C().off(e), r.apply(this, arguments) }).guid = r.guid || (r.guid = C.guid++)), e.each((function() { C.event.add(this, t, i, n, d) }))
        }

        function Ae(e, t, d) {
            d ? (J.set(e, t, !1), C.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var n, i, o = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (o.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (o = s.call(arguments), J.set(this, t, o), n = d(this, t), this[t](), o !== (i = J.get(this, t)) || n ? J.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                    } else o.length && (J.set(this, t, { value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation())
                }
            })) : void 0 === J.get(e, t) && C.event.add(e, t, Ee)
        }
        C.event = {
            global: {},
            add: function(e, t, d, n, i) {
                var o, r, a, s, l, u, c, p, f, $, h, g = J.get(e);
                if (g)
                    for (d.handler && (d = (o = d).handler, i = o.selector), i && C.find.matchesSelector(re, i), d.guid || (d.guid = C.guid++), (s = g.events) || (s = g.events = {}), (r = g.handle) || (r = g.handle = function(t) { return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(B) || [""]).length; l--;) f = h = (a = Se.exec(t[l]) || [])[1], $ = (a[2] || "").split(".").sort(), f && (c = C.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = C.event.special[f] || {}, u = C.extend({ type: f, origType: h, data: n, handler: d, guid: d.guid, selector: i, needsContext: i && C.expr.match.needsContext.test(i), namespace: $.join(".") }, o), (p = s[f]) || ((p = s[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, n, $, r) || e.addEventListener && e.addEventListener(f, r)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = d.guid)), i ? p.splice(p.delegateCount++, 0, u) : p.push(u), C.event.global[f] = !0)
            },
            remove: function(e, t, d, n, i) {
                var o, r, a, s, l, u, c, p, f, $, h, g = J.hasData(e) && J.get(e);
                if (g && (s = g.events)) {
                    for (l = (t = (t || "").match(B) || [""]).length; l--;)
                        if (f = h = (a = Se.exec(t[l]) || [])[1], $ = (a[2] || "").split(".").sort(), f) {
                            for (c = C.event.special[f] || {}, p = s[f = (n ? c.delegateType : c.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + $.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = p.length; o--;) u = p[o], !i && h !== u.origType || d && d.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, c.remove && c.remove.call(e, u));
                            r && !p.length && (c.teardown && !1 !== c.teardown.call(e, $, g.handle) || C.removeEvent(e, f, g.handle), delete s[f])
                        } else
                            for (f in s) C.event.remove(e, f + t[l], d, n, !0);
                    C.isEmptyObject(s) && J.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, d, n, i, o, r, a = C.event.fix(e),
                    s = new Array(arguments.length),
                    l = (J.get(this, "events") || {})[a.type] || [],
                    u = C.event.special[a.type] || {};
                for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (r = C.event.handlers.call(this, a, l), t = 0;
                        (i = r[t++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = i.elem, d = 0;
                            (o = i.handlers[d++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (n = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(e, t) {
                var d, n, i, o, r, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && !("click" === e.type && e.button >= 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (o = [], r = {}, d = 0; d < s; d++) void 0 === r[i = (n = t[d]).selector + " "] && (r[i] = n.needsContext ? C(i, this).index(l) > -1 : C.find(i, this, null, [l]).length), r[i] && o.push(n);
                            o.length && a.push({ elem: l, handlers: o })
                        }
                return l = this, s < t.length && a.push({ elem: l, handlers: t.slice(s) }), a
            },
            addProp: function(e, t) { Object.defineProperty(C.Event.prototype, e, { enumerable: !0, configurable: !0, get: b(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
            fix: function(e) { return e[C.expando] ? e : new C.Event(e) },
            special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return he.test(t.type) && t.click && L(t, "input") && Ae(t, "click", Ee), !1 }, trigger: function(e) { var t = this || e; return he.test(t.type) && t.click && L(t, "input") && Ae(t, "click"), !0 }, _default: function(e) { var t = e.target; return he.test(t.type) && t.click && L(t, "input") && J.get(t, "click") || L(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
        }, C.removeEvent = function(e, t, d) { e.removeEventListener && e.removeEventListener(t, d) }, C.Event = function(e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Ne,
            isPropagationStopped: Ne,
            isImmediatePropagationStopped: Ne,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, C.event.addProp), C.each({ focus: "focusin", blur: "focusout" }, (function(e, t) { C.event.special[e] = { setup: function() { return Ae(this, e, Le), !1 }, trigger: function() { return Ae(this, e), !0 }, delegateType: t } })), C.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, (function(e, t) {
            C.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var d, n = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === n || C.contains(n, i)) || (e.type = o.origType, d = o.handler.apply(this, arguments), e.type = t), d
                }
            }
        })), C.fn.extend({ on: function(e, t, d, n) { return Ie(this, e, t, d, n) }, one: function(e, t, d, n) { return Ie(this, e, t, d, n, 1) }, off: function(e, t, d) { var n, i; if (e && e.preventDefault && e.handleObj) return n = e.handleObj, C(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (d = t, t = void 0), !1 === d && (d = Ne), this.each((function() { C.event.remove(this, e, d, t) })) } });
        var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Me = /<script|<style|<link/i,
            je = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Oe(e, t) { return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e }

        function Be(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

        function Re(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

        function ze(e, t) {
            var d, n, i, o, r, a, s, l;
            if (1 === t.nodeType) {
                if (J.hasData(e) && (o = J.access(e), r = J.set(t, o), l = o.events))
                    for (i in delete r.handle, r.events = {}, l)
                        for (d = 0, n = l[i].length; d < n; d++) C.event.add(t, i, l[i][d]);
                Q.hasData(e) && (a = Q.access(e), s = C.extend({}, a), Q.set(t, s))
            }
        }

        function He(e, t) { var d = t.nodeName.toLowerCase(); "input" === d && he.test(e.type) ? t.checked = e.checked : "input" !== d && "textarea" !== d || (t.defaultValue = e.defaultValue) }

        function Fe(e, t, d, n) {
            t = l.apply([], t);
            var i, o, r, a, s, u, c = 0,
                p = e.length,
                f = p - 1,
                $ = t[0],
                h = b($);
            if (h || p > 1 && "string" == typeof $ && !m.checkClone && je.test($)) return e.each((function(i) {
                var o = e.eq(i);
                h && (t[0] = $.call(this, i, o.html())), Fe(o, t, d, n)
            }));
            if (p && (o = (i = _e(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === i.childNodes.length && (i = o), o || n)) {
                for (a = (r = C.map(ye(i, "script"), Be)).length; c < p; c++) s = i, c !== f && (s = C.clone(s, !0, !0), a && C.merge(r, ye(s, "script"))), d.call(e[c], s, c);
                if (a)
                    for (u = r[r.length - 1].ownerDocument, C.map(r, Re), c = 0; c < a; c++) s = r[c], me.test(s.type || "") && !J.access(s, "globalEval") && C.contains(u, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? C._evalUrl && !s.noModule && C._evalUrl(s.src, { nonce: s.nonce || s.getAttribute("nonce") }) : x(s.textContent.replace(Pe, ""), s, u))
            }
            return e
        }

        function qe(e, t, d) { for (var n, i = t ? C.filter(t, e) : e, o = 0; null != (n = i[o]); o++) d || 1 !== n.nodeType || C.cleanData(ye(n)), n.parentNode && (d && ae(n) && ve(ye(n, "script")), n.parentNode.removeChild(n)); return e }
        C.extend({
            htmlPrefilter: function(e) { return e.replace(De, "<$1></$2>") },
            clone: function(e, t, d) {
                var n, i, o, r, a = e.cloneNode(!0),
                    s = ae(e);
                if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (r = ye(a), n = 0, i = (o = ye(e)).length; n < i; n++) He(o[n], r[n]);
                if (t)
                    if (d)
                        for (o = o || ye(e), r = r || ye(a), n = 0, i = o.length; n < i; n++) ze(o[n], r[n]);
                    else ze(e, a);
                return (r = ye(a, "script")).length > 0 && ve(r, !s && ye(e, "script")), a
            },
            cleanData: function(e) {
                for (var t, d, n, i = C.event.special, o = 0; void 0 !== (d = e[o]); o++)
                    if (Z(d)) {
                        if (t = d[J.expando]) {
                            if (t.events)
                                for (n in t.events) i[n] ? C.event.remove(d, n) : C.removeEvent(d, n, t.handle);
                            d[J.expando] = void 0
                        }
                        d[Q.expando] && (d[Q.expando] = void 0)
                    }
            }
        }), C.fn.extend({
            detach: function(e) { return qe(this, e, !0) },
            remove: function(e) { return qe(this, e) },
            text: function(e) { return U(this, (function(e) { return void 0 === e ? C.text(this) : this.empty().each((function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) })) }), null, e, arguments.length) },
            append: function() { return Fe(this, arguments, (function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e) })) },
            prepend: function() {
                return Fe(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Oe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            },
            before: function() { return Fe(this, arguments, (function(e) { this.parentNode && this.parentNode.insertBefore(e, this) })) },
            after: function() { return Fe(this, arguments, (function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) })) },
            empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(ye(e, !1)), e.textContent = ""); return this },
            clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map((function() { return C.clone(this, e, t) })) },
            html: function(e) {
                return U(this, (function(e) {
                    var t = this[0] || {},
                        d = 0,
                        n = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Me.test(e) && !be[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; d < n; d++) 1 === (t = this[d] || {}).nodeType && (C.cleanData(ye(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Fe(this, arguments, (function(t) {
                    var d = this.parentNode;
                    C.inArray(this, e) < 0 && (C.cleanData(ye(this)), d && d.replaceChild(t, this))
                }), e)
            }
        }), C.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, (function(e, t) { C.fn[e] = function(e) { for (var d, n = [], i = C(e), o = i.length - 1, r = 0; r <= o; r++) d = r === o ? this : this.clone(!0), C(i[r])[t](d), u.apply(n, d.get()); return this.pushStack(n) } }));
        var Ge = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
            Ue = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = d), t.getComputedStyle(e) },
            We = new RegExp(oe.join("|"), "i");

        function Ke(e, t, d) { var n, i, o, r, a = e.style; return (d = d || Ue(e)) && ("" !== (r = d.getPropertyValue(t) || d[t]) || ae(e) || (r = C.style(e, t)), !m.pixelBoxStyles() && Ge.test(r) && We.test(t) && (n = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = d.width, a.width = n, a.minWidth = i, a.maxWidth = o)), void 0 !== r ? r + "" : r }

        function Ve(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (u) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(l).appendChild(u);
                    var e = d.getComputedStyle(u);
                    n = "1%" !== e.top, s = 12 === t(e.marginLeft), u.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), u.style.position = "absolute", o = 12 === t(u.offsetWidth / 3), re.removeChild(l), u = null
                }
            }

            function t(e) { return Math.round(parseFloat(e)) }
            var n, i, o, a, s, l = r.createElement("div"),
                u = r.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, C.extend(m, { boxSizingReliable: function() { return e(), i }, pixelBoxStyles: function() { return e(), a }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), o } }))
        }();
        var Ye = ["Webkit", "Moz", "ms"],
            Ze = r.createElement("div").style,
            Xe = {};

        function Je(e) {
            var t = C.cssProps[e] || Xe[e];
            return t || (e in Ze ? e : Xe[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), d = Ye.length; d--;)
                    if ((e = Ye[d] + t) in Ze) return e
            }(e) || e)
        }
        var Qe = /^(none|table(?!-c[ea]).+)/,
            et = /^--/,
            tt = { position: "absolute", visibility: "hidden", display: "block" },
            dt = { letterSpacing: "0", fontWeight: "400" };

        function nt(e, t, d) { var n = ie.exec(t); return n ? Math.max(0, n[2] - (d || 0)) + (n[3] || "px") : t }

        function it(e, t, d, n, i, o) {
            var r = "width" === t ? 1 : 0,
                a = 0,
                s = 0;
            if (d === (n ? "border" : "content")) return 0;
            for (; r < 4; r += 2) "margin" === d && (s += C.css(e, d + oe[r], !0, i)), n ? ("content" === d && (s -= C.css(e, "padding" + oe[r], !0, i)), "margin" !== d && (s -= C.css(e, "border" + oe[r] + "Width", !0, i))) : (s += C.css(e, "padding" + oe[r], !0, i), "padding" !== d ? s += C.css(e, "border" + oe[r] + "Width", !0, i) : a += C.css(e, "border" + oe[r] + "Width", !0, i));
            return !n && o >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - a - .5)) || 0), s
        }

        function ot(e, t, d) {
            var n = Ue(e),
                i = (!m.boxSizingReliable() || d) && "border-box" === C.css(e, "boxSizing", !1, n),
                o = i,
                r = Ke(e, t, n),
                a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ge.test(r)) {
                if (!d) return r;
                r = "auto"
            }
            return (!m.boxSizingReliable() && i || "auto" === r || !parseFloat(r) && "inline" === C.css(e, "display", !1, n)) && e.getClientRects().length && (i = "border-box" === C.css(e, "boxSizing", !1, n), (o = a in e) && (r = e[a])), (r = parseFloat(r) || 0) + it(e, t, d || (i ? "border" : "content"), o, n, r) + "px"
        }

        function rt(e, t, d, n, i) { return new rt.prototype.init(e, t, d, n, i) }
        C.extend({
            cssHooks: { opacity: { get: function(e, t) { if (t) { var d = Ke(e, "opacity"); return "" === d ? "1" : d } } } },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: {},
            style: function(e, t, d, n) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, r, a = Y(t),
                        s = et.test(t),
                        l = e.style;
                    if (s || (t = Je(a)), r = C.cssHooks[t] || C.cssHooks[a], void 0 === d) return r && "get" in r && void 0 !== (i = r.get(e, !1, n)) ? i : l[t];
                    "string" === (o = typeof d) && (i = ie.exec(d)) && i[1] && (d = ce(e, t, i), o = "number"), null != d && d == d && ("number" !== o || s || (d += i && i[3] || (C.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== d || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (d = r.set(e, d, n)) || (s ? l.setProperty(t, d) : l[t] = d))
                }
            },
            css: function(e, t, d, n) { var i, o, r, a = Y(t); return et.test(t) || (t = Je(a)), (r = C.cssHooks[t] || C.cssHooks[a]) && "get" in r && (i = r.get(e, !0, d)), void 0 === i && (i = Ke(e, t, n)), "normal" === i && t in dt && (i = dt[t]), "" === d || d ? (o = parseFloat(i), !0 === d || isFinite(o) ? o || 0 : i) : i }
        }), C.each(["height", "width"], (function(e, t) {
            C.cssHooks[t] = {
                get: function(e, d, n) { if (d) return !Qe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, t, n) : ue(e, tt, (function() { return ot(e, t, n) })) },
                set: function(e, d, n) {
                    var i, o = Ue(e),
                        r = !m.scrollboxSize() && "absolute" === o.position,
                        a = (r || n) && "border-box" === C.css(e, "boxSizing", !1, o),
                        s = n ? it(e, t, n, a, o) : 0;
                    return a && r && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - it(e, t, "border", !1, o) - .5)), s && (i = ie.exec(d)) && "px" !== (i[3] || "px") && (e.style[t] = d, d = C.css(e, t)), nt(0, d, s)
                }
            }
        })), C.cssHooks.marginLeft = Ve(m.reliableMarginLeft, (function(e, t) { if (t) return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, { marginLeft: 0 }, (function() { return e.getBoundingClientRect().left }))) + "px" })), C.each({ margin: "", padding: "", border: "Width" }, (function(e, t) { C.cssHooks[e + t] = { expand: function(d) { for (var n = 0, i = {}, o = "string" == typeof d ? d.split(" ") : [d]; n < 4; n++) i[e + oe[n] + t] = o[n] || o[n - 2] || o[0]; return i } }, "margin" !== e && (C.cssHooks[e + t].set = nt) })), C.fn.extend({
            css: function(e, t) {
                return U(this, (function(e, t, d) {
                    var n, i, o = {},
                        r = 0;
                    if (Array.isArray(t)) { for (n = Ue(e), i = t.length; r < i; r++) o[t[r]] = C.css(e, t[r], !1, n); return o }
                    return void 0 !== d ? C.style(e, t, d) : C.css(e, t)
                }), e, t, arguments.length > 1)
            }
        }), C.Tween = rt, rt.prototype = { constructor: rt, init: function(e, t, d, n, i, o) { this.elem = e, this.prop = d, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (C.cssNumber[d] ? "" : "px") }, cur: function() { var e = rt.propHooks[this.prop]; return e && e.get ? e.get(this) : rt.propHooks._default.get(this) }, run: function(e) { var t, d = rt.propHooks[this.prop]; return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : rt.propHooks._default.set(this), this } }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit) } } }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, C.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, C.fx = rt.prototype.init, C.fx.step = {};
        var at, st, lt = /^(?:toggle|show|hide)$/,
            ut = /queueHooks$/;

        function ct() { st && (!1 === r.hidden && d.requestAnimationFrame ? d.requestAnimationFrame(ct) : d.setTimeout(ct, C.fx.interval), C.fx.tick()) }

        function pt() { return d.setTimeout((function() { at = void 0 })), at = Date.now() }

        function ft(e, t) {
            var d, n = 0,
                i = { height: e };
            for (t = t ? 1 : 0; n < 4; n += 2 - t) i["margin" + (d = oe[n])] = i["padding" + d] = e;
            return t && (i.opacity = i.width = e), i
        }

        function $t(e, t, d) {
            for (var n, i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, r = i.length; o < r; o++)
                if (n = i[o].call(d, t, e)) return n
        }

        function ht(e, t, d) {
            var n, i, o = 0,
                r = ht.prefilters.length,
                a = C.Deferred().always((function() { delete s.elem })),
                s = function() { if (i) return !1; for (var t = at || pt(), d = Math.max(0, l.startTime + l.duration - t), n = 1 - (d / l.duration || 0), o = 0, r = l.tweens.length; o < r; o++) l.tweens[o].run(n); return a.notifyWith(e, [l, n, d]), n < 1 && r ? d : (r || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1) },
                l = a.promise({
                    elem: e,
                    props: C.extend({}, t),
                    opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, d),
                    originalProperties: t,
                    originalOptions: d,
                    startTime: at || pt(),
                    duration: d.duration,
                    tweens: [],
                    createTween: function(t, d) { var n = C.Tween(e, l.opts, t, d, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(n), n },
                    stop: function(t) {
                        var d = 0,
                            n = t ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; d < n; d++) l.tweens[d].run(1);
                        return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
                    }
                }),
                u = l.props;
            for (! function(e, t) {
                    var d, n, i, o, r;
                    for (d in e)
                        if (i = t[n = Y(d)], o = e[d], Array.isArray(o) && (i = o[1], o = e[d] = o[0]), d !== n && (e[n] = o, delete e[d]), (r = C.cssHooks[n]) && "expand" in r)
                            for (d in o = r.expand(o), delete e[n], o) d in e || (e[d] = o[d], t[d] = i);
                        else t[n] = i
                }(u, l.opts.specialEasing); o < r; o++)
                if (n = ht.prefilters[o].call(l, e, u, l.opts)) return b(n.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
            return C.map(u, $t, l), b(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), C.fx.timer(C.extend(s, { elem: e, anim: l, queue: l.opts.queue })), l
        }
        C.Animation = C.extend(ht, {
                tweeners: { "*": [function(e, t) { var d = this.createTween(e, t); return ce(d.elem, e, ie.exec(t), d), d }] },
                tweener: function(e, t) { b(e) ? (t = e, e = ["*"]) : e = e.match(B); for (var d, n = 0, i = e.length; n < i; n++) d = e[n], ht.tweeners[d] = ht.tweeners[d] || [], ht.tweeners[d].unshift(t) },
                prefilters: [function(e, t, d) {
                    var n, i, o, r, a, s, l, u, c = "width" in t || "height" in t,
                        p = this,
                        f = {},
                        $ = e.style,
                        h = e.nodeType && le(e),
                        g = J.get(e, "fxshow");
                    for (n in d.queue || (null == (r = C._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function() { r.unqueued || a() }), r.unqueued++, p.always((function() { p.always((function() { r.unqueued--, C.queue(e, "fx").length || r.empty.fire() })) }))), t)
                        if (i = t[n], lt.test(i)) {
                            if (delete t[n], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                                if ("show" !== i || !g || void 0 === g[n]) continue;
                                h = !0
                            }
                            f[n] = g && g[n] || C.style(e, n)
                        }
                    if ((s = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
                        for (n in c && 1 === e.nodeType && (d.overflow = [$.overflow, $.overflowX, $.overflowY], null == (l = g && g.display) && (l = J.get(e, "display")), "none" === (u = C.css(e, "display")) && (l ? u = l : ($e([e], !0), l = e.style.display || l, u = C.css(e, "display"), $e([e]))), ("inline" === u || "inline-block" === u && null != l) && "none" === C.css(e, "float") && (s || (p.done((function() { $.display = l })), null == l && (u = $.display, l = "none" === u ? "" : u)), $.display = "inline-block")), d.overflow && ($.overflow = "hidden", p.always((function() { $.overflow = d.overflow[0], $.overflowX = d.overflow[1], $.overflowY = d.overflow[2] }))), s = !1, f) s || (g ? "hidden" in g && (h = g.hidden) : g = J.access(e, "fxshow", { display: l }), o && (g.hidden = !h), h && $e([e], !0), p.done((function() { for (n in h || $e([e]), J.remove(e, "fxshow"), f) C.style(e, n, f[n]) }))), s = $t(h ? g[n] : 0, n, p), n in g || (g[n] = s.start, h && (s.end = s.start, s.start = 0))
                }],
                prefilter: function(e, t) { t ? ht.prefilters.unshift(e) : ht.prefilters.push(e) }
            }), C.speed = function(e, t, d) { var n = e && "object" == typeof e ? C.extend({}, e) : { complete: d || !d && t || b(e) && e, duration: e, easing: d && t || t && !b(t) && t }; return C.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() { b(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue) }, n }, C.fn.extend({
                fadeTo: function(e, t, d, n) { return this.filter(le).css("opacity", 0).show().end().animate({ opacity: t }, e, d, n) },
                animate: function(e, t, d, n) {
                    var i = C.isEmptyObject(e),
                        o = C.speed(t, d, n),
                        r = function() {
                            var t = ht(this, C.extend({}, e), o);
                            (i || J.get(this, "finish")) && t.stop(!0)
                        };
                    return r.finish = r, i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
                },
                stop: function(e, t, d) {
                    var n = function(e) {
                        var t = e.stop;
                        delete e.stop, t(d)
                    };
                    return "string" != typeof e && (d = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = C.timers,
                            r = J.get(this);
                        if (i) r[i] && r[i].stop && n(r[i]);
                        else
                            for (i in r) r[i] && r[i].stop && ut.test(i) && n(r[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(d), t = !1, o.splice(i, 1));
                        !t && d || C.dequeue(this, e)
                    }))
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, d = J.get(this),
                            n = d[e + "queue"],
                            i = d[e + "queueHooks"],
                            o = C.timers,
                            r = n ? n.length : 0;
                        for (d.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
                        delete d.finish
                    }))
                }
            }), C.each(["toggle", "show", "hide"], (function(e, t) {
                var d = C.fn[t];
                C.fn[t] = function(e, n, i) { return null == e || "boolean" == typeof e ? d.apply(this, arguments) : this.animate(ft(t, !0), e, n, i) }
            })), C.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, (function(e, t) { C.fn[e] = function(e, d, n) { return this.animate(t, e, d, n) } })), C.timers = [], C.fx.tick = function() {
                var e, t = 0,
                    d = C.timers;
                for (at = Date.now(); t < d.length; t++)(e = d[t])() || d[t] !== e || d.splice(t--, 1);
                d.length || C.fx.stop(), at = void 0
            }, C.fx.timer = function(e) { C.timers.push(e), C.fx.start() }, C.fx.interval = 13, C.fx.start = function() { st || (st = !0, ct()) }, C.fx.stop = function() { st = null }, C.fx.speeds = { slow: 600, fast: 200, _default: 400 }, C.fn.delay = function(e, t) {
                return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                    var i = d.setTimeout(t, e);
                    n.stop = function() { d.clearTimeout(i) }
                }))
            },
            function() {
                var e = r.createElement("input"),
                    t = r.createElement("select").appendChild(r.createElement("option"));
                e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
            }();
        var gt, mt = C.expr.attrHandle;
        C.fn.extend({ attr: function(e, t) { return U(this, C.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each((function() { C.removeAttr(this, e) })) } }), C.extend({
            attr: function(e, t, d) { var n, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, d) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? gt : void 0)), void 0 !== d ? null === d ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (n = i.set(e, d, t)) ? n : (e.setAttribute(t, d + ""), d) : i && "get" in i && null !== (n = i.get(e, t)) ? n : null == (n = C.find.attr(e, t)) ? void 0 : n) },
            attrHooks: { type: { set: function(e, t) { if (!m.radioValue && "radio" === t && L(e, "input")) { var d = e.value; return e.setAttribute("type", t), d && (e.value = d), t } } } },
            removeAttr: function(e, t) {
                var d, n = 0,
                    i = t && t.match(B);
                if (i && 1 === e.nodeType)
                    for (; d = i[n++];) e.removeAttribute(d)
            }
        }), gt = { set: function(e, t, d) { return !1 === t ? C.removeAttr(e, d) : e.setAttribute(d, d), d } }, C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var d = mt[t] || C.find.attr;
            mt[t] = function(e, t, n) { var i, o, r = t.toLowerCase(); return n || (o = mt[r], mt[r] = i, i = null != d(e, t, n) ? r : null, mt[r] = o), i }
        }));
        var bt = /^(?:input|select|textarea|button)$/i,
            yt = /^(?:a|area)$/i;

        function vt(e) { return (e.match(B) || []).join(" ") }

        function xt(e) { return e.getAttribute && e.getAttribute("class") || "" }

        function wt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(B) || [] }
        C.fn.extend({ prop: function(e, t) { return U(this, C.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each((function() { delete this[C.propFix[e] || e] })) } }), C.extend({ prop: function(e, t, d) { var n, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== d ? i && "set" in i && void 0 !== (n = i.set(e, d, t)) ? n : e[t] = d : i && "get" in i && null !== (n = i.get(e, t)) ? n : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = C.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : bt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), m.optSelected || (C.propHooks.selected = {
            get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() { C.propFix[this.toLowerCase()] = this })), C.fn.extend({
            addClass: function(e) {
                var t, d, n, i, o, r, a, s = 0;
                if (b(e)) return this.each((function(t) { C(this).addClass(e.call(this, t, xt(this))) }));
                if ((t = wt(e)).length)
                    for (; d = this[s++];)
                        if (i = xt(d), n = 1 === d.nodeType && " " + vt(i) + " ") {
                            for (r = 0; o = t[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            i !== (a = vt(n)) && d.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, d, n, i, o, r, a, s = 0;
                if (b(e)) return this.each((function(t) { C(this).removeClass(e.call(this, t, xt(this))) }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = wt(e)).length)
                    for (; d = this[s++];)
                        if (i = xt(d), n = 1 === d.nodeType && " " + vt(i) + " ") {
                            for (r = 0; o = t[r++];)
                                for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                            i !== (a = vt(n)) && d.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var d = typeof e,
                    n = "string" === d || Array.isArray(e);
                return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : b(e) ? this.each((function(d) { C(this).toggleClass(e.call(this, d, xt(this), t), t) })) : this.each((function() {
                    var t, i, o, r;
                    if (n)
                        for (i = 0, o = C(this), r = wt(e); t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else void 0 !== e && "boolean" !== d || ((t = xt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, d, n = 0;
                for (t = " " + e + " "; d = this[n++];)
                    if (1 === d.nodeType && (" " + vt(xt(d)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Ct = /\r/g;
        C.fn.extend({
            val: function(e) {
                var t, d, n, i = this[0];
                return arguments.length ? (n = b(e), this.each((function(d) {
                    var i;
                    1 === this.nodeType && (null == (i = n ? e.call(this, d, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, (function(e) { return null == e ? "" : e + "" }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                }))) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (d = t.get(i, "value")) ? d : "string" == typeof(d = i.value) ? d.replace(Ct, "") : null == d ? "" : d : void 0
            }
        }), C.extend({
            valHooks: {
                option: { get: function(e) { var t = C.find.attr(e, "value"); return null != t ? t : vt(C.text(e)) } },
                select: {
                    get: function(e) {
                        var t, d, n, i = e.options,
                            o = e.selectedIndex,
                            r = "select-one" === e.type,
                            a = r ? null : [],
                            s = r ? o + 1 : i.length;
                        for (n = o < 0 ? s : r ? o : 0; n < s; n++)
                            if (((d = i[n]).selected || n === o) && !d.disabled && (!d.parentNode.disabled || !L(d.parentNode, "optgroup"))) {
                                if (t = C(d).val(), r) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) { for (var d, n, i = e.options, o = C.makeArray(t), r = i.length; r--;)((n = i[r]).selected = C.inArray(C.valHooks.option.get(n), o) > -1) && (d = !0); return d || (e.selectedIndex = -1), o }
                }
            }
        }), C.each(["radio", "checkbox"], (function() { C.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1 } }, m.checkOn || (C.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) })), m.focusin = "onfocusin" in d;
        var _t = /^(?:focusinfocus|focusoutblur)$/,
            kt = function(e) { e.stopPropagation() };
        C.extend(C.event, {
            trigger: function(e, t, n, i) {
                var o, a, s, l, u, c, p, f, h = [n || r],
                    g = $.call(e, "type") ? e.type : e,
                    m = $.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = f = s = n = n || r, 3 !== n.nodeType && 8 !== n.nodeType && !_t.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (e = e[C.expando] ? e : new C.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), p = C.event.special[g] || {}, i || !p.trigger || !1 !== p.trigger.apply(n, t))) {
                    if (!i && !p.noBubble && !y(n)) {
                        for (l = p.delegateType || g, _t.test(l + g) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                        s === (n.ownerDocument || r) && h.push(s.defaultView || s.parentWindow || d)
                    }
                    for (o = 0;
                        (a = h[o++]) && !e.isPropagationStopped();) f = a, e.type = o > 1 ? l : p.bindType || g, (c = (J.get(a, "events") || {})[e.type] && J.get(a, "handle")) && c.apply(a, t), (c = u && a[u]) && c.apply && Z(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                    return e.type = g, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), t) || !Z(n) || u && b(n[g]) && !y(n) && ((s = n[u]) && (n[u] = null), C.event.triggered = g, e.isPropagationStopped() && f.addEventListener(g, kt), n[g](), e.isPropagationStopped() && f.removeEventListener(g, kt), C.event.triggered = void 0, s && (n[u] = s)), e.result
                }
            },
            simulate: function(e, t, d) {
                var n = C.extend(new C.Event, d, { type: e, isSimulated: !0 });
                C.event.trigger(n, null, t)
            }
        }), C.fn.extend({ trigger: function(e, t) { return this.each((function() { C.event.trigger(e, t, this) })) }, triggerHandler: function(e, t) { var d = this[0]; if (d) return C.event.trigger(e, t, d, !0) } }), m.focusin || C.each({ focus: "focusin", blur: "focusout" }, (function(e, t) {
            var d = function(e) { C.event.simulate(t, e.target, C.event.fix(e)) };
            C.event.special[t] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        i = J.access(n, t);
                    i || n.addEventListener(e, d, !0), J.access(n, t, (i || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        i = J.access(n, t) - 1;
                    i ? J.access(n, t, i) : (n.removeEventListener(e, d, !0), J.remove(n, t))
                }
            }
        }));
        var Tt = d.location,
            St = Date.now(),
            Et = /\?/;
        C.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new d.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t };
        var Nt = /\[\]$/,
            Lt = /\r?\n/g,
            It = /^(?:submit|button|image|reset|file)$/i,
            At = /^(?:input|select|textarea|keygen)/i;

        function Dt(e, t, d, n) {
            var i;
            if (Array.isArray(t)) C.each(t, (function(t, i) { d || Nt.test(e) ? n(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, d, n) }));
            else if (d || "object" !== w(t)) n(e, t);
            else
                for (i in t) Dt(e + "[" + i + "]", t[i], d, n)
        }
        C.param = function(e, t) {
            var d, n = [],
                i = function(e, t) {
                    var d = b(t) ? t() : t;
                    n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == d ? "" : d)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function() { i(this.name, this.value) }));
            else
                for (d in e) Dt(d, e[d], t, i);
            return n.join("&")
        }, C.fn.extend({ serialize: function() { return C.param(this.serializeArray()) }, serializeArray: function() { return this.map((function() { var e = C.prop(this, "elements"); return e ? C.makeArray(e) : this })).filter((function() { var e = this.type; return this.name && !C(this).is(":disabled") && At.test(this.nodeName) && !It.test(e) && (this.checked || !he.test(e)) })).map((function(e, t) { var d = C(this).val(); return null == d ? null : Array.isArray(d) ? C.map(d, (function(e) { return { name: t.name, value: e.replace(Lt, "\r\n") } })) : { name: t.name, value: d.replace(Lt, "\r\n") } })).get() } });
        var Mt = /%20/g,
            jt = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Bt = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            zt = {},
            Ht = {},
            Ft = "*/".concat("*"),
            qt = r.createElement("a");

        function Gt(e) {
            return function(t, d) {
                "string" != typeof t && (d = t, t = "*");
                var n, i = 0,
                    o = t.toLowerCase().match(B) || [];
                if (b(d))
                    for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(d)) : (e[n] = e[n] || []).push(d)
            }
        }

        function Ut(e, t, d, n) {
            var i = {},
                o = e === Ht;

            function r(a) { var s; return i[a] = !0, C.each(e[a] || [], (function(e, a) { var l = a(t, d, n); return "string" != typeof l || o || i[l] ? o ? !(s = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1) })), s }
            return r(t.dataTypes[0]) || !i["*"] && r("*")
        }

        function Wt(e, t) { var d, n, i = C.ajaxSettings.flatOptions || {}; for (d in t) void 0 !== t[d] && ((i[d] ? e : n || (n = {}))[d] = t[d]); return n && C.extend(!0, e, n), e }
        qt.href = Tt.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ft, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(e, t) { return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e) },
            ajaxPrefilter: Gt(zt),
            ajaxTransport: Gt(Ht),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var n, i, o, a, s, l, u, c, p, f, $ = C.ajaxSetup({}, t),
                    h = $.context || $,
                    g = $.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                    m = C.Deferred(),
                    b = C.Callbacks("once memory"),
                    y = $.statusCode || {},
                    v = {},
                    x = {},
                    w = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (u) {
                                if (!a)
                                    for (a = {}; t = Ot.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = a[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() { return u ? o : null },
                        setRequestHeader: function(e, t) { return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, v[e] = t), this },
                        overrideMimeType: function(e) { return null == u && ($.mimeType = e), this },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (u) _.always(e[_.status]);
                                else
                                    for (t in e) y[t] = [y[t], e[t]];
                            return this
                        },
                        abort: function(e) { var t = e || w; return n && n.abort(t), k(0, t), this }
                    };
                if (m.promise(_), $.url = ((e || $.url || Tt.href) + "").replace(Rt, Tt.protocol + "//"), $.type = t.method || t.type || $.method || $.type, $.dataTypes = ($.dataType || "*").toLowerCase().match(B) || [""], null == $.crossDomain) { l = r.createElement("a"); try { l.href = $.url, l.href = l.href, $.crossDomain = qt.protocol + "//" + qt.host != l.protocol + "//" + l.host } catch (e) { $.crossDomain = !0 } }
                if ($.data && $.processData && "string" != typeof $.data && ($.data = C.param($.data, $.traditional)), Ut(zt, $, t, _), u) return _;
                for (p in (c = C.event && $.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), $.type = $.type.toUpperCase(), $.hasContent = !Bt.test($.type), i = $.url.replace(jt, ""), $.hasContent ? $.data && $.processData && 0 === ($.contentType || "").indexOf("application/x-www-form-urlencoded") && ($.data = $.data.replace(Mt, "+")) : (f = $.url.slice(i.length), $.data && ($.processData || "string" == typeof $.data) && (i += (Et.test(i) ? "&" : "?") + $.data, delete $.data), !1 === $.cache && (i = i.replace(Pt, "$1"), f = (Et.test(i) ? "&" : "?") + "_=" + St++ + f), $.url = i + f), $.ifModified && (C.lastModified[i] && _.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && _.setRequestHeader("If-None-Match", C.etag[i])), ($.data && $.hasContent && !1 !== $.contentType || t.contentType) && _.setRequestHeader("Content-Type", $.contentType), _.setRequestHeader("Accept", $.dataTypes[0] && $.accepts[$.dataTypes[0]] ? $.accepts[$.dataTypes[0]] + ("*" !== $.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : $.accepts["*"]), $.headers) _.setRequestHeader(p, $.headers[p]);
                if ($.beforeSend && (!1 === $.beforeSend.call(h, _, $) || u)) return _.abort();
                if (w = "abort", b.add($.complete), _.done($.success), _.fail($.error), n = Ut(Ht, $, t, _)) {
                    if (_.readyState = 1, c && g.trigger("ajaxSend", [_, $]), u) return _;
                    $.async && $.timeout > 0 && (s = d.setTimeout((function() { _.abort("timeout") }), $.timeout));
                    try { u = !1, n.send(v, k) } catch (e) {
                        if (u) throw e;
                        k(-1, e)
                    }
                } else k(-1, "No Transport");

                function k(e, t, r, a) {
                    var l, p, f, v, x, w = t;
                    u || (u = !0, s && d.clearTimeout(s), n = void 0, o = a || "", _.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, r && (v = function(e, t, d) {
                        for (var n, i, o, r, a = e.contents, s = e.dataTypes;
                            "*" === s[0];) s.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (n)
                            for (i in a)
                                if (a[i] && a[i].test(n)) { s.unshift(i); break }
                        if (s[0] in d) o = s[0];
                        else {
                            for (i in d) {
                                if (!s[0] || e.converters[i + " " + s[0]]) { o = i; break }
                                r || (r = i)
                            }
                            o = o || r
                        }
                        if (o) return o !== s[0] && s.unshift(o), d[o]
                    }($, _, r)), v = function(e, t, d, n) {
                        var i, o, r, a, s, l = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (r in e.converters) l[r.toLowerCase()] = e.converters[r];
                        for (o = u.shift(); o;)
                            if (e.responseFields[o] && (d[e.responseFields[o]] = t), !s && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = o, o = u.shift())
                                if ("*" === o) o = s;
                                else if ("*" !== s && s !== o) {
                            if (!(r = l[s + " " + o] || l["* " + o]))
                                for (i in l)
                                    if ((a = i.split(" "))[1] === o && (r = l[s + " " + a[0]] || l["* " + a[0]])) {!0 === r ? r = l[i] : !0 !== l[i] && (o = a[0], u.unshift(a[1])); break }
                            if (!0 !== r)
                                if (r && e.throws) t = r(t);
                                else try { t = r(t) } catch (e) { return { state: "parsererror", error: r ? e : "No conversion from " + s + " to " + o } }
                        }
                        return { state: "success", data: t }
                    }($, v, _, l), l ? ($.ifModified && ((x = _.getResponseHeader("Last-Modified")) && (C.lastModified[i] = x), (x = _.getResponseHeader("etag")) && (C.etag[i] = x)), 204 === e || "HEAD" === $.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = v.state, p = v.data, l = !(f = v.error))) : (f = w, !e && w || (w = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || w) + "", l ? m.resolveWith(h, [p, w, _]) : m.rejectWith(h, [_, w, f]), _.statusCode(y), y = void 0, c && g.trigger(l ? "ajaxSuccess" : "ajaxError", [_, $, l ? p : f]), b.fireWith(h, [_, w]), c && (g.trigger("ajaxComplete", [_, $]), --C.active || C.event.trigger("ajaxStop")))
                }
                return _
            },
            getJSON: function(e, t, d) { return C.get(e, t, d, "json") },
            getScript: function(e, t) { return C.get(e, void 0, t, "script") }
        }), C.each(["get", "post"], (function(e, t) { C[t] = function(e, d, n, i) { return b(d) && (i = i || n, n = d, d = void 0), C.ajax(C.extend({ url: e, type: t, dataType: i, data: d, success: n }, C.isPlainObject(e) && e)) } })), C._evalUrl = function(e, t) { return C.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { C.globalEval(e, t) } }) }, C.fn.extend({
            wrapAll: function(e) { var t; return this[0] && (b(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e })).append(this)), this },
            wrapInner: function(e) {
                return b(e) ? this.each((function(t) { C(this).wrapInner(e.call(this, t)) })) : this.each((function() {
                    var t = C(this),
                        d = t.contents();
                    d.length ? d.wrapAll(e) : t.append(e)
                }))
            },
            wrap: function(e) { var t = b(e); return this.each((function(d) { C(this).wrapAll(t ? e.call(this, d) : e) })) },
            unwrap: function(e) { return this.parent(e).not("body").each((function() { C(this).replaceWith(this.childNodes) })), this }
        }), C.expr.pseudos.hidden = function(e) { return !C.expr.pseudos.visible(e) }, C.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, C.ajaxSettings.xhr = function() { try { return new d.XMLHttpRequest } catch (e) {} };
        var Kt = { 0: 200, 1223: 204 },
            Vt = C.ajaxSettings.xhr();
        m.cors = !!Vt && "withCredentials" in Vt, m.ajax = Vt = !!Vt, C.ajaxTransport((function(e) {
            var t, n;
            if (m.cors || Vt && !e.crossDomain) return {
                send: function(i, o) {
                    var r, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) a[r] = e.xhrFields[r];
                    for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(r, i[r]);
                    t = function(e) { return function() { t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Kt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())) } }, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() { 4 === a.readyState && d.setTimeout((function() { t && n() })) }, t = t("abort");
                    try { a.send(e.hasContent && e.data || null) } catch (e) { if (t) throw e }
                },
                abort: function() { t && t() }
            }
        })), C.ajaxPrefilter((function(e) { e.crossDomain && (e.contents.script = !1) })), C.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return C.globalEval(e), e } } }), C.ajaxPrefilter("script", (function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") })), C.ajaxTransport("script", (function(e) { var t, d; if (e.crossDomain || e.scriptAttrs) return { send: function(n, i) { t = C("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", d = function(e) { t.remove(), d = null, e && i("error" === e.type ? 404 : 200, e.type) }), r.head.appendChild(t[0]) }, abort: function() { d && d() } } }));
        var Yt, Zt = [],
            Xt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Zt.pop() || C.expando + "_" + St++; return this[e] = !0, e } }), C.ajaxPrefilter("json jsonp", (function(e, t, n) { var i, o, r, a = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() { return r || C.error(i + " was not called"), r[0] }, e.dataTypes[0] = "json", o = d[i], d[i] = function() { r = arguments }, n.always((function() { void 0 === o ? C(d).removeProp(i) : d[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Zt.push(i)), r && b(o) && o(r[0]), r = o = void 0 })), "script" })), m.createHTMLDocument = ((Yt = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), C.parseHTML = function(e, t, d) { return "string" != typeof e ? [] : ("boolean" == typeof t && (d = t, t = !1), t || (m.createHTMLDocument ? ((n = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(n)) : t = r), o = !d && [], (i = I.exec(e)) ? [t.createElement(i[1])] : (i = _e([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes))); var n, i, o }, C.fn.load = function(e, t, d) {
            var n, i, o, r = this,
                a = e.indexOf(" ");
            return a > -1 && (n = vt(e.slice(a)), e = e.slice(0, a)), b(t) ? (d = t, t = void 0) : t && "object" == typeof t && (i = "POST"), r.length > 0 && C.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done((function(e) { o = arguments, r.html(n ? C("<div>").append(C.parseHTML(e)).find(n) : e) })).always(d && function(e, t) { r.each((function() { d.apply(this, o || [e.responseText, t, e]) })) }), this
        }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) { C.fn[t] = function(e) { return this.on(t, e) } })), C.expr.pseudos.animated = function(e) { return C.grep(C.timers, (function(t) { return e === t.elem })).length }, C.offset = {
            setOffset: function(e, t, d) {
                var n, i, o, r, a, s, l = C.css(e, "position"),
                    u = C(e),
                    c = {};
                "static" === l && (e.style.position = "relative"), a = u.offset(), o = C.css(e, "top"), s = C.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + s).indexOf("auto") > -1 ? (r = (n = u.position()).top, i = n.left) : (r = parseFloat(o) || 0, i = parseFloat(s) || 0), b(t) && (t = t.call(e, d, C.extend({}, a))), null != t.top && (c.top = t.top - a.top + r), null != t.left && (c.left = t.left - a.left + i), "using" in t ? t.using.call(e, c) : u.css(c)
            }
        }, C.fn.extend({
            offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each((function(t) { C.offset.setOffset(this, e, t) })); var t, d, n = this[0]; return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), d = n.ownerDocument.defaultView, { top: t.top + d.pageYOffset, left: t.left + d.pageXOffset }) : { top: 0, left: 0 } : void 0 },
            position: function() {
                if (this[0]) {
                    var e, t, d, n = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === C.css(n, "position")) t = n.getBoundingClientRect();
                    else {
                        for (t = this.offset(), d = n.ownerDocument, e = n.offsetParent || d.documentElement; e && (e === d.body || e === d.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== n && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return { top: t.top - i.top - C.css(n, "marginTop", !0), left: t.left - i.left - C.css(n, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map((function() { for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent; return e || re })) }
        }), C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, (function(e, t) {
            var d = "pageYOffset" === t;
            C.fn[e] = function(n) {
                return U(this, (function(e, n, i) {
                    var o;
                    if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[n];
                    o ? o.scrollTo(d ? o.pageXOffset : i, d ? i : o.pageYOffset) : e[n] = i
                }), e, n, arguments.length)
            }
        })), C.each(["top", "left"], (function(e, t) { C.cssHooks[t] = Ve(m.pixelPosition, (function(e, d) { if (d) return d = Ke(e, t), Ge.test(d) ? C(e).position()[t] + "px" : d })) })), C.each({ Height: "height", Width: "width" }, (function(e, t) {
            C.each({ padding: "inner" + e, content: t, "": "outer" + e }, (function(d, n) {
                C.fn[n] = function(i, o) {
                    var r = arguments.length && (d || "boolean" != typeof i),
                        a = d || (!0 === i || !0 === o ? "margin" : "border");
                    return U(this, (function(t, d, i) { var o; return y(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, d, a) : C.style(t, d, i, a) }), t, r ? i : void 0, r)
                }
            }))
        })), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) { C.fn[t] = function(e, d) { return arguments.length > 0 ? this.on(t, null, e, d) : this.trigger(t) } })), C.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), C.fn.extend({ bind: function(e, t, d) { return this.on(e, null, t, d) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, d, n) { return this.on(t, e, d, n) }, undelegate: function(e, t, d) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", d) } }), C.proxy = function(e, t) { var d, n, i; if ("string" == typeof t && (d = e[t], t = e, e = d), b(e)) return n = s.call(arguments, 2), (i = function() { return e.apply(t || this, n.concat(s.call(arguments))) }).guid = e.guid = e.guid || C.guid++, i }, C.holdReady = function(e) { e ? C.readyWait++ : C.ready(!0) }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = L, C.isFunction = b, C.isWindow = y, C.camelCase = Y, C.type = w, C.now = Date.now, C.isNumeric = function(e) { var t = C.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, void 0 === (n = function() { return C }.apply(t, [])) || (e.exports = n);
        var Jt = d.jQuery,
            Qt = d.$;
        return C.noConflict = function(e) { return d.$ === C && (d.$ = Qt), e && d.jQuery === C && (d.jQuery = Jt), C }, i || (d.jQuery = d.$ = C), C
    }))
}, function(e, t, d) {
    var n = d(11);
    "string" == typeof n && (n = [
        [e.i, n, ""]
    ]);
    var i = { insert: "head", singleton: !1 };
    d(1)(n, i);
    n.locals && (e.exports = n.locals)
}, function(e, t, d) {
    (e.exports = d(0)(!1)).push([e.i, "", ""])
}, function(e, t) {
    ! function() {
        var e = this || self;

        function t(e) { return "string" == typeof e }

        function d(t, d) {
            t = t.split(".");
            var n, i = e;
            t[0] in i || void 0 === i.execScript || i.execScript("var " + t[0]);
            for (; t.length && (n = t.shift());) t.length || void 0 === d ? i = i[n] && i[n] !== Object.prototype[n] ? i[n] : i[n] = {} : i[n] = d
        }

        function n(e, t) {
            function d() {}
            d.prototype = t.prototype, e.o = t.prototype, e.prototype = new d, e.prototype.constructor = e
        }
        var i = Array.prototype.indexOf ? function(e, t, d) { return Array.prototype.indexOf.call(e, t, d) } : function(e, d, n) {
            if (n = null == n ? 0 : 0 > n ? Math.max(0, e.length + n) : n, t(e)) return t(d) && 1 == d.length ? e.indexOf(d, n) : -1;
            for (; n < e.length; n++)
                if (n in e && e[n] === d) return n;
            return -1
        };

        function o(e, t) { e.sort(t || r) }

        function r(e, t) { return e > t ? 1 : e < t ? -1 : 0 }

        function a(e, t) {
            switch (this.a = e, this.h = !!t.i, this.c = t.b, this.m = t.type, this.l = !1, this.c) {
                case u:
                case c:
                case p:
                case f:
                case $:
                case l:
                case s:
                    this.l = !0
            }
            this.g = t.defaultValue
        }
        var s = 1,
            l = 2,
            u = 3,
            c = 4,
            p = 6,
            f = 16,
            $ = 18;

        function h(e, t) {
            for (this.c = e, this.a = {}, e = 0; e < t.length; e++) {
                var d = t[e];
                this.a[d.a] = d
            }
        }

        function g() { this.a = {}, this.g = this.f().a, this.c = this.h = null }

        function m(e, t) {
            for (var d = function(e) {
                    return o(e = function(e) {
                        var t, d = [],
                            n = 0;
                        for (t in e) d[n++] = e[t];
                        return d
                    }(e.a), (function(e, t) { return e.a - t.a })), e
                }(e.f()), n = 0; n < d.length; n++) {
                var i = d[n],
                    r = i.a;
                if (null != t.a[r]) { e.c && delete e.c[i.a]; var a = 11 == i.c || 10 == i.c; if (i.h) { i = x(t, r); for (var s = 0; s < i.length; s++) _(e, r, a ? i[s].clone() : i[s]) } else i = b(t, r), a ? (a = b(e, r)) ? m(a, i) : C(e, r, i.clone()) : C(e, r, i) }
            }
        }

        function b(e, t) {
            var d = e.a[t];
            if (null == d) return null;
            if (e.h) {
                if (!(t in e.c)) {
                    var n = e.h,
                        i = e.g[t];
                    if (null != d)
                        if (i.h) {
                            for (var o = [], r = 0; r < d.length; r++) o[r] = n.c(i, d[r]);
                            d = o
                        } else d = n.c(i, d);
                    return e.c[t] = d
                }
                return e.c[t]
            }
            return d
        }

        function y(e, t, d) { var n = b(e, t); return e.g[t].h ? n[d || 0] : n }

        function v(e, t) {
            if (null != e.a[t]) e = y(e, t, void 0);
            else e: {
                if (void 0 === (e = e.g[t]).g)
                    if ((t = e.m) === Boolean) e.g = !1;
                    else if (t === Number) e.g = 0;
                else {
                    if (t !== String) { e = new t; break e }
                    e.g = e.l ? "0" : ""
                }
                e = e.g
            }
            return e
        }

        function x(e, t) { return b(e, t) || [] }

        function w(e, t) { return e.g[t].h ? null != e.a[t] ? e.a[t].length : 0 : null != e.a[t] ? 1 : 0 }

        function C(e, t, d) { e.a[t] = d, e.c && (e.c[t] = d) }

        function _(e, t, d) { e.a[t] || (e.a[t] = []), e.a[t].push(d), e.c && delete e.c[t] }

        function k(e, t) { var d, n = []; for (d in t) 0 != d && n.push(new a(d, t[d])); return new h(e, n) }

        function T() {}
        g.prototype.has = function(e) { return null != this.a[e.a] }, g.prototype.get = function(e, t) { return y(this, e.a, t) }, g.prototype.set = function(e, t) { C(this, e.a, t) }, g.prototype.add = function(e, t) { _(this, e.a, t) }, g.prototype.clone = function() { var e = new this.constructor; return e != this && (e.a = {}, e.c && (e.c = {}), m(e, this)), e }, T.prototype.a = function(e) { throw new e.c, Error("Unimplemented") }, T.prototype.c = function(e, d) { if (11 == e.c || 10 == e.c) return d instanceof g ? d : this.a(e.m.prototype.f(), d); if (14 == e.c) return t(d) && S.test(d) && 0 < (e = Number(d)) ? e : d; if (!e.l) return d; if ((e = e.m) === String) { if ("number" == typeof d) return String(d) } else if (e === Number && t(d) && ("Infinity" === d || "-Infinity" === d || "NaN" === d || S.test(d))) return Number(d); return d };
        var S = /^-?[0-9]+$/;

        function E() {}

        function N() {}

        function L(e, t) { null != e && this.a.apply(this, arguments) }

        function I() { g.call(this) }
        n(E, T), E.prototype.a = function(e, t) { return (e = new e.c).h = this, e.a = t, e.c = {}, e }, n(N, E), N.prototype.c = function(e, t) { return 8 == e.c ? !!t : T.prototype.c.apply(this, arguments) }, N.prototype.a = function(e, t) { return N.o.a.call(this, e, t) }, L.prototype.c = "", L.prototype.set = function(e) { this.c = "" + e }, L.prototype.a = function(e, t, d) {
            if (this.c += String(e), null != t)
                for (var n = 1; n < arguments.length; n++) this.c += arguments[n];
            return this
        }, L.prototype.toString = function() { return this.c }, n(I, g);
        var A = null;

        function D() { g.call(this) }
        n(D, g);
        var M = null;

        function j() { g.call(this) }
        n(j, g);
        var P = null;

        function O() { g.call(this) }
        I.prototype.f = function() { var e = A; return e || (A = e = k(I, { 0: { name: "NumberFormat", j: "i18n.phonenumbers.NumberFormat" }, 1: { name: "pattern", required: !0, b: 9, type: String }, 2: { name: "format", required: !0, b: 9, type: String }, 3: { name: "leading_digits_pattern", i: !0, b: 9, type: String }, 4: { name: "national_prefix_formatting_rule", b: 9, type: String }, 6: { name: "national_prefix_optional_when_formatting", b: 8, defaultValue: !1, type: Boolean }, 5: { name: "domestic_carrier_code_formatting_rule", b: 9, type: String } })), e }, I.f = I.prototype.f, D.prototype.f = function() { var e = M; return e || (M = e = k(D, { 0: { name: "PhoneNumberDesc", j: "i18n.phonenumbers.PhoneNumberDesc" }, 2: { name: "national_number_pattern", b: 9, type: String }, 9: { name: "possible_length", i: !0, b: 5, type: Number }, 10: { name: "possible_length_local_only", i: !0, b: 5, type: Number }, 6: { name: "example_number", b: 9, type: String } })), e }, D.f = D.prototype.f, j.prototype.f = function() { var e = P; return e || (P = e = k(j, { 0: { name: "PhoneMetadata", j: "i18n.phonenumbers.PhoneMetadata" }, 1: { name: "general_desc", b: 11, type: D }, 2: { name: "fixed_line", b: 11, type: D }, 3: { name: "mobile", b: 11, type: D }, 4: { name: "toll_free", b: 11, type: D }, 5: { name: "premium_rate", b: 11, type: D }, 6: { name: "shared_cost", b: 11, type: D }, 7: { name: "personal_number", b: 11, type: D }, 8: { name: "voip", b: 11, type: D }, 21: { name: "pager", b: 11, type: D }, 25: { name: "uan", b: 11, type: D }, 27: { name: "emergency", b: 11, type: D }, 28: { name: "voicemail", b: 11, type: D }, 29: { name: "short_code", b: 11, type: D }, 30: { name: "standard_rate", b: 11, type: D }, 31: { name: "carrier_specific", b: 11, type: D }, 33: { name: "sms_services", b: 11, type: D }, 24: { name: "no_international_dialling", b: 11, type: D }, 9: { name: "id", required: !0, b: 9, type: String }, 10: { name: "country_code", b: 5, type: Number }, 11: { name: "international_prefix", b: 9, type: String }, 17: { name: "preferred_international_prefix", b: 9, type: String }, 12: { name: "national_prefix", b: 9, type: String }, 13: { name: "preferred_extn_prefix", b: 9, type: String }, 15: { name: "national_prefix_for_parsing", b: 9, type: String }, 16: { name: "national_prefix_transform_rule", b: 9, type: String }, 18: { name: "same_mobile_and_fixed_line_pattern", b: 8, defaultValue: !1, type: Boolean }, 19: { name: "number_format", i: !0, b: 11, type: I }, 20: { name: "intl_number_format", i: !0, b: 11, type: I }, 22: { name: "main_country_for_code", b: 8, defaultValue: !1, type: Boolean }, 23: { name: "leading_digits", b: 9, type: String }, 26: { name: "leading_zero_possible", b: 8, defaultValue: !1, type: Boolean } })), e }, j.f = j.prototype.f, n(O, g);
        var B = null,
            R = { $: 0, w: 1, v: 5, u: 10, s: 20 };
        O.prototype.f = function() { var e = B; return e || (B = e = k(O, { 0: { name: "PhoneNumber", j: "i18n.phonenumbers.PhoneNumber" }, 1: { name: "country_code", required: !0, b: 5, type: Number }, 2: { name: "national_number", required: !0, b: 4, type: Number }, 3: { name: "extension", b: 9, type: String }, 4: { name: "italian_leading_zero", b: 8, type: Boolean }, 8: { name: "number_of_leading_zeros", b: 5, defaultValue: 1, type: Number }, 5: { name: "raw_input", b: 9, type: String }, 6: { name: "country_code_source", b: 14, defaultValue: 0, type: R }, 7: { name: "preferred_domestic_carrier_code", b: 9, type: String } })), e }, O.ctor = O, O.ctor.f = O.prototype.f;
        var z = { 1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "), 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 800: ["001"], 808: ["001"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 870: ["001"], 878: ["001"], 880: ["BD"], 881: ["001"], 882: ["001"], 883: ["001"], 886: ["TW"], 888: ["001"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 979: ["001"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] },
            H = {
                AC: [, [, , "(?:[01589]\\d|[46])\\d{4}", , , , , , , [5, 6]],
                    [, , "6[2-467]\\d{3}", , , , "62889", , , [5]],
                    [, , "4\\d{4}", , , , "40123", , , [5]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "AC", 247, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "(?:0[1-9]|[1589]\\d)\\d{4}", , , , "542011", , , [6]], , , [, , , , , , , , , [-1]]
                ],
                AD: [, [, , "(?:1|6\\d)\\d{7}|[136-9]\\d{5}", , , , , , , [6, 8, 9]],
                    [, , "[78]\\d{5}", , , , "712345", , , [6]],
                    [, , "690\\d{6}|[36]\\d{5}", , , , "312345", , , [6, 9]],
                    [, , "180[02]\\d{4}", , , , "18001234", , , [8]],
                    [, , "[19]\\d{5}", , , , "912345", , , [6]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "AD", 376, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{3})", "$1 $2", ["[136-9]"]],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["1"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                    ], , [, , , , , , , , , [-1]], , , [, , "1800\\d{4}", , , , , , , [8]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                AE: [, [, , "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", , , , , , , [5, 6, 7, 8, 9, 10, 11, 12]],
                    [, , "[2-4679][2-8]\\d{6}", , , , "22345678", , , [8],
                        [7]
                    ],
                    [, , "5[024-68]\\d{7}", , , , "501234567", , , [9]],
                    [, , "400\\d{6}|800\\d{2,9}", , , , "800123456"],
                    [, , "900[02]\\d{5}", , , , "900234567", , , [9]],
                    [, , "700[05]\\d{5}", , , , "700012345", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "AE", 971, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"],
                        [, "(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "600[25]\\d{5}", , , , "600212345", , , [9]], , , [, , , , , , , , , [-1]]
                ],
                AF: [, [, , "[2-7]\\d{8}", , , , , , , [9],
                        [7]
                    ],
                    [, , "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}", , , , "234567890", , , , [7]],
                    [, , "7(?:[014-9]\\d|2[89]|3[01])\\d{6}", , , , "701234567"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "AF", 93, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                    ],
                    [
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                AG: [, [, , "(?:268|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", , , , "2684601234", , , , [7]],
                    [, , "268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}", , , , "2684641234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , "26848[01]\\d{4}", , , , "2684801234", , , , [7]], "AG", 1, "011", "1", , , "1|([457]\\d{6})$", "268$1", , , , , [, , "26840[69]\\d{4}", , , , "2684061234", , , , [7]], , "268", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                AI: [, [, , "(?:264|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "2644(?:6[12]|9[78])\\d{4}", , , , "2644612345", , , , [7]],
                    [, , "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", , , , "2642351234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "AI", 1, "011", "1", , , "1|([2457]\\d{6})$", "264$1", , , , , [, , , , , , , , , [-1]], , "264", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                AL: [, [, , "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", , , , , , , [6, 7, 8, 9],
                        [5]
                    ],
                    [, , "(?:[2358](?:[16-9]\\d[2-9]|[2-5][2-9]\\d)|4(?:[2-57-9][2-9]|6\\d)\\d)\\d{4}", , , , "22345678", , , [8],
                        [5, 6, 7]
                    ],
                    [, , "6(?:[689][2-9]|7[2-6])\\d{6}", , , , "662123456", , , [9]],
                    [, , "800\\d{4}", , , , "8001234", , , [7]],
                    [, , "900[1-9]\\d\\d", , , , "900123", , , [6]],
                    [, , "808[1-9]\\d\\d", , , , "808123", , , [6]],
                    [, , "700[2-9]\\d{4}", , , , "70021234", , , [8]],
                    [, , , , , , , , , [-1]], "AL", 355, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"],
                        [, "(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                AM: [, [, , "(?:[1-489]\\d|55|60|77)\\d{6}", , , , , , , [8],
                        [5, 6]
                    ],
                    [, , "(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}", , , , "10123456", , , , [5, 6]],
                    [, , "(?:33|4[1349]|55|77|88|9[13-9])\\d{6}", , , , "77123456"],
                    [, , "800\\d{5}", , , , "80012345"],
                    [, , "90[016]\\d{5}", , , , "90012345"],
                    [, , "80[1-4]\\d{5}", , , , "80112345"],
                    [, , , , , , , , , [-1]],
                    [, , "60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}", , , , "60271234"], "AM", 374, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
                        [, "(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
                        [, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                        [, "(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                AO: [, [, , "[29]\\d{8}", , , , , , , [9]],
                    [, , "2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}", , , , "222123456"],
                    [, , "9[1-49]\\d{7}", , , , "923123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "AO", 244, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                AR: [, [, , "11\\d{8}|(?:[2368]|9\\d)\\d{9}", , , , , , , [10, 11],
                        [6, 7, 8]
                    ],
                    [, , "(?:2(?:646[0-46-9]|9(?:45[02-69]|54[2-8]))|3(?:4(?:3(?:5[0-7]|6[1-69])|5(?:4[0-4679]|[56][024-6]))|585[013-7]|7(?:(?:1[15]|81)[46]|77[2-8])|8(?:(?:21|4[16]|9[12])[46]|35[124-6]|5(?:5[0-46-9]|6[0-246-9])|6(?:5[2-8]|9[46])|86[0-68])))\\d{5}|(?:2(?:284|657|9(?:20|66))|3(?:4(?:8[27]|92)|755|878))[2-7]\\d{5}|(?:2(?:2(?:2[59]|44|52)|3(?:26|4[24])|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:(?:26|62)2|3(?:02|2[03])|477|9(?:42|83))|3(?:4(?:[47]6|62|89)|5(?:41|64)|873))[2-6]\\d{5}|(?:(?:11[2-7]|670)\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-7]|[346][45])|80[45]|9(?:[17][4-6]|44|8[45]|9[3-6]))|3(?:364|4(?:1[2-7]|2[4-6]|[38]4)|5(?:1[2-8]|3[4-6]|8[46])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|1[2-6]|34|5[34]|7[24-6]|8[3-5])))\\d{6}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:329|4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])|888))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|[24]5|5[25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}", , , , "1123456789", , , [10],
                        [6, 7, 8]
                    ],
                    [, , "9(?:2(?:646[0-46-9]|9(?:45[02-69]|54[2-8]))|3(?:4(?:3(?:5[0-7]|6[1-69])|5(?:4[0-4679]|[56][024-6]))|585[013-7]|7(?:(?:1[15]|81)[46]|77[2-8])|8(?:(?:21|4[16]|9[12])[46]|35[124-6]|5(?:5[0-46-9]|6[0-246-9])|6(?:5[2-8]|9[46])|86[0-68])))\\d{5}|9(?:2(?:284|657|9(?:20|66))|3(?:4(?:8[27]|92)|755|878))[2-7]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|4[24])|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:(?:26|62)2|3(?:02|2[03])|477|9(?:42|83))|3(?:4(?:[47]6|62|89)|5(?:41|64)|873))[2-6]\\d{5}|(?:675\\d|9(?:11[2-7]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-7]|[346][45])|80[45]|9(?:[17][4-6]|44|8[45]|9[3-6]))|3(?:364|4(?:1[2-7]|2[4-6]|[38]4)|5(?:1[2-8]|3[4-6]|8[46])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|1[2-6]|34|5[34]|7[24-6]|8[3-5]))))\\d{6}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:329|4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])|888))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|[24]5|5[25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}", , , , "91123456789", , , , [6, 7, 8]],
                    [, , "800\\d{7}", , , , "8001234567", , , [10]],
                    [, , "60[04579]\\d{7}", , , , "6001234567", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "AR", 54, "00", "0", , , "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1", , , [
                        [, "(\\d{3})", "$1", ["[09]|1(?:[02]|1[02-5])"]],
                        [, "(\\d{2})(\\d{4})", "$1-$2", ["[2-7]|8[0-7]"]],
                        [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-7]|8[013-8]"]],
                        [, "(\\d{4})(\\d{4})", "$1-$2", ["2[0-8]|[3-7]"]],
                        [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", , 1],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                        [, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1"],
                        [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1"]
                    ],
                    [
                        [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", , 1],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                        [, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"]],
                        [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["91"]],
                        [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9"]]
                    ],
                    [, , , , , , , , , [-1]], , , [, , "810\\d{7}", , , , , , , [10]],
                    [, , "810\\d{7}", , , , "8101234567", , , [10]], , , [, , , , , , , , , [-1]]
                ],
                AS: [, [, , "(?:[58]\\d\\d|684|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "6846(?:22|33|44|55|77|88|9[19])\\d{4}", , , , "6846221234", , , , [7]],
                    [, , "684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}", , , , "6847331234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "AS", 1, "011", "1", , , "1|([267]\\d{6})$", "684$1", , , , , [, , , , , , , , , [-1]], , "684", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                AT: [, [, , "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                        [3]
                    ],
                    [, , "1(?:11\\d|[2-9]\\d{3,11})|(?:316|463|(?:51|66|73)2)\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-8]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}", , , , "1234567890", , , , [3]],
                    [, , "6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", , , , "664123456", , , [7, 8, 9, 10, 11, 12, 13]],
                    [, , "800\\d{6,10}", , , , "800123456", , , [9, 10, 11, 12, 13]],
                    [, , "9(?:0[01]|3[019])\\d{6,10}", , , , "900123456", , , [9, 10, 11, 12, 13]],
                    [, , "8(?:10|2[018])\\d{6,10}|828\\d{5}", , , , "810123456", , , [8, 9, 10, 11, 12, 13]],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}", , , , "780123456", , , [5, 6, 7, 8, 9, 10, 11, 12, 13]], "AT", 43, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                        [, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                        [, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                        [, "(\\d{6})", "$1", ["1"]],
                        [, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                        [, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                        [, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                    ],
                    [
                        [, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                        [, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                        [, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                        [, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                        [, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                        [, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                AU: [, [, , "1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|(?:[2-478]\\d\\d|550)\\d{6}|1\\d{4,7}", , , , , , , [5, 6, 7, 8, 9, 10]],
                    [, , "(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}", , , , "212345678", , , [9],
                        [8]
                    ],
                    [, , "483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", , , , "412345678", , , [9]],
                    [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
                    [, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]],
                    [, , "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", , , , "1300123456", , , [6, 8, 10]],
                    [, , , , , , , , , [-1]],
                    [, , "(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}", , , , "550123456", , , [9]], "AU", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "0|(183[12])", , "0011", , [
                        [, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["13"]],
                        [, "(\\d{3})(\\d{3})", "$1 $2", ["19"]],
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["180", "1802"]],
                        [, "(\\d{4})(\\d{3,4})", "$1 $2", ["19"]],
                        [, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                        [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)", "$CC ($1)"],
                        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                    ],
                    [
                        [, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                        [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)", "$CC ($1)"],
                        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]
                    ],
                    [, , "16\\d{3,7}", , , , "1612345", , , [5, 6, 7, 8, 9]], 1, , [, , "1[38]00\\d{6}|1(?:345[0-4]|802)\\d{3}|13\\d{4}", , , , , , , [6, 7, 8, 10]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                AW: [, [, , "(?:[25-79]\\d\\d|800)\\d{4}", , , , , , , [7]],
                    [, , "5(?:2\\d|8[1-9])\\d{4}", , , , "5212345"],
                    [, , "(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}", , , , "5601234"],
                    [, , "800\\d{4}", , , , "8001234"],
                    [, , "900\\d{4}", , , , "9001234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "(?:28\\d|501)\\d{4}", , , , "5011234"], "AW", 297, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                AX: [, [, , "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|(?:[147]\\d|3[0-46-9]|50)\\d{4,8}", , , , , , , [5, 6, 7, 8, 9, 10]],
                    [, , "18[1-8]\\d{3,6}", , , , "181234567", , , [6, 7, 8, 9]],
                    [, , "(?:4[0-8]|50)\\d{4,8}", , , , "412345678", , , [6, 7, 8, 9, 10]],
                    [, , "800\\d{4,6}", , , , "800123456", , , [7, 8, 9]],
                    [, , "[67]00\\d{5,6}", , , , "600123456", , , [8, 9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "AX", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0", , , "0", , "00", , , , [, , , , , , , , , [-1]], , "18", [, , , , , , , , , [-1]],
                    [, , "(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d", , , , "10112345"], , , [, , , , , , , , , [-1]]
                ],
                AZ: [, [, , "(?:365\\d{3}|900200)\\d{3}|(?:[12457]\\d|60|88)\\d{7}", , , , , , , [9],
                        [7]
                    ],
                    [, , "365(?:[0-46-9]\\d|5[0-35-9])\\d{4}|(?:1[28]\\d|2(?:[045]2|1[24]|2[2-4]|33|6[23]))\\d{6}", , , , "123123456", , , , [7]],
                    [, , "36554\\d{4}|(?:4[04]|5[015]|60|7[07])\\d{7}", , , , "401234567"],
                    [, , "88\\d{7}", , , , "881234567"],
                    [, , "900200\\d{3}", , , , "900200123"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "AZ", 994, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[1-9]"]],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|365", "[12]|365", "[12]|365(?:[0-46-9]|5[0-35-9])"], "(0$1)"],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-8]"], "0$1"]
                    ],
                    [
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|365", "[12]|365", "[12]|365(?:[0-46-9]|5[0-35-9])"], "(0$1)"],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-8]"], "0$1"]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BA: [, [, , "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", , , , , , , [8, 9],
                        [6]
                    ],
                    [, , "(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}", , , , "30212345", , , [8],
                        [6]
                    ],
                    [, , "6(?:0(?:3\\d|40)|[1-356]\\d|44[0-6]|71[137])\\d{5}", , , , "61123456"],
                    [, , "8[08]\\d{6}", , , , "80123456", , , [8]],
                    [, , "9[0246]\\d{6}", , , , "90123456", , , [8]],
                    [, , "8[12]\\d{6}", , , , "82123456", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BA", 387, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{3})", "$1-$2", ["[2-9]"]],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                    ],
                    [
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "70(?:3[0146]|[56]0)\\d{4}", , , , "70341234", , , [8]], , , [, , , , , , , , , [-1]]
                ],
                BB: [, [, , "(?:246|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}", , , , "2464123456", , , , [7]],
                    [, , "246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}", , , , "2462501234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "(?:246976|900[2-9]\\d\\d)\\d{4}", , , , "9002123456", , , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , "24631\\d{5}", , , , "2463101234", , , , [7]], "BB", 1, "011", "1", , , "1|([2-9]\\d{6})$", "246$1", , , , , [, , , , , , , , , [-1]], , "246", [, , , , , , , , , [-1]],
                    [, , "246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}", , , , "2464301234", , , , [7]], , , [, , , , , , , , , [-1]]
                ],
                BD: [, [, , "[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}", , , , , , , [6, 7, 8, 9, 10]],
                    [, , "(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:4(?:31\\d\\d|[46]23)|5(?:222|32[37]))\\d{3}(?:\\d{2})?|(?:3(?:42[47]|529|823)|4(?:027|525|658)|(?:56|73)2|6257|9[35]1)\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|1[1-6]|2[0157-9]|3[1-69]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[01367]|7[15]|8[014-9]))|3(?:0(?:2[025-79]|3[2-4])|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|8(?:4[12]|[5-7]2)|9(?:[024]2|81))\\d{4}|(?:2[45]\\d\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:25|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[569]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:0|217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}", , , , "27111234"],
                    [, , "(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}", , , , "1812345678", , , [10]],
                    [, , "80[03]\\d{7}", , , , "8001234567", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}", , , , "9604123456", , , [10]], "BD", 880, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-7]|[459]1"], "0$1"],
                        [, "(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"],
                        [, "(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]"], "0$1"],
                        [, "(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BE: [, [, , "4\\d{8}|[1-9]\\d{7}", , , , , , , [8, 9]],
                    [, , "80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}", , , , "12345678", , , [8]],
                    [, , "4(?:5[56]|6[0135-8]|[79]\\d|8[3-9])\\d{6}", , , , "470123456", , , [9]],
                    [, , "800[1-9]\\d{4}", , , , "80012345", , , [8]],
                    [, , "(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}", , , , "90012345", , , [8]],
                    [, , "7879\\d{4}", , , , "78791234", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BE", 32, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "78(?:0[57]|1[0458]|2[25]|3[5-8]|48|[56]0|7[078])\\d{4}", , , , "78102345", , , [8]], , , [, , , , , , , , , [-1]]
                ],
                BF: [, [, , "[025-7]\\d{7}", , , , , , , [8]],
                    [, , "2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}", , , , "20491234"],
                    [, , "(?:0[17]|5[124-8]|[67]\\d)\\d{6}", , , , "70123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BF", 226, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BG: [, [, , "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", , , , , , , [6, 7, 8, 9],
                        [4, 5]
                    ],
                    [, , "2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}", , , , "2123456", , , [6, 7, 8],
                        [4, 5]
                    ],
                    [, , "43[07-9]\\d{5}|(?:48|8[7-9]\\d|9(?:8\\d|9[69]))\\d{6}", , , , "48123456", , , [8, 9]],
                    [, , "800\\d{5}", , , , "80012345", , , [8]],
                    [, , "90\\d{6}", , , , "90123456", , , [8]],
                    [, , "700\\d{5}", , , , "70012345", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BG", 359, "00", "0", , , "0", , , , [
                        [, "(\\d{6})", "$1", ["1"]],
                        [, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                    ],
                    [
                        [, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BH: [, [, , "[136-9]\\d{7}", , , , , , , [8]],
                    [, , "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9]|88)|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}", , , , "17001234"],
                    [, , "(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}", , , , "36001234"],
                    [, , "80\\d{6}", , , , "80123456"],
                    [, , "(?:87|9[014578])\\d{6}", , , , "90123456"],
                    [, , "84\\d{6}", , , , "84123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BH", 973, "00", , , , , , , , [
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[047]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BI: [, [, , "(?:[267]\\d|31)\\d{6}", , , , , , , [8]],
                    [, , "22\\d{6}", , , , "22201234"],
                    [, , "(?:29|31|6[189]|7[125-9])\\d{6}", , , , "79561234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BI", 257, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BJ: [, [, , "[2689]\\d{7}", , , , , , , [8]],
                    [, , "2(?:02|1[037]|2[45]|3[68])\\d{5}", , , , "20211234"],
                    [, , "(?:6\\d|9[013-9])\\d{6}", , , , "90011234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "857[58]\\d{4}", , , , "85751234"], "BJ", 229, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "81\\d{6}", , , , "81123456"], , , [, , , , , , , , , [-1]]
                ],
                BL: [, [, , "(?:590|69\\d)\\d{6}", , , , , , , [9]],
                    [, , "590(?:2[7-9]|5[12]|87)\\d{4}", , , , "590271234"],
                    [, , "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}", , , , "690001234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BL", 590, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BM: [, [, , "(?:441|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "441(?:2(?:02|23|[3479]\\d|61)|[46]\\d\\d|5(?:4\\d|60|89)|824)\\d{4}", , , , "4412345678", , , , [7]],
                    [, , "441(?:[37]\\d|5[0-39])\\d{5}", , , , "4413701234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "BM", 1, "011", "1", , , "1|([2-8]\\d{6})$", "441$1", , , , , [, , , , , , , , , [-1]], , "441", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BN: [, [, , "[2-578]\\d{6}", , , , , , , [7]],
                    [, , "22[0-7]\\d{4}|(?:2[013-9]|[3-5]\\d)\\d{5}", , , , "2345678"],
                    [, , "(?:22[89]|[78]\\d\\d)\\d{4}", , , , "7123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BN", 673, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BO: [, [, , "(?:[2-467]\\d{3}|80017)\\d{4}", , , , , , , [8, 9],
                        [7]
                    ],
                    [, , "(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}", , , , "22123456", , , [8],
                        [7]
                    ],
                    [, , "[67]\\d{7}", , , , "71234567", , , [8]],
                    [, , "80017\\d{4}", , , , "800171234", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BO", 591, "00(?:1\\d)?", "0", , , "0(1\\d)?", , , , [
                        [, "(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"], , "0$CC $1"],
                        [, "(\\d{8})", "$1", ["[67]"], , "0$CC $1"],
                        [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"], , "0$CC $1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BQ: [, [, , "(?:[34]1|7\\d)\\d{5}", , , , , , , [7]],
                    [, , "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}", , , , "7151234"],
                    [, , "(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}", , , , "3181234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BQ", 599, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "[347]", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BR: [, [, , "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", , , , , , , [8, 9, 10, 11]],
                    [, , "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", , , , "1123456789", , , [10],
                        [8]
                    ],
                    [, , "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}", , , , "11961234567", , , [10, 11],
                        [8, 9]
                    ],
                    [, , "800\\d{6,7}", , , , "800123456", , , [9, 10]],
                    [, , "300\\d{6}|[59]00\\d{6,7}", , , , "300123456", , , [9, 10]],
                    [, , "300\\d{7}|[34]00\\d{5}|4(?:02|37)0\\d{4}", , , , "40041234", , , [8, 10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0", , , "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", , , [
                        [, "(\\d{3,6})", "$1", ["1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])|321|610"]],
                        [, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
                        [, "(\\d{4})(\\d{4})", "$1-$2", ["[2-57]", "[2357]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))"]],
                        [, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                        [, "(\\d{5})(\\d{4})", "$1-$2", ["9"]],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)", "0 $CC ($1)"],
                        [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)", "0 $CC ($1)"]
                    ],
                    [
                        [, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]],
                        [, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)", "0 $CC ($1)"],
                        [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)", "0 $CC ($1)"]
                    ],
                    [, , , , , , , , , [-1]], , , [, , "4020\\d{4}|[34]00\\d{5}", , , , , , , [8]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BS: [, [, , "(?:242|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}", , , , "2423456789", , , , [7]],
                    [, , "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}", , , , "2423591234", , , , [7]],
                    [, , "242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456", , , , [7]],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "BS", 1, "011", "1", , , "1|([3-8]\\d{6})$", "242$1", , , , , [, , , , , , , , , [-1]], , "242", [, , , , , , , , , [-1]],
                    [, , "242225[0-46-9]\\d{3}", , , , "2422250123"], , , [, , , , , , , , , [-1]]
                ],
                BT: [, [, , "[17]\\d{7}|[2-8]\\d{6}", , , , , , , [7, 8],
                        [6]
                    ],
                    [, , "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", , , , "2345678", , , [7],
                        [6]
                    ],
                    [, , "(?:1[67]|77)\\d{6}", , , , "17123456", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BT", 975, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{3})", "$1 $2", ["[2-7]"]],
                        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                    ],
                    [
                        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BW: [, [, , "90\\d{5}|(?:[2-6]|7\\d)\\d{6}", , , , , , , [7, 8]],
                    [, , "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", , , , "2401234", , , [7]],
                    [, , "77200\\d{3}|7(?:[1-6]\\d|7[014-8])\\d{5}", , , , "71123456", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , "90\\d{5}", , , , "9012345", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "79(?:1(?:[01]\\d|20)|2[0-2]\\d)\\d{3}", , , , "79101234", , , [8]], "BW", 267, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{5})", "$1 $2", ["90"]],
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BY: [, [, , "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", , , , , , , [6, 7, 8, 9, 10, 11],
                        [5]
                    ],
                    [, , "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", , , , "152450911", , , [9],
                        [5, 6, 7]
                    ],
                    [, , "(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}", , , , "294911911", , , [9]],
                    [, , "800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}", , , , "8011234567"],
                    [, , "(?:810|902)\\d{7}", , , , "9021234567", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "249\\d{6}", , , , "249123456", , , [9]], "BY", 375, "810", "8", , , "0|80?", , "8~10", , [
                        [, "(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
                        [, "(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
                        [, "(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"],
                        [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]
                    ], , [, , , , , , , , , [-1]], , , [, , "800\\d{3,7}|(?:8(?:0[13]|10|20\\d)|902)\\d{7}"],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                BZ: [, [, , "(?:0800\\d|[2-8])\\d{6}", , , , , , , [7, 11]],
                    [, , "(?:236|732)\\d{4}|[2-578][02]\\d{5}", , , , "2221234", , , [7]],
                    [, , "6[0-35-7]\\d{5}", , , , "6221234", , , [7]],
                    [, , "0800\\d{7}", , , , "08001234123", , , [11]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "BZ", 501, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                        [, "(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CA: [, [, , "(?:[2-8]\\d|90)\\d{8}", , , , , , , [10],
                        [7]
                    ],
                    [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", , , , "5062345678", , , , [7]],
                    [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", , , , "5062345678", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}", , , , "5002345678"],
                    [, , "600[2-9]\\d{6}", , , , "6002012345"], "CA", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CC: [, [, , "1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}", , , , , , , [6, 7, 8, 9, 10]],
                    [, , "8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", , , , "891621234", , , [9],
                        [8]
                    ],
                    [, , "483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", , , , "412345678", , , [9]],
                    [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
                    [, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]],
                    [, , "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", , , , "1300123456", , , [6, 8, 10]],
                    [, , , , , , , , , [-1]],
                    [, , "(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}", , , , "550123456", , , [9]], "CC", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "0|([59]\\d{7})$", "8$1", "0011", , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CD: [, [, , "[189]\\d{8}|[1-68]\\d{6}", , , , , , , [7, 9]],
                    [, , "12\\d{7}|[1-6]\\d{6}", , , , "1234567"],
                    [, , "88\\d{5}|(?:8[0-2459]|9[017-9])\\d{7}", , , , "991234567"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "CD", 243, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                        [, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CF: [, [, , "(?:[27]\\d{3}|8776)\\d{4}", , , , , , , [8]],
                    [, , "2[12]\\d{6}", , , , "21612345"],
                    [, , "7[0257]\\d{6}", , , , "70012345"],
                    [, , , , , , , , , [-1]],
                    [, , "8776\\d{4}", , , , "87761234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "CF", 236, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CG: [, [, , "222\\d{6}|(?:0\\d|80)\\d{7}", , , , , , , [9]],
                    [, , "222[1-589]\\d{5}", , , , "222123456"],
                    [, , "0[14-6]\\d{7}", , , , "061234567"],
                    [, , , , , , , , , [-1]],
                    [, , "80(?:0\\d\\d|11[0-4])\\d{4}", , , , "800123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "CG", 242, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]],
                        [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CH: [, [, , "8\\d{11}|[2-9]\\d{8}", , , , , , , [9, 12]],
                    [, , "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", , , , "212345678", , , [9]],
                    [, , "7[35-9]\\d{7}", , , , "781234567", , , [9]],
                    [, , "800\\d{6}", , , , "800123456", , , [9]],
                    [, , "90[016]\\d{6}", , , , "900123456", , , [9]],
                    [, , "84[0248]\\d{6}", , , , "840123456", , , [9]],
                    [, , "878\\d{6}", , , , "878123456", , , [9]],
                    [, , , , , , , , , [-1]], "CH", 41, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]
                    ], , [, , "74[0248]\\d{6}", , , , "740123456", , , [9]], , , [, , , , , , , , , [-1]],
                    [, , "5[18]\\d{7}", , , , "581234567", , , [9]], , , [, , "860\\d{9}", , , , "860123456789", , , [12]]
                ],
                CI: [, [, , "[02-8]\\d{7}", , , , , , , [8]],
                    [, , "(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}", , , , "21234567"],
                    [, , "(?:0[1-9]|[457]\\d|6[014-9]|8[4-9])\\d{6}", , , , "01234567"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "CI", 225, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[02-8]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CK: [, [, , "[2-8]\\d{4}", , , , , , , [5]],
                    [, , "(?:2\\d|3[13-7]|4[1-5])\\d{3}", , , , "21234"],
                    [, , "[5-8]\\d{4}", , , , "71234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "CK", 682, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{3})", "$1 $2", ["[2-8]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CL: [, [, , "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", , , , , , , [9, 10, 11]],
                    [, , "(?:2(?:1962|3(?:2\\d\\d|300))|80[1-9]\\d\\d)\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2-9])\\d{7}", , , , "221234567", , , [9]],
                    [, , "(?:2(?:1962|3(?:2\\d\\d|300))|80[1-9]\\d\\d)\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2-9])\\d{7}", , , , "221234567", , , [9]],
                    [, , "(?:123|8)00\\d{6}", , , , "800123456", , , [9, 11]],
                    [, , , , , , , , , [-1]],
                    [, , "600\\d{7,8}", , , , "6001234567", , , [10, 11]],
                    [, , , , , , , , , [-1]],
                    [, , "44\\d{7}", , , , "441234567", , , [9]], "CL", 56, "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", , , , , , , 1, [
                        [, "(\\d{4})", "$1", ["1(?:[03-589]|21)|[29]0|78"]],
                        [, "(\\d{5})(\\d{4})", "$1 $2", ["21"], "($1)"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                        [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"],
                        [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                        [, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                    ],
                    [
                        [, "(\\d{5})(\\d{4})", "$1 $2", ["21"], "($1)"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                        [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"],
                        [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"],
                        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
                        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                        [, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]
                    ],
                    [, , , , , , , , , [-1]], , , [, , "600\\d{7,8}", , , , , , , [10, 11]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CM: [, [, , "(?:[26]\\d\\d|88)\\d{6}", , , , , , , [8, 9]],
                    [, , "2(?:22|33|4[23])\\d{6}", , , , "222123456", , , [9]],
                    [, , "6[5-9]\\d{7}", , , , "671234567", , , [9]],
                    [, , "88\\d{6}", , , , "88012345", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "CM", 237, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
                        [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CN: [, [, , "1[1279]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-68]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", , , , , , , [7, 8, 9, 10, 11, 12],
                        [5, 6]
                    ],
                    [, , "(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|21(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))\\d{5}|(?:43[35]|754)\\d{7,8}|8(?:078\\d{7}|51\\d{7,8})|(?:10|(?:2|85)1|43[35]|754)(?:100\\d\\d|95\\d{3,4})|(?:2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[1-9]\\d{6})|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[1-9]\\d{5})|9(?:[0-46-9]\\d{5}|5\\d{3,5}))", , , , "1012345678", , , [7, 8, 9, 10, 11],
                        [5, 6]
                    ],
                    [, , "1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|5[0-35-9]|6[25-7]|7[0-35-8]|9[189])\\d{8}", , , , "13123456789", , , [11]],
                    [, , "(?:(?:10|21)8|8)00\\d{7}", , , , "8001234567", , , [10, 12]],
                    [, , "16[08]\\d{5}", , , , "16812345", , , [8]],
                    [, , "400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", , , , "4001234567", , , [7, 8, 9, 10, 11],
                        [5, 6]
                    ],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "CN", 86, "00|1(?:[12]\\d|79|9[0235-7])\\d\\d00", "0", , , "0|(1(?:[12]\\d|79|9[0235-7])\\d\\d)", , "00", , [
                        [, "(\\d{5,6})", "$1", ["96"]],
                        [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1", "$CC $1"],
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[1-9]", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["16[08]"]],
                        [, "(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1", "$CC $1"],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[1-9]", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])", "26|3(?:[0268]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9])|(?:34|85[23])[0-8]|(?:1|58)[1-9]|(?:63|95)[06-9]|(?:33|85[23]9)[0-46-9]|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[0-8]|9[0-47-9])", "26|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23](?:[02-8]|1[1-9]|9[0-46-9]))|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:1|58|85[23]10)[1-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", "$CC $1", 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", "$CC $1", 1],
                        [, "(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "$CC $1", 1],
                        [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", "$CC $1", 1],
                        [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"], , "$CC $1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", , 1]
                    ],
                    [
                        [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])"], "0$1", "$CC $1"],
                        [, "(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1", "$CC $1"],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", "$CC $1", 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", "$CC $1", 1],
                        [, "(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "$CC $1", 1],
                        [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", "$CC $1", 1],
                        [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"], , "$CC $1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", , 1]
                    ],
                    [, , , , , , , , , [-1]], , , [, , "(?:(?:10|21)8|[48])00\\d{7}|950\\d{7,8}", , , , , , , [10, 11, 12]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CO: [, [, , "(?:1\\d|3)\\d{9}|[124-8]\\d{7}", , , , , , , [8, 10, 11],
                        [7]
                    ],
                    [, , "[124-8][2-9]\\d{6}", , , , "12345678", , , [8],
                        [7]
                    ],
                    [, , "3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}", , , , "3211234567", , , [10]],
                    [, , "1800\\d{7}", , , , "18001234567", , , [11]],
                    [, , "19(?:0[01]|4[78])\\d{7}", , , , "19001234567", , , [11]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", , , "0([3579]|4(?:[14]4|56))?", , , , [
                        [, "(\\d)(\\d{7})", "$1 $2", ["1[2-79]|[25-8]|(?:18|4)[2-9]"], "($1)", "0$CC $1"],
                        [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], , "0$CC $1"],
                        [, "(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9)", "1(?:800|9)"], "0$1"]
                    ],
                    [
                        [, "(\\d)(\\d{7})", "$1 $2", ["1[2-79]|[25-8]|(?:18|4)[2-9]"], "($1)", "0$CC $1"],
                        [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], , "0$CC $1"],
                        [, "(\\d)(\\d{3})(\\d{7})", "$1 $2 $3", ["1(?:80|9)", "1(?:800|9)"]]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CR: [, [, , "(?:8\\d|90)\\d{8}|[24-8]\\d{7}", , , , , , , [8, 10]],
                    [, , "210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}", , , , "22123456", , , [8]],
                    [, , "6500[01]\\d{3}|5(?:0[01]|7[0-3])\\d{5}|(?:6[0-4]|7[0-3]|8[3-9])\\d{6}", , , , "83123456", , , [8]],
                    [, , "800\\d{7}", , , , "8001234567", , , [10]],
                    [, , "90[059]\\d{7}", , , , "9001234567", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "(?:210[0-6]|4\\d{3}|5100)\\d{4}", , , , "40001234", , , [8]], "CR", 506, "00", , , , "(19(?:0[0-2468]|1[09]|20|66|77|99))", , , , [
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"], , "$CC $1"],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"], , "$CC $1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CU: [, [, , "[27]\\d{6,7}|[34]\\d{5,7}|5\\d{7}", , , , , , , [6, 7, 8],
                        [4, 5]
                    ],
                    [, , "(?:3[23]|48)\\d{4,6}|(?:31|4[36])\\d{6}|(?:2[1-4]|4[1257]|7\\d)\\d{5,6}", , , , "71234567", , , , [4, 5]],
                    [, , "5\\d{7}", , , , "51234567", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "CU", 53, "119", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
                        [, "(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                        [, "(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CV: [, [, , "[2-59]\\d{6}", , , , , , , [7]],
                    [, , "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}", , , , "2211234"],
                    [, , "(?:[34][36]|5[1-389]|9\\d)\\d{5}", , , , "9911234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "CV", 238, "0", , , , , , , , [
                        [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-59]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CW: [, [, , "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", , , , , , , [7, 8]],
                    [, , "9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}", , , , "94351234"],
                    [, , "953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}", , , , "95181234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "60[0-2]\\d{4}", , , , "6001234", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "CW", 599, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]
                    ], , [, , "955\\d{5}", , , , "95581234", , , [8]], 1, "[69]", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CX: [, [, , "1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}", , , , , , , [6, 7, 8, 9, 10]],
                    [, , "8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", , , , "891641234", , , [9],
                        [8]
                    ],
                    [, , "483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[017-9])\\d{6}", , , , "412345678", , , [9]],
                    [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
                    [, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]],
                    [, , "13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}", , , , "1300123456", , , [6, 8, 10]],
                    [, , , , , , , , , [-1]],
                    [, , "(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}", , , , "550123456", , , [9]], "CX", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "0|([59]\\d{7})$", "8$1", "0011", , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                CY: [, [, , "(?:[279]\\d|[58]0)\\d{6}", , , , , , , [8]],
                    [, , "2[2-6]\\d{6}", , , , "22345678"],
                    [, , "9[4-79]\\d{6}", , , , "96123456"],
                    [, , "800\\d{5}", , , , "80001234"],
                    [, , "90[09]\\d{5}", , , , "90012345"],
                    [, , "80[1-9]\\d{5}", , , , "80112345"],
                    [, , "700\\d{5}", , , , "70012345"],
                    [, , , , , , , , , [-1]], "CY", 357, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "(?:50|77)\\d{6}", , , , "77123456"], , , [, , , , , , , , , [-1]]
                ],
                CZ: [, [, , "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", , , , , , , [9, 10, 11, 12]],
                    [, , "(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}", , , , "212345678", , , [9]],
                    [, , "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}", , , , "601123456", , , [9]],
                    [, , "800\\d{6}", , , , "800123456", , , [9]],
                    [, , "9(?:0[05689]|76)\\d{6}", , , , "900123456", , , [9]],
                    [, , "8[134]\\d{7}", , , , "811234567", , , [9]],
                    [, , "70[01]\\d{6}", , , , "700123456", , , [9]],
                    [, , "9[17]0\\d{6}", , , , "910123456", , , [9]], "CZ", 420, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                        [, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "9(?:5\\d|7[2-4])\\d{6}", , , , "972123456", , , [9]], , , [, , "9(?:3\\d{9}|6\\d{7,10})", , , , "93123456789"]
                ],
                DE: [, [, , "[2579]\\d{5,14}|49(?:[05]\\d{10}|[46][1-8]\\d{4,9})|49(?:[0-25]\\d|3[1-689]|7[1-7])\\d{4,8}|49(?:[0-2579]\\d|[34][1-9]|6[0-8])\\d{3}|49\\d{3,4}|(?:1|[368]\\d|4[0-8])\\d{3,13}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        [2, 3]
                    ],
                    [, , "(?:32|49[4-6]\\d)\\d{9}|49[0-7]\\d{3,9}|(?:[34]0|[68]9)\\d{3,13}|(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{3,12}", , , , "30123456", , , [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        [2, 3, 4]
                    ],
                    [, , "15[0-25-9]\\d{8}|1(?:6[023]|7\\d)\\d{7,8}", , , , "15123456789", , , [10, 11]],
                    [, , "800\\d{7,12}", , , , "8001234567890", , , [10, 11, 12, 13, 14, 15]],
                    [, , "(?:137[7-9]|900(?:[135]|9\\d))\\d{6}", , , , "9001234567", , , [10, 11]],
                    [, , "180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}", , , , "18012345", , , [7, 8, 9, 10, 11, 12, 13, 14]],
                    [, , "700\\d{8}", , , , "70012345678", , , [11]],
                    [, , , , , , , , , [-1]], "DE", 49, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                        [, "(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"],
                        [, "(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"],
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                        [, "(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                        [, "(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                        [, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                        [, "(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                        [, "(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                        [, "(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                        [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                        [, "(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                        [, "(\\d{5})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                        [, "(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                        [, "(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                        [, "(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
                    ], , [, , "16(?:4\\d{1,10}|[89]\\d{1,11})", , , , "16412345", , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]], , , [, , , , , , , , , [-1]],
                    [, , "18(?:1\\d{5,11}|[2-9]\\d{8})", , , , "18500123456", , , [8, 9, 10, 11, 12, 13, 14]], , , [, , "1(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d{7,8}|15(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)\\d{7}", , , , "177991234567", , , [12, 13]]
                ],
                DJ: [, [, , "(?:2\\d|77)\\d{6}", , , , , , , [8]],
                    [, , "2(?:1[2-5]|7[45])\\d{5}", , , , "21360003"],
                    [, , "77\\d{6}", , , , "77831001"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "DJ", 253, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                DK: [, [, , "[2-9]\\d{7}", , , , , , , [8]],
                    [, , "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", , , , "32123456"],
                    [, , "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", , , , "32123456"],
                    [, , "80\\d{6}", , , , "80123456"],
                    [, , "90\\d{6}", , , , "90123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "DK", 45, "00", , , , , , , 1, [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                DM: [, [, , "(?:[58]\\d\\d|767|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}", , , , "7674201234", , , , [7]],
                    [, , "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}", , , , "7672251234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "DM", 1, "011", "1", , , "1|([2-7]\\d{6})$", "767$1", , , , , [, , , , , , , , , [-1]], , "767", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                DO: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}", , , , "8092345678", , , , [7]],
                    [, , "8[024]9[2-9]\\d{6}", , , , "8092345678", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "DO", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "8[024]9", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                DZ: [, [, , "(?:[1-4]|[5-79]\\d|80)\\d{7}", , , , , , , [8, 9]],
                    [, , "9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}", , , , "12345678"],
                    [, , "67[0-6]\\d{6}|(?:5[4-6]|6[569]|7[7-9])\\d{7}", , , , "551234567", , , [9]],
                    [, , "800\\d{6}", , , , "800123456", , , [9]],
                    [, , "80[3-689]1\\d{5}", , , , "808123456", , , [9]],
                    [, , "80[12]1\\d{5}", , , , "801123456", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , "98[23]\\d{6}", , , , "983123456", , , [9]], "DZ", 213, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                EC: [, [, , "1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}", , , , , , , [8, 9, 10, 11],
                        [7]
                    ],
                    [, , "[2-7][2-7]\\d{6}", , , , "22123456", , , [8],
                        [7]
                    ],
                    [, , "964[0-2]\\d{5}|9(?:39|[57][89]|6[0-37-9]|[89]\\d)\\d{6}", , , , "991234567", , , [9]],
                    [, , "1800\\d{6,7}", , , , "18001234567", , , [10, 11]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "[2-7]890\\d{4}", , , , "28901234", , , [8]], "EC", 593, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-7]"]],
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                        [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                    ],
                    [
                        [, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-7]"]],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                        [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                EE: [, [, , "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}", , , , , , , [7, 8, 10]],
                    [, , "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", , , , "3212345", , , [7]],
                    [, , "(?:5\\d|8[1-4])\\d{6}|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}", , , , "51234567", , , [7, 8]],
                    [, , "800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}", , , , "80012345"],
                    [, , "(?:40\\d\\d|900)\\d{4}", , , , "9001234", , , [7, 8]],
                    [, , , , , , , , , [-1]],
                    [, , "70[0-2]\\d{5}", , , , "70012345", , , [8]],
                    [, , , , , , , , , [-1]], "EE", 372, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],
                        [, "(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-4])", "[45]|8(?:00[1-9]|[1-4])"]],
                        [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
                        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]
                    ], , [, , , , , , , , , [-1]], , , [, , "800[2-9]\\d{3}", , , , , , , [7]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                EG: [, [, , "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", , , , , , , [8, 9, 10],
                        [6, 7]
                    ],
                    [, , "(?:15\\d|57[23])\\d{5,6}|(?:13[23]|(?:2[2-4]|3)\\d|4(?:0[2-5]|[578][23]|64)|5(?:0[2-7]|5\\d)|6[24-689]3|8(?:2[2-57]|4[26]|6[237]|8[2-4])|9(?:2[27]|3[24]|52|6[2356]|7[2-4]))\\d{6}", , , , "234567890", , , [8, 9],
                        [6, 7]
                    ],
                    [, , "1[0-25]\\d{8}", , , , "1001234567", , , [10]],
                    [, , "800\\d{7}", , , , "8001234567", , , [10]],
                    [, , "900\\d{7}", , , , "9001234567", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "EG", 20, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                        [, "(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[189]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                EH: [, [, , "[5-8]\\d{8}", , , , , , , [9]],
                    [, , "528[89]\\d{5}", , , , "528812345"],
                    [, , "692[12]\\d{5}|(?:6(?:[0-7]\\d|8[0-247-9]|9[013-9])|7(?:0[06-8]|6[1267]|7[0-27]))\\d{6}", , , , "650123456"],
                    [, , "80\\d{7}", , , , "801234567"],
                    [, , "89\\d{7}", , , , "891234567"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "5924[0-2]\\d{4}", , , , "592401234"], "EH", 212, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , "528[89]", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                ER: [, [, , "[178]\\d{6}", , , , , , , [7],
                        [6]
                    ],
                    [, , "(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}", , , , "8370362", , , , [6]],
                    [, , "(?:17[1-3]|7\\d\\d)\\d{4}", , , , "7123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "ER", 291, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                ES: [, [, , "(?:51|[6-9]\\d)\\d{7}", , , , , , , [9]],
                    [, , "96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}", , , , "810123456"],
                    [, , "9(?:6906(?:09|10)|7390\\d\\d)\\d\\d|(?:6\\d|7[1-48])\\d{7}", , , , "612345678"],
                    [, , "[89]00\\d{6}", , , , "800123456"],
                    [, , "80[367]\\d{6}", , , , "803123456"],
                    [, , "90[12]\\d{6}", , , , "901123456"],
                    [, , "70\\d{7}", , , , "701234567"],
                    [, , , , , , , , , [-1]], "ES", 34, "00", , , , , , , , [
                        [, "(\\d{4})", "$1", ["905"]],
                        [, "(\\d{6})", "$1", ["[79]9"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                    ],
                    [
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "51\\d{7}", , , , "511234567"], , , [, , , , , , , , , [-1]]
                ],
                ET: [, [, , "(?:11|[2-59]\\d)\\d{7}", , , , , , , [9],
                        [7]
                    ],
                    [, , "(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:1[78]|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}", , , , "111112345", , , , [7]],
                    [, , "9\\d{8}", , , , "911234567"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "ET", 251, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                FI: [, [, , "(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}|[1-35689]\\d{4}", , , , , , , [5, 6, 7, 8, 9, 10]],
                    [, , "(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}", , , , "131234567", , , [5, 6, 7, 8, 9]],
                    [, , "(?:4[0-8]|50)\\d{4,8}", , , , "412345678", , , [6, 7, 8, 9, 10]],
                    [, , "800\\d{4,6}", , , , "800123456", , , [7, 8, 9]],
                    [, , "[67]00\\d{5,6}", , , , "600123456", , , [8, 9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "FI", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0", , , "0", , "00", , [
                        [, "(\\d{5})", "$1", ["75[12]"], "0$1"],
                        [, "(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                        [, "(\\d{6})", "$1", ["11"]],
                        [, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[12]0|7)0|[368]"], "0$1"],
                        [, "(\\d{2})(\\d{4,8})", "$1 $2", ["[12457]"], "0$1"]
                    ],
                    [
                        [, "(\\d)(\\d{4,9})", "$1 $2", ["[2568][1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"],
                        [, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[12]0|7)0|[368]"], "0$1"],
                        [, "(\\d{2})(\\d{4,8})", "$1 $2", ["[12457]"], "0$1"]
                    ],
                    [, , , , , , , , , [-1]], 1, "1[03-79]|[2-9]", [, , "20(?:2[023]|9[89])\\d{1,6}|60[12]\\d{5,6}|(?:606|7(?:1|3\\d))\\d{7}|(?:[1-3]00|75[03-9])\\d{3,7}"],
                    [, , "(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d", , , , "10112345"], , , [, , , , , , , , , [-1]]
                ],
                FJ: [, [, , "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", , , , , , , [7, 11]],
                    [, , "603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}", , , , "3212345", , , [7]],
                    [, , "(?:[279]\\d|45|5[01568]|8[034679])\\d{5}", , , , "7012345", , , [7]],
                    [, , "0800\\d{7}", , , , "08001234567", , , [11]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "FJ", 679, "0(?:0|52)", , , , , , "00", , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
                        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                FK: [, [, , "[2-7]\\d{4}", , , , , , , [5]],
                    [, , "[2-47]\\d{4}", , , , "31234"],
                    [, , "[56]\\d{4}", , , , "51234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "FK", 500, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                FM: [, [, , "[39]\\d{6}", , , , , , , [7]],
                    [, , "(?:3[2357]0[1-9]|9[2-6]\\d\\d)\\d{3}", , , , "3201234"],
                    [, , "(?:3[2357]0[1-9]|9[2-7]\\d\\d)\\d{3}", , , , "3501234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "FM", 691, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[39]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                FO: [, [, , "(?:[2-8]\\d|90)\\d{4}", , , , , , , [6]],
                    [, , "(?:20|[34]\\d|8[19])\\d{4}", , , , "201234"],
                    [, , "(?:[27][1-9]|5\\d)\\d{4}", , , , "211234"],
                    [, , "80[257-9]\\d{3}", , , , "802123"],
                    [, , "90(?:[13-5][15-7]|2[125-7]|99)\\d\\d", , , , "901123"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "(?:6[0-36]|88)\\d{4}", , , , "601234"], "FO", 298, "00", , , , "(10(?:01|[12]0|88))", , , , [
                        [, "(\\d{6})", "$1", ["[2-9]"], , "$CC $1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                FR: [, [, , "[1-9]\\d{8}", , , , , , , [9]],
                    [, , "[1-5]\\d{8}", , , , "123456789"],
                    [, , "700\\d{6}|(?:6\\d|7[3-9])\\d{7}", , , , "612345678"],
                    [, , "80[0-5]\\d{6}", , , , "801234567"],
                    [, , "8[129]\\d{7}", , , , "891123456"],
                    [, , "884\\d{6}", , , , "884012345"],
                    [, , , , , , , , , [-1]],
                    [, , "9\\d{8}", , , , "912345678"], "FR", 33, "00", "0", , , "0", , , , [
                        [, "(\\d{4})", "$1", ["10"]],
                        [, "(\\d{3})(\\d{3})", "$1 $2", ["1"]],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                        [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                    ],
                    [
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"],
                        [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "80[6-9]\\d{6}", , , , "806123456"], , , [, , , , , , , , , [-1]]
                ],
                GA: [, [, , "(?:0\\d|[2-7])\\d{6}", , , , , , , [7, 8]],
                    [, , "01\\d{6}", , , , "01441234", , , [8]],
                    [, , "(?:0[2-7]|[2-7])\\d{6}", , , , "06031234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "GA", 241, "00", , , , , , , , [
                        [, "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GB: [, [, , "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", , , , , , , [7, 9, 10],
                        [4, 5, 6, 8]
                    ],
                    [, , "(?:1(?:(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|80[04589])))|2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d|7(?:(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))\\d|6888[2-46-8]))\\d\\d", , , , "1212345678", , , [9, 10],
                        [4, 5, 6, 7, 8]
                    ],
                    [, , "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", , , , "7400123456", , , [10]],
                    [, , "80[08]\\d{7}|800\\d{6}|8001111", , , , "8001234567"],
                    [, , "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", , , , "9012345678", , , [7, 10]],
                    [, , , , , , , , , [-1]],
                    [, , "70\\d{8}", , , , "7012345678", , , [10]],
                    [, , "56\\d{8}", , , , "5612345678", , , [10]], "GB", 44, "00", "0", " x", , "0", , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                        [, "(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
                        [, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                        [, "(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[024-9])", "[25]|7(?:0|6(?:[04-9]|2[356]))"], "0$1"],
                        [, "(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]
                    ], , [, , "76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", , , , "7640123456", , , [10]], 1, , [, , , , , , , , , [-1]],
                    [, , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [10]], , , [, , , , , , , , , [-1]]
                ],
                GD: [, [, , "(?:473|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}", , , , "4732691234", , , , [7]],
                    [, , "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}", , , , "4734031234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "GD", 1, "011", "1", , , "1|([2-9]\\d{6})$", "473$1", , , , , [, , , , , , , , , [-1]], , "473", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GE: [, [, , "(?:[3-57]\\d\\d|800)\\d{6}", , , , , , , [9],
                        [6, 7]
                    ],
                    [, , "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}", , , , "322123456", , , , [6, 7]],
                    [, , "5(?:0(?:0[05]|55)\\d|1111|2222|3333|5200|75(?:00|7[78])|8(?:58[89]|888))\\d{4}|(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}", , , , "555123456"],
                    [, , "800\\d{6}", , , , "800123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "706\\d{6}", , , , "706123456"], "GE", 995, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , "706\\d{6}"],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GF: [, [, , "[56]94\\d{6}", , , , , , , [9]],
                    [, , "594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}", , , , "594101234"],
                    [, , "694(?:[0-249]\\d|3[0-48])\\d{4}", , , , "694201234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "GF", 594, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GG: [, [, , "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", , , , , , , [7, 9, 10],
                        [6]
                    ],
                    [, , "1481[25-9]\\d{5}", , , , "1481256789", , , [10],
                        [6]
                    ],
                    [, , "7(?:(?:781|839)\\d|911[17])\\d{5}", , , , "7781123456", , , [10]],
                    [, , "80[08]\\d{7}|800\\d{6}|8001111", , , , "8001234567"],
                    [, , "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", , , , "9012345678", , , [7, 10]],
                    [, , , , , , , , , [-1]],
                    [, , "70\\d{8}", , , , "7012345678", , , [10]],
                    [, , "56\\d{8}", , , , "5612345678", , , [10]], "GG", 44, "00", "0", , , "0|([25-9]\\d{5})$", "1481$1", , , , , [, , "76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", , , , "7640123456", , , [10]], , , [, , , , , , , , , [-1]],
                    [, , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [10]], , , [, , , , , , , , , [-1]]
                ],
                GH: [, [, , "(?:[235]\\d{3}|800)\\d{5}", , , , , , , [8, 9],
                        [7]
                    ],
                    [, , "3(?:[167]2[0-6]|22[0-5]|32[0-3]|4(?:2[013-9]|3[01])|52[0-7]|82[0-2])\\d{5}|3(?:[0-8]8|9[28])0\\d{5}|3(?:0[237]|[1-9]7)\\d{6}", , , , "302345678", , , [9],
                        [7]
                    ],
                    [, , "56[01]\\d{6}|(?:2[0346-8]|5[0457])\\d{7}", , , , "231234567", , , [9]],
                    [, , "800\\d{5}", , , , "80012345", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "GH", 233, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[237]|80"]],
                        [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                    ],
                    [
                        [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]
                    ],
                    [, , , , , , , , , [-1]], , , [, , "800\\d{5}", , , , , , , [8]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GI: [, [, , "(?:[25]\\d\\d|629)\\d{5}", , , , , , , [8]],
                    [, , "2190[0-2]\\d{3}|2(?:00\\d|16[24-7]|2(?:2[2457]|50))\\d{4}", , , , "20012345"],
                    [, , "(?:5[46-8]\\d|629)\\d{5}", , , , "57123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "GI", 350, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GL: [, [, , "(?:19|[2-689]\\d)\\d{4}", , , , , , , [6]],
                    [, , "(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}", , , , "321000"],
                    [, , "(?:[25][1-9]|4[2-9])\\d{4}", , , , "221234"],
                    [, , "80\\d{4}", , , , "801234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "3[89]\\d{4}", , , , "381234"], "GL", 299, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-689]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GM: [, [, , "[2-9]\\d{6}", , , , , , , [7]],
                    [, , "(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}", , , , "5661234"],
                    [, , "(?:[23679]\\d|5[01])\\d{5}", , , , "3012345"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "GM", 220, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GN: [, [, , "(?:30|6\\d\\d|722)\\d{6}", , , , , , , [8, 9]],
                    [, , "30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}", , , , "30241234", , , [8]],
                    [, , "6[02356]\\d{7}", , , , "601123456", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "722\\d{6}", , , , "722123456", , , [9]], "GN", 224, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GP: [, [, , "(?:590|69\\d)\\d{6}", , , , , , , [9]],
                    [, , "590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}", , , , "590201234"],
                    [, , "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}", , , , "690001234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "GP", 590, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GQ: [, [, , "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", , , , , , , [9]],
                    [, , "33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}", , , , "333091234"],
                    [, , "(?:222|55[015])\\d{6}", , , , "222123456"],
                    [, , "80\\d[1-9]\\d{5}", , , , "800123456"],
                    [, , "90\\d[1-9]\\d{5}", , , , "900123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "GQ", 240, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                        [, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GR: [, [, , "(?:[268]\\d|[79]0)\\d{8}", , , , , , , [10]],
                    [, , "2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}", , , , "2123456789"],
                    [, , "6(?:8[57-9]|9\\d)\\d{7}", , , , "6912345678"],
                    [, , "800\\d{7}", , , , "8001234567"],
                    [, , "90[19]\\d{7}", , , , "9091234567"],
                    [, , "8(?:0[16]|12|25)\\d{7}", , , , "8011234567"],
                    [, , "70(?:0[3-8]0|707)\\d{5}", , , , "7003000123"],
                    [, , , , , , , , , [-1]], "GR", 30, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                        [, "(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])"]],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GT: [, [, , "(?:1\\d{3}|[2-7])\\d{7}", , , , , , , [8, 11]],
                    [, , "[267][2-9]\\d{6}", , , , "22456789", , , [8]],
                    [, , "[3-5]\\d{7}", , , , "51234567", , , [8]],
                    [, , "18[01]\\d{8}", , , , "18001112222", , , [11]],
                    [, , "19\\d{9}", , , , "19001112222", , , [11]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "GT", 502, "00", , , , , , , , [
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GU: [, [, , "(?:[58]\\d\\d|671|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", , , , "6713001234", , , , [7]],
                    [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", , , , "6713001234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "GU", 1, "011", "1", , , "1|([3-9]\\d{6})$", "671$1", , 1, , , [, , , , , , , , , [-1]], , "671", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GW: [, [, , "[49]\\d{8}|4\\d{6}", , , , , , , [7, 9]],
                    [, , "443\\d{6}", , , , "443201234", , , [9]],
                    [, , "9(?:5\\d|6[569]|77)\\d{6}", , , , "955012345", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "40\\d{5}", , , , "4012345", , , [7]], "GW", 245, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["40"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                GY: [, [, , "(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}", , , , , , , [7]],
                    [, , "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}", , , , "2201234"],
                    [, , "6\\d{6}", , , , "6091234"],
                    [, , "(?:289|862)\\d{4}", , , , "2891234"],
                    [, , "9008\\d{3}", , , , "9008123"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "GY", 592, "001", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46-9]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                HK: [, [, , "8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}", , , , , , , [5, 6, 7, 8, 9, 11]],
                    [, , "(?:384[0-24]|58(?:0[1-8]|1[2-9]))\\d{4}|(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])|3(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69]|89))\\d{5}", , , , "21234567", , , [8]],
                    [, , "(?:46(?:0[0-6]|1[0-2]|4[0-57-9])|5730|(?:626|848)[01]|707[1-5]|929[03-9])\\d{4}|(?:5(?:[1-59][0-46-9]|6[0-4689]|7[0-2469])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}", , , , "51234567", , , [8]],
                    [, , "800\\d{6}", , , , "800123456", , , [9]],
                    [, , "900(?:[0-24-9]\\d{7}|3\\d{1,4})", , , , "90012345678", , , [5, 6, 7, 8, 11]],
                    [, , , , , , , , , [-1]],
                    [, , "8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}", , , , "81123456", , , [8]],
                    [, , , , , , , , , [-1]], "HK", 852, "00(?:30|5[09]|[126-9]?)", , , , , , "00", , [
                        [, "(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
                        [, "(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
                    ], , [, , "7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}", , , , "71123456", , , [8]], , , [, , , , , , , , , [-1]],
                    [, , "30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}", , , , "30161234", , , [8]], , , [, , , , , , , , , [-1]]
                ],
                HN: [, [, , "[237-9]\\d{7}", , , , , , , [8]],
                    [, , "2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|6[24]|7[0135689]|8[01346-9]|9[0-2])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:08|16|4[03-5]|5\\d|6[4-6]|74|80)|6(?:[056]\\d|17|20|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}", , , , "22123456"],
                    [, , "[37-9]\\d{7}", , , , "91234567"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "HN", 504, "00", , , , , , , , [
                        [, "(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                HR: [, [, , "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", , , , , , , [6, 7, 8, 9]],
                    [, , "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}", , , , "12345678", , , [8, 9],
                        [6, 7]
                    ],
                    [, , "9(?:751\\d{5}|8\\d{6,7})|9(?:01|[1259]\\d|7[0679])\\d{6}", , , , "921234567", , , [8, 9]],
                    [, , "80[01]\\d{4,6}", , , , "800123456", , , [7, 8, 9]],
                    [, , "6[01459]\\d{6}|6[01]\\d{4,5}", , , , "611234", , , [6, 7, 8]],
                    [, , , , , , , , , [-1]],
                    [, , "7[45]\\d{6}", , , , "74123456", , , [8]],
                    [, , , , , , , , , [-1]], "HR", 385, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                        [, "(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "62\\d{6,7}|72\\d{6}", , , , "62123456", , , [8, 9]], , , [, , , , , , , , , [-1]]
                ],
                HT: [, [, , "[2-489]\\d{7}", , , , , , , [8]],
                    [, , "2(?:2\\d|5[1-5]|81|9[149])\\d{5}", , , , "22453300"],
                    [, , "[34]\\d{7}", , , , "34101234"],
                    [, , "8\\d{7}", , , , "80012345"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}", , , , "98901234"], "HT", 509, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-489]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                HU: [, [, , "[2357]\\d{8}|[1-9]\\d{7}", , , , , , , [8, 9],
                        [6, 7]
                    ],
                    [, , "(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}", , , , "12345678", , , [8],
                        [6, 7]
                    ],
                    [, , "(?:[257]0|3[01])\\d{7}", , , , "201234567", , , [9]],
                    [, , "[48]0\\d{6}", , , , "80123456", , , [8]],
                    [, , "9[01]\\d{6}", , , , "90123456", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "21\\d{7}", , , , "211234567", , , [9]], "HU", 36, "00", "06", , , "06", , , , [
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57-9]"], "06 $1"]
                    ], , [, , , , , , , , , [-1]], , , [, , "[48]0\\d{6}", , , , , , , [8]],
                    [, , "38\\d{7}", , , , "381234567", , , [9]], , , [, , , , , , , , , [-1]]
                ],
                ID: [, [, , "(?:(?:007803|8\\d{4})\\d|[1-36])\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}", , , , , , , [7, 8, 9, 10, 11, 12, 13],
                        [5, 6]
                    ],
                    [, , "2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}", , , , "218350123", , , [7, 8, 9, 10, 11],
                        [5, 6]
                    ],
                    [, , "8[1-35-9]\\d{7,10}", , , , "812345678", , , [9, 10, 11, 12]],
                    [, , "007803\\d{7}|(?:177\\d|800)\\d{5,7}", , , , "8001234567", , , [8, 9, 10, 11, 13]],
                    [, , "809\\d{7}", , , , "8091234567", , , [10]],
                    [, , "804\\d{7}", , , , "8041234567", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "ID", 62, "00[189]", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                        [, "(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                        [, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                        [, "(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                        [, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                        [, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                        [, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                        [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"],
                        [, "(\\d{2})(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                    ],
                    [
                        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
                        [, "(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                        [, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                        [, "(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
                        [, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                        [, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                        [, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
                        [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]
                    ],
                    [, , , , , , , , , [-1]], , , [, , "(?:007803\\d|8071)\\d{6}", , , , , , , [10, 13]],
                    [, , "(?:1500|8071\\d{3})\\d{3}", , , , "8071123456", , , [7, 10]], , , [, , , , , , , , , [-1]]
                ],
                IE: [, [, , "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", , , , , , , [7, 8, 9, 10],
                        [5, 6]
                    ],
                    [, , "(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8[0-46-9])|5[23679]|6[4-6]|7[14]|9[04])\\d{7}", , , , "2212345", , , , [5, 6]],
                    [, , "8(?:22|[35-9]\\d)\\d{6}", , , , "850123456", , , [9]],
                    [, , "1800\\d{6}", , , , "1800123456", , , [10]],
                    [, , "15(?:1[2-8]|[2-8]0|9[089])\\d{6}", , , , "1520123456", , , [10]],
                    [, , "18[59]0\\d{6}", , , , "1850123456", , , [10]],
                    [, , "700\\d{6}", , , , "700123456", , , [9]],
                    [, , "76\\d{7}", , , , "761234567", , , [9]], "IE", 353, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                        [, "(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
                        [, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
                        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                        [, "(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"]
                    ], , [, , , , , , , , , [-1]], , , [, , "18[59]0\\d{6}", , , , , , , [10]],
                    [, , "818\\d{6}", , , , "818123456", , , [9]], , , [, , "8[35-9]5\\d{7}", , , , "8551234567", , , [10]]
                ],
                IL: [, [, , "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", , , , , , , [7, 8, 9, 10, 11, 12]],
                    [, , "153\\d{8,9}|[2-489]\\d{7}", , , , "21234567", , , [8, 11, 12],
                        [7]
                    ],
                    [, , "5(?:(?:[0-389][2-9]|4[1-9]|6\\d)\\d|5(?:01|2[2-6]|3[23]|4[45]|5[05689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}", , , , "502345678", , , [9]],
                    [, , "1(?:255|80[019]\\d{3})\\d{3}", , , , "1800123456", , , [7, 10]],
                    [, , "1212\\d{4}|1(?:200|9(?:0[01]|19))\\d{6}", , , , "1919123456", , , [8, 10]],
                    [, , "1700\\d{6}", , , , "1700123456", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , "78(?:33|55|77|81)\\d{5}|7(?:18|2[23]|3[237]|47|6[58]|7\\d|82|9[235-9])\\d{6}", , , , "771234567", , , [9]], "IL", 972, "0(?:0|1[2-9])", "0", , , "0", , , , [
                        [, "(\\d{4})(\\d{3})", "$1-$2", ["125"]],
                        [, "(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
                        [, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                        [, "(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
                        [, "(\\d{4})(\\d{6})", "$1-$2", ["159"]],
                        [, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                        [, "(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]
                    ], , [, , , , , , , , , [-1]], , , [, , "1700\\d{6}", , , , , , , [10]],
                    [, , "1599\\d{6}", , , , "1599123456", , , [10]], , , [, , "151\\d{8,9}", , , , "15112340000", , , [11, 12]]
                ],
                IM: [, [, , "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", , , , , , , [10],
                        [6]
                    ],
                    [, , "1624[5-8]\\d{5}", , , , "1624756789", , , , [6]],
                    [, , "76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}", , , , "7924123456"],
                    [, , "808162\\d{4}", , , , "8081624567"],
                    [, , "8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}", , , , "9016247890"],
                    [, , , , , , , , , [-1]],
                    [, , "70\\d{8}", , , , "7012345678"],
                    [, , "56\\d{8}", , , , "5612345678"], "IM", 44, "00", "0", , , "0|([5-8]\\d{5})$", "1624$1", , , , , [, , , , , , , , , [-1]], , "74576|(?:16|7[56])24", [, , , , , , , , , [-1]],
                    [, , "3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}", , , , "5512345678"], , , [, , , , , , , , , [-1]]
                ],
                IN: [, [, , "(?:00800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", , , , , , , [8, 9, 10, 11, 12, 13],
                        [6, 7]
                    ],
                    [, , "782[0-6][2-7]\\d{5}|(?:170[24]|2(?:80[13468]|90\\d)|380\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:11|2[02]|33|4[04]|79|80)[2-7]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[0189])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}", , , , "7410410123", , , [10],
                        [6, 7, 8]
                    ],
                    [, , "(?:6(?:1279|350[0-6])|7(?:3(?:1(?:11|7[02-8])|411)|4[47](?:11|7[02-8])|5111|700[02-9]|88(?:11|7[02-9])|9(?:313|79[07-9]))|8(?:079[04-9]|(?:16|2[014]|3[126]|6[136]|7[78]|8[34]|91)7[02-8]))\\d{5}|7(?:28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[089]\\d{5}|(?:6(?:0(?:0[0-3569]|26|33)|2(?:[06]\\d|3[02589]|8[0-479]|9[0-79])|3(?:0[0-79]|5[1-9]|6[0-4679]|7[0-24-9]|[89]\\d)|9(?:0[019]|13))|7(?:0\\d\\d|19[0-5]|2(?:[0235-79]\\d|[14][017-9]|8[0-59])|3(?:[05-8]\\d|1[089]|2[5-8]|3[017-9]|4[07-9]|9[016-9])|4(?:0\\d|1[015-9]|[29][89]|39|[47][089]|8[389])|5(?:[0346-8]\\d|1[07-9]|2[04-9]|5[017-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9]\\d)|7(?:0[289]|[1-9]\\d)|8(?:[0-79]\\d|8[089])|9(?:[089]\\d|7[02-8]))|8(?:0(?:[01589]\\d|6[67]|7[02-8])|1(?:[0-57-9]\\d|6[089])|2(?:[014][089]|[235-9]\\d)|3(?:[03-57-9]\\d|[126][089])|[45]\\d\\d|6(?:[02457-9]\\d|[136][089])|7(?:0[07-9]|[1-69]\\d|[78][089])|8(?:[0-25-9]\\d|3[089]|4[0489])|9(?:[02-9]\\d|1[0289]))|9\\d{3})\\d{6}", , , , "8123456789", , , [10]],
                    [, , "00800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))", , , , "1800123456"],
                    [, , "186[12]\\d{9}", , , , "1861123456789", , , [13]],
                    [, , "1860\\d{7}", , , , "18603451234", , , [11]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "IN", 91, "00", "0", , , "0", , , , [
                        [, "(\\d{7})", "$1", ["575"]],
                        [, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], , , 1],
                        [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], , , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], , , 1],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|(?:55|61)2|7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:1(?:29|60|8[06])|261|552|788[01])[2-7]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])"], "0$1", , 1],
                        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|3179)|807(?:1|9[1-3])|(?:1552|7(?:28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", , 1],
                        [, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", , 1],
                        [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], , , 1],
                        [, "(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["0"], "0$1"],
                        [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], , , 1]
                    ],
                    [
                        [, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], , , 1],
                        [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], , , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], , , 1],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|(?:55|61)2|7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:1(?:29|60|8[06])|261|552|788[01])[2-7]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])"], "0$1", , 1],
                        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|3179)|807(?:1|9[1-3])|(?:1552|7(?:28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", , 1],
                        [, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", , 1],
                        [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], , , 1],
                        [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], , , 1]
                    ],
                    [, , , , , , , , , [-1]], , , [, , "1(?:600\\d{6}|800\\d{4,9})|(?:00800|18(?:03\\d\\d|6(?:0|[12]\\d\\d)))\\d{7}"],
                    [, , "140\\d{7}", , , , "1409305260", , , [10]], , , [, , , , , , , , , [-1]]
                ],
                IO: [, [, , "3\\d{6}", , , , , , , [7]],
                    [, , "37\\d{5}", , , , "3709100"],
                    [, , "38\\d{5}", , , , "3801234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "IO", 246, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["3"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                IQ: [, [, , "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", , , , , , , [8, 9, 10],
                        [6, 7]
                    ],
                    [, , "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", , , , "12345678", , , [8, 9],
                        [6, 7]
                    ],
                    [, , "7[3-9]\\d{8}", , , , "7912345678", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "IQ", 964, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                IR: [, [, , "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", , , , , , , [4, 5, 6, 7, 10],
                        [8]
                    ],
                    [, , "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|2(?:121|[2689]0\\d)|30[0-2]\\d|4(?:111|40\\d))\\d{4}", , , , "2123456789", , , [6, 7, 10],
                        [4, 5, 8]
                    ],
                    [, , "9(?:(?:0(?:[1-35]\\d|44)|(?:[13]\\d|2[0-2])\\d)\\d|9(?:(?:[0-2]\\d|44)\\d|5[15]0|8(?:1\\d|88)|9(?:0[013]|1[0134]|21|77|9[6-9])))\\d{5}", , , , "9123456789", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "993\\d{7}", , , , "9932123456", , , [10]], "IR", 98, "00", "0", , , "0", , , , [
                        [, "(\\d{4,5})", "$1", ["96"], "0$1"],
                        [, "(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , "9(?:4440\\d{5}|6(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19]))", , , , , , , [4, 5, 10]],
                    [, , "96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])", , , , "9601", , , [4, 5]], , , [, , , , , , , , , [-1]]
                ],
                IS: [, [, , "(?:38\\d|[4-9])\\d{6}", , , , , , , [7, 9]],
                    [, , "(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}", , , , "4101234", , , [7]],
                    [, , "(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-8]\\d|9[0-3])|8(?:2[0-59]|[3469]\\d|5[1-9]|8[28]))\\d{4}", , , , "6111234"],
                    [, , "800\\d{4}", , , , "8001234", , , [7]],
                    [, , "90\\d{5}", , , , "9011234", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "49\\d{5}", , , , "4921234", , , [7]], "IS", 354, "00|1(?:0(?:01|[12]0)|100)", , , , , , "00", , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "809\\d{4}", , , , "8091234", , , [7]], , , [, , "(?:689|8(?:7[0189]|80)|95[48])\\d{4}", , , , "6891234", , , [7]]
                ],
                IT: [, [, , "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", , , , , , , [6, 7, 8, 9, 10, 11, 12]],
                    [, , "0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}", , , , "0212345678", , , [6, 7, 8, 9, 10, 11]],
                    [, , "3[1-9]\\d{8}|3[2-9]\\d{7}", , , , "3123456789", , , [9, 10]],
                    [, , "80(?:0\\d{3}|3)\\d{3}", , , , "800123456", , , [6, 9]],
                    [, , "(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}", , , , "899123456", , , [6, 8, 9, 10]],
                    [, , "84(?:[08]\\d{3}|[17])\\d{3}", , , , "848123456", , , [6, 9]],
                    [, , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [9, 10]],
                    [, , "55\\d{8}", , , , "5512345678", , , [10]], "IT", 39, "00", , , , , , , , [
                        [, "(\\d{4,5})", "$1", ["1(?:0|9[246])", "1(?:0|9(?:2[2-9]|[46]))"]],
                        [, "(\\d{6})", "$1", ["1(?:1|92)"]],
                        [, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                        [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
                        [, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                        [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]],
                        [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
                        [, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                        [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
                    ],
                    [
                        [, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                        [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
                        [, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                        [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1[4679]|[38]"]],
                        [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
                        [, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                        [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
                    ],
                    [, , , , , , , , , [-1]], 1, , [, , "848\\d{6}", , , , , , , [9]],
                    [, , , , , , , , , [-1]], , , [, , "3[2-8]\\d{9,10}", , , , "33101234501", , , [11, 12]]
                ],
                JE: [, [, , "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", , , , , , , [10],
                        [6]
                    ],
                    [, , "1534[0-24-8]\\d{5}", , , , "1534456789", , , , [6]],
                    [, , "7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}", , , , "7797712345"],
                    [, , "80(?:07(?:35|81)|8901)\\d{4}", , , , "8007354567"],
                    [, , "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}", , , , "9018105678"],
                    [, , , , , , , , , [-1]],
                    [, , "701511\\d{4}", , , , "7015115678"],
                    [, , "56\\d{8}", , , , "5612345678"], "JE", 44, "00", "0", , , "0|([0-24-8]\\d{5})$", "1534$1", , , , , [, , "76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", , , , "7640123456"], , , [, , , , , , , , , [-1]],
                    [, , "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}", , , , "5512345678"], , , [, , , , , , , , , [-1]]
                ],
                JM: [, [, , "(?:[58]\\d\\d|658|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "(?:658(?:2(?:[0-8]\\d|9[0-46-9])|[3-9]\\d\\d)|876(?:5(?:02|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}", , , , "8765230123", , , , [7]],
                    [, , "(?:658295|876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[13-9]|17|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}", , , , "8762101234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "JM", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "658|876", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                JO: [, [, , "900\\d{5}|(?:(?:[268]|7\\d)\\d|32|53)\\d{6}", , , , , , , [8, 9]],
                    [, , "(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:[029]0|7[08]))\\d{4}", , , , "62001234", , , [8]],
                    [, , "7(?:55[0-49]|(?:7[025-9]|[89][0-25-9])\\d)\\d{5}", , , , "790123456", , , [9]],
                    [, , "80\\d{6}", , , , "80012345", , , [8]],
                    [, , "900\\d{5}", , , , "90012345", , , [8]],
                    [, , "85\\d{6}", , , , "85012345", , , [8]],
                    [, , "70\\d{7}", , , , "700123456", , , [9]],
                    [, , , , , , , , , [-1]], "JO", 962, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                        [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
                        [, "(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                        [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                    ], , [, , "74(?:66|77)\\d{5}", , , , "746612345", , , [9]], , , [, , , , , , , , , [-1]],
                    [, , "8(?:10|8\\d)\\d{5}", , , , "88101234", , , [8]], , , [, , , , , , , , , [-1]]
                ],
                JP: [, [, , "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", , , , , , , [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]],
                    [, , "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}", , , , "312345678", , , [9]],
                    [, , "[7-9]0[1-9]\\d{7}", , , , "9012345678", , , [10]],
                    [, , "00(?:(?:37|66)\\d{6,13}|(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d)|(?:120|800\\d)\\d{6}", , , , "120123456"],
                    [, , "990\\d{6}", , , , "990123456", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , "60\\d{7}", , , , "601234567", , , [9]],
                    [, , "50[1-9]\\d{7}", , , , "5012345678", , , [10]], "JP", 81, "010", "0", , , "0", , , , [
                        [, "(\\d{4})(\\d{4})", "$1-$2", ["007", "0077", "00777", "00777[01]"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                        [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                        [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6[0-24-689]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|5[0-3589]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"],
                        [, "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["007"]],
                        [, "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", ["008"]],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"],
                        [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", ["0"]],
                        [, "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["0"]],
                        [, "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["0"]],
                        [, "(\\d{4})(\\d{6})(\\d{6,7})", "$1-$2-$3", ["0"]]
                    ],
                    [
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                        [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
                        [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6[0-24-689]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|5[0-3589]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])", "[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]|80"], "0$1"]
                    ],
                    [, , "20\\d{8}", , , , "2012345678", , , [10]], , , [, , "00(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d|00(?:37|66)\\d{6,13}"],
                    [, , "570\\d{6}", , , , "570123456", , , [9]], , , [, , , , , , , , , [-1]]
                ],
                KE: [, [, , "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", , , , , , , [7, 8, 9, 10]],
                    [, , "(?:4[245]|5[2-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|51|66)\\d{6,7}", , , , "202012345", , , [7, 8, 9]],
                    [, , "(?:1(?:0[0-2]|1[01])|7\\d\\d)\\d{6}", , , , "712123456", , , [9]],
                    [, , "800[24-8]\\d{5,6}", , , , "800223456", , , [9, 10]],
                    [, , "900[02-9]\\d{5}", , , , "900223456", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "KE", 254, "000", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                        [, "(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                KG: [, [, , "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", , , , , , , [9, 10],
                        [5, 6]
                    ],
                    [, , "(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", , , , "312123456", , , [9],
                        [5, 6]
                    ],
                    [, , "8801\\d{5}|(?:2(?:0[0-35]|2\\d)|5(?:0[0-57-9]|[124-7]\\d)|7(?:[07]\\d|55)|99[05-9])\\d{6}", , , , "700123456", , , [9]],
                    [, , "800\\d{6,7}", , , , "800123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "KG", 996, "00", "0", , , "0", , , , [
                        [, "(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                KH: [, [, , "1\\d{9}|[1-9]\\d{7,8}", , , , , , , [8, 9, 10],
                        [6, 7]
                    ],
                    [, , "23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})", , , , "23756789", , , [8, 9],
                        [6, 7]
                    ],
                    [, , "(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}", , , , "91234567", , , [8, 9]],
                    [, , "1800(?:1\\d|2[019])\\d{4}", , , , "1800123456", , , [10]],
                    [, , "1900(?:1\\d|2[09])\\d{4}", , , , "1900123456", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "KH", 855, "00[14-9]", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
                        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                KI: [, [, , "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", , , , , , , [5, 8]],
                    [, , "(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}", , , , "31234"],
                    [, , "73140\\d{3}|(?:630[01]|730[0-5])\\d{4}|[67]200[01]\\d{3}", , , , "72001234", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "30(?:0[01]\\d\\d|12(?:11|20))\\d\\d", , , , "30010000", , , [8]], "KI", 686, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                KM: [, [, , "[3478]\\d{6}", , , , , , , [7]],
                    [, , "7[4-7]\\d{5}", , , , "7712345"],
                    [, , "[34]\\d{6}", , , , "3212345"],
                    [, , , , , , , , , [-1]],
                    [, , "8\\d{6}", , , , "8001234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "KM", 269, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                KN: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}", , , , "8692361234", , , , [7]],
                    [, , "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}", , , , "8697652917", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "KN", 1, "011", "1", , , "1|([2-7]\\d{6})$", "869$1", , , , , [, , , , , , , , , [-1]], , "869", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                KP: [, [, , "85\\d{6}|(?:19\\d|2)\\d{7}", , , , , , , [8, 10],
                        [6, 7]
                    ],
                    [, , "(?:2\\d|85)\\d{6}", , , , "21234567", , , [8],
                        [6, 7]
                    ],
                    [, , "19[1-3]\\d{7}", , , , "1921234567", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "KP", 850, "00|99", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , "238[02-9]\\d{4}|2(?:[0-24-9]\\d|3[0-79])\\d{5}", , , , , , , [8]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                KR: [, [, , "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", , , , , , , [5, 6, 8, 9, 10, 11, 12, 13, 14],
                        [3, 4, 7]
                    ],
                    [, , "(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}", , , , "22123456", , , [5, 6, 8, 9, 10],
                        [3, 4, 7]
                    ],
                    [, , "10[01]\\d{6}|1(?:0[2-9]|[126-9]\\d)\\d{6,7}", , , , "1020000000", , , [9, 10]],
                    [, , "00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|80)\\d{7}", , , , "801234567", , , [9, 11, 12, 13, 14]],
                    [, , "60[2-9]\\d{6}", , , , "602345678", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , "50\\d{8,9}", , , , "5012345678", , , [10, 11]],
                    [, , "70\\d{8}", , , , "7012345678", , , [10]], "KR", 82, "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "0", , , "0(8(?:[1-46-8]|5\\d\\d))?", , , , [
                        [, "(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"], "0$1"],
                        [, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"],
                        [, "(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                        [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1", "0$CC-$1"],
                        [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"],
                        [, "(\\d{5})(\\d{3})(\\d{3})", "$1 $2 $3", ["003", "0030"]],
                        [, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1", "0$CC-$1"],
                        [, "(\\d{5})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0"]],
                        [, "(\\d{5})(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]
                    ],
                    [
                        [, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"],
                        [, "(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                        [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1", "0$CC-$1"],
                        [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"],
                        [, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1", "0$CC-$1"]
                    ],
                    [, , "15\\d{7,8}", , , , "1523456789", , , [9, 10]], , , [, , "00(?:3(?:08\\d{6,7}|68\\d{7})|798\\d{7,9})", , , , , , , [11, 12, 13, 14]],
                    [, , "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\\d{4}", , , , "15441234", , , [8]], , , [, , , , , , , , , [-1]]
                ],
                KW: [, [, , "(?:18|[2569]\\d\\d)\\d{5}", , , , , , , [7, 8]],
                    [, , "2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}", , , , "22345678", , , [8]],
                    [, , "(?:52(?:22|5[25])|6(?:222|70[013-9]|93[039])|9(?:11[01]|333|702))\\d{4}|(?:5(?:[05]\\d|1[0-7]|6[56])|6(?:0[034679]|5[015-9]|6\\d|7[67]|9[069])|9(?:0[09]|22|4[01479]|55|6[0679]|7[1-9]|8[057-9]|9\\d))\\d{5}", , , , "50012345", , , [8]],
                    [, , "18\\d{5}", , , , "1801234", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "KW", 965, "00", , , , , , , , [
                        [, "(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]],
                        [, "(\\d{3})(\\d{5})", "$1 $2", ["[25]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                KY: [, [, , "(?:345|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}", , , , "3452221234", , , , [7]],
                    [, , "345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}", , , , "3453231234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                    [, , "(?:345976|900[2-9]\\d\\d)\\d{4}", , , , "9002345678"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "KY", 1, "011", "1", , , "1|([2-9]\\d{6})$", "345$1", , , , , [, , "345849\\d{4}", , , , "3458491234"], , "345", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                KZ: [, [, , "33622\\d{5}|(?:7\\d|80)\\d{8}", , , , , , , [10],
                        [5, 6]
                    ],
                    [, , "(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}", , , , "7123456789", , , , [5, 6]],
                    [, , "7(?:0[0-25-8]|47|6[02-4]|7[15-8]|85)\\d{7}", , , , "7710009998"],
                    [, , "800\\d{7}", , , , "8001234567"],
                    [, , "809\\d{7}", , , , "8091234567"],
                    [, , , , , , , , , [-1]],
                    [, , "808\\d{7}", , , , "8081234567"],
                    [, , "751\\d{7}", , , , "7511234567"], "KZ", 7, "810", "8", , , "8", , "8~10", , , , [, , , , , , , , , [-1]], , "33|7", [, , "751\\d{7}"],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                LA: [, [, , "(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}", , , , , , , [8, 9, 10],
                        [6]
                    ],
                    [, , "(?:2[13]|[35-7][14]|41|8[1468])\\d{6}", , , , "21212862", , , [8],
                        [6]
                    ],
                    [, , "20(?:[29]\\d|5[24-689]|7[6-8])\\d{6}", , , , "2023123456", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "LA", 856, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"],
                        [, "(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "30\\d{7}", , , , "301234567", , , [9]], , , [, , , , , , , , , [-1]]
                ],
                LB: [, [, , "[7-9]\\d{7}|[13-9]\\d{6}", , , , , , , [7, 8]],
                    [, , "(?:(?:[14-69]\\d|8[02-9])\\d|7(?:[2-57]\\d|62|8[0-7]|9[04-9]))\\d{4}", , , , "1123456", , , [7]],
                    [, , "(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3]))\\d{5}", , , , "71123456"],
                    [, , , , , , , , , [-1]],
                    [, , "9[01]\\d{6}", , , , "90123456", , , [8]],
                    [, , "80\\d{6}", , , , "80123456", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "LB", 961, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                LC: [, [, , "(?:[58]\\d\\d|758|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "758(?:4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}", , , , "7584305678", , , , [7]],
                    [, , "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}", , , , "7582845678", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "LC", 1, "011", "1", , , "1|([2-7]\\d{6})$", "758$1", , , , , [, , , , , , , , , [-1]], , "758", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                LI: [, [, , "90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}", , , , , , , [7, 9]],
                    [, , "(?:2(?:01|1[27]|22|3\\d|6[02-578]|96)|3(?:33|40|7[0135-7]|8[048]|9[0269]))\\d{4}", , , , "2345678", , , [7]],
                    [, , "756\\d{4}|(?:6(?:499|5[0-3]\\d|6(?:0[0-7]|10|2[06-9]|39))|7[37-9])\\d{5}", , , , "660234567"],
                    [, , "80(?:02[28]|9\\d\\d)\\d\\d", , , , "8002222", , , [7]],
                    [, , "90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d", , , , "9002222", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "LI", 423, "00", "0", , , "0|(10(?:01|20|66))", , , , [
                        [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"], , "$CC $1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"], , "$CC $1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "870(?:28|87)\\d\\d", , , , "8702812", , , [7]], , , [, , "697(?:56|[78]\\d)\\d{4}", , , , "697861234", , , [9]]
                ],
                LK: [, [, , "(?:[1-7]\\d|[89]1)\\d{7}", , , , , , , [9],
                        [7]
                    ],
                    [, , "(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}", , , , "112345678", , , , [7]],
                    [, , "7[0-25-8]\\d{7}", , , , "712345678"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "LK", 94, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "1973\\d{5}", , , , "197312345"], , , [, , , , , , , , , [-1]]
                ],
                LR: [, [, , "(?:2|33|5\\d|77|88)\\d{7}|[45]\\d{6}", , , , , , , [7, 8, 9]],
                    [, , "(?:2\\d{3}|33333)\\d{4}", , , , "21234567", , , [8, 9]],
                    [, , "(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|5\\d{6}", , , , "770123456", , , [7, 9]],
                    [, , , , , , , , , [-1]],
                    [, , "332(?:02|[34]\\d)\\d{4}", , , , "332021234", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "LR", 231, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3578]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                LS: [, [, , "(?:[256]\\d\\d|800)\\d{5}", , , , , , , [8]],
                    [, , "2\\d{7}", , , , "22123456"],
                    [, , "[56]\\d{7}", , , , "50123456"],
                    [, , "800[256]\\d{4}", , , , "80021234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "LS", 266, "00", , , , , , , , [
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                LT: [, [, , "(?:[3469]\\d|52|[78]0)\\d{6}", , , , , , , [8]],
                    [, , "(?:3[1478]|4[124-6]|52)\\d{6}", , , , "31234567"],
                    [, , "6\\d{7}", , , , "61234567"],
                    [, , "800\\d{5}", , , , "80012345"],
                    [, , "9(?:0[0239]|10)\\d{5}", , , , "90012345"],
                    [, , "808\\d{5}", , , , "80812345"],
                    [, , "700\\d{5}", , , , "70012345"],
                    [, , , , , , , , , [-1]], "LT", 370, "00", "8", , , "[08]", , , , [
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)", , 1],
                        [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", , 1],
                        [, "(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", , 1],
                        [, "(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", , 1]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "70[67]\\d{5}", , , , "70712345"], , , [, , , , , , , , , [-1]]
                ],
                LU: [, [, , "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11]],
                    [, , "(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}", , , , "27123456"],
                    [, , "6(?:[269][18]|5[158]|7[189]|81)\\d{6}", , , , "628123456", , , [9]],
                    [, , "800\\d{5}", , , , "80012345", , , [8]],
                    [, , "90[015]\\d{5}", , , , "90012345", , , [8]],
                    [, , "801\\d{5}", , , , "80112345", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , "20(?:1\\d{5}|[2-689]\\d{1,7})", , , , "20201234", , , [4, 5, 6, 7, 8, 9, 10]], "LU", 352, "00", , , , "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)", , , , [
                        [, "(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], , "$CC $1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], , "$CC $1"],
                        [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"], , "$CC $1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"], , "$CC $1"],
                        [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"], , "$CC $1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"], , "$CC $1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"], , "$CC $1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"], , "$CC $1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                LV: [, [, , "(?:[268]\\d|90)\\d{6}", , , , , , , [8]],
                    [, , "6\\d{7}", , , , "63123456"],
                    [, , "2\\d{7}", , , , "21234567"],
                    [, , "80\\d{6}", , , , "80123456"],
                    [, , "90\\d{6}", , , , "90123456"],
                    [, , "81\\d{6}", , , , "81123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "LV", 371, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                LY: [, [, , "(?:[2569]\\d|71)\\d{7}", , , , , , , [9],
                        [7]
                    ],
                    [, , "(?:2[13-5]|5[1347]|6[1-479]|71)\\d{7}", , , , "212345678", , , , [7]],
                    [, , "9[1-6]\\d{7}", , , , "912345678"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "LY", 218, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{7})", "$1-$2", ["[25-79]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MA: [, [, , "[5-8]\\d{8}", , , , , , , [9]],
                    [, , "5(?:29|38)[89]0\\d{4}|5(?:2(?:[015-7]\\d|2[2-9]|3[2-57]|4[2-46-8]|8[235-7]|90)|3(?:[0-4]\\d|[57][2-9]|6[2-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}", , , , "520123456"],
                    [, , "692[12]\\d{5}|(?:6(?:[0-7]\\d|8[0-247-9]|9[013-9])|7(?:0[06-8]|6[1267]|7[0-27]))\\d{6}", , , , "650123456"],
                    [, , "80\\d{7}", , , , "801234567"],
                    [, , "89\\d{7}", , , , "891234567"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "5924[0-2]\\d{4}", , , , "592401234"], "MA", 212, "00", "0", , , "0", , , , [
                        [, "(\\d{5})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"],
                        [, "(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|892"], "0$1"],
                        [, "(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
                        [, "(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MC: [, [, , "870\\d{5}|(?:[349]|6\\d)\\d{7}", , , , , , , [8, 9]],
                    [, , "(?:870|9[2-47-9]\\d)\\d{5}", , , , "99123456", , , [8]],
                    [, , "4(?:4\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}", , , , "612345678"],
                    [, , "90\\d{6}", , , , "90123456", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "MC", 377, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"]],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]],
                        [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                    ],
                    [
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"]],
                        [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]
                    ],
                    [, , , , , , , , , [-1]], , , [, , "870\\d{5}", , , , , , , [8]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MD: [, [, , "(?:[235-7]\\d|[89]0)\\d{6}", , , , , , , [8]],
                    [, , "(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}", , , , "22212345"],
                    [, , "(?:562|6\\d\\d|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}", , , , "62112345"],
                    [, , "800\\d{5}", , , , "80012345"],
                    [, , "90[056]\\d{5}", , , , "90012345"],
                    [, , "808\\d{5}", , , , "80812345"],
                    [, , , , , , , , , [-1]],
                    [, , "3[08]\\d{6}", , , , "30123456"], "MD", 373, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "803\\d{5}", , , , "80312345"], , , [, , , , , , , , , [-1]]
                ],
                ME: [, [, , "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", , , , , , , [8, 9],
                        [6]
                    ],
                    [, , "(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:[01][2467]|2[2-467]))\\d{5}", , , , "30234567", , , [8],
                        [6]
                    ],
                    [, , "6(?:00|3[024]|6[0-25]|[7-9]\\d)\\d{5}", , , , "67622901", , , [8]],
                    [, , "80(?:[0-2578]|9\\d)\\d{5}", , , , "80080002"],
                    [, , "9(?:4[1568]|5[178])\\d{5}", , , , "94515151", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "78[1-49]\\d{5}", , , , "78108780", , , [8]], "ME", 382, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "77[1-9]\\d{5}", , , , "77273012", , , [8]], , , [, , , , , , , , , [-1]]
                ],
                MF: [, [, , "(?:590|69\\d)\\d{6}", , , , , , , [9]],
                    [, , "590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}", , , , "590271234"],
                    [, , "69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}", , , , "690001234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "MF", 590, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MG: [, [, , "[23]\\d{8}", , , , , , , [9],
                        [7]
                    ],
                    [, , "2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[35]|8[268]|9[245])\\d{5}", , , , "202123456", , , , [7]],
                    [, , "3[2-49]\\d{7}", , , , "321234567"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "22\\d{7}", , , , "221234567"], "MG", 261, "00", "0", , , "0|([24-9]\\d{6})$", "20$1", , , [
                        [, "(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MH: [, [, , "329\\d{4}|(?:[256]\\d|45)\\d{5}", , , , , , , [7]],
                    [, , "(?:247|528|625)\\d{4}", , , , "2471234"],
                    [, , "(?:(?:23|54)5|329|45[56])\\d{4}", , , , "2351234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "635\\d{4}", , , , "6351234"], "MH", 692, "011", "1", , , "1", , , , [
                        [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MK: [, [, , "[2-578]\\d{7}", , , , , , , [8],
                        [6, 7]
                    ],
                    [, , "(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}", , , , "22012345", , , , [6, 7]],
                    [, , "7(?:(?:[0-25-8]\\d|3[2-4]|9[23])\\d|4(?:21|60))\\d{4}", , , , "72345678"],
                    [, , "800\\d{5}", , , , "80012345"],
                    [, , "5[02-9]\\d{6}", , , , "50012345"],
                    [, , "8(?:0[1-9]|[1-9]\\d)\\d{5}", , , , "80123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "MK", 389, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                        [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                ML: [, [, , "(?:[246-9]\\d|50)\\d{6}", , , , , , , [8]],
                    [, , "2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-39]))\\d{5}", , , , "20212345"],
                    [, , "2(?:079|17\\d)\\d{4}|(?:50|[679]\\d|8[239])\\d{6}", , , , "65012345"],
                    [, , "80\\d{6}", , , , "80012345"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "ML", 223, "00", , , , , , , , [
                        [, "(\\d{4})", "$1", ["67[057-9]|74[045]", "67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                    ],
                    [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]
                    ],
                    [, , , , , , , , , [-1]], , , [, , "80\\d{6}"],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MM: [, [, , "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", , , , , , , [6, 7, 8, 9, 10],
                        [5]
                    ],
                    [, , "(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|46|6[25]|7[0-2])|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|46|62|7[0-2])|51\\d\\d)|4(?:2(?:2\\d\\d|48[0-2])|[34]20\\d)|6(?:0(?:[23]|88\\d)|(?:124|320|[56]2\\d)\\d|247[23]|4(?:2[04]\\d|47[23])|7(?:(?:3\\d|8[01459])\\d|4(?:39|60|7[01])))|8(?:[1-3]2\\d|5(?:2\\d|4[1-9]|51))\\d)\\d{4}|5(?:2(?:2\\d{5,6}|47[023]\\d{4})|(?:347[23]|42(?:1|86)|(?:522|[68]20)\\d|7(?:20\\d|48[0-2])|9(?:20\\d|47[01]))\\d{4})|7(?:120\\d{4,5}|(?:425\\d|5(?:202|96\\d))\\d{4})|(?:(?:1[2-6]\\d|4(?:2[24-8]|356|[46][2-6]|5[35])|5(?:[27][2-8]|3[2-68]|4[25-8]|5[23]|6[2-4]|8[25-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][25-8]|[15][235-7]|22|3[2-4]))\\d|8(?:[135]2\\d\\d|2(?:2\\d\\d|320)))\\d{3}|25\\d{5,6}|(?:2[2-9]|43[235-7]|6(?:1[2356]|[24][2-6]|3[256]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:1[235689]|2[2-8]|32|4[24-7]|5[245]|6[23]))\\d{4}|(?:4[35]|5[48]|63|7[0145]|8[13])470\\d{4}|(?:4[35]|5[48]|63|7[0145]|8[13])4\\d{4}", , , , "1234567", , , [6, 7, 8, 9],
                        [5]
                    ],
                    [, , "(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|6[7-9]\\d|7(?:3|5[0-2]|[6-9]\\d)|8(?:8[7-9]|9\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6]|9(?:[089]|[5-7]\\d\\d))\\d)\\d{4}|9[69]1\\d{6}|9[68]\\d{6}", , , , "92123456", , , [7, 8, 9, 10]],
                    [, , "80080(?:[01][1-9]|2\\d)\\d{3}", , , , "8008001234", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "1333\\d{4}|[12]468\\d{4}", , , , "13331234", , , [8]], "MM", 95, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                        [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                        [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
                        [, "(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MN: [, [, , "[12]\\d{7,9}|[57-9]\\d{7}", , , , , , , [8, 9, 10],
                        [4, 5, 6]
                    ],
                    [, , "[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}|(?:11(?:3\\d|4[568])|(?:(?:21|5[0568])\\d|70[0-5])\\d)\\d{4}|[12]2(?:[1-3]\\d{5,6}|7\\d{6})", , , , "50123456", , , , [4, 5, 6]],
                    [, , "(?:8(?:[05689]\\d|3[01])|9(?:[014-9]\\d|20|3[0-4]))\\d{5}", , , , "88123456", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "7(?:100|5(?:0[0579]|1[015]|[389]5|[57][57])|(?:6[0167]|7\\d|8[01])\\d)\\d{4}", , , , "75153456", , , [8]], "MN", 976, "001", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"]],
                        [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                        [, "(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"],
                        [, "(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MO: [, [, , "(?:28|[68]\\d)\\d{6}", , , , , , , [8]],
                    [, , "(?:28[2-57-9]|8(?:11|[2-57-9]\\d))\\d{5}", , , , "28212345"],
                    [, , "6(?:[2356]\\d\\d|8(?:[02][5-9]|[1478]\\d|[356][0-4]))\\d{4}", , , , "66123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "MO", 853, "00", , , , , , , , [
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MP: [, [, , "[58]\\d{9}|(?:67|90)0\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [7]],
                    [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "MP", 1, "011", "1", , , "1|([2-9]\\d{6})$", "670$1", , 1, , , [, , , , , , , , , [-1]], , "670", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MQ: [, [, , "(?:596|69\\d)\\d{6}", , , , , , , [9]],
                    [, , "596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}", , , , "596301234"],
                    [, , "69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}", , , , "696201234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "MQ", 596, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MR: [, [, , "(?:[2-4]\\d\\d|800)\\d{5}", , , , , , , [8]],
                    [, , "(?:25[08]|35\\d|45[1-7])\\d{5}", , , , "35123456"],
                    [, , "[2-4][0-46-9]\\d{6}", , , , "22123456"],
                    [, , "800\\d{5}", , , , "80012345"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "MR", 222, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MS: [, [, , "66449\\d{5}|(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "664491\\d{4}", , , , "6644912345", , , , [7]],
                    [, , "66449[2-6]\\d{4}", , , , "6644923456", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "MS", 1, "011", "1", , , "1|(4\\d{6})$", "664$1", , , , , [, , , , , , , , , [-1]], , "664", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MT: [, [, , "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", , , , , , , [8]],
                    [, , "2(?:0(?:[19]\\d|3[1-4]|6[059])|[1-357]\\d\\d)\\d{4}", , , , "21001234"],
                    [, , "(?:7(?:210|[79]\\d\\d)|9(?:2(?:1[01]|31)|69[67]|8(?:1[1-3]|89|97)|9\\d\\d))\\d{4}", , , , "96961234"],
                    [, , "800[3467]\\d{4}", , , , "80071234"],
                    [, , "5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}", , , , "50037123"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "3550\\d{4}", , , , "35501234"], "MT", 356, "00", , , , , , , , [
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]
                    ], , [, , "7117\\d{4}", , , , "71171234"], , , [, , , , , , , , , [-1]],
                    [, , "501\\d{5}", , , , "50112345"], , , [, , , , , , , , , [-1]]
                ],
                MU: [, [, , "(?:[2-468]|5\\d)\\d{6}", , , , , , , [7, 8]],
                    [, , "(?:2(?:[03478]\\d|1[0-7]|6[0-79])|4(?:[013568]\\d|2[4-7])|54(?:[34]\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}", , , , "54480123"],
                    [, , "5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|5(?:2[589]|4[3489]|7\\d|8[0-689]|9[0-8])\\d{5}", , , , "52512345", , , [8]],
                    [, , "80[0-2]\\d{4}", , , , "8001234", , , [7]],
                    [, , "30\\d{5}", , , , "3012345", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "3(?:20|9\\d)\\d{4}", , , , "3201234", , , [7]], "MU", 230, "0(?:0|[24-7]0|3[03])", , , , , , "020", , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["5"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MV: [, [, , "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", , , , , , , [7, 10]],
                    [, , "(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}", , , , "6701234", , , [7]],
                    [, , "46[46]\\d{4}|(?:7[2-9]|9[13-9])\\d{5}", , , , "7712345", , , [7]],
                    [, , "800\\d{7}", , , , "8001234567", , , [10]],
                    [, , "900\\d{7}", , , , "9001234567", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "MV", 960, "0(?:0|19)", , , , , , "00", , [
                        [, "(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9[13-9]"]],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "4[05]0\\d{4}", , , , "4001234", , , [7]], , , [, , , , , , , , , [-1]]
                ],
                MW: [, [, , "1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}", , , , , , , [7, 9]],
                    [, , "(?:1[2-9]|21\\d\\d)\\d{5}", , , , "1234567"],
                    [, , "111\\d{6}|(?:77|88|99)\\d{7}", , , , "991234567", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "31\\d{7}", , , , "310123456", , , [9]], "MW", 265, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MX: [, [, , "(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}", , , , , , , [10, 11],
                        [7, 8]
                    ],
                    [, , "(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", , , , "2001234567", , , [10],
                        [7, 8]
                    ],
                    [, , "(?:1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))|2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", , , , "12221234567", , , , [7, 8]],
                    [, , "8(?:00|88)\\d{7}", , , , "8001234567", , , [10]],
                    [, , "900\\d{7}", , , , "9001234567", , , [10]],
                    [, , "300\\d{7}", , , , "3001234567", , , [10]],
                    [, , "500\\d{7}", , , , "5001234567", , , [10]],
                    [, , , , , , , , , [-1]], "MX", 52, "0[09]", "01", , , "0(?:[12]|4[45])|1", , "00", , [
                        [, "(\\d{5})", "$1", ["53"]],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], , , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], , , 1],
                        [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], , , 1],
                        [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], , , 1]
                    ],
                    [
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], , , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], , , 1],
                        [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], , , 1],
                        [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], , , 1]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MY: [, [, , "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", , , , , , , [8, 9, 10],
                        [6, 7]
                    ],
                    [, , "(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}", , , , "323856789", , , [8, 9],
                        [6, 7]
                    ],
                    [, , "1(?:4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d))|(?:[23679][2-9]|4[235-9]|59\\d)\\d|8(?:1[23]|[236]\\d|4[06]|5[7-9]|7[016-9]|8[01]|9[0-8]))\\d{5}", , , , "123456789", , , [9, 10]],
                    [, , "1[378]00\\d{6}", , , , "1300123456", , , [10]],
                    [, , "1600\\d{6}", , , , "1600123456", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "154(?:6(?:0\\d|1[0-3])|8(?:[25]1|4[0189]|7[0-4679]))\\d{4}", , , , "1546012345", , , [10]], "MY", 60, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[0249]|[367][2-9]|8[1-9])|8"], "0$1"],
                        [, "(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]"]],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                MZ: [, [, , "(?:2|8\\d)\\d{7}", , , , , , , [8, 9]],
                    [, , "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", , , , "21123456", , , [8]],
                    [, , "8[2-7]\\d{7}", , , , "821234567", , , [9]],
                    [, , "800\\d{6}", , , , "800123456", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "MZ", 258, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                NA: [, [, , "[68]\\d{7,8}", , , , , , , [8, 9]],
                    [, , "6(?:1(?:[02-4]\\d\\d|17)|2(?:17|54\\d|69|70)|3(?:17|2[0237]\\d|34|6[289]|7[01]|81)|4(?:17|(?:27|41|5[25])\\d|69|7[01])|5(?:17|2[236-8]\\d|69|7[01])|6(?:17|26\\d|38|42|69|7[01])|7(?:17|(?:2[2-4]|30)\\d|6[89]|7[01]))\\d{4}|6(?:1(?:2[2-7]|3[01378]|4[0-4]|69|7[014])|25[0-46-8]|32\\d|4(?:2[0-27]|4[016]|5[0-357])|52[02-9]|62[56]|7(?:2[2-69]|3[013]))\\d{4}", , , , "61221234"],
                    [, , "(?:60|8[1245])\\d{7}", , , , "811234567", , , [9]],
                    [, , "80\\d{7}", , , , "800123456", , , [9]],
                    [, , "8701\\d{5}", , , , "870123456", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "8(?:3\\d\\d|86)\\d{5}", , , , "88612345"], "NA", 264, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                NC: [, [, , "[2-57-9]\\d{5}", , , , , , , [6]],
                    [, , "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}", , , , "201234"],
                    [, , "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}", , , , "751234"],
                    [, , , , , , , , , [-1]],
                    [, , "36\\d{4}", , , , "366711"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "NC", 687, "00", , , , , , , , [
                        [, "(\\d{3})", "$1", ["5[6-8]"]],
                        [, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]
                    ],
                    [
                        [, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-57-9]"]]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                NE: [, [, , "[0289]\\d{7}", , , , , , , [8]],
                    [, , "2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}", , , , "20201234"],
                    [, , "(?:8[014589]|9\\d)\\d{6}", , , , "93123456"],
                    [, , "08\\d{6}", , , , "08123456"],
                    [, , "09\\d{6}", , , , "09123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "NE", 227, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[01]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                NF: [, [, , "[13]\\d{5}", , , , , , , [6],
                        [5]
                    ],
                    [, , "(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}", , , , "106609", , , , [5]],
                    [, , "3[58]\\d{4}", , , , "381234", , , , [5]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "NF", 672, "00", , , , "([0-258]\\d{4})$", "3$1", , , [
                        [, "(\\d{2})(\\d{4})", "$1 $2", ["1"]],
                        [, "(\\d)(\\d{5})", "$1 $2", ["3"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                NG: [, [, , "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", , , , , , , [7, 8, 10, 11, 12, 13, 14],
                        [5, 6]
                    ],
                    [, , "(?:(?:[1-356]\\d|4[02-8]|7[0-79]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[0-3578])\\d{5}", , , , "18040123", , , [7, 8],
                        [5, 6]
                    ],
                    [, , "(?:707[0-3]|8(?:01|19)[01])\\d{6}|(?:70[1-689]|8(?:0[2-9]|1[0-8])|90[1-35-9])\\d{7}", , , , "8021234567", , , [10]],
                    [, , "800\\d{7,11}", , , , "80017591759", , , [10, 11, 12, 13, 14]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "NG", 234, "009", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
                        [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
                        [, "(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "700\\d{7,11}", , , , "7001234567", , , [10, 11, 12, 13, 14]], , , [, , , , , , , , , [-1]]
                ],
                NI: [, [, , "(?:1800|[25-8]\\d{3})\\d{4}", , , , , , , [8]],
                    [, , "2\\d{7}", , , , "21234567"],
                    [, , "(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}", , , , "81234567"],
                    [, , "1800\\d{4}", , , , "18001234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "NI", 505, "00", , , , , , , , [
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                NL: [, [, , "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}", , , , , , , [5, 6, 7, 8, 9, 10]],
                    [, , "(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}", , , , "101234567", , , [9]],
                    [, , "6[1-58]\\d{7}", , , , "612345678", , , [9]],
                    [, , "800\\d{4,7}", , , , "8001234", , , [7, 8, 9, 10]],
                    [, , "90[069]\\d{4,7}", , , , "9061234", , , [7, 8, 9, 10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "(?:85|91)\\d{7}", , , , "851234567", , , [9]], "NL", 31, "00", "0", , , "0", , , , [
                        [, "(\\d{4})", "$1", ["1[238]|[34]"]],
                        [, "(\\d{2})(\\d{3,4})", "$1 $2", ["14"]],
                        [, "(\\d{6})", "$1", ["1"]],
                        [, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                        [, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                        [, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]
                    ],
                    [
                        [, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
                        [, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
                        [, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]
                    ],
                    [, , "66\\d{7}", , , , "662345678", , , [9]], , , [, , "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)\\d", , , , , , , [5, 6]],
                    [, , "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d", , , , "14020", , , [5, 6, 9]], , , [, , , , , , , , , [-1]]
                ],
                NO: [, [, , "(?:0|[2-9]\\d{3})\\d{4}", , , , , , , [5, 8]],
                    [, , "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", , , , "21234567", , , [8]],
                    [, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", , , , "40612345", , , [8]],
                    [, , "80[01]\\d{5}", , , , "80012345", , , [8]],
                    [, , "82[09]\\d{5}", , , , "82012345", , , [8]],
                    [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [8]],
                    [, , "880\\d{5}", , , , "88012345", , , [8]],
                    [, , "85[0-5]\\d{5}", , , , "85012345", , , [8]], "NO", 47, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
                    ], , [, , , , , , , , , [-1]], 1, "[02-689]|7[0-8]", [, , , , , , , , , [-1]],
                    [, , "(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}", , , , "02000"], , , [, , "81[23]\\d{5}", , , , "81212345", , , [8]]
                ],
                NP: [, [, , "9\\d{9}|[1-9]\\d{7}", , , , , , , [8, 10],
                        [6, 7]
                    ],
                    [, , "1[0-6]\\d{6}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-79])[2-6]\\d{5}", , , , "14567890", , , [8],
                        [6, 7]
                    ],
                    [, , "9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}", , , , "9841234567", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "NP", 977, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                        [, "(\\d{2})(\\d{6})", "$1-$2", ["[1-8]|9(?:[1-579]|6[2-6])"], "0$1"],
                        [, "(\\d{3})(\\d{7})", "$1-$2", ["9"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                NR: [, [, , "(?:444|55\\d|888)\\d{4}", , , , , , , [7]],
                    [, , "(?:444|888)\\d{4}", , , , "4441234"],
                    [, , "55[4-9]\\d{4}", , , , "5551234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "NR", 674, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[458]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                NU: [, [, , "(?:[47]|888\\d)\\d{3}", , , , , , , [4, 7]],
                    [, , "[47]\\d{3}", , , , "7012", , , [4]],
                    [, , "888[4-9]\\d{3}", , , , "8884012", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "NU", 683, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["8"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                NZ: [, [, , "[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}", , , , , , , [8, 9, 10],
                        [7]
                    ],
                    [, , "24099\\d{3}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}", , , , "32345678", , , [8],
                        [7]
                    ],
                    [, , "2[0-28]\\d{8}|2[0-27-9]\\d{7}|21\\d{6}", , , , "211234567"],
                    [, , "508\\d{6,7}|80\\d{6,8}", , , , "800123456"],
                    [, , "90\\d{6,7}", , , , "900123456", , , [8, 9]],
                    [, , , , , , , , , [-1]],
                    [, , "70\\d{7}", , , , "701234567", , , [9]],
                    [, , , , , , , , , [-1]], "NZ", 64, "0(?:0|161)", "0", , , "0", , "00", , [
                        [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[59]|80"], "0$1"],
                        [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7|86"], "0$1"]
                    ], , [, , "[28]6\\d{6,7}", , , , "26123456", , , [8, 9]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                OM: [, [, , "(?:[279]\\d{3}|500)\\d{4}|8007\\d{4,5}", , , , , , , [7, 8, 9]],
                    [, , "2[2-6]\\d{6}", , , , "23123456", , , [8]],
                    [, , "90[1-9]\\d{5}|(?:7[129]|9[1-9])\\d{6}", , , , "92123456", , , [8]],
                    [, , "500\\d{4}|8007\\d{4,5}", , , , "80071234"],
                    [, , "900\\d{5}", , , , "90012345", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "OM", 968, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
                        [, "(\\d{2})(\\d{6})", "$1 $2", ["2"]],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[79]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                PA: [, [, , "(?:[1-57-9]|6\\d)\\d{6}", , , , , , , [7, 8]],
                    [, , "(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|[68][58]|7[0167]|9[39])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-35]|33|4[0-579]|55|6[068]|7[06-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[05]|7[0-24-9]|8[7-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}", , , , "2001234", , , [7]],
                    [, , "(?:1[16]1|21[89]|6(?:[02-9]\\d|1[0-6])\\d|8(?:1[01]|7[23]))\\d{4}", , , , "61234567"],
                    [, , "800\\d{4}", , , , "8001234", , , [7]],
                    [, , "(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}", , , , "8601234", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "PA", 507, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                        [, "(\\d{4})(\\d{4})", "$1-$2", ["6"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                PE: [, [, , "(?:[14-8]|9\\d)\\d{7}", , , , , , , [8, 9],
                        [6, 7]
                    ],
                    [, , "19(?:[02-68]\\d|1[035-9]|7[0-689]|9[1-9])\\d{4}|(?:1[0-8]|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}", , , , "11234567", , , [8],
                        [6, 7]
                    ],
                    [, , "9\\d{8}", , , , "912345678", , , [9]],
                    [, , "800\\d{5}", , , , "80012345", , , [8]],
                    [, , "805\\d{5}", , , , "80512345", , , [8]],
                    [, , "801\\d{5}", , , , "80112345", , , [8]],
                    [, , "80[24]\\d{5}", , , , "80212345", , , [8]],
                    [, , , , , , , , , [-1]], "PE", 51, "19(?:1[124]|77|90)00", "0", " Anexo ", , "0", , , , [
                        [, "(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                        [, "(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                        [, "(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                PF: [, [, , "[48]\\d{7}|4\\d{5}", , , , , , , [6, 8]],
                    [, , "4(?:[09][4-689]\\d|4)\\d{4}", , , , "40412345"],
                    [, , "8[7-9]\\d{6}", , , , "87123456", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "PF", 689, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[48]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , "44\\d{4}", , , , , , , [6]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                PG: [, [, , "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", , , , , , , [7, 8]],
                    [, , "(?:64[1-9]|7730|85[02-46-9])\\d{4}|(?:3[0-2]|4[257]|5[34]|77[0-24]|9[78])\\d{5}", , , , "3123456"],
                    [, , "775\\d{5}|(?:7[0-689]|81)\\d{6}", , , , "70123456", , , [8]],
                    [, , "180\\d{4}", , , , "1801234", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "2(?:0[0-47]|7[568])\\d{4}", , , , "2751234", , , [7]], "PG", 675, "00|140[1-3]", , , , , , "00", , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                PH: [, [, , "(?:1800|8)\\d{7,9}|2\\d{5}(?:\\d{2})?|(?:[3-7]|9\\d)\\d{8}", , , , , , , [6, 8, 9, 10, 11, 12, 13],
                        [4, 5, 7]
                    ],
                    [, , "2\\d{5}(?:\\d{2})?|88(?:22\\d\\d|42)\\d{4}|88\\d{7}|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-7])\\d{7}", , , , "21234567", , , [6, 8, 9, 10],
                        [4, 5, 7]
                    ],
                    [, , "(?:81[37]|9(?:0[5-9]|1[0-24-9]|2[0-35-9]|[35]\\d|4[235-9]|6[0-25-8]|7[1-9]|8[19]|9[4-9]))\\d{7}", , , , "9051234567", , , [10]],
                    [, , "1800\\d{7,9}", , , , "180012345678", , , [11, 12, 13]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "PH", 63, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                        [, "(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                        [, "(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                        [, "(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                PK: [, [, , "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", , , , , , , [8, 9, 10, 11, 12],
                        [5, 6, 7]
                    ],
                    [, , "(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}", , , , "2123456789", , , [9, 10],
                        [5, 6, 7, 8]
                    ],
                    [, , "3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}", , , , "3012345678", , , [10]],
                    [, , "800\\d{5}", , , , "80012345", , , [8]],
                    [, , "900\\d{5}", , , , "90012345", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , "122\\d{6}", , , , "122044444", , , [9]],
                    [, , , , , , , , , [-1]], "PK", 92, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]0"], "0$1"],
                        [, "(\\d{4})(\\d{5})", "$1 $2", ["1"]],
                        [, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                        [, "(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"],
                        [, "(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
                        [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"],
                        [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", , , , "21111825888", , , [11, 12]], , , [, , , , , , , , , [-1]]
                ],
                PL: [, [, , "[1-57-9]\\d{6}(?:\\d{2})?|6\\d{5,8}", , , , , , , [6, 7, 8, 9]],
                    [, , "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))", , , , "123456789", , , [7, 9]],
                    [, , "(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", , , , "512345678", , , [9]],
                    [, , "800\\d{6}", , , , "800123456", , , [9]],
                    [, , "70[01346-8]\\d{6}", , , , "701234567", , , [9]],
                    [, , "801\\d{6}", , , , "801234567", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , "39\\d{7}", , , , "391234567", , , [9]], "PL", 48, "00", , , , , , , , [
                        [, "(\\d{5})", "$1", ["19"]],
                        [, "(\\d{3})(\\d{3})", "$1 $2", ["11|64"]],
                        [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                        [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["39|45|5[0137]|6[0469]|7[02389]|8[08]"]],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-8]|9[145]"]]
                    ], , [, , "64\\d{4,7}", , , , "641234567"], , , [, , , , , , , , , [-1]],
                    [, , "804\\d{6}", , , , "804123456", , , [9]], , , [, , , , , , , , , [-1]]
                ],
                PM: [, [, , "[45]\\d{5}", , , , , , , [6]],
                    [, , "(?:4[1-3]|50)\\d{4}", , , , "430123"],
                    [, , "(?:4[02-4]|5[05])\\d{4}", , , , "551234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "PM", 508, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                PR: [, [, , "(?:[589]\\d\\d|787)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [7]],
                    [, , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                    [, , "900[2-9]\\d{6}", , , , "9002345678"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "PR", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , "787|939", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                PS: [, [, , "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", , , , , , , [8, 9, 10],
                        [7]
                    ],
                    [, , "(?:22[2-47-9]|42[45]|82[01458]|92[369])\\d{5}", , , , "22234567", , , [8],
                        [7]
                    ],
                    [, , "5[69]\\d{7}", , , , "599123456", , , [9]],
                    [, , "1800\\d{6}", , , , "1800123456", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , "1700\\d{6}", , , , "1700123456", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "PS", 970, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                PT: [, [, , "(?:[26-9]\\d|30)\\d{7}", , , , , , , [9]],
                    [, , "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}", , , , "212345678"],
                    [, , "9(?:[1-36]\\d\\d|480)\\d{5}", , , , "912345678"],
                    [, , "80[02]\\d{6}", , , , "800123456"],
                    [, , "(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}", , , , "760123456"],
                    [, , "80(?:8\\d|9[1579])\\d{5}", , , , "808123456"],
                    [, , "884[0-4689]\\d{5}", , , , "884123456"],
                    [, , "30\\d{7}", , , , "301234567"], "PT", 351, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "70(?:7\\d|8[17])\\d{5}", , , , "707123456"], , , [, , "600\\d{6}", , , , "600110000"]
                ],
                PW: [, [, , "(?:[25-8]\\d\\d|345|488|900)\\d{4}", , , , , , , [7]],
                    [, , "(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}", , , , "2771234"],
                    [, , "(?:6[2-4689]0|77\\d|88[0-4])\\d{4}", , , , "6201234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "PW", 680, "01[12]", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                PY: [, [, , "59\\d{4,6}|(?:[2-46-9]\\d|5[0-8])\\d{4,7}", , , , , , , [6, 7, 8, 9],
                        [5]
                    ],
                    [, , "(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-46-8])|7(?:4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}", , , , "212345678", , , [7, 8, 9],
                        [5, 6]
                    ],
                    [, , "9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}", , , , "961456789", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "8700[0-4]\\d{4}", , , , "870012345", , , [9]], "PY", 595, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                        [, "(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                        [, "(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6[347]|7[46-8]|85"], "(0$1)"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
                        [, "(\\d{3})(\\d{6})", "$1 $2", ["9"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "[2-9]0\\d{4,7}", , , , "201234567"], , , [, , , , , , , , , [-1]]
                ],
                QA: [, [, , "800\\d{4}|(?:2|[3-7]\\d)\\d{6}", , , , , , , [7, 8]],
                    [, , "4[04]\\d{6}", , , , "44123456", , , [8]],
                    [, , "[35-7]\\d{7}", , , , "33123456", , , [8]],
                    [, , "800\\d{4}", , , , "8001234", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "QA", 974, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["2[126]|8"]],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]
                    ], , [, , "2(?:[12]\\d|61)\\d{4}", , , , "2123456", , , [7]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                RE: [, [, , "(?:26|[68]\\d)\\d{7}", , , , , , , [9]],
                    [, , "262\\d{6}", , , , "262161234"],
                    [, , "69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-26]|7[0-27]|8[0-8]|9[0-479]))\\d{4}", , , , "692123456"],
                    [, , "80\\d{7}", , , , "801234567"],
                    [, , "89[1-37-9]\\d{6}", , , , "891123456"],
                    [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", , , , "810123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "RE", 262, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], 1, "262|69|8", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                RO: [, [, , "(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}", , , , , , , [6, 9]],
                    [, , "[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d", , , , "211234567"],
                    [, , "7120\\d{5}|7(?:[02-7]\\d|1[01]|8[03-8]|99)\\d{6}", , , , "712034567", , , [9]],
                    [, , "800\\d{6}", , , , "800123456", , , [9]],
                    [, , "90[036]\\d{6}", , , , "900123456", , , [9]],
                    [, , "801\\d{6}", , , , "801123456", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "RO", 40, "00", "0", " int ", , "0", , , , [
                        [, "(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
                        [, "(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[237-9]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "37\\d{7}", , , , "372123456", , , [9]], , , [, , , , , , , , , [-1]]
                ],
                RS: [, [, , "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", , , , , , , [6, 7, 8, 9, 10, 11, 12],
                        [4, 5]
                    ],
                    [, , "(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}", , , , "10234567", , , [7, 8, 9, 10, 11, 12],
                        [4, 5, 6]
                    ],
                    [, , "6(?:[0-689]|7\\d)\\d{6,7}", , , , "601234567", , , [8, 9, 10]],
                    [, , "800\\d{3,9}", , , , "80012345"],
                    [, , "(?:78\\d|90[0169])\\d{3,7}", , , , "90012345", , , [6, 7, 8, 9, 10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "RS", 381, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
                        [, "(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "7[06]\\d{4,10}", , , , "700123456"], , , [, , , , , , , , , [-1]]
                ],
                RU: [, [, , "[347-9]\\d{9}", , , , , , , [10],
                        [7]
                    ],
                    [, , "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", , , , "3011234567", , , , [7]],
                    [, , "9\\d{9}", , , , "9123456789"],
                    [, , "80[04]\\d{7}", , , , "8001234567"],
                    [, , "80[39]\\d{7}", , , , "8091234567"],
                    [, , , , , , , , , [-1]],
                    [, , "808\\d{7}", , , , "8081234567"],
                    [, , , , , , , , , [-1]], "RU", 7, "810", "8", , , "8", , "8~10", , [
                        [, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", ["[0-79]"]],
                        [, "(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", , 1],
                        [, "(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", , 1]
                    ],
                    [
                        [, "(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", , 1],
                        [, "(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", , 1]
                    ],
                    [, , , , , , , , , [-1]], 1, "3[04-689]|[489]", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                RW: [, [, , "(?:06|[27]\\d\\d|[89]00)\\d{6}", , , , , , , [8, 9]],
                    [, , "(?:06|2[258]\\d)\\d{6}", , , , "250123456"],
                    [, , "7[238]\\d{7}", , , , "720123456", , , [9]],
                    [, , "800\\d{6}", , , , "800123456", , , [9]],
                    [, , "900\\d{6}", , , , "900123456", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "RW", 250, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SA: [, [, , "92\\d{7}|(?:[15]|8\\d)\\d{8}", , , , , , , [9, 10],
                        [7]
                    ],
                    [, , "1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", , , , "112345678", , , [9],
                        [7]
                    ],
                    [, , "5(?:[013-689]\\d|7[0-36-8])\\d{6}", , , , "512345678", , , [9]],
                    [, , "800\\d{7}", , , , "8001234567", , , [10]],
                    [, , "925\\d{6}", , , , "925012345", , , [9]],
                    [, , "920\\d{6}", , , , "920012345", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "SA", 966, "00", "0", , , "0", , , , [
                        [, "(\\d{4})(\\d{5})", "$1 $2", ["9"]],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "811\\d{7}", , , , "8110123456", , , [10]], , , [, , , , , , , , , [-1]]
                ],
                SB: [, [, , "(?:[1-6]|[7-9]\\d\\d)\\d{4}", , , , , , , [5, 7]],
                    [, , "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", , , , "40123", , , [5]],
                    [, , "48\\d{3}|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}", , , , "7421234"],
                    [, , "1[38]\\d{3}", , , , "18123", , , [5]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "5[12]\\d{3}", , , , "51123", , , [5]], "SB", 677, "0[01]", , , , , , , , [
                        [, "(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SC: [, [, , "8000\\d{3}|(?:[249]\\d|64)\\d{5}", , , , , , , [7]],
                    [, , "4[2-46]\\d{5}", , , , "4217123"],
                    [, , "2[5-8]\\d{5}", , , , "2510123"],
                    [, , "8000\\d{3}", , , , "8000000"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "971\\d{4}|(?:64|95)\\d{5}", , , , "6412345"], "SC", 248, "010|0[0-2]", , , , , , "00", , [
                        [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SD: [, [, , "[19]\\d{8}", , , , , , , [9]],
                    [, , "1(?:5[3-7]|8[35-7])\\d{6}", , , , "153123456"],
                    [, , "(?:1[0-2]|9[0-3569])\\d{7}", , , , "911231234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "SD", 249, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SE: [, [, , "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", , , , , , , [6, 7, 8, 9, 10, 12]],
                    [, , "10[1-8]\\d{6}|90[1-9]\\d{4,6}|(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d{5,7}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}", , , , "8123456", , , [7, 8, 9]],
                    [, , "7[02369]\\d{7}", , , , "701234567", , , [9]],
                    [, , "20\\d{4,7}", , , , "20123456", , , [6, 7, 8, 9]],
                    [, , "649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}", , , , "9001234567", , , [7, 8, 9, 10]],
                    [, , "77[0-7]\\d{6}", , , , "771234567", , , [9]],
                    [, , "75[1-8]\\d{6}", , , , "751234567", , , [9]],
                    [, , , , , , , , , [-1]], "SE", 46, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1"],
                        [, "(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44)"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1"],
                        [, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"],
                        [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"],
                        [, "(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1"],
                        [, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1"],
                        [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1"]
                    ],
                    [
                        [, "(\\d{2})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]],
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["9(?:00|39|44)"]],
                        [, "(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]],
                        [, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                        [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],
                        [, "(\\d{3})(\\d{2,3})(\\d{3})", "$1 $2 $3", ["9(?:00|39|44)"]],
                        [, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"]],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7"]],
                        [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                        [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]
                    ],
                    [, , "74[02-9]\\d{6}", , , , "740123456", , , [9]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , "(?:25[245]|67[3-68])\\d{9}", , , , "254123456789", , , [12]]
                ],
                SG: [, [, , "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", , , , , , , [8, 10, 11]],
                    [, , "6[1-9]\\d{6}", , , , "61234567", , , [8]],
                    [, , "89[01]\\d{5}|(?:8[1-8]|9[0-8])\\d{6}", , , , "81234567", , , [8]],
                    [, , "(?:18|8)00\\d{7}", , , , "18001234567", , , [10, 11]],
                    [, , "1900\\d{7}", , , , "19001234567", , , [11]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "3[12]\\d{6}", , , , "31234567", , , [8]], "SG", 65, "0[0-3]\\d", , , , , , , , [
                        [, "(\\d{4,5})", "$1", ["1[0135-7]|77"]],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                        [, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                    ],
                    [
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                        [, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                        [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "7000\\d{7}", , , , "70001234567", , , [11]], , , [, , , , , , , , , [-1]]
                ],
                SH: [, [, , "(?:[256]\\d|8)\\d{3}", , , , , , , [4, 5]],
                    [, , "2(?:[0-57-9]\\d|6[4-9])\\d\\d", , , , "22158"],
                    [, , "[56]\\d{4}", , , , "51234", , , [5]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "262\\d\\d", , , , "26212", , , [5]], "SH", 290, "00", , , , , , , , , , [, , , , , , , , , [-1]], 1, "[256]", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SI: [, [, , "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", , , , , , , [5, 6, 7, 8]],
                    [, , "(?:[1-357][2-8]|4[24-8])\\d{6}", , , , "12345678", , , [8],
                        [7]
                    ],
                    [, , "6(?:5(?:1\\d|55|[67]0)|9(?:10|[69]\\d))\\d{4}|(?:[37][01]|4[0139]|51|6[48])\\d{6}", , , , "31234567", , , [8]],
                    [, , "80\\d{4,6}", , , , "80123456", , , [6, 7, 8]],
                    [, , "89[1-3]\\d{2,5}|90\\d{4,6}", , , , "90123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "(?:59\\d\\d|8(?:1(?:[67]\\d|8[01389])|2(?:0\\d|2[0378]|8[0-2489])|3[389]\\d))\\d{4}", , , , "59012345", , , [8]], "SI", 386, "00|10(?:22|66|88|99)", "0", , , "0", , "00", , [
                        [, "(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
                        [, "(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SJ: [, [, , "0\\d{4}|(?:[4589]\\d|79)\\d{6}", , , , , , , [5, 8]],
                    [, , "79\\d{6}", , , , "79123456", , , [8]],
                    [, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", , , , "41234567", , , [8]],
                    [, , "80[01]\\d{5}", , , , "80012345", , , [8]],
                    [, , "82[09]\\d{5}", , , , "82012345", , , [8]],
                    [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [8]],
                    [, , "880\\d{5}", , , , "88012345", , , [8]],
                    [, , "85[0-5]\\d{5}", , , , "85012345", , , [8]], "SJ", 47, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "79", [, , , , , , , , , [-1]],
                    [, , "(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}", , , , "02000"], , , [, , "81[23]\\d{5}", , , , "81212345", , , [8]]
                ],
                SK: [, [, , "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", , , , , , , [6, 7, 9]],
                    [, , "(?:2(?:16|[2-9]\\d{3})|[3-5][1-8]\\d{3})\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d", , , , "221234567"],
                    [, , "909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|[45]\\d)\\d{6}", , , , "912123456", , , [9]],
                    [, , "800\\d{6}", , , , "800123456", , , [9]],
                    [, , "9(?:00|[78]\\d)\\d{6}", , , , "900123456", , , [9]],
                    [, , "8[5-9]\\d{7}", , , , "850123456", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , "6(?:02|5[0-4]|9[0-6])\\d{6}", , , , "690123456", , , [9]], "SK", 421, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                        [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                        [, "(\\d{4})(\\d{3})", "$1 $2", ["909", "9090"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                    ],
                    [
                        [, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
                        [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]
                    ],
                    [, , "9090\\d{3}", , , , "9090123", , , [7]], , , [, , "9090\\d{3}|(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}", , , , , , , [7, 9]],
                    [, , "96\\d{7}", , , , "961234567", , , [9]], , , [, , , , , , , , , [-1]]
                ],
                SL: [, [, , "(?:[2378]\\d|99)\\d{6}", , , , , , , [8],
                        [6]
                    ],
                    [, , "22\\d{6}", , , , "22221234", , , , [6]],
                    [, , "(?:25|3[0134]|7[5-9]|8[08]|99)\\d{6}", , , , "25123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "SL", 232, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{6})", "$1 $2", ["[237-9]"], "(0$1)"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SM: [, [, , "(?:0549|[5-7]\\d)\\d{6}", , , , , , , [8, 10],
                        [6]
                    ],
                    [, , "0549(?:8[0157-9]|9\\d)\\d{4}", , , , "0549886377", , , [10],
                        [6]
                    ],
                    [, , "6[16]\\d{6}", , , , "66661212", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , "7[178]\\d{6}", , , , "71123456", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "5[158]\\d{6}", , , , "58001110", , , [8]], "SM", 378, "00", , , , "([89]\\d{5})$", "0549$1", , , [
                        [, "(\\d{6})", "$1", ["[89]"]],
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                        [, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                    ],
                    [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                        [, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SN: [, [, , "(?:[378]\\d{4}|93330)\\d{4}", , , , , , , [9]],
                    [, , "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}", , , , "301012345"],
                    [, , "7(?:[06-8]\\d|21|90)\\d{6}", , , , "701234567"],
                    [, , "800\\d{6}", , , , "800123456"],
                    [, , "88[4689]\\d{6}", , , , "884123456"],
                    [, , "81[02468]\\d{6}", , , , "810123456"],
                    [, , , , , , , , , [-1]],
                    [, , "93330\\d{4}|3(?:392|9[01]\\d)\\d{5}", , , , "933301234"], "SN", 221, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SO: [, [, , "[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}", , , , , , , [6, 7, 8, 9]],
                    [, , "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}|(?:[134]\\d|8[125])\\d{4}", , , , "4012345", , , [6, 7]],
                    [, , "28\\d{5}|(?:6[1-9]|79)\\d{6,7}|(?:15|24|(?:3[59]|4[89]|8[08])\\d|60|7[1-8]|9(?:0[67]|[2-9]))\\d{6}", , , , "71123456", , , [7, 8, 9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "SO", 252, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                        [, "(\\d{6})", "$1", ["[134]"]],
                        [, "(\\d)(\\d{6})", "$1 $2", ["1|2[0-79]|3[0-46-8]|4[0-7]|59"]],
                        [, "(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79[0-8]|90"]],
                        [, "(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[1-35-9]|799|9[2-9]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SR: [, [, , "(?:[2-5]|68|[78]\\d)\\d{5}", , , , , , , [6, 7]],
                    [, , "(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}", , , , "211234"],
                    [, , "(?:7[124-7]|8[125-9])\\d{5}", , , , "7412345", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "56\\d{4}", , , , "561234", , , [6]], "SR", 597, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                        [, "(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
                        [, "(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SS: [, [, , "[19]\\d{8}", , , , , , , [9]],
                    [, , "18\\d{7}", , , , "181234567"],
                    [, , "(?:12|9[1257])\\d{7}", , , , "977123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "SS", 211, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                ST: [, [, , "(?:22|9\\d)\\d{5}", , , , , , , [7]],
                    [, , "22\\d{5}", , , , "2221234"],
                    [, , "900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}", , , , "9812345"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "ST", 239, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SV: [, [, , "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", , , , , , , [7, 8, 11]],
                    [, , "2[1-6]\\d{6}", , , , "21234567", , , [8]],
                    [, , "[67]\\d{7}", , , , "70123456", , , [8]],
                    [, , "800\\d{4}(?:\\d{4})?", , , , "8001234", , , [7, 11]],
                    [, , "900\\d{4}(?:\\d{4})?", , , , "9001234", , , [7, 11]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "SV", 503, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                        [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SX: [, [, , "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "7215(?:4[2-8]|8[239]|9[056])\\d{4}", , , , "7215425678", , , , [7]],
                    [, , "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", , , , "7215205678", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                    [, , "900[2-9]\\d{6}", , , , "9002123456"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "SX", 1, "011", "1", , , "1|(5\\d{6})$", "721$1", , , , , [, , , , , , , , , [-1]], , "721", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SY: [, [, , "[1-39]\\d{8}|[1-5]\\d{7}", , , , , , , [8, 9],
                        [6, 7]
                    ],
                    [, , "[12]1\\d{6,7}|(?:1(?:[2356]|4\\d)|2[235]|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}", , , , "112345678", , , , [6, 7]],
                    [, , "9(?:22|[3-589]\\d|6[024-9])\\d{6}", , , , "944567890", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "SY", 963, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", , 1]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                SZ: [, [, , "0800\\d{4}|(?:[237]\\d|900)\\d{6}", , , , , , , [8, 9]],
                    [, , "[23][2-5]\\d{6}", , , , "22171234", , , [8]],
                    [, , "7[6-9]\\d{6}", , , , "76123456", , , [8]],
                    [, , "0800\\d{4}", , , , "08001234", , , [8]],
                    [, , "900\\d{6}", , , , "900012345", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "70\\d{6}", , , , "70012345", , , [8]], "SZ", 268, "00", , , , , , , , [
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
                        [, "(\\d{5})(\\d{4})", "$1 $2", ["9"]]
                    ], , [, , , , , , , , , [-1]], , , [, , "0800\\d{4}", , , , , , , [8]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TA: [, [, , "8\\d{3}", , , , , , , [4]],
                    [, , "8\\d{3}", , , , "8999"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "TA", 290, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "8", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TC: [, [, , "(?:[58]\\d\\d|649|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "649(?:712|9(?:4\\d|50))\\d{4}", , , , "6497121234", , , , [7]],
                    [, , "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}", , , , "6492311234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                    [, , "900[2-9]\\d{6}", , , , "9002345678"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , "64971[01]\\d{4}", , , , "6497101234", , , , [7]], "TC", 1, "011", "1", , , "1|([2-479]\\d{6})$", "649$1", , , , , [, , , , , , , , , [-1]], , "649", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TD: [, [, , "(?:22|[69]\\d|77)\\d{6}", , , , , , , [8]],
                    [, , "22(?:[37-9]0|5[0-5]|6[89])\\d{4}", , , , "22501234"],
                    [, , "(?:6[023568]|77|9\\d)\\d{6}", , , , "63012345"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "TD", 235, "00|16", , , , , , "00", , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TG: [, [, , "[279]\\d{7}", , , , , , , [8]],
                    [, , "2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}", , , , "22212345"],
                    [, , "(?:7[09]|9[0-36-9])\\d{6}", , , , "90112345"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "TG", 228, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TH: [, [, , "1\\d{8,9}|(?:[2-57]|[689]\\d)\\d{7}", , , , , , , [8, 9, 10]],
                    [, , "(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", , , , "21234567", , , [8]],
                    [, , "(?:14|6[1-6]|[89]\\d)\\d{7}", , , , "812345678", , , [9]],
                    [, , "1800\\d{6}", , , , "1800123456", , , [10]],
                    [, , "1900\\d{6}", , , , "1900123456", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "6[08]\\d{7}", , , , "601234567", , , [9]], "TH", 66, "00[1-9]", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"],
                        [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TJ: [, [, , "(?:[3-59]\\d|77|88)\\d{7}", , , , , , , [9],
                        [3, 5, 6, 7]
                    ],
                    [, , "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}", , , , "372123456", , , , [3, 5, 6, 7]],
                    [, , "41[18]\\d{6}|(?:5[05]|77|88|9\\d)\\d{7}", , , , "917123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "TJ", 992, "810", "8", , , "8", , "8~10", , [
                        [, "(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"], , , 1],
                        [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], , , 1],
                        [, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3"], , , 1],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[457-9]"], , , 1]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TK: [, [, , "[2-47]\\d{3,6}", , , , , , , [4, 5, 6, 7]],
                    [, , "(?:2[2-4]|[34]\\d)\\d{2,5}", , , , "3101"],
                    [, , "7[2-4]\\d{2,5}", , , , "7290"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "TK", 690, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TL: [, [, , "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", , , , , , , [7, 8]],
                    [, , "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", , , , "2112345", , , [7]],
                    [, , "7[3-8]\\d{6}", , , , "77212345", , , [8]],
                    [, , "80\\d{5}", , , , "8012345", , , [7]],
                    [, , "90\\d{5}", , , , "9012345", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , "70\\d{5}", , , , "7012345", , , [7]],
                    [, , , , , , , , , [-1]], "TL", 670, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TM: [, [, , "[1-6]\\d{7}", , , , , , , [8]],
                    [, , "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}", , , , "12345678"],
                    [, , "6[1-9]\\d{6}", , , , "66123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "TM", 993, "810", "8", , , "8", , "8~10", , [
                        [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                        [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"],
                        [, "(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TN: [, [, , "[2-57-9]\\d{7}", , , , , , , [8]],
                    [, , "81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}", , , , "30010123"],
                    [, , "3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-6])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}", , , , "20123456"],
                    [, , "8010\\d{4}", , , , "80101234"],
                    [, , "88\\d{6}", , , , "88123456"],
                    [, , "8[12]10\\d{4}", , , , "81101234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "TN", 216, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TO: [, [, , "(?:0800|[5-8]\\d{3})\\d{3}|[2-8]\\d{4}", , , , , , , [5, 7]],
                    [, , "(?:2\\d|3[0-8]|4[0-4]|50|6[09]|7[0-24-69]|8[05])\\d{3}", , , , "20123", , , [5]],
                    [, , "(?:6(?:3[02]|85|90)|7(?:[2-46]0|[578]\\d)|8[46-9]\\d)\\d{4}", , , , "7715123", , , [7]],
                    [, , "0800\\d{3}", , , , "0800222", , , [7]],
                    [, , "55[04]\\d{4}", , , , "5501234", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "TO", 676, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
                        [, "(\\d{4})(\\d{3})", "$1 $2", ["0"]],
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[5-8]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TR: [, [, , "(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}", , , , , , , [7, 10]],
                    [, , "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", , , , "2123456789", , , [10]],
                    [, , "56161\\d{5}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}", , , , "5012345678", , , [10]],
                    [, , "800\\d{7}", , , , "8001234567", , , [10]],
                    [, , "(?:8[89]8|900)\\d{7}", , , , "9001234567", , , [10]],
                    [, , , , , , , , , [-1]],
                    [, , "592(?:21[12]|461)\\d{4}", , , , "5922121234", , , [10]],
                    [, , , , , , , , , [-1]], "TR", 90, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d)(\\d{3})", "$1 $2 $3", ["444"], , , 1],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", , 1]
                    ],
                    [
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[0589]|90"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", , 1]
                    ],
                    [, , "512\\d{7}", , , , "5123456789", , , [10]], , , [, , "444\\d{4}", , , , , , , [7]],
                    [, , "(?:444|850\\d{3})\\d{4}", , , , "4441444"], , , [, , , , , , , , , [-1]]
                ],
                TT: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "868(?:2(?:01|1[89]|[23]\\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}", , , , "8682211234", , , , [7]],
                    [, , "868(?:2(?:6[6-9]|[7-9]\\d)|[37](?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d))\\d{4}", , , , "8682911234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                    [, , "900[2-9]\\d{6}", , , , "9002345678"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "TT", 1, "011", "1", , , "1|([2-46-8]\\d{6})$", "868$1", , , , , [, , , , , , , , , [-1]], , "868", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , "868619\\d{4}", , , , "8686191234", , , , [7]]
                ],
                TV: [, [, , "(?:2|7\\d\\d|90)\\d{4}", , , , , , , [5, 6, 7]],
                    [, , "2[02-9]\\d{3}", , , , "20123", , , [5]],
                    [, , "(?:7[01]\\d|90)\\d{4}", , , , "901234", , , [6, 7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "TV", 688, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                TW: [, [, , "(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}", , , , , , , [7, 8, 9, 10]],
                    [, , "24\\d{6,7}|(?:6412|8(?:2(?:3\\d|66)|36[24-9]))\\d{4}|(?:2[235-8]\\d|3[2-9]|4(?:[239]\\d|[78])|5[2-8]|6[235-79]|7[1-9]|8[7-9])\\d{6}", , , , "221234567", , , [8, 9]],
                    [, , "9[0-8]\\d{7}", , , , "912345678", , , [9]],
                    [, , "80[0-79]\\d{6}", , , , "800123456", , , [9]],
                    [, , "20(?:[013-9]\\d\\d|2)\\d{4}", , , , "203123456", , , [7, 9]],
                    [, , , , , , , , , [-1]],
                    [, , "99\\d{7}", , , , "990123456", , , [9]],
                    [, , "70\\d{8}", , , , "7012345678", , , [10]], "TW", 886, "0(?:0[25-79]|19)", "0", "#", , "0", , , , [
                        [, "(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                        [, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|7[1-9]|8[237-9]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[258]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "50[0-46-9]\\d{6}", , , , "500123456", , , [9]], , , [, , , , , , , , , [-1]]
                ],
                TZ: [, [, , "(?:[26-8]\\d|41|90)\\d{7}", , , , , , , [9]],
                    [, , "2[2-8]\\d{7}", , , , "222345678"],
                    [, , "(?:6[2-9]|7[13-9])\\d{7}", , , , "621234567"],
                    [, , "80[08]\\d{6}", , , , "800123456"],
                    [, , "90\\d{7}", , , , "900123456"],
                    [, , "8(?:40|6[01])\\d{6}", , , , "840123456"],
                    [, , , , , , , , , [-1]],
                    [, , "41\\d{7}", , , , "412345678"], "TZ", 255, "00[056]", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , "(?:8(?:[04]0|6[01])|90\\d)\\d{6}"],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                UA: [, [, , "[89]\\d{9}|[3-9]\\d{8}", , , , , , , [9, 10],
                        [5, 6, 7]
                    ],
                    [, , "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}", , , , "311234567", , , [9],
                        [5, 6, 7]
                    ],
                    [, , "(?:50|6[36-8]|7[1-3]|9[1-9])\\d{7}", , , , "501234567", , , [9]],
                    [, , "800[1-8]\\d{5,6}", , , , "800123456"],
                    [, , "900[239]\\d{5,6}", , , , "900212345"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "89[1-579]\\d{6}", , , , "891234567", , , [9]], "UA", 380, "00", "0", , , "0", , "0~0", , [
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]", "4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"], "0$1"],
                        [, "(\\d{4})(\\d{5})", "$1 $2", ["[3-6]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                UG: [, [, , "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", , , , , , , [9],
                        [5, 6, 7]
                    ],
                    [, , "(?:20(?:(?:(?:[0147]\\d|5[0-4])\\d|2(?:40|[5-9]\\d)|3(?:0[67]|2[0-4])|810)\\d|6(?:00[0-2]|[15-9]\\d\\d|30[0-4]))|[34]\\d{5})\\d{3}", , , , "312345678", , , , [5, 6, 7]],
                    [, , "7260\\d{5}|7(?:[0157-9]\\d|20|4[0-4])\\d{6}", , , , "712345678"],
                    [, , "800[1-3]\\d{5}", , , , "800123456"],
                    [, , "90[1-3]\\d{6}", , , , "901123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "UG", 256, "00[057]", "0", , , "0", , , , [
                        [, "(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
                        [, "(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
                        [, "(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                US: [, [, , "[2-9]\\d{9}", , , , , , , [10],
                        [7]
                    ],
                    [, , "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", , , , "2015550123", , , , [7]],
                    [, , "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", , , , "2015550123", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                    [, , "900[2-9]\\d{6}", , , , "9002345678"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "US", 1, "011", "1", , , "1", , , 1, [
                        [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"]],
                        [, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], , , 1]
                    ],
                    [
                        [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-9]"]]
                    ],
                    [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
                    [, , "710[2-9]\\d{6}", , , , "7102123456"], , , [, , , , , , , , , [-1]]
                ],
                UY: [, [, , "(?:[249]\\d\\d|80)\\d{5}|9\\d{6}", , , , , , , [7, 8]],
                    [, , "(?:2\\d|4[2-7])\\d{6}", , , , "21231234", , , [8],
                        [7]
                    ],
                    [, , "9[1-9]\\d{6}", , , , "94231234", , , [8]],
                    [, , "80[05]\\d{4}", , , , "8001234", , , [7]],
                    [, , "90[0-8]\\d{4}", , , , "9001234", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "UY", 598, "0(?:0|1[3-9]\\d)", "0", " int. ", , "0", , "00", , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["8|90"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                        [, "(\\d{4})(\\d{4})", "$1 $2", ["[24]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                UZ: [, [, , "[679]\\d{8}", , , , , , , [9]],
                    [, , "78(?:1(?:13|2[02]|50)|2(?:10|2[139]|98)|77[01])\\d{4}|(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|1[12]\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}", , , , "669050123"],
                    [, , "(?:6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))|9[0-57-9]\\d{3})\\d{4}", , , , "912345678"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "UZ", 998, "810", "8", , , "8", , "8~10", , [
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"], "8 $1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                VA: [, [, , "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", , , , , , , [6, 7, 8, 9, 10, 11, 12]],
                    [, , "06698\\d{1,6}", , , , "0669812345", , , [6, 7, 8, 9, 10, 11]],
                    [, , "3[1-9]\\d{8}|3[2-9]\\d{7}", , , , "3123456789", , , [9, 10]],
                    [, , "80(?:0\\d{3}|3)\\d{3}", , , , "800123456", , , [6, 9]],
                    [, , "(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}", , , , "899123456", , , [6, 8, 9, 10]],
                    [, , "84(?:[08]\\d{3}|[17])\\d{3}", , , , "848123456", , , [6, 9]],
                    [, , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [9, 10]],
                    [, , "55\\d{8}", , , , "5512345678", , , [10]], "VA", 39, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "06698", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , "3[2-8]\\d{9,10}", , , , "33101234501", , , [11, 12]]
                ],
                VC: [, [, , "(?:[58]\\d\\d|784|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", , , , "7842661234", , , , [7]],
                    [, , "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}", , , , "7844301234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                    [, , "900[2-9]\\d{6}", , , , "9002345678"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "VC", 1, "011", "1", , , "1|([2-7]\\d{6})$", "784$1", , , , , [, , , , , , , , , [-1]], , "784", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                VE: [, [, , "[89]00\\d{7}|(?:[24]\\d|50)\\d{8}", , , , , , , [10],
                        [7]
                    ],
                    [, , "(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|50[01])\\d{7}", , , , "2121234567", , , , [7]],
                    [, , "4(?:1[24-8]|2[46])\\d{7}", , , , "4121234567"],
                    [, , "800\\d{7}", , , , "8001234567"],
                    [, , "900\\d{7}", , , , "9001234567"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "VE", 58, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{7})", "$1-$2", ["[24589]"], "0$1", "$CC $1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                VG: [, [, , "(?:284|[58]\\d\\d|900)\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "284496[0-5]\\d{3}|284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}", , , , "2842291234", , , , [7]],
                    [, , "284496[6-9]\\d{3}|284(?:3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|54[0-57])\\d{4}", , , , "2843001234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                    [, , "900[2-9]\\d{6}", , , , "9002345678"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "VG", 1, "011", "1", , , "1|([2-578]\\d{6})$", "284$1", , , , , [, , , , , , , , , [-1]], , "284", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                VI: [, [, , "[58]\\d{9}|(?:34|90)0\\d{7}", , , , , , , [10],
                        [7]
                    ],
                    [, , "340(?:2(?:0[12]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:22|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}", , , , "3406421234", , , , [7]],
                    [, , "340(?:2(?:0[12]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:22|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}", , , , "3406421234", , , , [7]],
                    [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                    [, , "900[2-9]\\d{6}", , , , "9002345678"],
                    [, , , , , , , , , [-1]],
                    [, , "5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                    [, , , , , , , , , [-1]], "VI", 1, "011", "1", , , "1|([2-9]\\d{6})$", "340$1", , 1, , , [, , , , , , , , , [-1]], , "340", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                VN: [, [, , "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", , , , , , , [7, 8, 9, 10]],
                    [, , "2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-79]|9[0-4679])\\d{7}", , , , "2101234567", , , [10]],
                    [, , "(?:52[238]|8(?:79|9[689])|99[013-9])\\d{6}|(?:3\\d|5[689]|7[06-9]|8[1-68]|9[0-8])\\d{7}", , , , "912345678", , , [9]],
                    [, , "1(?:228\\d{4}|800\\d{4,6})", , , , "1800123456", , , [8, 9, 10]],
                    [, , "1900\\d{4,6}", , , , "1900123456", , , [8, 9, 10]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "672\\d{6}", , , , "672012345", , , [9]], "VN", 84, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[17]99"], "0$1", , 1],
                        [, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", , 1],
                        [, "(\\d{3})(\\d{4,5})", "$1 $2", ["69"], "0$1", , 1],
                        [, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], , , 1],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", , 1],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", , 1],
                        [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", , 1]
                    ],
                    [
                        [, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", , 1],
                        [, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], , , 1],
                        [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[69]"], "0$1", , 1],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[3578]"], "0$1", , 1],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", , 1],
                        [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", , 1]
                    ],
                    [, , , , , , , , , [-1]], , , [, , "[17]99\\d{4}|69\\d{5,6}", , , , , , , [7, 8]],
                    [, , "(?:[17]99|80\\d)\\d{4}|69\\d{5,6}", , , , "1992000", , , [7, 8]], , , [, , , , , , , , , [-1]]
                ],
                VU: [, [, , "(?:[23]\\d|[48]8)\\d{3}|(?:[57]\\d|90)\\d{5}", , , , , , , [5, 7]],
                    [, , "(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}", , , , "22123", , , [5]],
                    [, , "57[2-5]\\d{4}|(?:5[0-689]|7[013-7])\\d{5}", , , , "5912345", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "90[1-9]\\d{4}", , , , "9010123", , , [7]], "VU", 678, "00", , , , , , , , [
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "(?:3[03]|900\\d)\\d{3}", , , , "30123"], , , [, , , , , , , , , [-1]]
                ],
                WF: [, [, , "(?:[45]0|68|72|8\\d)\\d{4}", , , , , , , [6]],
                    [, , "(?:50|68|72)\\d{4}", , , , "501234"],
                    [, , "(?:50|68|72|8[23])\\d{4}", , , , "501234"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "WF", 681, "00", , , , , , , , [
                        [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[4-8]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , "[48]0\\d{4}", , , , "401234"]
                ],
                WS: [, [, , "[2-6]\\d{4}|8\\d{5}(?:\\d{4})?|[78]\\d{6}", , , , , , , [5, 6, 7, 10]],
                    [, , "(?:[2-5]\\d|6[1-9])\\d{3}", , , , "22123", , , [5]],
                    [, , "(?:7[25-7]|8(?:[3-7]|9\\d{3}))\\d{5}", , , , "7212345", , , [7, 10]],
                    [, , "800\\d{3}", , , , "800123", , , [6]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "WS", 685, "0", , , , , , , , [
                        [, "(\\d{5})", "$1", ["[2-6]"]],
                        [, "(\\d{3})(\\d{3,7})", "$1 $2", ["8"]],
                        [, "(\\d{2})(\\d{5})", "$1 $2", ["7"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                XK: [, [, , "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", , , , , , , [8, 9]],
                    [, , "(?:2[89]|39)0\\d{6}|[23][89]\\d{6}", , , , "28012345"],
                    [, , "4[3-79]\\d{6}", , , , "43201234", , , [8]],
                    [, , "800\\d{5}", , , , "80001234", , , [8]],
                    [, , "900\\d{5}", , , , "90001234", , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "XK", 383, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                YE: [, [, , "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", , , , , , , [7, 8, 9],
                        [6]
                    ],
                    [, , "17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}", , , , "1234567", , , [7, 8],
                        [6]
                    ],
                    [, , "7[0137]\\d{7}", , , , "712345678", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "YE", 967, "00", "0", , , "0", , , , [
                        [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                YT: [, [, , "80\\d{7}|(?:26|63)9\\d{6}", , , , , , , [9]],
                    [, , "269(?:0[67]|5[01]|6\\d|[78]0)\\d{4}", , , , "269601234"],
                    [, , "639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}", , , , "639012345"],
                    [, , "80\\d{7}", , , , "801234567"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "YT", 262, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , "269|63", [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                ZA: [, [, , "[1-9]\\d{8}|8\\d{4,7}", , , , , , , [5, 6, 7, 8, 9]],
                    [, , "(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", , , , "101234567", , , [9]],
                    [, , "8[1-4]\\d{3,7}|(?:6\\d|7[0-46-9]|85)\\d{7}", , , , "711234567"],
                    [, , "80\\d{7}", , , , "801234567", , , [9]],
                    [, , "(?:86[2-9]|9[0-2]\\d)\\d{6}", , , , "862345678", , , [9]],
                    [, , "860\\d{6}", , , , "860123456", , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , "87\\d{7}", , , , "871234567", , , [9]], "ZA", 27, "00", "0", , , "0", , , , [
                        [, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "861\\d{6}", , , , "861123456", , , [9]], , , [, , , , , , , , , [-1]]
                ],
                ZM: [, [, , "800\\d{6}|(?:21|76|9\\d)\\d{7}", , , , , , , [9],
                        [6]
                    ],
                    [, , "21[1-8]\\d{6}", , , , "211234567", , , , [6]],
                    [, , "(?:76|9[5-8])\\d{7}", , , , "955123456"],
                    [, , "800\\d{6}", , , , "800123456"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "ZM", 260, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{3})", "$1 $2", ["[1-9]"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                        [, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                    ],
                    [
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
                        [, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]
                    ],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                ZW: [, [, , "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", , , , , , , [5, 6, 7, 8, 9, 10],
                        [3, 4]
                    ],
                    [, , "(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}", , , , "1312345", , , , [3, 4]],
                    [, , "7(?:1[2-9]|[37][1-9]|8[2-7])\\d{6}", , , , "712345678", , , [9]],
                    [, , "80(?:[01]\\d|20|8[0-8])\\d{3}", , , , "8001234", , , [7]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "86(?:1[12]|22|30|44|55|77|8[368])\\d{6}", , , , "8686123456", , , [10]], "ZW", 263, "00", "0", , , "0", , , , [
                        [, "(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                        [, "(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                        [, "(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                        [, "(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                        [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                        [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                        [, "(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                        [, "(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"],
                        [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                        [, "(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                800: [, [, , "\\d{8}", , , , , , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "\\d{8}", , , , "12345678"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "001", 800, , , , , , , , 1, [
                        [, "(\\d{4})(\\d{4})", "$1 $2"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                808: [, [, , "\\d{8}", , , , , , , [8]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "\\d{8}", , , , "12345678"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "001", 808, , , , , , , , 1, [
                        [, "(\\d{4})(\\d{4})", "$1 $2"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                870: [, [, , "[35-7]\\d{8}", , , , , , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , "(?:[356]\\d|7[6-8])\\d{7}", , , , "301234567"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "001", 870, , , , , , , , , [
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                878: [, [, , "10\\d{10}", , , , , , , [12]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "10\\d{10}", , , , "101234567890"], "001", 878, , , , , , , , 1, [
                        [, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                881: [, [, , "[67]\\d{8}", , , , , , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , "[67]\\d{8}", , , , "612345678"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "001", 881, , , , , , , , , [
                        [, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[67]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                882: [, [, , "1\\d{6,11}|3\\d{6}(?:\\d{2,5})?", , , , , , , [7, 8, 9, 10, 11, 12]],
                    [, , , , , , , , , [-1]],
                    [, , "3(?:37\\d\\d|42)\\d{4}|3(?:2|47|7\\d{3})\\d{7}", , , , "3421234", , , [7, 9, 10, 12]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|3(?:45|9\\d{3})\\d{7}", , , , "390123456789"], "001", 882, , , , , , , , , [
                        [, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                        [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1"]],
                        [, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                        [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]],
                        [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]],
                        [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
                        [, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[13]"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , "348[57]\\d{7}", , , , "34851234567", , , [11]]
                ],
                883: [, [, , "51\\d{7}(?:\\d{3})?", , , , , , , [9, 12]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "51[013]0\\d{8}|5100\\d{5}", , , , "510012345"], "001", 883, , , , , , , , 1, [
                        [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                        [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["510"]],
                        [, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["5"]]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ],
                888: [, [, , "\\d{11}", , , , , , , [11]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "001", 888, , , , , , , , 1, [
                        [, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , "\\d{11}", , , , "12345678901"], , , [, , , , , , , , , [-1]]
                ],
                979: [, [, , "\\d{9}", , , , , , , [9]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , "\\d{9}", , , , "123456789"],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], "001", 979, , , , , , , , 1, [
                        [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]
                    ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                    [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
                ]
            };

        function F() { this.a = {} }
        F.c = void 0, F.a = function() { return F.c ? F.c : F.c = new F };
        var q = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", "０": "0", "１": "1", "２": "2", "３": "3", "４": "4", "５": "5", "６": "6", "７": "7", "８": "8", "９": "9", "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9" },
            G = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", "０": "0", "１": "1", "２": "2", "３": "3", "４": "4", "５": "5", "６": "6", "７": "7", "８": "8", "９": "9", "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", A: "2", B: "2", C: "2", D: "3", E: "3", F: "3", G: "4", H: "4", I: "4", J: "5", K: "5", L: "5", M: "6", N: "6", O: "6", P: "7", Q: "7", R: "7", S: "7", T: "8", U: "8", V: "8", W: "9", X: "9", Y: "9", Z: "9" },
            U = /^[+\uff0b]+/,
            W = /([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/,
            K = /[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/,
            V = /[\\\/] *x/,
            Y = /[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/,
            Z = /(?:.*?[A-Za-z]){3}.*/,
            X = /(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$/i,
            J = /^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]\/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]\/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$/i,
            Q = /(\$\d)/;

        function ee(e) { return !(2 > e.length) && we(J, e) }

        function te(e) { return we(Z, e) ? ie(e, G) : ie(e, q) }

        function de(e) {
            var t = te(e.toString());
            e.c = "", e.a(t)
        }

        function ne(e) { return null != e && (1 != w(e, 9) || -1 != x(e, 9)[0]) }

        function ie(e, t) { for (var d, n = new L, i = e.length, o = 0; o < i; ++o) null != (d = t[(d = e.charAt(o)).toUpperCase()]) && n.a(d); return n.toString() }

        function oe(e) { return null != e && isNaN(e) && e.toUpperCase() in H }

        function re(e, t, d) {
            if (0 == y(t, 2) && null != t.a[5]) { var n = v(t, 5); if (0 < n.length) return n }
            n = v(t, 1);
            var i = se(t);
            if (0 == d) return le(n, 0, i, "");
            if (!(n in z)) return i;
            e = ae(e, n, he(n)), t = null != t.a[3] && 0 != y(t, 3).length ? 3 == d ? ";ext=" + y(t, 3) : null != e.a[13] ? y(e, 13) + v(t, 3) : " ext. " + v(t, 3) : "";
            e: {
                for (var o, r = (e = 0 == x(e, 20).length || 2 == d ? x(e, 19) : x(e, 20)).length, a = 0; a < r; ++a) { var s = w(o = e[a], 3); if ((0 == s || 0 == i.search(y(o, 3, s - 1))) && we(s = new RegExp(y(o, 1)), i)) { e = o; break e } }
                e = null
            }
            return null != e && (e = v(r = e, 2), o = new RegExp(y(r, 1)), v(r, 5), r = v(r, 4), i = 2 == d && null != r && 0 < r.length ? i.replace(o, e.replace(Q, r)) : i.replace(o, e), 3 == d && (i = (i = i.replace(/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]\/~\u2053\u223c\uff5e]+/, "")).replace(/[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]\/~\u2053\u223c\uff5e]+/g, "-"))), le(n, d, i, t)
        }

        function ae(e, t, d) { return pe(e, "001" == d ? "" + t : d) }

        function se(e) { if (null == e.a[2]) return ""; var t = "" + y(e, 2); return null != e.a[4] && y(e, 4) && 0 < v(e, 8) ? Array(v(e, 8) + 1).join("0") + t : t }

        function le(e, t, d, n) {
            switch (t) {
                case 0:
                    return "+" + e + d + n;
                case 1:
                    return "+" + e + " " + d + n;
                case 3:
                    return "tel:+" + e + "-" + d + n;
                default:
                    return d + n
            }
        }

        function ue(e, t) {
            switch (t) {
                case 4:
                    return y(e, 5);
                case 3:
                    return y(e, 4);
                case 1:
                    return y(e, 3);
                case 0:
                case 2:
                    return y(e, 2);
                case 5:
                    return y(e, 6);
                case 6:
                    return y(e, 8);
                case 7:
                    return y(e, 7);
                case 8:
                    return y(e, 21);
                case 9:
                    return y(e, 25);
                case 10:
                    return y(e, 28);
                default:
                    return y(e, 1)
            }
        }

        function ce(e, t) { return fe(e, y(t, 1)) ? fe(e, y(t, 5)) ? 4 : fe(e, y(t, 4)) ? 3 : fe(e, y(t, 6)) ? 5 : fe(e, y(t, 8)) ? 6 : fe(e, y(t, 7)) ? 7 : fe(e, y(t, 21)) ? 8 : fe(e, y(t, 25)) ? 9 : fe(e, y(t, 28)) ? 10 : fe(e, y(t, 2)) ? y(t, 18) || fe(e, y(t, 3)) ? 2 : 0 : !y(t, 18) && fe(e, y(t, 3)) ? 1 : -1 : -1 }

        function pe(e, t) {
            if (null == t) return null;
            t = t.toUpperCase();
            var d = e.a[t];
            if (null == d) {
                if (null == (d = H[t])) return null;
                d = (new N).a(j.f(), d), e.a[t] = d
            }
            return d
        }

        function fe(e, t) { var d = e.length; return !(0 < w(t, 9) && -1 == i(x(t, 9), d)) && we(v(t, 2), e) }

        function $e(e, t) {
            if (null == t) return null;
            var d = v(t, 1);
            if (null == (d = z[d])) e = null;
            else if (1 == d.length) e = d[0];
            else e: {
                t = se(t);
                for (var n, i = d.length, o = 0; o < i; o++) { var r = pe(e, n = d[o]); if (null != r.a[23]) { if (0 == t.search(y(r, 23))) { e = n; break e } } else if (-1 != ce(t, r)) { e = n; break e } }
                e = null
            }
            return e
        }

        function he(e) { return null == (e = z[e]) ? "ZZ" : e[0] }

        function ge(e, t, d, n) {
            var r = ue(d, n),
                a = 0 == w(r, 9) ? x(y(d, 1), 9) : x(r, 9);
            if (r = x(r, 10), 2 == n) {
                if (!ne(ue(d, 0))) return ge(e, t, d, 1);
                ne(e = ue(d, 1)) && (o(a = a.concat(0 == w(e, 9) ? x(y(d, 1), 9) : x(e, 9))), 0 == r.length ? r = x(e, 10) : o(r = r.concat(x(e, 10))))
            }
            return -1 == a[0] ? 5 : (t = t.length, -1 < i(r, t) ? 4 : (d = a[0]) == t ? 0 : d > t ? 2 : a[a.length - 1] < t ? 3 : -1 < i(a, t, 1) ? 0 : 5)
        }

        function me(e, t) { var d = se(t); return (t = v(t, 1)) in z ? ge(e, d, t = ae(e, t, he(t)), -1) : 1 }

        function be(e, t, d, n, i, o) {
            if (0 == t.length) return 0;
            var r;
            t = new L(t), null != d && (r = y(d, 11)), null == r && (r = "NonMatch");
            var a = t.toString();
            if (0 == a.length) r = 20;
            else if (U.test(a)) a = a.replace(U, ""), t.c = "", t.a(te(a)), r = 1;
            else {
                if (a = new RegExp(r), de(t), 0 == (r = t.toString()).search(a)) {
                    a = r.match(a)[0].length;
                    var s = r.substring(a).match(W);
                    s && null != s[1] && 0 < s[1].length && "0" == ie(s[1], q) ? r = !1 : (t.c = "", t.a(r.substring(a)), r = !0)
                } else r = !1;
                r = r ? 5 : 20
            }
            if (i && C(o, 6, r), 20 != r) {
                if (2 >= t.c.length) throw Error("Phone number too short after IDD");
                e: {
                    if (0 != (e = t.toString()).length && "0" != e.charAt(0))
                        for (i = e.length, t = 1; 3 >= t && t <= i; ++t)
                            if ((d = parseInt(e.substring(0, t), 10)) in z) { n.a(e.substring(t)), n = d; break e }
                    n = 0
                }
                if (0 != n) return C(o, 1, n), n;
                throw Error("Invalid country calling code")
            }
            return null != d && (a = "" + (r = v(d, 10)), 0 == (s = t.toString()).lastIndexOf(a, 0) && (a = new L(s.substring(a.length)), s = y(d, 1), s = new RegExp(v(s, 2)), ye(a, d, null), a = a.toString(), !we(s, t.toString()) && we(s, a) || 3 == ge(e, t.toString(), d, -1))) ? (n.a(a), i && C(o, 6, 10), C(o, 1, r), r) : (C(o, 1, 0), 0)
        }

        function ye(e, t, d) {
            var n = e.toString(),
                i = n.length,
                o = y(t, 15);
            if (0 != i && null != o && 0 != o.length) {
                var r = new RegExp("^(?:" + o + ")");
                if (i = r.exec(n)) {
                    var a = we(o = new RegExp(v(y(t, 1), 2)), n),
                        s = i.length - 1;
                    null == (t = y(t, 16)) || 0 == t.length || null == i[s] || 0 == i[s].length ? a && !we(o, n.substring(i[0].length)) || (null != d && 0 < s && null != i[s] && d.a(i[1]), e.set(n.substring(i[0].length))) : (n = n.replace(r, t), (!a || we(o, n)) && (null != d && 0 < s && d.a(i[1]), e.set(n)))
                }
            }
        }

        function ve(e, t, d) { if (!oe(d) && 0 < t.length && "+" != t.charAt(0)) throw Error("Invalid country calling code"); return xe(e, t, d, !0) }

        function xe(e, t, d, n) {
            if (null == t) throw Error("The string supplied did not seem to be a phone number");
            if (250 < t.length) throw Error("The string supplied is too long to be a phone number");
            var i = new L,
                o = t.indexOf(";phone-context=");
            if (0 <= o) {
                var r = o + 15;
                if ("+" == t.charAt(r)) {
                    var a = t.indexOf(";", r);
                    0 < a ? i.a(t.substring(r, a)) : i.a(t.substring(r))
                }
                r = t.indexOf("tel:"), i.a(t.substring(0 <= r ? r + 4 : 0, o))
            } else i.a(function(e) { var t = e.search(K); return 0 <= t ? 0 <= (t = (e = (e = e.substring(t)).replace(Y, "")).search(V)) && (e = e.substring(0, t)) : e = "", e }(t));
            if (0 < (r = (o = i.toString()).indexOf(";isub=")) && (i.c = "", i.a(o.substring(0, r))), !ee(i.toString())) throw Error("The string supplied did not seem to be a phone number");
            if (o = i.toString(), !(oe(d) || null != o && 0 < o.length && U.test(o))) throw Error("Invalid country calling code");
            o = new O, n && C(o, 5, t);
            e: {
                if (0 <= (r = (t = i.toString()).search(X)) && ee(t.substring(0, r)))
                    for (var s = (a = t.match(X)).length, l = 1; l < s; ++l)
                        if (null != a[l] && 0 < a[l].length) { i.c = "", i.a(t.substring(0, r)), t = a[l]; break e }
                t = ""
            }
            0 < t.length && C(o, 3, t), r = pe(e, d), t = new L, a = 0, s = i.toString();
            try { a = be(e, s, r, t, n, o) } catch (d) { if ("Invalid country calling code" != d.message || !U.test(s)) throw d; if (0 == (a = be(e, s = s.replace(U, ""), r, t, n, o))) throw d }
            if (0 != a ? (i = he(a)) != d && (r = ae(e, a, i)) : (de(i), t.a(i.toString()), null != d ? C(o, 1, a = v(r, 10)) : n && (delete o.a[6], o.c && delete o.c[6])), 2 > t.c.length) throw Error("The string supplied is too short to be a phone number");
            if (null != r && (d = new L, ye(i = new L(t.toString()), r, d), 2 != (e = ge(e, i.toString(), r, -1)) && 4 != e && 5 != e && (t = i, n && 0 < d.toString().length && C(o, 7, d.toString()))), 2 > (e = (n = t.toString()).length)) throw Error("The string supplied is too short to be a phone number");
            if (17 < e) throw Error("The string supplied is too long to be a phone number");
            if (1 < n.length && "0" == n.charAt(0)) {
                for (C(o, 4, !0), e = 1; e < n.length - 1 && "0" == n.charAt(e);) e++;
                1 != e && C(o, 8, e)
            }
            return C(o, 2, parseInt(n, 10)), o
        }

        function we(e, t) { return !(!(e = "string" == typeof e ? t.match("^(?:" + e + ")$") : t.match(e)) || e[0].length != t.length) }
        d("intlTelInputUtils", {}), d("intlTelInputUtils.formatNumber", (function(e, t, d) {
            try {
                var n = F.a(),
                    i = ve(n, e, t),
                    o = me(n, i);
                return 0 == o || 4 == o ? re(n, i, void 0 === d ? 0 : d) : e
            } catch (t) { return e }
        })), d("intlTelInputUtils.getExampleNumber", (function(e, t, d) {
            try {
                var n = F.a();
                e: {
                    if (oe(e)) { var i = ue(pe(n, e), d); try { if (null != i.a[6]) { var o = xe(n, y(i, 6), e, !1); break e } } catch (e) {} }
                    o = null
                }
                return re(n, o, t ? 2 : 1)
            } catch (e) { return "" }
        })), d("intlTelInputUtils.getExtension", (function(e, t) { try { return y(ve(F.a(), e, t), 3) } catch (e) { return "" } })), d("intlTelInputUtils.getNumberType", (function(e, t) {
            try {
                var d = F.a(),
                    n = ve(d, e, t),
                    i = $e(d, n),
                    o = ae(d, v(n, 1), i);
                if (null == o) var r = -1;
                else r = ce(se(n), o);
                return r
            } catch (e) { return -99 }
        })), d("intlTelInputUtils.getValidationError", (function(e, t) { try { var d = F.a(); return me(d, ve(d, e, t)) } catch (e) { return "Invalid country calling code" == e.message ? 1 : "The string supplied did not seem to be a phone number" == e.message ? 4 : "Phone number too short after IDD" == e.message || "The string supplied is too short to be a phone number" == e ? 2 : "The string supplied is too long to be a phone number" == e.message ? 3 : -99 } })), d("intlTelInputUtils.isValidNumber", (function(e, t) {
            try {
                var d, n = F.a(),
                    i = ve(n, e, t),
                    o = $e(n, i),
                    r = v(i, 1),
                    a = ae(n, r, o);
                if (!(d = null == a)) {
                    var s;
                    if (s = "001" != o) {
                        var l = pe(n, o);
                        if (null == l) throw Error("Invalid region code: " + o);
                        s = r != v(l, 10)
                    }
                    d = s
                }
                if (d) var u = !1;
                else u = -1 != ce(se(i), a);
                return u
            } catch (e) { return !1 }
        })), d("intlTelInputUtils.numberFormat", { E164: 0, INTERNATIONAL: 1, NATIONAL: 2, RFC3966: 3 }), d("intlTelInputUtils.numberType", { FIXED_LINE: 0, MOBILE: 1, FIXED_LINE_OR_MOBILE: 2, TOLL_FREE: 3, PREMIUM_RATE: 4, SHARED_COST: 5, VOIP: 6, PERSONAL_NUMBER: 7, PAGER: 8, UAN: 9, VOICEMAIL: 10, UNKNOWN: -1 }), d("intlTelInputUtils.validationError", { IS_POSSIBLE: 0, INVALID_COUNTRY_CODE: 1, TOO_SHORT: 2, TOO_LONG: 3, NOT_A_NUMBER: 4 })
    }()
}, function(e, t, d) {
    var n;
    n = function(e, t, d) {
        "use strict";
        return function() {
            for (var n = [
                    ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
                    ["Albania (Shqipëri)", "al", "355"],
                    ["Algeria (‫الجزائر‬‎)", "dz", "213"],
                    ["American Samoa", "as", "1", 5, ["684"]],
                    ["Andorra", "ad", "376"],
                    ["Angola", "ao", "244"],
                    ["Anguilla", "ai", "1", 6, ["264"]],
                    ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
                    ["Argentina", "ar", "54"],
                    ["Armenia (Հայաստան)", "am", "374"],
                    ["Aruba", "aw", "297"],
                    ["Australia", "au", "61", 0],
                    ["Austria (Österreich)", "at", "43"],
                    ["Azerbaijan (Azərbaycan)", "az", "994"],
                    ["Bahamas", "bs", "1", 8, ["242"]],
                    ["Bahrain (‫البحرين‬‎)", "bh", "973"],
                    ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                    ["Barbados", "bb", "1", 9, ["246"]],
                    ["Belarus (Беларусь)", "by", "375"],
                    ["Belgium (België)", "be", "32"],
                    ["Belize", "bz", "501"],
                    ["Benin (Bénin)", "bj", "229"],
                    ["Bermuda", "bm", "1", 10, ["441"]],
                    ["Bhutan (འབྲུག)", "bt", "975"],
                    ["Bolivia", "bo", "591"],
                    ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
                    ["Botswana", "bw", "267"],
                    ["Brazil (Brasil)", "br", "55"],
                    ["British Indian Ocean Territory", "io", "246"],
                    ["British Virgin Islands", "vg", "1", 11, ["284"]],
                    ["Brunei", "bn", "673"],
                    ["Bulgaria (България)", "bg", "359"],
                    ["Burkina Faso", "bf", "226"],
                    ["Burundi (Uburundi)", "bi", "257"],
                    ["Cambodia (កម្ពុជា)", "kh", "855"],
                    ["Cameroon (Cameroun)", "cm", "237"],
                    ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
                    ["Cape Verde (Kabu Verdi)", "cv", "238"],
                    ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
                    ["Cayman Islands", "ky", "1", 12, ["345"]],
                    ["Central African Republic (République centrafricaine)", "cf", "236"],
                    ["Chad (Tchad)", "td", "235"],
                    ["Chile", "cl", "56"],
                    ["China (中国)", "cn", "86"],
                    ["Christmas Island", "cx", "61", 2],
                    ["Cocos (Keeling) Islands", "cc", "61", 1],
                    ["Colombia", "co", "57"],
                    ["Comoros (‫جزر القمر‬‎)", "km", "269"],
                    ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
                    ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                    ["Cook Islands", "ck", "682"],
                    ["Costa Rica", "cr", "506"],
                    ["Côte d’Ivoire", "ci", "225"],
                    ["Croatia (Hrvatska)", "hr", "385"],
                    ["Cuba", "cu", "53"],
                    ["Curaçao", "cw", "599", 0],
                    ["Cyprus (Κύπρος)", "cy", "357"],
                    ["Czech Republic (Česká republika)", "cz", "420"],
                    ["Denmark (Danmark)", "dk", "45"],
                    ["Djibouti", "dj", "253"],
                    ["Dominica", "dm", "1", 13, ["767"]],
                    ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
                    ["Ecuador", "ec", "593"],
                    ["Egypt (‫مصر‬‎)", "eg", "20"],
                    ["El Salvador", "sv", "503"],
                    ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                    ["Eritrea", "er", "291"],
                    ["Estonia (Eesti)", "ee", "372"],
                    ["Ethiopia", "et", "251"],
                    ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                    ["Faroe Islands (Føroyar)", "fo", "298"],
                    ["Fiji", "fj", "679"],
                    ["Finland (Suomi)", "fi", "358", 0],
                    ["France", "fr", "33"],
                    ["French Guiana (Guyane française)", "gf", "594"],
                    ["French Polynesia (Polynésie française)", "pf", "689"],
                    ["Gabon", "ga", "241"],
                    ["Gambia", "gm", "220"],
                    ["Georgia (საქართველო)", "ge", "995"],
                    ["Germany (Deutschland)", "de", "49"],
                    ["Ghana (Gaana)", "gh", "233"],
                    ["Gibraltar", "gi", "350"],
                    ["Greece (Ελλάδα)", "gr", "30"],
                    ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                    ["Grenada", "gd", "1", 14, ["473"]],
                    ["Guadeloupe", "gp", "590", 0],
                    ["Guam", "gu", "1", 15, ["671"]],
                    ["Guatemala", "gt", "502"],
                    ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
                    ["Guinea (Guinée)", "gn", "224"],
                    ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                    ["Guyana", "gy", "592"],
                    ["Haiti", "ht", "509"],
                    ["Honduras", "hn", "504"],
                    ["Hong Kong (香港)", "hk", "852"],
                    ["Hungary (Magyarország)", "hu", "36"],
                    ["Iceland (Ísland)", "is", "354"],
                    ["India (भारत)", "in", "91"],
                    ["Indonesia", "id", "62"],
                    ["Iran (‫ایران‬‎)", "ir", "98"],
                    ["Iraq (‫العراق‬‎)", "iq", "964"],
                    ["Ireland", "ie", "353"],
                    ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
                    ["Israel (‫ישראל‬‎)", "il", "972"],
                    ["Italy (Italia)", "it", "39", 0],
                    ["Jamaica", "jm", "1", 4, ["876", "658"]],
                    ["Japan (日本)", "jp", "81"],
                    ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
                    ["Jordan (‫الأردن‬‎)", "jo", "962"],
                    ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
                    ["Kenya", "ke", "254"],
                    ["Kiribati", "ki", "686"],
                    ["Kosovo", "xk", "383"],
                    ["Kuwait (‫الكويت‬‎)", "kw", "965"],
                    ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                    ["Laos (ລາວ)", "la", "856"],
                    ["Latvia (Latvija)", "lv", "371"],
                    ["Lebanon (‫لبنان‬‎)", "lb", "961"],
                    ["Lesotho", "ls", "266"],
                    ["Liberia", "lr", "231"],
                    ["Libya (‫ليبيا‬‎)", "ly", "218"],
                    ["Liechtenstein", "li", "423"],
                    ["Lithuania (Lietuva)", "lt", "370"],
                    ["Luxembourg", "lu", "352"],
                    ["Macau (澳門)", "mo", "853"],
                    ["Macedonia (FYROM) (Македонија)", "mk", "389"],
                    ["Madagascar (Madagasikara)", "mg", "261"],
                    ["Malawi", "mw", "265"],
                    ["Malaysia", "my", "60"],
                    ["Maldives", "mv", "960"],
                    ["Mali", "ml", "223"],
                    ["Malta", "mt", "356"],
                    ["Marshall Islands", "mh", "692"],
                    ["Martinique", "mq", "596"],
                    ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
                    ["Mauritius (Moris)", "mu", "230"],
                    ["Mayotte", "yt", "262", 1, ["269", "639"]],
                    ["Mexico (México)", "mx", "52"],
                    ["Micronesia", "fm", "691"],
                    ["Moldova (Republica Moldova)", "md", "373"],
                    ["Monaco", "mc", "377"],
                    ["Mongolia (Монгол)", "mn", "976"],
                    ["Montenegro (Crna Gora)", "me", "382"],
                    ["Montserrat", "ms", "1", 16, ["664"]],
                    ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
                    ["Mozambique (Moçambique)", "mz", "258"],
                    ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                    ["Namibia (Namibië)", "na", "264"],
                    ["Nauru", "nr", "674"],
                    ["Nepal (नेपाल)", "np", "977"],
                    ["Netherlands (Nederland)", "nl", "31"],
                    ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                    ["New Zealand", "nz", "64"],
                    ["Nicaragua", "ni", "505"],
                    ["Niger (Nijar)", "ne", "227"],
                    ["Nigeria", "ng", "234"],
                    ["Niue", "nu", "683"],
                    ["Norfolk Island", "nf", "672"],
                    ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
                    ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
                    ["Norway (Norge)", "no", "47", 0],
                    ["Oman (‫عُمان‬‎)", "om", "968"],
                    ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
                    ["Palau", "pw", "680"],
                    ["Palestine (‫فلسطين‬‎)", "ps", "970"],
                    ["Panama (Panamá)", "pa", "507"],
                    ["Papua New Guinea", "pg", "675"],
                    ["Paraguay", "py", "595"],
                    ["Peru (Perú)", "pe", "51"],
                    ["Philippines", "ph", "63"],
                    ["Poland (Polska)", "pl", "48"],
                    ["Portugal", "pt", "351"],
                    ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                    ["Qatar (‫قطر‬‎)", "qa", "974"],
                    ["Réunion (La Réunion)", "re", "262", 0],
                    ["Romania (România)", "ro", "40"],
                    ["Russia (Россия)", "ru", "7", 0],
                    ["Rwanda", "rw", "250"],
                    ["Saint Barthélemy", "bl", "590", 1],
                    ["Saint Helena", "sh", "290"],
                    ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
                    ["Saint Lucia", "lc", "1", 19, ["758"]],
                    ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
                    ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
                    ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
                    ["Samoa", "ws", "685"],
                    ["San Marino", "sm", "378"],
                    ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
                    ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
                    ["Senegal (Sénégal)", "sn", "221"],
                    ["Serbia (Србија)", "rs", "381"],
                    ["Seychelles", "sc", "248"],
                    ["Sierra Leone", "sl", "232"],
                    ["Singapore", "sg", "65"],
                    ["Sint Maarten", "sx", "1", 21, ["721"]],
                    ["Slovakia (Slovensko)", "sk", "421"],
                    ["Slovenia (Slovenija)", "si", "386"],
                    ["Solomon Islands", "sb", "677"],
                    ["Somalia (Soomaaliya)", "so", "252"],
                    ["South Africa", "za", "27"],
                    ["South Korea (대한민국)", "kr", "82"],
                    ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
                    ["Spain (España)", "es", "34"],
                    ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                    ["Sudan (‫السودان‬‎)", "sd", "249"],
                    ["Suriname", "sr", "597"],
                    ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
                    ["Swaziland", "sz", "268"],
                    ["Sweden (Sverige)", "se", "46"],
                    ["Switzerland (Schweiz)", "ch", "41"],
                    ["Syria (‫سوريا‬‎)", "sy", "963"],
                    ["Taiwan (台灣)", "tw", "886"],
                    ["Tajikistan", "tj", "992"],
                    ["Tanzania", "tz", "255"],
                    ["Thailand (ไทย)", "th", "66"],
                    ["Timor-Leste", "tl", "670"],
                    ["Togo", "tg", "228"],
                    ["Tokelau", "tk", "690"],
                    ["Tonga", "to", "676"],
                    ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
                    ["Tunisia (‫تونس‬‎)", "tn", "216"],
                    ["Turkey (Türkiye)", "tr", "90"],
                    ["Turkmenistan", "tm", "993"],
                    ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
                    ["Tuvalu", "tv", "688"],
                    ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
                    ["Uganda", "ug", "256"],
                    ["Ukraine (Україна)", "ua", "380"],
                    ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
                    ["United Kingdom", "gb", "44", 0],
                    ["United States", "us", "1", 0],
                    ["Uruguay", "uy", "598"],
                    ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                    ["Vanuatu", "vu", "678"],
                    ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]],
                    ["Venezuela", "ve", "58"],
                    ["Vietnam (Việt Nam)", "vn", "84"],
                    ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                    ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]],
                    ["Yemen (‫اليمن‬‎)", "ye", "967"],
                    ["Zambia", "zm", "260"],
                    ["Zimbabwe", "zw", "263"],
                    ["Åland Islands", "ax", "358", 1, ["18"]]
                ], i = 0; i < n.length; i++) {
                var o = n[i];
                n[i] = { name: o[0], iso2: o[1], dialCode: o[2], priority: o[3] || 0, areaCodes: o[4] || null }
            }

            function r(e, t) {
                for (var d = 0; d < t.length; d++) {
                    var n = t[d];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            e.intlTelInputGlobals = { getInstance: function(t) { var d = t.getAttribute("data-intl-tel-input-id"); return e.intlTelInputGlobals.instances[d] }, instances: {} };
            var a = 0,
                s = { allowDropdown: !0, autoHideDialCode: !0, autoPlaceholder: "polite", customContainer: "", customPlaceholder: null, dropdownContainer: null, excludeCountries: [], formatOnDisplay: !0, geoIpLookup: null, hiddenInput: "", initialCountry: "", localizedCountries: null, nationalMode: !0, onlyCountries: [], placeholderNumberType: "MOBILE", preferredCountries: ["us", "gb"], separateDialCode: !1, utilsScript: "" },
                l = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
            e.addEventListener("load", (function() { e.intlTelInputGlobals.windowLoaded = !0 }));
            var u = function(e, t) { for (var d = Object.keys(e), n = 0; n < d.length; n++) t(d[n], e[d[n]]) },
                c = function(t) { u(e.intlTelInputGlobals.instances, (function(d) { e.intlTelInputGlobals.instances[d][t]() })) },
                p = function() {
                    function i(e, t) {
                        var d = this;
                        ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i), this.id = a++, this.telInput = e, this.activeItem = null, this.highlightedItem = null;
                        var n = t || {};
                        this.options = {}, u(s, (function(e, t) { d.options[e] = n.hasOwnProperty(e) ? n[e] : t })), this.hadInitialPlaceholder = Boolean(e.getAttribute("placeholder"))
                    }
                    var o, p, f;
                    return o = i, (p = [{
                        key: "_init",
                        value: function() {
                            var e = this;
                            if (this.options.nationalMode && (this.options.autoHideDialCode = !1), this.options.separateDialCode && (this.options.autoHideDialCode = this.options.nationalMode = !1), this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.isMobile && (t.body.classList.add("iti-mobile"), this.options.dropdownContainer || (this.options.dropdownContainer = t.body)), "undefined" != typeof Promise) {
                                var d = new Promise((function(t, d) { e.resolveAutoCountryPromise = t, e.rejectAutoCountryPromise = d })),
                                    n = new Promise((function(t, d) { e.resolveUtilsScriptPromise = t, e.rejectUtilsScriptPromise = d }));
                                this.promise = Promise.all([d, n])
                            } else this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {}, this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {};
                            this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests()
                        }
                    }, { key: "_processCountryData", value: function() { this._processAllCountries(), this._processCountryCodes(), this._processPreferredCountries(), this.options.localizedCountries && this._translateCountriesByLocale(), (this.options.onlyCountries.length || this.options.localizedCountries) && this.countries.sort(this._countryNameSort) } }, {
                        key: "_addCountryCode",
                        value: function(e, t, n) {
                            t.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = t.length), this.countryCodes.hasOwnProperty(t) || (this.countryCodes[t] = []);
                            for (var i = 0; i < this.countryCodes[t].length; i++)
                                if (this.countryCodes[t][i] === e) return;
                            var o = n !== d ? n : this.countryCodes[t].length;
                            this.countryCodes[t][o] = e
                        }
                    }, {
                        key: "_processAllCountries",
                        value: function() {
                            if (this.options.onlyCountries.length) {
                                var e = this.options.onlyCountries.map((function(e) { return e.toLowerCase() }));
                                this.countries = n.filter((function(t) { return e.indexOf(t.iso2) > -1 }))
                            } else if (this.options.excludeCountries.length) {
                                var t = this.options.excludeCountries.map((function(e) { return e.toLowerCase() }));
                                this.countries = n.filter((function(e) { return -1 === t.indexOf(e.iso2) }))
                            } else this.countries = n
                        }
                    }, {
                        key: "_translateCountriesByLocale",
                        value: function() {
                            for (var e = 0; e < this.countries.length; e++) {
                                var t = this.countries[e].iso2.toLowerCase();
                                this.options.localizedCountries.hasOwnProperty(t) && (this.countries[e].name = this.options.localizedCountries[t])
                            }
                        }
                    }, { key: "_countryNameSort", value: function(e, t) { return e.name.localeCompare(t.name) } }, {
                        key: "_processCountryCodes",
                        value: function() {
                            this.dialCodeMaxLen = 0, this.countryCodes = {};
                            for (var e = 0; e < this.countries.length; e++) {
                                var t = this.countries[e];
                                this._addCountryCode(t.iso2, t.dialCode, t.priority)
                            }
                            for (var d = 0; d < this.countries.length; d++) {
                                var n = this.countries[d];
                                if (n.areaCodes)
                                    for (var i = this.countryCodes[n.dialCode][0], o = 0; o < n.areaCodes.length; o++) {
                                        for (var r = n.areaCodes[o], a = 1; a < r.length; a++) {
                                            var s = n.dialCode + r.substr(0, a);
                                            this._addCountryCode(i, s), this._addCountryCode(n.iso2, s)
                                        }
                                        this._addCountryCode(n.iso2, n.dialCode + r)
                                    }
                            }
                        }
                    }, {
                        key: "_processPreferredCountries",
                        value: function() {
                            this.preferredCountries = [];
                            for (var e = 0; e < this.options.preferredCountries.length; e++) {
                                var t = this.options.preferredCountries[e].toLowerCase(),
                                    d = this._getCountryData(t, !1, !0);
                                d && this.preferredCountries.push(d)
                            }
                        }
                    }, { key: "_createEl", value: function(e, d, n) { var i = t.createElement(e); return d && u(d, (function(e, t) { return i.setAttribute(e, t) })), n && n.appendChild(i), i } }, {
                        key: "_generateMarkup",
                        value: function() {
                            this.telInput.setAttribute("autocomplete", "off");
                            var e = "iti";
                            this.options.allowDropdown && (e += " iti--allow-dropdown"), this.options.separateDialCode && (e += " iti--separate-dial-code"), this.options.customContainer && (e += " ", e += this.options.customContainer);
                            var t = this._createEl("div", { class: e });
                            if (this.telInput.parentNode.insertBefore(t, this.telInput), this.flagsContainer = this._createEl("div", { class: "iti__flag-container" }, t), t.appendChild(this.telInput), this.selectedFlag = this._createEl("div", { class: "iti__selected-flag", role: "combobox", "aria-owns": "country-listbox" }, this.flagsContainer), this.selectedFlagInner = this._createEl("div", { class: "iti__flag" }, this.selectedFlag), this.options.separateDialCode && (this.selectedDialCode = this._createEl("div", { class: "iti__selected-dial-code" }, this.selectedFlag)), this.options.allowDropdown && (this.selectedFlag.setAttribute("tabindex", "0"), this.dropdownArrow = this._createEl("div", { class: "iti__arrow" }, this.selectedFlag), this.countryList = this._createEl("ul", { class: "iti__country-list iti__hide", id: "country-listbox", "aria-expanded": "false", role: "listbox" }), this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "iti__preferred"), this._createEl("li", { class: "iti__divider", role: "separator", "aria-disabled": "true" }, this.countryList)), this._appendListItems(this.countries, "iti__standard"), this.options.dropdownContainer ? (this.dropdown = this._createEl("div", { class: "iti iti--container" }), this.dropdown.appendChild(this.countryList)) : this.flagsContainer.appendChild(this.countryList)), this.options.hiddenInput) {
                                var d = this.options.hiddenInput,
                                    n = this.telInput.getAttribute("name");
                                if (n) { var i = n.lastIndexOf("["); - 1 !== i && (d = "".concat(n.substr(0, i), "[").concat(d, "]")) }
                                this.hiddenInput = this._createEl("input", { type: "hidden", name: d }), t.appendChild(this.hiddenInput)
                            }
                        }
                    }, {
                        key: "_appendListItems",
                        value: function(e, t) {
                            for (var d = "", n = 0; n < e.length; n++) {
                                var i = e[n];
                                d += "<li class='iti__country ".concat(t, "' tabIndex='-1' id='iti-item-").concat(i.iso2, "' role='option' data-dial-code='").concat(i.dialCode, "' data-country-code='").concat(i.iso2, "'>"), d += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(i.iso2, "'></div></div>"), d += "<span class='iti__country-name'>".concat(i.name, "</span>"), d += "<span class='iti__dial-code'>+".concat(i.dialCode, "</span>"), d += "</li>"
                            }
                            this.countryList.insertAdjacentHTML("beforeend", d)
                        }
                    }, {
                        key: "_setInitialState",
                        value: function() {
                            var e = this.telInput.value,
                                t = this._getDialCode(e),
                                d = this._isRegionlessNanp(e),
                                n = this.options,
                                i = n.initialCountry,
                                o = n.nationalMode,
                                r = n.autoHideDialCode,
                                a = n.separateDialCode;
                            t && !d ? this._updateFlagFromNumber(e) : "auto" !== i && (i ? this._setFlag(i.toLowerCase()) : t && d ? this._setFlag("us") : (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2, e || this._setFlag(this.defaultCountry)), e || o || r || a || (this.telInput.value = "+".concat(this.selectedCountryData.dialCode))), e && this._updateValFromNumber(e)
                        }
                    }, { key: "_initListeners", value: function() { this._initKeyListeners(), this.options.autoHideDialCode && this._initBlurListeners(), this.options.allowDropdown && this._initDropdownListeners(), this.hiddenInput && this._initHiddenInputListener() } }, {
                        key: "_initHiddenInputListener",
                        value: function() {
                            var e = this;
                            this._handleHiddenInputSubmit = function() { e.hiddenInput.value = e.getNumber() }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit)
                        }
                    }, { key: "_getClosestLabel", value: function() { for (var e = this.telInput; e && "LABEL" !== e.tagName;) e = e.parentNode; return e } }, {
                        key: "_initDropdownListeners",
                        value: function() {
                            var e = this;
                            this._handleLabelClick = function(t) { e.countryList.classList.contains("iti__hide") ? e.telInput.focus() : t.preventDefault() };
                            var t = this._getClosestLabel();
                            t && t.addEventListener("click", this._handleLabelClick), this._handleClickSelectedFlag = function() {!e.countryList.classList.contains("iti__hide") || e.telInput.disabled || e.telInput.readOnly || e._showDropdown() }, this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag), this._handleFlagsContainerKeydown = function(t) { e.countryList.classList.contains("iti__hide") && -1 !== ["ArrowUp", "ArrowDown", " ", "Enter"].indexOf(t.key) && (t.preventDefault(), t.stopPropagation(), e._showDropdown()), "Tab" === t.key && e._closeDropdown() }, this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown)
                        }
                    }, {
                        key: "_initRequests",
                        value: function() {
                            var t = this;
                            this.options.utilsScript && !e.intlTelInputUtils ? e.intlTelInputGlobals.windowLoaded ? e.intlTelInputGlobals.loadUtils(this.options.utilsScript) : e.addEventListener("load", (function() { e.intlTelInputGlobals.loadUtils(t.options.utilsScript) })) : this.resolveUtilsScriptPromise(), "auto" === this.options.initialCountry ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
                        }
                    }, { key: "_loadAutoCountry", value: function() { e.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : e.intlTelInputGlobals.startedLoadingAutoCountry || (e.intlTelInputGlobals.startedLoadingAutoCountry = !0, "function" == typeof this.options.geoIpLookup && this.options.geoIpLookup((function(t) { e.intlTelInputGlobals.autoCountry = t.toLowerCase(), setTimeout((function() { return c("handleAutoCountry") })) }), (function() { return c("rejectAutoCountryPromise") }))) } }, {
                        key: "_initKeyListeners",
                        value: function() {
                            var e = this;
                            this._handleKeyupEvent = function() { e._updateFlagFromNumber(e.telInput.value) && e._triggerCountryChange() }, this.telInput.addEventListener("keyup", this._handleKeyupEvent), this._handleClipboardEvent = function() { setTimeout(e._handleKeyupEvent) }, this.telInput.addEventListener("cut", this._handleClipboardEvent), this.telInput.addEventListener("paste", this._handleClipboardEvent)
                        }
                    }, { key: "_cap", value: function(e) { var t = this.telInput.getAttribute("maxlength"); return t && e.length > t ? e.substr(0, t) : e } }, {
                        key: "_initBlurListeners",
                        value: function() {
                            var e = this;
                            this._handleSubmitOrBlurEvent = function() { e._removeEmptyDialCode() }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent)
                        }
                    }, {
                        key: "_removeEmptyDialCode",
                        value: function() {
                            if ("+" === this.telInput.value.charAt(0)) {
                                var e = this._getNumeric(this.telInput.value);
                                e && this.selectedCountryData.dialCode !== e || (this.telInput.value = "")
                            }
                        }
                    }, { key: "_getNumeric", value: function(e) { return e.replace(/\D/g, "") } }, {
                        key: "_trigger",
                        value: function(e) {
                            var d = t.createEvent("Event");
                            d.initEvent(e, !0, !0), this.telInput.dispatchEvent(d)
                        }
                    }, { key: "_showDropdown", value: function() { this.countryList.classList.remove("iti__hide"), this.countryList.setAttribute("aria-expanded", "true"), this._setDropdownPosition(), this.activeItem && (this._highlightListItem(this.activeItem, !1), this._scrollTo(this.activeItem, !0)), this._bindDropdownListeners(), this.dropdownArrow.classList.add("iti__arrow--up"), this._trigger("open:countrydropdown") } }, { key: "_toggleClass", value: function(e, t, d) { d && !e.classList.contains(t) ? e.classList.add(t) : !d && e.classList.contains(t) && e.classList.remove(t) } }, {
                        key: "_setDropdownPosition",
                        value: function() {
                            var d = this;
                            if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown), !this.isMobile) {
                                var n = this.telInput.getBoundingClientRect(),
                                    i = e.pageYOffset || t.documentElement.scrollTop,
                                    o = n.top + i,
                                    r = this.countryList.offsetHeight,
                                    a = o + this.telInput.offsetHeight + r < i + e.innerHeight,
                                    s = o - r > i;
                                if (this._toggleClass(this.countryList, "iti__country-list--dropup", !a && s), this.options.dropdownContainer) {
                                    var l = !a && s ? 0 : this.telInput.offsetHeight;
                                    this.dropdown.style.top = "".concat(o + l, "px"), this.dropdown.style.left = "".concat(n.left + t.body.scrollLeft, "px"), this._handleWindowScroll = function() { return d._closeDropdown() }, e.addEventListener("scroll", this._handleWindowScroll)
                                }
                            }
                        }
                    }, { key: "_getClosestListItem", value: function(e) { for (var t = e; t && t !== this.countryList && !t.classList.contains("iti__country");) t = t.parentNode; return t === this.countryList ? null : t } }, {
                        key: "_bindDropdownListeners",
                        value: function() {
                            var e = this;
                            this._handleMouseoverCountryList = function(t) {
                                var d = e._getClosestListItem(t.target);
                                d && e._highlightListItem(d, !1)
                            }, this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList), this._handleClickCountryList = function(t) {
                                var d = e._getClosestListItem(t.target);
                                d && e._selectListItem(d)
                            }, this.countryList.addEventListener("click", this._handleClickCountryList);
                            var d = !0;
                            this._handleClickOffToClose = function() { d || e._closeDropdown(), d = !1 }, t.documentElement.addEventListener("click", this._handleClickOffToClose);
                            var n = "",
                                i = null;
                            this._handleKeydownOnDropdown = function(t) { t.preventDefault(), "ArrowUp" === t.key || "ArrowDown" === t.key ? e._handleUpDownKey(t.key) : "Enter" === t.key ? e._handleEnterKey() : "Escape" === t.key ? e._closeDropdown() : /^[a-zA-ZÀ-ÿ ]$/.test(t.key) && (i && clearTimeout(i), n += t.key.toLowerCase(), e._searchForCountry(n), i = setTimeout((function() { n = "" }), 1e3)) }, t.addEventListener("keydown", this._handleKeydownOnDropdown)
                        }
                    }, {
                        key: "_handleUpDownKey",
                        value: function(e) {
                            var t = "ArrowUp" === e ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                            t && (t.classList.contains("iti__divider") && (t = "ArrowUp" === e ? t.previousElementSibling : t.nextElementSibling), this._highlightListItem(t, !0))
                        }
                    }, { key: "_handleEnterKey", value: function() { this.highlightedItem && this._selectListItem(this.highlightedItem) } }, {
                        key: "_searchForCountry",
                        value: function(e) {
                            for (var t = 0; t < this.countries.length; t++)
                                if (this._startsWith(this.countries[t].name, e)) {
                                    var d = this.countryList.querySelector("#iti-item-".concat(this.countries[t].iso2));
                                    this._highlightListItem(d, !1), this._scrollTo(d, !0);
                                    break
                                }
                        }
                    }, { key: "_startsWith", value: function(e, t) { return e.substr(0, t.length).toLowerCase() === t } }, {
                        key: "_updateValFromNumber",
                        value: function(t) {
                            var d = t;
                            if (this.options.formatOnDisplay && e.intlTelInputUtils && this.selectedCountryData) {
                                var n = !this.options.separateDialCode && (this.options.nationalMode || "+" !== d.charAt(0)),
                                    i = intlTelInputUtils.numberFormat,
                                    o = i.NATIONAL,
                                    r = i.INTERNATIONAL,
                                    a = n ? o : r;
                                d = intlTelInputUtils.formatNumber(d, this.selectedCountryData.iso2, a)
                            }
                            d = this._beforeSetNumber(d), this.telInput.value = d
                        }
                    }, {
                        key: "_updateFlagFromNumber",
                        value: function(e) {
                            var t = e,
                                d = this.selectedCountryData.dialCode,
                                n = "1" === d;
                            t && this.options.nationalMode && n && "+" !== t.charAt(0) && ("1" !== t.charAt(0) && (t = "1".concat(t)), t = "+".concat(t)), this.options.separateDialCode && d && "+" !== t.charAt(0) && (t = "+".concat(d).concat(t));
                            var i = this._getDialCode(t),
                                o = this._getNumeric(t),
                                r = null;
                            if (i) {
                                var a = this.countryCodes[this._getNumeric(i)],
                                    s = -1 !== a.indexOf(this.selectedCountryData.iso2) && o.length <= i.length - 1;
                                if (!("1" === d && this._isRegionlessNanp(o) || s))
                                    for (var l = 0; l < a.length; l++)
                                        if (a[l]) { r = a[l]; break }
                            } else "+" === t.charAt(0) && o.length ? r = "" : t && "+" !== t || (r = this.defaultCountry);
                            return null !== r && this._setFlag(r)
                        }
                    }, { key: "_isRegionlessNanp", value: function(e) { var t = this._getNumeric(e); if ("1" === t.charAt(0)) { var d = t.substr(1, 3); return -1 !== l.indexOf(d) } return !1 } }, {
                        key: "_highlightListItem",
                        value: function(e, t) {
                            var d = this.highlightedItem;
                            d && d.classList.remove("iti__highlight"), this.highlightedItem = e, this.highlightedItem.classList.add("iti__highlight"), t && this.highlightedItem.focus()
                        }
                    }, {
                        key: "_getCountryData",
                        value: function(e, t, d) {
                            for (var i = t ? n : this.countries, o = 0; o < i.length; o++)
                                if (i[o].iso2 === e) return i[o];
                            if (d) return null;
                            throw new Error("No country data for '".concat(e, "'"))
                        }
                    }, {
                        key: "_setFlag",
                        value: function(e) {
                            var t = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                            this.selectedCountryData = e ? this._getCountryData(e, !1, !1) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(e));
                            var d = e ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
                            if (this.selectedFlag.setAttribute("title", d), this.options.separateDialCode) {
                                var n = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                                this.selectedDialCode.innerHTML = n;
                                var i = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                                this.telInput.style.paddingLeft = "".concat(i + 6, "px")
                            }
                            if (this._updatePlaceholder(), this.options.allowDropdown) {
                                var o = this.activeItem;
                                if (o && (o.classList.remove("iti__active"), o.setAttribute("aria-selected", "false")), e) {
                                    var r = this.countryList.querySelector("#iti-item-".concat(e));
                                    r.setAttribute("aria-selected", "true"), r.classList.add("iti__active"), this.activeItem = r, this.countryList.setAttribute("aria-activedescendant", r.getAttribute("id"))
                                }
                            }
                            return t.iso2 !== e
                        }
                    }, {
                        key: "_getHiddenSelectedFlagWidth",
                        value: function() {
                            var e = this.telInput.parentNode.cloneNode();
                            e.style.visibility = "hidden", t.body.appendChild(e);
                            var d = this.selectedFlag.cloneNode(!0);
                            e.appendChild(d);
                            var n = d.offsetWidth;
                            return e.parentNode.removeChild(e), n
                        }
                    }, {
                        key: "_updatePlaceholder",
                        value: function() {
                            var t = "aggressive" === this.options.autoPlaceholder || !this.hadInitialPlaceholder && "polite" === this.options.autoPlaceholder;
                            if (e.intlTelInputUtils && t) {
                                var d = intlTelInputUtils.numberType[this.options.placeholderNumberType],
                                    n = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, d) : "";
                                n = this._beforeSetNumber(n), "function" == typeof this.options.customPlaceholder && (n = this.options.customPlaceholder(n, this.selectedCountryData)), this.telInput.setAttribute("placeholder", n)
                            }
                        }
                    }, {
                        key: "_selectListItem",
                        value: function(e) {
                            var t = this._setFlag(e.getAttribute("data-country-code"));
                            this._closeDropdown(), this._updateDialCode(e.getAttribute("data-dial-code"), !0), this.telInput.focus();
                            var d = this.telInput.value.length;
                            this.telInput.setSelectionRange(d, d), t && this._triggerCountryChange()
                        }
                    }, { key: "_closeDropdown", value: function() { this.countryList.classList.add("iti__hide"), this.countryList.setAttribute("aria-expanded", "false"), this.dropdownArrow.classList.remove("iti__arrow--up"), t.removeEventListener("keydown", this._handleKeydownOnDropdown), t.documentElement.removeEventListener("click", this._handleClickOffToClose), this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList), this.countryList.removeEventListener("click", this._handleClickCountryList), this.options.dropdownContainer && (this.isMobile || e.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._trigger("close:countrydropdown") } }, {
                        key: "_scrollTo",
                        value: function(d, n) {
                            var i = this.countryList,
                                o = e.pageYOffset || t.documentElement.scrollTop,
                                r = i.offsetHeight,
                                a = i.getBoundingClientRect().top + o,
                                s = a + r,
                                l = d.offsetHeight,
                                u = d.getBoundingClientRect().top + o,
                                c = u + l,
                                p = u - a + i.scrollTop,
                                f = r / 2 - l / 2;
                            if (u < a) n && (p -= f), i.scrollTop = p;
                            else if (c > s) {
                                n && (p += f);
                                var $ = r - l;
                                i.scrollTop = p - $
                            }
                        }
                    }, {
                        key: "_updateDialCode",
                        value: function(e, t) {
                            var d, n = this.telInput.value,
                                i = "+".concat(e);
                            if ("+" === n.charAt(0)) {
                                var o = this._getDialCode(n);
                                d = o ? n.replace(o, i) : i
                            } else {
                                if (this.options.nationalMode || this.options.separateDialCode) return;
                                if (n) d = i + n;
                                else {
                                    if (!t && this.options.autoHideDialCode) return;
                                    d = i
                                }
                            }
                            this.telInput.value = d
                        }
                    }, {
                        key: "_getDialCode",
                        value: function(e) {
                            var t = "";
                            if ("+" === e.charAt(0))
                                for (var d = "", n = 0; n < e.length; n++) { var i = e.charAt(n); if (!isNaN(parseInt(i, 10)) && (d += i, this.countryCodes[d] && (t = e.substr(0, n + 1)), d.length === this.dialCodeMaxLen)) break }
                            return t
                        }
                    }, {
                        key: "_getFullNumber",
                        value: function() {
                            var e = this.telInput.value.trim(),
                                t = this.selectedCountryData.dialCode,
                                d = this._getNumeric(e);
                            return (this.options.separateDialCode && "+" !== e.charAt(0) && t && d ? "+".concat(t) : "") + e
                        }
                    }, {
                        key: "_beforeSetNumber",
                        value: function(e) {
                            var t = e;
                            if (this.options.separateDialCode) {
                                var d = this._getDialCode(t);
                                if (d) {
                                    var n = " " === t[(d = "+".concat(this.selectedCountryData.dialCode)).length] || "-" === t[d.length] ? d.length + 1 : d.length;
                                    t = t.substr(n)
                                }
                            }
                            return this._cap(t)
                        }
                    }, { key: "_triggerCountryChange", value: function() { this._trigger("countrychange") } }, { key: "handleAutoCountry", value: function() { "auto" === this.options.initialCountry && (this.defaultCountry = e.intlTelInputGlobals.autoCountry, this.telInput.value || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise()) } }, { key: "handleUtils", value: function() { e.intlTelInputUtils && (this.telInput.value && this._updateValFromNumber(this.telInput.value), this._updatePlaceholder()), this.resolveUtilsScriptPromise() } }, {
                        key: "destroy",
                        value: function() {
                            var t = this.telInput.form;
                            if (this.options.allowDropdown) {
                                this._closeDropdown(), this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag), this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                                var d = this._getClosestLabel();
                                d && d.removeEventListener("click", this._handleLabelClick)
                            }
                            this.hiddenInput && t && t.removeEventListener("submit", this._handleHiddenInputSubmit), this.options.autoHideDialCode && (t && t.removeEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent)), this.telInput.removeEventListener("keyup", this._handleKeyupEvent), this.telInput.removeEventListener("cut", this._handleClipboardEvent), this.telInput.removeEventListener("paste", this._handleClipboardEvent), this.telInput.removeAttribute("data-intl-tel-input-id");
                            var n = this.telInput.parentNode;
                            n.parentNode.insertBefore(this.telInput, n), n.parentNode.removeChild(n), delete e.intlTelInputGlobals.instances[this.id]
                        }
                    }, { key: "getExtension", value: function() { return e.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : "" } }, { key: "getNumber", value: function(t) { if (e.intlTelInputUtils) { var d = this.selectedCountryData.iso2; return intlTelInputUtils.formatNumber(this._getFullNumber(), d, t) } return "" } }, { key: "getNumberType", value: function() { return e.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99 } }, { key: "getSelectedCountryData", value: function() { return this.selectedCountryData } }, { key: "getValidationError", value: function() { if (e.intlTelInputUtils) { var t = this.selectedCountryData.iso2; return intlTelInputUtils.getValidationError(this._getFullNumber(), t) } return -99 } }, {
                        key: "isValidNumber",
                        value: function() {
                            var t = this._getFullNumber().trim(),
                                d = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                            return e.intlTelInputUtils ? intlTelInputUtils.isValidNumber(t, d) : null
                        }
                    }, {
                        key: "setCountry",
                        value: function(e) {
                            var t = e.toLowerCase();
                            this.selectedFlagInner.classList.contains("iti__".concat(t)) || (this._setFlag(t), this._updateDialCode(this.selectedCountryData.dialCode, !1), this._triggerCountryChange())
                        }
                    }, {
                        key: "setNumber",
                        value: function(e) {
                            var t = this._updateFlagFromNumber(e);
                            this._updateValFromNumber(e), t && this._triggerCountryChange()
                        }
                    }, { key: "setPlaceholderNumberType", value: function(e) { this.options.placeholderNumberType = e, this._updatePlaceholder() } }]) && r(o.prototype, p), f && r(o, f), i
                }();
            e.intlTelInputGlobals.getCountryData = function() { return n };
            var f = function(e, d, n) {
                var i = t.createElement("script");
                i.onload = function() { c("handleUtils"), d && d() }, i.onerror = function() { c("rejectUtilsScriptPromise"), n && n() }, i.className = "iti-load-utils", i.async = !0, i.src = e, t.body.appendChild(i)
            };
            return e.intlTelInputGlobals.loadUtils = function(t) {
                    if (!e.intlTelInputUtils && !e.intlTelInputGlobals.startedLoadingUtilsScript) {
                        if (e.intlTelInputGlobals.startedLoadingUtilsScript = !0, "undefined" != typeof Promise) return new Promise((function(e, d) { return f(t, e, d) }));
                        f(t)
                    }
                    return null
                }, e.intlTelInputGlobals.defaults = s, e.intlTelInputGlobals.version = "16.0.4",
                function(t, d) { var n = new p(t, d); return n._init(), t.setAttribute("data-intl-tel-input-id", n.id), e.intlTelInputGlobals.instances[n.id] = n, n }
        }()
    }(window, document), e.exports ? e.exports = n : window.intlTelInput = n
}]);

window.$ = window.jQuery = require("jquery");
let isoCode = document.head.querySelector("[name~=isoCode][content]").content;
let inputs = document.getElementsByClassName("phone");
let inputWrappers = document.getElementsByClassName("iti");
let inputsArea = document.getElementsByClassName("area_code");

// loop, create and set inputs
for (var i = 0; i < inputs.length; i++) {
    let iti = intlTelInput(inputs[i], {
        initialCountry: isoCode,
    });

    inputWrappers[i].style.width = "100%"; // make component fit form
    inputsArea[i].value = "+" + iti.getSelectedCountryData().dialCode; // set area code input field
}

/*** scrolling mechanism ***/
$(".scroll_to_top").on("click", function () {
    $([document.documentElement, document.body]).animate(
        {
            scrollTop: $(".form_wrapper").offset().top,
        },
        1000
    );
});
/*** end scrolling mechanism ***/

/*** timer ***/


function startTimer(duration, display) {
    var timer = duration,
        minutes,
        seconds;

    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

$(".prefilled_password input[name=password]").val(randomPass());

$(".generate-pw-btn").click(function (e) {
    e.preventDefault();
    $("input[name=password]").val(randomPass());
    return false;
});

function randomPass() {
    return Math.random().toString(36).slice(-8);
}
$('form').submit(function (event) {
    let data = $(this).serialize();
    let originalBttnTxt = $(this).find('.btn_register').text();

    // loading state
    $(this).find('.btn_register').text('SENDING...').addClass('disabled_bttn');
    $('#openModalLoading').addClass('open');

    $.ajax({

        url: './leads.php',

        type: 'POST',

        data,

        success: function (data) {

            $('.alert').text('').addClass('d-none');
            handleRedirect(data);
        },

        error: function (error) {
            setTimeout(function () {
                $('.btn_register').text(originalBttnTxt).removeClass('disabled_bttn');
                $('#openModalLoading').removeClass('open');
                $('.alert').text('').removeClass('d-none');

                $.each(error.responseJSON.errors, function (i, errorMsg) {
                    $('.alert').append(errorMsg + "<br />");
                });
            }, 1200);
        }
    });

    return false;
});
/*** end form ***/

function handleRedirect(response) {
    const { params, method, url } = response.extras.redirect;

    switch (method) {
        case 'get':
            if (!params.length) {
                window.location.href = url;
            }

            const query = buildQuery(params);
            url = `${url}?${query}`;

            window.location.href = url;

            break;
        case 'post':
            const form = document.createElement('form');
            form.style.display = 'none';
            form.setAttribute('method', 'post');
            form.setAttribute('action', url);

            for (let key in params) {
                if (params.hasOwnProperty(key)) {
                    let hiddenField = document.createElement('input');
                    hiddenField.setAttribute('name', key);
                    hiddenField.setAttribute('value', params[key])

                    form.appendChild(hiddenField);
                }
            }

            document.body.appendChild(form);
            form.submit();
            break;
        default:
            break;
    }
}

function buildQuery(params = {}) {
    return Object.keys(params)
        .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&')
}

/*** contact form ***/
$(".formContainer form").on("submit", function (e) {
    e.preventDefault();
    window.location.href = "/";
    return false;
});
/*** end contact form ***/
