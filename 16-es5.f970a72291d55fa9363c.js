function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{yIOV:function(e,n,t){"use strict";t.r(n),t.d(n,"FolderPageModule",(function(){return C}));var o=t("ofXK"),r=t("3Pt+"),i=t("TEn/"),c=t("tyNb"),a=t("mrSG"),s=t("fXoL");function l(e,n){if(1&e&&(s.Mb(0,"ion-card-header"),s.Mb(1,"ion-card-title"),s.hc(2),s.Lb(),s.Lb()),2&e){var t=s.Wb();s.zb(2),s.jc("\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35 ",t.displayName,"")}}function u(e,n){1&e&&(s.Mb(0,"ion-card-header"),s.Mb(1,"ion-card-title"),s.hc(2,"\u0e22\u0e34\u0e19\u0e14\u0e35\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a"),s.Lb(),s.Lb())}function g(e,n){if(1&e&&s.Kb(0,"img",10),2&e){var t=s.Wb();s.ac("src",t.pictureUrl,s.ec)}}function f(e,n){if(1&e&&s.Kb(0,"img",10),2&e){var t=s.Wb();s.ac("src",t.img,s.ec)}}function d(e,n){if(1&e){var t=s.Nb();s.Mb(0,"ion-button",9),s.Ub("click",(function(){return s.dc(t),s.Wb().logIn()})),s.hc(1,"Login"),s.Lb()}}function b(e,n){if(1&e){var t=s.Nb();s.Mb(0,"ion-button",9),s.Ub("click",(function(){return s.dc(t),s.Wb().logOut()})),s.hc(1,"Logout"),s.Lb()}}var p,m,h,y=[{path:"",component:(p=function(){function e(n){_classCallCheck(this,e),this.activatedRoute=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.main(),this.img="https://cdn3.iconfinder.com/data/icons/covid-19-coronavirus-protection-or-prevention-flat/64/Mask_1-512.png",this.folder=this.activatedRoute.snapshot.paramMap.get("id")}},{key:"doRefresh",value:function(e){window.location.reload(),setTimeout((function(){e.target.complete()}),1e3)}},{key:"main",value:function(){var e=this;liff.init({liffId:"1654187718-l0z2DKvr"}).then((function(){liff.isLoggedIn()?(console.log("login"),e.isLogin=liff.isLoggedIn(),e.getUserProfile()):console.log("log out"),e.os=liff.getOS(),e.isLogin=liff.isLoggedIn()})).catch((function(e){return console.error(e.message)}))}},{key:"logIn",value:function(){liff.login()}},{key:"logOut",value:function(){liff.logout()}},{key:"getUserProfile",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,liff.getProfile();case 2:return n=e.sent,this.pictureUrl=n.pictureUrl,this.userId=n.userId,this.displayName=n.displayName,this.statusMessage=n.statusMessage,e.next=9,liff.getDecodedIDToken();case 9:this.email=e.sent.email;case 10:case"end":return e.stop()}}),e,this)})))}},{key:"openWindow",value:function(){liff.openWindow({url:"https://line.me",external:!0})}},{key:"scanCode",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,liff.scanCode();case 2:n=e.sent,document.getElementById("scanCode").append(n.value);case 4:case"end":return e.stop()}}),e)})))}},{key:"closed",value:function(){liff.closeWindow()}},{key:"shareMsg",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,liff.shareTargetPicker([{type:"text",text:"This message was sent by ShareTargetPicker"}]);case 2:case"end":return e.stop()}}),e)})))}},{key:"sendMsg",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="none"!==liff.getContext().type,!e.t0){e.next=5;break}return e.next=4,liff.sendMessages([{type:"flex",altText:"Flex Message",contents:{type:"bubble",direction:"ltr",body:{type:"box",layout:"vertical",contents:[{type:"text",text:"\u0e41\u0e1a\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e2a\u0e38\u0e02\u0e20\u0e32\u0e1e\u0e08\u0e34\u0e15",margin:"md",size:"lg",align:"center",weight:"bold",color:"#05683A",wrap:!0},{type:"separator",margin:"md",color:"#585454"},{type:"text",text:"\u0e41\u0e1a\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e20\u0e32\u0e27\u0e30\u0e0b\u0e36\u0e21\u0e40\u0e28\u0e23\u0e49\u0e32",margin:"md",align:"center",weight:"bold"},{type:"button",action:{type:"uri",label:"PHQ-9",uri:"https://liff.line.me/1654187718-l0z2DKvr"},color:"#05683A",margin:"sm",style:"primary",gravity:"top"},{type:"separator",margin:"md",color:"#6B5C5C"},{type:"text",text:"\u0e41\u0e1a\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e04\u0e27\u0e32\u0e21\u0e40\u0e04\u0e23\u0e35\u0e22\u0e14",margin:"md",size:"md",align:"center",weight:"bold",wrap:!0},{type:"button",action:{type:"uri",label:"ST-5",uri:"https://linecorp.com"},color:"#05683A",margin:"sm",height:"md",style:"primary"},{type:"separator",margin:"md",color:"#767474"},{type:"text",text:"\u0e41\u0e1a\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e2a\u0e20\u0e32\u0e27\u0e30\u0e2b\u0e21\u0e14\u0e44\u0e1f",margin:"md",align:"center",weight:"bold"},{type:"button",action:{type:"uri",label:"Burn Out",uri:"https://linecorp.com"},color:"#05683A",margin:"sm",style:"primary"},{type:"separator",margin:"md",color:"#535151"},{type:"text",text:"\u0e41\u0e1a\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e04\u0e27\u0e32\u0e21\u0e01\u0e31\u0e07\u0e27\u0e25\u0e15\u0e48\u0e2d\u0e44\u0e27\u0e23\u0e31\u0e2a",margin:"md",align:"center",weight:"bold",wrap:!0},{type:"button",action:{type:"uri",label:"COVID-19",uri:"https://linecorp.com"},color:"#05683A",margin:"sm",style:"primary"}]},styles:{body:{backgroundColor:"#CFCFCF",separator:!0,separatorColor:"#1A1818"}}}}]);case 4:liff.closeWindow();case 5:case"end":return e.stop()}}),e)})))}}]),e}(),p.\u0275fac=function(e){return new(e||p)(s.Jb(c.a))},p.\u0275cmp=s.Db({type:p,selectors:[["app-folder"]],decls:17,vars:7,consts:[[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles","refreshingText","Refreshing..."],["collapse","condense"],[1,"new-background-color"],["id","container"],[4,"ngIf"],["style","align-items: center;","width","150px",3,"src",4,"ngIf"],["expand","full","shape","round",3,"click",4,"ngIf"],["expand","full","shape","round",3,"click"],["width","150px",2,"align-items","center",3,"src"]],template:function(e,n){1&e&&(s.Mb(0,"ion-content",0),s.Mb(1,"ion-refresher",1),s.Ub("ionRefresh",(function(e){return n.doRefresh(e)})),s.Kb(2,"ion-refresher-content",2),s.Lb(),s.Mb(3,"ion-header",3),s.Kb(4,"ion-toolbar",4),s.Lb(),s.Mb(5,"div",5),s.Mb(6,"ion-card"),s.gc(7,l,3,1,"ion-card-header",6),s.gc(8,u,3,0,"ion-card-header",6),s.Kb(9,"br"),s.Mb(10,"ion-card-content"),s.gc(11,g,1,1,"img",7),s.gc(12,f,1,1,"img",7),s.Lb(),s.Lb(),s.gc(13,d,2,0,"ion-button",8),s.gc(14,b,2,0,"ion-button",8),s.Mb(15,"ion-button",9),s.Ub("click",(function(){return n.closed()})),s.hc(16,"Close"),s.Lb(),s.Lb(),s.Lb()),2&e&&(s.Zb("fullscreen",!0),s.zb(7),s.Zb("ngIf",n.isLogin),s.zb(1),s.Zb("ngIf",!n.isLogin),s.zb(3),s.Zb("ngIf",n.isLogin),s.zb(1),s.Zb("ngIf",!n.isLogin),s.zb(1),s.Zb("ngIf",!n.isLogin),s.zb(1),s.Zb("ngIf",n.isLogin))},directives:[i.g,i.q,i.r,i.h,i.u,i.c,o.i,i.d,i.b,i.e,i.f],styles:["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]{--ion-background-color:#dae1e7}ion-button[_ngcontent-%COMP%], ion-card-header[_ngcontent-%COMP%]{--background:#2e8b57}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item.advanced-trans[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{--ion-background-color:#dae1e7}ion-card[_ngcontent-%COMP%]{align-self:center}.new-background-color[_ngcontent-%COMP%]{--background:#2e8b57}img[_ngcontent-%COMP%]{border-radius:50%}"]}),p)}],v=((h=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:h}),h.\u0275inj=s.Gb({factory:function(e){return new(e||h)},imports:[[c.i.forChild(y)],c.i]}),h),C=((m=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:m}),m.\u0275inj=s.Gb({factory:function(e){return new(e||m)},imports:[[o.b,r.a,i.v,v]]}),m)}}]);