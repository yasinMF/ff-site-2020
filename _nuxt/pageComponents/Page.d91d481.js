(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{591:function(t,e,n){"use strict";n.r(e);n(16);var r=n(3),o={transition:"fade",data:function(){return{story:{content:{}}}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$storyblok.setQuery(t.query),e.abrupt("return",t.$storyblok.get("cdn/stories/".concat("/"===t.route.path?"home":t.route.path),{resolve_relations:"homepage-case-study-list.case_studies,homepage-article-list.articles"}).then((function(t){return t.data})));case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$storyblok.initEditor(t);case 2:case"end":return e.stop()}}),e)})))()}},c=n(1),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"page"}},[e("section",[this.story.content.component?e(this.story.content.component,{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content}}):this._e()],1),this._v(" "),e("main-footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);