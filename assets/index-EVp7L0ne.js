import{T as F,_ as L,d as y,P as N,a as O,O as D}from"./PageFooter-2z9kJUMA.js";import{_ as E}from"./分析范围-lQTfSQzi.js";import{_ as H}from"./检测类别-kAAcXD2e.js";import{_ as R}from"./检测参数-fZx4e1AJ.js";import{_ as j}from"./检测结果-XKWGbxLp.js";import{_ as I,r as a,l as q,a as v,o as c,b as A,w as b,d as e,e as t,f as m,F as G,g as J,t as h,p as U,h as $,n as z,k as S}from"./index-zLWoI0JG.js";const i=o=>(U("data-v-e89755e3"),o=o(),$(),o),K={class:"setting-item"},M=i(()=>e("div",{class:"label"},[e("img",{src:E}),e("span",null,"分析范围")],-1)),Q={class:"setting-item"},W=i(()=>e("div",{class:"label"},[e("img",{src:H}),e("span",null,"检测类别")],-1)),X={class:"ml-[34px] flex flex-col"},Y={class:"flex flex-wrap"},Z={class:"setting-item"},ee=i(()=>e("div",{class:"label"},[e("img",{src:R}),e("span",null,"检测参数")],-1)),le={class:"ml-[30px] mt-[20px]"},se=i(()=>e("div",{class:"text-[16px] font-[500]"},"置信度",-1)),te=i(()=>e("div",{class:"text-[16px] font-[500] mt-[20px]"},"滑窗大小",-1)),ae={key:0,class:"w-full h-full flex items-center flex-col pt-[120px]"},oe=i(()=>e("img",{class:"nodrag h-fit w-[50%] translate-x-[5px]",src:L,alt:""},null,-1)),ne=i(()=>e("div",{class:"mt-[20px] opacity-50"},"无分析结果",-1)),ie=[oe,ne],de={key:1,class:"setting-item"},ce=i(()=>e("div",{class:"label"},[e("img",{src:j}),e("span",null,"检测结果")],-1)),ue=i(()=>e("div",{class:"table-wrapper"},[e("div",{class:"table-item"},"目标类别"),e("div",{class:"table-item"},"中心位置"),e("div",{class:"table-item"},"目标大小")],-1)),me={class:"table-item"},re={class:"table-item"},_e={class:"table-item"},pe={__name:"TaskSetting",setup(o){const r=a("whole"),_=a(),u=a(),n=a(!1),p=a(!1),f=a(!1),g=a(!1),x=a(!1),V=a(!1),B=a([{type:"c1",centerPosition:"x1.y1",size:"w*h"}]);return q(()=>n.value,()=>{p.value=n.value,f.value=n.value,g.value=n.value,x.value=n.value,V.value=n.value}),(C,s)=>{const w=v("el-option"),P=v("el-select"),d=v("el-checkbox"),k=v("el-input");return c(),A(F,null,{"task-content":b(()=>[e("div",K,[M,t(P,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=l=>r.value=l),class:"select",placeholder:"Select",size:"large"},{default:b(()=>[t(w,{label:"全图范围",value:"whole"}),t(w,{label:"绘制范围",value:"draw"})]),_:1},8,["modelValue"])]),e("div",Q,[W,e("div",X,[t(d,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=l=>n.value=l),label:"全选",size:"large"},null,8,["modelValue"]),e("div",Y,[t(d,{modelValue:p.value,"onUpdate:modelValue":s[2]||(s[2]=l=>p.value=l),label:"舰船",size:"large",class:"flex-[30%]"},null,8,["modelValue"]),t(d,{modelValue:g.value,"onUpdate:modelValue":s[3]||(s[3]=l=>g.value=l),label:"桥梁",size:"large",class:"flex-[30%]"},null,8,["modelValue"]),t(d,{modelValue:x.value,"onUpdate:modelValue":s[4]||(s[4]=l=>x.value=l),label:"飞机",size:"large",class:"flex-[30%]"},null,8,["modelValue"]),t(d,{modelValue:f.value,"onUpdate:modelValue":s[5]||(s[5]=l=>f.value=l),label:"建筑",size:"large",class:"flex-[30%]"},null,8,["modelValue"]),t(d,{modelValue:V.value,"onUpdate:modelValue":s[6]||(s[6]=l=>V.value=l),label:"油罐",size:"large",class:"flex-[30%]"},null,8,["modelValue"])])])]),e("div",Z,[ee,e("div",le,[se,t(k,{modelValue:_.value,"onUpdate:modelValue":s[7]||(s[7]=l=>_.value=l),placeholder:"请输入",class:"mt-[15px]"},null,8,["modelValue"]),te,t(k,{modelValue:u.value,"onUpdate:modelValue":s[8]||(s[8]=l=>u.value=l),placeholder:"请输入",class:"mt-[15px]"},null,8,["modelValue"])])])]),"result-content":b(()=>[C.noResult?(c(),m("div",ae,ie)):(c(),m("div",de,[ce,ue,(c(!0),m(G,null,J(B.value,(l,T)=>(c(),m("div",{key:T,class:"table-wrapper"},[e("div",me,h(l.type),1),e("div",re,h(l.centerPosition),1),e("div",_e,h(l.size),1)]))),128))]))]),_:1})}}},ve=I(pe,[["__scopeId","data-v-e89755e3"]]),fe=o=>(U("data-v-ce9d3121"),o=o(),$(),o),ge={class:"image-SceneLocation"},xe={class:"content flex-1 flex"},Ve=fe(()=>e("div",{class:"w-[9px]"},null,-1)),be={__name:"index",setup(o){const r=a(y),_=a(y),u=a("left");return(n,p)=>(c(),m("div",ge,[t(N),e("div",xe,[e("div",{class:z(["left flex-1",u.value==="left"&&"active"]),style:S({backgroundImage:`url(${r.value})`})},null,6),Ve,e("div",{class:z(["right flex-1",u.value==="right"&&"active"]),style:S({backgroundImage:`url(${_.value})`})},null,6)]),t(O),t(D,{class:"img-btn"}),t(ve,{class:"task-setting"})]))}},Ie=I(be,[["__scopeId","data-v-ce9d3121"]]);export{Ie as default};
