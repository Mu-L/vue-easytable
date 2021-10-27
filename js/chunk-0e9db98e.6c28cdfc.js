(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e9db98e"],{"2a71":function(e,t,n){var o,a,r;(function(n,l){a=[t],o=l,r="function"===typeof o?o.apply(t,a):o,void 0===r||(e.exports=r)})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={pagination:{goto:"Go to",page:"",itemsPerPage:" / page",total:function(e){return"Total "+e},prev5:"Previous 5 Pages",next5:"Next 5 Pages"},table:{confirmFilter:"Confirm",resetFilter:"Reset"}};e.default=t}))},"59fa":function(e,t,n){var o,a,r;(function(n,l){a=[t],o=l,r="function"===typeof o?o.apply(t,a):o,void 0===r||(e.exports=r)})("undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={pagination:{goto:"前往",page:"页",itemsPerPage:" 条/页",total:function(e){return"共 "+e+" 条"},prev5:"向前 5 页",next5:"向后 5 页"},table:{confirmFilter:"筛选",resetFilter:"重置"}};e.default=t}))},"97f5":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("locale")]),n("Usage"),n("SwitchLang"),n("CoverLang"),n("Api")],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{label:"Usage"}}),e._m(0),n("anchor",{attrs:{label:"Global Usage"}}),e._v(" Mount the `velocale` component on the prototype of Vue for global call "),e._m(1),n("p",[e._v("use")]),e._m(2)],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-javascript"},[e._v('import Vue from "vue";\nimport { VeLocale } from "vue-easytable";\n// import language config\nimport enUS from "vue-easytable/libs/locale/lang/en-US.js";\n\nVeLocale.use(enUS);\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-javascript"},[e._v('import Vue from "vue";\nimport { VeLocale } from "vue-easytable";\n\nVue.prototype.$veLocale = VeLocale;\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-javascript"},[e._v('import enUS from "vue-easytable/libs/locale/lang/en-US.js";\nthis.$veLocale.use(enUS);\n')])])}],i=n("2877"),c={},s=Object(i["a"])(c,r,l,!1,null,null,null),u=s.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Language Switching",fileName:"switch-lang.md"}}),e._m(0),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <div>\n            <button class="button-demo" @click="englishLang()">English</button>\n            <button class="button-demo" @click="chineseLang()">Chinese</button>\n            <br />\n            <br />\n        </div>\n        <div>\n            <ve-pagination :total="600" />\n        </div>\n    </div>\n</template>\n<script>\n    import zhCN from "vue-easytable/libs/locale/lang/zh-CN";\n    import enUS from "vue-easytable/libs/locale/lang/en-US";\n\n    export default {\n        methods: {\n            englishLang() {\n                this.$veLocale.use(enUS);\n            },\n            chineseLang() {\n                this.$veLocale.use(zhCN);\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You can use the velocal component to support multiple languages "),n("code",[e._v("VeLocal.use")]),e._v(" Method to switch the current language")])}],v=n("59fa"),d=n.n(v),g=n("2a71"),m=n.n(g);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("div",[n("button",{staticClass:"button-demo",on:{click:function(t){return e.englishLang()}}},[e._v("English")]),e._v(" "),n("button",{staticClass:"button-demo",on:{click:function(t){return e.chineseLang()}}},[e._v("Chinese")]),e._v(" "),n("br"),e._v(" "),n("br")]),e._v(" "),n("div",[n("ve-pagination",{attrs:{total:600}})],1)])]],2)},t=[],n={methods:{englishLang:function(){this.$veLocale.use(m.a)},chineseLang:function(){this.$veLocale.use(d.a)}}};return h({render:e,staticRenderFns:t},n)}()}},y=O,j=Object(i["a"])(y,p,f,!1,null,null,null),L=j.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Override Default Configs",fileName:"cover-lang.md"}}),n("p",[e._v("Use Locale.update method to modify the default configs.")]),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <div>\n            <button class="button-demo" @click="coverLang()">Override Config</button>\n            <br />\n            <br />\n        </div>\n        <div>\n            <ve-pagination :total="600" />\n        </div>\n    </div>\n</template>\n<script>\n    export default {\n        methods: {\n            coverLang() {\n                const lang = {\n                    pagination: {\n                        goto: "to",\n                    },\n                };\n                this.$veLocale.update(lang);\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},w=[];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("div",[n("button",{staticClass:"button-demo",on:{click:function(t){return e.coverLang()}}},[e._v("Override Config")]),e._v(" "),n("br"),e._v(" "),n("br")]),e._v(" "),n("div",[n("ve-pagination",{attrs:{total:600}})],1)])]],2)},t=[],n={methods:{coverLang:function(){var e={pagination:{goto:"to"}};this.$veLocale.update(e)}}};return $({render:e,staticRenderFns:t},n)}()}},S=x,U=Object(i["a"])(S,P,w,!1,null,null,null),k=U.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"API",fileName:"api.md"}}),n("h3",[e._v("methods")]),e._m(0)],1)},V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",[e._v("Methods")]),n("th",[e._v("Description")]),n("th",[e._v("Parameters")])])]),n("tbody",[n("tr",[n("td",[e._v("use")]),n("td",[e._v("Using language configs")]),n("td",[e._v("language config")])]),n("tr",[n("td",[e._v("update")]),n("td",[e._v("modify the default configs")]),n("td",[e._v("language config")])])])])}],N={},F=Object(i["a"])(N,D,V,!1,null,null,null),M=F.exports,T={components:{Usage:u,SwitchLang:L,CoverLang:k,Api:M}},z=T,A=Object(i["a"])(z,o,a,!1,null,null,null);t["default"]=A.exports}}]);
//# sourceMappingURL=chunk-0e9db98e.6c28cdfc.js.map