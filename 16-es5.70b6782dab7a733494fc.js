function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{yIOV:function(e,n,t){"use strict";t.r(n),t.d(n,"FolderPageModule",(function(){return p}));var o,i,r,c=t("ofXK"),a=t("3Pt+"),s=t("TEn/"),l=t("tyNb"),f=t("mrSG"),u=t("fXoL"),b=[{path:"",component:(o=function(){function e(n){_classCallCheck(this,e),this.activatedRoute=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.main(),this.folder=this.activatedRoute.snapshot.paramMap.get("id")}},{key:"main",value:function(){var e=this;liff.init({liffId:"1654187718-l0z2DKvr"}).then((function(){liff.isLoggedIn()?(console.log("login"),e.isLogin=liff.isLoggedIn(),e.getUserProfile()):console.log("log out"),e.os=liff.getOS(),e.isLogin=liff.isLoggedIn()})).catch((function(e){return console.error(e.message)}))}},{key:"logIn",value:function(){liff.login()}},{key:"logOut",value:function(){liff.logout(),window.location.reload()}},{key:"getUserProfile",value:function(){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,liff.getProfile();case 2:return n=e.sent,this.pictureUrl=n.pictureUrl,this.userId=n.userId,this.displayName=n.displayName,this.statusMessage=n.statusMessage,e.next=9,liff.getDecodedIDToken();case 9:this.email=e.sent.email;case 10:case"end":return e.stop()}}),e,this)})))}}]),e}(),o.\u0275fac=function(e){return new(e||o)(u.Jb(l.a))},o.\u0275cmp=u.Db({type:o,selectors:[["app-folder"]],decls:20,vars:6,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["collapse","condense"],["size","large"],["id","container"],[1,"capitalize"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(e,n){1&e&&(u.Mb(0,"ion-header",0),u.Mb(1,"ion-toolbar"),u.Mb(2,"ion-buttons",1),u.Kb(3,"ion-menu-button"),u.Lb(),u.Mb(4,"ion-title"),u.gc(5),u.Lb(),u.Lb(),u.Lb(),u.Mb(6,"ion-content",2),u.Mb(7,"ion-header",3),u.Mb(8,"ion-toolbar"),u.Mb(9,"ion-title",4),u.gc(10),u.Lb(),u.Lb(),u.Lb(),u.Mb(11,"div",5),u.Mb(12,"strong",6),u.gc(13),u.Lb(),u.Mb(14,"p"),u.gc(15,"Explore "),u.Mb(16,"a",7),u.gc(17,"UI Components"),u.Lb(),u.Lb(),u.Mb(18,"p"),u.gc(19),u.Lb(),u.Lb(),u.Lb()),2&e&&(u.Zb("translucent",!0),u.zb(5),u.hc(n.folder),u.zb(1),u.Zb("fullscreen",!0),u.zb(4),u.hc(n.folder),u.zb(3),u.hc(n.folder),u.zb(6),u.ic("OS: ",n.os,""))},directives:[s.d,s.q,s.b,s.k,s.p,s.c],styles:["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),o)}],g=((r=function e(){_classCallCheck(this,e)}).\u0275mod=u.Hb({type:r}),r.\u0275inj=u.Gb({factory:function(e){return new(e||r)},imports:[[l.i.forChild(b)],l.i]}),r),p=((i=function e(){_classCallCheck(this,e)}).\u0275mod=u.Hb({type:i}),i.\u0275inj=u.Gb({factory:function(e){return new(e||i)},imports:[[c.b,a.a,s.r,g]]}),i)}}]);