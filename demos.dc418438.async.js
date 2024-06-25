"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[433],{30414:function(e,n,r){r.r(n);var t=r(67294),i=r(73061),o=r(94145),u=(r(59893),r(85893));n.default=function(){var e=(0,t.useRef)(),n=(0,t.useRef)();return(0,t.useEffect)((function(){return e.current=(0,o.initMap)("cesiumContainer",{home:[116.3,39.9,25e6]}),function(){var n;null===(n=e.current)||void 0===n||n.destroy()}}),[]),(0,u.jsx)("div",{id:"cesiumContainer",children:(0,u.jsxs)("div",{className:"draw-tools",children:[(0,u.jsx)("button",{onClick:function(){n.current||(n.current=new i.Control(e.current)),n.current.openSun()},children:"开启光照"}),(0,u.jsx)("button",{onClick:function(){n.current||(n.current=new i.Control(e.current)),n.current.closeSun()},children:"关闭光照"})]})})}},18046:function(e,n,r){r.r(n);var t=r(44155),i=r(67294),o=r(94145),u=r(73061),c=(r(82337),r(85893)),a=[{label:"方位角距离测量",key:"Distance",tool:u.AzimuthAndDistanceMeasure},{label:"三角测量",key:"Triangle",tool:u.TriangleMeasure}];n.default=function(){var e=(0,i.useRef)(),n=(0,i.useRef)();(0,i.useEffect)((function(){return e.current=(0,o.initMap)("cesiumContainer"),e.current.camera.setView({destination:t.Cartesian3.fromDegrees(138.43,35.21,5e3),orientation:{heading:t.Math.toRadians(0),pitch:t.Math.toRadians(-15),roll:t.Math.toRadians(0)}}),function(){var r,t;null===(r=n.current)||void 0===r||r.destroy(),n.current=void 0,null===(t=e.current)||void 0===t||t.destroy()}}),[]);return(0,c.jsx)("div",{id:"cesiumContainer",children:(0,c.jsxs)("div",{className:"draw-tools",children:[a.map((function(r){return(0,c.jsx)("button",{onClick:function(){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.current&&r&&t&&(n.current=new t(e.current,{units:"kilometers",locale:{start:"起点",formatAngle:function(e){return"角度: ".concat(e,"°")},formatLength:function(e,n){return e<1e3?"距离:"+e+"米":"距离:"+n+"公里"}},drawerOptions:{tips:{init:"点击绘制",start:"左键添加点，双击结束绘制"}}}),n.current.start())}(r.key,r.tool)},children:r.label},r.key)})),(0,c.jsx)("button",{onClick:function(){var r,i,o;null===(r=n.current)||void 0===r||r.end();var u=[],c=null===(i=e.current)||void 0===i?void 0:i.scene.primitives.length;if(c)for(var a=0;a<c;a++){var l,s=null===(l=e.current)||void 0===l?void 0:l.scene.primitives.get(a);s instanceof t.LabelCollection&&s.length>0&&u.push(s)}u.forEach((function(n){var r;null===(r=e.current)||void 0===r||r.scene.primitives.remove(n)})),null===(o=e.current)||void 0===o||o.entities.removeAll()},children:"清除"})]})})}},97120:function(e,n,r){r.r(n);var t=r(67294),i=r(73061),o=r(94145),u=r(85893);n.default=function(){var e=(0,t.useRef)(),n=(0,t.useRef)();return(0,t.useEffect)((function(){e.current=(0,o.initMap)("parent-container");var r="overview-container";return e.current&&r&&(n.current=new i.OverViewer(e.current,r),n.current.start()),function(){var r,t;null===(r=e.current)||void 0===r||r.destroy(),null===(t=n.current)||void 0===t||t.destroy()}}),[]),(0,u.jsx)("div",{className:"over-viewer",style:{width:"100%",height:"100%",display:"flex"},children:(0,u.jsx)("div",{id:"parent-container",style:{width:"100%",height:"100%",position:"relative"},children:(0,u.jsx)("div",{id:"overview-container",style:{position:"absolute",zIndex:9,width:"150px",height:"150px",bottom:"10px",right:"10px",padding:"10px",background:"rgba(0, 0, 0, 0.5)",color:"#fff",borderRadius:"5px"}})})})}}}]);