(this.webpackJsonptodo_context_hooks=this.webpackJsonptodo_context_hooks||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(0),i=n(6),s=n(3),d=n(8),r=n(18),a=Object(c.createContext)(),l=function(e){var t=e.children,n=JSON.parse(localStorage.getItem("todoList"))||[],i=Object(c.useState)(n),l=Object(s.a)(i,2),j=l[0],u=l[1],b=Object(c.useState)(null),h=Object(s.a)(b,2),O=h[0],f=h[1];Object(c.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(j))}),[j]);return Object(o.jsx)(a.Provider,{value:{todos:j,chosenTodo:O,setChosenTodo:f,createTodo:function(e){u([].concat(Object(d.a)(j),[{title:e,id:Object(r.a)(),isDone:!1}]))},updateTodo:function(e,t){u(j.map((function(n){return n.id===t&&(n.title=e),n})))},deleteTodo:function(e){u(j.filter((function(t){return t.id!==e})))},checkTodo:function(e){u(j.map((function(t){return t.id===e&&(t.isDone=!t.isDone),t})))}},children:t})},j=function(){var e=Object(c.useContext)(a),t=e.createTodo,n=e.chosenTodo,i=e.setChosenTodo,d=e.updateTodo,r=Object(c.useState)(""),l=Object(s.a)(r,2),j=l[0],u=l[1];Object(c.useEffect)((function(){u(n?n.title:"")}),[n]);return Object(o.jsxs)("div",{className:"header",id:"myDIV",children:[Object(o.jsx)("h2",{children:"Todo List"}),Object(o.jsx)("input",{type:"text",id:"myInput",value:j,placeholder:"Title...",onChange:function(e){u(e.target.value)}}),Object(o.jsx)("div",{className:"addBtn",onClick:function(){n?(d(j,n.id),i(null)):(t(j),u(""))},children:n?"Update":"Add"})]})},u=n(7),b=function(){var e=Object(c.useContext)(a),t=e.todos,n=e.setChosenTodo,i=e.checkTodo,s=e.deleteTodo;return t.length?Object(o.jsx)("div",{id:"myUL",children:t.map((function(e){return Object(o.jsx)(u.a.li,{animate:{scale:.9},transition:{duration:.3},whileHover:{scale:.95},initial:{scale:.9},children:Object(o.jsxs)("div",{className:"todoBody",children:[Object(o.jsx)("div",{style:e.isDone?{textDecoration:"line-through"}:{},className:"leftTodo",children:e.title}),Object(o.jsxs)("div",{className:"rightTodo",children:[Object(o.jsx)("div",{onClick:function(){return n(e)},className:"btn btn-info float-left",children:"Edit"}),Object(o.jsx)("div",{onClick:function(){return i(e.id)},className:"btn btn-primary float-left",children:"Check"}),Object(o.jsx)("div",{onClick:function(){return s(e.id)},className:"btn btn-danger float-left",children:"Delete"})]})]})},e.id)}))}):Object(o.jsx)("h2",{style:{textAlign:"center"},children:"List is empty"})},h=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)("br",{}),Object(o.jsx)(b,{})]})};n(14);Object(i.render)(Object(o.jsx)(l,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.da28aaa0.chunk.js.map