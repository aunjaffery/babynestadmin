(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{7213:function(e,t,a){"use strict";var r=a(9),n=a(10),s=a(12),o=a(11),l=a(13),i=a(0),c=a.n(i),d=a(563),m=a.n(d),u=a(291),p=a.n(u),g=a(290),f=a.n(g),h=(a(7226),a(7227)),b=a.n(h),x=a(75),v=a(1),E=a(67),y=a(5),_=a(203),C=a.n(_),k=a(121),N=a.n(k),O=(a(246),a(25)),S=(a(288),function(e){return{root:{margin:0,padding:2*e.spacing.unit},closeButton:{position:"absolute",right:1*e.spacing.unit,top:1*e.spacing.unit,color:e.palette.grey[500]},close:{padding:e.spacing.unit/2}}}),F={backgroundColor:"#faad63",fontSize:"18px"},w=Object(x.withStyles)(S)(function(e){var t=e.children,a=e.classes,r=e.onClose;return c.a.createElement(p.a,{disableTypography:!0,className:a.root},c.a.createElement(v.ib,{variant:"h6"},t),r?c.a.createElement(v.F,{"aria-label":"Close",className:a.closeButton,onClick:r},c.a.createElement(C.a,null)):null)}),D=Object(x.withStyles)(function(e){return{root:{padding:2*e.spacing.unit}}})(f.a),P=Object(x.withStyles)(function(e){return{root:{backgroundColor:"white"}}})(m.a);function B(e){return c.a.createElement(v.Z,Object.assign({direction:"up"},e))}var j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleClose=function(){a.props.handleClose()},a.detailColumns=[{dataField:"no",isKey:!0,text:"No",editable:!1,autoValue:!0,hidden:!0,footer:"",footerStyle:F},{dataField:"item_image",text:"Item Image",formatter:a.imageFormatter,headerStyle:function(e,t){return{width:"250px"}},footerAlign:"center",footer:"Total",footerStyle:F},{dataField:"item_name",text:"Item Name",footer:"",footerStyle:F},{dataField:"item_sku",text:"Item Sku",footer:"",footerStyle:F},{dataField:"item_qty",text:"Item Quantity",footer:function(e){return e.reduce(function(e,t){return e+t},0)},footerStyle:F},{dataField:"item_price",text:"Item Price",formatter:a.priceFormatter,footer:"",footerStyle:F},{dataField:"item_total_price",text:"Total Price",formatter:a.priceFormatter,footer:function(e){return"Rs. "+e.reduce(function(e,t){return e+t},0)},footerStyle:F}],a.state={order_detail:null,order_stats:null,toggleDialog:!1},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"imageFormatter",value:function(e,t){console.log("Images :: "+JSON.stringify(t));var a=Object.keys(t.item_image).length>0?"".concat(O.a).concat(t.item_image.split(",")[0]):"";return c.a.createElement("img",{style:{width:"30%",textAlign:"center"},src:a,alt:""})}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,this.state.order_stats&&this.state.order_stats.cust_name&&c.a.createElement(v.o,{open:this.state.toggleDialog,onClose:this.handleClose,TransitionComponent:B,fullWidth:!0,maxWidth:"lg",keepMounted:!0,"aria-labelledby":"customized-dialog-title"},c.a.createElement(w,{id:"customized-dialog-title",onClose:this.handleClose},c.a.createElement(v.ib,{variant:"h5",component:"h2"},"Order Details",c.a.createElement(b.a,{content:function(){return e.componentRef}},c.a.createElement(h.PrintContextConsumer,null,function(e){var t=e.handlePrint;return c.a.createElement("span",{className:"mr-30",onClick:t},c.a.createElement(E.F,{className:"text-l",cursor:"pointer"}))})))),c.a.createElement(v.t,null),c.a.createElement(D,{ref:function(t){return e.componentRef=t}},c.a.createElement(v.B,{container:!0,justify:"space-between",direction:"row",alignItems:"center"},c.a.createElement(v.B,{item:!0,xs:4},c.a.createElement(v.ib,{variant:"body2",color:"textSecondary",component:"p",className:"text-16 mb-3"},c.a.createElement(E.D,{className:"mr-2 text-20"}),this.state.order_stats.cust_name),c.a.createElement(v.ib,{variant:"body2",color:"textSecondary",component:"p",className:"text-16 mb-3"},c.a.createElement(E.E,{className:"mr-2 text-20"}),this.state.order_stats.cust_phone,"verified"===this.state.order_stats.mobile_verified?c.a.createElement(v.E,{className:"ml-2 text-green text-20"},"check_circle"):c.a.createElement(v.E,{className:"ml-2 text-red text-20"},"remove_circle")),c.a.createElement(v.ib,{variant:"body2",color:"textSecondary",component:"p",className:"text-16 mb-3"},c.a.createElement(E.r,{className:"mr-2 text-20"}),this.state.order_stats.cust_email),c.a.createElement(v.ib,{variant:"body2",color:"textSecondary",component:"p",className:"text-16 mb-3"},this.state.order_stats.address&&c.a.createElement(c.a.Fragment,null,c.a.createElement(E.v,{className:"mr-2 text-20"})," Address : House"," ",this.state.order_stats.address.split("^")[0],",",this.state.order_stats.address.split("^")[1],",",this.state.order_stats.address.split("^")[2],","," ",this.state.order_stats.cust_city)),c.a.createElement(v.ib,{variant:"body2",color:"textSecondary",component:"p",className:"text-16 mb-3"},c.a.createElement(E.G,{className:"mr-1 text-20"}),"Order No. ",this.state.order_stats.order_no),c.a.createElement(v.ib,{variant:"body2",color:"textSecondary",component:"p",className:"text-16 mb-3"},c.a.createElement(E.m,{className:"mr-1 text-20"}),this.state.order_stats.order_date),c.a.createElement(v.ib,{variant:"body2",color:"textSecondary",component:"p",className:"text-16 mb-3"},c.a.createElement(E.C,{className:"mr-1 text-20"})," Payment method :"," ","cod"==this.state.order_stats.payment_method?"Cash on delivery":"Online Payment"),c.a.createElement(v.ib,{variant:"body2",color:"textSecondary",component:"p",className:"text-16 mb-3"},c.a.createElement(E.y,{className:"mr-1 text-20"})," Shipping Charges :"," ",c.a.createElement("span",{className:"text-xl text-primary"},this.state.order_stats.shipping_charges),c.a.createElement(E.M,{className:"ml-2 mr-1 text-20"})," Discount :"," ",c.a.createElement("span",{className:"text-xl text-primary"},this.state.order_stats.discounted_bill)),this.state.misc&&Object.keys(this.state.misc.coupon_applied).length>0&&c.a.createElement(v.ib,{variant:"body2",color:"textSecondary",component:"p",className:"text-16 mb-3"},c.a.createElement(E.d,{className:"mr-1 text-20"})," Counpon Applied :"," ",c.a.createElement("span",{className:"ml-1 text-l text-green"},this.state.misc.coupon_applied.cop_code)),c.a.createElement(v.ib,{variant:"body2",color:"textSecondary",component:"p",className:"text-16 mb-3"},c.a.createElement(E.K,{className:"mr-1 text-20"})," ",1===this.state.order_stats.source?"WEB":"MOBILE",c.a.createElement(E.s,{className:"ml-4 text-20"})," Order Count :"," ",c.a.createElement("span",{className:"text-xl text-primary"},this.state.misc&&this.state.misc.OrderCount))),c.a.createElement(v.B,{item:!0,xs:4},c.a.createElement("img",{className:"w-xs  rounded",src:"assets/images/logos/BABYNEST.png",alt:"BABYNEST Boutique"}))),c.a.createElement(v.t,{className:"mb-4"}),c.a.createElement("div",{className:"md:flex"},c.a.createElement(P,{className:"flex flex-col flex-1 p-4"},c.a.createElement(v.B,{container:!0,spacing:24},c.a.createElement(v.B,{item:!0,xs:12,className:"justify-center m-auto"},c.a.createElement(y.b,{enter:{animation:"transition.slideUpBigIn"}},c.a.createElement(N.a,{classes:"table-responsive",striped:!0,condensed:!0,keyField:"no",data:this.state.order_detail,columns:this.detailColumns,hover:!0,overflow:"scroll"})))))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{toggleDialog:e.toggleDialog,order_detail:e.order_detail,order_stats:e.order_stats,misc:e.misc}}}]),t}(i.Component);t.a=Object(x.withStyles)(S)(j)},7214:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(75),o=a(564),l=a.n(o),i=a(4),c=a.n(i),d=Object(s.withStyles)(function(e){return{root:{display:"flex",alignItems:"center",flexWrap:"wrap",textAlign:"center",color:"white"}}})(l.a);var m=Object(s.withStyles)(function(e){return{pending:{backgroundColor:"#FF9233"},delivered:{backgroundColor:"#00BD56"},inprocess:{backgroundColor:"#09A2F3"},dispatched:{backgroundColor:"#303840"},cancelled:{backgroundColor:"#FF1E5A"},content:{display:"flex",flexDirection:"column",width:"100%",alignItems:"center"},margin:{margin:e.spacing.unit}}})(function(e){var t=e.classes,a=e.content,r=e.variant,s=e.className;return n.a.createElement(d,{className:c()(t[r],s),label:a})});t.a=Object(s.withStyles)(function(e){return{margin:{margin:e.spacing.unit}}})(function(e){var t=e.flag;return 0===t?n.a.createElement(m,{content:"pending",variant:"pending"}):1===t?n.a.createElement(m,{content:"delivered",variant:"delivered"}):2===t?n.a.createElement(m,{content:"in process",variant:"inprocess"}):3===t?n.a.createElement(m,{content:"cancelled",variant:"cancelled"}):4===t?n.a.createElement(m,{content:"dispatched",variant:"dispatched"}):void 0})},7234:function(e,t,a){"use strict";var r=a(9),n=a(10),s=a(12),o=a(11),l=a(13),i=a(0),c=a.n(i),d=a(1),m=a(75),u=a(49),p=a.n(u),g=a(5);function f(e){return c.a.createElement(d.Z,Object.assign({direction:"up"},e))}var h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleClose=function(){a.props.handleClose()},a.handleSubmit=function(){console.log("Prev Status :: "+a.props.prev_status),console.log("New Status :: "+a.state.status),console.log("Order By :: "+a.state.order_by);var e=new FormData;e.append("order_by",a.state.order_by),e.append("new_status",a.state.status),e.append("prev_status",a.props.prev_status),a.props.updateBulkActions(e)},a.handleOrderChange=function(e){a.setState({order_by:e.target.value})},a.handleStatusChange=function(e){a.setState({status:e.target.value})},a.state={toggleBulkDialog:!1,canSubmit:!1,new_status:[]},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){console.log("Prev Status :: "+this.props.prev_status);var e=[];switch(this.props.prev_status){case 0:e=[{name:"In Process",value:2},{name:"Cancel",value:3}];break;case 2:e=[{name:"Dispatch",value:4},{name:"Cancel",value:3}];break;case 4:e=[{name:"Deliver",value:1}];break;default:return}this.setState({new_status:e})}},{key:"render",value:function(){var e=this;return c.a.createElement(d.o,{open:this.state.toggleDialog,onClose:this.handleClose,TransitionComponent:f,fullWidth:!0,maxWidth:"sm",keepMounted:!0,"aria-labelledby":"customized-dialog-title"},c.a.createElement(d.s,{id:"customized-dialog-title",onClose:this.handleClose},c.a.createElement(d.ib,{variant:"h6"},"Bulk Actions")),c.a.createElement(d.t,{className:" mb-4"}),c.a.createElement(d.q,null,c.a.createElement(d.ib,{className:"h2 mb-24"}),c.a.createElement(p.a,{onValid:this.enableButton,onInvalid:this.disableButton,ref:function(t){return e.form=t},className:"flex flex-col justify-center"},c.a.createElement(g.v,{className:"mb-16",name:"order_by",label:"Order By",onChange:this.handleOrderChange,value:this.state.order_by?this.state.order_by:"none",variant:"outlined"},c.a.createElement(d.R,{value:"verified"},"Verified Customers"),c.a.createElement(d.R,{value:"unproved"},"Unverified Customers")),c.a.createElement(g.v,{className:"mb-16",name:"new_status",label:"Set Order Status",onChange:this.handleStatusChange,value:this.state.status?this.state.status:"none",variant:"outlined"},Object.keys(this.state.new_status).length>0&&this.state.new_status.map(function(e){return c.a.createElement(d.R,{value:e.value},e.name)})))),c.a.createElement(d.p,null,c.a.createElement(d.d,{onClick:this.handleSubmit,ref:function(t){return e.submitButton=t},disabled:this.state.canSubmit,color:"secondary"},"Proceed")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{toggleDialog:e.toggleDialog}}}]),t}(i.Component);t.a=Object(m.withStyles)(function(e){return{root:{margin:0,padding:2*e.spacing.unit},closeButton:{position:"absolute",right:1*e.spacing.unit,top:1*e.spacing.unit,color:e.palette.grey[500]},close:{padding:e.spacing.unit/2}}})(h)},7362:function(e,t,a){"use strict";a.r(t);var r=a(9),n=a(10),s=a(12),o=a(11),l=a(13),i=a(122),c=a(0),d=a.n(c),m=a(566),u=a.n(m),p=a(1),g=a(75),f=a(7213),h=a(7234),b=a(4),x=a.n(b),v=a(67),E=a(66),y=a(19),_=a(16),C=a(567),k=a(76),N=a(5),O=a(121),S=a.n(O),F=a(289),w=a.n(F),D=(a(246),a(21)),P=a(25),B=(a(288),a(54)),j=a(7214),I={backgroundColor:"#faad63",fontSize:"18px"},A=function(e){var t=e.classes,a=(e.variant,e.inputRef),r=void 0===a?function(){}:a,n=Object(i.a)(e,["classes","variant","inputRef"]);return d.a.createElement(d.a.Fragment,null,d.a.createElement(p.fb,Object.assign({fullWidth:!0,InputProps:{inputRef:function(e){r(e)},classes:{input:x()(t.input,"py-0 px-16 h-48 pr-48"),notchedOutline:"rounded-8"}},placeholder:"Type to search the product",onChange:function(t){e.onSearch(t.target.value)},variant:"outlined"},n)),d.a.createElement(p.E,{className:"absolute pin-t pin-r h-48 w-48 p-12 pointer-events-none",color:"action"},"search"))},R=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleClickOpen=function(){a.setState({toggleDialog:!0})},a.handleClose=function(){a.props.closeDialog()},a.handlePageClick=function(e){a.props.getInProcessOrders(e.selected*a.state.recordsPerPage,a.state.recordsPerPage),a.setState({currentPage:e.selected})},a.actionFormatter=function(e,t,r,n){return d.a.createElement("div",{className:"flex space-between align-center"},d.a.createElement(p.hb,{title:"Dispatch","aria-label":"Dispatch",placement:"left"},d.a.createElement(p.v,{color:"primary",className:"flex-1 justify-center bg-warning align-center w-24 h-2",onClick:function(){a.onClickActionPerformed(e,t,r,"dispatch")}},d.a.createElement(v.y,{className:"text-19"}))),d.a.createElement(p.hb,{title:"Cancel","aria-label":"Cancel",placement:"right"},d.a.createElement(p.v,{color:"primary",className:"flex-1 justify-center bg-red align-center w-24 h-2",onClick:function(){a.onClickActionPerformed(e,t,r,"cancel")}},d.a.createElement(v.g,{className:"text-19"}))))},a.detailFormatter=function(e,t,r,n){return d.a.createElement(p.d,{bssize:"small",className:"btn-custom",onClick:function(){a.onClickSliderDetail(e,t,r)},icon:"dehaze",labelposition:"center"},d.a.createElement(p.E,{className:"mr-4 text-20"},"dehaze"))},a.handleBulkClose=function(){a.props.closeBulkDialog()},a.handleBulkOpen=function(){a.props.openBulkDialog()},a.handleBulkUpdate=function(e){a.props.updateBulkActions(e),a.props.getInProcessOrders(0,a.state.recordsPerPage)},a.columns=[{dataField:"",text:"No",editable:!1,autoValue:!0,hidden:!0},{dataField:"order_id",isKey:!0,text:"Order #"},{dataField:"cust_name",text:"Customer Name"},{dataField:"cust_phone",text:"Customer Phone"},{dataField:"mobile_verified",text:"Mobile Verified?",formatter:a.verifiedFormatter,editable:!1},{dataField:"total_bill",text:"Total bill",formatter:a.priceFormatter},{dataField:"order_status",text:"Status",formatter:a.statusFormatter},{dataField:"detail",text:"Order Detail",isDummyField:!0,editable:!1,formatter:a.detailFormatter},{dataField:"action",text:"Action",formatter:a.actionFormatter,isDummyField:!0,editable:!1}],a.detailColumns=[{dataField:"no",text:"No",editable:!1,autoValue:!0,hidden:!0,footer:"",footerStyle:I},{dataField:"item_image",text:"Item Image",formatter:a.imageFormatter,headerStyle:function(e,t){return{width:"250px"}},footerAlign:"center",footer:"Total",footerStyle:I},{dataField:"item_name",text:"Item Name",footer:"",footerStyle:I},{dataField:"item_sku",text:"Item Sku",footer:"",footerStyle:I},{dataField:"item_qty",text:"Item Quantity",footer:function(e){return e.reduce(function(e,t){return e+t},0)},footerStyle:I},{dataField:"item_price",text:"Item Price",formatter:a.priceFormatter,footer:"",footerStyle:I},{dataField:"item_total_price",text:"Total Price",formatter:a.priceFormatter,footer:function(e){return"Rs. "+e.reduce(function(e,t){return e+t},0)},footerStyle:I}],a.state={inprocess_ordersdata:[],order_detail:[],order_stats:{},misc:{},image:null,editSuccess:!1,toggleDialog:!1,pageCount:null,recordsPerPage:30,totalRecords:null,currentPage:0},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.getInProcessOrders(0,this.state.recordsPerPage)}},{key:"imageFormatter",value:function(e,t){var a="".concat(P.a).concat(t.item_image);return d.a.createElement("img",{style:{width:"30%",textAlign:"center"},src:a,alt:""})}},{key:"statusFormatter",value:function(e,t){var a=t.order_status;return d.a.createElement(j.a,{flag:a})}},{key:"priceFormatter",value:function(e,t){return"Rs. ".concat(e)}},{key:"verifiedFormatter",value:function(e,t){return"unproved"===e?d.a.createElement(p.E,{className:"text-red text-20"},"remove_circle"):d.a.createElement(p.E,{className:"text-green text-20"},"check_circle")}},{key:"onClickActionPerformed",value:function(e,t,a,r){var n=t.order_id;this.props.setOrderStatus(n,r,this.state.currentPage*this.state.recordsPerPage,this.state.recordsPerPage,2)}},{key:"onClickSliderDetail",value:function(e,t,a){var r=t.order_id;this.props.getOrderDetails(r)}},{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement(N.m,{header:d.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},d.a.createElement("div",{className:"flex flex-col items-start max-w-full"},d.a.createElement(N.a,{animation:"transition.slideLeftIn",delay:300},d.a.createElement(p.ib,{className:"normal-case flex items-center sm:mb-12",component:D.a,role:"button",to:"/apps/dashboards/analytics"},d.a.createElement(p.E,{className:"mr-4 text-20"},"arrow_back"),"Dashboard")),d.a.createElement("div",{className:"flex items-center max-w-full"},d.a.createElement(N.a,{animation:"transition.expandIn",delay:300},d.a.createElement("img",{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded",src:"assets/images/component_icons/orders_white_24dp.png",alt:"{form.name}"})),d.a.createElement("div",{className:"flex flex-col min-w-0"},d.a.createElement(N.a,{animation:"transition.slideLeftIn",delay:300},d.a.createElement(p.ib,{className:"text-16 sm:text-20 truncate"},"In Process Orders"))))),d.a.createElement("div",{className:"flex items-center justify-end"},d.a.createElement(p.d,{variant:"contained",color:"secondary",onClick:this.handleBulkOpen},"Bulk Actions"))),content:d.a.createElement("div",{className:"md:flex max-w-3xl sm:p-24"},d.a.createElement("div",{className:"flex flex-col flex-1 md:pr-32"},d.a.createElement(f.a,{handleClose:this.handleClose,order_detail:this.state.order_detail,order_stats:this.state.order_stats,misc:this.state.misc,toggleDialog:this.state.toggleDialog}),d.a.createElement(h.a,{handleClose:this.handleBulkClose,order_detail:this.state.order_detail,order_stats:this.state.order_stats,misc:this.state.misc,toggleDialog:this.state.toggleBulkDialog,prev_status:2,updateBulkActions:this.handleBulkUpdate}),d.a.createElement(N.b,{enter:{animation:"transition.slideUpBigIn"}},this.state.inprocess_ordersdata&&d.a.createElement(w.a,{keyField:"order_id",data:this.state.inprocess_ordersdata,columns:this.columns,search:!0},function(t){return d.a.createElement("div",{className:"flex flex-col flex-1"},d.a.createElement(A,Object.assign({className:x()("flex flex-1 items-center w-full",x.a)},e.props,t.searchProps)),d.a.createElement("hr",null),d.a.createElement(S.a,Object.assign({},t.baseProps,{classes:"table-responsive",striped:!0,borderless:!0,keyField:"order_id",hover:!0,overflow:"scroll",draggable:!1,noDataIndication:"Table is Empty"})))}),this.state.recordsPerPage<=this.state.totalRecords&&this.state.inprocess_ordersdata&&d.a.createElement(u.a,{previousLabel:"Prev",nextLabel:"Next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))))}),d.a.createElement(B.a,{notificationToggle:this.state.notificationToggle||!1,notificationMsg:this.state.notificationMsg||"",variant:this.state.variant||"success"}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{inprocess_ordersdata:e.inprocess_ordersdata,pageCount:Math.ceil(e.totalRecords/t.recordsPerPage),toggleDialog:e.toggleDialog,order_detail:e.order_detail,order_stats:e.order_stats,misc:e.misc,totalRecords:e.totalRecords,toggleBulkDialog:e.toggleBulkDialog}}}]),t}(c.Component);t.default=Object(E.a)("inprocessOrders",C.a)(Object(g.withStyles)(function(e){return{appBar:{position:"fixed"},flex:{flex:1}}})(Object(y.a)(function(e){return{inprocess_ordersdata:e.inprocessOrders.orders.inprocess_ordersdata,totalRecords:e.inprocessOrders.orders.totalRecords,order_detail:e.inprocessOrders.orders.order_detail,order_stats:e.inprocessOrders.orders.order_stats,misc:e.inprocessOrders.orders.misc,toggleDialog:e.inprocessOrders.orders.toggleDialog,toggleBulkDialog:e.inprocessOrders.orders.toggleBulkDialog}},function(e){return Object(_.c)({getInProcessOrders:k.w,getUpdatedOrders:k.A,setOrderStatus:k.C,getOrderDetails:k.x,closeDialog:k.q,openBulkDialog:k.B,closeBulkDialog:k.p,updateBulkActions:k.D},e)})(R)))}}]);