function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,i,r,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,u=setTimeout(j,t),c?y(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function j(){var e=g();if(O(e))return h(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,r-(e-l)):n}(e))}function h(e){return u=void 0,v&&o?y(e):(o=i=void 0,a)}function w(){var e=g(),n=O(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(b(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},w.flush=function(){return void 0===u?a:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),S=(document.querySelector("input[type]"),localStorage.getItem("feedback-form-state"));!function(){if(!JSON.parse(S))return y.elements.message.value="",void(y.elements.email.value="");y.elements.email.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,y.elements.message.value=JSON.parse(localStorage.getItem("feedback-form-state")).message}(),y.addEventListener("input",e(t)((function(){const e={email:y.elements.email.value,message:y.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))||""),y.elements.email.value="",y.elements.message.value="",localStorage.clear()}));
//# sourceMappingURL=03-feedback.a93a6e36.js.map