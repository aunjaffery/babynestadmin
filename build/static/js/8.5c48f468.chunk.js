(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{7347:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),o=a(12),i=a(11),l=a(202),c=a(13),s=a(0),d=a.n(s),m=a(1),u=a(5),f=a(121),g=a.n(f),p=(a(246),a(21)),b=a(25),h=(a(288),a(565)),x=a.n(h),v=function(e){var t=e.options,a=e.currSizePerPage,n=e.onSizePerPageChange;return d.a.createElement("div",{className:"btn-group",role:"group"},t.map(function(e){var t=a==="".concat(e.page);return d.a.createElement("button",{key:e.text,type:"button",onClick:function(){return n(e.page)},className:"btn ".concat(t?"btn-secondary":"btn-warning")},e.text)}))},y=function(e,t,a){return d.a.createElement("span",{className:"react-bootstrap-table-pagination-total"},"Showing ",e," to ",t," of ",a," Results")},E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).deleteFormatter=function(e,t,n,r){return d.a.createElement(m.d,{bsSize:"small",className:"btn-custom",onClick:function(){return a.onClickTagsDeleted(e,t,n)},icon:"delete",labelPosition:"center"},d.a.createElement(m.E,{className:"mr-4 text-20"},"delete"))},a.columns=[{dataField:"cat_id",text:"Tag ID",isKey:!0,editable:!1},{dataField:"cat_name",text:"Tag Name"},{dataField:"cat_slug",text:"Tag Slug"},{dataField:"cat_desc",text:"Tag Description"},{text:"Action",formatter:a.deleteFormatter,isDummyField:!0,editable:!1}],a.state={tagsdata:[null],editSuccess:!1},a.updatelist=a.updatelist.bind(Object(l.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"updatelist",value:function(){var e=this,t=localStorage.getItem("jwtToken");fetch(b.a+"/api/admin/categories",{headers:{Authorization:"Bearer "+t}}).then(function(e){return e.json()}).then(function(t){!0===t.status?e.setState({categoriesdata:t.data}):alert("Could not fetch data")}).catch(function(e){return console.log("error ==> "+e)})}},{key:"onClickTagsDeleted",value:function(e,t,a){var n=this;if(confirm("Are you sure you want to delete this profile ? ")){var r=t.cat_id,o=localStorage.getItem("jwtToken");console.log("ID :====>"+r),fetch(b.a+"/api/admin/categories/deleteCategory?id="+r,{headers:{Authorization:"Bearer "+o}}).then(function(e){return e.json()}).then(function(e){!0===e.status?n.updatelist():console.log(e.data)}).catch(function(e){return alert(e)})}}},{key:"render",value:function(){var e={paginationTotalRenderer:y,sizePerPageRenderer:v};return d.a.createElement(u.m,{header:d.a.createElement("div",{className:"p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end"},d.a.createElement("div",{className:"flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start"},d.a.createElement(u.a,{animation:"transition.slideLeftIn",delay:300},d.a.createElement(m.ib,{className:"md:ml-24",variant:"h4",color:"inherit"}))),d.a.createElement("div",{className:"flex items-center justify-end"},d.a.createElement(p.a,{to:"/addcategory"},d.a.createElement(m.d,{className:"mr-8 normal-case",variant:"contained",color:"secondary","aria-label":"Follow"},"Add Tags")))),content:d.a.createElement("div",{className:"md:flex max-w-5xl sm:p-24"},d.a.createElement("div",{className:"flex flex-col flex-1 md:pr-32"},d.a.createElement(u.b,{enter:{animation:"transition.slideUpBigIn"}},d.a.createElement(g.a,{classes:"table-responsive",striped:!0,bordered:!1,bootstrap4:!0,keyField:"Id",data:this.state.tagsdata,columns:this.columns,hover:!0,noDataIndication:"Table is Empty",overflow:"scroll",width:"115%",pagination:x()(e)}))))})}}]),t}(s.Component);t.default=E}}]);