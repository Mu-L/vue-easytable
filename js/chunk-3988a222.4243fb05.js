(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3988a222"],{"05ea":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.virtualScrollOption.data,columns:e.db.virtualScrollOption.columns}})],1)},r=[],l=t("3ef3"),i=t("7eb4"),o={components:{tpl:l["a"]},props:{anchor:{type:String,default:"Virtual scroll configuration"},desc:{type:String,default:"virtualScrollOption"}},data:function(){return{db:i["a"]}}},c=o,d=t("2877"),s=Object(d["a"])(c,a,r,!1,null,null,null);n["a"]=s.exports},"6ce3":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Footer Width Virtual Scrolling",fileName:"virtual-scroll.md"}}),t("demo-block",[t("div",[t("p",[e._v("Virtual scrolling is set in the table, and footer supports it automatically without additional configuration")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            fixed-header\n            :max-height="500"\n            :virtual-scroll-option="virtualScrollOption"\n            :columns="columns"\n            :table-data="tableData"\n            :footer-data="footerData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    enable: true,\n                },\n\n                columns: [\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            getRandom(min, max) {\n                return Math.floor(Math.random() * (max - min) + min);\n            },\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    data.push({\n                        rowKey: i,\n                        name: i,\n                        date: i,\n                        hobby: i,\n                        address: i,\n                    });\n                }\n\n                this.tableData = data;\n\n                this.footerData = [\n                    {\n                        rowKey: 0,\n                        name: "Average Values",\n                        date: 1100,\n                        hobby: 1200,\n                        address: 1300,\n                    },\n                    {\n                        rowKey: 1,\n                        name: "Summary Values",\n                        date: 701000,\n                        hobby: 801000,\n                        address: 801000,\n                    },\n                ];\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},r=[];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"footer-data":e.footerData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){return{virtualScrollOption:{enable:!0},columns:[{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{getRandom:function(e,n){return Math.floor(Math.random()*(n-e)+e)},initData:function(){for(var e=[],n=0;n<1e4;n++)e.push({rowKey:n,name:n,date:n,hobby:n,address:n});this.tableData=e,this.footerData=[{rowKey:0,name:"Average Values",date:1100,hobby:1200,address:1300},{rowKey:1,name:"Summary Values",date:701e3,hobby:801e3,address:801e3}]}},created:function(){this.initData()}};return i({render:e,staticRenderFns:n},t)}()}},d=c,s=t("2877"),u=Object(s["a"])(d,a,r,!1,null,null,null);n["a"]=u.exports},e4bc:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Virtual Scroll")]),t("Explain"),t("Base"),t("AutoHeight"),t("RowCheckbox"),t("RowRadio"),t("RowExpand"),t("ColumnFixed"),t("FooterSummary"),t("API",{attrs:{title:"API",anchor:"API",desc:"virtualScrollOption configuration"}})],1)},r=[],l=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、Property "),t("code",[e._v("virtualScrollOption")]),e._v(" to enable virtual scroll. It is recommended to use when more than "),t("strong",[e._v("1000")]),e._v(" row data need to be displayed at one time,It can support more than "),t("strong",[e._v("200000")]),e._v(" row data"),t("br"),e._v(" 2、The property "),t("code",[e._v("maxHeight")]),e._v(" sets the maximum height of the virtual scroll area."),t("code",[e._v("maxHeight")]),e._v("is a required attribute"),t("br"),e._v(" 3、"),t("code",[e._v("rowKeyFieldName")]),e._v(" is a required attribute."),t("br"),e._v(" 4、"),t("strong",[e._v("After the virtual scrolling function is turned on, other functions are still available")])])])])}],o=t("2877"),c={},d=Object(o["a"])(c,l,i,!1,null,null,null),s=d.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Base Usage",fileName:"base.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            :max-height="500"\n            :virtual-scroll-option="virtualScrollOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n                columns: [\n                    {\n                        field: "index",\n                        key: "a",\n                        title: "#",\n                        width: 100,\n                        align: "left",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    data.push({\n                        rowKey: i,\n                        index: i,\n                        name: `name${i}`,\n                        hobby: `hobby${i}`,\n                        address: `address${i}`,\n                    });\n                }\n\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},b=[];function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"max-height":500,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){return{virtualScrollOption:{enable:!0},columns:[{field:"index",key:"a",title:"#",width:100,align:"left"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],n=0;n<1e4;n++)e.push({rowKey:n,index:n,name:"name".concat(n),hobby:"hobby".concat(n),address:"address".concat(n)});this.tableData=e}},created:function(){this.initData()}};return m({render:e,staticRenderFns:n},t)}()}},y=h,v=Object(o["a"])(y,u,b,!1,null,null,null),w=v.exports,O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Unequal Row Height",fileName:"auto-height.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            fixed-header\n            :max-height="500"\n            :virtual-scroll-option="virtualScrollOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n                columns: [\n                    {\n                        field: "index",\n                        key: "a",\n                        title: "#",\n                        width: 100,\n                        align: "left",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                        renderBodyCell: ({ row }, h) => {\n                            return <span domPropsInnerHTML={row.name}></span>;\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            getRandom(min, max) {\n                return Math.floor(Math.random() * (max - min) + min);\n            },\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    let value = "";\n                    if (i % 2 === 0) {\n                        const rowCount = this.getRandom(3, 5);\n\n                        for (let i = 0; i < rowCount; i++) {\n                            value += `this is the long word.<br />`;\n                        }\n                    } else {\n                        value = `name${i}`;\n                    }\n\n                    data.push({\n                        rowKey: i,\n                        index: i,\n                        name: value,\n                        hobby: `hobby${i}`,\n                        address: `address${i}`,\n                    });\n                }\n\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},g=[];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){D(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function D(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var j={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){this.$createElement;return{virtualScrollOption:{enable:!0},columns:[{field:"index",key:"a",title:"#",width:100,align:"left"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:function(e,n){var t=e.row;return n("span",{domProps:{innerHTML:t.name}})}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{getRandom:function(e,n){return Math.floor(Math.random()*(n-e)+e)},initData:function(){for(var e=[],n=0;n<1e4;n++){var t="";if(n%2===0)for(var a=this.getRandom(3,5),r=0;r<a;r++)t+="this is the long word.<br />";else t="name".concat(n);e.push({rowKey:n,index:n,name:t,hobby:"hobby".concat(n),address:"address".concat(n)})}this.tableData=e}},created:function(){this.initData()}};return k({render:e,staticRenderFns:n},t)}()}},P=j,_=Object(o["a"])(P,O,g,!1,null,null,null),S=_.exports,K=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Combination Row Checkbox",fileName:"row-checkbox.md"}}),t("demo-block",[t("div",[t("p",[e._v("Row checkbox, Need specify "),t("code",[e._v("rowKeyFieldName")]),e._v(" property")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            fixed-header\n            :max-height="500"\n            :virtual-scroll-option="virtualScrollOption"\n            :checkbox-option="checkboxOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n                checkboxOption: {\n                    // 行选择改变事件\n                    selectedRowChange: ({ row, isSelected, selectedRowKeys }) => {\n                        console.log(row, isSelected, selectedRowKeys);\n                    },\n                    // 全选改变事件\n                    selectedAllChange: ({ isSelected, selectedRowKeys }) => {\n                        console.log(isSelected, selectedRowKeys);\n                    },\n                },\n\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        // type=checkbox\n                        type: "checkbox",\n                        title: "",\n                        width: 100,\n                        align: "center",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                        renderBodyCell: ({ row }, h) => {\n                            return <span domPropsInnerHTML={row.name}></span>;\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    data.push({\n                        rowKey: i,\n                        name: `name${i}`,\n                        hobby: `hobby${i}`,\n                        address: `address${i}`,\n                    });\n                }\n\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},E=[];function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function $(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){C(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var N={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,"checkbox-option":e.checkboxOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){this.$createElement;return{virtualScrollOption:{enable:!0},checkboxOption:{selectedRowChange:function(e){var n=e.row,t=e.isSelected,a=e.selectedRowKeys;console.log(n,t,a)},selectedAllChange:function(e){var n=e.isSelected,t=e.selectedRowKeys;console.log(n,t)}},columns:[{field:"",key:"a",type:"checkbox",title:"",width:100,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:function(e,n){var t=e.row;return n("span",{domProps:{innerHTML:t.name}})}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],n=0;n<1e4;n++)e.push({rowKey:n,name:"name".concat(n),hobby:"hobby".concat(n),address:"address".concat(n)});this.tableData=e}},created:function(){this.initData()}};return $({render:e,staticRenderFns:n},t)}()}},H=N,A=Object(o["a"])(H,K,E,!1,null,null,null),M=A.exports,F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Combination Row Radio",fileName:"row-radio.md"}}),t("demo-block",[t("div",[t("p",[e._v("Row radio, Need specify "),t("code",[e._v("rowKeyFieldName")]),e._v(" property")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            fixed-header\n            :max-height="500"\n            :virtual-scroll-option="virtualScrollOption"\n            :radio-option="radioOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n                radioOption: {\n                    // 行选择改变事件\n                    selectedRowChange: ({ row }) => {\n                        console.log(row);\n                    },\n                },\n\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        // type=radio\n                        type: "radio",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                        renderBodyCell: ({ row }, h) => {\n                            return <span domPropsInnerHTML={row.name}></span>;\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    data.push({\n                        rowKey: i,\n                        name: `name${i}`,\n                        hobby: `hobby${i}`,\n                        address: `address${i}`,\n                    });\n                }\n\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},I=[];function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){L(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function L(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var V={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,"radio-option":e.radioOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){this.$createElement;return{virtualScrollOption:{enable:!0},radioOption:{selectedRowChange:function(e){var n=e.row;console.log(n)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:function(e,n){var t=e.row;return n("span",{domProps:{innerHTML:t.name}})}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],n=0;n<1e4;n++)e.push({rowKey:n,name:"name".concat(n),hobby:"hobby".concat(n),address:"address".concat(n)});this.tableData=e}},created:function(){this.initData()}};return T({render:e,staticRenderFns:n},t)}()}},q=V,J=Object(o["a"])(q,F,I,!1,null,null,null),U=J.exports,W=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Combination Row Expand",fileName:"row-expand.md"}}),t("demo-block",[t("div",[t("p",[e._v("Row expand, Need specify "),t("code",[e._v("rowKeyFieldName")]),e._v(" property")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            fixed-header\n            :max-height="500"\n            :virtual-scroll-option="virtualScrollOption"\n            :expand-option="expandOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n                expandOption: {\n                    render: ({ row, column, rowIndex }, h) => {\n                        return (\n                            <p>\n                                My name is <span style="color:#1890ff;">{row.name}</span>\n                                ,I\'m living in {row.address}\n                            </p>\n                        );\n                    },\n                },\n\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        // type=expand\n                        type: "expand",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                        renderBodyCell: ({ row }, h) => {\n                            return <span domPropsInnerHTML={row.name}></span>;\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    data.push({\n                        rowKey: i,\n                        name: `name${i}`,\n                        hobby: `hobby${i}`,\n                        address: `address${i}`,\n                    });\n                }\n\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},z=[];function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){X(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"fixed-header":"","max-height":500,"virtual-scroll-option":e.virtualScrollOption,"expand-option":e.expandOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){this.$createElement;return{virtualScrollOption:{enable:!0},expandOption:{render:function(e,n){var t=e.row;e.column,e.rowIndex;return n("p",["My name is ",n("span",{style:"color:#1890ff;"},[t.name]),",I'm living in ",t.address])}},columns:[{field:"",key:"a",type:"expand",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left",renderBodyCell:function(e,n){var t=e.row;return n("span",{domProps:{innerHTML:t.name}})}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[]}},methods:{initData:function(){for(var e=[],n=0;n<1e4;n++)e.push({rowKey:n,name:"name".concat(n),hobby:"hobby".concat(n),address:"address".concat(n)});this.tableData=e}},created:function(){this.initData()}};return Q({render:e,staticRenderFns:n},t)}()}},Z=Y,ee=Object(o["a"])(Z,W,z,!1,null,null,null),ne=ee.exports,te=t("6ce3"),ae=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Combination Column fixed",fileName:"column-fixed.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            fixed-header\n            border-y\n            :max-height="500"\n            :scroll-width="1600"\n            :virtual-scroll-option="virtualScrollOption"\n            :columns="columns"\n            :table-data="tableData"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                },\n                columns: [\n                    {\n                        field: "col1",\n                        key: "a",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "d",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "e",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "f",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col7",\n                        key: "g",\n                        title: "col7",\n                        width: 50,\n                        fixed: "right",\n                    },\n                    {\n                        field: "col8",\n                        key: "h",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                        col9: i,\n                        col10: i,\n                    });\n                }\n\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},re=[];function le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?le(Object(t),!0).forEach((function(n){oe(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function oe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ce={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"fixed-header":"","border-y":"","max-height":500,"scroll-width":1600,"virtual-scroll-option":e.virtualScrollOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){return{virtualScrollOption:{enable:!0},columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{field:"col7",key:"g",title:"col7",width:50,fixed:"right"},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}],tableData:[]}},methods:{initData:function(){for(var e=[],n=0;n<1e4;n++)e.push({rowKey:n,col1:n,col2:n,col3:n,col4:n,col5:n,col6:n,col7:n,col8:n,col9:n,col10:n});this.tableData=e}},created:function(){this.initData()}};return ie({render:e,staticRenderFns:n},t)}()}},de=ce,se=Object(o["a"])(de,ae,re,!1,null,null,null),ue=se.exports,be=t("05ea"),fe={name:"basic-main",components:{Explain:s,Base:w,AutoHeight:S,RowCheckbox:M,RowRadio:U,RowExpand:ne,ColumnFixed:ue,FooterSummary:te["a"],API:be["a"]}},me=fe,pe=Object(o["a"])(me,a,r,!1,null,null,null);n["default"]=pe.exports}}]);
//# sourceMappingURL=chunk-3988a222.4243fb05.js.map