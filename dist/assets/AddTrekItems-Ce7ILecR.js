import{j as e,r as t,a as R,c as z,d as F,e as K,R as S}from"./index-CZKehf6x.js";import{g as L,h as V,i as G,j as U,k as X,l as Y}from"./index.esm-w6vhgb09.js";const Z=({value:h,onChange:m})=>e.jsx("div",{className:"w-full my-1",children:e.jsx("input",{type:"text",value:h,onChange:m,className:"border border-indigo-600 w-full rounded px-4 py-1",placeholder:"Price Exclude",required:!0})}),ae=()=>{const[h,m]=t.useState(!1),{id:y}=R();console.log(y);const[D,_]=t.useState(y);console.log(D);const[M,T]=t.useState("");t.useState("");const[I,P]=t.useState(""),[Q,H]=t.useState(0),[B,E]=t.useState(""),[O,W]=t.useState(""),[x,g]=t.useState([""]),[p,j]=t.useState([{day:"",question:"",answer:""}]),[$,N]=t.useState([{faqQuestion:"",faqAnswer:""}]),[u,f]=t.useState([""]),[b,v]=t.useState([""]),[w,J]=t.useState([{Country:"",Duration:"",Difficulty:"",Activity:"",MaxAltitude:"",BestSeason:"",Accommodation:"",Meals:"",Points:""}]),i=(s,l,a)=>{const{value:d}=s.target;J(r=>{const n=[...r];return n[l][a]=d,n})},q={toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike"],["image","code-block"],[{list:"ordered"},{list:"bullet"}],["link"]]},C=["header","bold","italic","underline","strike","image","code-block","list","bullet","link"],A=(s,l)=>{const{name:a,value:d}=s.target,r=[...p];r[l]={...r[l],[a]:d},j(r)},k=(s,l)=>{const{name:a,value:d}=s.target;N(r=>{const n=[...r];return n[l][a]=d,n})};return e.jsx("div",{className:"mx-8",children:e.jsxs("form",{children:[e.jsxs("div",{className:"flex rounded gap-2 my-4",children:[e.jsxs("div",{className:"w-3/4",children:[e.jsx("h2",{className:"text py-1 font-semibold",children:"Trek Title"}),e.jsx("input",{type:"text",value:M,onChange:s=>T(s.target.value),className:"border border-indigo-600 py-1 px-4 w-full gray-500 rounded",placeholder:"Everest base camp trek for 14 days 15 night....",required:!0})]}),e.jsxs("div",{className:"w-1/3",children:[e.jsx("h2",{className:"text py-1 font-semibold",children:"Trek Duration"}),e.jsx("input",{type:"text",className:"border border-indigo-600 px-4 gray-500 w-full rounded py-1",value:I,onChange:s=>P(s.target.value),placeholder:"14 days 15 night",required:!0})]}),e.jsxs("div",{className:"w-1/3",children:[e.jsx("h2",{className:"py-1 text-md font-semibold",children:"Price"}),e.jsx("input",{type:"number",className:"border border-indigo-600 px-4 gray-500 rounded py-1 w-full",value:Q,onChange:s=>H(s.target.value),placeholder:"$4500.00",required:!0})]}),e.jsxs("div",{className:"w-1/3",children:[e.jsx("h2",{className:"py-1 text-md font-semibold",children:"Category"}),e.jsx("input",{type:"text",className:"border border-indigo-600 px-4 gray-500 rounded py-1 w-full",placeholder:"Type a category",required:!0})]})]}),e.jsxs("div",{className:"my-4",children:[e.jsx("h3",{className:"text py-1 font-semibold",children:"Conditions"}),Array.isArray(w)&&w.map((s,l)=>e.jsxs("div",{className:"grid mt-2 w-full px-4 py-4 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 bg-gray-100 rounded",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"pt-3",children:e.jsx(L,{className:"text-3xl text-gray-500"})}),e.jsxs("span",{children:[e.jsx("h3",{className:"text-gray-500",children:"Country"}),e.jsx("span",{className:"flex gap-2",children:e.jsx("input",{type:"text",value:s.Country,onChange:a=>i(a,l,"Country"),className:"border border-indigo-600 px-4 rounded py-1 w-full",placeholder:"nepal",required:!0})}),h&&e.jsxs("span",{children:[e.jsx("h3",{className:"text-gray-500",children:"City"}),e.jsx("input",{type:"text",value:s.City,onChange:a=>i(a,l,"City"),className:"border border-indigo-600  rounded py-0",placeholder:"Kathmandu",required:!0})]})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"pt-4",children:e.jsx(V,{className:"text-2xl text-gray-500"})}),e.jsxs("span",{children:[e.jsx("h3",{className:"text-gray-500",children:"Duration"}),e.jsx("input",{type:"text",value:s.Duration,onChange:a=>i(a,l,"Duration"),className:"border border-indigo-600 rounded py-1 px-4",placeholder:"9 Days",required:!0})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"pt-3",children:e.jsx(G,{className:"text-3xl text-gray-500",required:!0})}),e.jsxs("span",{children:[e.jsx("h3",{className:"text-gray-500",children:"Difficlty"}),e.jsx("input",{type:"text",value:s.Difficulty,onChange:a=>i(a,l,"Difficulty"),className:"border border-indigo-600 px-4 rounded py-1 w-full",placeholder:"Demanding?",required:!0})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"pt-2",children:e.jsx(U,{className:"text-3xl text-gray-500",required:!0})}),e.jsxs("span",{children:[e.jsx("h3",{className:"text-gray-500",children:"Activity"}),e.jsx("input",{type:"text",value:s.Activity,onChange:a=>i(a,l,"Activity"),className:"border border-indigo-600 px-4 rounded py-1 w-full",placeholder:"Trekking/Hiking",required:!0})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"pt-3",children:e.jsx(X,{className:"text-2xl text-gray-500",required:!0})}),e.jsxs("span",{children:[e.jsx("h3",{className:"text-gray-500",children:"Max. Altitude"}),e.jsx("input",{type:"text",value:s.MaxAltitude,onChange:a=>i(a,l,"MaxAltitude"),className:"border border-indigo-600 px-4 rounded py-1 w-full",placeholder:"3,860 m /12,664 ft",required:!0})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"pt-3",children:e.jsx(Y,{className:"text-3xl text-gray-500"})}),e.jsxs("span",{children:[e.jsx("h3",{className:"text-gray-600",children:"Best Season"}),e.jsx("input",{type:"text",value:s.BestSeason,onChange:a=>i(a,l,"BestSeason"),className:"border border-indigo-600 px-4 rounded py-1 w-full",placeholder:"Jan-Jun, Sep-Dec",required:!0})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"pt-2",children:e.jsx(z,{className:"text-3xl text-gray-500",required:!0})}),e.jsxs("span",{children:[e.jsx("h3",{className:"text-gray-600",children:"Accommodation"}),e.jsx("input",{type:"text",value:s.Accommodation,onChange:a=>i(a,l,"Accommodation"),className:"border border-indigo-600 px-4 rounded py-1 w-full",placeholder:"Tea House & Hotel?",required:!0})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"pt-2",children:e.jsx(F,{className:"text-3xl text-gray-500"})}),e.jsxs("span",{children:[e.jsx("h3",{className:"text-gray-600",children:" Meals"}),e.jsx("input",{type:"text",value:s.Meals,onChange:a=>i(a,l,"Meals"),className:"border border-indigo-600 px-4 rounded py-1 w-full",placeholder:"Included ?",required:!0})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"pt-2",children:e.jsx(K,{className:"text-3xl text-gray-500"})}),e.jsxs("span",{children:[e.jsx("h3",{className:"text-gray-600",children:"Start/End Point"}),e.jsx("input",{type:"text",value:s.Points,onChange:a=>i(a,l,"Points"),className:"border border-indigo-600 px-4 rounded py-1 w-full",placeholder:"kathmandu..../..",required:!0})]})]})]},l))]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-md font-bold",children:"Short Description"}),e.jsx("textarea",{type:"text",value:B,onChange:s=>E(s.target.value),className:"border w-full border-indigo-600 rounded px-4 py-1",placeholder:"In this short and less and strenuous trek, walk in the foothills of Mt. Everest and experience the amazing views of the giant mountain surrounding the region...",required:!0}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-md font-bold",children:"HighLight"}),e.jsxs("div",{className:"w-full  gap-2 ",children:[Array.isArray(x)&&x.map((s,l)=>e.jsx("div",{className:"my-2 w-full",children:e.jsx("input",{type:"text",value:s,onChange:a=>((d,r)=>{const{value:n}=d.target;g(c=>{const o=[...c];return o[r]=n,o})})(a,l),className:"border border-indigo-600 rounded w-full py-2 px-4",placeholder:"Write the highlight here...",required:!0})},l)),e.jsx("div",{children:e.jsx("button",{type:"button",style:{whiteSpace:"nowrap"},onClick:()=>{x[x.length-1]!==""&&g(s=>[...s,""])},className:"bg-blue-500 px-2 py-2 mt-2 rounded text-white",children:"Add More"})})]})]})]}),e.jsxs("div",{className:"",children:[p.map((s,l)=>e.jsxs("div",{children:[e.jsxs("div",{className:"w-full pt-10",children:[e.jsx("h3",{className:"text-md font-bold",children:"Itinerary Title"}),e.jsx("input",{type:"text",name:"question",value:s.question,onChange:a=>A(a,l),className:"border border-indigo-600 w-full px-4 py-2 rounded",placeholder:`Days ${l+1} : write Iternary title for day${l+1}...`,required:!0})]}),e.jsxs("div",{className:"w-full my-4",children:[e.jsx("h3",{className:"font-semibold",children:"Iternary Overview"}),e.jsx(S,{theme:"snow",value:s.answer,onChange:a=>A({target:{name:"answer",value:a}},l),modules:q,formats:C,placeholder:"Write the Answer...",style:{maxHeight:"30vh",height:"20vh"},required:!0})]})]},l)),e.jsx("button",{type:"button",onClick:()=>{j([...p,{day:"",faqQuestion:"",faqAnswer:""}])},className:"bg-blue-500 px-4 py-1 mt-12 rounded text-white",children:"Add More"})]}),e.jsxs("div",{className:"mt-4 w-full ",children:[e.jsx("h3",{className:"text-md font-bold",children:"Trek OverView"}),e.jsx(S,{theme:"snow",value:O,onChange:(s,l,a,d)=>{W(s)},modules:q,formats:C,style:{height:"40vh",borderRadius:"12px",borderColor:"#4f46e5"},placeholder:"Write the Overview of trek....",required:!0})]}),e.jsxs("div",{className:"mt-14",children:[e.jsx("h3",{className:"text-md py-1 font-bold",children:"Trek FAQs"}),$.map((s,l)=>e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:"Question"}),e.jsx("input",{type:"text",name:"faqQuestion",value:s.faqQuestion,onChange:a=>k(a,l),className:"border border-indigo-600 w-full py-1 px-4 rounded",placeholder:"write the title of faq...",required:!0})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("h3",{className:"font-semibold",children:"Answer"}),e.jsx("textarea",{type:"text",name:"faqAnswer",value:s.faqAnswer,onChange:a=>k(a,l),className:"border border-indigo-600 w-full py-10 px-4 rounded",placeholder:"write the overview of faq....",required:!0})]})]},l)),e.jsx("button",{type:"button",onClick:()=>{N(s=>[...s,{faqQuestion:"",faqAnswer:""}])},className:"bg-blue-500  px-4 rounded text-white",children:"Add More"})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("h3",{className:" text-md py-1 font-bold",children:"Price Includes"}),e.jsxs("div",{className:" flex  gap-2",children:[e.jsx("div",{className:"w-full",children:Array.isArray(u)&&u.map((s,l)=>e.jsx("div",{className:"w-full flex gap-4 py-2",children:e.jsx("input",{type:"text",value:s,onChange:a=>((d,r)=>{const{value:n}=d.target;f(c=>{const o=[...c];return o[r]=n,o})})(a,l),className:"border border-indigo-600 px-4 w-full py-1 rounded",placeholder:"priceInclude for trek...",required:!0})},l))}),e.jsx("div",{className:" mt-2",children:e.jsx("button",{type:"button",onClick:()=>{u[u.length-1]!==""&&f(s=>[...s,""])},style:{whiteSpace:"nowrap"},className:"bg-blue-500 px-2  py-1 rounded text-white",children:"Add More"})})]})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("h3",{className:" text-md py-1 font-bold",children:"Price Includes"}),e.jsxs("div",{className:" flex  gap-2",children:[e.jsx("div",{className:"w-full  ",children:Array.isArray(b)&&b.map((s,l)=>e.jsx("div",{className:"w-full",children:e.jsx(Z,{type:"text",value:s,onChange:a=>((d,r)=>{const{value:n}=d.target;v(c=>{const o=[...c];return o[r]=n,o})})(a,l),className:"border",required:!0})},l))}),e.jsx("div",{className:" mt-2",children:e.jsx("button",{type:"button",onClick:()=>{v(s=>[...s,""])},style:{whiteSpace:"nowrap"},className:"bg-blue-500 px-2  py-1 rounded text-white",children:"Add More"})})]})]}),e.jsx("div",{className:"my-2",children:e.jsx("button",{type:"submit",className:"bg-blue-500 px-2 w-full py-1 mt-2 rounded text-white",children:"submit"})})]})})};export{ae as default};