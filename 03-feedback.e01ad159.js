!function(){function e(e){return e&&e.__esModule?e.default:e}var t;t=function(e,t){var a,n,r,o,l=0;return function(){a=this,n=arguments;var e=new Date-l;return o||(e>=t?u():o=setTimeout(u,t-e)),r};function u(){o=0,l=+new Date,r=e.apply(a,n),a=null,n=null}};var a=document.querySelector(".feedback-form");a.addEventListener("input",e(t)((function(e){o[e.target.name]=e.target.value,localStorage.setItem(r,JSON.stringify(o)),console.log(o)}),500)),a.addEventListener("submit",(function(e){e.preventDefault(),o.email&&o.message&&(console.log(o),o.email="",o.message="",e.currentTarget.reset(),localStorage.removeItem(r))}));var n,r="feedback-form-state",o={};(n=JSON.parse(localStorage.getItem(r)))&&(a.input.value=n.email,a.textarea.value=n.message)}();
//# sourceMappingURL=03-feedback.e01ad159.js.map