(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3943fe6a"],{"057f":function(e,t,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(e){try{return i(e)}catch(t){return c.slice()}};e.exports.f=function(e){return c&&"[object Window]"==o.call(e)?l(e):i(r(e))}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),c=n("ae40"),l=o("filter"),a=c("filter");r({target:"Array",proto:!0,forced:!l||!a},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"746f":function(e,t,n){var r=n("428f"),i=n("5135"),o=n("e538"),c=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||c(t,e,{value:o.f(e)})}},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),c=n("c430"),l=n("83ab"),a=n("4930"),s=n("fdbf"),u=n("d039"),f=n("5135"),b=n("e8b5"),d=n("861d"),h=n("825a"),p=n("7b0b"),m=n("fc6a"),g=n("c04e"),y=n("5c6c"),v=n("7c73"),w=n("df75"),O=n("241c"),j=n("057f"),S=n("7418"),_=n("06cf"),P=n("9bf2"),k=n("d1e7"),V=n("9112"),C=n("6eeb"),I=n("5692"),D=n("f772"),U=n("d012"),E=n("90e3"),$=n("b622"),N=n("e538"),T=n("746f"),x=n("d44e"),z=n("69f3"),A=n("b727").forEach,J=D("hidden"),M="Symbol",L="prototype",F=$("toPrimitive"),Q=z.set,W=z.getterFor(M),Y=Object[L],q=i.Symbol,B=o("JSON","stringify"),G=_.f,H=P.f,K=j.f,R=k.f,X=I("symbols"),Z=I("op-symbols"),ee=I("string-to-symbol-registry"),te=I("symbol-to-string-registry"),ne=I("wks"),re=i.QObject,ie=!re||!re[L]||!re[L].findChild,oe=l&&u((function(){return 7!=v(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=G(Y,t);r&&delete Y[t],H(e,t,n),r&&e!==Y&&H(Y,t,r)}:H,ce=function(e,t){var n=X[e]=v(q[L]);return Q(n,{type:M,tag:e,description:t}),l||(n.description=t),n},le=s?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof q},ae=function(e,t,n){e===Y&&ae(Z,t,n),h(e);var r=g(t,!0);return h(n),f(X,r)?(n.enumerable?(f(e,J)&&e[J][r]&&(e[J][r]=!1),n=v(n,{enumerable:y(0,!1)})):(f(e,J)||H(e,J,y(1,{})),e[J][r]=!0),oe(e,r,n)):H(e,r,n)},se=function(e,t){h(e);var n=m(t),r=w(n).concat(he(n));return A(r,(function(t){l&&!fe.call(n,t)||ae(e,t,n[t])})),e},ue=function(e,t){return void 0===t?v(e):se(v(e),t)},fe=function(e){var t=g(e,!0),n=R.call(this,t);return!(this===Y&&f(X,t)&&!f(Z,t))&&(!(n||!f(this,t)||!f(X,t)||f(this,J)&&this[J][t])||n)},be=function(e,t){var n=m(e),r=g(t,!0);if(n!==Y||!f(X,r)||f(Z,r)){var i=G(n,r);return!i||!f(X,r)||f(n,J)&&n[J][r]||(i.enumerable=!0),i}},de=function(e){var t=K(m(e)),n=[];return A(t,(function(e){f(X,e)||f(U,e)||n.push(e)})),n},he=function(e){var t=e===Y,n=K(t?Z:m(e)),r=[];return A(n,(function(e){!f(X,e)||t&&!f(Y,e)||r.push(X[e])})),r};if(a||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=E(e),n=function(e){this===Y&&n.call(Z,e),f(this,J)&&f(this[J],t)&&(this[J][t]=!1),oe(this,t,y(1,e))};return l&&ie&&oe(Y,t,{configurable:!0,set:n}),ce(t,e)},C(q[L],"toString",(function(){return W(this).tag})),C(q,"withoutSetter",(function(e){return ce(E(e),e)})),k.f=fe,P.f=ae,_.f=be,O.f=j.f=de,S.f=he,N.f=function(e){return ce($(e),e)},l&&(H(q[L],"description",{configurable:!0,get:function(){return W(this).description}}),c||C(Y,"propertyIsEnumerable",fe,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:q}),A(w(ne),(function(e){T(e)})),r({target:M,stat:!0,forced:!a},{for:function(e){var t=String(e);if(f(ee,t))return ee[t];var n=q(t);return ee[t]=n,te[n]=t,n},keyFor:function(e){if(!le(e))throw TypeError(e+" is not a symbol");if(f(te,e))return te[e]},useSetter:function(){ie=!0},useSimple:function(){ie=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!l},{create:ue,defineProperty:ae,defineProperties:se,getOwnPropertyDescriptor:be}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:de,getOwnPropertySymbols:he}),r({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(e){return S.f(p(e))}}),B){var pe=!a||u((function(){var e=q();return"[null]"!=B([e])||"{}"!=B({a:e})||"{}"!=B(Object(e))}));r({target:"JSON",stat:!0,forced:pe},{stringify:function(e,t,n){var r,i=[e],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=t,(d(t)||void 0!==e)&&!le(e))return b(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!le(t))return t}),i[1]=t,B.apply(null,i)}})}q[L][F]||V(q[L],F,q[L].valueOf),x(q,M),U[J]=!0},ab3a:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"marginTop1rem tableStyle"},[n("el-col",[n("el-row",[n("el-col",{attrs:{align:"right"}},[n("el-button",{attrs:{size:"medium"},on:{click:function(t){e.multipleChoice=!0}}},[e._v("Multiple choice")])],1)],1),n("el-row",[n("el-table",{ref:"multipleTable",attrs:{data:e.tableData},on:{"selection-change":e.handleSelectionChange}},[e.multipleChoice?n("el-table-column",{attrs:{type:"selection",width:"55"}}):e._e(),n("el-table-column",{attrs:{prop:"name",label:"userName"}}),n("el-table-column",{attrs:{prop:"email",label:"email"}}),n("el-table-column",{attrs:{prop:"role",label:"role"}}),n("el-table-column",{attrs:{width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.multipleChoice?e._e():n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.deleteUser(t.row)}}},[e._v(" Delete ")])]}}])})],1)],1),e.multipleChoice?n("el-row",{staticStyle:{"margin-top":"20px"}},[n("el-col",{attrs:{align:"left"}},[n("el-button",{attrs:{size:"medium",type:"danger"},on:{click:function(t){return e.deleteUser()}}},[e._v("Delete")]),n("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.cancel()}}},[e._v("Cancel")])],1)],1):e._e()],1),n("el-dialog",{attrs:{width:"20%",title:"",align:"center",visible:e.deleteUserVisible},on:{"update:visible":function(t){e.deleteUserVisible=t}}},[n("el-row",{attrs:{align:"center"}},[e._v(" Are you sure to delete ? ")]),n("el-row",{staticClass:"marginTop1rem contentTitle",attrs:{align:"center"}},[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.submit()}}},[e._v("Yes")]),n("el-button",{attrs:{size:"medium"},on:{click:function(t){e.deleteUserVisible=!1}}},[e._v("No")])],1)],1)],1)},i=[],o=(n("4160"),n("159b"),n("5530")),c=n("221d"),l=n("2f62"),a={name:"UserList",computed:{orgValue:function(){return console.log(this.$store.state.loginInfo.orgValue),this.$store.state.loginInfo.orgValue},userInfo:function(){return console.log(this.$store.state.loginInfo.userInfo),this.$store.state.loginInfo.userInfo}},components:{},data:function(){return{emails:[],multipleChoice:!1,multipleSelection:[],row:"",deleteUserVisible:!1,tableData:[]}},created:function(){this.getEmployeeManager()},methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["setUserLimitAct"])),{},{cancel:function(){this.$refs.multipleTable.clearSelection(),this.multipleChoice=!1},handleSelectionChange:function(e){this.multipleSelection=e},deleteUser:function(e){var t=this;this.emails=[],this.multipleChoice?this.multipleSelection.forEach((function(e){t.emails.push(e.email)})):this.emails.push(e.email),console.log(e),console.log(this.multipleSelection),this.deleteUserVisible=!0},getEmployeeManager:function(){var e=this,t={cla_org_id:this.userInfo[this.orgValue].cla_org_id,email:this.userInfo[this.orgValue].email};this.$axios({url:"/api"+c["A"],params:t,headers:{token:this.userInfo[this.orgValue].token}}).then((function(t){console.log(t),e.tableData=t.data,e.setUserLimitAct(t.data.length)})).catch((function(e){console.log(e)}))},submit:function(){var e=this,t={cla_org_id:this.userInfo[this.orgValue].cla_org_id,emails:this.emails};this.$axios({url:"/api"+c["j"],method:"delete",data:t,headers:{token:this.userInfo[this.orgValue].token}}).then((function(t){console.log(t),e.getEmployeeManager(),e.deleteUserVisible=!1})).catch((function(e){console.log(e)}))}})},s=a,u=(n("dcf0"),n("2877")),f=Object(u["a"])(s,r,i,!1,null,"05c753b8",null);t["default"]=f.exports},ade3:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),c=n("d039"),l=c((function(){o(1)}));r({target:"Object",stat:!0,forced:l},{keys:function(e){return o(i(e))}})},c268:function(e,t,n){},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),c=n("fc6a"),l=n("06cf"),a=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=c(e),i=l.f,s=o(r),u={},f=0;while(s.length>f)n=i(r,t=s[f++]),void 0!==n&&a(u,t,n);return u}})},dcf0:function(e,t,n){"use strict";var r=n("c268"),i=n.n(r);i.a},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),c=n("06cf").f,l=n("83ab"),a=i((function(){c(1)})),s=!l||a;r({target:"Object",stat:!0,forced:s,sham:!l},{getOwnPropertyDescriptor:function(e,t){return c(o(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r}}]);
//# sourceMappingURL=chunk-3943fe6a.0ef18bd1.js.map