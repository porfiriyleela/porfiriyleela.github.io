(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function() {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function() { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

            module.exports = "<div *ngIf=\"loaded\">\n  <div class=\"body\">\n    <div class=\"headline small\" [innerHtml]=\"'HEADLINE' | translate:currentData\">\n    </div>\n    <div class=\"daysLeftMsg\">\n      <div class=\"counterText leftSide\" [innerHtml]=\"'DAYS_LEFT.0' | translate:currentData\"></div>\n      <div class=\"counter\">\n        <!-- <img class=\"daysleftImg\" alt=\"Counter\" src=\"assets/images/counter_background@2x.png\"> -->\n        <div class=\"days-left\" [innerHtml]=\"'DAYS_LEFT.1' | translate:currentData\">\n        </div>\n        \n      </div>\n      <div class=\"counterText rightSide\" [innerHtml]=\"'DAYS_LEFT.2' | translate:currentData\"></div>\n    </div>\n    <div class=\"chartArea\">\n      <div class=\"headline small\" [innerHtml]=\"'CENTER'|translate:currentData\"></div>\n      <div class=\"chart\">\n\n        <app-chart [chartMetric]=\"currentData.pqpChart\"></app-chart>\n\n        <div>\n\n          <svg class=\"plus\" viewBox=\"0 0 100 100\">\n  \n            <line x1=\"32.5\" y1=\"50\" x2=\"67.5\" y2=\"50\" stroke-width=\"5\"></line>\n            <line x1=\"50\" y1=\"32.5\" x2=\"50\" y2=\"67.5\" stroke-width=\"5\"></line>\n          </svg>\n        </div>\n        <app-chart [chartMetric]=\"currentData.pqfChart\"></app-chart>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chart/chart.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chart/chart.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

            module.exports = "<div class=\"metrics\">\n    <div class=\"small\">{{this.chartMetric.metricDescription}}</div>\n    <div class=\"metrics_gauge\">\n        <highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"charts\"></highcharts-chart>\n    </div>\n    <p class=\"metrics_labels\">\n        <span class=\"metricType\">{{this.chartMetric.metric}}</span>\n        <span class=\"actual_large\">{{this.chartMetric.actualValue.toLocaleString()}}</span>\n        <span class=\"max\"> {{'of ' + this.chartMetric.maxValue.toLocaleString()}}</span>\n    </p>\n</div>"

/***/ }),

/***/ "./src/app/app-settings.service.ts":
/*!*****************************************!*\
  !*** ./src/app/app-settings.service.ts ***!
  \*****************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



            let AppSettings = class AppSettings {
                constructor() {
                    this.ENV = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
                }
            };
            AppSettings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AppSettings);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

            module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,600,600i,700,700i,800\");\n/* You can add global styles to this file, and also import other style files */\n/*: Primary: Color: Palette: */\n/*: Secondary: Color: Palette: */\n/*: Tertiary: Color: Palette: */\n/*: Supporting Color: Palette: */\n/*: Greyscale: Palette: */\n/*: Members: Only: Palette: */\n/* old color palette */\n/*: Secondary: Color: Palette: */\n/*: Primary: Color: Palette: */\n/*: Secondary: Color: Palette: */\n/*: Tertiary: Color: Palette: */\n/*: Supporting Color: Palette: */\n/*: Greyscale: Palette: */\n/*: Members: Only: Palette: */\n/* old color palette */\n/*: Secondary: Color: Palette: */\n/*: Primary: Color: Palette: */\n/*: Secondary: Color: Palette: */\n/*: Tertiary: Color: Palette: */\n/*: Supporting Color: Palette: */\n/*: Greyscale: Palette: */\n/*: Members: Only: Palette: */\n/* old color palette */\n/*: Secondary: Color: Palette: */\n* {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  font-weight: 100;\n  font-family: \"Open Sans\";\n  height: 100%;\n  background-color: transparent !important;\n}\nbody {\n  overflow-x: hidden;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative !important;\n  height: 100%;\n  min-height: 100vh;\n  width: 100%;\n  min-width: 100%;\n  background-repeat: no-repeat;\n}\n@media (max-width: 943px) {\n  body {\n    display: block;\n  }\n}\np {\n  margin: 0;\n}\n@media screen and (max-width: 575px) {\n  #rc-imageselect,\n.g-recaptcha {\n    transform: scale(0.77);\n    transform-origin: 0 0;\n  }\n\n  [title=recaptcha] {\n    transform: scale(0.77);\n    transform-origin: 0 0;\n  }\n}\nre-captcha {\n  min-height: 78px;\n}\nre-captcha div {\n  height: 78px;\n  overflow: hidden;\n  margin-left: -22px;\n  margin-right: -44px;\n  transform: scale(0.85);\n}\n:host {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.body {\n  box-align: center;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: green solid 0px;\n  width: 100%;\n  display: flex;\n  text-align: center;\n  border: black solid 0px;\n}\n.body .days-left {\n  position: relative;\n  padding: 0.2em 0.35em;\n  font-size: 1.5em;\n  border-radius: 2px;\n  background: #0033A0;\n  margin-left: 0.5em;\n  margin-right: 0.5em;\n  color: #ffffff;\n  width: 60px;\n}\n.body .days-left::after {\n  content: \" \";\n  position: absolute;\n  width: 100%;\n  border-top: 1px solid #0033A0;\n  left: 0;\n  right: 0;\n  top: 0.9em;\n  border-bottom: 1px solid rgba(0, 51, 160, 0.4);\n}\n.body .days-left::before {\n  content: \" \";\n  position: absolute;\n  width: 64px;\n  border-top: 4px solid #0033A0;\n  left: 0;\n  right: 0;\n  top: 0.8em;\n  border-bottom: 4px solid #002064;\n  border-bottom-style: solid;\n  border-bottom-width: 4px;\n  margin-left: -2px;\n  border-radius: 2px;\n  z-index: -1;\n}\n.body .chartArea {\n  font-family: \"Open Sans\", sans-serif;\n  justify-content: center;\n  margin-top: 3em !important;\n  border-top: 1px solid #e6e6e6;\n  border-bottom: 1px solid #e6e6e6;\n}\n.body .chartArea .chart {\n  justify-content: center;\n  text-align: center;\n}\n@media only screen and (min-width: 600px) {\n  .body .chartArea .chart {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n  }\n}\n.body .chartArea .chart .plus {\n  height: 35px;\n  stroke: white;\n  background: #0033A0;\n  border-radius: 50%;\n  vertical-align: middle;\n  white-space: nowrap;\n  margin-top: 0em;\n  margin-bottom: 0em;\n  border: red solid 0px;\n}\n@media screen and (min-width: 600px) {\n  .body .chartArea .chart .plus {\n    margin-top: 7em;\n    margin-right: 4em;\n    margin-left: 4em;\n  }\n}\n.headline {\n  font-family: \"Open Sans\", sans-serif;\n  text-align: center;\n  padding-top: 3em;\n  padding-bottom: 1em;\n}\n.small {\n  font-size: 0.8em;\n  font-family: \"Open Sans\", sans-serif;\n}\n.footer {\n  display: flex;\n  margin: 2em;\n  vertical-align: middle;\n  flex-wrap: wrap;\n}\n@media screen and (min-width: 600px) {\n  .footer {\n    border: red solid 0px;\n    flex-direction: row;\n  }\n}\n@media screen and (max-width: 600px) {\n  .footer {\n    border: green solid 0px;\n    justify-content: center;\n    text-align: center;\n  }\n}\n.center {\n  vertical-align: middle;\n  line-height: 2em;\n  border: green solid 0px;\n}\n.daysLeftMsg {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 18px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  text-align: right;\n  color: #000000;\n  margin-top: 28.5px;\n  display: flex;\n}\n.daysLeftMsg .counterText {\n  margin-top: 18px;\n}\n.daysLeftMsg .counterText.leftSide {\n  margin-right: 5px;\n}\n.daysLeftMsg .counterText.rightSide {\n  margin-left: 5px;\n}\n.counter {\n  font-family: \"Open Sans\", sans-serif;\n  position: relative;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n.counter .daysleftImg {\n  height: 61px;\n  width: 67px;\n}\n.counter .daysleftcount {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 36px;\n  font-weight: 400;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: center;\n  color: #b6b8dc;\n  display: flex;\n  align-content: center;\n}\n.counter .decorator {\n  width: 67px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  top: 23px;\n  height: 0;\n  border: solid 1px #0c2340;\n}\n.check {\n  margin-left: 0.5em;\n}\n/*: Secondary: Color: Palette: */\n/*: Tertiary: Color: Palette: */\n/*: Supporting Color: Palette: */\n/*: Greyscale: Palette: */\n/*: Members: Only: Palette: */\n/* old color palette */\n/*: Secondary: Color: Palette: */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXEFwcGxpY2F0aW9uc1xcV2lkZ2V0c1xcRnJvbnRFbmRcXHN0YXR1cy1tYXRjaC10cmFja2VyL25vZGVfbW9kdWxlc1xcbHl0LXN0eWxlc1xcX2FsbC5zY3NzIiwic3JjL2FwcC9DOlxcQXBwbGljYXRpb25zXFxXaWRnZXRzXFxGcm9udEVuZFxcc3RhdHVzLW1hdGNoLXRyYWNrZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQzpcXEFwcGxpY2F0aW9uc1xcV2lkZ2V0c1xcRnJvbnRFbmRcXHN0YXR1cy1tYXRjaC10cmFja2VyL25vZGVfbW9kdWxlc1xcbHl0LXN0eWxlc1xcYXNzZXRzXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL0M6XFxBcHBsaWNhdGlvbnNcXFdpZGdldHNcXEZyb250RW5kXFxzdGF0dXMtbWF0Y2gtdHJhY2tlci9ub2RlX21vZHVsZXNcXGx5dC1zdHlsZXNcXGFzc2V0c1xcc2Nzc1xcX2dsb2JhbC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxBcHBsaWNhdGlvbnNcXFdpZGdldHNcXEZyb250RW5kXFxzdGF0dXMtbWF0Y2gtdHJhY2tlci9ub2RlX21vZHVsZXNcXGx5dC1zdHlsZXNcXGFzc2V0c1xcc2Nzc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9DOlxcQXBwbGljYXRpb25zXFxXaWRnZXRzXFxGcm9udEVuZFxcc3RhdHVzLW1hdGNoLXRyYWNrZXIvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFRLGtHQUFBO0FDQVIsOEVBQUE7QUNjQSw4QkFBQTtBQU1BLGdDQUFBO0FBTUEsK0JBQUE7QUFRQSxnQ0FBQTtBQUtBLHlCQUFBO0FBVUEsNkJBQUE7QUFlQSxzQkFBQTtBQVNBLGdDQUFBO0FBM0RBLDhCQUFBO0FBTUEsZ0NBQUE7QUFNQSwrQkFBQTtBQVFBLGdDQUFBO0FBS0EseUJBQUE7QUFVQSw2QkFBQTtBQWVBLHNCQUFBO0FBU0EsZ0NBQUE7QUEzREEsOEJBQUE7QUFNQSxnQ0FBQTtBQU1BLCtCQUFBO0FBUUEsZ0NBQUE7QUFLQSx5QkFBQTtBQVVBLDZCQUFBO0FBZUEsc0JBQUE7QUFTQSxnQ0FBQTtBQ3ZFQTtFQUNFLHNCQUFBO0FDeUJGO0FEWEE7O0VBRUUsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtBQ2NGO0FEWEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ2NGO0FDcENFO0VGV0Y7SUFhSSxjQUFBO0VDZ0JGO0FBQ0Y7QURYQTtFQUNFLFNBQUE7QUNjRjtBRFhBO0VBQ0U7O0lBRUUsc0JBQUE7SUFDQSxxQkFBQTtFQ2NGOztFRFpBO0lBQ0Usc0JBQUE7SUFDQSxxQkFBQTtFQ2VGO0FBQ0Y7QURaQTtFQUNFLGdCQUFBO0FDY0Y7QURiRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ2VKO0FINUVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRytFSjtBRXJGQTtFQUdFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUZzRkY7QUVwRkU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CSk5nQjtFSU9oQixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0pzQlU7RUlyQlYsV0FBQTtBRnNGSjtBRXJGSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDhDQUFBO0FGdUZOO0FFcEZJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQywwQkFBQTtFQUNELHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUZzRk47QUVuRkU7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FGcUZKO0FFcEZJO0VBT0UsdUJBQUE7RUFDQSxrQkFBQTtBRmdGTjtBRXZGTTtFQURGO0lBRUksYUFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RUYwRk47QUFDRjtBRXJGTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJKekRZO0VJMERaLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtFQU9BLHFCQUFBO0FGZ0ZSO0FFdEZRO0VBVkY7SUFZSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFRndGUjtBQUNGO0FFdkVBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUYwRUY7QUV4RUE7RUFDRSxnQkFBQTtFQUNBLG9DQUFBO0FGMkVGO0FFekVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUY0RUY7QUUzRUU7RUFMRjtJQU1JLHFCQUFBO0lBQ0EsbUJBQUE7RUY4RUY7QUFDRjtBRTdFRTtFQVRGO0lBVUksdUJBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0VGZ0ZGO0FBQ0Y7QUU5RUE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUZpRkY7QUUvRUE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FGa0ZGO0FFakZFO0VBQ0UsZ0JBQUE7QUZtRko7QUVsRkk7RUFDRSxpQkFBQTtBRm9GTjtBRWxGSTtFQUNFLGdCQUFBO0FGb0ZOO0FFaEZBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FGbUZGO0FFbEZFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUZvRko7QUVsRkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBRm9GSjtBRWxGRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBRm9GSjtBRWpGQTtFQUNFLGtCQUFBO0FGb0ZGO0FFNURBLGdDQUFBO0FBTUEsK0JBQUE7QUFRQSxnQ0FBQTtBQUtBLHlCQUFBO0FBVUEsNkJBQUE7QUFPQSxzQkFBQTtBQVNBLGdDQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MjAwLDMwMCw0MDAsNjAwLDYwMGksNzAwLDcwMGksODAwJyk7XG5AaW1wb3J0ICdhc3NldHMvc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnYXNzZXRzL3Njc3MvbWl4aW5zJztcbkBpbXBvcnQgJ2Fzc2V0cy9zY3NzL2dsb2JhbCc7XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vLyBAaW1wb3J0ICcuL2Fzc2V0cy9mb250LWF3ZXNvbWUvc2Nzcy92YXJpYWJsZXMnO1xuLy8gQGltcG9ydCAnLi9hc3NldHMvZm9udC1hd2Vzb21lL3Njc3MvZm9udC1hd2Vzb21lLnNjc3MnO1xuLy8gJGZhLWZvbnQtcGF0aDogXCJ+Zm9udC1hd2Vzb21lL2ZvbnRzXCI7XG4vLyBAaW1wb3J0IFwifmZvbnQtYXdlc29tZS9zY3NzL2ZvbnQtYXdlc29tZVwiO1xuQGltcG9ydCAnfmx5dC1zdHlsZXMvYWxsJztcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiJGJwLTM2MDogMzYwcHg7XG4kYnAtNDAwOiA0MDBweDtcbiRicC00ODA6IDQ4MHB4O1xuJGJwLTU2MDogNTYwcHg7XG4kYnAtNjAwOiA2MDBweDtcbiRicC03MjA6IDcyMHB4O1xuJGJwLTg0MDogODQwcHg7XG4kYnAtOTYwOiA5NDRweDtcbiRicC0xMDgwOiAxMDgwcHg7XG4kYnAtMTI4MDogMTI4MHB4O1xuJGJwLTE0NDA6IDE0NDBweDtcbiRicC0xNjAwOiAxNjAwcHg7XG4kYnAtMTkyMDogMTkyMHB4O1xuXG4vKjogUHJpbWFyeTogQ29sb3I6IFBhbGV0dGU6ICovXG4kY29sb3ItdW5pdGVkLWJsdWU6ICMwMDMzQTA7XG4kY29sb3ItdW5pdGVkLW5hdnk6ICMwQzIzNDA7XG4kY29sb3ItdW5pdGVkLXB1cnBsZTogIzYyNDRCQjtcbiRjb2xvci11bml0ZWQtZ3JheTogI2Q0ZDRkMDtcblxuLyo6IFNlY29uZGFyeTogQ29sb3I6IFBhbGV0dGU6ICovXG4kY29sb3Itc2t5LWJsdWU6ICM2OUIzRTc7XG4kY29sb3ItZHVzazogI0I2QjhEQztcbiRjb2xvci1wb3dlci1wdXJwbGU6ICM1NzJDNUY7XG4kY29sb3ItcGxhdGludW0tZ3JheTogIzdDODc4RTtcblxuLyo6IFRlcnRpYXJ5OiBDb2xvcjogUGFsZXR0ZTogKi9cbiRjb2xvci1jaGFtcGFnbmU6ICNDRUI4ODg7XG4kY29sb3Itd2FybS1ncmF5OiAjNzk2RTY1O1xuJGNvbG9yLXNwaXJpdC1nb2xkOiAjRkZDNjU4O1xuJGNvbG9yLWRlbmltLWJsdWU6ICMwMDlDREU7XG4kY29sb3Itc3RlZWwtYmx1ZTogIzQxNzQ4RDtcbiRjb2xvci1wYWNpZmljLWJsdWU6ICMwMEIyQTk7XG5cbi8qOiBTdXBwb3J0aW5nIENvbG9yOiBQYWxldHRlOiAqL1xuJGNvbG9yLWVjb3NraWVzLWdyZWVuOiAjNDQ4ODNFO1xuJGNvbG9yLWJhc2ljZWNvbm9teS1vcmFuZ2U6ICNGMTYzMjE7XG4kY29sb3ItYWxlcnQtcmVkOiAjRDUwMDMyO1xuXG4vKjogR3JleXNjYWxlOiBQYWxldHRlOiAqL1xuJGNvbG9yLWJsYWNrOiAjMDAwMDAwO1xuJGNvbG9yLWdyYXktZGFya2VzdDogIzMzMztcbiRjb2xvci1ncmF5LWRhcms6ICM2NjY7XG4kY29sb3ItZ3JheTogIzk5OTtcbiRjb2xvci1ncmF5LWxpZ2h0OiAjY2NjO1xuJGNvbG9yLWdyYXktbGlnaHRlc3Q6ICNlNmU2ZTY7XG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4kY29sb3ItY2xlYXI6IHJnYmEoMCwwLDAsMCk7XG5cbi8qOiBNZW1iZXJzOiBPbmx5OiBQYWxldHRlOiAqL1xuJGNvbG9yLXByZW1pZXItc2lsdmVyOiAjQzFDNkM4O1xuJGNvbG9yLXByZW1pZXItZ29sZDogIzlGN0QyMztcbiRjb2xvci1wcmVtaWVyLXBsYXRpbnVtOiAjN0M4NDhBO1xuJGNvbG9yLXByZW1pZXItMWs6ICNENEQ0RDA7XG4kY29sb3ItZ2xvYmFsLXNlcnZpY2VzOiAjMjUyODJBO1xuXG5cblxuXG5cblxuXG5cblxuLyogb2xkIGNvbG9yIHBhbGV0dGUgKi9cbiRjb2xvci1jb29sLWdyYXk6ICNlOGU4ZTg7XG4kY29sb3ItZWdnc2hlbGw6ICNlZmVmZWY7XG4kY29sb3ItcGxhdGludW06ICM3Qzg3OEU7XG4kY29sb3Itc2t5LWJsdWU6ICM2OUIzRTc7XG4kY29sb3ItcHJlbWllci1ibHVlOiAjMDAyMjQ0O1xuJGNvbG9yLW1vZGVybi1nb2xkOiAjRURCNzJCO1xuJGNvbG9yLWdvbGRlbnJvZDogI2RmOTIxMDtcblxuLyo6IFNlY29uZGFyeTogQ29sb3I6IFBhbGV0dGU6ICovXG4kY29sb3ItdGFuOiAjQzVBQjg1O1xuJGNvbG9yLWtoYWtpOiAjNzk2RTY1O1xuJGNvbG9yLW9yYW5nZTogI0Y0NzkyMDtcbiRjb2xvci1ibGF6aW5nLXJlZDogI0VEMTJDRTtcbiRjb2xvci1saW1lOiAjN0FDMjRCO1xuJGNvbG9yLWdyZWVuOiAjNDQ4ODNFO1xuJGNvbG9yLXRlYWw6ICMwMDkzQjI7XG4kY29sb3ItY2VydWxlYW46ICMwMDlDREU7XG4kY29sb3ItZGFyay1jZXJ1bGVhbjogIzAwNkJBNjtcbiRjb2xvci1zbGF0ZTogIzUyN0Q4RjtcbiRjb2xvci1wcnVzc2lhbi1ibHVlOiAjMDAzMDU3O1xuJGNvbG9yLXBsdW06ICM1NzJDNUY7XG4kY29sb3ItbGluay1ibHVlOiAjMjE3MkJBO1xuJGNvbG9yLXBvd2Rlci1ibHVlOiAjRDBFNUY3O1xuJGNvbG9yLWVycm9yLXJlZDogI0NEMjAyQztcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4lcm93IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4lY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgQGluY2x1ZGUgbXEtbHQoJGJwLTk2MCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbio6bGluayB7fVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAjcmMtaW1hZ2VzZWxlY3QsXG4gIC5nLXJlY2FwdGNoYSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc3KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIH1cbiAgW3RpdGxlPXJlY2FwdGNoYV0ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43Nyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB9XG59XG5cbnJlLWNhcHRjaGEge1xuICBtaW4taGVpZ2h0OiA3OHB4O1xuICBkaXYge1xuICAgIGhlaWdodDogNzhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC00NHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gIH1cbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczoyMDAsMzAwLDQwMCw2MDAsNjAwaSw3MDAsNzAwaSw4MDBcIik7XG4vKjogUHJpbWFyeTogQ29sb3I6IFBhbGV0dGU6ICovXG4vKjogU2Vjb25kYXJ5OiBDb2xvcjogUGFsZXR0ZTogKi9cbi8qOiBUZXJ0aWFyeTogQ29sb3I6IFBhbGV0dGU6ICovXG4vKjogU3VwcG9ydGluZyBDb2xvcjogUGFsZXR0ZTogKi9cbi8qOiBHcmV5c2NhbGU6IFBhbGV0dGU6ICovXG4vKjogTWVtYmVyczogT25seTogUGFsZXR0ZTogKi9cbi8qIG9sZCBjb2xvciBwYWxldHRlICovXG4vKjogU2Vjb25kYXJ5OiBDb2xvcjogUGFsZXR0ZTogKi9cbi8qOiBQcmltYXJ5OiBDb2xvcjogUGFsZXR0ZTogKi9cbi8qOiBTZWNvbmRhcnk6IENvbG9yOiBQYWxldHRlOiAqL1xuLyo6IFRlcnRpYXJ5OiBDb2xvcjogUGFsZXR0ZTogKi9cbi8qOiBTdXBwb3J0aW5nIENvbG9yOiBQYWxldHRlOiAqL1xuLyo6IEdyZXlzY2FsZTogUGFsZXR0ZTogKi9cbi8qOiBNZW1iZXJzOiBPbmx5OiBQYWxldHRlOiAqL1xuLyogb2xkIGNvbG9yIHBhbGV0dGUgKi9cbi8qOiBTZWNvbmRhcnk6IENvbG9yOiBQYWxldHRlOiAqL1xuLyo6IFByaW1hcnk6IENvbG9yOiBQYWxldHRlOiAqL1xuLyo6IFNlY29uZGFyeTogQ29sb3I6IFBhbGV0dGU6ICovXG4vKjogVGVydGlhcnk6IENvbG9yOiBQYWxldHRlOiAqL1xuLyo6IFN1cHBvcnRpbmcgQ29sb3I6IFBhbGV0dGU6ICovXG4vKjogR3JleXNjYWxlOiBQYWxldHRlOiAqL1xuLyo6IE1lbWJlcnM6IE9ubHk6IFBhbGV0dGU6ICovXG4vKiBvbGQgY29sb3IgcGFsZXR0ZSAqL1xuLyo6IFNlY29uZGFyeTogQ29sb3I6IFBhbGV0dGU6ICovXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk0M3B4KSB7XG4gIGJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICNyYy1pbWFnZXNlbGVjdCxcbi5nLXJlY2FwdGNoYSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc3KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIH1cblxuICBbdGl0bGU9cmVjYXB0Y2hhXSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc3KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIH1cbn1cbnJlLWNhcHRjaGEge1xuICBtaW4taGVpZ2h0OiA3OHB4O1xufVxucmUtY2FwdGNoYSBkaXYge1xuICBoZWlnaHQ6IDc4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1sZWZ0OiAtMjJweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNDRweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ib2R5IHtcbiAgYm94LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IGdyZWVuIHNvbGlkIDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG59XG4uYm9keSAuZGF5cy1sZWZ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwLjJlbSAwLjM1ZW07XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZDogIzAwMzNBMDtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDYwcHg7XG59XG4uYm9keSAuZGF5cy1sZWZ0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMzNBMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMC45ZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDUxLCAxNjAsIDAuNCk7XG59XG4uYm9keSAuZGF5cy1sZWZ0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjRweDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwMDMzQTA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDAuOGVtO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwMjA2NDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgei1pbmRleDogLTE7XG59XG4uYm9keSAuY2hhcnRBcmVhIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xufVxuLmJvZHkgLmNoYXJ0QXJlYSAuY2hhcnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuYm9keSAuY2hhcnRBcmVhIC5jaGFydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5ib2R5IC5jaGFydEFyZWEgLmNoYXJ0IC5wbHVzIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBzdHJva2U6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDAzM0EwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgbWFyZ2luLWJvdHRvbTogMGVtO1xuICBib3JkZXI6IHJlZCBzb2xpZCAwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuYm9keSAuY2hhcnRBcmVhIC5jaGFydCAucGx1cyB7XG4gICAgbWFyZ2luLXRvcDogN2VtO1xuICAgIG1hcmdpbi1yaWdodDogNGVtO1xuICAgIG1hcmdpbi1sZWZ0OiA0ZW07XG4gIH1cbn1cblxuLmhlYWRsaW5lIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDNlbTtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmZvb3RlciB7XG4gICAgYm9yZGVyOiByZWQgc29saWQgMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5mb290ZXIge1xuICAgIGJvcmRlcjogZ3JlZW4gc29saWQgMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uY2VudGVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgYm9yZGVyOiBncmVlbiBzb2xpZCAwcHg7XG59XG5cbi5kYXlzTGVmdE1zZyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IDI4LjVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kYXlzTGVmdE1zZyAuY291bnRlclRleHQge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuLmRheXNMZWZ0TXNnIC5jb3VudGVyVGV4dC5sZWZ0U2lkZSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmRheXNMZWZ0TXNnIC5jb3VudGVyVGV4dC5yaWdodFNpZGUge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY291bnRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY291bnRlciAuZGF5c2xlZnRJbWcge1xuICBoZWlnaHQ6IDYxcHg7XG4gIHdpZHRoOiA2N3B4O1xufVxuLmNvdW50ZXIgLmRheXNsZWZ0Y291bnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjM2O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYjZiOGRjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4uY291bnRlciAuZGVjb3JhdG9yIHtcbiAgd2lkdGg6IDY3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMjNweDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjMGMyMzQwO1xufVxuXG4uY2hlY2sge1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbi8qOiBTZWNvbmRhcnk6IENvbG9yOiBQYWxldHRlOiAqL1xuLyo6IFRlcnRpYXJ5OiBDb2xvcjogUGFsZXR0ZTogKi9cbi8qOiBTdXBwb3J0aW5nIENvbG9yOiBQYWxldHRlOiAqL1xuLyo6IEdyZXlzY2FsZTogUGFsZXR0ZTogKi9cbi8qOiBNZW1iZXJzOiBPbmx5OiBQYWxldHRlOiAqL1xuLyogb2xkIGNvbG9yIHBhbGV0dGUgKi9cbi8qOiBTZWNvbmRhcnk6IENvbG9yOiBQYWxldHRlOiAqLyIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AbWl4aW4gbXEtYnQoJGJyZWFrcG9pbnQxLCAkYnJlYWtwb2ludDIpIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skYnJlYWtwb2ludDF9KSBhbmQgKG1heC13aWR0aDogI3skYnJlYWtwb2ludDIgLSAxcHh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1xLWd0KCRicmVha3BvaW50KSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7JGJyZWFrcG9pbnR9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1xLWx0KCRicmVha3BvaW50KSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRicmVha3BvaW50IC0gMX0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AZnVuY3Rpb24gZW0oJHBpeGVscywgJGNvbnRleHQ6ICRiYXNlLWNvbnRleHQpIHtcbiAgQHJldHVybiAoJHBpeGVscyAvICRjb250ZXh0KSAqIDFlbTtcbn0gLy8gQWRkIHBlcmNlbnRhZ2Ugb2Ygd2hpdGUgdG8gYSBjb2xvclxuQGZ1bmN0aW9uIHRpbnQoJGNvbG9yLCAkcGVyY2VudDogMzcuNSkge1xuICBAcmV0dXJuIG1peCgkY29sb3Itd2hpdGUsICRjb2xvciwgJHBlcmNlbnQpO1xufSAvLyBBZGQgcGVyY2VudGFnZSBvZiBibGFjayB0byBhIGNvbG9yXG5AZnVuY3Rpb24gc2hhZGUoJGNvbG9yLCAkcGVyY2VudDogMzcuNSkge1xuICBAcmV0dXJuIG1peCgkY29sb3ItYmxhY2ssICRjb2xvciwgJHBlcmNlbnQpO1xufVxuIiwiQGltcG9ydCBcIi4uL3N0eWxlc1wiO1xyXG4kbW9iaWxld2lkdGg6IDYwMHB4O1xyXG4kYm9yZGVycHg6IDBweDtcclxuLmJvZHkge1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG4gIGJveC1hbGlnbjogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IGdyZWVuIHNvbGlkICRib3JkZXJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IGJsYWNrIHNvbGlkICRib3JkZXJweDtcclxuXHJcbiAgLmRheXMtbGVmdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAuMmVtIC4zNWVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci11bml0ZWQtYmx1ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAuNWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yLXVuaXRlZC1ibHVlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAuOWVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY29sb3ItdW5pdGVkLWJsdWUsIC40KTtcclxuICAgIH1cclxuXHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICBib3JkZXItdG9wOiA0cHggc29saWQgJGNvbG9yLXVuaXRlZC1ibHVlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAuOGVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgc2hhZGUoJGNvbG9yLXVuaXRlZC1ibHVlKTtcclxuICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiA0cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2hhcnRBcmVhIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0aW50KCRjb2xvci1ncmF5LCA3NSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdGludCgkY29sb3ItZ3JheSwgNzUpO1xyXG4gICAgLmNoYXJ0IHtcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbW9iaWxld2lkdGgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIC5wbHVzIHtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7IFxyXG4gICAgICAgIHN0cm9rZTogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDokY29sb3ItdW5pdGVkLWJsdWU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7IFxyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAvL2ZvciBtb2JpbGVcclxuICAgICAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMGVtO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtb2JpbGV3aWR0aCkge1xyXG4gICAgICAgICAgLy9Gb3IgZGVza3RvcFxyXG4gICAgICAgICAgbWFyZ2luLXRvcDogN2VtO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0ZW07XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3JkZXI6IHJlZCBzb2xpZCAkYm9yZGVycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gLnZlcnRpY2FsTGluZXtcclxuLy8gICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHRpbnQoJGNvbG9yLWdyYXksNzUpO1xyXG5cclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgei1pbmRleDogLTE7XHJcbi8vICAgdG9wOiAwO1xyXG4vLyAgIGJvdHRvbTogMDtcclxuLy8gICBsZWZ0OiAxNiU7XHJcbi8vICAgLy9ib3JkZXItbGVmdDogMnB4IGRvdHRlZCAjZmYwMDAwO1xyXG4vLyAgIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbi8vIH1cclxuLmhlYWRsaW5lIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDNlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG59XHJcbi5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4uZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRtb2JpbGV3aWR0aCkge1xyXG4gICAgYm9yZGVyOiByZWQgc29saWQgJGJvcmRlcnB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZXdpZHRoKSB7XHJcbiAgICBib3JkZXI6IGdyZWVuIHNvbGlkICRib3JkZXJweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4uY2VudGVyIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgYm9yZGVyOiBncmVlbiBzb2xpZCAkYm9yZGVycHg7XHJcbn1cclxuLmRheXNMZWZ0TXNnIHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW4tdG9wOiAyOC41cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAuY291bnRlclRleHQge1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICYubGVmdFNpZGUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgICYucmlnaHRTaWRlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmNvdW50ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAuZGF5c2xlZnRJbWcge1xyXG4gICAgaGVpZ2h0OiA2MXB4O1xyXG4gICAgd2lkdGg6IDY3cHg7XHJcbiAgfVxyXG4gIC5kYXlzbGVmdGNvdW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zNjtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2I2YjhkYztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5kZWNvcmF0b3Ige1xyXG4gICAgd2lkdGg6IDY3cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMjNweDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICMwYzIzNDA7XHJcbiAgfVxyXG59XHJcbi5jaGVjayB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG59XHJcbi8vLyBTbGlnaHRseSBsaWdodGVuIGEgY29sb3JcclxuLy8vIEBhY2Nlc3MgcHVibGljXHJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgLSBjb2xvciB0byB0aW50XHJcbi8vLyBAcGFyYW0ge051bWJlcn0gJHBlcmNlbnRhZ2UgLSBwZXJjZW50YWdlIG9mIGAkY29sb3JgIGluIHJldHVybmVkIGNvbG9yXHJcbi8vLyBAcmV0dXJuIHtDb2xvcn1cclxuQGZ1bmN0aW9uIHRpbnQoJGNvbG9yLCAkcGVyY2VudGFnZSkge1xyXG4gIEByZXR1cm4gbWl4KHdoaXRlLCAkY29sb3IsICRwZXJjZW50YWdlKTtcclxufVxyXG5cclxuLy8vIFNsaWdodGx5IGRhcmtlbiBhIGNvbG9yXHJcbi8vLyBAYWNjZXNzIHB1YmxpY1xyXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gc2hhZGVcclxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3JcclxuLy8vIEByZXR1cm4ge0NvbG9yfVxyXG5AZnVuY3Rpb24gc2hhZGUoJGNvbG9yLCAkcGVyY2VudGFnZSkge1xyXG4gIEByZXR1cm4gbWl4KGJsYWNrLCAkY29sb3IsICRwZXJjZW50YWdlKTtcclxufVxyXG5cclxuJGNvbG9yLXVuaXRlZC1ibHVlOiAjMDAzM2EwO1xyXG4kY29sb3ItdW5pdGVkLW5hdnk6ICMwYzIzNDA7XHJcbiRjb2xvci11bml0ZWQtcHVycGxlOiAjNjI0NGJiO1xyXG4kY29sb3ItdW5pdGVkLWdyYXk6ICNkNGQ0ZDA7XHJcbi8qOiBTZWNvbmRhcnk6IENvbG9yOiBQYWxldHRlOiAqL1xyXG5cclxuJGNvbG9yLXNreS1ibHVlOiAjNjliM2U3O1xyXG4kY29sb3ItZHVzazogI2I2YjhkYztcclxuJGNvbG9yLXBvd2VyLXB1cnBsZTogIzU3MmM1ZjtcclxuJGNvbG9yLXBsYXRpbnVtLWdyYXk6ICM3Yzg3OGU7XHJcbi8qOiBUZXJ0aWFyeTogQ29sb3I6IFBhbGV0dGU6ICovXHJcblxyXG4kY29sb3ItY2hhbXBhZ25lOiAjY2ViODg4O1xyXG4kY29sb3Itd2FybS1ncmF5OiAjNzk2ZTY1O1xyXG4kY29sb3Itc3Bpcml0LWdvbGQ6ICNmZmM2NTg7XHJcbiRjb2xvci1kZW5pbS1ibHVlOiAjMDA5Y2RlO1xyXG4kY29sb3Itc3RlZWwtYmx1ZTogIzQxNzQ4ZDtcclxuJGNvbG9yLXBhY2lmaWMtYmx1ZTogIzAwYjJhOTtcclxuLyo6IFN1cHBvcnRpbmcgQ29sb3I6IFBhbGV0dGU6ICovXHJcblxyXG4kY29sb3ItZWNvc2tpZXMtZ3JlZW46ICM0NDg4M2U7XHJcbiRjb2xvci1iYXNpY2Vjb25vbXktb3JhbmdlOiAjZjE2MzIxO1xyXG4kY29sb3ItYWxlcnQtcmVkOiAjZDUwMDMyO1xyXG4vKjogR3JleXNjYWxlOiBQYWxldHRlOiAqL1xyXG5cclxuJGNvbG9yLWJsYWNrOiAjMDAwMDAwO1xyXG4kY29sb3ItZ3JheS1kYXJrZXN0OiAjMzMzO1xyXG4kY29sb3ItZ3JheS1kYXJrOiAjNjY2O1xyXG4kY29sb3ItZ3JheTogIzk5OTtcclxuJGNvbG9yLWdyYXktbGlnaHQ6ICNjY2M7XHJcbiRjb2xvci1ncmF5LWxpZ2h0ZXN0OiAjZTZlNmU2O1xyXG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XHJcbiRjb2xvci1jbGVhcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuLyo6IE1lbWJlcnM6IE9ubHk6IFBhbGV0dGU6ICovXHJcblxyXG4kY29sb3ItcHJlbWllci1zaWx2ZXI6ICNjMWM2Yzg7XHJcbiRjb2xvci1wcmVtaWVyLWdvbGQ6ICM5ZjdkMjM7XHJcbiRjb2xvci1wcmVtaWVyLXBsYXRpbnVtOiAjN2M4NDhhO1xyXG4kY29sb3ItcHJlbWllci0xazogI2Q0ZDRkMDtcclxuJGNvbG9yLWdsb2JhbC1zZXJ2aWNlczogIzI1MjgyYTtcclxuLyogb2xkIGNvbG9yIHBhbGV0dGUgKi9cclxuXHJcbiRjb2xvci1jb29sLWdyYXk6ICNlOGU4ZTg7XHJcbiRjb2xvci1lZ2dzaGVsbDogI2VmZWZlZjtcclxuJGNvbG9yLXBsYXRpbnVtOiAjN2M4NzhlO1xyXG4kY29sb3Itc2t5LWJsdWU6ICM2OWIzZTc7XHJcbiRjb2xvci1wcmVtaWVyLWJsdWU6ICMwMDIyNDQ7XHJcbiRjb2xvci1tb2Rlcm4tZ29sZDogI2VkYjcyYjtcclxuJGNvbG9yLWdvbGRlbnJvZDogI2RmOTIxMDtcclxuLyo6IFNlY29uZGFyeTogQ29sb3I6IFBhbGV0dGU6ICovXHJcblxyXG4kY29sb3ItdGFuOiAjYzVhYjg1O1xyXG4kY29sb3Ita2hha2k6ICM3OTZlNjU7XHJcbiRjb2xvci1vcmFuZ2U6ICNmNDc5MjA7XHJcbiRjb2xvci1ibGF6aW5nLXJlZDogI2VkMTJjZTtcclxuJGNvbG9yLWxpbWU6ICM3YWMyNGI7XHJcbiRjb2xvci1ncmVlbjogIzQ0ODgzZTtcclxuJGNvbG9yLXRlYWw6ICMwMDkzYjI7XHJcbiRjb2xvci1jZXJ1bGVhbjogIzAwOWNkZTtcclxuJGNvbG9yLWRhcmstY2VydWxlYW46ICMwMDZiYTY7XHJcbiRjb2xvci1zbGF0ZTogIzUyN2Q4ZjtcclxuJGNvbG9yLXBydXNzaWFuLWJsdWU6ICMwMDMwNTc7XHJcbiRjb2xvci1wbHVtOiAjNTcyYzVmO1xyXG4kY29sb3ItbGluay1ibHVlOiAjMjE3MmJhO1xyXG4kY29sb3ItcG93ZGVyLWJsdWU6ICNkMGU1Zjc7XHJcbiRjb2xvci1lcnJvci1yZWQ6ICNjZDIwMmM7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _models_ChartMetrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/ChartMetrics */ "./src/app/models/ChartMetrics.ts");
/* harmony import */ var _models_StatusMatchWidgetData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/StatusMatchWidgetData */ "./src/app/models/StatusMatchWidgetData.ts");
/* harmony import */ var _lyt_postman_listener_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lyt-postman-listener.service */ "./src/app/lyt-postman-listener.service.ts");
/* harmony import */ var _offer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer.service */ "./src/app/offer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








            let AppComponent = class AppComponent {
                constructor(translate, lytPostmanListenerService, offerSvc) {
                    this.lytPostmanListenerService = lytPostmanListenerService;
                    this.offerSvc = offerSvc;
                    this.loaded = false;
                    this.title = 'pprCorporateTrackerApp';
                    // this language will be used as a fallback when a translation isn't found in the current language
                    translate.setDefaultLang('en');
                    // the lang to use, if the lang isn't available, it will use the current loader to get them
                    translate.use('en');
                }
                ngAfterContentInit() {
                    this.lytPostmanListenerService.getPromotionCode.subscribe((data) => {
                        this.promoCode = data.promoCode;
                    });
                    this.lytPostmanListenerService.getAuthToken.subscribe((data) => {
                        this.authToken = data.authToken;
                        this.userid = data.userid;
                        var response = this.offerSvc.getActivities(this.authToken, this.promoCode, this.userid);
                        response.then((data) => {
                            console.log("Data in app component" + data + data.daysToExpire);
                            this.currentData = new _models_StatusMatchWidgetData__WEBPACK_IMPORTED_MODULE_4__["StatusMatchWidgetData"]();
                            this.currentData.pqpChart = new _models_ChartMetrics__WEBPACK_IMPORTED_MODULE_3__["ChartMetrics"](data.pqpChart.actualValue, data.pqpChart.maxValue, "PQP");
                            this.currentData.pqfChart = new _models_ChartMetrics__WEBPACK_IMPORTED_MODULE_3__["ChartMetrics"](data.pqfChart.actualValue, data.pqfChart.maxValue, "PQF");
                            this.currentData.daysToExpire = data.daysToExpire;
                            this.currentData.startDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(data.startDate, 'MMMM d, yyyy', 'en-US');
                            this.currentData.endDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(data.endDate, 'MMMM d, yyyy', 'en-US');
                            this.currentData.status = data.status;
                            this.loaded = true;
                        });
                        console.log("PromoCode Appcomponent:" + this.promoCode);
                    });
                }
            };
            AppComponent.ctorParameters = () => [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
                { type: _lyt_postman_listener_service__WEBPACK_IMPORTED_MODULE_5__["LytPostmanListenerService"] },
                { type: _offer_service__WEBPACK_IMPORTED_MODULE_6__["OfferService"] }
            ];
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
                    styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
                })
            ], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var _offer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./offer.service */ "./src/app/offer.service.ts");
/* harmony import */ var _lyt_postman_listener_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lyt-postman-listener.service */ "./src/app/lyt-postman-listener.service.ts");












            // AoT requires an exported function for factories
            function HttpLoaderFactory(http) {
                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, 'assets/il8n/', '.json');
            }
            let AppModule = class AppModule {
            };
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                        _chart_chart_component__WEBPACK_IMPORTED_MODULE_9__["ChartComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                        _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                        highcharts_angular__WEBPACK_IMPORTED_MODULE_5__["HighchartsChartModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                            loader: {
                                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                                useFactory: HttpLoaderFactory,
                                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                            }
                        })
                    ],
                    providers: [_offer_service__WEBPACK_IMPORTED_MODULE_10__["OfferService"], _lyt_postman_listener_service__WEBPACK_IMPORTED_MODULE_11__["LytPostmanListenerService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
                })
            ], AppModule);



/***/ }),

/***/ "./src/app/chart/chart.component.scss":
/*!********************************************!*\
  !*** ./src/app/chart/chart.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

            module.exports = ".metrics {\n  font-family: \"Open Sans\", sans-serif;\n  border: green solid 0px;\n  height: 170px;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  text-align: center;\n}\n.metrics_labels {\n  position: relative;\n  bottom: 8.5em;\n  border: green solid 0px;\n}\n.metrics_gauge {\n  display: inline-block;\n}\n.metricType, .actual, .max {\n  font-family: \"Open Sans\", sans-serif;\n  border: red solid 0px;\n  display: block;\n  font-size: 0.9em;\n}\n.metricType_large, .actual_large, .max_large {\n  font-size: 1.5em;\n}\n.small {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnQvQzpcXEFwcGxpY2F0aW9uc1xcV2lkZ2V0c1xcRnJvbnRFbmRcXHN0YXR1cy1tYXRjaC10cmFja2VyL3NyY1xcYXBwXFxjaGFydFxcY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRENJO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7QUNBSjtBREVJO0VBQ0kscUJBQUE7QUNBUjtBRElBO0VBQ0ksb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0RKO0FERUk7RUFDSSxnQkFBQTtBQ0FSO0FESUE7RUFDSSxvQ0FBQTtFQUNBLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRib3JkZXJweDowcHg7XHJcbi5tZXRyaWNze1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXI6IGdyZWVuIHNvbGlkICRib3JkZXJweDsgXHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICZfbGFiZWxze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiA4LjVlbTtcclxuICBcclxuICAgIGJvcmRlcjogZ3JlZW4gc29saWQgJGJvcmRlcnB4OyAgIFxyXG4gICAgfVxyXG4gICAgJl9nYXVnZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4ubWV0cmljVHlwZSwuYWN0dWFsLC5tYXh7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlcjogcmVkIHNvbGlkICRib3JkZXJweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgJl9sYXJnZXtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc21hbGx7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxufSIsIi5tZXRyaWNzIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogZ3JlZW4gc29saWQgMHB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tZXRyaWNzX2xhYmVscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA4LjVlbTtcbiAgYm9yZGVyOiBncmVlbiBzb2xpZCAwcHg7XG59XG4ubWV0cmljc19nYXVnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1ldHJpY1R5cGUsIC5hY3R1YWwsIC5tYXgge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiByZWQgc29saWQgMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbi5tZXRyaWNUeXBlX2xhcmdlLCAuYWN0dWFsX2xhcmdlLCAubWF4X2xhcmdlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/solid-gauge */ "./node_modules/highcharts/modules/solid-gauge.js");
/* harmony import */ var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);





            highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
            highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
            let ChartComponent = class ChartComponent {
                constructor() {
                    this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
                }
                ngOnInit() {
                    this.charts = this.buildChartOptions(this.chartMetric.actualValue, this.chartMetric.maxValue, this.chartMetric.color);
                }
                buildChartOptions(value, maxValue, color) {
                    var data = {
                        "label": "PQP",
                        "total": value,
                        "milestone": maxValue,
                        "isCompleted": value >= maxValue,
                        "currencies": [
                            {
                                "id": "pqp",
                                "label": "PQP",
                                "value": value
                            }
                        ]
                    }
                    var graph_rest = Math.max(maxValue, value) - value;
                    var dialCurrencies = data.currencies.map(a => a.value);
                    dialCurrencies.push(graph_rest);
                    return {
                        chart: {
                            type: "pie",
                            height: "180",
                            width: "180",
                            margin: 0,
                            backgroundColor: ''
                        },

                        title: null,
                        tooltip: { enabled: false, },
                        credits: { enabled: false, },
                        exporting: { enabled: false, },
                        colors: [color, "#D7D7D4"],
                        plotOptions: {
                            pie: {
                                startAngle: -145,
                                endAngle: 145,
                                center: ['50%', '50%'],
                                size: '100%'
                            },
                            series: {
                                allowPointSelect: false,
                                dataLabels: { enabled: false },
                                states: {
                                    hover: { enabled: false },
                                    inactive: { opacity: 1 },
                                },
                                enableMouseTracking: false
                            }
                        },
                        series: [
                            {
                                type: 'pie',
                                innerSize: '90%',
                                data: dialCurrencies
                            }
                        ]
                    }
                }
            };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ChartComponent.prototype, "chartMetric", void 0);
            ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-chart',
                    template: __webpack_require__(/*! raw-loader!./chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/chart/chart.component.html"),
                    styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/chart/chart.component.scss")]
                })
            ], ChartComponent);



/***/ }),

/***/ "./src/app/lyt-postman-listener.service.ts":
/*!*************************************************!*\
  !*** ./src/app/lyt-postman-listener.service.ts ***!
  \*************************************************/
/*! exports provided: LytPostmanListenerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LytPostmanListenerService", function() { return LytPostmanListenerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



            let LytPostmanListenerService = class LytPostmanListenerService {
                constructor() {
                    this._promotionCode = null;
                    this._userid = null;
                    this._promotionCodeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.getPromotionCode = this._promotionCodeSubject.asObservable();
                    this._authToken = null;
                    this._authTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.getAuthToken = this._authTokenSubject.asObservable();
                    this._data = null;
                    this.handleAuthorized = (msg) => {
                        console.log('[receive]', '[authorized]', msg);

                        const data = msg.data;
                        if (data.access_token !== undefined)
                        {
                            this._authToken = {
                                authToken: data.access_token
                            };
                            this._authTokenSubject.next(this._authToken);
                        }
                        if (data.userid != undefined)
                        {
                            //alert("Hello");
                            ////debugger;
                            this._userid = {
                                userid: data.user_id
                            };
                        }
                    };
                    this.handleReady = (msg) => {
                        console.log('[ready]', '[data]', msg);
                        //alert('Hiiii');
                        //debugger;
                        const data = JSON.parse(msg.data.data);
                        console.log("promoCode :" + data.promoCode);
                        if (data.promoCode !== undefined) {
                            this._promotionCode = {
                                promoCode: data.promoCode
                            };
                            this._promotionCodeSubject.next(this._promotionCode);
                        }
                    };
                    console.log("Lyt initiation");
                    //Comment lines below to run with Mock data without backend
                    this.lytPostmanListener = lytPostmanListener;
                    this.ready();
                }
                ready() {
                    this.lytPostmanListener.ready();
                    this.lytPostmanListener.receive('ready', this.handleReady);
                    this.lytPostmanListener.receive('authorized', this.handleAuthorized);
                }
            };
            LytPostmanListenerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LytPostmanListenerService);



/***/ }),

/***/ "./src/app/models/ChartMetrics.ts":
/*!****************************************!*\
  !*** ./src/app/models/ChartMetrics.ts ***!
  \****************************************/
/*! exports provided: ChartMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMetrics", function() { return ChartMetrics; });
            class ChartMetrics {
                constructor(_actualValue, _maxValue, _chartType) {
                    this.metric = _chartType;
                    this.actualValue = _actualValue;
                    this.maxValue = _maxValue;
                    if (_chartType == "PQP") {
                        this.color = "#276ef1";
                        this.metricDescription = "Premier Qualifying Points";
                        console.log(this.color);
                    }
                    else if (_chartType == "PQF") {
                        console.log(this.color);
                        this.color = "#551E5F";
                        this.metricDescription = "Premier Qualifying Flights";
                    }
                }
            }
            ChartMetrics.ctorParameters = () => [
                null,
                null,
                null
            ];


/***/ }),

/***/ "./src/app/models/StatusMatchWidgetData.ts":
/*!*************************************************!*\
  !*** ./src/app/models/StatusMatchWidgetData.ts ***!
  \*************************************************/
/*! exports provided: StatusMatchWidgetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusMatchWidgetData", function() { return StatusMatchWidgetData; });
            class StatusMatchWidgetData {
            }


/***/ }),

/***/ "./src/app/offer.service.ts":
/*!**********************************!*\
  !*** ./src/app/offer.service.ts ***!
  \**********************************/
/*! exports provided: OfferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferService", function() { return OfferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-settings.service */ "./src/app/app-settings.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_StatusMatchWidgetData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/StatusMatchWidgetData */ "./src/app/models/StatusMatchWidgetData.ts");





            let OfferService = class OfferService {
                constructor(appSettings, http) {
                    this.appSettings = appSettings;
                    this.http = http;
                    this.api_url = this.appSettings.ENV.API_URL;
                    console.log(this.appSettings.ENV.API_URL);
                }
                headers() {
                    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        'Content-Type': 'application/json'
                    });
                }
                getActivities(eid, promoCode,userid) {
                    //alert('Hi');
                    const headers = this.headers
                    var mpid = eval('lytPostmanListener.userid');
                    //debugger;
                    this.currentData = new _models_StatusMatchWidgetData__WEBPACK_IMPORTED_MODULE_4__["StatusMatchWidgetData"]();
                    return this.http.get("/widgets/api/StatusMatch/activity/" + promoCode + "?appId=" + '' + "&apiKey=" + '' + "&eid=" + eid + "&mp_id=" + mpid, { headers: headers }).toPromise();
                }
            };
            OfferService.ctorParameters = () => [
                { type: _app_settings_service__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ];
            OfferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], OfferService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            const environment = {
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


 /***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




            if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
                .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

            module.exports = __webpack_require__(/*! C:\Applications\Widgets\FrontEnd\status-match-tracker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map