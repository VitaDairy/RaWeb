(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3944],{11:function(e,t,n){Promise.resolve().then(n.bind(n,1434))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return s.a}});var l=n(5601),s=n.n(l)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},getImageProps:function(){return i}});let l=n(9920),s=n(497),r=n(8173),a=l._(n(1241));function i(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let c=r.Image},1434:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var l=n(7437),s=n(6648),r=n(2265),a=n(9795),i=n(1847);function c(e){let{isOpen:t,togglePopup:n}=e,[c,o]=(0,r.useState)(!1),u=()=>{o(!c)};return(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",onClick:n,children:[(0,l.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-6 w-80",children:[(0,l.jsx)("div",{className:"flex justify-center mb-4",children:(0,l.jsx)(s.default,{src:"./static/sbps/banner/otp_error.png",alt:"OTP Error",width:200,height:182})}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"text-error400 font-semibold text-lg",children:"T\xe0i khoản đ\xe3 bị kho\xe1"}),(0,l.jsx)("p",{className:"text-neutral900 text-sm mt-2",children:"Bạn đ\xe3 bị kho\xe1 t\xednh năng t\xedch xu nhiều lần n\xean t\xe0i khoản sẽ bị tạm kho\xe1. Vui l\xf2ng li\xean hệ hotline 190633559 để được hỗ trợ"})]}),(0,l.jsx)("div",{className:"mt-6",children:(0,l.jsx)("button",{onClick:n,className:"w-full py-2 bg-gradient-button text-white rounded-full text-lg",children:"X\xe1c Nhận"})}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)(a.O,{onClick:e=>{e.preventDefault(),u()},name:"LI\xcaN HỆ CSKH"})})]}),c&&(0,l.jsx)(i.Z,{isOpen:c,togglePopup:u})]})})}function o(e){let{isOpen:t,togglePopup:n}=e;return(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,l.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-6 w-80",children:[(0,l.jsx)("div",{className:"flex justify-center mb-4",children:(0,l.jsx)(s.default,{src:"./static/sbps/banner/otp_error.png",alt:"OTP Error",width:200,height:182})}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"text-error400 font-semibold text-lg",children:"M\xe3 OTP chưa ch\xednh x\xe1c!"}),(0,l.jsx)("p",{className:"text-neutral900 text-sm mt-2",children:"M\xe3 OTP của bạn nhập v\xe0o kh\xf4ng đ\xfang, vui l\xf2ng nhập lại"})]}),(0,l.jsx)("div",{className:"mt-6",children:(0,l.jsx)("button",{onClick:n,className:"w-full py-2 bg-gradient-button text-white rounded-lg text-lg",children:"Thử Lại"})})]})})})}var u=n(4088),d=n(6981),x=n(3056),h=n(3874),f=n(5888),m=n(6514),p=n(6463);let b=()=>{let{phone:e,source:t}=(0,x.Z)(),[n,s]=(0,r.useState)(60),[a,i]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{if(!a)return;let e=setInterval(()=>{s(t=>0===t?(clearInterval(e),i(!1),60):t-1)},1e3);return()=>clearInterval(e)},[a]),(0,l.jsx)(l.Fragment,{children:a?(0,l.jsxs)("a",{href:"#",onClick:e=>{e.preventDefault()},className:"text-right text-neutral500 font-medium text-xs mt-2 block ".concat(a?"cursor-not-allowed":""),children:["Gửi lại sau ",n,"s"]}):(0,l.jsx)("a",{href:"#",className:"text-right text-primary500 font-medium text-xs mt-2 block",onClick:n=>{n.preventDefault(),h.ZP.reSendSMS(e,t),i(!0),s(60)},children:"Gửi lại m\xe3 qua SMS"})})};function g(){let{actionLogin:e,isLoggedIn:t,actionVerifyPhoneNumber:n,source:s}=(0,x.Z)(),a=(0,p.useRouter)();(0,r.useEffect)(()=>{t&&a.push("/home")},[]);let[i,g]=(0,r.useState)(!1),[j,v]=(0,r.useState)(1),w=()=>{v(j+1)},[N,k]=(0,r.useState)(!0),[y,C]=(0,r.useState)(""),P=e=>{let t=e.target.value.replace(/[^0-9]/g,"");C(t),(0,f.e)(t)?k(!1):k(!0)},S=async()=>{var e;let{verifyPhone:t,source:l}=await n(y);"REGISTER"===l&&(0,d.lm)({phone:y});let s=await h.ZP.sendOTP(y,l);s&&(null==s?void 0:null===(e=s.meta)||void 0===e?void 0:e.msg)==="OK"&&w()},O=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"mt-5 w-full",children:[(0,l.jsxs)("label",{className:"block mb-2 text-lg font-medium text-neutral dark:text-neutral",children:["Nhập số điện thoại ",(0,l.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,l.jsx)("input",{type:"tel",className:"border-0 border-b focus:outline-none border-neutral400 w-full placeholder-neutral400 mt-2 text-lg text-neutral mt-2",placeholder:"Nhập số điện thoại của bạn",onInput:P,onChange:P,onKeyDown:async e=>{"Enter"===e.key&&S()},value:y,autoFocus:!0})]}),(0,l.jsx)("div",{className:"flex items-center justify-center h-screen w-full",children:(0,l.jsx)("button",{className:" ".concat(N?"bg-disabled opacity-50 cursor-not-allowed":"bg-gradient-button opacity-100"," font-bold py-2 px-4 rounded-full transition duration-300 min-w-full mb-[40%] font-bold text-sm h-11 text-white"),disabled:N,onClick:()=>{S()},children:"TIẾP TỤC"})})]}),[E,I]=(0,r.useState)(["","","",""]),T=(0,r.useRef)([]),F=async(e,t)=>{let{value:n}=e.target;if(!/^[0-9]$/.test(n)&&""!==n)return;let l=[...E];if(l[t]=n,I(l),l.every(e=>""!==e)){g(!0);let e=l.join("");await Z(e)&&a.push("/home")}},M=(e,t)=>{if("Backspace"===e.key){if(""===E[t])t>0&&T.current[t-1].focus();else{let e=[...E];e[t]="",I(e)}}};(0,r.useEffect)(()=>{let e=E.findIndex(e=>""===e);if(e>=0&&e<4){let t=document.getElementById("otp-input-".concat(e));t&&t.focus()}},[E]);let Z=async t=>{if("REGISTER"===s){var n;let e=await h.ZP.verifyOTP(y,t);if(e&&(null==e?void 0:null===(n=e.meta)||void 0===n?void 0:n.status)!==1e3)return R(!0),I(["","","",""]),g(!1),!1}let{loginError:l}=await e(y,t);return!l||((g(!1),"T\xe0i khoản n\xe0y đ\xe3 bị kh\xf3a."===l)?(D(),I(["","","",""])):"verify phone number false"===l?a.push("/register"):(R(!0),I(["","","",""])),!1)},_=(0,r.memo)(()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"mt-5 w-full",children:[(0,l.jsxs)("label",{className:"block mb-2 text-sm font-normal text-neutral dark:text-neutral",children:["M\xe3 x\xe1c thực OTP được gửi qua ứng dụng Zalo tr\xean điện thoại theo số ",(0,l.jsx)("b",{className:"font-bold text-neutral",children:y})]}),(0,l.jsx)("div",{className:"flex space-x-2 mt-4 justify-between",children:E.map((e,t)=>(0,l.jsx)("input",{id:"otp-input-".concat(t),type:"tel",autoFocus:0===t,value:E[t],onChange:e=>F(e,t),onKeyDown:e=>M(e,t),ref:e=>T.current[t]=e,maxLength:1,className:"w-[4.75rem] h-[4.75rem] text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl bg-neutral100 text-neutral900 dark:text-neutral900 "},"otp-"+t))}),i?(0,l.jsx)("div",{className:"w-full flex justify-end mt-2",children:(0,l.jsx)(u.P.spinner,{className:"h-4 w-4 animate-spin text-neutral700"})}):(0,l.jsx)(b,{})]})})),[z,R]=(0,r.useState)(!1),[B,L]=(0,r.useState)(!1),D=()=>{L(!B)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex flex-col items-center h-screen space-y-4 p-5 bg-white min-h-screen",children:[(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)("button",{onClick:()=>{a.push("/")},children:(0,l.jsx)(m.Z,{className:"h-6 w-6 text-neutral dark:text-neutral ",strokeWidth:2})})}),(()=>{switch(j){case 1:return(0,l.jsx)(O,{});case 2:return(0,l.jsx)(_,{})}})(),z&&(0,l.jsx)(o,{isOpen:z,togglePopup:()=>{R(!z)}}),B&&(0,l.jsx)(c,{isOpen:B,togglePopup:D})]})})}},9795:function(e,t,n){"use strict";n.d(t,{I:function(){return s},O:function(){return r}});var l=n(7437);let s=e=>{let{name:t,onClick:n}=e;return(0,l.jsxs)("button",{className:"relative inline-block px-8 py-2 font-bold text-transparent border-transparent rounded-full hover:opacity-80 transition duration-300 ease-in-out",onClick:n,children:[(0,l.jsx)("span",{className:"absolute inset-0 rounded-full bg-white bg-clip-padding"}),(0,l.jsx)("span",{className:"relative text-transparent bg-clip-text bg-gradient-button",children:t})]})},r=e=>{let{name:t,onClick:n}=e;return(0,l.jsxs)("button",{className:"relative inline-block px-8 py-2 font-bold text-transparent bg-gradient-button border-0 border-transparent rounded-full hover:opacity-80 transition duration-300 ease-in-out w-full h-10",onClick:n,children:[(0,l.jsx)("span",{className:"absolute inset-0 rounded-full border border-transparent bg-white bg-clip-padding"}),(0,l.jsx)("span",{className:"relative text-transparent bg-clip-text bg-gradient-button",children:t})]})}},1847:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var l=n(7437),s=n(6648);function r(e){let{isOpen:t,togglePopup:n,pagePersonal:r=!1}=e;return(0,l.jsx)(l.Fragment,{children:t&&(0,l.jsx)("div",{className:"fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 w-full  ".concat(r?"mb-[30%]":""," z-10"),onClick:n,children:(0,l.jsxs)("div",{className:"mt-6 space-y-2 w-full p-4 z-[10000]",children:[(0,l.jsxs)("button",{onClick:()=>{window.location.href="tel:1900633559"},className:"w-full px-4 py-2 bg-white rounded-lg text-[#1F86F6] text-sm h-11 flex justify-between items-center ",children:[(0,l.jsx)(s.default,{src:"/static/sbps/icons/support.svg",alt:"Call",width:24,height:24,className:"pl-0"}),(0,l.jsx)("span",{className:"mx-auto text-sm font-medium",children:"Call 1900 633559"})]}),(0,l.jsx)("button",{onClick:n,className:"w-full px-4 py-2 bg-white rounded-lg h-11 font-semibold text-[#1F86F6]",children:"Cancel"})]})})})}},4088:function(e,t,n){"use strict";n.d(t,{P:function(){return s}});var l=n(7437);let s={spinner:e=>(0,l.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"none",...e,width:"16",height:"16",children:(0,l.jsxs)("g",{fill:"#00acd6","fill-rule":"evenodd","clip-rule":"evenodd",children:[(0,l.jsx)("path",{d:"M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z",fill:"white"}),(0,l.jsx)("path",{d:"M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"})]})}),pin:e=>(0,l.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,l.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.5 8.49478C8.604 8.49478 9.5 7.59934 9.5 6.49606C9.5 5.39278 8.604 4.49738 7.5 4.49738C6.396 4.49738 5.5 5.39278 5.5 6.49606C5.5 7.59934 6.396 8.49478 7.5 8.49478Z",stroke:"#000000","stroke-linecap":"square"}),(0,l.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.5 6.49606C13.5 11.4928 8.5 14.4909 7.5 14.4909C6.5 14.4909 1.5 11.4928 1.5 6.49606C1.5 3.18522 4.187 0.5 7.5 0.5C10.813 0.5 13.5 3.18522 13.5 6.49606Z",stroke:"#000000","stroke-linecap":"square"})]})}},5888:function(e,t,n){"use strict";function l(e){return/^(0|\+84)(3|5|7|8|9)\d{8}$/.test(e)}n.d(t,{e:function(){return l}})},6514:function(e,t,n){"use strict";var l=n(2265);let s=l.forwardRef(function(e,t){let{title:n,titleId:s,...r}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),n?l.createElement("title",{id:s},n):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=s}},function(e){e.O(0,[8173,8461,4498,2971,7023,1744],function(){return e(e.s=11)}),_N_E=e.O()}]);