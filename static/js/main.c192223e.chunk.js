(this["webpackJsonpbasic-logical"]=this["webpackJsonpbasic-logical"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),s=n.n(r),j=(n(12),n(4)),i=n(2),a=n(0);function b(e){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:e.data})})}function o(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],s=[0,0,1,1,0,0,0,1,0,0,1,1,1,0];return Object(c.useEffect)((function(){for(var e=0,t=0,n=0;n<s.length;n++)1===s[n]?t++:t=0,t>e&&(e=t);r(e)}),[s]),Object(a.jsx)("div",{children:n})}function u(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],s=[0,1,2,3,4,5,6,7,7,8,9,10];return Object(c.useEffect)((function(){for(var e=0,t=1;t<s.length;t++)if(s[t]===s[t-1]){e=s[t];break}r(e)}),[s]),Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:n})})}n(14);function d(){var e=Object(c.useState)([{id:4,name:"abc"},{id:10,name:"ab2"},{id:5,name:"abc3"},{id:6,name:"abc5"}]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{children:[n.map((function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"sortItem",children:[Object(a.jsxs)("p",{children:["Id: ",e.id]}),Object(a.jsxs)("p",{children:["name: ",e.name]})]})})})),Object(a.jsx)("button",{onClick:function(){var e=Object(j.a)(n);e.sort((function(e,t){return e.id<t.id?-1:1})),console.log(e),r(e)},children:"sort by id"}),Object(a.jsx)("button",{onClick:function(){var e=Object(j.a)(n);e.sort((function(e,t){return e.name<t.name?-1:1})),console.log(e),r(e)},children:"sort by name"})]})}n(15);function l(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"userdata",children:[Object(a.jsx)("h1",{children:e.username}),Object(a.jsx)("h3",{children:e.name}),Object(a.jsx)("p",{children:e.email})]})})}var O=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([1,2,3,4,5,6,7,8,9,10]),O=Object(i.a)(s,1)[0],h=Object(c.useState)([]),f=Object(i.a)(h,2),m=f[0],x=f[1];Object(c.useEffect)((function(){for(var e=function(e){O[e]%2===0&&x((function(t){return[].concat(Object(j.a)(t),[O[e]])}))},t=0;t<O.length;t++)e(t)}),[O]),Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),console.log(n);var p=n.map((function(e){return Object(a.jsx)(l,{name:e.name,username:e.username,email:e.email},e.id)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Answer-1"}),Object(a.jsx)(b,{data:m}),Object(a.jsx)("h2",{children:"Answer-2"}),Object(a.jsx)(o,{}),Object(a.jsx)("h2",{children:"Answer-3"}),Object(a.jsx)(u,{}),Object(a.jsx)("h2",{children:"Answer-4"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Note:"})," I have used placeholder api,your provided api is not accessible from my end."]}),p,Object(a.jsx)("h2",{children:"Answer-5"}),Object(a.jsx)(d,{})]})};s.a.render(Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c192223e.chunk.js.map