(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6483],{5438:function(e,t,n){Promise.resolve().then(n.bind(n,3023))},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return s.a}});var r=n(5601),s=n.n(r)},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return o},getImageProps:function(){return a}});let r=n(9920),s=n(497),l=n(8173),i=r._(n(1241));function a(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let o=l.Image},3023:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(7437),s=n(9744),l=n(506);function i(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{title:"Địa chỉ của t\xf4i",inputSearch:!1,showPoint:!1,showBack:!0,backUrl:"/home"}),(0,r.jsx)("div",{className:"flex flex-col pt-2 text-center",children:(0,r.jsx)(s.Z,{})})]})}},9744:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7437),s=n(3056),l=n(3934),i=n(6463);function a(){let{address:e}=(0,s.Z)();return(0,i.useRouter)(),(0,r.jsx)("div",{className:"max-w-lg mx-auto w-full",children:null==e?void 0:e.map(e=>{var t;return(0,r.jsxs)("div",{className:"bg-white p-2 rounded-lg shadow-md space-y-2",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("p",{className:"text-start",children:[(0,r.jsxs)("span",{className:"text-sm font-normal text-neutral900",children:[(null==e?void 0:e.name)||(null==e?void 0:null===(t=e.user)||void 0===t?void 0:t.name)," - ",e.phoneNumber]}),e.isDefault&&(0,r.jsx)("span",{className:"text-green-500 text-sm ml-2",children:"[Mặc định]"})]}),(0,r.jsx)("div",{className:"flex items-center space-x-2",children:(0,r.jsx)(l.Z,{className:"w-6 h-6 text-gray-400"})})]}),(0,r.jsxs)("p",{className:"text-neutral700 font-normal text-xs text-left",children:[e.address," - ",e.wardName," - ",e.districtName," - ",e.provinceName]})]})})})}},506:function(e,t,n){"use strict";var r=n(7437),s=n(6514),l=n(4380),i=n(6648),a=n(6463);t.Z=e=>{let{title:t,inputSearch:n=!0,showPoint:o=!0,showBack:c=!1,backUrl:u="",onClickBackURl:d=null,showInputVoucher:m=!1,onClickShowInputVoucher:f}=e,h=(0,a.useRouter)(),x=(0,a.usePathname)();return(0,r.jsxs)("header",{className:"".concat(x.startsWith("/noti")?"bg-[#2CB6A3]":"bg-gradient-button","  p-4 sticky top-0 left-0 z-10"),children:[(0,r.jsx)("div",{className:"flex justify-between items-center"}),(0,r.jsxs)("div",{className:"text-center mt-4 flex justify-between ",children:[(0,r.jsxs)("h1",{className:"text-white text-[18px] font-semibold pt-1 flex items-center",children:[c&&(0,r.jsx)(s.Z,{className:"w-6 h-6 text-white mt-1 mr-2 cursor-pointer",strokeWidth:2,onClick:()=>{if(d){d();return}if(u){h.push(u);return}h.back()}}),t]}),o&&(0,r.jsxs)("div",{className:"absolute right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-lg  border border-accent01 border-2",children:[(0,r.jsx)("span",{className:"text-black text-sm font-semibold mr-1",children:"24"}),(0,r.jsx)(i.default,{src:"/static/icons/menu.svg",alt:"Notification",width:24,height:24})]}),m&&(0,r.jsx)("div",{className:"absolute right-4 px-2 py-1 flex items-center ",children:(0,r.jsx)("button",{onClick:()=>{f&&f(),h.push("/qr/detail")},children:(0,r.jsx)(i.default,{src:"/static/sbps/icons/input_voucher.svg",alt:"Notification",width:24,height:24})})})]}),n&&(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsxs)("div",{className:"flex items-center bg-white rounded-full p-2 shadow",children:[(0,r.jsx)(l.Z,{className:"w-6 h-6 text-blue-500 ml-2"}),(0,r.jsx)("input",{type:"text",placeholder:"Qu\xe0 hot h\xf4m nay",className:"ml-2 w-full border-none outline-none placeholder-neutral500 font-normal font-sm text-neutral900",style:{fontWeight:400}})]})})]})}},6514:function(e,t,n){"use strict";var r=n(2265);let s=r.forwardRef(function(e,t){let{title:n,titleId:s,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},l),n?r.createElement("title",{id:s},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=s},3934:function(e,t,n){"use strict";var r=n(2265);let s=r.forwardRef(function(e,t){let{title:n,titleId:s,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},l),n?r.createElement("title",{id:s},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});t.Z=s},4380:function(e,t,n){"use strict";var r=n(2265);let s=r.forwardRef(function(e,t){let{title:n,titleId:s,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},l),n?r.createElement("title",{id:s},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))});t.Z=s}},function(e){e.O(0,[8173,8461,4498,2971,7023,1744],function(){return e(e.s=5438)}),_N_E=e.O()}]);