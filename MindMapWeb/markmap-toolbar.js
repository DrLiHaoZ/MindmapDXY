/*! markmap-toolbar v0.1.5 | MIT License */
!function(A,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((A="undefined"!=typeof globalThis?globalThis:A||self).markmap=A.markmap||{})}(this,(function(A){"use strict";
/*! @gera2ld/jsx-dom v1.2.1 | ISC License */var t=["innerHTML","innerText","textContent",{key:"value",tag:"textarea"}],e={name:"Fragment"};function r(A,t){var a,s;if(A===e)a=document.createDocumentFragment();else{if("string"!=typeof A)throw new Error("Invalid element type: "+A);var h=r.createElement(A);a=h,t&&Object.keys(t).forEach((function(e){var r=t[e];null!=r&&(e.startsWith("on")?h.addEventListener(e.slice(2).toLowerCase(),r):"children"===e?i(h,r):"style"===e&&"object"==typeof r?o(h,r):"dangerouslySetInnerHTML"===e&&r?h.innerHTML=r.__html||"":"ref"===e&&"function"==typeof r?s=r:"boolean"==typeof r?r?h.setAttribute(e,e):h.removeAttribute(e):n(A,e)?h[e]=r:("className"===e?e="class":"labelFor"===e&&(e="for"),h.setAttribute(e,""+r)))}))}for(var l=arguments.length,c=new Array(l>2?l-2:0),m=2;m<l;m++)c[m-2]=arguments[m];return i(a,c),s&&s(a),a}function n(A,e){var r={tag:A,key:e};return t.some((function(A){return"string"==typeof A?e===A:Object.keys(A).every((function(t){return A[t]===r[t]}))}))}function i(A,t){t.forEach((function(t){null!=t&&!1!==t&&(Array.isArray(t)?i(A,t):"object"!=typeof t?A.appendChild(document.createTextNode(""+t)):A.appendChild(t))}))}function o(A,t){Object.keys(t).forEach((function(e){var r=t[e];A.style[e]="number"==typeof r?r+"px":r}))}function a({title:A,content:t,onClick:e}){return r("div",{className:"mm-toolbar-item",title:A,innerHTML:t,onClick:e})}let s;r.createElement=function(A){return document.createElement(A)};class h{static create(A){const t=new h;return t.attach(A),t.render()}static icon(A){return`<svg width="20" height="20" viewBox="0 0 20 20" on:click={onZoomIn}><path fill="none" stroke-width="2" stroke="currentColor" d="${A}"/></svg>`}constructor(){this.showBrand=!0,this.registry={},this.markmap=null,this.items=["zoomIn","zoomOut","fit"],this.register({id:"zoomIn",title:"Zoom in",content:h.icon("M10 6 v8 M6 10 h8"),onClick:this.getHandler((A=>A.rescale(1.25)))}),this.register({id:"zoomOut",title:"Zoom out",content:h.icon("M6 10 h8"),onClick:this.getHandler((A=>A.rescale(.8)))}),this.register({id:"fit",title:"Fit window size",content:h.icon("M4 8 h3 v-3 M4 12 h3 v3 M16 8 h-3 v-3 M16 12 h-3 v3"),onClick:this.getHandler((A=>A.fit()))})}setBrand(A){this.showBrand=A}register(A){this.registry[A.id]=A}getHandler(A){var t;return t=A,A=async(...A)=>{if(!s){s=t(...A);try{await s}finally{s=null}}},t=>{this.markmap&&A(this.markmap)}}setItems(A){this.items=[...A]}attach(A){this.markmap=A}render(){const A=this.items.map((A=>{if("string"==typeof A){const t=this.registry[A];return t||console.warn(`[markmap-toolbar] ${A} not found`),t}return A})).filter(Boolean);return r("div",{className:"mm-toolbar"},this.showBrand&&r("div",{className:"mm-toolbar-brand"},r("img",{alt:"markmap",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACoFBMVEUAAAAAAAD//wAAAACAgAD//wAAAABVVQCqqgBAQACAQACAgABmZgBtbQAAAABgQABgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaFQAAAAAAAAAAAAAAAAAHAAARBQIdGAIYEwI/OgJYUQUfHQI+OgJDPgJJRARBPQRJQgRRSwRRTQRIQQRUTgRUUARZUgRSTQRPSQRjWgZORQRfWQZsZAhTTQRNRwRWUAZkXAZOSARUTgZPRwRRSQRoYwZWUQZWTgRbUwZmXQZoXghmXwdqYwdsYwdfVwVmXQdqYgdiWgVpYAl3bgl6cgl4cAqLggw8OAOWjA2Uig1OSAR2bQihlg55cAh5cAh6cQmMgwyOhAyUjA2QhQ2Uiw2Viw2soBCflA+voxGwpRGhlg+hlg+snxGroBGjmBCpnBC0pxKyphKxpRG2qhK0qBK5rBK5rBP/7h3/8B7/8R3/8h3/8R7/8h786x397B3+7R3EtxT66Rz66hz76hz86xz96xz97Bz+7Rz45xz56Bz76hz97Bz97B3MvRX15Rv25Rv45xz66Rz76hz97B3+7R3IuxX05Bv15Bv25Rz56Bz66Ry/sxPAsxPCtRTCthTNvxbZyxfczxfi0xjl1Rnn2Bnr2xrr3Brs3Rru3Rru3xrv3hrw3xrx4Bvx4Rvy4hvz4hvz4xv04xv05Bv14xv15Bv15Rv25Bv25Rv25Rz25hv35hv35xv45xv45xz55xz56Bv56Bz66Rv66Rz76Rv76Rz76hz86hv86xz+7h3/7R3/7h3/7x3/8B3/8B7/8R3/8R4Yqhj5AAAAq3RSTlMAAQECAgIDAwMEBAQFBwgICAwQERITFRYXGBkbHB0eHyQlJyguNTg8RUZISU5PV2FiY2RlZmdqa2xubnJzc3R2d3d3eXl5eXp7fH1+gIGCgoKDg4SEhIWGh4eHiYmJjIyMjZSUlJ+sra+zt7i4uru8ztHV1tbW2d7g4OHi4uPk5ufp7Ozv9fX29/f3+Pj6+vr7+/v7+/v7+/z8/Pz8/f39/f39/f3+/v7+/v7K6J1dAAACHklEQVQ4y2NgwAoYWdi5uLm5GXHIcrLCmMzYpDmAhKCKjoGtp40MFhVsDAwSxmmVEzZu2XvqSLkchjw3g0h445Ybd24vmTN1Usd5X3R5DgaNqgN35sycP2/GxMkTMRVwMOivvtO3YsWUm3duX790EcMKdgbNNXdnnJh1+9T6ipzU+FB0RzIyiFYB5WdfaElUF8TmTQ6GwH39J2bvypMHcpg4MAKKkUGo5s6KWRfyGRh4WJClGEGBCgS8DLobliy/3abMwM8NBYwQjXDgf3ryxOspyKYyg+RFTFwdnYDAzbrw+oLFm9Ot3J3AwNHFTBykQrhg++GDh48cOXzk4P6VZy8s230MyAGCwwcP7iyRBJpiur1n8hQIWHX27NkLi6bAwOSuow5ABeY7OydOhoCFIAULe6E8YFCf8QAqEC86evniZTA4tfLsuRXHr0E4ly9ePF0uC3KnpH1MZBQQxPoVgxyZ5RMdBQaRMc6yIEcihWbQGaA3k9G8CfQoN0pAtSoxCMACihk9qGtBQZ2LHtRIkRUMiqwd2TJADiswsrjQlAGju/o+MLrPNkWo8mFN1ewMWmvBCebQ0rKMJG87QzF0FRwMRuvugpLcrXu3rp7Zs61UCtMZ2nVHbk+fMX/+jMmTp3Sf9MLiULG45q237txaPG3yxPYrYQzYMo60RWbD3E27Ll68Uq+AK+uJqOlZBiSEKGLNnMA0iDfzwrI/NKgBOivk9piPdtUAAAAASUVORK5CYII="}),r("a",{href:"https://markmap.js.org/"},"markmap")),A.map(a))}}A.Toolbar=h}));