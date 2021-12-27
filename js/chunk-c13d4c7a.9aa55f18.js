(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c13d4c7a"],{"2a71":function(e,t,n){var r,o,a;(function(n,l){o=[t],r=l,a="function"===typeof r?r.apply(t,o):r,void 0===a||(e.exports=a)})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={pagination:{goto:"Go to",page:"",itemsPerPage:" / page",total:function(e){return"Total "+e},prev5:"Previous 5 Pages",next5:"Next 5 Pages"},table:{confirmFilter:"Confirm",resetFilter:"Reset"}};e.default=t}))},"59fa":function(e,t,n){var r,o,a;(function(n,l){o=[t],r=l,a="function"===typeof r?r.apply(t,o):r,void 0===a||(e.exports=a)})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={pagination:{goto:"前往",page:"页",itemsPerPage:" 条/页",total:function(e){return"共 "+e+" 条"},prev5:"向前 5 页",next5:"向后 5 页"},table:{confirmFilter:"筛选",resetFilter:"重置"}};e.default=t}))},7174:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("locale 国际化")]),n("Usage"),n("SwitchLang"),n("CoverLang"),n("Api")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"使用方法",fileName:"usage.md"}}),e._m(0),n("anchor",{attrs:{"is-edit":"",label:"全局使用",fileName:"usage.md"}}),n("p",[e._v("将 veLocale 组件挂载到 Vue 的 prototype 原型上，便于全局调用")]),e._m(1),n("p",[e._v("调用")]),e._m(2)],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-javascript"},[e._v('import Vue from "vue";\nimport { VeLocale } from "vue-easytable";\n// 引入英文语言包\nimport enUS from "vue-easytable/libs/locale/lang/en-US.js";\n\nVeLocale.use(enUS);\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-javascript"},[e._v('import Vue from "vue";\nimport { VeLocale } from "vue-easytable";\n\nVue.prototype.$veLocale = VeLocale;\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-javascript"},[e._v('import enUS from "vue-easytable/libs/locale/lang/en-US.js";\nthis.$veLocale.use(enUS);\n')])])}],c=n("2877"),i={},s=Object(c["a"])(i,a,l,!1,null,null,null),u=s.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"语言切换",fileName:"switch-lang.md"}}),e._m(0),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <div>\n            <button class="button-demo" @click="englishLang()">英文</button>\n            <button class="button-demo" @click="chineseLang()">中文</button>\n            <br />\n            <br />\n        </div>\n        <div>\n            <ve-pagination :total="600" />\n        </div>\n    </div>\n</template>\n<script>\n    import zhCN from "vue-easytable/libs/locale/lang/zh-CN";\n    import enUS from "vue-easytable/libs/locale/lang/en-US";\n\n    export default {\n        methods: {\n            englishLang() {\n                this.$veLocale.use(enUS);\n            },\n            chineseLang() {\n                this.$veLocale.use(zhCN);\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("你可以通过 VeLocal 组件实现多语言支持，使用 "),n("code",[e._v("VeLocal.use")]),e._v(" 方法可以切换当前使用的语言")])}],f=n("59fa"),d=n.n(f),m=n("2a71"),b=n.n(m);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("div",[n("button",{staticClass:"button-demo",on:{click:function(t){return e.englishLang()}}},[e._v("英文")]),e._v(" "),n("button",{staticClass:"button-demo",on:{click:function(t){return e.chineseLang()}}},[e._v("中文")]),e._v(" "),n("br"),e._v(" "),n("br")]),e._v(" "),n("div",[n("ve-pagination",{attrs:{total:600}})],1)])]],2)},t=[],n={methods:{englishLang:function(){this.$veLocale.use(b.a)},chineseLang:function(){this.$veLocale.use(d.a)}}};return h({render:e,staticRenderFns:t},n)}()}},O=y,j=Object(c["a"])(O,p,v,!1,null,null,null),L=j.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"覆盖语言包",fileName:"cover-lang.md"}}),e._m(0),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <div>\n            <button class="button-demo" @click="coverLang()">修改文案</button>\n            <br />\n            <br />\n        </div>\n        <div>\n            <ve-pagination :total="600" />\n        </div>\n    </div>\n</template>\n<script>\n    export default {\n        methods: {\n            coverLang() {\n                const lang = {\n                    pagination: {\n                        goto: "跳转到",\n                    },\n                };\n                this.$veLocale.update(lang);\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("通过 "),n("code",[e._v("VeLocale.update")]),e._v(" 方法可以实现文案的修改和扩展")])}];function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("div",[n("button",{staticClass:"button-demo",on:{click:function(t){return e.coverLang()}}},[e._v("修改文案")]),e._v(" "),n("br"),e._v(" "),n("br")]),e._v(" "),n("div",[n("ve-pagination",{attrs:{total:600}})],1)])]],2)},t=[],n={methods:{coverLang:function(){var e={pagination:{goto:"跳转到"}};this.$veLocale.update(e)}}};return x({render:e,staticRenderFns:t},n)}()}},S=E,k=Object(c["a"])(S,P,w,!1,null,null,null),U=k.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"API",fileName:"api.md"}}),n("h3",[e._v("methods")]),e._m(0)],1)},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",[e._v("方法名称")]),n("th",[e._v("说明")]),n("th",[e._v("参数")])])]),n("tbody",[n("tr",[n("td",[e._v("use")]),n("td",[e._v("使用语言包")]),n("td",[e._v("语言包")])]),n("tr",[n("td",[e._v("update")]),n("td",[e._v("修改或者扩展语言包")]),n("td",[e._v("语言包")])])])])}],D={},F=Object(c["a"])(D,V,N,!1,null,null,null),T=F.exports,z={components:{Usage:u,SwitchLang:L,CoverLang:U,Api:T}},A=z,R=Object(c["a"])(A,r,o,!1,null,null,null);t["default"]=R.exports}}]);
//# sourceMappingURL=chunk-c13d4c7a.9aa55f18.js.map