(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{yIOV:function(n,t,o){"use strict";o.r(t),o.d(t,"FolderPageModule",(function(){return d}));var i=o("ofXK"),e=o("3Pt+"),c=o("TEn/"),r=o("tyNb"),s=o("mrSG"),a=o("fXoL");function l(n,t){if(1&n&&(a.Mb(0,"ion-card-header"),a.Mb(1,"ion-card-subtitle"),a.hc(2,"Awesome Subtitle"),a.Lb(),a.Mb(3,"ion-card-title"),a.hc(4),a.Lb(),a.Lb()),2&n){const n=a.Wb();a.zb(4),a.jc("\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35 ",n.displayName,"")}}function g(n,t){if(1&n&&a.Kb(0,"img",7),2&n){const n=a.Wb();a.ac("src",n.pictureUrl,a.ec)}}function b(n,t){if(1&n&&a.Kb(0,"img",7),2&n){const n=a.Wb();a.ac("src",n.img,a.ec)}}const u=[{path:"",component:(()=>{class n{constructor(n){this.activatedRoute=n}ngOnInit(){this.main(),this.img="../../assets/newlogo2.png",this.folder=this.activatedRoute.snapshot.paramMap.get("id")}main(){liff.init({liffId:"1654187718-l0z2DKvr"}).then(()=>{liff.isLoggedIn()?(console.log("login"),this.isLogin=liff.isLoggedIn(),this.getUserProfile()):console.log("log out"),this.os=liff.getOS(),this.isLogin=liff.isLoggedIn()}).catch(n=>console.error(n.message))}logIn(){liff.login()}logOut(){liff.logout(),window.location.reload()}getUserProfile(){return Object(s.a)(this,void 0,void 0,(function*(){const n=yield liff.getProfile();this.pictureUrl=n.pictureUrl,this.userId=n.userId,this.displayName=n.displayName,this.statusMessage=n.statusMessage,this.email=(yield liff.getDecodedIDToken()).email}))}onClick(){alert("Hi!")}}return n.\u0275fac=function(t){return new(t||n)(a.Jb(r.a))},n.\u0275cmp=a.Db({type:n,selectors:[["app-folder"]],decls:21,vars:4,consts:[[3,"fullscreen"],["collapse","condense"],[1,"new-background-color"],["id","container"],[4,"ngIf"],["style","align-items: center;","width","150px",3,"src",4,"ngIf"],["expand","full","shape","round",3,"click"],["width","150px",2,"align-items","center",3,"src"]],template:function(n,t){1&n&&(a.Mb(0,"ion-content",0),a.Mb(1,"ion-header",1),a.Kb(2,"ion-toolbar",2),a.Lb(),a.Mb(3,"div",3),a.Mb(4,"ion-card"),a.gc(5,l,5,1,"ion-card-header",4),a.Mb(6,"ion-card-content"),a.gc(7,g,1,1,"img",5),a.gc(8,b,1,1,"img",5),a.Lb(),a.Lb(),a.Mb(9,"ion-button",6),a.Ub("click",(function(){return t.onClick()})),a.hc(10,"Send Message"),a.Lb(),a.Mb(11,"ion-button",6),a.Ub("click",(function(){return t.onClick()})),a.hc(12,"Share Target Picker"),a.Lb(),a.Mb(13,"ion-button",6),a.Ub("click",(function(){return t.onClick()})),a.hc(14,"Open Window"),a.Lb(),a.Mb(15,"ion-button",6),a.Ub("click",(function(){return t.onClick()})),a.hc(16,"Scan Code"),a.Lb(),a.Mb(17,"ion-button",6),a.Ub("click",(function(){return t.onClick()})),a.hc(18,"Logout"),a.Lb(),a.Mb(19,"ion-button",6),a.Ub("click",(function(){return t.onClick()})),a.hc(20,"Close"),a.Lb(),a.Lb(),a.Lb()),2&n&&(a.Zb("fullscreen",!0),a.zb(5),a.Zb("ngIf",t.isLogin),a.zb(2),a.Zb("ngIf",t.isLogin),a.zb(1),a.Zb("ngIf",!t.isLogin))},directives:[c.h,c.i,c.t,c.c,i.i,c.d,c.b,c.e,c.f,c.g],styles:["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]{--ion-background-color:#dae1e7}ion-button[_ngcontent-%COMP%]{--background:#4caf50}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item.advanced-trans[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{--ion-background-color:#dae1e7}.new-background-color[_ngcontent-%COMP%]{--background:#4caf50}"]}),n})()}];let f=(()=>{class n{}return n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({factory:function(t){return new(t||n)},imports:[[r.i.forChild(u)],r.i]}),n})(),d=(()=>{class n{}return n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({factory:function(t){return new(t||n)},imports:[[i.b,e.a,c.u,f]]}),n})()}}]);