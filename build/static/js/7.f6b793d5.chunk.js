(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{7346:function(e,t,a){"use strict";a.r(t);var n=a(9),s=a(10),i=a(12),l=a(11),r=a(202),c=a(13),o=a(0),m=a.n(o),u=a(75),d=a(1),g=a(5),h=a(49),f=a.n(h),b=a(21),p=a(25),v=a(59),E=a.n(v),w=a(52),x=a.n(w),S=a(54),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).disableButton=function(){a.setState({canSubmit:!1})},a.enableButton=function(){a.setState({canSubmit:!0})},a.handlenamechange=function(e){a.setState({name:e.target.value})},a.handleslugchange=function(e){a.setState({slug:e.target.value})},a.handledescchange=function(e){a.setState({desc:e.target.value})},a.handleimagechange=function(e){a.setState({image:e.target.files[0]})},a.reset=function(){a.setState({name:"",slug:"",desc:""})},a.onSubmit=function(e){var t=new FormData;t.append("name",a.state.name),t.append("slug",a.state.slug),t.append("desc",a.state.desc);var n=localStorage.getItem("jwtToken");fetch(p.a+"/api/admin/categories/addCategory",{method:"POST",headers:{Authorization:"Bearer "+n},body:t}).then(function(e){return e.json()}).then(function(e){!0===e.status?S.b.call(Object(r.a)(a),e.msg,"success"):S.b.call(Object(r.a)(a),e.msg,"error")}).catch(function(e){S.b.call(Object(r.a)(a),"Error communicating with server \n"+e.msg,"error")})},a.state={name:"",slug:"",desc:"",canSubmit:!1,form:null},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.canSubmit,a=this.props.classes;return m.a.createElement(m.a.Fragment,null,m.a.createElement(g.m,{classes:{root:a.layoutRoot},header:m.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},m.a.createElement("div",{className:"flex flex-col items-start max-w-full"},m.a.createElement(g.a,{animation:"transition.slideRightIn",delay:300},m.a.createElement(d.ib,{className:"normal-case flex items-center sm:mb-12",component:b.a,role:"button",to:"/profile"},m.a.createElement(d.E,{className:"mr-4 text-20"},"arrow_back"),"Profile")),m.a.createElement("div",{className:"flex items-center max-w-full"},m.a.createElement(g.a,{animation:"transition.expandIn",delay:300},m.a.createElement("img",{className:"w-32 sm:w-48 mr-8 sm:mr-16 rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:"{form.name}"})),m.a.createElement("div",{className:"flex flex-col min-w-0"},m.a.createElement(g.a,{animation:"transition.slideLeftIn",delay:300},m.a.createElement(d.ib,{className:"text-16 sm:text-20 truncate"},"Add Tags")))))),content:m.a.createElement("div",{className:" m-auto flex flex-col p-20  max-w-md"},m.a.createElement(d.ib,{className:"h2 mb-24"}),m.a.createElement(f.a,{onValidSubmit:this.onSubmit,onValid:this.enableButton,onInvalid:this.disableButton,ref:function(t){return e.form=t},className:"flex flex-col justify-center"},m.a.createElement(g.w,{className:"mb-16",type:"text",name:"name",value:this.state.name,onChange:this.handlenamechange,label:"Name",validations:{minLength:1},validationErrors:{minLength:"Min character length is 1"},required:!0}),m.a.createElement(g.w,{className:"mb-16",type:"text",name:"Slug",value:this.state.slug,onChange:this.handleslugchange,label:"Slug",validations:{minLength:1},validationErrors:{minLength:"Min character length is 1"},required:!0}),m.a.createElement(g.w,{className:"mb-16",type:"text",name:"description",value:this.state.desc,onChange:this.handledescchange,label:"Description",validations:{minLength:1},validationErrors:{minLength:"Min character length is 1"},optional:!0}),m.a.createElement(d.d,{type:"submit",variant:"contained",color:"primary",className:"mx-auto my-16","aria-label":"LOG IN",disabled:!t},"ADD TAG")))}),m.a.createElement(S.a,{notificationToggle:this.state.notificationToggle||!1,notificationMsg:this.state.notificationMsg||"",variant:this.state.variant||"success"}))}}]),t}(o.Component);t.default=Object(u.withStyles)(function(e){return{success:{background:E.a[600]},error:{backgrouns:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:x.a[700]},close:{padding:e.spacing.unit/2}}},{withTheme:!0})(y)}}]);