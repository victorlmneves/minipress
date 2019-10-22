(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{100:function(t,n,e){"use strict";n.a=function(t){var n=t.options.beforeCreate||[];t.options.beforeCreate=[function(){var t,n={file:{relative:"plugins-and-themes/custom-container.md"},content:"",contentType:"md",headings:[{text:t="custom-container",slug:t,level:1},{text:"Installation",slug:"installation",level:2},{text:"Configuration",slug:"configuration",level:2}],regularPath:"/plugins-and-themes/custom-container.html",key:"361ef137",frontmatter:{},attributes:{},layout:void 0,path:"/plugins-and-themes/custom-container"};this.$page=n}].concat(n)}},123:function(t,n,e){"use strict";e.r(n);var s=e(99),a=e(66);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);var i=e(0),o=e(100),c=Object(i.a)(a.default,s.a,s.b,!1,null,null,null);"function"==typeof o.a&&Object(o.a)(c),n.default=c.exports},66:function(t,n,e){"use strict";e.r(n);var s=e(67),a=e.n(s);for(var r in s)"default"!==r&&function(t){e.d(n,t,(function(){return s[t]}))}(r);n.default=a.a},67:function(t,n){},99:function(t,n,e){"use strict";var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-content"},[e("h1",{attrs:{id:"custom-container"}},[e("router-link",{staticClass:"header-anchor",attrs:{to:"#custom-container","aria-hidden":"true"}},[t._v("#")]),t._v(" custom-container")],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("MiniTip",{attrs:{title:"TIP"}},[e("p",[t._v("This is a custom container that is part of the "),e("em",[t._v("docs")]),t._v("-theme.")])]),t._v(" "),e("p",[t._v("The above container is the result of the following markdown markup:")]),t._v(" "),t._m(2),e("h2",{attrs:{id:"installation"}},[e("router-link",{staticClass:"header-anchor",attrs:{to:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")],1),t._v(" "),t._m(3),e("h2",{attrs:{id:"configuration"}},[e("router-link",{staticClass:"header-anchor",attrs:{to:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")],1),t._v(" "),e("p",[t._v("You define a custom container by specifying four things:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),e("p",[t._v("will create an empty tip-container.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),e("MiniTip",{attrs:{title:"TIP"}},[e("p",[t._v("You can use "),e("code",[t._v("@minipress/plugin-custom-container")]),t._v(" multiple times in order to create as many containers as you like.")])]),t._v(" "),e("p",[t._v("You can then use this custom container like this:")]),t._v(" "),t._m(9)],1)},a=[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Custom containers can be very useful. The "),n("em",[this._v("docs")]),this._v("-theme comes with a few custom containers by default.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("Example")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"md"}},[n("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-md"}},[n("code",{pre:!0,attrs:{class:"language-md"}},[this._v("::: tip\nThis is a custom container that is part of the "),n("span",{pre:!0,attrs:{class:"token italic"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("*")]),n("span",{pre:!0,attrs:{class:"token content"}},[this._v("docs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("*")])]),this._v("-theme.\n:::")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"sh"}},[n("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-sh"}},[n("code",{pre:!0,attrs:{class:"language-sh"}},[n("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" @minipress/plugin-custom-container --save")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",[n("li",[n("code",[this._v("type")]),this._v(": The type is basically just what you will end up writing in your markdown files in order to create a container. For example: If you set "),n("code",[this._v("type")]),this._v(" to "),n("code",[this._v("tip")]),this._v(" then")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"md"}},[n("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-md"}},[n("code",{pre:!0,attrs:{class:"language-md"}},[this._v("::: tip\n:::")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ol",{attrs:{start:"2"}},[e("li",[e("code",[t._v("defaultTitle")]),t._v(": A container can have a "),e("em",[t._v("title")]),t._v(". Everything that comes after "),e("code",[t._v("::: type")]),t._v(" (in the same line) is "),e("em",[t._v("the title")]),t._v(" of your container. In case no "),e("em",[t._v("title")]),t._v(" is specified you can render a default title which is what you can specify with "),e("code",[t._v("defaultTitle")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("renderBefore")]),t._v(": A function that should return a string that will be rendered before the actual container-content. You have access to the current title that is used.")]),t._v(" "),e("li",[e("code",[t._v("renderAfter")]),t._v(":  A function that should return a string that will be rendered after the actual container-content.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("Example")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"js"}},[e("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" TipContainer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tip'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  defaultTitle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TIP'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("renderBefore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<div><p>")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("title"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("</p>\\n")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("renderAfter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'</div>\\n'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@minipress/plugin-custom-container'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TipContainer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"md"}},[n("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-md"}},[n("code",{pre:!0,attrs:{class:"language-md"}},[this._v("::: tip My Title\nYou can even use "),n("span",{pre:!0,attrs:{class:"token italic"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("*")]),n("span",{pre:!0,attrs:{class:"token content"}},[this._v("markdown")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("*")])]),this._v("-syntax here.\n:::")])])])}];e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return a}))}}]);