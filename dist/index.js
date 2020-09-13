!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e){function n(t){return function(t){if(Array.isArray(t))return t}(t)||r(t)||a(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return function(t){if(Array.isArray(t))return s(t)}(t)||r(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function r(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function c(){var t;if(t=document.getElementById("alpine-devtools-script"))window.alpineDevToolsScriptURL=t.src;else{var e=(new Error).stack.split("\n"),n=(e=(e=e.find((function(t){return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(t)}))).match(/(https?:\/\/[^ ]*)/)[1]).lastIndexOf(".js");e=e.slice(0,n),Array.isArray(e)&&(e=e[0]),window.alpineDevToolsScriptURL=e+".js"}}window.alpineDevToolsHandler=function(t){return{alpines:[],open:!1,observer:null,windowRef:null,start:function(){this.alpines=document.querySelectorAll("[x-data]:not(#alpine-devtools)"),this.alpines&&(this.registerAlpines(this.alpines),sessionStorage.getItem("alpine-devtools")&&(this.openWindow(),this.updateAlpines()))},registerAlpines:function(t){var e=this;this.observer=new MutationObserver((function(t){e.updateAlpines()})),t.forEach((function(t){t.setAttribute("x-bind:data-last-refresh","Date.now()"),e.observer.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0})}))},updateAlpines:function(){if(this.checkIfNewAlpinesWereAddedAndRegisterThem(),this.windowRef&&!this.windowRef.editing){this.windowRef.alpines=this.alpines;var t=this.windowRef.document.querySelector("#alpine-devtools-viewer");if(!t)return;if(t.__x.$data.editing.length)return;void 0!==t.__x&&t.__x.updateElements(t)}},checkIfNewAlpinesWereAddedAndRegisterThem:function(){var t=this,e=o(document.querySelectorAll("[x-data]:not(#alpine-devtools)")).filter((function(e){return!o(t.alpines).includes(e)}));e&&(this.alpines=document.querySelectorAll("[x-data]:not(#alpine-devtools)"),this.registerAlpines(e))},openWindow:function(){if(this.windowRef=window.open("","alpine-devtools","width=450, height=650, left=100, top=100"),!this.windowRef)return sessionStorage.removeItem("alpine-devtools");if(this.windowRef.document.body.style.backgroundColor="#1a202c",this.windowRef.document.body.innerHTML="",this.windowRef.document.title="Alpine DevTools",this.windowRef.alpines=this.alpines,!this.windowRef.document.getElementById("alpine-devtools-script")){var t=this.windowRef.document.createElement("script");t.id="alpine-devtools-script";var e=window.Alpine.version||"2.x.x";t.src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v".concat(e,"/dist/alpine.min.js"),this.windowRef.document.head.appendChild(t)}if(!this.windowRef.document.getElementById("tailwindcss-devtools-style")){var n=this.windowRef.document.createElement("link");n.id="tailwindcss-devtools-style",n.href="https://unpkg.com/tailwindcss@^1.x/dist/tailwind.min.css",n.rel="stylesheet",this.windowRef.document.head.appendChild(n)}if(!this.windowRef.document.getElementById("devtools-script")){var i=this.windowRef.document.createElement("script");i.id="devtools-script",i.setAttribute("type","text/javascript"),i.src=window.alpineDevToolsScriptURL,this.windowRef.document.head.appendChild(i)}this.setUpPopupData()},setUpPopupData:function(){var t=this,e=this.windowRef.document.createElement("div");e.id="alpine-devtools-viewer",e.setAttribute("x-data","window.alpineDevToolsViewer(window.alpines)"),e.innerHTML=this.viewerHTML(),sessionStorage.setItem("alpine-devtools",this.windowRef.name),this.open=!0,setTimeout((function(){t.windowRef.document.body.appendChild(e)}),500),this.windowRef.addEventListener("beforeunload",(function(){sessionStorage.removeItem("alpine-devtools"),t.windowRef=null,t.open=!1}))},viewerHTML:function(){return'\n            <div\n                class="flex flex-col justify-between fixed inset-0 bg-gray-900 text-gray-400 py-2 max-w-screen overflow-hidden"\n                x-cloak\n                x-show="open">\n\t\t\t\t<div\n\t\t\t\t\tclass="divide-y-2 divide-gray-800 space-y-5 -mt-5 pb-5 p-2 overflow-scroll">\n\t\t\t\t\t<template x-for="(alpine, i) in [...alpines]" :key="i">\n                        <div class="pt-5">\n                            <div class="pl-4 overflow-hidden">\n                                <div x-text="computeTitle(alpine)" class="mb-1 -ml-3 font-extrabold" style="color:#d8dee9"></div>\n                                <template x-if="!getAlpineData(alpine).length"><p class="text-sm">No data found</p></template>\n                                <template x-for="[key, value] of getAlpineData(alpine)" :key="key">\n                                    <div\n                                        class="leading-none"\n                                        x-html="getItem(key, value, i)"\n                                        x-show="getType(value) !== \'function\'">\n                                    </div>\n                                </template>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</template>\n                </div>\n                <div\n                    x-html="getStatusMessage()"\n                    class="border-t border-gray-700 text-gray-500 leading-none mx-2" style="font-size:11px; padding-top:5px;">\n                </div>\n\t\t\t</div>'}}},window.alpineDevToolsViewer=function(){return{editing:"",computeTitle:function(t){return t.getAttribute("x-title")||t.getAttribute("aria-label")||t.getAttribute("x-id")||t.id||this.convertFunctionName(t.getAttribute("x-data"))||"<".concat(t.tagName.toLowerCase(),">")},getAlpineData:function(t){return t.__x?Object.entries(t.__x.getUnobservedData()):[]},getType:function(t){return Array.isArray(t)?"array":"function"==typeof t?"function":i(t)},updateAlpine:function(t,e,n,i){switch(t){case"boolean":window.alpines[e].__x.$data[n]="true"!==i;break;case"string":window.alpines[e].__x.$data[n]=i}},getItem:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=Date.now()+Math.floor(1e6*Math.random()),o=this.getType(e);return'\n            <span class="relative py-1 pl-2 '.concat("string"===o?"flex":"inline-block",'">\n                <span class="absolute left-0 -ml-3">\n                    ').concat(this.getGutterAction(i,o,n,t,e),'\n                </span>\n\t\t\t\t<span style="color:#4aea8b" class="text-serif whitespace-no-wrap mr-2">\n\t\t\t\t\t<label for="').concat(i,'" class="inline-block" style="min-width:1rem">').concat(t,'</label>\n\t\t\t\t\t<span class="text-white">:</span>\n\t\t\t\t\t<span style="color:#8ac0cf" class="bg-gray-800 px-1 text-xs">').concat(o,'</span>\n\t\t\t\t</span>\n                <span\n                    class="relative w-full ').concat("boolean"===o?"cursor-pointer":"",'"\n                    style="color:#d8dee9">\n                        <span\n                            x-show="editing !== \'').concat(n,"-").concat(t,"'\"\n                            :class=\"{'absolute': editing === '").concat(n,"-").concat(t,'\'}"\n                            class="relative z-10">\n                            ').concat(this.getValue(i,o,n,t,e),"\n                        </span>\n                        ").concat(this.getEditField(i,o,n,t,e),"\n                </span>\n\t\t\t</span>")},getEditField:function(t,e,n,i,o){switch(e){case"string":return'<span\n                        x-ref="editor-'.concat(n,"-").concat(i,'"\n                        x-show="editing === \'').concat(n,"-").concat(i,'\'"\n                        style="display:none"\n                        contenteditable="true"\n                        class="block relative z-30 p-2 bg-gray-200 text-black text-sm focus:outline-none"\n                        :class="{\'z-50\': editing === \'').concat(n,"-").concat(i,"'}\"\n                        @click.away=\"editing = ''\"\n                        @keydown.enter.prevent.stop=\"\n                            editing = ''\n                            updateAlpine('").concat(e,"', '").concat(n,"', '").concat(i,"', $event.target.textContent.trim());\n                        \"\n                        @keydown.escape.stop=\"\n                            updateAlpine('").concat(e,"', '").concat(n,"', '").concat(i,"', $event.target.parentNode.querySelector('.editable-content').textContent.trim());\n                            editing = ''\n                        \"\n                        @input.stop=\"updateAlpine('").concat(e,"', '").concat(n,"', '").concat(i,"', $event.target.textContent.trim())\">\n                        ").concat(o,"\n                    </span>")}return""},getGutterAction:function(t,e,n,i,o){switch(e){case"boolean":return'\n                        <input\n                            id="'.concat(t,'"\n                            style="margin-top:3px;"\n                            type="checkbox"\n                            :checked="').concat(o,"\"\n                            @change.stop=\"updateAlpine('boolean', '").concat(n,"', '").concat(i,"', '").concat(o,"')\">");case"string":return null===n?"":'\n                        <button\n                            id="'.concat(t,'"\n                            @click="openEditorAndSelectText(\'').concat(n,"', '").concat(i,'\')"\n                            class="transition duration-200 w-4 mt-px text-white focus:outline-none">\n                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">\n                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />\n                            </svg>\n                        </button>');default:return""}},openEditorAndSelectText:function(t,e){var n=this;if(this.editing==="".concat(t,"-").concat(e))return this.updateAlpine("string",t,e,this.$refs["editor-".concat(t,"-").concat(e)].textContent.trim()),void(this.editing="");this.editing="".concat(t,"-").concat(e),this.$nextTick((function(){n.$refs["editor-".concat(t,"-").concat(e)].focus(),document.execCommand("selectAll",!1,null)}))},getValue:function(t,e,i,o,a){var r=this;switch(e){case"boolean":case"number":return a;case"string":return'<span\n                        class="editable-content"\n                        @click="openEditorAndSelectText(\''.concat(i,"', '").concat(o,"')\">\n                            ").concat(this.escapeHTML(a),"\n                        </span>");case"array":return a?Object.entries(a).map((function(t){var e=n(t).slice(0);return'<ul class="pl-4">'.concat(r.getItem(e[0],e[1]),"</ul>")})).join(""):a;case"object":return a?Object.entries(a).map((function(t){var e=n(t).slice(0);return'<ul class="pl-4">'.concat(r.getItem(e[0],e[1]),"</ul>")})).join(""):a}return a},getStatusMessage:function(){return this.editing.length?"Press Enter or click away to finish. Press Esc to cancel.":'\n                <a class="hover:text-blue-500 mr-px" target="_blank" href="https://twitter.com/kevinbatdorf">@kevinbatdorf</a>\n                ·\n                <a class="hover:text-blue-500 mx-px" target="_blank" href="https://github.com/kevinbatdorf/alpine-inline-devtools">github</a>\n            '},convertFunctionName:function(t){if(0!==t.indexOf("{")){var e=t.replace(/\(([^\)]+)\)/,"").replace("()","").replace(/([A-Z])/g," $1");return e?e.charAt(0).toUpperCase()+e.slice(1):""}},escapeHTML:function(t){var e=document.createElement("div");return e.innerText=t,e.innerHTML}}};try{c()}catch(t){console.error("Alpine DevTools: We couldn't identify the source script")}function l(){var t=document.createElement("button");t.id="alpine-devtools",t.setAttribute("x-data","alpineDevToolsHandler()"),t.setAttribute("x-show.transition.out.opacity.duration.1000","alpines.length && !open"),t.setAttribute("x-bind:class",'{"alpine-button-devtools-closed" : !open}'),t.setAttribute("x-on:click","openWindow"),t.setAttribute("x-on:open-alpine-devtools.window","openWindow"),t.setAttribute("x-init","$nextTick(() => { start() })"),t.textContent="Alpine Devtools",t.style.cssText="position:fixed!important;bottom:0!important;right:0!important;margin:4px!important;padding:5px 8px!important;border-radius:10px!important;background-color:#1a202c!important;color:#d8dee9!important;font-size:14px!important;outline:0!important;z-index:2147483647!important;min-width:0!important;max-width:130px!important;";var e=document.createElement("style");e.appendChild(document.createTextNode(".alpine-button-devtools-closed{opacity:1!important}")),document.head.appendChild(e),document.body.appendChild(t)}var d=window.deferLoadingAlpine||function(t){return t()};window.deferLoadingAlpine=function(t){d(t),l()},window.forceLoadAlpineDevTools=function(){c(),l()}}]);