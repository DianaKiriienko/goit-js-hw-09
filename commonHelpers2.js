import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const e=document.querySelector(".feedback-form"),l="feedback-form-state",a=JSON.parse(localStorage.getItem(l));a&&(e.elements.email.value=a.email||"",e.elements.message.value=a.message||"");e.addEventListener("input",m=>{const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem(l,JSON.stringify(t))});e.addEventListener("submit",m=>{if(m.preventDefault(),e.elements.email.value===""||e.elements.message.value===""){alert("Please fill in both email and message fields");return}const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};console.log(t),localStorage.removeItem(l),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map
