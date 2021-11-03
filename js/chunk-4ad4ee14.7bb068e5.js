(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ad4ee14"],{"6edb":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Cell Ellipsis")]),t("Explain"),t("Base"),t("Ellipsis"),t("EllipsisLine"),t("API",{attrs:{title:"API",anchor:"API",desc:"ellipsis option"}})],1)},a=[],s=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、The "),t("code",[e._v("ellipsis")]),e._v(" attribute of "),t("code",[e._v("column")]),e._v(" is used to set cell ellipsis"),t("br"),e._v(" 2、How many lines beyond the content of "),t("code",[e._v("lineClamp")]),e._v(" are omitted")])])])}],l=t("2877"),r={},d=Object(l["a"])(r,s,o,!1,null,null,null),c=d.exports,h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Default Wrap",fileName:"base.md"}}),t("p",[e._v("When the default text content exceeds the cell width, it will be displayed as a new line")]),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        rowKeyFieldName="rowKey"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Xiamen,this is a long text,this is a long text",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {},\n    };\n<\/script>\n')])])])],2)],1)},g=[];function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen,this is a long text,this is a long text",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{}};return b({render:e,staticRenderFns:n},t)}()}},y=m,f=Object(l["a"])(y,h,g,!1,null,null,null),x=f.exports,v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Cell Content Ellipsis",fileName:"ellipsis.md"}}),t("demo-block",[t("div",[t("p",[e._v("The "),t("code",[e._v("ellipsis")]),e._v(" attribute of "),t("code",[e._v("column")]),e._v(" is used to set the display ellipsis.Default single line ellipsis")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        rowKeyFieldName="rowKey"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                        ellipsis: {\n                            showTitle: true,\n                        },\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Xiamen,this is a long text,this is a long text",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {},\n    };\n<\/script>\n')])])])],2)],1)},w=[];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){j(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var N={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%",ellipsis:{showTitle:!0}}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen,this is a long text,this is a long text",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{}};return C({render:e,staticRenderFns:n},t)}()}},_=N,K=Object(l["a"])(_,v,w,!1,null,null,null),k=K.exports,A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Multiline Ellipsis",fileName:"ellipsis-line.md"}}),e._m(0),t("demo-block",[t("div",[t("p",[e._v("How many lines cell ellipsis through "),t("code",[e._v("lineClamp")])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        rowKeyFieldName="rowKey"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                        ellipsis: {\n                            showTitle: true,\n                            lineClamp: 2,\n                        },\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address:\n                            "No.1 Century Avenue, Xiamen,this is a long text,this is a long text",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {},\n    };\n<\/script>\n')])])])],2)],1)},D=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("At present, this function only supports browser with "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-line-clamp"}},[e._v("-webkit-line-clamp attribute")])])}];function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){S(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var J={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%",ellipsis:{showTitle:!0,lineClamp:2}}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text,this is a long text",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen,this is a long text,this is a long text",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{}};return E({render:e,staticRenderFns:n},t)}()}},$=J,F=Object(l["a"])($,A,D,!1,null,null,null),z=F.exports,B=t("bbaa"),H={name:"basic-main",components:{Explain:c,Base:x,Ellipsis:k,EllipsisLine:z,API:B["a"]}},L=H,q=Object(l["a"])(L,i,a,!1,null,null,null);n["default"]=q.exports},bbaa:function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.columns.ellipsisProps.data,columns:e.db.columns.ellipsisProps.columns}})],1)},a=[],s=t("3ef3"),o=t("7eb4"),l={components:{tpl:s["a"]},props:{anchor:{type:String,default:"Cell ellipsis"},desc:{type:String,default:"ellipsis"}},data:function(){return{db:o["a"]}}},r=l,d=t("2877"),c=Object(d["a"])(r,i,a,!1,null,null,null);n["a"]=c.exports}}]);
//# sourceMappingURL=chunk-4ad4ee14.7bb068e5.js.map