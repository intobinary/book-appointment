
/*===
intobinary (www.intobinary.co)
&copy Coryright 2022 IntoBinary. All rights reserved.
Written for -- www.book-appointment.intobinary.org
===*/


/*=== LIBRARIES ===*/
/*== [jQuery] ==*/
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*== [illusionAI] ==*/
var _0xc4da=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x43\x61\x6E\x6E\x6F\x74\x20\x63\x61\x6C\x6C\x20\x61\x20\x63\x6C\x61\x73\x73\x20\x61\x73\x20\x61\x20\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x73\x79\x6D\x62\x6F\x6C","\x69\x74\x65\x72\x61\x74\x6F\x72","\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72","\x6C\x65\x6E\x67\x74\x68","\x65\x6E\x75\x6D\x65\x72\x61\x62\x6C\x65","\x63\x6F\x6E\x66\x69\x67\x75\x72\x61\x62\x6C\x65","\x76\x61\x6C\x75\x65","\x77\x72\x69\x74\x61\x62\x6C\x65","\x6B\x65\x79","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x63\x6F\x6E\x66\x69\x67","\x64\x65\x66\x61\x75\x6C\x74\x43\x6F\x6E\x66\x69\x67","\x61\x73\x73\x69\x67\x6E","\x73\x74\x61\x74\x65","\x63\x61\x6C\x6C\x62\x61\x63\x6B\x73","\x6D\x65\x73\x73\x61\x67\x65\x73","\x63\x6F\x6E\x76\x65\x72\x73\x61\x74\x69\x6F\x6E","\x6F\x6C","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x6A\x73\x2D\x76\x65\x78\x78\x69\x61\x43\x68\x61\x74\x42\x6F\x74\x2D\x63\x6F\x6E\x76\x65\x72\x73\x61\x74\x69\x6F\x6E","\x61\x6E\x73\x77\x65\x72\x73","\x64\x69\x76","\x6A\x73\x2D\x76\x65\x78\x78\x69\x61\x43\x68\x61\x74\x42\x6F\x74\x2D\x72\x65\x73\x70\x6F\x6E\x73\x65\x73","\x68\x6F\x73\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x74\x61\x72\x67\x65\x74\x4E\x6F\x64\x65","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x48\x6F\x73\x74\x20\x65\x6C\x65\x6D\x65\x6E\x74\x20\x63\x6F\x75\x6C\x6E\x64\x74\x20\x62\x65\x20\x61\x74\x74\x61\x63\x68\x65\x64\x2E\x20\x4E\x6F\x64\x65\x20\x6E\x6F\x74\x20\x66\x6F\x75\x6E\x64","\x77\x61\x72\x6E","\x6A\x73\x2D\x76\x65\x78\x78\x69\x61\x43\x68\x61\x74\x42\x6F\x74","\x61\x64\x64","\x63\x6C\x61\x73\x73\x4C\x69\x73\x74","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x67\x72\x65\x65\x74\x69\x6E\x67","\x73\x61\x79","\x67\x65\x74\x41\x62\x73\x6F\x6C\x75\x74\x65\x52\x65\x63\x74","\x67\x65\x74\x42\x6F\x75\x6E\x64\x69\x6E\x67\x43\x6C\x69\x65\x6E\x74\x52\x65\x63\x74","\x74\x6F\x70","\x70\x61\x67\x65\x59\x4F\x66\x66\x73\x65\x74","\x6C\x65\x66\x74","\x70\x61\x67\x65\x58\x4F\x66\x66\x73\x65\x74","\x73\x65\x74\x4D\x65\x73\x73\x61\x67\x65\x73","\x73\x63\x72\x6F\x6C\x6C\x49\x6E\x74\x6F\x56\x69\x65\x77","\x62\x6F\x74\x74\x6F\x6D","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x73\x63\x72\x6F\x6C\x6C\x4E\x6F\x64\x65","\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70","\x72\x65\x71\x75\x65\x73\x74\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x46\x72\x61\x6D\x65","\x65\x6D\x69\x74","\x63\x61\x6C\x6C","\x6F\x6E","\x61\x6E\x69\x6D\x61\x74\x65\x52\x65\x73\x70\x6F\x6E\x73\x65","\x61\x64\x64\x53\x70\x65\x65\x63\x68\x42\x75\x62\x62\x6C\x65","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65","\x73\x6C\x69\x63\x65","\x78","\x79","\x57\x65\x62\x6B\x69\x74\x54\x72\x61\x6E\x73\x66\x6F\x72\x6D","\x73\x74\x79\x6C\x65","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x33\x64\x28","\x70\x78\x2C\x20","\x70\x78\x2C\x20\x30\x29","\x6F\x70\x61\x63\x69\x74\x79","\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x65\x6E\x64","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x33\x64\x28\x30\x2C\x20\x31\x30\x30\x70\x78\x2C\x20\x30\x29","\x66\x6F\x72\x45\x61\x63\x68","\x63\x72\x65\x61\x74\x65\x53\x70\x65\x65\x63\x68\x42\x75\x62\x62\x6C\x65","\x72\x65\x73\x70\x6F\x6E\x73\x65","\x74\x79\x70\x65","\x6A\x73\x2D\x76\x65\x78\x78\x69\x61\x43\x68\x61\x74\x42\x6F\x74\x2D\x62\x75\x62\x62\x6C\x65\x20\x6A\x73\x2D\x76\x65\x78\x78\x69\x61\x43\x68\x61\x74\x42\x6F\x74\x2D\x62\x75\x62\x62\x6C\x65\x2D\x2D\x72\x65\x73\x70\x6F\x6E\x73\x65","\x6A\x73\x2D\x76\x65\x78\x78\x69\x61\x43\x68\x61\x74\x42\x6F\x74\x2D\x62\x75\x62\x62\x6C\x65","\x63\x6C\x61\x73\x73","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x74\x65\x78\x74","\x63\x72\x65\x61\x74\x65\x41\x6E\x73\x77\x65\x72\x42\x75\x74\x74\x6F\x6E","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x33\x64\x28\x30\x2C\x20\x37\x32\x70\x78\x2C\x20\x30\x29","\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x33\x64\x28\x30\x2C\x20\x30\x2C\x20\x30\x29","\x64\x65\x6C\x61\x79","\x62\x69\x6E\x64","\x6F\x6E\x46\x69\x6E\x69\x73\x68","\x63\x68\x6F\x6F\x73\x65\x41\x6E\x73\x77\x65\x72","\x6D\x61\x70","\x63\x6C\x69\x63\x6B","\x63\x6C\x6F\x6E\x65\x4E\x6F\x64\x65","\x70\x61\x74\x68","\x61\x6E\x73\x77\x65\x72","\x77\x72\x69\x74\x65\x41\x6E\x73\x77\x65\x72","\x66\x6F\x63\x75\x73","\x6A\x73\x2D\x76\x65\x78\x78\x69\x61\x43\x68\x61\x74\x42\x6F\x74\x2D\x61\x6E\x73\x77\x65\x72\x73\x2D\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72","\x63\x6F\x6E\x74\x65\x6E\x74\x45\x64\x69\x74\x61\x62\x6C\x65","\x70\x61\x73\x74\x65","\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","\x6B\x65\x79\x75\x70","\x72\x65\x6D\x6F\x76\x65","\x62\x6C\x75\x72","\x6B\x65\x79\x64\x6F\x77\x6E","\x6B\x65\x79\x43\x6F\x64\x65","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x72\x65\x6D\x6F\x76\x65\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x6B\x65\x79\x70\x72\x65\x73\x73","\x6D\x61\x78\x43\x68\x61\x72\x73\x52\x65\x73\x70\x6F\x6E\x73\x65","\x68\x61\x73\x53\x65\x65\x6E\x4D\x61\x78\x43\x68\x61\x72\x52\x65\x73\x70\x6F\x6E\x73\x65","\x6D\x61\x78\x43\x68\x61\x72\x73\x52\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x6C\x69","\x6A\x73\x2D\x76\x65\x78\x78\x69\x61\x43\x68\x61\x74\x42\x6F\x74\x2D\x63\x6F\x6E\x76\x65\x72\x73\x61\x74\x69\x6F\x6E\x2D\x74\x68\x72\x65\x61\x64","\x67\x65\x74\x43\x6F\x6D\x70\x75\x74\x65\x64\x53\x74\x79\x6C\x65","\x6A\x73\x2D\x76\x65\x78\x78\x69\x61\x43\x68\x61\x74\x42\x6F\x74\x2D\x62\x75\x62\x62\x6C\x65\x2D\x2D\x73\x6C\x69\x64\x65\x49\x6E","\x69\x66\x72\x61\x6D\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x6A\x73\x2D\x76\x65\x78\x78\x69\x61\x43\x68\x61\x74\x42\x6F\x74\x2D\x62\x75\x62\x62\x6C\x65\x2D\x2D\x65\x6D\x62\x65\x64","\u2026","\x6D\x69\x6E\x2D\x77\x69\x64\x74\x68","\x70\x72\x6F\x70\x65\x72\x74\x79\x4E\x61\x6D\x65","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x6D\x69\x6E\x48\x65\x69\x67\x68\x74","\x68\x65\x69\x67\x68\x74","\x70\x78","\x6D\x69\x6E\x57\x69\x64\x74\x68","\x77\x69\x64\x74\x68","\x6A\x73\x2D\x76\x65\x78\x78\x69\x61\x43\x68\x61\x74\x42\x6F\x74\x2D\x62\x75\x62\x62\x6C\x65\x2D\x2D\x66\x61\x64\x65","\x63\x68\x61\x74\x44\x65\x6C\x61\x79","\x6F\x62\x6A\x65\x63\x74","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x63\x68\x6F\x6F\x73\x65","\x77\x72\x69\x74\x65","\x62\x6F\x64\x79","\x4C\x65\x74\x27\x73\x20\x6B\x65\x65\x70\x20\x69\x74\x20\x63\x61\x73\x75\x61\x6C\x2E\x2E\x2E\x20\x6E\x6F\x20\x6E\x65\x65\x64\x20\x66\x6F\x72\x20\x6C\x6F\x6E\x67\x20\x6D\x65\x73\x73\x61\x67\x65\x73\x2E\x20\x3A\x29"];_0xc4da[0];function _classCallCheck(_0x2fa3x2,_0x2fa3x3){if(!(_0x2fa3x2 instanceof  _0x2fa3x3)){throw  new TypeError(_0xc4da[1])}}var _typeof=_0xc4da[2]==  typeof Symbol&& _0xc4da[3]==  typeof Symbol[_0xc4da[4]]?function(_0x2fa3x2){return  typeof _0x2fa3x2}:function(_0x2fa3x2){return _0x2fa3x2&& _0xc4da[2]==  typeof Symbol&& _0x2fa3x2[_0xc4da[5]]=== Symbol?_0xc4da[3]: typeof _0x2fa3x2},_createClass=function(){function _0x2fa3x2(_0x2fa3x2,_0x2fa3x3){for(var _0x2fa3x7=0;_0x2fa3x7< _0x2fa3x3[_0xc4da[6]];_0x2fa3x7++){var _0x2fa3x8=_0x2fa3x3[_0x2fa3x7];_0x2fa3x8[_0xc4da[7]]= _0x2fa3x8[_0xc4da[7]]||  !1,_0x2fa3x8[_0xc4da[8]]=  !0,_0xc4da[9] in  _0x2fa3x8&& (_0x2fa3x8[_0xc4da[10]]=  !0),Object[_0xc4da[12]](_0x2fa3x2,_0x2fa3x8[_0xc4da[11]],_0x2fa3x8)}}return function(_0x2fa3x3,_0x2fa3x7,_0x2fa3x8){return _0x2fa3x7&& _0x2fa3x2(_0x2fa3x3[_0xc4da[13]],_0x2fa3x7),_0x2fa3x8&& _0x2fa3x2(_0x2fa3x3,_0x2fa3x8),_0x2fa3x3}}(),Chat=function(){function _0x2fa3x2(_0x2fa3x3){var _0x2fa3x7=arguments[_0xc4da[6]]<= 1|| void(0)=== arguments[1]?{}:arguments[1];return _classCallCheck(this,_0x2fa3x2),this[_0xc4da[14]]= Object[_0xc4da[16]]({},_0x2fa3x2[_0xc4da[15]],_0x2fa3x7),this[_0xc4da[17]]= {hasSeenMaxCharResponse:!1},this[_0xc4da[18]]= {},this[_0xc4da[19]]= _0x2fa3x3,this[_0xc4da[20]]= document[_0xc4da[22]](_0xc4da[21]),this[_0xc4da[20]][_0xc4da[23]]= _0xc4da[24],this[_0xc4da[25]]= document[_0xc4da[22]](_0xc4da[26]),this[_0xc4da[25]][_0xc4da[23]]= _0xc4da[27],this[_0xc4da[28]]= document[_0xc4da[30]](this[_0xc4da[14]][_0xc4da[29]]),this[_0xc4da[28]]|| console[_0xc4da[32]](_0xc4da[31]),this[_0xc4da[28]][_0xc4da[35]][_0xc4da[34]](_0xc4da[33]),this[_0xc4da[28]][_0xc4da[36]](this[_0xc4da[20]]),this[_0xc4da[28]][_0xc4da[36]](this[_0xc4da[25]]),this[_0xc4da[38]](this[_0xc4da[19]][_0xc4da[37]]),this}return _createClass(_0x2fa3x2,[{key:_0xc4da[39],value:function(_0x2fa3x2){var _0x2fa3x3=_0x2fa3x2[_0xc4da[40]](),_0x2fa3x7=_0x2fa3x3[_0xc4da[41]]+ window[_0xc4da[42]],_0x2fa3x8=_0x2fa3x3[_0xc4da[43]]+ window[_0xc4da[44]];return {x:_0x2fa3x8,y:_0x2fa3x7}}},{key:_0xc4da[45],value:function(_0x2fa3x2){this[_0xc4da[19]]= _0x2fa3x2}},{key:_0xc4da[46],value:function(_0x2fa3x2){var _0x2fa3x3=this[_0xc4da[28]][_0xc4da[40]](),_0x2fa3x7=_0x2fa3x3[_0xc4da[47]]- window[_0xc4da[48]],_0x2fa3x8=document[_0xc4da[30]](this[_0xc4da[14]][_0xc4da[49]]),_0x2fa3x9=function _0x2fa3xa(){_0x2fa3x7> 0&& (_0x2fa3x8[_0xc4da[50]]= _0x2fa3x8[_0xc4da[50]]+ 8,_0x2fa3x7-= 8,window[_0xc4da[51]](_0x2fa3xa))};_0x2fa3x9()}},{key:_0xc4da[52],value:function(_0x2fa3x2,_0x2fa3x3){(this[_0xc4da[18]][_0x2fa3x2]|| function(){})[_0xc4da[53]](this,_0x2fa3x3)}},{key:_0xc4da[54],value:function(_0x2fa3x2,_0x2fa3x3){return this[_0xc4da[18]][_0x2fa3x2]= _0x2fa3x3,this}},{key:_0xc4da[55],value:function(_0x2fa3x2,_0x2fa3x3,_0x2fa3x7){var _0x2fa3x8=this;this[_0xc4da[56]](_0x2fa3x3,!0);var _0x2fa3x9=[][_0xc4da[59]][_0xc4da[53]](_0x2fa3x2[_0xc4da[58]][_0xc4da[57]]),_0x2fa3xa=this[_0xc4da[39]](_0x2fa3x3),_0x2fa3xb=this[_0xc4da[39]](_0x2fa3x2),_0x2fa3xc=_0x2fa3xa[_0xc4da[60]]- _0x2fa3xb[_0xc4da[60]],_0x2fa3xd=_0x2fa3xa[_0xc4da[61]]- _0x2fa3xb[_0xc4da[61]];_0x2fa3x2[_0xc4da[63]][_0xc4da[62]]= _0xc4da[64]+ _0x2fa3xc+ _0xc4da[65]+ _0x2fa3xd+ _0xc4da[66],_0x2fa3x3[_0xc4da[63]][_0xc4da[67]]= 0,_0x2fa3x2[_0xc4da[71]](_0xc4da[68],function(){_0x2fa3x7[_0xc4da[53]](_0x2fa3x8,_0x2fa3x2),_0x2fa3x2[_0xc4da[58]][_0xc4da[69]]= _0xc4da[70],_0x2fa3x3[_0xc4da[63]][_0xc4da[67]]= 1},!1),_0x2fa3x9[_0xc4da[73]](function(_0x2fa3x3){return _0x2fa3x3!== _0x2fa3x2?_0x2fa3x3[_0xc4da[63]][_0xc4da[62]]= _0xc4da[72]:void(0)})}},{key:_0xc4da[74],value:function(_0x2fa3x2){var _0x2fa3x3=document[_0xc4da[22]](_0xc4da[26]),_0x2fa3x7=_0xc4da[75]=== _0x2fa3x2[_0xc4da[76]]?_0xc4da[77]:_0xc4da[78];return _0x2fa3x3[_0xc4da[80]](_0xc4da[79],_0x2fa3x7),_0x2fa3x3[_0xc4da[69]]= _0x2fa3x2[_0xc4da[81]],_0x2fa3x3}},{key:_0xc4da[82],value:function(_0x2fa3x2,_0x2fa3x3){var _0x2fa3x7=Object[_0xc4da[16]]({},{delay:0,onFinish:function(){}},_0x2fa3x3),_0x2fa3x8=this[_0xc4da[74]]({text:_0x2fa3x2[_0xc4da[81]]|| _0xc4da[70],type:_0xc4da[75]});return _0x2fa3x8[_0xc4da[63]][_0xc4da[62]]= _0xc4da[83],this[_0xc4da[25]][_0xc4da[36]](_0x2fa3x8),setTimeout(function(){_0x2fa3x8[_0xc4da[63]][_0xc4da[62]]= _0xc4da[84]},450+ _0x2fa3x7[_0xc4da[85]]),_0x2fa3x8[_0xc4da[71]](_0xc4da[68],function(){setTimeout(_0x2fa3x7[_0xc4da[87]][_0xc4da[86]](this,_0x2fa3x8),750)}),_0x2fa3x8}},{key:_0xc4da[88],value:function(_0x2fa3x2){var _0x2fa3x3=this,_0x2fa3x7=_0x2fa3x2[_0xc4da[25]][_0xc4da[89]](function(_0x2fa3x2,_0x2fa3x7){return _0x2fa3x3[_0xc4da[82]](_0x2fa3x2,{delay:65+ 65* _0x2fa3x7})});_0x2fa3x7[_0xc4da[73]](function(_0x2fa3x7,_0x2fa3x8){_0x2fa3x7[_0xc4da[71]](_0xc4da[90],function(_0x2fa3x9){_0x2fa3x3[_0xc4da[55]](_0x2fa3x7,_0x2fa3x7[_0xc4da[91]](!0),function(){_0x2fa3x3[_0xc4da[38]](_0x2fa3x3[_0xc4da[19]][_0x2fa3x2[_0xc4da[25]][_0x2fa3x8][_0xc4da[92]]]),_0x2fa3x3[_0xc4da[52]](_0xc4da[93],{item:_0x2fa3x2[_0xc4da[25]][_0x2fa3x8]})})})})}},{key:_0xc4da[94],value:function(_0x2fa3x2){var _0x2fa3x3=this,_0x2fa3x7=this[_0xc4da[82]](_0x2fa3x2,{onFinish:function(_0x2fa3x2){_0x2fa3x2[_0xc4da[95]]()}});_0x2fa3x7[_0xc4da[35]][_0xc4da[34]](_0xc4da[96]),_0x2fa3x7[_0xc4da[80]](_0xc4da[97],!0),_0x2fa3x7[_0xc4da[71]](_0xc4da[98],function(_0x2fa3x2){requestAnimationFrame(function(){_0x2fa3x7[_0xc4da[69]]= _0x2fa3x7[_0xc4da[99]]})}),_0x2fa3x7[_0xc4da[71]](_0xc4da[100],function(_0x2fa3x2){return _0x2fa3x7[_0xc4da[99]][_0xc4da[6]]?void(_0x2fa3x7[_0xc4da[35]][_0xc4da[101]](_0xc4da[96])):(_0x2fa3x7[_0xc4da[35]][_0xc4da[34]](_0xc4da[96]),_0x2fa3x7[_0xc4da[95]]())});var _0x2fa3x8=!1,_0x2fa3x9=function(){_0x2fa3x7[_0xc4da[99]][_0xc4da[6]]&&  !_0x2fa3x8&& (_0x2fa3x8=  !0,_0x2fa3x3[_0xc4da[55]](_0x2fa3x7,_0x2fa3x7[_0xc4da[91]](!0),function(_0x2fa3x7){_0x2fa3x2[_0xc4da[92]]&& _0x2fa3x3[_0xc4da[38]](_0x2fa3x3[_0xc4da[19]][_0x2fa3x2[_0xc4da[92]]]),_0x2fa3x3[_0xc4da[52]](_0xc4da[93],{item:_0x2fa3x2,text:_0x2fa3x7[_0xc4da[69]]})}))};_0x2fa3x7[_0xc4da[71]](_0xc4da[102],_0x2fa3x9[_0xc4da[86]](this)),_0x2fa3x7[_0xc4da[71]](_0xc4da[103],function(_0x2fa3x2){13=== _0x2fa3x2[_0xc4da[104]]&& (_0x2fa3x2[_0xc4da[105]](),_0x2fa3x7[_0xc4da[106]](_0xc4da[102],_0x2fa3x9),_0x2fa3x9())}),_0x2fa3x7[_0xc4da[71]](_0xc4da[107],function(_0x2fa3x2){_0x2fa3x7[_0xc4da[99]][_0xc4da[6]]> _0x2fa3x3[_0xc4da[14]][_0xc4da[108]]&& (_0x2fa3x2[_0xc4da[105]](),_0x2fa3x3[_0xc4da[17]][_0xc4da[109]]|| (_0x2fa3x3[_0xc4da[17]][_0xc4da[109]]=  !0,_0x2fa3x3[_0xc4da[38]]([_0x2fa3x3[_0xc4da[14]][_0xc4da[110]]])))})}},{key:_0xc4da[56],value:function(_0x2fa3x2){var _0x2fa3x3=this,_0x2fa3x7=arguments[_0xc4da[6]]<= 1|| void(0)=== arguments[1]?!1:arguments[1],_0x2fa3x8=document[_0xc4da[22]](_0xc4da[111]);_0x2fa3x8[_0xc4da[35]][_0xc4da[34]](_0xc4da[112]),_0x2fa3x8[_0xc4da[36]](_0x2fa3x2),this[_0xc4da[20]][_0xc4da[36]](_0x2fa3x8),_0x2fa3x7||  !function(){var _0x2fa3x7=_0x2fa3x2[_0xc4da[40]]();window[_0xc4da[113]](_0x2fa3x2)[_0xc4da[67]],_0x2fa3x2[_0xc4da[35]][_0xc4da[34]](_0xc4da[114]);var _0x2fa3x8=_0x2fa3x2[_0xc4da[69]][_0xc4da[116]](_0xc4da[115])>= 0;_0x2fa3x8&& _0x2fa3x2[_0xc4da[35]][_0xc4da[34]](_0xc4da[117]);var _0x2fa3x9=_0x2fa3x2[_0xc4da[69]];_0x2fa3x2[_0xc4da[69]]= _0xc4da[118],_0x2fa3x2[_0xc4da[71]](_0xc4da[68],function(_0x2fa3x7){_0xc4da[119]=== _0x2fa3x7[_0xc4da[120]]&& (_0x2fa3x2[_0xc4da[69]]= _0x2fa3x9,_0x2fa3x2[_0xc4da[121]](_0xc4da[63]),_0x2fa3x3[_0xc4da[46]]())}),setTimeout(function(){_0x2fa3x2[_0xc4da[63]][_0xc4da[122]]= _0x2fa3x7[_0xc4da[123]]+ _0xc4da[124],_0x2fa3x2[_0xc4da[63]][_0xc4da[125]]= _0x2fa3x7[_0xc4da[126]]+ _0xc4da[124],_0x2fa3x2[_0xc4da[35]][_0xc4da[34]](_0xc4da[127]),setTimeout(function(){_0x2fa3x2[_0xc4da[69]]= _0x2fa3x9,_0x2fa3x2[_0xc4da[121]](_0xc4da[63]),_0x2fa3x8|| _0x2fa3x3[_0xc4da[46]]()},350)},_0x2fa3x3[_0xc4da[14]][_0xc4da[128]])}()}},{key:_0xc4da[38],value:function(_0x2fa3x2){var _0x2fa3x3=this;_0x2fa3x2[_0xc4da[73]](function(_0x2fa3x2,_0x2fa3x7){setTimeout(function(){if(_0xc4da[129]=== (_0xc4da[130]==  typeof _0x2fa3x2?_0xc4da[130]:_typeof(_0x2fa3x2))){switch(_0x2fa3x2[_0xc4da[76]]){case _0xc4da[131]:return _0x2fa3x3[_0xc4da[88]](_0x2fa3x2);case _0xc4da[132]:return _0x2fa3x3[_0xc4da[94]](_0x2fa3x2)}};var _0x2fa3x7=_0x2fa3x3[_0xc4da[74]]({text:_0x2fa3x2});_0x2fa3x3[_0xc4da[56]](_0x2fa3x7)},_0x2fa3x3[_0xc4da[14]][_0xc4da[128]]* _0x2fa3x7+ _0x2fa3x7* _0x2fa3x7* 70)})}}]),_0x2fa3x2}();Chat[_0xc4da[15]]= {targetNode:_0xc4da[133],scrollNode:_0xc4da[133],chatDelay:1350,maxCharsResponse:140,maxCharsResponseText:_0xc4da[134]}

/*== [particlesJS] ==*//* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
    let a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(a, function(e, a, t, i) {
        return a + a + t + t + i + i;
    });
    let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null;
}

function clamp(e, a, t) {
    return Math.min(Math.max(e, a), t);
}

function isInArray(e, a) {
    return a.indexOf(e) > -1;
}
let pJS = function(e, a) {
    let t = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: t,
            w: t.offsetWidth,
            h: t.offsetHeight
        },
        particles: {
            number: {
                value: 50,
                density: {
                    enable: !0,
                    value_area: 1000
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "image",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "https://d35408cyocioye.cloudfront.net/legacy/hex10a.png",
                    width: 87,
                    height: 98
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 20,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    let i = this.pJS;
    a && Object.deepExtend(i, a), i.tmp.obj = {
        size_value: i.particles.size.value,
        size_anim_speed: i.particles.size.anim.speed,
        move_speed: i.particles.move.speed,
        line_linked_distance: i.particles.line_linked.distance,
        line_linked_width: i.particles.line_linked.width,
        mode_grab_distance: i.interactivity.modes.grab.distance,
        mode_bubble_distance: i.interactivity.modes.bubble.distance,
        mode_bubble_size: i.interactivity.modes.bubble.size,
        mode_repulse_distance: i.interactivity.modes.repulse.distance
    }, i.fn.retinaInit = function() {
        i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio;
    }, i.fn.canvasInit = function() {
        i.canvas.ctx = i.canvas.el.getContext("2d");
    }, i.fn.canvasSize = function() {
        i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function() {
            i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles();
        });
    }, i.fn.canvasPaint = function() {
        i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
    }, i.fn.canvasClear = function() {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
    }, i.fn.particle = function(e, a, t) {
        if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == typeof e.value)
            if (e.value instanceof Array) {
                let s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
                this.color.rgb = hexToRgb(s);
            } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
                r: e.value.r,
                g: e.value.g,
                b: e.value.b
            }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
                h: e.value.h,
                s: e.value.s,
                l: e.value.l
            });
        else "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        let n = {};
        switch (i.particles.move.direction) {
            case "top":
                n = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                n = {
                    x: .5,
                    y: -.5
                };
                break;
            case "right":
                n = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                n = {
                    x: .5,
                    y: .5
                };
                break;
            case "bottom":
                n = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                n = {
                    x: -.5,
                    y: 1
                };
                break;
            case "left":
                n = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                n = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                n = {
                    x: 0,
                    y: 0
                };
        }
        i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        let r = i.particles.shape.type;
        if ("object" == typeof r) {
            if (r instanceof Array) {
                let c = r[Math.floor(Math.random() * r.length)];
                this.shape = c;
            }
        } else this.shape = r;
        
        let substring = this.shape.substring(0, 5);
        if ("image" == substring) {
            let o = i.particles.shape;
            this.img = {
                src: o.image.src,
                ratio: o.image.width / o.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1));
        }
    }, i.fn.particle.prototype.draw = function() {
        function e() {
            i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio);
        }
        var a = this;
        if (void 0 != a.radius_bubble) var t = a.radius_bubble;
        else var t = a.radius;
        if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;
        else var s = a.opacity;
        if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";
        else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";
        switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {
            case "circle":
                i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
                break;
            case "triangle":
                i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
                break;
            case "polygon":
                i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == i.tmp.img_type) var r = a.img.obj;
                else var r = i.tmp.img_obj;
                r && e();
                break;
            case "image2":
                if ("svg" == i.tmp.img_type) var r = a.img.obj;
                else var r = i.tmp.img_obj;
                var element = document.createElement('img');
				element.src = 'https://d35408cyocioye.cloudfront.net/legacy/hex2a.png';
				r = element;
                r && e();
                break;
            case "image3":
                if ("svg" == i.tmp.img_type) var r = a.img.obj;
                else var r = i.tmp.img_obj;
                var element = document.createElement('img');
				element.src = 'assets/images/picture3.png';
				r = element;
                r && e();
             	break;
             case "image4":
                if ("svg" == i.tmp.img_type) var r = a.img.obj;
                else var r = i.tmp.img_obj;
                var element = document.createElement('img');
				element.src = 'https://d35408cyocioye.cloudfront.net/legacy/hex4a.png';
				r = element;
                r && e();
	            break;
            case "image5":
                if ("svg" == i.tmp.img_type) var r = a.img.obj;
                else var r = i.tmp.img_obj;
                var element = document.createElement('img');
				element.src = 'https://d35408cyocioye.cloudfront.net/legacy/hex5a.png';
				r = element;
                r && e();
                break;
            case "image6":
                if ("svg" == i.tmp.img_type) var r = a.img.obj;
                else var r = i.tmp.img_obj;
                var element = document.createElement('img');
				element.src = 'https://d35408cyocioye.cloudfront.net/legacy/hex6a.png';
				r = element;
                r && e();
             	break;
             case "image7":
                if ("svg" == i.tmp.img_type) var r = a.img.obj;
                else var r = i.tmp.img_obj;
                var element = document.createElement('img');
				element.src = 'https://d35408cyocioye.cloudfront.net/legacy/hex7a.png';
				r = element;
                r && e();
                break;
            case "image8":
                if ("svg" == i.tmp.img_type) var r = a.img.obj;
                else var r = i.tmp.img_obj;
                var element = document.createElement('img');
				element.src = 'https://d35408cyocioye.cloudfront.net/legacy/hex8a.png';
				r = element;
                r && e();
                break;
            case "image9":
                if ("svg" == i.tmp.img_type) var r = a.img.obj;
                else var r = i.tmp.img_obj;
                var element = document.createElement('img');
				element.src = 'https://d35408cyocioye.cloudfront.net/legacy/hex9a.png';
				r = element;
                r && e();
             	break;
             case "image10":
                if ("svg" == i.tmp.img_type) var r = a.img.obj;
                else var r = i.tmp.img_obj;
                var element = document.createElement('img');
				element.src = 'https://d35408cyocioye.cloudfront.net/legacy/hex10a.png';
				r = element;
                r && e();
        }
        i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill();
    }, i.fn.particlesCreate = function() {
        for (let e = 0; e < i.particles.number.value; e++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value));
    }, i.fn.particlesUpdate = function() {
        for (let e = 0; e < i.particles.array.length; e++) {
            let a = i.particles.array[e];
            if (i.particles.move.enable) {
                let t = i.particles.move.speed / 2;
                a.x += a.vx * t, a.y += a.vy * t;
            }
            if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = {
                x_left: a.radius,
                x_right: i.canvas.w,
                y_top: a.radius,
                y_bottom: i.canvas.h
            };
            else var s = {
                x_left: -a.radius,
                x_right: i.canvas.w + a.radius,
                y_top: -a.radius,
                y_bottom: i.canvas.h + a.radius
            };
            switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
                case "bounce":
                    a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy);
            }
            if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable)
                for (let n = e + 1; n < i.particles.array.length; n++) {
                    let r = i.particles.array[n];
                    i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
                }
        }
    }, i.fn.particlesDraw = function() {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();
        for (let e = 0; e < i.particles.array.length; e++) {
            let a = i.particles.array[e];
            a.draw();
        }
    }, i.fn.particlesEmpty = function() {
        i.particles.array = [];
    }, i.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start();
    }, i.fn.interact.linkParticles = function(e, a) {
        let t = e.x - a.x,
            s = e.y - a.y,
            n = Math.sqrt(t * t + s * s);
        if (n <= i.particles.line_linked.distance) {
            let r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
            if (r > 0) {
                let c = i.particles.line_linked.color_rgb_line;
                i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
            }
        }
    }, i.fn.interact.attractParticles = function(e, a) {
        let t = e.x - a.x,
            s = e.y - a.y,
            n = Math.sqrt(t * t + s * s);
        if (n <= i.particles.line_linked.distance) {
            let r = t / (1e3 * i.particles.move.attract.rotateX),
                c = s / (1e3 * i.particles.move.attract.rotateY);
            e.vx -= r, e.vy -= c, a.vx += r, a.vy += c;
        }
    }, i.fn.interact.bounceParticles = function(e, a) {
        let t = e.x - a.x,
            i = e.y - a.y,
            s = Math.sqrt(t * t + i * i),
            n = e.radius + a.radius;
        n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy);
    }, i.fn.modes.pushParticles = function(e, a) {
        i.tmp.pushing = !0;
        for (let t = 0; e > t; t++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: a ? a.pos_x : Math.random() * i.canvas.w,
            y: a ? a.pos_y : Math.random() * i.canvas.h
        })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1);
    }, i.fn.modes.removeParticles = function(e) {
        i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw();
    }, i.fn.modes.bubbleParticle = function(e) {
        function a() {
            e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
        }

        function t(a, t, s, n, c) {
            if (a != t)
                if (i.tmp.bubble_duration_end) {
                    if (void 0 != s) {
                        let o = n - p * (n - a) / i.interactivity.modes.bubble.duration,
                            l = a - o;
                        d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
                    }
                } else if (r <= i.interactivity.modes.bubble.distance) {
                if (void 0 != s) var v = s;
                else var v = n;
                if (v != a) {
                    var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
                    "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
                }
            } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0);
        }
        if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
            var s = e.x - i.interactivity.mouse.pos_x,
                n = e.y - i.interactivity.mouse.pos_y,
                r = Math.sqrt(s * s + n * n),
                c = 1 - r / i.interactivity.modes.bubble.distance;
            if (r <= i.interactivity.modes.bubble.distance) {
                if (c >= 0 && "mousemove" == i.interactivity.status) {
                    if (i.interactivity.modes.bubble.size != i.particles.size.value)
                        if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                            var o = e.radius + i.interactivity.modes.bubble.size * c;
                            o >= 0 && (e.radius_bubble = o);
                        } else {
                            var l = e.radius - i.interactivity.modes.bubble.size,
                                o = e.radius - l * c;
                            o > 0 ? e.radius_bubble = o : e.radius_bubble = 0;
                        }
                    if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
                        if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                            var v = i.interactivity.modes.bubble.opacity * c;
                            v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
                        } else {
                            var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
                            v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
                        }
                }
            } else a();
            "mouseleave" == i.interactivity.status && a();
        } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
            if (i.tmp.bubble_clicking) {
                var s = e.x - i.interactivity.mouse.click_pos_x,
                    n = e.y - i.interactivity.mouse.click_pos_y,
                    r = Math.sqrt(s * s + n * n),
                    p = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
                p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1);
            }
            i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
        }
    }, i.fn.modes.repulseParticle = function(e) {
        function a() {
            let a = Math.atan2(d, p);
            if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) {
                let t = {
                    x: e.x + e.vx,
                    y: e.y + e.vy
                };
                t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy);
            }
        }
        if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
            var t = e.x - i.interactivity.mouse.pos_x,
                s = e.y - i.interactivity.mouse.pos_y,
                n = Math.sqrt(t * t + s * s),
                r = {
                    x: t / n,
                    y: s / n
                },
                c = i.interactivity.modes.repulse.distance,
                o = 100,
                l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
                v = {
                    x: e.x + r.x * l,
                    y: e.y + r.y * l
                };
            "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y);
        } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))
            if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
                var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
                    p = i.interactivity.mouse.click_pos_x - e.x,
                    d = i.interactivity.mouse.click_pos_y - e.y,
                    m = p * p + d * d,
                    u = -c / m * 1;
                c >= m && a();
            } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
    }, i.fn.modes.grabParticle = function(e) {
        if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
            let a = e.x - i.interactivity.mouse.pos_x,
                t = e.y - i.interactivity.mouse.pos_y,
                s = Math.sqrt(a * a + t * t);
            if (s <= i.interactivity.modes.grab.distance) {
                let n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                if (n > 0) {
                    let r = i.particles.line_linked.color_rgb_line;
                    i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
                }
            }
        }
    }, i.fn.vendors.eventsListeners = function() {
        "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function(e) {
            if (i.interactivity.el == window) var a = e.clientX,
                t = e.clientY;
            else var a = e.offsetX || e.clientX,
                t = e.offsetY || e.clientY;
            i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove";
        }), i.interactivity.el.addEventListener("mouseleave", function(e) {
            i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave";
        })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function() {
            if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = (new Date).getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
                case "push":
                    i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    i.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function() {
                        i.tmp.repulse_clicking = !1;
                    }, 1e3 * i.interactivity.modes.repulse.duration);
            }
        });
    }, i.fn.vendors.densityAutoParticles = function() {
        if (i.particles.number.density.enable) {
            let e = i.canvas.el.width * i.canvas.el.height / 1e3;
            i.tmp.retina && (e /= 2 * i.canvas.pxratio);
            let a = e * i.particles.number.value / i.particles.number.density.value_area,
                t = i.particles.array.length - a;
            0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t);
        }
    }, i.fn.vendors.checkOverlap = function(e, a) {
        for (let t = 0; t < i.particles.array.length; t++) {
            let s = i.particles.array[t],
                n = e.x - s.x,
                r = e.y - s.y,
                c = Math.sqrt(n * n + r * r);
            c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e));
        }
    }, i.fn.vendors.createSvgImg = function(e) {
        let a = i.tmp.source_svg,
            t = /#([0-9A-F]{3,6})/gi,
            s = a.replace(t, function(a, t, i, s) {
                if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
                else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
                return n;
            }),
            n = new Blob([s], {
                type: "image/svg+xml;charset=utf-8"
            }),
            r = window.URL || window.webkitURL || window,
            c = r.createObjectURL(n),
            o = new Image;
        o.addEventListener("load", function() {
            e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++;
        }), o.src = c;
    }, i.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null;
    }, i.fn.vendors.drawShape = function(e, a, t, i, s, n) {
        let r = s * n,
            c = s / n,
            o = 180 * (c - 2) / c,
            l = Math.PI - Math.PI * o / 180;
        e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);
        for (let v = 0; r > v; v++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
        e.fill(), e.restore();
    }, i.fn.vendors.exportImg = function() {
        window.open(i.canvas.el.toDataURL("image/png"), "_blank");
    }, i.fn.vendors.loadImg = function(e) {
        if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src)
            if ("svg" == e) {
                let a = new XMLHttpRequest;
                a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function(e) {
                    4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0));
                }, a.send();
            } else {
                let t = new Image;
                t.addEventListener("load", function() {
                    i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw();
                }), t.src = i.particles.shape.image.src;
            } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0;
    }, i.fn.vendors.draw = function() {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame));
    }, i.fn.vendors.checkBeforeDraw = function() {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw());
    }, i.fn.vendors.init = function() {
        i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color);
    }, i.fn.vendors.start = function() {
        isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw();
    }, i.fn.vendors.eventsListeners(), i.fn.vendors.start();
};
Object.deepExtend = function(e, a) {
    for (let t in a) a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];
    return e;
}, window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60);
    };
}(), window.cancelRequestAnimFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}(), window.pJSDom = [], window.particlesJS = function(e, a) {
    "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
    let t = document.getElementById(e),
        i = "particles-js-canvas-el",
        s = t.getElementsByClassName(i);
    if (s.length)
        for (; s.length > 0;) t.removeChild(s[0]);
    let n = document.createElement("canvas");
    n.className = i, n.style.width = "100%", n.style.height = "100%";
    let r = document.getElementById(e).appendChild(n);
    null != r && pJSDom.push(new pJS(e, a));
}, window.particlesJS.load = function(e, a, t) {
    let i = new XMLHttpRequest;
    i.open("GET", a), i.onreadystatechange = function(a) {
        if (4 == i.readyState)
            if (200 == i.status) {
                let s = JSON.parse(a.currentTarget.response);
                window.particlesJS(e, s), t && t();
            } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found");
    }, i.send();
};
/*=== END LIBRARIES ===*/

/*=== CUSTOM ===*/
/*== [(www)bookanappointment-dot-intobinary-dot-org] ==*/

var intobinary = $.noConflict();
intobinary(document).ready(function() {
	var trollCounter = 0,
		emailsBlackList = [],
		emailsSuspectList;
	
	var twitterQuestionNotAskedYet = true,
		imgUrlToUse = "";
		
	jQuery.fn.reverse = [].reverse;
	setup();
		
	/*** ACTIONS ***/
	intobinary(".js-intobinaryChatBot-responses").on("click", ".js-intobinaryChatBot-bubble--response", function(){
		var thisElement = intobinary(this);
		if(thisElement.text() == "Sounds good") {
			twitterQuestionNotAskedYet = true;
		}
		if(thisElement.text() == "It's all correct") {
			trollCounter++;
//			tryReverseEachLoop();
			processEmailData();
		}
	});
	
	intobinary(".js-intobinaryChatBot-responses").on("focusout", ".js-intobinaryChatBot-bubble--response[contentEditable=true]", function(){
		if(twitterQuestionNotAskedYet) {
			var twitterQuestionTag = intobinary(".js-intobinaryChatBot-conversation-thread:nth-last-child(2)"),
				twitterQuestionText = twitterQuestionTag.text(),
				twitterAnswerText = intobinary(".js-intobinaryChatBot-conversation-thread:last-child").text();
			
			if(twitterQuestionText.toLowerCase().match("twitter")){
				twitterQuestionNotAskedYet = false;
				
				intobinary(".js-intobinaryChatBot-bubble--response[data-usableTwitterField='true']").attr("data-usableTwitterField", "false");
				intobinary(".js-intobinaryChatBot-conversation-thread:last-child .js-intobinaryChatBot-bubble--response").attr("data-usableTwitterField", "true");
				
				processTextForTwitter(twitterAnswerText);
			}
		}
		
		return false;
	});
	
	intobinary(".js-intobinaryChatBot-conversation").on("focusout", ".js-intobinaryChatBot-bubble--response[contentEditable=true]", function(){
		if(twitterQuestionNotAskedYet == false){
			var thisElement = intobinary(this),
				twitterAnswerText = thisElement.text();
				
			if(thisElement.attr("data-usableTwitterField") == "true"){
				processTextForTwitter(twitterAnswerText);
			}
		}
		
		return false;
	});
	/*** END ACTIONS ***/

	/*** FUNCTIONS ***/
	function tryReverseEachLoop() {
		var tryFields = intobinary(".js-intobinaryChatBot-conversation .js-intobinaryChatBot-bubble--response"),
			processEmailText = "reverse:\n";
			tryFields.reverse().each(function(i){
			processEmailText += i + ") " + intobinary(this).text() + "\n\n";
		});
	}
	
	function processEmailData() {
		var dataFields = intobinary(".js-intobinaryChatBot-conversation .js-intobinaryChatBot-bubble--response"),
			thisBubbleText = "", processEmailText = "", alertMessageText = "",
			requestedDate = "", requestedTime = "",
			userName = "", userEmail = "",
			emailTest = false, emailTestRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?intobinary/;
			
		dataFields.reverse().each(function(i){
			thisBubbleText = intobinary(this).text().trim();
			/* sanitize bubbleText */
			
			switch(i){
				case 0:
						return; break;
				case 1:
					emailTest = emailTestRegex.test(thisBubbleText);
					if(emailTest == false){
						userEmail = thisBubbleText;
						processEmailText += "\n- Email: " + thisBubbleText;
							return; break;
					} else {
						trollCounter--;
						alertMessageText += "C'mon! Look at the email you gave me! \""+ userEmail +"\" Your request will not be processed. To try again, start back at \"Can we meet?\"" + "\n";

						return false;
					}
				case 2:
					processEmailText += "\n- Subject: " + thisBubbleText;

					return; break;
				case 3:
					processEmailText += "\n- Linkedin: " + thisBubbleText;

					return; break;
				case 4:
					processEmailText += "\n- Profession: " + thisBubbleText;

					return; break;
				case 5:
					userName = thisBubbleText;
					processEmailText += "\n- Name: " + thisBubbleText;

					return; break;
				case 6:
					if(thisBubbleText == "Morning" || thisBubbleText == "Afternoon" || thisBubbleText == "Evening") {
						requestedTime = thisBubbleText;
						processEmailText += "\n- Time: " + requestedTime;
						startDataFieldsCounter = true;
					}

					return; break;
				case 7:
						requestedDate = "Next week";
						processEmailText += "\n- Date: " + requestedDate;
					}
					if(thisBubbleText == "About a month from now") {
						requestedDate = "In about a month";
						processEmailText += "\n- Date: " + requestedDate;
					}

					return; break;
				default:

					return false; break;
			}
		});
			
		/* check if email in blacklist */
		/* set the code for it. as of now, == "" will be enough.. it's still beta right? ;) */
		if(userEmail == "") {
			alertMessageText = "[" + userEmail + "], you have been banned. Your request will not be processed. Sorry, not sorry." + "\n";
		} else {
			trollCounter++;
			/* add email to suspect list */
			var wordNeither = "", trollMessage = "",
				trollMessageDone =  "This one will not be processed" + wordNeither + ".",
				trollMessageWarning = "I understand that this chat bot is quite intriguing. But, please, stop playing with it willy-nilly. You've requested a meetup " + trollCounter + " times already. C'mon!" + trollMessageDone + " Do not force me to ban you. Stop.";

			if(trollCounter > 1) { wordNeither = " either"; }
			if(trollCounter < 3) { trollMessage = trollMessageDone; }
			if(trollCounter >= 3) { trollMessage = trollMessageWarning; }
				
			if(trollCounter <= 5) {
				sendGoodEmail(userName, userEmail, requestedDate, requestedTime, processEmailText);
			} else {
				sendTrollEmail(userName, userEmail);
			}

			alertMessageText += trollMessage + "\n";
		}
	}
	
	function processTextForTwitter(tAsTxt) {
		var twitterAnswerText = tAsTxt;
		
		var givenHandle = twitterAnswerText.toLowerCase().replace("http://", "").replace("https://", "").replace("www.", "").replace("twitter.com/", "").replace("/", "").replace(" ", "").replace("\n", "").replace("@", "");
			if(givenHandle == "ellemalala" || givenHandle == "intobinary") {
				intobinary(".js-intobinaryChatBot-bubble--response[data-usableTwitterField='true']").val("");
			} else {
				var imgUrlToTest = "https://avatars.io/twitter/" + givenHandle;
				imgUrlToUse = imgUrlToTest;
		
				intobinary(".header").append("<img class='js-testTagForTwitterImage .isHidden' onerror='onTwitterImageFail(this)' onload='onTwitterImageSuccess(this)' src='" + imgUrlToTest + "' />");
			}
	}
	
	document.onTwitterImageFail = function(img) {
		/* file no exists */
		imgUrlToUse = "";
		
		intobinary(".js-testTagForTwitterImage").remove();
		intobinary(".js-intobinaryChatBot-conversation").removeClass("isNotAnonymous");
	}
	document.onTwitterImageSuccess = function(img) {
		/* file exists */
		
		intobinary(".js-testTagForTwitterImage").remove();
		intobinary("<style>.js-intobinaryChatBot-conversation .js-intobinaryChatBot-bubble--response:before { background: url('" + imgUrlToUse + "') center center no-repeat; }</style>").appendTo("head");
		intobinary(".js-intobinaryChatBot-conversation").addClass("isNotAnonymous");
	}
	
	function sendGoodEmail(uN, uE, rD, rT, pET) {
		var userName = uN, userEmail = uE,
			requestedDate = rD.toLowerCase(), requestedTime = rT.toLowerCase(),
			processEmailText = pET;

		var sendMeSubject = "Coffee with " + userName + "? [From Chat Bot]";
			sendMeMessage = processEmailText + "\n---\n" + "";
				
		intobinary.ajax({
			url: "https://formspree.io/madam.ella@intobinary.org",
			method: "POST",
			data: {
				name: userName,
				subject: sendMeSubject,
				_replyto: userEmail,
				message: sendMeMessage
			},
			dataType: "json"
		});
	}
		
	function sendTrollEmail(uN, uE) {
		var userName = uN, userEmail = uE,
			sendMeMessage = "[" + emailsSuspectList + "], is trolling. \n---\n" + "";
			
		intobinary.ajax({
			url: "https://formspree.io/madam.ella@intobinary.org",
			method: "POST",
			data: {
				name: userName,
				subject: "Coffee with TROLL",
				_replyto: userEmail,
				message: sendMeMessage
			},
			dataType: "json"
		});
	}
		
	function setup() {}
	/*** END FUNCTIONS ***/
});

/*== [illusionAI] ==*/

var chat = new Chat({
	greeting: [
		"Hello, world!",
		"I'm Madam Ella, software engineer and feminist.",
		"I am the founder of Into Binary.",
		"What can I do for you? :)", {
			type: "choose",
			answers: [{
				"text": "Can we meet?",
				"path": "can-we-meet"
			}, {
				"text": "I want to contact you",
				"path": "email-me"
			}, {
				"text": "What is this?",
				"path": "what-is-this"
			}]
		}
	],
	
	"can-we-meet": [
		"Ofcourse.",
		"But, please, take the time to consider email. Are you sure we will be not able to discuss this properly via email? I typically reply within one business day.", {
			type: "choose",
			answers: [{
				"text": "Yes. Meeting up is best.",
				"path": "meetup"
			}, {
				"text": "Sure! Email would do!",
				"path": "what-else"
			}, {
				"text": "Are you always so serious?",
				"path": "tell-a-joke"
			}]
		}
	],
	
	"done": [
		"Well, I think I've answered it all?", {
			type: "choose",
			answers: [{
				"text": "I agree",
				"path": "say-goodbye"
			}, {
				"text": "Wait!",
				"path": "what-else"
			}]
		}
	],
	
	"email-me": [
		"Sure.",
		"You can email me directly at <a href='mailto:madam.ella@intbinary.org'>madam [dot] ella [at] intobinary [dot] org</a>. The tech world is filled with buzzwords. But I prefer conversations without jargon. I'm sure you and I will have a pleasant talk. :)", {
			type: "choose",
			answers: [{
				"text": "Ok. Thanks.",
				"path": "what-else"
			}, {
				"text": "Who are you?",
				"path": "who-are-you"
			}, {
				"text": "Errk..",
				"path": "tell-a-joke"
			}]
		}
	],
	
	"get-coffee": [
		"When do you want to meet?", {
			type: "choose",
			answers: [{
				"text": "About a month from now",
				"path": "meet-next-month"
			}, {
				"text": "Next week",
				"path": "meet-next-week"
			}, {
				"text": "This week",
				"path": "meet-this-week"
			}]
		}
	],
	
	"meet-next-month": [
		"That sounds very doable.",
		"What timeframe do you prefer?", {
			type: "choose",
			answers: [{
				"text": "Morning",
				"path": "user-timeframe"
			}, {
				"text": "Afternoon",
				"path": "user-timeframe"
			}, {
				"text": "Evening",
				"path": "user-timeframe"
			}]
		}
	],
	
	"meet-next-week": [
		"Well, it's a little tight. But I'll see what I can do.",
		"What timeframe do you prefer?", {
			type: "choose",
			answers: [{
				"text": "Morning",
				"path": "user-timeframe"
			}, {
				"text": "Afternoon",
				"path": "user-timeframe"
			}, {
				"text": "Evening",
				"path": "user-timeframe"
			}]
		}
	],
	
	"meet-this-week": [
		"Oh, that soon?",
		"Unfortunetly, I am unable to commit to such a timeframe. :(", {
			type: "choose",
			answers: [{
				"text": "How about next week?",
				"path": "meet-next-week"
			}, {
				"text": "Can I email you instead?",
				"path": "email-me"
			}, {
				"text": "Any other possibility?",
				"path": "get-coffee"
			}]
		}
	],
	
	"meetup": [
		"Okay, then.",
		"I am currently in Johannesburg.",
		"Fun fact, Johannesburg is South Africa's largest city. It's also the second largest on the continent, behind the Egyptian city of Cairo.",
		"Let's talk over coffee?", {
			type: "choose",
			answers: [{
				"text": "Sounds good",
				"path": "get-coffee"
			}, {
				"text": "Any other means of contact?",
				"path": "email-me"
			}, {
				"text": "Uhmm.. I changed my mind.",
				"path": "tell-a-joke"
			}]
		}
	],
	
	"say-goodbye": [
		"Alright",
		"It was nice, chatting with you. Remember, you can always contact me with any question, via any means (social media and others).",
		"Have a lovely week ahead."
	],
	
	"share-this": [
		"I am flattered and deeply humbled to see all the interest the bot is attracting on its own.",
		"I hope we have satistified your thirst for tech wonders.",
		"Would you, please, share it around.. so that others can enjoy it aswell?",
		"<a target='_blank' href='https://facebook.com/share.php?u=http%3A%2F%2Fbook-appointment.intobinary.org%2F&title=Coffee%20with%20Madam%20Ella'>Share on Facebook</a> <a target='_blank' href='https://twitter.com/intent/tweet?text=Type%20in%20your%20tweet&url=https%3A%2F%2Fbook-appointment.intobinary.org%2F&via=intobinary&related=madamellamalala%3AFounder%20and%20lead%20developer&hashtags=ConversationalUI,ChatBot,AI,MadeWithLoveInKinshasa'>Share on Twitter</a>",
		"It was nice, chatting with you",
		"Have a lovely week ahead."
	],
	
	"tell-a-joke": [
		"How about a little joke? I always try to keep things casual to some extent. Laughter makes work more fun and transforms any project into a passion rather than a task.",
		"How many programmers does it take to change a light bulb?",
		"...",
		"...",
		"...",
		"None. It's a hardware problem.",
		"Bazinga!", {
			type: "choose",
			answers: [{
				"text": "Nice joke. :D",
				"path": "what-else"
			}, {
				"text": "Alright. That's enough for today.",
				"path": "done"
			}]
		}
	],
	
	"user-about": [
		"Alright.",
		"Tell me a bit about your profession. What do you do in life?", {
			type: "write",
			path: "user-account"
		}
	],
	
	"user-account": [
		"Cool.",
		"May I have your Instagram handle? It's okay, if you don't have one. Mine is: <a target='_blank' href='https://instagram.com/MadamEllaMalala'>@MadamEllaMalala</a>, by the way. :)", {
			type: "write",
			path: "user-subject"
		}
	],
	
	"user-done": [
		"Cool",
		"Please, check back the information you typed in", {
			type: "choose",
			answers: [{
				"text": "It's all correct",
				"path": "user-goodbye"
			}, {
		"text": "Forget it. I was just being curious",
				"path": "share-this"
			}]
		}
	],
	
	"user-email": [
		"Ok.",
		"By the way, you can always click on the previous bubbles to edit the answers you typed in.",
		"Give me your email address, I will get back to you.", {
			type: "write",
			path: "user-done"
		}
	],
	
	"user-goodbye": [
		"Sweet... :)",
		"Thank you. I will get back to you ASAP.", {
			type: "choose",
			answers: [{
				"text": "Great",
				"path": "done"
			}, {
				"text": "Well, that was serious!",
				"path": "tell-a-joke"
			}]
		}
	],
	
	"user-subject": [
		"Thanks.",
		"Can you tell me briefly, what our meetup will be about?", {
			type: "write",
			path: "user-email"
		}
	],
	
	"user-timeframe": [
		"Okie dokie...",
		"Now it's your turn to tell me a little about you.",
		"What's your name?", {
			type: "write",
			path: "user-about"
		}
	],
	
	"what-else": [
		"What else can I do for you?", {
			type: "choose",
			answers: [{
				"text": "Can we meet?",
				"path": "can-we-meet"
			}, {
				"text": "I want to contact you",
				"path": "email-me"
			}, {
				"text": "What is this?",
				"path": "what-is-this"
			}, {
				"text": "Nothing more, thanks. :)",
				"path": "done"
			}]
		}
	],
	
	"what-is-this": [
		"Oh, I'm assuming you did not reach this page from Into Binary's website?",
		"This chat bot was built specifically for people who are interested in Into Binary and want to get in touch with me.",
		"Speaking of which, follow our Facebook page: <a href='https://facebook.com/IntoBinary'>@IntoBinary</a>.", {
			type: "choose",
			answers: [{
				"text": "What is Into Binary?",
				"path": "what-is-into-binary"
			}, {
				"text": "Who are you?",
				"path": "who-are-you"
			}, {
				"text": "Ok...",
				"path": "tell-a-joke"
			}]
		}
	],
	
	"what-is-into-binary": [
		"Well, Into Binary is a tech charity.",
		"I deeply believe the 4th Industrial Revolution is Africa's moment to leapfrog. Into Binary is where I get to give back using the skills and tools of my profession.",
		"Would you like to know more?", {
			type: "choose",
			answers: [{
				"text": "Sure. Tell me more.",
				"path": "what-is-into-binary-more"
			}, {
				"text": "Nah. I'm good.",
				"path": "what-else"
			}]
		}
	],
	
	"what-is-into-binary-more": [
		"Started this 2021, Into Binary is in its seeds stage.",
		"I studied Information Technology in India. And have since grown a taste for tech beyond mere outputs of code. I longed to put new products into the world that solved real needs. And so, Into Binary was born.",
		"Software is eating the world and disrupting business of all kinds. I believe, it's not about 'apps' but rather how technology can open up new possibilities and make things and people smarter, faster and more streamlined. Into Binary, is my vessel to dream up, validate, and ultimately build those ideas.", {
			type: "choose",
			answers: [{
				"text": "Very interesting",
				"path": "what-else"
			}, {
				"text": "Alright. Whatever",
				"path": "done"
			}]
		}
	],
	
	"who-are-you": [
		"Yo nani?",
		"No one.",
		"But if it's my name you need, you may call me Ella. Madam Ella!",
		"Do you know Into Binary?", {
			type: "choose",
			answers: [{
				"text": "No, I don't. What is Into Binary?",
				"path": "what-is-into-binary"
			}, {
				"text": "Yes, I do.",
				"path": "what-else"
			}]
		}
	]
},
{
	targetNode: ".js-chatBot"
});

/*== [particlesJS] ==*/
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#f1c40f","#3498db","#9b59b6","#e74c3c"]
        },
        "shape": {
            "type": ["image", "image3"],
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "assets/images/picture1.png",
                "width": 100,
                "height": 100
            },
            "image3": {
                "src": "assets/images/picture3.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 15,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#03e960",
            "opacity": 0.6,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "remove"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;
/*=== END CUSTOM ===*/
