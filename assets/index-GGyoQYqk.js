import{_ as R,d as k,P as N,O as T,a as D}from"./PageFooter-kpgkHKcL.js";import{_ as x,r as c,a as p,o as a,b as o,d as e,n as _,w as f,F as v,e as n,f as b,g as F,t as S,h as V,p as B,i as w,l as h}from"./index-jFoUSGuL.js";import{_ as O}from"./倍数选择-pOGeQTkP.js";const X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAhtJREFUOE+VlEuojlEUhp+XIgOlUKRTBkRyiRR1MkQciYmkONFBKUUuISeXDMTMZYKJy0RMnQ4xEDEwUCaIIreS2znucln2W5v+/zv/9///2bPv22s9e631vnuLOisiRgGTJV11WETMAAZKulOWprKNiDgMbMz7C4FPwBlgItAFtEt6W8yvB3TSgpzwDvgOjMnfL4Cpkj70B7gSOA6sBr4AI4BHwDnguqSOWt31qTAiZqakcQlwDFgGbAcuA5+B5an1LcCNNNI9wENJlyrBtYBXgLnAswTZmuHjgWmp0m3APGAosMFjkDSkEbAbmA/cA04D31LiDmA04OrXAR+Bna5akuH/V60K24FZgGdkmxwBNgG9SZSTQGey0sVU6a00ggeS3Ho58N9ORBwA2nJrK4BhwCnAYk2QNKcpUSqAPnkv8Bo4m1tfaqNnkdok/e6PbW4Ds3PCPsCec7vD0zjsw1ZJFq5qKSI8R0n6U9yMiFXAdEmb89VbD7QAByXZRn2WgT2+n8Bu4JpNLOlJreBm/hkYOdCeW+uBAzdtD0n3m4FUqVwA2jJTKgIeA++BAbZIPsS+rFoR4Q5bgcXFCotAJ/5MJv6RCWskXcjzHOwHAlgC2FZjgef1gHfz1XuVlf0FDAL8Rtqfi/J/8236/en7aD2g7/RIq9xgjhayQ9JTxzXTchnvpV8eSefLRNmVn6dJDSp6A5wADkn6Woz9CxvYs3+lxWVWAAAAAElFTkSuQmCC",u=t=>(B("data-v-e1c5613d"),t=t(),w(),t),E={key:0,class:"task-setting__expand"},J={class:"header"},U={class:"setting-item"},z=u(()=>e("div",{class:"label"},[e("img",{src:O}),e("span",null,"倍数选择")],-1)),M={class:"flex justify-center mt-[auto] mb-[35px] confirm"},W={key:0,class:"w-full h-full flex items-center flex-col pt-[120px]"},P=u(()=>e("img",{class:"nodrag h-fit w-[50%] translate-x-[5px]",src:R,alt:""},null,-1)),$=u(()=>e("div",{class:"mt-[20px] opacity-50"},"无分析结果",-1)),j=[P,$],K={key:1,class:"setting-item"},Q=u(()=>e("div",{class:"label"},[e("img",{src:X}),e("span",null,"性能指标")],-1)),q={class:"footer"},Z=u(()=>e("i",{class:"iconfont icon-bg-backward"},null,-1)),L=[Z],H={__name:"TaskSetting",setup(t){const r=c(!0),i=c("task"),d=c("X2"),m=c([{name:"PSNR",value:33.13},{name:"SSIM",value:8962}]);return(g,s)=>{const A=p("el-option"),y=p("el-select"),C=p("el-button");return r.value?(a(),o("div",E,[e("div",J,[e("span",{class:_(["cursor-pointer",{activeTab:i.value==="task"}]),onClick:s[0]||(s[0]=f(l=>i.value="task",["stop"]))},"任务设置",2),e("span",{class:_(["cursor-pointer",{activeTab:i.value==="result"}]),onClick:s[1]||(s[1]=f(l=>i.value="result",["stop"]))},"结果分析",2)]),i.value==="task"?(a(),o(v,{key:0},[e("div",U,[z,n(y,{modelValue:d.value,"onUpdate:modelValue":s[2]||(s[2]=l=>d.value=l),class:"select",placeholder:"Select",size:"large"},{default:b(()=>[n(A,{label:"X2",value:"X2"}),n(A,{label:"X4",value:"X4"})]),_:1},8,["modelValue"])]),e("div",M,[n(C,{type:"primary"},{default:b(()=>[V("确认")]),_:1})])],64)):(a(),o(v,{key:1},[g.noResult?(a(),o("div",W,j)):(a(),o("div",K,[Q,(a(!0),o(v,null,F(m.value,(l,I)=>(a(),o("div",{class:"result-item",key:I},S(l.name)+": "+S(l.value),1))),128))]))],64)),e("div",q,[e("i",{class:"collapse-btn cursor-pointer icon-bg-forward iconfont",onClick:s[3]||(s[3]=l=>r.value=!1)})])])):(a(),o("div",{key:1,class:"task-setting__btn",onClick:s[4]||(s[4]=l=>r.value=!0)},L))}}},G=x(H,[["__scopeId","data-v-e1c5613d"]]),Y=t=>(B("data-v-9b5b3004"),t=t(),w(),t),ee={class:"image-registration"},se={class:"content flex-1 flex"},te=Y(()=>e("div",{class:"w-[9px]"},null,-1)),ae={__name:"index",setup(t){const r=c(k),i=c(k),d=c("left");return(m,g)=>(a(),o("div",ee,[n(N),e("div",se,[e("div",{class:_(["left flex-1",d.value==="left"&&"active"]),style:h({backgroundImage:`url(${r.value})`})},[n(T,{class:"img-btn"})],6),te,e("div",{class:_(["right flex-1",d.value==="right"&&"active"]),style:h({backgroundImage:`url(${i.value})`})},[n(G,{class:"task-setting"})],6)]),n(D)]))}},ie=x(ae,[["__scopeId","data-v-9b5b3004"]]);export{ie as default};
