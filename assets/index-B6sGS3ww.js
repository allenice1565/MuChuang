import{_ as b,r as t,a as k,o as h,c as B,w as d,b as e,d as o,t as C,e as V,F as D,f as E,n as L,h as R,i as z,p as F,j as N,z as O,u as x}from"./index-sBihLD4G.js";/* empty css                */import{T as P,O as j,i as g,s as H,a as q}from"./bg-CmujLVjq.js";import{T as v}from"./task-title-BzwLZb3t.js";import{i as G,a as J,p as K,b as M,n as Q,c as W}from"./next-active-CFuYh67b.js";import{a as X,b as Y}from"./analyze-active-DulCwjj0.js";const S=i=>(F("data-v-cad480ed"),i=i(),N(),i),Z={class:"item"},ee=S(()=>e("span",{class:"item-title"},"模型参数设置",-1)),oe={class:"item"},ae={class:"item"},se={class:"item table-list"},le=S(()=>e("div",{class:"head row"},[e("div",{class:"col"},"测点序号"),e("div",{class:"col"},"测点坐标"),e("div",{class:"col"},"厚度尺寸"),e("div",{class:"col"},"人工修正"),e("div",{class:"col"})],-1)),te={class:"body row"},ne={class:"col"},ce={class:"col"},de={class:"col"},ie={class:"col"},re={class:"col"},me={__name:"task-setting",setup(i){const m=t(),p=t({}),u=t(),f=t(1),r=t([{order:1,position:["x1,y1","x2,y2"],shape:"10mm*10mm",hand:"10mm*10mm"},{order:2,position:["x1,y1","x2,y2"],shape:"10mm*10mm",hand:"10mm*10mm"}]),_=s=>{r.value.splice(s,1)},I=t(),U=async()=>{var s;r.value.push({order:((s=r.value.at(-1))==null?void 0:s.order)+1||1,position:["x1,y1","x2,y2"],shape:"10mm*10mm",hand:"10mm*10mm"}),L(()=>{I.value.scrollTo(0,I.value.scrollHeight)})},T=()=>{m.value.click()},$=s=>{p.value=s.target.files[0]};return(s,n)=>{const c=R,A=k("Delete"),y=z,w=k("Plus");return h(),B(P,{class:"task-setting"},{"task-content":d(()=>[e("div",Z,[ee,o(v,{name:"检测模型"}),e("div",{class:"model-path",onClick:T},C(p.value.name||"请选择"),1),e("input",{ref_key:"fileInputRef",ref:m,type:"file",style:{display:"none"},onInput:$},null,544)]),e("div",oe,[o(v,{name:"IOU"}),o(c,{type:"number","placeholder-class":"placeholderStyle",modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=a=>u.value=a),placeholder:"请输入"},null,8,["modelValue"])]),e("div",ae,[o(v,{name:"比例尺"}),o(c,{type:"number","placeholder-class":"placeholderStyle",modelValue:f.value,"onUpdate:modelValue":n[1]||(n[1]=a=>f.value=a),placeholder:"请输入"},null,8,["modelValue"])])]),"result-content":d(()=>[e("div",se,[o(v,{name:"检测结果"}),e("div",{ref_key:"resultRef",ref:I,class:"result-list"},[le,(h(!0),V(D,null,E(r.value,a=>(h(),V("div",te,[e("div",ne,[o(c,{modelValue:a.order,"onUpdate:modelValue":l=>a.order=l},null,8,["modelValue","onUpdate:modelValue"])]),e("div",ce,[o(c,{modelValue:a.position,"onUpdate:modelValue":l=>a.position=l},null,8,["modelValue","onUpdate:modelValue"])]),e("div",de,[o(c,{modelValue:a.shape,"onUpdate:modelValue":l=>a.shape=l},null,8,["modelValue","onUpdate:modelValue"])]),e("div",ie,[o(c,{modelValue:a.hand,"onUpdate:modelValue":l=>a.hand=l},null,8,["modelValue","onUpdate:modelValue"])]),e("div",re,[o(y,{color:"#fff",class:"delete",onClick:n[2]||(n[2]=l=>_(s.index))},{default:d(()=>[o(A)]),_:1})])]))),256))],512)]),e("div",{class:"add",onClick:U},[o(y,{color:"#68d6e5"},{default:d(()=>[o(w)]),_:1})])]),_:1})}}},pe=b(me,[["__scopeId","data-v-cad480ed"]]),ue={class:"model-inference"},_e={class:"left"},ve=["src"],he={class:"right"},fe=["src"],Ie={__name:"index",setup(i){const m=t(g),p=t(g),u=[{icon:G,activeIcon:J,name:"导入",callback(){}},{icon:K,activeIcon:M,name:"上一张",callback(){}},{icon:Q,activeIcon:W,name:"下一张",callback(){}},{icon:X,activeIcon:Y,name:"处理分析",callback(){}},{icon:H,activeIcon:q,name:"保存",callback(){}}];return(f,r)=>{const _=O;return h(),V("div",ue,[e("div",_e,[e("img",{src:m.value,alt:""},null,8,ve),o(_,{type:"primary"},{default:d(()=>[x("输入")]),_:1})]),e("div",he,[e("img",{src:p.value,alt:""},null,8,fe),o(_,{type:"primary"},{default:d(()=>[x("输出")]),_:1})]),o(j,{class:"operation",operationList:u}),o(pe,{class:"task-setting"})])}}},Se=b(Ie,[["__scopeId","data-v-303bb3c1"]]);export{Se as default};