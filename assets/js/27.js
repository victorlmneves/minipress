(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-content"},[s("h1",{attrs:{id:"plugin-deploy-to-gh-pages"}},[s("router-link",{staticClass:"header-anchor",attrs:{to:"#plugin-deploy-to-gh-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" plugin-deploy-to-gh-pages")],1),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("router-link",{staticClass:"header-anchor",attrs:{to:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")],1),t._v(" "),t._m(0),s("h2",{attrs:{id:"configuration"}},[s("router-link",{staticClass:"header-anchor",attrs:{to:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")],1),t._v(" "),t._m(1),s("h2",{attrs:{id:"usage"}},[s("router-link",{staticClass:"header-anchor",attrs:{to:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),s("h2",{attrs:{id:"options"}},[s("router-link",{staticClass:"header-anchor",attrs:{to:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")],1),t._v(" "),t._m(5),t._v(" "),s("ul",[t._m(6),t._v(" "),s("li",[s("code",[t._v("ghpagesOptions")]),t._v(": Under the hood "),s("code",[t._v("@minipress/plugin-deploy-to-gh-pages")]),t._v(" uses the "),s("a",{attrs:{href:"https://github.com/tschaub/gh-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("gh-pages"),s("MpOutboundLink")],1),t._v("-package to do the heavy lifting. "),s("a",{attrs:{href:"https://github.com/tschaub/gh-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("gh-pages"),s("MpOutboundLink")],1),t._v(" can be configured by setting certain options. Whatever you specify in "),s("code",[t._v("ghpagesOptions")]),t._v(" will be passed as is to "),s("a",{attrs:{href:"https://github.com/tschaub/gh-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("gh-pages"),s("MpOutboundLink")],1),t._v(".")])])])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"sh"}},[e("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-sh"}},[e("code",{pre:!0,attrs:{class:"language-sh"}},[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" @minipress/plugin-deploy-to-gh-pages --save-dev")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"js"}},[s("div",{pre:!0,attrs:{class:"minipress-highlight-mask language-js"}},[s("div",{pre:!0,attrs:{class:"code-line"}},[t._v("module.exports = {")]),s("div",{pre:!0,attrs:{class:"code-line"}},[t._v("  plugins: [")]),s("div",{pre:!0,attrs:{class:"code-line highlighted"}},[t._v("    ['@minipress/plugin-deploy-to-gh-pages']")]),s("div",{pre:!0,attrs:{class:"code-line"}},[t._v("  ]")]),s("div",{pre:!0,attrs:{class:"code-line"}},[t._v("}")]),s("div",{pre:!0,attrs:{class:"code-line"}},[t._v("​")])]),s("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@minipress/plugin-deploy-to-gh-pages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("@minipress/plugin-deploy-to-gh-pages")]),this._v(" adds a new command to the CLI. The command is called "),e("code",[this._v("deploy-to-gh-pages")]),this._v(". In order to deploy your site to GitHub Pages, just execute this command.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("package.json:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"json"}},[s("div",{pre:!0,attrs:{class:"minipress-highlight-mask language-json"}},[s("div",{pre:!0,attrs:{class:"code-line"}},[t._v("{")]),s("div",{pre:!0,attrs:{class:"code-line"}},[t._v('  "scripts": {')]),s("div",{pre:!0,attrs:{class:"code-line highlighted"}},[t._v('    "deploy": "minipress deploy-to-gh-pages"')]),s("div",{pre:!0,attrs:{class:"code-line"}},[t._v("  }")]),s("div",{pre:!0,attrs:{class:"code-line"}},[t._v("}")]),s("div",{pre:!0,attrs:{class:"code-line"}},[t._v("​")])]),s("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"minipress deploy-to-gh-pages"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("@minipress/plugin-deploy-to-gh-pages")]),this._v(" can be configured in case the defaults don’t work for you.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("code",[t._v("skipGenerate")]),t._v(" – default: "),s("code",[t._v("false")]),t._v(": By default "),s("code",[t._v("@minipress/plugin-deploy-to-gh-pages")]),t._v(" will generate a static build of your site and then deploy it. If you want to skip the generation process set "),s("code",[t._v("skipGenerate")]),t._v(" to "),s("code",[t._v("true")]),t._v(".")])}];s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return n}))},102:function(t,e,s){"use strict";e.a=function(t){var e=t.options.beforeCreate||[];t.options.beforeCreate=[function(){var t,e={file:{relative:"plugins-and-themes/deploy-to-gh-pages.md"},content:"",contentType:"md",headings:[{text:t="plugin-deploy-to-gh-pages",slug:t,level:1},{text:"Installation",slug:"installation",level:2},{text:"Configuration",slug:"configuration",level:2},{text:"Usage",slug:"usage",level:2},{text:"Options",slug:"options",level:2}],regularPath:"/plugins-and-themes/deploy-to-gh-pages.html",key:"1852cd38",frontmatter:{},attributes:{},layout:void 0,path:"/plugins-and-themes/deploy-to-gh-pages"};this.$page=e}].concat(e)}},124:function(t,e,s){"use strict";s.r(e);var a=s(101),n=s(68);for(var r in n)"default"!==r&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var i=s(0),o=s(102),p=Object(i.a)(n.default,a.a,a.b,!1,null,null,null);"function"==typeof o.a&&Object(o.a)(p),e.default=p.exports},68:function(t,e,s){"use strict";s.r(e);var a=s(69),n=s.n(a);for(var r in a)"default"!==r&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e.default=n.a},69:function(t,e){}}]);