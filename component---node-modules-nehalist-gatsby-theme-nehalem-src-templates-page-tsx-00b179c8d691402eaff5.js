(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3//0":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("vOnD"),r=a("15bR"),l=i.default.div.withConfig({displayName:"subheader__StyledSubheader",componentId:"sc-113zvsz-0"})(["background-color:",";color:",";display:flex;align-items:center;height:60px;margin-bottom:30px;"],(function(e){return e.backgroundColor?e.backgroundColor:"#fff"}),(function(e){return e.textColor?e.textColor:"#fff"})),d=i.default.h1.withConfig({displayName:"subheader__SubheaderTitle",componentId:"sc-113zvsz-1"})(["font-size:2.0em;font-weight:bold;color:#fff;line-height:1em;margin-left:45%;"]),m=i.default.small.withConfig({displayName:"subheader__SubheaderSubtitle",componentId:"sc-113zvsz-2"})(["font-weight:normal;display:block;opacity:.9;float:left;margin-left:500px;"]);t.a=function(e){var t=e.title,a=e.subtitle,n=e.backgroundColor,i=e.textColor;return o.a.createElement(l,{backgroundColor:n,textColor:i},o.a.createElement(r.a,null,o.a.createElement(d,null,t,o.a.createElement(m,null,a))))}},bgiC:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=a("IJQQ"),r=a("3//0"),l=a("PvO4"),d=a("15bR"),m=a("vOnD"),c=a("Wbzz"),s=a("fuXR"),p=m.default.div.withConfig({displayName:"page-sidebar-content__LatestPosts",componentId:"dtjaqy-0"})(["display:grid;grid-template-columns:1fr;grid-gap:30px;width:210px;@media (max-width:","){grid-template-columns:1fr 1fr;}@media (max-width:700px){grid-template-columns:1fr;}"],l.a.breakpoints.md),f=function(){var e=Object(c.useStaticQuery)("1951927749").posts.edges.map((function(e){return e.node}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Latest posts"),o.a.createElement(p,null,e.map((function(e,t){return o.a.createElement(s.a,{title:e.frontmatter.title,featuredImage:e.frontmatter.featuredImage.childImageSharp,path:e.frontmatter.path,key:t,compact:!0,meta:{time:e.frontmatter.created,timePretty:e.frontmatter.createdPretty,tag:e.frontmatter.tags.length>0?e.frontmatter.tags[0]:null}})}))))},u=a("ywv1"),g=Object(m.default)(d.a).withConfig({displayName:"page__PageContainer",componentId:"uxc52n-0"})(["display:flex;justify-content:space-between;@media (max-width:","){display:block;}p:first-child{margin-top:0;}li > a,p > a{color:",";border-bottom:2px "," solid;}"],l.a.breakpoints.sm,l.a.layout.linkColor,l.a.layout.linkColor),h=m.default.aside.withConfig({displayName:"page__PageSidebar",componentId:"uxc52n-1"})(["margin-left:50px;@media (max-width:","){margin-left:0;}"],l.a.breakpoints.sm);t.default=function(e){var t=e.pathContext,a=e.location,n=t.page;return o.a.createElement(i.a,{bigHeader:!1},o.a.createElement(u.a,{title:n.frontmatter.title,description:n.frontmatter.excerpt,location:a}),o.a.createElement(r.a,{title:n.frontmatter.title,backgroundColor:l.a.layout.primaryColor}),o.a.createElement(g,null,o.a.createElement("section",{dangerouslySetInnerHTML:{__html:n.html}}),o.a.createElement(h,null,o.a.createElement(f,null))))}},fuXR:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("q1tI"),o=a.n(n),i=a("vOnD"),r=a("Wbzz"),l=a("PvO4"),d=a("9eSz"),m=a.n(d),c=Object(i.default)(r.Link).withConfig({displayName:"style__StyledCard",componentId:"sc-7a2jjo-0"})(["display:block;background-color:#fff;border-radius:3px;box-shadow:0 1px 1px #e6e6e6,0 2px 4px #e6e6e6;transition:.5s all;width:100%;height:100%;overflow:hidden;&:hover{transform:translate3d(0,-5px,0);box-shadow:0 1px 1px #ccc,0 4px 4px #ccc;}"]),s=i.default.article.withConfig({displayName:"style__StyledArticle",componentId:"sc-7a2jjo-1"})(["display:inline-block;width:100%;@media (max-width:","){grid-area:unset !important;}"],l.a.breakpoints.sm),p=Object(i.default)(m.a).withConfig({displayName:"style__FeaturedImage",componentId:"sc-7a2jjo-2"})(["background-position:center;background-size:contain;max-width:100%;border-top-left-radius:3px;",";"],(function(e){return e.halfImage?"\n    width: 50%;\n    float: left;\n    margin-right: 30px;\n    height: 320px;\n    border-bottom-left-radius: 3px;\n\n    @media (max-width: "+l.a.breakpoints.sm+") {\n      width: 100%;\n      float: none;\n      height: 190px;\n    }\n  ":"\n    height: 190px;\n    max-height: 190px;\n    width: 100%;\n    border-top-right-radius: 3px;\n  "})),f=i.default.section.withConfig({displayName:"style__CardContent",componentId:"sc-7a2jjo-3"})(["padding:",";p{margin:15px 0;}h2{font-size:1.2em;}"],(function(e){return e.compact?"10px":"40px"})),u=i.default.section.withConfig({displayName:"style__CardMeta",componentId:"sc-7a2jjo-4"})(["display:flex;justify-content:space-between;margin-bottom:8px;font-size:.8em;opacity:.8;line-height:1em;"]),g=i.default.h2.withConfig({displayName:"style__CardTitle",componentId:"sc-7a2jjo-5"})(["margin:0;padding:0;"]),h=function(e){var t=e.title,a=e.meta,n=e.path,i=e.featuredImage,r=e.content,l=e.halfImage,d=void 0!==l&&l,m=e.compact,h=void 0!==m&&m,b=e.style,x=e.children;return o.a.createElement(s,{style:b},o.a.createElement(c,{to:n},i&&i.fixed&&o.a.createElement(p,{fixed:i.fixed,halfImage:d}),i&&i.sizes&&o.a.createElement(p,{sizes:i.sizes,halfImage:d}),o.a.createElement(f,{compact:h},x,o.a.createElement("header",null,a&&o.a.createElement(u,null,a.tag&&o.a.createElement(o.a.Fragment,null,a.tag),a.time&&o.a.createElement("time",{dateTime:a.time},a.timePretty)),t&&o.a.createElement(g,null,t)),r&&o.a.createElement("p",{dangerouslySetInnerHTML:{__html:r}}))))}}}]);
//# sourceMappingURL=component---node-modules-nehalist-gatsby-theme-nehalem-src-templates-page-tsx-00b179c8d691402eaff5.js.map