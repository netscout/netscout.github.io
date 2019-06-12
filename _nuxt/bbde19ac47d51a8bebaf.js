(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{283:function(t,e,r){"use strict";var o={name:"BlogCategoryInfo",props:{categoryInfos:{type:Array,default:function(){return[]}}}},n=r(42),component=Object(n.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"categories"},t._l(t.categoryInfos,function(e){return r("li",{key:e.id},[r("nuxt-link",{attrs:{to:{path:"/?category="+e.id}}},[t._v("\n      "+t._s(e.name)+"\n      "),r("span",[t._v("("+t._s(e.count)+")")])])],1)}),0)},[],!1,null,null,null);e.a=component.exports},284:function(t,e,r){"use strict";var o={name:"BlogArchives",props:{archives:{type:Array,default:function(){return[]}}}},n=r(42),component=Object(n.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"list-unstyled categories"},t._l(t.archives,function(a){return r("li",{key:a.id},[r("nuxt-link",{attrs:{to:{path:"/?year="+a.archiveDate.year+"&month="+a.archiveDate.month}}},[t._v("\n      "+t._s(a.archiveDate.year)+" "+t._s(a.archiveDate.month)+"\n      "),r("span",[t._v(t._s(a.count))])])],1)}),0)},[],!1,null,null,null);e.a=component.exports},285:function(t,e,r){"use strict";e.a=function(t){var e=void 0,r=("00"+((e="string"==typeof t||"number"==typeof t?new Date(t):t).getMonth()+1)).slice(-2),o=("00"+e.getDate()).slice(-2),n=("00"+e.getHours()).slice(-2),c=("00"+e.getMinutes()).slice(-2),l=("00"+e.getSeconds()).slice(-2);return"".concat(e.getFullYear(),"-").concat(r,"-").concat(o," ").concat(n,":").concat(c,":").concat(l)}},286:function(t,e,r){"use strict";var o=r(283),n=r(284),c={name:"BlogFooter",components:{BlogCategoryInfo:o.a,BlogArchives:n.a},props:{blogData:{type:Object,default:function(){}}},computed:{year:function(){return(new Date).getFullYear()}}},l=r(42),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"ftco-footer ftco-bg-dark ftco-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row mb-5"},[t._m(0),t._v(" "),r("div",{staticClass:"col-md"},[r("div",{staticClass:"ftco-footer-widget mb-4 ml-md-4"},[r("h2",{staticClass:"ftco-heading-2"},[t._v("Categories")]),t._v(" "),r("BlogCategoryInfo",{attrs:{categoryInfos:t.blogData.categoryInfos}})],1)]),t._v(" "),r("div",{staticClass:"col-md"},[r("div",{staticClass:"ftco-footer-widget mb-4"},[r("h2",{staticClass:"ftco-heading-2"},[t._v("Archives")]),t._v(" "),r("BlogArchives",{attrs:{archives:t.blogData.archives}})],1)]),t._v(" "),t._m(1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 text-center"},[r("p",[t._v("\n          Copyright ©\n          "+t._s(t.year)+"All rights reserved | This template\n          is made with\n          "),r("i",{staticClass:"icon-heart",attrs:{"aria-hidden":"true"}}),t._v(" by\n          "),r("a",{attrs:{href:"https://colorlib.com",target:"_blank"}},[t._v("Colorlib")])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md"},[e("div",{staticClass:"ftco-footer-widget mb-4"},[e("h2",{staticClass:"ftco-heading-2"},[this._v("OnLifeCoding")]),this._v(" "),e("p",[this._v("한동안 코딩을 접으려 했지만, 그마나 코딩이 가장 잘 할 수 있는 일임을 깨닫고 아주 천천히 개발자의 삶으로 다시 돌아가려고 노력 중입니다.")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md"},[r("div",{staticClass:"ftco-footer-widget mb-4"},[r("h2",{staticClass:"ftco-heading-2"},[t._v("Have a Questions?")]),t._v(" "),r("div",{staticClass:"block-23 mb-3"},[r("ul",[r("li",[r("span",{staticClass:"icon icon-map-marker"}),t._v(" "),r("span",{staticClass:"text"},[t._v("\n                  203 Fake St. Mountain\n                  View, San Francisco, California, USA\n                ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("span",{staticClass:"icon icon-phone"}),t._v(" "),r("span",{staticClass:"text"},[t._v("\n                    +2 392 3929\n                    210\n                  ")])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("span",{staticClass:"icon icon-envelope"}),t._v(" "),r("span",{staticClass:"text"},[t._v("info@yourdomain.com")])])])])])])])}],!1,null,null,null);e.a=component.exports},287:function(t,e,r){"use strict";var o=r(283),n=r(284),c={name:"BlogRightSide",components:{BlogCategoryInfo:o.a,BlogArchives:n.a},props:{blogData:{type:Object,default:function(){}}}},l=r(42),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-4 sidebar"},[t._m(0),t._v(" "),r("div",{staticClass:"sidebar-box"},[r("h3",[t._v("Categories")]),t._v(" "),r("BlogCategoryInfo",{attrs:{categoryInfos:t.blogData.categoryInfos}})],1),t._v(" "),r("div",{staticClass:"sidebar-box"},[r("h3",[t._v("Tag Cloud")]),t._v(" "),r("ul",{staticClass:"tagcloud"},t._l(t.blogData.tagCloud,function(e){return r("a",{key:e,staticClass:"tag-cloud-link",attrs:{href:"#"}},[t._v(t._s(e))])}),0)]),t._v(" "),r("div",{staticClass:"sidebar-box"},[r("h3",[t._v("Archives")]),t._v(" "),r("BlogArchives",{attrs:{archives:t.blogData.archives}})],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-box"},[e("form",{staticClass:"search-form",attrs:{action:"#"}},[e("div",{staticClass:"form-group"},[e("span",{staticClass:"icon icon-search"}),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Type a keyword and hit enter"}})])])])}],!1,null,null,null);e.a=component.exports},288:function(t,e,r){var o=r(8);o(o.S,"Number",{isNaN:function(t){return t!=t}})},292:function(t,e,r){"use strict";r.r(e);r(5),r(288),r(58);var o=r(6),n=r(287),c=r(286),l=r(285),v=r(169),d={name:"post-id",fetch:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var r,o,n,c,data,param;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,o=e.params,n=r.getters["post/needToLoadBlogData"],console.log("_needToLoadBlogData: ".concat(n)),c=!1,n)try{data=Object(v.default)(),r.dispatch("post/static_initData",data),c=!0,r.dispatch("post/setFromArray",c),console.log("load succeed")}catch(t){console.log("error: ".concat(t)),c=!1}else c=r.state.post.fromArray,console.log("fromArray: ".concat(c));if((param={}).id=parseInt(o.id),param.fromArray=c,!n){t.next=12;break}return t.abrupt("return",r.dispatch("post/fetchPostWithData",param));case 12:return t.abrupt("return",r.dispatch("post/fetchPost",param));case 13:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{}},components:{BlogRightSide:n.a,BlogFooter:c.a},mounted:function(){this.$globalInit(),this.$initContentImageStyle(),this.$initHighlight()},computed:{articlesPath:function(){var path="/?page=".concat(this.currentPage),t=this.$store.state.post.category,e=this.$store.state.post.year,r=this.$store.state.post.month;return 0!==t&&(path="".concat(path,"&category=").concat(t)),0!==e&&0!==r&&(path="".concat(path,"&year=").concat(e,"&month=").concat(r)),path},post:function(){var t=parseInt(this.$route.params.id);return console.log(t),Number.isNaN(t)?{}:this.$store.getters["post/getPostById"](t)},createAtStr:function(){return Object(l.a)(this.post.createAt)},currentPage:function(){return this.$store.state.post.currentPage},blogData:function(){var data={},t=this.$store.getters["post/archives"],e=this.$store.getters["post/tagCloud"],r=this.$store.getters["post/categoryInfos"];return data.archives=t,data.tagCloud=e,data.categoryInfos=r,data},postBGImage:function(){var t="/images/bg_3.jpg";if(this.post.imageUrl){var e=url.substring(url.lastIndexOf("/")+1);t="/data/images/".concat(e)}return{"background-image":"url('".concat(t,"')")}}}},h=r(42),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"hero-wrap js-fullheight",style:t.postBGImage,attrs:{"data-stellar-background-ratio":"0.5"}},[r("div",{staticClass:"overlay"}),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row no-gutters slider-text js-fullheight align-items-center justify-content-center",attrs:{"data-scrollax-parent":"true"}},[r("div",{staticClass:"col-md-9 text-center ftco-animate",attrs:{"data-scrollax":" properties: { translateY: '70%' }"}},[r("p",{staticClass:"breadcrumbs",attrs:{"data-scrollax":"properties: { translateY: '30%', opacity: 1.6 }"}},[r("span",{staticClass:"mr-2"},[r("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),r("span",[r("nuxt-link",{attrs:{to:t.articlesPath}},[t._v("Articles")])],1)]),t._v(" "),r("h1",{staticClass:"mb-3 bread",attrs:{"data-scrollax":"properties: { translateY: '30%', opacity: 1.6 }"}},[t._v(t._s(t.post.title))]),t._v(" "),t._m(0)])])])]),t._v(" "),r("section",{staticClass:"ftco-section ftco-degree-bg next-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8"},[r("h2",[t._v(t._s(t.post.title))]),t._v(" "),r("div",{staticClass:"meta"},[t._v(t._s(t.createAtStr))]),t._v(" "),r("br"),t._v(" "),r("div",{attrs:{id:"contentArea"},domProps:{innerHTML:t._s(t.post.content)}}),t._v(" "),r("div",{staticClass:"tag-widget post-tag-container mb-5 mt-5"},[r("div",{staticClass:"tagcloud"},t._l(t.post.tags,function(e){return r("a",{key:e,staticClass:"tag-cloud-link",attrs:{href:"#"}},[t._v(t._s(e))])}),0)]),t._v(" "),t._m(1)]),t._v(" "),r("BlogRightSide",{attrs:{blogData:t.blogData}})],1)])]),t._v(" "),r("BlogFooter",{attrs:{blogData:t.blogData}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"mr-2 next-section-container"},[e("div",{staticClass:"next-section-arrow",attrs:{id:"scroll-to-next-section"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-author d-flex p-4 bg-light"},[e("div",{staticClass:"bio mr-5"},[e("img",{staticClass:"img-fluid mb-4",attrs:{src:"/images/person_1.jpg",alt:"Image placeholder"}})]),this._v(" "),e("div",{staticClass:"desc"},[e("h3",[this._v("OnLifeCoding")]),this._v(" "),e("p",[this._v("한동안 코딩을 접으려 했지만, 그마나 코딩이 가장 잘 할 수 있는 일임을 깨닫고 아주 천천히 개발자의 삶으로 다시 돌아가려고 노력 중입니다.")])])])}],!1,null,null,null);e.default=component.exports}}]);