function e(e){return e&&e.__esModule?e.default:e}var t;t=function(e,t){var n,a,o,r,c=0;return function(){n=this,a=arguments;var e=new Date-c;return r||(e>=t?l():r=setTimeout(l,t-e)),o};function l(){r=0,c=+new Date,o=e.apply(n,a),n=null,a=null}};const n=document.querySelector(".feedback-form");n.addEventListener("input",e(t)((function(e){a[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(a)),console.log(a)}),500)),n.addEventListener("submit",(function(e){e.preventDefault(),a.email&&a.message&&(console.log(a),a.email="",a.message="",e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"))}));const a={};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&Object.entries(e).forEach((([e,t])=>{n.elements[e].value=t}))}();
//# sourceMappingURL=03-feedback.f8485970.js.map