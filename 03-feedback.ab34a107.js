!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,i,a,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,u=setTimeout(x,t),s?p(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function x(){var e=b();if(O(e))return _(e);u=setTimeout(x,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function _(e){return u=void 0,m&&r?p(e):(r=i=void 0,f)}function h(){var e=b(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return j(l);if(d)return u=setTimeout(x,t),p(l)}return void 0===u&&(u=setTimeout(x,t)),f}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},h.flush=function(){return void 0===u?f:_(b())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},O=localStorage.getItem("feedback_form_state");if(O){var x=JSON.parse(O);j.email.value=x.email,j.textarea.value=x.message}else j.form.addEventListener("input",e(t)((function(){var e={email:j.email.value,message:j.textarea.value};localStorage.setItem("feedback_form_state",JSON.stringify(e))}),500));j.form.addEventListener("submit",(function(e){e.preventDefault(),function(){var e=localStorage.getItem("feedback_form_state");if(e){var t=JSON.parse(e);console.log("email:",t.email),console.log("message:",t.message),localStorage.clear(),j.form.reset()}}()}))}();
//# sourceMappingURL=03-feedback.ab34a107.js.map