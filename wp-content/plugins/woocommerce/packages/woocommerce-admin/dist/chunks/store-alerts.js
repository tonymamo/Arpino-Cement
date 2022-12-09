(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[48],{470:function(e,t,r){"use strict";var a=r(0),n=r(8),o=Object(a.createElement)(n.SVG,{xmlns:"https://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)(n.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"}));t.a=o},506:function(e,t,r){"use strict";var a=r(66);const n=["a","b","em","i","strong","p","br"],o=["target","href","rel","name","download"];t.a=e=>({__html:Object(a.sanitize)(e,{ALLOWED_TAGS:n,ALLOWED_ATTR:o})})},541:function(e,t,r){},617:function(e,t,r){"use strict";r.r(t),r.d(t,"StoreAlerts",(function(){return S}));var a=r(0),n=r(2),o=r(4),s=r(6),l=r.n(s),c=r(18),i=r.n(c),m=r(14),d=r(7),u=r(9),p=r.n(u),b=r(115),h=r(290),_=r(470),O=r(13),j=r(11),g=r(16),E=r(20),w=r(506),A=r(1),N=r.n(A);class v extends a.Component{render(){const{hasMultipleAlerts:e}=this.props;return Object(a.createElement)(o.Card,{className:"woocommerce-store-alerts is-loading","aria-hidden":!0,size:null},Object(a.createElement)(o.CardHeader,{isBorderless:!0},Object(a.createElement)("span",{className:"is-placeholder"}),e&&Object(a.createElement)("span",{className:"is-placeholder"})),Object(a.createElement)(o.CardBody,null,Object(a.createElement)("div",{className:"woocommerce-store-alerts__message"},Object(a.createElement)("span",{className:"is-placeholder"}),Object(a.createElement)("span",{className:"is-placeholder"}))),Object(a.createElement)(o.CardFooter,{isBorderless:!0},Object(a.createElement)("span",{className:"is-placeholder"})))}}var x=v;v.propTypes={hasMultipleAlerts:N.a.bool},v.defaultProps={hasMultipleAlerts:!1};r(541);class S extends a.Component{constructor(e){super(e),this.state={currentIndex:0},this.previousAlert=this.previousAlert.bind(this),this.nextAlert=this.nextAlert.bind(this)}previousAlert(e){e.stopPropagation();const{currentIndex:t}=this.state;t>0&&this.setState({currentIndex:t-1})}nextAlert(e){e.stopPropagation();const t=this.getAlerts(),{currentIndex:r}=this.state;r<t.length-1&&this.setState({currentIndex:r+1})}renderActions(e){const{triggerNoteAction:t,updateNote:r}=this.props,s=e.actions.map(r=>Object(a.createElement)(o.Button,{key:r.name,isPrimary:r.primary,isSecondary:!r.primary,href:r.url||void 0,onClick:()=>t(e.id,r.id)},r.label)),l=[{value:p()().add(4,"hours").unix().toString(),label:Object(n.__)("Later Today",'woocommerce')},{value:p()().add(1,"day").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:Object(n.__)("Tomorrow",'woocommerce')},{value:p()().add(1,"week").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:Object(n.__)("Next Week",'woocommerce')},{value:p()().add(1,"month").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:Object(n.__)("Next Month",'woocommerce')}],c=e.is_snoozable&&Object(a.createElement)(o.SelectControl,{className:"woocommerce-store-alerts__snooze",options:[{label:Object(n.__)("Remind Me Later",'woocommerce'),value:"0"},...l],onChange:t=>{if("0"===t)return;const a=l.find(e=>e.value===t);(t=>{r(e.id,{status:"snoozed",date_reminder:t.value});const a={alert_name:e.name,alert_title:e.title,snooze_duration:t.value,snooze_label:t.label};Object(g.recordEvent)("store_alert_snooze",a)})({value:t,label:a&&a.label})}});if(s||c)return Object(a.createElement)("div",{className:"woocommerce-store-alerts__actions"},s,c)}getAlerts(){return(this.props.alerts||[]).filter(e=>"unactioned"===e.status)}render(){const e=this.getAlerts(),t=Object(O.f)("alertCount",0,e=>parseInt(e,10));if(t>0&&this.props.isLoading)return Object(a.createElement)(x,{hasMultipleAlerts:t>1});if(0===e.length)return null;const{currentIndex:r}=this.state,s=e.length,c=e[r],m=c.type,d=l()("woocommerce-store-alerts",{"is-alert-error":"error"===m,"is-alert-update":"update"===m});return Object(a.createElement)(o.Card,{className:d,size:null},Object(a.createElement)(o.CardHeader,{isBorderless:!0},Object(a.createElement)(E.Text,{variant:"title.medium",as:"h2",size:"24",lineHeight:"32px"},c.title),s>1&&Object(a.createElement)("div",{className:"woocommerce-store-alerts__pagination"},Object(a.createElement)(o.Button,{onClick:this.previousAlert,disabled:0===r,label:Object(n.__)("Previous Alert",'woocommerce')},Object(a.createElement)(b.a,{icon:h.a,className:"arrow-left-icon"})),Object(a.createElement)("span",{className:"woocommerce-store-alerts__pagination-label",role:"status","aria-live":"polite"},i()({mixedString:Object(n.__)("{{current /}} of {{total /}}",'woocommerce'),components:{current:Object(a.createElement)(a.Fragment,null,r+1),total:Object(a.createElement)(a.Fragment,null,s)}})),Object(a.createElement)(o.Button,{onClick:this.nextAlert,disabled:s-1===r,label:Object(n.__)("Next Alert",'woocommerce')},Object(a.createElement)(b.a,{icon:_.a,className:"arrow-right-icon"})))),Object(a.createElement)(o.CardBody,null,Object(a.createElement)("div",{className:"woocommerce-store-alerts__message",dangerouslySetInnerHTML:Object(w.a)(c.content)})),Object(a.createElement)(o.CardFooter,{isBorderless:!0},this.renderActions(c)))}}const f={page:1,per_page:j.QUERY_DEFAULTS.pageSize,type:"error,update",status:"unactioned"};t.default=Object(m.compose)(Object(d.withSelect)(e=>{const{getNotes:t,isResolving:r}=e(j.NOTES_STORE_NAME);return{alerts:t(f),isLoading:r("getNotes",[f])}}),Object(d.withDispatch)(e=>{const{triggerNoteAction:t,updateNote:r}=e(j.NOTES_STORE_NAME);return{triggerNoteAction:t,updateNote:r}}))(S)}}]);