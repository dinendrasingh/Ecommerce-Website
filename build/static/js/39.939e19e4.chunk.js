(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[39],{1168:function(e,t,r){"use strict";r.r(t);var n=r(29),c=(r(0),r(22)),a=r(28),o=r(1129),s=r(128),u=r(40),i=r(233),p=r(234),l=r(163),h=r(2),d=function(e){var t=e.p,r=Object(c.b)();return Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("div",{style:{width:"100px",height:"auto"},children:t.images.length?Object(h.jsx)(o.a,{small:t.images[0].url,large:t.images[0].url}):Object(h.jsx)(o.a,{small:s.a,large:s.a})})}),Object(h.jsx)("td",{children:t.title}),Object(h.jsxs)("td",{children:["$",t.price]}),Object(h.jsx)("td",{children:t.brand}),Object(h.jsx)("td",{children:Object(h.jsxs)("select",{onChange:function(e){console.log("color changed",e.target.value);var n=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(n=JSON.parse(localStorage.getItem("cart"))),n.map((function(r,c){r._id===t._id&&(n[c].color=e.target.value)})),localStorage.setItem("cart",JSON.stringify(n)),r({type:"ADD_TO_CART",payload:n}))},name:"color",className:"form-control",children:[t.color?Object(h.jsx)("option",{value:t.color,children:t.color}):Object(h.jsx)("option",{children:"Select"}),["Black","Brown","Silver","White","Blue"].filter((function(e){return e!==t.color})).map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))]})}),Object(h.jsx)("td",{className:"text-center",children:Object(h.jsx)("input",{type:"number",className:"form-control",value:t.count,onChange:function(e){var n=e.target.value<1?1:e.target.value;if(n>t.quantity)u.b.error("Max available quantity: ".concat(t.quantity));else{var c=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(c=JSON.parse(localStorage.getItem("cart"))),c.map((function(e,r){e._id==t._id&&(c[r].count=n)})),localStorage.setItem("cart",JSON.stringify(c)),r({type:"ADD_TO_CART",payload:c}))}}})}),Object(h.jsx)("td",{className:"text-center",children:"Yes"===t.shipping?Object(h.jsx)(i.a,{className:"text-success"}):Object(h.jsx)(p.a,{className:"text-danger"})}),Object(h.jsx)("td",{className:"text-center",children:Object(h.jsx)(l.a,{onClick:function(){var e=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(e=JSON.parse(localStorage.getItem("cart"))),e.map((function(r,n){r._id===t._id&&e.splice(n,1)})),localStorage.setItem("cart",JSON.stringify(e)),r({type:"ADD_TO_CART",payload:e}))},className:"text-danger pointer"})})]})})},j=r(143);t.default=function(e){var t=e.history,r=Object(c.c)((function(e){return Object(n.a)({},e)})),o=r.cart,s=r.user,u=Object(c.b)();return Object(h.jsx)("div",{className:"container-fluid pt-2",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-8",children:[Object(h.jsxs)("h4",{children:["Cart / ",o.length," Product"]}),o.length?Object(h.jsxs)("table",{className:"table table-bordered",children:[Object(h.jsx)("thead",{className:"thead-light",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Image"}),Object(h.jsx)("th",{scope:"col",children:"Title"}),Object(h.jsx)("th",{scope:"col",children:"Price"}),Object(h.jsx)("th",{scope:"col",children:"Brand"}),Object(h.jsx)("th",{scope:"col",children:"Color"}),Object(h.jsx)("th",{scope:"col",children:"Count"}),Object(h.jsx)("th",{scope:"col",children:"Shipping"}),Object(h.jsx)("th",{scope:"col",children:"Remove"})]})}),o.map((function(e){return Object(h.jsx)(d,{p:e},e._id)}))]}):Object(h.jsxs)("p",{children:["No products in cart. ",Object(h.jsx)(a.b,{to:"/shop",children:"Continue Shopping."})]})]}),Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h4",{children:"Order Summary"}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:"Products"}),o.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:[e.title," x ",e.count," = $",e.price*e.count]})},t)})),Object(h.jsx)("hr",{}),"Total: ",Object(h.jsxs)("b",{children:["$",o.reduce((function(e,t){return e+t.count*t.price}),0)]}),Object(h.jsx)("hr",{}),s?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{onClick:function(){Object(j.k)(o,s.token).then((function(e){console.log("CART POST RES",e),e.data.ok&&t.push("/checkout")})).catch((function(e){return console.log("cart save err",e)}))},className:"btn btn-sm btn-primary mt-2",disabled:!o.length,children:"Proceed to Checkout"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){u({type:"COD",payload:!0}),Object(j.k)(o,s.token).then((function(e){console.log("CART POST RES",e),e.data.ok&&t.push("/checkout")})).catch((function(e){return console.log("cart save err",e)}))},className:"btn btn-sm btn-warning mt-2",disabled:!o.length,children:"Pay Cash on Delivery"})]}):Object(h.jsx)("button",{className:"btn btn-sm btn-primary mt-2",children:Object(h.jsx)(a.b,{to:{pathname:"/login",state:{from:"cart"}},children:"Login to Checkout"})})]})]})})}},128:function(e,t,r){"use strict";t.a=r.p+"static/media/laptop.db0a6ff4.png"},143:function(e,t,r){"use strict";r.d(t,"k",(function(){return u})),r.d(t,"f",(function(){return i})),r.d(t,"e",(function(){return p})),r.d(t,"j",(function(){return l})),r.d(t,"b",(function(){return h})),r.d(t,"d",(function(){return d})),r.d(t,"g",(function(){return j})),r.d(t,"h",(function(){return b})),r.d(t,"i",(function(){return f})),r.d(t,"a",(function(){return m})),r.d(t,"c",(function(){return x}));var n=r(12),c=r.n(n),a=r(13),o=r(24),s=r.n(o),u=function(){var e=Object(a.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/cart"),{cart:t},{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),i=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/cart"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.delete("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/cart"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/address"),{address:r},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/cart/coupon"),{coupon:r},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/order"),{stripeResponse:t},{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/orders"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/wishlist"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.put("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/wishlist/").concat(t),{},{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/wishlist"),{productId:t},{headers:{authtoken:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t,r,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/cash-order"),{couponApplied:n,COD:r},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=39.939e19e4.chunk.js.map