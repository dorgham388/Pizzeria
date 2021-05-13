(this.webpackJsonptrainyard=this.webpackJsonptrainyard||[]).push([[0],{35:function(t,e,r){},42:function(t,e,r){},47:function(t,e,r){"use strict";r.r(e);var o=r(0),a=r.n(o),n=r(14),c=r.n(n),i=(r(35),r(16)),d=r(3),s=r(6),b=r(29),l=r(1),p=Object(o.createContext)(),j=function(t){var e=t.initialTheme,r=t.children,a=Object(o.useState)(u),n=Object(b.a)(a,2),c=n[0],i=n[1],d=function(t){var e=window.document.documentElement,r="dark"===t;e.classList.remove(r?"light":"dark"),e.classList.add(t),localStorage.setItem("color-theme",t)};return e&&d(e),Object(o.useEffect)((function(t){d(c)}),[c]),Object(l.jsx)(p.Provider,{value:{theme:c,setTheme:i},children:r})},u=function(t){if("undefined"!==typeof window&&window.localStorage){var e=window.localStorage.getItem("color-theme");if("string"===typeof e)return e;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"dark"},g=s.a.div({transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms","--tw-text-opacity":"1",color:"rgba(17, 24, 39, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"rgba(245, 158, 11, var(--tw-text-opacity))"},".dark &":{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"rgba(245, 158, 11, var(--tw-text-opacity))"}},height:"2rem",width:"2rem",cursor:"pointer"}),h=function(t){var e=Object(o.useContext)(p),r=e.theme,a=e.setTheme;return Object(l.jsxs)(g,{children:[Object(l.jsx)("input",{id:"toggle",hidden:!0,type:"checkbox",checked:"dark"===r,onChange:function(t){return a(t.target.checked?"dark":"light")}}),Object(l.jsx)("label",{for:"toggle",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"transparent",viewBox:"0 0 24 24",stroke:"currentColor",className:t.className,children:Object(l.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})})]})},x=r(4),w=r(11),m=s.a.button({transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",margin:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"1rem",paddingRight:"1rem","--tw-text-opacity":"1",color:"rgba(17, 24, 39, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"rgba(245, 158, 11, var(--tw-text-opacity))","--tw-border-opacity":"1",borderColor:"rgba(245, 158, 11, var(--tw-border-opacity))","--tw-shadow":"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",opacity:"0.7"},".dark &":{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-border-opacity":"1",borderColor:"rgba(245, 158, 11, var(--tw-border-opacity))",":hover":{"--tw-border-opacity":"1",borderColor:"rgba(255, 255, 255, var(--tw-border-opacity))"}},fontWeight:"600",borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(17, 24, 39, var(--tw-border-opacity))",borderRadius:"0.5rem"}),O=function(t){var e=t.children,r=(t.disabled,Object(w.a)(t,["children","disabled"]));return Object(l.jsx)(m,Object(x.a)(Object(x.a)({},r),{},{children:e}))},f=s.a.button({transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",margin:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"1rem",paddingRight:"1rem","--tw-text-opacity":"1",color:"rgba(17, 24, 39, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"rgba(245, 158, 11, var(--tw-text-opacity))"},".dark &":{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"rgba(245, 158, 11, var(--tw-text-opacity))"}},fontWeight:"600",outline:"2px solid transparent",outlineOffset:"2px",":focus":{outline:"2px solid transparent",outlineOffset:"2px"}}),v=function(t){var e=t.children,r=(t.disabled,Object(w.a)(t,["children","disabled"]));return Object(l.jsx)(f,Object(x.a)(Object(x.a)({},r),{},{children:e}))},y=s.a.div({display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"2rem",paddingRight:"2rem"}),k=s.a.div({display:"flex",justifyContent:"space-around",alignItems:"center"}),E=s.a.div({display:"flex",justifyContent:"space-around",alignItems:"center"}),R=Object(s.a)(h)({cursor:"pointer"}),S=function(){return Object(l.jsxs)(y,{children:[Object(l.jsxs)(k,{children:[Object(l.jsx)(R,{}),Object(l.jsx)(O,{children:"Contact support"}),Object(l.jsx)(v,{children:"How it works"}),Object(l.jsx)(v,{children:"Reviews"})]}),Object(l.jsxs)(E,{children:[Object(l.jsx)(v,{children:"Europe"}),Object(l.jsx)(O,{children:"Sign in"})]})]})},C=s.a.div({"--tw-bg-opacity":"1",backgroundColor:"rgba(249, 250, 251, var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgba(17, 24, 39, var(--tw-bg-opacity))"},minHeight:"100vh"}),T=[],L=[{path:"/",exact:!0,component:function(){return Object(l.jsx)(C,{children:Object(l.jsx)(S,{})})}}],I=function(t){var e=t.component,r=Object(w.a)(t,["component"]);return Object(l.jsx)(d.a,Object(x.a)(Object(x.a)({},r),{},{render:function(t){return Object(l.jsx)(a.a.Fragment,{children:Object(l.jsx)(j,{children:Object(l.jsx)(e,Object(x.a)({},t))})})}}))},M=function(t){var e=t.component,r=Object(w.a)(t,["component"]);return Object(l.jsx)(d.a,Object(x.a)(Object(x.a)({},r),{},{render:function(t){return Object(l.jsx)(a.a.Fragment,{children:Object(l.jsx)(e,Object(x.a)({},t))})}}))};r(42);var U=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(d.c,{children:[T.map((function(t,e){return Object(l.jsx)(M,{path:t.path,exact:t.exact,component:t.component},e)})),L.map((function(t,e){return Object(l.jsx)(I,{path:t.path,exact:t.exact,component:t.component},e)}))]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=r(10),B=(r(43),r(24)),F="USER_REGISTER_REQUEST",W="USER_REGISTER_SUCCESS",z="USER_REGISTER_ERROR",G={registerLoading:!1,isAuthenticated:!1,signupErrors:[],user:{}},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0,r=e.type,o=e.payload;switch(r){case F:return Object(x.a)(Object(x.a)({},t),{},{signupErrors:[],registerLoading:!0});case W:return Object(x.a)(Object(x.a)({},t),{},{registerLoading:!1});case z:return Object(x.a)(Object(x.a)({},t),{},{registerLoading:!1,signupErrors:o});default:return t}},D=Object(_.c)({randomReducer:P}),H=function(t,e){return"LOGOUT"===e.type&&(t=void 0),D(t,e)},J=r(26),N=r.n(J),A=r(23),Q={key:"root",storage:N.a},$=[B.a];var q=Object(A.a)(Q,H),K=function(){var t=Object(_.d)(q,_.a.apply(void 0,$));return{store:t,persistor:Object(A.b)(t)}},V=r(28),X=r(27),Y=K(),Z=Y.store,tt=Y.persistor;c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(V.a,{store:Z,children:Object(l.jsx)(X.a,{loading:null,persistor:tt,children:Object(l.jsx)(U,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.cbffc479.chunk.js.map