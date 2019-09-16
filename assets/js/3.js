(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{38:function(e,t,a){"use strict";a.r(t);var s={},r=a(0),n=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("MpLayoutManager",[a("div",{staticClass:"page-content"},[a("h1",{attrs:{id:"guide"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Guide")],1),e._v(" "),a("p",[a("em",[e._v("miniPress")]),e._v(" is for the little ones – for everyone who is still trying to learn.")]),e._v(" "),a("blockquote",[a("p",[a("em",[e._v("miniPress")]),e._v(" is a "),a("em",[e._v("mini")]),e._v("-mal static site generator. It was created for educational purposes. Sometimes having something small and minimal (and probably incomplete) helps to get the big picture.")])]),e._v(" "),a("h2",{attrs:{id:"motivation-amp-purpose"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#motivation-amp-purpose","aria-hidden":"true"}},[e._v("#")]),e._v(" Motivation & Purpose")],1),e._v(" "),a("p",[e._v("The main motivation for the development of "),a("em",[e._v("miniPress")]),e._v(" was to get a better understanding of Vue + SSR + Webpack and all other related technologies. VuePress and Nuxt sometimes look like like magic: Things just work and you don’t know why or how. This is not a bad thing – to the contrary. This makes those tools amazing and jaw dropping. They work really and come with a lot of features and a whole ecosystem. They even have a well tought out plugin API. Thus they should be used for any serious project.")]),e._v(" "),a("p",[e._v("However, if you just want to know how a tool like VuePress works it might be a good idea to take a closer look at "),a("em",[e._v("miniPress")]),e._v(".")]),e._v(" "),a("p",[a("em",[e._v("miniPress")]),e._v(" is a very simple and minimalistic implementation of a subset of VuePress.")]),e._v(" "),a("blockquote",[a("p",[e._v("If you don’t intend to look at the code of "),a("em",[e._v("miniPress")]),e._v(" it might be a good idea to not look at "),a("em",[e._v("miniPress")]),e._v(" at all.")])]),e._v(" "),a("h2",{attrs:{id:"quickstart"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#quickstart","aria-hidden":"true"}},[e._v("#")]),e._v(" Quickstart")],1),e._v(" "),a("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"sh"}},[a("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-sh"}},[a("code",{pre:!0,attrs:{class:"language-sh"}},[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @minipress/minipress --global\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" pages\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"# Hello World"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" pages/index.md\nminipress dev")])])]),a("p",[e._v("You should no be able to see your "),a("em",[e._v("miniPress")]),e._v(" site by opening "),a("a",{attrs:{href:"http://localhost:4000",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:4000"),a("MpOutboundLink")],1),e._v(" in your browser and see the contents of "),a("code",[e._v("index.md")]),e._v(" there.")]),e._v(" "),a("p",[a("em",[e._v("miniPress")]),e._v(" follows the "),a("em",[e._v("convention over configuration paradigm")]),e._v(" and thus a lot of defaults apply simply by executing "),a("code",[e._v("minipress dev")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("All markdown files in "),a("code",[e._v("pages/")]),e._v(" are served as pages – the path is inferred from their physical path on disk.")]),e._v(" "),a("li",[e._v("All components in "),a("code",[e._v("components/")]),e._v(" can be used in any markdown file.")]),e._v(" "),a("li",[e._v("Custom layouts can be put inside "),a("code",[e._v("layouts/")]),e._v(".")]),e._v(" "),a("li",[e._v("The default theme is used.")])]),e._v(" "),a("p",[e._v("Head over to the "),a("mp-link",{attrs:{to:e.$minipress.pageLink("/configuration.md")}},[e._v("configuration guide")]),e._v(" in order to learn more details.")],1),e._v(" "),a("h2",{attrs:{id:"built-in-components"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#built-in-components","aria-hidden":"true"}},[e._v("#")]),e._v(" Built-In Components")],1),e._v(" "),a("h3",{attrs:{id:"outoundlink"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#outoundlink","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("OutoundLink")])],1),e._v(" "),a("h3",{attrs:{id:"link"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#link","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("Link")])],1),e._v(" "),a("h3",{attrs:{id:"layout"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#layout","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("Layout")])],1),e._v(" "),a("h3",{attrs:{id:"layoutmanager"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#layoutmanager","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("LayoutManager")])],1),e._v(" "),a("h2",{attrs:{id:"global-computed-minipress"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#global-computed-minipress","aria-hidden":"true"}},[e._v("#")]),e._v(" Global Computed: "),a("code",[e._v("$minipress")])],1),e._v(" "),a("p",[e._v("By default, "),a("em",[e._v("miniPress")]),e._v(" installs a property called "),a("code",[e._v("$minipress")]),e._v(" on every Vue instance. This provides you with a lot of interesting meta data about your "),a("em",[e._v("miniPress")]),e._v(" site (pages, heading, …). You also get access to some convenience methods.")]),e._v(" "),a("p",[a("code",[e._v("$minipress")]),e._v(" exposes certain properties and methods which you can access from almost everywhere. You can access "),a("code",[e._v("$minipress")]),e._v(" from")]),e._v(" "),a("ul",[a("li",[e._v("any JavaScript file by using "),a("code",[e._v("this.$minipress.property_or_method")]),e._v(",")]),e._v(" "),a("li",[e._v("any Vue "),a("code",[e._v("<template>")]),e._v("-section by using "),a("code",[e._v("$minipress.property_or_method")]),e._v(" and")]),e._v(" "),a("li",[e._v("any Markdown file by using "),a("code",{pre:!0},[e._v("{{ $minipress.property_or_method }}")]),e._v(".")])]),e._v(" "),a("p",[e._v("Replace "),a("code",[e._v("property_or_method")]),e._v(" by any of the documented properties/methods (see below).")]),e._v(" "),a("h3",{attrs:{id:"properties"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")],1),e._v(" "),a("h4",{attrs:{id:"site"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#site","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("site")])],1),e._v(" "),a("p",[e._v("Give you access to the site meta data.")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("site")]),e._v(" also exposes "),a("code",[e._v("themeConfig")])])]),e._v(" "),a("h4",{attrs:{id:"themeconfig"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#themeconfig","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("themeConfig")])],1),e._v(" "),a("p",[e._v("Contains the theme configuration (as set via "),a("code",[e._v(".minipress/config.js")]),e._v(").")]),e._v(" "),a("h4",{attrs:{id:"page"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#page","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("page")])],1),e._v(" "),a("p",[e._v("Gives you access to the currently displayed page.")]),e._v(" "),a("h5",{attrs:{id:"page-frontmatter"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#page-frontmatter","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("page.frontmatter")])],1),e._v(" "),a("p",[e._v("Gives you access to the parsed front matter object. The object simply contains keys and values.")]),e._v(" "),a("h5",{attrs:{id:"page-headings"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#page-headings","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("page.headings")])],1),e._v(" "),a("p",[e._v("Contains the headings found on the current page. The value will always be an array with one or more heading-objects inside.")]),e._v(" "),a("p",[e._v("A heading object has the following shape:")]),e._v(" "),a("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"typescript"}},[a("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-typescript"}},[a("code",{pre:!0,attrs:{class:"language-typescript"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" Heading "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// name of the anchor (without the #)")]),e._v("\n  slug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// heading text")]),e._v("\n  text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])])]),a("h5",{attrs:{id:"page-key"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#page-key","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("page.key")])],1),e._v(" "),a("p",[e._v("Contains a key uniquely identifying the corresponding page.")]),e._v(" "),a("h5",{attrs:{id:"page-layout"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#page-layout","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("page.layout")])],1),e._v(" "),a("p",[e._v("Contains the name of the layout used to display this page.")]),e._v(" "),a("h3",{attrs:{id:"methods"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v(" Methods")],1),e._v(" "),a("h4",{attrs:{id:"pageforkeykey"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#pageforkeykey","aria-hidden":"true"}},[e._v("#")]),e._v(" pageForKey(key)")],1),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("$minipress.pageForKey(key)")]),e._v(" in order to get the "),a("code",[e._v("Page")]),e._v("-object for a given key.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("key: string")]),e._v(": The key of a page.")])])])]),e._v(" "),a("h4",{attrs:{id:"pagelinkto"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#pagelinkto","aria-hidden":"true"}},[e._v("#")]),e._v(" pageLink(to)")],1),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("$minipress.pageLink(to)")]),e._v(" in order to get an absolute path for a given relative path. "),a("code",[e._v("to")]),e._v(" should be the path to a page as it appears in your file system. For example,")]),e._v(" "),a("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":"js"}},[a("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[e._v("$minipress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("pageLink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./themes/clean.md'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")])])])]),a("p",[e._v("basically returns the value for the "),a("code",[e._v("href")]),e._v("-attribute.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Arguments:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("to: string")]),e._v(": Relative path to a page as it is present in your file system.")])])])]),e._v(" "),a("h2",{attrs:{id:"cli"}},[a("router-link",{staticClass:"header-anchor",attrs:{to:"#cli","aria-hidden":"true"}},[e._v("#")]),e._v(" CLI")],1),e._v(" "),a("p",[a("em",[e._v("miniPress")]),e._v(" comes with a CLI. The CLI is part of the "),a("code",[e._v("@minipress/minipress")]),e._v(" package and thus is installed by default.")]),e._v(" "),a("div",{pre:!0,attrs:{class:"minipress-highlight","data-lang":""}},[a("pre",{pre:!0,attrs:{class:"minipress-highlight-code language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("minipress --help\n\nUsage:\n  $ minipress <command> [options]\n\nCommands:\n  dev       runs miniPress in dev mode in the current directory\n  generate  generates a static version of your site\n  serve     serves a static version of your site\n\nFor more info, run any command with the `--help` flag:\n  $ minipress dev --help\n  $ minipress generate --help\n  $ minipress serve --help\n\nOptions:\n  --config <file>  spefify config (default: /Users/d069408/ChristianKienle/minpress/docs/.minipress/config.js)\n  --mode <mode>    spefify mode (default: development)\n  -h, --help       Display this message")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);