(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(t,a,n){"use strict";n.r(a);var s=n(0),e=function(t){var a=t.options.beforeCreate||[];t.options.beforeCreate=[function(){var t,a={file:{relative:"plugins-and-themes/custom-container.md"},content:"",contentType:"md",headings:[{text:t="custom-container",slug:t,level:1},{text:"Installation",slug:"installation",level:2},{text:"Configuration",slug:"configuration",level:2}],regularPath:"/plugins-and-themes/custom-container.html",key:"361ef137",frontmatter:{},attributes:{},layout:void 0,path:"/plugins-and-themes/custom-container"};this.$page=a}].concat(a)},r=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("MiniLayout",{attrs:{name:"default"}},[n("div",{staticClass:"page-content"},[n("h1",{attrs:{id:"custom-container"}},[n("router-link",{staticClass:"header-anchor",attrs:{to:"#custom-container","aria-hidden":"true"}},[t._v("#")]),t._v(" custom-container")],1),t._v(" "),n("p",[t._v("Custom containers can be very useful. The "),n("em",[t._v("docs")]),t._v("-theme comes with a few custom containers by default.")]),t._v(" "),n("p",[n("strong",[t._v("Example")])]),t._v(" "),n("MiniTip",{attrs:{title:"TIP"}},[n("p",[t._v("This is a custom container that is part of the "),n("em",[t._v("docs")]),t._v("-theme.")])]),t._v(" "),n("p",[t._v("The above container is the result of the following markdown markup:")]),t._v(" "),n("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"md"}},[n("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-md"}},[n("code",{pre:!0,attrs:{class:"language-md"}},[t._v("::: tip\nThis is a custom container that is part of the "),n("span",{pre:!0,attrs:{class:"token italic"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token content"}},[t._v("docs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")])]),t._v("-theme.\n:::")])])]),n("h2",{attrs:{id:"installation"}},[n("router-link",{staticClass:"header-anchor",attrs:{to:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")],1),t._v(" "),n("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"sh"}},[n("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-sh"}},[n("code",{pre:!0,attrs:{class:"language-sh"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @minipress/plugin-custom-container --save")])])]),n("h2",{attrs:{id:"configuration"}},[n("router-link",{staticClass:"header-anchor",attrs:{to:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")],1),t._v(" "),n("p",[t._v("You define a custom container by specifying four things:")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("type")]),t._v(": The type is basically just what you will end up writing in your markdown files in order to create a container. For example: If you set "),n("code",[t._v("type")]),t._v(" to "),n("code",[t._v("tip")]),t._v(" then")])]),t._v(" "),n("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"md"}},[n("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-md"}},[n("code",{pre:!0,attrs:{class:"language-md"}},[t._v("::: tip\n:::")])])]),n("p",[t._v("will create an empty tip-container.")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("code",[t._v("defaultTitle")]),t._v(": A container can have a "),n("em",[t._v("title")]),t._v(". Everything that comes after "),n("code",[t._v("::: type")]),t._v(" (in the same line) is "),n("em",[t._v("the title")]),t._v(" of your container. In case no "),n("em",[t._v("title")]),t._v(" is specified you can render a default title which is what you can specify with "),n("code",[t._v("defaultTitle")]),t._v(".")]),t._v(" "),n("li",[n("code",[t._v("renderBefore")]),t._v(": A function that should return a string that will be rendered before the actual container-content. You have access to the current title that is used.")]),t._v(" "),n("li",[n("code",[t._v("renderAfter")]),t._v(":  A function that should return a string that will be rendered after the actual container-content.")])]),t._v(" "),n("p",[n("strong",[t._v("Example")])]),t._v(" "),n("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"js"}},[n("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-js"}},[n("code",{pre:!0,attrs:{class:"language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" TipContainer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tip'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  defaultTitle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TIP'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("renderBefore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<div><p>")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("title"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("</p>\\n")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("renderAfter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'</div>\\n'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@minipress/plugin-custom-container'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TipContainer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),n("MiniTip",{attrs:{title:"TIP"}},[n("p",[t._v("You can use "),n("code",[t._v("@minipress/plugin-custom-container")]),t._v(" multiple times in order to create as many containers as you like.")])]),t._v(" "),n("p",[t._v("You can then use this custom container like this:")]),t._v(" "),n("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"md"}},[n("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-md"}},[n("code",{pre:!0,attrs:{class:"language-md"}},[t._v("::: tip My Title\nYou can even use "),n("span",{pre:!0,attrs:{class:"token italic"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token content"}},[t._v("markdown")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")])]),t._v("-syntax here.\n:::")])])])],1)])}),[],!1,null,null,null);"function"==typeof e&&e(r);a.default=r.exports}}]);