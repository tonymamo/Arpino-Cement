this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["stock-filter"]=function(e){function t(t){for(var r,u,a=t[0],l=t[1],i=t[2],b=0,f=[];b<a.length;b++)u=a[b],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&f.push(c[u][0]),c[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={40:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var s=l;return o.push([787,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return O}));var r=n(8),c=n.n(r),o=n(27),u=n(16),a=n(0),l=n(33),i=n.n(l),s=n(62),b=n(150),f=n(75),p=function(e){var t=Object(f.a)();e=e||t;var n=Object(u.useSelect)((function(t){return t(o.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),r=Object(u.useDispatch)(o.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[n,Object(a.useCallback)((function(t){r(e,t)}),[e,r])]},d=function(e,t,n){var r=Object(f.a)();n=n||r;var c=Object(u.useSelect)((function(r){return r(o.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)}),[n,e]),l=Object(u.useDispatch)(o.QUERY_STATE_STORE_KEY).setQueryValue;return[c,Object(a.useCallback)((function(t){l(n,e,t)}),[n,e,l])]},O=function(e,t){var n=Object(f.a)(),r=p(t=t||n),o=c()(r,2),u=o[0],l=o[1],d=Object(s.a)(u),O=Object(s.a)(e),v=Object(b.a)(O),j=Object(a.useRef)(!1);return Object(a.useEffect)((function(){i()(v,O)||(l(Object.assign({},d,O)),j.current=!0)}),[d,O,v,l]),j.current?[u,l]:[e,l]}},12:function(e,t){e.exports=window.React},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(8),c=n.n(r),o=n(0),u=function(){var e=Object(o.useState)(),t=c()(e,2)[1];return Object(o.useCallback)((function(e){t((function(){throw e}))}),[])}},136:function(e,t,n){"use strict";var r=n(17),c=n.n(r),o=n(18),u=n.n(o),a=n(19),l=n.n(a),i=n(20),s=n.n(i),b=n(10),f=n.n(b),p=n(0),d=n(7),O=n(1),v=n(4);function j(e){var t=e.level,n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(p.createElement)(v.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"https://www.w3.org/2000/svg"},Object(p.createElement)(v.Path,{d:n[t]})):null}var m=function(e){l()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(t);if(n){var c=f()(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return s()(this,e)});function o(){return c()(this,o),r.apply(this,arguments)}return u()(o,[{key:"createLevelControl",value:function(e,t,n){var r=e===t;return{icon:Object(p.createElement)(j,{level:e}),
/* translators: %s: heading level e.g: "2", "3", "4" */
title:Object(O.sprintf)(Object(O.__)("Heading %d"),e),isActive:r,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.isCollapsed,r=void 0===n||n,c=t.minLevel,o=t.maxLevel,u=t.selectedLevel,a=t.onChange;return Object(p.createElement)(v.ToolbarGroup,{isCollapsed:r,icon:Object(p.createElement)(j,{level:u}),controls:Object(d.range)(c,o).map((function(t){return e.createLevelControl(t,u,a)}))})}}]),o}(p.Component);t.a=m},145:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(40);n(360),t.a=function(e){var t=e.name,n=e.count;return Object(r.createElement)(r.Fragment,null,t,Number.isFinite(n)&&Object(r.createElement)(o.a,{label:n,screenReaderLabel:Object(c.sprintf)(
/* translators: %s number of products. */
Object(c._n)("%s product","%s products",n,'woocommerce'),n),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}))}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(12);function c(e,t){var n=Object(r.useRef)();return Object(r.useEffect)((function(){n.current===e||t&&!t(e,n.current)||(n.current=e)}),[e,t]),n.current}},16:function(e,t){e.exports=window.wp.data},162:function(e,t,n){"use strict";var r=n(0),c=(n(2),n(21)),o=n(6),u=n.n(o),a=n(22),l=n(1);n(216),t.a=Object(a.withInstanceId)((function(e){var t=e.className,n=e.headingLevel,o=e.onChange,a=e.heading,i=e.instanceId,s="h".concat(n);return Object(r.createElement)(s,null,Object(r.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-".concat(i)},Object(l.__)("Block title",'woocommerce')),Object(r.createElement)(c.PlainText,{id:"block-title-".concat(i),className:u()("wc-block-editor-components-title",t),value:a,onChange:o}))}))},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(27),c=n(16),o=n(0),u=n(62),a=n(130),l=function(e){var t=e.namespace,n=e.resourceName,l=e.resourceValues,i=void 0===l?[]:l,s=e.query,b=void 0===s?{}:s,f=e.shouldSelect,p=void 0===f||f;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");var d=Object(o.useRef)({results:[],isLoading:!0}),O=Object(u.a)(b),v=Object(u.a)(i),j=Object(a.a)(),m=Object(c.useSelect)((function(e){if(!p)return null;var c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,O,v],u=c.getCollectionError.apply(c,o);return u&&j(u),{results:c.getCollection.apply(c,o),isLoading:!c.hasFinishedResolution("getCollection",o)}}),[t,n,v,O,p]);return null!==m&&(d.current=m),d.current}},193:function(e,t,n){"use strict";var r=n(0),c=n(1),o=(n(2),n(6)),u=n.n(o),a=n(40),l=(n(259),function(e){var t=e.className,n=e.disabled,o=e.label,l=void 0===o?Object(c.__)("Go",'woocommerce'):o,i=e.onClick,s=e.screenReaderLabel,b=void 0===s?Object(c.__)("Apply filter",'woocommerce'):s;return Object(r.createElement)("button",{type:"submit",className:u()("wc-block-filter-submit-button","wc-block-components-filter-submit-button",t),disabled:n,onClick:i},Object(r.createElement)(a.a,{label:l,screenReaderLabel:b}))});l.defaultProps={disabled:!1},t.a=l},21:function(e,t){e.exports=window.wp.blockEditor},216:function(e,t){},22:function(e,t){e.exports=window.wp.compose},25:function(e,t){e.exports=window.wp.blocks},259:function(e,t){},26:function(e,t){e.exports=window.wp.htmlEntities},27:function(e,t){e.exports=window.wc.wcBlocksData},281:function(e,t,n){"use strict";var r=n(35),c=n.n(r),o=n(8),u=n.n(o),a=n(0),l=n(1),i=(n(2),n(6)),s=n.n(i);n(361),t.a=function(e){var t=e.className,n=e.onChange,r=void 0===n?function(){}:n,o=e.options,i=void 0===o?[]:o,b=e.checked,f=void 0===b?[]:b,p=e.isLoading,d=void 0!==p&&p,O=e.isDisabled,v=void 0!==O&&O,j=e.limit,m=void 0===j?10:j,h=Object(a.useState)(!1),w=u()(h,2),g=w[0],y=w[1],k=Object(a.useMemo)((function(){return c()(Array(5)).map((function(e,t){return Object(a.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})}))}),[]),E=Object(a.useMemo)((function(){var e=i.length-m;return!g&&Object(a.createElement)("li",{key:"show-more",className:"show-more"},Object(a.createElement)("button",{onClick:function(){y(!0)},"aria-expanded":!1,"aria-label":Object(l.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(l._n)("Show %s more option","Show %s more options",e,'woocommerce'),e)},Object(l.sprintf)(
/* translators: %s number of options to reveal. */
Object(l._n)("Show %s more","Show %s more",e,'woocommerce'),e)))}),[i,m,g]),_=Object(a.useMemo)((function(){return g&&Object(a.createElement)("li",{key:"show-less",className:"show-less"},Object(a.createElement)("button",{onClick:function(){y(!1)},"aria-expanded":!0,"aria-label":Object(l.__)("Show less options",'woocommerce')},Object(l.__)("Show less",'woocommerce')))}),[g]),P=Object(a.useMemo)((function(){var e=i.length>m+5;return Object(a.createElement)(a.Fragment,null,i.map((function(t,n){return Object(a.createElement)(a.Fragment,{key:t.value},Object(a.createElement)("li",e&&!g&&n>=m&&{hidden:!0},Object(a.createElement)("input",{type:"checkbox",id:t.value,value:t.value,onChange:function(e){r(e.target.value)},checked:f.includes(t.value),disabled:v}),Object(a.createElement)("label",{htmlFor:t.value},t.label)),e&&n===m-1&&E)})),e&&_)}),[i,r,f,g,m,_,E,v]),S=s()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":d},t);return Object(a.createElement)("ul",{className:S},d?k:P)}},3:function(e,t){e.exports=window.wc.wcSettings},30:function(e,t){e.exports=window.wp.primitives},33:function(e,t){e.exports=window.wp.isShallowEqual},360:function(e,t){},361:function(e,t){},4:function(e,t){e.exports=window.wp.components},40:function(e,t,n){"use strict";var r=n(5),c=n.n(r),o=n(0),u=n(6),a=n.n(u);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t,n=e.label,r=e.screenReaderLabel,c=e.wrapperElement,u=e.wrapperProps,l=void 0===u?{}:u,s=null!=n,b=null!=r;return!s&&b?(t=c||"span",l=i(i({},l),{},{className:a()(l.className,"screen-reader-text")}),Object(o.createElement)(t,l,r)):(t=c||o.Fragment,s&&b&&n!==r?Object(o.createElement)(t,l,Object(o.createElement)("span",{"aria-hidden":"true"},n),Object(o.createElement)("span",{className:"screen-reader-text"},r)):Object(o.createElement)(t,l,n))}},497:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n(5),c=n.n(r),o=n(35),u=n.n(o),a=n(37),l=n.n(a),i=n(8),s=n.n(i),b=n(0),f=n(374),p=n(7),d=n(62),O=n(108),v=n(167),j=n(75);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=e.queryAttribute,n=e.queryPrices,r=e.queryStock,c=e.queryState,o=Object(j.a)();o="".concat(o,"-collection-data");var a=Object(O.a)(o),i=s()(a,1)[0],m=Object(O.b)("calculate_attribute_counts",[],o),w=s()(m,2),g=w[0],y=w[1],k=Object(O.b)("calculate_price_range",null,o),E=s()(k,2),_=E[0],P=E[1],S=Object(O.b)("calculate_stock_status_counts",null,o),C=s()(S,2),x=C[0],H=C[1],L=Object(d.a)(t||{}),V=Object(d.a)(n),N=Object(d.a)(r);Object(b.useEffect)((function(){"object"===l()(L)&&Object.keys(L).length&&(g.find((function(e){return e.taxonomy===L.taxonomy}))||y([].concat(u()(g),[L])))}),[L,g,y]),Object(b.useEffect)((function(){_!==V&&void 0!==V&&P(V)}),[V,P,_]),Object(b.useEffect)((function(){x!==N&&void 0!==N&&H(N)}),[N,H,x]);var M=Object(b.useState)(!1),R=s()(M,2),F=R[0],T=R[1],D=Object(f.a)(F,200),z=s()(D,1)[0];F||T(!0);var B=Object(b.useMemo)((function(){return function(e){var t=e;return e.calculate_attribute_counts&&(t.calculate_attribute_counts=Object(p.sortBy)(e.calculate_attribute_counts.map((function(e){return{taxonomy:e.taxonomy,query_type:e.queryType}})),["taxonomy","query_type"])),t}(i)}),[i]);return Object(v.a)({namespace:"/wc/store",resourceName:"products/collection-data",query:h(h({},c),{},{page:void 0,per_page:void 0,orderby:void 0,order:void 0},B),shouldSelect:z})}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),c=n(33),o=n.n(c);function u(e){var t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},63:function(e,t,n){"use strict";var r=n(5),c=n.n(r),o=n(14),u=n.n(o),a=n(0),l=["srcElement","size"];function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.srcElement,n=e.size,r=void 0===n?24:n,o=u()(e,l);return Object(a.isValidElement)(t)?Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:r,height:r},o)):null}},69:function(e,t){e.exports=window.wp.a11y},7:function(e,t){e.exports=window.lodash},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=Object(r.createContext)("page"),o=function(){return Object(r.useContext)(c)};c.Provider},782:function(e,t,n){"use strict";var r=n(0),c=n(30),o=Object(r.createElement)(c.SVG,{xmlns:"https://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(r.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(r.createElement)("path",{d:"M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"}));t.a=o},787:function(e,t,n){e.exports=n(842)},788:function(e,t){},789:function(e,t){},842:function(e,t,n){"use strict";n.r(t);var r=n(9),c=n.n(r),o=n(0),u=n(1),a=n(25),l=n(63),i=n(782),s=n(6),b=n.n(s),f=n(21),p=n(4),d=n(136),O=n(162),v=n(8),j=n.n(v),m=n(5),h=n.n(m),w=n(14),g=n.n(w),y=n(69),k=n(62),E=n(150),_=n(108),P=n(497),S=n(3),C=n(281),x=n(193),H=n(145),L=n(33),V=n.n(L),N=n(26),M=[{value:"preview-1",name:"In Stock",label:Object(o.createElement)(H.a,{name:"In Stock",count:3})},{value:"preview-2",name:"Out of sotck",label:Object(o.createElement)(H.a,{name:"Out of stock",count:3})},{value:"preview-3",name:"On backorder",label:Object(o.createElement)(H.a,{name:"On backorder",count:2})}];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n(789);var F=Object(S.getSetting)("hideOutOfStockItems",!1),T=Object(S.getSetting)("stockStatusOptions",{}),D=T.outofstock,z=g()(T,["outofstock"]),B=F?z:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({outofstock:D},z),A=Object.entries(B).map((function(e){var t=j()(e,2);return{slug:t[0],name:t[1]}})).filter((function(e){return!!e.name})).sort((function(e,t){return e.slug.localeCompare(t.slug)})),q=function(e){var t=e.attributes,n=e.isEditor,r=void 0!==n&&n,c=Object(o.useState)([]),a=j()(c,2),l=a[0],i=a[1],s=Object(o.useState)(t.isPreview?M:[]),b=j()(s,2),f=b[0],p=b[1],d=Object(_.a)(),O=j()(d,1)[0],v=Object(_.b)("stock_status",[]),m=j()(v,2),h=m[0],w=m[1],g=Object(P.a)({queryStock:!0,queryState:O}),S=g.results,L=g.isLoading,R=Object(o.useCallback)((function(e){return S.stock_status_counts?S.stock_status_counts.find((function(t){var n=t.status,r=t.count;return n===e&&0!==Number(r)})):null}),[S]);Object(o.useEffect)((function(){if(!L&&!t.isPreview){var e=A.map((function(e){var n,r=R(e.slug);if(!(r||l.includes(e.slug)||(n=e.slug,null!=O&&O.stock_status&&O.stock_status.some((function(e){var t=e.status;return(void 0===t?[]:t).includes(n)})))))return null;var c=r?Number(r.count):0;return{value:e.slug,name:Object(N.decodeEntities)(e.name),label:Object(o.createElement)(H.a,{name:Object(N.decodeEntities)(e.name),count:t.showCounts?c:null})}})).filter(Boolean);p(e)}}),[t.showCounts,t.isPreview,L,R,l,O.stock_status]);var F=Object(o.useCallback)((function(e){r||e&&w(l)}),[r,w,l]);Object(o.useEffect)((function(){t.showFilterButton||F(l)}),[t.showFilterButton,l,F]);var T=Object(o.useMemo)((function(){return h}),[h]),D=Object(k.a)(T),z=Object(E.a)(D);Object(o.useEffect)((function(){V()(z,D)||V()(l,D)||i(D)}),[l,D,z]);var q=Object(o.useCallback)((function(e){var t=function(e){return f.find((function(t){return t.value===e})).name},n=function(e){var n=e.filterAdded,r=e.filterRemoved,c=n?t(n):null,o=r?t(r):null;c?Object(y.speak)(Object(u.sprintf)(
/* translators: %s stock statuses (for example: 'instock'...) */
Object(u.__)("%s filter added.",'woocommerce'),c)):o&&Object(y.speak)(Object(u.sprintf)(
/* translators: %s stock statuses (for example:'instock'...) */
Object(u.__)("%s filter removed.",'woocommerce'),o))},r=l.includes(e),c=l.filter((function(t){return t!==e}));r?n({filterRemoved:e}):(c.push(e),c.sort(),n({filterAdded:e})),i(c)}),[l,f]);if(0===f.length)return null;var Y="h".concat(t.headingLevel),I=!t.isPreview&&!B,Q=!t.isPreview&&L;return Object(o.createElement)(o.Fragment,null,!r&&t.heading&&Object(o.createElement)(Y,null,t.heading),Object(o.createElement)("div",{className:"wc-block-stock-filter"},Object(o.createElement)(C.a,{className:"wc-block-stock-filter-list",options:f,checked:l,onChange:q,isLoading:I,isDisabled:Q}),t.showFilterButton&&Object(o.createElement)(x.a,{className:"wc-block-stock-filter__button",disabled:I||Q,onClick:function(){return F(l)}})))},Y=(n(788),Object(p.withSpokenMessages)((function(e){var t=e.attributes,n=e.setAttributes,r=t.className,c=t.heading,a=t.headingLevel,l=t.showCounts,i=t.showFilterButton;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(f.InspectorControls,{key:"inspector"},Object(o.createElement)(p.PanelBody,{title:Object(u.__)("Content",'woocommerce')},Object(o.createElement)(p.ToggleControl,{label:Object(u.__)("Product count",'woocommerce'),help:l?Object(u.__)("Product count is visible.",'woocommerce'):Object(u.__)("Product count is hidden.",'woocommerce'),checked:l,onChange:function(){return n({showCounts:!l})}}),Object(o.createElement)("p",null,Object(u.__)("Heading Level",'woocommerce')),Object(o.createElement)(d.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:a,onChange:function(e){return n({headingLevel:e})}})),Object(o.createElement)(p.PanelBody,{title:Object(u.__)("Block Settings",'woocommerce')},Object(o.createElement)(p.ToggleControl,{label:Object(u.__)("Filter button",'woocommerce'),help:i?Object(u.__)("Products will only update when the button is pressed.",'woocommerce'):Object(u.__)("Products will update as options are selected.",'woocommerce'),checked:i,onChange:function(e){return n({showFilterButton:e})}}))),Object(o.createElement)("div",{className:r},Object(o.createElement)(O.a,{headingLevel:a,heading:c,onChange:function(e){return n({heading:e})}}),Object(o.createElement)(p.Disabled,null,Object(o.createElement)(q,{attributes:t,isEditor:!0}))))})));Object(a.registerBlockType)("woocommerce/stock-filter",{title:Object(u.__)("Filter Products by Stock",'woocommerce'),icon:{src:Object(o.createElement)(l.a,{srcElement:i.a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(u.__)("WooCommerce",'woocommerce')],description:Object(u.__)("Allow customers to filter the grid by products stock status. Works in combination with the All Products block.",'woocommerce'),supports:{html:!1,multiple:!1},example:{attributes:{isPreview:!0}},attributes:{heading:{type:"string",default:Object(u.__)("Filter by stock status",'woocommerce')},headingLevel:{type:"number",default:3},showCounts:{type:"boolean",default:!0},showFilterButton:{type:"boolean",default:!1},isPreview:{type:"boolean",default:!1}},edit:Y,save:function(e){var t=e.attributes,n=t.className,r=t.showCounts,u=t.heading,a=t.headingLevel,l=t.showFilterButton,i={"data-show-counts":r,"data-heading":u,"data-heading-level":a};return l&&(i["data-show-filter-button"]=l),Object(o.createElement)("div",c()({className:b()("is-loading",n)},i),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-stock-filter__placeholder"}))}})}});