const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d,a;t.addEventListener("click",(function(){d=setInterval((()=>{a=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,document.body.style.backgroundColor=a}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(d),e.disabled=!0,t.disabled=!1})),e.disabled=!0;
//# sourceMappingURL=01-color-switcher.aa3e0d41.js.map