(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[14],{475:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var a=r(0),o=r(1),c=r.n(o),n=r(2),s=r(30);const i=Object(s.applyFilters)("woocommerce_admin_stock_report_advanced_filters",{filters:{},title:Object(n._x)("Products Match {{select /}} Filters","A sentence describing filters for Products. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ",'woocommerce')}),l=Object(s.applyFilters)("woocommerce_admin_stock_report_filters",[{label:Object(n.__)("Show",'woocommerce'),staticParams:["paged","per_page"],param:"type",showFilters:()=>!0,filters:[{label:Object(n.__)("All products",'woocommerce'),value:"all"},{label:Object(n.__)("Out of stock",'woocommerce'),value:"outofstock"},{label:Object(n.__)("Low stock",'woocommerce'),value:"lowstock"},{label:Object(n.__)("In stock",'woocommerce'),value:"instock"},{label:Object(n.__)("On backorder",'woocommerce'),value:"onbackorder"}]},{label:Object(n.__)("Filter by",'woocommerce'),staticParams:["paged","per_page"],param:"filter",showFilters:()=>Object.keys(i.filters).length,filters:[{label:Object(n.__)("All Products",'woocommerce'),value:"all"},{label:Object(n.__)("Advanced Filters",'woocommerce'),value:"advanced"}]}]);var d=r(28),m=r(21),u=r(12),b=r(120),p=r(13),_=r(503);var y=r(498);const g=Object(p.f)("stockStatuses",{});class h extends a.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:Object(n.__)("Product / Variation",'woocommerce'),key:"title",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(n.__)("SKU",'woocommerce'),key:"sku",isSortable:!0},{label:Object(n.__)("Status",'woocommerce'),key:"stock_status",isSortable:!0,defaultSort:!0},{label:Object(n.__)("Stock",'woocommerce'),key:"stock_quantity",isSortable:!0}]}getRowsContent(e=[]){const{query:t}=this.props,r=Object(u.getPersistedQuery)(t);return e.map(e=>{const{id:t,manage_stock:o,parent_id:c,sku:s,stock_quantity:i,stock_status:l,low_stock_amount:_}=e,y=Object(d.decodeEntities)(e.name),h=Object(u.getNewPath)(r,"/analytics/products",{filter:"single_product",products:c||t}),O=Object(a.createElement)(m.Link,{href:h,type:"wc-admin"},y),j=Object(p.e)("post.php?action=edit&post="+(c||t));var f,w,v;return[{display:O,value:y},{display:s,value:s},{display:(f=l,v=_,(w=i)&&f&&w<=v==="instock"?Object(a.createElement)(m.Link,{href:j,type:"wp-admin"},Object(n._x)("Low","Indication of a low quantity",'woocommerce')):Object(a.createElement)(m.Link,{href:j,type:"wp-admin"},g[l])),value:g[l]},{display:o?Object(b.formatValue)(this.context.getCurrencyConfig(),"number",i):Object(n.__)("N/A",'woocommerce'),value:i}]})}getSummary(e){const{products:t=0,outofstock:r=0,lowstock:a=0,instock:o=0,onbackorder:c=0}=e,s=this.context.getCurrencyConfig();return[{label:Object(n._n)("Product","Products",t,'woocommerce'),value:Object(b.formatValue)(s,"number",t)},{label:Object(n.__)("Out of stock",'woocommerce'),value:Object(b.formatValue)(s,"number",r)},{label:Object(n.__)("Low stock",'woocommerce'),value:Object(b.formatValue)(s,"number",a)},{label:Object(n.__)("On backorder",'woocommerce'),value:Object(b.formatValue)(s,"number",c)},{label:Object(n.__)("In stock",'woocommerce'),value:Object(b.formatValue)(s,"number",o)}]}render(){const{advancedFilters:e,filters:t,query:r}=this.props;return Object(a.createElement)(_.a,{endpoint:"stock",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["products","outofstock","lowstock","instock","onbackorder"],query:r,tableQuery:{orderby:r.orderby||"stock_status",order:r.order||"asc",type:r.type||"all"},title:Object(n.__)("Stock",'woocommerce'),filters:t,advancedFilters:e})}}h.contextType=y.a;var O=h,j=r(502);class f extends a.Component{render(){const{query:e,path:t}=this.props;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(j.a,{query:e,path:t,showDatePicker:!1,filters:l,advancedFilters:i,report:"stock"}),Object(a.createElement)(O,{query:e,filters:l,advancedFilters:i}))}}f.propTypes={query:c.a.object.isRequired}},498:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return d}));var a=r(0),o=r(30),c=r(88),n=r.n(c),s=r(13);const i=n()(s.a),l=e=>{const t=i.getCurrencyConfig(),r=Object(o.applyFilters)("woocommerce_admin_report_currency",t,e);return n()(r)},d=Object(a.createContext)(i)},501:function(e,t,r){"use strict";var a=r(0),o=r(2),c=r(1),n=r.n(c),s=r(21);function i({className:e}){const t=Object(o.__)("There was an error getting your stats. Please try again.",'woocommerce'),r=Object(o.__)("Reload",'woocommerce');return Object(a.createElement)(s.EmptyContent,{className:e,title:t,actionLabel:r,actionCallback:()=>{window.location.reload()}})}i.propTypes={className:n.a.string},t.a=i},502:function(e,t,r){"use strict";var a=r(0),o=r(14),c=r(1),n=r.n(c),s=r(3),i=r(7),l=r(21),d=r(13),m=r(11),u=r(19),b=r(16),p=r(498),_=r(54);class y extends a.Component{constructor(){super(),this.onDateSelect=this.onDateSelect.bind(this),this.onFilterSelect=this.onFilterSelect.bind(this),this.onAdvancedFilterAction=this.onAdvancedFilterAction.bind(this)}onDateSelect(e){const{report:t,addCesSurveyForAnalytics:r}=this.props;r(),Object(b.recordEvent)("datepicker_update",{report:t,...Object(s.omitBy)(e,s.isUndefined)})}onFilterSelect(e){const{report:t,addCesSurveyForAnalytics:r}=this.props,a=e.filter||e["filter-variations"];["single_product","single_category","single_coupon","single_variation"].includes(a)&&r();const o={report:t,filter:e.filter||"all"};"single_product"===e.filter&&(o.filter_variation=e["filter-variations"]||"all"),Object(b.recordEvent)("analytics_filter",o)}onAdvancedFilterAction(e,t){const{report:r,addCesSurveyForAnalytics:a}=this.props;switch(e){case"add":Object(b.recordEvent)("analytics_filters_add",{report:r,filter:t.key});break;case"remove":Object(b.recordEvent)("analytics_filters_remove",{report:r,filter:t.key});break;case"filter":const e=Object.keys(t).reduce((e,r)=>(e[Object(s.snakeCase)(r)]=t[r],e),{});a(),Object(b.recordEvent)("analytics_filters_filter",{report:r,...e});break;case"clear_all":Object(b.recordEvent)("analytics_filters_clear_all",{report:r});break;case"match":Object(b.recordEvent)("analytics_filters_all_any",{report:r,value:t.match})}}render(){const{advancedFilters:e,filters:t,path:r,query:o,showDatePicker:c,defaultDateRange:n}=this.props,{period:s,compare:i,before:m,after:b}=Object(u.getDateParamsFromQuery)(o,n),{primary:p,secondary:_}=Object(u.getCurrentDates)(o,n),y={period:s,compare:i,before:m,after:b,primaryDate:p,secondaryDate:_},g=this.context;return Object(a.createElement)(l.ReportFilters,{query:o,siteLocale:d.b.siteLocale,currency:g.getCurrencyConfig(),path:r,filters:t,advancedFilters:e,showDatePicker:c,onDateSelect:this.onDateSelect,onFilterSelect:this.onFilterSelect,onAdvancedFilterAction:this.onAdvancedFilterAction,dateQuery:y,isoDateFormat:u.isoDateFormat})}}y.contextType=p.a,t.a=Object(o.compose)(Object(i.withSelect)(e=>{const{woocommerce_default_date_range:t}=e(m.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{defaultDateRange:t}}),Object(i.withDispatch)(e=>{const{addCesSurveyForAnalytics:t}=e(_.c);return{addCesSurveyForAnalytics:t}}))(y),y.propTypes={advancedFilters:n.a.object,filters:n.a.array,path:n.a.string.isRequired,query:n.a.object,showDatePicker:n.a.bool,report:n.a.string.isRequired}},503:function(e,t,r){"use strict";var a=r(35),o=r.n(a),c=r(0),n=r(4),s=r(30),i=r(14),l=r(90),d=r(7),m=r(3),u=r(2),b=r(1),p=r.n(b),_=r(21),y=r(12),g=r(471),h=r(11),O=r(16),j=()=>Object(c.createElement)("svg",{role:"img","aria-hidden":"true",focusable:"false",version:"1.1",xmlns:"https://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},Object(c.createElement)("path",{d:"M18,9c-0.009,0-0.017,0.002-0.025,0.003C17.72,5.646,14.922,3,11.5,3C7.91,3,5,5.91,5,9.5c0,0.524,0.069,1.031,0.186,1.519 C5.123,11.016,5.064,11,5,11c-2.209,0-4,1.791-4,4c0,1.202,0.541,2.267,1.38,3h18.593C22.196,17.089,23,15.643,23,14 C23,11.239,20.761,9,18,9z M12,16l-4-5h3V8h2v3h3L12,16z"})),f=r(501);var w=r(54);r(512);const v=e=>{const{getHeadersContent:t,getRowsContent:r,getSummary:a,isRequesting:i,primaryData:d,tableData:b,endpoint:p,itemIdField:w,tableQuery:v,compareBy:S,compareParam:k,searchBy:C,labels:E={},...F}=e,{query:R,columnPrefsKey:q}=e,{items:x,query:D}=b,A=R[k]?Object(y.getIdsFromQuery)(R[S]):[],[P,T]=Object(c.useState)(A),N=Object(c.useRef)(null),{updateUserPreferences:Q,...I}=Object(h.useUserPreferences)();if(b.isError||d.isError)return Object(c.createElement)(f.a,null);let B=[];q&&(B=I&&I[q]?I[q]:B);const V=(e,o,c)=>{const n=a?a(o,c):null;return Object(s.applyFilters)("woocommerce_admin_report_table",{endpoint:p,headers:t(),rows:r(e),totals:o,summary:n,items:x})},L=t=>{const{ids:r}=e;T(t?r:[])},M=(t,r)=>{const{ids:a}=e;if(r)T(Object(m.uniq)([a[t],...P]));else{const e=P.indexOf(a[t]);T([...P.slice(0,e),...P.slice(e+1)])}},H=t=>{const{ids:r=[]}=e,a=-1!==P.indexOf(r[t]);return{display:Object(c.createElement)(n.CheckboxControl,{onChange:Object(m.partial)(M,t),checked:a}),value:!1}},U=()=>{const{ids:t=[]}=e,r=t.length>0,a=r&&t.length===P.length;return{cellClassName:"is-checkbox-column",key:"compare",label:Object(c.createElement)(n.CheckboxControl,{onChange:L,"aria-label":Object(u.__)("Select All"),checked:a,disabled:!r}),required:!0}},z=i||b.isRequesting||d.isRequesting,J=Object(m.get)(d,["data","totals"],{}),K=x.totalResults||0,Y=K>0,G=Object(y.getSearchWords)(R).map(e=>({key:e,label:e})),{data:W}=x,X=V(W,J,K);let{headers:Z,rows:$}=X;const{summary:ee}=X;S&&($=$.map((e,t)=>[H(t),...e]),Z=[U(),...Z]);const te=((e,t)=>t?e.map(e=>({...e,visible:e.required||!t.includes(e.key)})):e.map(e=>({...e,visible:e.required||!e.hiddenByDefault})))(Z,B);return Object(c.createElement)(c.Fragment,null,Object(c.createElement)("div",{className:"woocommerce-report-table__scroll-point",ref:N,"aria-hidden":!0}),Object(c.createElement)(_.TableCard,o()({className:"woocommerce-report-table",hasSearch:!!C,actions:[S&&Object(c.createElement)(_.CompareButton,{key:"compare",className:"woocommerce-table__compare",count:P.length,helpText:E.helpText||Object(u.__)("Check at least two items below to compare",'woocommerce'),onClick:()=>{S&&Object(y.onQueryChange)("compare")(S,k,P.join(","))},disabled:!Y},E.compareButton||Object(u.__)("Compare",'woocommerce')),C&&Object(c.createElement)(_.Search,{allowFreeTextSearch:!0,inlineTags:!0,key:"search",onChange:t=>{const{baseSearchQuery:r,addCesSurveyForCustomerSearch:a}=e,o=t.map(e=>e.label.replace(",","%2C"));o.length?(Object(y.updateQueryString)({filter:void 0,[k]:void 0,[C]:void 0,...r,search:Object(m.uniq)(o).join(",")}),a()):Object(y.updateQueryString)({search:void 0}),Object(O.recordEvent)("analytics_table_filter",{report:p})},placeholder:E.placeholder||Object(u.__)("Search by item name",'woocommerce'),selected:G,showClearButton:!0,type:C,disabled:!Y}),Y&&Object(c.createElement)(n.Button,{key:"download",className:"woocommerce-table__download-button",disabled:z,onClick:()=>{const{createNotice:t,startExport:r,title:a}=e,o=Object.assign({},R),{data:c,totalResults:n}=x;let s="browser";if(delete o.extended_info,o.search&&delete o[C],c&&c.length===n){const{headers:e,rows:t}=V(c,n);Object(g.downloadCSVFile)(Object(g.generateCSVFileName)(a,o),Object(g.generateCSVDataFromTable)(e,t))}else s="email",r(p,D).then(()=>t("success",Object(u.sprintf)(Object(u.__)("Your %s Report will be emailed to you.",'woocommerce'),a))).catch(e=>t("error",e.message||Object(u.sprintf)(Object(u.__)("There was a problem exporting your %s Report. Please try again.",'woocommerce'),a)));Object(O.recordEvent)("analytics_table_download",{report:p,rows:n,downloadType:s})}},Object(c.createElement)(j,null),Object(c.createElement)("span",{className:"woocommerce-table__download-button__label"},E.downloadButton||Object(u.__)("Download",'woocommerce')))],headers:te,isLoading:z,onQueryChange:y.onQueryChange,onColumnsChange:(e,t)=>{const r=Z.map(e=>e.key).filter(t=>!e.includes(t));if(q){Q({[q]:r})}if(t){const r={report:p,column:t,status:e.includes(t)?"on":"off"};Object(O.recordEvent)("analytics_table_header_toggle",r)}},onSort:(e,t)=>{Object(y.onQueryChange)("sort")(e,t);const r={report:p,column:e,direction:t};Object(O.recordEvent)("analytics_table_sort",r)},onPageChange:(e,t)=>{N.current.scrollIntoView();const r=N.current.nextSibling.querySelector(".woocommerce-table__table"),a=l.focus.focusable.find(r);a.length&&a[0].focus(),t&&("goto"===t?Object(O.recordEvent)("analytics_table_go_to_page",{report:p,page:e}):Object(O.recordEvent)("analytics_table_page_click",{report:p,direction:t}))},rows:$,rowsPerPage:parseInt(D.per_page,10)||h.QUERY_DEFAULTS.pageSize,summary:ee,totalRows:K},F)))};v.propTypes={baseSearchQuery:p.a.object,compareBy:p.a.string,compareParam:p.a.string,columnPrefsKey:p.a.string,endpoint:p.a.string,extendItemsMethodNames:p.a.shape({getError:p.a.string,isRequesting:p.a.string,load:p.a.string}),extendedItemsStoreName:p.a.string,getHeadersContent:p.a.func.isRequired,getRowsContent:p.a.func.isRequired,getSummary:p.a.func,itemIdField:p.a.string,labels:p.a.shape({compareButton:p.a.string,downloadButton:p.a.string,helpText:p.a.string,placeholder:p.a.string}),primaryData:p.a.object,searchBy:p.a.string,summaryFields:p.a.arrayOf(p.a.string),tableData:p.a.object.isRequired,tableQuery:p.a.object,title:p.a.string.isRequired},v.defaultProps={primaryData:{},tableData:{items:{data:[],totalResults:0},query:{}},tableQuery:{},compareParam:"filter",downloadable:!1,onSearch:m.noop,baseSearchQuery:{}};const S=[],k={};t.a=Object(i.compose)(Object(d.withSelect)((e,t)=>{const{endpoint:r,getSummary:a,isRequesting:o,itemIdField:c,query:n,tableData:s,tableQuery:i,filters:l,advancedFilters:d,summaryFields:u,extendedItemsStoreName:b}=t,p=e(h.REPORTS_STORE_NAME),_=b?e(b):null,{woocommerce_default_date_range:y}=e(h.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");if(o)return k;const g="categories"===r?"products":r,O=a?Object(h.getReportChartData)({endpoint:g,selector:p,dataType:"primary",query:n,filters:l,advancedFilters:d,defaultDateRange:y,fields:u}):k,j=s||Object(h.getReportTableData)({endpoint:r,query:n,selector:p,tableQuery:i,filters:l,advancedFilters:d,defaultDateRange:y}),f=_?function(e,t,r){const{extendItemsMethodNames:a,itemIdField:o}=t,c=r.items.data;if(!(Array.isArray(c)&&c.length&&a&&o))return r;const{[a.getError]:n,[a.isRequesting]:s,[a.load]:i}=e,l={include:c.map(e=>e[o]).join(","),per_page:c.length},d=i(l),u=!!s&&s(l),b=!!n&&n(l),p=c.map(e=>{const t=Object(m.first)(d.filter(t=>e.id===t.id));return{...e,...t}}),_=r.isRequesting||u,y=r.isError||b;return{...r,isRequesting:_,isError:y,items:{...r.items,data:p}}}(_,t,j):j;return{primaryData:O,ids:c&&f.items.data?f.items.data.map(e=>e[c]):S,tableData:f,query:n}}),Object(d.withDispatch)(e=>{const{startExport:t}=e(h.EXPORT_STORE_NAME),{createNotice:r}=e("core/notices"),{addCesSurveyForCustomerSearch:a}=e(w.c);return{createNotice:r,startExport:t,addCesSurveyForCustomerSearch:a}}))(v)},512:function(e,t,r){}}]);