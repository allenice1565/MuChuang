import{_ as V,r as l,o as t,c as b,w as o,a as e,b as a,d,F as f,e as k,t as i,f as v,E as T,g as $,p as B,h as w,q as E}from"./index-1cUO9OlD.js";import{T as O,O as L,i as S,s as A,a as N}from"./bg-1S8KEzA0.js";/* empty css                     *//* empty css                  */import{T as u}from"./task-title-C62V-N4m.js";import{i as U,a as z}from"./import-active-CzK2bnbf.js";import{a as F,b as R}from"./analyze-active-DulCwjj0.js";const c=n=>(B("data-v-1a2cb69b"),n=n(),w(),n),q={class:"item"},C=c(()=>e("span",{class:"item-title"},"模型参数设置",-1)),D={class:"item"},P={class:"item"},j=c(()=>e("div",{class:"head row"},[e("div",{class:"col"},"测点序号"),e("div",{class:"col"},"测点坐标"),e("div",{class:"col"},"厚度尺寸"),e("div",{class:"col"},"人工修正")],-1)),G={class:"body row"},H={class:"col"},J={class:"col"},K=c(()=>e("br",null,null,-1)),M={class:"col"},Q={class:"col"},W={class:"item"},X=c(()=>e("div",{class:"inference-item"},[e("div",{class:"label"},"ioU:"),e("div",{class:"value"})],-1)),Y=c(()=>e("div",{class:"inference-item"},[e("div",{class:"label"},"Recall:"),e("div",{class:"value"})],-1)),Z=c(()=>e("div",{class:"inference-item"},[e("div",{class:"label"},"Precision:"),e("div",{class:"value"})],-1)),ee={__name:"task-setting",setup(n){const r=l(),p=l([{label:"型号1",value:"1"},{label:"型号2",value:"2"}]),_=l(),g=l([{label:"型号1",value:"1"},{label:"型号2",value:"2"}]),y=l([{order:"1",position:["x1,y1","x2,y2"],shape:"10mm*10mm",hand:"10mm*10mm"},{order:"2",position:["x1,y1","x2,y2"],shape:"10mm*10mm",hand:"10mm*10mm"}]);return(h,m)=>{const I=T,x=$;return t(),b(O,{class:"task-setting"},{"task-content":o(()=>[e("div",q,[C,a(u,{name:"检测模型"}),a(x,{modelValue:r.value,"onUpdate:modelValue":m[0]||(m[0]=s=>r.value=s),placeholder:"请选择",teleported:!1},{default:o(()=>[(t(!0),d(f,null,k(p.value,s=>(t(),b(I,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),e("div",D,[a(u,{name:"置信度"}),a(x,{modelValue:_.value,"onUpdate:modelValue":m[1]||(m[1]=s=>_.value=s),placeholder:"请选择",teleported:!1},{default:o(()=>[(t(!0),d(f,null,k(g.value,s=>(t(),b(I,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),"result-content":o(()=>[e("div",P,[a(u,{name:"检测结果"}),j,(t(!0),d(f,null,k(y.value,s=>(t(),d("div",G,[e("div",H,i(s.order),1),e("div",J,[v(i(s.position[0]),1),K,v(i(s.position[1]),1)]),e("div",M,i(s.shape),1),e("div",Q,i(s.hand),1)]))),256))]),e("div",W,[a(u,{name:"推理结果"}),X,Y,Z])]),_:1})}}},se=V(ee,[["__scopeId","data-v-1a2cb69b"]]),ae={class:"model-inference"},te={class:"left"},le=["src"],oe={class:"right"},ce=["src"],ne={__name:"index",setup(n){const r=l(S),p=l(S),_=[{icon:U,activeIcon:z,name:"导入",callback(){}},{icon:F,activeIcon:R,name:"处理分析",callback(){}},{icon:A,activeIcon:N,name:"保存",callback(){}}];return(g,y)=>{const h=E;return t(),d("div",ae,[e("div",te,[e("img",{src:r.value,alt:""},null,8,le),a(h,{type:"primary"},{default:o(()=>[v("输入")]),_:1})]),e("div",oe,[e("img",{src:p.value,alt:""},null,8,ce),a(h,{type:"primary"},{default:o(()=>[v("输出")]),_:1})]),a(L,{class:"operation",operationList:_}),a(se,{class:"task-setting"})])}}},pe=V(ne,[["__scopeId","data-v-0135c08b"]]);export{pe as default};