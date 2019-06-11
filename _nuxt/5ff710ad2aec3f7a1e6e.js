(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{438:function(t,e,r){"use strict";r.r(e);r(15),r(57),r(41),r(12),r(103),r(75);var n=r(10),o=(r(76),{name:"image-input",data:function(){return{errorDialog:null,errorText:"",uploadFieldName:"file",maxSize:1024}},props:{value:Object},methods:{launchFilePicker:function(){this.errorText="",this.errorDialog=!1,this.$refs.file.click()},onFileChange:function(t,e){var r=this.maxSize,n=e[0];if(e.length>0){var o=n.size/r/r;if(n.type.match("image.*"))if(o>1)this.errorDialog=!0,this.errorText="Your file is too big! Please select an image under 1MB";else{var l=new FormData,c=URL.createObjectURL(n);l.append(t,n),this.$emit("input",{formData:l,imageURL:c})}else this.errorDialog=!0,this.errorText="Please choose an image file"}}}}),l=r(52),c=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{on:{click:function(e){return t.launchFilePicker()}}},[t._t("activator")],2),t._v(" "),r("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",name:t.uploadFieldName},on:{change:function(e){return t.onFileChange(e.target.name,e.target.files)}}}),t._v(" "),t.errorDialog?r("div",[r("span",[t._v(t._s(t.errorText))])]):t._e()])},[],!1,null,null,null).exports,v=function(t){return!!t.trim()},f={name:"post-new",components:{BlogImageUploader:c},fetch:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,e.params,0!==r.getters["post/categories"].length){t.next=3;break}return t.abrupt("return",r.dispatch("post/fetchCategories"));case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{titleImg:null,imageFile:null,category:"1",title:"",content:"",tag:"",tags:[],progress:!1,error:""}},mounted:function(){this.$globalInit()},computed:{categories:function(){return this.$store.state.post.categories},validation:function(){return{title:{required:v(this.title)},content:{required:v(this.content)}}},valid:function(){for(var t=this.validation,e=Object.keys(t),r=!0,n=function(i){var n=e[i];if(r=Object.keys(t[n]).every(function(e){return t[n][e]}),!r)return"break"},i=0;i<e.length;i++){if("break"===n(i))break}return r}},methods:{resetError:function(){this.error=""},handleClick:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r,n,o,l,c,v=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=1*this.category,n=this.categories.find(function(t){return t.id===r}),o=[],this.tags.forEach(function(t){o.push(t.text)}),!!o.find(function(t){return t===n.name})||o.push(n.name),t.next=8,this.$store.dispatch("post/uploadImage",this.titleImg.formData);case 8:return l=t.sent,c={category:n,title:this.title,content:this.content,tags:o,imageUrl:l.data},console.log(c),this.progress=!0,this.error="",t.abrupt("return",this.$store.dispatch("post/addPost",c).then(function(data){v.$router.push({path:"/post/"+v.$store.getters["post/getLatestPostId"]})}).catch(function(t){return v.throwReject(t)}));case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),throwReject:function(t){return Promise.reject(t)}}},m=Object(l.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"ftco-section ftco-degree-bg next-section"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8"},[r("form",{attrs:{novalidate:""}},[r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"category"}},[t._v("분류")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],attrs:{id:"category"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.category=e.target.multiple?r:r[0]}}},t._l(t.categories,function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}),0)]),t._v(" "),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"title"}},[t._v("제목")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{id:"title",type:"text",autocomplete:"off",placeholder:"제목"},domProps:{value:t.title},on:{focus:t.resetError,input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"content"}},[t._v("내용")]),t._v(" "),r("no-ssr",[r("vue-editor",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),t._m(1)],1),t._v(" "),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"tags"}},[t._v("태그")]),t._v(" "),r("no-ssr",[r("vue-tags-input",{attrs:{tags:t.tags,placeholder:"태그 입력후 엔터키를 누르세요"},on:{"tags-changed":function(e){return t.tags=e}},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}})],1),t._v(" "),t._m(2)],1),t._v(" "),r("div",{staticClass:"form-item"},[r("label",{attrs:{for:"tags"}},[t._v("태그")]),t._v(" "),r("BlogImageUploader",{model:{value:t.titleImg,callback:function(e){t.titleImg=e},expression:"titleImg"}},[r("div",{attrs:{slot:"activator"},slot:"activator"},[t.titleImg?r("img",{attrs:{src:t.titleImg.imageURL}}):r("span",[t._v("이미지 추가")])])]),t._v(" "),t._m(3)],1),t._v(" "),r("div",{staticClass:"form-actions"},[r("button",{attrs:{type:"button"},on:{click:t.handleClick}},[t._v("완료")])])])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"validation-errors"},[e("li",{staticClass:"validation.title.required"},[this._v("제목을 입력하세요")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"validation-errors"},[e("li",{staticClass:"validation.content.required"},[this._v("내용을 입력하세요")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"validation-errors"},[e("li",{staticClass:"validation.content.required"},[this._v("내용을 입력하세요")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"validation-errors"},[e("li",{staticClass:"validation.content.required"},[this._v("내용을 입력하세요")])])}],!1,null,null,null);e.default=m.exports}}]);