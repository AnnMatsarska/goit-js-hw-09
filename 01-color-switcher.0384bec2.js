const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d;t.addEventListener("click",(function(){d=setInterval((()=>{randomColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,document.body.style.backgroundColor=randomColor}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(d),e.disabled=!0,t.disabled=!1})),e.disabled=!0;
//# sourceMappingURL=01-color-switcher.0384bec2.js.map