import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */const o={email:" ",message:" "},r=document.querySelector(".feedback-form"),t=r.querySelector("input"),a=r.querySelector("textarea");t.addEventListener("input",n);a.addEventListener("input",n);const l=JSON.parse(localStorage.getItem("feedback-form-state"));l&&(t.value=l.email,a.value=l.message);function n(e){const s=e.target.value,m=e.target.name;o[m]=s.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(o))}r.addEventListener("submit",u);function u(e){if(e.preventDefault(),t.value===""||a.value===""){alert("Fill please all fields");return}console.log(o),t.value="",a.value="",localStorage.removeItem("feedback-form-state")}
//# sourceMappingURL=2-form.js.map
