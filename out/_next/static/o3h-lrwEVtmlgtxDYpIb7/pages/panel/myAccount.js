(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{McNX:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var r=a("o0o1"),n=a.n(r),i=a("h4VS"),o=a("q1tI"),c=a.n(o),s=a("vOnD"),l=a("tRbT"),m=a("r9w1"),u=a("Z3vd"),d=a("iae6"),f=a("vDqi"),p=a.n(f),h=c.a.createElement;function v(){var e=Object(i.a)(["\n  width: 20rem;\n  height: auto;\n  margin-bottom: 1rem;\n"]);return v=function(){return e},e}function x(){var e=Object(i.a)(["\n  margin-top: 1rem;\n  margin-bottom: -1rem;\n  @media (max-width: 600px) {\n    margin-top: 14rem;\n  }\n"]);return x=function(){return e},e}s.a.h1(x());var b=s.a.img(v());function k(){var e=Object(o.useState)(""),t=e[0],a=e[1],r=Object(o.useState)(!1),i=r[0],s=r[1];Object(o.useEffect)((function(){a(localStorage.nameBattle)}),[]);return h(c.a.Fragment,null,h(l.a,{item:!0,xs:12,sm:4},h(b,{src:"/images/group.svg"})),h(l.a,{item:!0,xs:12,sm:4},h(m.a,{required:!0,autoFocus:!0,id:"nameBattle",name:"nameBattle",label:"Nome da sua roda de rima",value:t,fullWidth:!0,autoComplete:"nBattle",onChange:function(){return a(event.target.value)},inputProps:{style:{fontSize:"1.6rem"}},InputLabelProps:{style:{fontSize:"1.6rem"}}})),h(l.a,{item:!0,xs:12,sm:2},i?h(d.a,{color:"secondary"}):h(u.a,{variant:"contained",onClick:function(){return function(){var e,a;return n.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return s(!0),console.warn("alter name",t),localStorage.setItem("nameBattle",t),e="https://berap.com.br/api-tv/atualiza-roda?id=1&nome_roda=".concat(t),r.next=6,n.a.awrap(p.a.get(e));case 6:a=r.sent,console.warn("response =>",a),setTimeout((function(){s(!1),location.reload()}),2e3);case 9:case"end":return r.stop()}}),null,null,null,Promise)}()},color:"primary",size:"large"},"Alterar")))}},ceGS:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/panel/myAccount",function(){return a("McNX")}])},iae6:function(e,t,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),o=(a("17x9"),a("iuhU")),c=a("H2TA"),s=a("NqtD");function l(e){var t,a,r;return t=e,a=0,r=1,e=(Math.min(Math.max(a,t),r)-a)/(r-a),e=(e-=1)*e*e+1}var m=i.forwardRef((function(e,t){var a,c=e.classes,m=e.className,u=e.color,d=void 0===u?"primary":u,f=e.disableShrink,p=void 0!==f&&f,h=e.size,v=void 0===h?40:h,x=e.style,b=e.thickness,k=void 0===b?3.6:b,g=e.value,y=void 0===g?0:g,w=e.variant,D=void 0===w?"indeterminate":w,S=Object(n.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),O={},j={},N={};if("determinate"===D||"static"===D){var P=2*Math.PI*((44-k)/2);O.strokeDasharray=P.toFixed(3),N["aria-valuenow"]=Math.round(y),"static"===D?(O.strokeDashoffset="".concat(((100-y)/100*P).toFixed(3),"px"),j.transform="rotate(-90deg)"):(O.strokeDashoffset="".concat((a=(100-y)/100,a*a*P).toFixed(3),"px"),j.transform="rotate(".concat((270*l(y/70)).toFixed(3),"deg)"))}return i.createElement("div",Object(r.a)({className:Object(o.a)(c.root,m,"inherit"!==d&&c["color".concat(Object(s.a)(d))],{indeterminate:c.indeterminate,static:c.static}[D]),style:Object(r.a)({width:v,height:v},j,{},x),ref:t,role:"progressbar"},N,S),i.createElement("svg",{className:c.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},i.createElement("circle",{className:Object(o.a)(c.circle,p&&c.circleDisableShrink,{indeterminate:c.circleIndeterminate,static:c.circleStatic}[D]),style:O,cx:44,cy:44,r:(44-k)/2,fill:"none",strokeWidth:k})))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(m)}},[["ceGS",0,1,2,3,4,5,6,8]]]);