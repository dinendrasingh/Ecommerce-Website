(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[19],{1164:function(e,t,n){"use strict";n.r(t);var r=n(29),c=n(103),a=n(0),s=n(204),o=n(143),i=n(22),u=n(233),l=n(234),d=n(275),p=n(205),j=n(966),h=n(2),b=p.StyleSheet.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:24,textAlign:"center"},author:{fontSize:12,textAlign:"center",marginBottom:40},subtitle:{fontSize:18,margin:12},text:{margin:12,fontSize:14,textAlign:"justify"},image:{marginVertical:15,marginHorizontal:100},header:{fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},footer:{padding:"100px",fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},pageNumber:{position:"absolute",fontSize:12,bottom:30,left:0,right:0,textAlign:"center",color:"grey"}}),f=function(e){var t=e.order;return Object(h.jsx)(p.Document,{children:Object(h.jsxs)(p.Page,{style:b.body,children:[Object(h.jsxs)(p.Text,{style:b.header,fixed:!0,children:["~ ",(new Date).toLocaleString()," ~"]}),Object(h.jsx)(p.Text,{style:b.title,children:"Order Invoice"}),Object(h.jsx)(p.Text,{style:b.author,children:"React Redux Ecommerce"}),Object(h.jsx)(p.Text,{style:b.subtitle,children:"Order Summary"}),Object(h.jsx)(j.Table,{children:Object(h.jsxs)(j.TableHeader,{children:[Object(h.jsx)(j.TableCell,{children:"Title"}),Object(h.jsx)(j.TableCell,{children:"Price"}),Object(h.jsx)(j.TableCell,{children:"Quantity"}),Object(h.jsx)(j.TableCell,{children:"Brand"}),Object(h.jsx)(j.TableCell,{children:"Color"})]})}),Object(h.jsx)(j.Table,{data:t.products,children:Object(h.jsxs)(j.TableBody,{children:[Object(h.jsx)(j.DataTableCell,{getContent:function(e){return e.product.title}}),Object(h.jsx)(j.DataTableCell,{getContent:function(e){return"$".concat(e.product.price)}}),Object(h.jsx)(j.DataTableCell,{getContent:function(e){return e.count}}),Object(h.jsx)(j.DataTableCell,{getContent:function(e){return e.product.brand}}),Object(h.jsx)(j.DataTableCell,{getContent:function(e){return e.product.color}})]})}),Object(h.jsxs)(p.Text,{style:b.text,children:[Object(h.jsxs)(p.Text,{children:["Date: ","               ",new Date(1e3*t.paymentIntent.created).toLocaleString()]}),"\n",Object(h.jsxs)(p.Text,{children:["Order Id: ","         ",t.paymentIntent.id]}),"\n",Object(h.jsxs)(p.Text,{children:["Order Status: ","  ",t.orderStatus]}),"\n",Object(h.jsxs)(p.Text,{children:["Total Paid: ","       ",t.paymentIntent.amount]})]}),Object(h.jsx)(p.Text,{style:b.footer,children:" ~ Thank you for shopping with us ~ "})]})})};t.default=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],j=t[1],b=Object(i.c)((function(e){return Object(r.a)({},e)})).user;Object(a.useEffect)((function(){x()}),[]);var x=function(){return Object(o.g)(b.token).then((function(e){console.log(JSON.stringify(e.data,null,4)),j(e.data)}))},m=function(e){return Object(h.jsxs)("table",{className:"table table-bordered",children:[Object(h.jsx)("thead",{className:"thead-light",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Title"}),Object(h.jsx)("th",{scope:"col",children:"Price"}),Object(h.jsx)("th",{scope:"col",children:"Brand"}),Object(h.jsx)("th",{scope:"col",children:"Color"}),Object(h.jsx)("th",{scope:"col",children:"Count"}),Object(h.jsx)("th",{scope:"col",children:"Shipping"})]})}),Object(h.jsx)("tbody",{children:e.products.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("b",{children:e.product.title})}),Object(h.jsx)("td",{children:e.product.price}),Object(h.jsx)("td",{children:e.product.brand}),Object(h.jsx)("td",{children:e.color}),Object(h.jsx)("td",{children:e.count}),Object(h.jsx)("td",{children:"Yes"===e.product.shipping?Object(h.jsx)(u.a,{style:{color:"green"}}):Object(h.jsx)(l.a,{style:{color:"red"}})})]},t)}))})]})},O=function(e){return Object(h.jsx)(p.PDFDownloadLink,{document:Object(h.jsx)(f,{order:e}),fileName:"invoice.pdf",className:"btn btn-sm btn-block btn-outline-primary",children:"Download PDF"})};return Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-2",children:Object(h.jsx)(s.a,{})}),Object(h.jsxs)("div",{className:"col text-center",children:[Object(h.jsx)("h4",{children:n.length>0?"User purchase orders":"No purchase orders"}),n.reverse().map((function(e,t){return Object(h.jsxs)("div",{className:"m-5 p-3 card",children:[Object(h.jsx)(d.a,{order:e}),m(e),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:O(e)})})]},t)}))]})]})})}},143:function(e,t,n){"use strict";n.d(t,"k",(function(){return i})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return j})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return f})),n.d(t,"a",(function(){return x})),n.d(t,"c",(function(){return m}));var r=n(12),c=n.n(r),a=n(13),s=n(24),o=n.n(s),i=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/cart"),{cart:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/cart"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/cart"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/address"),{address:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/cart/coupon"),{coupon:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/order"),{stripeResponse:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/orders"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/wishlist"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.put("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/wishlist/").concat(t),{},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/wishlist"),{productId:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("https://ecommerce-electronic.herokuapp.com/api","/user/cash-order"),{couponApplied:r,COD:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},204:function(e,t,n){"use strict";n(0);var r=n(28),c=n(2);t.a=function(){return Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{className:"nav flex-column",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/user/history",className:"nav-link",children:"History"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/user/password",className:"nav-link",children:"Password"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/user/wishlist",className:"nav-link",children:"Wishlist"})})]})})}},275:function(e,t,n){"use strict";n(0);var r=n(2);t.a=function(e){var t=e.order,n=e.showStatus,c=void 0===n||n;return Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:[Object(r.jsxs)("span",{children:["Order Id: ",t.paymentIntent.id]})," / ",Object(r.jsxs)("span",{children:["Amount:"," / ",(t.paymentIntent.amount/=100).toLocaleString("en-US",{style:"currency",currency:"INR"})]})," / ",Object(r.jsxs)("span",{children:["Currency: ",t.paymentIntent.currency.toUpperCase()]})," / ",Object(r.jsxs)("span",{children:["Method: ",t.paymentIntent.payment_method_types[0]]})," / ",Object(r.jsxs)("span",{children:["Payment: ",t.paymentIntent.status.toUpperCase()]})," / ",Object(r.jsx)("br",{}),Object(r.jsxs)("span",{children:["Orderd on:"," / ",new Date(1e3*t.paymentIntent.created).toLocaleString()]})," / ",Object(r.jsx)("br",{}),c&&Object(r.jsxs)("span",{className:"badge bg-primary text-white",children:["STATUS: ",t.orderStatus]})]})})}},564:function(e,t){},566:function(e,t){},597:function(e,t){},598:function(e,t){},719:function(e,t){},721:function(e,t){},749:function(e,t){},751:function(e,t){},752:function(e,t){},757:function(e,t){},759:function(e,t){},778:function(e,t){},790:function(e,t){},793:function(e,t){}}]);
//# sourceMappingURL=19.da1e94ba.chunk.js.map