!function(){function e(e){return e&&e.__esModule?e.default:e}var t;t=function(e,t){var a,r,n,l,o=0;return function(){a=this,r=arguments;var e=new Date-o;return l||(e>=t?u():l=setTimeout(u,t-e)),n};function u(){l=0,o=+new Date,n=e.apply(a,r),a=null,r=null}};var a=document.querySelector(".feedback-form");a.addEventListener("input",e(t)((function(e){n[e.target.name]=e.target.value,localStorage.setItem(r,JSON.stringify(n)),console.log(n)}),500)),a.addEventListener("submit",(function(e){e.preventDefault(),n.email&&n.message&&(console.log(n),n.email="",n.message="",e.currentTarget.reset(),localStorage.removeItem(r))}));var r="feedback-form-state",n={};!function(){var e=JSON.parse(localStorage.getItem(r));if(e){var t=a.querySelector("input"),l=a.querySelector("textarea");t.value=e.email?e.email:"",l.value=e.message?e.message:"",n.email=e.email,n.message=e.message}}()}();
//# sourceMappingURL=03-feedback.128a270a.js.map