webpackJsonp([1,4],{"/fcW":function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="/fcW"},0:function(e,t,n){e.exports=n("x35b")},"1A80":function(e,t,n){"use strict";function r(e){return o._12(0,[(e()(),o._13(0,null,null,1,"h1",[],null,null,null,null,null)),(e()(),o._14(null,["Issue 9"])),(e()(),o._14(null,["\n\n"])),(e()(),o._13(0,null,null,1,"h2",[],null,null,null,null,null)),(e()(),o._14(null,["(View test in console)"])),(e()(),o._14(null,["\n"]))],null,null)}function _(e){return o._12(0,[(e()(),o._13(0,null,null,1,"app-root",[],null,null,null,r,u)),o._15(49152,null,0,a.a,[s.a],null,null)],null,null)}var i=n("Ni5f"),o=n("3j3K"),a=n("YWx4"),s=n("0E+E");n.d(t,"a",function(){return h});var l=[i.a],u=o._11({encapsulation:0,styles:l,data:{}}),h=o._16("app-root",a.a,_,{},{},[])},Iksp:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(){function e(){}return e}()},Ni5f:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=[""]},YWx4:function(e,t,n){"use strict";var r=n("H/0k");n.d(t,"a",function(){return _});var _=function(){function e(e){var t=this;this.afoDatabase=e,this.urlPath="/issues/9/9-4",this.query(this.urlPath,"READ").subscribe(function(e){console.log("\n\nQueries matching read:",e),t.query(t.urlPath,"NOT_READ").subscribe(function(e){console.log("\n\nQueries matching not read:",e)})})}return e.prototype.query=function(e,t){return this.afoDatabase.list(e,{query:{orderByChild:"categoryId",equalTo:t,limitToFirst:15}})},e.ctorParameters=function(){return[{type:r.a}]},e}()},kZql:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={production:!0}},kke6:function(e,t,n){"use strict";var r=n("3j3K"),_=n("Iksp"),i=n("lRFM"),o=n("rC4q"),a=n("9zt1"),s=n("2Je8"),l=n("Qbdm"),u=n("1A80"),h=n("qPn+"),c=n("VMAo"),p=n("GK4t"),f=n("0E+E"),b=n("4gHJ");n.d(t,"a",function(){return d});var g=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(e){function t(t){return e.call(this,t,[u.a],[u.a])||this}return g(t,e),Object.defineProperty(t.prototype,"_FirebaseApp_14",{get:function(){return null==this.__FirebaseApp_14&&(this.__FirebaseApp_14=h.a(this._FirebaseAppConfigToken_12,this._FirebaseAppName_13)),this.__FirebaseApp_14},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_AngularFireDatabase_15",{get:function(){return null==this.__AngularFireDatabase_15&&(this.__AngularFireDatabase_15=a.a(this._FirebaseApp_14)),this.__AngularFireDatabase_15},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_LocalForageToken_16",{get:function(){return null==this.__LocalForageToken_16&&(this.__LocalForageToken_16=c.a()),this.__LocalForageToken_16},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_LocalUpdateService_17",{get:function(){return null==this.__LocalUpdateService_17&&(this.__LocalUpdateService_17=p.a(this.parent.get(p.b,null),this._LocalForageToken_16)),this.__LocalUpdateService_17},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_AngularFireOfflineDatabase_18",{get:function(){return null==this.__AngularFireOfflineDatabase_18&&(this.__AngularFireOfflineDatabase_18=o.a(this.parent.get(f.a,null),this._AngularFireDatabase_15,this._LocalForageToken_16,this._LocalUpdateService_17)),this.__AngularFireOfflineDatabase_18},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_LOCALE_ID_19",{get:function(){return null==this.__LOCALE_ID_19&&(this.__LOCALE_ID_19=r.b(this.parent.get(r.c,null))),this.__LOCALE_ID_19},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_20",{get:function(){return null==this.__NgLocalization_20&&(this.__NgLocalization_20=new s.a(this._LOCALE_ID_19)),this.__NgLocalization_20},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Compiler_21",{get:function(){return null==this.__Compiler_21&&(this.__Compiler_21=new r.d),this.__Compiler_21},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_22",{get:function(){return null==this.__APP_ID_22&&(this.__APP_ID_22=r.e()),this.__APP_ID_22},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_23",{get:function(){return null==this.__IterableDiffers_23&&(this.__IterableDiffers_23=r.f()),this.__IterableDiffers_23},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_24",{get:function(){return null==this.__KeyValueDiffers_24&&(this.__KeyValueDiffers_24=r.g()),this.__KeyValueDiffers_24},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_25",{get:function(){return null==this.__DomSanitizer_25&&(this.__DomSanitizer_25=new l.b(this.parent.get(l.c))),this.__DomSanitizer_25},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_26",{get:function(){return null==this.__Sanitizer_26&&(this.__Sanitizer_26=this._DomSanitizer_25),this.__Sanitizer_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_27",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_27&&(this.__HAMMER_GESTURE_CONFIG_27=new l.d),this.__HAMMER_GESTURE_CONFIG_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_28",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_28&&(this.__EVENT_MANAGER_PLUGINS_28=[new l.e(this.parent.get(l.c)),new l.f(this.parent.get(l.c)),new l.g(this.parent.get(l.c),this._HAMMER_GESTURE_CONFIG_27)]),this.__EVENT_MANAGER_PLUGINS_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_29",{get:function(){return null==this.__EventManager_29&&(this.__EventManager_29=new l.h(this._EVENT_MANAGER_PLUGINS_28,this.parent.get(r.h))),this.__EventManager_29},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomSharedStylesHost_30",{get:function(){return null==this.__ɵDomSharedStylesHost_30&&(this.__ɵDomSharedStylesHost_30=new l.i(this.parent.get(l.c))),this.__ɵDomSharedStylesHost_30},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomRendererFactory2_31",{get:function(){return null==this.__ɵDomRendererFactory2_31&&(this.__ɵDomRendererFactory2_31=new l.j(this._EventManager_29,this._ɵDomSharedStylesHost_30)),this.__ɵDomRendererFactory2_31},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RendererFactory2_32",{get:function(){return null==this.__RendererFactory2_32&&(this.__RendererFactory2_32=this._ɵDomRendererFactory2_31),this.__RendererFactory2_32},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵSharedStylesHost_33",{get:function(){return null==this.__ɵSharedStylesHost_33&&(this.__ɵSharedStylesHost_33=this._ɵDomSharedStylesHost_30),this.__ɵSharedStylesHost_33},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Testability_34",{get:function(){return null==this.__Testability_34&&(this.__Testability_34=new r.i(this.parent.get(r.h))),this.__Testability_34},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Meta_35",{get:function(){return null==this.__Meta_35&&(this.__Meta_35=new l.k(this.parent.get(l.c))),this.__Meta_35},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_36",{get:function(){return null==this.__Title_36&&(this.__Title_36=new l.l(this.parent.get(l.c))),this.__Title_36},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._AngularFireModule_0=new i.a,this._AngularFireOfflineModule_1=new o.b,this._AngularFireDatabaseModule_2=new a.b,this._CommonModule_3=new s.b,this._ErrorHandler_4=l.m(),this._APP_INITIALIZER_5=[r.j,l.n(this.parent.get(l.o,null),this.parent.get(r.k,null))],this._ApplicationInitStatus_6=new r.l(this._APP_INITIALIZER_5),this._ɵf_7=new r.m(this.parent.get(r.h),this.parent.get(r.n),this,this._ErrorHandler_4,this.componentFactoryResolver,this._ApplicationInitStatus_6),this._ApplicationRef_8=this._ɵf_7,this._ApplicationModule_9=new r.o(this._ApplicationRef_8),this._BrowserModule_10=new l.p(this.parent.get(l.p,null)),this._AppModule_11=new _.a,this._FirebaseAppConfigToken_12={apiKey:"AIzaSyBIsrtVNmZJ9dDQleuItDsz3ZXtvzhiWv8",authDomain:"https://angularfire2-offline.firebaseio.com",databaseURL:"https://angularfire2-offline.firebaseio.com",storageBucket:"gs://angularfire2-offline.appspot.com"},this._FirebaseAppName_13=void 0,this._AppModule_11},t.prototype.getInternal=function(e,t){return e===i.a?this._AngularFireModule_0:e===o.b?this._AngularFireOfflineModule_1:e===a.b?this._AngularFireDatabaseModule_2:e===s.b?this._CommonModule_3:e===r.p?this._ErrorHandler_4:e===r.q?this._APP_INITIALIZER_5:e===r.l?this._ApplicationInitStatus_6:e===r.m?this._ɵf_7:e===r.r?this._ApplicationRef_8:e===r.o?this._ApplicationModule_9:e===l.p?this._BrowserModule_10:e===_.a?this._AppModule_11:e===h.b?this._FirebaseAppConfigToken_12:e===i.b?this._FirebaseAppName_13:e===h.c?this._FirebaseApp_14:e===b.a?this._AngularFireDatabase_15:e===c.b?this._LocalForageToken_16:e===p.b?this._LocalUpdateService_17:e===f.a?this._AngularFireOfflineDatabase_18:e===r.c?this._LOCALE_ID_19:e===s.c?this._NgLocalization_20:e===r.d?this._Compiler_21:e===r.s?this._APP_ID_22:e===r.t?this._IterableDiffers_23:e===r.u?this._KeyValueDiffers_24:e===l.q?this._DomSanitizer_25:e===r.v?this._Sanitizer_26:e===l.r?this._HAMMER_GESTURE_CONFIG_27:e===l.s?this._EVENT_MANAGER_PLUGINS_28:e===l.h?this._EventManager_29:e===l.i?this._ɵDomSharedStylesHost_30:e===l.j?this._ɵDomRendererFactory2_31:e===r.w?this._RendererFactory2_32:e===l.t?this._ɵSharedStylesHost_33:e===r.i?this._Testability_34:e===l.k?this._Meta_35:e===l.l?this._Title_36:t},t.prototype.destroyInternal=function(){this._ɵf_7.ngOnDestroy(),this.__ɵDomSharedStylesHost_30&&this._ɵDomSharedStylesHost_30.ngOnDestroy()},t}(r.x),d=new r.y(y,_.a)},x35b:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("3j3K"),_=n("kZql"),i=n("Qbdm"),o=n("kke6");_.a.production&&n.i(r.a)(),n.i(i.a)().bootstrapModuleFactory(o.a)}},[0]);