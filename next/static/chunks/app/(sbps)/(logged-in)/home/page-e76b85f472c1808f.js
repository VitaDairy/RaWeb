(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{3065:function(e,t,n){Promise.resolve().then(n.bind(n,5515))},5515:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var s=n(7437),l=n(6981),i=n(6648),r=n(6463),a=n(2265),c=n(9795),u=n(1847);function o(e){let{isOpen:t,togglePopup:n}=e,o=(0,r.useRouter)(),[d,h]=(0,a.useState)(!1),p=()=>{h(!d)};return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",onClick:n,children:[(0,s.jsxs)("div",{className:"bg-white rounded-2xl shadow-lg p-6 w-80",children:[(0,s.jsx)("div",{className:"flex justify-center mb-4",children:(0,s.jsx)(i.default,{src:"./static/sbps/banner/otp_error.png",alt:"OTP Error",width:200,height:182})}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-error400 font-semibold text-lg",children:"Bạn chưa c\xf3 địa chỉ mặc định"}),(0,s.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"Để việc nhận qu\xe0 từ chương tr\xecnh diễn ra thuận lợi, qu\xfd kh\xe1ch vui l\xf2ng điền địa chỉ giao nhận đầy đủ v\xe0 ch\xednh x\xe1c."}),(0,s.jsx)("p",{className:"text-neutral900 text-sm mt-2 font-light",children:"Th\xf4ng tin địa chỉ sẽ l\xe0 cơ sở để VitaDairy tiến h\xe0nh gửi qu\xe0 tặng."})]}),(0,s.jsx)("div",{className:"mt-6",children:(0,s.jsx)("button",{onClick:()=>{(0,l.P4)(),o.push("/address/add")},className:"w-full py-2 bg-gradient-button text-white rounded-full text-sm font-bold h-10",children:"NHẬP ĐỊA CHỈ"})}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)(c.O,{onClick:()=>{p(),(0,l.vP)()},name:"LI\xcaN HỆ NGAY"})})]}),d&&(0,s.jsx)(u.Z,{isOpen:d,togglePopup:p})]})})}var d=n(4196),h=n(937),p=n(2086);n(3034),n(3435),n(4885),n(7322);var x=n(3267),f=n(6341),m=e=>{let{items:t=[]}=e,n=(0,r.useRouter)();return(0,s.jsx)("div",{className:"w-full pt-5",children:(0,s.jsx)(x.tq,{spaceBetween:10,slidesPerView:4,freeMode:!0,modules:[f.Rv],children:null==t?void 0:t.map(e=>(0,s.jsx)(x.o5,{children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center cursor-pointer ",onClick:()=>{if(e.url){n.push(e.url);return}e.onClick&&(null==e||e.onClick())},children:[(0,s.jsxs)("div",{className:"h-[48px] w-[48px] relative p-[3px]",children:[(0,s.jsx)(i.default,{src:e.image_url,alt:e.image_alt||"Image",width:0,height:0,className:"object-cover w-full h-full"}),e.status&&(0,s.jsx)("div",{className:"flex items-center justify-center bg-red-500 text-[8px] font-bold rounded-full w-2 h-2 absolute top-1 right-1 animate-blink ring-2 ring-white"})]}),(0,s.jsx)("h2",{className:"text-primary500 text-[10px] mt-2",children:e.name})]})},e.key))})})},g=n(3259),b=n(3056),j=n(3874);function N(){var e;let t=(0,r.useRouter)(),{address:n,actionPrefetchData:i}=(0,b.Z)(),[c,x]=(0,a.useState)(!1),[f,N]=(0,a.useState)(!1),v=()=>{x(!c)};(0,a.useEffect)(()=>{t.prefetch("/instruct"),t.prefetch("/rules"),t.prefetch("/chat"),t.prefetch("/personal"),t.prefetch("/qr"),t.prefetch("/qr/detail"),t.prefetch("/gift"),t.prefetch("/event"),t.prefetch("/noti"),setTimeout(()=>{i({tags:[]})},500)},[]),(0,a.useEffect)(()=>{j.ZP.getPartnerStatus().then(e=>{e.response===g.d.UNREAD&&N(!0)})},[]);let[k,w]=(0,a.useState)((null==n?void 0:n.length)===0||n&&(null===(e=n[0])||void 0===e?void 0:e.provinceId)===null);return(0,s.jsxs)("div",{className:"bg-surface02",children:[(0,s.jsx)(h.Z,{showProfile:!1}),(0,s.jsx)("div",{className:"flex justify-between pl-5",children:(0,s.jsx)(m,{items:[{image_url:"/static/sbps/3x/huong-dan-3x.png",imag_alt:"QR Code",name:"Hướng dẫn",url:"",key:"guide",onClick:()=>{t.push("/instruct"),(0,l.hy)()}},{image_url:"/static/sbps/3x/the-le-3x.png",imag_alt:"QR Code",name:"Thể lệ",url:"",key:"rules",onClick:()=>{t.push("/rules"),(0,l.rf)()}},{image_url:"/static/sbps/3x/hotline-3x.png",imag_alt:"hot line",name:"Hotline",url:"",onClick:()=>{(0,l.vP)(),v()},key:"hotline"},{image_url:"/static/sbps/3x/nhan-tin-3x.png",imag_alt:"chat",name:"Nhắn tin",url:"",key:"chat",status:f,onClick:()=>{(0,l.xb)(),t.push("/chat")}}]})}),(0,s.jsx)("div",{className:"flex justify-center mt-8",children:(0,s.jsx)(p.Z,{})}),(0,s.jsx)("div",{className:"h-40"}),(0,s.jsx)(d.Z,{}),k&&(0,s.jsx)(o,{togglePopup:()=>{w(!k)},isOpen:k}),c&&(0,s.jsx)(u.Z,{isOpen:c,togglePopup:v,pagePersonal:!1})]})}},9795:function(e,t,n){"use strict";n.d(t,{I:function(){return l},O:function(){return i}});var s=n(7437);let l=e=>{let{name:t,onClick:n}=e;return(0,s.jsxs)("button",{className:"relative inline-block px-8 py-2 font-bold text-transparent border-transparent rounded-full hover:opacity-80 transition duration-300 ease-in-out",onClick:n,children:[(0,s.jsx)("span",{className:"absolute inset-0 rounded-full bg-white bg-clip-padding"}),(0,s.jsx)("span",{className:"relative text-transparent bg-clip-text bg-gradient-button",children:t})]})},i=e=>{let{name:t,onClick:n}=e;return(0,s.jsxs)("button",{className:"relative inline-block px-8 py-2 font-bold text-transparent bg-gradient-button border-0 border-transparent rounded-full hover:opacity-80 transition duration-300 ease-in-out w-full h-10",onClick:n,children:[(0,s.jsx)("span",{className:"absolute inset-0 rounded-full border border-transparent bg-white bg-clip-padding"}),(0,s.jsx)("span",{className:"relative text-transparent bg-clip-text bg-gradient-button",children:t})]})}},2086:function(e,t,n){"use strict";var s=n(7437),l=n(3259),i=n(3874),r=n(6648),a=n(7138),c=n(2265);n(3034);var u=n(6341),o=n(3267);t.Z=()=>{let[e,t]=(0,c.useState)([]);return(0,c.useEffect)(()=>{(async()=>{try{let e=localStorage.getItem(l.J.BANNER);e&&t(JSON.parse(e));let n=(await i.ZP.getWebappBanner()).response;n&&(t(n),localStorage.setItem(l.J.BANNER,JSON.stringify(n)))}catch(e){console.log(e)}})()},[]),(0,s.jsx)("div",{className:"w-full flex items-center justify-center",children:(0,s.jsx)(o.tq,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:[u.pt],children:null==e?void 0:e.map(e=>(0,s.jsx)(o.o5,{className:"w-full !flex items-center justify-center px-5",children:(0,s.jsx)(a.default,{href:e.link||e.deepLink||"#",target:"_blank",className:"h-[190px] w-[380px]",children:(0,s.jsx)(r.default,{src:e.image,alt:e.title,width:0,height:0,sizes:"100vw",className:"w-full h-full rounded-xl object-fill"})})},e.id))})})}},3259:function(e,t,n){"use strict";n.d(t,{J:function(){return l},d:function(){return s}});let s={READ:"READ",UNREAD:"UNREAD"},l={BANNER:"banner"}},3435:function(){},4885:function(){},7322:function(){}},function(e){e.O(0,[342,2646,8173,8461,4147,4498,5189,2971,7023,1744],function(){return e(e.s=3065)}),_N_E=e.O()}]);