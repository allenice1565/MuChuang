import{T as V,d as g,P as k,a as S,O as I}from"./PageFooter-2z9kJUMA.js";import{_ as z,a as C,b as $}from"./算法设置-cNUHmYHT.js";import{r as t,a as u,o as h,b as w,w as p,d as e,e as l,_ as B,f as U,n as x,k as f,p as y,h as T}from"./index-zLWoI0JG.js";const P={class:"setting-item"},N=e("div",{class:"label"},[e("img",{src:z}),e("span",null,"检测方式")],-1),O={class:"setting-item"},A=e("div",{class:"label"},[e("img",{src:C}),e("span",null,"检测设置")],-1),D={class:"ml-[34px] flex flex-col"},E={class:"setting-item"},F=e("div",{class:"label"},[e("img",{src:$}),e("span",null,"算法设置")],-1),H={class:"ml-[30px] mt-[20px]"},j=e("div",{class:"text-[16px] font-[500]"},"模型选择",-1),q=e("div",{class:"text-[16px] font-[500] mt-[20px]"},"检测阈值",-1),G={__name:"TaskSetting",setup(o){const c=t("manual"),i=t(),n=t(!1),_=t(!1),m=t("算法1");return(R,s)=>{const d=u("el-option"),r=u("el-select"),v=u("el-checkbox"),b=u("el-input");return h(),w(V,null,{"task-content":p(()=>[e("div",P,[N,l(r,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=a=>c.value=a),class:"select",placeholder:"Select",size:"large"},{default:p(()=>[l(d,{label:"手动变化检测",value:"manual"}),l(d,{label:"自动变化检测",value:"auto"})]),_:1},8,["modelValue"])]),e("div",O,[A,e("div",D,[l(v,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=a=>n.value=a),label:"所有变化",size:"large"},null,8,["modelValue"]),l(v,{modelValue:_.value,"onUpdate:modelValue":s[2]||(s[2]=a=>_.value=a),label:"建筑",size:"large"},null,8,["modelValue"])])]),e("div",E,[F,e("div",H,[j,l(r,{modelValue:m.value,"onUpdate:modelValue":s[3]||(s[3]=a=>m.value=a),class:"select mt-[15px] !w-full",placeholder:"请选择",size:"large"},{default:p(()=>[l(d,{label:"算法1",value:"算法1"}),l(d,{label:"算法2",value:"算法2"})]),_:1},8,["modelValue"]),q,l(b,{modelValue:i.value,"onUpdate:modelValue":s[4]||(s[4]=a=>i.value=a),placeholder:"请输入",class:"mt-[15px]"},null,8,["modelValue"])])])]),_:1})}}},J=o=>(y("data-v-be9276a2"),o=o(),T(),o),K={class:"image-AllogenicChangeDetection"},L={class:"content flex-1 flex"},M=J(()=>e("div",{class:"w-[9px]"},null,-1)),Q={__name:"index",setup(o){const c=t(g),i=t(g),n=t("left");return(_,m)=>(h(),U("div",K,[l(k),e("div",L,[e("div",{class:x(["left flex-1",n.value==="left"&&"active"]),style:f({backgroundImage:`url(${c.value})`})},null,6),M,e("div",{class:x(["right flex-1",n.value==="right"&&"active"]),style:f({backgroundImage:`url(${i.value})`})},null,6)]),l(S),l(I,{class:"img-btn"}),l(G,{class:"task-setting"})]))}},Z=B(Q,[["__scopeId","data-v-be9276a2"]]);export{Z as default};