function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about-us/about-us.component.ts":
  /*!************************************************!*\
    !*** ./src/app/about-us/about-us.component.ts ***!
    \************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
      return new (t || AboutUsComponent)();
    };

    AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutUsComponent,
      selectors: [["app-about-us"]],
      decls: 20,
      vars: 0,
      consts: [["id", "Aboutus"], [1, "bg-black"], [1, "img"], [1, "flex"], [1, "text"], [1, "ico"], ["href", "", "target", ""], [1, "fab", "fa-instagram"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-github"]],
      template: function AboutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We are someone who care for you to provide you everything under single hood.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#Aboutus[_ngcontent-%COMP%] {\n  display: block;\n}\n#Aboutus[_ngcontent-%COMP%]   .bg-black[_ngcontent-%COMP%] {\n  width: 100vw;\n  position: absolute;\n  z-index: -1;\n}\n#Aboutus[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 300px;\n  margin: 0 auto;\n  background-image: url('slide-bottom.jpg');\n  opacity: 0.5;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top;\n}\n#Aboutus[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n  color: white;\n  height: 300px;\n  width: 75vw;\n  margin: auto;\n}\n#Aboutus[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 50%;\n}\n#Aboutus[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 2rem;\n}\n#Aboutus[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 75%;\n}\n#Aboutus[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 50%;\n  margin-left: auto;\n}\n#Aboutus[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  width: 50%;\n  margin: 0 0 0 auto;\n  justify-content: space-between;\n}\n#Aboutus[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n  background: #0C0C0C;\n  border-radius: 100%;\n  text-align: center;\n  height: 70px;\n  line-height: 80px;\n  width: 70px;\n}\n#Aboutus[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 30px;\n}\n#Aboutus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transition: 0.1s;\n  transform: scale(1.1);\n}\n#Aboutus[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #00ACB3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvQzpcXFVzZXJzXFxIYXJzaCBZYWRhdlxcRGVza3RvcFxcUHJvamVjdFxcMi5mcm9udGVuZFxcTXVzY2xlTWVkaXVtL3NyY1xcYXBwXFxhYm91dC11c1xcYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0o7QURDRTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtBQ0NGO0FERUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNESjtBREVJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQU47QURFSTtFQUNFLFVBQUE7QUNBTjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNESjtBREVJO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDQU47QURDTTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDQ047QURBUTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDRVY7QURNRTtFQUNFLGdCQUFBO0VBQ0QscUJBQUE7QUNKSDtBRE9JO0VBQ0UsY0FBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjQWJvdXR1c3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvL2Nzc1xyXG4gIC5iZy1ibGFja3tcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAuaW1ne1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGhlaWdodDozMDBweDsgLy9jb250YWN0dXMgaGVpZ2h0XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvc2xpZGUtYm90dG9tLmpwZyk7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xyXG4gIH1cclxuXHJcbiAgLmZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OjMwMHB4O1xyXG4gICAgd2lkdGg6IDc1dnc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gIH1cclxuICAudGV4dHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoMXtcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxuICB9XHJcbiAgLmljb3tcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHVse1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBtYXJnaW46IDAgMCAwIGF1dG87XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbGl7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMEMwQzBDO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6ODBweDtcclxuICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgaXtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgdWwgbGk6aG92ZXJ7XHJcbiAgICB0cmFuc2l0aW9uOiAuMXM7XHJcbiAgIHRyYW5zZm9ybTogIHNjYWxlKDEuMSk7XHJcbiAgfVxyXG4gIHVsIGEgbGk6aG92ZXJ7XHJcbiAgICBpe1xyXG4gICAgICBjb2xvcjogIzAwQUNCMztcclxuICAgIH1cclxuICB9XHJcblxyXG59Ly9pZCBlbmRzXHJcbiIsIiNBYm91dHVzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jQWJvdXR1cyAuYmctYmxhY2sge1xuICB3aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG4jQWJvdXR1cyAuaW1nIHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9zbGlkZS1ib3R0b20uanBnKTtcbiAgb3BhY2l0eTogMC41O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xufVxuI0Fib3V0dXMgLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA3NXZ3O1xuICBtYXJnaW46IGF1dG87XG59XG4jQWJvdXR1cyAudGV4dCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbn1cbiNBYm91dHVzIC50ZXh0IGgxIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuI0Fib3V0dXMgLnRleHQgcCB7XG4gIHdpZHRoOiA3NSU7XG59XG4jQWJvdXR1cyAuaWNvIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbiNBYm91dHVzIC5pY28gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDAgMCAwIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiNBYm91dHVzIC5pY28gdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzBDMEMwQztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogNzBweDtcbn1cbiNBYm91dHVzIC5pY28gdWwgbGkgaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuI0Fib3V0dXMgdWwgbGk6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjFzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4jQWJvdXR1cyB1bCBhIGxpOmhvdmVyIGkge1xuICBjb2xvcjogIzAwQUNCMztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-us',
          templateUrl: './about-us.component.html',
          styleUrls: ['./about-us.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: '/home'
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: '/home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_li_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "bolder text-dark");
      }
    }

    function AppComponent_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "bolder text-dark");
      }
    }

    function AppComponent_li_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_25_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "bolder text-dark");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.title = 'MuscleMedium';
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.removeItem('token');
        }
      }, {
        key: "istoken",
        value: function istoken() {
          if (sessionStorage.getItem('token')) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 27,
      vars: 8,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "text-light"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["src", "../assets/icon.gif", "alt", "", 1, "icon"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "/home", 1, "nav-link", 3, "routerLinkActive"], [1, "sr-only"], ["routerLink", "/stats", 1, "nav-link", 3, "routerLinkActive"], ["routerLink", "/nutrition", 1, "nav-link", 3, "routerLinkActive"], ["routerLink", "/workout", 1, "nav-link", 3, "routerLinkActive"], ["class", "nav-item", 4, "ngIf"], ["routerLink", "/signin", 1, "nav-link", 3, "routerLinkActive"], ["routerLink", "/signup", 1, "nav-link", 3, "routerLinkActive"], ["routerLink", "/home", 1, "nav-link", 3, "routerLinkActive", "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Statistics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nutrition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Workout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_li_23_Template, 3, 1, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_li_24_Template, 3, 1, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_li_25_Template, 3, 1, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "bolder text-dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "bolder text-dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "bolder text-dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "bolder text-dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.istoken());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.istoken());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.istoken());
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".navbar[_ngcontent-%COMP%] {\n  height: 8vh !important;\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 35px;\n  margin: 0 5px 0 0;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxIYXJzaCBZYWRhdlxcRGVza3RvcFxcUHJvamVjdFxcMi5mcm9udGVuZFxcTXVzY2xlTWVkaXVtL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICBoZWlnaHQ6IDh2aCAhaW1wb3J0YW50O1xyXG59XHJcbi5pY29ue1xyXG4gIGhlaWdodDozNXB4O1xyXG4gIG1hcmdpbjowIDVweCAwIDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4iLCIubmF2YmFyIHtcbiAgaGVpZ2h0OiA4dmggIWltcG9ydGFudDtcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogMCA1cHggMCAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _statistics_statistics_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./statistics/statistics.module */
    "./src/app/statistics/statistics.module.ts");
    /* harmony import */


    var _signin_signin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signin/signin.module */
    "./src/app/signin/signin.module.ts");
    /* harmony import */


    var _create_create_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./create/create.module */
    "./src/app/create/create.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/token-interceptor.service */
    "./src/app/services/token-interceptor.service.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptorService"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _statistics_statistics_module__WEBPACK_IMPORTED_MODULE_5__["StatisticsModule"], _signin_signin_module__WEBPACK_IMPORTED_MODULE_6__["SigninModule"], _create_create_module__WEBPACK_IMPORTED_MODULE_7__["CreateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _statistics_statistics_module__WEBPACK_IMPORTED_MODULE_5__["StatisticsModule"], _signin_signin_module__WEBPACK_IMPORTED_MODULE_6__["SigninModule"], _create_create_module__WEBPACK_IMPORTED_MODULE_7__["CreateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _statistics_statistics_module__WEBPACK_IMPORTED_MODULE_5__["StatisticsModule"], _signin_signin_module__WEBPACK_IMPORTED_MODULE_6__["SigninModule"], _create_create_module__WEBPACK_IMPORTED_MODULE_7__["CreateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
          providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptorService"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(loginService, route) {
        _classCallCheck(this, AuthGuard);

        this.loginService = loginService;
        this.route = route;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.loginService.showpage()) {
            return true;
          } else {
            this.route.navigate(['/signin']);
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-us/contact-us.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/contact-us/contact-us.component.ts ***!
    \****************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactUsComponent = /*#__PURE__*/function () {
      function ContactUsComponent() {
        _classCallCheck(this, ContactUsComponent);
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) {
      return new (t || ContactUsComponent)();
    };

    ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactUsComponent,
      selectors: [["app-contact-us"]],
      decls: 13,
      vars: 0,
      consts: [["id", "contactus"], [1, "form"], [1, "form-data"], ["action", ""], ["name", "", "id", ""]],
      template: function ContactUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create your own customized diet plan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Feel free to contact us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Connecting you to a laboratory far far away......");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Send Response");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#contactus[_ngcontent-%COMP%] {\n  background-color: #EBEEED;\n}\n#contactus[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  text-align: center;\n  background: black;\n  color: white;\n  height: 6rem;\n  line-height: 5.5rem;\n}\n#contactus[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 3rem 0;\n}\n#contactus[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-data[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: auto;\n}\n#contactus[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-data[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n#contactus[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: justify;\n}\n#contactus[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-data[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#contactus[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-data[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100%;\n}\n#contactus[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-data[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 5px 12px;\n  font-size: 1.5rem;\n  border: 1px solid #00ACB3;\n  background-color: transparent;\n  color: #00ACB3;\n}\n#contactus[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-data[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #00ACB3;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9DOlxcVXNlcnNcXEhhcnNoIFlhZGF2XFxEZXNrdG9wXFxQcm9qZWN0XFwyLmZyb250ZW5kXFxNdXNjbGVNZWRpdW0vc3JjXFxhcHBcXGNvbnRhY3QtdXNcXGNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEQUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEREk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0dOO0FERk07RUFDRSxlQUFBO0FDSVI7QURGTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0lSO0FERk07RUFDRSxrQkFBQTtBQ0lSO0FESFE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0tWO0FESFE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQ0tWO0FESFE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNLViIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0dXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUVFRDtcclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUuNXJlbTtcclxuICB9XHJcbiAgLmZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgIC5mb3JtLWRhdGF7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgfVxyXG4gICAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm17XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRleHRhcmVhe1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwQUNCMztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6ICMwMEFDQjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjpob3ZlcntcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMEFDQjM7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxufS8vc2VjdGlvblxyXG4iLCIjY29udGFjdHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUVFRDtcbn1cbiNjb250YWN0dXMgaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBsaW5lLWhlaWdodDogNS41cmVtO1xufVxuI2NvbnRhY3R1cyAuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzcmVtIDA7XG59XG4jY29udGFjdHVzIC5mb3JtIC5mb3JtLWRhdGEge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbiNjb250YWN0dXMgLmZvcm0gLmZvcm0tZGF0YSBoMSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbiNjb250YWN0dXMgLmZvcm0gLmZvcm0tZGF0YSBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuI2NvbnRhY3R1cyAuZm9ybSAuZm9ybS1kYXRhIGZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jY29udGFjdHVzIC5mb3JtIC5mb3JtLWRhdGEgZm9ybSB0ZXh0YXJlYSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4jY29udGFjdHVzIC5mb3JtIC5mb3JtLWRhdGEgZm9ybSBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEFDQjM7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzAwQUNCMztcbn1cbiNjb250YWN0dXMgLmZvcm0gLmZvcm0tZGF0YSBmb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMEFDQjM7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-us',
          templateUrl: './contact-us.component.html',
          styleUrls: ['./contact-us.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/create/create-router.module.ts":
  /*!************************************************!*\
    !*** ./src/app/create/create-router.module.ts ***!
    \************************************************/

  /*! exports provided: CreateRoutingModule */

  /***/
  function srcAppCreateCreateRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateRoutingModule", function () {
      return CreateRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _create_user_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./create-user/create.component */
    "./src/app/create/create-user/create.component.ts");
    /* harmony import */


    var _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-data/user-data.component */
    "./src/app/create/user-data/user-data.component.ts");

    var routes = [{
      path: 'signup',
      component: _create_user_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"]
    }, {
      path: 'userdata',
      component: _user_data_user_data_component__WEBPACK_IMPORTED_MODULE_3__["UserDataComponent"]
    }];

    var CreateRoutingModule = function CreateRoutingModule() {
      _classCallCheck(this, CreateRoutingModule);
    };

    CreateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CreateRoutingModule
    });
    CreateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CreateRoutingModule_Factory(t) {
        return new (t || CreateRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/create/create-user/create.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/create/create-user/create.component.ts ***!
    \********************************************************/

  /*! exports provided: CreateComponent */

  /***/
  function srcAppCreateCreateUserCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
      return CreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_validator_pass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/validator.pass */
    "./src/app/shared/validator.pass.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CreateComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.serverMessage);
      }
    }

    function CreateComponent_div_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateComponent_div_13_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateComponent_div_13_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateComponent_div_13_div_2_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.name.errors == null ? null : ctx_r1.name.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.name == null ? null : ctx_r1.name.invalid) && !(ctx_r1.name.errors == null ? null : ctx_r1.name.errors.required));
      }
    }

    function CreateComponent_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateComponent_div_16_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateComponent_div_16_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateComponent_div_16_div_2_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email.errors == null ? null : ctx_r2.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.email == null ? null : ctx_r2.email.invalid) && !(ctx_r2.email.errors == null ? null : ctx_r2.email.errors.required));
      }
    }

    function CreateComponent_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateComponent_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password should be at least 5 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateComponent_div_19_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateComponent_div_19_div_2_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.pass0.errors == null ? null : ctx_r3.pass0.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.pass0.invalid && !(ctx_r3.pass0.errors == null ? null : ctx_r3.pass0.errors.required));
      }
    }

    function CreateComponent_div_22_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateComponent_div_22_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords do not Match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateComponent_div_22_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateComponent_div_22_div_2_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.pass.errors == null ? null : ctx_r4.pass.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.signupForm.errors == null ? null : ctx_r4.signupForm.errors.misMatch) && !(ctx_r4.pass.errors == null ? null : ctx_r4.pass.errors.required));
      }
    }

    function CreateComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Age is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gender is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CreateComponent = /*#__PURE__*/function () {
      function CreateComponent(lgn, route, fb) {
        _classCallCheck(this, CreateComponent);

        this.lgn = lgn;
        this.route = route;
        this.fb = fb;
      }

      _createClass(CreateComponent, [{
        key: "aa",
        value: function aa() {
          console.log(this.signupForm);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signupForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^@]+@[^@]+\.[a-zA-Z]{2,6}')]],
            password0: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          }, {
            validator: src_app_shared_validator_pass__WEBPACK_IMPORTED_MODULE_2__["PasswordValidator"]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          this.signupForm.markAllAsTouched();

          if (this.signupForm.valid) {
            delete this.signupForm.value.password0;
            this.lgn.register(this.signupForm.value).subscribe(function (res) {
              _this.serverMessage = res.message;
              sessionStorage.setItem('token', res.token);
              sessionStorage.setItem('temp', JSON.stringify({
                age: _this.signupForm.get('age').value,
                gender: _this.signupForm.get('gender').value
              }));

              if (res.token) {
                _this.route.navigateByUrl("/userdata");
              }
            }, function (err) {});
          }
        }
      }, {
        key: "name",
        get: function get() {
          return this.signupForm.get('name');
        }
      }, {
        key: "email",
        get: function get() {
          return this.signupForm.get('email');
        }
      }, {
        key: "pass0",
        get: function get() {
          return this.signupForm.get('password0');
        }
      }, {
        key: "pass",
        get: function get() {
          return this.signupForm.get('password');
        }
      }, {
        key: "gender",
        get: function get() {
          return this.signupForm.get('gender');
        }
      }, {
        key: "age",
        get: function get() {
          return this.signupForm.get('age');
        }
      }]);

      return CreateComponent;
    }();

    CreateComponent.ɵfac = function CreateComponent_Factory(t) {
      return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateComponent,
      selectors: [["app-create"]],
      decls: 37,
      vars: 8,
      consts: [["id", "create"], [1, "text-center"], ["href", "/userdata"], [3, "click"], [1, "user-pass"], [3, "formGroup", "ngSubmit"], ["class", "text-danger", 4, "ngIf"], [1, "input-field"], ["formControlName", "name", "type", "text", "placeholder", "Name", "required", ""], [4, "ngIf"], ["formControlName", "email", "type", "email", "placeholder", "Email", "required", ""], ["formControlName", "password0", "type", "password", "placeholder", "Password", "required", ""], ["formControlName", "password", "type", "password", "placeholder", "Confirm Password", "required", ""], ["formControlName", "age", "type", "number", "placeholder", "age", "required", ""], ["id", "Gender", "formControlName", "gender", "required", ""], ["selected", "", "disabled", "", "hidden", ""], ["value", "M"], ["value", "F"], ["type", "submit", "value", "Submit", 1, "submit"], [1, "text-danger"]],
      template: function CreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Don't wanna signup continue as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Guest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_h1_click_6_listener() {
            return ctx.aa();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Your Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateComponent_Template_form_ngSubmit_9_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateComponent_span_10_Template, 2, 1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateComponent_div_13_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreateComponent_div_16_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateComponent_div_19_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreateComponent_div_22_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CreateComponent_div_25_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CreateComponent_div_34_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.touched && ctx.name.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.touched && ctx.email.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pass0.touched && ctx.pass0.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pass.touched && ctx.pass.invalid || ctx.pass.touched && (ctx.signupForm.errors == null ? null : ctx.signupForm.errors.misMatch));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.age.errors == null ? null : ctx.age.errors.required) && ctx.age.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.gender.errors == null ? null : ctx.gender.errors.required) && ctx.gender.touched);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["#create[_ngcontent-%COMP%] {\n  background: #EBEEED;\n  height: 92vh;\n  padding: 2rem 0 0 0;\n}\n#create[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: grey;\n  margin: 0 0 2rem 0;\n}\n#create[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00ACB3;\n  text-decoration: none;\n}\n#create[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-top: 3rem;\n}\n#create[_ngcontent-%COMP%]   .user-pass[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n#create[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  display: block;\n}\n#create[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 320px;\n  margin: 1rem 0;\n}\n#create[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 320px;\n  margin: 1rem 0;\n}\n#create[_ngcontent-%COMP%]   .guest[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n#create[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #00ACB3;\n  border: 1px solid #00ACB3;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL2NyZWF0ZS11c2VyL0M6XFxVc2Vyc1xcSGFyc2ggWWFkYXZcXERlc2t0b3BcXFByb2plY3RcXDIuZnJvbnRlbmRcXE11c2NsZU1lZGl1bS9zcmNcXGFwcFxcY3JlYXRlXFxjcmVhdGUtdXNlclxcY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jcmVhdGUvY3JlYXRlLXVzZXIvY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0dOO0FEQUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7QURDRTtFQUNFLGNBQUE7QUNDSjtBRENFO0VBQ0UsY0FBQTtBQ0NKO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUo7QURHRTtFQUNFLGNBQUE7QUNESjtBREdFO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUvY3JlYXRlLXVzZXIvY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NyZWF0ZXtcclxuICBiYWNrZ3JvdW5kOiAjRUJFRUVEO1xyXG4gIGhlaWdodDogOTJ2aDtcclxuICBwYWRkaW5nOiAycmVtIDAgMCAwO1xyXG4gIHB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIG1hcmdpbjowIDAgMnJlbSAwO1xyXG4gICAgYXtcclxuICAgICAgY29sb3I6ICMwMEFDQjM7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgaDV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgfVxyXG5cclxuICAudXNlci1wYXNze1xyXG4gICAgbWFyZ2luOjJyZW0gMDtcclxuICB9XHJcbiAgLmlucHV0LWZpZWxke1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgfVxyXG5cclxuICBzZWxlY3R7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuXHJcbiAgfVxyXG4gIC5ndWVzdHtcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gIH1cclxuICAuc3VibWl0e1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzAwQUNCMztcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzAwQUNCMztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn0vL3NlY3Rpb25cclxuIiwiI2NyZWF0ZSB7XG4gIGJhY2tncm91bmQ6ICNFQkVFRUQ7XG4gIGhlaWdodDogOTJ2aDtcbiAgcGFkZGluZzogMnJlbSAwIDAgMDtcbn1cbiNjcmVhdGUgcCB7XG4gIGNvbG9yOiBncmV5O1xuICBtYXJnaW46IDAgMCAycmVtIDA7XG59XG4jY3JlYXRlIHAgYSB7XG4gIGNvbG9yOiAjMDBBQ0IzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jY3JlYXRlIGg1IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG4jY3JlYXRlIC51c2VyLXBhc3Mge1xuICBtYXJnaW46IDJyZW0gMDtcbn1cbiNjcmVhdGUgLmlucHV0LWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jY3JlYXRlIGlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuI2NyZWF0ZSBzZWxlY3Qge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4jY3JlYXRlIC5ndWVzdCB7XG4gIG1hcmdpbjogMnJlbSAwO1xufVxuI2NyZWF0ZSAuc3VibWl0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMDBBQ0IzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBBQ0IzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create',
          templateUrl: './create.component.html',
          styleUrls: ['./create.component.scss']
        }]
      }], function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/create/create.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/create/create.module.ts ***!
    \*****************************************/

  /*! exports provided: CreateModule */

  /***/
  function srcAppCreateCreateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateModule", function () {
      return CreateModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _create_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-router.module */
    "./src/app/create/create-router.module.ts");
    /* harmony import */


    var _user_data_user_data_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-data/user-data.module */
    "./src/app/create/user-data/user-data.module.ts");
    /* harmony import */


    var _create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-user/create.component */
    "./src/app/create/create-user/create.component.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var CreateModule = function CreateModule() {
      _classCallCheck(this, CreateModule);
    };

    CreateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CreateModule
    });
    CreateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CreateModule_Factory(t) {
        return new (t || CreateModule)();
      },
      providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _user_data_user_data_module__WEBPACK_IMPORTED_MODULE_4__["UserDataModule"], _create_router_module__WEBPACK_IMPORTED_MODULE_3__["CreateRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateModule, {
        declarations: [_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _user_data_user_data_module__WEBPACK_IMPORTED_MODULE_4__["UserDataModule"], _create_router_module__WEBPACK_IMPORTED_MODULE_3__["CreateRoutingModule"]],
        exports: [_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _user_data_user_data_module__WEBPACK_IMPORTED_MODULE_4__["UserDataModule"], _create_router_module__WEBPACK_IMPORTED_MODULE_3__["CreateRoutingModule"]],
          exports: [_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]],
          providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/create/user-data/user-data.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/create/user-data/user-data.component.ts ***!
    \*********************************************************/

  /*! exports provided: UserDataComponent */

  /***/
  function srcAppCreateUserDataUserDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDataComponent", function () {
      return UserDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return {
        standalone: true
      };
    };

    function UserDataComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Age");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_div_19_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.guest.age = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.guest.age)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    }

    function UserDataComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gender");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_div_20_Template_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.guest.gender = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Gender");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Male");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Female");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.guest.gender)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    }

    function UserDataComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gender");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_div_32_Template_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.guest.gender = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Gender");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Male");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Female");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.guest.gender)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    }

    var UserDataComponent = /*#__PURE__*/function () {
      function UserDataComponent(lgn, router) {
        _classCallCheck(this, UserDataComponent);

        this.lgn = lgn;
        this.router = router;
        this.userDataForm = {
          height: null,
          weight: null,
          waist: null,
          neck: null,
          hip: null,
          ankle: null,
          wrist: null,
          bType: {
            ecto: null,
            meso: null,
            endo: null
          },
          bt: {
            q1: null,
            q2: null,
            q3: null,
            q4: null,
            q5: null,
            q6: null,
            q7: null,
            q8: null
          }
        };
        this.guest = {
          age: null,
          gender: ''
        };
      }

      _createClass(UserDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (sessionStorage.getItem('token')) {
            this.isGuest = false;
          } else {
            this.isGuest = true;
          }
        }
      }, {
        key: "calc_bt",
        value: function calc_bt() {
          var ecto = 0;
          var meso = 0;
          var endo = 0;
          var values = Object.values(this.userDataForm.bt);
          values.forEach(function (element) {
            if (element === 'A') {
              ecto++;
            } else if (element === 'B') {
              meso++;
            } else if (element === 'C') {
              endo++;
            }
          });
          this.userDataForm.bType.ecto = ecto / 8 * 100;
          this.userDataForm.bType.meso = meso / 8 * 100;
          this.userDataForm.bType.endo = endo / 8 * 100;
        }
      }, {
        key: "addData",
        value: function addData() {
          var _this2 = this;

          if (!sessionStorage.getItem('token')) {
            this.calc_bt();
            sessionStorage.setItem('GuestData', JSON.stringify(Object.assign(this.guest, {
              data: this.userDataForm
            })));
            this.router.navigate(["/stats"]);
          } else {
            this.calc_bt();
            delete this.userDataForm.bt;
            this.lgn.datareg(this.userDataForm).subscribe(function (res) {
              if (res.message === 'success') {
                _this2.router.navigate(["/stats"]);
              }
            }, function (err) {
              _this2.message = 'Opps! Something went wrong!';
            });
          }
        }
      }]);

      return UserDataComponent;
    }();

    UserDataComponent.ɵfac = function UserDataComponent_Factory(t) {
      return new (t || UserDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    UserDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserDataComponent,
      selectors: [["app-user-data"]],
      decls: 177,
      vars: 25,
      consts: [["id", "userdata"], [1, "user-data"], [3, "ngSubmit"], [1, "text-success"], [1, "BMI"], [1, "input-field"], ["name", "height", "type", "number", "placeholder", "Height (in cm)", 3, "ngModel", "ngModelChange"], ["name", "weight", "type", "number", "placeholder", "Weight (in kg)", 3, "ngModel", "ngModelChange"], [1, "BMR"], ["class", "input-field", 4, "ngIf"], [1, "BFP"], ["name", "waist", "type", "number", "placeholder", "Waist (in cm)", 3, "ngModel", "ngModelChange"], ["name", "neck", "type", "number", "placeholder", "Neck (in cm)", 3, "ngModel", "ngModelChange"], ["name", "hip", "type", "number", "placeholder", "Hip  (in cm)", 3, "ngModel", "ngModelChange"], [1, "MMM"], ["name", "ankle", "type", "number", "placeholder", "Ankle (in cm)", 3, "ngModel", "ngModelChange"], ["name", "wrist", "type", "number", "placeholder", "Wrist (in cm)", 3, "ngModel", "ngModelChange"], [1, "Btype"], ["name", "q1", 3, "ngModel", "ngModelChange"], ["selected", "", "disabled", "", "hidden", ""], ["value", "A"], ["value", "B"], ["value", "C"], ["name", "q2", 3, "ngModel", "ngModelChange"], ["name", "q3", 3, "ngModel", "ngModelChange"], ["name", "q4", 3, "ngModel", "ngModelChange"], ["name", "q5", 3, "ngModel", "ngModelChange"], ["name", "q6", 3, "ngModel", "ngModelChange"], ["name", "q7", 3, "ngModel", "ngModelChange"], ["name", "q8", 3, "ngModel", "ngModelChange"], ["type", "Submit", "value", "Submit", 1, "submit"], ["name", "age", "type", "number", "placeholder", "age", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["id", "Gender", "name", "gender", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["value", "M"], ["value", "F"]],
      template: function UserDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserDataComponent_Template_form_ngSubmit_2_listener() {
            return ctx.addData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Input in fields those you wanna know ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "BMI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Height");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.userDataForm.height = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.userDataForm.weight = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "BMR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserDataComponent_div_19_Template, 4, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserDataComponent_div_20_Template, 10, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Height");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.userDataForm.height = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.userDataForm.weight = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Body Fat Percentage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UserDataComponent_div_32_Template, 10, 3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Height");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.userDataForm.height = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Waist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_40_listener($event) {
            return ctx.userDataForm.waist = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Neck");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.userDataForm.neck = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Hip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_48_listener($event) {
            return ctx.userDataForm.hip = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Maximum Muscle Mass Naturally");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Height");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_55_listener($event) {
            return ctx.userDataForm.height = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Waist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_59_listener($event) {
            return ctx.userDataForm.waist = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Neck");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_63_listener($event) {
            return ctx.userDataForm.neck = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Hip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_67_listener($event) {
            return ctx.userDataForm.hip = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Ankle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_71_listener($event) {
            return ctx.userDataForm.ankle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Wrist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_input_ngModelChange_75_listener($event) {
            return ctx.userDataForm.wrist = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Your Body type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Your shoulders are");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_select_ngModelChange_82_listener($event) {
            return (ctx.userDataForm == null ? null : ctx.userDataForm.bt).q1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "narrower than your hips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "same with than your hips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "wider than your hips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Fitted jeans generally feel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_select_ngModelChange_94_listener($event) {
            return (ctx.userDataForm == null ? null : ctx.userDataForm.bt).q2 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "loose around your butt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "snug, but not too tight around your butt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "tight around your butt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Your forearms are on the");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_select_ngModelChange_106_listener($event) {
            return (ctx.userDataForm == null ? null : ctx.userDataForm.bt).q3 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "smallish side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "moderately thick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "thicker side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Your body tends to");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_select_ngModelChange_118_listener($event) {
            return (ctx.userDataForm == null ? null : ctx.userDataForm.bt).q4 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "stay skinny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "stay lean, yet somewhat muscular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "carry extra fat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Your body looks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_select_ngModelChange_130_listener($event) {
            return (ctx.userDataForm == null ? null : ctx.userDataForm.bt).q5 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "long and narrow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "rugged and squarish in shape");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "round and soft");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "If you grip your wrist between your thumb and middle finger, the 2 fingers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "select", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_select_ngModelChange_142_listener($event) {
            return (ctx.userDataForm == null ? null : ctx.userDataForm.bt).q6 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "overlap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "just barely touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "don't touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "The circumference of your chest is");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_select_ngModelChange_154_listener($event) {
            return (ctx.userDataForm == null ? null : ctx.userDataForm.bt).q7 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "37 inches or less");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "between 37-44 inches");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "over 44 inches");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "You can gain weight \u2013 both in terms of muscle and fat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserDataComponent_Template_select_ngModelChange_166_listener($event) {
            return (ctx.userDataForm == null ? null : ctx.userDataForm.bt).q8 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "with difficult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "gain or lose weight without too many issues");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "eaisly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.weight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGuest);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGuest);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.weight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGuest);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.waist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.neck);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.hip);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.waist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.neck);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.hip);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.ankle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm.wrist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm == null ? null : ctx.userDataForm.bt.q1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm == null ? null : ctx.userDataForm.bt.q2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm == null ? null : ctx.userDataForm.bt.q3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm == null ? null : ctx.userDataForm.bt.q4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm == null ? null : ctx.userDataForm.bt.q5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm == null ? null : ctx.userDataForm.bt.q6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm == null ? null : ctx.userDataForm.bt.q7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userDataForm == null ? null : ctx.userDataForm.bt.q8);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
      styles: ["#userdata[_ngcontent-%COMP%] {\n  background: #EBEEED;\n}\n#userdata[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-top: 3rem;\n}\n#userdata[_ngcontent-%COMP%]   .user-data[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  width: 350px;\n  margin: 0 auto;\n}\n#userdata[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  display: block;\n  margin: 1rem 0;\n}\n#userdata[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 100%;\n  line-height: 25px;\n}\n#userdata[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 320px;\n}\n#userdata[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px;\n  width: 320px;\n}\n#userdata[_ngcontent-%COMP%]   .Btype[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n#userdata[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  margin: 3rem 0;\n  background: transparent;\n  color: #00ACB3;\n  border: 1px solid #00ACB3;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL3VzZXItZGF0YS9DOlxcVXNlcnNcXEhhcnNoIFlhZGF2XFxEZXNrdG9wXFxQcm9qZWN0XFwyLmZyb250ZW5kXFxNdXNjbGVNZWRpdW0vc3JjXFxhcHBcXGNyZWF0ZVxcdXNlci1kYXRhXFx1c2VyLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NyZWF0ZS91c2VyLWRhdGEvdXNlci1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNESjtBREdFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNESjtBREdFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDREo7QURHRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDREo7QURHRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUk7RUFDRSxtQkFBQTtBQ0ZOO0FES0U7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUvdXNlci1kYXRhL3VzZXItZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN1c2VyZGF0YXtcclxuICBiYWNrZ3JvdW5kOiAjRUJFRUVEO1xyXG5cclxuXHJcbiAgaDV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgfVxyXG5cclxuICAudXNlci1kYXRhe1xyXG4gICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5pbnB1dC1maWVsZHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgfVxyXG4gIGxhYmVse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgfVxyXG4gIHNlbGVjdHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuICAuQnR5cGV7XHJcbiAgICBoNXtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLnN1Ym1pdHtcclxuICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzAwQUNCMztcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzAwQUNCMztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn0vL3NlY3Rpb25cclxuIiwiI3VzZXJkYXRhIHtcbiAgYmFja2dyb3VuZDogI0VCRUVFRDtcbn1cbiN1c2VyZGF0YSBoNSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuI3VzZXJkYXRhIC51c2VyLWRhdGEge1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4jdXNlcmRhdGEgLmlucHV0LWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuI3VzZXJkYXRhIGxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuI3VzZXJkYXRhIGlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMzIwcHg7XG59XG4jdXNlcmRhdGEgc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDMyMHB4O1xufVxuI3VzZXJkYXRhIC5CdHlwZSBoNSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4jdXNlcmRhdGEgLnN1Ym1pdCB7XG4gIG1hcmdpbjogM3JlbSAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMEFDQjM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEFDQjM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-data',
          templateUrl: './user-data.component.html',
          styleUrls: ['./user-data.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/create/user-data/user-data.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/create/user-data/user-data.module.ts ***!
    \******************************************************/

  /*! exports provided: UserDataModule */

  /***/
  function srcAppCreateUserDataUserDataModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDataModule", function () {
      return UserDataModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _user_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-data.component */
    "./src/app/create/user-data/user-data.component.ts");

    var UserDataModule = function UserDataModule() {
      _classCallCheck(this, UserDataModule);
    };

    UserDataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UserDataModule
    });
    UserDataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UserDataModule_Factory(t) {
        return new (t || UserDataModule)();
      },
      providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserDataModule, {
        declarations: [_user_data_component__WEBPACK_IMPORTED_MODULE_4__["UserDataComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        exports: [_user_data_component__WEBPACK_IMPORTED_MODULE_4__["UserDataComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDataModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_user_data_component__WEBPACK_IMPORTED_MODULE_4__["UserDataComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [_user_data_component__WEBPACK_IMPORTED_MODULE_4__["UserDataComponent"]],
          providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/hero/hero.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/hero/hero.component.ts ***!
    \*********************************************/

  /*! exports provided: HeroComponent */

  /***/
  function srcAppHomeHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
      return HeroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeroComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r0.buttonUrl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.buttonText);
      }
    }

    function HeroComponent_button_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Get Started");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeroComponent = /*#__PURE__*/function () {
      function HeroComponent(router) {
        _classCallCheck(this, HeroComponent);

        this.router = router;
        this.routeCheck();
      }

      _createClass(HeroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "routeCheck",
        value: function routeCheck() {
          if (this.router.url === '/home') {
            this.buttonText = 'Get Started';
            this.buttonUrl = '/signin';
          } else {
            this.buttonText = 'Statistics';
            this.buttonUrl = '/stats#stats';
          }
        }
      }]);

      return HeroComponent;
    }();

    HeroComponent.ɵfac = function HeroComponent_Factory(t) {
      return new (t || HeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroComponent,
      selectors: [["app-hero"]],
      decls: 28,
      vars: 2,
      consts: [["id", "hero"], [1, "bg-blk"], [1, "container"], [1, "hero-cont"], [1, "hero-txt"], [3, "routerLink", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#buttonGetStarted", 4, "ngIf"], [1, "img-hero"], ["id", "buttonGetStarted", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["routerLink", "../signin", "type", "button", "data-dismiss", "modal"], ["routerLink", "../userdata", "type", "button", "data-dismiss", "modal"], [3, "routerLink"], ["data-toggle", "modal", "data-target", "#buttonGetStarted"]],
      template: function HeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "One place");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "for all your body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "statistics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeroComponent_a_11_Template, 3, 2, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeroComponent_button_12_Template, 2, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Guest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonText === "Statistics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buttonText !== "Statistics");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["#hero[_ngcontent-%COMP%]   .bg-blk[_ngcontent-%COMP%] {\n  background-color: black;\n  width: 100vw;\n  height: 92vh;\n}\n#hero[_ngcontent-%COMP%]   .hero-cont[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  margin-top: 10rem;\n}\n#hero[_ngcontent-%COMP%]   .hero-txt[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  color: white;\n}\n#hero[_ngcontent-%COMP%]   .hero-txt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n#hero[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 1.5rem;\n  border: 1px solid #00ACB3;\n  background-color: transparent;\n  color: #00ACB3;\n}\n#hero[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 5px #00ACB3;\n  text-shadow: 0px 0px 5px #00ACB3;\n}\n#hero[_ngcontent-%COMP%]   .img-hero[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  width: 100vw;\n  height: 92vh;\n  background-image: url('hero.jpg');\n  background-repeat: no-repeat;\n  background-position-x: right;\n  background-size: 90rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oZXJvL0M6XFxVc2Vyc1xcSGFyc2ggWWFkYXZcXERlc2t0b3BcXFByb2plY3RcXDIuZnJvbnRlbmRcXE11c2NsZU1lZGl1bS9zcmNcXGFwcFxcaG9tZVxcaGVyb1xcaGVyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQUo7QURFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQUo7QURFRTtFQUNFLGVBQUE7RUFDRixZQUFBO0FDQUY7QURFRTtFQUNFLG1CQUFBO0FDQUo7QURHRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FER0U7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDREY7QURJRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlcm97XHJcbiAgLmJnLWJsa3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA5MnZoO1xyXG4gIH1cclxuICAuaGVyby1jb250e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xyXG4gIH1cclxuICAuaGVyby10eHR7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjs7XHJcbiAgfVxyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBBQ0IzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzAwQUNCMztcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMEFDQjM7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMEFDQjM7XHJcbiAgfVxyXG5cclxuICAuaW1nLWhlcm97XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA5MnZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaGVyby5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDkwcmVtO1xyXG4gIH1cclxufS8vc2VjdGlvblxyXG4iLCIjaGVybyAuYmctYmxrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA5MnZoO1xufVxuI2hlcm8gLmhlcm8tY29udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLXRvcDogMTByZW07XG59XG4jaGVybyAuaGVyby10eHQge1xuICBmb250LXNpemU6IDVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNoZXJvIC5oZXJvLXR4dCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbiNoZXJvIGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBBQ0IzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMEFDQjM7XG59XG4jaGVybyBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjMDBBQ0IzO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggIzAwQUNCMztcbn1cbiNoZXJvIC5pbWctaGVybyB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDkydmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2hlcm8uanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcbiAgYmFja2dyb3VuZC1zaXplOiA5MHJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero',
          templateUrl: './hero.component.html',
          styleUrls: ['./hero.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: 'home',
      component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./hero/hero.component */
    "./src/app/home/hero/hero.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 2,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__["HeroComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hero/hero.component */
    "./src/app/home/hero/hero.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]],
        exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]],
          exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataService = /*#__PURE__*/function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentMessage = this.messageSource.asObservable();
      }

      _createClass(DataService, [{
        key: "changeMessage",
        value: function changeMessage(message) {
          this.messageSource.next(message);
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)();
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.regUrl = 'http://localhost:1234/api/';
      }

      _createClass(LoginService, [{
        key: "getUserData",
        value: function getUserData() {
          return this.http.get("".concat(this.regUrl, "stats"));
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post("".concat(this.regUrl, "create"), user);
        }
      }, {
        key: "datareg",
        value: function datareg(data) {
          return this.http.patch("".concat(this.regUrl, "userdata"), data);
        }
      }, {
        key: "login",
        value: function login(data) {
          return this.http.post("".concat(this.regUrl, "login"), data);
        }
      }, {
        key: "forgot",
        value: function forgot(data) {
          return this.http.post("".concat(this.regUrl, "forgot"), data);
        }
      }, {
        key: "changePassword",
        value: function changePassword(data) {
          return this.http.patch("".concat(this.regUrl, "change"), data);
        }
      }, {
        key: "showpage",
        value: function showpage() {
          if (sessionStorage.getItem('token') || sessionStorage.getItem('GuestData')) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token-interceptor.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/token-interceptor.service.ts ***!
    \*******************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppServicesTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TokenInterceptorService = /*#__PURE__*/function () {
      function TokenInterceptorService() {
        _classCallCheck(this, TokenInterceptorService);
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          this.StoredData = sessionStorage.getItem('token');
          var tokenizedReq = req.clone({
            setHeaders: {
              authorisation: "Bearer ".concat(this.StoredData)
            }
          });
          return next.handle(tokenizedReq);
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
      return new (t || TokenInterceptorService)();
    };

    TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptorService,
      factory: TokenInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/validator.pass.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/validator.pass.ts ***!
    \******************************************/

  /*! exports provided: PasswordValidator */

  /***/
  function srcAppSharedValidatorPassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordValidator", function () {
      return PasswordValidator;
    });

    function PasswordValidator(control) {
      var password = control.get('password');
      var confirmPassword = control.get('password0');
      return password && confirmPassword && password.value !== confirmPassword.value ? {
        misMatch: true
      } : null;
    }
    /***/

  },

  /***/
  "./src/app/signin/change-pass/change-pass.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/signin/change-pass/change-pass.component.ts ***!
    \*************************************************************/

  /*! exports provided: ChangePassComponent */

  /***/
  function srcAppSigninChangePassChangePassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePassComponent", function () {
      return ChangePassComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_validator_pass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/validator.pass */
    "./src/app/shared/validator.pass.ts");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChangePassComponent_div_3_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Opps! Something went wrong!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePassComponent_div_3_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePassComponent_div_3_div_6_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password should be at least 5 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePassComponent_div_3_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePassComponent_div_3_div_6_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePassComponent_div_3_div_6_div_2_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.pass0.errors == null ? null : ctx_r3.pass0.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.pass0.invalid && !(ctx_r3.pass0.errors == null ? null : ctx_r3.pass0.errors.required));
      }
    }

    function ChangePassComponent_div_3_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePassComponent_div_3_div_8_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords do not Match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePassComponent_div_3_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePassComponent_div_3_div_8_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePassComponent_div_3_div_8_div_2_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.pass.errors == null ? null : ctx_r4.pass.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.changeForm == null ? null : ctx_r4.changeForm.errors == null ? null : ctx_r4.changeForm.errors.misMatch) && !(ctx_r4.pass.errors == null ? null : ctx_r4.pass.errors.required));
      }
    }

    function ChangePassComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePassComponent_div_3_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChangePassComponent_div_3_p_4_Template, 2, 0, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChangePassComponent_div_3_div_6_Template, 3, 2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChangePassComponent_div_3_div_8_Template, 3, 2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.changeForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pass0.touched && ctx_r0.pass0.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pass.touched && ctx_r0.pass.invalid || ctx_r0.pass.touched && (ctx_r0.changeForm.errors == null ? null : ctx_r0.changeForm.errors.misMatch));
      }
    }

    function ChangePassComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your password has been changed.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " click here to go to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Signin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ChangePassComponent = /*#__PURE__*/function () {
      function ChangePassComponent(lgn, route, fb) {
        _classCallCheck(this, ChangePassComponent);

        this.lgn = lgn;
        this.route = route;
        this.fb = fb;
      }

      _createClass(ChangePassComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.changeForm = this.fb.group({
            password0: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]]
          }, {
            validator: src_app_shared_validator_pass__WEBPACK_IMPORTED_MODULE_2__["PasswordValidator"]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this3 = this;

          this.changeForm.markAllAsTouched();

          if (this.changeForm.valid) {
            sessionStorage.setItem('token', this.route.snapshot.queryParams.crypt);
            this.lgn.changePassword(this.changeForm.value).subscribe(function (res) {
              if (res.message === 'err') {
                _this3.message = res.message;
              }
            }, function (err) {
              _this3.message = 'err';
            });
          }
        }
      }, {
        key: "pass",
        get: function get() {
          return this.changeForm.get('password');
        }
      }, {
        key: "pass0",
        get: function get() {
          return this.changeForm.get('password0');
        }
      }]);

      return ChangePassComponent;
    }();

    ChangePassComponent.ɵfac = function ChangePassComponent_Factory(t) {
      return new (t || ChangePassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ChangePassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangePassComponent,
      selectors: [["app-change-pass"]],
      decls: 5,
      vars: 2,
      consts: [["id", "forgot"], [1, "flex"], [1, "center"], [4, "ngIf"], ["class", "message", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "password0", "placeholder", "Password", "type", "password"], ["formControlName", "password", "placeholder", "Confirm Password", "type", "password"], ["type", "submit", "value", "Change Password", 1, "submit"], [1, "text-danger"], [1, "message"], ["routerLink", "../"]],
      template: function ChangePassComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChangePassComponent_div_3_Template, 10, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChangePassComponent_div_4_Template, 7, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message !== "success");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message === "success");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["#forgot[_ngcontent-%COMP%] {\n  background-color: #EBEEED;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  height: 92vh;\n  justify-content: center;\n  align-items: center;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 450px;\n  text-align: center;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  font-weight: bolder;\n  font-size: 30px;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n  width: 100%;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 2rem 0 0 0;\n  padding: 7px;\n  background-color: transparent;\n  border: 1px solid grey;\n  color: black;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-family: \"caviar_dreamsregular\";\n  color: white;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"caviar_dreamsregular\";\n  color: white;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-family: \"caviar_dreamsregular\";\n  color: white;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-family: \"caviar_dreamsregular\";\n  color: white;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  border: 0;\n  box-shadow: 0px;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  color: #00ACB3;\n  border: 1px solid #00ACB3;\n  margin: 2rem 0 3rem 0;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 3px #00ACB3;\n  text-shadow: 0px 0px 1px #00ACB3;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin: 3rem 2rem;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #00ACB3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL2NoYW5nZS1wYXNzL0M6XFxVc2Vyc1xcSGFyc2ggWWFkYXZcXERlc2t0b3BcXFByb2plY3RcXDIuZnJvbnRlbmRcXE11c2NsZU1lZGl1bS9zcmNcXGFwcFxcc2lnbmluXFxjaGFuZ2UtcGFzc1xcY2hhbmdlLXBhc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ25pbi9jaGFuZ2UtcGFzcy9jaGFuZ2UtcGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0UsdUJBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7QUNFTjtBREFRO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VWO0FEQVE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNFVjtBREFRO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRVY7QURBVTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtBQ0VaO0FESlU7RUFDRSxtQ0FBQTtFQUNBLFlBQUE7QUNFWjtBREpVO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0FDRVo7QURKVTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtBQ0VaO0FEQ1U7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ0NaO0FER1E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0RaO0FER1E7RUFDTSwrQkFBQTtFQUNBLGdDQUFBO0FDRGQ7QURNTTtFQUNFLGlCQUFBO0FDSlI7QURLUTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0hWIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluL2NoYW5nZS1wYXNzL2NoYW5nZS1wYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZvcmdvdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFRUVEO1xyXG4gIC5mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogOTJ2aDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5jZW50ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvcm17XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDJyZW0gMCAwIDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcblxyXG4gICAgICAgICAgOjpwbGFjZWhvbGRlcntcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdjYXZpYXJfZHJlYW1zcmVndWxhcic7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA6Zm9jdXN7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1Ym1pdHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMEFDQjM7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEFDQjM7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwIDNyZW0gMCA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLnN1Ym1pdDpob3ZlcntcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAjMDBBQ0IzO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCAjMDBBQ0IzO1xyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIH1cclxuICAgICAgLm1lc3NhZ2V7XHJcbiAgICAgICAgbWFyZ2luOiAzcmVtIDJyZW07XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMDBBQ0IzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjZm9yZ290IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUVFRDtcbn1cbiNmb3Jnb3QgLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogOTJ2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jZm9yZ290IC5mbGV4IC5jZW50ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQ1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jZm9yZ290IC5mbGV4IC5jZW50ZXIgZm9ybSBoMSB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4jZm9yZ290IC5mbGV4IC5jZW50ZXIgZm9ybSBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2ZvcmdvdCAuZmxleCAuY2VudGVyIGZvcm0gaW5wdXQge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMnJlbSAwIDAgMDtcbiAgcGFkZGluZzogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgY29sb3I6IGJsYWNrO1xufVxuI2ZvcmdvdCAuZmxleCAuY2VudGVyIGZvcm0gaW5wdXQgOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBcImNhdmlhcl9kcmVhbXNyZWd1bGFyXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNmb3Jnb3QgLmZsZXggLmNlbnRlciBmb3JtIGlucHV0IDpmb2N1cyB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMHB4O1xufVxuI2ZvcmdvdCAuZmxleCAuY2VudGVyIGZvcm0gLnN1Ym1pdCB7XG4gIGNvbG9yOiAjMDBBQ0IzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBBQ0IzO1xuICBtYXJnaW46IDJyZW0gMCAzcmVtIDA7XG59XG4jZm9yZ290IC5mbGV4IC5jZW50ZXIgZm9ybSAuc3VibWl0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggIzAwQUNCMztcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4ICMwMEFDQjM7XG59XG4jZm9yZ290IC5mbGV4IC5jZW50ZXIgLm1lc3NhZ2Uge1xuICBtYXJnaW46IDNyZW0gMnJlbTtcbn1cbiNmb3Jnb3QgLmZsZXggLmNlbnRlciAubWVzc2FnZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwQUNCMztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-change-pass',
          templateUrl: './change-pass.component.html',
          styleUrls: ['./change-pass.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signin/forgot/forgot.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/signin/forgot/forgot.component.ts ***!
    \***************************************************/

  /*! exports provided: ForgotComponent */

  /***/
  function srcAppSigninForgotForgotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotComponent", function () {
      return ForgotComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ForgotComponent_div_3_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotComponent_div_3_div_9_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotComponent_div_3_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotComponent_div_3_div_9_div_1_Template, 2, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotComponent_div_3_div_9_div_2_Template, 2, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email.errors == null ? null : ctx_r2.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.email == null ? null : ctx_r2.email.invalid) && !(ctx_r2.email.errors == null ? null : ctx_r2.email.errors.required));
      }
    }

    function ForgotComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotComponent_div_3_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forgot Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter your email to continue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ForgotComponent_div_3_div_9_Template, 3, 2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotComponent_div_3_Template_input_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.email.markAsTouched();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.forgotForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email.touched && ctx_r0.email.invalid);
      }
    }

    function ForgotComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A link has been sent to your email to reset password please check your email.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " click here to go to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ForgotComponent = /*#__PURE__*/function () {
      function ForgotComponent(lgn, fb) {
        _classCallCheck(this, ForgotComponent);

        this.lgn = lgn;
        this.fb = fb;
      }

      _createClass(ForgotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forgotForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^@]+@[^@]+\.[a-zA-Z]{2,6}')]]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this4 = this;

          this.forgotForm.markAllAsTouched();

          if (this.forgotForm.valid) {
            this.lgn.forgot(this.forgotForm.value).subscribe(function (res) {
              _this4.message = res.message;
            }, function (err) {
              return console.log(err);
            });
          }
        }
      }, {
        key: "email",
        get: function get() {
          return this.forgotForm.get('email');
        }
      }]);

      return ForgotComponent;
    }();

    ForgotComponent.ɵfac = function ForgotComponent_Factory(t) {
      return new (t || ForgotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ForgotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotComponent,
      selectors: [["app-forgot"]],
      decls: 5,
      vars: 2,
      consts: [["id", "forgot"], [1, "flex"], [1, "center"], [4, "ngIf"], ["class", "message", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "text-danger"], ["formControlName", "email", "placeholder", "Email", "type", "email"], ["type", "submit", 1, "submit", 3, "click"], ["class", "text-danger", 4, "ngIf"], [1, "message"], ["href", "../../home"]],
      template: function ForgotComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgotComponent_div_3_Template, 11, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgotComponent_div_4_Template, 7, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message !== "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message === "done");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["#forgot[_ngcontent-%COMP%] {\n  background-color: #EBEEED;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100vw;\n  height: 92vh;\n  justify-content: center;\n  align-items: center;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 450px;\n  text-align: center;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  font-weight: bolder;\n  font-size: 30px;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0;\n  width: 100%;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 2rem 0 0 0;\n  padding: 7px;\n  background-color: transparent;\n  border: 1px solid grey;\n  color: black;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-family: \"caviar_dreamsregular\";\n  color: white;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"caviar_dreamsregular\";\n  color: white;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-family: \"caviar_dreamsregular\";\n  color: white;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-family: \"caviar_dreamsregular\";\n  color: white;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  border: 0;\n  box-shadow: 0px;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  color: #00ACB3;\n  border: 1px solid #00ACB3;\n  margin: 2rem 0 3rem 0;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 3px #00ACB3;\n  text-shadow: 0px 0px 1px #00ACB3;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin: 3rem 2rem;\n}\n#forgot[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #00ACB3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL2ZvcmdvdC9DOlxcVXNlcnNcXEhhcnNoIFlhZGF2XFxEZXNrdG9wXFxQcm9qZWN0XFwyLmZyb250ZW5kXFxNdXNjbGVNZWRpdW0vc3JjXFxhcHBcXHNpZ25pblxcZm9yZ290XFxmb3Jnb3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ25pbi9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSx1QkFBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtBQ0VOO0FEQVE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRVY7QURBUTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0VWO0FEQVE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNFVjtBREFVO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0FDRVo7QURKVTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtBQ0VaO0FESlU7RUFDRSxtQ0FBQTtFQUNBLFlBQUE7QUNFWjtBREpVO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0FDRVo7QURDVTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FDQ1o7QURHUTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDRFo7QURHUTtFQUNNLCtCQUFBO0VBQ0EsZ0NBQUE7QUNEZDtBRE1NO0VBQ0UsaUJBQUE7QUNKUjtBREtRO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDSFYiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb3Jnb3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUVFRDtcclxuICAuZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDkydmg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuY2VudGVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb3Jte1xyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAycmVtIDAgMCAwO1xyXG4gICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgICAgICAgIDo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY2F2aWFyX2RyZWFtc3JlZ3VsYXInO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgOmZvY3Vze1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJtaXR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDBBQ0IzO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBBQ0IzO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMCAzcmVtIDAgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC5zdWJtaXQ6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggIzAwQUNCMztcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggIzAwQUNCMztcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICB9XHJcbiAgICAgIC5tZXNzYWdle1xyXG4gICAgICAgIG1hcmdpbjogM3JlbSAycmVtO1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzAwQUNCMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI2ZvcmdvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVFRUQ7XG59XG4jZm9yZ290IC5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDkydmg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2ZvcmdvdCAuZmxleCAuY2VudGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0NTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2ZvcmdvdCAuZmxleCAuY2VudGVyIGZvcm0gaDEge1xuICBtYXJnaW46IDFyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuI2ZvcmdvdCAuZmxleCAuY2VudGVyIGZvcm0gcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbiNmb3Jnb3QgLmZsZXggLmNlbnRlciBmb3JtIGlucHV0IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDJyZW0gMCAwIDA7XG4gIHBhZGRpbmc6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGNvbG9yOiBibGFjaztcbn1cbiNmb3Jnb3QgLmZsZXggLmNlbnRlciBmb3JtIGlucHV0IDo6cGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogXCJjYXZpYXJfZHJlYW1zcmVndWxhclwiO1xuICBjb2xvcjogd2hpdGU7XG59XG4jZm9yZ290IC5mbGV4IC5jZW50ZXIgZm9ybSBpbnB1dCA6Zm9jdXMge1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDBweDtcbn1cbiNmb3Jnb3QgLmZsZXggLmNlbnRlciBmb3JtIC5zdWJtaXQge1xuICBjb2xvcjogIzAwQUNCMztcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQUNCMztcbiAgbWFyZ2luOiAycmVtIDAgM3JlbSAwO1xufVxuI2ZvcmdvdCAuZmxleCAuY2VudGVyIGZvcm0gLnN1Ym1pdDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4ICMwMEFDQjM7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCAjMDBBQ0IzO1xufVxuI2ZvcmdvdCAuZmxleCAuY2VudGVyIC5tZXNzYWdlIHtcbiAgbWFyZ2luOiAzcmVtIDJyZW07XG59XG4jZm9yZ290IC5mbGV4IC5jZW50ZXIgLm1lc3NhZ2UgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMEFDQjM7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot',
          templateUrl: './forgot.component.html',
          styleUrls: ['./forgot.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signin/signin-router.module.ts":
  /*!************************************************!*\
    !*** ./src/app/signin/signin-router.module.ts ***!
    \************************************************/

  /*! exports provided: SigninRoutingModule */

  /***/
  function srcAppSigninSigninRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninRoutingModule", function () {
      return SigninRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./signin.component */
    "./src/app/signin/signin.component.ts");
    /* harmony import */


    var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot/forgot.component */
    "./src/app/signin/forgot/forgot.component.ts");
    /* harmony import */


    var _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./change-pass/change-pass.component */
    "./src/app/signin/change-pass/change-pass.component.ts");

    var routes = [{
      path: 'signin',
      component: _signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]
    }, {
      path: 'signin/forgot',
      component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__["ForgotComponent"]
    }, {
      path: 'signin/changepassword',
      component: _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_4__["ChangePassComponent"]
    }];

    var SigninRoutingModule = function SigninRoutingModule() {
      _classCallCheck(this, SigninRoutingModule);
    };

    SigninRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SigninRoutingModule
    });
    SigninRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SigninRoutingModule_Factory(t) {
        return new (t || SigninRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SigninRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/signin/signin.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signin/signin.component.ts ***!
    \********************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function SigninComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
      }
    }

    function SigninComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SigninComponent_div_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SigninComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninComponent_div_15_div_1_Template, 2, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SigninComponent_div_15_div_2_Template, 2, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.email.errors == null ? null : ctx_r1.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.email == null ? null : ctx_r1.email.invalid) && !(ctx_r1.email.errors == null ? null : ctx_r1.email.errors.required));
      }
    }

    function SigninComponent_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SigninComponent_div_17_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password should be at least 5 characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SigninComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninComponent_div_17_div_1_Template, 2, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SigninComponent_div_17_div_2_Template, 2, 0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.pass.errors == null ? null : ctx_r2.pass.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.pass.invalid && !(ctx_r2.pass.errors == null ? null : ctx_r2.pass.errors.required));
      }
    }

    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent(lgn, fb) {
        _classCallCheck(this, SigninComponent);

        this.lgn = lgn;
        this.fb = fb;
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^@]+@[^@]+\.[a-zA-Z]{2,6}')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]]
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this5 = this;

          this.loginForm.markAllAsTouched();

          if (this.loginForm.valid) {
            this.lgn.login(this.loginForm.value).subscribe(function (res) {
              _this5.message = res.message;
              sessionStorage.setItem('token', res.token);
            }, function (err) {
              return console.log('Error:' + JSON.stringify(err));
            });
          }
        }
      }, {
        key: "email",
        get: function get() {
          return this.loginForm.get('email');
        }
      }, {
        key: "pass",
        get: function get() {
          return this.loginForm.get('password');
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      decls: 26,
      vars: 4,
      consts: [["id", "login"], [1, "background"], [1, "container"], [1, "row", "bg-black"], [1, "col-lg-6", "img"], [1, "col-lg-6", "form"], [3, "formGroup", "ngSubmit"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "email", "type", "email", "placeholder", "Email"], [4, "ngIf"], ["formControlName", "password", "type", "password", "placeholder", "Password"], ["routerLink", "forgot"], [1, "text-secondary"], ["routerLink", "/signup"], ["type", "submit", "value", "Sign In", 1, "submit", 3, "click"], [1, "text-danger"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MuscleMedium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Please enter your username and password to signin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_12_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SigninComponent_span_13_Template, 2, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SigninComponent_div_15_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SigninComponent_div_17_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Don't have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "create account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_input_click_25_listener() {
            return ctx.email.markAsTouched();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.touched && ctx.email.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pass.touched && ctx.pass.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["#login[_ngcontent-%COMP%] {\n  background-color: white;\n}\n#login[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  background: url('slide-1-backgrnd.gif');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 92vh;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 70%;\n  width: 100%;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  background-image: url('slide-1.jpg');\n  height: 100%;\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: auto;\n  font-weight: bolder;\n  font-size: 25px;\n  color: white;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  color: white;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00ACB3;\n  text-decoration: none;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  font-weight: bolder;\n  font-size: 30px;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0 0 2rem 0;\n  width: 300px;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 2rem 0 0 0;\n  padding: 7px;\n  display: block;\n  background-color: transparent;\n  border: 1.5px solid white;\n  color: white;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-family: \"caviar_dreamsregular\";\n  color: white;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"caviar_dreamsregular\";\n  color: white;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-family: \"caviar_dreamsregular\";\n  color: white;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  font-family: \"caviar_dreamsregular\";\n  color: white;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  border: 0;\n  box-shadow: 0px;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%] {\n  width: 70px;\n  padding: 5px;\n  color: #00ACB3;\n  border: 1px solid #00ACB3;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 3px #00ACB3;\n  text-shadow: 0px 0px 1px #00ACB3;\n}\n#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL0M6XFxVc2Vyc1xcSGFyc2ggWWFkYXZcXERlc2t0b3BcXFByb2plY3RcXDIuZnJvbnRlbmRcXE11c2NsZU1lZGl1bS9zcmNcXGFwcFxcc2lnbmluXFxzaWduaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQ0NGO0FEQUU7RUFDRSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNFSjtBREFJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VOO0FERE07RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0dSO0FERlE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNJVjtBREhVO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNLWjtBREZRO0VBQ0UsWUFBQTtBQ0lWO0FESFU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNLWjtBREhVO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0taO0FESFU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDS1o7QUREWTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNHZDtBRERjO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0FDR2hCO0FETGM7RUFDRSxtQ0FBQTtFQUNBLFlBQUE7QUNHaEI7QURMYztFQUNFLG1DQUFBO0VBQ0EsWUFBQTtBQ0doQjtBRExjO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0FDR2hCO0FEQWM7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ0VoQjtBREVZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNBaEI7QURHWTtFQUNNLCtCQUFBO0VBQ0EsZ0NBQUE7QUNEbEI7QURJWTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDRmQiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2lue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvL3NsaWRlLTEtYmFja2dybmQuZ2lmKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDkydmg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLnJvd3tcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvc2xpZGUtMS5qcGcpO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybXtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDBBQ0IzO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMnJlbSAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwIDAgMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgIDo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2Nhdmlhcl9kcmVhbXNyZWd1bGFyJztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDpmb2N1c3tcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdWJtaXR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBBQ0IzO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwQUNCMztcclxuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3VibWl0OmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAjMDBBQ0IzO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggIzAwQUNCMztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwiI2xvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4jbG9naW4gLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy8vc2xpZGUtMS1iYWNrZ3JuZC5naWYpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogOTJ2aDtcbn1cbiNsb2dpbiAuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jbG9naW4gLmNvbnRhaW5lciAucm93IHtcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2xvZ2luIC5jb250YWluZXIgLnJvdyAuaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvc2xpZGUtMS5qcGcpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2xvZ2luIC5jb250YWluZXIgLnJvdyAuaW1nIHAge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2xvZ2luIC5jb250YWluZXIgLnJvdyAuZm9ybSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNsb2dpbiAuY29udGFpbmVyIC5yb3cgLmZvcm0gYSB7XG4gIGNvbG9yOiAjMDBBQ0IzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jbG9naW4gLmNvbnRhaW5lciAucm93IC5mb3JtIGgxIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbiNsb2dpbiAuY29udGFpbmVyIC5yb3cgLmZvcm0gcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwIDAgMnJlbSAwO1xuICB3aWR0aDogMzAwcHg7XG59XG4jbG9naW4gLmNvbnRhaW5lciAucm93IC5mb3JtIGZvcm0gaW5wdXQge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMnJlbSAwIDAgMDtcbiAgcGFkZGluZzogN3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMS41cHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNsb2dpbiAuY29udGFpbmVyIC5yb3cgLmZvcm0gZm9ybSBpbnB1dCA6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiY2F2aWFyX2RyZWFtc3JlZ3VsYXJcIjtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2xvZ2luIC5jb250YWluZXIgLnJvdyAuZm9ybSBmb3JtIGlucHV0IDpmb2N1cyB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMHB4O1xufVxuI2xvZ2luIC5jb250YWluZXIgLnJvdyAuZm9ybSBmb3JtIC5zdWJtaXQge1xuICB3aWR0aDogNzBweDtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzAwQUNCMztcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQUNCMztcbn1cbiNsb2dpbiAuY29udGFpbmVyIC5yb3cgLmZvcm0gZm9ybSAuc3VibWl0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggIzAwQUNCMztcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4ICMwMEFDQjM7XG59XG4jbG9naW4gLmNvbnRhaW5lciAucm93IC5mb3JtIGZvcm0gc3BhbiB7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signin',
          templateUrl: './signin.component.html',
          styleUrls: ['./signin.component.scss']
        }]
      }], function () {
        return [{
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signin/signin.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signin/signin.module.ts ***!
    \*****************************************/

  /*! exports provided: SigninModule */

  /***/
  function srcAppSigninSigninModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninModule", function () {
      return SigninModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _signin_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signin-router.module */
    "./src/app/signin/signin-router.module.ts");
    /* harmony import */


    var _signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signin.component */
    "./src/app/signin/signin.component.ts");
    /* harmony import */


    var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot/forgot.component */
    "./src/app/signin/forgot/forgot.component.ts");
    /* harmony import */


    var _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./change-pass/change-pass.component */
    "./src/app/signin/change-pass/change-pass.component.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var SigninModule = function SigninModule() {
      _classCallCheck(this, SigninModule);
    };

    SigninModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SigninModule
    });
    SigninModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SigninModule_Factory(t) {
        return new (t || SigninModule)();
      },
      providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _signin_router_module__WEBPACK_IMPORTED_MODULE_3__["SigninRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SigninModule, {
        declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"], _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__["ForgotComponent"], _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_6__["ChangePassComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _signin_router_module__WEBPACK_IMPORTED_MODULE_3__["SigninRoutingModule"]],
        exports: [_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"], _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__["ForgotComponent"], _change_pass_change_pass_component__WEBPACK_IMPORTED_MODULE_6__["ChangePassComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _signin_router_module__WEBPACK_IMPORTED_MODULE_3__["SigninRoutingModule"]],
          exports: [_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"]],
          providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/statistics/full-data/full-data.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/statistics/full-data/full-data.component.ts ***!
    \*************************************************************/

  /*! exports provided: FullDataComponent */

  /***/
  function srcAppStatisticsFullDataFullDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullDataComponent", function () {
      return FullDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FullDataComponent_span_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Male");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FullDataComponent_span_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Female");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FullDataComponent = /*#__PURE__*/function () {
      function FullDataComponent(dataService) {
        var _this6 = this;

        _classCallCheck(this, FullDataComponent);

        this.dataService = dataService;
        this.dataService.currentMessage.subscribe(function (data) {
          if (data) {
            _this6.user = data;
            _this6.phy = _this6.calc_physi(_this6.user.bfp, _this6.user.gender);
          }
        });
      }

      _createClass(FullDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "calc_physi",
        value: function calc_physi(bfp, g) {
          if (bfp && g) {
            if (g === 'M') {
              if (bfp >= 2 && bfp < 6) {
                return 'Essestial Fat';
              } else if (bfp >= 6 && bfp < 14) {
                return 'Athlete';
              } else if (bfp >= 14 && bfp < 18) {
                return 'Fitness';
              } else if (bfp >= 18 && bfp < 25) {
                return 'Average';
              } else if (bfp >= 25) {
                return 'Obese';
              }
            } else {
              if (bfp >= 10 && bfp < 14) {
                return 'Essestial Fat';
              } else if (bfp >= 14 && bfp < 21) {
                return 'Athlete';
              } else if (bfp >= 21 && bfp < 25) {
                return 'Fitness';
              } else if (bfp >= 25 && bfp < 32) {
                return 'Average';
              } else if (bfp >= 32) {
                return 'Obese';
              }
            }
          } else {
            return 'Unknown';
          }
        }
      }]);

      return FullDataComponent;
    }();

    FullDataComponent.ɵfac = function FullDataComponent_Factory(t) {
      return new (t || FullDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    FullDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FullDataComponent,
      selectors: [["app-full-data"]],
      decls: 162,
      vars: 63,
      consts: [["id", "fulldata"], [1, "block"], [1, "img", "bmi"], [1, "disp"], [1, "heading"], [1, "cap"], [1, "flx"], [1, "left"], [1, "right"], [1, "sub-cap"], [1, "bmr-font"], [4, "ngIf"], [1, "img", "bmr"], [1, "img", "bfp"], [1, "sub-cap", "bfp-table"], [1, "bolder"], [1, "bc-table"], [1, "img", "bc"], [1, "img", "mmg"], [1, "mmg-top", "grey"], [1, "bolder", "white"], [1, "mmg-bottom", "grey"]],
      template: function FullDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Body Mass Index (BMI)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Underweight: BMI is less than 18.5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Normal weight: BMI is 18.5 to 24.9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Overweight: BMI is 25 to 29.9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Obese: BMI is 30 or more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Basal Metabolic Rate (BMR)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Your BMR is the amount of energy expended to keep your body functioning at rest.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Calories/Day");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, FullDataComponent_span_44_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, FullDataComponent_span_45_Template, 2, 0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Body Fat Percentage (BFP)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "The body fat percentage is the ratio of total mass of fat to total body mass in percentage. Body fat includes essential body fat and storage body fat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Physique Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Women");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Men");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Essential Fat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "10-13%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "2-5%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Athletes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "14-20%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "6-13% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Fitness");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "21-24%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "14-17%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Average");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "25-31%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "18-25%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Obese");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "32+%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "25+%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Body Composition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Fat mass (FM) is the amount of fat in your body including essential fats and stored fat. Lean body mass (LBM) include muscle mass and weight of other organs and bones.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Fat Mass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](125, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Lean Body Mass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](131, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Total Body Mass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](137, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Max Mass Gain (Naturally)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "It gives you the information about your body potential of maximum muscle mass you can put on without using any drug.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Body Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](151, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](153, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Max Body Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](159, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](161, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Height ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 18, ctx.user == null ? null : ctx.user.data.height, "1.0-0"), " cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Weight ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 21, ctx.user == null ? null : ctx.user.data.weight, "1.0-0"), " Kg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("BMI ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 24, ctx.user == null ? null : ctx.user.bmi, "1.1-1"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("BMR ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 27, ctx.user == null ? null : ctx.user.bmr, "1.0-0"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Age ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](41, 30, ctx.user == null ? null : ctx.user.age, "1.0-0"), " years");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.gender) === "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.gender) === "F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Height ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 33, (ctx.user == null ? null : ctx.user.data.height) - 0, "1.0-0"), " cm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Weight ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](51, 36, (ctx.user == null ? null : ctx.user.data.weight) - 0, "1.0-0"), " Kg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.phy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("BFP ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](68, 39, ctx.user == null ? null : ctx.user.bfp, "1.1-1"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](125, 42, ctx.user == null ? null : ctx.user.fm, "1.1-1"), " KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](131, 45, ctx.user == null ? null : ctx.user.lbm, "1.1-1"), " KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](137, 48, ctx.user == null ? null : ctx.user.data.weight, "1.1-1"), " KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](151, 51, ctx.user == null ? null : ctx.user.data.weight, "1.0-0"), " KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](153, 54, ctx.user == null ? null : ctx.user.bfp, "1.1-1"), "% BF ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](159, 57, ctx.user == null ? null : ctx.user.mmn, "1.0-0"), " KG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](161, 60, ctx.user == null ? null : ctx.user.bfp, "1.1-1"), "% BF ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
      styles: ["#fulldata[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1rem;\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 30rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: right;\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .bmi[_ngcontent-%COMP%] {\n  background-image: url('slide-1.jpg');\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .bmr[_ngcontent-%COMP%] {\n  background-image: url('slide-2.jpg');\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .bfp[_ngcontent-%COMP%] {\n  background-image: url('slide-3.jpg');\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .bc[_ngcontent-%COMP%] {\n  background-image: url('slide-4.jpg');\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .mmg[_ngcontent-%COMP%] {\n  background-image: url('slide-5.jpg');\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .disp[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: 30rem;\n  padding: 5rem;\n  background-color: #000000;\n  color: white;\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .disp[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bolder;\n  margin-bottom: 2rem;\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .disp[_ngcontent-%COMP%]   .cap[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 2rem;\n  color: #A9A9A9;\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .disp[_ngcontent-%COMP%]   .sub-cap[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #A9A9A9;\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .disp[_ngcontent-%COMP%]   .flx[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 2rem;\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .disp[_ngcontent-%COMP%]   .flx[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 50%;\n}\n#fulldata[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]   .disp[_ngcontent-%COMP%]   .flx[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n#fulldata[_ngcontent-%COMP%]   .bmr-font[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n#fulldata[_ngcontent-%COMP%]   .bfp-table[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n}\n#fulldata[_ngcontent-%COMP%]   .bfp-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 130px;\n}\n#fulldata[_ngcontent-%COMP%]   .bc-table[_ngcontent-%COMP%] {\n  width: 250px;\n}\n#fulldata[_ngcontent-%COMP%]   .mmg-top[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 25px;\n}\n#fulldata[_ngcontent-%COMP%]   .mmg-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 25px;\n}\n#fulldata[_ngcontent-%COMP%]   .grey[_ngcontent-%COMP%] {\n  color: #A9A9A9;\n}\n#fulldata[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljcy9mdWxsLWRhdGEvQzpcXFVzZXJzXFxIYXJzaCBZYWRhdlxcRGVza3RvcFxcUHJvamVjdFxcMi5mcm9udGVuZFxcTXVzY2xlTWVkaXVtL3NyY1xcYXBwXFxzdGF0aXN0aWNzXFxmdWxsLWRhdGFcXGZ1bGwtZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RhdGlzdGljcy9mdWxsLWRhdGEvZnVsbC1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNFTjtBRERNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNHUjtBRERNO0VBQU0sb0NBQUE7QUNJWjtBREhNO0VBQU0sb0NBQUE7QUNNWjtBRExNO0VBQU0sb0NBQUE7QUNRWjtBRFBNO0VBQUssb0NBQUE7QUNVWDtBRFRNO0VBQU0sb0NBQUE7QUNZWjtBRFhNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDYVI7QURaUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDY1Y7QURaUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNjVjtBRFpRO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNjUjtBRFpRO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ2NWO0FEYlU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ2VaO0FEYlU7RUFDRSxlQUFBO0FDZVo7QURQSTtFQUNFLGVBQUE7QUNTTjtBRFBJO0VBQ0UsaUJBQUE7QUNTTjtBRFJNO0VBQ0UsWUFBQTtBQ1VSO0FEUEk7RUFDUSxZQUFBO0FDU1o7QURQSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDU047QURQSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDU047QURQSTtFQUNFLGNBQUE7QUNTTjtBRFBJO0VBQ0UsWUFBQTtBQ1NOIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlzdGljcy9mdWxsLWRhdGEvZnVsbC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Z1bGxkYXRhe1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgLmJsb2Nre1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAuaW1ne1xyXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgIGhlaWdodDogMzByZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIC5ibWl7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3NsaWRlLTEuanBnKTsgfVxyXG4gICAgICAuYm1yeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zbGlkZS0yLmpwZyk7IH1cclxuICAgICAgLmJmcHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvc2xpZGUtMy5qcGcpOyB9XHJcbiAgICAgIC5iY3sgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvc2xpZGUtNC5qcGcpOyB9XHJcbiAgICAgIC5tbWd7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3NsaWRlLTUuanBnKTsgfVxyXG4gICAgICAuZGlzcHtcclxuICAgICAgICB3aWR0aDogNTB2dztcclxuICAgICAgICBoZWlnaHQ6IDMwcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDVyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICBjb2xvcjogI0E5QTlBOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1Yi1jYXB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjQTlBOUE5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmx4e1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgIC5sZWZ0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmlnaHR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9hZGRpdGlvbmFsIHNldHRpbmdzXHJcbiAgICAuYm1yLWZvbnR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgIC5iZnAtdGFibGV7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xcmVtO1xyXG4gICAgICB0ZHtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5iYy10YWJsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgIH1cclxuICAgIC5tbWctdG9we1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLm1tZy1ib3R0b217XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIC5ncmV5e1xyXG4gICAgICBjb2xvcjogI0E5QTlBOTtcclxuICAgIH1cclxuICAgIC53aGl0ZXtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbiIsIiNmdWxsZGF0YSB7XG4gIHdpZHRoOiAxMDB2dztcbn1cbiNmdWxsZGF0YSAuYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuI2Z1bGxkYXRhIC5ibG9jayAuaW1nIHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogMzByZW07XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuI2Z1bGxkYXRhIC5ibG9jayAuYm1pIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvc2xpZGUtMS5qcGcpO1xufVxuI2Z1bGxkYXRhIC5ibG9jayAuYm1yIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvc2xpZGUtMi5qcGcpO1xufVxuI2Z1bGxkYXRhIC5ibG9jayAuYmZwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvc2xpZGUtMy5qcGcpO1xufVxuI2Z1bGxkYXRhIC5ibG9jayAuYmMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zbGlkZS00LmpwZyk7XG59XG4jZnVsbGRhdGEgLmJsb2NrIC5tbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zbGlkZS01LmpwZyk7XG59XG4jZnVsbGRhdGEgLmJsb2NrIC5kaXNwIHtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogMzByZW07XG4gIHBhZGRpbmc6IDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNmdWxsZGF0YSAuYmxvY2sgLmRpc3AgLmhlYWRpbmcge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4jZnVsbGRhdGEgLmJsb2NrIC5kaXNwIC5jYXAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGNvbG9yOiAjQTlBOUE5O1xufVxuI2Z1bGxkYXRhIC5ibG9jayAuZGlzcCAuc3ViLWNhcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNBOUE5QTk7XG59XG4jZnVsbGRhdGEgLmJsb2NrIC5kaXNwIC5mbHgge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbiNmdWxsZGF0YSAuYmxvY2sgLmRpc3AgLmZseCAubGVmdCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDUwJTtcbn1cbiNmdWxsZGF0YSAuYmxvY2sgLmRpc3AgLmZseCAucmlnaHQge1xuICBmb250LXNpemU6IDI1cHg7XG59XG4jZnVsbGRhdGEgLmJtci1mb250IHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuI2Z1bGxkYXRhIC5iZnAtdGFibGUge1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbn1cbiNmdWxsZGF0YSAuYmZwLXRhYmxlIHRkIHtcbiAgd2lkdGg6IDEzMHB4O1xufVxuI2Z1bGxkYXRhIC5iYy10YWJsZSB7XG4gIHdpZHRoOiAyNTBweDtcbn1cbiNmdWxsZGF0YSAubW1nLXRvcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4jZnVsbGRhdGEgLm1tZy1ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuI2Z1bGxkYXRhIC5ncmV5IHtcbiAgY29sb3I6ICNBOUE5QTk7XG59XG4jZnVsbGRhdGEgLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-full-data',
          templateUrl: './full-data.component.html',
          styleUrls: ['./full-data.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/statistics/personal-info/personal-info.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/statistics/personal-info/personal-info.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PersonalInfoComponent */

  /***/
  function srcAppStatisticsPersonalInfoPersonalInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function () {
      return PersonalInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PersonalInfoComponent_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "../../../assets/img/" + ctx_r0.user.bTypeMax + ".gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.user == null ? null : ctx_r0.user.bTypeMax);
      }
    }

    function PersonalInfoComponent_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "../../../assets/img/" + ctx_r1.user.bTypeMax + "F.gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.user == null ? null : ctx_r1.user.bTypeMax);
      }
    }

    function PersonalInfoComponent_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
      }
    }

    function PersonalInfoComponent_h1_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your body type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " is");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.user.bTypeMax);
      }
    }

    function PersonalInfoComponent_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ectomorph's have a light build with small joints and lean muscle. Usually they have long thin limbs with stringy muscles. Shoulders tend to be thin with little width.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PersonalInfoComponent_p_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A mesomorph has a large bone structure, large muscles and a naturally athletic physique. They find it quite easy to gain and lose weight. They are naturally strong.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PersonalInfoComponent_p_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The Endomorph body type is solid and generally soft. Endomorphs gain fat very easily. They are usually of a shorter build with thick arms and legs. Muscles are strong, especially the upper legs.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PersonalInfoComponent = /*#__PURE__*/function () {
      function PersonalInfoComponent(dataService) {
        var _this7 = this;

        _classCallCheck(this, PersonalInfoComponent);

        this.dataService = dataService;
        this.barM = {
          p: {
            per: 0,
            cal: 0,
            wt: 0
          },
          c: {
            per: 0,
            cal: 0,
            wt: 0
          },
          f: {
            per: 0,
            cal: 0,
            wt: 0
          }
        };
        this.dataService.currentMessage.subscribe(function (data) {
          if (data) {
            _this7.user = data;

            _this7.calc_bar_maintain(_this7.user.data.weight, _this7.user.bmr);
          }
        });
      }

      _createClass(PersonalInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "calc_bar_maintain",
        value: function calc_bar_maintain(wt, TotalCal) {
          if (wt && TotalCal) {
            this.barM.p.wt = wt * 2.20462 * 1;
            this.barM.p.cal = wt * 2.20462 * 4;
            this.barM.f.cal = TotalCal * 20 / 100;
            this.barM.c.cal = TotalCal - this.barM.p.cal - this.barM.f.cal;
            this.barM.f.wt = this.barM.f.cal / 9;
            this.barM.c.wt = this.barM.c.cal / 4;
            this.barM.p.per = this.barM.p.cal / TotalCal;
            this.barM.c.per = this.barM.c.cal / TotalCal;
            this.barM.f.per = 0.20; // percent pipe takes decimal values
          } else {
            this.barM = {
              p: {
                per: .33,
                cal: 0,
                wt: 0
              },
              c: {
                per: .33,
                cal: 0,
                wt: 0
              },
              f: {
                per: .33,
                cal: 0,
                wt: 0
              }
            };
          }
        }
      }]);

      return PersonalInfoComponent;
    }();

    PersonalInfoComponent.ɵfac = function PersonalInfoComponent_Factory(t) {
      return new (t || PersonalInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    PersonalInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonalInfoComponent,
      selectors: [["app-personal-info"]],
      decls: 49,
      vars: 46,
      consts: [["id", "personalInfo"], [1, "container"], [1, "row"], [1, "col-lg-4"], [3, "src", "alt", 4, "ngIf"], ["src", "../../../assets/img/Mesomorph.gif", "alt", "unknown", 4, "ngIf"], [1, "col-lg-8", "info-data"], [1, "col-sm-12"], [4, "ngIf"], [1, "col-sm-12", "mt-5"], [1, "tab"], [1, "p"], [1, "bolder"], [1, "c"], [1, "f"], [3, "src", "alt"], ["src", "../../../assets/img/Mesomorph.gif", "alt", "unknown"]],
      template: function PersonalInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PersonalInfoComponent_img_4_Template, 1, 2, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PersonalInfoComponent_img_5_Template, 1, 2, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PersonalInfoComponent_img_6_Template, 1, 0, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PersonalInfoComponent_h1_10_Template, 6, 1, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PersonalInfoComponent_p_11_Template, 2, 0, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PersonalInfoComponent_p_12_Template, 2, 0, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PersonalInfoComponent_p_13_Template, 2, 0, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Optimum Macros Ratio to Maintain Body Composition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.bTypeMax) && ctx.user.gender === "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.bTypeMax) && ctx.user.gender === "F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.bTypeMax) === "Unknown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.bTypeMax);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.bTypeMax) === "Ectoomorph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.bTypeMax) === "Mesomorph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.bTypeMax) === "Endomorph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.barM.c.per * 100, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Protein ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 22, ctx.barM.p.per), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 24, ctx.barM.p.cal, "1.0-0"), "Kcal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 27, ctx.barM.p.wt, "1.0-0"), "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.barM.c.per * 100, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Carb ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 30, ctx.barM.c.per), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 32, ctx.barM.c.cal, "1.0-0"), "Kcal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 35, ctx.barM.c.wt, "1.0-0"), "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.barM.f.per * 100, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fat ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 38, ctx.barM.f.per), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 40, ctx.barM.f.cal, "1.0-0"), "Kcal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 43, ctx.barM.f.wt, "1.0-0"), "g");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
      styles: ["#personalInfo[_ngcontent-%COMP%] {\n  margin-top: -1rem;\n  padding: 6rem 3rem;\n  background-color: #EBEEED;\n}\n#personalInfo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 95%;\n  padding: 2rem;\n}\n#personalInfo[_ngcontent-%COMP%]   .info-data[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n#personalInfo[_ngcontent-%COMP%]   .info-data[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n#personalInfo[_ngcontent-%COMP%]   .info-data[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin: 1rem 0 1rem 0;\n}\n#personalInfo[_ngcontent-%COMP%]   .info-data[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  width: 100%;\n}\n#personalInfo[_ngcontent-%COMP%]   .info-data[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%] {\n  background: #00ACB3;\n  padding: 0 0 0 5px;\n}\n#personalInfo[_ngcontent-%COMP%]   .info-data[_ngcontent-%COMP%]   .c[_ngcontent-%COMP%] {\n  width: 35%;\n  background: #DFCC2E;\n  padding: 0 0 0 5px;\n}\n#personalInfo[_ngcontent-%COMP%]   .info-data[_ngcontent-%COMP%]   .f[_ngcontent-%COMP%] {\n  width: 25%;\n  background: #EC6334;\n  padding: 0 0 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljcy9wZXJzb25hbC1pbmZvL0M6XFxVc2Vyc1xcSGFyc2ggWWFkYXZcXERlc2t0b3BcXFByb2plY3RcXDIuZnJvbnRlbmRcXE11c2NsZU1lZGl1bS9zcmNcXGFwcFxcc3RhdGlzdGljc1xccGVyc29uYWwtaW5mb1xccGVyc29uYWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RhdGlzdGljcy9wZXJzb25hbC1pbmZvL3BlcnNvbmFsLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDRjtBREFFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRUo7QURBRTtFQUNFLGFBQUE7QUNFSjtBRERJO0VBQ0UsZUFBQTtBQ0dOO0FEREk7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUNHTjtBRERJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0dOO0FEREk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDR047QURESTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDR047QURESTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9zdGF0aXN0aWNzL3BlcnNvbmFsLWluZm8vcGVyc29uYWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwZXJzb25hbEluZm97XHJcbiAgbWFyZ2luLXRvcDogLTFyZW07XHJcbiAgcGFkZGluZzo2cmVtIDNyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUVFRDtcclxuICBpbWd7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuICAuaW5mby1kYXRhe1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBtYXJnaW46MXJlbSAwIDFyZW0gMDtcclxuICAgIH1cclxuICAgIC50YWJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5we1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDBBQ0IzO1xyXG4gICAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XHJcbiAgICB9XHJcbiAgICAuY3tcclxuICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgYmFja2dyb3VuZDogI0RGQ0MyRTtcclxuICAgICAgcGFkZGluZzogMCAwIDAgNXB4O1xyXG4gICAgfVxyXG4gICAgLmZ7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNFQzYzMzQ7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG59Ly9zZWN0aW9uXHJcbiIsIiNwZXJzb25hbEluZm8ge1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgcGFkZGluZzogNnJlbSAzcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFRUVEO1xufVxuI3BlcnNvbmFsSW5mbyBpbWcge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDk1JTtcbiAgcGFkZGluZzogMnJlbTtcbn1cbiNwZXJzb25hbEluZm8gLmluZm8tZGF0YSB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4jcGVyc29uYWxJbmZvIC5pbmZvLWRhdGEgaDEge1xuICBmb250LXNpemU6IDM1cHg7XG59XG4jcGVyc29uYWxJbmZvIC5pbmZvLWRhdGEgaDIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMXJlbSAwIDFyZW0gMDtcbn1cbiNwZXJzb25hbEluZm8gLmluZm8tZGF0YSAudGFiIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3BlcnNvbmFsSW5mbyAuaW5mby1kYXRhIC5wIHtcbiAgYmFja2dyb3VuZDogIzAwQUNCMztcbiAgcGFkZGluZzogMCAwIDAgNXB4O1xufVxuI3BlcnNvbmFsSW5mbyAuaW5mby1kYXRhIC5jIHtcbiAgd2lkdGg6IDM1JTtcbiAgYmFja2dyb3VuZDogI0RGQ0MyRTtcbiAgcGFkZGluZzogMCAwIDAgNXB4O1xufVxuI3BlcnNvbmFsSW5mbyAuaW5mby1kYXRhIC5mIHtcbiAgd2lkdGg6IDI1JTtcbiAgYmFja2dyb3VuZDogI0VDNjMzNDtcbiAgcGFkZGluZzogMCAwIDAgNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-personal-info',
          templateUrl: './personal-info.component.html',
          styleUrls: ['./personal-info.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/statistics/statistics-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/statistics/statistics-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: StatisticsRoutingModule */

  /***/
  function srcAppStatisticsStatisticsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsRoutingModule", function () {
      return StatisticsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./statistics.component */
    "./src/app/statistics/statistics.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.guard */
    "./src/app/auth.guard.ts");

    var routes = [{
      path: 'stats',
      component: _statistics_component__WEBPACK_IMPORTED_MODULE_2__["StatisticsComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }];

    var StatisticsRoutingModule = function StatisticsRoutingModule() {
      _classCallCheck(this, StatisticsRoutingModule);
    };

    StatisticsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StatisticsRoutingModule
    });
    StatisticsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StatisticsRoutingModule_Factory(t) {
        return new (t || StatisticsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StatisticsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/statistics/statistics.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/statistics/statistics.component.ts ***!
    \****************************************************/

  /*! exports provided: StatisticsComponent */

  /***/
  function srcAppStatisticsStatisticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function () {
      return StatisticsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _stats_stats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./stats/stats.component */
    "./src/app/statistics/stats/stats.component.ts");
    /* harmony import */


    var _full_data_full_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./full-data/full-data.component */
    "./src/app/statistics/full-data/full-data.component.ts");
    /* harmony import */


    var _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./personal-info/personal-info.component */
    "./src/app/statistics/personal-info/personal-info.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../about-us/about-us.component */
    "./src/app/about-us/about-us.component.ts");

    var StatisticsComponent = /*#__PURE__*/function () {
      function StatisticsComponent() {
        _classCallCheck(this, StatisticsComponent);
      }

      _createClass(StatisticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatisticsComponent;
    }();

    StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) {
      return new (t || StatisticsComponent)();
    };

    StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatisticsComponent,
      selectors: [["app-statistics"]],
      decls: 6,
      vars: 0,
      template: function StatisticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-full-data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-personal-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-contact-us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-about-us");
        }
      },
      directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _stats_stats_component__WEBPACK_IMPORTED_MODULE_2__["StatsComponent"], _full_data_full_data_component__WEBPACK_IMPORTED_MODULE_3__["FullDataComponent"], _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_4__["PersonalInfoComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-statistics',
          templateUrl: './statistics.component.html',
          styleUrls: ['./statistics.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/statistics/statistics.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/statistics/statistics.module.ts ***!
    \*************************************************/

  /*! exports provided: StatisticsModule */

  /***/
  function srcAppStatisticsStatisticsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsModule", function () {
      return StatisticsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _statistics_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./statistics-routing.module */
    "./src/app/statistics/statistics-routing.module.ts");
    /* harmony import */


    var _statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./statistics.component */
    "./src/app/statistics/statistics.component.ts");
    /* harmony import */


    var _stats_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./stats/stats.component */
    "./src/app/statistics/stats/stats.component.ts");
    /* harmony import */


    var _full_data_full_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./full-data/full-data.component */
    "./src/app/statistics/full-data/full-data.component.ts");
    /* harmony import */


    var _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./personal-info/personal-info.component */
    "./src/app/statistics/personal-info/personal-info.component.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../about-us/about-us.component */
    "./src/app/about-us/about-us.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");

    var StatisticsModule = function StatisticsModule() {
      _classCallCheck(this, StatisticsModule);
    };

    StatisticsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StatisticsModule
    });
    StatisticsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StatisticsModule_Factory(t) {
        return new (t || StatisticsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"], _statistics_routing_module__WEBPACK_IMPORTED_MODULE_2__["StatisticsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StatisticsModule, {
        declarations: [_statistics_component__WEBPACK_IMPORTED_MODULE_3__["StatisticsComponent"], _stats_stats_component__WEBPACK_IMPORTED_MODULE_4__["StatsComponent"], _full_data_full_data_component__WEBPACK_IMPORTED_MODULE_5__["FullDataComponent"], _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_6__["PersonalInfoComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"], _statistics_routing_module__WEBPACK_IMPORTED_MODULE_2__["StatisticsRoutingModule"]],
        exports: [_statistics_component__WEBPACK_IMPORTED_MODULE_3__["StatisticsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_statistics_component__WEBPACK_IMPORTED_MODULE_3__["StatisticsComponent"], _stats_stats_component__WEBPACK_IMPORTED_MODULE_4__["StatsComponent"], _full_data_full_data_component__WEBPACK_IMPORTED_MODULE_5__["FullDataComponent"], _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_6__["PersonalInfoComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"], _statistics_routing_module__WEBPACK_IMPORTED_MODULE_2__["StatisticsRoutingModule"]],
          exports: [_statistics_component__WEBPACK_IMPORTED_MODULE_3__["StatisticsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/statistics/stats/stats.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/statistics/stats/stats.component.ts ***!
    \*****************************************************/

  /*! exports provided: StatsComponent */

  /***/
  function srcAppStatisticsStatsStatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatsComponent", function () {
      return StatsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StatsComponent_div_1_img_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "../../../assets/img/" + ctx_r1.user.bTypeMax + ".gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.user == null ? null : ctx_r1.user.bTypeMax);
      }
    }

    function StatsComponent_div_1_img_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "../../../assets/img/" + ctx_r2.user.bTypeMax + "F.gif", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r2.user == null ? null : ctx_r2.user.bTypeMax);
      }
    }

    function StatsComponent_div_1_img_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
      }
    }

    function StatsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Statistcs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Amazing place to see your");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " current ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "fitness status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StatsComponent_div_1_img_11_Template, 1, 2, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StatsComponent_div_1_img_12_Template, 1, 2, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StatsComponent_div_1_img_13_Template, 1, 0, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "BMI");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "BMR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Your BMR is the amount of energy expended to keep your body functioning at rest.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "BFP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "The body fat percentage is the ratio of total mass of fat to total body mass in percentage.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Lean Body Mass");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Lean Body Mass include muscle mass and weight of other organs and bones.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Max Mass Naturally");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "It gives you the information about your body potential of maximum muscle mass you can put on without using any drug.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Fat Mass");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Fat mass (FM) is the amount of fat in your body including essential fats and stored fat.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Body Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.user == null ? null : ctx_r0.user.bTypeMax) && ctx_r0.user.gender === "M");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.user == null ? null : ctx_r0.user.bTypeMax) && ctx_r0.user.gender === "F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.user == null ? null : ctx_r0.user.bTypeMax) === "Unknown");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 10, ctx_r0.user.bmi, "1.1-1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 13, ctx_r0.user.bmr, "1.0-0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](41, 16, ctx_r0.user.bfp, "1.1-1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](51, 19, ctx_r0.user == null ? null : ctx_r0.user.lbm, "1.1-1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](60, 22, ctx_r0.user.mmn, "1.1-1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](69, 25, ctx_r0.user.fm, "1.1-1"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.bTypeMax);
      }
    }

    var StatsComponent = /*#__PURE__*/function () {
      function StatsComponent(lgn, dataService) {
        var _this8 = this;

        _classCallCheck(this, StatsComponent);

        this.lgn = lgn;
        this.dataService = dataService;

        if (!sessionStorage.getItem('token')) {
          this.user = JSON.parse(sessionStorage.getItem('GuestData'));
        } else {
          lgn.getUserData().subscribe(function (res) {
            _this8.user = res.data; // this.user.bmi = this.calc_bmi(this.user.data.weight, this.user.data.height);
            // // tslint:disable-next-line: max-line-length
            // this.user.bmr = this.calc_bmr(this.user.gender, this.user.age, this.user.data.weight, this.user.data.height);
            // // tslint:disable-next-line: max-line-length
            // this.user.bfp = this.calc_bfp_navy(this.user.gender, this.user.data.waist, this.user.data.hip, this.user.data.neck, this.user.data.height);
            // this.user.fm = this.user.data.weight * this.user.bfp / 100;
            // // tslint:disable-next-line: max-line-length
            // this.user.mmn = this.calc_mmn(this.user.data.height, this.user.data.ankle, this.user.data.wrist, this.user.bfp);
            // this.user.lbm = this.calc_lbm(this.user.data.weight, this.user.fm);
            // this.user.bTypeMax = this.calc_btype(this.user.data.bType);
            // this.dataService.changeMessage(this.user);
          }, function (err) {
            return console.log(JSON.stringify(err));
          });
        }
      }

      _createClass(StatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user.bmi = this.calc_bmi(this.user.data.weight, this.user.data.height); // tslint:disable-next-line: max-line-length

          this.user.bmr = this.calc_bmr(this.user.gender, this.user.age, this.user.data.weight, this.user.data.height); // tslint:disable-next-line: max-line-length

          this.user.bfp = this.calc_bfp_navy(this.user.gender, this.user.data.waist, this.user.data.hip, this.user.data.neck, this.user.data.height);
          this.user.fm = this.user.data.weight * this.user.bfp / 100; // tslint:disable-next-line: max-line-length

          this.user.mmn = this.calc_mmn(this.user.data.height, this.user.data.ankle, this.user.data.wrist, this.user.bfp);
          this.user.lbm = this.calc_lbm(this.user.data.weight, this.user.fm);
          this.user.bTypeMax = this.calc_btype(this.user.data.bType);
          this.dataService.changeMessage(this.user);
        }
      }, {
        key: "calc_bmi",
        value: function calc_bmi(weight, height) {
          if (weight && height) {
            return weight * 10000 / (height * height);
          } else {
            return 0;
          }
        }
      }, {
        key: "calc_bmr",
        value: function calc_bmr(gender, age, weight, height) {
          if (weight && height && age && gender) {
            if (gender === 'M') {
              return 10 * weight + 6.25 * height - 5 * age + 5;
            } else {
              return 10 * weight + 6.25 * height - 5 * age - 161;
            }
          } else {
            return 0;
          }
        }
      }, {
        key: "calc_lbm",
        value: function calc_lbm(wt, fm) {
          if (wt && fm) {
            return wt - fm;
          } else {
            return 0;
          }
        }
      }, {
        key: "calc_bfp_navy",
        value: function calc_bfp_navy(gender, waist, hip, neck, height) {
          if (waist && neck && height && hip && gender) {
            gender === 'F' ? waist = waist + hip : waist = waist;
            var x = Math.log10(waist - neck);
            var z = Math.log10(height);
            var y;

            if (gender === 'M') {
              y = 1.0324 - 0.19077 * x + 0.15456 * z;
            } else {
              y = 1.29579 - 0.35004 * x + 0.22100 * z;
            }

            return 495 / y - 450;
          } else {
            return 0;
          }
        }
      }, {
        key: "calc_mmn",
        value: function calc_mmn(height, ankle, wrist, bfp) {
          if (height && ankle && wrist && bfp) {
            var res = Math.pow(height * 0.393701, 1.5) * (Math.sqrt(wrist * 0.393701) / 22.667 + Math.sqrt(ankle * 0.393701) / 17.0104) * (bfp / 224 + 1);
            return res * 0.453592 * 100 / (100 - bfp);
          } else {
            return 0;
          }
        }
      }, {
        key: "calc_btype",
        value: function calc_btype(data) {
          if (data.ecto + data.meso + data.endo !== 0) {
            if (data.ecto > data.meso) {
              return 'Ectomorph';
            } else if (data.endo > data.meso) {
              return 'Endomorph';
            } else {
              return 'Mesomorph';
            }
          } else {
            return 'Unknown';
          }
        }
      }]);

      return StatsComponent;
    }();

    StatsComponent.ɵfac = function StatsComponent_Factory(t) {
      return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    StatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatsComponent,
      selectors: [["app-stats"]],
      decls: 2,
      vars: 1,
      consts: [["id", "stats"], ["class", "contain", 4, "ngIf"], [1, "contain"], [1, "text-center"], [1, "head-txt-bold"], [1, "grid"], [1, "box", "img"], [3, "src", "alt", 4, "ngIf"], ["src", "../../../assets/img/Mesomorph.gif", "alt", "unknown", 4, "ngIf"], [1, "box"], [1, "data"], [1, "data-desc"], [1, "data-val"], [1, "box-bottom"], [1, "fnt-size"], [3, "src", "alt"], ["src", "../../../assets/img/Mesomorph.gif", "alt", "unknown"]],
      template: function StatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatsComponent_div_1_Template, 80, 28, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      styles: ["#stats[_ngcontent-%COMP%] {\n  width: 100vw;\n  padding: 5rem 0 10rem 0;\n  background-color: #EBEEED;\n}\n#stats[_ngcontent-%COMP%]   .contain[_ngcontent-%COMP%] {\n  width: 85vw;\n  margin: 0 auto;\n}\n#stats[_ngcontent-%COMP%]   .contain[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin: 0 0 1.5rem 0;\n}\n#stats[_ngcontent-%COMP%]   .contain[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 3rem;\n}\n#stats[_ngcontent-%COMP%]   .contain[_ngcontent-%COMP%]   .head-txt-bold[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n#stats[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 390px 300px 390px;\n  grid-template-rows: 550px;\n  justify-content: space-between;\n}\n#stats[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  grid-row: 1/4;\n  grid-column: 2;\n}\n#stats[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 450px;\n  margin: auto 0;\n}\n#stats[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n#stats[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  display: flex;\n  align-items: center;\n  box-shadow: 15px 15px 50px lightgray;\n}\n#stats[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .data-desc[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 10px;\n}\n#stats[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .data-desc[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 25px;\n}\n#stats[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .data-desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n#stats[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .data-val[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: center;\n  font-size: 25px;\n}\n#stats[_ngcontent-%COMP%]   .box-bottom[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 3rem auto 0 auto;\n}\n#stats[_ngcontent-%COMP%]   .box-bottom[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  height: 200px;\n}\n#stats[_ngcontent-%COMP%]   .box-bottom[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n#stats[_ngcontent-%COMP%]   .box-bottom[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .fnt-size[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljcy9zdGF0cy9DOlxcVXNlcnNcXEhhcnNoIFlhZGF2XFxEZXNrdG9wXFxQcm9qZWN0XFwyLmZyb250ZW5kXFxNdXNjbGVNZWRpdW0vc3JjXFxhcHBcXHN0YXRpc3RpY3NcXHN0YXRzXFxzdGF0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RhdGlzdGljcy9zdGF0cy9zdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0VKO0FEQUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNFSjtBREFFO0VBQ0UsbUJBQUE7QUNFSjtBREtBO0VBQ0UsYUFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQ0hGO0FES0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ0hGO0FESUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNGSjtBREtBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDSEY7QURNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUNKRjtBREtFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNISjtBRElNO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRk47QURJTTtFQUNFLGVBQUE7QUNGUjtBREtFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hKO0FET0E7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUNMRjtBRE1NO0VBQ0UsYUFBQTtBQ0pSO0FETVU7RUFDRSxtQkFBQTtBQ0paO0FETVE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNKViIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdHMvc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3RhdHN7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBhZGRpbmc6IDVyZW0gMCAxMHJlbSAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVFRUQ7XHJcblxyXG4uY29udGFpbntcclxuICB3aWR0aDogODV2dztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoNHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbjogMCAwIDEuNXJlbSAwO1xyXG4gIH1cclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgfVxyXG4gIC5oZWFkLXR4dC1ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy9ncmlkXHJcbi5ncmlke1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzOTBweCAzMDBweCAzOTBweDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDU1MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uaW1ne1xyXG4gIGdyaWQtcm93OiAxLzQ7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgaW1ne1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIG1hcmdpbjogYXV0byAwO1xyXG4gIH1cclxufVxyXG4uYm94e1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRhdGF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMTVweCAxNXB4IDUwcHggbGlnaHRncmF5O1xyXG4gIC5kYXRhLWRlc2N7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBoNXtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5kYXRhLXZhbHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcblxyXG59XHJcbi5ib3gtYm90dG9te1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDNyZW0gYXV0byAwIGF1dG87XHJcbiAgICAgIC5kYXRhe1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLmZudC1zaXple1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxufS8vc2VjdGlvblxyXG4iLCIjc3RhdHMge1xuICB3aWR0aDogMTAwdnc7XG4gIHBhZGRpbmc6IDVyZW0gMCAxMHJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFRUVEO1xufVxuI3N0YXRzIC5jb250YWluIHtcbiAgd2lkdGg6IDg1dnc7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuI3N0YXRzIC5jb250YWluIGg0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW46IDAgMCAxLjVyZW0gMDtcbn1cbiNzdGF0cyAuY29udGFpbiBoMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cbiNzdGF0cyAuY29udGFpbiAuaGVhZC10eHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4jc3RhdHMgLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM5MHB4IDMwMHB4IDM5MHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDU1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4jc3RhdHMgLmltZyB7XG4gIGdyaWQtcm93OiAxLzQ7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuI3N0YXRzIC5pbWcgaW1nIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbiNzdGF0cyAuYm94IHtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI3N0YXRzIC5kYXRhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCA1MHB4IGxpZ2h0Z3JheTtcbn1cbiNzdGF0cyAuZGF0YSAuZGF0YS1kZXNjIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuI3N0YXRzIC5kYXRhIC5kYXRhLWRlc2MgaDUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4jc3RhdHMgLmRhdGEgLmRhdGEtZGVzYyBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuI3N0YXRzIC5kYXRhIC5kYXRhLXZhbCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4jc3RhdHMgLmJveC1ib3R0b20ge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogM3JlbSBhdXRvIDAgYXV0bztcbn1cbiNzdGF0cyAuYm94LWJvdHRvbSAuZGF0YSB7XG4gIGhlaWdodDogMjAwcHg7XG59XG4jc3RhdHMgLmJveC1ib3R0b20gLmRhdGEgaDUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuI3N0YXRzIC5ib3gtYm90dG9tIC5kYXRhIC5mbnQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stats',
          templateUrl: './stats.component.html',
          styleUrls: ['./stats.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Harsh Yadav\Desktop\Project\2.frontend\MuscleMedium\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map