(this.webpackJsonpblogpost=this.webpackJsonpblogpost||[]).push([[0],{118:function(e,t,n){e.exports=n(401)},122:function(e,t,n){},401:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(14),l=n.n(r),c=(n(122),n(110)),s=n(111),i=n(117),u=n(116),h=(n(123),function(){return o.a.createElement("div",{className:"header-site tc"},o.a.createElement("h3",null," Welcome to our webiste! Search all your blog posts."))}),m=(n(124),function(e){var t=e.dynamicSearch;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{type:"search",placeholder:"search for blog post",onChange:t}))}),d=function(e){var t=e.id,n=e.title,a=e.body;return o.a.createElement("div",{className:"fl w-50 tc br bl b--blue-60 "},o.a.createElement("p",null," The post is: ",t," "),o.a.createElement("p",null," Title is: ",o.a.createElement("b",null," ",n)," "),o.a.createElement("p",null," Blog post: ",o.a.createElement("br",null)," ",a," "),o.a.createElement("hr",null))},p=function(e){var t=e.blogpost;return o.a.createElement("div",{className:"avenir fl w-100 dark-blue tc"},t.map((function(e,n){return o.a.createElement(d,{key:n,id:t[n].id,title:t[n].title,body:t[n].body})})))},b=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onSearchChange=function(t){console.log(t.target.value),e.setState({searchField:t.target.value})},e.state={blogpost:[],searchField:""},console.log("constructor"),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("did mount"),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){e.setState({blogpost:t})}))}},{key:"render",value:function(){var e=this.state,t=e.blogpost,n=e.searchField,a=t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement(h,null),o.a.createElement(m,{dynamicSearch:this.onSearchChange}),o.a.createElement(p,{blogpost:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.6c06603c.chunk.js.map