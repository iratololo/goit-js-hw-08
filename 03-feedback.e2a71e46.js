var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function w(e){return c=e,f=setTimeout(j,t),l?y(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=i}function j(){var e=d();if(T(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-u);return v?m(n,i-(e-c)):n}(e))}function h(e){return f=void 0,b&&o?y(e):(o=r=void 0,a)}function O(){var e=d(),n=T(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return w(u);if(v)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},O.flush=function(){return void 0===f?a:h(d())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form")};b.form.addEventListener("input",t((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),window.addEventListener("load",(function(){const e=localStorage.getItem("feedback-form-state");var t;const n=null!==(t=JSON.parse(e))&&void 0!==t?t:"";b.form.elements.email.value=n.email||"",b.form.elements.message.value=n.message||""})),b.form.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:n}=e.currentTarget.elements;y.email=t.value,y.message=n.value,console.log(y),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));const y={};
//# sourceMappingURL=03-feedback.e2a71e46.js.map
