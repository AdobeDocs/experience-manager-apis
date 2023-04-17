"use strict";(self.webpackChunkexperience_manager_apis=self.webpackChunkexperience_manager_apis||[]).push([[530],{85193:function(e,t,i){i.d(t,{j:function(){return q}});var a=i(42982),r=i(4942),n=i(15007),s=i(95223),o=i(63184),c=i(18870),d=i(46085),l=i(40590),m=i(75900),u=i.n(m),p=i(158),g=i(75472),v=i.n(g);function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}var b=[{title:"Last updated",value:"last_updated",filter:function(e){return e.sort((function(e,t){var i=e.lastUpdated,a=t.lastUpdated;return new Date(a)>new Date(i)?1:new Date(a)<new Date(i)?-1:0}))}},{title:"Name",value:"name",filter:function(e){return e.sort((function(e,t){var i=e.name,a=t.name;return i.localeCompare(a)}))}},{title:"Custom",value:"id",filter:function(e,t){void 0===t&&(t=[]);var i=[];return t.forEach((function(t){var a=e.find((function(e){return e.id===t}));a&&i.push(a)})),i}}],h={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},y={name:"1gtmncz",styles:"border-color:#4b4b4b!important;border-width:2px"},w={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},x={name:"jfisvt",styles:"height:auto;margin-bottom:0!important"},z={name:"10385fy",styles:"font-size:var(--spectrum-global-dimension-size-200);padding-right:0"},Z={name:"11ck1mg",styles:"height:var(--spectrum-global-dimension-size-600);justify-content:center;align-items:center;margin-top:0!important;margin-bottom:var(\n                          --spectrum-global-dimension-size-100\n                        )!important"},j={name:"hsewg1",styles:"height:var(--spectrum-global-dimension-size-4000);overflow:auto;padding-top:0;padding-bottom:0;align-items:center;display:flex;flex-direction:column"},O={name:"82a6rk",styles:"flex:1"},k={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},C={name:"16hp6jg",styles:"margin-top:var(--spectrum-global-dimension-size-100);display:flex;flex-direction:column"},N={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},D={name:"1e17bzi",styles:"display:flex;align-items:flex-start;flex-direction:column"},P={name:"wyj2j9",styles:"display:flex;align-items:flex-end;width:var(--spectrum-global-dimension-size-3000);flex-direction:column"},S={name:"1xl5zih",styles:"display:flex;align-items:center;height:var(--spectrum-global-dimension-size-800);justify-content:flex-end;margin-right:var(--spectrum-global-dimension-size-400)"},q=function(e){var t=e.clouds,i=void 0===t?[]:t,m=e.products,g=void 0===m?[]:m,q=e.interaction,A=void 0!==q&&q,B=e.orderBy,_=void 0===B?"last_updated":B,E=e.filterByCloud,H=void 0===E?[]:E,M=e.filterByIds,L=void 0===M?[]:M,U=e.buttonName,X=void 0===U?"Learn more":U,Y=e.showName,F=void 0===Y||Y,Q=e.showDescription,I=void 0===Q||Q,V=e.showBorder,W=void 0===V||V,G=e.imgHeight,J=void 0===G?"1000":G,K=e.isCentered,R=void 0!==K&&K,T=e.className,$=e.containerWidth,ee=void 0===$?p.Av:$,te=e.theme,ie=void 0===te?"light":te,ae=e.enablePicker,re=void 0!==ae&&ae;L.length&&(_="id");var ne=b.find((function(e){return e.value===_}));ne.ids=L;var se=(0,n.useState)(ne.value),oe=se[0],ce=se[1],de=(0,n.useState)(ne.filter(g,ne.ids)),le=de[0],me=de[1],ue=(0,n.useState)(H),pe=ue[0],ge=ue[1];(0,n.useEffect)((function(){!function(e,t,i,a){var r=e.filter((function(e){var i=e.cloud;return t.some((function(e){return i===e}))}));a(v()(r,["id"],["asc"]))}(g,pe.length?pe:i,0,me)}),[pe,oe,g,i]);var ve="calc(var(--spectrum-global-dimension-size-5000) - var(--spectrum-global-dimension-size-600))",fe="calc(var(--spectrum-global-dimension-size-3600) - var(--spectrum-global-dimension-size-900))",be=re?"":"padding-top: var(--spectrum-global-dimension-size-1000)";return(0,s.tZ)("section",{className:u()(T,"spectrum--"+ie),css:(0,s.iv)("background:var(--spectrum-global-color-gray-100);padding-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",p.q9,"){width:",(0,p.MY)(2),"!important;background:var(--spectrum-global-color-gray-100);padding-bottom:0;}@media screen and (max-width: ",p.LU,") and (min-width: ",p.q9,"){width:100%!important;background:var(--spectrum-global-color-gray-100);padding-bottom:0;}","")},(0,s.tZ)("div",{css:(0,s.iv)("max-width:",ee,";margin:auto;@media screen and (max-width: ",p.q9,"){width:",(0,p.MY)(3),"!important;background:var(--spectrum-global-color-gray-100);}",be,";","")},A&&re&&(0,s.tZ)("div",{css:S},(0,s.tZ)(d.c,{isQuiet:!0,items:b.slice(0,2).map((function(e){return e.value===_?function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){(0,r.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({selected:!0},e):e})),"aria-label":"Filter by name or last updated product",onChange:function(e){ce(b[e].value)}})),(0,s.tZ)("div",{css:(0,s.iv)("display:flex;@media screen and (max-width: ",p.Av,"){align-items:flex-start;flex-wrap:wrap;}","")},A&&(0,s.tZ)("div",{css:P},(0,s.tZ)("div",{css:D},(0,s.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:N},"Filter by"),(0,s.tZ)("div",{css:C},i.map((function(e,t){return(0,s.tZ)(c.X,{key:t,value:e,onChange:function(t){ge(t?[].concat((0,a.Z)(pe),[e]):pe.filter((function(t){return t!==e})))},css:k},e)}))))),(0,s.tZ)("div",{css:O},(0,s.tZ)("div",{css:(0,s.iv)("display:grid;grid-template-columns:repeat(auto-fit, ",fe,");grid-auto-rows:",ve,";justify-content:center;gap:var(--spectrum-global-dimension-size-400);@media screen and (max-width: ",p.Av,"){margin-top:var(--spectrum-global-dimension-size-400);display:flex;flex-wrap:wrap;}@media screen and (max-width: ",p.q9,"){overflow:hidden;width:",(0,p.MY)(3),";background:var(--spectrum-global-color-gray-100);}","")},le.map((function(e){return(0,s.tZ)("div",{key:e.id,className:"spectrum-Card spectrum-Card--sizeM",css:(0,s.iv)("width:",fe,";height:",ve,";border:",W?"none":"var(--spectrum-global-color-gray-200)",";background:var(--spectrum-global-color-gray-100);align-items:center;&:hover{border-color:var(--spectrum-global-color-gray-200);}@media screen and (max-width: ",p.Av,"){width:0;}@media screen and (max-width: ",p.q9,"){height:calc(var(--spectrum-global-dimension-size-5000) - var(--spectrum-global-dimension-size-1700));}","")},(0,s.tZ)("div",{className:"spectrum-Card-body",css:j},e.icon&&(0,s.tZ)("div",{css:(0,s.iv)("height:var(\n                          --spectrum-global-dimension-size-",J,"\n                        );width:140px;margin-bottom:var(\n                          --spectrum-global-dimension-size-200\n                        );","")},(0,s.tZ)(l.E,{src:e.icon,"aria-hidden":"true",alt:"",title:""})),F&&(0,s.tZ)("div",{className:"spectrum-Card-header spectrum-Heading spectrum-Heading--sizeXS",css:Z},(0,s.tZ)("div",{className:"spectrum-Card-title",css:z},(0,s.tZ)("strong",null,e.name))),I&&(0,s.tZ)("div",{className:"spectrum-Card-content spectrum-Body spectrum-Body--sizeS",css:x},e.description)),(0,s.tZ)("div",{className:W?"spectrum-Card-footer":"",css:(0,s.iv)("display:flex;justify-content:",R?"center":"flex-end",";flex-wrap:wrap;@media screen and (max-width: ",p.Av,"){justify-content:center;}padding-top:0;padding-bottom:0;","")},e.discover&&(0,s.tZ)("div",{css:w},(0,s.tZ)(o.A,{isQuiet:!0,href:e.discover,variant:"primary",css:y},X)),e.docs&&(0,s.tZ)("div",{css:h},(0,s.tZ)(o.A,{href:e.docs,variant:"primary"},"View docs"))))})))))))}}}]);
//# sourceMappingURL=f5cc1685-a9a35f896fc29e7bc4f2.js.map