import{T as k,O as w,i as V,s as g,a as b}from"./bg-C1kzXL4B.js";import{_ as y,r as p,a as m,o as i,c as T,w as l,b as e,d as s,e as u,F as S,f as A,n as U,h as $,i as B,p as C,j as D,t as L}from"./index-Bsm45mSK.js";import{T as P}from"./task-title-BeYttYmc.js";import{i as E,a as F,p as N,b as O,n as R,c as j}from"./next-active-CFuYh67b.js";import{s as H,a as q}from"./save-path-active-9pYJUlOr.js";const z=a=>(C("data-v-e8e33588"),a=a(),D(),a),G={class:"item"},J=z(()=>e("div",{class:"head row"},[e("div",{class:"col"},"目标类别"),e("div",{class:"col"},"中心位置"),e("div",{class:"col"},"目标大小"),e("div",{class:"col"})],-1)),K={class:"body row"},M={class:"col"},Q={class:"col"},W={class:"col"},X={class:"col"},Y={__name:"task-setting",setup(a){const c=p([{type:"c1",position:"x1,y1",shape:"w*h"},{type:"c1",position:"x1,y1",shape:"w*h"},{type:"c1",position:"x1,y1",shape:"w*h"},{type:"c1",position:"x1,y1",shape:"w*h"},{type:"c1",position:"x1,y1",shape:"w*h"},{type:"c1",position:"x1,y1",shape:"w*h"},{type:"c1",position:"x1,y1",shape:"w*h"},{type:"c1",position:"x1,y1",shape:"w*h"},{type:"c1",position:"x1,y1",shape:"w*h"},{type:"c1",position:"x1,y1",shape:"w*h"}]),n=p(),d=()=>{c.value.push({type:"c1",position:"x1,y1",shape:"w*h"}),U(()=>{n.value.scrollTo(0,n.value.scrollHeight)})},h=r=>{c.value.splice(r,1)};return(r,ae)=>{const _=$,I=m("Delete"),v=B,f=m("Plus");return i(),T(k,{class:"task-setting",noresult:""},{"task-content":l(()=>[e("div",G,[s(P,{name:"标注结果"}),e("div",{ref_key:"resultRef",ref:n,class:"result-list"},[J,(i(!0),u(S,null,A(c.value,(o,x)=>(i(),u("div",K,[e("div",M,[s(_,{modelValue:o.type,"onUpdate:modelValue":t=>o.type=t},null,8,["modelValue","onUpdate:modelValue"])]),e("div",Q,[s(_,{modelValue:o.position,"onUpdate:modelValue":t=>o.position=t},null,8,["modelValue","onUpdate:modelValue"])]),e("div",W,[s(_,{modelValue:o.shape,"onUpdate:modelValue":t=>o.shape=t},null,8,["modelValue","onUpdate:modelValue"])]),e("div",X,[s(v,{color:"#fff",class:"delete",onClick:t=>h(x)},{default:l(()=>[s(I)]),_:2},1032,["onClick"])])]))),256))],512)]),e("div",{class:"add",onClick:d},[s(v,{color:"#68d6e5"},{default:l(()=>[s(f)]),_:1})])]),"result-content":l(()=>[]),_:1})}}},Z=y(Y,[["__scopeId","data-v-e8e33588"]]),ee={class:"data-annotation__annotation"},se=["src"],oe={class:"status"},te={__name:"index",setup(a){const c=p(V),n=[{icon:E,activeIcon:F,name:"导入",callback(){}},{icon:H,activeIcon:q,name:"存储路径",callback(){}},{icon:N,activeIcon:O,name:"上一张",callback(){}},{icon:R,activeIcon:j,name:"下一张",callback(){}},{icon:g,activeIcon:b,name:"保存",callback(){}}],d=p("未检测");return(h,r)=>(i(),u("div",ee,[e("img",{src:c.value,alt:""},null,8,se),e("span",oe,L(d.value),1),s(w,{class:"operation",operationList:n}),s(Z,{class:"task-setting"})]))}},de=y(te,[["__scopeId","data-v-3d505f9c"]]);export{de as default};