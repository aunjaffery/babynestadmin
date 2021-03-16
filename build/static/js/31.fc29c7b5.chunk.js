(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{7259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},i=t.isJsons=function(e){return Array.isArray(e)&&e.every(function(e){return"object"===("undefined"===typeof e?"undefined":r(e))&&!(e instanceof Array)})},s=t.isArrays=function(e){return Array.isArray(e)&&e.every(function(e){return Array.isArray(e)})},c=t.jsonsHeaders=function(e){return Array.from(e.map(function(e){return Object.keys(e)}).reduce(function(e,t){return new Set([].concat(a(e),a(t)))},[]))},u=t.jsons2arrays=function(e,t){var n=t=t||c(e),r=t;i(t)&&(n=t.map(function(e){return e.label}),r=t.map(function(e){return e.key}));var o=e.map(function(e){return r.map(function(t){return l(t,e)})});return[n].concat(a(o))},l=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce(function(e,t,n,r){if(void 0!==e[t])return e[t];r.splice(1)},t);return void 0===n?e in t?t[e]:"":n},f=t.elementOrEmpty=function(e){return e||0===e?e:""},d=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter(function(e){return e}).map(function(e){return e.map(function(e){return f(e)}).map(function(e){return""+n+e+n}).join(t)}).join("\n")},p=t.arrays2csv=function(e,t,n,r){return d(t?[t].concat(a(e)):e,n,r)},m=t.jsons2csv=function(e,t,n,r){return d(u(e,t),n,r)},b=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e},y=t.toCSV=function(e,t,n,r){if(i(e))return m(e,t,n,r);if(s(e))return p(e,t,n,r);if("string"===typeof e)return b(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,a){var i=y(e,n,r,a),s=o()?"application/csv":"text/csv",c=new Blob([t?"\ufeff":"",i],{type:s}),u="data:"+s+";charset=utf-8,"+(t?"\ufeff":"")+i,l=window.URL||window.webkitURL;return"undefined"===typeof l.createObjectURL?u:l.createObjectURL(c)}},7260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var r,a=n(0),o=((r=a)&&r.__esModule,n(2));t.propTypes={data:(0,o.oneOfType)([o.string,o.array]).isRequired,headers:o.array,target:o.string,separator:o.string,filename:o.string,uFEFF:o.bool,onClick:o.func,asyncOnClick:o.bool},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1},t.PropsNotForwarded=["data","headers"]},7321:function(e,t,n){e.exports=n(7322)},7322:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var r=o(n(7323)),a=o(n(7324));function o(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=r.default,t.CSVLink=a.default},7323:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r},s=n(7259),c=n(7260);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"buildURI",value:function(){return s.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,a=e.enclosingCharacter,o=e.uFEFF,i=e.target,s=e.specs,c=e.replace;this.state.page=window.open(this.buildURI(t,o,n,r,a),i,s,c)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}();u.defaultProps=Object.assign(c.defaultProps,{target:"_blank"}),u.propTypes=c.propTypes,t.default=u},7324:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),s=(r=i)&&r.__esModule?r:{default:r},c=n(7259),u=n(7260);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n.state={href:""},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),o(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,a=e.uFEFF,o=e.enclosingCharacter;this.setState({href:this.buildURI(t,a,n,r,o)})}},{key:"componentDidUpdate",value:function(e){if(this.props!==e){var t=this.props,n=t.data,r=t.headers,a=t.separator,o=t.uFEFF;this.setState({href:this.buildURI(n,o,r,a)})}}},{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var t=this.props,n=t.data,r=t.headers,a=t.separator,o=t.filename,i=t.enclosingCharacter,s=t.uFEFF,u=new Blob([s?"\ufeff":"",(0,c.toCSV)(n,r,a,i)]);return window.navigator.msSaveBlob(u,o),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,function(n){!1!==n?t.handleLegacy(e):e.preventDefault()})}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=(t.data,t.headers,t.separator,t.filename),r=(t.uFEFF,t.children),o=(t.onClick,t.asyncOnClick,t.enclosingCharacter,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]));return s.default.createElement("a",a({download:n},o,{ref:function(t){return e.link=t},target:"_self",href:this.state.href,onClick:this.handleClick()}),r)}}]),t}();l.defaultProps=u.defaultProps,l.propTypes=u.propTypes,t.default=l},7370:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n(10),o=n(12),i=n(11),s=n(13),c=n(122),u=n(0),l=n.n(u),f=n(1),d=n(75),p=n(5),m=n(121),b=n.n(m),y=n(289),h=n.n(y),v=(n(246),n(21)),g=n(25),w=(n(288),n(565)),E=n.n(w),O=(n(575),n(4)),_=n.n(O),k=n(59),j=n.n(k),C=n(52),x=n.n(C),F=n(66),S=n(19),P=n(16),R=n(7),I=n(31),N="[SUBSCRIPTION] GET SUBSCRIBED EMAILS";function A(){return function(e){Object(I.a)("subscriptions/emails").then(function(t){e({type:N,payload:t.data})})}}var U={subscribed_emails:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(R.a)({},e,{subscribed_emails:t.payload});default:return Object(R.a)({},e)}},T=Object(P.d)({subscription:D}),L=n(7321),M=function(e){var t=e.options,n=e.currSizePerPage,r=e.onSizePerPageChange;return l.a.createElement("div",{className:"btn-group",role:"group"},t.map(function(e){var t=n==="".concat(e.page);return l.a.createElement("button",{key:e.text,type:"button",onClick:function(){return r(e.page)},className:"btn ".concat(t?"btn-secondary":"btn-warning")},e.text)}))},B=function(e){var t=e.classes,n=(e.variant,e.inputRef),r=void 0===n?function(){}:n,a=Object(c.a)(e,["classes","variant","inputRef"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.fb,Object.assign({fullWidth:!0,InputProps:{inputRef:function(e){r(e)},classes:{input:_()(t.input,"py-0 px-16 h-48 pr-48"),notchedOutline:"rounded-8"}},placeholder:"Type to search the customer",onChange:function(t){e.onSearch(t.target.value)},variant:"outlined"},a)),l.a.createElement(f.E,{className:"absolute pin-t pin-r h-48 w-48 p-12 pointer-events-none",color:"action"},"search"))},V=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).columns=[{dataField:"cust_id",text:"Customer ID",isKey:!0,editable:!1},{dataField:"cust_name",text:"Customer Name"},{dataField:"cust_email",text:"Customer Email"},{dataField:"email_verified",text:"Email Verified?",formatter:n.verifiedFormatter,editable:!1},{dataField:"cust_image",text:"Customer Image",formatter:n.imageFormatter,editable:!1}],n.state={subscribed_emails:[]},n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.getSubscribedEmails()}},{key:"imageFormatter",value:function(e,t){var n=null;return e&&(n="".concat(g.a).concat(e)),l.a.createElement("img",{style:{width:"20%",marginLeft:"40%"},src:n||"assets/images/avatars/profile.jpg",alt:""})}},{key:"verifiedFormatter",value:function(e,t){return 0===e?l.a.createElement(f.E,{className:"text-red text-20"},"remove_circle"):l.a.createElement(f.E,{className:"text-green text-20"},"check_circle")}},{key:"render",value:function(){var e=this,t={sizePerPageRenderer:M};return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.m,{header:l.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},l.a.createElement("div",{className:"flex flex-col items-start max-w-full"},l.a.createElement(p.a,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(f.ib,{className:"normal-case flex items-center sm:mb-12",component:v.a,role:"button",to:"/apps/dashboards/analytics"},l.a.createElement(f.E,{className:"mr-4 text-20"},"arrow_back"),"Dashboard")),l.a.createElement("div",{className:"flex items-center max-w-full"},l.a.createElement(p.a,{animation:"transition.expandIn",delay:300},l.a.createElement("img",{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded",src:"assets/images/component_icons/subscriptions_white_24dp.png",alt:"{form.name}"})),l.a.createElement("div",{className:"flex flex-col min-w-0"},l.a.createElement(p.a,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(f.ib,{className:"text-16 sm:text-20 truncate"},"Subscribed Emails")))))),content:l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"md:flex max-w-5xl sm:p-24"},l.a.createElement("div",{className:"flex flex-col flex-1 md:pr-32"},l.a.createElement(p.b,{enter:{animation:"transition.slideUpBigIn"}},this.state.subscribed_emails&&l.a.createElement(h.a,{keyField:"order_id",data:this.state.subscribed_emails,columns:this.columns,search:!0},function(n){return l.a.createElement("div",{className:"flex flex-col flex-1"},l.a.createElement(B,Object.assign({className:_()("flex flex-1 items-center w-full",_.a)},e.props,n.searchProps)),l.a.createElement(L.CSVLink,{className:"py-2",data:e.state.subscribed_emails},"Download me"),l.a.createElement(b.a,Object.assign({},n.baseProps,{classes:"table-responsive",striped:!0,bordered:!0,keyField:"cust_id",hover:!0,noDataIndication:"Table is Empty",overflow:"scroll",draggable:!0,width:"115%",pagination:E()(t)})))})))))}))}}]),t}(u.Component);V.getDerivedStateFromProps=function(e,t){return{subscribed_emails:e.subscribed_emails}};t.default=Object(F.a)("subscribedEmails",T)(Object(d.withStyles)(function(e){return{success:{background:j.a[600]},error:{backgrouns:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:x.a[700]},close:{padding:e.spacing.unit/2}}})(Object(S.a)(function(e,t){return{subscribed_emails:e.subscribedEmails.subscription.subscribed_emails}},function(e,t){return Object(P.c)({getSubscribedEmails:A},e)})(V)))}}]);