(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"+B9x":function(n,a){n.exports='<nav class="navbar navbar-expand-lg fixed-top">\n    <a class="navbar-brand" href="#">ANPR ADMIN</a>\n    <button class="navbar-toggler" type="button" (click)="toggleSidebar()">\n        \x3c!-- <span class="navbar-toggler-icon"></span> --\x3e\n        <i class="fa fa-bars text-muted" aria-hidden="true"></i>\n    </button>\n    <div class="collapse navbar-collapse">\n        <form class="form-inline my-2 my-lg-0">\n            <input class="form-control mr-sm-2" type="text" placeholder="{{ \'Search\' | translate }}" >\n        </form>\n        <ul class="navbar-nav ml-auto">\n\n            <li class="nav-item">\n                <a href="javascript:void(0)" class="nav-link mt-1"\n                    style="padding: 0.375rem 1rem !important; border-color: #999;"\n                    (click)="rltAndLtr()"\n                >\n                    RTL/LTR\n                </a>\n            </li> &nbsp;\n            <li class="nav-item dropdown" ngbDropdown>\n                <a class="nav-link" href="javascript:void(0)" ngbDropdownToggle>\n                    <i class="fa fa-envelope"></i> <b class="caret"></b><span class="sr-only">(current)</span>\n                </a>\n                <ul class="dropdown-menu-right messages" ngbDropdownMenu>\n                    <li class="media">\n                        <img class="d-flex align-self-center mr-3"\n                            src="http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg" alt="Generic placeholder image"\n                        >\n                        <div class="media-body">\n                            <h5 class="mt-0 mb-1">John Smith</h5>\n                            <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>\n                            <p class="last"> Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class="media">\n                        <img class="d-flex align-self-center mr-3"\n                            src="http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg"\n                            alt="Generic placeholder image"\n                        >\n                        <div class="media-body">\n                            <h5 class="mt-0 mb-1">John Smith</h5>\n                            <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>\n                            <p class="last"> Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class="media">\n                        <img class="d-flex align-self-center mr-3"\n                            src="http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg"\n                            alt="Generic placeholder image"\n                        />\n                        <div class="media-body">\n                            <h5 class="mt-0 mb-1">John Smith</h5>\n                            <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>\n                            <p class="last"> Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class="nav-item dropdown" ngbDropdown>\n                <a href="javascript:void(0)" class="nav-link" ngbDropdownToggle>\n                    <i class="fa fa-bell"></i> <b class="caret"></b><span class="sr-only">(current)</span>\n                </a>\n                <div class="dropdown-menu-right" ngbDropdownMenu>\n                    <a href="javascript:void(0)" class="dropdown-item">\n                        {{ \'Pending Task\' | translate }} <span class="badge badge-info">6</span>\n                    </a>\n                    <a href="javascript:void(0)" class="dropdown-item">\n                        {{ \'In queue\' | translate }} <span class="badge badge-info"> 13</span>\n                    </a>\n                    <a href="javascript:void(0)" class="dropdown-item">\n                        {{ \'Mail\' | translate }} <span class="badge badge-info"> 45</span>\n                    </a>\n                    <li class="dropdown-divider"></li>\n                    <a href="javascript:void(0)" class="dropdown-item">\n                        {{ \'View All\' | translate }}\n                    </a>\n                </div>\n            </li>\n            <li class="nav-item dropdown" ngbDropdown>\n                <a href="javascript:void(0)" class="nav-link" ngbDropdownToggle>\n                    <i class="fa fa-language"></i> {{ \'Language\' | translate }} <b class="caret"></b>\n                </a>\n                <div class="dropdown-menu-right" ngbDropdownMenu>\n                    <a class="dropdown-item" href="javascript:void(0)" (click)="changeLang(\'en\')">\n                        {{ \'English\' | translate }}\n                    </a>\n                    <a class="dropdown-item" href="javascript:void(0)" (click)="changeLang(\'fr\')">\n                        {{ \'French\' | translate }}\n                    </a>\n                    <a class="dropdown-item" href="javascript:void(0)" (click)="changeLang(\'ur\')">\n                        {{ \'Urdu\' | translate }}\n                    </a>\n                    <a class="dropdown-item" href="javascript:void(0)" (click)="changeLang(\'es\')">\n                        {{ \'Spanish\' | translate }}\n                    </a>\n                    <a class="dropdown-item" href="javascript:void(0)" (click)="changeLang(\'it\')">\n                        {{ \'Italian\' | translate }}\n                    </a>\n                    <a class="dropdown-item" href="javascript:void(0)" (click)="changeLang(\'fa\')">\n                        {{ \'Farsi\' | translate }}\n                    </a>\n                    <a class="dropdown-item" href="javascript:void(0)" (click)="changeLang(\'de\')">\n                        {{ \'German\' | translate }}\n                    </a>\n                    <a class="dropdown-item" href="javascript:void(0)" (click)="changeLang(\'zh-CHS\')">\n                        {{ \'Simplified Chinese\' | translate }}\n                    </a>\n                </div>\n            </li>\n            <li class="nav-item dropdown" ngbDropdown>\n                <a href="javascript:void(0)" class="nav-link" ngbDropdownToggle>\n                    <i class="fa fa-user"></i> John Smith <b class="caret"></b>\n                </a>\n                <div class="dropdown-menu-right" ngbDropdownMenu>\n                    <a class="dropdown-item" href="javascript:void(0)">\n                        <i class="fa fa-fw fa-user"></i> {{ \'Profile\' | translate }}\n                    </a>\n                    <a class="dropdown-item" href="javascript:void(0)">\n                        <i class="fa fa-fw fa-envelope"></i> {{ \'Inbox\' | translate }}\n                    </a>\n                    <a class="dropdown-item" href="javascript:void(0)">\n                        <i class="fa fa-fw fa-gear"></i> {{ \'Settings\' | translate }}\n                    </a>\n                    <a class="dropdown-item" [routerLink]="[\'/login\']" (click)="onLoggedout()">\n                        <i class="fa fa-fw fa-power-off"></i> {{ \'Log Out\' | translate }}\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n'},B4wq:function(n,a){n.exports='<nav class="sidebar" [ngClass]="{sidebarPushRight: isActive}">\n    <div class="list-group">\n        <a routerLink="/dashboard" [routerLinkActive]="[\'router-link-active\']" class="list-group-item">\n            <i class="fa fa-fw fa-dashboard"></i>&nbsp;{{ \'Dashboard\' | translate }}\n        </a>\n\n        <a [routerLink]="[\'/tables\']" [routerLinkActive]="[\'router-link-active\']" class="list-group-item">\n            <i class="fa fa-fw fa-table"></i>&nbsp;{{ \'Tables\' | translate }}\n        </a>\n        <a [routerLink]="[\'/forms\']" [routerLinkActive]="[\'router-link-active\']" class="list-group-item">\n            <i class="fa fa-fw fa-edit"></i>&nbsp;{{ \'Forms\' | translate }}\n        </a>\n        <a [routerLink]="[\'/bs-element\']" [routerLinkActive]="[\'router-link-active\']" class="list-group-item">\n            <i class="fa fa-fw fa-desktop"></i>&nbsp;{{ \'Bootstrap Element\' | translate }}\n        </a>\n        <a [routerLink]="[\'/grid\']" [routerLinkActive]="[\'router-link-active\']" class="list-group-item">\n            <i class="fa fa-fw fa-wrench"></i>&nbsp;{{ \'Bootstrap Grid\' | translate }}\n        </a>\n        <a [routerLink]="[\'/components\']" [routerLinkActive]="[\'router-link-active\']" class="list-group-item">\n            <i class="fa fa-th-list"></i>&nbsp;{{ \'Component\' | translate }}\n        </a>\n        <a [routerLink]="[\'/charts\']" [routerLinkActive]="[\'router-link-active\']" class="list-group-item">\n            <i class="fa fa-fw fa-bar-chart-o"></i>&nbsp;{{ \'Charts\' | translate }}\n        </a>\n        <div class="nested-menu">\n            <a class="list-group-item" (click)="addExpandClass(\'pages\')">\n                <span><i class="fa fa-plus"></i>&nbsp; {{ \'Menu\' | translate }}</span>\n            </a>\n            <li class="nested" [class.expand]="showMenu === \'pages\'">\n                <ul class="submenu">\n                    <li>\n                        <a href="javascript:void(0)"><span>{{ \'Submenu\' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0)"><span>{{ \'Submenu\' | translate }}</span></a>\n                    </li>\n                    <li>\n                        <a href="javascript:void(0)"><span>{{ \'Submenu\' | translate }}</span></a>\n                    </li>\n                </ul>\n            </li>\n        </div>\n        <a [routerLink]="[\'/blank-page\']" [routerLinkActive]="[\'router-link-active\']" class="list-group-item">\n            <i class="fa fa-file-o"></i>&nbsp;{{ \'Blank Page\' | translate }}\n        </a>\n        <a class="list-group-item more-themes" href="http://www.strapui.com/" >\n            {{ \'More Theme\' | translate }}\n        </a>\n        <div class="header-fields">\n            <a (click)="rltAndLtr()" class="list-group-item">\n                <span><i class="fa fa-arrows-h"></i>&nbsp; RTL/LTR</span>\n            </a>\n            <div class="nested-menu">\n                <a class="list-group-item" (click)="addExpandClass(\'languages\')">\n                    <span><i class="fa fa-language"></i>&nbsp; {{ \'Language\' | translate }} <b class="caret"></b></span>\n                </a>\n                <li class="nested" [class.expand]="showMenu === \'languages\'">\n                    <ul class="submenu">\n                        <li>\n                            <a href="javascript:void(0)" (click)="changeLang(\'en\')">\n                                {{ \'English\' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0)" (click)="changeLang(\'fr\')">\n                                {{ \'French\' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0)" (click)="changeLang(\'ur\')">\n                                {{ \'Urdu\' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0)" (click)="changeLang(\'es\')">\n                                {{ \'Spanish\' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0)" (click)="changeLang(\'it\')">\n                                {{ \'Italian\' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0)" (click)="changeLang(\'fa\')">\n                                {{ \'Farsi\' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0)" (click)="changeLang(\'de\')">\n                                {{ \'German\' | translate }}\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n            <div class="nested-menu">\n                <a class="list-group-item" (click)="addExpandClass(\'profile\')">\n                    <span><i class="fa fa-user"></i>&nbsp; John Smith</span>\n                </a>\n                <li class="nested" [class.expand]="showMenu === \'profile\'">\n                    <ul class="submenu">\n                        <li>\n                            <a href="javascript:void(0)">\n                                <span><i class="fa fa-fw fa-user"></i> {{ \'Profile\' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0)">\n                                <span><i class="fa fa-fw fa-envelope"></i> {{ \'Inbox\' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href="javascript:void(0)">\n                                <span><i class="fa fa-fw fa-gear"></i> {{ \'Settings\' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a [routerLink]="[\'/login\']" (click)="onLoggedout()">\n                                <span><i class="fa fa-fw fa-power-off"></i> {{ \'Log Out\' | translate }}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        </div>\n    </div>\n</nav>\n'},DwMd:function(n,a){n.exports=":host .navbar {\n  background-color: #222; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n"},SpYX:function(n,a){n.exports=".main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n"},"Tx//":function(n,a,e){"use strict";e.r(a);var t=e("CcnG"),s=e("Ip0R"),i=e("A7o+"),r=e("eUd/"),o=e("ZYCi"),l=function(n,a,e,t){var s,i=arguments.length,r=i<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,a,e,t);else for(var o=n.length-1;o>=0;o--)(s=n[o])&&(r=(i<3?s(r):i>3?s(a,e,r):s(a,e))||r);return i>3&&r&&Object.defineProperty(a,e,r),r},d=function(n,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,a)},c=function(){function n(){}return n.prototype.ngOnInit=function(){},n=l([Object(t.Component)({selector:"app-layout",template:e("hCdD"),styles:[e("SpYX")]}),d("design:paramtypes",[])],n)}(),p=function(n,a,e,t){var s,i=arguments.length,r=i<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,a,e,t);else for(var o=n.length-1;o>=0;o--)(s=n[o])&&(r=(i<3?s(r):i>3?s(a,e,r):s(a,e))||r);return i>3&&r&&Object.defineProperty(a,e,r),r},f=[{path:"",component:c,children:[{path:"",redirectTo:"dashboard"},{path:"dashboard",loadChildren:"./dashboard/dashboard.module#DashboardModule"},{path:"charts",loadChildren:"./charts/charts.module#ChartsModule"},{path:"tables",loadChildren:"./tables/tables.module#TablesModule"},{path:"forms",loadChildren:"./form/form.module#FormModule"},{path:"bs-element",loadChildren:"./bs-element/bs-element.module#BsElementModule"},{path:"grid",loadChildren:"./grid/grid.module#GridModule"},{path:"components",loadChildren:"./bs-component/bs-component.module#BsComponentModule"},{path:"blank-page",loadChildren:"./blank-page/blank-page.module#BlankPageModule"}]}],u=function(){function n(){}return n=p([Object(t.NgModule)({imports:[o.c.forChild(f)],exports:[o.c]})],n)}(),g=function(n,a,e,t){var s,i=arguments.length,r=i<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,a,e,t);else for(var o=n.length-1;o>=0;o--)(s=n[o])&&(r=(i<3?s(r):i>3?s(a,e,r):s(a,e))||r);return i>3&&r&&Object.defineProperty(a,e,r),r},h=function(n,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,a)},b=function(){function n(n,a){var e=this;this.translate=n,this.router=a,this.isActive=!1,this.showMenu="",this.pushRightClass="push-right",this.translate.addLangs(["en","fr","ur","es","it","fa","de"]),this.translate.setDefaultLang("en");var t=this.translate.getBrowserLang();this.translate.use(t.match(/en|fr|ur|es|it|fa|de/)?t:"en"),this.router.events.subscribe(function(n){n instanceof o.a&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return n.prototype.eventCalled=function(){this.isActive=!this.isActive},n.prototype.addExpandClass=function(n){n===this.showMenu?this.showMenu="0":this.showMenu=n},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.changeLang=function(n){this.translate.use(n)},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n=g([Object(t.Component)({selector:"app-sidebar",template:e("B4wq"),styles:[e("kSlK")]}),h("design:paramtypes",[i.c,o.b])],n)}(),m=function(n,a,e,t){var s,i=arguments.length,r=i<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,a,e,t);else for(var o=n.length-1;o>=0;o--)(s=n[o])&&(r=(i<3?s(r):i>3?s(a,e,r):s(a,e))||r);return i>3&&r&&Object.defineProperty(a,e,r),r},v=function(n,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,a)},w=function(){function n(n,a){var e=this;this.translate=n,this.router=a,this.pushRightClass="push-right",this.translate.addLangs(["en","fr","ur","es","it","fa","de","zh-CHS"]),this.translate.setDefaultLang("en");var t=this.translate.getBrowserLang();this.translate.use(t.match(/en|fr|ur|es|it|fa|de|zh-CHS/)?t:"en"),this.router.events.subscribe(function(n){n instanceof o.a&&window.innerWidth<=992&&e.isToggled()&&e.toggleSidebar()})}return n.prototype.ngOnInit=function(){},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n.prototype.changeLang=function(n){this.translate.use(n)},n=m([Object(t.Component)({selector:"app-header",template:e("+B9x"),styles:[e("DwMd")]}),v("design:paramtypes",[i.c,o.b])],n)}();e.d(a,"LayoutModule",function(){return k});var y=function(n,a,e,t){var s,i=arguments.length,r=i<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(n,a,e,t);else for(var o=n.length-1;o>=0;o--)(s=n[o])&&(r=(i<3?s(r):i>3?s(a,e,r):s(a,e))||r);return i>3&&r&&Object.defineProperty(a,e,r),r},k=function(){function n(){}return n=y([Object(t.NgModule)({imports:[s.b,u,i.b,r.d.forRoot()],declarations:[c,b,w]})],n)}()},hCdD:function(n,a){n.exports='<app-header></app-header>\n<app-sidebar></app-sidebar>\n<section class="main-container">\n    <router-outlet></router-outlet>\n</section>\n'},kSlK:function(n,a){n.exports=".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n"}}]);