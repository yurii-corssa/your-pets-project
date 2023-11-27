"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[78],{1462:function(n,e,t){t.d(e,{Z:function(){return M}});var i,r,o,s,a,c,l,d=t(9439),x=t(2791),p=t(168),h=t(6487),u=h.ZP.form(i||(i=(0,p.Z)(["\n  position: relative;\n\n  display: inline-block;\n\n  @media screen and (min-width: 768px){\n   display: flex;\n   justify-content: center;\n   align-items: center;\n  }\n"]))),f=h.ZP.input(r||(r=(0,p.Z)(["\n  width: 280px;\n  height: 44px;\n  border-radius: 24px;\n  border: none;\n  margin-top: 24px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  box-shadow: 3px 8px 14px 0 #88c6fd30;\n  outline: none;\n  padding-left: 20px;\n  padding-right: 10px;\n  font-family: Inter, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.21;\n  letter-spacing: 0.04em;\n  color: #888888;\n\n  &:hover,\n  &:focus {\n    box-shadow: 7px 13px 14px 0 #74b1e8;\n  }\n\n  &::placeholder {\n    font-family: Inter, sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.21;\n    letter-spacing: 0.04em;\n    color: #888888;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    border-radius: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n    font-weight: 500;\n    font-size: 20px;\n\n    &::placeholder {\n      font-size: 20px;\n    }\n  }\n"]))),g=h.ZP.div(o||(o=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n"]))),m=h.ZP.button(s||(s=(0,p.Z)(["\n  background-color: inherit;\n  border: none;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n"]))),w=h.ZP.svg(a||(a=(0,p.Z)(["\n  width: 24px;\n  height: 24px;\n"]))),v=h.ZP.button(c||(c=(0,p.Z)(["\n  background-color: inherit;\n  border: none;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 250px;\n  transform: translateY(-50%);\n\n  @media screen and (min-width: 768px) {\n    left: 270px;\n  }\n"]))),j=h.ZP.svg(l||(l=(0,p.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: #ffc107;\n"]))),b=t(7262),k=t(9434),Z=t(501),y=t(184);var M=function(){var n=(0,x.useState)(""),e=(0,d.Z)(n,2),t=e[0],i=e[1],r=(0,k.I0)(),o=function(n){n.preventDefault(),r((0,Z.ql)(t))},s=t.length>0?{left:"225px","@media screen and (minWidth: 768px)":{left:"240px"}}:{left:"244px","@media screen and (minWidth: 768px)":{left:"260px"}};return(0,y.jsxs)(u,{onSubmit:o,children:[(0,y.jsx)(f,{placeholder:"Search",value:t,onChange:function(n){i(n.target.value)}}),(0,y.jsxs)(g,{children:[(0,y.jsx)(m,{style:s,onClick:o,children:(0,y.jsx)(w,{children:(0,y.jsx)("use",{href:"".concat(b.Z,"#icon-search")})})}),t&&(0,y.jsx)(v,{onClick:function(){i(""),r((0,Z.ql)(""))},children:(0,y.jsx)(j,{children:(0,y.jsx)("use",{href:"".concat(b.Z,"#icon-cross-small")})})})]})]})}},2424:function(n,e,t){t.d(e,{Z:function(){return f}});var i,r,o,s=t(9439),a=t(2791),c=t(9126),l=t(168),d=t(6487),x=d.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 40px;\n  background-color: #fef9f9;\n  border-radius: 45px;\n  padding: 5px;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  margin-right: auto;\n  margin-left: auto;\n  \n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n  }\n"]))),p=d.ZP.button(r||(r=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  margin: 0 5px;\n  border: 1px solid #cce4fb;\n  border-radius: 50%;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  outline: none;\n\n  &:hover:not(:disabled) {\n    background-color: ",";\n    color: ",";\n  }\n\n  &:hover,\n  &:focus {\n    border: 1px solid #cce4fb;\n    outline: none;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n    border: 1px solid #cce4fb;\n  }\n\n  @media screen and (min-width: 480px) {\n    width: 35px;\n    height: 35px;\n  }\n"])),(function(n){return n.$active?"#54ADFF":"transparent"}),(function(n){return n.$active?"#FEF9F9;":"#CCE4FB"}),(function(){return"#54ADFF"}),(function(){return"#FEF9F9"})),h=d.ZP.div(o||(o=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),u=t(184),f=function(n){var e=n.currentPage,t=n.totalPages,i=n.onPageChange,r=(0,a.useState)([]),o=(0,s.Z)(r,2),l=o[0],d=o[1],f=(0,a.useCallback)((function(n){var e=Math.floor(2.5),i=Math.max(n-e,1),r=Math.min(i+5-1,t);r-i<4&&(i=Math.max(r-5+1,1));var o=Array.from({length:r-i+1},(function(n,e){return i+e}));d(o)}),[t]);(0,a.useEffect)((function(){f(e)}),[e,f]);return(0,u.jsxs)(x,{children:[(0,u.jsx)(p,{onClick:function(){e>1&&(i(e-1),f(e-1))},children:(0,u.jsx)(c.And,{})}),(0,u.jsx)(h,{children:l.map((function(n){return(0,u.jsx)(p,{onClick:function(){return function(n){i(n),f(n)}(n)},$active:e===n,children:n},n)}))}),(0,u.jsx)(p,{onClick:function(){e<t&&(i(e+1),f(e+1))},children:(0,u.jsx)(c.lzl,{})})]})}},7078:function(n,e,t){t.r(e),t.d(e,{default:function(){return ze}});var i,r,o,s,a,c,l,d,x,p,h,u,f,g,m,w,v,j,b,k,Z,y,M,C,z,F,P,_,L,A,E,N,B,S,D,W,I,R=t(168),T=t(1087),U=t(6487),Y=U.ZP.nav(i||(i=(0,R.Z)([""]))),q=U.ZP.ul(r||(r=(0,R.Z)(["\n  width: 203px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  @media screen and (min-width: 768px) {\n    gap: 12px;\n    width: 312px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 540px;\n  }\n"]))),$=U.ZP.li(o||(o=(0,R.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),J=U.ZP.button(s||(s=(0,R.Z)(["\n  background-color: inherit;\n  border: none;\n"]))),K=(0,U.ZP)(T.NavLink)(a||(a=(0,R.Z)(["\n  display: block;\n  height: 35px;\n  padding: 8px 16px;\n  border-radius: 40px;\n  background: ",";\n  color: ",";\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.56px;\n  transition: background-color var(--transition), color var(--transition);\n\n  &:hover,\n  &.active {\n    background-color: var(--blueLink);\n    color: var(--background);\n  }\n"])),(function(n){return n.isActive?"var(--blueLink)":"var(--blueLight)"}),(function(n){return n.isActive?"var(--background)":"var(--blueLink)"})),Q=U.ZP.div(c||(c=(0,R.Z)(["\n  align-items: center;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n"]))),G=t(9434),V=t(3443),H=t(501),O=t(184),X=function(){var n=(0,G.v9)(V.Qb),e=(0,G.I0)();return(0,O.jsx)(Q,{children:(0,O.jsx)(Y,{"aria-label":"Notice menu",children:(0,O.jsxs)(q,{children:[(0,O.jsx)($,{children:(0,O.jsx)(J,{type:"button",onClick:function(){return e((0,H.PR)("sell"))},children:(0,O.jsx)(K,{to:"/notices/sell",children:"sell"})})}),(0,O.jsx)($,{children:(0,O.jsx)(J,{type:"button",onClick:function(){return e((0,H.PR)("lost-found"))},children:(0,O.jsx)(K,{to:"/notices/lost-found",children:"lost/found"})})}),(0,O.jsx)($,{children:(0,O.jsx)(J,{type:"button",onClick:function(){return e((0,H.PR)("in-good-hands"))},children:(0,O.jsx)(K,{to:"/notices/in-good-hands",children:"in good hands"})})}),n&&(0,O.jsx)($,{children:(0,O.jsx)(J,{type:"button",onClick:function(){return e((0,H.PR)("favorite"))},children:(0,O.jsx)(K,{to:"/notices/favorite",children:"favorite ads"})})}),n&&(0,O.jsx)($,{children:(0,O.jsx)(J,{type:"button",onClick:function(){return e((0,H.PR)("own"))},children:(0,O.jsx)(K,{to:"/notices/own",children:"my ads"})})})]})})})},nn=t(1462),en=t(9439),tn=U.ZP.ul(l||(l=(0,R.Z)(["\n  margin-top: 24px;\n  margin-bottom: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  @media (max-width: 767px) {\n    display: flex;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    gap: 24px;\n  }\n\n@media (min-width: 768px) {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: auto;\n  margin-right: auto;\n  column-gap: 32px;\n  row-gap: 24px;\n  max-width: 1280px;\n}\n"]))),rn=U.ZP.p(d||(d=(0,R.Z)(["\n  color: #111111;\n  font-weight: 700;\n  font-size: 24px;\n  margin: 40px auto;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 48px;\n  }\n"]))),on=t(8172),sn=t(2791),an=t(3433),cn=t(5861),ln=t(4687),dn=t.n(ln),xn=t(6822),pn=(xn.Z.ul(x||(x=(0,R.Z)(["\n\nmargin-top: 24px;\nmargin-bottom: 40px;\njustify-content: center;\nalign-items: center;\n\n@media (max-width: 767px) {\n    display: flex;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    gap: 24px;\n    justify-content: center;\n    align-items: center;\n  }\n\n@media (min-width: 768px) {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: auto;\n  margin-right: auto;\n  column-gap: 32px;\n  row-gap: 24px;\n  max-width: 1280px;\n  justify-content: center;\n  align-items: center;\n}\n"]))),xn.Z.li(p||(p=(0,R.Z)(["\n\n\ndisplay:flex;\nflex-direction:column;\nmargin-top:20px;\nflex: 0 0 calc(33.3% - 20px);\nborder: 1px solid #ccc; \n\ntext-align: center; \n\nvertical-align: top;\nmax-width:288px;\n\njustify-content: center;\n\nheight:auto;\nbackground-color:white;\nborder-radius:5px;\nborder-radius: 0 0 40px 40px;\nbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\ntransition: transform 0.3s ease;\n\n&:hover{\n    box-shadow: 7px 13px 14px 0px #74B1E83D;\n\n    \n}\n@media(min-width:768px){\n    max-width:288px;\n    max-height:456px;  \n    \n  }\n@media(max-width:767px){\n        max-width:336px;\n        max-height:456px;  \n        \n      }\n      @media(max-width:320px){\n        margin-right:15px; \n      }\n\n"])))),hn=xn.Z.div(h||(h=(0,R.Z)(["\ndisplay:flex;\n\njustify-content: center;\n\nmax-width:288px;\nheight:288px;\n\n\n"]))),un=xn.Z.img(u||(u=(0,R.Z)(["\n\nwidth:100%;\nheight:100%;\n\n object-fit:cover;\n\n"]))),fn=xn.Z.div(f||(f=(0,R.Z)(["\n\ndisplay: flex;\njustify-content: center;\nmargin:auto;\nwidth:288px;\nheight:auto;\n\n\n\n"]))),gn=xn.Z.p(g||(g=(0,R.Z)(["\n\ncolor: #111;\n    letter-spacing: -.64px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 218px;\n    margin-bottom: 4px;\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 32.78px;\n    overflow: hidden;\n    margin-top:10px;\n    margin-bottom:10px;\n\n"]))),mn=xn.Z.div(m||(m=(0,R.Z)(["\n\n"]))),wn=xn.Z.button(w||(w=(0,R.Z)(["\ntransition: color 350ms cubic-bezier(0.4, 0, 0.2, 1),\nbackground-color 350ms cubic-bezier(0.4, 0, 0.2, 1);\n\nborder: 2px solid #54ADFF;\njustify-content:center;\ndisplay:flex;\nalign-items:center;\nbackground-color:white;\nborder-radius:40px;\nwidth:248px;\nmargin:auto;\ncursor:pointer;\nheight:40px;\ncolor: #54ADFF; \nmargin-bottom:20px;\nsvg{\n    display:none;\n}\n&:hover{\n    transition: transform 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    svg{\n        display: flex;\n        margin-left:20px;\n        fill:white;\n    }\n    a{\n        color:#FEF9F9;\n    }\n  \n    background-color:#54ADFF;\n}\n\n"]))),vn=xn.Z.a(v||(v=(0,R.Z)(["\nfont-weight: 600;\nfont-size: 16px;\n\n"]))),jn=xn.Z.div(j||(j=(0,R.Z)(["\nmargin-top: 10px;\nmargin-right: 160px;\nposition: absolute;\njustify-content: center;\ndisplay:flex;\nwidth:126px;\nheight:32px;\nalign-items:center;\nborder-radius: 0 16px 16px 0;\nborder: 2px solid #CCE4FB;\ncolor:black;\nfont-weight:500;\nbackground-color:#CCE4FB;\n\n"]))),bn=xn.Z.button(b||(b=(0,R.Z)(["\n\ndisplay:flex;\nalign-items:center;\njustify-content: center;\nmargin-top: 10px;\nmargin-left:220px;\nposition: absolute;\nwidth:40px;\nheight:40px;\nbackground-color:#CCE4FB;\nborder-radius:50%;\nborder:2px solid #CCE4FB;\n&:hover{\ncursor:pointer;\n    svg{\n        \n        fill:#54ADFF;\n    }\n}\n\n\n"]))),kn=xn.Z.div(k||(k=(0,R.Z)(["\nmargin-top: 250px;\nmargin-right: 190px;\nposition: absolute;\njustify-content: center;\ndisplay:flex;\nheight:20px;\nwidth:85px;\npadding:11px 5px 11px 5px;\nalign-items:center;\nborder-radius: 16px 16px 16px 16px;\nborder: 2px solid #CCE4FB;\ncolor:black;\n\nbackground-color:#CCE4FB;\np{\n    font-size:12px;\nfont-weight:600;\npadding-right:5px;\nmargin-left:5px;\n}\nsvg{\n    width:24px;\n    height:24px;\n   \n}\n"]))),Zn=xn.Z.div(Z||(Z=(0,R.Z)(["\nmargin-top: 250px;\nmargin-left:0px;\nposition: absolute;\n\ndisplay:flex;\nheight:20px;\nwidth:80px;\npadding:11px 5px 11px 5px;\nalign-items:center;\nborder-radius: 16px 16px 16px 16px;\nborder: 2px solid #CCE4FB;\ncolor:black;\n\nbackground-color:#CCE4FB;\np{\n    font-size:12px;\nfont-weight:600;\npadding-right:5px;\n}\nsvg{\n    padding-right:5px;\n}\n"]))),yn=xn.Z.div(y||(y=(0,R.Z)(["\nmargin-top: 250px;\nmargin-left:195px;\nposition: absolute;\njustify-content: center;\ndisplay:flex;\nheight:20px;\nwidth:80px;\npadding:11px 5px 11px 5px;\nalign-items:center;\nborder-radius: 16px 16px 16px 16px;\nborder: 2px solid #CCE4FB;\ncolor:black;\n\nbackground-color:#CCE4FB;\n\nsvg{\n    padding-right:5px;\n}\n"]))),Mn=xn.Z.p(M||(M=(0,R.Z)(["\nfont-size:12px;\nfont-weight:600;\npadding-right:5px;\nwhite-space: nowrap;\ntext-overflow: ellipsis;\noverflow: hidden;\n"]))),Cn=xn.Z.button(C||(C=(0,R.Z)(["\n\ndisplay:flex;\nalign-items:center;\njustify-content: center;\nmargin-top: 60px;\nmargin-left:220px;\nposition: absolute;\nwidth:40px;\nheight:40px;\nbackground-color:#CCE4FB;\nborder-radius:50%;\nborder:2px solid #CCE4FB;\n&:hover{\ncursor:pointer;\n    svg{\n        \n        fill:#54ADFF;\n    }\n}\n"]))),zn=t(9737),Fn=U.ZP.div(z||(z=(0,R.Z)(["\n  padding: 60px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  @media screen and (min-width: 768px) {\n    padding: 60px 40px;\n    gap: 40px;\n    max-width: 608px;\n  }\n"]))),Pn=U.ZP.div(F||(F=(0,R.Z)(["\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  text-align: center;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 0;\n    flex-direction: row;\n    gap: 20px;\n  }\n"]))),_n=U.ZP.h2(P||(P=(0,R.Z)(["\n  font-family: Manrope, sans-serif;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 32.78px;\n  letter-spacing: 0.3px;\n  @media screen and (min-width: 768px) {\n    font-size: 36px;\n    line-height: 49.18px;\n  }\n"]))),Ln=U.ZP.p(_||(_=(0,R.Z)(["\n  font-family: Manrope, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    line-height: 28px;\n  }\n"]))),An=(0,U.iv)(L||(L=(0,R.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  height: 38px;\n  padding: 8px 28px;\n  background-color: transparent;\n  cursor: pointer;\n  color: var(--yellow);\n  font-family: Manrope, sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 1.36;\n  letter-spacing: 0.3px;\n"]))),En=U.ZP.svg(A||(A=(0,R.Z)(["\n    width: 24px;\n    height: 24px;\n    fill: var(--yellow);\n    transition: fill 300ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),Nn=U.ZP.button(E||(E=(0,R.Z)(["\n  ",";\n  width: 248px;\n  border: 2px solid var(--yellow);\n  border-radius: 40px;\n  transition: background-image 300ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-image: linear-gradient(to left, var(--yellow), var(--yellow));\n    color: var(--white);\n  }\n\n  &:hover ",", &:focus "," {\n    fill: var(--white);\n  }\n"])),An,En,En),Bn=t(7262);function Sn(n){var e=n.active,t=n.setActive;return(0,O.jsx)(zn.Z,{active:e,setActive:t,children:(0,O.jsxs)(Fn,{children:[(0,O.jsx)(_n,{children:"Attention"}),(0,O.jsx)(Ln,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),(0,O.jsxs)(Pn,{children:[(0,O.jsxs)(Nn,{as:T.Link,to:"/login",children:["Log IN",(0,O.jsx)(En,{children:(0,O.jsx)("use",{href:"".concat(Bn.Z,"#icon-pawprint-1")})})]}),(0,O.jsx)(Nn,{as:T.Link,to:"/register",children:"Registration"})]})]})})}var Dn=U.ZP.div(N||(N=(0,R.Z)(["\n    padding: 60px 12px;\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    @media screen and (min-width: 768px){\n        padding: 60px 105px;\n        gap: 40px;\n        max-width: 608px;\n    }\n"]))),Wn=U.ZP.div(B||(B=(0,R.Z)(["\n    padding-top: 30px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    @media screen and (min-width: 768px){\n        width: 275px;\n        padding-top: 8px;\n        flex-direction: row;\n        gap: 17px;\n    }\n"]))),In=U.ZP.h2(S||(S=(0,R.Z)(["\n    font-family: Manrope, sans-serif;\n    max-width: 200px;\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 32.78px;\n    letter-spacing: 0.3px;\n    @media screen and (min-width: 768px){\n        font-size: 28px;\n        max-width: 600px;\n    }\n"]))),Rn=U.ZP.p(D||(D=(0,R.Z)(["\n    font-family: Manrope, sans-serif;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 19.12px;\n    @media screen and (min-width: 768px){\n        font-size: 16px;\n    }\n"]))),Tn=U.ZP.span(W||(W=(0,R.Z)(["\n    display: block;\n    font-weight: 700;\n"]))),Un=U.ZP.svg(I||(I=(0,R.Z)(["\n    width: 24px;\n    height: 24px;\n"]))),Yn=t(4432);function qn(n){var e=n.active,t=n.setActive,i=n.yes;return(0,O.jsx)(zn.Z,{active:e,setActive:t,children:(0,O.jsxs)(Dn,{children:[(0,O.jsx)(In,{children:"Delete adverstiment?"}),(0,O.jsxs)(Rn,{children:["Are you sure you want to delete"," ",(0,O.jsx)(Tn,{children:"\u201cCute dog looking for a home\u201d?"})," You can`t undo this action."]}),(0,O.jsxs)(Wn,{children:[(0,O.jsx)(Yn.zx,{width:"256px",onClick:function(){return t(!1)},children:"No"}),(0,O.jsxs)(Yn.zx,{width:"256px",onClick:function(){return i()},children:["Yes",(0,O.jsx)(Un,{children:(0,O.jsx)("use",{href:"".concat(Bn.Z,"#icon-trash-2")})})]})]})]})})}var $n,Jn,Kn,Qn=t(7834),Gn=t(398),Vn=function(){return(0,O.jsxs)("svg",{fill:"white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"24",height:"24",children:[(0,O.jsx)("path",{d:"M20.482 19.149c-0.356-2.644-2.011-4.897-4.429-6.024s-5.208-0.948-7.462 0.479l-5.432 3.439c-0.901 0.571-1.58 1.399-1.964 2.394s-0.436 2.065-0.15 3.093c0.286 1.028 0.882 1.918 1.725 2.573s1.852 1.014 2.919 1.037l0.070 0.001c2.676 0.079 5.219 1.275 6.986 3.289 0.456 0.519 1.004 0.93 1.617 1.216 0.333 0.155 0.686 0.274 1.053 0.353 1.043 0.224 2.108 0.109 3.080-0.332s1.757-1.169 2.274-2.103c0.516-0.934 0.714-1.987 0.572-3.044l-0.857-6.372zM17.717 28.961c-1.236 0.562-2.668 0.254-3.563-0.766-1.064-1.213-2.364-2.177-3.801-2.848-1.436-0.67-3.010-1.045-4.622-1.081l-0.046-0.001c-1.338-0.049-2.473-0.942-2.833-2.236-0.363-1.308 0.164-2.674 1.31-3.401l5.432-3.439c1.712-1.084 3.829-1.22 5.665-0.364s3.093 2.566 3.363 4.574l0.857 6.372c0.181 1.346-0.528 2.628-1.763 3.19z"}),(0,O.jsx)("path",{d:"M6.295 12.527c1.103 0.077 2.165-0.346 2.991-1.19 0.786-0.803 1.264-1.901 1.346-3.091s-0.241-2.342-0.909-3.246c-0.702-0.949-1.696-1.514-2.798-1.59-2.216-0.154-4.161 1.766-4.336 4.281-0.137 2.003 0.89 3.786 2.433 4.506 0.394 0.184 0.822 0.298 1.272 0.329zM4.461 7.821c0.103-1.482 1.151-2.621 2.336-2.539 0.214 0.015 0.422 0.069 0.618 0.161 0.302 0.141 0.576 0.369 0.8 0.673 0.403 0.546 0.597 1.257 0.546 2.002s-0.341 1.423-0.816 1.908c-0.435 0.444-0.975 0.668-1.52 0.63l-0.001 0c-1.184-0.081-2.064-1.353-1.963-2.835z"}),(0,O.jsx)("path",{d:"M14.188 11.529c2.349 1.095 5.275-0.191 6.523-2.867s0.353-5.746-1.996-6.841c-2.349-1.095-5.275 0.191-6.523 2.868s-0.352 5.745 1.996 6.84zM17.923 3.521c1.411 0.658 1.9 2.609 1.089 4.348s-2.619 2.618-4.031 1.96-1.9-2.608-1.089-4.347c0.811-1.739 2.619-2.619 4.031-1.961z"}),(0,O.jsx)("path",{d:"M20.992 16.152l0 0c0.305 0.288 0.647 0.518 1.014 0.689 1.713 0.799 3.964 0.33 5.495-1.289 0.881-0.932 1.401-2.109 1.463-3.315 0.065-1.262-0.371-2.404-1.23-3.217s-2.025-1.184-3.281-1.047c-1.201 0.131-2.347 0.716-3.227 1.648-1.858 1.966-1.963 4.896-0.234 6.531zM22.588 10.909c0.575-0.609 1.309-0.989 2.067-1.071 0.701-0.076 1.337 0.118 1.79 0.546s0.682 1.052 0.645 1.756c-0.039 0.761-0.378 1.516-0.953 2.124-1.148 1.215-2.878 1.45-3.857 0.525-0.978-0.925-0.84-2.665 0.308-3.88z"}),(0,O.jsx)("path",{d:"M30.227 19.769l-0-0.001c-1.062-1.952-3.726-2.563-5.94-1.362-2.213 1.203-3.152 3.77-2.093 5.721 0.386 0.712 0.986 1.246 1.699 1.579 1.243 0.58 2.833 0.548 4.241-0.215 2.213-1.203 3.152-3.769 2.093-5.722zM27.239 23.842c-1.307 0.709-2.831 0.435-3.397-0.609-0.566-1.043 0.035-2.469 1.339-3.178 0.867-0.47 1.83-0.508 2.545-0.174 0.362 0.169 0.661 0.433 0.852 0.784 0.565 1.044-0.036 2.469-1.339 3.178z"})]})},Hn=function(n){var e=n.isfavorite;return(0,O.jsx)("svg",{fill:e?"#54ADFF":"#CCE4FB",stroke:"#54ADFF",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"24",height:"24",style:{transition:"fill 0.3s"},children:(0,O.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"2",d:"M5.775 16.063l10.225 10.603 10.225-10.603c1.137-1.179 1.775-2.777 1.775-4.444 0-3.471-2.714-6.285-6.061-6.285-1.607 0-3.149 0.662-4.286 1.841l-1.653 1.715-1.653-1.715c-1.137-1.179-2.678-1.841-4.286-1.841-3.347 0-6.061 2.814-6.061 6.285 0 1.667 0.639 3.266 1.775 4.444z"})})},On=function(){return(0,O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 33 32",width:"32",height:"32",children:[(0,O.jsx)("path",{fill:"none",stroke:"#54adff",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"2",d:"M27.677 14.667c0 5.891-4.776 10.667-10.667 13.333-5.891-2.667-10.667-7.442-10.667-13.333s4.776-10.667 10.667-10.667c5.891 0 10.667 4.776 10.667 10.667z"}),(0,O.jsx)("path",{fill:"none",stroke:"#54adff",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"2",d:"M21.010 14.667c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"})]})},Xn=function(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 33 32",width:"24",height:"24",children:(0,O.jsx)("path",{fill:"none",stroke:"#54adff",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"2",d:"M17.010 9.333v6.667l4 4M29.010 16c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-6.627 5.373-12 12-12s12 5.373 12 12z"})})},ne=function(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 33 32",width:"24",height:"24",children:(0,O.jsx)("path",{fill:"none",stroke:"#54adff",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"2",d:"M17.010 14.667c-3.682 0-6.667 2.985-6.667 6.667s2.985 6.667 6.667 6.667c3.682 0 6.667-2.985 6.667-6.667s-2.985-6.667-6.667-6.667zM17.010 14.667v-10.667M17.010 4l5.333 5.333M17.010 4l-5.333 5.333"})})},ee=function(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 33 32",width:"24",height:"24",children:(0,O.jsx)("path",{fill:"none",stroke:"#54adff",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"2",d:"M17.010 17.333c3.682 0 6.667-2.985 6.667-6.667s-2.985-6.667-6.667-6.667c-3.682 0-6.667 2.985-6.667 6.667s2.985 6.667 6.667 6.667zM17.010 17.333v10.667M13.010 24h8"})})},te=function(){return(0,O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 33 32",width:"24",height:"24",children:(0,O.jsx)("path",{fill:"none",stroke:"#54adff",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"2",d:"M24 8v16c0 1.473-1.194 2.667-2.667 2.667h-10.667c-1.473 0-2.667-1.194-2.667-2.667v-16M20 8v-1.333c0-1.473-1.194-2.667-2.667-2.667h-2.667c-1.473 0-2.667 1.194-2.667 2.667v1.333M5.333 8h21.333M13.333 13.333v8M18.667 13.333v8"})})},ie=function(n){var e=n.notice,t=n.handleLearnMore,i=(0,Qn.a)(),r=i.isLoggedIn,o=i.user,s=(0,sn.useState)(o.favorites||[]),a=(0,en.Z)(s,2),c=a[0],l=a[1],d=(0,sn.useState)(!1),x=(0,en.Z)(d,2),p=x[0],h=x[1],u=(0,sn.useState)(!1),f=(0,en.Z)(u,2),g=f[0],m=f[1],w=(0,G.I0)(),v=function(){var n=(0,cn.Z)(dn().mark((function n(){var t,i,r,o;return dn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w((0,Gn.yV)({id:e.id}));case 3:if(t=n.sent,i=t.meta.requestStatus,r=t.payload,"rejected"!==i){n.next=8;break}throw new Error(r);case 8:m(!1),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),o=n.t0.message,console.log(o);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),j=function(){var n=(0,cn.Z)(dn().mark((function n(e){var t,i,r,o,s,a,d;return dn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!c.includes(e)){n.next=10;break}return n.next=4,w((0,Gn.F0)({id:e}));case 4:if(t=n.sent,i=t.meta.requestStatus,r=t.payload,"rejected"!==i){n.next=9;break}throw new Error(r);case 9:return n.abrupt("return",l((function(n){return n.filter((function(n){return n!==e}))})));case 10:return n.next=12,w((0,Gn.x8)({id:e}));case 12:if(o=n.sent,s=o.meta.requestStatus,a=o.payload,"rejected"!==s){n.next=17;break}throw new Error(a);case 17:return n.abrupt("return",l((function(n){return[].concat((0,an.Z)(n),[e])})));case 20:n.prev=20,n.t0=n.catch(0),d=n.t0.message,console.log(d);case 24:case"end":return n.stop()}}),n,null,[[0,20]])})));return function(e){return n.apply(this,arguments)}}();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(pn,{children:[(0,O.jsxs)(hn,{children:[(0,O.jsx)(jn,{children:e.noticeType}),(0,O.jsx)(bn,{onClick:function(){return h(!0)},children:(0,O.jsx)(Hn,{})}),r&&(0,O.jsx)(bn,{onClick:function(){return j(e.id)},children:(0,O.jsx)(Hn,{isfavorite:c.some((function(n){return n===e.id}))})})," ",r&&o._id===e.owner&&(0,O.jsx)(Cn,{onClick:function(){return m(!0)},children:(0,O.jsx)(te,{})}),(0,O.jsxs)(kn,{children:[(0,O.jsx)(On,{}),(0,O.jsx)(Mn,{children:e.location})]}),(0,O.jsxs)(Zn,{children:[(0,O.jsx)(Xn,{}),(0,O.jsxs)(Mn,{children:[e.age," year"]})]}),(0,O.jsxs)(yn,{children:["male"===e.sex?(0,O.jsx)(ne,{}):"female"===e.sex?(0,O.jsx)(ee,{}):null,(0,O.jsx)(Mn,{children:e.sex})]}),(0,O.jsx)(un,{src:e.photoURL})]}),(0,O.jsx)(fn,{children:(0,O.jsx)(gn,{children:e.title})}),(0,O.jsx)(mn,{children:(0,O.jsxs)(wn,{onClick:function(){return t(e.id)},children:[(0,O.jsx)(vn,{children:"Learn more"}),(0,O.jsx)(Vn,{})]})})]},e.id),(0,O.jsx)(Sn,{active:p,setActive:h}),(0,O.jsx)(qn,{active:g,setActive:m,yes:v})]})},re=t(2424),oe="ModalNotice_content_top__K0doR",se="ModalNotice_pet_photo__0hoUm",ae="ModalNotice_advertisement__AxQ4h",ce="ModalNotice_advertisement_list__n2J22",le="ModalNotice_advertisement_list_left__dtKW1",de="ModalNotice_advertisement_list_right__fdyai",xe="ModalNotice_content_middle__ByPo3",pe="ModalNotice_content_bottom__aYb6C",he="ModalNotice_pet_category__M1ytJ",ue="ModalNotice_contacts__UjUfi",fe=function(n){var e=n.isFavorite;return(0,O.jsx)("svg",{fill:e?"#fff":"none",stroke:"#fff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"24",height:"24",style:{transition:"fill 0.3s"},children:(0,O.jsx)("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:"4",strokeWidth:"2",d:"M5.775 16.063l10.225 10.603 10.225-10.603c1.137-1.179 1.775-2.777 1.775-4.444 0-3.471-2.714-6.285-6.061-6.285-1.607 0-3.149 0.662-4.286 1.841l-1.653 1.715-1.653-1.715c-1.137-1.179-2.678-1.841-4.286-1.841-3.347 0-6.061 2.814-6.061 6.285 0 1.667 0.639 3.266 1.775 4.444z"})})},ge=U.zo.button($n||($n=(0,R.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  width: 256px;\n  height: 40px;\n  border-radius: 40px;\n  background-color: var(--blueLink);\n  border: 2px solid var(--blueLink);\n  cursor: pointer;\n  p {\n    color: var(--white);\n  }\n  svg {\n    width: 18px;\n    height: 18px;\n  }\n  &:hover {\n    background-color: var(--white);\n\n    p {\n      color: var(--blueLink);\n    }\n    svg {\n      stroke: var(--blueLink);\n      fill: var(--blueLink);\n    }\n  }\n  @media screen and (min-width: 768px) {\n    width: 129px;\n  }\n"]))),me=U.zo.p(Jn||(Jn=(0,R.Z)(["\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 21.86px;\n"]))),we=function(n){var e=n.notice,t=(0,Qn.a)(),i=t.isLoggedIn,r=t.user,o=(0,sn.useState)(r.favorites||[]),s=(0,en.Z)(o,2),a=s[0],c=s[1],l=(0,sn.useState)(!1),d=(0,en.Z)(l,2),x=d[0],p=d[1];return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(ge,{onClick:function(){return n=e._id,void(i?c((function(e){return e.includes(n)?e.filter((function(e){return e!==n})):[].concat((0,an.Z)(e),[n])})):p(!0));var n},children:[(0,O.jsx)(me,{children:"Add to "}),(0,O.jsx)(fe,{isFavorite:a.some((function(n){return n===e._id}))})]}),x&&(0,O.jsx)(Sn,{active:x,setActive:p})]})},ve=U.zo.button(Kn||(Kn=(0,R.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 256px;\n  height: 40px;\n  border-radius: 40px;\n  background-color: #fff;\n  border: 2px solid var(--blueLink);\n  cursor: pointer;\n  a {\n    color: var(--blueLink);\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 21.86px;\n  }\n  &:hover {\n    background-color: var(--blueLink);\n    border: 2px solid var(--white);\n    a {\n      color: var(--white);\n    }\n  }\n  @media screen and (min-width: 768px) {\n    width: 129px;\n  }\n"]))),je=function(n){var e=n.notice;return(0,O.jsx)(ve,{children:(0,O.jsx)(T.Link,{to:"tel:".concat(e.ownerPhone),children:"Contact"})})},be=t(5294),ke="https://yourpets-project-backend.onrender.com",Ze={method:"GET",headers:{accept:"application/json"}},ye=function(){var n=(0,cn.Z)(dn().mark((function n(e){var t,i;return dn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,be.Z)("".concat(ke,"/notices/").concat(e),Ze);case 2:return t=n.sent,i=t.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Me=function(n){var e=n.active,t=n.setActive,i=n.noticeDetail,r=(0,sn.useState)(" "),o=(0,en.Z)(r,2),s=o[0],a=o[1];return(0,sn.useEffect)((function(){var n=function(){var n=(0,cn.Z)(dn().mark((function n(){var e;return dn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ye(i);case 3:e=n.sent,a(e.notice),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("error :>> ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[i]),(0,O.jsxs)(zn.Z,{active:e,setActive:t,children:[(0,O.jsxs)("div",{className:oe,children:[(0,O.jsx)("img",{className:se,src:s.photoURL,alt:"#"}),(0,O.jsx)("p",{className:he,children:s.noticeType}),(0,O.jsxs)("div",{className:ae,children:[(0,O.jsx)("h3",{children:s.title}),(0,O.jsxs)("div",{className:ce,children:[(0,O.jsxs)("ul",{className:le,children:[(0,O.jsx)("li",{children:"Name:"}),(0,O.jsx)("li",{children:"Birthday:"}),(0,O.jsx)("li",{children:"Type:"}),(0,O.jsx)("li",{children:"Place:"}),(0,O.jsx)("li",{children:"The sex:"}),(0,O.jsx)("li",{children:"Email:"}),(0,O.jsx)("li",{children:"Phone:"})]}),(0,O.jsxs)("ul",{className:de,children:[(0,O.jsx)("li",{children:s.name}),(0,O.jsx)("li",{children:s.birthday}),(0,O.jsx)("li",{children:s.petType}),(0,O.jsx)("li",{children:s.location}),(0,O.jsx)("li",{children:s.sex}),(0,O.jsx)("li",{children:(0,O.jsx)(T.Link,{className:ue,to:"mailto:".concat(s.ownerEmail),children:s.ownerEmail})}),(0,O.jsx)("li",{children:(0,O.jsx)(T.Link,{className:ue,to:"tel:".concat(s.ownerPhone),children:s.ownerPhone})})]})]})]})]}),(0,O.jsxs)("p",{className:xe,children:[(0,O.jsx)("span",{children:"Comments:"})," ",s.comments]}),(0,O.jsxs)("div",{className:pe,children:[(0,O.jsx)(we,{notice:s}),(0,O.jsx)(je,{notice:s})]})]})},Ce=function(){var n=(0,G.v9)(on.lB),e=(0,G.v9)(on.xM),t=(0,G.v9)(on.xU),i=(0,G.I0)();(0,sn.useEffect)((function(){i((0,Gn.AD)(e))}),[i,e]);var r=(0,sn.useState)(1),o=(0,en.Z)(r,2),s=o[0],a=o[1],c=Math.ceil(n.length/12),l=12*(s-1),d=l+12,x=n.slice(l,d),p=(0,sn.useState)(!1),h=(0,en.Z)(p,2),u=h[0],f=h[1],g=(0,sn.useState)(""),m=(0,en.Z)(g,2),w=m[0],v=m[1],j=function(n){v(n),f(!0)};return(0,O.jsxs)(O.Fragment,{children:[t?(0,O.jsx)("div",{children:"Loading..."}):(0,O.jsx)(tn,{children:x.length>0?n.map((function(n){return(0,O.jsx)(ie,{notice:n,handleLearnMore:j},n.id)})):(0,O.jsx)(rn,{children:"No Pets found, reload page or try again later"})}),(0,O.jsx)(re.Z,{currentPage:s,totalPages:c,onPageChange:function(n){a(n)}}),u&&(0,O.jsx)(Me,{active:u,setActive:f,noticeDetail:w})]})},ze=function(){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(nn.Z,{}),(0,O.jsx)(X,{}),(0,O.jsx)(Ce,{})]})}}}]);
//# sourceMappingURL=78.6407ddd5.chunk.js.map