import{T,_ as B,d as h,P as C,a as P,O as F}from"./PageFooter-2z9kJUMA.js";import{_ as O}from"./分析范围-lQTfSQzi.js";import{_ as D}from"./检测类别-kAAcXD2e.js";import{_ as N}from"./检测参数-fZx4e1AJ.js";import{_ as E}from"./检测结果-XKWGbxLp.js";import{_ as w,r as n,a as p,o as c,b as H,w as g,d as e,e as t,f as m,F as L,g as R,t as x,p as y,h as z,n as b,k}from"./index-zLWoI0JG.js";const i=o=>(y("data-v-6c26230a"),o=o(),z(),o),j={class:"setting-item"},q=i(()=>e("div",{class:"label"},[e("img",{src:O}),e("span",null,"分析范围")],-1)),A={class:"setting-item"},G=i(()=>e("div",{class:"label"},[e("img",{src:D}),e("span",null,"检测类别")],-1)),J={class:"ml-[34px] flex flex-col"},K={class:"flex flex-wrap"},M={class:"setting-item"},Q=i(()=>e("div",{class:"label"},[e("img",{src:N}),e("span",null,"检测参数")],-1)),W={class:"ml-[30px] mt-[20px]"},X=i(()=>e("div",{class:"text-[16px] font-[500] text-[#687692]"}," 置信度 ",-1)),Y=i(()=>e("div",{class:"text-[16px] font-[500] mt-[20px] text-[#687692]"}," 滑窗大小 ",-1)),Z={key:0,class:"w-full h-full flex items-center flex-col pt-[120px]"},ee=i(()=>e("img",{class:"nodrag h-fit w-[50%] translate-x-[5px]",src:B,alt:""},null,-1)),le=i(()=>e("div",{class:"mt-[20px] opacity-50"},"无分析结果",-1)),se=[ee,le],te={key:1,class:"setting-item"},ae=i(()=>e("div",{class:"label"},[e("img",{src:E}),e("span",null,"检测结果")],-1)),oe=i(()=>e("div",{class:"table-wrapper"},[e("div",{class:"table-item"},"目标类别"),e("div",{class:"table-item"},"中心位置"),e("div",{class:"table-item"},"目标大小")],-1)),ne={class:"table-item"},ie={class:"table-item"},de={class:"table-item"},ce={__name:"TaskSetting",setup(o){const r=n("whole"),_=n(),u=n(!1),a=n(!1),v=n(),S=n([{type:"c1",centerPosition:"x1.y1",size:"w*h"}]);return(I,s)=>{const f=p("el-option"),U=p("el-select"),d=p("el-checkbox"),V=p("el-input");return c(),H(T,null,{"task-content":g(()=>[e("div",j,[q,t(U,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=l=>r.value=l),class:"select",placeholder:"Select",size:"large"},{default:g(()=>[t(f,{label:"全图范围",value:"whole"}),t(f,{label:"绘制范围",value:"draw"})]),_:1},8,["modelValue"])]),e("div",A,[G,e("div",J,[t(d,{modelValue:u.value,"onUpdate:modelValue":s[1]||(s[1]=l=>u.value=l),label:"全选",size:"large"},null,8,["modelValue"]),e("div",K,[t(d,{modelValue:a.value,"onUpdate:modelValue":s[2]||(s[2]=l=>a.value=l),label:"舰船",size:"large",class:"flex-[30%]"},null,8,["modelValue"]),t(d,{modelValue:a.value,"onUpdate:modelValue":s[3]||(s[3]=l=>a.value=l),label:"桥梁",size:"large",class:"flex-[30%]"},null,8,["modelValue"]),t(d,{modelValue:a.value,"onUpdate:modelValue":s[4]||(s[4]=l=>a.value=l),label:"飞机",size:"large",class:"flex-[30%]"},null,8,["modelValue"]),t(d,{modelValue:a.value,"onUpdate:modelValue":s[5]||(s[5]=l=>a.value=l),label:"建筑",size:"large",class:"flex-[30%]"},null,8,["modelValue"]),t(d,{modelValue:a.value,"onUpdate:modelValue":s[6]||(s[6]=l=>a.value=l),label:"油罐",size:"large",class:"flex-[30%]"},null,8,["modelValue"])])])]),e("div",M,[Q,e("div",W,[X,t(V,{modelValue:_.value,"onUpdate:modelValue":s[7]||(s[7]=l=>_.value=l),placeholder:"请输入",class:"mt-[15px]"},null,8,["modelValue"]),Y,t(V,{modelValue:v.value,"onUpdate:modelValue":s[8]||(s[8]=l=>v.value=l),placeholder:"请输入",class:"mt-[15px]"},null,8,["modelValue"])])])]),"result-content":g(()=>[I.noResult?(c(),m("div",Z,se)):(c(),m("div",te,[ae,oe,(c(!0),m(L,null,R(S.value,(l,$)=>(c(),m("div",{key:$,class:"table-wrapper"},[e("div",ne,x(l.type),1),e("div",ie,x(l.centerPosition),1),e("div",de,x(l.size),1)]))),128))]))]),_:1})}}},ue=w(ce,[["__scopeId","data-v-6c26230a"]]),me=o=>(y("data-v-6037ac17"),o=o(),z(),o),re={class:"image-OpticalImageTargetDetection"},_e={class:"content flex-1 flex"},pe=me(()=>e("div",{class:"w-[9px]"},null,-1)),ve={__name:"index",setup(o){const r=n(h),_=n(h),u=n("left");return(a,v)=>(c(),m("div",re,[t(C),e("div",_e,[e("div",{class:b(["left flex-1",u.value==="left"&&"active"]),style:k({backgroundImage:`url(${r.value})`})},null,6),pe,e("div",{class:b(["right flex-1",u.value==="right"&&"active"]),style:k({backgroundImage:`url(${_.value})`})},null,6)]),t(P),t(F,{class:"img-btn"}),t(ue,{class:"task-setting"})]))}},ke=w(ve,[["__scopeId","data-v-6037ac17"]]);export{ke as default};