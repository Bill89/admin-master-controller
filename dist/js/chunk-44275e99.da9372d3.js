(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44275e99"],{5750:function(e,t,n){},9827:function(e,t,n){"use strict";var o=n("d0d6"),a=n.n(o);a.a},a5cd:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",{staticStyle:{height:"100%",width:"100%",overflow:"hidden"},attrs:{shadow:""}},[n("div",{staticClass:"department-outer"},[n("div",{staticClass:"tip-box"},[n("b",{staticStyle:{"margin-right":"20px"}},[e._v("powered by "),n("a",{attrs:{target:"blank",href:"https://github.com/lison16"}},[e._v("Lison")])]),n("a",{staticStyle:{"margin-right":"10px"},attrs:{target:"blank",href:"https://github.com/lison16/v-org-tree"}},[e._v("v-org-tree文档")])]),n("div",{staticClass:"zoom-box"},[n("zoom-controller",{attrs:{min:20,max:200},model:{value:e.zoom,callback:function(t){e.zoom=t},expression:"zoom"}})],1),n("div",{staticClass:"view-box"},[e.data?n("org-view",{attrs:{data:e.data,"zoom-handled":e.zoomHandled},on:{"on-menu-click":e.handleMenuClick}}):e._e()],1)])])},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"dragWrapper",staticClass:"org-tree-drag-wrapper",on:{mousedown:e.mousedownView,contextmenu:e.handleDocumentContextmenu}},[n("div",{staticClass:"org-tree-wrapper",style:e.orgTreeStyle},[e.data?n("v-org-tree",{attrs:{data:e.data,"node-render":e.nodeRender,"expand-all":!0,collapsable:""},on:{"on-node-click":e.handleNodeClick}}):e._e()],1)])},s=[],r=(n("c5f6"),n("90de")),c=[{key:"edit",label:"编辑部门"},{key:"detail",label:"查看部门"},{key:"new",label:"新增子部门"},{key:"delete",label:"删除部门"}],u={name:"OrgView",props:{zoomHandled:{type:Number,default:1},data:Object},data:function(){return{currentContextMenuId:"",orgTreeOffsetLeft:0,orgTreeOffsetTop:0,initPageX:0,initPageY:0,oldMarginLeft:0,oldMarginTop:0,canMove:!1}},computed:{orgTreeStyle:function(){return{transform:"translate(-50%, -50%) scale(".concat(this.zoomHandled,", ").concat(this.zoomHandled,")"),marginLeft:"".concat(this.orgTreeOffsetLeft,"px"),marginTop:"".concat(this.orgTreeOffsetTop,"px")}}},methods:{handleNodeClick:function(e,t,n){n()},closeMenu:function(){this.currentContextMenuId=""},getBgColor:function(e){return this.currentContextMenuId===e.id?e.isRoot?"#0d7fe8":"#5d6c7b":""},nodeRender:function(e,t){return e("div",{class:["custom-org-node",t.children&&t.children.length?"has-children-label":""],on:{mousedown:function(e){return e.stopPropagation()},contextmenu:this.contextmenu.bind(this,t)}},[t.label,e("dropdown",{attrs:{trigger:"custom",visible:this.currentContextMenuId===t.id},class:"context-menu",nativeOn:{click:this.handleDropdownClick},on:{"on-click":this.handleContextMenuClick.bind(this,t)},style:{transform:"scale(".concat(1/this.zoomHandled,", ").concat(1/this.zoomHandled,")")},directives:[{name:"click-outside",value:this.closeMenu}]},[e("dropdown-menu",{slot:"list"},[c.map(function(t){return e("dropdown-item",{attrs:{name:t.key}},[t.label])})])])])},contextmenu:function(e,t){var n=t||window.event;n.preventDefault?n.preventDefault():n.returnValue=!1,this.currentContextMenuId=e.id},setDepartmentData:function(e){e.isRoot=!0,this.departmentData=e},mousedownView:function(e){this.canMove=!0,this.initPageX=e.pageX,this.initPageY=e.pageY,this.oldMarginLeft=this.orgTreeOffsetLeft,this.oldMarginTop=this.orgTreeOffsetTop,Object(r["f"])(document,"mousemove",this.mousemoveView),Object(r["f"])(document,"mouseup",this.mouseupView)},mousemoveView:function(e){if(this.canMove){var t=e.pageX,n=e.pageY;this.orgTreeOffsetLeft=this.oldMarginLeft+t-this.initPageX,this.orgTreeOffsetTop=this.oldMarginTop+n-this.initPageY}},mouseupView:function(){this.canMove=!1,Object(r["e"])(document,"mousemove",this.mousemoveView),Object(r["e"])(document,"mouseup",this.mouseupView)},handleDropdownClick:function(e){e.stopPropagation()},handleDocumentContextmenu:function(){this.canMove=!1},handleContextMenuClick:function(e,t){this.$emit("on-menu-click",{data:e,key:t})}},mounted:function(){Object(r["f"])(document,"contextmenu",this.handleDocumentContextmenu)},beforeDestroy:function(){Object(r["e"])(document,"contextmenu",this.handleDocumentContextmenu)}},l=u,d=n("2877"),m=Object(d["a"])(l,i,s,!1,null,null,null),f=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"zoom-wrapper"},[n("button",{staticClass:"zoom-button",on:{click:function(t){return e.scale("down")}}},[n("Icon",{attrs:{type:"md-remove",size:14,color:"#fff"}})],1),n("span",{staticClass:"zoom-number"},[e._v(e._s(e.value)+"%")]),n("button",{staticClass:"zoom-button",on:{click:function(t){return e.scale("up")}}},[n("Icon",{attrs:{type:"md-add",size:14,color:"#fff"}})],1)])},p=[],g={name:"ZoomController",props:{value:{type:Number,default:100},step:{type:Number,default:20},min:{type:Number,default:10},max:{type:Number,default:200}},methods:{scale:function(e){var t=this.value+("down"===e?-this.step:this.step);t<this.min&&"down"===e||t>this.max&&"up"===e||this.$emit("input",t)}}},v=g,b=(n("9827"),Object(d["a"])(v,h,p,!1,null,null,null)),w=b.exports,x=n("7e1e"),C=(n("5750"),{edit:"编辑部门",detail:"查看部门",new:"新增子部门",delete:"删除部门"}),k={name:"org_tree_page",components:{OrgView:f,ZoomController:w},data:function(){return{data:null,zoom:100}},computed:{zoomHandled:function(){return this.zoom/100}},methods:{setDepartmentData:function(e){return e.isRoot=!0,e},handleMenuClick:function(e){var t=e.data,n=e.key;this.$Message.success({duration:5,content:"点击了《".concat(t.label,"》节点的'").concat(C[n],"'菜单")})},getDepartmentData:function(){var e=this;Object(x["c"])().then(function(t){var n=t.data;e.data=n})}},mounted:function(){this.getDepartmentData()}},y=k,M=Object(d["a"])(y,o,a,!1,null,null,null);t["default"]=M.exports},d0d6:function(e,t,n){}}]);