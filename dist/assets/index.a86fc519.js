import{$ as e}from"./vendor.1035d005.js";const n=document.querySelector(".slides"),{mainTransition:r}={mainTransition:"fade"};!function(){for(let t=1;t<=14;t++){const s=document.createElement("section");s.setAttribute("data-transition",r),s.innerHTML=`<img src="${e=t,`./slide-${e}.png`}" alt="">`,null==n||n.appendChild(s)}var e}();const t=new e,{slideNumber:s,controls:i,progress:o}={slideNumber:!0,controls:!0,progress:!0};t.initialize({slideNumber:s,controls:i,progress:o});
