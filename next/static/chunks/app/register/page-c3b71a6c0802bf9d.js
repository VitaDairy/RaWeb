(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4011],{9935:function(e,t,r){Promise.resolve().then(r.bind(r,2293))},2293:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(7437),s=r(1265),a=r(6981),l=r(3056),i=r(3874),o=r(6514),c=r(8906),d=r(2265);let u=d.forwardRef(function(e,t){let{title:r,titleId:n,...s}=e;return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},s),r?d.createElement("title",{id:n},r):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"}))}),m=d.forwardRef(function(e,t){let{title:r,titleId:n,...s}=e;return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":n},s),r?d.createElement("title",{id:n},r):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))});var h=r(3934),p=r(6463);function x(){let e=(0,p.useRouter)(),{actionGetProvinces:t}=(0,l.Z)(),{phone:r,otp:s,actionRegister:c}=(0,l.Z)(),[u,m]=(0,d.useState)(null),[h,x]=(0,d.useState)(""),[v,w]=(0,d.useState)(""),[b,g]=(0,d.useState)(!0),[j,N]=(0,d.useState)({}),[k,y]=(0,d.useState)(!1),[C,Z]=(0,d.useState)({name:"",password:"",confirmPassword:"",gender:0,provinceId:0,districtId:0,wardId:0,address:"",termsAccepted:!1,errors:{}});return(0,d.useEffect)(()=>{t().then(e=>{m((null==e?void 0:e.provinces)||null),Z(t=>{var r;return{...t,provinceId:null==e?void 0:null===(r=e.provinces[0])||void 0===r?void 0:r.id}})})},[]),(0,d.useEffect)(()=>{g(!(""!==C.name&&""!==C.password&&""!==C.confirmPassword&&0!==C.gender&&""!==C.address&&0!==C.provinceId&&0!==C.districtId&&0!==C.wardId&&C.termsAccepted&&Object.values(j).every(e=>!1===e)))},[C,j]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex flex-col items-center h-screen space-y-4 p-5 bg-white min-h-screen",children:[(0,n.jsx)("div",{className:"w-full",children:(0,n.jsx)("button",{onClick:()=>{e.push("/login")},children:(0,n.jsx)(o.Z,{className:"h-6 w-6 text-neutral dark:text-neutral ",strokeWidth:2})})}),(0,n.jsx)(f,{isLoading:k,handleChange:e=>{let{name:t,value:r,type:n,checked:s}=e.target;"provinceId"===t&&(0===(r=Number(r))?N(e=>({...e,province:!0})):N(e=>({...e,province:!1})),i.ZP.getWardsAndDistricts({code:Number(r)}).then(e=>{var t;x((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.provinces)||null)})),"districtId"===t&&(r=Number(r),i.ZP.getWardsAndDistricts({code:Number(r)}).then(e=>{var t;w((null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.provinces)||null)})),"wardId"===t&&(r=Number(r)),"confirmPassword"===t&&(r!==C.password?N(e=>({...e,confirmPassword:!0})):N(e=>({...e,confirmPassword:!1}))),"password"===t&&(Z(e=>({...e,confirmPassword:""})),/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(r)?N(e=>({...e,password:!1})):(N(e=>({...e,password:!0})),C.confirmPassword&&C.confirmPassword!==r?N(e=>({...e,confirmPassword:!0})):N(e=>({...e,confirmPassword:!1})))),Z(e=>({...e,[t]:"checkbox"===n?s:r}))},district:h,formData:C,handleSubmit:t=>{if(C.password&&!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(C.password)){N(e=>({...e,errors:{password:!0}}));return}if(C.password!==C.confirmPassword){N(e=>({...e,confirmPassword:!0}));return}if(!1===C.termsAccepted){N(e=>({...e,termsAccepted:"Vui l\xf2ng chấp nhận điều khoản"}));return}y(!0),C.phoneNumber=r,C.otp=s,C.firstName=C.name,C.lastName=C.name,i.ZP.register(C).then(async t=>{var n,s;(null==t?void 0:null===(n=t.meta)||void 0===n?void 0:n.status)!==1e3?(e.push("/login"),(0,a.CA)({phone:r,reason:null==t?void 0:null===(s=t.meta)||void 0===s?void 0:s.message})):((0,a.Ny)({phone:r}),await c(t),e.push("/home"))}).finally(()=>{y(!1)})},provinces:u,errors:j,ward:v,isDisableButton:b},"123")]})})}let f=e=>{let{isLoading:t,handleChange:r,formData:a,provinces:l,district:i,ward:o,handleSubmit:p,isDisableButton:x,errors:f}=e,[v,w]=(0,d.useState)(!1),[b,g]=(0,d.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"mt-15 w-full",children:[(0,n.jsx)("label",{className:"block mb-2 text-sm font-medium text-primary500 dark:text-primary500 text-xs",children:"Bạn đ\xe3 x\xe1c thực số điện thoại th\xe0nh c\xf4ng, điền th\xf4ng tin để ho\xe0n tất nh\xe9"}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"text",name:"name",className:"border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral font-normal pb-2",placeholder:"Họ v\xe0 T\xean *",onChange:r})}),(0,n.jsxs)("div",{className:"flex items-center relative",children:[(0,n.jsxs)("select",{name:"gender",value:a.gender,onChange:r,className:"appearance-none border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral font-normal pb-2",required:!0,children:[(0,n.jsx)("option",{value:"0",className:"text-netral",children:"Giới t\xednh *"}),(0,n.jsx)("option",{value:"male",children:"Nam"},"gender-nam"),(0,n.jsx)("option",{value:"femalze",children:"Nữ"},"gender-nu")]}),(0,n.jsx)(c.Z,{className:"h-7 w-7 text-neutral700 absolute inset-y-2 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer"})]}),(0,n.jsxs)("div",{className:"flex items-center relative",children:[(0,n.jsx)("input",{type:"".concat(v?"text":"password"),name:"password",value:a.password,onChange:r,className:"appearance-none border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral  pb-2",placeholder:"Mật khẩu * (d\xf9ng cho ứng dụng)"}),(0,n.jsx)("button",{className:"absolute inset-y-0 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer",onClick:()=>{w(!v)},children:v?(0,n.jsx)(m,{className:"h-5 w-5 text-neutral500 "}):(0,n.jsx)(u,{className:"h-5 w-5 text-neutral500 "})})]}),f.password&&(0,n.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,n.jsx)(h.Z,{className:"h-4 w-4"}),(0,n.jsx)("p",{className:"text-10 ml-1 text-left",children:"Mật khẩu tối thiểu l\xe0 8 k\xfd tự (gồm chữ v\xe0 số, kh\xf4ng t\xednh k\xfd tự đặc biệt)"})]}),(0,n.jsxs)("div",{className:"flex items-center relative",children:[(0,n.jsx)("input",{name:"confirmPassword",value:a.confirmPassword,type:"".concat(b?"text":"password"),onChange:r,className:"border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral pb-2",placeholder:"X\xe1c nhận lại mật khẩu *"}),(0,n.jsx)("button",{className:"absolute inset-y-0 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer",onClick:()=>{g(!b)},children:b?(0,n.jsx)(m,{className:"h-5 w-5 text-neutral500 "}):(0,n.jsx)(u,{className:"h-5 w-5 text-neutral500 "})})]}),f.confirmPassword&&(0,n.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,n.jsx)(h.Z,{className:"h-4 w-4"}),(0,n.jsx)("p",{className:"text-10 ml-1",children:"Mật khẩu kh\xf4ng tr\xf9ng khớp"})]}),(0,n.jsxs)("div",{className:"flex items-center relative",children:[(0,n.jsxs)("select",{name:"provinceId",value:a.provinceId,onChange:r,className:"appearance-none border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral font-normal pb-2",required:!0,children:[(0,n.jsxs)("option",{value:"0",className:"text-neutral500",children:["Tỉnh/Th\xe0nh ",(0,n.jsx)("span",{className:"text-red",children:"*"})]}),l&&(null==l?void 0:l.filter(e=>e.id<100).map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},"province-".concat(e.id))))]}),(0,n.jsx)(c.Z,{className:"h-7 w-7 text-neutral700 absolute inset-y-2 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer"})]}),f.province&&(0,n.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,n.jsx)(h.Z,{className:"h-4 w-4"}),(0,n.jsx)("p",{className:"text-10 ml-1",children:"Vui l\xf2ng chọn Tỉnh/Th\xe0nh phố"})]}),(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center relative w-[50%]",children:[(0,n.jsxs)("select",{name:"districtId",value:a.districtId,onChange:r,className:" appearance-none border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral font-normal pb-2",required:!0,children:[(0,n.jsx)("option",{value:"0",disabled:!0,children:"Quận/huyện *"}),i&&(null==i?void 0:i.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},"district-".concat(e.id))))]}),(0,n.jsx)(c.Z,{className:"h-7 w-7 text-neutral700 absolute inset-y-2 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer"})]}),(0,n.jsxs)("div",{className:"flex items-center relative w-[50%]",children:[(0,n.jsxs)("select",{name:"wardId",value:a.wardId,onChange:r,className:"appearance-none border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral font-normal pb-2",required:!0,children:[(0,n.jsx)("option",{value:"0",disabled:!0,children:"X\xe3/Phường *"}),o&&(null==o?void 0:o.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},"ward-".concat(e.id))))]}),(0,n.jsx)(c.Z,{className:"h-7 w-7 text-neutral700 absolute inset-y-2 right-0 pr-3 flex items-center text-lg leading-5 cursor-pointer"})]})]}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{name:"address",type:"text",value:a.address,className:"border-0 border-b focus:outline-none border-inputGrey w-full pt-5 text-neutral pb-2",placeholder:"Địa chỉ cụ thể",onChange:r})}),f.address&&(0,n.jsxs)("div",{className:"flex items-center text-error500 text-center mt-2",children:[(0,n.jsx)(h.Z,{className:"h-4 w-4"}),(0,n.jsx)("p",{className:"text-10 ml-1",children:"Vui l\xf2ng nhập địa chỉ"})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex items-center mb-4 mt-4",children:[(0,n.jsx)("input",{type:"checkbox",name:"termsAccepted",checked:a.termsAccepted,onChange:r,className:"appearance-none w-4 h-4 border border-gray-300 rounded-sm focus:outline-none checked:bg-gradient-button checked:border-transparent checked:text-white",required:!0}),a.termsAccepted&&(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-white absolute pointer-events-none",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M5 13l4 4L19 7"})}),(0,n.jsxs)("label",{className:"ml-2 text-neutral500 text-xs",children:["T\xf4i đồng \xfd với c\xe1c"," ",(0,n.jsx)("a",{href:"https://vitadairyvietnam.vn/terms",className:"text-primary500 font-medium",children:"Điều khoản dịch vụ"})," ","của VitaDairy"]})]})}),(0,n.jsx)("button",{className:" ".concat(x?"bg-disabled opacity-50 cursor-not-allowed":"bg-gradient-button opacity-100"," font-bold py-2 px-4 rounded-full transition duration-300 min-w-full mt-5 bottom-0 left-0 h-11 text-white flex justify-center items-center gap-2"),disabled:x,onClick:()=>{p()},children:"HO\xc0N TẤT"})]}),t&&(0,n.jsx)(s.Z,{})]})}},4088:function(e,t,r){"use strict";r.d(t,{P:function(){return s}});var n=r(7437);let s={spinner:e=>(0,n.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"none",...e,width:"16",height:"16",children:(0,n.jsxs)("g",{fill:"#00acd6","fill-rule":"evenodd","clip-rule":"evenodd",children:[(0,n.jsx)("path",{d:"M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z",fill:"white"}),(0,n.jsx)("path",{d:"M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"})]})}),pin:e=>(0,n.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.5 8.49478C8.604 8.49478 9.5 7.59934 9.5 6.49606C9.5 5.39278 8.604 4.49738 7.5 4.49738C6.396 4.49738 5.5 5.39278 5.5 6.49606C5.5 7.59934 6.396 8.49478 7.5 8.49478Z",stroke:"#000000","stroke-linecap":"square"}),(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.5 6.49606C13.5 11.4928 8.5 14.4909 7.5 14.4909C6.5 14.4909 1.5 11.4928 1.5 6.49606C1.5 3.18522 4.187 0.5 7.5 0.5C10.813 0.5 13.5 3.18522 13.5 6.49606Z",stroke:"#000000","stroke-linecap":"square"})]})}},1265:function(e,t,r){"use strict";var n=r(7437),s=r(4088);t.Z=()=>(0,n.jsxs)("div",{className:"fixed top-0 left-0 z-10 w-screen h-screen flex justify-center items-center",children:[(0,n.jsx)("div",{className:"w-full h-full bg-black opacity-40 absolute top-0 left-0"}),(0,n.jsx)(s.P.spinner,{className:"h-16 w-16 animate-spin"})]})},6514:function(e,t,r){"use strict";var n=r(2265);let s=n.forwardRef(function(e,t){let{title:r,titleId:s,...a}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},a),r?n.createElement("title",{id:s},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});t.Z=s},8906:function(e,t,r){"use strict";var n=r(2265);let s=n.forwardRef(function(e,t){let{title:r,titleId:s,...a}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},a),r?n.createElement("title",{id:s},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))});t.Z=s},3934:function(e,t,r){"use strict";var n=r(2265);let s=n.forwardRef(function(e,t){let{title:r,titleId:s,...a}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},a),r?n.createElement("title",{id:s},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});t.Z=s}},function(e){e.O(0,[8461,4498,2971,7023,1744],function(){return e(e.s=9935)}),_N_E=e.O()}]);