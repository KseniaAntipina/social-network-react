(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[5],{86:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1a5Cx",dialogsItems:"Dialogs_dialogsItems__3y-sd",dialog:"Dialogs_dialog__3rI-t",active:"Dialogs_active__2AABs",messages:"Dialogs_messages__imPAP",avatar:"Dialogs_avatar__vyQNV",addMessage:"Dialogs_addMessage__3clmV"}},87:function(e,s,a){"use strict";s.a=a.p+"static/media/user.77e62bce.png"},97:function(e,s,a){"use strict";a.r(s);var t=a(50),n=(a(0),a(86)),c=a.n(n),i=a(11),r=a(87),o=a(1),d=function(e){return Object(o.jsxs)("div",{className:"".concat(c.a.dialog," ").concat(c.a.active),children:[Object(o.jsx)("img",{src:r.a,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:c.a.avatar}),Object(o.jsx)(i.b,{to:"/dialogs/".concat(e.id),children:e.name})]})},u=function(e){return Object(o.jsx)("div",{className:c.a.message,children:e.message})},l=a(20),g=a(34),j=a(29),b=function(e){var s=e.messagesPage,a=s.dialogs.map((function(e){return Object(o.jsx)(d,{name:e.name,id:e.id})})),t=s.messages.map((function(e){return Object(o.jsx)(u,{message:e.message})}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:c.a.dialogs,children:[Object(o.jsx)("div",{className:c.a.dialogsItems,children:a}),Object(o.jsx)("div",{className:c.a.messages,children:t})]}),Object(o.jsx)("div",{className:c.a.addMessage,children:Object(o.jsx)(O,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})})]})},m=function(){for(var e=arguments.length,s=new Array(e),a=0;a<e;a++)s[a]=arguments[a];return function(e){return s.reduce((function(s,a){return s||a(e)}),void 0)}},O=function(e){return Object(o.jsx)(l.b,{onSubmit:e.onSubmit,children:function(e){var s=e.handleSubmit;return Object(o.jsxs)("form",{onSubmit:s,children:[Object(o.jsx)("div",{children:Object(o.jsx)(l.a,{name:"newMessageBody",component:j.b,validate:m(g.b,Object(g.a)(30)),placeholder:"Enter your message..."})}),Object(o.jsx)("button",{children:"send"})]})}})},f=a(15),h=a(3),x=a(5),_=function(e){return{isAuth:e.auth.isAuth}},v=a(19);s.default=Object(v.c)(Object(f.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(s){e(Object(t.b)(s))}}})),(function(e){return Object(f.b)(_)((function(s){return s.isAuth?Object(o.jsx)(e,Object(h.a)({},s)):Object(o.jsx)(x.a,{to:"/login"})}))}))(b)}}]);
//# sourceMappingURL=5.f82e0cef.chunk.js.map