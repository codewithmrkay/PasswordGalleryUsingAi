(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Dm={exports:{}},rl={},Om={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qs=Symbol.for("react.element"),g0=Symbol.for("react.portal"),y0=Symbol.for("react.fragment"),v0=Symbol.for("react.strict_mode"),_0=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),T0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),A0=Symbol.for("react.lazy"),yf=Symbol.iterator;function P0(t){return t===null||typeof t!="object"?null:(t=yf&&t[yf]||t["@@iterator"],typeof t=="function"?t:null)}var Vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lm=Object.assign,xm={};function wi(t,e,n){this.props=t,this.context=e,this.refs=xm,this.updater=n||Vm}wi.prototype.isReactComponent={};wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mm(){}Mm.prototype=wi.prototype;function Kc(t,e,n){this.props=t,this.context=e,this.refs=xm,this.updater=n||Vm}var Gc=Kc.prototype=new Mm;Gc.constructor=Kc;Lm(Gc,wi.prototype);Gc.isPureReactComponent=!0;var vf=Array.isArray,Fm=Object.prototype.hasOwnProperty,qc={current:null},Um={key:!0,ref:!0,__self:!0,__source:!0};function bm(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Fm.call(e,r)&&!Um.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:qs,type:t,key:s,ref:a,props:i,_owner:qc.current}}function k0(t,e){return{$$typeof:qs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qc(t){return typeof t=="object"&&t!==null&&t.$$typeof===qs}function R0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _f=/\/+/g;function eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?R0(""+t.key):e.toString(36)}function Xo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case qs:case g0:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+eu(a,0):r,vf(i)?(n="",t!=null&&(n=t.replace(_f,"$&/")+"/"),Xo(i,e,n,"",function(d){return d})):i!=null&&(Qc(i)&&(i=k0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(_f,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",vf(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+eu(s,l);a+=Xo(s,e,n,u,i)}else if(u=P0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+eu(s,l++),a+=Xo(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ko(t,e,n){if(t==null)return t;var r=[],i=0;return Xo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function C0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var et={current:null},Yo={transition:null},N0={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:qc};function jm(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:ko,forEach:function(t,e,n){ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ko(t,function(){e++}),e},toArray:function(t){return ko(t,function(e){return e})||[]},only:function(t){if(!Qc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=wi;q.Fragment=y0;q.Profiler=_0;q.PureComponent=Kc;q.StrictMode=v0;q.Suspense=T0;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N0;q.act=jm;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lm({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=qc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Fm.call(e,u)&&!Um.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:qs,type:t.type,key:i,ref:s,props:r,_owner:a}};q.createContext=function(t){return t={$$typeof:w0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:E0,_context:t},t.Consumer=t};q.createElement=bm;q.createFactory=function(t){var e=bm.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:I0,render:t}};q.isValidElement=Qc;q.lazy=function(t){return{$$typeof:A0,_payload:{_status:-1,_result:t},_init:C0}};q.memo=function(t,e){return{$$typeof:S0,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Yo.transition;Yo.transition={};try{t()}finally{Yo.transition=e}};q.unstable_act=jm;q.useCallback=function(t,e){return et.current.useCallback(t,e)};q.useContext=function(t){return et.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return et.current.useDeferredValue(t)};q.useEffect=function(t,e){return et.current.useEffect(t,e)};q.useId=function(){return et.current.useId()};q.useImperativeHandle=function(t,e,n){return et.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return et.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return et.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return et.current.useMemo(t,e)};q.useReducer=function(t,e,n){return et.current.useReducer(t,e,n)};q.useRef=function(t){return et.current.useRef(t)};q.useState=function(t){return et.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return et.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return et.current.useTransition()};q.version="18.3.1";Om.exports=q;var Nt=Om.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0=Nt,O0=Symbol.for("react.element"),V0=Symbol.for("react.fragment"),L0=Object.prototype.hasOwnProperty,x0=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M0={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)L0.call(e,r)&&!M0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:O0,type:t,key:s,ref:a,props:i,_owner:x0.current}}rl.Fragment=V0;rl.jsx=Bm;rl.jsxs=Bm;Dm.exports=rl;var $e=Dm.exports,zm={exports:{}},ft={},$m={exports:{}},Hm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,W){var K=j.length;j.push(W);e:for(;0<K;){var ce=K-1>>>1,te=j[ce];if(0<i(te,W))j[ce]=W,j[K]=te,K=ce;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var W=j[0],K=j.pop();if(K!==W){j[0]=K;e:for(var ce=0,te=j.length,ye=te>>>1;ce<ye;){var Gt=2*(ce+1)-1,qt=j[Gt],Qt=Gt+1,Xt=j[Qt];if(0>i(qt,K))Qt<te&&0>i(Xt,qt)?(j[ce]=Xt,j[Qt]=K,ce=Qt):(j[ce]=qt,j[Gt]=K,ce=Gt);else if(Qt<te&&0>i(Xt,K))j[ce]=Xt,j[Qt]=K,ce=Qt;else break e}}return W}function i(j,W){var K=j.sortIndex-W.sortIndex;return K!==0?K:j.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],d=[],p=1,g=null,I=3,R=!1,N=!1,O=!1,F=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(j){for(var W=n(d);W!==null;){if(W.callback===null)r(d);else if(W.startTime<=j)r(d),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(d)}}function D(j){if(O=!1,S(j),!N)if(n(u)!==null)N=!0,Ri(b);else{var W=n(d);W!==null&&Kt(D,W.startTime-j)}}function b(j,W){N=!1,O&&(O=!1,T(m),m=-1),R=!0;var K=I;try{for(S(W),g=n(u);g!==null&&(!(g.expirationTime>W)||j&&!A());){var ce=g.callback;if(typeof ce=="function"){g.callback=null,I=g.priorityLevel;var te=ce(g.expirationTime<=W);W=t.unstable_now(),typeof te=="function"?g.callback=te:g===n(u)&&r(u),S(W)}else r(u);g=n(u)}if(g!==null)var ye=!0;else{var Gt=n(d);Gt!==null&&Kt(D,Gt.startTime-W),ye=!1}return ye}finally{g=null,I=K,R=!1}}var U=!1,v=null,m=-1,y=5,E=-1;function A(){return!(t.unstable_now()-E<y)}function k(){if(v!==null){var j=t.unstable_now();E=j;var W=!0;try{W=v(!0,j)}finally{W?w():(U=!1,v=null)}}else U=!1}var w;if(typeof _=="function")w=function(){_(k)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,nr=mt.port2;mt.port1.onmessage=k,w=function(){nr.postMessage(null)}}else w=function(){F(k,0)};function Ri(j){v=j,U||(U=!0,w())}function Kt(j,W){m=F(function(){j(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){N||R||(N=!0,Ri(b))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return I},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(I){case 1:case 2:case 3:var W=3;break;default:W=I}var K=I;I=W;try{return j()}finally{I=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,W){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=I;I=j;try{return W()}finally{I=K}},t.unstable_scheduleCallback=function(j,W,K){var ce=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ce+K:ce):K=ce,j){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=K+te,j={id:p++,callback:W,priorityLevel:j,startTime:K,expirationTime:te,sortIndex:-1},K>ce?(j.sortIndex=K,e(d,j),n(u)===null&&j===n(d)&&(O?(T(m),m=-1):O=!0,Kt(D,K-ce))):(j.sortIndex=te,e(u,j),N||R||(N=!0,Ri(b))),j},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(j){var W=I;return function(){var K=I;I=W;try{return j.apply(this,arguments)}finally{I=K}}}})(Hm);$m.exports=Hm;var F0=$m.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=Nt,dt=F0;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wm=new Set,ws={};function Nr(t,e){li(t,e),li(t+"Capture",e)}function li(t,e){for(ws[t]=e,t=0;t<e.length;t++)Wm.add(e[t])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=Object.prototype.hasOwnProperty,b0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ef={},wf={};function j0(t){return Mu.call(wf,t)?!0:Mu.call(Ef,t)?!1:b0.test(t)?wf[t]=!0:(Ef[t]=!0,!1)}function B0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function z0(t,e,n,r){if(e===null||typeof e>"u"||B0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tt(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Me[t]=new tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Me[e]=new tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Me[t]=new tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Me[t]=new tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Me[t]=new tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Me[t]=new tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Me[t]=new tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Me[t]=new tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Me[t]=new tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xc=/[\-:]([a-z])/g;function Yc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xc,Yc);Me[e]=new tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xc,Yc);Me[e]=new tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xc,Yc);Me[e]=new tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Me[t]=new tt(t,1,!1,t.toLowerCase(),null,!1,!1)});Me.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Me[t]=new tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jc(t,e,n,r){var i=Me.hasOwnProperty(e)?Me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(z0(e,n,i,r)&&(n=null),r||i===null?j0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vn=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),br=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),Zc=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),Km=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),eh=Symbol.for("react.forward_ref"),Uu=Symbol.for("react.suspense"),bu=Symbol.for("react.suspense_list"),th=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),qm=Symbol.for("react.offscreen"),If=Symbol.iterator;function $i(t){return t===null||typeof t!="object"?null:(t=If&&t[If]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,tu;function es(t){if(tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tu=e&&e[1]||""}return`
`+tu+t}var nu=!1;function ru(t,e){if(!t||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?es(t):""}function $0(t){switch(t.tag){case 5:return es(t.type);case 16:return es("Lazy");case 13:return es("Suspense");case 19:return es("SuspenseList");case 0:case 2:case 15:return t=ru(t.type,!1),t;case 11:return t=ru(t.type.render,!1),t;case 1:return t=ru(t.type,!0),t;default:return""}}function ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jr:return"Fragment";case br:return"Portal";case Fu:return"Profiler";case Zc:return"StrictMode";case Uu:return"Suspense";case bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gm:return(t.displayName||"Context")+".Consumer";case Km:return(t._context.displayName||"Context")+".Provider";case eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case th:return e=t.displayName||null,e!==null?e:ju(t.type)||"Memo";case An:e=t._payload,t=t._init;try{return ju(t(e))}catch{}}return null}function H0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(e);case 8:return e===Zc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function W0(t){var e=Qm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Co(t){t._valueTracker||(t._valueTracker=W0(t))}function Xm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Qm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var n=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ym(t,e){e=e.checked,e!=null&&Jc(t,"checked",e,!1)}function zu(t,e){Ym(t,e);var n=Wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$u(t,e.type,n):e.hasOwnProperty("defaultValue")&&$u(t,e.type,Wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $u(t,e,n){(e!=="number"||ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ts=Array.isArray;function Jr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Af(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(ts(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wn(n)}}function Jm(t,e){var n=Wn(e.value),r=Wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var No,eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=No.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Is(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var as={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K0=["Webkit","ms","Moz","O"];Object.keys(as).forEach(function(t){K0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),as[e]=as[t]})});function tg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||as.hasOwnProperty(t)&&as[t]?(""+e).trim():e+"px"}function ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var G0=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(t,e){if(e){if(G0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Gu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qu=null;function nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qu=null,Zr=null,ei=null;function kf(t){if(t=Ys(t)){if(typeof Qu!="function")throw Error(L(280));var e=t.stateNode;e&&(e=ll(e),Qu(t.stateNode,t.type,e))}}function rg(t){Zr?ei?ei.push(t):ei=[t]:Zr=t}function ig(){if(Zr){var t=Zr,e=ei;if(ei=Zr=null,kf(t),e)for(t=0;t<e.length;t++)kf(e[t])}}function sg(t,e){return t(e)}function og(){}var iu=!1;function ag(t,e,n){if(iu)return t(e,n);iu=!0;try{return sg(t,e,n)}finally{iu=!1,(Zr!==null||ei!==null)&&(og(),ig())}}function Ts(t,e){var n=t.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Xu=!1;if(dn)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Xu=!1}function q0(t,e,n,r,i,s,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var ls=!1,ga=null,ya=!1,Yu=null,Q0={onError:function(t){ls=!0,ga=t}};function X0(t,e,n,r,i,s,a,l,u){ls=!1,ga=null,q0.apply(Q0,arguments)}function Y0(t,e,n,r,i,s,a,l,u){if(X0.apply(this,arguments),ls){if(ls){var d=ga;ls=!1,ga=null}else throw Error(L(198));ya||(ya=!0,Yu=d)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rf(t){if(Dr(t)!==t)throw Error(L(188))}function J0(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rf(i),t;if(s===r)return Rf(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function ug(t){return t=J0(t),t!==null?cg(t):null}function cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cg(t);if(e!==null)return e;t=t.sibling}return null}var hg=dt.unstable_scheduleCallback,Cf=dt.unstable_cancelCallback,Z0=dt.unstable_shouldYield,eE=dt.unstable_requestPaint,ve=dt.unstable_now,tE=dt.unstable_getCurrentPriorityLevel,rh=dt.unstable_ImmediatePriority,dg=dt.unstable_UserBlockingPriority,va=dt.unstable_NormalPriority,nE=dt.unstable_LowPriority,fg=dt.unstable_IdlePriority,il=null,Bt=null;function rE(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(il,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:oE,iE=Math.log,sE=Math.LN2;function oE(t){return t>>>=0,t===0?32:31-(iE(t)/sE|0)|0}var Do=64,Oo=4194304;function ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _a(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ns(l):(s&=a,s!==0&&(r=ns(s)))}else a=n&~i,a!==0?r=ns(a):s!==0&&(r=ns(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Lt(e),i=1<<n,r|=t[n],e&=~i;return r}function aE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Lt(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=aE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pg(){var t=Do;return Do<<=1,!(Do&4194240)&&(Do=64),t}function su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Lt(e),t[e]=n}function uE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ih(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gg,sh,yg,vg,_g,Zu=!1,Vo=[],Ln=null,xn=null,Mn=null,Ss=new Map,As=new Map,kn=[],cE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(t,e){switch(t){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Ss.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":As.delete(e.pointerId)}}function Wi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ys(e),e!==null&&sh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hE(t,e,n,r,i){switch(e){case"focusin":return Ln=Wi(Ln,t,e,n,r,i),!0;case"dragenter":return xn=Wi(xn,t,e,n,r,i),!0;case"mouseover":return Mn=Wi(Mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ss.set(s,Wi(Ss.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,As.set(s,Wi(As.get(s)||null,t,e,n,r,i)),!0}return!1}function Eg(t){var e=cr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=lg(n),e!==null){t.blockedOn=e,_g(t.priority,function(){yg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ec(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qu=r,n.target.dispatchEvent(r),qu=null}else return e=Ys(n),e!==null&&sh(e),t.blockedOn=n,!1;e.shift()}return!0}function Df(t,e,n){Jo(t)&&n.delete(e)}function dE(){Zu=!1,Ln!==null&&Jo(Ln)&&(Ln=null),xn!==null&&Jo(xn)&&(xn=null),Mn!==null&&Jo(Mn)&&(Mn=null),Ss.forEach(Df),As.forEach(Df)}function Ki(t,e){t.blockedOn===e&&(t.blockedOn=null,Zu||(Zu=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,dE)))}function Ps(t){function e(i){return Ki(i,t)}if(0<Vo.length){Ki(Vo[0],t);for(var n=1;n<Vo.length;n++){var r=Vo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ln!==null&&Ki(Ln,t),xn!==null&&Ki(xn,t),Mn!==null&&Ki(Mn,t),Ss.forEach(e),As.forEach(e),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)Eg(n),n.blockedOn===null&&kn.shift()}var ti=vn.ReactCurrentBatchConfig,Ea=!0;function fE(t,e,n,r){var i=ee,s=ti.transition;ti.transition=null;try{ee=1,oh(t,e,n,r)}finally{ee=i,ti.transition=s}}function pE(t,e,n,r){var i=ee,s=ti.transition;ti.transition=null;try{ee=4,oh(t,e,n,r)}finally{ee=i,ti.transition=s}}function oh(t,e,n,r){if(Ea){var i=ec(t,e,n,r);if(i===null)mu(t,e,r,wa,n),Nf(t,r);else if(hE(i,t,e,n,r))r.stopPropagation();else if(Nf(t,r),e&4&&-1<cE.indexOf(t)){for(;i!==null;){var s=Ys(i);if(s!==null&&gg(s),s=ec(t,e,n,r),s===null&&mu(t,e,r,wa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mu(t,e,r,null,n)}}var wa=null;function ec(t,e,n,r){if(wa=null,t=nh(r),t=cr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wa=t,null}function wg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tE()){case rh:return 1;case dg:return 4;case va:case nE:return 16;case fg:return 536870912;default:return 16}default:return 16}}var On=null,ah=null,Zo=null;function Ig(){if(Zo)return Zo;var t,e=ah,n=e.length,r,i="value"in On?On.value:On.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Zo=i.slice(t,1<r?1-r:void 0)}function ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Lo(){return!0}function Of(){return!1}function pt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Lo:Of,this.isPropagationStopped=Of,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),e}var Ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lh=pt(Ii),Xs=pe({},Ii,{view:0,detail:0}),mE=pt(Xs),ou,au,Gi,sl=pe({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gi&&(Gi&&t.type==="mousemove"?(ou=t.screenX-Gi.screenX,au=t.screenY-Gi.screenY):au=ou=0,Gi=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:au}}),Vf=pt(sl),gE=pe({},sl,{dataTransfer:0}),yE=pt(gE),vE=pe({},Xs,{relatedTarget:0}),lu=pt(vE),_E=pe({},Ii,{animationName:0,elapsedTime:0,pseudoElement:0}),EE=pt(_E),wE=pe({},Ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IE=pt(wE),TE=pe({},Ii,{data:0}),Lf=pt(TE),SE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PE[t])?!!e[t]:!1}function uh(){return kE}var RE=pe({},Xs,{key:function(t){if(t.key){var e=SE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uh,charCode:function(t){return t.type==="keypress"?ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CE=pt(RE),NE=pe({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=pt(NE),DE=pe({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uh}),OE=pt(DE),VE=pe({},Ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),LE=pt(VE),xE=pe({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ME=pt(xE),FE=[9,13,27,32],ch=dn&&"CompositionEvent"in window,us=null;dn&&"documentMode"in document&&(us=document.documentMode);var UE=dn&&"TextEvent"in window&&!us,Tg=dn&&(!ch||us&&8<us&&11>=us),Mf=" ",Ff=!1;function Sg(t,e){switch(t){case"keyup":return FE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function bE(t,e){switch(t){case"compositionend":return Ag(e);case"keypress":return e.which!==32?null:(Ff=!0,Mf);case"textInput":return t=e.data,t===Mf&&Ff?null:t;default:return null}}function jE(t,e){if(Br)return t==="compositionend"||!ch&&Sg(t,e)?(t=Ig(),Zo=ah=On=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tg&&e.locale!=="ko"?null:e.data;default:return null}}var BE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BE[t.type]:e==="textarea"}function Pg(t,e,n,r){rg(r),e=Ia(e,"onChange"),0<e.length&&(n=new lh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var cs=null,ks=null;function zE(t){Fg(t,0)}function ol(t){var e=Hr(t);if(Xm(e))return t}function $E(t,e){if(t==="change")return e}var kg=!1;if(dn){var uu;if(dn){var cu="oninput"in document;if(!cu){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),cu=typeof bf.oninput=="function"}uu=cu}else uu=!1;kg=uu&&(!document.documentMode||9<document.documentMode)}function jf(){cs&&(cs.detachEvent("onpropertychange",Rg),ks=cs=null)}function Rg(t){if(t.propertyName==="value"&&ol(ks)){var e=[];Pg(e,ks,t,nh(t)),ag(zE,e)}}function HE(t,e,n){t==="focusin"?(jf(),cs=e,ks=n,cs.attachEvent("onpropertychange",Rg)):t==="focusout"&&jf()}function WE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(ks)}function KE(t,e){if(t==="click")return ol(e)}function GE(t,e){if(t==="input"||t==="change")return ol(e)}function qE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:qE;function Rs(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mu.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function Bf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zf(t,e){var n=Bf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bf(n)}}function Cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ng(){for(var t=window,e=ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ma(t.document)}return e}function hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function QE(t){var e=Ng(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cg(n.ownerDocument.documentElement,n)){if(r!==null&&hh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zf(n,s);var a=zf(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var XE=dn&&"documentMode"in document&&11>=document.documentMode,zr=null,tc=null,hs=null,nc=!1;function $f(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nc||zr==null||zr!==ma(r)||(r=zr,"selectionStart"in r&&hh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hs&&Rs(hs,r)||(hs=r,r=Ia(tc,"onSelect"),0<r.length&&(e=new lh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zr)))}function xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},hu={},Dg={};dn&&(Dg=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function al(t){if(hu[t])return hu[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dg)return hu[t]=e[n];return t}var Og=al("animationend"),Vg=al("animationiteration"),Lg=al("animationstart"),xg=al("transitionend"),Mg=new Map,Hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(t,e){Mg.set(t,e),Nr(e,[t])}for(var du=0;du<Hf.length;du++){var fu=Hf[du],YE=fu.toLowerCase(),JE=fu[0].toUpperCase()+fu.slice(1);Xn(YE,"on"+JE)}Xn(Og,"onAnimationEnd");Xn(Vg,"onAnimationIteration");Xn(Lg,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(xg,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZE=new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));function Wf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Y0(r,e,void 0,t),t.currentTarget=null}function Fg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Wf(i,l,d),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Wf(i,l,d),s=u}}}if(ya)throw t=Yu,ya=!1,Yu=null,t}function ae(t,e){var n=e[ac];n===void 0&&(n=e[ac]=new Set);var r=t+"__bubble";n.has(r)||(Ug(e,t,2,!1),n.add(r))}function pu(t,e,n){var r=0;e&&(r|=4),Ug(n,t,r,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Cs(t){if(!t[Mo]){t[Mo]=!0,Wm.forEach(function(n){n!=="selectionchange"&&(ZE.has(n)||pu(n,!1,t),pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,pu("selectionchange",!1,e))}}function Ug(t,e,n,r){switch(wg(e)){case 1:var i=fE;break;case 4:i=pE;break;default:i=oh}n=i.bind(null,e,n,t),i=void 0,!Xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=cr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}ag(function(){var d=s,p=nh(n),g=[];e:{var I=Mg.get(t);if(I!==void 0){var R=lh,N=t;switch(t){case"keypress":if(ea(n)===0)break e;case"keydown":case"keyup":R=CE;break;case"focusin":N="focus",R=lu;break;case"focusout":N="blur",R=lu;break;case"beforeblur":case"afterblur":R=lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=yE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=OE;break;case Og:case Vg:case Lg:R=EE;break;case xg:R=LE;break;case"scroll":R=mE;break;case"wheel":R=ME;break;case"copy":case"cut":case"paste":R=IE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=xf}var O=(e&4)!==0,F=!O&&t==="scroll",T=O?I!==null?I+"Capture":null:I;O=[];for(var _=d,S;_!==null;){S=_;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,T!==null&&(D=Ts(_,T),D!=null&&O.push(Ns(_,D,S)))),F)break;_=_.return}0<O.length&&(I=new R(I,N,null,n,p),g.push({event:I,listeners:O}))}}if(!(e&7)){e:{if(I=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",I&&n!==qu&&(N=n.relatedTarget||n.fromElement)&&(cr(N)||N[fn]))break e;if((R||I)&&(I=p.window===p?p:(I=p.ownerDocument)?I.defaultView||I.parentWindow:window,R?(N=n.relatedTarget||n.toElement,R=d,N=N?cr(N):null,N!==null&&(F=Dr(N),N!==F||N.tag!==5&&N.tag!==6)&&(N=null)):(R=null,N=d),R!==N)){if(O=Vf,D="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(O=xf,D="onPointerLeave",T="onPointerEnter",_="pointer"),F=R==null?I:Hr(R),S=N==null?I:Hr(N),I=new O(D,_+"leave",R,n,p),I.target=F,I.relatedTarget=S,D=null,cr(p)===d&&(O=new O(T,_+"enter",N,n,p),O.target=S,O.relatedTarget=F,D=O),F=D,R&&N)t:{for(O=R,T=N,_=0,S=O;S;S=Fr(S))_++;for(S=0,D=T;D;D=Fr(D))S++;for(;0<_-S;)O=Fr(O),_--;for(;0<S-_;)T=Fr(T),S--;for(;_--;){if(O===T||T!==null&&O===T.alternate)break t;O=Fr(O),T=Fr(T)}O=null}else O=null;R!==null&&Kf(g,I,R,O,!1),N!==null&&F!==null&&Kf(g,F,N,O,!0)}}e:{if(I=d?Hr(d):window,R=I.nodeName&&I.nodeName.toLowerCase(),R==="select"||R==="input"&&I.type==="file")var b=$E;else if(Uf(I))if(kg)b=GE;else{b=WE;var U=HE}else(R=I.nodeName)&&R.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(b=KE);if(b&&(b=b(t,d))){Pg(g,b,n,p);break e}U&&U(t,I,d),t==="focusout"&&(U=I._wrapperState)&&U.controlled&&I.type==="number"&&$u(I,"number",I.value)}switch(U=d?Hr(d):window,t){case"focusin":(Uf(U)||U.contentEditable==="true")&&(zr=U,tc=d,hs=null);break;case"focusout":hs=tc=zr=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,$f(g,n,p);break;case"selectionchange":if(XE)break;case"keydown":case"keyup":$f(g,n,p)}var v;if(ch)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Br?Sg(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Tg&&n.locale!=="ko"&&(Br||m!=="onCompositionStart"?m==="onCompositionEnd"&&Br&&(v=Ig()):(On=p,ah="value"in On?On.value:On.textContent,Br=!0)),U=Ia(d,m),0<U.length&&(m=new Lf(m,t,null,n,p),g.push({event:m,listeners:U}),v?m.data=v:(v=Ag(n),v!==null&&(m.data=v)))),(v=UE?bE(t,n):jE(t,n))&&(d=Ia(d,"onBeforeInput"),0<d.length&&(p=new Lf("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:d}),p.data=v))}Fg(g,e)})}function Ns(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ia(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ts(t,n),s!=null&&r.unshift(Ns(t,s,i)),s=Ts(t,e),s!=null&&r.push(Ns(t,s,i))),t=t.return}return r}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kf(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Ts(n,s),u!=null&&a.unshift(Ns(n,u,l))):i||(u=Ts(n,s),u!=null&&a.push(Ns(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ew=/\r\n?/g,tw=/\u0000|\uFFFD/g;function Gf(t){return(typeof t=="string"?t:""+t).replace(ew,`
`).replace(tw,"")}function Fo(t,e,n){if(e=Gf(e),Gf(t)!==e&&n)throw Error(L(425))}function Ta(){}var rc=null,ic=null;function sc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var oc=typeof setTimeout=="function"?setTimeout:void 0,nw=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,rw=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(t){return qf.resolve(null).then(t).catch(iw)}:oc;function iw(t){setTimeout(function(){throw t})}function gu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ps(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ps(e)}function Fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),jt="__reactFiber$"+Ti,Ds="__reactProps$"+Ti,fn="__reactContainer$"+Ti,ac="__reactEvents$"+Ti,sw="__reactListeners$"+Ti,ow="__reactHandles$"+Ti;function cr(t){var e=t[jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fn]||n[jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qf(t);t!==null;){if(n=t[jt])return n;t=Qf(t)}return e}t=n,n=t.parentNode}return null}function Ys(t){return t=t[jt]||t[fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function ll(t){return t[Ds]||null}var lc=[],Wr=-1;function Yn(t){return{current:t}}function le(t){0>Wr||(t.current=lc[Wr],lc[Wr]=null,Wr--)}function ie(t,e){Wr++,lc[Wr]=t.current,t.current=e}var Kn={},qe=Yn(Kn),it=Yn(!1),_r=Kn;function ui(t,e){var n=t.type.contextTypes;if(!n)return Kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function st(t){return t=t.childContextTypes,t!=null}function Sa(){le(it),le(qe)}function Xf(t,e,n){if(qe.current!==Kn)throw Error(L(168));ie(qe,e),ie(it,n)}function bg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,H0(t)||"Unknown",i));return pe({},n,r)}function Aa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kn,_r=qe.current,ie(qe,t),ie(it,it.current),!0}function Yf(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=bg(t,e,_r),r.__reactInternalMemoizedMergedChildContext=t,le(it),le(qe),ie(qe,t)):le(it),ie(it,n)}var en=null,ul=!1,yu=!1;function jg(t){en===null?en=[t]:en.push(t)}function aw(t){ul=!0,jg(t)}function Jn(){if(!yu&&en!==null){yu=!0;var t=0,e=ee;try{var n=en;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}en=null,ul=!1}catch(i){throw en!==null&&(en=en.slice(t+1)),hg(rh,Jn),i}finally{ee=e,yu=!1}}return null}var Kr=[],Gr=0,Pa=null,ka=0,gt=[],yt=0,Er=null,nn=1,rn="";function ar(t,e){Kr[Gr++]=ka,Kr[Gr++]=Pa,Pa=t,ka=e}function Bg(t,e,n){gt[yt++]=nn,gt[yt++]=rn,gt[yt++]=Er,Er=t;var r=nn;t=rn;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var s=32-Lt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,nn=1<<32-Lt(e)+i|n<<i|r,rn=s+t}else nn=1<<s|n<<i|r,rn=t}function dh(t){t.return!==null&&(ar(t,1),Bg(t,1,0))}function fh(t){for(;t===Pa;)Pa=Kr[--Gr],Kr[Gr]=null,ka=Kr[--Gr],Kr[Gr]=null;for(;t===Er;)Er=gt[--yt],gt[yt]=null,rn=gt[--yt],gt[yt]=null,nn=gt[--yt],gt[yt]=null}var ht=null,ct=null,ue=!1,Rt=null;function zg(t,e){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ht=t,ct=Fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ht=t,ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:nn,overflow:rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ht=t,ct=null,!0):!1;default:return!1}}function uc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cc(t){if(ue){var e=ct;if(e){var n=e;if(!Jf(t,e)){if(uc(t))throw Error(L(418));e=Fn(n.nextSibling);var r=ht;e&&Jf(t,e)?zg(r,n):(t.flags=t.flags&-4097|2,ue=!1,ht=t)}}else{if(uc(t))throw Error(L(418));t.flags=t.flags&-4097|2,ue=!1,ht=t}}}function Zf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ht=t}function Uo(t){if(t!==ht)return!1;if(!ue)return Zf(t),ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sc(t.type,t.memoizedProps)),e&&(e=ct)){if(uc(t))throw $g(),Error(L(418));for(;e;)zg(t,e),e=Fn(e.nextSibling)}if(Zf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ct=Fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ct=null}}else ct=ht?Fn(t.stateNode.nextSibling):null;return!0}function $g(){for(var t=ct;t;)t=Fn(t.nextSibling)}function ci(){ct=ht=null,ue=!1}function ph(t){Rt===null?Rt=[t]:Rt.push(t)}var lw=vn.ReactCurrentBatchConfig;function qi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function bo(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ep(t){var e=t._init;return e(t._payload)}function Hg(t){function e(T,_){if(t){var S=T.deletions;S===null?(T.deletions=[_],T.flags|=16):S.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function i(T,_){return T=Bn(T,_),T.index=0,T.sibling=null,T}function s(T,_,S){return T.index=S,t?(S=T.alternate,S!==null?(S=S.index,S<_?(T.flags|=2,_):S):(T.flags|=2,_)):(T.flags|=1048576,_)}function a(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,_,S,D){return _===null||_.tag!==6?(_=Su(S,T.mode,D),_.return=T,_):(_=i(_,S),_.return=T,_)}function u(T,_,S,D){var b=S.type;return b===jr?p(T,_,S.props.children,D,S.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===An&&ep(b)===_.type)?(D=i(_,S.props),D.ref=qi(T,_,S),D.return=T,D):(D=aa(S.type,S.key,S.props,null,T.mode,D),D.ref=qi(T,_,S),D.return=T,D)}function d(T,_,S,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Au(S,T.mode,D),_.return=T,_):(_=i(_,S.children||[]),_.return=T,_)}function p(T,_,S,D,b){return _===null||_.tag!==7?(_=gr(S,T.mode,D,b),_.return=T,_):(_=i(_,S),_.return=T,_)}function g(T,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Su(""+_,T.mode,S),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ro:return S=aa(_.type,_.key,_.props,null,T.mode,S),S.ref=qi(T,null,_),S.return=T,S;case br:return _=Au(_,T.mode,S),_.return=T,_;case An:var D=_._init;return g(T,D(_._payload),S)}if(ts(_)||$i(_))return _=gr(_,T.mode,S,null),_.return=T,_;bo(T,_)}return null}function I(T,_,S,D){var b=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return b!==null?null:l(T,_,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:return S.key===b?u(T,_,S,D):null;case br:return S.key===b?d(T,_,S,D):null;case An:return b=S._init,I(T,_,b(S._payload),D)}if(ts(S)||$i(S))return b!==null?null:p(T,_,S,D,null);bo(T,S)}return null}function R(T,_,S,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(S)||null,l(_,T,""+D,b);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ro:return T=T.get(D.key===null?S:D.key)||null,u(_,T,D,b);case br:return T=T.get(D.key===null?S:D.key)||null,d(_,T,D,b);case An:var U=D._init;return R(T,_,S,U(D._payload),b)}if(ts(D)||$i(D))return T=T.get(S)||null,p(_,T,D,b,null);bo(_,D)}return null}function N(T,_,S,D){for(var b=null,U=null,v=_,m=_=0,y=null;v!==null&&m<S.length;m++){v.index>m?(y=v,v=null):y=v.sibling;var E=I(T,v,S[m],D);if(E===null){v===null&&(v=y);break}t&&v&&E.alternate===null&&e(T,v),_=s(E,_,m),U===null?b=E:U.sibling=E,U=E,v=y}if(m===S.length)return n(T,v),ue&&ar(T,m),b;if(v===null){for(;m<S.length;m++)v=g(T,S[m],D),v!==null&&(_=s(v,_,m),U===null?b=v:U.sibling=v,U=v);return ue&&ar(T,m),b}for(v=r(T,v);m<S.length;m++)y=R(v,T,m,S[m],D),y!==null&&(t&&y.alternate!==null&&v.delete(y.key===null?m:y.key),_=s(y,_,m),U===null?b=y:U.sibling=y,U=y);return t&&v.forEach(function(A){return e(T,A)}),ue&&ar(T,m),b}function O(T,_,S,D){var b=$i(S);if(typeof b!="function")throw Error(L(150));if(S=b.call(S),S==null)throw Error(L(151));for(var U=b=null,v=_,m=_=0,y=null,E=S.next();v!==null&&!E.done;m++,E=S.next()){v.index>m?(y=v,v=null):y=v.sibling;var A=I(T,v,E.value,D);if(A===null){v===null&&(v=y);break}t&&v&&A.alternate===null&&e(T,v),_=s(A,_,m),U===null?b=A:U.sibling=A,U=A,v=y}if(E.done)return n(T,v),ue&&ar(T,m),b;if(v===null){for(;!E.done;m++,E=S.next())E=g(T,E.value,D),E!==null&&(_=s(E,_,m),U===null?b=E:U.sibling=E,U=E);return ue&&ar(T,m),b}for(v=r(T,v);!E.done;m++,E=S.next())E=R(v,T,m,E.value,D),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?m:E.key),_=s(E,_,m),U===null?b=E:U.sibling=E,U=E);return t&&v.forEach(function(k){return e(T,k)}),ue&&ar(T,m),b}function F(T,_,S,D){if(typeof S=="object"&&S!==null&&S.type===jr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:e:{for(var b=S.key,U=_;U!==null;){if(U.key===b){if(b=S.type,b===jr){if(U.tag===7){n(T,U.sibling),_=i(U,S.props.children),_.return=T,T=_;break e}}else if(U.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===An&&ep(b)===U.type){n(T,U.sibling),_=i(U,S.props),_.ref=qi(T,U,S),_.return=T,T=_;break e}n(T,U);break}else e(T,U);U=U.sibling}S.type===jr?(_=gr(S.props.children,T.mode,D,S.key),_.return=T,T=_):(D=aa(S.type,S.key,S.props,null,T.mode,D),D.ref=qi(T,_,S),D.return=T,T=D)}return a(T);case br:e:{for(U=S.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(T,_.sibling),_=i(_,S.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=Au(S,T.mode,D),_.return=T,T=_}return a(T);case An:return U=S._init,F(T,_,U(S._payload),D)}if(ts(S))return N(T,_,S,D);if($i(S))return O(T,_,S,D);bo(T,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(T,_.sibling),_=i(_,S),_.return=T,T=_):(n(T,_),_=Su(S,T.mode,D),_.return=T,T=_),a(T)):n(T,_)}return F}var hi=Hg(!0),Wg=Hg(!1),Ra=Yn(null),Ca=null,qr=null,mh=null;function gh(){mh=qr=Ca=null}function yh(t){var e=Ra.current;le(Ra),t._currentValue=e}function hc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ni(t,e){Ca=t,mh=qr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rt=!0),t.firstContext=null)}function Et(t){var e=t._currentValue;if(mh!==t)if(t={context:t,memoizedValue:e,next:null},qr===null){if(Ca===null)throw Error(L(308));qr=t,Ca.dependencies={lanes:0,firstContext:t}}else qr=qr.next=t;return e}var hr=null;function vh(t){hr===null?hr=[t]:hr.push(t)}function Kg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vh(e)):(n.next=i.next,i.next=n),e.interleaved=n,pn(t,r)}function pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pn=!1;function _h(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,pn(t,n)}return i=r.interleaved,i===null?(e.next=e,vh(r)):(e.next=i.next,i.next=e),r.interleaved=e,pn(t,n)}function ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ih(t,n)}}function tp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Na(t,e,n,r){var i=t.updateQueue;Pn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?s=d:a.next=d,a=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==a&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;a=0,p=d=u=null,l=s;do{var I=l.lane,R=l.eventTime;if((r&I)===I){p!==null&&(p=p.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,O=l;switch(I=e,R=n,O.tag){case 1:if(N=O.payload,typeof N=="function"){g=N.call(R,g,I);break e}g=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=O.payload,I=typeof N=="function"?N.call(R,g,I):N,I==null)break e;g=pe({},g,I);break e;case 2:Pn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,I=i.effects,I===null?i.effects=[l]:I.push(l))}else R={eventTime:R,lane:I,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=R,u=g):p=p.next=R,a|=I;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;I=l,l=I.next,I.next=null,i.lastBaseUpdate=I,i.shared.pending=null}}while(!0);if(p===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ir|=a,t.lanes=a,t.memoizedState=g}}function np(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Js={},zt=Yn(Js),Os=Yn(Js),Vs=Yn(Js);function dr(t){if(t===Js)throw Error(L(174));return t}function Eh(t,e){switch(ie(Vs,e),ie(Os,t),ie(zt,Js),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}le(zt),ie(zt,e)}function di(){le(zt),le(Os),le(Vs)}function qg(t){dr(Vs.current);var e=dr(zt.current),n=Wu(e,t.type);e!==n&&(ie(Os,t),ie(zt,n))}function wh(t){Os.current===t&&(le(zt),le(Os))}var de=Yn(0);function Da(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vu=[];function Ih(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var na=vn.ReactCurrentDispatcher,_u=vn.ReactCurrentBatchConfig,wr=0,fe=null,Ie=null,Pe=null,Oa=!1,ds=!1,Ls=0,uw=0;function je(){throw Error(L(321))}function Th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function Sh(t,e,n,r,i,s){if(wr=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,na.current=t===null||t.memoizedState===null?fw:pw,t=n(r,i),ds){s=0;do{if(ds=!1,Ls=0,25<=s)throw Error(L(301));s+=1,Pe=Ie=null,e.updateQueue=null,na.current=mw,t=n(r,i)}while(ds)}if(na.current=Va,e=Ie!==null&&Ie.next!==null,wr=0,Pe=Ie=fe=null,Oa=!1,e)throw Error(L(300));return t}function Ah(){var t=Ls!==0;return Ls=0,t}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?fe.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function wt(){if(Ie===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=Pe===null?fe.memoizedState:Pe.next;if(e!==null)Pe=e,Ie=t;else{if(t===null)throw Error(L(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Pe===null?fe.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function xs(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=wt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,d=s;do{var p=d.lane;if((wr&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,a=r):u=u.next=g,fe.lanes|=p,Ir|=p}d=d.next}while(d!==null&&d!==s);u===null?a=r:u.next=l,Ft(r,e.memoizedState)||(rt=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,fe.lanes|=s,Ir|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wu(t){var e=wt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Ft(s,e.memoizedState)||(rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Qg(){}function Xg(t,e){var n=fe,r=wt(),i=e(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,rt=!0),r=r.queue,Ph(Zg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Ms(9,Jg.bind(null,n,r,i,e),void 0,null),Re===null)throw Error(L(349));wr&30||Yg(n,e,i)}return i}function Yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jg(t,e,n,r){e.value=n,e.getSnapshot=r,ey(e)&&ty(t)}function Zg(t,e,n){return n(function(){ey(e)&&ty(t)})}function ey(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function ty(t){var e=pn(t,1);e!==null&&xt(e,t,1,-1)}function rp(t){var e=bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:t},e.queue=t,t=t.dispatch=dw.bind(null,fe,t),[e.memoizedState,t]}function Ms(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ny(){return wt().memoizedState}function ra(t,e,n,r){var i=bt();fe.flags|=t,i.memoizedState=Ms(1|e,n,void 0,r===void 0?null:r)}function cl(t,e,n,r){var i=wt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var a=Ie.memoizedState;if(s=a.destroy,r!==null&&Th(r,a.deps)){i.memoizedState=Ms(e,n,s,r);return}}fe.flags|=t,i.memoizedState=Ms(1|e,n,s,r)}function ip(t,e){return ra(8390656,8,t,e)}function Ph(t,e){return cl(2048,8,t,e)}function ry(t,e){return cl(4,2,t,e)}function iy(t,e){return cl(4,4,t,e)}function sy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function oy(t,e,n){return n=n!=null?n.concat([t]):null,cl(4,4,sy.bind(null,e,t),n)}function kh(){}function ay(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Th(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ly(t,e){var n=wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Th(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function uy(t,e,n){return wr&21?(Ft(n,e)||(n=pg(),fe.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rt=!0),t.memoizedState=n)}function cw(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=_u.transition;_u.transition={};try{t(!1),e()}finally{ee=n,_u.transition=r}}function cy(){return wt().memoizedState}function hw(t,e,n){var r=jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hy(t))dy(e,n);else if(n=Kg(t,e,n,r),n!==null){var i=Ze();xt(n,t,r,i),fy(n,e,r)}}function dw(t,e,n){var r=jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hy(t))dy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ft(l,a)){var u=e.interleaved;u===null?(i.next=i,vh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Kg(t,e,i,r),n!==null&&(i=Ze(),xt(n,t,r,i),fy(n,e,r))}}function hy(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function dy(t,e){ds=Oa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ih(t,n)}}var Va={readContext:Et,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},fw={readContext:Et,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:Et,useEffect:ip,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ra(4194308,4,sy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return ra(4,2,t,e)},useMemo:function(t,e){var n=bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hw.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:rp,useDebugValue:kh,useDeferredValue:function(t){return bt().memoizedState=t},useTransition:function(){var t=rp(!1),e=t[0];return t=cw.bind(null,t[1]),bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=fe,i=bt();if(ue){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Re===null)throw Error(L(349));wr&30||Yg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ip(Zg.bind(null,r,s,t),[t]),r.flags|=2048,Ms(9,Jg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=bt(),e=Re.identifierPrefix;if(ue){var n=rn,r=nn;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ls++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pw={readContext:Et,useCallback:ay,useContext:Et,useEffect:Ph,useImperativeHandle:oy,useInsertionEffect:ry,useLayoutEffect:iy,useMemo:ly,useReducer:Eu,useRef:ny,useState:function(){return Eu(xs)},useDebugValue:kh,useDeferredValue:function(t){var e=wt();return uy(e,Ie.memoizedState,t)},useTransition:function(){var t=Eu(xs)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Qg,useSyncExternalStore:Xg,useId:cy,unstable_isNewReconciler:!1},mw={readContext:Et,useCallback:ay,useContext:Et,useEffect:Ph,useImperativeHandle:oy,useInsertionEffect:ry,useLayoutEffect:iy,useMemo:ly,useReducer:wu,useRef:ny,useState:function(){return wu(xs)},useDebugValue:kh,useDeferredValue:function(t){var e=wt();return Ie===null?e.memoizedState=t:uy(e,Ie.memoizedState,t)},useTransition:function(){var t=wu(xs)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Qg,useSyncExternalStore:Xg,useId:cy,unstable_isNewReconciler:!1};function Pt(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=jn(t),s=ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=Un(t,s,i),e!==null&&(xt(e,t,i,r),ta(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=jn(t),s=ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Un(t,s,i),e!==null&&(xt(e,t,i,r),ta(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ze(),r=jn(t),i=ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=Un(t,i,r),e!==null&&(xt(e,t,r,n),ta(e,t,r))}};function sp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Rs(n,r)||!Rs(i,s):!0}function py(t,e,n){var r=!1,i=Kn,s=e.contextType;return typeof s=="object"&&s!==null?s=Et(s):(i=st(e)?_r:qe.current,r=e.contextTypes,s=(r=r!=null)?ui(t,i):Kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function op(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hl.enqueueReplaceState(e,e.state,null)}function fc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_h(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Et(s):(s=st(e)?_r:qe.current,i.context=ui(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hl.enqueueReplaceState(i,i.state,null),Na(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fi(t,e){try{var n="",r=e;do n+=$0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Iu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gw=typeof WeakMap=="function"?WeakMap:Map;function my(t,e,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xa||(xa=!0,Sc=r),pc(t,e)},n}function gy(t,e,n){n=ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){pc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pc(t,e),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ap(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Nw.bind(null,t,e,n),e.then(t,t))}function lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function up(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ln(-1,1),e.tag=2,Un(n,e,1))),n.lanes|=1),t)}var yw=vn.ReactCurrentOwner,rt=!1;function Je(t,e,n,r){e.child=t===null?Wg(e,null,n,r):hi(e,t.child,n,r)}function cp(t,e,n,r,i){n=n.render;var s=e.ref;return ni(e,i),r=Sh(t,e,n,r,s,i),n=Ah(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mn(t,e,i)):(ue&&n&&dh(e),e.flags|=1,Je(t,e,r,i),e.child)}function hp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yy(t,e,s,r,i)):(t=aa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Rs,n(a,r)&&t.ref===e.ref)return mn(t,e,i)}return e.flags|=1,t=Bn(s,r),t.ref=e.ref,t.return=e,e.child=t}function yy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Rs(s,r)&&t.ref===e.ref)if(rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rt=!0);else return e.lanes=t.lanes,mn(t,e,i)}return mc(t,e,n,r,i)}function vy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Xr,ut),ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(Xr,ut),ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(Xr,ut),ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(Xr,ut),ut|=r;return Je(t,e,i,n),e.child}function _y(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mc(t,e,n,r,i){var s=st(n)?_r:qe.current;return s=ui(e,s),ni(e,i),n=Sh(t,e,n,r,s,i),r=Ah(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mn(t,e,i)):(ue&&r&&dh(e),e.flags|=1,Je(t,e,n,i),e.child)}function dp(t,e,n,r,i){if(st(n)){var s=!0;Aa(e)}else s=!1;if(ni(e,i),e.stateNode===null)ia(t,e),py(e,n,r),fc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Et(d):(d=st(n)?_r:qe.current,d=ui(e,d));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&op(e,a,r,d),Pn=!1;var I=e.memoizedState;a.state=I,Na(e,r,a,i),u=e.memoizedState,l!==r||I!==u||it.current||Pn?(typeof p=="function"&&(dc(e,n,p,r),u=e.memoizedState),(l=Pn||sp(e,n,l,r,I,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Gg(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Pt(e.type,l),a.props=d,g=e.pendingProps,I=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Et(u):(u=st(n)?_r:qe.current,u=ui(e,u));var R=n.getDerivedStateFromProps;(p=typeof R=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||I!==u)&&op(e,a,r,u),Pn=!1,I=e.memoizedState,a.state=I,Na(e,r,a,i);var N=e.memoizedState;l!==g||I!==N||it.current||Pn?(typeof R=="function"&&(dc(e,n,R,r),N=e.memoizedState),(d=Pn||sp(e,n,d,r,I,N,u)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&I===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&I===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),a.props=r,a.state=N,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&I===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&I===t.memoizedState||(e.flags|=1024),r=!1)}return gc(t,e,n,r,s,i)}function gc(t,e,n,r,i,s){_y(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Yf(e,n,!1),mn(t,e,s);r=e.stateNode,yw.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=hi(e,t.child,null,s),e.child=hi(e,null,l,s)):Je(t,e,l,s),e.memoizedState=r.state,i&&Yf(e,n,!0),e.child}function Ey(t){var e=t.stateNode;e.pendingContext?Xf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xf(t,e.context,!1),Eh(t,e.containerInfo)}function fp(t,e,n,r,i){return ci(),ph(i),e.flags|=256,Je(t,e,n,r),e.child}var yc={dehydrated:null,treeContext:null,retryLane:0};function vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function wy(t,e,n){var r=e.pendingProps,i=de.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(de,i&1),t===null)return cc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=pl(a,r,0,null),t=gr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vc(n),e.memoizedState=yc,t):Rh(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return vw(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Bn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Bn(l,s):(s=gr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?vc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=yc,r}return s=t.child,t=s.sibling,r=Bn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rh(t,e){return e=pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jo(t,e,n,r){return r!==null&&ph(r),hi(e,t.child,null,n),t=Rh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vw(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=Iu(Error(L(422))),jo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pl({mode:"visible",children:r.children},i,0,null),s=gr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&hi(e,t.child,null,a),e.child.memoizedState=vc(a),e.memoizedState=yc,s);if(!(e.mode&1))return jo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=Iu(s,r,void 0),jo(t,e,a,r)}if(l=(a&t.childLanes)!==0,rt||l){if(r=Re,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,pn(t,i),xt(r,t,i,-1))}return Lh(),r=Iu(Error(L(421))),jo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Dw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ct=Fn(i.nextSibling),ht=e,ue=!0,Rt=null,t!==null&&(gt[yt++]=nn,gt[yt++]=rn,gt[yt++]=Er,nn=t.id,rn=t.overflow,Er=e),e=Rh(e,r.children),e.flags|=4096,e)}function pp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hc(t.return,e,n)}function Tu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Iy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Je(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,n,e);else if(t.tag===19)pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Da(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Tu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Da(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Tu(e,!0,n,null,s);break;case"together":Tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Bn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _w(t,e,n){switch(e.tag){case 3:Ey(e),ci();break;case 5:qg(e);break;case 1:st(e.type)&&Aa(e);break;case 4:Eh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(Ra,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?wy(t,e,n):(ie(de,de.current&1),t=mn(t,e,n),t!==null?t.sibling:null);ie(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Iy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,vy(t,e,n)}return mn(t,e,n)}var Ty,_c,Sy,Ay;Ty=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_c=function(){};Sy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,dr(zt.current);var s=null;switch(n){case"input":i=Bu(t,i),r=Bu(t,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=Hu(t,i),r=Hu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ta)}Ku(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ws.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ws.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ae("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Ay=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qi(t,e){if(!ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ew(t,e,n){var r=e.pendingProps;switch(fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(e),null;case 1:return st(e.type)&&Sa(),Be(e),null;case 3:return r=e.stateNode,di(),le(it),le(qe),Ih(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rt!==null&&(kc(Rt),Rt=null))),_c(t,e),Be(e),null;case 5:wh(e);var i=dr(Vs.current);if(n=e.type,t!==null&&e.stateNode!=null)Sy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return Be(e),null}if(t=dr(zt.current),Uo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jt]=e,r[Ds]=s,t=(e.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<rs.length;i++)ae(rs[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":Tf(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":Af(r,s),ae("invalid",r)}Ku(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fo(r.textContent,l,t),i=["children",""+l]):ws.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ae("scroll",r)}switch(n){case"input":Co(r),Sf(r,s,!0);break;case"textarea":Co(r),Pf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ta)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[jt]=e,t[Ds]=r,Ty(t,e,!1,!1),e.stateNode=t;e:{switch(a=Gu(n,r),n){case"dialog":ae("cancel",t),ae("close",t),i=r;break;case"iframe":case"object":case"embed":ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<rs.length;i++)ae(rs[i],t);i=r;break;case"source":ae("error",t),i=r;break;case"img":case"image":case"link":ae("error",t),ae("load",t),i=r;break;case"details":ae("toggle",t),i=r;break;case"input":Tf(t,r),i=Bu(t,r),ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ae("invalid",t);break;case"textarea":Af(t,r),i=Hu(t,r),ae("invalid",t);break;default:i=r}Ku(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?ng(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&eg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Is(t,u):typeof u=="number"&&Is(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ws.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ae("scroll",t):u!=null&&Jc(t,s,u,a))}switch(n){case"input":Co(t),Sf(t,r,!1);break;case"textarea":Co(t),Pf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Jr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Jr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Be(e),null;case 6:if(t&&e.stateNode!=null)Ay(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=dr(Vs.current),dr(zt.current),Uo(e)){if(r=e.stateNode,n=e.memoizedProps,r[jt]=e,(s=r.nodeValue!==n)&&(t=ht,t!==null))switch(t.tag){case 3:Fo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=e,e.stateNode=r}return Be(e),null;case 13:if(le(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ue&&ct!==null&&e.mode&1&&!(e.flags&128))$g(),ci(),e.flags|=98560,s=!1;else if(s=Uo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[jt]=e}else ci(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Be(e),s=!1}else Rt!==null&&(kc(Rt),Rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?Te===0&&(Te=3):Lh())),e.updateQueue!==null&&(e.flags|=4),Be(e),null);case 4:return di(),_c(t,e),t===null&&Cs(e.stateNode.containerInfo),Be(e),null;case 10:return yh(e.type._context),Be(e),null;case 17:return st(e.type)&&Sa(),Be(e),null;case 19:if(le(de),s=e.memoizedState,s===null)return Be(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Qi(s,!1);else{if(Te!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Da(t),a!==null){for(e.flags|=128,Qi(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&ve()>pi&&(e.flags|=128,r=!0,Qi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Da(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ue)return Be(e),null}else 2*ve()-s.renderingStartTime>pi&&n!==1073741824&&(e.flags|=128,r=!0,Qi(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ve(),e.sibling=null,n=de.current,ie(de,r?n&1|2:n&1),e):(Be(e),null);case 22:case 23:return Vh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ut&1073741824&&(Be(e),e.subtreeFlags&6&&(e.flags|=8192)):Be(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function ww(t,e){switch(fh(e),e.tag){case 1:return st(e.type)&&Sa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return di(),le(it),le(qe),Ih(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wh(e),null;case 13:if(le(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));ci()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(de),null;case 4:return di(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Vh(),null;case 24:return null;default:return null}}var Bo=!1,We=!1,Iw=typeof WeakSet=="function"?WeakSet:Set,B=null;function Qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(t,e,r)}else n.current=null}function Ec(t,e,n){try{n()}catch(r){ge(t,e,r)}}var mp=!1;function Tw(t,e){if(rc=Ea,t=Ng(),hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,p=0,g=t,I=null;t:for(;;){for(var R;g!==n||i!==0&&g.nodeType!==3||(l=a+i),g!==s||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(R=g.firstChild)!==null;)I=g,g=R;for(;;){if(g===t)break t;if(I===n&&++d===i&&(l=a),I===s&&++p===r&&(u=a),(R=g.nextSibling)!==null)break;g=I,I=g.parentNode}g=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ic={focusedElem:t,selectionRange:n},Ea=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var O=N.memoizedProps,F=N.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?O:Pt(e.type,O),F);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(D){ge(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return N=mp,mp=!1,N}function fs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ec(e,n,s)}i=i.next}while(i!==r)}}function dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Py(t){var e=t.alternate;e!==null&&(t.alternate=null,Py(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jt],delete e[Ds],delete e[ac],delete e[sw],delete e[ow])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ky(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ky(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ic(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ta));else if(r!==4&&(t=t.child,t!==null))for(Ic(t,e,n),t=t.sibling;t!==null;)Ic(t,e,n),t=t.sibling}function Tc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tc(t,e,n),t=t.sibling;t!==null;)Tc(t,e,n),t=t.sibling}var De=null,kt=!1;function Tn(t,e,n){for(n=n.child;n!==null;)Ry(t,e,n),n=n.sibling}function Ry(t,e,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:We||Qr(n,e);case 6:var r=De,i=kt;De=null,Tn(t,e,n),De=r,kt=i,De!==null&&(kt?(t=De,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(kt?(t=De,n=n.stateNode,t.nodeType===8?gu(t.parentNode,n):t.nodeType===1&&gu(t,n),Ps(t)):gu(De,n.stateNode));break;case 4:r=De,i=kt,De=n.stateNode.containerInfo,kt=!0,Tn(t,e,n),De=r,kt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ec(n,e,a),i=i.next}while(i!==r)}Tn(t,e,n);break;case 1:if(!We&&(Qr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ge(n,e,l)}Tn(t,e,n);break;case 21:Tn(t,e,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,Tn(t,e,n),We=r):Tn(t,e,n);break;default:Tn(t,e,n)}}function yp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Iw),e.forEach(function(r){var i=Ow.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:De=l.stateNode,kt=!1;break e;case 3:De=l.stateNode.containerInfo,kt=!0;break e;case 4:De=l.stateNode.containerInfo,kt=!0;break e}l=l.return}if(De===null)throw Error(L(160));Ry(s,a,i),De=null,kt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){ge(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cy(e,t),e=e.sibling}function Cy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(At(e,t),Ut(t),r&4){try{fs(3,t,t.return),dl(3,t)}catch(O){ge(t,t.return,O)}try{fs(5,t,t.return)}catch(O){ge(t,t.return,O)}}break;case 1:At(e,t),Ut(t),r&512&&n!==null&&Qr(n,n.return);break;case 5:if(At(e,t),Ut(t),r&512&&n!==null&&Qr(n,n.return),t.flags&32){var i=t.stateNode;try{Is(i,"")}catch(O){ge(t,t.return,O)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ym(i,s),Gu(l,a);var d=Gu(l,s);for(a=0;a<u.length;a+=2){var p=u[a],g=u[a+1];p==="style"?ng(i,g):p==="dangerouslySetInnerHTML"?eg(i,g):p==="children"?Is(i,g):Jc(i,p,g,d)}switch(l){case"input":zu(i,s);break;case"textarea":Jm(i,s);break;case"select":var I=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?Jr(i,!!s.multiple,R,!1):I!==!!s.multiple&&(s.defaultValue!=null?Jr(i,!!s.multiple,s.defaultValue,!0):Jr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ds]=s}catch(O){ge(t,t.return,O)}}break;case 6:if(At(e,t),Ut(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(O){ge(t,t.return,O)}}break;case 3:if(At(e,t),Ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ps(e.containerInfo)}catch(O){ge(t,t.return,O)}break;case 4:At(e,t),Ut(t);break;case 13:At(e,t),Ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dh=ve())),r&4&&yp(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(We=(d=We)||p,At(e,t),We=d):At(e,t),Ut(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(B=t,p=t.child;p!==null;){for(g=B=p;B!==null;){switch(I=B,R=I.child,I.tag){case 0:case 11:case 14:case 15:fs(4,I,I.return);break;case 1:Qr(I,I.return);var N=I.stateNode;if(typeof N.componentWillUnmount=="function"){r=I,n=I.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(O){ge(r,n,O)}}break;case 5:Qr(I,I.return);break;case 22:if(I.memoizedState!==null){_p(g);continue}}R!==null?(R.return=I,B=R):_p(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=tg("display",a))}catch(O){ge(t,t.return,O)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(O){ge(t,t.return,O)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:At(e,t),Ut(t),r&4&&yp(t);break;case 21:break;default:At(e,t),Ut(t)}}function Ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ky(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Is(i,""),r.flags&=-33);var s=gp(t);Tc(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=gp(t);Ic(t,l,a);break;default:throw Error(L(161))}}catch(u){ge(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sw(t,e,n){B=t,Ny(t)}function Ny(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Bo;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||We;l=Bo;var d=We;if(Bo=a,(We=u)&&!d)for(B=i;B!==null;)a=B,u=a.child,a.tag===22&&a.memoizedState!==null?Ep(i):u!==null?(u.return=a,B=u):Ep(i);for(;s!==null;)B=s,Ny(s),s=s.sibling;B=i,Bo=l,We=d}vp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):vp(t)}}function vp(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:We||dl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&np(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}np(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Ps(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}We||e.flags&512&&wc(e)}catch(I){ge(e,e.return,I)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function _p(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Ep(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dl(4,e)}catch(u){ge(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ge(e,i,u)}}var s=e.return;try{wc(e)}catch(u){ge(e,s,u)}break;case 5:var a=e.return;try{wc(e)}catch(u){ge(e,a,u)}}}catch(u){ge(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var Aw=Math.ceil,La=vn.ReactCurrentDispatcher,Ch=vn.ReactCurrentOwner,_t=vn.ReactCurrentBatchConfig,J=0,Re=null,we=null,xe=0,ut=0,Xr=Yn(0),Te=0,Fs=null,Ir=0,fl=0,Nh=0,ps=null,nt=null,Dh=0,pi=1/0,Zt=null,xa=!1,Sc=null,bn=null,zo=!1,Vn=null,Ma=0,ms=0,Ac=null,sa=-1,oa=0;function Ze(){return J&6?ve():sa!==-1?sa:sa=ve()}function jn(t){return t.mode&1?J&2&&xe!==0?xe&-xe:lw.transition!==null?(oa===0&&(oa=pg()),oa):(t=ee,t!==0||(t=window.event,t=t===void 0?16:wg(t.type)),t):1}function xt(t,e,n,r){if(50<ms)throw ms=0,Ac=null,Error(L(185));Qs(t,n,r),(!(J&2)||t!==Re)&&(t===Re&&(!(J&2)&&(fl|=n),Te===4&&Rn(t,xe)),ot(t,r),n===1&&J===0&&!(e.mode&1)&&(pi=ve()+500,ul&&Jn()))}function ot(t,e){var n=t.callbackNode;lE(t,e);var r=_a(t,t===Re?xe:0);if(r===0)n!==null&&Cf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cf(n),e===1)t.tag===0?aw(wp.bind(null,t)):jg(wp.bind(null,t)),rw(function(){!(J&6)&&Jn()}),n=null;else{switch(mg(r)){case 1:n=rh;break;case 4:n=dg;break;case 16:n=va;break;case 536870912:n=fg;break;default:n=va}n=Uy(n,Dy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dy(t,e){if(sa=-1,oa=0,J&6)throw Error(L(327));var n=t.callbackNode;if(ri()&&t.callbackNode!==n)return null;var r=_a(t,t===Re?xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fa(t,r);else{e=r;var i=J;J|=2;var s=Vy();(Re!==t||xe!==e)&&(Zt=null,pi=ve()+500,mr(t,e));do try{Rw();break}catch(l){Oy(t,l)}while(!0);gh(),La.current=s,J=i,we!==null?e=0:(Re=null,xe=0,e=Te)}if(e!==0){if(e===2&&(i=Ju(t),i!==0&&(r=i,e=Pc(t,i))),e===1)throw n=Fs,mr(t,0),Rn(t,r),ot(t,ve()),n;if(e===6)Rn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Pw(i)&&(e=Fa(t,r),e===2&&(s=Ju(t),s!==0&&(r=s,e=Pc(t,s))),e===1))throw n=Fs,mr(t,0),Rn(t,r),ot(t,ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:lr(t,nt,Zt);break;case 3:if(Rn(t,r),(r&130023424)===r&&(e=Dh+500-ve(),10<e)){if(_a(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=oc(lr.bind(null,t,nt,Zt),e);break}lr(t,nt,Zt);break;case 4:if(Rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Lt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Aw(r/1960))-r,10<r){t.timeoutHandle=oc(lr.bind(null,t,nt,Zt),r);break}lr(t,nt,Zt);break;case 5:lr(t,nt,Zt);break;default:throw Error(L(329))}}}return ot(t,ve()),t.callbackNode===n?Dy.bind(null,t):null}function Pc(t,e){var n=ps;return t.current.memoizedState.isDehydrated&&(mr(t,e).flags|=256),t=Fa(t,e),t!==2&&(e=nt,nt=n,e!==null&&kc(e)),t}function kc(t){nt===null?nt=t:nt.push.apply(nt,t)}function Pw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rn(t,e){for(e&=~Nh,e&=~fl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Lt(e),r=1<<n;t[n]=-1,e&=~r}}function wp(t){if(J&6)throw Error(L(327));ri();var e=_a(t,0);if(!(e&1))return ot(t,ve()),null;var n=Fa(t,e);if(t.tag!==0&&n===2){var r=Ju(t);r!==0&&(e=r,n=Pc(t,r))}if(n===1)throw n=Fs,mr(t,0),Rn(t,e),ot(t,ve()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,nt,Zt),ot(t,ve()),null}function Oh(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(pi=ve()+500,ul&&Jn())}}function Tr(t){Vn!==null&&Vn.tag===0&&!(J&6)&&ri();var e=J;J|=1;var n=_t.transition,r=ee;try{if(_t.transition=null,ee=1,t)return t()}finally{ee=r,_t.transition=n,J=e,!(J&6)&&Jn()}}function Vh(){ut=Xr.current,le(Xr)}function mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nw(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(fh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sa();break;case 3:di(),le(it),le(qe),Ih();break;case 5:wh(r);break;case 4:di();break;case 13:le(de);break;case 19:le(de);break;case 10:yh(r.type._context);break;case 22:case 23:Vh()}n=n.return}if(Re=t,we=t=Bn(t.current,null),xe=ut=e,Te=0,Fs=null,Nh=fl=Ir=0,nt=ps=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}hr=null}return t}function Oy(t,e){do{var n=we;try{if(gh(),na.current=Va,Oa){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oa=!1}if(wr=0,Pe=Ie=fe=null,ds=!1,Ls=0,Ch.current=null,n===null||n.return===null){Te=1,Fs=e,we=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var I=p.alternate;I?(p.updateQueue=I.updateQueue,p.memoizedState=I.memoizedState,p.lanes=I.lanes):(p.updateQueue=null,p.memoizedState=null)}var R=lp(a);if(R!==null){R.flags&=-257,up(R,a,l,s,e),R.mode&1&&ap(s,d,e),e=R,u=d;var N=e.updateQueue;if(N===null){var O=new Set;O.add(u),e.updateQueue=O}else N.add(u);break e}else{if(!(e&1)){ap(s,d,e),Lh();break e}u=Error(L(426))}}else if(ue&&l.mode&1){var F=lp(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),up(F,a,l,s,e),ph(fi(u,l));break e}}s=u=fi(u,l),Te!==4&&(Te=2),ps===null?ps=[s]:ps.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=my(s,u,e);tp(s,T);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(bn===null||!bn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=gy(s,l,e);tp(s,D);break e}}s=s.return}while(s!==null)}xy(n)}catch(b){e=b,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function Vy(){var t=La.current;return La.current=Va,t===null?Va:t}function Lh(){(Te===0||Te===3||Te===2)&&(Te=4),Re===null||!(Ir&268435455)&&!(fl&268435455)||Rn(Re,xe)}function Fa(t,e){var n=J;J|=2;var r=Vy();(Re!==t||xe!==e)&&(Zt=null,mr(t,e));do try{kw();break}catch(i){Oy(t,i)}while(!0);if(gh(),J=n,La.current=r,we!==null)throw Error(L(261));return Re=null,xe=0,Te}function kw(){for(;we!==null;)Ly(we)}function Rw(){for(;we!==null&&!Z0();)Ly(we)}function Ly(t){var e=Fy(t.alternate,t,ut);t.memoizedProps=t.pendingProps,e===null?xy(t):we=e,Ch.current=null}function xy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ww(n,e),n!==null){n.flags&=32767,we=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Te=6,we=null;return}}else if(n=Ew(n,e,ut),n!==null){we=n;return}if(e=e.sibling,e!==null){we=e;return}we=e=t}while(e!==null);Te===0&&(Te=5)}function lr(t,e,n){var r=ee,i=_t.transition;try{_t.transition=null,ee=1,Cw(t,e,n,r)}finally{_t.transition=i,ee=r}return null}function Cw(t,e,n,r){do ri();while(Vn!==null);if(J&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(uE(t,s),t===Re&&(we=Re=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zo||(zo=!0,Uy(va,function(){return ri(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_t.transition,_t.transition=null;var a=ee;ee=1;var l=J;J|=4,Ch.current=null,Tw(t,n),Cy(n,t),QE(ic),Ea=!!rc,ic=rc=null,t.current=n,Sw(n),eE(),J=l,ee=a,_t.transition=s}else t.current=n;if(zo&&(zo=!1,Vn=t,Ma=i),s=t.pendingLanes,s===0&&(bn=null),rE(n.stateNode),ot(t,ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xa)throw xa=!1,t=Sc,Sc=null,t;return Ma&1&&t.tag!==0&&ri(),s=t.pendingLanes,s&1?t===Ac?ms++:(ms=0,Ac=t):ms=0,Jn(),null}function ri(){if(Vn!==null){var t=mg(Ma),e=_t.transition,n=ee;try{if(_t.transition=null,ee=16>t?16:t,Vn===null)var r=!1;else{if(t=Vn,Vn=null,Ma=0,J&6)throw Error(L(331));var i=J;for(J|=4,B=t.current;B!==null;){var s=B,a=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(B=d;B!==null;){var p=B;switch(p.tag){case 0:case 11:case 15:fs(8,p,s)}var g=p.child;if(g!==null)g.return=p,B=g;else for(;B!==null;){p=B;var I=p.sibling,R=p.return;if(Py(p),p===d){B=null;break}if(I!==null){I.return=R,B=I;break}B=R}}}var N=s.alternate;if(N!==null){var O=N.child;if(O!==null){N.child=null;do{var F=O.sibling;O.sibling=null,O=F}while(O!==null)}}B=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,B=a;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fs(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,B=T;break e}B=s.return}}var _=t.current;for(B=_;B!==null;){a=B;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,B=S;else e:for(a=_;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:dl(9,l)}}catch(b){ge(l,l.return,b)}if(l===a){B=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,B=D;break e}B=l.return}}if(J=i,Jn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(il,t)}catch{}r=!0}return r}finally{ee=n,_t.transition=e}}return!1}function Ip(t,e,n){e=fi(n,e),e=my(t,e,1),t=Un(t,e,1),e=Ze(),t!==null&&(Qs(t,1,e),ot(t,e))}function ge(t,e,n){if(t.tag===3)Ip(t,t,n);else for(;e!==null;){if(e.tag===3){Ip(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){t=fi(n,t),t=gy(e,t,1),e=Un(e,t,1),t=Ze(),e!==null&&(Qs(e,1,t),ot(e,t));break}}e=e.return}}function Nw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ze(),t.pingedLanes|=t.suspendedLanes&n,Re===t&&(xe&n)===n&&(Te===4||Te===3&&(xe&130023424)===xe&&500>ve()-Dh?mr(t,0):Nh|=n),ot(t,e)}function My(t,e){e===0&&(t.mode&1?(e=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):e=1);var n=Ze();t=pn(t,e),t!==null&&(Qs(t,e,n),ot(t,n))}function Dw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),My(t,n)}function Ow(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),My(t,n)}var Fy;Fy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||it.current)rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rt=!1,_w(t,e,n);rt=!!(t.flags&131072)}else rt=!1,ue&&e.flags&1048576&&Bg(e,ka,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ia(t,e),t=e.pendingProps;var i=ui(e,qe.current);ni(e,n),i=Sh(null,e,r,t,i,n);var s=Ah();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,st(r)?(s=!0,Aa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_h(e),i.updater=hl,e.stateNode=i,i._reactInternals=e,fc(e,r,t,n),e=gc(null,e,r,!0,s,n)):(e.tag=0,ue&&s&&dh(e),Je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ia(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Lw(r),t=Pt(r,t),i){case 0:e=mc(null,e,r,t,n);break e;case 1:e=dp(null,e,r,t,n);break e;case 11:e=cp(null,e,r,t,n);break e;case 14:e=hp(null,e,r,Pt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),mc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),dp(t,e,r,i,n);case 3:e:{if(Ey(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Gg(t,e),Na(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=fi(Error(L(423)),e),e=fp(t,e,r,n,i);break e}else if(r!==i){i=fi(Error(L(424)),e),e=fp(t,e,r,n,i);break e}else for(ct=Fn(e.stateNode.containerInfo.firstChild),ht=e,ue=!0,Rt=null,n=Wg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ci(),r===i){e=mn(t,e,n);break e}Je(t,e,r,n)}e=e.child}return e;case 5:return qg(e),t===null&&cc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,sc(r,i)?a=null:s!==null&&sc(r,s)&&(e.flags|=32),_y(t,e),Je(t,e,a,n),e.child;case 6:return t===null&&cc(e),null;case 13:return wy(t,e,n);case 4:return Eh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=hi(e,null,r,n):Je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),cp(t,e,r,i,n);case 7:return Je(t,e,e.pendingProps,n),e.child;case 8:return Je(t,e,e.pendingProps.children,n),e.child;case 12:return Je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,ie(Ra,r._currentValue),r._currentValue=a,s!==null)if(Ft(s.value,a)){if(s.children===i.children&&!it.current){e=mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=ln(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),hc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(L(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),hc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ni(e,n),i=Et(i),r=r(i),e.flags|=1,Je(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),hp(t,e,r,i,n);case 15:return yy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),ia(t,e),e.tag=1,st(r)?(t=!0,Aa(e)):t=!1,ni(e,n),py(e,r,i),fc(e,r,i,n),gc(null,e,r,!0,t,n);case 19:return Iy(t,e,n);case 22:return vy(t,e,n)}throw Error(L(156,e.tag))};function Uy(t,e){return hg(t,e)}function Vw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(t,e,n,r){return new Vw(t,e,n,r)}function xh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lw(t){if(typeof t=="function")return xh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===eh)return 11;if(t===th)return 14}return 2}function Bn(t,e){var n=t.alternate;return n===null?(n=vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function aa(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")xh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case jr:return gr(n.children,i,s,e);case Zc:a=8,i|=8;break;case Fu:return t=vt(12,n,e,i|2),t.elementType=Fu,t.lanes=s,t;case Uu:return t=vt(13,n,e,i),t.elementType=Uu,t.lanes=s,t;case bu:return t=vt(19,n,e,i),t.elementType=bu,t.lanes=s,t;case qm:return pl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Km:a=10;break e;case Gm:a=9;break e;case eh:a=11;break e;case th:a=14;break e;case An:a=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=vt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function gr(t,e,n,r){return t=vt(7,t,r,e),t.lanes=n,t}function pl(t,e,n,r){return t=vt(22,t,r,e),t.elementType=qm,t.lanes=n,t.stateNode={isHidden:!1},t}function Su(t,e,n){return t=vt(6,t,null,e),t.lanes=n,t}function Au(t,e,n){return e=vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=su(0),this.expirationTimes=su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mh(t,e,n,r,i,s,a,l,u){return t=new xw(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_h(s),t}function Mw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function by(t){if(!t)return Kn;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(st(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(st(n))return bg(t,n,e)}return e}function jy(t,e,n,r,i,s,a,l,u){return t=Mh(n,r,!0,t,i,s,a,l,u),t.context=by(null),n=t.current,r=Ze(),i=jn(n),s=ln(r,i),s.callback=e??null,Un(n,s,i),t.current.lanes=i,Qs(t,i,r),ot(t,r),t}function ml(t,e,n,r){var i=e.current,s=Ze(),a=jn(i);return n=by(n),e.context===null?e.context=n:e.pendingContext=n,e=ln(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Un(i,e,a),t!==null&&(xt(t,i,a,s),ta(t,i,a)),a}function Ua(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fh(t,e){Tp(t,e),(t=t.alternate)&&Tp(t,e)}function Fw(){return null}var By=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uh(t){this._internalRoot=t}gl.prototype.render=Uh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));ml(t,e,null,null)};gl.prototype.unmount=Uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){ml(null,t,null,null)}),e[fn]=null}};function gl(t){this._internalRoot=t}gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=vg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kn.length&&e!==0&&e<kn[n].priority;n++);kn.splice(n,0,t),n===0&&Eg(t)}};function bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function Uw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Ua(a);s.call(d)}}var a=jy(e,r,t,0,null,!1,!1,"",Sp);return t._reactRootContainer=a,t[fn]=a.current,Cs(t.nodeType===8?t.parentNode:t),Tr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Ua(u);l.call(d)}}var u=Mh(t,0,!1,null,null,!1,!1,"",Sp);return t._reactRootContainer=u,t[fn]=u.current,Cs(t.nodeType===8?t.parentNode:t),Tr(function(){ml(e,u,n,r)}),u}function vl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=Ua(a);l.call(u)}}ml(e,a,t,i)}else a=Uw(n,e,t,i,r);return Ua(a)}gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ns(e.pendingLanes);n!==0&&(ih(e,n|1),ot(e,ve()),!(J&6)&&(pi=ve()+500,Jn()))}break;case 13:Tr(function(){var r=pn(t,1);if(r!==null){var i=Ze();xt(r,t,1,i)}}),Fh(t,1)}};sh=function(t){if(t.tag===13){var e=pn(t,134217728);if(e!==null){var n=Ze();xt(e,t,134217728,n)}Fh(t,134217728)}};yg=function(t){if(t.tag===13){var e=jn(t),n=pn(t,e);if(n!==null){var r=Ze();xt(n,t,e,r)}Fh(t,e)}};vg=function(){return ee};_g=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Qu=function(t,e,n){switch(e){case"input":if(zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ll(r);if(!i)throw Error(L(90));Xm(r),zu(r,i)}}}break;case"textarea":Jm(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};sg=Oh;og=Tr;var bw={usingClientEntryPoint:!1,Events:[Ys,Hr,ll,rg,ig,Oh]},Xi={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jw={bundleType:Xi.bundleType,version:Xi.version,rendererPackageName:Xi.rendererPackageName,rendererConfig:Xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ug(t),t===null?null:t.stateNode},findFiberByHostInstance:Xi.findFiberByHostInstance||Fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{il=$o.inject(jw),Bt=$o}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bw;ft.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(e))throw Error(L(200));return Mw(t,e,null,n)};ft.createRoot=function(t,e){if(!bh(t))throw Error(L(299));var n=!1,r="",i=By;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mh(t,1,!1,null,null,n,!1,r,i),t[fn]=e.current,Cs(t.nodeType===8?t.parentNode:t),new Uh(e)};ft.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=ug(e),t=t===null?null:t.stateNode,t};ft.flushSync=function(t){return Tr(t)};ft.hydrate=function(t,e,n){if(!yl(e))throw Error(L(200));return vl(null,t,e,!0,n)};ft.hydrateRoot=function(t,e,n){if(!bh(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=By;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=jy(e,null,t,1,n??null,i,!1,s,a),t[fn]=e.current,Cs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gl(e)};ft.render=function(t,e,n){if(!yl(e))throw Error(L(200));return vl(null,t,e,!1,n)};ft.unmountComponentAtNode=function(t){if(!yl(t))throw Error(L(40));return t._reactRootContainer?(Tr(function(){vl(null,null,t,!1,function(){t._reactRootContainer=null,t[fn]=null})}),!0):!1};ft.unstable_batchedUpdates=Oh;ft.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yl(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return vl(t,e,n,!1,r)};ft.version="18.3.1-next-f1338f8080-20240426";function zy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zy)}catch(t){console.error(t)}}zy(),zm.exports=ft;var Bw=zm.exports,$y,Ap=Bw;$y=Ap.createRoot,Ap.hydrateRoot;var Pp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,p=s>>2,g=(s&3)<<4|l>>4;let I=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(I=64)),r.push(n[p],n[g],n[I],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new $w;const I=s<<2|l>>4;if(r.push(I),d!==64){const R=l<<4&240|d>>2;if(r.push(R),g!==64){const N=d<<6&192|g;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $w extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hw=function(t){const e=Hy(t);return Wy.encodeByteArray(e,!0)},ba=function(t){return Hw(t).replace(/\./g,"")},Ky=function(t){try{return Wy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=()=>Ww().__FIREBASE_DEFAULTS__,Gw=()=>{if(typeof process>"u"||typeof Pp>"u")return;const t=Pp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ky(t[1]);return e&&JSON.parse(e)},_l=()=>{try{return Kw()||Gw()||qw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gy=t=>{var e,n;return(n=(e=_l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qw=t=>{const e=Gy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qy=()=>{var t;return(t=_l())===null||t===void 0?void 0:t.config},Qy=t=>{var e;return(e=_l())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ba(JSON.stringify(n)),ba(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function Zw(){var t;const e=(t=_l())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rI(){const t=Qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iI(){return!Zw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sI(){try{return typeof indexedDB=="object"}catch{return!1}}function oI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aI,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?lI(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new _n(i,l,r)}}function lI(t,e){return t.replace(uI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uI=/\{\$([^}]+)}/g;function cI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ja(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(kp(s)&&kp(a)){if(!ja(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hI(t,e){const n=new dI(t,e);return n.subscribe.bind(n)}class dI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pu),i.error===void 0&&(i.error=Pu),i.complete===void 0&&(i.complete=Pu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){return t&&t._delegate?t._delegate:t}class Sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gI(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mI(t){return t===ur?void 0:t}function gI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const vI={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},_I=Q.INFO,EI={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},wI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=EI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jh{constructor(e){this.name=e,this._logLevel=_I,this._logHandler=wI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const II=(t,e)=>e.some(n=>t instanceof n);let Rp,Cp;function TI(){return Rp||(Rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SI(){return Cp||(Cp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xy=new WeakMap,Rc=new WeakMap,Yy=new WeakMap,ku=new WeakMap,Bh=new WeakMap;function AI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(zn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Xy.set(n,t)}).catch(()=>{}),Bh.set(e,t),e}function PI(t){if(Rc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Rc.set(t,e)}let Cc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kI(t){Cc=t(Cc)}function RI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ru(this),e,...n);return Yy.set(r,e.sort?e.sort():[e]),zn(r)}:SI().includes(t)?function(...e){return t.apply(Ru(this),e),zn(Xy.get(this))}:function(...e){return zn(t.apply(Ru(this),e))}}function CI(t){return typeof t=="function"?RI(t):(t instanceof IDBTransaction&&PI(t),II(t,TI())?new Proxy(t,Cc):t)}function zn(t){if(t instanceof IDBRequest)return AI(t);if(ku.has(t))return ku.get(t);const e=CI(t);return e!==t&&(ku.set(t,e),Bh.set(e,t)),e}const Ru=t=>Bh.get(t);function NI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=zn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(zn(a.result),u.oldVersion,u.newVersion,zn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const DI=["get","getKey","getAll","getAllKeys","count"],OI=["put","add","delete","clear"],Cu=new Map;function Np(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cu.get(e))return Cu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=OI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DI.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Cu.set(e,s),s}kI(t=>({...t,get:(e,n,r)=>Np(e,n)||t.get(e,n,r),has:(e,n)=>!!Np(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nc="@firebase/app",Dp="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new jh("@firebase/app"),xI="@firebase/app-compat",MI="@firebase/analytics-compat",FI="@firebase/analytics",UI="@firebase/app-check-compat",bI="@firebase/app-check",jI="@firebase/auth",BI="@firebase/auth-compat",zI="@firebase/database",$I="@firebase/database-compat",HI="@firebase/functions",WI="@firebase/functions-compat",KI="@firebase/installations",GI="@firebase/installations-compat",qI="@firebase/messaging",QI="@firebase/messaging-compat",XI="@firebase/performance",YI="@firebase/performance-compat",JI="@firebase/remote-config",ZI="@firebase/remote-config-compat",eT="@firebase/storage",tT="@firebase/storage-compat",nT="@firebase/firestore",rT="@firebase/vertexai-preview",iT="@firebase/firestore-compat",sT="firebase",oT="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="[DEFAULT]",aT={[Nc]:"fire-core",[xI]:"fire-core-compat",[FI]:"fire-analytics",[MI]:"fire-analytics-compat",[bI]:"fire-app-check",[UI]:"fire-app-check-compat",[jI]:"fire-auth",[BI]:"fire-auth-compat",[zI]:"fire-rtdb",[$I]:"fire-rtdb-compat",[HI]:"fire-fn",[WI]:"fire-fn-compat",[KI]:"fire-iid",[GI]:"fire-iid-compat",[qI]:"fire-fcm",[QI]:"fire-fcm-compat",[XI]:"fire-perf",[YI]:"fire-perf-compat",[JI]:"fire-rc",[ZI]:"fire-rc-compat",[eT]:"fire-gcs",[tT]:"fire-gcs-compat",[nT]:"fire-fst",[iT]:"fire-fst-compat",[rT]:"fire-vertex","fire-js":"fire-js",[sT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new Map,lT=new Map,Oc=new Map;function Op(t,e){try{t.container.addComponent(e)}catch(n){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mi(t){const e=t.name;if(Oc.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;Oc.set(e,t);for(const n of Ba.values())Op(n,t);for(const n of lT.values())Op(n,t);return!0}function zh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new Zs("app","Firebase",uT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=oT;function Jy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(n||(n=qy()),!n)throw $n.create("no-options");const s=Ba.get(i);if(s){if(ja(n,s.options)&&ja(r,s.config))return s;throw $n.create("duplicate-app",{appName:i})}const a=new yI(i);for(const u of Oc.values())a.addComponent(u);const l=new cT(n,r,a);return Ba.set(i,l),l}function Zy(t=Dc){const e=Ba.get(t);if(!e&&t===Dc&&qy())return Jy();if(!e)throw $n.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let i=(r=aT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(l.join(" "));return}mi(new Sr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="firebase-heartbeat-database",dT=1,Us="firebase-heartbeat-store";let Nu=null;function ev(){return Nu||(Nu=NI(hT,dT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Us)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),Nu}async function fT(t){try{const n=(await ev()).transaction(Us),r=await n.objectStore(Us).get(tv(t));return await n.done,r}catch(e){if(e instanceof _n)gn.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(n.message)}}}async function Vp(t,e){try{const r=(await ev()).transaction(Us,"readwrite");await r.objectStore(Us).put(e,tv(t)),await r.done}catch(n){if(n instanceof _n)gn.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gn.warn(r.message)}}}function tv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=1024,mT=30*24*60*60*1e3;class gT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=mT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lp(),{heartbeatsToSend:r,unsentEntries:i}=yT(this._heartbeatsCache.heartbeats),s=ba(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return gn.warn(n),""}}}function Lp(){return new Date().toISOString().substring(0,10)}function yT(t,e=pT){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),xp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sI()?oI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xp(t){return ba(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t){mi(new Sr("platform-logger",e=>new VI(e),"PRIVATE")),mi(new Sr("heartbeat",e=>new gT(e),"PRIVATE")),Hn(Nc,Dp,t),Hn(Nc,Dp,"esm2017"),Hn("fire-js","")}_T("");var ET="firebase",wT="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(ET,wT,"app");function $h(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IT=nv,rv=new Zs("auth","Firebase",nv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new jh("@firebase/auth");function TT(t,...e){za.logLevel<=Q.WARN&&za.warn(`Auth (${Si}): ${t}`,...e)}function la(t,...e){za.logLevel<=Q.ERROR&&za.error(`Auth (${Si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw Wh(t,...e)}function Mt(t,...e){return Wh(t,...e)}function Hh(t,e,n){const r=Object.assign(Object.assign({},IT()),{[e]:n});return new Zs("auth","Firebase",r).create(e,{appName:t.name})}function un(t){return Hh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ST(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tt(t,"argument-error"),Hh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rv.create(t,...e)}function $(t,e,...n){if(!t)throw Wh(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw la(e),new Error(e)}function yn(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AT(){return Mp()==="http:"||Mp()==="https:"}function Mp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AT()||tI()||"connection"in navigator)?navigator.onLine:!0}function kT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=Jw()||nI()}get(){return PT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new to(3e4,6e4);function Zn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function er(t,e,n,r,i={}){return sv(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=eo(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return eI()||(d.referrerPolicy="no-referrer"),iv.fetch()(ov(t,t.config.apiHost,n,l),d)})}async function sv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RT),e);try{const i=new DT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ho(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ho(t,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Hh(t,p,d);Tt(t,p)}}catch(i){if(i instanceof _n)throw i;Tt(t,"network-request-failed",{message:String(i)})}}async function no(t,e,n,r,i={}){const s=await er(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ov(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Kh(t.config,i):`${t.config.apiScheme}://${i}`}function NT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),CT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mt(t,e,r);return i.customData._tokenResponse=n,i}function Fp(t){return t!==void 0&&t.enterprise!==void 0}class OT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function VT(t,e){return er(t,"GET","/v2/recaptchaConfig",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(t,e){return er(t,"POST","/v1/accounts:delete",e)}async function av(t,e){return er(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xT(t,e=!1){const n=It(t),r=await n.getIdToken(e),i=Gh(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:gs(Du(i.auth_time)),issuedAtTime:gs(Du(i.iat)),expirationTime:gs(Du(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Du(t){return Number(t)*1e3}function Gh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return la("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ky(n);return i?JSON.parse(i):(la("Failed to decode base64 JWT payload"),null)}catch(i){return la("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Up(t){const e=Gh(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&MT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gs(this.lastLoginAt),this.creationTime=gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bs(t,av(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lv(s.providerUserInfo):[],l=bT(t.providerData,a),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Lc(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,g)}async function UT(t){const e=It(t);await $a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lv(t){return t.map(e=>{var{providerId:n}=e,r=$h(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e){const n=await sv(t,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=ov(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",iv.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BT(t,e){return er(t,"POST","/v2/accounts:revokeToken",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Up(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=Up(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new ii;return r&&($(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$h(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bs(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xT(this,e)}reload(){return UT(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await bs(this,LT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,u,d,p;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,I=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(d=n.createdAt)!==null&&d!==void 0?d:void 0,_=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:S,emailVerified:D,isAnonymous:b,providerData:U,stsTokenManager:v}=n;$(S&&v,e,"internal-error");const m=ii.fromJSON(this.name,v);$(typeof S=="string",e,"internal-error"),Sn(g,e.name),Sn(I,e.name),$(typeof D=="boolean",e,"internal-error"),$(typeof b=="boolean",e,"internal-error"),Sn(R,e.name),Sn(N,e.name),Sn(O,e.name),Sn(F,e.name),Sn(T,e.name),Sn(_,e.name);const y=new on({uid:S,auth:e,email:I,emailVerified:D,displayName:g,isAnonymous:b,photoURL:N,phoneNumber:R,tenantId:O,stsTokenManager:m,createdAt:T,lastLoginAt:_});return U&&Array.isArray(U)&&(y.providerData=U.map(E=>Object.assign({},E))),F&&(y._redirectEventId=F),y}static async _fromIdTokenResponse(e,n,r=!1){const i=new ii;i.updateFromServerResponse(n);const s=new on({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $a(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ii;l.updateFromIdToken(r);const u=new on({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=new Map;function an(t){yn(t instanceof Function,"Expected a class definition");let e=bp.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uv.type="NONE";const jp=uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ua(this.userKey,i.apiKey,s),this.fullPersistenceKey=ua("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?on._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(an(jp),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||an(jp);const a=ua(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(a);if(p){const g=on._fromJSON(e,p);d!==s&&(l=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new si(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new si(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mv(e))return"Blackberry";if(gv(e))return"Webos";if(hv(e))return"Safari";if((e.includes("chrome/")||dv(e))&&!e.includes("edge/"))return"Chrome";if(pv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cv(t=Qe()){return/firefox\//i.test(t)}function hv(t=Qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dv(t=Qe()){return/crios\//i.test(t)}function fv(t=Qe()){return/iemobile/i.test(t)}function pv(t=Qe()){return/android/i.test(t)}function mv(t=Qe()){return/blackberry/i.test(t)}function gv(t=Qe()){return/webos/i.test(t)}function qh(t=Qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zT(t=Qe()){var e;return qh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $T(){return rI()&&document.documentMode===10}function yv(t=Qe()){return qh(t)||pv(t)||gv(t)||mv(t)||/windows phone/i.test(t)||fv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t,e=[]){let n;switch(t){case"Browser":n=Bp(Qe());break;case"Worker":n=`${Bp(Qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Si}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(t,e={}){return er(t,"GET","/v2/passwordPolicy",Zn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=6;class GT{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:KT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zp(this),this.idTokenSubscription=new zp(this),this.beforeStateQueue=new HT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await av(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(un(this));const n=e?It(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WT(this),n=new GT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await BT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function tr(t){return It(t)}class zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=hI(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QT(t){El=t}function _v(t){return El.loadJS(t)}function XT(){return El.recaptchaEnterpriseScript}function YT(){return El.gapiScript}function JT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ZT="recaptcha-enterprise",e1="NO_RECAPTCHA";class t1{constructor(e){this.type=ZT,this.auth=tr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{VT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new OT(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;Fp(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(e1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!n&&Fp(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=XT();u.length!==0&&(u+=l),_v(u).then(()=>{i(l,s,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function $p(t,e,n,r=!1){const i=new t1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function xc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $p(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await $p(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t,e){const n=zh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ja(s,e??{}))return i;Tt(i,"already-initialized")}return n.initialize({options:e})}function r1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function i1(t,e,n){const r=tr(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ev(e),{host:a,port:l}=s1(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),o1()}function Ev(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function s1(t){const e=Ev(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hp(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Hp(a)}}}function Hp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function o1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function a1(t,e){return er(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e){return no(t,"POST","/v1/accounts:signInWithPassword",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",Zn(t,e))}async function c1(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Qh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new js(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new js(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,n,"signInWithPassword",l1);case"emailLink":return u1(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xc(e,r,"signUpPassword",a1);case"emailLink":return c1(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e){return no(t,"POST","/v1/accounts:signInWithIdp",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="http://localhost";class Ar extends Qh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$h(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ar(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:h1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f1(t){const e=is(ss(t)).link,n=e?is(ss(e)).deep_link_id:null,r=is(ss(t)).deep_link_id;return(r?is(ss(r)).link:null)||r||n||e||t}class Xh{constructor(e){var n,r,i,s,a,l;const u=is(ss(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=d1((i=u.mode)!==null&&i!==void 0?i:null);$(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=f1(e);try{return new Xh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.providerId=Ai.PROVIDER_ID}static credential(e,n){return js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xh.parseLink(n);return $(r,"argument-error"),js._fromEmailAndCode(e,r.code,r.tenantId)}}Ai.PROVIDER_ID="password";Ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends Yh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends ro{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends ro{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends ro{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(t,e){return no(t,"POST","/v1/accounts:signUp",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await on._fromIdTokenResponse(e,r,i),a=Wp(r);return new Pr({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Wp(r);return new Pr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends _n{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ha.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ha(e,n,r,i)}}function wv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ha._fromErrorAndOperation(t,s,e,r):s})}async function m1(t,e,n=!1){const r=await bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(un(r));const i="reauthenticate";try{const s=await bs(t,wv(r,i,e,t),n);$(s.idToken,r,"internal-error");const a=Gh(s.idToken);$(a,r,"internal-error");const{sub:l}=a;return $(t.uid===l,r,"user-mismatch"),Pr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(t,e,n=!1){if(Ot(t.app))return Promise.reject(un(t));const r="signIn",i=await wv(t,r,e),s=await Pr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function y1(t,e){return Iv(tr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tv(t){const e=tr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function v1(t,e,n){if(Ot(t.app))return Promise.reject(un(t));const r=tr(t),a=await xc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",p1).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Tv(t),u}),l=await Pr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function _1(t,e,n){return Ot(t.app)?Promise.reject(un(t)):y1(It(t),Ai.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Tv(t),r})}function E1(t,e,n,r){return It(t).onIdTokenChanged(e,n,r)}function w1(t,e,n){return It(t).beforeAuthStateChanged(e,n)}function I1(t,e,n,r){return It(t).onAuthStateChanged(e,n,r)}const Wa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wa,"1"),this.storage.removeItem(Wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=1e3,S1=10;class Av extends Sv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);$T()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,S1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},T1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Av.type="LOCAL";const A1=Av;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv extends Sv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pv.type="SESSION";const kv=Pv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,s)),u=await P1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const d=Jh("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const I=g;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(I.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function R1(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function C1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function D1(){return Rv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="firebaseLocalStorageDb",O1=1,Ka="firebaseLocalStorage",Nv="fbase_key";class io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Il(t,e){return t.transaction([Ka],e?"readwrite":"readonly").objectStore(Ka)}function V1(){const t=indexedDB.deleteDatabase(Cv);return new io(t).toPromise()}function Mc(){const t=indexedDB.open(Cv,O1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ka,{keyPath:Nv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ka)?e(r):(r.close(),await V1(),e(await Mc()))})})}async function Kp(t,e,n){const r=Il(t,!0).put({[Nv]:e,value:n});return new io(r).toPromise()}async function L1(t,e){const n=Il(t,!1).get(e),r=await new io(n).toPromise();return r===void 0?null:r.value}function Gp(t,e){const n=Il(t,!0).delete(e);return new io(n).toPromise()}const x1=800,M1=3;class Dv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>M1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wl._getInstance(D1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await C1(),!this.activeServiceWorker)return;this.sender=new k1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mc();return await Kp(e,Wa,"1"),await Gp(e,Wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>L1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Il(i,!1).getAll();return new io(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),x1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dv.type="LOCAL";const F1=Dv;new to(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t,e){return e?an(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh extends Qh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function U1(t){return Iv(t.auth,new Zh(t),t.bypassAuthState)}function b1(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),g1(n,new Zh(t),t.bypassAuthState)}async function j1(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),m1(n,new Zh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return U1;case"linkViaPopup":case"linkViaRedirect":return j1;case"reauthViaPopup":case"reauthViaRedirect":return b1;default:Tt(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=new to(2e3,1e4);async function z1(t,e,n){if(Ot(t.app))return Promise.reject(Mt(t,"operation-not-supported-in-this-environment"));const r=tr(t);ST(t,e,Yh);const i=Ov(r,n);return new fr(r,"signInViaPopup",e,i).executeNotNull()}class fr extends Vv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=Jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B1.get())};e()}}fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="pendingRedirect",ca=new Map;class H1 extends Vv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ca.get(this.auth._key());if(!e){try{const r=await W1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ca.set(this.auth._key(),e)}return this.bypassAuthState||ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W1(t,e){const n=q1(e),r=G1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function K1(t,e){ca.set(t._key(),e)}function G1(t){return an(t._redirectPersistence)}function q1(t){return ua($1,t.config.apiKey,t.name)}async function Q1(t,e,n=!1){if(Ot(t.app))return Promise.reject(un(t));const r=tr(t),i=Ov(r,e),a=await new H1(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=10*60*1e3;class Y1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!J1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X1&&this.cachedEventUids.clear(),this.cachedEventUids.has(qp(e))}saveEventToCache(e){this.cachedEventUids.add(qp(e)),this.lastProcessedEventTime=Date.now()}}function qp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function J1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(t,e={}){return er(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tS=/^https?/;async function nS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Z1(t);for(const n of e)try{if(rS(n))return}catch{}Tt(t,"unauthorized-domain")}function rS(t){const e=Vc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!tS.test(n))return!1;if(eS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new to(3e4,6e4);function Qp(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sS(t){return new Promise((e,n)=>{var r,i,s;function a(){Qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qp(),n(Mt(t,"network-request-failed"))},timeout:iS.get()})}if(!((i=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$t().gapi)===null||s===void 0)&&s.load)a();else{const l=JT("iframefcb");return $t()[l]=()=>{gapi.load?a():n(Mt(t,"network-request-failed"))},_v(`${YT()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ha=null,e})}let ha=null;function oS(t){return ha=ha||sS(t),ha}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new to(5e3,15e3),lS="__/auth/iframe",uS="emulator/auth/iframe",cS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dS(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kh(e,uS):`https://${t.config.authDomain}/${lS}`,r={apiKey:e.apiKey,appName:t.name,v:Si},i=hS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${eo(r).slice(1)}`}async function fS(t){const e=await oS(t),n=$t().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:dS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Mt(t,"network-request-failed"),l=$t().setTimeout(()=>{s(a)},aS.get());function u(){$t().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mS=500,gS=600,yS="_blank",vS="http://localhost";class Xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _S(t,e,n,r=mS,i=gS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},pS),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Qe().toLowerCase();n&&(l=dv(d)?yS:n),cv(d)&&(e=e||vS,u.scrollbars="yes");const p=Object.entries(u).reduce((I,[R,N])=>`${I}${R}=${N},`,"");if(zT(d)&&l!=="_self")return ES(e||"",l),new Xp(null);const g=window.open(e||"",l,p);$(g,t,"popup-blocked");try{g.focus()}catch{}return new Xp(g)}function ES(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="__/auth/handler",IS="emulator/auth/handler",TS=encodeURIComponent("fac");async function Yp(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Si,eventId:i};if(e instanceof Yh){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",cI(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof ro){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${TS}=${encodeURIComponent(u)}`:"";return`${SS(t)}?${eo(l).slice(1)}${d}`}function SS({config:t}){return t.emulator?Kh(t,IS):`https://${t.authDomain}/${wS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="webStorageSupport";class AS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kv,this._completeRedirectFn=Q1,this._overrideRedirectResult=K1}async _openPopup(e,n,r,i){var s;yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Yp(e,n,r,Vc(),i);return _S(e,a,Jh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Yp(e,n,r,Vc(),i);return R1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fS(e),r=new Y1(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ou,{type:Ou},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ou];a!==void 0&&n(!!a),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yv()||hv()||qh()}}const PS=AS;var Jp="@firebase/auth",Zp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CS(t){mi(new Sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vv(t)},d=new qT(r,i,s,u);return r1(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mi(new Sr("auth-internal",e=>{const n=tr(e.getProvider("auth").getImmediate());return(r=>new kS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(Jp,Zp,RS(t)),Hn(Jp,Zp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=5*60,DS=Qy("authIdTokenMaxAge")||NS;let em=null;const OS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DS)return;const i=n==null?void 0:n.token;em!==i&&(em=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VS(t=Zy()){const e=zh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=n1(t,{popupRedirectResolver:PS,persistence:[F1,A1,kv]}),r=Qy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=OS(s.toString());w1(n,a,()=>a(n.currentUser)),E1(n,l=>a(l))}}const i=Gy("auth");return i&&i1(n,`http://${i}`),n}function LS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}QT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",LS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CS("Browser");var tm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function y(){}y.prototype=m.prototype,v.D=m.prototype,v.prototype=new y,v.prototype.constructor=v,v.C=function(E,A,k){for(var w=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)w[mt-2]=arguments[mt];return m.prototype[A].apply(E,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,y){y||(y=0);var E=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)E[A]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(A=0;16>A;++A)E[A]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=v.g[0],y=v.g[1],A=v.g[2];var k=v.g[3],w=m+(k^y&(A^k))+E[0]+3614090360&4294967295;m=y+(w<<7&4294967295|w>>>25),w=k+(A^m&(y^A))+E[1]+3905402710&4294967295,k=m+(w<<12&4294967295|w>>>20),w=A+(y^k&(m^y))+E[2]+606105819&4294967295,A=k+(w<<17&4294967295|w>>>15),w=y+(m^A&(k^m))+E[3]+3250441966&4294967295,y=A+(w<<22&4294967295|w>>>10),w=m+(k^y&(A^k))+E[4]+4118548399&4294967295,m=y+(w<<7&4294967295|w>>>25),w=k+(A^m&(y^A))+E[5]+1200080426&4294967295,k=m+(w<<12&4294967295|w>>>20),w=A+(y^k&(m^y))+E[6]+2821735955&4294967295,A=k+(w<<17&4294967295|w>>>15),w=y+(m^A&(k^m))+E[7]+4249261313&4294967295,y=A+(w<<22&4294967295|w>>>10),w=m+(k^y&(A^k))+E[8]+1770035416&4294967295,m=y+(w<<7&4294967295|w>>>25),w=k+(A^m&(y^A))+E[9]+2336552879&4294967295,k=m+(w<<12&4294967295|w>>>20),w=A+(y^k&(m^y))+E[10]+4294925233&4294967295,A=k+(w<<17&4294967295|w>>>15),w=y+(m^A&(k^m))+E[11]+2304563134&4294967295,y=A+(w<<22&4294967295|w>>>10),w=m+(k^y&(A^k))+E[12]+1804603682&4294967295,m=y+(w<<7&4294967295|w>>>25),w=k+(A^m&(y^A))+E[13]+4254626195&4294967295,k=m+(w<<12&4294967295|w>>>20),w=A+(y^k&(m^y))+E[14]+2792965006&4294967295,A=k+(w<<17&4294967295|w>>>15),w=y+(m^A&(k^m))+E[15]+1236535329&4294967295,y=A+(w<<22&4294967295|w>>>10),w=m+(A^k&(y^A))+E[1]+4129170786&4294967295,m=y+(w<<5&4294967295|w>>>27),w=k+(y^A&(m^y))+E[6]+3225465664&4294967295,k=m+(w<<9&4294967295|w>>>23),w=A+(m^y&(k^m))+E[11]+643717713&4294967295,A=k+(w<<14&4294967295|w>>>18),w=y+(k^m&(A^k))+E[0]+3921069994&4294967295,y=A+(w<<20&4294967295|w>>>12),w=m+(A^k&(y^A))+E[5]+3593408605&4294967295,m=y+(w<<5&4294967295|w>>>27),w=k+(y^A&(m^y))+E[10]+38016083&4294967295,k=m+(w<<9&4294967295|w>>>23),w=A+(m^y&(k^m))+E[15]+3634488961&4294967295,A=k+(w<<14&4294967295|w>>>18),w=y+(k^m&(A^k))+E[4]+3889429448&4294967295,y=A+(w<<20&4294967295|w>>>12),w=m+(A^k&(y^A))+E[9]+568446438&4294967295,m=y+(w<<5&4294967295|w>>>27),w=k+(y^A&(m^y))+E[14]+3275163606&4294967295,k=m+(w<<9&4294967295|w>>>23),w=A+(m^y&(k^m))+E[3]+4107603335&4294967295,A=k+(w<<14&4294967295|w>>>18),w=y+(k^m&(A^k))+E[8]+1163531501&4294967295,y=A+(w<<20&4294967295|w>>>12),w=m+(A^k&(y^A))+E[13]+2850285829&4294967295,m=y+(w<<5&4294967295|w>>>27),w=k+(y^A&(m^y))+E[2]+4243563512&4294967295,k=m+(w<<9&4294967295|w>>>23),w=A+(m^y&(k^m))+E[7]+1735328473&4294967295,A=k+(w<<14&4294967295|w>>>18),w=y+(k^m&(A^k))+E[12]+2368359562&4294967295,y=A+(w<<20&4294967295|w>>>12),w=m+(y^A^k)+E[5]+4294588738&4294967295,m=y+(w<<4&4294967295|w>>>28),w=k+(m^y^A)+E[8]+2272392833&4294967295,k=m+(w<<11&4294967295|w>>>21),w=A+(k^m^y)+E[11]+1839030562&4294967295,A=k+(w<<16&4294967295|w>>>16),w=y+(A^k^m)+E[14]+4259657740&4294967295,y=A+(w<<23&4294967295|w>>>9),w=m+(y^A^k)+E[1]+2763975236&4294967295,m=y+(w<<4&4294967295|w>>>28),w=k+(m^y^A)+E[4]+1272893353&4294967295,k=m+(w<<11&4294967295|w>>>21),w=A+(k^m^y)+E[7]+4139469664&4294967295,A=k+(w<<16&4294967295|w>>>16),w=y+(A^k^m)+E[10]+3200236656&4294967295,y=A+(w<<23&4294967295|w>>>9),w=m+(y^A^k)+E[13]+681279174&4294967295,m=y+(w<<4&4294967295|w>>>28),w=k+(m^y^A)+E[0]+3936430074&4294967295,k=m+(w<<11&4294967295|w>>>21),w=A+(k^m^y)+E[3]+3572445317&4294967295,A=k+(w<<16&4294967295|w>>>16),w=y+(A^k^m)+E[6]+76029189&4294967295,y=A+(w<<23&4294967295|w>>>9),w=m+(y^A^k)+E[9]+3654602809&4294967295,m=y+(w<<4&4294967295|w>>>28),w=k+(m^y^A)+E[12]+3873151461&4294967295,k=m+(w<<11&4294967295|w>>>21),w=A+(k^m^y)+E[15]+530742520&4294967295,A=k+(w<<16&4294967295|w>>>16),w=y+(A^k^m)+E[2]+3299628645&4294967295,y=A+(w<<23&4294967295|w>>>9),w=m+(A^(y|~k))+E[0]+4096336452&4294967295,m=y+(w<<6&4294967295|w>>>26),w=k+(y^(m|~A))+E[7]+1126891415&4294967295,k=m+(w<<10&4294967295|w>>>22),w=A+(m^(k|~y))+E[14]+2878612391&4294967295,A=k+(w<<15&4294967295|w>>>17),w=y+(k^(A|~m))+E[5]+4237533241&4294967295,y=A+(w<<21&4294967295|w>>>11),w=m+(A^(y|~k))+E[12]+1700485571&4294967295,m=y+(w<<6&4294967295|w>>>26),w=k+(y^(m|~A))+E[3]+2399980690&4294967295,k=m+(w<<10&4294967295|w>>>22),w=A+(m^(k|~y))+E[10]+4293915773&4294967295,A=k+(w<<15&4294967295|w>>>17),w=y+(k^(A|~m))+E[1]+2240044497&4294967295,y=A+(w<<21&4294967295|w>>>11),w=m+(A^(y|~k))+E[8]+1873313359&4294967295,m=y+(w<<6&4294967295|w>>>26),w=k+(y^(m|~A))+E[15]+4264355552&4294967295,k=m+(w<<10&4294967295|w>>>22),w=A+(m^(k|~y))+E[6]+2734768916&4294967295,A=k+(w<<15&4294967295|w>>>17),w=y+(k^(A|~m))+E[13]+1309151649&4294967295,y=A+(w<<21&4294967295|w>>>11),w=m+(A^(y|~k))+E[4]+4149444226&4294967295,m=y+(w<<6&4294967295|w>>>26),w=k+(y^(m|~A))+E[11]+3174756917&4294967295,k=m+(w<<10&4294967295|w>>>22),w=A+(m^(k|~y))+E[2]+718787259&4294967295,A=k+(w<<15&4294967295|w>>>17),w=y+(k^(A|~m))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+k&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var y=m-this.blockSize,E=this.B,A=this.h,k=0;k<m;){if(A==0)for(;k<=y;)i(this,v,k),k+=this.blockSize;if(typeof v=="string"){for(;k<m;)if(E[A++]=v.charCodeAt(k++),A==this.blockSize){i(this,E),A=0;break}}else for(;k<m;)if(E[A++]=v[k++],A==this.blockSize){i(this,E),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var y=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=y&255,y/=256;for(this.u(v),v=Array(16),m=y=0;4>m;++m)for(var E=0;32>E;E+=8)v[y++]=this.g[m]>>>E&255;return v};function s(v,m){var y=l;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=m(v)}function a(v,m){this.h=m;for(var y=[],E=!0,A=v.length-1;0<=A;A--){var k=v[A]|0;E&&k==m||(y[A]=k,E=!1)}this.g=y}var l={};function u(v){return-128<=v&&128>v?s(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return g;if(0>v)return F(d(-v));for(var m=[],y=1,E=0;v>=y;E++)m[E]=v/y|0,y*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return F(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),E=g,A=0;A<v.length;A+=8){var k=Math.min(8,v.length-A),w=parseInt(v.substring(A,A+k),m);8>k?(k=d(Math.pow(m,k)),E=E.j(k).add(d(w))):(E=E.j(y),E=E.add(d(w)))}return E}var g=u(0),I=u(1),R=u(16777216);t=a.prototype,t.m=function(){if(O(this))return-F(this).m();for(var v=0,m=1,y=0;y<this.g.length;y++){var E=this.i(y);v+=(0<=E?E:4294967296+E)*m,m*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(O(this))return"-"+F(this).toString(v);for(var m=d(Math.pow(v,6)),y=this,E="";;){var A=D(y,m).g;y=T(y,A.j(m));var k=((0<y.g.length?y.g[0]:y.h)>>>0).toString(v);if(y=A,N(y))return k+E;for(;6>k.length;)k="0"+k;E=k+E}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function O(v){return v.h==-1}t.l=function(v){return v=T(this,v),O(v)?-1:N(v)?0:1};function F(v){for(var m=v.g.length,y=[],E=0;E<m;E++)y[E]=~v.g[E];return new a(y,~v.h).add(I)}t.abs=function(){return O(this)?F(this):this},t.add=function(v){for(var m=Math.max(this.g.length,v.g.length),y=[],E=0,A=0;A<=m;A++){var k=E+(this.i(A)&65535)+(v.i(A)&65535),w=(k>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);E=w>>>16,k&=65535,w&=65535,y[A]=w<<16|k}return new a(y,y[y.length-1]&-2147483648?-1:0)};function T(v,m){return v.add(F(m))}t.j=function(v){if(N(this)||N(v))return g;if(O(this))return O(v)?F(this).j(F(v)):F(F(this).j(v));if(O(v))return F(this.j(F(v)));if(0>this.l(R)&&0>v.l(R))return d(this.m()*v.m());for(var m=this.g.length+v.g.length,y=[],E=0;E<2*m;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<v.g.length;A++){var k=this.i(E)>>>16,w=this.i(E)&65535,mt=v.i(A)>>>16,nr=v.i(A)&65535;y[2*E+2*A]+=w*nr,_(y,2*E+2*A),y[2*E+2*A+1]+=k*nr,_(y,2*E+2*A+1),y[2*E+2*A+1]+=w*mt,_(y,2*E+2*A+1),y[2*E+2*A+2]+=k*mt,_(y,2*E+2*A+2)}for(E=0;E<m;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=m;E<2*m;E++)y[E]=0;return new a(y,0)};function _(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function S(v,m){this.g=v,this.h=m}function D(v,m){if(N(m))throw Error("division by zero");if(N(v))return new S(g,g);if(O(v))return m=D(F(v),m),new S(F(m.g),F(m.h));if(O(m))return m=D(v,F(m)),new S(F(m.g),m.h);if(30<v.g.length){if(O(v)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var y=I,E=m;0>=E.l(v);)y=b(y),E=b(E);var A=U(y,1),k=U(E,1);for(E=U(E,2),y=U(y,2);!N(E);){var w=k.add(E);0>=w.l(v)&&(A=A.add(y),k=w),E=U(E,1),y=U(y,1)}return m=T(v,A.j(m)),new S(A,m)}for(A=g;0<=v.l(m);){for(y=Math.max(1,Math.floor(v.m()/m.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),k=d(y),w=k.j(m);O(w)||0<w.l(v);)y-=E,k=d(y),w=k.j(m);N(k)&&(k=I),A=A.add(k),v=T(v,w)}return new S(A,v)}t.A=function(v){return D(this,v).h},t.and=function(v){for(var m=Math.max(this.g.length,v.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)&v.i(E);return new a(y,this.h&v.h)},t.or=function(v){for(var m=Math.max(this.g.length,v.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)|v.i(E);return new a(y,this.h|v.h)},t.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),y=[],E=0;E<m;E++)y[E]=this.i(E)^v.i(E);return new a(y,this.h^v.h)};function b(v){for(var m=v.g.length+1,y=[],E=0;E<m;E++)y[E]=v.i(E)<<1|v.i(E-1)>>>31;return new a(y,v.h)}function U(v,m){var y=m>>5;m%=32;for(var E=v.g.length-y,A=[],k=0;k<E;k++)A[k]=0<m?v.i(k+y)>>>m|v.i(k+y+1)<<32-m:v.i(k+y);return new a(A,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,xv=a}).apply(typeof tm<"u"?tm:typeof self<"u"?self:typeof window<"u"?window:{});var Wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mv,Fv,os,Uv,da,Fc,bv,jv,Bv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wo=="object"&&Wo];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var P=o[f];if(!(P in h))break e;h=h[P]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,f=!1,P={next:function(){if(!f&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,f),o.apply(c,P)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,I.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function N(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,P,C){for(var M=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)M[ne-2]=arguments[ne];return c.prototype[P].apply(f,M)}}function O(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function F(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const P=o.length||0,C=f.length||0;o.length=P+C;for(let M=0;M<C;M++)o[P+M]=f[M]}else o.push(f)}}class T{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function D(o){return D[" "](o),o}D[" "]=function(){};var b=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function v(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,f;for(let P=1;P<arguments.length;P++){f=arguments[P];for(h in f)o[h]=f[h];for(let C=0;C<y.length;C++)h=y[C],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function A(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function k(o){l.setTimeout(()=>{throw o},0)}function w(){var o=W;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class mt{constructor(){this.h=this.g=null}add(c,h){const f=nr.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var nr=new T(()=>new Ri,o=>o.reset());class Ri{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Kt,j=!1,W=new mt,K=()=>{const o=l.Promise.resolve(void 0);Kt=()=>{o.then(ce)}};var ce=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(h){k(h)}var c=nr;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}j=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Gt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function qt(o,c){if(ye.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(b){e:{try{D(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Qt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&qt.aa.h.call(this)}}N(qt,ye);var Qt={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Xt="closure_listenable_"+(1e6*Math.random()|0),b_=0;function j_(o,c,h,f,P){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=P,this.key=++b_,this.da=this.fa=!1}function uo(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function co(o){this.src=o,this.g={},this.h=0}co.prototype.add=function(o,c,h,f,P){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var M=Ol(o,c,f,P);return-1<M?(c=o[M],h||(c.fa=!1)):(c=new j_(c,this.src,C,!!f,P),c.fa=h,o.push(c)),c};function Dl(o,c){var h=c.type;if(h in o.g){var f=o.g[h],P=Array.prototype.indexOf.call(f,c,void 0),C;(C=0<=P)&&Array.prototype.splice.call(f,P,1),C&&(uo(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ol(o,c,h,f){for(var P=0;P<o.length;++P){var C=o[P];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==f)return P}return-1}var Vl="closure_lm_"+(1e6*Math.random()|0),Ll={};function yd(o,c,h,f,P){if(Array.isArray(c)){for(var C=0;C<c.length;C++)yd(o,c[C],h,f,P);return null}return h=Ed(h),o&&o[Xt]?o.K(c,h,d(f)?!!f.capture:!!f,P):B_(o,c,h,!1,f,P)}function B_(o,c,h,f,P,C){if(!c)throw Error("Invalid event type");var M=d(P)?!!P.capture:!!P,ne=Ml(o);if(ne||(o[Vl]=ne=new co(o)),h=ne.add(c,h,f,M,C),h.proxy)return h;if(f=z_(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Gt||(P=M),P===void 0&&(P=!1),o.addEventListener(c.toString(),f,P);else if(o.attachEvent)o.attachEvent(_d(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function z_(){function o(h){return c.call(o.src,o.listener,h)}const c=$_;return o}function vd(o,c,h,f,P){if(Array.isArray(c))for(var C=0;C<c.length;C++)vd(o,c[C],h,f,P);else f=d(f)?!!f.capture:!!f,h=Ed(h),o&&o[Xt]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=Ol(C,h,f,P),-1<h&&(uo(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=Ml(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ol(c,h,f,P)),(h=-1<o?c[o]:null)&&xl(h))}function xl(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Xt])Dl(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(_d(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Ml(c))?(Dl(h,o),h.h==0&&(h.src=null,c[Vl]=null)):uo(o)}}}function _d(o){return o in Ll?Ll[o]:Ll[o]="on"+o}function $_(o,c){if(o.da)o=!0;else{c=new qt(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&xl(o),o=h.call(f,c)}return o}function Ml(o){return o=o[Vl],o instanceof co?o:null}var Fl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ed(o){return typeof o=="function"?o:(o[Fl]||(o[Fl]=function(c){return o.handleEvent(c)}),o[Fl])}function Fe(){te.call(this),this.i=new co(this),this.M=this,this.F=null}N(Fe,te),Fe.prototype[Xt]=!0,Fe.prototype.removeEventListener=function(o,c,h,f){vd(this,o,c,h,f)};function Xe(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new ye(c,o);else if(c instanceof ye)c.target=c.target||o;else{var P=c;c=new ye(f,o),E(c,P)}if(P=!0,h)for(var C=h.length-1;0<=C;C--){var M=c.g=h[C];P=ho(M,f,!0,c)&&P}if(M=c.g=o,P=ho(M,f,!0,c)&&P,P=ho(M,f,!1,c)&&P,h)for(C=0;C<h.length;C++)M=c.g=h[C],P=ho(M,f,!1,c)&&P}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)uo(h[f]);delete o.g[c],o.h--}}this.F=null},Fe.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Fe.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function ho(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,C=0;C<c.length;++C){var M=c[C];if(M&&!M.da&&M.capture==h){var ne=M.listener,Ne=M.ha||M.src;M.fa&&Dl(o.i,M),P=ne.call(Ne,f)!==!1&&P}}return P&&!f.defaultPrevented}function wd(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Id(o){o.g=wd(()=>{o.g=null,o.i&&(o.i=!1,Id(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class H_ extends te{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Id(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ci(o){te.call(this),this.h=o,this.g={}}N(Ci,te);var Td=[];function Sd(o){U(o.g,function(c,h){this.g.hasOwnProperty(h)&&xl(c)},o),o.g={}}Ci.prototype.N=function(){Ci.aa.N.call(this),Sd(this)},Ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ul=l.JSON.stringify,W_=l.JSON.parse,K_=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function bl(){}bl.prototype.h=null;function Ad(o){return o.h||(o.h=o.i())}function Pd(){}var Ni={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jl(){ye.call(this,"d")}N(jl,ye);function Bl(){ye.call(this,"c")}N(Bl,ye);var rr={},kd=null;function fo(){return kd=kd||new Fe}rr.La="serverreachability";function Rd(o){ye.call(this,rr.La,o)}N(Rd,ye);function Di(o){const c=fo();Xe(c,new Rd(c))}rr.STAT_EVENT="statevent";function Cd(o,c){ye.call(this,rr.STAT_EVENT,o),this.stat=c}N(Cd,ye);function Ye(o){const c=fo();Xe(c,new Cd(c,o))}rr.Ma="timingevent";function Nd(o,c){ye.call(this,rr.Ma,o),this.size=c}N(Nd,ye);function Oi(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Vi(){this.g=!0}Vi.prototype.xa=function(){this.g=!1};function G_(o,c,h,f,P,C){o.info(function(){if(o.g)if(C)for(var M="",ne=C.split("&"),Ne=0;Ne<ne.length;Ne++){var Z=ne[Ne].split("=");if(1<Z.length){var Ue=Z[0];Z=Z[1];var be=Ue.split("_");M=2<=be.length&&be[1]=="type"?M+(Ue+"="+Z+"&"):M+(Ue+"=redacted&")}}else M=null;else M=C;return"XMLHTTP REQ ("+f+") [attempt "+P+"]: "+c+`
`+h+`
`+M})}function q_(o,c,h,f,P,C,M){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+P+"]: "+c+`
`+h+`
`+C+" "+M})}function Vr(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+X_(o,h)+(f?" "+f:"")})}function Q_(o,c){o.info(function(){return"TIMEOUT: "+c})}Vi.prototype.info=function(){};function X_(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var P=f[1];if(Array.isArray(P)&&!(1>P.length)){var C=P[0];if(C!="noop"&&C!="stop"&&C!="close")for(var M=1;M<P.length;M++)P[M]=""}}}}return Ul(h)}catch{return c}}var po={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zl;function mo(){}N(mo,bl),mo.prototype.g=function(){return new XMLHttpRequest},mo.prototype.i=function(){return{}},zl=new mo;function En(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new Ci(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Od}function Od(){this.i=null,this.g="",this.h=!1}var Vd={},$l={};function Hl(o,c,h){o.L=1,o.v=_o(Yt(c)),o.m=h,o.P=!0,Ld(o,null)}function Ld(o,c){o.F=Date.now(),go(o),o.A=Yt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),qd(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Od,o.g=ff(o.j,h?c:null,!o.m),0<o.O&&(o.M=new H_(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Td[0]=P.toString()),P=Td);for(var C=0;C<P.length;C++){var M=yd(h,P[C],f||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Di(),G_(o.i,o.u,o.A,o.l,o.R,o.m)}En.prototype.ca=function(o){o=o.target;const c=this.M;c&&Jt(o)==3?c.j():this.Y(o)},En.prototype.Y=function(o){try{if(o==this.g)e:{const be=Jt(this.g);var c=this.g.Ba();const Mr=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||tf(this.g)))){this.J||be!=4||c==7||(c==8||0>=Mr?Di(3):Di(2)),Wl(this);var h=this.g.Z();this.X=h;t:if(xd(this)){var f=tf(this.g);o="";var P=f.length,C=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),Li(this);var M="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(C&&c==P-1)});f.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=h==200,q_(this.i,this.u,this.A,this.l,this.R,be,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,Ne=this.g;if((ne=Ne.g?Ne.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ne)){var Z=ne;break t}}Z=null}if(h=Z)Vr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kl(this,h);else{this.o=!1,this.s=3,Ye(12),ir(this),Li(this);break e}}if(this.P){h=!0;let St;for(;!this.J&&this.C<M.length;)if(St=Y_(this,M),St==$l){be==4&&(this.s=4,Ye(14),h=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(St==Vd){this.s=4,Ye(15),Vr(this.i,this.l,M,"[Invalid Chunk]"),h=!1;break}else Vr(this.i,this.l,St,null),Kl(this,St);if(xd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||M.length!=0||this.h.h||(this.s=1,Ye(16),h=!1),this.o=this.o&&h,!h)Vr(this.i,this.l,M,"[Invalid Chunked Response]"),ir(this),Li(this);else if(0<M.length&&!this.W){this.W=!0;var Ue=this.j;Ue.g==this&&Ue.ba&&!Ue.M&&(Ue.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Jl(Ue),Ue.M=!0,Ye(11))}}else Vr(this.i,this.l,M,null),Kl(this,M);be==4&&ir(this),this.o&&!this.J&&(be==4?uf(this.j,this):(this.o=!1,go(this)))}else p0(this.g),h==400&&0<M.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),ir(this),Li(this)}}}catch{}finally{}};function xd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Y_(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?$l:(h=Number(c.substring(h,f)),isNaN(h)?Vd:(f+=1,f+h>c.length?$l:(c=c.slice(f,f+h),o.C=f+h,c)))}En.prototype.cancel=function(){this.J=!0,ir(this)};function go(o){o.S=Date.now()+o.I,Md(o,o.I)}function Md(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Oi(I(o.ba,o),c)}function Wl(o){o.B&&(l.clearTimeout(o.B),o.B=null)}En.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Q_(this.i,this.A),this.L!=2&&(Di(),Ye(17)),ir(this),this.s=2,Li(this)):Md(this,this.S-o)};function Li(o){o.j.G==0||o.J||uf(o.j,o)}function ir(o){Wl(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Sd(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Kl(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Gl(h.h,o))){if(!o.K&&Gl(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var P=f;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)So(h),Io(h);else break e;Yl(h),Ye(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=Oi(I(h.Za,h),6e3));if(1>=bd(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else or(h,11)}else if((o.K||h.g==o)&&So(h),!_(c))for(P=h.Da.g.parse(c),c=0;c<P.length;c++){let Z=P[c];if(h.T=Z[0],Z=Z[1],h.G==2)if(Z[0]=="c"){h.K=Z[1],h.ia=Z[2];const Ue=Z[3];Ue!=null&&(h.la=Ue,h.j.info("VER="+h.la));const be=Z[4];be!=null&&(h.Aa=be,h.j.info("SVER="+h.Aa));const Mr=Z[5];Mr!=null&&typeof Mr=="number"&&0<Mr&&(f=1.5*Mr,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const St=o.g;if(St){const Po=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Po){var C=f.h;C.g||Po.indexOf("spdy")==-1&&Po.indexOf("quic")==-1&&Po.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ql(C,C.h),C.h=null))}if(f.D){const Zl=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;Zl&&(f.ya=Zl,oe(f.I,f.D,Zl))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var M=o;if(f.qa=df(f,f.J?f.ia:null,f.W),M.K){jd(f.h,M);var ne=M,Ne=f.L;Ne&&(ne.I=Ne),ne.B&&(Wl(ne),go(ne)),f.g=M}else af(f);0<h.i.length&&To(h)}else Z[0]!="stop"&&Z[0]!="close"||or(h,7);else h.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?or(h,7):Xl(h):Z[0]!="noop"&&h.l&&h.l.ta(Z),h.v=0)}}Di(4)}catch{}}var J_=class{constructor(o,c){this.g=o,this.map=c}};function Fd(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ud(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function bd(o){return o.h?1:o.g?o.g.size:0}function Gl(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function ql(o,c){o.g?o.g.add(c):o.h=c}function jd(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Fd.prototype.cancel=function(){if(this.i=Bd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Bd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return O(o.i)}function Z_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function e0(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function zd(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=e0(o),f=Z_(o),P=f.length,C=0;C<P;C++)c.call(void 0,f[C],h&&h[C],o)}var $d=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function t0(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),P=null;if(0<=f){var C=o[h].substring(0,f);P=o[h].substring(f+1)}else C=o[h];c(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function sr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof sr){this.h=o.h,yo(this,o.j),this.o=o.o,this.g=o.g,vo(this,o.s),this.l=o.l;var c=o.i,h=new Fi;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Hd(this,h),this.m=o.m}else o&&(c=String(o).match($d))?(this.h=!1,yo(this,c[1]||"",!0),this.o=xi(c[2]||""),this.g=xi(c[3]||"",!0),vo(this,c[4]),this.l=xi(c[5]||"",!0),Hd(this,c[6]||"",!0),this.m=xi(c[7]||"")):(this.h=!1,this.i=new Fi(null,this.h))}sr.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Mi(c,Wd,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Mi(c,Wd,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Mi(h,h.charAt(0)=="/"?i0:r0,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Mi(h,o0)),o.join("")};function Yt(o){return new sr(o)}function yo(o,c,h){o.j=h?xi(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function vo(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Hd(o,c,h){c instanceof Fi?(o.i=c,a0(o.i,o.h)):(h||(c=Mi(c,s0)),o.i=new Fi(c,o.h))}function oe(o,c,h){o.i.set(c,h)}function _o(o){return oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function xi(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Mi(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,n0),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function n0(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Wd=/[#\/\?@]/g,r0=/[#\?:]/g,i0=/[#\?]/g,s0=/[#\?@]/g,o0=/#/g;function Fi(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function wn(o){o.g||(o.g=new Map,o.h=0,o.i&&t0(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=Fi.prototype,t.add=function(o,c){wn(this),this.i=null,o=Lr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Kd(o,c){wn(o),c=Lr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Gd(o,c){return wn(o),c=Lr(o,c),o.g.has(c)}t.forEach=function(o,c){wn(this),this.g.forEach(function(h,f){h.forEach(function(P){o.call(c,P,f,this)},this)},this)},t.na=function(){wn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const P=o[f];for(let C=0;C<P.length;C++)h.push(c[f])}return h},t.V=function(o){wn(this);let c=[];if(typeof o=="string")Gd(this,o)&&(c=c.concat(this.g.get(Lr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},t.set=function(o,c){return wn(this),this.i=null,o=Lr(this,o),Gd(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function qd(o,c,h){Kd(o,c),0<h.length&&(o.i=null,o.g.set(Lr(o,c),O(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const C=encodeURIComponent(String(f)),M=this.V(f);for(f=0;f<M.length;f++){var P=C;M[f]!==""&&(P+="="+encodeURIComponent(String(M[f]))),o.push(P)}}return this.i=o.join("&")};function Lr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function a0(o,c){c&&!o.j&&(wn(o),o.i=null,o.g.forEach(function(h,f){var P=f.toLowerCase();f!=P&&(Kd(this,f),qd(this,P,h))},o)),o.j=c}function l0(o,c){const h=new Vi;if(l.Image){const f=new Image;f.onload=R(In,h,"TestLoadImage: loaded",!0,c,f),f.onerror=R(In,h,"TestLoadImage: error",!1,c,f),f.onabort=R(In,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=R(In,h,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function u0(o,c){const h=new Vi,f=new AbortController,P=setTimeout(()=>{f.abort(),In(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(C=>{clearTimeout(P),C.ok?In(h,"TestPingServer: ok",!0,c):In(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),In(h,"TestPingServer: error",!1,c)})}function In(o,c,h,f,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),f(h)}catch{}}function c0(){this.g=new K_}function h0(o,c,h){const f=h||"";try{zd(o,function(P,C){let M=P;d(P)&&(M=Ul(P)),c.push(f+C+"="+encodeURIComponent(M))})}catch(P){throw c.push(f+"type="+encodeURIComponent("_badmap")),P}}function Ui(o){this.l=o.Ub||null,this.j=o.eb||!1}N(Ui,bl),Ui.prototype.g=function(){return new Eo(this.l,this.j)},Ui.prototype.i=function(o){return function(){return o}}({});function Eo(o,c){Fe.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Eo,Fe),t=Eo.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,ji(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bi(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qd(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qd(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?bi(this):ji(this),this.readyState==3&&Qd(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,bi(this))},t.Qa=function(o){this.g&&(this.response=o,bi(this))},t.ga=function(){this.g&&bi(this)};function bi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ji(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function ji(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Xd(o){let c="";return U(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Ql(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Xd(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):oe(o,c,h))}function me(o){Fe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(me,Fe);var d0=/^https?$/i,f0=["POST","PUT"];t=me.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zl.g(),this.v=this.o?Ad(this.o):Ad(zl),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){Yd(this,C);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var P in f)h.set(P,f[P]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const C of f.keys())h.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(f0,c,void 0))||f||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,M]of h)this.g.setRequestHeader(C,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ef(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Yd(this,C)}};function Yd(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Jd(o),wo(o)}function Jd(o){o.A||(o.A=!0,Xe(o,"complete"),Xe(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Xe(this,"complete"),Xe(this,"abort"),wo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wo(this,!0)),me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zd(this):this.bb())},t.bb=function(){Zd(this)};function Zd(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Jt(o)!=4||o.Z()!=2)){if(o.u&&Jt(o)==4)wd(o.Ea,0,o);else if(Xe(o,"readystatechange"),Jt(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=M===0){var P=String(o.D).match($d)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),f=!d0.test(P?P.toLowerCase():"")}h=f}if(h)Xe(o,"complete"),Xe(o,"success");else{o.m=6;try{var C=2<Jt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Jd(o)}}finally{wo(o)}}}}function wo(o,c){if(o.g){ef(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Xe(o,"ready");try{h.onreadystatechange=f}catch{}}}function ef(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Jt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),W_(c)}};function tf(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function p0(o){const c={};o=(o.g&&2<=Jt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(_(o[f]))continue;var h=A(o[f]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[P]||[];c[P]=C,C.push(h)}v(c,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bi(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function nf(o){this.Aa=0,this.i=[],this.j=new Vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bi("baseRetryDelayMs",5e3,o),this.cb=Bi("retryDelaySeedMs",1e4,o),this.Wa=Bi("forwardChannelMaxRetries",2,o),this.wa=Bi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Fd(o&&o.concurrentRequestLimit),this.Da=new c0,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=nf.prototype,t.la=8,t.G=1,t.connect=function(o,c,h,f){Ye(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=df(this,null,this.W),To(this)};function Xl(o){if(rf(o),o.G==3){var c=o.U++,h=Yt(o.I);if(oe(h,"SID",o.K),oe(h,"RID",c),oe(h,"TYPE","terminate"),zi(o,h),c=new En(o,o.j,c),c.L=2,c.v=_o(Yt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=ff(c.j,null),c.g.ea(c.v)),c.F=Date.now(),go(c)}hf(o)}function Io(o){o.g&&(Jl(o),o.g.cancel(),o.g=null)}function rf(o){Io(o),o.u&&(l.clearTimeout(o.u),o.u=null),So(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function To(o){if(!Ud(o.h)&&!o.s){o.s=!0;var c=o.Ga;Kt||K(),j||(Kt(),j=!0),W.add(c,o),o.B=0}}function m0(o,c){return bd(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Oi(I(o.Ga,o,c),cf(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new En(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(P.H=C,C=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=of(this,P,c),h=Yt(this.I),oe(h,"RID",o),oe(h,"CVER",22),this.D&&oe(h,"X-HTTP-Session-Id",this.D),zi(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(Xd(C)))+"&"+c:this.m&&Ql(h,this.m,C)),ql(this.h,P),this.Ua&&oe(h,"TYPE","init"),this.P?(oe(h,"$req",c),oe(h,"SID","null"),P.T=!0,Hl(P,h,null)):Hl(P,h,c),this.G=2}}else this.G==3&&(o?sf(this,o):this.i.length==0||Ud(this.h)||sf(this))};function sf(o,c){var h;c?h=c.l:h=o.U++;const f=Yt(o.I);oe(f,"SID",o.K),oe(f,"RID",h),oe(f,"AID",o.T),zi(o,f),o.m&&o.o&&Ql(f,o.m,o.o),h=new En(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=of(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ql(o.h,h),Hl(h,f,c)}function zi(o,c){o.H&&U(o.H,function(h,f){oe(c,f,h)}),o.l&&zd({},function(h,f){oe(c,f,h)})}function of(o,c,h){h=Math.min(o.i.length,h);var f=o.l?I(o.l.Na,o.l,o):null;e:{var P=o.i;let C=-1;for(;;){const M=["count="+h];C==-1?0<h?(C=P[0].g,M.push("ofs="+C)):C=0:M.push("ofs="+C);let ne=!0;for(let Ne=0;Ne<h;Ne++){let Z=P[Ne].g;const Ue=P[Ne].map;if(Z-=C,0>Z)C=Math.max(0,P[Ne].g-100),ne=!1;else try{h0(Ue,M,"req"+Z+"_")}catch{f&&f(Ue)}}if(ne){f=M.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function af(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Kt||K(),j||(Kt(),j=!0),W.add(c,o),o.v=0}}function Yl(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Oi(I(o.Fa,o),cf(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,lf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Oi(I(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ye(10),Io(this),lf(this))};function Jl(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function lf(o){o.g=new En(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Yt(o.qa);oe(c,"RID","rpc"),oe(c,"SID",o.K),oe(c,"AID",o.T),oe(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&oe(c,"TO",o.ja),oe(c,"TYPE","xmlhttp"),zi(o,c),o.m&&o.o&&Ql(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=_o(Yt(c)),h.m=null,h.P=!0,Ld(h,o)}t.Za=function(){this.C!=null&&(this.C=null,Io(this),Yl(this),Ye(19))};function So(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function uf(o,c){var h=null;if(o.g==c){So(o),Jl(o),o.g=null;var f=2}else if(Gl(o.h,c))h=c.D,jd(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var P=o.B;f=fo(),Xe(f,new Nd(f,h)),To(o)}else af(o);else if(P=c.s,P==3||P==0&&0<c.X||!(f==1&&m0(o,c)||f==2&&Yl(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),P){case 1:or(o,5);break;case 4:or(o,10);break;case 3:or(o,6);break;default:or(o,2)}}}function cf(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function or(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),f=o.Xa;const P=!f;f=new sr(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||yo(f,"https"),_o(f),P?l0(f.toString(),h):u0(f.toString(),h)}else Ye(2);o.G=0,o.l&&o.l.sa(c),hf(o),rf(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function hf(o){if(o.G=0,o.ka=[],o.l){const c=Bd(o.h);(c.length!=0||o.i.length!=0)&&(F(o.ka,c),F(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function df(o,c,h){var f=h instanceof sr?Yt(h):new sr(h);if(f.g!="")c&&(f.g=c+"."+f.g),vo(f,f.s);else{var P=l.location;f=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var C=new sr(null);f&&yo(C,f),c&&(C.g=c),P&&vo(C,P),h&&(C.l=h),f=C}return h=o.D,c=o.ya,h&&c&&oe(f,h,c),oe(f,"VER",o.la),zi(o,f),f}function ff(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new me(new Ui({eb:h})):new me(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pf(){}t=pf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ao(){}Ao.prototype.g=function(o,c){return new lt(o,c)};function lt(o,c){Fe.call(this),this.g=new nf(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!_(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new xr(this)}N(lt,Fe),lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},lt.prototype.close=function(){Xl(this.g)},lt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ul(o),o=h);c.i.push(new J_(c.Ya++,o)),c.G==3&&To(c)},lt.prototype.N=function(){this.g.l=null,delete this.j,Xl(this.g),delete this.g,lt.aa.N.call(this)};function mf(o){jl.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}N(mf,jl);function gf(){Bl.call(this),this.status=1}N(gf,Bl);function xr(o){this.g=o}N(xr,pf),xr.prototype.ua=function(){Xe(this.g,"a")},xr.prototype.ta=function(o){Xe(this.g,new mf(o))},xr.prototype.sa=function(o){Xe(this.g,new gf)},xr.prototype.ra=function(){Xe(this.g,"b")},Ao.prototype.createWebChannel=Ao.prototype.g,lt.prototype.send=lt.prototype.o,lt.prototype.open=lt.prototype.m,lt.prototype.close=lt.prototype.close,Bv=function(){return new Ao},jv=function(){return fo()},bv=rr,Fc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},po.NO_ERROR=0,po.TIMEOUT=8,po.HTTP_ERROR=6,da=po,Dd.COMPLETE="complete",Uv=Dd,Pd.EventType=Ni,Ni.OPEN="a",Ni.CLOSE="b",Ni.ERROR="c",Ni.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,os=Pd,Fv=Ui,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,Mv=me}).apply(typeof Wo<"u"?Wo:typeof self<"u"?self:typeof window<"u"?window:{});const nm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new jh("@firebase/firestore");function Yi(){return kr.logLevel}function z(t,...e){if(kr.logLevel<=Q.DEBUG){const n=e.map(ed);kr.debug(`Firestore (${Pi}): ${t}`,...n)}}function Rr(t,...e){if(kr.logLevel<=Q.ERROR){const n=e.map(ed);kr.error(`Firestore (${Pi}): ${t}`,...n)}}function Ga(t,...e){if(kr.logLevel<=Q.WARN){const n=e.map(ed);kr.warn(`Firestore (${Pi}): ${t}`,...n)}}function ed(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: `+t;throw Rr(e),new Error(e)}function Se(t,e){t||X()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class MS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FS{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new zv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new He(e)}}class US{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=He.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new US(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new jS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=zS(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function gi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ce(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Ce(0,0))}static max(){return new he(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Bs{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const $S=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends Bs{construct(e,n,r){return new Le(e,n,r)}static isValidIdentifier(e){return $S.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Le(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new H(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(n)}static emptyPath(){return new Le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ee.fromString(e))}static fromName(e){return new G(Ee.fromString(e).popFirst(5))}static empty(){return new G(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ee(e.slice()))}}function HS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new Gn(i,G.empty(),e)}function WS(t){return new Gn(t.readTime,t.key,-1)}class Gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gn(he.min(),G.empty(),-1)}static max(){return new Gn(he.max(),G.empty(),-1)}}function KS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==GS)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(p=>{a[d]=p,++l,l===s&&r(a)},p=>i(p))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function QS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Tl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wv.oe=-1;function td(t){return t==null}function qa(t){return t===0&&1/t==-1/0}function XS(t){return typeof t=="number"&&Number.isInteger(t)&&!qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function so(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new at(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ko(this.root,e,this.comparator,!0)}}class Ko{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Oe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new im(this.data.getIterator())}getIteratorFrom(e){return new im(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class im{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new Ge(Le.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new YS("Invalid base64 string: "+s):s}}(e);return new Ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const JS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(Se(!!t),typeof t=="string"){let e=0;const n=JS.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zs(t){return typeof t=="string"?Ht.fromBase64String(t):Ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gv(t){const e=t.mapValue.fields.__previous_value__;return nd(e)?Gv(e):e}function Qa(t){const e=Cr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,r,i,s,a,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Xa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nd(t)?4:tA(t)?9007199254740991:eA(t)?10:11:X()}function Wt(t,e){if(t===e)return!0;const n=yi(t);if(n!==yi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qa(t).isEqual(Qa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Cr(i.timestampValue),l=Cr(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return zs(i.bytesValue).isEqual(zs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Ve(i.doubleValue),l=Ve(s.doubleValue);return a===l?qa(a)===qa(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return gi(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(rm(a)!==rm(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Wt(a[u],l[u])))return!1;return!0}(t,e);default:return X()}}function $s(t,e){return(t.values||[]).find(n=>Wt(n,e))!==void 0}function vi(t,e){if(t===e)return 0;const n=yi(t),r=yi(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Ve(s.integerValue||s.doubleValue),u=Ve(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return sm(t.timestampValue,e.timestampValue);case 4:return sm(Qa(t),Qa(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,a){const l=zs(s),u=zs(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=re(l[d],u[d]);if(p!==0)return p}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=re(Ve(s.latitude),Ve(a.latitude));return l!==0?l:re(Ve(s.longitude),Ve(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return om(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,d,p;const g=s.fields||{},I=a.fields||{},R=(l=g.value)===null||l===void 0?void 0:l.arrayValue,N=(u=I.value)===null||u===void 0?void 0:u.arrayValue,O=re(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((p=N==null?void 0:N.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:om(R,N)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Go.mapValue&&a===Go.mapValue)return 0;if(s===Go.mapValue)return 1;if(a===Go.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const I=re(u[g],p[g]);if(I!==0)return I;const R=vi(l[u[g]],d[p[g]]);if(R!==0)return R}return re(u.length,p.length)}(t.mapValue,e.mapValue);default:throw X()}}function sm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Cr(t),r=Cr(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function om(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=vi(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function _i(t){return Uc(t)}function Uc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return zs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Uc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Uc(n.fields[a])}`;return i+"}"}(t.mapValue):X()}function bc(t){return!!t&&"integerValue"in t}function rd(t){return!!t&&"arrayValue"in t}function fa(t){return!!t&&"mapValue"in t}function eA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return so(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ys(n)}setAll(e){let n=Le.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=ys(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){so(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(ys(this.value))}}function qv(t){const e=[];return so(t.fields,(n,r)=>{const i=new Le([n]);if(fa(r)){const s=qv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ct(e,0,he.min(),he.min(),he.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ct(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new Ct(e,2,n,he.min(),he.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,he.min(),he.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.position=e,this.inclusive=n}}function am(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(a.referenceValue),n.key):r=vi(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function lm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n="asc"){this.field=e,this.dir=n}}function nA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{}class ke extends Qv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iA(e,n,r):n==="array-contains"?new aA(e,r):n==="in"?new lA(e,r):n==="not-in"?new uA(e,r):n==="array-contains-any"?new cA(e,r):new ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sA(e,r):new oA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vi(n,this.value)):n!==null&&yi(this.value)===yi(n)&&this.matchesComparison(vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends Qv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new qn(e,n)}matches(e){return Xv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xv(t){return t.op==="and"}function Yv(t){return rA(t)&&Xv(t)}function rA(t){for(const e of t.filters)if(e instanceof qn)return!1;return!0}function jc(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+_i(t.value);if(Yv(t))return t.filters.map(e=>jc(e)).join(",");{const e=t.filters.map(n=>jc(n)).join(",");return`${t.op}(${e})`}}function Jv(t,e){return t instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&Wt(r.value,i.value)}(t,e):t instanceof qn?function(r,i){return i instanceof qn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Jv(a,i.filters[l]),!0):!1}(t,e):void X()}function Zv(t){return t instanceof ke?function(n){return`${n.field.canonicalString()} ${n.op} ${_i(n.value)}`}(t):t instanceof qn?function(n){return n.op.toString()+" {"+n.getFilters().map(Zv).join(" ,")+"}"}(t):"Filter"}class iA extends ke{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class sA extends ke{constructor(e,n){super(e,"in",n),this.keys=e_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oA extends ke{constructor(e,n){super(e,"not-in",n),this.keys=e_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function e_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class aA extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rd(n)&&$s(n.arrayValue,this.value)}}class lA extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$s(this.value.arrayValue,n)}}class uA extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if($s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$s(this.value.arrayValue,n)}}class cA extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$s(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function um(t,e=null,n=[],r=[],i=null,s=null,a=null){return new hA(t,e,n,r,i,s,a)}function id(t){const e=se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),td(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_i(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_i(r)).join(",")),e.ue=n}return e.ue}function sd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lm(t.startAt,e.startAt)&&lm(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function dA(t,e,n,r,i,s,a,l){return new Sl(t,e,n,r,i,s,a,l)}function fA(t){return new Sl(t)}function cm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pA(t){return t.collectionGroup!==null}function vs(t){const e=se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ge(Le.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ja(s,r))}),n.has(Le.keyField().canonicalString())||e.ce.push(new Ja(Le.keyField(),r))}return e.ce}function vr(t){const e=se(t);return e.le||(e.le=mA(e,vs(t))),e.le}function mA(t,e){if(t.limitType==="F")return um(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ja(i.field,s)});const n=t.endAt?new Ya(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ya(t.startAt.position,t.startAt.inclusive):null;return um(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bc(t,e,n){return new Sl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function t_(t,e){return sd(vr(t),vr(e))&&t.limitType===e.limitType}function n_(t){return`${id(vr(t))}|lt:${t.limitType}`}function Ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Zv(i)).join(", ")}]`),td(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_i(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_i(i)).join(",")),`Target(${r})`}(vr(t))}; limitType=${t.limitType})`}function od(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of vs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=am(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,vs(r),i)||r.endAt&&!function(a,l,u){const d=am(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,vs(r),i))}(t,e)}function gA(t){return(e,n)=>{let r=!1;for(const i of vs(t)){const s=yA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yA(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?vi(u,d):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){so(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Kv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=new at(G.comparator);function Za(){return vA}const r_=new at(G.comparator);function qo(...t){let e=r_;for(const n of t)e=e.insert(n.key,n);return e}function i_(t){let e=r_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pr(){return _s()}function s_(){return _s()}function _s(){return new ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const _A=new at(G.comparator),EA=new Ge(G.comparator);function Ke(...t){let e=EA;for(const n of t)e=e.add(n);return e}const wA=new Ge(re);function IA(){return wA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qa(e)?"-0":e}}function o_(t){return{integerValue:""+t}}function TA(t,e){return XS(e)?o_(e):ad(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this._=void 0}}function SA(t,e,n){return t instanceof el?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&nd(s)&&(s=Gv(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof Hs?l_(t,e):t instanceof Ws?u_(t,e):function(i,s){const a=a_(i,s),l=hm(a)+hm(i.Pe);return bc(a)&&bc(i.Pe)?o_(l):ad(i.serializer,l)}(t,e)}function AA(t,e,n){return t instanceof Hs?l_(t,e):t instanceof Ws?u_(t,e):n}function a_(t,e){return t instanceof tl?function(r){return bc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class el extends Al{}class Hs extends Al{constructor(e){super(),this.elements=e}}function l_(t,e){const n=c_(e);for(const r of t.elements)n.some(i=>Wt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ws extends Al{constructor(e){super(),this.elements=e}}function u_(t,e){let n=c_(e);for(const r of t.elements)n=n.filter(i=>!Wt(i,r));return{arrayValue:{values:n}}}class tl extends Al{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function hm(t){return Ve(t.integerValue||t.doubleValue)}function c_(t){return rd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function PA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Hs&&i instanceof Hs||r instanceof Ws&&i instanceof Ws?gi(r.elements,i.elements,Wt):r instanceof tl&&i instanceof tl?Wt(r.Pe,i.Pe):r instanceof el&&i instanceof el}(t.transform,e.transform)}class kA{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pl{}function h_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new f_(t.key,cn.none()):new oo(t.key,t.data,cn.none());{const n=t.data,r=Dt.empty();let i=new Ge(Le.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Or(t.key,r,new Vt(i.toArray()),cn.none())}}function RA(t,e,n){t instanceof oo?function(i,s,a){const l=i.value.clone(),u=fm(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(i,s,a){if(!pa(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=fm(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(d_(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Es(t,e,n,r){return t instanceof oo?function(s,a,l,u){if(!pa(s.precondition,a))return l;const d=s.value.clone(),p=pm(s.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(s,a,l,u){if(!pa(s.precondition,a))return l;const d=pm(s.fieldTransforms,u,a),p=a.data;return p.setAll(d_(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,a,l){return pa(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function CA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=a_(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function dm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&gi(r,i,(s,a)=>PA(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oo extends Pl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends Pl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function d_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fm(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,AA(a,l,n[i]))}return r}function pm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,SA(s,a,e))}return r}class f_ extends Pl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NA extends Pl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Es(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Es(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=s_();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=h_(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ke())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,(n,r)=>dm(n,r))&&gi(this.baseMutations,e.baseMutations,(n,r)=>dm(n,r))}}class ld{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=function(){return _A}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new ld(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,Y;function VA(t){switch(t){default:return X();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function LA(t){if(t===void 0)return Rr("GRPC error has no .code"),x.UNKNOWN;switch(t){case _e.OK:return x.OK;case _e.CANCELLED:return x.CANCELLED;case _e.UNKNOWN:return x.UNKNOWN;case _e.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case _e.INTERNAL:return x.INTERNAL;case _e.UNAVAILABLE:return x.UNAVAILABLE;case _e.UNAUTHENTICATED:return x.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case _e.NOT_FOUND:return x.NOT_FOUND;case _e.ALREADY_EXISTS:return x.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return x.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case _e.ABORTED:return x.ABORTED;case _e.OUT_OF_RANGE:return x.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return x.UNIMPLEMENTED;case _e.DATA_LOSS:return x.DATA_LOSS;default:return X()}}(Y=_e||(_e={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new xv([4294967295,4294967295],0);class xA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function MA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function FA(t,e){return zc(t,e.toTimestamp())}function ai(t){return Se(!!t),he.fromTimestamp(function(n){const r=Cr(n);return new Ce(r.seconds,r.nanos)}(t))}function p_(t,e){return $c(t,e).canonicalString()}function $c(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function UA(t){const e=Ee.fromString(t);return Se(KA(e)),e}function Hc(t,e){return p_(t.databaseId,e.path)}function bA(t){const e=UA(t);return e.length===4?Ee.emptyPath():BA(e)}function jA(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function BA(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function mm(t,e,n){return{name:Hc(t,e),fields:n.value.mapValue.fields}}function zA(t,e){let n;if(e instanceof oo)n={update:mm(t,e.key,e.value)};else if(e instanceof f_)n={delete:Hc(t,e.key)};else if(e instanceof Or)n={update:mm(t,e.key,e.data),updateMask:WA(e.fieldMask)};else{if(!(e instanceof NA))return X();n={verify:Hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof el)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Hs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ws)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tl)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:FA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function $A(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?ai(i.updateTime):ai(s);return a.isEqual(he.min())&&(a=ai(s)),new kA(a,i.transformResults||[])}(n,e))):[]}function HA(t){let e=bA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(g){const I=m_(g);return I instanceof qn&&Yv(I)?I.getFilters():[I]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(I=>function(N){return new Ja(Ur(N.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(I))}(n.orderBy));let l=null;n.limit&&(l=function(g){let I;return I=typeof g=="object"?g.value:g,td(I)?null:I}(n.limit));let u=null;n.startAt&&(u=function(g){const I=!!g.before,R=g.values||[];return new Ya(R,I)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const I=!g.before,R=g.values||[];return new Ya(R,I)}(n.endAt)),dA(e,i,a,s,l,"F",u,d)}function m_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ur(n.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ur(n.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ur(n.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ur(n.unaryFilter.field);return ke.create(a,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return ke.create(Ur(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qn.create(n.compositeFilter.filters.map(r=>m_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function Ur(t){return Le.fromServerFormat(t.fieldPath)}function WA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.ct=e}}function qA(t){const e=HA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.un=new XA}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Gn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class XA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ei(0)}static kn(){return new Ei(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(){this.changes=new ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Es(r.mutation,i,Vt.empty(),Ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ke()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ke()){const i=pr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=qo();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ke()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=Za();const a=_s(),l=function(){return _s()}();return n.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Or)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Es(p.mutation,d,p.mutation.getFieldMask(),Ce.now())):a.set(d.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>a.set(d,p)),n.forEach((d,p)=>{var g;return l.set(d,new JA(p,(g=a.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=_s();let i=new at((a,l)=>a-l),s=Ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||Vt.empty();p=l.applyToLocalView(d,p),r.set(u,p);const g=(i.get(l.batchId)||Ke()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,g=s_();p.forEach(I=>{if(!s.has(I)){const R=h_(n.get(I),r.get(I));R!==null&&g.set(I,R),s=s.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return G.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(pr());let l=-1,u=s;return a.next(d=>V.forEach(d,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(I=>{u=u.insert(p,I)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,Ke())).next(p=>({batchId:l,changes:i_(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=qo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=qo();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const d=function(g,I){return new Sl(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((g,I)=>{a=a.insert(g,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ct.newInvalidDocument(p)))});let l=qo();return a.forEach((u,d)=>{const p=s.get(u);p!==void 0&&Es(p.mutation,d,Vt.empty(),Ce.now()),od(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ai(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:qA(i.bundledQuery),readTime:ai(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(){this.overlays=new at(G.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=pr(),s=n.length+1,a=new G(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new at((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=pr(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=pr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new OA(n,r));let s=this.Ir.get(n);s===void 0&&(s=Ke(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this.sessionToken=Ht.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.Tr=new Ge(Ae.Er),this.dr=new Ge(Ae.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ae(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ae(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new Ee([])),r=new Ae(n,e),i=new Ae(n,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new Ee([])),r=new Ae(n,e),i=new Ae(n,e+1);let s=Ke();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Ae(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||re(e.wr,n.wr)}static Ar(e,n){return re(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ge(Ae.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new DA(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Ae(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ae(n,0),i=new Ae(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(re);return n.forEach(i=>{const s=new Ae(i,0),a=new Ae(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const a=new Ae(new G(s),0);let l=new Ge(re);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},a),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Ae(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ae(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.Mr=e,this.docs=function(){return new at(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=Za();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ct.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Za();const a=n.path,l=new G(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||KS(WS(p),r)<=0||(i.has(p.key)||od(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sP(this)}getSize(e){return V.resolve(this.size)}}class sP extends YA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.persistence=e,this.Nr=new ki(n=>id(n),sd),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ud,this.targetCount=0,this.kr=Ei.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ei(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Wv(0),this.Kr=!1,this.Kr=!0,this.$r=new nP,this.referenceDelegate=e(this),this.Ur=new oP(this),this.indexManager=new QA,this.remoteDocumentCache=function(i){return new iP(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new GA(n),this.Gr=new eP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new rP(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new lP(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class lP extends qS{constructor(e){super(),this.currentSequenceNumber=e}}class cd{constructor(e){this.persistence=e,this.Jr=new ud,this.Yr=null}static Zr(e){return new cd(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Ke(),i=Ke();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return iI()?8:QS(Qe())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new uP;return this.Xi(e,n,a).next(l=>{if(s.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Yi()<=Q.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Yi()<=Q.DEBUG&&z("QueryEngine","Query:",Ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Yi()<=Q.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vr(n))):V.resolve())}Yi(e,n){if(cm(n))return V.resolve(null);let r=vr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Bc(n,null,"F"),r=vr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Ke(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,a,u.readTime)?this.Yi(e,Bc(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return cm(n)||i.isEqual(he.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(n,s);return this.ns(n,a,r,i)?V.resolve(null):(Yi()<=Q.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ji(n)),this.rs(e,a,n,HS(i,-1)).next(l=>l))})}ts(e,n){let r=new Ge(gA(e));return n.forEach((i,s)=>{od(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Yi()<=Q.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ji(n)),this.Ji.getDocumentsMatchingQuery(e,n,Gn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new at(re),this._s=new ki(s=>id(s),sd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function dP(t,e,n,r){return new hP(t,e,n,r)}async function g_(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=Ke();for(const d of i){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function fP(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const g=d.batch,I=g.keys();let R=V.resolve();return I.forEach(N=>{R=R.next(()=>p.getEntry(u,N)).next(O=>{const F=d.docVersions.get(N);Se(F!==null),O.version.compareTo(F)<0&&(g.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Ke();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function pP(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function mP(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class gm{constructor(){this.activeTargetIds=IA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gP{constructor(){this.so=new gm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new gm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo=null;function Vu(){return Qo===null?Qo=function(){return 268435456+Math.round(2147483648*Math.random())}():Qo++,"0x"+Qo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="WebChannelConnection";class EP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,a){const l=Vu(),u=this.xo(n,r.toUriEncodedString());z("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(n,u,d,i).then(p=>(z("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Ga("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(n,r,i,s,a,l){return this.Mo(n,r,i,s,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}xo(n,r){const i=vP[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Vu();return new Promise((a,l)=>{const u=new Mv;u.setWithCredentials(!0),u.listenOnce(Uv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case da.NO_ERROR:const p=u.getResponseJson();z(ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case da.TIMEOUT:z(ze,`RPC '${e}' ${s} timed out`),l(new H(x.DEADLINE_EXCEEDED,"Request time out"));break;case da.HTTP_ERROR:const g=u.getStatus();if(z(ze,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const N=function(F){const T=F.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(T)>=0?T:x.UNKNOWN}(R.status);l(new H(N,R.message))}else l(new H(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(x.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{z(ze,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);z(ze,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Vu(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Bv(),l=jv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new Fv({})),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");z(ze,`Creating RPC '${e}' stream ${i}: ${p}`,u);const g=a.createWebChannel(p,u);let I=!1,R=!1;const N=new _P({Io:F=>{R?z(ze,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(I||(z(ze,`Opening RPC '${e}' stream ${i} transport.`),g.open(),I=!0),z(ze,`RPC '${e}' stream ${i} sending:`,F),g.send(F))},To:()=>g.close()}),O=(F,T,_)=>{F.listen(T,S=>{try{_(S)}catch(D){setTimeout(()=>{throw D},0)}})};return O(g,os.EventType.OPEN,()=>{R||(z(ze,`RPC '${e}' stream ${i} transport opened.`),N.yo())}),O(g,os.EventType.CLOSE,()=>{R||(R=!0,z(ze,`RPC '${e}' stream ${i} transport closed`),N.So())}),O(g,os.EventType.ERROR,F=>{R||(R=!0,Ga(ze,`RPC '${e}' stream ${i} transport errored:`,F),N.So(new H(x.UNAVAILABLE,"The operation could not be completed")))}),O(g,os.EventType.MESSAGE,F=>{var T;if(!R){const _=F.data[0];Se(!!_);const S=_,D=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(D){z(ze,`RPC '${e}' stream ${i} received error:`,D);const b=D.status;let U=function(y){const E=_e[y];if(E!==void 0)return LA(E)}(b),v=D.message;U===void 0&&(U=x.INTERNAL,v="Unknown error status: "+b+" with message "+D.message),R=!0,N.So(new H(U,v)),g.close()}else z(ze,`RPC '${e}' stream ${i} received:`,_),N.bo(_)}}),O(l,bv.STAT_EVENT,F=>{F.stat===Fc.PROXY?z(ze,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===Fc.NOPROXY&&z(ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Lu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t){return new xA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new y_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Rr(n.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new H(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IP extends wP{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=$A(e.writeResults,e.commitTime),r=ai(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=jA(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zA(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,$c(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(x.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,$c(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(x.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class SP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rr(n),this.D_=!1):z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{lo(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=se(u);d.L_.add(4),await ao(d),d.q_.set("Unknown"),d.L_.delete(4),await Rl(d)}(this))})}),this.q_=new SP(r,i)}}async function Rl(t){if(lo(t))for(const e of t.B_)await e(!0)}async function ao(t){for(const e of t.B_)await e(!1)}function lo(t){return se(t).L_.size===0}async function v_(t,e,n){if(!Tl(e))throw e;t.L_.add(1),await ao(t),t.q_.set("Offline"),n||(n=()=>pP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Rl(t)})}function __(t,e){return e().catch(n=>v_(t,n,e))}async function Cl(t){const e=se(t),n=Qn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;PP(e);)try{const i=await mP(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,kP(e,i)}catch(i){await v_(e,i)}E_(e)&&w_(e)}function PP(t){return lo(t)&&t.O_.length<10}function kP(t,e){t.O_.push(e);const n=Qn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function E_(t){return lo(t)&&!Qn(t).n_()&&t.O_.length>0}function w_(t){Qn(t).start()}async function RP(t){Qn(t).p_()}async function CP(t){const e=Qn(t);for(const n of t.O_)e.m_(n.mutations)}async function NP(t,e,n){const r=t.O_.shift(),i=ld.from(r,e,n);await __(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Cl(t)}async function DP(t,e){e&&Qn(t).V_&&await async function(r,i){if(function(a){return VA(a)&&a!==x.ABORTED}(i.code)){const s=r.O_.shift();Qn(r).s_(),await __(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cl(r)}}(t,e),E_(t)&&w_(t)}async function vm(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=lo(n);n.L_.add(3),await ao(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Rl(n)}async function OP(t,e){const n=se(t);e?(n.L_.delete(2),await Rl(n)):e||(n.L_.add(2),await ao(n),n.q_.set("Unknown"))}function Qn(t){return t.U_||(t.U_=function(n,r,i){const s=se(n);return s.w_(),new IP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:RP.bind(null,t),mo:DP.bind(null,t),f_:CP.bind(null,t),g_:NP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Cl(t)):(await t.U_.stop(),t.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new dd(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function I_(t,e){if(Rr("AsyncQueue",`${e}: ${t}`),Tl(t))return new H(x.UNAVAILABLE,`${e}: ${t}`);throw t}class VP{constructor(){this.queries=_m(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=se(n),s=i.queries;i.queries=_m(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(x.ABORTED,"Firestore shutting down"))}}function _m(){return new ki(t=>n_(t),t_)}function LP(t){t.Y_.forEach(e=>{e.next()})}var Em,wm;(wm=Em||(Em={})).ea="default",wm.Cache="cache";class xP{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ki(l=>n_(l),t_),this.Ma=new Map,this.xa=new Set,this.Oa=new at(G.comparator),this.Na=new Map,this.La=new ud,this.Ba={},this.ka=new Map,this.qa=Ei.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function MP(t,e,n){const r=jP(t);try{const i=await function(a,l){const u=se(a),d=Ce.now(),p=l.reduce((R,N)=>R.add(N.key),Ke());let g,I;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let N=Za(),O=Ke();return u.cs.getEntries(R,p).next(F=>{N=F,N.forEach((T,_)=>{_.isValidDocument()||(O=O.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,N)).next(F=>{g=F;const T=[];for(const _ of l){const S=CA(_,g.get(_.key).overlayedDocument);S!=null&&T.push(new Or(_.key,S,qv(S.value.mapValue),cn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,T,l)}).next(F=>{I=F;const T=F.applyToLocalDocumentSet(g,O);return u.documentOverlayCache.saveOverlays(R,F.batchId,T)})}).then(()=>({batchId:I.batchId,changes:i_(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new at(re)),d=d.insert(l,u),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,n),await Nl(r,i.changes),await Cl(r.remoteStore)}catch(i){const s=I_(i,"Failed to persist write");n.reject(s)}}function Im(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=se(a);u.onlineState=l;let d=!1;u.queries.forEach((p,g)=>{for(const I of g.j_)I.Z_(l)&&(d=!0)}),d&&LP(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FP(t,e){const n=se(t),r=e.batch.batchId;try{const i=await fP(n.localStore,e);S_(n,r,null),T_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Nl(n,i)}catch(i){await Hv(i)}}async function UP(t,e,n){const r=se(t);try{const i=await function(a,l){const u=se(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(g=>(Se(g!==null),p=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);S_(r,e,n),T_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Nl(r,i)}catch(i){await Hv(i)}}function T_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function S_(t,e,n){const r=se(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function Nl(t,e,n){const r=se(t),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=void 0)===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=hd.Wi(u.targetId,d);s.push(g)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const p=se(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(d,I=>V.forEach(I.$i,R=>p.persistence.referenceDelegate.addReference(g,I.targetId,R)).next(()=>V.forEach(I.Ui,R=>p.persistence.referenceDelegate.removeReference(g,I.targetId,R)))))}catch(g){if(!Tl(g))throw g;z("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const I=g.targetId;if(!g.fromCache){const R=p.os.get(I),N=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(N);p.os=p.os.insert(I,O)}}}(r.localStore,s))}async function bP(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await g_(n.localStore,e);n.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(x.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nl(n,r.hs)}}function jP(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UP.bind(null,e),e}class Tm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=kl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dP(this.persistence,new cP,e.initialUser,this.serializer)}createPersistence(e){return new aP(cd.Zr,this.serializer)}createSharedClientState(e){return new gP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Im(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bP.bind(null,this.syncEngine),await OP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VP}()}createDatastore(e){const n=kl(e.databaseInfo.databaseId),r=function(s){return new EP(s)}(e.databaseInfo);return function(s,a,l,u){return new TP(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new AP(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Im(this.syncEngine,n,0),function(){return ym.D()?new ym:new yP}())}createSyncEngine(e,n){return function(i,s,a,l,u,d,p){const g=new xP(i,s,a,l,u,d);return p&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=se(i);z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ao(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=He.UNAUTHENTICATED,this.clientId=$v.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new H(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=I_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xu(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await g_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HP(t);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>vm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>vm(e.remoteStore,i)),t._onlineComponents=e}function $P(t){return t.name==="FirebaseError"?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function HP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await xu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!$P(n))throw n;Ga("Error using user provided cache. Falling back to memory cache: "+n),await xu(t,new Tm)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await xu(t,new Tm);return t._offlineComponents}async function WP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Sm(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Sm(t,new BP))),t._onlineComponents}function KP(t){return WP(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(t,e,n){if(!n)throw new H(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qP(t,e,n,r){if(e===!0&&r===!0)throw new H(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pm(t){if(!G.isDocumentKey(t))throw new H(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Wc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fd(t);throw new H(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new km({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new km(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xS;switch(r.type){case"firstParty":return new bS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Am.get(n);r&&(z("ComponentProvider","Removing Datastore"),Am.delete(n),r.terminate())}(this),Promise.resolve()}}function QP(t,e,n,r={}){var i;const s=(t=Wc(t,pd))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Ga("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=He.MOCK_USER;else{l=Yw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new H(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new He(d)}t._authCredentials=new MS(new zv(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new md(this.firestore,e,this._query)}}class hn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}}class Ks extends md{constructor(e,n,r){super(e,n,fA(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new G(e))}withConverter(e){return new Ks(this.firestore,e,this._path)}}function Rm(t,e,...n){if(t=It(t),arguments.length===1&&(e=$v.newId()),GP("doc","path",e),t instanceof pd){const r=Ee.fromString(e,...n);return Pm(r),new hn(t,null,new G(r))}{if(!(t instanceof hn||t instanceof Ks))throw new H(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Pm(r),new hn(t.firestore,t instanceof Ks?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new y_(this,"async_queue_retry"),this.Eu=()=>{const n=Lu();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=Lu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=Lu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new yr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Tl(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Rr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const i=dd.createAndSchedule(this,e,n,r,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&X()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}class P_ extends pd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new XP}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||k_(this),this._firestoreClient.terminate()}}function YP(t,e){const n=typeof t=="object"?t:Zy(),r=typeof t=="string"?t:"(default)",i=zh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Qw("firestore");s&&QP(i,...s)}return i}function JP(t){return t._firestoreClient||k_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function k_(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,p){return new ZS(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,A_(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new zP(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gs(Ht.fromBase64String(e))}catch(n){throw new H(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gs(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=/^__.*__$/;class ek{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new oo(e,this.data,n,this.fieldTransforms)}}function O_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class gd{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.yu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new gd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return nl(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(O_(this.wu)&&ZP.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class tk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||kl(e)}Nu(e,n,r,i=!1){return new gd({wu:e,methodName:n,Ou:r,path:Le.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nk(t){const e=t._freezeSettings(),n=kl(t._databaseId);return new tk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rk(t,e,n,r,i,s={}){const a=t.Nu(s.merge||s.mergeFields?2:0,e,n,i);M_("Data must be an object, but it was:",a,r);const l=L_(r,a);let u,d;if(s.merge)u=new Vt(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const I=ik(e,g,n);if(!a.contains(I))throw new H(x.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);ak(p,I)||p.push(I)}u=new Vt(p),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new ek(new Dt(l),u,d)}function V_(t,e){if(x_(t=It(t)))return M_("Unsupported field value:",e,t),L_(t,e);if(t instanceof C_)return function(r,i){if(!O_(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=V_(l,i.Fu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=It(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return TA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ce.fromDate(r);return{timestampValue:zc(i.serializer,s)}}if(r instanceof Ce){const s=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zc(i.serializer,s)}}if(r instanceof N_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gs)return{bytesValue:MA(i.serializer,r._byteString)};if(r instanceof hn){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:p_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof D_)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Mu("VectorValues must only contain numeric values.");return ad(l.serializer,u)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${fd(r)}`)}(t,e)}function L_(t,e){const n={};return Kv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):so(t,(r,i)=>{const s=V_(i,e.bu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function x_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof N_||t instanceof Gs||t instanceof hn||t instanceof C_||t instanceof D_)}function M_(t,e,n){if(!x_(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=fd(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function ik(t,e,n){if((e=It(e))instanceof R_)return e._internalPath;if(typeof e=="string")return ok(t,e);throw nl("Field path arguments must be of type string or ",t,!1,void 0,n)}const sk=new RegExp("[~\\*/\\[\\]]");function ok(t,e,n){if(e.search(sk)>=0)throw nl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new R_(...e.split("."))._internalPath}catch{throw nl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nl(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new H(x.INVALID_ARGUMENT,l+t+u)}function ak(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function Cm(t,e,n){t=Wc(t,hn);const r=Wc(t.firestore,P_),i=lk(t.converter,e,n);return uk(r,[rk(nk(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,cn.none())])}function uk(t,e){return function(r,i){const s=new yr;return r.asyncQueue.enqueueAndForget(async()=>MP(await KP(r),i,s)),s.promise}(JP(t),e)}(function(e,n=!0){(function(i){Pi=i})(Si),mi(new Sr("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new P_(new FS(r.getProvider("auth-internal")),new BS(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new H(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xa(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Hn(nm,"4.7.2",e),Hn(nm,"4.7.2","esm2017")})();const ck={apiKey:"AIzaSyAWduItH7rrkbd5sekXnNxw1BnzgD4NtfA",authDomain:"data-eb970.firebaseapp.com",projectId:"data-eb970",storageBucket:"data-eb970.appspot.com",messagingSenderId:"877563731293",appId:"1:877563731293:web:d0615c0f0a955e6f935cb4",measurementId:"G-9B7CSQCZRQ"},F_=Jy(ck),Zi=VS(F_),Nm=YP(F_);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function hk(t,e,n,r){function i(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function l(p){try{d(r.next(p))}catch(g){a(g)}}function u(p){try{d(r.throw(p))}catch(g){a(g)}}function d(p){p.done?s(p.value):i(p.value).then(l,u)}d((r=r.apply(t,[])).next())})}function dk(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(d){return function(p){return u([d,p])}}function u(d){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=d[0]&2?i.return:d[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,d[1])).done)return s;switch(i=0,s&&(d=[d[0]&2,s.value]),d[0]){case 0:case 1:s=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,i=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!s||d[1]>s[0]&&d[1]<s[3])){n.label=d[1];break}if(d[0]===6&&n.label<s[1]){n.label=s[1],s=d;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(d);break}s[2]&&n.ops.pop(),n.trys.pop();continue}d=e.call(t,n)}catch(p){d=[6,p],i=0}finally{r=s=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Yr=function(){return Yr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Yr.apply(this,arguments)},U_=function(t){return{loading:t==null,value:t}},fk=function(){return function(t,e){switch(e.type){case"error":return Yr(Yr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return U_(e.defaultValue);case"value":return Yr(Yr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},pk=function(t){var e=t?t():void 0,n=Nt.useReducer(fk(),U_(e)),r=n[0],i=n[1],s=Nt.useCallback(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),a=Nt.useCallback(function(u){i({type:"error",error:u})},[]),l=Nt.useCallback(function(u){i({type:"value",value:u})},[]);return Nt.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:a,setValue:l,value:r.value}},[r.error,r.loading,s,a,l,r.value])},mk=function(t,e){var n=pk(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,a=n.setValue,l=n.value;return Nt.useEffect(function(){var u=I1(t,function(d){return hk(void 0,void 0,void 0,function(){var p;return dk(this,function(g){switch(g.label){case 0:return[3,4];case 1:return g.trys.push([1,3,,4]),[4,e.onUserChanged(d)];case 2:return g.sent(),[3,4];case 3:return p=g.sent(),s(p),[3,4];case 4:return a(d),[2]}})})},s);return function(){u()}},[t]),[l,i,r]};const gk=()=>{const[t,e]=Nt.useState(""),[n,r]=Nt.useState(""),[i]=mk(Zi),s=async()=>{const u=new tn;u.setCustomParameters({prompt:"select_account"});try{const p=(await z1(Zi,u)).user;await Cm(Rm(Nm,"users",p.uid),{uid:p.uid,email:p.email,displayName:p.displayName},{merge:!0})}catch(d){console.error("Error signing in with Google",d)}},a=async u=>{u.preventDefault();try{const p=(await v1(Zi,t,n)).user;await Cm(Rm(Nm,"users",p.uid),{uid:p.uid,email:p.email})}catch(d){console.error("Error signing up with email",d)}},l=async u=>{u.preventDefault();try{await _1(Zi,t,n)}catch(d){console.error("Error signing in with email",d)}};return i?$e.jsxs("div",{children:[$e.jsxs("h2",{children:["Welcome, ",i.displayName||i.email,"!"]}),$e.jsx("button",{onClick:()=>Zi.signOut(),children:"Sign Out"})]}):$e.jsxs("div",{children:[$e.jsx("h2",{children:"Sign Up / Login"}),$e.jsxs("form",{onSubmit:a,children:[$e.jsx("input",{type:"email",value:t,onChange:u=>e(u.target.value),placeholder:"Email",required:!0}),$e.jsx("input",{type:"password",value:n,onChange:u=>r(u.target.value),placeholder:"Password",required:!0}),$e.jsx("button",{type:"submit",children:"Sign Up"})]}),$e.jsx("button",{onClick:l,children:"Sign In"}),$e.jsx("button",{onClick:s,children:"Sign In with Google"})]})};function yk(){return $e.jsxs("div",{className:"App",children:[$e.jsx("h1",{children:"Firebase Auth React App"}),$e.jsx(gk,{})]})}$y(document.getElementById("root")).render($e.jsx(Nt.StrictMode,{children:$e.jsx(yk,{})}));
