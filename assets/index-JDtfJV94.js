import{_ as S,d as x,P as V,O as C,a as T}from"./PageFooter-2yN3I2J1.js";import{_ as h,r as n,a as m,o as d,b as r,d as e,n as p,w as b,F as z,e as s,f,h as B,p as y,i as I,l as k}from"./index-KaYSQ5gA.js";const _=a=>(y("data-v-fe0edbe6"),a=a(),I(),a),F={key:0,class:"task-setting__expand"},N={class:"header"},P={class:"setting-item"},O=_(()=>e("div",{class:"label"},[e("i",{class:"iconfont icon-gudingtuxiang"}),e("span",null,"固定图像")],-1)),U={class:"setting-item"},j=_(()=>e("div",{class:"label"},[e("i",{class:"iconfont icon-fudongtuxiang"}),e("span",null,"浮动图像")],-1)),E={class:"flex justify-center mt-[auto] mb-[35px] confirm"},H={key:1,class:"w-full h-full flex items-center flex-col pt-[120px]"},M=_(()=>e("img",{class:"nodrag h-fit w-[50%] translate-x-[5px]",src:S,alt:""},null,-1)),q=_(()=>e("div",{class:"mt-[20px] opacity-50"},"无分析结果",-1)),A=[M,q],D={class:"footer"},G=_(()=>e("i",{class:"iconfont icon-bg-backward"},null,-1)),J=[G],K={__name:"TaskSetting",setup(a){const i=n(!0),o=n("task"),c=n("图像1"),v=n("图像2");return($,t)=>{const u=m("el-option"),g=m("el-select"),w=m("el-button");return i.value?(d(),r("div",F,[e("div",N,[e("span",{class:p(["cursor-pointer",{activeTab:o.value==="task"}]),onClick:t[0]||(t[0]=b(l=>o.value="task",["stop"]))},"任务设置",2),e("span",{class:p(["cursor-pointer",{activeTab:o.value==="result"}]),onClick:t[1]||(t[1]=b(l=>o.value="result",["stop"]))},"结果分析",2)]),o.value==="task"?(d(),r(z,{key:0},[e("div",P,[O,s(g,{modelValue:c.value,"onUpdate:modelValue":t[2]||(t[2]=l=>c.value=l),class:"select",placeholder:"Select",size:"large"},{default:f(()=>[s(u,{label:"图像1",value:"图像1"}),s(u,{label:"图像2",value:"图像2"})]),_:1},8,["modelValue"])]),e("div",U,[j,s(g,{modelValue:v.value,"onUpdate:modelValue":t[3]||(t[3]=l=>v.value=l),class:"select",placeholder:"Select",size:"large"},{default:f(()=>[s(u,{label:"图像1",value:"图像1"}),s(u,{label:"图像2",value:"图像2"})]),_:1},8,["modelValue"])]),e("div",E,[s(w,{type:"primary"},{default:f(()=>[B("确认")]),_:1})])],64)):(d(),r("div",H,A)),e("div",D,[e("i",{class:"collapse-btn cursor-pointer icon-bg-forward iconfont",onClick:t[4]||(t[4]=l=>i.value=!1)})])])):(d(),r("div",{key:1,class:"task-setting__btn",onClick:t[5]||(t[5]=l=>i.value=!0)},J))}}},L=h(K,[["__scopeId","data-v-fe0edbe6"]]),Q=a=>(y("data-v-12a421a7"),a=a(),I(),a),R={class:"image-registration"},W={class:"content flex-1 flex"},X=Q(()=>e("div",{class:"w-[9px]"},null,-1)),Y={__name:"index",setup(a){const i=n(x),o=n(x),c=n("left");return(v,$)=>(d(),r("div",R,[s(V),e("div",W,[e("div",{class:p(["left flex-1",c.value==="left"&&"active"]),style:k({backgroundImage:`url(${i.value})`})},[s(C,{class:"img-btn"})],6),X,e("div",{class:p(["right flex-1",c.value==="right"&&"active"]),style:k({backgroundImage:`url(${o.value})`})},[s(L,{class:"task-setting"})],6)]),s(T)]))}},te=h(Y,[["__scopeId","data-v-12a421a7"]]);export{te as default};
