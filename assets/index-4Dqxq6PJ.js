import{_ as y,r as m,a as x,o as _,c as T,w as o,b as s,d as e,e as u,F as S,f as $,t as r,g as v,n as w,i as B,p as A,k as C,z as D}from"./index-Dg6GLEow.js";/* empty css                */import{T as L,O as E,i as k,s as N,a as P}from"./bg-BmeRMb_B.js";import{T as g}from"./task-title-BWxQVVZL.js";import{p as R,a as V,n as F,b as O}from"./next-active-B-bKIs_A.js";const c=l=>(A("data-v-8437828c"),l=l(),C(),l),z={class:"item table-list"},H=c(()=>s("div",{class:"head row"},[s("div",{class:"col"},"测点序号"),s("div",{class:"col"},"测点坐标"),s("div",{class:"col"},"厚度尺寸"),s("div",{class:"col"},"人工修正"),s("div",{class:"col"})],-1)),U={class:"body row"},j={class:"col"},q={class:"col"},G=c(()=>s("br",null,null,-1)),J={class:"col"},K={class:"col"},M={class:"col"},Q={class:"item"},W=c(()=>s("div",{class:"inference-item"},[s("div",{class:"label"},"当前模型:"),s("div",{class:"value"})],-1)),X=c(()=>s("div",{class:"inference-item"},[s("div",{class:"label"},"ioU:"),s("div",{class:"value"})],-1)),Y=c(()=>s("div",{class:"inference-item"},[s("div",{class:"label"},"Recall:"),s("div",{class:"value"})],-1)),Z=c(()=>s("div",{class:"inference-item"},[s("div",{class:"label"},"Precision:"),s("div",{class:"value"})],-1)),ss={__name:"task-setting",setup(l){const a=m([{order:1,position:["x1,y1","x2,y2"],shape:"10mm*10mm",hand:"10mm*10mm"},{order:2,position:["x1,y1","x2,y2"],shape:"10mm*10mm",hand:"10mm*10mm"}]),p=t=>{a.value.splice(t,1)},n=m(),h=async()=>{var t;a.value.push({order:((t=a.value.at(-1))==null?void 0:t.order)+1||1,position:["x1,y1","x2,y2"],shape:"10mm*10mm",hand:"10mm*10mm"}),w(()=>{n.value.scrollTo(0,n.value.scrollHeight)})};return(t,i)=>{const I=x("Delete"),f=B,b=x("Plus");return _(),T(L,{class:"task-setting",fixedTab:"result"},{"task-content":o(()=>[]),"result-content":o(()=>[s("div",z,[e(g,{name:"检测结果"}),s("div",{ref_key:"resultRef",ref:n,class:"result-list"},[H,(_(!0),u(S,null,$(a.value,d=>(_(),u("div",U,[s("div",j,r(d.order),1),s("div",q,[v(r(d.position[0]),1),G,v(r(d.position[1]),1)]),s("div",J,r(d.shape),1),s("div",K,r(d.hand),1),s("div",M,[e(f,{color:"#fff",class:"delete",onClick:i[0]||(i[0]=is=>p(t.index))},{default:o(()=>[e(I)]),_:1})])]))),256))],512)]),s("div",{class:"add",onClick:h},[e(f,{color:"#68d6e5"},{default:o(()=>[e(b)]),_:1})]),s("div",Q,[e(g,{name:"推理结果"}),W,X,Y,Z])]),_:1})}}},es=y(ss,[["__scopeId","data-v-8437828c"]]),ts={class:"result-display"},as={class:"left"},os=["src"],cs={class:"right"},ls=["src"],ns={__name:"index",setup(l){const a=m(k),p=m(k),n=[{icon:R,activeIcon:V,name:"上一张",callback(){}},{icon:F,activeIcon:O,name:"下一张",callback(){}},{icon:N,activeIcon:P,name:"保存",callback(){}}];return(h,t)=>{const i=D;return _(),u("div",ts,[s("div",as,[s("img",{src:a.value,alt:""},null,8,os),e(i,{type:"primary"},{default:o(()=>[v("输入")]),_:1})]),s("div",cs,[s("img",{src:p.value,alt:""},null,8,ls),e(i,{type:"primary"},{default:o(()=>[v("输出")]),_:1})]),e(E,{class:"operation",operationList:n}),e(es,{class:"task-setting"})])}}},ps=y(ns,[["__scopeId","data-v-d8401703"]]);export{ps as default};