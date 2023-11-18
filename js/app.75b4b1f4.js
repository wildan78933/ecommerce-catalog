(function(){"use strict";var t={8326:function(t,e,n){var o=n(6369),r=function(){var t=this,e=t._self._c;return e("div",[t._l(t.products,(function(n){return e("div",{key:n.id,attrs:{id:"product"}},[e("div",{staticClass:"bg-putih"},[e("div",{class:{"bg-color men-color":"men's clothing"===n.category,"bg-color women-color":"women's clothing"===n.category}},[t._m(0,!0),e("ProductDisplay",{class:{"pages page-men":"men's clothing"===n.category,"pages page-women":"women's clothing"===n.category,"page-unavailable":!["men's clothing","women's clothing"].includes(n.category)},attrs:{pesan:"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",product:n},on:{"next-product":t.nextProductButtonPressed}})],1)])])})),!t.products.length&&t.isPageUnavailable?e("div",{staticClass:"normal"},[e("div",{staticClass:"page-unavailable"},[e("img",{staticClass:"sad-img",attrs:{src:n(1163),alt:""}}),e("div",{staticClass:"page-btn"},[e("p",{staticClass:"unav-text"},[t._v("This product is unavailable to show")]),e("button",{staticClass:"next-un",attrs:{type:"button"},on:{click:t.nextProductButtonPressed}},[t._v(" Next Product ")])])])]):t._e()],2)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"overlay"},[e("img",{attrs:{src:n(8382),alt:""}})])}],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"produk"},[e("div",[e("img",{staticClass:"image",attrs:{src:t.product.image,alt:""}})]),e("div",{staticClass:"content-kebawah"},[e("h1",[t._v(t._s(t.product.title))]),e("div",{staticClass:"category"},[e("p",[t._v(t._s(t.product.category))]),e("div",{staticClass:"rating"},[e("div",[t._v(t._s(t.product.rating.rate)+"/5")]),e("div",{staticClass:"bulat"},t._l(5,(function(n){return e("div",{key:n,staticClass:"circle circle-men",class:{filled:n<=Math.round(t.product.rating.rate),"circle circle-women":"women's clothing"===t.product.category}})})),0)])]),e("div",{staticClass:"divider-1"}),e("div",{staticClass:"description"},[e("p",[t._v(t._s(t.product.description))])]),e("div",{staticClass:"divider-1"}),e("div",{staticClass:"price price-men",class:{"price price-women":"women's clothing"===t.product.category}},[e("p",[t._v("$ "+t._s(t.product.price))])]),e("div",{staticClass:"btn"},[e("button",{staticClass:"buttons btn-men-buy",class:{"buttons btn-women-buy":"women's clothing"===t.product.category}},[t._v(" Buy Now ")]),e("button",{staticClass:"buttonn btn-men-next",class:{"buttonn btn-women-next":"women's clothing"===t.product.category},on:{click:t.nextProductButtonPressed}},[t._v(" Next Page ")])])])])},i=[],a={name:"ProductDisplay",props:["product"],methods:{nextProductButtonPressed(){this.$emit("next-product")}}},u=a,l=n(1001),d=(0,l.Z)(u,c,i,!1,null,null,null),p=d.exports,g=n(1076),v={name:"productDisplay",components:{ProductDisplay:p},data(){return{products:[],currentIndex:1,isPageUnavailable:!1}},methods:{setProducts(t){if(t.length>0){const e=t[0];"men's clothing"===e.category||"women's clothing"===e.category?(this.products=[e],this.isPageUnavailable=!1):(this.products=[],this.isPageUnavailable=!0)}},nextProductButtonPressed(){this.currentIndex+=1,this.currentIndex>20&&(this.currentIndex=1),this.fetchProducts()},fetchProducts(){g.Z.get(`https://fakestoreapi.com/products/${this.currentIndex}`).then((t=>this.setProducts([t.data]))).catch((t=>console.log(t)))}},mounted(){this.fetchProducts()}},f=v,h=(0,l.Z)(f,r,s,!1,null,null,null),m=h.exports;o.ZP.config.productionTip=!1,new o.ZP({render:t=>t(m)}).$mount("#app")},8382:function(t,e,n){t.exports=n.p+"img/bg-pattern.12d0635e.svg"},1163:function(t,e,n){t.exports=n.p+"img/sad-face.082c62b0.svg"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,s){if(!o){var c=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],s=t[l][2];for(var i=!0,a=0;a<o.length;a++)(!1&s||c>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[a])}))?o.splice(a--,1):(i=!1,s<c&&(c=s));if(i){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[o,r,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/ecommerce-catalog/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,s,c=o[0],i=o[1],a=o[2],u=0;if(c.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(a)var l=a(n)}for(e&&e(o);u<c.length;u++)s=c[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(l)},o=self["webpackChunkecommerce"]=self["webpackChunkecommerce"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8326)}));o=n.O(o)})();
//# sourceMappingURL=app.75b4b1f4.js.map