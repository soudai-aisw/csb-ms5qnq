parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=function(){var e=document.getElementById("add-text").value;document.getElementById("add-text").value="",n(e)},t=function(e){document.getElementById("incomplete-list").removeChild(e)},n=function e(n){var d=document.createElement("div");d.className="list-row";var l=document.createElement("li");l.innerText=n,document.getElementById("incomplete-list").appendChild(d);var i=document.createElement("button");i.innerText="完了",i.addEventListener("click",function(){t(a.parentNode);var n=i.parentNode,d=n.firstElementChild.innerText;n.textContent=null;var l=document.createElement("li");l.innerText=d;var r=document.createElement("button");r.innerText="戻す",r.addEventListener("click",function(){var t=r.parentNode;document.getElementById("completed-list").removeChild(t);var n=r.parentNode.firstElementChild.innerText;e(n)}),n.appendChild(l),n.appendChild(r),document.getElementById("completed-list").appendChild(n)});var a=document.createElement("button");a.innerText="削除",a.addEventListener("click",function(){t(a.parentNode)}),d.appendChild(l),d.appendChild(i),d.appendChild(a)},d=document.getElementById("add-button");d.addEventListener("click",function(){return e()});
},{}]},{},["H99C"], null)
//# sourceMappingURL=/csb-ms5qnq/src.e0d9eeb5.js.map