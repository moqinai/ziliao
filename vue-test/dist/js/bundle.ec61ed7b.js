!function(e){function t(t){for(var n,i,s=t[0],a=t[1],p=t[2],c=0,f=[];c<s.length;c++)i=s[c],o[i]&&f.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);f.length;)f.shift()();return u.push.apply(u,p||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,s=1;s<r.length;s++){var a=r[s];0!==o[a]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={1:0},u=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var l=a;u.push([0,0]),r()}({"./src/main.js":function(e,t,r){"use strict";r.r(t);var n=r("./node_modules/vue/dist/vue.js"),o=r.n(n),u=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[this._v("\n    111111111111111111\n    "),t("router-link",{attrs:{to:"/foo"}},[this._v("Foo")]),this._v(" "),t("router-view")],1)};u._withStripped=!0;var i={name:"APP"},s=r("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=Object(s.a)(i,u,[],!1,null,null,null);a.options.__file="src\\App.vue";var p=a.exports,l=r("./node_modules/vue-router/dist/vue-router.esm.js");o.a.use(l.a);const c=[{path:"/foo",component:{template:"<div>foo</div>"}},{path:"/bar",component:{template:"<div>bar</div>"}}];var f=new l.a({routes:c});new o.a({el:"#app",router:f,template:"<App/>",components:{App:p}})},0:function(e,t,r){r("./node_modules/babel-polyfill/lib/index.js"),e.exports=r("./src/main.js")}});
//# sourceMappingURL=bundle.ec61ed7b.js.map