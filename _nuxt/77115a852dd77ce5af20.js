(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{283:function(t,e,r){"use strict";var o={name:"BlogCategoryInfo",props:{categoryInfos:{type:Array,default:function(){return[]}}}},n=r(42),component=Object(n.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"categories"},t._l(t.categoryInfos,function(e){return r("li",{key:e.id},[r("nuxt-link",{attrs:{to:{path:"/?category="+e.id}}},[t._v("\n      "+t._s(e.name)+"\n      "),r("span",[t._v("("+t._s(e.count)+")")])])],1)}),0)},[],!1,null,null,null);e.a=component.exports},284:function(t,e,r){"use strict";var o={name:"BlogArchives",props:{archives:{type:Array,default:function(){return[]}}}},n=r(42),component=Object(n.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"list-unstyled categories"},t._l(t.archives,function(a){return r("li",{key:a.id},[r("nuxt-link",{attrs:{to:{path:"/?year="+a.archiveDate.year+"&month="+a.archiveDate.month}}},[t._v("\n      "+t._s(a.archiveDate.year)+" "+t._s(a.archiveDate.month)+"\n      "),r("span",[t._v(t._s(a.count))])])],1)}),0)},[],!1,null,null,null);e.a=component.exports},285:function(t,e,r){"use strict";e.a=function(t){var e=void 0,r=("00"+((e="string"==typeof t||"number"==typeof t?new Date(t):t).getMonth()+1)).slice(-2),o=("00"+e.getDate()).slice(-2),n=("00"+e.getHours()).slice(-2),c=("00"+e.getMinutes()).slice(-2),l=("00"+e.getSeconds()).slice(-2);return"".concat(e.getFullYear(),"-").concat(r,"-").concat(o," ").concat(n,":").concat(c,":").concat(l)}},286:function(t,e,r){"use strict";var o=r(283),n=r(284),c={name:"BlogFooter",components:{BlogCategoryInfo:o.a,BlogArchives:n.a},props:{blogData:{type:Object,default:function(){}}},computed:{year:function(){return(new Date).getFullYear()}}},l=r(42),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"ftco-footer ftco-bg-dark ftco-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row mb-5"},[t._m(0),t._v(" "),r("div",{staticClass:"col-md"},[r("div",{staticClass:"ftco-footer-widget mb-4 ml-md-4"},[r("h2",{staticClass:"ftco-heading-2"},[t._v("Categories")]),t._v(" "),r("BlogCategoryInfo",{attrs:{categoryInfos:t.blogData.categoryInfos}})],1)]),t._v(" "),r("div",{staticClass:"col-md"},[r("div",{staticClass:"ftco-footer-widget mb-4"},[r("h2",{staticClass:"ftco-heading-2"},[t._v("Archives")]),t._v(" "),r("BlogArchives",{attrs:{archives:t.blogData.archives}})],1)]),t._v(" "),t._m(1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 text-center"},[r("p",[t._v("\n          Copyright ©\n          "+t._s(t.year)+"All rights reserved | This template\n          is made with\n          "),r("i",{staticClass:"icon-heart",attrs:{"aria-hidden":"true"}}),t._v(" by\n          "),r("a",{attrs:{href:"https://colorlib.com",target:"_blank"}},[t._v("Colorlib")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md"},[e("div",{staticClass:"ftco-footer-widget mb-4"},[e("h2",{staticClass:"ftco-heading-2"},[this._v("OnLifeCoding")]),this._v(" "),e("p",[this._v("한동안 코딩을 접으려 했지만, 그마나 코딩이 가장 잘 할 수 있는 일임을 깨닫고 아주 천천히 개발자의 삶으로 다시 돌아가려고 노력 중입니다.")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md"},[r("div",{staticClass:"ftco-footer-widget mb-4"},[r("h2",{staticClass:"ftco-heading-2"},[t._v("Have a Questions?")]),t._v(" "),r("div",{staticClass:"block-23 mb-3"},[r("ul",[r("li",[r("span",{staticClass:"icon icon-map-marker"}),t._v(" "),r("span",{staticClass:"text"},[t._v("\n                  203 Fake St. Mountain\n                  View, San Francisco, California, USA\n                ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("span",{staticClass:"icon icon-phone"}),t._v(" "),r("span",{staticClass:"text"},[t._v("\n                    +2 392 3929\n                    210\n                  ")])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("span",{staticClass:"icon icon-envelope"}),t._v(" "),r("span",{staticClass:"text"},[t._v("info@yourdomain.com")])])])])])])])}],!1,null,null,null);e.a=component.exports},287:function(t,e,r){"use strict";var o=r(283),n=r(284),c={name:"BlogRightSide",components:{BlogCategoryInfo:o.a,BlogArchives:n.a},props:{blogData:{type:Object,default:function(){}}}},l=r(42),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-4 sidebar"},[t._m(0),t._v(" "),r("div",{staticClass:"sidebar-box"},[r("h3",[t._v("Categories")]),t._v(" "),r("BlogCategoryInfo",{attrs:{categoryInfos:t.blogData.categoryInfos}})],1),t._v(" "),r("div",{staticClass:"sidebar-box"},[r("h3",[t._v("Tag Cloud")]),t._v(" "),r("ul",{staticClass:"tagcloud"},t._l(t.blogData.tagCloud,function(e){return r("a",{key:e,staticClass:"tag-cloud-link",attrs:{href:"#"}},[t._v(t._s(e))])}),0)]),t._v(" "),r("div",{staticClass:"sidebar-box"},[r("h3",[t._v("Archives")]),t._v(" "),r("BlogArchives",{attrs:{archives:t.blogData.archives}})],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-box"},[e("form",{staticClass:"search-form",attrs:{action:"#"}},[e("div",{staticClass:"form-group"},[e("span",{staticClass:"icon icon-search"}),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Type a keyword and hit enter"}})])])])}],!1,null,null,null);e.a=component.exports},290:function(t,e,r){"use strict";r.r(e);r(58);var o=r(6),n=(r(106),r(5),r(285)),c={name:"BlogPostCard",data:function(){return{}},props:{id:{type:Number,required:!0},category:{type:Object,required:!0,default:function(){}},title:{type:String,required:!0},content:{type:String,required:!0},createAt:{type:Number,required:!0}},mounted:function(){},computed:{croppedContent:function(){var t=this.content.indexOf("<br>");return-1==t?this.content.substr(0,100):this.content.substr(0,t)},createAtStr:function(){return console.log(this.createAt),Object(n.a)(this.createAt)}}},l=r(42),v={name:"BlogPostList",components:{BlogPostCard:Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-entry ftco-animate"},[r("nuxt-link",{staticClass:"img",staticStyle:{"background-image":"url(images/image_1.jpg)"},attrs:{to:{path:"/post/"+t.id}}}),t._v(" "),r("div",{staticClass:"text pt-2 mt-5"},[r("span",{staticClass:"big"},[t._v(t._s(t.category.name))]),t._v(" "),r("h3",{staticClass:"mb-4"},[r("nuxt-link",{attrs:{to:{path:"/post/"+t.id}}},[t._v(t._s(t.title))])],1),t._v(" "),r("div",{staticClass:"mb-4",domProps:{innerHTML:t._s(t.croppedContent)}}),t._v(" "),r("div",{staticClass:"author mb-4 d-flex align-items-center"},[r("a",{staticClass:"img",staticStyle:{"background-image":"url(images/person_1.jpg)"},attrs:{href:"#"}}),t._v(" "),r("div",{staticClass:"ml-3 info"},[r("span",[t._v("Written by")]),t._v(" "),r("h3",[r("a",{attrs:{href:"#"}},[t._v("OnLifeCoding")]),t._v(",\n          "),r("span",[t._v(t._s(t.createAtStr))])])])]),t._v(" "),r("div",{staticClass:"meta-wrap d-md-flex align-items-center"},[t._m(0),t._v(" "),r("div",{staticClass:"half"},[r("p",[r("nuxt-link",{staticClass:"btn btn-primary p-3 px-xl-4 py-xl-3",attrs:{to:{path:"/post/"+t.id}}},[t._v("\n            Continue Reading\n          ")])],1)])])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"half order-md-last text-md-right"},[e("p",{staticClass:"meta"})])}],!1,null,null,null).exports},props:{posts:{type:Array,default:function(){return[]}}},created:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("BlogPostList-create");case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){console.log("BlogPostList-mounted")},methods:{}},d=Object(l.a)(v,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.posts,function(e){return r("div",{key:e.id,staticClass:"col-md-12"},[r("BlogPostCard",t._b({},"BlogPostCard",e,!1))],1)}),0)},[],!1,null,null,null).exports,h=r(287),f={name:"BlogPaging",props:{},computed:{pages:function(){var t=this.$store.getters["post/startPageInGroup"],e=this.$store.getters["post/lastPageInGroup"];return this.$range(t,e)},prevPageGroupExist:function(){return this.$store.getters["post/prevPageGroupExist"]},nextPageGroupExist:function(){return this.$store.getters["post/nextPageGroupExist"]},prevPage:function(){return this.$store.getters["post/prevPage"]},nextPage:function(){return this.$store.getters["post/nextPage"]}},methods:{isActive:function(t){return t*=1,this.$store.state.post.currentPage===t},pageStyle:function(t){return this.isActive(t)?["active"]:[]}}},_=Object(l.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col text-center"},[r("div",{staticClass:"block-27"},[r("ul",[r("li",[t.prevPageGroupExist?r("nuxt-link",{attrs:{to:{path:"/?page="+t.prevPage}}},[t._v("<")]):t._e()],1),t._v(" "),t._l(t.pages,function(e){return r("li",{key:e,class:t.pageStyle(e)},[t.isActive(e)?r("span",[t._v(t._s(e))]):r("nuxt-link",{attrs:{to:{path:"/?page="+e}}},[t._v(t._s(e))])],1)}),t._v(" "),r("li",[t.nextPageGroupExist?r("nuxt-link",{attrs:{to:{path:"/?page="+t.nextPage}}},[t._v(">")]):t._e()],1)],2)])])])},[],!1,null,null,null).exports,m=r(286),C=r(169),y={name:"index",components:{BlogPostList:d,BlogRightSide:h.a,BlogPaging:_,BlogFooter:m.a},watchQuery:["page","category","year","month"],fetch:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var r,o,n,c,l,v,d,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((r=e.query.page)||(r=1),(o=e.query.category)||(o=0),(n={}).year=e.query.year,n.month=e.query.month,n.year||(n.year=0,n.month=0),c=0===e.store.state.post.postList.length,l=e.store.state.post.currentPage!==r||e.store.state.post.category!==o||e.store.state.post.year!==n.year||e.store.state.post.month!==n.month,c||l){t.next=12;break}return t.abrupt("return");case 12:if(e.store.dispatch("post/setCurrentPage",r),e.store.dispatch("post/setCategory",o),e.store.dispatch("post/setYearMonth",n),v=e.store.getters["post/needToLoadBlogData"],d=!1,console.log("_needToLoadBlogData: ".concat(v)),v)try{data=Object(C.default)(),e.store.dispatch("post/static_initData",data),d=!0,e.store.dispatch("post/setFromArray",d),console.log("load succeed")}catch(t){console.log("error: ".concat(t)),d=!1}else d=e.store.state.post.fromArray,console.log("fromArray: ".concat(d));if(!v){t.next=23;break}return t.abrupt("return",e.store.dispatch("post/fetchListWithData",d));case 23:return t.abrupt("return",e.store.dispatch("post/fetchList",d));case 24:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),computed:{posts:function(){return this.$store.state.post.postList},blogData:function(){var data={},t=this.$store.getters["post/archives"],e=this.$store.getters["post/tagCloud"],r=this.$store.getters["post/categoryInfos"];return data.archives=t,data.tagCloud=e,data.categoryInfos=r,data}},mounted:function(){this.$globalInit()}},x=Object(l.a)(y,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("section",{staticClass:"ftco-section next-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8"},[r("BlogPostList",{attrs:{posts:t.posts}}),t._v(" "),r("BlogPaging")],1),t._v(" "),r("BlogRightSide",{attrs:{blogData:t.blogData}})],1)])]),t._v(" "),r("BlogFooter",{attrs:{blogData:t.blogData}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero-wrap js-fullheight",staticStyle:{"background-image":"url('/images/bg_3.jpg')"},attrs:{"data-stellar-background-ratio":"0.5"}},[e("div",{staticClass:"overlay"}),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row no-gutters slider-text js-fullheight align-items-center justify-content-center",attrs:{"data-scrollax-parent":"true"}},[e("div",{staticClass:"col-md-9 ftco-animate text-center",attrs:{"data-scrollax":" properties: { translateY: '70%' }"}},[e("h1",{staticClass:"mb-4",attrs:{"data-scrollax":"properties: { translateY: '30%', opacity: 1.6 }"}},[this._v("I'm on life coding")]),this._v(" "),e("p",{attrs:{"data-scrollax":"properties: { translateY: '30%', opacity: 1.6 }"}},[this._v("다시, 천천히, 내 삶을 코딩하다")]),this._v(" "),e("span",{staticClass:"mr-2 next-section-container"},[e("div",{staticClass:"next-section-arrow",attrs:{id:"scroll-to-next-section"}})])])])])])}],!1,null,null,null);e.default=x.exports}}]);