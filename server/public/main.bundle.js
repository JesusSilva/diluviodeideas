webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/access/access.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n  background: #e9e9e9;\n  color: #666666;\n  font-family: 'RobotoDraft', 'Roboto', sans-serif;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/* Pen Title */\n\n.pen-title {\n  padding: 50px 0;\n  text-align: center;\n  letter-spacing: 2px;\n}\n\n.pen-title h1 {\n  margin: 0 0 20px;\n  font-size: 48px;\n  font-weight: 300;\n}\n\n.pen-title span {\n  font-size: 12px;\n}\n\n.pen-title span .fa {\n  color: #07D13F;\n}\n\n.pen-title span a {\n  color: #07D13F;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n/* Rerun */\n\n.rerun {\n  margin: 0 0 30px;\n  text-align: center;\n}\n\n.rerun a {\n  cursor: pointer;\n  display: inline-block;\n  background: #07D13F;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 10px 20px;\n  color: #ffffff;\n  text-decoration: none;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n}\n\n.rerun a:hover {\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n/* Scroll To Bottom */\n\n#codepen, #portfolio {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  background: #363636;\n  width: 56px;\n  height: 56px;\n  border-radius: 100%;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  color: #ffffff;\n  text-align: center;\n}\n\n#codepen i, #portfolio i {\n  line-height: 56px;\n}\n\n#codepen:hover, #portfolio:hover {\n  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n/* CodePen */\n\n#portfolio {\n  bottom: 96px;\n  right: 36px;\n  background: #07D13F;\n  width: 44px;\n  height: 44px;\n  -webkit-animation: buttonFadeInUp 1s ease;\n  animation: buttonFadeInUp 1s ease;\n}\n\n#portfolio i {\n  line-height: 44px;\n}\n\n/* Container */\n\n.container {\n  position: relative;\n  max-width: 460px;\n  width: 100%;\n  margin: 0 auto 100px;\n  margin-top: 100px;\n}\n\n.container.active .card:first-child {\n  background: #f2f2f2;\n  margin: 0 15px;\n}\n\n.container.active .card:nth-child(2) {\n  background: #fafafa;\n  margin: 0 10px;\n}\n\n.container.active .card.alt {\n  top: 20px;\n  right: 0;\n  width: 100%;\n  min-width: 100%;\n  height: auto;\n  border-radius: 5px;\n  padding: 60px 0 40px;\n  overflow: hidden;\n}\n\n.container.active .card.alt .toggle {\n  position: absolute;\n  top: 40px;\n  right: -70px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transform: scale(10);\n  transform: scale(10);\n  -webkit-transition: -webkit-transform .3s ease;\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease, -webkit-transform .3s ease;\n}\n\n.container.active .card.alt .toggle:before {\n  content: '';\n}\n\n.container.active .card.alt .title,\n.container.active .card.alt .input-container,\n.container.active .card.alt .button-container {\n  left: 0;\n  opacity: 1;\n  visibility: visible;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n}\n\n.container.active .card.alt .title {\n  -webkit-transition-delay: .3s;\n          transition-delay: .3s;\n}\n\n.container.active .card.alt .input-container {\n  -webkit-transition-delay: .4s;\n          transition-delay: .4s;\n}\n\n.container.active .card.alt .input-container:nth-child(2) {\n  -webkit-transition-delay: .5s;\n          transition-delay: .5s;\n}\n\n.container.active .card.alt .input-container:nth-child(3) {\n  -webkit-transition-delay: .6s;\n          transition-delay: .6s;\n}\n\n.container.active .card.alt .button-container {\n  -webkit-transition-delay: .7s;\n          transition-delay: .7s;\n}\n\n/* Card */\n\n.card {\n  position: relative;\n  background: #ffffff;\n  border-radius: 5px;\n  padding: 60px 0 40px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n  /* Title */\n  /* Inputs */\n  /* Button */\n  /* Footer */\n  /* Alt Card */\n}\n\n.card:first-child {\n  background: #fafafa;\n  height: 10px;\n  border-radius: 5px 5px 0 0;\n  margin: 0 10px;\n  padding: 0;\n}\n\n.card .title {\n  position: relative;\n  z-index: 1;\n  border-left: 5px solid #07D13F;\n  margin: 0 0 35px;\n  padding: 10px 0 10px 50px;\n  color: #07D13F;\n  font-size: 32px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.card .input-container {\n  position: relative;\n  margin: 0 60px 50px;\n}\n\n.card .input-container input {\n  outline: none;\n  z-index: 1;\n  position: relative;\n  background: none;\n  width: 100%;\n  height: 60px;\n  border: 0;\n  color: #212121;\n  font-size: 24px;\n  font-weight: 400;\n}\n\n.card .input-container input:focus ~ label {\n  color: #9d9d9d;\n  -webkit-transform: translate(-12%, -50%) scale(0.75);\n          transform: translate(-12%, -50%) scale(0.75);\n}\n\n.card .input-container input:focus ~ .bar:before, .card .input-container input:focus ~ .bar:after {\n  width: 50%;\n}\n\n.card .input-container input:valid ~ label {\n  color: #9d9d9d;\n  -webkit-transform: translate(-12%, -50%) scale(0.75);\n          transform: translate(-12%, -50%) scale(0.75);\n}\n\n.card .input-container label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #757575;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 60px;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\n\n.card .input-container .bar {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  background: #757575;\n  width: 100%;\n  height: 1px;\n}\n\n.card .input-container .bar:before, .card .input-container .bar:after {\n  content: '';\n  position: absolute;\n  background: #07D13F;\n  width: 0;\n  height: 2px;\n  -webkit-transition: .2s ease;\n  transition: .2s ease;\n}\n\n.card .input-container .bar:before {\n  left: 50%;\n}\n\n.card .input-container .bar:after {\n  right: 50%;\n}\n\n.card .button-container {\n  margin: 0 60px;\n  text-align: center;\n}\n\n.card .button-container button {\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  background: 0;\n  width: 240px;\n  border: 2px solid #28283A;\n  padding: 20px 0;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  overflow: hidden;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n}\n\n.card .button-container button span {\n  position: relative;\n  z-index: 1;\n  color: #28283A;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n}\n\n.card .button-container button:before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  background: #07D13F;\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  margin: -15px 0 0 -15px;\n  opacity: 0;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n}\n\n.card .button-container button:hover, .card .button-container button:active, .card .button-container button:focus {\n  border-color: #07D13F;\n}\n\n.card .button-container button:hover span, .card .button-container button:active span, .card .button-container button:focus span {\n  color: #07D13F;\n}\n\n.card .button-container button:active span, .card .button-container button:focus span {\n  color: #ffffff;\n}\n\n.card .button-container button:active:before, .card .button-container button:focus:before {\n  opacity: 1;\n  -webkit-transform: scale(10);\n  transform: scale(10);\n}\n\n.card .footer {\n  margin: 40px 0 0;\n  color: #d3d3d3;\n  font-size: 24px;\n  font-weight: 300;\n  text-align: center;\n}\n\n.card .footer a {\n  color: inherit;\n  text-decoration: none;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n}\n\n.card .footer a:hover {\n  color: #bababa;\n}\n\n.card.alt {\n  position: absolute;\n  top: 40px;\n  right: -70px;\n  z-index: 10;\n  width: 140px;\n  height: 140px;\n  background: none;\n  border: 0;\n  border-radius: 100%;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  padding: 0;\n  -webkit-transition: .3s ease;\n  transition: .3s ease;\n  /* Toggle */\n  /* Title */\n  /* Input */\n  /* Button */\n}\n\n.card.alt .toggle {\n  position: relative;\n  background: #07D13F;\n  width: 140px;\n  height: 140px;\n  border-radius: 100%;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  color: #ffffff;\n  font-size: 58px;\n  line-height: 140px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.card.alt .toggle:before {\n  font-size: 32px;\n  font-family: 'RobotoDraft', 'Roboto', sans-serif;\n  font-weight: 600;\n  content: 'SIGNUP';\n  display: inline-block;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.card.alt .title,\n.card.alt .input-container,\n.card.alt .button-container {\n  left: 100px;\n  opacity: 0;\n  visibility: hidden;\n}\n\n.card.alt .title {\n  position: relative;\n  border-color: #28283A;\n  color: #28283A;\n}\n\n.card.alt .title .close {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 60px;\n  display: inline;\n  color: #28283A;\n  font-size: 58px;\n  font-weight: 400;\n}\n\n.card.alt .title .close:before {\n  content: '\\00d7';\n}\n\n.card.alt .input-container input {\n  color: #28283A;\n}\n\n.card.alt .input-container input:focus ~ label {\n  color: #28283A;\n}\n\n.card.alt .input-container input:focus ~ .bar:before, .card.alt .input-container input:focus ~ .bar:after {\n  background: #ffffff;\n}\n\n.card.alt .input-container input:valid ~ label {\n  color: #ffffff;\n}\n\n.card.alt .input-container label {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.card.alt .input-container .bar {\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.card.alt .button-container button {\n  width: 100%;\n  background: #28283A;\n  border-color: #28283A;\n}\n\n.card.alt .button-container button span {\n  color: #07D13F;\n}\n\n.card.alt .button-container button:hover {\n  background: rgba(255, 255, 255, 0.9);\n}\n\n.card.alt .button-container button:active:before, .card.alt .button-container button:focus:before {\n  display: none;\n}\n\n/* Keyframes */\n\n@-webkit-keyframes buttonFadeInUp {\n  0% {\n    bottom: 30px;\n    opacity: 0;\n  }\n}\n\n@keyframes buttonFadeInUp {\n  0% {\n    bottom: 30px;\n    opacity: 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/access/access.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!session.getUser()\">\n  <div class=\"container\">\n    <div class=\"card\"></div>\n    <div class=\"card\">\n      <h1 class=\"title\">Login</h1>\n      <form>\n        <div class=\"input-container\">\n          <input type=\"text\" id=\"username-login\" name=\"username\" required=\"required\" [(ngModel)]=\"username\"/>\n          <label for=\"username\">Username</label>\n          <div class=\"bar\"></div>\n        </div>\n        <div class=\"input-container\">\n          <input type=\"password\" id=\"password-login\" name=\"password\" required=\"required\" [(ngModel)]=\"password\"/>\n          <label for=\"password\">Password</label>\n          <div class=\"bar\"></div>\n        </div>\n        <div class=\"button-container\">\n          <button type=\"submit\" (click)=\"login(username,password)\"><span>Go</span></button>\n        </div>\n        <div class=\"footer\"><a href=\"#\">Forgot your password?</a></div>\n      </form>\n    </div>\n    <div class=\"card alt\">\n      <div class=\"toggle\"></div>\n      <h1 class=\"title\">Register\n        <div class=\"close\"></div>\n      </h1>\n      <form>\n        <div class=\"input-container\">\n          <input type=\"text\" id=\"username-signup\" required=\"required\" name=\"username\" [(ngModel)]=\"username\"/>\n          <label for=\"username\">Username</label>\n          <div class=\"bar\"></div>\n        </div>\n        <div class=\"input-container\">\n          <input type=\"password\" id=\"password-signup\" required=\"required\" name=\"password\" [(ngModel)]=\"password\"/>\n          <label for=\"password\">Password</label>\n          <div class=\"bar\"></div>\n        </div>\n        <div class=\"input-container\">\n          <input type=\"password\" id=\"confirm-password-signup\" required=\"required\" name=\"confirm_password\" [(ngModel)]=\"confirm_password\"/>\n          <label for=\"password\">Repeat Password</label>\n          <div class=\"bar\"></div>\n        </div>\n        <div class=\"button-container\">\n          <button (click)=\"signup(username,password,confirm_password)\"><span>Next</span></button>\n        </div>\n      </form>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/access/access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccessComponent = /** @class */ (function () {
    function AccessComponent(session, router) {
        this.session = session;
        this.router = router;
    }
    AccessComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $(".toggle").on("click", function () {
                $("#pen").removeClass("fas");
                $(".container")
                    .stop()
                    .addClass("active");
            });
            $(".close").on("click", function () {
                $(".container")
                    .stop()
                    .removeClass("active");
            });
        });
    };
    AccessComponent.prototype.login = function (username, password) {
        var _this = this;
        this.session.login(username, password)
            .subscribe(function (user) {
            _this.router.navigate(['/']);
        }, function (err) { return _this.error = err; });
    };
    AccessComponent.prototype.signup = function (username, password, confirm_password) {
        var _this = this;
        this.session.signup(username, password, confirm_password)
            .subscribe(function (user) {
            _this.router.navigate(["/user/access"]);
        }, function (err) { return (_this.error = err); });
    };
    AccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-access",
            template: __webpack_require__("./src/app/access/access.component.html"),
            styles: [__webpack_require__("./src/app/access/access.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AccessComponent);
    return AccessComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "html {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*,\n*:after,\n*:before {\n  -webkit-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\na {\n  color: #fff;\n  text-decoration: none;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n}\n\nh1 {\n  width: 100%;\n  text-align: center;\n  padding: 40px 0;\n}\n\nheader {\n  height: 120px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 50px;\n  margin-right: 50px;\n}\n\n.shape1 {\n  background: url('https://i.imgur.com/kSVCUdy.jpg');\n  background-repeat: no-repeat;\n  height: 100vh;\n  overflow-x: hidden;\n}\n\n.shape2 {\n  background-image: url('https://i.imgur.com/ZqMQTuR.png');\n  background-position: center center;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n}\n\n.logotipo {\n\twidth: auto;\n\theight: 50px;\n  position: fixed;\n}\n\n.fixed {\n  position: absolute;\n  z-index: 1000;\n}\n\n.open {\n  position: fixed;\n  right: 40px;\n  width: 50px;\n  height: 60px;\n  display: block;\n  cursor: pointer;\n  -webkit-transition: opacity 0.2s linear;\n  transition: opacity 0.2s linear;\n  z-index: 10000;\n}\n\n.open:hover {\n  opacity: 0.8;\n}\n\n.open span {\n  display: block;\n  float: left;\n  clear: both;\n  height: 4px;\n  width: 40px;\n  border-radius: 40px;\n  background-color: #2d2d43;\n  position: absolute;\n  right: 3px;\n  top: 3px;\n  overflow: hidden;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n\n.open span:nth-child(1) {\n  margin-top: 10px;\n  z-index: 9;\n}\n\n.open span:nth-child(2) {\n  margin-top: 25px;\n}\n\n.open span:nth-child(3) {\n  margin-top: 40px;\n}\n\n.sub-menu {\n  -webkit-transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  height: 0;\n  width: 0;\n  right: 0;\n  top: 0;\n  position: absolute;\n  border-radius: 50%;\n  z-index: 18;\n  overflow: hidden;\n}\n\n.sub-menu li {\n  display: block;\n  float: right;\n  clear: both;\n  height: auto;\n  margin-right: -160px;\n  -webkit-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n\n.sub-menu li:first-child {\n  margin-top: 200px;\n}\n\n.sub-menu li:nth-child(1) {\n  -webkit-transition-delay: 0.05s;\n}\n\n.sub-menu li:nth-child(2) {\n  -webkit-transition-delay: 0.1s;\n}\n\n.sub-menu li:nth-child(3) {\n  -webkit-transition-delay: 0.15s;\n}\n\n.sub-menu li:nth-child(4) {\n  -webkit-transition-delay: 0.2s;\n}\n\n.sub-menu li:nth-child(5) {\n  -webkit-transition-delay: 0.25s;\n}\n\n.sub-menu li a {\n  color: #ffffff;\n  font-family: \"Lato\", Arial, Helvetica, sans-serif;\n  font-size: 16px;\n  width: 100%;\n  display: block;\n  float: left;\n  line-height: 35px;\n}\n\n.oppenned .sub-menu {\n  opacity: 1;\n  height: 400px;\n  width: 400px;\n}\n\n.oppenned span:nth-child(2) {\n  overflow: visible;\n}\n\n.oppenned span:nth-child(1),\n.oppenned span:nth-child(3) {\n  z-index: 100;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.oppenned span:nth-child(1) {\n  -webkit-transform: rotate(45deg) translateY(12px) translateX(12px);\n  transform: rotate(45deg) translateY(12px) translateX(12px);\n}\n\n.oppenned span:nth-child(2) {\n  height: 400px;\n  width: 400px;\n  right: -160px;\n  top: -160px;\n  border-radius: 50%;\n  background-color: #00d747;\n}\n\n.oppenned span:nth-child(3) {\n  -webkit-transform: rotate(-45deg) translateY(-10px) translateX(10px);\n  transform: rotate(-45deg) translateY(-10px) translateX(10px);\n}\n\n.oppenned li {\n  margin-right: 168px;\n}\n\n.button {\n  display: block;\n  float: left;\n  clear: both;\n  padding: 20px 40px;\n  background: #fff;\n  border-radius: 3px;\n  border: 2px solid #10a1ea;\n  overflow: hidden;\n  position: relative;\n}\n\n.button:after {\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  content: \"\";\n  position: absolute;\n  height: 200px;\n  width: 400px;\n  -webkit-transform: rotate(45deg) translateX(-540px) translateY(-100px);\n  transform: rotate(45deg) translateX(-540px) translateY(-100px);\n  background: #10a1ea;\n  z-index: 1;\n}\n\n.button:before {\n  -webkit-transition: -webkit-transform 0.5s\n    cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: -webkit-transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),\n    -webkit-transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n  content: attr(title);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  z-index: 2;\n  text-align: center;\n  padding: 20px 40px;\n  -webkit-transform: translateY(200px);\n  transform: translateY(200px);\n}\n\n.button:hover {\n  text-decoration: none;\n}\n\n.button:hover:after {\n  -webkit-transform: translateX(-300px) translateY(-100px);\n  transform: translateX(-300px) translateY(-100px);\n}\n\n.button:hover:before {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shape1\">\n  <div class=\"shape2\">\n    <header>\n      <img src=\"../assets/logotipo.svg\" class=\"logotipo\" alt=\"\" [routerLink]=\"['/']\">\n      <div class=\"open\">\n        <span class=\"cls\"></span>\n        <span>\n          <ul class=\"sub-menu \">\n            <li>\n              <a [routerLink]=\"['']\">\n                <span class=\"\"></span>Inicio</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/ideas']\">\n                <span class=\"\"></span>Ideas</a>\n            </li>\n            <li *ngIf=\"!session.getUser()\">\n              <a [routerLink]=\"['/access']\">\n                <span class=\"\"></span>Access</a>\n            </li>\n            <li *ngIf=\"session.getUser()\">\n              <a [routerLink]=\"['profile',session.getUser()._id]\">\n                <span class=\"\"></span>Perfil</a>\n            </li>\n            <li *ngIf=\"session.getUser()\">\n              <a (click)=\"logout()\">\n                <span class=\"\"></span>Logout</a>\n            </li>\n          </ul>\n        </span>\n        <span class=\"cls\"></span>\n      </div>\n    </header>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_profile_service__ = __webpack_require__("./src/services/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(session, profile, router) {
        this.session = session;
        this.profile = profile;
        this.router = router;
        this.title = "Diluvio de Ideas";
        this.session.getUser();
    }
    AppComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $(document).delegate('.open', 'click', function (event) {
                $(this).addClass('oppenned');
                event.stopPropagation();
            });
            $(document).delegate('body', 'click', function (event) {
                $('.open').removeClass('oppenned');
            });
            $(document).delegate('.cls', 'click', function (event) {
                $('.open').removeClass('oppenned');
                event.stopPropagation();
            });
        });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.session
            .logout()
            .catch(function (e) { return (_this.error = e); })
            .subscribe();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_particle__ = __webpack_require__("./node_modules/angular-particle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("./src/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_profile_service__ = __webpack_require__("./src/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_ideas_service__ = __webpack_require__("./src/services/ideas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_mensajes_service__ = __webpack_require__("./src/services/mensajes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_responses_service__ = __webpack_require__("./src/services/responses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ideas_ideas_component__ = __webpack_require__("./src/app/ideas/ideas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mensajes_mensajes_component__ = __webpack_require__("./src/app/mensajes/mensajes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ideasingle_ideasingle_component__ = __webpack_require__("./src/app/ideasingle/ideasingle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__edit_profile_edit_profile_component__ = __webpack_require__("./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__edit_idea_edit_idea_component__ = __webpack_require__("./src/app/edit-idea/edit-idea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__new_idea_new_idea_component__ = __webpack_require__("./src/app/new-idea/new-idea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__new_response_new_response_component__ = __webpack_require__("./src/app/new-response/new-response.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__access_access_component__ = __webpack_require__("./src/app/access/access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__new_message_new_message_component__ = __webpack_require__("./src/app/new-message/new-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__edit_response_edit_response_component__ = __webpack_require__("./src/app/edit-response/edit-response.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//-- ANGULAR --//







//-- SERVICIOS --//






//-- COMPONENTES --//















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__ideas_ideas_component__["a" /* IdeasComponent */],
                __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__mensajes_mensajes_component__["a" /* MensajesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_19__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_20__ideasingle_ideasingle_component__["a" /* IdeasingleComponent */],
                __WEBPACK_IMPORTED_MODULE_21__edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_22__edit_idea_edit_idea_component__["a" /* EditIdeaComponent */],
                __WEBPACK_IMPORTED_MODULE_23__new_idea_new_idea_component__["a" /* NewIdeaComponent */],
                __WEBPACK_IMPORTED_MODULE_24__new_response_new_response_component__["a" /* NewResponseComponent */],
                __WEBPACK_IMPORTED_MODULE_25__access_access_component__["a" /* AccessComponent */],
                __WEBPACK_IMPORTED_MODULE_26__new_message_new_message_component__["a" /* NewMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_27__edit_response_edit_response_component__["a" /* EditResponseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_6_angular_particle__["a" /* ParticlesModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_10__services_ideas_service__["a" /* IdeasService */], __WEBPACK_IMPORTED_MODULE_12__services_responses_service__["a" /* ResponsesService */], __WEBPACK_IMPORTED_MODULE_9__services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__services_mensajes_service__["a" /* MensajesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-idea/edit-idea.component.css":
/***/ (function(module, exports) {

module.exports = ".new-idea {\n    border: 1px solid gray;\n    border-radius: 3px;\n    padding: 30px;\n    margin-bottom: 50px;\n}"

/***/ }),

/***/ "./src/app/edit-idea/edit-idea.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container new-idea wrapper\" *ngIf=\"idea\">\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"title\">Titulo</label>\n      <input type=\"text\" class=\"form-control\" name=\"title\" id=\"title\" placeholder=\"Introduce Título\" [(ngModel)]=\"idea.title\" value=\"{{idea.title}}\" disabled>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"idea\">Desarrolla tu Idea</label>\n      <textarea class=\"form-control\" name=\"mensaje\" id=\"idea\" rows=\"3\" [(ngModel)]=\"idea.mensaje\" value=\"{{idea.idea}}\"></textarea>\n    </div>\n    <!-- <div class=\"form-group\">\n      <label for=\"imagen\">Sube un boceto de tu idea</label>\n      <input type=\"file\" name=\"imagen\" class=\"form-control-file\" id=\"imagen\" [(ngModel)]=\"idea.imagen\" value=\"{{idea.imagen}}\">\n    </div>\n    <fieldset class=\"form-group\">\n      <legend>Privacidad</legend>\n      <div class=\"form-check\">\n        <label class=\"form-check-label\">\n          <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"public\" [(ngModel)]=\"idea.privacy\"\n            checked> Pública\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <label class=\"form-check-label\">\n          <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"private\" [(ngModel)]=\"idea.privacy\"> Privada\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <legend>Colaboraciones</legend>\n        <label class=\"form-check-label\">\n          <input type=\"checkbox\" name=\"colaborar\" class=\"form-check-input\" [(ngModel)]=\"idea.colaborate\"> Colaborar\n        </label>\n      </div>\n    </fieldset> -->\n    <div class=\"text-right\">\n      <button type=\"submit\" value=\"Edita tu idea\" name=\"submit\" class=\"btn btn-primary\" (click)=\"edit(idea)\">Edita tu idea</button>\n    </div>  \n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-idea/edit-idea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditIdeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__ = __webpack_require__("./src/services/ideas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditIdeaComponent = /** @class */ (function () {
    function EditIdeaComponent(route, iS, router) {
        this.route = route;
        this.iS = iS;
        this.router = router;
    }
    EditIdeaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.iS.getIdeaId(params['id']).subscribe(function (idea) { _this.idea = idea; });
        });
    };
    EditIdeaComponent.prototype.edit = function (idea) {
        var _this = this;
        this.iS
            .editIdea(idea._id, idea)
            .subscribe(function (idea) {
            _this.router.navigate(['/ideas']);
        });
    };
    EditIdeaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-idea',
            template: __webpack_require__("./src/app/edit-idea/edit-idea.component.html"),
            styles: [__webpack_require__("./src/app/edit-idea/edit-idea.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__["a" /* IdeasService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EditIdeaComponent);
    return EditIdeaComponent;
}());



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.css":
/***/ (function(module, exports) {

module.exports = ".centrado {\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    max-width: 400px;\n    margin-bottom: 100px;\n}\n\ninput {\n    width: 300px;\n}\n\nselect {\n    width: 300px;\n}\n\ntextarea {\n    width: 300px;\n}\n\n.container {\n    max-width: 800px;\n}"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <div class=\"container\">\n    <div class=\"row centrado wrapper sombra\">\n      <div class=\"col-md-12\" style=\"margin-bottom:50px\">\n        <form class=\"form-horizontal\">\n          <fieldset>\n            <!-- Form Name -->\n            <legend>Edita tu perfil!</legend>\n        \n            <!-- Text input-->\n            <div class=\"form-group\">\n              <label class=\"col-md-12 control-label\" for=\"username\">Username</label>\n              <div class=\"col-md-12\">\n                <input id=\"username\" name=\"username\" type=\"text\" placeholder=\"Username\" class=\"form-control input-md\" value=\"{{user.username}}\" [(ngModel)]=\"user.username\">\n        \n              </div>\n            </div>\n        \n            <!-- Text input-->\n            <div class=\"form-group\">\n              <label class=\"col-md-12 control-label\" for=\"name\">Nombre y Apellidos</label>\n              <div class=\"col-md-12\">\n                <input id=\"name\" name=\"name\" type=\"text\" placeholder=\"Nombre y Apellidos\" class=\"form-control input-md\" value=\"{{user.name}}\" [(ngModel)]=\"user.name\">\n        \n              </div>\n            </div>\n        \n            <!-- Text input-->\n            <div class=\"form-group\">\n              <label class=\"col-md-12 control-label\" for=\"email\">Correo electrónico</label>\n              <div class=\"col-md-12\">\n                <input id=\"email\" name=\"email\" type=\"text\" placeholder=\"Correo electrónico\" class=\"form-control input-md\" value=\"{{user.email}}\" [(ngModel)]=\"user.email\">\n        \n              </div>\n            </div>\n        \n            <!-- File Button\n            <div class=\"form-group\">\n              <label class=\"col-md-12 control-label\" for=\"avatar\">Avatar</label>\n              <div class=\"col-md-12\">\n                <input id=\"avatar\" name=\"avatar\" class=\"input-file\" type=\"file\">\n              </div>\n            </div> -->\n        \n            <!-- Password input-->\n            <div class=\"form-group\">\n              <label class=\"col-md-12 control-label\" for=\"password\">Contraseña</label>\n              <div class=\"col-md-12\">\n                <input id=\"password\" name=\"password\" type=\"password\" placeholder=\"Contraseña\" class=\"form-control input-md\" [(ngModel)]=\"user.password\" value=\"\">\n        \n              </div>\n            </div>\n        \n            <!-- Password input-->\n            <div class=\"form-group\">\n              <label class=\"col-md-12 control-label\" for=\"confirm_password\">Confirma contraseña</label>\n              <div class=\"col-md-12\">\n                <input id=\"confirm_password\" name=\"confirm_password\" type=\"password\" placeholder=\"Confirma la contraseña\" class=\"form-control input-md\" [(ngModel)]=\"user.confirm_password\">\n        \n              </div>\n            </div>\n        \n            <!-- Select Basic -->\n            <div class=\"form-group\">\n              <label class=\"col-md-12 control-label\" for=\"espec\">Especialidad</label>\n              <div class=\"col-md-12\">\n                <select id=\"espec\" name=\"espec\" class=\"form-control\" value=\"{{user.espec}}\" [(ngModel)]=\"user.espec\">\n                  <option value=\"web\">WEB</option>\n                  <option value=\"ux\">UX / UI</option>\n                </select>\n              </div>\n            </div>\n        \n            <!-- Textarea -->\n            <div class=\"form-group\">\n              <label class=\"col-md-12 control-label\" for=\"about_me\">Sobre ti...</label>\n              <div class=\"col-md-12\">\n                <textarea class=\"form-control\" id=\"about_me\" name=\"about_me\" [(ngModel)]=\"user.about_me\">{{user.about_me}}</textarea>\n              </div>\n            </div>\n        \n            <!-- Button -->\n            <div class=\"form-group\">\n              <label class=\"col-md-12 control-label\" for=\"submit\"></label>\n              <div class=\"col-md-12\">\n                <button id=\"submit\" name=\"submit\" (click)=\"edit(user)\" class=\"btn btn-success\">Quiero cambiar mis datos!</button>\n              </div>\n            </div>\n        \n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_service__ = __webpack_require__("./src/services/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(route, pS, router) {
        this.route = route;
        this.pS = pS;
        this.router = router;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pS.getProfileId(params['id']).subscribe(function (user) { _this.user = user; });
        });
    };
    EditProfileComponent.prototype.edit = function (user) {
        var _this = this;
        this.pS
            .editProfile(user._id, user)
            .subscribe(function (user) {
            _this.router.navigate(['/profile', user._id]);
        });
    };
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-profile',
            template: __webpack_require__("./src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("./src/app/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/edit-response/edit-response.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-response/edit-response.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"idea\">Modifica tu gota</label>\n      <textarea class=\"form-control\" name=\"mensaje\" id=\"idea\" rows=\"3\" [(ngModel)]=\"mensaje\"></textarea>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"editResponse(mensaje)\">Vuelve a enviarla!</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/edit-response/edit-response.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditResponseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_responses_service__ = __webpack_require__("./src/services/responses.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditResponseComponent = /** @class */ (function () {
    function EditResponseComponent(route, rS, router) {
        this.route = route;
        this.rS = rS;
        this.router = router;
    }
    EditResponseComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
    };
    EditResponseComponent.prototype.editResponse = function (mensaje) {
        var _this = this;
        this.rS
            .editResponse(this.id, mensaje)
            .subscribe(function (mensaje) {
            _this.router.navigate(['/ideas']);
        });
    };
    EditResponseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-response',
            template: __webpack_require__("./src/app/edit-response/edit-response.component.html"),
            styles: [__webpack_require__("./src/app/edit-response/edit-response.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_responses_service__["a" /* ResponsesService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EditResponseComponent);
    return EditResponseComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/*\n    Animation Loader\n*/\n#loader-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999999;\n  background: #fff;\n  overflow: hidden;\n}\n#loader {\n  width: 90px;\n  height: 65px;\n  position: relative;\n  top:50%;\n  left:50%;\n  -webkit-transform:translate(-50%, -50%);\n          transform:translate(-50%, -50%);\n}\n#loader ul {\n  margin: 0;\n  list-style: none;\n  width: 90px;\n  position: relative;\n  padding: 0;\n  height: 10px;\n}\n#loader ul li {\n  position: absolute;\n  width: 2px;\n  height: 0;\n  background-color: #00d747;\n  bottom: 0;\n}\n@-webkit-keyframes sequence1 {\n  0% {\n    height: 10px;\n  }\n  50% {\n    height: 50px;\n  }\n  100% {\n    height: 10px;\n  }\n}\n@keyframes sequence1 {\n  0% {\n    height: 10px;\n  }\n  50% {\n    height: 50px;\n  }\n  100% {\n    height: 10px;\n  }\n}\n@-webkit-keyframes sequence2 {\n  0% {\n    height: 20px;\n  }\n  50% {\n    height: 65px;\n  }\n  100% {\n    height: 20px;\n  }\n}\n@keyframes sequence2 {\n  0% {\n    height: 20px;\n  }\n  50% {\n    height: 65px;\n  }\n  100% {\n    height: 20px;\n  }\n}\n#loader li:nth-child(1) {\n  left: 0;\n  -webkit-animation: sequence1 1s ease infinite 0;\n          animation: sequence1 1s ease infinite 0;\n}\n#loader li:nth-child(2) {\n  left: 15px;\n  -webkit-animation: sequence2 1s ease infinite 0.1s;\n          animation: sequence2 1s ease infinite 0.1s;\n}\n#loader li:nth-child(3) {\n  left: 30px;\n  -webkit-animation: sequence1 1s ease-in-out infinite 0.2s;\n          animation: sequence1 1s ease-in-out infinite 0.2s;\n}\n#loader li:nth-child(4) {\n  left: 45px;\n  -webkit-animation: sequence2 1s ease-in infinite 0.3s;\n          animation: sequence2 1s ease-in infinite 0.3s;\n}\n#loader li:nth-child(5) {\n  left: 60px;\n  -webkit-animation: sequence1 1s ease-in-out infinite 0.4s;\n          animation: sequence1 1s ease-in-out infinite 0.4s;\n}\n#loader li:nth-child(6) {\n  left: 75px;\n  -webkit-animation: sequence2 1s ease infinite 0.5s;\n          animation: sequence2 1s ease infinite 0.5s;\n}\n/*\n    Animation Loader\n*/\n.fix-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 80vh;\n  padding: 50px;\n}\n.wrapper {\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n.home-text h5 {\n  font-weight: normal;\n  color: rgba(0,0,0,0.4);\n}\n.home-text h1 {\n  text-transform: capitalize;\n  line-height: 78px;\n  margin: 25px 0 55px 0;\n  color: #2d2d43;\n  font-size: 60px;\n  font-weight: 600;\n}\n.home-images {\n  position: relative;\n  height: 600px;\n  width: 760px;\n}\n.home-images img{\n  position: absolute;\n}\nh1 span {\n  position: relative;\n  z-index: 9;\n}\nspan::before {\n  content: '';\n  width: 98%;\n  height: 10px;\n  position: absolute;\n  background: #99efb5;\n  left: 3px;\n  bottom: 10px;\n  z-index: -1;\n}\n.btn-primary {\n  background: #00d747;\n  border: 0px;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fix-body\">\n  <div class=\"wrapper\">\n    <div class=\"home-text\">\n      <h5 class=\"awesome-text\">We’r Awesome</h5>\n      <h1 class=\"\"><span>Diluvio de Ideas</span><br><span>donde encontrarás</span><br><span>tu inspiración</span></h1>\n      <a [routerLink]=\"['/ideas']\" routerLinkActive=\"router-link-inactive\"  class=\"btn btn-primary\">¡Comience!</a>\n    </div>\n\n    <div class=\"home-images\">\n      <img src=\"../../assets/shape3.svg\" alt=\"\">\n      <img src=\"https://i.imgur.com/UUxWrTs.png\" alt=\"\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("./src/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(session, router) {
        this.session = session;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Prealoder
        function prealoader() {
            if ($('#loader').length) {
                $('#loader').fadeOut(); // will first fade out the loading animation
                $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
                $('body').delay(350).css({ 'overflow': 'visible' });
            }
        }
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this.session
            .logout()
            .catch(function (e) { return (_this.error = e); })
            .subscribe();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-home",
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ideas/ideas.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n  color: #2d2d43;\n}\n\n.avatar {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  margin-bottom: 10px;\n}\n\n.pointer {\n  cursor: pointer;\n  padding: 40px;\n}\n\n.pather:last-child {\n  margin-bottom: 100px;\n}\n\n.idea {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-bottom: 25px;\n  background-color: #fff;\n  /* border-radius: 20px; */\n}\n\n.fix-padding {\n  padding: 0;\n}\n\n.background-green {\n  background-color: #26D75A;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 220px;\n}\n\n.background-green__dark {\n  background-color: #0BC940;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 70px;\n}\n\n.btn-naked {\n  background-color: transparent;\n  border: 0px;\n  color: #fff;\n}\n\n.btn-naked:hover {\n  border: 1px solid #fff;\n  border-radius: 5px;\n}\n\n.actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0;\n}\n\n.add-idea {\n  color: #0BC940;\n  font-size: 50px;\n  position: fixed;\n  bottom: 40px;\n  right: 50px;\n}\n\n.max-height-text {\n  max-height: 125px;\n  overflow: hidden;\n}\n\n.fav {\n  background-position: left;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n\n.fav:hover {\n  background-position: right;\n}\n\n.fav-star {\n  background-image: url(\"https://cssanimation.rocks/images/posts/steps/twitter_fave.png\");\n  height: 45px;\n  width: 64px;\n}\n\n.fav-star.is-animating {\n  -webkit-animation: zoetrope 0.8s steps(55) 1;\n  animation: zoetrope 0.8s steps(55) 1;\n}\n\n.fav-heart {\n  background-image: url(\"https://i.imgur.com/aZXAWmo.png\");\n  background-size: auto 50px;\n  height: 50px;\n  width: 50px;\n}\n\n.fav-heart.is-animating {\n  -webkit-animation: zoetrope 0.8s steps(28) 1;\n  animation: zoetrope 0.8s steps(28) 1;\n}\n\n@-webkit-keyframes zoetrope {\n  from {\n    background-position: left;\n  }\n  to {\n    background-position: right;\n  }\n}\n\n@keyframes zoetrope {\n  from {\n    background-position: left;\n  }\n  to {\n    background-position: right;\n  }\n}\n"

/***/ }),

/***/ "./src/app/ideas/ideas.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container wrapper\">\n  <div *ngFor=\"let idea of ideasList\" class=\"row idea sombra pather\">\n    <div class=\"col-md-2 fix-padding\">\n      <div class=\"idea-avatar background-green\">\n        <img src=\"{{idea.user_id.avatar}}\" alt=\"Avatar\" class=\"avatar\">\n        <div class=\"text-center\">{{idea.user_id.name}}</div>\n      </div>\n      <div class=\"background-green__dark\">\n        <div class=\"fav fav-heart\"></div>\n        <button type=\"submit\" class=\"btn btn-naked\">Colaborar</button>\n      </div>\n    </div>\n    <div class=\"col-md-10 pointer\" [routerLink]=\"['/detail-idea', idea._id]\">\n      <div class=\"\"><h3>{{idea.title}}</h3></div>\n      <div class=\"text-justify max-height-text\">{{idea.mensaje}}</div>\n    </div>\n  </div>\n</div>\n<div routerLink=\"/new-idea\">\n  <i class=\"fas fa-plus-circle add-idea\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/ideas/ideas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ideas_service__ = __webpack_require__("./src/services/ideas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdeasComponent = /** @class */ (function () {
    function IdeasComponent(iS) {
        var _this = this;
        this.iS = iS;
        this.iS.getIdeaList().subscribe(function (list) { return (_this.ideasList = list); });
    }
    IdeasComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            /* when a user clicks, toggle the 'is-animating' class */
            $(".fav").on("click touchstart", function () {
                $(this).toggleClass("is-animating");
            });
            /*when the animation is over, remove the class*/
            $(".fav").on("animationend", function () {
                $(this).toggleClass("is-animating");
            });
        });
    };
    IdeasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-ideas",
            template: __webpack_require__("./src/app/ideas/ideas.component.html"),
            styles: [__webpack_require__("./src/app/ideas/ideas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ideas_service__["a" /* IdeasService */]])
    ], IdeasComponent);
    return IdeasComponent;
}());



/***/ }),

/***/ "./src/app/ideasingle/ideasingle.component.css":
/***/ (function(module, exports) {

module.exports = ".detail-idea-avatar {\n  background-color: #26D75A;\n}\n\n.detail-idea-avatar img {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n}\n\n.detail-idea-idea {\n  background-color: white;\n}\n\n.padding-40px {\n  padding: 40px;\n}\n\n.btn-edit {\n  background-color: transparent;\n  border: 1px solid white;\n  border-radius: 5px;\n  color: white;\n}\n\n.display-flex__center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.sombra {\n  margin-bottom: 60px;\n}\n\n.avatar {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n}\n\n.response {\n  background-color: white;\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px;\n  margin-bottom: 25px;\n}\n\n.response .avatar {\n  margin-right: 25px;\n}\n\n.edit {\n  color: #26D75A;\n  font-size: 20px;\n}\n"

/***/ }),

/***/ "./src/app/ideasingle/ideasingle.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"idea\" class=\"wrapper\">\n  <div class=\"container\">\n    <div class=\"row sombra\">\n      <div class=\"col-md-2 padding-40px detail-idea-avatar display-flex__center\">\n        <img src=\"https://media.licdn.com/dms/image/C5603AQFhYbKDddw_nA/profile-displayphoto-shrink_200_200/0?e=1538611200&v=beta&t=Qd86bosrurPhcQAvdFvS-uq6qGZxbZi26jI2_4r8THc\" alt=\"\" class=\"avatar\">\n        <input type=\"submit\" value=\"Editar\" class=\"btn btn-edit\" [routerLink]=\"['/edit-idea', idea._id]\">\n      </div>\n      <div class=\"col-md-10 padding-40px detail-idea-idea\">\n        <div class=\"\"><h3>{{idea.title}}</h3></div>\n        <div class=\"text-justify\">{{idea.mensaje}}</div>\n      </div>\n    </div>\n    <div *ngFor=\"let response of idea.response_id\" class=\"response sombra\">\n      <img src=\"https://media.licdn.com/dms/image/C5603AQFhYbKDddw_nA/profile-displayphoto-shrink_200_200/0?e=1538611200&v=beta&t=Qd86bosrurPhcQAvdFvS-uq6qGZxbZi26jI2_4r8THc\" alt=\"\" class=\"avatar\">\n      <div>{{response.mensaje}} <a [routerLink]=\"['/edit-response', response._id]\"><i class=\"fas fa-pencil-alt edit\"></i></a></div>\n    </div>\n    <app-new-response></app-new-response>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ideasingle/ideasingle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeasingleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__ = __webpack_require__("./src/services/ideas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IdeasingleComponent = /** @class */ (function () {
    function IdeasingleComponent(iS, route) {
        this.iS = iS;
        this.route = route;
    }
    IdeasingleComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getIdeaDetails();
    };
    IdeasingleComponent.prototype.getIdeaDetails = function () {
        var _this = this;
        this.iS.getSingleIdea(this.id)
            .subscribe(function (idea) {
            _this.getIdea(idea);
        });
    };
    IdeasingleComponent.prototype.getIdea = function (idea) {
        console.table('dentro de getidea: ' + idea);
        return this.idea = idea;
    };
    IdeasingleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ideasingle',
            template: __webpack_require__("./src/app/ideasingle/ideasingle.component.html"),
            styles: [__webpack_require__("./src/app/ideasingle/ideasingle.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_ideas_service__["a" /* IdeasService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], IdeasingleComponent);
    return IdeasingleComponent;
}());



/***/ }),

/***/ "./src/app/mensajes/mensajes.component.css":
/***/ (function(module, exports) {

module.exports = ".mensajes{\n    margin: 40px;\n}"

/***/ }),

/***/ "./src/app/mensajes/mensajes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-new-message></app-new-message>\n</div>\n\n    <!-- <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseEntrada\" aria-expanded=\"false\" aria-controls=\"collapseEntrada\">Button with data-target</button>\n    <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseSalida\" aria-expanded=\"false\" aria-controls=\"collapseSalida\">Button with data-target</button>\n  \n  <div class=\"collapse\" id=\"collapseEntrada\">\n    <div class=\"card card-body\">\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n    </div>\n  </div>\n  <div class=\"collapse\" id=\"collapseSalida\">\n    <div class=\"card card-body\">\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, mollitia quibusdam culpa maiores a maxime, doloremque et cumque impedit beatae repudiandae corrupti in dolores reiciendis architecto porro sapiente quam voluptatum.\n    </div>\n  </div> -->\n\n<div *ngIf='mensajes' class=\"wrapper\">\n    <div *ngFor=\"let mensaje of mensajes\">\n        <div class=\"row mensajes sombra\">\n            <div class=\"col-md-12\" style=\"padding: 25px;\">\n                <div><b>Asunto:</b> {{mensaje.asunto}}</div>\n                <div><b>De:</b> {{mensaje.emisor.name}}</div>\n                <div><b>Para:</b> {{mensaje.receptor.name}}</div>\n                <div><b>Mensaje:</b> {{mensaje.contenido}}</div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/mensajes/mensajes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mensajes_service__ = __webpack_require__("./src/services/mensajes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MensajesComponent = /** @class */ (function () {
    function MensajesComponent(route, mS, router) {
        this.route = route;
        this.mS = mS;
        this.router = router;
    }
    MensajesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mS.getMensajeList().subscribe(function (mensaje) {
            _this.mensajes = mensaje;
        });
    };
    MensajesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mensajes',
            template: __webpack_require__("./src/app/mensajes/mensajes.component.html"),
            styles: [__webpack_require__("./src/app/mensajes/mensajes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_mensajes_service__["a" /* MensajesService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MensajesComponent);
    return MensajesComponent;
}());



/***/ }),

/***/ "./src/app/new-idea/new-idea.component.css":
/***/ (function(module, exports) {

module.exports = ".new-idea {\n    padding: 30px;\n    margin-bottom: 50px;\n}"

/***/ }),

/***/ "./src/app/new-idea/new-idea.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<h3 class=\"text-center\">Crea tu idea</h3>\n\n<br>\n\n<div class=\"container new-idea sombra\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"title\">Titulo</label>\n      <input type=\"text\" class=\"form-control\" name=\"title\" id=\"title\" placeholder=\"Introduce Título\" [(ngModel)]=\"title\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"idea\">Desarrolla tu Idea</label>\n      <textarea class=\"form-control\" name=\"mensaje\" id=\"idea\" rows=\"3\" [(ngModel)]=\"mensaje\"></textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"newIdea(title,mensaje)\">Adelante, reciba feedback!</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/new-idea/new-idea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewIdeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__ = __webpack_require__("./src/services/ideas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewIdeaComponent = /** @class */ (function () {
    function NewIdeaComponent(route, iS, router) {
        this.route = route;
        this.iS = iS;
        this.router = router;
    }
    NewIdeaComponent.prototype.ngOnInit = function () { };
    NewIdeaComponent.prototype.newIdea = function (title, mensaje) {
        var _this = this;
        this.idea = { title: title, mensaje: mensaje };
        this.iS
            .newIdeaService(this.idea)
            .subscribe(function (idea) {
            _this.router.navigate(['/ideas']);
        });
    };
    NewIdeaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-idea',
            template: __webpack_require__("./src/app/new-idea/new-idea.component.html"),
            styles: [__webpack_require__("./src/app/new-idea/new-idea.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__["a" /* IdeasService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NewIdeaComponent);
    return NewIdeaComponent;
}());



/***/ }),

/***/ "./src/app/new-message/new-message.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-message/new-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container new-idea\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"asunto\">Asunto</label>\n      <input type=\"text\" class=\"form-control\" name=\"asunto\" id=\"asunto\" placeholder=\"Introduce el asunto\" [(ngModel)]=\"asunto\" value=\"{{mensaje.asunto}}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"receptorUsername\">Destinatario</label>\n      <input type=\"text\" class=\"form-control\" name=\"receptorUsername\" id=\"receptorUsername\" placeholder=\"Introduce el destinatario\" [(ngModel)]=\"receptorUsername\" value=\"{{mensaje.asunto}}\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"idea\">Escribe tu mensaje</label>\n      <textarea class=\"form-control\" name=\"contenido\" id=\"idea\" rows=\"3\" [(ngModel)]=\"contenido\" value=\"{{mensaje.asunto}}\"></textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"newMensaje(asunto,receptorUsername,contenido)\">Enviar MP</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/new-message/new-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mensajes_service__ = __webpack_require__("./src/services/mensajes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewMessageComponent = /** @class */ (function () {
    function NewMessageComponent(route, mS, router) {
        this.route = route;
        this.mS = mS;
        this.router = router;
        this.arrayMensaje = [];
    }
    NewMessageComponent.prototype.ngOnInit = function () {
    };
    NewMessageComponent.prototype.newMensaje = function (asunto, receptorUsername, contenido) {
        var _this = this;
        this.mensaje = { asunto: asunto, receptorUsername: receptorUsername, contenido: contenido };
        this.arrayMensaje.push(this.mensaje);
        this.mS.newMensajeService(asunto, receptorUsername, contenido).subscribe(function (mensaje) {
            _this.router.navigate(["/mensajes"]);
        });
        //limpieza
        this.mensaje = [contenido = "", asunto = "", receptorUsername = ""];
    };
    NewMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-message',
            template: __webpack_require__("./src/app/new-message/new-message.component.html"),
            styles: [__webpack_require__("./src/app/new-message/new-message.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_mensajes_service__["a" /* MensajesService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NewMessageComponent);
    return NewMessageComponent;
}());



/***/ }),

/***/ "./src/app/new-response/new-response.component.css":
/***/ (function(module, exports) {

module.exports = ".response {\n  background-color: white;\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px;\n  margin-bottom: 25px;\n}\n\n.avatar {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n}\n\n.response .avatar {\n  margin-right: 25px;\n}\n\n.edit {\n  color: #26D75A;\n  font-size: 20px;\n}\n\n.new-response {\n  margin-bottom: 200px;\n}\n\n.new-response__input {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.add-response {\n  color: #0BC940;\n  font-size: 50px;\n}\n\n.add-pointer {\n  cursor: pointer;\n}\n\n.full-width__add {\n  width: 100%;\n  margin-top: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n"

/***/ }),

/***/ "./src/app/new-response/new-response.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"arrayResponses\" class=\"new-response\">\n  <div *ngFor=\"let response of arrayResponses\" class=\"response sombra\">\n    <img src=\"https://media.licdn.com/dms/image/C5603AQFhYbKDddw_nA/profile-displayphoto-shrink_200_200/0?e=1538611200&v=beta&t=Qd86bosrurPhcQAvdFvS-uq6qGZxbZi26jI2_4r8THc\" alt=\"\" class=\"avatar\">\n    <div>{{response}} <a [routerLink]=\"['/edit-response', response._id]\"><i class=\"fas fa-pencil-alt edit\"></i></a></div>\n  </div>\n  <div class=\"full-width__add\">\n    <div *ngIf=\"!addResponseStatus\" (click)=\"changeStatus()\" class=\"add-pointer\">\n      <i class=\"fas fa-plus-circle add-response\"></i>\n    </div>\n  </div>\n  <form *ngIf=\"addResponseStatus\">\n    <div class=\"form-group\">\n      <textarea class=\"form-control sombra\" name=\"response\" id=\"idea\" rows=\"3\" [(ngModel)]=\"response\" value=\"{{response}}\" placeholder=\"Gota tras gota se forma el diluvio!\"></textarea>\n    </div>\n    <div class=\"new-response__input\">\n      <button type=\"submit\" value=\"Edita tu idea\" name=\"submit\" class=\"btn btn-primary\" (click)=\"newResponse(response); changeStatus()\">Aportar tu gota!</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/new-response/new-response.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewResponseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_responses_service__ = __webpack_require__("./src/services/responses.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ideas_service__ = __webpack_require__("./src/services/ideas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewResponseComponent = /** @class */ (function () {
    function NewResponseComponent(route, rS, iS, router) {
        this.route = route;
        this.rS = rS;
        this.iS = iS;
        this.router = router;
        this.addResponseStatus = false;
        this.arrayResponses = [];
    }
    NewResponseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getIdeaDetails(params['id']);
        });
    };
    NewResponseComponent.prototype.getIdeaDetails = function (id) {
        var _this = this;
        this.iS.getSingleIdea(id)
            .subscribe(function (idea) {
            _this.getIdea(idea);
        });
    };
    NewResponseComponent.prototype.getIdea = function (idea) {
        return this.idea = idea;
    };
    NewResponseComponent.prototype.newResponse = function (response) {
        var _this = this;
        this.arrayResponses.push(response);
        this.response = { response: response };
        this.rS.newResponseService(this.response, this.idea._id).subscribe(function (response) {
            _this.router.navigate(["/detail-idea", _this.idea._id]);
        });
        //limpieza
        this.response = [response = ""];
    };
    NewResponseComponent.prototype.changeStatus = function () {
        this.addResponseStatus = !this.addResponseStatus;
    };
    NewResponseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-new-response",
            template: __webpack_require__("./src/app/new-response/new-response.component.html"),
            styles: [__webpack_require__("./src/app/new-response/new-response.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_responses_service__["a" /* ResponsesService */], __WEBPACK_IMPORTED_MODULE_3__services_ideas_service__["a" /* IdeasService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NewResponseComponent);
    return NewResponseComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".profile-avatar {\n  background-color: #07D13F;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 250px;\n}\n.profile-avatar img {\n  border-radius: 50%;\n  height: 200px;\n  width: 200px;\n}\n.profile-data {\n  background-color: white;\n  padding: 40px;\n  position: relative;\n}\n.profile-edit {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  color: #07D13F;\n  font-size: 20px;\n}\n.profile-ideas__tags {\n  min-height: 70px;\n  background-color: white;\n  border-left: 5px solid #07D13F;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n.profile-ideas__tags span {\n  color: #28283A;\n  text-decoration: none;\n  margin-right: 20px;\n}\n.circulo {\n  height: 50px;\n  width: 50px;\n  background-color: #d2ffdf;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0px 25px 0px 10px;\n}\n.ideas {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 35px;\n}\n.profile-flex__tags {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-top: 20px;\n  margin-bottom: 70px;\n}\n.profile-section-ideas {\n  margin: 50px;\n  color: #28283A;\n}\n.profile-section-response {\n  margin: 50px;\n  color: #28283A;\n}\n.response {\n  background-color: #fff;\n  padding: 40px;\n  margin: 25px;\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"user\">\n    <div class=\"row sombra\">\n      <div class=\"col-md-3 profile-avatar\">\n        <img src=\"{{user.avatar}}\" alt=\"avatar\" class=\"img-fluid\">\n      </div>\n      <div class=\"col-md-9 profile-data\">\n        <h3>{{user.name}}</h3>\n        <h4>{{user.email}}</h4>\n        <h5>@{{user.username}}</h5>\n        <p>{{user.about_me}}</p>\n        <div [routerLink]=\"['/profile/edit', user._id]\" class=\"profile-edit\">\n          <i class=\"far fa-edit\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"profile-section-ideas\">\n    <h4>Ideas publicadas</h4>\n    <div class=\"profile-flex__tags\">\n      <div class=\"ideas sombra\" *ngFor=\"let idea of ideasList\">\n        <div class=\"profile-ideas__tags\" [routerLink]=\"['/detail-idea', idea._id]\">\n          <div class=\"circulo\">\n            <i class=\"far fa-lightbulb \"></i>\n          </div>\n          <span>{{idea.title}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"profile-section-response\">\n    <h4>Respuestas publicadas</h4>\n    <div class=\"sombra\" *ngFor=\"let response of responseList\">\n      <div class=\"response\">\n        <span>{{response.mensaje}}</span>\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <!-- <div class=\"response\" *ngFor=\"let response of responseList\">\n    <div class=\"\">{{response.mensaje}}</div>\n  </div> -->\n  <div class=\"colaboraciones\" *ngFor=\"let colaboraciones of ideasList\">\n    <div *ngFor=\"let pending of colaboracionesPending\">\n      El usuario <b><a [routerLink]=\"['/profile', pending.colaborador._id]\">{{pending.author.name}}</a></b> quiere participar en <b><a [routerLink]=\"['/detail-idea', pending.idea_id._id]\">{{pending.idea_id.title}}</a></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <a (click)=\"aceptarColaboracion(pending._id)\"><i class=\"fas fa-check\"></i></a> | <a (click)=\"declinarColaboracion(pending._id)\"><i class=\"fas fa-times\"></i></a></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_service__ = __webpack_require__("./src/services/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, pS, router) {
        this.route = route;
        this.pS = pS;
        this.router = router;
        this.colaboracionesList = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pS.getProfileId(params['id']).subscribe(function (user) {
                _this.user = user;
                _this.ideasList = user.ideas;
                _this.responseList = user.response;
                _this.colaboracionesList = user.ideas;
                _this.colaboracionesPending = _this.user.ideas[0].pending;
                _this.colaboracionesJoin;
            });
        });
    };
    ProfileComponent.prototype.declinarColaboracion = function (id) {
        var _this = this;
        this.colaboracionesPending.pop(id);
        this.pS.eliminarColabo(id).subscribe(function (r) {
            _this.router.navigate(['/']);
        }, function (err) { return _this.error = err; });
    };
    ProfileComponent.prototype.aceptarColaboracion = function (id) {
        this.pS.aceptarColabo(id);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mensajes_mensajes_component__ = __webpack_require__("./src/app/mensajes/mensajes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ideas_ideas_component__ = __webpack_require__("./src/app/ideas/ideas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ideasingle_ideasingle_component__ = __webpack_require__("./src/app/ideasingle/ideasingle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_profile_edit_profile_component__ = __webpack_require__("./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_idea_new_idea_component__ = __webpack_require__("./src/app/new-idea/new-idea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_idea_edit_idea_component__ = __webpack_require__("./src/app/edit-idea/edit-idea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__access_access_component__ = __webpack_require__("./src/app/access/access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_response_edit_response_component__ = __webpack_require__("./src/app/edit-response/edit-response.component.ts");












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'access', component: __WEBPACK_IMPORTED_MODULE_10__access_access_component__["a" /* AccessComponent */] },
    { path: 'ideas', component: __WEBPACK_IMPORTED_MODULE_5__ideas_ideas_component__["a" /* IdeasComponent */] },
    { path: 'new-idea', component: __WEBPACK_IMPORTED_MODULE_8__new_idea_new_idea_component__["a" /* NewIdeaComponent */] },
    { path: 'detail-idea/:id', component: __WEBPACK_IMPORTED_MODULE_6__ideasingle_ideasingle_component__["a" /* IdeasingleComponent */] },
    { path: 'edit-idea/:id', component: __WEBPACK_IMPORTED_MODULE_9__edit_idea_edit_idea_component__["a" /* EditIdeaComponent */] },
    { path: 'edit-response/:id', component: __WEBPACK_IMPORTED_MODULE_11__edit_response_edit_response_component__["a" /* EditResponseComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_4__search_search_component__["a" /* SearchComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_1__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/edit/:id', component: __WEBPACK_IMPORTED_MODULE_7__edit_profile_edit_profile_component__["a" /* EditProfileComponent */] },
    { path: 'mensajes', component: __WEBPACK_IMPORTED_MODULE_2__mensajes_mensajes_component__["a" /* MensajesComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__["a" /* AdminComponent */] },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/ideas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IdeasService = /** @class */ (function () {
    function IdeasService(http) {
        this.http = http;
        this.BASE_URL = "http://localhost:3000";
        this.options = { withCredentials: true };
    }
    IdeasService.prototype.getIdeaId = function (id) {
        var _this = this;
        return this.http.get(this.BASE_URL + "/ideas/" + id, this.options)
            .map(function (res) { return _this.idea = res.json().idea; });
    };
    IdeasService.prototype.editIdea = function (id, idea) {
        return this.http.put(this.BASE_URL + "/ideas/edit/" + id, idea, this.options)
            .map(function (res) { return res.status; });
    };
    IdeasService.prototype.newIdeaService = function (idea) {
        return this.http.post(this.BASE_URL + "/ideas/new/", idea, this.options)
            .map(function (res) { return res.status; });
    };
    IdeasService.prototype.getIdeaList = function () {
        return this.http
            .get(this.BASE_URL + "/ideas", this.options)
            .map(function (res) { return res.json(); });
    };
    IdeasService.prototype.getSingleIdea = function (id) {
        return this.http
            .get(this.BASE_URL + "/ideas/" + id, this.options)
            .map(function (res) { return res.json().idea; });
    };
    IdeasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], IdeasService);
    return IdeasService;
}());



/***/ }),

/***/ "./src/services/mensajes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MensajesService = /** @class */ (function () {
    function MensajesService(http) {
        this.http = http;
        this.BASE_URL = "http://localhost:3000";
        this.options = { withCredentials: true };
    }
    MensajesService.prototype.getMensajeList = function () {
        return this.http
            .get(this.BASE_URL + "/mp", this.options)
            .map(function (res) { return res.json().mensajes; });
    };
    MensajesService.prototype.newMensajeService = function (asunto, receptorUsername, contenido) {
        return this.http.post(this.BASE_URL + "/mp/salida", { asunto: asunto, receptorUsername: receptorUsername, contenido: contenido }, this.options)
            .map(function (res) { return res.status; });
    };
    MensajesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MensajesService);
    return MensajesService;
}());



/***/ }),

/***/ "./src/services/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.BASE_URL = "http://localhost:3000";
        this.options = { withCredentials: true };
    }
    ProfileService.prototype.getProfileId = function (id) {
        var _this = this;
        return this.http
            .get(this.BASE_URL + "/api/profile/" + id, this.options)
            .map(function (res) { return _this.user = res.json().user; });
    };
    ProfileService.prototype.editProfile = function (id, user) {
        return this.http.put(this.BASE_URL + "/api/profile/edit/" + id, user, this.options)
            .map(function (res) { return res.status; });
    };
    ProfileService.prototype.eliminarColabo = function (id) {
        return this.http.post(this.BASE_URL + "/acciones/colaborar-remove/" + id, id, this.options)
            .map(function (res) { return res.status; });
    };
    ProfileService.prototype.aceptarColabo = function (id) {
        return this.http.put(this.BASE_URL + "/colaborar-update/" + id, id, this.options)
            .map(function (res) { return res.status; });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/services/responses.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponsesService = /** @class */ (function () {
    function ResponsesService(http) {
        this.http = http;
        this.BASE_URL = "http://localhost:3000";
        this.options = { withCredentials: true };
    }
    ResponsesService.prototype.newResponseService = function (response, id) {
        var respuesta = response.response;
        return this.http.post(this.BASE_URL + "/ideas/new-response/" + id, { respuesta: respuesta }, this.options)
            .map(function (res) { return res.status; });
    };
    ResponsesService.prototype.editResponse = function (id, mensaje) {
        return this.http.put(this.BASE_URL + "/ideas/update-response/" + id, { mensaje: mensaje }, this.options)
            .map(function (res) { return res.status; });
    };
    ResponsesService.prototype.getResponseId = function (id) {
        var _this = this;
        return this.http.get(this.BASE_URL + "/update-response/" + id, this.options)
            .map(function (res) { return _this.response = res.json().response; });
    };
    ResponsesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ResponsesService);
    return ResponsesService;
}());



/***/ }),

/***/ "./src/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this.BASEURL = "http://localhost:3000/api";
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    SessionService.prototype.getUser = function () {
        return this.user;
    };
    SessionService.prototype.configureUser = function (set) {
        var _this = this;
        if (set === void 0) { set = false; }
        return function (user) {
            if (set) {
                _this.user = user;
            }
            else {
                _this.user = null;
            }
            return user;
        };
    };
    SessionService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(e.json().message);
    };
    SessionService.prototype.signup = function (username, password, confirm_password) {
        return this.http.post(this.BASEURL + "/signup", { username: username, password: password, confirm_password: confirm_password }, this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(true))
            .catch(this.handleError);
    };
    SessionService.prototype.login = function (username, password) {
        return this.http.post(this.BASEURL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(true))
            .catch(this.handleError);
    };
    SessionService.prototype.logout = function () {
        return this.http.get(this.BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(false))
            .catch(this.handleError);
    };
    SessionService.prototype.isLoggedIn = function () {
        return this.http.get(this.BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(this.configureUser(true))
            .catch(this.handleError);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.BASEURL = "http://localhost:3000";
        this.options = { withCredentials: true };
    }
    UserService.prototype.get = function (id) {
        return this.http.get(this.BASEURL + "/api/profile/" + id, this.options)
            .map(function (res) { return res.json().user; });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map