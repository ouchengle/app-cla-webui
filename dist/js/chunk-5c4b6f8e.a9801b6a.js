(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c4b6f8e"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("el-col",{attrs:{span:8}},[n("div",{staticStyle:{display:"flex"}},[n("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:this.$store.state.user.userImg,alt:""},on:{click:function(e){return t.newWindow()}}}),n("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[n("span",[t._v("Hi, "),n("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[t._v(t._s(this.$store.state.user.userName)+"!")])])])])]),n("el-col",{attrs:{span:8}},[n("div",[n("svg-icon",{staticClass:"pointer",staticStyle:{height:"100%",width:"3rem"},attrs:{id:"svg_logo","icon-class":"CLA_SYSTEM_BLACK"},on:{click:function(e){return t.toHome()}}})],1)]),n("el-col",{attrs:{span:8}},[n("div",[n("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(e){return t.loginOut()}}})],1)],1)])],1)},i=[],c={name:"Header",computed:{},data:function(){return{}},created:function(){},methods:{toHome:function(){this.$router.push("/home")},loginOut:function(){sessionStorage.clear(),this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},o=c,a=(n("33fc"),n("2877")),s=Object(a["a"])(o,r,i,!1,null,"6f7cf9d2",null);e["a"]=s.exports},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,c={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==c.call(t)?a(t):i(r(t))}},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),c=n("825a"),o=n("1d80"),a=n("4840"),s=n("8aa5"),u=n("50c4"),f=n("14c3"),l=n("9263"),p=n("d039"),d=[].push,g=Math.min,h=4294967295,v=!p((function(){return!RegExp(h,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(o(this)),c=void 0===n?h:n>>>0;if(0===c)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,c);var a,s,u,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,p+"g");while(a=l.call(v,r)){if(s=v.lastIndex,s>g&&(f.push(r.slice(g,a.index)),a.length>1&&a.index<r.length&&d.apply(f,a.slice(1)),u=a[0].length,g=s,f.length>=c))break;v.lastIndex===a.index&&v.lastIndex++}return g===r.length?!u&&v.test("")||f.push(""):f.push(r.slice(g)),f.length>c?f.slice(0,c):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=o(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,i,n):r.call(String(i),e,n)},function(t,i){var o=n(r,t,this,i,r!==e);if(o.done)return o.value;var l=c(t),p=String(this),d=a(l,RegExp),b=l.unicode,y=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(v?"y":"g"),x=new d(v?l:"^(?:"+l.source+")",y),m=void 0===i?h:i>>>0;if(0===m)return[];if(0===p.length)return null===f(x,p)?[p]:[];var E=0,w=0,O=[];while(w<p.length){x.lastIndex=v?w:0;var S,I=f(x,v?p:p.slice(w));if(null===I||(S=g(u(x.lastIndex+(v?0:w)),p.length))===E)w=s(p,w,b);else{if(O.push(p.slice(E,w)),O.length===m)return O;for(var _=1;_<=I.length-1;_++)if(O.push(I[_]),O.length===m)return O;w=E=S}}return O.push(p.slice(E)),O}]}),!v)},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"33fc":function(t,e,n){"use strict";var r=n("fc27"),i=n.n(r);i.a},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),c=n("b622"),o=c("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,c=n("1dde"),o=n("ae40"),a=c("filter"),s=o("filter");r({target:"Array",proto:!0,forced:!a||!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("5899"),c="["+i+"]",o=RegExp("^"+c+c+"*"),a=RegExp(c+c+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"615a":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return window.innerHeight}},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),c=function(t){return function(e,n){var c,o,a=String(i(e)),s=r(n),u=a.length;return s<0||s>=u?t?"":void 0:(c=a.charCodeAt(s),c<55296||c>56319||s+1===u||(o=a.charCodeAt(s+1))<56320||o>57343?t?a.charAt(s):c:t?a.slice(s,s+2):o-56320+(c-55296<<10)+65536)}};t.exports={codeAt:c(!1),charAt:c(!0)}},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var c,o;return i&&"function"==typeof(c=e.constructor)&&c!==n&&r(o=c.prototype)&&o!==n.prototype&&i(t,o),t}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),c=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:c.f(t)})}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),c=RegExp.prototype.exec,o=String.prototype.replace,a=c,s=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],l=s||f||u;l&&(a=function(t){var e,n,i,a,l=this,p=u&&l.sticky,d=r.call(l),g=l.source,h=0,v=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),v=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,h++),n=new RegExp("^(?:"+g+")",d)),f&&(n=new RegExp("^"+g+"$(?!\\s)",d)),s&&(e=l.lastIndex),i=c.call(p?n:l,v),p?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=l.lastIndex,l.lastIndex+=i[0].length):l.lastIndex=0:s&&i&&(l.lastIndex=l.global?i.index+i[0].length:e),f&&i&&i.length>1&&o.call(i[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(i[a]=void 0)})),i}),t.exports=a},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),c=n("d066"),o=n("c430"),a=n("83ab"),s=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),p=n("e8b5"),d=n("861d"),g=n("825a"),h=n("7b0b"),v=n("fc6a"),b=n("c04e"),y=n("5c6c"),x=n("7c73"),m=n("df75"),E=n("241c"),w=n("057f"),O=n("7418"),S=n("06cf"),I=n("9bf2"),_=n("d1e7"),P=n("9112"),j=n("6eeb"),N=n("5692"),A=n("f772"),C=n("d012"),R=n("90e3"),T=n("b622"),k=n("e538"),$=n("746f"),U=n("d44e"),D=n("69f3"),F=n("b727").forEach,H=A("hidden"),L="Symbol",M="prototype",G=T("toPrimitive"),W=D.set,Y=D.getterFor(L),B=Object[M],J=i.Symbol,K=c("JSON","stringify"),V=S.f,X=I.f,Q=w.f,q=_.f,z=N("symbols"),Z=N("op-symbols"),tt=N("string-to-symbol-registry"),et=N("symbol-to-string-registry"),nt=N("wks"),rt=i.QObject,it=!rt||!rt[M]||!rt[M].findChild,ct=a&&f((function(){return 7!=x(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=V(B,e);r&&delete B[e],X(t,e,n),r&&t!==B&&X(B,e,r)}:X,ot=function(t,e){var n=z[t]=x(J[M]);return W(n,{type:L,tag:t,description:e}),a||(n.description=e),n},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof J},st=function(t,e,n){t===B&&st(Z,e,n),g(t);var r=b(e,!0);return g(n),l(z,r)?(n.enumerable?(l(t,H)&&t[H][r]&&(t[H][r]=!1),n=x(n,{enumerable:y(0,!1)})):(l(t,H)||X(t,H,y(1,{})),t[H][r]=!0),ct(t,r,n)):X(t,r,n)},ut=function(t,e){g(t);var n=v(e),r=m(n).concat(gt(n));return F(r,(function(e){a&&!lt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?x(t):ut(x(t),e)},lt=function(t){var e=b(t,!0),n=q.call(this,e);return!(this===B&&l(z,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(z,e)||l(this,H)&&this[H][e])||n)},pt=function(t,e){var n=v(t),r=b(e,!0);if(n!==B||!l(z,r)||l(Z,r)){var i=V(n,r);return!i||!l(z,r)||l(n,H)&&n[H][r]||(i.enumerable=!0),i}},dt=function(t){var e=Q(v(t)),n=[];return F(e,(function(t){l(z,t)||l(C,t)||n.push(t)})),n},gt=function(t){var e=t===B,n=Q(e?Z:v(t)),r=[];return F(n,(function(t){!l(z,t)||e&&!l(B,t)||r.push(z[t])})),r};if(s||(J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),n=function(t){this===B&&n.call(Z,t),l(this,H)&&l(this[H],e)&&(this[H][e]=!1),ct(this,e,y(1,t))};return a&&it&&ct(B,e,{configurable:!0,set:n}),ot(e,t)},j(J[M],"toString",(function(){return Y(this).tag})),j(J,"withoutSetter",(function(t){return ot(R(t),t)})),_.f=lt,I.f=st,S.f=pt,E.f=w.f=dt,O.f=gt,k.f=function(t){return ot(T(t),t)},a&&(X(J[M],"description",{configurable:!0,get:function(){return Y(this).description}}),o||j(B,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:J}),F(m(nt),(function(t){$(t)})),r({target:L,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=J(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!a},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:pt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:gt}),r({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),K){var ht=!s||f((function(){var t=J();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));r({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,n){var r,i=[t],c=1;while(arguments.length>c)i.push(arguments[c++]);if(r=e,(d(e)||void 0!==t)&&!at(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),i[1]=e,K.apply(null,i)}})}J[M][G]||P(J[M],G,J[M].valueOf),U(J,L),C[H]=!0},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),c=n("94ca"),o=n("6eeb"),a=n("5135"),s=n("c6b6"),u=n("7156"),f=n("c04e"),l=n("d039"),p=n("7c73"),d=n("241c").f,g=n("06cf").f,h=n("9bf2").f,v=n("58a8").trim,b="Number",y=i[b],x=y.prototype,m=s(p(x))==b,E=function(t){var e,n,r,i,c,o,a,s,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(c=u.slice(2),o=c.length,a=0;a<o;a++)if(s=c.charCodeAt(a),s<48||s>i)return NaN;return parseInt(c,r)}return+u};if(c(b,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var w,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(m?l((function(){x.valueOf.call(n)})):s(n)!=b)?u(new y(E(e)),n,O):E(e)},S=r?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;S.length>I;I++)a(y,w=S[I])&&!a(O,w)&&h(O,w,g(y,w));O.prototype=x,x.constructor=O,o(i,b,O)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),c=n("df75"),o=n("d039"),a=o((function(){c(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return c(i(t))}})},d32f:function(t,e,n){"use strict";var r=n("e35a"),i=n.n(r);i.a},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),c=n("b622"),o=n("9263"),a=n("9112"),s=c("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),l=c("replace"),p=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var g=c(t),h=!i((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),v=h&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return e=!0,null},n[g](""),!e}));if(!h||!v||"replace"===t&&(!u||!f||p)||"split"===t&&!d){var b=/./[g],y=n(g,""[t],(function(t,e,n,r,i){return e.exec===o?h&&!i?{done:!0,value:b.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=y[0],m=y[1];r(String.prototype,t,x),r(RegExp.prototype,g,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}l&&a(RegExp.prototype[g],"sham",!0)}},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),c=n("56ef"),o=n("fc6a"),a=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),i=a.f,u=c(r),f={},l=0;while(u.length>l)n=i(r,e=u[l++]),void 0!==n&&s(f,e,n);return f}})},e35a:function(t,e,n){},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),c=n("fc6a"),o=n("06cf").f,a=n("83ab"),s=i((function(){o(1)})),u=!a||s;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(c(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},fc27:function(t,e,n){},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"footer"},[n("el-col",{staticClass:"left",attrs:{span:8}},[n("span",[t._v("© 2020 HUAWEI SE")])]),n("el-col",{staticClass:"center",attrs:{span:8}},[n("span",[t._v("Made with "),n("svg-icon",{attrs:{"icon-class":"heart"}}),t._v(" from the GitHub team at HUAWEI ")],1)]),n("el-col",{staticClass:"right",attrs:{span:8}},[n("div",[n("span",{staticClass:"pointer"},[t._v("Terms of Service & Privacy Policy")]),n("span",{staticClass:"pointer"},[n("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),t._v("Open an issue")],1)])])],1)},i=[],c={name:"Footer"},o=c,a=(n("d32f"),n("2877")),s=Object(a["a"])(o,r,i,!1,null,"023530e2",null);e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-5c4b6f8e.a9801b6a.js.map