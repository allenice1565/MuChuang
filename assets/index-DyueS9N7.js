import{T as w,O as B,i as D,s as O,a as S}from"./bg-CmujLVjq.js";import{_ as G,r as t,o as c,c as d,w as b,b as n,d as a,e as g,F as N,f as T,l as V,E as W,g as h,m as J,q as C,t as z}from"./index-sBihLD4G.js";/* empty css                  */import{T as m}from"./task-title-BzwLZb3t.js";const y={class:"item"},Q={class:"item"},F={class:"item"},r={__name:"task-setting",setup(U){const i=t(),s=t(),I=t(),u=t([{label:"型号1",value:"1"},{label:"型号2",value:"2"},{label:"型号3",value:"3"},{label:"型号4",value:"4"},{label:"型号5",value:"5"},{label:"型号6",value:"6"},{label:"型号7",value:"7"},{label:"型号8",value:"8"}]);t(!1);const A=t(),R=t([{label:"检测数量",value:"number"},{label:"合格率",value:"rate"}]),o=t(!1),Z=v=>{v?A.value=R.value.map(e=>e.value):A.value=[]},k=()=>{A.value.length===R.value.length?o.value=!0:o.value=!1};return(v,e)=>{const E=V,j=W,Y=h,M=J,p=C;return c(),d(w,{class:"task-setting",noresult:""},{"task-content":b(()=>[n("div",y,[a(m,{name:"统计范围"}),a(E,{class:"date-picker",modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=l=>i.value=l),type:"date",placeholder:"开始时间","default-value":new Date,teleported:!1},null,8,["modelValue","default-value"]),a(E,{class:"date-picker",modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=l=>s.value=l),type:"date",placeholder:"结束时间","default-value":new Date,teleported:!1},null,8,["modelValue","default-value"])]),n("div",Q,[a(m,{name:"型号信息"}),a(Y,{modelValue:I.value,"onUpdate:modelValue":e[2]||(e[2]=l=>I.value=l),placeholder:"请选择",teleported:!1},{default:b(()=>[(c(!0),g(N,null,T(u.value,l=>(c(),d(j,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),n("div",F,[a(m,{name:"统计信息"}),a(M,{label:"全选",modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=l=>o.value=l),onChange:Z},null,8,["modelValue"]),a(p,{modelValue:A.value,"onUpdate:modelValue":e[4]||(e[4]=l=>A.value=l)},{default:b(()=>[(c(!0),g(N,null,T(R.value,l=>(c(),d(M,{key:l.value,label:l.label,value:l.value,onChange:k},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),"result-content":b(()=>[]),_:1})}}},H=G(r,[["__scopeId","data-v-13d34bda"]]),X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5MzUyNjRCMDIwOTExRUY4OURBQjkyNTI0MEYwNDU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5MzUyNjRDMDIwOTExRUY4OURBQjkyNTI0MEYwNDU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTkzNTI2NDkwMjA5MTFFRjg5REFCOTI1MjQwRjA0NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTkzNTI2NEEwMjA5MTFFRjg5REFCOTI1MjQwRjA0NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7xOeyyAAACEklEQVR42sTWQWsTQRTA8aSGCBGM1oaWIqK0tUQL0R5sKagn68UK9VLB6LUieij0I4TiQdSbFkT8AKXUgxRsEQ9tDQgtAaFpEdtDNDUEwYNpD8r6n/AWHkvd3WRDHPix2cnMvJ3Z2ZkJW5YValaK+CzXgxGcRgrt2ME68ljEmmcrpmcuLuON5S8t47pbe2GXYXyOcXU/jyVsoYQjOIELuKnKzeI2Kn579kE98TR6PUYggYyqs46jznL7VXwnFSoY9gjidFYCmfQZByW/D0ln4UdScBfdNQaymVezKe08k7xq0oXOqGG4WGcgbVvaei/Xr/rPecl8HSBACht4iBnHbL1vF+pRmScDBLvi8mnEW2RSXpKrmdbbARaJBZzDU3xX+XP4aT9Rp0yOoQa8K1sEd/DEHq1wM9fGllAT038JZq4ZpHGgge0nMIWkXhsn1BQtYEqWnqCT5IW0+UqvjV/+8W08CBjsl7Rzw9yb4RvEKdX1FTxGcd9twn+aRAxl2XaqPZuV6DnsoYTDAXvUjj/SblpvMQXJbMU9+V3EoQDBVqWdrHM/O49rKjMrBXfQX2MQsxJ9lPo/zHrotXlG8UlNErMDt3kEiclkqkidMrr8nkGieIlbcv8bM3IO2ZKJY15+B4YximNS1pxTxvCt1tPVCFZ8nq7yuFvv6UqnAVyVz+Q44tiVp89Jj996NdLUVf+vAAMA35NgnNda3bIAAAAASUVORK5CYII=",L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNBMTAyOEI3MDIwOTExRUZBRjQ3OTJBRDk4NjUxODUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNBMTAyOEI4MDIwOTExRUZBRjQ3OTJBRDk4NjUxODUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0ExMDI4QjUwMjA5MTFFRkFGNDc5MkFEOTg2NTE4NTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0ExMDI4QjYwMjA5MTFFRkFGNDc5MkFEOTg2NTE4NTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6UVHqlAAACaElEQVR42ryWTUiUURSGVSRIF4kihkoh2Q8aWS7UWiQuNAgGalUaQdCilUQRRbgLygQV24S0aGPQJiTcDFgEURhRFP2YWYi6mSK0SGgqSKbnDO8Xl8HG76fmwMOde7lz3++ce++5Jz+VSuXlyvL/JlZcttntWicGW6ABKuAjTMFbuAvP3T98W3wfWKwVzsJ+Hx8+AX0wFkZsmOaEMxSHhzALn6AENkATHHbmjcJRxJK+xBB6RNOi7jUYhOksXpXDSehR30K7B8EvWcUQukfTBt/hAIwHOAP1cAu2wYz1EfzJmtv5vVyQIdQvoR+wI6CQ2STUgW3YJhjS+Ct488czhOo02WwvPIh40udgI9zXQUu4ng2oHcP1sEIN2tvL8FRjrWp7057hlZ3zdxqsQWwu4575tfYsoS8pdMJmNmtCEUJ3B3bCMejU5Te7zbpfPc8qGThtd4TBiRUySBgzR7pgF1wxJ/ymq8C2UgYpyMuh5VSsUCEz0QtKMzcJwfK/WJx1LY2dghHWnPI88/LaCMwz6ZJST1TrhfNwzg1jtzOhShNeZ4yHsU4vUaTF8MKye03Gu2RZ/gMkI4TwDE0RLBDC0XTWLyqttR8H4SVshSWoVRvW7DInFDl72254YWzShDZd7HLlt+IIYnGt/dgT8sSstogx+Bmu2gRYr/eoMaCIZaInyhr2cO5b7fFcQ/PMOY0X9S4tZBGxvTmuGmQtLEIzHz/jpywwwetwREO/9ALHVYMkJWAR6NCel2mu1SmHEEoEra5iuga7fYRwWhEYDlvKedas+Ns1qYZ1qlHs61/I4/HQdeP/sN8CDADQouRf/zsX6QAAAABJRU5ErkJggg==",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NjY2OEUxMDIwOTExRUY4OURBQjkyNTI0MEYwNDU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NjY2OEUyMDIwOTExRUY4OURBQjkyNTI0MEYwNDU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0OUJFRjMwMjA5MTFFRjg5REFCOTI1MjQwRjA0NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk2NjY4RTAwMjA5MTFFRjg5REFCOTI1MjQwRjA0NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5wPYydAAABhElEQVR42mL8//8/A70AEwMdAbplJkC8A4jfA/FfIP5NBP4HxM+BOJ2gbaBghGKD/5QDKyTzMDAjUpztAmJXID4KxJVA/JqEEEoC4lIg/gXEukB8i5DPPkJdJ4vPdXjwDKj+T0AsiU0NNstEybQMhK9CzbgBxCzo8sgJ5A+U5qQgwdkC8V0gVgfiRlon/XdA3AtlW9Ajnx0C4idAvBhdgoUGll0FYllalyDiQHwNiDfTo7gSAmJNIPYB4umE8tlbaLKVoyDpuwDxc6g5GejypMQZPxB7QrPGXyzyoDLyMRCfBGJ/qO9A2WkOOT6bR2Z5SZbPVkFTGTOuMh2a5K2AWAUqdoqWcaYGxPeg5izEVzZSalkHUtDNxaaGmknfC4jfAnELECdjU0DNEkSPlGYBLOJ/UcFiAyCWwWcZK5T+TqFFoJR4Hoh347PsLJTuAmIxIOYlAxsC8RaoOefRLUNugxgD8Rkqxd8LIFZCDyV0n3kD8UUKLAGlxqVQH37H5zOaA4AAAwBid7NJGvonTAAAAABJRU5ErkJggg==",P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNBNDY5QzlGMDIwOTExRUZBRjQ3OTJBRDk4NjUxODUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNBNDY5Q0EwMDIwOTExRUZBRjQ3OTJBRDk4NjUxODUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0EyMzY5RjYwMjA5MTFFRkFGNDc5MkFEOTg2NTE4NTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E0NjlDOUUwMjA5MTFFRkFGNDc5MkFEOTg2NTE4NTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4djFtwAAABpUlEQVR42ryWTStEURjHZxgLCUWxQdEgCxpRRJYWXspHEBbmC1jYURZSskRkMbKxZaEslKKIJguErEYhjZI00nD9Tj23rnFdc1/mPvXr3JfT+Z//Oc95CWqaFvAr8gI+Rsj4UlRe304xAx1QAl9ZtJEPjzAFy/rHt+TNr4pBfRgRilDEXXa+Gw7/EjM6m5PyACbhyYbIKEzAHjTDtVklo7MXGboaepXg3a6rJRiHV2ikjftsEuTd4RBG4QKKlUM6G7ISS0tZ6GLOeuBWOYPpXKf+M8zLc6cf62wf7mDdcp15FOdQbZb6XjqrlATZ8mO7KoMmGITFXItdQi88qGVA6kfdzFkp9MnS+DT5r/bRBBzBkHKHYJq5W3UitgAjNt2ugCOxTZVlssubhSYp3wVh+XbsdBh3BKtoMNSJMYTDuUqQWbiCWljLFPJarB+ScviO/XtSu4wWO3cQfeI/PBCOkPZVVmIFUqZcCoXlerFrJXaqXw/oVYUcgnZphW1pJ251LWijOPFo/tSWVUdGpkyd8UM5G4AzFyIqGzeUw0yhH878iG8BBgBF53SJPO3KwwAAAABJRU5ErkJggg==",f={class:"data-annotation__statistics"},K=["src"],_={class:"status"},q={__name:"index",setup(U){const i=t(D),s=[{icon:X,activeIcon:L,name:"更新",callback(){}},{icon:O,activeIcon:S,name:"保存",callback(){}},{icon:x,activeIcon:P,name:"导出",callback(){}}],I=t("未检测");return(u,A)=>(c(),g("div",f,[n("img",{src:i.value,alt:""},null,8,K),n("span",_,z(I.value),1),a(B,{class:"operation",operationList:s}),a(H,{class:"task-setting"})]))}},al=G(q,[["__scopeId","data-v-993e0e20"]]);export{al as default};
