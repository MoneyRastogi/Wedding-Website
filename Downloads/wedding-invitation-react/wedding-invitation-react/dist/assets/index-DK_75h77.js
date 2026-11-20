(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const d of p.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(c){if(c.ep)return;c.ep=!0;const p=o(c);fetch(c.href,p)}})();var Ja={exports:{}},li={},el={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df;function m0(){if(df)return se;df=1;var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function j(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,b={};function D(T,M,ie){this.props=T,this.context=M,this.refs=b,this.updater=ie||N}D.prototype.isReactComponent={},D.prototype.setState=function(T,M){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,M,"setState")},D.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function I(){}I.prototype=D.prototype;function U(T,M,ie){this.props=T,this.context=M,this.refs=b,this.updater=ie||N}var H=U.prototype=new I;H.constructor=U,z(H,D.prototype),H.isPureReactComponent=!0;var Q=Array.isArray,F=Object.prototype.hasOwnProperty,ee={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function X(T,M,ie){var ae,ce={},de=null,ge=null;if(M!=null)for(ae in M.ref!==void 0&&(ge=M.ref),M.key!==void 0&&(de=""+M.key),M)F.call(M,ae)&&!le.hasOwnProperty(ae)&&(ce[ae]=M[ae]);var he=arguments.length-2;if(he===1)ce.children=ie;else if(1<he){for(var ke=Array(he),lt=0;lt<he;lt++)ke[lt]=arguments[lt+2];ce.children=ke}if(T&&T.defaultProps)for(ae in he=T.defaultProps,he)ce[ae]===void 0&&(ce[ae]=he[ae]);return{$$typeof:n,type:T,key:de,ref:ge,props:ce,_owner:ee.current}}function ve(T,M){return{$$typeof:n,type:T.type,key:M,ref:T.ref,props:T.props,_owner:T._owner}}function Pe(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function Je(T){var M={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ie){return M[ie]})}var at=/\/+/g;function Qe(T,M){return typeof T=="object"&&T!==null&&T.key!=null?Je(""+T.key):M.toString(36)}function et(T,M,ie,ae,ce){var de=typeof T;(de==="undefined"||de==="boolean")&&(T=null);var ge=!1;if(T===null)ge=!0;else switch(de){case"string":case"number":ge=!0;break;case"object":switch(T.$$typeof){case n:case i:ge=!0}}if(ge)return ge=T,ce=ce(ge),T=ae===""?"."+Qe(ge,0):ae,Q(ce)?(ie="",T!=null&&(ie=T.replace(at,"$&/")+"/"),et(ce,M,ie,"",function(lt){return lt})):ce!=null&&(Pe(ce)&&(ce=ve(ce,ie+(!ce.key||ge&&ge.key===ce.key?"":(""+ce.key).replace(at,"$&/")+"/")+T)),M.push(ce)),1;if(ge=0,ae=ae===""?".":ae+":",Q(T))for(var he=0;he<T.length;he++){de=T[he];var ke=ae+Qe(de,he);ge+=et(de,M,ie,ke,ce)}else if(ke=j(T),typeof ke=="function")for(T=ke.call(T),he=0;!(de=T.next()).done;)de=de.value,ke=ae+Qe(de,he++),ge+=et(de,M,ie,ke,ce);else if(de==="object")throw M=String(T),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return ge}function jt(T,M,ie){if(T==null)return T;var ae=[],ce=0;return et(T,ae,"","",function(de){return M.call(ie,de,ce++)}),ae}function Xe(T){if(T._status===-1){var M=T._result;M=M(),M.then(function(ie){(T._status===0||T._status===-1)&&(T._status=1,T._result=ie)},function(ie){(T._status===0||T._status===-1)&&(T._status=2,T._result=ie)}),T._status===-1&&(T._status=0,T._result=M)}if(T._status===1)return T._result.default;throw T._result}var oe={current:null},_={transition:null},Z={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:_,ReactCurrentOwner:ee};function W(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:jt,forEach:function(T,M,ie){jt(T,function(){M.apply(this,arguments)},ie)},count:function(T){var M=0;return jt(T,function(){M++}),M},toArray:function(T){return jt(T,function(M){return M})||[]},only:function(T){if(!Pe(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},se.Component=D,se.Fragment=o,se.Profiler=c,se.PureComponent=U,se.StrictMode=a,se.Suspense=g,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,se.act=W,se.cloneElement=function(T,M,ie){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var ae=z({},T.props),ce=T.key,de=T.ref,ge=T._owner;if(M!=null){if(M.ref!==void 0&&(de=M.ref,ge=ee.current),M.key!==void 0&&(ce=""+M.key),T.type&&T.type.defaultProps)var he=T.type.defaultProps;for(ke in M)F.call(M,ke)&&!le.hasOwnProperty(ke)&&(ae[ke]=M[ke]===void 0&&he!==void 0?he[ke]:M[ke])}var ke=arguments.length-2;if(ke===1)ae.children=ie;else if(1<ke){he=Array(ke);for(var lt=0;lt<ke;lt++)he[lt]=arguments[lt+2];ae.children=he}return{$$typeof:n,type:T.type,key:ce,ref:de,props:ae,_owner:ge}},se.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:p,_context:T},T.Consumer=T},se.createElement=X,se.createFactory=function(T){var M=X.bind(null,T);return M.type=T,M},se.createRef=function(){return{current:null}},se.forwardRef=function(T){return{$$typeof:m,render:T}},se.isValidElement=Pe,se.lazy=function(T){return{$$typeof:v,_payload:{_status:-1,_result:T},_init:Xe}},se.memo=function(T,M){return{$$typeof:y,type:T,compare:M===void 0?null:M}},se.startTransition=function(T){var M=_.transition;_.transition={};try{T()}finally{_.transition=M}},se.unstable_act=W,se.useCallback=function(T,M){return oe.current.useCallback(T,M)},se.useContext=function(T){return oe.current.useContext(T)},se.useDebugValue=function(){},se.useDeferredValue=function(T){return oe.current.useDeferredValue(T)},se.useEffect=function(T,M){return oe.current.useEffect(T,M)},se.useId=function(){return oe.current.useId()},se.useImperativeHandle=function(T,M,ie){return oe.current.useImperativeHandle(T,M,ie)},se.useInsertionEffect=function(T,M){return oe.current.useInsertionEffect(T,M)},se.useLayoutEffect=function(T,M){return oe.current.useLayoutEffect(T,M)},se.useMemo=function(T,M){return oe.current.useMemo(T,M)},se.useReducer=function(T,M,ie){return oe.current.useReducer(T,M,ie)},se.useRef=function(T){return oe.current.useRef(T)},se.useState=function(T){return oe.current.useState(T)},se.useSyncExternalStore=function(T,M,ie){return oe.current.useSyncExternalStore(T,M,ie)},se.useTransition=function(){return oe.current.useTransition()},se.version="18.3.1",se}var ff;function Vl(){return ff||(ff=1,el.exports=m0()),el.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function g0(){if(pf)return li;pf=1;var n=Vl(),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(m,g,y){var v,w={},j=null,N=null;y!==void 0&&(j=""+y),g.key!==void 0&&(j=""+g.key),g.ref!==void 0&&(N=g.ref);for(v in g)a.call(g,v)&&!p.hasOwnProperty(v)&&(w[v]=g[v]);if(m&&m.defaultProps)for(v in g=m.defaultProps,g)w[v]===void 0&&(w[v]=g[v]);return{$$typeof:i,type:m,key:j,ref:N,props:w,_owner:c.current}}return li.Fragment=o,li.jsx=d,li.jsxs=d,li}var hf;function y0(){return hf||(hf=1,Ja.exports=g0()),Ja.exports}var f=y0(),O=Vl(),_o={},tl={exports:{}},st={},nl={exports:{}},rl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function v0(){return mf||(mf=1,(function(n){function i(_,Z){var W=_.length;_.push(Z);e:for(;0<W;){var T=W-1>>>1,M=_[T];if(0<c(M,Z))_[T]=Z,_[W]=M,W=T;else break e}}function o(_){return _.length===0?null:_[0]}function a(_){if(_.length===0)return null;var Z=_[0],W=_.pop();if(W!==Z){_[0]=W;e:for(var T=0,M=_.length,ie=M>>>1;T<ie;){var ae=2*(T+1)-1,ce=_[ae],de=ae+1,ge=_[de];if(0>c(ce,W))de<M&&0>c(ge,ce)?(_[T]=ge,_[de]=W,T=de):(_[T]=ce,_[ae]=W,T=ae);else if(de<M&&0>c(ge,W))_[T]=ge,_[de]=W,T=de;else break e}}return Z}function c(_,Z){var W=_.sortIndex-Z.sortIndex;return W!==0?W:_.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var d=Date,m=d.now();n.unstable_now=function(){return d.now()-m}}var g=[],y=[],v=1,w=null,j=3,N=!1,z=!1,b=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(_){for(var Z=o(y);Z!==null;){if(Z.callback===null)a(y);else if(Z.startTime<=_)a(y),Z.sortIndex=Z.expirationTime,i(g,Z);else break;Z=o(y)}}function Q(_){if(b=!1,H(_),!z)if(o(g)!==null)z=!0,Xe(F);else{var Z=o(y);Z!==null&&oe(Q,Z.startTime-_)}}function F(_,Z){z=!1,b&&(b=!1,I(X),X=-1),N=!0;var W=j;try{for(H(Z),w=o(g);w!==null&&(!(w.expirationTime>Z)||_&&!Je());){var T=w.callback;if(typeof T=="function"){w.callback=null,j=w.priorityLevel;var M=T(w.expirationTime<=Z);Z=n.unstable_now(),typeof M=="function"?w.callback=M:w===o(g)&&a(g),H(Z)}else a(g);w=o(g)}if(w!==null)var ie=!0;else{var ae=o(y);ae!==null&&oe(Q,ae.startTime-Z),ie=!1}return ie}finally{w=null,j=W,N=!1}}var ee=!1,le=null,X=-1,ve=5,Pe=-1;function Je(){return!(n.unstable_now()-Pe<ve)}function at(){if(le!==null){var _=n.unstable_now();Pe=_;var Z=!0;try{Z=le(!0,_)}finally{Z?Qe():(ee=!1,le=null)}}else ee=!1}var Qe;if(typeof U=="function")Qe=function(){U(at)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,jt=et.port2;et.port1.onmessage=at,Qe=function(){jt.postMessage(null)}}else Qe=function(){D(at,0)};function Xe(_){le=_,ee||(ee=!0,Qe())}function oe(_,Z){X=D(function(){_(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(_){_.callback=null},n.unstable_continueExecution=function(){z||N||(z=!0,Xe(F))},n.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<_?Math.floor(1e3/_):5},n.unstable_getCurrentPriorityLevel=function(){return j},n.unstable_getFirstCallbackNode=function(){return o(g)},n.unstable_next=function(_){switch(j){case 1:case 2:case 3:var Z=3;break;default:Z=j}var W=j;j=Z;try{return _()}finally{j=W}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(_,Z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var W=j;j=_;try{return Z()}finally{j=W}},n.unstable_scheduleCallback=function(_,Z,W){var T=n.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?T+W:T):W=T,_){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=W+M,_={id:v++,callback:Z,priorityLevel:_,startTime:W,expirationTime:M,sortIndex:-1},W>T?(_.sortIndex=W,i(y,_),o(g)===null&&_===o(y)&&(b?(I(X),X=-1):b=!0,oe(Q,W-T))):(_.sortIndex=M,i(g,_),z||N||(z=!0,Xe(F))),_},n.unstable_shouldYield=Je,n.unstable_wrapCallback=function(_){var Z=j;return function(){var W=j;j=Z;try{return _.apply(this,arguments)}finally{j=W}}}})(rl)),rl}var gf;function x0(){return gf||(gf=1,nl.exports=v0()),nl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function w0(){if(yf)return st;yf=1;var n=Vl(),i=x0();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function p(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(c[e]=t,e=0;e<t.length;e++)a.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function j(e){return g.call(w,e)?!0:g.call(v,e)?!1:y.test(e)?w[e]=!0:(v[e]=!0,!1)}function N(e,t,r,s){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z(e,t,r,s){if(t===null||typeof t>"u"||N(e,t,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,r,s,l,u,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=h}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function U(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(I,U);D[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(I,U);D[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(I,U);D[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function H(e,t,r,s){var l=D.hasOwnProperty(t)?D[t]:null;(l!==null?l.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z(t,r,l,s)&&(r=null),s||l===null?j(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,s=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,s?e.setAttributeNS(s,t,r):e.setAttribute(t,r))))}var Q=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),ee=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),Je=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),Qe=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),jt=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),_=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,T;function M(e){if(T===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);T=t&&t[1]||""}return`
`+T+e}var ie=!1;function ae(e,t){if(!e||ie)return"";ie=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(P){var s=P}Reflect.construct(e,[],t)}else{try{t.call()}catch(P){s=P}e.call(t.prototype)}else{try{throw Error()}catch(P){s=P}e()}}catch(P){if(P&&s&&typeof P.stack=="string"){for(var l=P.stack.split(`
`),u=s.stack.split(`
`),h=l.length-1,x=u.length-1;1<=h&&0<=x&&l[h]!==u[x];)x--;for(;1<=h&&0<=x;h--,x--)if(l[h]!==u[x]){if(h!==1||x!==1)do if(h--,x--,0>x||l[h]!==u[x]){var S=`
`+l[h].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=h&&0<=x);break}}}finally{ie=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?M(e):""}function ce(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case ee:return"Portal";case ve:return"Profiler";case X:return"StrictMode";case Qe:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Je:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case at:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jt:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(t);case 8:return t===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lt(e){var t=ke(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){s=""+h,u.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(h){s=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){e._valueTracker||(e._valueTracker=lt(e))}function gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=ke(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ss(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function yu(e,t){var r=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;r=he(t.value!=null?t.value:r),e._wrapperState={initialChecked:s,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vu(e,t){t=t.checked,t!=null&&H(e,"checked",t,!1)}function as(e,t){vu(e,t);var r=he(t.value),s=t.type;if(r!=null)s==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ls(e,t.type,r):t.hasOwnProperty("defaultValue")&&ls(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ls(e,t,r){(t!=="number"||Ni(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var jr=Array.isArray;function Bn(e,t,r,s){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&s&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(jr(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:he(r)}}function Su(e,t){var r=he(t.value),s=he(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),s!=null&&(e.defaultValue=""+s)}function ku(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bi,Tu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,s,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,s,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bi=bi||document.createElement("div"),bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xm=["Webkit","ms","Moz","O"];Object.keys(Er).forEach(function(e){xm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Er[t]=Er[e]})});function Eu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Er.hasOwnProperty(e)&&Er[e]?(""+t).trim():t+"px"}function Cu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var s=r.indexOf("--")===0,l=Eu(r,t[r],s);r==="float"&&(r="cssFloat"),s?e.setProperty(r,l):e[r]=l}}var wm=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ds(e,t){if(t){if(wm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ms=null,Un=null,Wn=null;function Pu(e){if(e=Kr(e)){if(typeof ms!="function")throw Error(o(280));var t=e.stateNode;t&&(t=qi(t),ms(e.stateNode,e.type,t))}}function Nu(e){Un?Wn?Wn.push(e):Wn=[e]:Un=e}function bu(){if(Un){var e=Un,t=Wn;if(Wn=Un=null,Pu(e),t)for(e=0;e<t.length;e++)Pu(t[e])}}function Au(e,t){return e(t)}function Mu(){}var gs=!1;function Ru(e,t,r){if(gs)return e(t,r);gs=!0;try{return Au(e,t,r)}finally{gs=!1,(Un!==null||Wn!==null)&&(Mu(),bu())}}function Cr(e,t){var r=e.stateNode;if(r===null)return null;var s=qi(r);if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var ys=!1;if(m)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){ys=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{ys=!1}function Sm(e,t,r,s,l,u,h,x,S){var P=Array.prototype.slice.call(arguments,3);try{t.apply(r,P)}catch(R){this.onError(R)}}var Nr=!1,Ai=null,Mi=!1,vs=null,km={onError:function(e){Nr=!0,Ai=e}};function jm(e,t,r,s,l,u,h,x,S){Nr=!1,Ai=null,Sm.apply(km,arguments)}function Tm(e,t,r,s,l,u,h,x,S){if(jm.apply(this,arguments),Nr){if(Nr){var P=Ai;Nr=!1,Ai=null}else throw Error(o(198));Mi||(Mi=!0,vs=P)}}function Sn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Du(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Lu(e){if(Sn(e)!==e)throw Error(o(188))}function Em(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,s=t;;){var l=r.return;if(l===null)break;var u=l.alternate;if(u===null){if(s=l.return,s!==null){r=s;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===r)return Lu(l),e;if(u===s)return Lu(l),t;u=u.sibling}throw Error(o(188))}if(r.return!==s.return)r=l,s=u;else{for(var h=!1,x=l.child;x;){if(x===r){h=!0,r=l,s=u;break}if(x===s){h=!0,s=l,r=u;break}x=x.sibling}if(!h){for(x=u.child;x;){if(x===r){h=!0,r=u,s=l;break}if(x===s){h=!0,s=u,r=l;break}x=x.sibling}if(!h)throw Error(o(189))}}if(r.alternate!==s)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function zu(e){return e=Em(e),e!==null?Vu(e):null}function Vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vu(e);if(t!==null)return t;e=e.sibling}return null}var Iu=i.unstable_scheduleCallback,_u=i.unstable_cancelCallback,Cm=i.unstable_shouldYield,Pm=i.unstable_requestPaint,Ae=i.unstable_now,Nm=i.unstable_getCurrentPriorityLevel,xs=i.unstable_ImmediatePriority,Ou=i.unstable_UserBlockingPriority,Ri=i.unstable_NormalPriority,bm=i.unstable_LowPriority,Fu=i.unstable_IdlePriority,Di=null,Dt=null;function Am(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Di,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Dm,Mm=Math.log,Rm=Math.LN2;function Dm(e){return e>>>=0,e===0?32:31-(Mm(e)/Rm|0)|0}var Li=64,zi=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vi(e,t){var r=e.pendingLanes;if(r===0)return 0;var s=0,l=e.suspendedLanes,u=e.pingedLanes,h=r&268435455;if(h!==0){var x=h&~l;x!==0?s=br(x):(u&=h,u!==0&&(s=br(u)))}else h=r&~l,h!==0?s=br(h):u!==0&&(s=br(u));if(s===0)return 0;if(t!==0&&t!==s&&(t&l)===0&&(l=s&-s,u=t&-t,l>=u||l===16&&(u&4194240)!==0))return t;if((s&4)!==0&&(s|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)r=31-Tt(t),l=1<<r,s|=e[r],t&=~l;return s}function Lm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zm(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes;0<u;){var h=31-Tt(u),x=1<<h,S=l[h];S===-1?((x&r)===0||(x&s)!==0)&&(l[h]=Lm(x,t)):S<=t&&(e.expiredLanes|=x),u&=~x}}function ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bu(){var e=Li;return Li<<=1,(Li&4194240)===0&&(Li=64),e}function Ss(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ar(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=r}function Vm(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Tt(r),u=1<<l;t[l]=0,s[l]=-1,e[l]=-1,r&=~u}}function ks(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-Tt(r),l=1<<s;l&t|e[s]&t&&(e[s]|=t),r&=~l}}var me=0;function Uu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Wu,js,$u,Hu,Gu,Ts=!1,Ii=[],Zt=null,qt=null,Jt=null,Mr=new Map,Rr=new Map,en=[],Im="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ku(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function Dr(e,t,r,s,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:u,targetContainers:[l]},t!==null&&(t=Kr(t),t!==null&&js(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function _m(e,t,r,s,l){switch(t){case"focusin":return Zt=Dr(Zt,e,t,r,s,l),!0;case"dragenter":return qt=Dr(qt,e,t,r,s,l),!0;case"mouseover":return Jt=Dr(Jt,e,t,r,s,l),!0;case"pointerover":var u=l.pointerId;return Mr.set(u,Dr(Mr.get(u)||null,e,t,r,s,l)),!0;case"gotpointercapture":return u=l.pointerId,Rr.set(u,Dr(Rr.get(u)||null,e,t,r,s,l)),!0}return!1}function Yu(e){var t=kn(e.target);if(t!==null){var r=Sn(t);if(r!==null){if(t=r.tag,t===13){if(t=Du(r),t!==null){e.blockedOn=t,Gu(e.priority,function(){$u(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);ps=s,r.target.dispatchEvent(s),ps=null}else return t=Kr(r),t!==null&&js(t),e.blockedOn=r,!1;t.shift()}return!0}function Qu(e,t,r){_i(e)&&r.delete(t)}function Om(){Ts=!1,Zt!==null&&_i(Zt)&&(Zt=null),qt!==null&&_i(qt)&&(qt=null),Jt!==null&&_i(Jt)&&(Jt=null),Mr.forEach(Qu),Rr.forEach(Qu)}function Lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ts||(Ts=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Om)))}function zr(e){function t(l){return Lr(l,e)}if(0<Ii.length){Lr(Ii[0],e);for(var r=1;r<Ii.length;r++){var s=Ii[r];s.blockedOn===e&&(s.blockedOn=null)}}for(Zt!==null&&Lr(Zt,e),qt!==null&&Lr(qt,e),Jt!==null&&Lr(Jt,e),Mr.forEach(t),Rr.forEach(t),r=0;r<en.length;r++)s=en[r],s.blockedOn===e&&(s.blockedOn=null);for(;0<en.length&&(r=en[0],r.blockedOn===null);)Yu(r),r.blockedOn===null&&en.shift()}var $n=Q.ReactCurrentBatchConfig,Oi=!0;function Fm(e,t,r,s){var l=me,u=$n.transition;$n.transition=null;try{me=1,Es(e,t,r,s)}finally{me=l,$n.transition=u}}function Bm(e,t,r,s){var l=me,u=$n.transition;$n.transition=null;try{me=4,Es(e,t,r,s)}finally{me=l,$n.transition=u}}function Es(e,t,r,s){if(Oi){var l=Cs(e,t,r,s);if(l===null)Ws(e,t,s,Fi,r),Ku(e,s);else if(_m(l,e,t,r,s))s.stopPropagation();else if(Ku(e,s),t&4&&-1<Im.indexOf(e)){for(;l!==null;){var u=Kr(l);if(u!==null&&Wu(u),u=Cs(e,t,r,s),u===null&&Ws(e,t,s,Fi,r),u===l)break;l=u}l!==null&&s.stopPropagation()}else Ws(e,t,s,null,r)}}var Fi=null;function Cs(e,t,r,s){if(Fi=null,e=hs(s),e=kn(e),e!==null)if(t=Sn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Du(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fi=e,null}function Xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nm()){case xs:return 1;case Ou:return 4;case Ri:case bm:return 16;case Fu:return 536870912;default:return 16}default:return 16}}var tn=null,Ps=null,Bi=null;function Zu(){if(Bi)return Bi;var e,t=Ps,r=t.length,s,l="value"in tn?tn.value:tn.textContent,u=l.length;for(e=0;e<r&&t[e]===l[e];e++);var h=r-e;for(s=1;s<=h&&t[r-s]===l[u-s];s++);return Bi=l.slice(e,1<s?1-s:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wi(){return!0}function qu(){return!1}function ut(e){function t(r,s,l,u,h){this._reactName=r,this._targetInst=l,this.type=s,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(r=e[x],this[x]=r?r(u):u[x]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Wi:qu,this.isPropagationStopped=qu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Wi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Wi)},persist:function(){},isPersistent:Wi}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=ut(Hn),Vr=W({},Hn,{view:0,detail:0}),Um=ut(Vr),bs,As,Ir,$i=W({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(bs=e.screenX-Ir.screenX,As=e.screenY-Ir.screenY):As=bs=0,Ir=e),bs)},movementY:function(e){return"movementY"in e?e.movementY:As}}),Ju=ut($i),Wm=W({},$i,{dataTransfer:0}),$m=ut(Wm),Hm=W({},Vr,{relatedTarget:0}),Ms=ut(Hm),Gm=W({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Km=ut(Gm),Ym=W({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qm=ut(Ym),Xm=W({},Hn,{data:0}),ec=ut(Xm),Zm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jm[e])?!!t[e]:!1}function Rs(){return eg}var tg=W({},Vr,{key:function(e){if(e.key){var t=Zm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ng=ut(tg),rg=W({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tc=ut(rg),ig=W({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),og=ut(ig),sg=W({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ag=ut(sg),lg=W({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ug=ut(lg),cg=[9,13,27,32],Ds=m&&"CompositionEvent"in window,_r=null;m&&"documentMode"in document&&(_r=document.documentMode);var dg=m&&"TextEvent"in window&&!_r,nc=m&&(!Ds||_r&&8<_r&&11>=_r),rc=" ",ic=!1;function oc(e,t){switch(e){case"keyup":return cg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function fg(e,t){switch(e){case"compositionend":return sc(t);case"keypress":return t.which!==32?null:(ic=!0,rc);case"textInput":return e=t.data,e===rc&&ic?null:e;default:return null}}function pg(e,t){if(Gn)return e==="compositionend"||!Ds&&oc(e,t)?(e=Zu(),Bi=Ps=tn=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nc&&t.locale!=="ko"?null:t.data;default:return null}}var hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hg[e.type]:t==="textarea"}function lc(e,t,r,s){Nu(s),t=Qi(t,"onChange"),0<t.length&&(r=new Ns("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var Or=null,Fr=null;function mg(e){Cc(e,0)}function Hi(e){var t=Zn(e);if(gu(t))return e}function gg(e,t){if(e==="change")return t}var uc=!1;if(m){var Ls;if(m){var zs="oninput"in document;if(!zs){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),zs=typeof cc.oninput=="function"}Ls=zs}else Ls=!1;uc=Ls&&(!document.documentMode||9<document.documentMode)}function dc(){Or&&(Or.detachEvent("onpropertychange",fc),Fr=Or=null)}function fc(e){if(e.propertyName==="value"&&Hi(Fr)){var t=[];lc(t,Fr,e,hs(e)),Ru(mg,t)}}function yg(e,t,r){e==="focusin"?(dc(),Or=t,Fr=r,Or.attachEvent("onpropertychange",fc)):e==="focusout"&&dc()}function vg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(Fr)}function xg(e,t){if(e==="click")return Hi(t)}function wg(e,t){if(e==="input"||e==="change")return Hi(t)}function Sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Sg;function Br(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var l=r[s];if(!g.call(t,l)||!Et(e[l],t[l]))return!1}return!0}function pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hc(e,t){var r=pc(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=pc(r)}}function mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gc(){for(var e=window,t=Ni();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ni(e.document)}return t}function Vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function kg(e){var t=gc(),r=e.focusedElem,s=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&mc(r.ownerDocument.documentElement,r)){if(s!==null&&Vs(r)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,u=Math.min(s.start,l);s=s.end===void 0?u:Math.min(s.end,l),!e.extend&&u>s&&(l=s,s=u,u=l),l=hc(r,u);var h=hc(r,s);l&&h&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),u>s?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jg=m&&"documentMode"in document&&11>=document.documentMode,Kn=null,Is=null,Ur=null,_s=!1;function yc(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;_s||Kn==null||Kn!==Ni(s)||(s=Kn,"selectionStart"in s&&Vs(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ur&&Br(Ur,s)||(Ur=s,s=Qi(Is,"onSelect"),0<s.length&&(t=new Ns("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Kn)))}function Gi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Yn={animationend:Gi("Animation","AnimationEnd"),animationiteration:Gi("Animation","AnimationIteration"),animationstart:Gi("Animation","AnimationStart"),transitionend:Gi("Transition","TransitionEnd")},Os={},vc={};m&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function Ki(e){if(Os[e])return Os[e];if(!Yn[e])return e;var t=Yn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in vc)return Os[e]=t[r];return e}var xc=Ki("animationend"),wc=Ki("animationiteration"),Sc=Ki("animationstart"),kc=Ki("transitionend"),jc=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){jc.set(e,t),p(t,[e])}for(var Fs=0;Fs<Tc.length;Fs++){var Bs=Tc[Fs],Tg=Bs.toLowerCase(),Eg=Bs[0].toUpperCase()+Bs.slice(1);nn(Tg,"on"+Eg)}nn(xc,"onAnimationEnd"),nn(wc,"onAnimationIteration"),nn(Sc,"onAnimationStart"),nn("dblclick","onDoubleClick"),nn("focusin","onFocus"),nn("focusout","onBlur"),nn(kc,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function Ec(e,t,r){var s=e.type||"unknown-event";e.currentTarget=r,Tm(s,t,void 0,e),e.currentTarget=null}function Cc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],l=s.event;s=s.listeners;e:{var u=void 0;if(t)for(var h=s.length-1;0<=h;h--){var x=s[h],S=x.instance,P=x.currentTarget;if(x=x.listener,S!==u&&l.isPropagationStopped())break e;Ec(l,x,P),u=S}else for(h=0;h<s.length;h++){if(x=s[h],S=x.instance,P=x.currentTarget,x=x.listener,S!==u&&l.isPropagationStopped())break e;Ec(l,x,P),u=S}}}if(Mi)throw e=vs,Mi=!1,vs=null,e}function xe(e,t){var r=t[Qs];r===void 0&&(r=t[Qs]=new Set);var s=e+"__bubble";r.has(s)||(Pc(t,e,2,!1),r.add(s))}function Us(e,t,r){var s=0;t&&(s|=4),Pc(r,e,s,t)}var Yi="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[Yi]){e[Yi]=!0,a.forEach(function(r){r!=="selectionchange"&&(Cg.has(r)||Us(r,!1,e),Us(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yi]||(t[Yi]=!0,Us("selectionchange",!1,t))}}function Pc(e,t,r,s){switch(Xu(t)){case 1:var l=Fm;break;case 4:l=Bm;break;default:l=Es}r=l.bind(null,t,r,e),l=void 0,!ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function Ws(e,t,r,s,l){var u=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var h=s.tag;if(h===3||h===4){var x=s.stateNode.containerInfo;if(x===l||x.nodeType===8&&x.parentNode===l)break;if(h===4)for(h=s.return;h!==null;){var S=h.tag;if((S===3||S===4)&&(S=h.stateNode.containerInfo,S===l||S.nodeType===8&&S.parentNode===l))return;h=h.return}for(;x!==null;){if(h=kn(x),h===null)return;if(S=h.tag,S===5||S===6){s=u=h;continue e}x=x.parentNode}}s=s.return}Ru(function(){var P=u,R=hs(r),L=[];e:{var A=jc.get(e);if(A!==void 0){var B=Ns,G=e;switch(e){case"keypress":if(Ui(r)===0)break e;case"keydown":case"keyup":B=ng;break;case"focusin":G="focus",B=Ms;break;case"focusout":G="blur",B=Ms;break;case"beforeblur":case"afterblur":B=Ms;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=$m;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=og;break;case xc:case wc:case Sc:B=Km;break;case kc:B=ag;break;case"scroll":B=Um;break;case"wheel":B=ug;break;case"copy":case"cut":case"paste":B=Qm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=tc}var K=(t&4)!==0,Me=!K&&e==="scroll",E=K?A!==null?A+"Capture":null:A;K=[];for(var k=P,C;k!==null;){C=k;var V=C.stateNode;if(C.tag===5&&V!==null&&(C=V,E!==null&&(V=Cr(k,E),V!=null&&K.push(Hr(k,V,C)))),Me)break;k=k.return}0<K.length&&(A=new B(A,G,null,r,R),L.push({event:A,listeners:K}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",A&&r!==ps&&(G=r.relatedTarget||r.fromElement)&&(kn(G)||G[Ft]))break e;if((B||A)&&(A=R.window===R?R:(A=R.ownerDocument)?A.defaultView||A.parentWindow:window,B?(G=r.relatedTarget||r.toElement,B=P,G=G?kn(G):null,G!==null&&(Me=Sn(G),G!==Me||G.tag!==5&&G.tag!==6)&&(G=null)):(B=null,G=P),B!==G)){if(K=Ju,V="onMouseLeave",E="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(K=tc,V="onPointerLeave",E="onPointerEnter",k="pointer"),Me=B==null?A:Zn(B),C=G==null?A:Zn(G),A=new K(V,k+"leave",B,r,R),A.target=Me,A.relatedTarget=C,V=null,kn(R)===P&&(K=new K(E,k+"enter",G,r,R),K.target=C,K.relatedTarget=Me,V=K),Me=V,B&&G)t:{for(K=B,E=G,k=0,C=K;C;C=Qn(C))k++;for(C=0,V=E;V;V=Qn(V))C++;for(;0<k-C;)K=Qn(K),k--;for(;0<C-k;)E=Qn(E),C--;for(;k--;){if(K===E||E!==null&&K===E.alternate)break t;K=Qn(K),E=Qn(E)}K=null}else K=null;B!==null&&Nc(L,A,B,K,!1),G!==null&&Me!==null&&Nc(L,Me,G,K,!0)}}e:{if(A=P?Zn(P):window,B=A.nodeName&&A.nodeName.toLowerCase(),B==="select"||B==="input"&&A.type==="file")var Y=gg;else if(ac(A))if(uc)Y=wg;else{Y=vg;var q=yg}else(B=A.nodeName)&&B.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(Y=xg);if(Y&&(Y=Y(e,P))){lc(L,Y,r,R);break e}q&&q(e,A,P),e==="focusout"&&(q=A._wrapperState)&&q.controlled&&A.type==="number"&&ls(A,"number",A.value)}switch(q=P?Zn(P):window,e){case"focusin":(ac(q)||q.contentEditable==="true")&&(Kn=q,Is=P,Ur=null);break;case"focusout":Ur=Is=Kn=null;break;case"mousedown":_s=!0;break;case"contextmenu":case"mouseup":case"dragend":_s=!1,yc(L,r,R);break;case"selectionchange":if(jg)break;case"keydown":case"keyup":yc(L,r,R)}var J;if(Ds)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Gn?oc(e,r)&&(re="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(re="onCompositionStart");re&&(nc&&r.locale!=="ko"&&(Gn||re!=="onCompositionStart"?re==="onCompositionEnd"&&Gn&&(J=Zu()):(tn=R,Ps="value"in tn?tn.value:tn.textContent,Gn=!0)),q=Qi(P,re),0<q.length&&(re=new ec(re,e,null,r,R),L.push({event:re,listeners:q}),J?re.data=J:(J=sc(r),J!==null&&(re.data=J)))),(J=dg?fg(e,r):pg(e,r))&&(P=Qi(P,"onBeforeInput"),0<P.length&&(R=new ec("onBeforeInput","beforeinput",null,r,R),L.push({event:R,listeners:P}),R.data=J))}Cc(L,t)})}function Hr(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Qi(e,t){for(var r=t+"Capture",s=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=Cr(e,r),u!=null&&s.unshift(Hr(e,u,l)),u=Cr(e,t),u!=null&&s.push(Hr(e,u,l))),e=e.return}return s}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nc(e,t,r,s,l){for(var u=t._reactName,h=[];r!==null&&r!==s;){var x=r,S=x.alternate,P=x.stateNode;if(S!==null&&S===s)break;x.tag===5&&P!==null&&(x=P,l?(S=Cr(r,u),S!=null&&h.unshift(Hr(r,S,x))):l||(S=Cr(r,u),S!=null&&h.push(Hr(r,S,x)))),r=r.return}h.length!==0&&e.push({event:t,listeners:h})}var Pg=/\r\n?/g,Ng=/\u0000|\uFFFD/g;function bc(e){return(typeof e=="string"?e:""+e).replace(Pg,`
`).replace(Ng,"")}function Xi(e,t,r){if(t=bc(t),bc(e)!==t&&r)throw Error(o(425))}function Zi(){}var $s=null,Hs=null;function Gs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ks=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,Ac=typeof Promise=="function"?Promise:void 0,Ag=typeof queueMicrotask=="function"?queueMicrotask:typeof Ac<"u"?function(e){return Ac.resolve(null).then(e).catch(Mg)}:Ks;function Mg(e){setTimeout(function(){throw e})}function Ys(e,t){var r=t,s=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(s===0){e.removeChild(l),zr(t);return}s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=l}while(r);zr(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Xn,Gr="__reactProps$"+Xn,Ft="__reactContainer$"+Xn,Qs="__reactEvents$"+Xn,Rg="__reactListeners$"+Xn,Dg="__reactHandles$"+Xn;function kn(e){var t=e[Lt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ft]||r[Lt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Mc(e);e!==null;){if(r=e[Lt])return r;e=Mc(e)}return t}e=r,r=e.parentNode}return null}function Kr(e){return e=e[Lt]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function qi(e){return e[Gr]||null}var Xs=[],qn=-1;function on(e){return{current:e}}function we(e){0>qn||(e.current=Xs[qn],Xs[qn]=null,qn--)}function ye(e,t){qn++,Xs[qn]=e.current,e.current=t}var sn={},Ue=on(sn),tt=on(!1),jn=sn;function Jn(e,t){var r=e.type.contextTypes;if(!r)return sn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in r)l[u]=t[u];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function nt(e){return e=e.childContextTypes,e!=null}function Ji(){we(tt),we(Ue)}function Rc(e,t,r){if(Ue.current!==sn)throw Error(o(168));ye(Ue,t),ye(tt,r)}function Dc(e,t,r){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return r;s=s.getChildContext();for(var l in s)if(!(l in t))throw Error(o(108,ge(e)||"Unknown",l));return W({},r,s)}function eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,jn=Ue.current,ye(Ue,e),ye(tt,tt.current),!0}function Lc(e,t,r){var s=e.stateNode;if(!s)throw Error(o(169));r?(e=Dc(e,t,jn),s.__reactInternalMemoizedMergedChildContext=e,we(tt),we(Ue),ye(Ue,e)):we(tt),ye(tt,r)}var Bt=null,to=!1,Zs=!1;function zc(e){Bt===null?Bt=[e]:Bt.push(e)}function Lg(e){to=!0,zc(e)}function an(){if(!Zs&&Bt!==null){Zs=!0;var e=0,t=me;try{var r=Bt;for(me=1;e<r.length;e++){var s=r[e];do s=s(!0);while(s!==null)}Bt=null,to=!1}catch(l){throw Bt!==null&&(Bt=Bt.slice(e+1)),Iu(xs,an),l}finally{me=t,Zs=!1}}return null}var er=[],tr=0,no=null,ro=0,mt=[],gt=0,Tn=null,Ut=1,Wt="";function En(e,t){er[tr++]=ro,er[tr++]=no,no=e,ro=t}function Vc(e,t,r){mt[gt++]=Ut,mt[gt++]=Wt,mt[gt++]=Tn,Tn=e;var s=Ut;e=Wt;var l=32-Tt(s)-1;s&=~(1<<l),r+=1;var u=32-Tt(t)+l;if(30<u){var h=l-l%5;u=(s&(1<<h)-1).toString(32),s>>=h,l-=h,Ut=1<<32-Tt(t)+l|r<<l|s,Wt=u+e}else Ut=1<<u|r<<l|s,Wt=e}function qs(e){e.return!==null&&(En(e,1),Vc(e,1,0))}function Js(e){for(;e===no;)no=er[--tr],er[tr]=null,ro=er[--tr],er[tr]=null;for(;e===Tn;)Tn=mt[--gt],mt[gt]=null,Wt=mt[--gt],mt[gt]=null,Ut=mt[--gt],mt[gt]=null}var ct=null,dt=null,je=!1,Ct=null;function Ic(e,t){var r=wt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function _c(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,dt=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Tn!==null?{id:Ut,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=wt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ct=e,dt=null,!0):!1;default:return!1}}function ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ta(e){if(je){var t=dt;if(t){var r=t;if(!_c(e,t)){if(ea(e))throw Error(o(418));t=rn(r.nextSibling);var s=ct;t&&_c(e,t)?Ic(s,r):(e.flags=e.flags&-4097|2,je=!1,ct=e)}}else{if(ea(e))throw Error(o(418));e.flags=e.flags&-4097|2,je=!1,ct=e}}}function Oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function io(e){if(e!==ct)return!1;if(!je)return Oc(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gs(e.type,e.memoizedProps)),t&&(t=dt)){if(ea(e))throw Fc(),Error(o(418));for(;t;)Ic(e,t),t=rn(t.nextSibling)}if(Oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){dt=rn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ct?rn(e.stateNode.nextSibling):null;return!0}function Fc(){for(var e=dt;e;)e=rn(e.nextSibling)}function nr(){dt=ct=null,je=!1}function na(e){Ct===null?Ct=[e]:Ct.push(e)}var zg=Q.ReactCurrentBatchConfig;function Yr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var s=r.stateNode}if(!s)throw Error(o(147,e));var l=s,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(h){var x=l.refs;h===null?delete x[u]:x[u]=h},t._stringRef=u,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bc(e){var t=e._init;return t(e._payload)}function Uc(e){function t(E,k){if(e){var C=E.deletions;C===null?(E.deletions=[k],E.flags|=16):C.push(k)}}function r(E,k){if(!e)return null;for(;k!==null;)t(E,k),k=k.sibling;return null}function s(E,k){for(E=new Map;k!==null;)k.key!==null?E.set(k.key,k):E.set(k.index,k),k=k.sibling;return E}function l(E,k){return E=mn(E,k),E.index=0,E.sibling=null,E}function u(E,k,C){return E.index=C,e?(C=E.alternate,C!==null?(C=C.index,C<k?(E.flags|=2,k):C):(E.flags|=2,k)):(E.flags|=1048576,k)}function h(E){return e&&E.alternate===null&&(E.flags|=2),E}function x(E,k,C,V){return k===null||k.tag!==6?(k=Ka(C,E.mode,V),k.return=E,k):(k=l(k,C),k.return=E,k)}function S(E,k,C,V){var Y=C.type;return Y===le?R(E,k,C.props.children,V,C.key):k!==null&&(k.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Xe&&Bc(Y)===k.type)?(V=l(k,C.props),V.ref=Yr(E,k,C),V.return=E,V):(V=Ao(C.type,C.key,C.props,null,E.mode,V),V.ref=Yr(E,k,C),V.return=E,V)}function P(E,k,C,V){return k===null||k.tag!==4||k.stateNode.containerInfo!==C.containerInfo||k.stateNode.implementation!==C.implementation?(k=Ya(C,E.mode,V),k.return=E,k):(k=l(k,C.children||[]),k.return=E,k)}function R(E,k,C,V,Y){return k===null||k.tag!==7?(k=Dn(C,E.mode,V,Y),k.return=E,k):(k=l(k,C),k.return=E,k)}function L(E,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Ka(""+k,E.mode,C),k.return=E,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case F:return C=Ao(k.type,k.key,k.props,null,E.mode,C),C.ref=Yr(E,null,k),C.return=E,C;case ee:return k=Ya(k,E.mode,C),k.return=E,k;case Xe:var V=k._init;return L(E,V(k._payload),C)}if(jr(k)||Z(k))return k=Dn(k,E.mode,C,null),k.return=E,k;oo(E,k)}return null}function A(E,k,C,V){var Y=k!==null?k.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return Y!==null?null:x(E,k,""+C,V);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case F:return C.key===Y?S(E,k,C,V):null;case ee:return C.key===Y?P(E,k,C,V):null;case Xe:return Y=C._init,A(E,k,Y(C._payload),V)}if(jr(C)||Z(C))return Y!==null?null:R(E,k,C,V,null);oo(E,C)}return null}function B(E,k,C,V,Y){if(typeof V=="string"&&V!==""||typeof V=="number")return E=E.get(C)||null,x(k,E,""+V,Y);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case F:return E=E.get(V.key===null?C:V.key)||null,S(k,E,V,Y);case ee:return E=E.get(V.key===null?C:V.key)||null,P(k,E,V,Y);case Xe:var q=V._init;return B(E,k,C,q(V._payload),Y)}if(jr(V)||Z(V))return E=E.get(C)||null,R(k,E,V,Y,null);oo(k,V)}return null}function G(E,k,C,V){for(var Y=null,q=null,J=k,re=k=0,_e=null;J!==null&&re<C.length;re++){J.index>re?(_e=J,J=null):_e=J.sibling;var fe=A(E,J,C[re],V);if(fe===null){J===null&&(J=_e);break}e&&J&&fe.alternate===null&&t(E,J),k=u(fe,k,re),q===null?Y=fe:q.sibling=fe,q=fe,J=_e}if(re===C.length)return r(E,J),je&&En(E,re),Y;if(J===null){for(;re<C.length;re++)J=L(E,C[re],V),J!==null&&(k=u(J,k,re),q===null?Y=J:q.sibling=J,q=J);return je&&En(E,re),Y}for(J=s(E,J);re<C.length;re++)_e=B(J,E,re,C[re],V),_e!==null&&(e&&_e.alternate!==null&&J.delete(_e.key===null?re:_e.key),k=u(_e,k,re),q===null?Y=_e:q.sibling=_e,q=_e);return e&&J.forEach(function(gn){return t(E,gn)}),je&&En(E,re),Y}function K(E,k,C,V){var Y=Z(C);if(typeof Y!="function")throw Error(o(150));if(C=Y.call(C),C==null)throw Error(o(151));for(var q=Y=null,J=k,re=k=0,_e=null,fe=C.next();J!==null&&!fe.done;re++,fe=C.next()){J.index>re?(_e=J,J=null):_e=J.sibling;var gn=A(E,J,fe.value,V);if(gn===null){J===null&&(J=_e);break}e&&J&&gn.alternate===null&&t(E,J),k=u(gn,k,re),q===null?Y=gn:q.sibling=gn,q=gn,J=_e}if(fe.done)return r(E,J),je&&En(E,re),Y;if(J===null){for(;!fe.done;re++,fe=C.next())fe=L(E,fe.value,V),fe!==null&&(k=u(fe,k,re),q===null?Y=fe:q.sibling=fe,q=fe);return je&&En(E,re),Y}for(J=s(E,J);!fe.done;re++,fe=C.next())fe=B(J,E,re,fe.value,V),fe!==null&&(e&&fe.alternate!==null&&J.delete(fe.key===null?re:fe.key),k=u(fe,k,re),q===null?Y=fe:q.sibling=fe,q=fe);return e&&J.forEach(function(h0){return t(E,h0)}),je&&En(E,re),Y}function Me(E,k,C,V){if(typeof C=="object"&&C!==null&&C.type===le&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case F:e:{for(var Y=C.key,q=k;q!==null;){if(q.key===Y){if(Y=C.type,Y===le){if(q.tag===7){r(E,q.sibling),k=l(q,C.props.children),k.return=E,E=k;break e}}else if(q.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Xe&&Bc(Y)===q.type){r(E,q.sibling),k=l(q,C.props),k.ref=Yr(E,q,C),k.return=E,E=k;break e}r(E,q);break}else t(E,q);q=q.sibling}C.type===le?(k=Dn(C.props.children,E.mode,V,C.key),k.return=E,E=k):(V=Ao(C.type,C.key,C.props,null,E.mode,V),V.ref=Yr(E,k,C),V.return=E,E=V)}return h(E);case ee:e:{for(q=C.key;k!==null;){if(k.key===q)if(k.tag===4&&k.stateNode.containerInfo===C.containerInfo&&k.stateNode.implementation===C.implementation){r(E,k.sibling),k=l(k,C.children||[]),k.return=E,E=k;break e}else{r(E,k);break}else t(E,k);k=k.sibling}k=Ya(C,E.mode,V),k.return=E,E=k}return h(E);case Xe:return q=C._init,Me(E,k,q(C._payload),V)}if(jr(C))return G(E,k,C,V);if(Z(C))return K(E,k,C,V);oo(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,k!==null&&k.tag===6?(r(E,k.sibling),k=l(k,C),k.return=E,E=k):(r(E,k),k=Ka(C,E.mode,V),k.return=E,E=k),h(E)):r(E,k)}return Me}var rr=Uc(!0),Wc=Uc(!1),so=on(null),ao=null,ir=null,ra=null;function ia(){ra=ir=ao=null}function oa(e){var t=so.current;we(so),e._currentValue=t}function sa(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function or(e,t){ao=e,ra=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rt=!0),e.firstContext=null)}function yt(e){var t=e._currentValue;if(ra!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(ao===null)throw Error(o(308));ir=e,ao.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Cn=null;function aa(e){Cn===null?Cn=[e]:Cn.push(e)}function $c(e,t,r,s){var l=t.interleaved;return l===null?(r.next=r,aa(t)):(r.next=l.next,l.next=r),t.interleaved=r,$t(e,s)}function $t(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ln=!1;function la(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ue&2)!==0){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,$t(e,r)}return l=s.interleaved,l===null?(t.next=t,aa(s)):(t.next=l.next,l.next=t),s.interleaved=t,$t(e,r)}function lo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,ks(e,r)}}function Gc(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var l=null,u=null;if(r=r.firstBaseUpdate,r!==null){do{var h={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};u===null?l=u=h:u=u.next=h,r=r.next}while(r!==null);u===null?l=u=t:u=u.next=t}else l=u=t;r={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:s.shared,effects:s.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function uo(e,t,r,s){var l=e.updateQueue;ln=!1;var u=l.firstBaseUpdate,h=l.lastBaseUpdate,x=l.shared.pending;if(x!==null){l.shared.pending=null;var S=x,P=S.next;S.next=null,h===null?u=P:h.next=P,h=S;var R=e.alternate;R!==null&&(R=R.updateQueue,x=R.lastBaseUpdate,x!==h&&(x===null?R.firstBaseUpdate=P:x.next=P,R.lastBaseUpdate=S))}if(u!==null){var L=l.baseState;h=0,R=P=S=null,x=u;do{var A=x.lane,B=x.eventTime;if((s&A)===A){R!==null&&(R=R.next={eventTime:B,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var G=e,K=x;switch(A=t,B=r,K.tag){case 1:if(G=K.payload,typeof G=="function"){L=G.call(B,L,A);break e}L=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=K.payload,A=typeof G=="function"?G.call(B,L,A):G,A==null)break e;L=W({},L,A);break e;case 2:ln=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,A=l.effects,A===null?l.effects=[x]:A.push(x))}else B={eventTime:B,lane:A,tag:x.tag,payload:x.payload,callback:x.callback,next:null},R===null?(P=R=B,S=L):R=R.next=B,h|=A;if(x=x.next,x===null){if(x=l.shared.pending,x===null)break;A=x,x=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);if(R===null&&(S=L),l.baseState=S,l.firstBaseUpdate=P,l.lastBaseUpdate=R,t=l.shared.interleaved,t!==null){l=t;do h|=l.lane,l=l.next;while(l!==t)}else u===null&&(l.shared.lanes=0);bn|=h,e.lanes=h,e.memoizedState=L}}function Kc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],l=s.callback;if(l!==null){if(s.callback=null,s=r,typeof l!="function")throw Error(o(191,l));l.call(s)}}}var Qr={},zt=on(Qr),Xr=on(Qr),Zr=on(Qr);function Pn(e){if(e===Qr)throw Error(o(174));return e}function ua(e,t){switch(ye(Zr,t),ye(Xr,e),ye(zt,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=cs(t,e)}we(zt),ye(zt,t)}function sr(){we(zt),we(Xr),we(Zr)}function Yc(e){Pn(Zr.current);var t=Pn(zt.current),r=cs(t,e.type);t!==r&&(ye(Xr,e),ye(zt,r))}function ca(e){Xr.current===e&&(we(zt),we(Xr))}var Te=on(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=[];function fa(){for(var e=0;e<da.length;e++)da[e]._workInProgressVersionPrimary=null;da.length=0}var fo=Q.ReactCurrentDispatcher,pa=Q.ReactCurrentBatchConfig,Nn=0,Ee=null,Le=null,Ve=null,po=!1,qr=!1,Jr=0,Vg=0;function We(){throw Error(o(321))}function ha(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Et(e[r],t[r]))return!1;return!0}function ma(e,t,r,s,l,u){if(Nn=u,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fo.current=e===null||e.memoizedState===null?Fg:Bg,e=r(s,l),qr){u=0;do{if(qr=!1,Jr=0,25<=u)throw Error(o(301));u+=1,Ve=Le=null,t.updateQueue=null,fo.current=Ug,e=r(s,l)}while(qr)}if(fo.current=go,t=Le!==null&&Le.next!==null,Nn=0,Ve=Le=Ee=null,po=!1,t)throw Error(o(300));return e}function ga(){var e=Jr!==0;return Jr=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Ee.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function vt(){if(Le===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ve===null?Ee.memoizedState:Ve.next;if(t!==null)Ve=t,Le=e;else{if(e===null)throw Error(o(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ve===null?Ee.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function ei(e,t){return typeof t=="function"?t(e):t}function ya(e){var t=vt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=Le,l=s.baseQueue,u=r.pending;if(u!==null){if(l!==null){var h=l.next;l.next=u.next,u.next=h}s.baseQueue=l=u,r.pending=null}if(l!==null){u=l.next,s=s.baseState;var x=h=null,S=null,P=u;do{var R=P.lane;if((Nn&R)===R)S!==null&&(S=S.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),s=P.hasEagerState?P.eagerState:e(s,P.action);else{var L={lane:R,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};S===null?(x=S=L,h=s):S=S.next=L,Ee.lanes|=R,bn|=R}P=P.next}while(P!==null&&P!==u);S===null?h=s:S.next=x,Et(s,t.memoizedState)||(rt=!0),t.memoizedState=s,t.baseState=h,t.baseQueue=S,r.lastRenderedState=s}if(e=r.interleaved,e!==null){l=e;do u=l.lane,Ee.lanes|=u,bn|=u,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function va(e){var t=vt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var s=r.dispatch,l=r.pending,u=t.memoizedState;if(l!==null){r.pending=null;var h=l=l.next;do u=e(u,h.action),h=h.next;while(h!==l);Et(u,t.memoizedState)||(rt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),r.lastRenderedState=u}return[u,s]}function Qc(){}function Xc(e,t){var r=Ee,s=vt(),l=t(),u=!Et(s.memoizedState,l);if(u&&(s.memoizedState=l,rt=!0),s=s.queue,xa(Jc.bind(null,r,s,e),[e]),s.getSnapshot!==t||u||Ve!==null&&Ve.memoizedState.tag&1){if(r.flags|=2048,ti(9,qc.bind(null,r,s,l,t),void 0,null),Ie===null)throw Error(o(349));(Nn&30)!==0||Zc(r,t,l)}return l}function Zc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function qc(e,t,r,s){t.value=r,t.getSnapshot=s,ed(t)&&td(e)}function Jc(e,t,r){return r(function(){ed(t)&&td(e)})}function ed(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Et(e,r)}catch{return!0}}function td(e){var t=$t(e,1);t!==null&&At(t,e,1,-1)}function nd(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:e},t.queue=e,e=e.dispatch=Og.bind(null,Ee,e),[t.memoizedState,e]}function ti(e,t,r,s){return e={tag:e,create:t,destroy:r,deps:s,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e)),e}function rd(){return vt().memoizedState}function ho(e,t,r,s){var l=Vt();Ee.flags|=e,l.memoizedState=ti(1|t,r,void 0,s===void 0?null:s)}function mo(e,t,r,s){var l=vt();s=s===void 0?null:s;var u=void 0;if(Le!==null){var h=Le.memoizedState;if(u=h.destroy,s!==null&&ha(s,h.deps)){l.memoizedState=ti(t,r,u,s);return}}Ee.flags|=e,l.memoizedState=ti(1|t,r,u,s)}function id(e,t){return ho(8390656,8,e,t)}function xa(e,t){return mo(2048,8,e,t)}function od(e,t){return mo(4,2,e,t)}function sd(e,t){return mo(4,4,e,t)}function ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ld(e,t,r){return r=r!=null?r.concat([e]):null,mo(4,4,ad.bind(null,t,e),r)}function wa(){}function ud(e,t){var r=vt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&ha(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function cd(e,t){var r=vt();t=t===void 0?null:t;var s=r.memoizedState;return s!==null&&t!==null&&ha(t,s[1])?s[0]:(e=e(),r.memoizedState=[e,t],e)}function dd(e,t,r){return(Nn&21)===0?(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=r):(Et(r,t)||(r=Bu(),Ee.lanes|=r,bn|=r,e.baseState=!0),t)}function Ig(e,t){var r=me;me=r!==0&&4>r?r:4,e(!0);var s=pa.transition;pa.transition={};try{e(!1),t()}finally{me=r,pa.transition=s}}function fd(){return vt().memoizedState}function _g(e,t,r){var s=pn(e);if(r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},pd(e))hd(t,r);else if(r=$c(e,t,r,s),r!==null){var l=qe();At(r,e,s,l),md(r,t,s)}}function Og(e,t,r){var s=pn(e),l={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(pd(e))hd(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var h=t.lastRenderedState,x=u(h,r);if(l.hasEagerState=!0,l.eagerState=x,Et(x,h)){var S=t.interleaved;S===null?(l.next=l,aa(t)):(l.next=S.next,S.next=l),t.interleaved=l;return}}catch{}finally{}r=$c(e,t,l,s),r!==null&&(l=qe(),At(r,e,s,l),md(r,t,s))}}function pd(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function hd(e,t){qr=po=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function md(e,t,r){if((r&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,ks(e,r)}}var go={readContext:yt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},Fg={readContext:yt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:id,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ho(4194308,4,ad.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return ho(4,2,e,t)},useMemo:function(e,t){var r=Vt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var s=Vt();return t=r!==void 0?r(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=_g.bind(null,Ee,e),[s.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:nd,useDebugValue:wa,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=nd(!1),t=e[0];return e=Ig.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var s=Ee,l=Vt();if(je){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),Ie===null)throw Error(o(349));(Nn&30)!==0||Zc(s,t,r)}l.memoizedState=r;var u={value:r,getSnapshot:t};return l.queue=u,id(Jc.bind(null,s,u,e),[e]),s.flags|=2048,ti(9,qc.bind(null,s,u,r,t),void 0,null),r},useId:function(){var e=Vt(),t=Ie.identifierPrefix;if(je){var r=Wt,s=Ut;r=(s&~(1<<32-Tt(s)-1)).toString(32)+r,t=":"+t+"R"+r,r=Jr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Vg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bg={readContext:yt,useCallback:ud,useContext:yt,useEffect:xa,useImperativeHandle:ld,useInsertionEffect:od,useLayoutEffect:sd,useMemo:cd,useReducer:ya,useRef:rd,useState:function(){return ya(ei)},useDebugValue:wa,useDeferredValue:function(e){var t=vt();return dd(t,Le.memoizedState,e)},useTransition:function(){var e=ya(ei)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:Xc,useId:fd,unstable_isNewReconciler:!1},Ug={readContext:yt,useCallback:ud,useContext:yt,useEffect:xa,useImperativeHandle:ld,useInsertionEffect:od,useLayoutEffect:sd,useMemo:cd,useReducer:va,useRef:rd,useState:function(){return va(ei)},useDebugValue:wa,useDeferredValue:function(e){var t=vt();return Le===null?t.memoizedState=e:dd(t,Le.memoizedState,e)},useTransition:function(){var e=va(ei)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:Xc,useId:fd,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Sa(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var yo={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var s=qe(),l=pn(e),u=Ht(s,l);u.payload=t,r!=null&&(u.callback=r),t=un(e,u,l),t!==null&&(At(t,e,l,s),lo(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=qe(),l=pn(e),u=Ht(s,l);u.tag=1,u.payload=t,r!=null&&(u.callback=r),t=un(e,u,l),t!==null&&(At(t,e,l,s),lo(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=qe(),s=pn(e),l=Ht(r,s);l.tag=2,t!=null&&(l.callback=t),t=un(e,l,s),t!==null&&(At(t,e,s,r),lo(t,e,s))}};function gd(e,t,r,s,l,u,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,u,h):t.prototype&&t.prototype.isPureReactComponent?!Br(r,s)||!Br(l,u):!0}function yd(e,t,r){var s=!1,l=sn,u=t.contextType;return typeof u=="object"&&u!==null?u=yt(u):(l=nt(t)?jn:Ue.current,s=t.contextTypes,u=(s=s!=null)?Jn(e,l):sn),t=new t(r,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yo,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),t}function vd(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&yo.enqueueReplaceState(t,t.state,null)}function ka(e,t,r,s){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},la(e);var u=t.contextType;typeof u=="object"&&u!==null?l.context=yt(u):(u=nt(t)?jn:Ue.current,l.context=Jn(e,u)),l.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Sa(e,t,u,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&yo.enqueueReplaceState(l,l.state,null),uo(e,r,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t){try{var r="",s=t;do r+=ce(s),s=s.return;while(s);var l=r}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:l,digest:null}}function ja(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ta(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Wg=typeof WeakMap=="function"?WeakMap:Map;function xd(e,t,r){r=Ht(-1,r),r.tag=3,r.payload={element:null};var s=t.value;return r.callback=function(){To||(To=!0,Oa=s),Ta(e,t)},r}function wd(e,t,r){r=Ht(-1,r),r.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=t.value;r.payload=function(){return s(l)},r.callback=function(){Ta(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(r.callback=function(){Ta(e,t),typeof s!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),r}function Sd(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Wg;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(r)||(l.add(r),e=r0.bind(null,e,t,r),t.then(e,e))}function kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jd(e,t,r,s,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ht(-1,1),t.tag=2,un(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var $g=Q.ReactCurrentOwner,rt=!1;function Ze(e,t,r,s){t.child=e===null?Wc(t,null,r,s):rr(t,e.child,r,s)}function Td(e,t,r,s,l){r=r.render;var u=t.ref;return or(t,l),s=ma(e,t,r,s,u,l),r=ga(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Gt(e,t,l)):(je&&r&&qs(t),t.flags|=1,Ze(e,t,s,l),t.child)}function Ed(e,t,r,s,l){if(e===null){var u=r.type;return typeof u=="function"&&!Ga(u)&&u.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=u,Cd(e,t,u,s,l)):(e=Ao(r.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&l)===0){var h=u.memoizedProps;if(r=r.compare,r=r!==null?r:Br,r(h,s)&&e.ref===t.ref)return Gt(e,t,l)}return t.flags|=1,e=mn(u,s),e.ref=t.ref,e.return=t,t.child=e}function Cd(e,t,r,s,l){if(e!==null){var u=e.memoizedProps;if(Br(u,s)&&e.ref===t.ref)if(rt=!1,t.pendingProps=s=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,Gt(e,t,l)}return Ea(e,t,r,s,l)}function Pd(e,t,r){var s=t.pendingProps,l=s.children,u=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(ur,ft),ft|=r;else{if((r&1073741824)===0)return e=u!==null?u.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(ur,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=u!==null?u.baseLanes:r,ye(ur,ft),ft|=s}else u!==null?(s=u.baseLanes|r,t.memoizedState=null):s=r,ye(ur,ft),ft|=s;return Ze(e,t,l,r),t.child}function Nd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ea(e,t,r,s,l){var u=nt(r)?jn:Ue.current;return u=Jn(t,u),or(t,l),r=ma(e,t,r,s,u,l),s=ga(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Gt(e,t,l)):(je&&s&&qs(t),t.flags|=1,Ze(e,t,r,l),t.child)}function bd(e,t,r,s,l){if(nt(r)){var u=!0;eo(t)}else u=!1;if(or(t,l),t.stateNode===null)xo(e,t),yd(t,r,s),ka(t,r,s,l),s=!0;else if(e===null){var h=t.stateNode,x=t.memoizedProps;h.props=x;var S=h.context,P=r.contextType;typeof P=="object"&&P!==null?P=yt(P):(P=nt(r)?jn:Ue.current,P=Jn(t,P));var R=r.getDerivedStateFromProps,L=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function";L||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==s||S!==P)&&vd(t,h,s,P),ln=!1;var A=t.memoizedState;h.state=A,uo(t,s,h,l),S=t.memoizedState,x!==s||A!==S||tt.current||ln?(typeof R=="function"&&(Sa(t,r,R,s),S=t.memoizedState),(x=ln||gd(t,r,x,s,A,S,P))?(L||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=S),h.props=s,h.state=S,h.context=P,s=x):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{h=t.stateNode,Hc(e,t),x=t.memoizedProps,P=t.type===t.elementType?x:Pt(t.type,x),h.props=P,L=t.pendingProps,A=h.context,S=r.contextType,typeof S=="object"&&S!==null?S=yt(S):(S=nt(r)?jn:Ue.current,S=Jn(t,S));var B=r.getDerivedStateFromProps;(R=typeof B=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==L||A!==S)&&vd(t,h,s,S),ln=!1,A=t.memoizedState,h.state=A,uo(t,s,h,l);var G=t.memoizedState;x!==L||A!==G||tt.current||ln?(typeof B=="function"&&(Sa(t,r,B,s),G=t.memoizedState),(P=ln||gd(t,r,P,s,A,G,S)||!1)?(R||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,G,S),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,G,S)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=G),h.props=s,h.state=G,h.context=S,s=P):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),s=!1)}return Ca(e,t,r,s,u,l)}function Ca(e,t,r,s,l,u){Nd(e,t);var h=(t.flags&128)!==0;if(!s&&!h)return l&&Lc(t,r,!1),Gt(e,t,u);s=t.stateNode,$g.current=t;var x=h&&typeof r.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&h?(t.child=rr(t,e.child,null,u),t.child=rr(t,null,x,u)):Ze(e,t,x,u),t.memoizedState=s.state,l&&Lc(t,r,!0),t.child}function Ad(e){var t=e.stateNode;t.pendingContext?Rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rc(e,t.context,!1),ua(e,t.containerInfo)}function Md(e,t,r,s,l){return nr(),na(l),t.flags|=256,Ze(e,t,r,s),t.child}var Pa={dehydrated:null,treeContext:null,retryLane:0};function Na(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rd(e,t,r){var s=t.pendingProps,l=Te.current,u=!1,h=(t.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(l&2)!==0),x?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ye(Te,l&1),e===null)return ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=s.children,e=s.fallback,u?(s=t.mode,u=t.child,h={mode:"hidden",children:h},(s&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=h):u=Mo(h,s,0,null),e=Dn(e,s,r,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=Na(r),t.memoizedState=Pa,e):ba(t,h));if(l=e.memoizedState,l!==null&&(x=l.dehydrated,x!==null))return Hg(e,t,h,s,x,l,r);if(u){u=s.fallback,h=t.mode,l=e.child,x=l.sibling;var S={mode:"hidden",children:s.children};return(h&1)===0&&t.child!==l?(s=t.child,s.childLanes=0,s.pendingProps=S,t.deletions=null):(s=mn(l,S),s.subtreeFlags=l.subtreeFlags&14680064),x!==null?u=mn(x,u):(u=Dn(u,h,r,null),u.flags|=2),u.return=t,s.return=t,s.sibling=u,t.child=s,s=u,u=t.child,h=e.child.memoizedState,h=h===null?Na(r):{baseLanes:h.baseLanes|r,cachePool:null,transitions:h.transitions},u.memoizedState=h,u.childLanes=e.childLanes&~r,t.memoizedState=Pa,s}return u=e.child,e=u.sibling,s=mn(u,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=r),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s}function ba(e,t){return t=Mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vo(e,t,r,s){return s!==null&&na(s),rr(t,e.child,null,r),e=ba(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hg(e,t,r,s,l,u,h){if(r)return t.flags&256?(t.flags&=-257,s=ja(Error(o(422))),vo(e,t,h,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=s.fallback,l=t.mode,s=Mo({mode:"visible",children:s.children},l,0,null),u=Dn(u,l,h,null),u.flags|=2,s.return=t,u.return=t,s.sibling=u,t.child=s,(t.mode&1)!==0&&rr(t,e.child,null,h),t.child.memoizedState=Na(h),t.memoizedState=Pa,u);if((t.mode&1)===0)return vo(e,t,h,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var x=s.dgst;return s=x,u=Error(o(419)),s=ja(u,s,void 0),vo(e,t,h,s)}if(x=(h&e.childLanes)!==0,rt||x){if(s=Ie,s!==null){switch(h&-h){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(s.suspendedLanes|h))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,$t(e,l),At(s,e,l,-1))}return Ha(),s=ja(Error(o(421))),vo(e,t,h,s)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=i0.bind(null,e),l._reactRetry=t,null):(e=u.treeContext,dt=rn(l.nextSibling),ct=t,je=!0,Ct=null,e!==null&&(mt[gt++]=Ut,mt[gt++]=Wt,mt[gt++]=Tn,Ut=e.id,Wt=e.overflow,Tn=t),t=ba(t,s.children),t.flags|=4096,t)}function Dd(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),sa(e.return,t,r)}function Aa(e,t,r,s,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=s,u.tail=r,u.tailMode=l)}function Ld(e,t,r){var s=t.pendingProps,l=s.revealOrder,u=s.tail;if(Ze(e,t,s.children,r),s=Te.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dd(e,r,t);else if(e.tag===19)Dd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(ye(Te,s),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&co(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),Aa(t,!1,l,r,u);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&co(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}Aa(t,!0,r,null,u);break;case"together":Aa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=mn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=mn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Gg(e,t,r){switch(t.tag){case 3:Ad(t),nr();break;case 5:Yc(t);break;case 1:nt(t.type)&&eo(t);break;case 4:ua(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,l=t.memoizedProps.value;ye(so,s._currentValue),s._currentValue=l;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(ye(Te,Te.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Rd(e,t,r):(ye(Te,Te.current&1),e=Gt(e,t,r),e!==null?e.sibling:null);ye(Te,Te.current&1);break;case 19:if(s=(r&t.childLanes)!==0,(e.flags&128)!==0){if(s)return Ld(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ye(Te,Te.current),s)break;return null;case 22:case 23:return t.lanes=0,Pd(e,t,r)}return Gt(e,t,r)}var zd,Ma,Vd,Id;zd=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ma=function(){},Vd=function(e,t,r,s){var l=e.memoizedProps;if(l!==s){e=t.stateNode,Pn(zt.current);var u=null;switch(r){case"input":l=ss(e,l),s=ss(e,s),u=[];break;case"select":l=W({},l,{value:void 0}),s=W({},s,{value:void 0}),u=[];break;case"textarea":l=us(e,l),s=us(e,s),u=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Zi)}ds(r,s);var h;r=null;for(P in l)if(!s.hasOwnProperty(P)&&l.hasOwnProperty(P)&&l[P]!=null)if(P==="style"){var x=l[P];for(h in x)x.hasOwnProperty(h)&&(r||(r={}),r[h]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(c.hasOwnProperty(P)?u||(u=[]):(u=u||[]).push(P,null));for(P in s){var S=s[P];if(x=l!=null?l[P]:void 0,s.hasOwnProperty(P)&&S!==x&&(S!=null||x!=null))if(P==="style")if(x){for(h in x)!x.hasOwnProperty(h)||S&&S.hasOwnProperty(h)||(r||(r={}),r[h]="");for(h in S)S.hasOwnProperty(h)&&x[h]!==S[h]&&(r||(r={}),r[h]=S[h])}else r||(u||(u=[]),u.push(P,r)),r=S;else P==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,x=x?x.__html:void 0,S!=null&&x!==S&&(u=u||[]).push(P,S)):P==="children"?typeof S!="string"&&typeof S!="number"||(u=u||[]).push(P,""+S):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(c.hasOwnProperty(P)?(S!=null&&P==="onScroll"&&xe("scroll",e),u||x===S||(u=[])):(u=u||[]).push(P,S))}r&&(u=u||[]).push("style",r);var P=u;(t.updateQueue=P)&&(t.flags|=4)}},Id=function(e,t,r,s){r!==s&&(t.flags|=4)};function ni(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function Kg(e,t,r){var s=t.pendingProps;switch(Js(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return nt(t.type)&&Ji(),$e(t),null;case 3:return s=t.stateNode,sr(),we(tt),we(Ue),fa(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ct!==null&&(Ua(Ct),Ct=null))),Ma(e,t),$e(t),null;case 5:ca(t);var l=Pn(Zr.current);if(r=t.type,e!==null&&t.stateNode!=null)Vd(e,t,r,s,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return $e(t),null}if(e=Pn(zt.current),io(t)){s=t.stateNode,r=t.type;var u=t.memoizedProps;switch(s[Lt]=t,s[Gr]=u,e=(t.mode&1)!==0,r){case"dialog":xe("cancel",s),xe("close",s);break;case"iframe":case"object":case"embed":xe("load",s);break;case"video":case"audio":for(l=0;l<Wr.length;l++)xe(Wr[l],s);break;case"source":xe("error",s);break;case"img":case"image":case"link":xe("error",s),xe("load",s);break;case"details":xe("toggle",s);break;case"input":yu(s,u),xe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!u.multiple},xe("invalid",s);break;case"textarea":wu(s,u),xe("invalid",s)}ds(r,u),l=null;for(var h in u)if(u.hasOwnProperty(h)){var x=u[h];h==="children"?typeof x=="string"?s.textContent!==x&&(u.suppressHydrationWarning!==!0&&Xi(s.textContent,x,e),l=["children",x]):typeof x=="number"&&s.textContent!==""+x&&(u.suppressHydrationWarning!==!0&&Xi(s.textContent,x,e),l=["children",""+x]):c.hasOwnProperty(h)&&x!=null&&h==="onScroll"&&xe("scroll",s)}switch(r){case"input":Pi(s),xu(s,u,!0);break;case"textarea":Pi(s),ku(s);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(s.onclick=Zi)}s=l,t.updateQueue=s,s!==null&&(t.flags|=4)}else{h=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ju(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=h.createElement(r,{is:s.is}):(e=h.createElement(r),r==="select"&&(h=e,s.multiple?h.multiple=!0:s.size&&(h.size=s.size))):e=h.createElementNS(e,r),e[Lt]=t,e[Gr]=s,zd(e,t,!1,!1),t.stateNode=e;e:{switch(h=fs(r,s),r){case"dialog":xe("cancel",e),xe("close",e),l=s;break;case"iframe":case"object":case"embed":xe("load",e),l=s;break;case"video":case"audio":for(l=0;l<Wr.length;l++)xe(Wr[l],e);l=s;break;case"source":xe("error",e),l=s;break;case"img":case"image":case"link":xe("error",e),xe("load",e),l=s;break;case"details":xe("toggle",e),l=s;break;case"input":yu(e,s),l=ss(e,s),xe("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=W({},s,{value:void 0}),xe("invalid",e);break;case"textarea":wu(e,s),l=us(e,s),xe("invalid",e);break;default:l=s}ds(r,l),x=l;for(u in x)if(x.hasOwnProperty(u)){var S=x[u];u==="style"?Cu(e,S):u==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&Tu(e,S)):u==="children"?typeof S=="string"?(r!=="textarea"||S!=="")&&Tr(e,S):typeof S=="number"&&Tr(e,""+S):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?S!=null&&u==="onScroll"&&xe("scroll",e):S!=null&&H(e,u,S,h))}switch(r){case"input":Pi(e),xu(e,s,!1);break;case"textarea":Pi(e),ku(e);break;case"option":s.value!=null&&e.setAttribute("value",""+he(s.value));break;case"select":e.multiple=!!s.multiple,u=s.value,u!=null?Bn(e,!!s.multiple,u,!1):s.defaultValue!=null&&Bn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zi)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)Id(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(r=Pn(Zr.current),Pn(zt.current),io(t)){if(s=t.stateNode,r=t.memoizedProps,s[Lt]=t,(u=s.nodeValue!==r)&&(e=ct,e!==null))switch(e.tag){case 3:Xi(s.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xi(s.nodeValue,r,(e.mode&1)!==0)}u&&(t.flags|=4)}else s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s),s[Lt]=t,t.stateNode=s}return $e(t),null;case 13:if(we(Te),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Fc(),nr(),t.flags|=98560,u=!1;else if(u=io(t),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[Lt]=t}else nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),u=!1}else Ct!==null&&(Ua(Ct),Ct=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Te.current&1)!==0?ze===0&&(ze=3):Ha())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return sr(),Ma(e,t),e===null&&$r(t.stateNode.containerInfo),$e(t),null;case 10:return oa(t.type._context),$e(t),null;case 17:return nt(t.type)&&Ji(),$e(t),null;case 19:if(we(Te),u=t.memoizedState,u===null)return $e(t),null;if(s=(t.flags&128)!==0,h=u.rendering,h===null)if(s)ni(u,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=co(e),h!==null){for(t.flags|=128,ni(u,!1),s=h.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;r!==null;)u=r,e=s,u.flags&=14680066,h=u.alternate,h===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=h.childLanes,u.lanes=h.lanes,u.child=h.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=h.memoizedProps,u.memoizedState=h.memoizedState,u.updateQueue=h.updateQueue,u.type=h.type,e=h.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ye(Te,Te.current&1|2),t.child}e=e.sibling}u.tail!==null&&Ae()>cr&&(t.flags|=128,s=!0,ni(u,!1),t.lanes=4194304)}else{if(!s)if(e=co(h),e!==null){if(t.flags|=128,s=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ni(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!je)return $e(t),null}else 2*Ae()-u.renderingStartTime>cr&&r!==1073741824&&(t.flags|=128,s=!0,ni(u,!1),t.lanes=4194304);u.isBackwards?(h.sibling=t.child,t.child=h):(r=u.last,r!==null?r.sibling=h:t.child=h,u.last=h)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Ae(),t.sibling=null,r=Te.current,ye(Te,s?r&1|2:r&1),t):($e(t),null);case 22:case 23:return $a(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(ft&1073741824)!==0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Yg(e,t){switch(Js(t),t.tag){case 1:return nt(t.type)&&Ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),we(tt),we(Ue),fa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ca(t),null;case 13:if(we(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Te),null;case 4:return sr(),null;case 10:return oa(t.type._context),null;case 22:case 23:return $a(),null;case 24:return null;default:return null}}var wo=!1,He=!1,Qg=typeof WeakSet=="function"?WeakSet:Set,$=null;function lr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){Ne(e,t,s)}else r.current=null}function Ra(e,t,r){try{r()}catch(s){Ne(e,t,s)}}var _d=!1;function Xg(e,t){if($s=Oi,e=gc(),Vs(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var l=s.anchorOffset,u=s.focusNode;s=s.focusOffset;try{r.nodeType,u.nodeType}catch{r=null;break e}var h=0,x=-1,S=-1,P=0,R=0,L=e,A=null;t:for(;;){for(var B;L!==r||l!==0&&L.nodeType!==3||(x=h+l),L!==u||s!==0&&L.nodeType!==3||(S=h+s),L.nodeType===3&&(h+=L.nodeValue.length),(B=L.firstChild)!==null;)A=L,L=B;for(;;){if(L===e)break t;if(A===r&&++P===l&&(x=h),A===u&&++R===s&&(S=h),(B=L.nextSibling)!==null)break;L=A,A=L.parentNode}L=B}r=x===-1||S===-1?null:{start:x,end:S}}else r=null}r=r||{start:0,end:0}}else r=null;for(Hs={focusedElem:e,selectionRange:r},Oi=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var G=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var K=G.memoizedProps,Me=G.memoizedState,E=t.stateNode,k=E.getSnapshotBeforeUpdate(t.elementType===t.type?K:Pt(t.type,K),Me);E.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(V){Ne(t,t.return,V)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return G=_d,_d=!1,G}function ri(e,t,r){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&Ra(t,r,u)}l=l.next}while(l!==s)}}function So(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var s=r.create;r.destroy=s()}r=r.next}while(r!==t)}}function Da(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Od(e){var t=e.alternate;t!==null&&(e.alternate=null,Od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[Gr],delete t[Qs],delete t[Rg],delete t[Dg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fd(e){return e.tag===5||e.tag===3||e.tag===4}function Bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function La(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Zi));else if(s!==4&&(e=e.child,e!==null))for(La(e,t,r),e=e.sibling;e!==null;)La(e,t,r),e=e.sibling}function za(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(za(e,t,r),e=e.sibling;e!==null;)za(e,t,r),e=e.sibling}var Oe=null,Nt=!1;function cn(e,t,r){for(r=r.child;r!==null;)Ud(e,t,r),r=r.sibling}function Ud(e,t,r){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Di,r)}catch{}switch(r.tag){case 5:He||lr(r,t);case 6:var s=Oe,l=Nt;Oe=null,cn(e,t,r),Oe=s,Nt=l,Oe!==null&&(Nt?(e=Oe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Oe.removeChild(r.stateNode));break;case 18:Oe!==null&&(Nt?(e=Oe,r=r.stateNode,e.nodeType===8?Ys(e.parentNode,r):e.nodeType===1&&Ys(e,r),zr(e)):Ys(Oe,r.stateNode));break;case 4:s=Oe,l=Nt,Oe=r.stateNode.containerInfo,Nt=!0,cn(e,t,r),Oe=s,Nt=l;break;case 0:case 11:case 14:case 15:if(!He&&(s=r.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var u=l,h=u.destroy;u=u.tag,h!==void 0&&((u&2)!==0||(u&4)!==0)&&Ra(r,t,h),l=l.next}while(l!==s)}cn(e,t,r);break;case 1:if(!He&&(lr(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(x){Ne(r,t,x)}cn(e,t,r);break;case 21:cn(e,t,r);break;case 22:r.mode&1?(He=(s=He)||r.memoizedState!==null,cn(e,t,r),He=s):cn(e,t,r);break;default:cn(e,t,r)}}function Wd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Qg),t.forEach(function(s){var l=o0.bind(null,e,s);r.has(s)||(r.add(s),s.then(l,l))})}}function bt(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];try{var u=e,h=t,x=h;e:for(;x!==null;){switch(x.tag){case 5:Oe=x.stateNode,Nt=!1;break e;case 3:Oe=x.stateNode.containerInfo,Nt=!0;break e;case 4:Oe=x.stateNode.containerInfo,Nt=!0;break e}x=x.return}if(Oe===null)throw Error(o(160));Ud(u,h,l),Oe=null,Nt=!1;var S=l.alternate;S!==null&&(S.return=null),l.return=null}catch(P){Ne(l,t,P)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$d(t,e),t=t.sibling}function $d(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),It(e),s&4){try{ri(3,e,e.return),So(3,e)}catch(K){Ne(e,e.return,K)}try{ri(5,e,e.return)}catch(K){Ne(e,e.return,K)}}break;case 1:bt(t,e),It(e),s&512&&r!==null&&lr(r,r.return);break;case 5:if(bt(t,e),It(e),s&512&&r!==null&&lr(r,r.return),e.flags&32){var l=e.stateNode;try{Tr(l,"")}catch(K){Ne(e,e.return,K)}}if(s&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,h=r!==null?r.memoizedProps:u,x=e.type,S=e.updateQueue;if(e.updateQueue=null,S!==null)try{x==="input"&&u.type==="radio"&&u.name!=null&&vu(l,u),fs(x,h);var P=fs(x,u);for(h=0;h<S.length;h+=2){var R=S[h],L=S[h+1];R==="style"?Cu(l,L):R==="dangerouslySetInnerHTML"?Tu(l,L):R==="children"?Tr(l,L):H(l,R,L,P)}switch(x){case"input":as(l,u);break;case"textarea":Su(l,u);break;case"select":var A=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var B=u.value;B!=null?Bn(l,!!u.multiple,B,!1):A!==!!u.multiple&&(u.defaultValue!=null?Bn(l,!!u.multiple,u.defaultValue,!0):Bn(l,!!u.multiple,u.multiple?[]:"",!1))}l[Gr]=u}catch(K){Ne(e,e.return,K)}}break;case 6:if(bt(t,e),It(e),s&4){if(e.stateNode===null)throw Error(o(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(K){Ne(e,e.return,K)}}break;case 3:if(bt(t,e),It(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{zr(t.containerInfo)}catch(K){Ne(e,e.return,K)}break;case 4:bt(t,e),It(e);break;case 13:bt(t,e),It(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(_a=Ae())),s&4&&Wd(e);break;case 22:if(R=r!==null&&r.memoizedState!==null,e.mode&1?(He=(P=He)||R,bt(t,e),He=P):bt(t,e),It(e),s&8192){if(P=e.memoizedState!==null,(e.stateNode.isHidden=P)&&!R&&(e.mode&1)!==0)for($=e,R=e.child;R!==null;){for(L=$=R;$!==null;){switch(A=$,B=A.child,A.tag){case 0:case 11:case 14:case 15:ri(4,A,A.return);break;case 1:lr(A,A.return);var G=A.stateNode;if(typeof G.componentWillUnmount=="function"){s=A,r=A.return;try{t=s,G.props=t.memoizedProps,G.state=t.memoizedState,G.componentWillUnmount()}catch(K){Ne(s,r,K)}}break;case 5:lr(A,A.return);break;case 22:if(A.memoizedState!==null){Kd(L);continue}}B!==null?(B.return=A,$=B):Kd(L)}R=R.sibling}e:for(R=null,L=e;;){if(L.tag===5){if(R===null){R=L;try{l=L.stateNode,P?(u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(x=L.stateNode,S=L.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null,x.style.display=Eu("display",h))}catch(K){Ne(e,e.return,K)}}}else if(L.tag===6){if(R===null)try{L.stateNode.nodeValue=P?"":L.memoizedProps}catch(K){Ne(e,e.return,K)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;R===L&&(R=null),L=L.return}R===L&&(R=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:bt(t,e),It(e),s&4&&Wd(e);break;case 21:break;default:bt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Fd(r)){var s=r;break e}r=r.return}throw Error(o(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(Tr(l,""),s.flags&=-33);var u=Bd(e);za(e,u,l);break;case 3:case 4:var h=s.stateNode.containerInfo,x=Bd(e);La(e,x,h);break;default:throw Error(o(161))}}catch(S){Ne(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zg(e,t,r){$=e,Hd(e)}function Hd(e,t,r){for(var s=(e.mode&1)!==0;$!==null;){var l=$,u=l.child;if(l.tag===22&&s){var h=l.memoizedState!==null||wo;if(!h){var x=l.alternate,S=x!==null&&x.memoizedState!==null||He;x=wo;var P=He;if(wo=h,(He=S)&&!P)for($=l;$!==null;)h=$,S=h.child,h.tag===22&&h.memoizedState!==null?Yd(l):S!==null?(S.return=h,$=S):Yd(l);for(;u!==null;)$=u,Hd(u),u=u.sibling;$=l,wo=x,He=P}Gd(e)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,$=u):Gd(e)}}function Gd(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:He||So(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!He)if(r===null)s.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:Pt(t.type,r.memoizedProps);s.componentDidUpdate(l,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Kc(t,u,s);break;case 3:var h=t.updateQueue;if(h!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Kc(t,h,r)}break;case 5:var x=t.stateNode;if(r===null&&t.flags&4){r=x;var S=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&r.focus();break;case"img":S.src&&(r.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var P=t.alternate;if(P!==null){var R=P.memoizedState;if(R!==null){var L=R.dehydrated;L!==null&&zr(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}He||t.flags&512&&Da(t)}catch(A){Ne(t,t.return,A)}}if(t===e){$=null;break}if(r=t.sibling,r!==null){r.return=t.return,$=r;break}$=t.return}}function Kd(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var r=t.sibling;if(r!==null){r.return=t.return,$=r;break}$=t.return}}function Yd(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{So(4,t)}catch(S){Ne(t,r,S)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var l=t.return;try{s.componentDidMount()}catch(S){Ne(t,l,S)}}var u=t.return;try{Da(t)}catch(S){Ne(t,u,S)}break;case 5:var h=t.return;try{Da(t)}catch(S){Ne(t,h,S)}}}catch(S){Ne(t,t.return,S)}if(t===e){$=null;break}var x=t.sibling;if(x!==null){x.return=t.return,$=x;break}$=t.return}}var qg=Math.ceil,ko=Q.ReactCurrentDispatcher,Va=Q.ReactCurrentOwner,xt=Q.ReactCurrentBatchConfig,ue=0,Ie=null,De=null,Fe=0,ft=0,ur=on(0),ze=0,ii=null,bn=0,jo=0,Ia=0,oi=null,it=null,_a=0,cr=1/0,Kt=null,To=!1,Oa=null,dn=null,Eo=!1,fn=null,Co=0,si=0,Fa=null,Po=-1,No=0;function qe(){return(ue&6)!==0?Ae():Po!==-1?Po:Po=Ae()}function pn(e){return(e.mode&1)===0?1:(ue&2)!==0&&Fe!==0?Fe&-Fe:zg.transition!==null?(No===0&&(No=Bu()),No):(e=me,e!==0||(e=window.event,e=e===void 0?16:Xu(e.type)),e)}function At(e,t,r,s){if(50<si)throw si=0,Fa=null,Error(o(185));Ar(e,r,s),((ue&2)===0||e!==Ie)&&(e===Ie&&((ue&2)===0&&(jo|=r),ze===4&&hn(e,Fe)),ot(e,s),r===1&&ue===0&&(t.mode&1)===0&&(cr=Ae()+500,to&&an()))}function ot(e,t){var r=e.callbackNode;zm(e,t);var s=Vi(e,e===Ie?Fe:0);if(s===0)r!==null&&_u(r),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(r!=null&&_u(r),t===1)e.tag===0?Lg(Xd.bind(null,e)):zc(Xd.bind(null,e)),Ag(function(){(ue&6)===0&&an()}),r=null;else{switch(Uu(s)){case 1:r=xs;break;case 4:r=Ou;break;case 16:r=Ri;break;case 536870912:r=Fu;break;default:r=Ri}r=of(r,Qd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Qd(e,t){if(Po=-1,No=0,(ue&6)!==0)throw Error(o(327));var r=e.callbackNode;if(dr()&&e.callbackNode!==r)return null;var s=Vi(e,e===Ie?Fe:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=bo(e,s);else{t=s;var l=ue;ue|=2;var u=qd();(Ie!==e||Fe!==t)&&(Kt=null,cr=Ae()+500,Mn(e,t));do try{t0();break}catch(x){Zd(e,x)}while(!0);ia(),ko.current=u,ue=l,De!==null?t=0:(Ie=null,Fe=0,t=ze)}if(t!==0){if(t===2&&(l=ws(e),l!==0&&(s=l,t=Ba(e,l))),t===1)throw r=ii,Mn(e,0),hn(e,s),ot(e,Ae()),r;if(t===6)hn(e,s);else{if(l=e.current.alternate,(s&30)===0&&!Jg(l)&&(t=bo(e,s),t===2&&(u=ws(e),u!==0&&(s=u,t=Ba(e,u))),t===1))throw r=ii,Mn(e,0),hn(e,s),ot(e,Ae()),r;switch(e.finishedWork=l,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:Rn(e,it,Kt);break;case 3:if(hn(e,s),(s&130023424)===s&&(t=_a+500-Ae(),10<t)){if(Vi(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){qe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ks(Rn.bind(null,e,it,Kt),t);break}Rn(e,it,Kt);break;case 4:if(hn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,l=-1;0<s;){var h=31-Tt(s);u=1<<h,h=t[h],h>l&&(l=h),s&=~u}if(s=l,s=Ae()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*qg(s/1960))-s,10<s){e.timeoutHandle=Ks(Rn.bind(null,e,it,Kt),s);break}Rn(e,it,Kt);break;case 5:Rn(e,it,Kt);break;default:throw Error(o(329))}}}return ot(e,Ae()),e.callbackNode===r?Qd.bind(null,e):null}function Ba(e,t){var r=oi;return e.current.memoizedState.isDehydrated&&(Mn(e,t).flags|=256),e=bo(e,t),e!==2&&(t=it,it=r,t!==null&&Ua(t)),e}function Ua(e){it===null?it=e:it.push.apply(it,e)}function Jg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var s=0;s<r.length;s++){var l=r[s],u=l.getSnapshot;l=l.value;try{if(!Et(u(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(e,t){for(t&=~Ia,t&=~jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Tt(t),s=1<<r;e[r]=-1,t&=~s}}function Xd(e){if((ue&6)!==0)throw Error(o(327));dr();var t=Vi(e,0);if((t&1)===0)return ot(e,Ae()),null;var r=bo(e,t);if(e.tag!==0&&r===2){var s=ws(e);s!==0&&(t=s,r=Ba(e,s))}if(r===1)throw r=ii,Mn(e,0),hn(e,t),ot(e,Ae()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,it,Kt),ot(e,Ae()),null}function Wa(e,t){var r=ue;ue|=1;try{return e(t)}finally{ue=r,ue===0&&(cr=Ae()+500,to&&an())}}function An(e){fn!==null&&fn.tag===0&&(ue&6)===0&&dr();var t=ue;ue|=1;var r=xt.transition,s=me;try{if(xt.transition=null,me=1,e)return e()}finally{me=s,xt.transition=r,ue=t,(ue&6)===0&&an()}}function $a(){ft=ur.current,we(ur)}function Mn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,bg(r)),De!==null)for(r=De.return;r!==null;){var s=r;switch(Js(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ji();break;case 3:sr(),we(tt),we(Ue),fa();break;case 5:ca(s);break;case 4:sr();break;case 13:we(Te);break;case 19:we(Te);break;case 10:oa(s.type._context);break;case 22:case 23:$a()}r=r.return}if(Ie=e,De=e=mn(e.current,null),Fe=ft=t,ze=0,ii=null,Ia=jo=bn=0,it=oi=null,Cn!==null){for(t=0;t<Cn.length;t++)if(r=Cn[t],s=r.interleaved,s!==null){r.interleaved=null;var l=s.next,u=r.pending;if(u!==null){var h=u.next;u.next=l,s.next=h}r.pending=s}Cn=null}return e}function Zd(e,t){do{var r=De;try{if(ia(),fo.current=go,po){for(var s=Ee.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}po=!1}if(Nn=0,Ve=Le=Ee=null,qr=!1,Jr=0,Va.current=null,r===null||r.return===null){ze=1,ii=t,De=null;break}e:{var u=e,h=r.return,x=r,S=t;if(t=Fe,x.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var P=S,R=x,L=R.tag;if((R.mode&1)===0&&(L===0||L===11||L===15)){var A=R.alternate;A?(R.updateQueue=A.updateQueue,R.memoizedState=A.memoizedState,R.lanes=A.lanes):(R.updateQueue=null,R.memoizedState=null)}var B=kd(h);if(B!==null){B.flags&=-257,jd(B,h,x,u,t),B.mode&1&&Sd(u,P,t),t=B,S=P;var G=t.updateQueue;if(G===null){var K=new Set;K.add(S),t.updateQueue=K}else G.add(S);break e}else{if((t&1)===0){Sd(u,P,t),Ha();break e}S=Error(o(426))}}else if(je&&x.mode&1){var Me=kd(h);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),jd(Me,h,x,u,t),na(ar(S,x));break e}}u=S=ar(S,x),ze!==4&&(ze=2),oi===null?oi=[u]:oi.push(u),u=h;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var E=xd(u,S,t);Gc(u,E);break e;case 1:x=S;var k=u.type,C=u.stateNode;if((u.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(dn===null||!dn.has(C)))){u.flags|=65536,t&=-t,u.lanes|=t;var V=wd(u,x,t);Gc(u,V);break e}}u=u.return}while(u!==null)}ef(r)}catch(Y){t=Y,De===r&&r!==null&&(De=r=r.return);continue}break}while(!0)}function qd(){var e=ko.current;return ko.current=go,e===null?go:e}function Ha(){(ze===0||ze===3||ze===2)&&(ze=4),Ie===null||(bn&268435455)===0&&(jo&268435455)===0||hn(Ie,Fe)}function bo(e,t){var r=ue;ue|=2;var s=qd();(Ie!==e||Fe!==t)&&(Kt=null,Mn(e,t));do try{e0();break}catch(l){Zd(e,l)}while(!0);if(ia(),ue=r,ko.current=s,De!==null)throw Error(o(261));return Ie=null,Fe=0,ze}function e0(){for(;De!==null;)Jd(De)}function t0(){for(;De!==null&&!Cm();)Jd(De)}function Jd(e){var t=rf(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?ef(e):De=t,Va.current=null}function ef(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Kg(r,t,ft),r!==null){De=r;return}}else{if(r=Yg(r,t),r!==null){r.flags&=32767,De=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);ze===0&&(ze=5)}function Rn(e,t,r){var s=me,l=xt.transition;try{xt.transition=null,me=1,n0(e,t,r,s)}finally{xt.transition=l,me=s}return null}function n0(e,t,r,s){do dr();while(fn!==null);if((ue&6)!==0)throw Error(o(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=r.lanes|r.childLanes;if(Vm(e,u),e===Ie&&(De=Ie=null,Fe=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Eo||(Eo=!0,of(Ri,function(){return dr(),null})),u=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||u){u=xt.transition,xt.transition=null;var h=me;me=1;var x=ue;ue|=4,Va.current=null,Xg(e,r),$d(r,e),kg(Hs),Oi=!!$s,Hs=$s=null,e.current=r,Zg(r),Pm(),ue=x,me=h,xt.transition=u}else e.current=r;if(Eo&&(Eo=!1,fn=e,Co=l),u=e.pendingLanes,u===0&&(dn=null),Am(r.stateNode),ot(e,Ae()),t!==null)for(s=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],s(l.value,{componentStack:l.stack,digest:l.digest});if(To)throw To=!1,e=Oa,Oa=null,e;return(Co&1)!==0&&e.tag!==0&&dr(),u=e.pendingLanes,(u&1)!==0?e===Fa?si++:(si=0,Fa=e):si=0,an(),null}function dr(){if(fn!==null){var e=Uu(Co),t=xt.transition,r=me;try{if(xt.transition=null,me=16>e?16:e,fn===null)var s=!1;else{if(e=fn,fn=null,Co=0,(ue&6)!==0)throw Error(o(331));var l=ue;for(ue|=4,$=e.current;$!==null;){var u=$,h=u.child;if(($.flags&16)!==0){var x=u.deletions;if(x!==null){for(var S=0;S<x.length;S++){var P=x[S];for($=P;$!==null;){var R=$;switch(R.tag){case 0:case 11:case 15:ri(8,R,u)}var L=R.child;if(L!==null)L.return=R,$=L;else for(;$!==null;){R=$;var A=R.sibling,B=R.return;if(Od(R),R===P){$=null;break}if(A!==null){A.return=B,$=A;break}$=B}}}var G=u.alternate;if(G!==null){var K=G.child;if(K!==null){G.child=null;do{var Me=K.sibling;K.sibling=null,K=Me}while(K!==null)}}$=u}}if((u.subtreeFlags&2064)!==0&&h!==null)h.return=u,$=h;else e:for(;$!==null;){if(u=$,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:ri(9,u,u.return)}var E=u.sibling;if(E!==null){E.return=u.return,$=E;break e}$=u.return}}var k=e.current;for($=k;$!==null;){h=$;var C=h.child;if((h.subtreeFlags&2064)!==0&&C!==null)C.return=h,$=C;else e:for(h=k;$!==null;){if(x=$,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:So(9,x)}}catch(Y){Ne(x,x.return,Y)}if(x===h){$=null;break e}var V=x.sibling;if(V!==null){V.return=x.return,$=V;break e}$=x.return}}if(ue=l,an(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Di,e)}catch{}s=!0}return s}finally{me=r,xt.transition=t}}return!1}function tf(e,t,r){t=ar(r,t),t=xd(e,t,1),e=un(e,t,1),t=qe(),e!==null&&(Ar(e,1,t),ot(e,t))}function Ne(e,t,r){if(e.tag===3)tf(e,e,r);else for(;t!==null;){if(t.tag===3){tf(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(dn===null||!dn.has(s))){e=ar(r,e),e=wd(t,e,1),t=un(t,e,1),e=qe(),t!==null&&(Ar(t,1,e),ot(t,e));break}}t=t.return}}function r0(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&r,Ie===e&&(Fe&r)===r&&(ze===4||ze===3&&(Fe&130023424)===Fe&&500>Ae()-_a?Mn(e,0):Ia|=r),ot(e,t)}function nf(e,t){t===0&&((e.mode&1)===0?t=1:(t=zi,zi<<=1,(zi&130023424)===0&&(zi=4194304)));var r=qe();e=$t(e,t),e!==null&&(Ar(e,t,r),ot(e,r))}function i0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),nf(e,r)}function o0(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),nf(e,r)}var rf;rf=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)rt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return rt=!1,Gg(e,t,r);rt=(e.flags&131072)!==0}else rt=!1,je&&(t.flags&1048576)!==0&&Vc(t,ro,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;xo(e,t),e=t.pendingProps;var l=Jn(t,Ue.current);or(t,r),l=ma(null,t,s,e,l,r);var u=ga();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(s)?(u=!0,eo(t)):u=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,la(t),l.updater=yo,t.stateNode=l,l._reactInternals=t,ka(t,s,e,r),t=Ca(null,t,s,!0,u,r)):(t.tag=0,je&&u&&qs(t),Ze(null,t,l,r),t=t.child),t;case 16:s=t.elementType;e:{switch(xo(e,t),e=t.pendingProps,l=s._init,s=l(s._payload),t.type=s,l=t.tag=a0(s),e=Pt(s,e),l){case 0:t=Ea(null,t,s,e,r);break e;case 1:t=bd(null,t,s,e,r);break e;case 11:t=Td(null,t,s,e,r);break e;case 14:t=Ed(null,t,s,Pt(s.type,e),r);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Pt(s,l),Ea(e,t,s,l,r);case 1:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Pt(s,l),bd(e,t,s,l,r);case 3:e:{if(Ad(t),e===null)throw Error(o(387));s=t.pendingProps,u=t.memoizedState,l=u.element,Hc(e,t),uo(t,s,null,r);var h=t.memoizedState;if(s=h.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){l=ar(Error(o(423)),t),t=Md(e,t,s,r,l);break e}else if(s!==l){l=ar(Error(o(424)),t),t=Md(e,t,s,r,l);break e}else for(dt=rn(t.stateNode.containerInfo.firstChild),ct=t,je=!0,Ct=null,r=Wc(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(nr(),s===l){t=Gt(e,t,r);break e}Ze(e,t,s,r)}t=t.child}return t;case 5:return Yc(t),e===null&&ta(t),s=t.type,l=t.pendingProps,u=e!==null?e.memoizedProps:null,h=l.children,Gs(s,l)?h=null:u!==null&&Gs(s,u)&&(t.flags|=32),Nd(e,t),Ze(e,t,h,r),t.child;case 6:return e===null&&ta(t),null;case 13:return Rd(e,t,r);case 4:return ua(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=rr(t,null,s,r):Ze(e,t,s,r),t.child;case 11:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Pt(s,l),Td(e,t,s,l,r);case 7:return Ze(e,t,t.pendingProps,r),t.child;case 8:return Ze(e,t,t.pendingProps.children,r),t.child;case 12:return Ze(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(s=t.type._context,l=t.pendingProps,u=t.memoizedProps,h=l.value,ye(so,s._currentValue),s._currentValue=h,u!==null)if(Et(u.value,h)){if(u.children===l.children&&!tt.current){t=Gt(e,t,r);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var x=u.dependencies;if(x!==null){h=u.child;for(var S=x.firstContext;S!==null;){if(S.context===s){if(u.tag===1){S=Ht(-1,r&-r),S.tag=2;var P=u.updateQueue;if(P!==null){P=P.shared;var R=P.pending;R===null?S.next=S:(S.next=R.next,R.next=S),P.pending=S}}u.lanes|=r,S=u.alternate,S!==null&&(S.lanes|=r),sa(u.return,r,t),x.lanes|=r;break}S=S.next}}else if(u.tag===10)h=u.type===t.type?null:u.child;else if(u.tag===18){if(h=u.return,h===null)throw Error(o(341));h.lanes|=r,x=h.alternate,x!==null&&(x.lanes|=r),sa(h,r,t),h=u.sibling}else h=u.child;if(h!==null)h.return=u;else for(h=u;h!==null;){if(h===t){h=null;break}if(u=h.sibling,u!==null){u.return=h.return,h=u;break}h=h.return}u=h}Ze(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,s=t.pendingProps.children,or(t,r),l=yt(l),s=s(l),t.flags|=1,Ze(e,t,s,r),t.child;case 14:return s=t.type,l=Pt(s,t.pendingProps),l=Pt(s.type,l),Ed(e,t,s,l,r);case 15:return Cd(e,t,t.type,t.pendingProps,r);case 17:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Pt(s,l),xo(e,t),t.tag=1,nt(s)?(e=!0,eo(t)):e=!1,or(t,r),yd(t,s,l),ka(t,s,l,r),Ca(null,t,s,!0,e,r);case 19:return Ld(e,t,r);case 22:return Pd(e,t,r)}throw Error(o(156,t.tag))};function of(e,t){return Iu(e,t)}function s0(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,r,s){return new s0(e,t,r,s)}function Ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function a0(e){if(typeof e=="function")return Ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===at)return 11;if(e===jt)return 14}return 2}function mn(e,t){var r=e.alternate;return r===null?(r=wt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ao(e,t,r,s,l,u){var h=2;if(s=e,typeof e=="function")Ga(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case le:return Dn(r.children,l,u,t);case X:h=8,l|=8;break;case ve:return e=wt(12,r,t,l|2),e.elementType=ve,e.lanes=u,e;case Qe:return e=wt(13,r,t,l),e.elementType=Qe,e.lanes=u,e;case et:return e=wt(19,r,t,l),e.elementType=et,e.lanes=u,e;case oe:return Mo(r,l,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:h=10;break e;case Je:h=9;break e;case at:h=11;break e;case jt:h=14;break e;case Xe:h=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=wt(h,r,t,l),t.elementType=e,t.type=s,t.lanes=u,t}function Dn(e,t,r,s){return e=wt(7,e,s,t),e.lanes=r,e}function Mo(e,t,r,s){return e=wt(22,e,s,t),e.elementType=oe,e.lanes=r,e.stateNode={isHidden:!1},e}function Ka(e,t,r){return e=wt(6,e,null,t),e.lanes=r,e}function Ya(e,t,r){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function l0(e,t,r,s,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ss(0),this.expirationTimes=Ss(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Qa(e,t,r,s,l,u,h,x,S){return e=new l0(e,t,r,x,S),t===1?(t=1,u===!0&&(t|=8)):t=0,u=wt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},la(u),e}function u0(e,t,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ee,key:s==null?null:""+s,children:e,containerInfo:t,implementation:r}}function sf(e){if(!e)return sn;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(nt(r))return Dc(e,r,t)}return t}function af(e,t,r,s,l,u,h,x,S){return e=Qa(r,s,!0,e,l,u,h,x,S),e.context=sf(null),r=e.current,s=qe(),l=pn(r),u=Ht(s,l),u.callback=t??null,un(r,u,l),e.current.lanes=l,Ar(e,l,s),ot(e,s),e}function Ro(e,t,r,s){var l=t.current,u=qe(),h=pn(l);return r=sf(r),t.context===null?t.context=r:t.pendingContext=r,t=Ht(u,h),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=un(l,t,h),e!==null&&(At(e,l,h,u),lo(e,l,h)),h}function Do(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Xa(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}function c0(){return null}var uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Za(e){this._internalRoot=e}Lo.prototype.render=Za.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Ro(e,t,null,null)},Lo.prototype.unmount=Za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){Ro(null,e,null,null)}),t[Ft]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<en.length&&t!==0&&t<en[r].priority;r++);en.splice(r,0,e),r===0&&Yu(e)}};function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cf(){}function d0(e,t,r,s,l){if(l){if(typeof s=="function"){var u=s;s=function(){var P=Do(h);u.call(P)}}var h=af(t,s,e,0,null,!1,!1,"",cf);return e._reactRootContainer=h,e[Ft]=h.current,$r(e.nodeType===8?e.parentNode:e),An(),h}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var x=s;s=function(){var P=Do(S);x.call(P)}}var S=Qa(e,0,!1,null,null,!1,!1,"",cf);return e._reactRootContainer=S,e[Ft]=S.current,$r(e.nodeType===8?e.parentNode:e),An(function(){Ro(t,S,r,s)}),S}function Vo(e,t,r,s,l){var u=r._reactRootContainer;if(u){var h=u;if(typeof l=="function"){var x=l;l=function(){var S=Do(h);x.call(S)}}Ro(t,h,e,l)}else h=d0(r,t,e,l,s);return Do(h)}Wu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=br(t.pendingLanes);r!==0&&(ks(t,r|1),ot(t,Ae()),(ue&6)===0&&(cr=Ae()+500,an()))}break;case 13:An(function(){var s=$t(e,1);if(s!==null){var l=qe();At(s,e,1,l)}}),Xa(e,1)}},js=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var r=qe();At(t,e,134217728,r)}Xa(e,134217728)}},$u=function(e){if(e.tag===13){var t=pn(e),r=$t(e,t);if(r!==null){var s=qe();At(r,e,t,s)}Xa(e,t)}},Hu=function(){return me},Gu=function(e,t){var r=me;try{return me=e,t()}finally{me=r}},ms=function(e,t,r){switch(t){case"input":if(as(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var l=qi(s);if(!l)throw Error(o(90));gu(s),as(s,l)}}}break;case"textarea":Su(e,r);break;case"select":t=r.value,t!=null&&Bn(e,!!r.multiple,t,!1)}},Au=Wa,Mu=An;var f0={usingClientEntryPoint:!1,Events:[Kr,Zn,qi,Nu,bu,Wa]},ai={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p0={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zu(e),e===null?null:e.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||c0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Di=Io.inject(p0),Dt=Io}catch{}}return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0,st.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qa(t))throw Error(o(200));return u0(e,t,null,r)},st.createRoot=function(e,t){if(!qa(e))throw Error(o(299));var r=!1,s="",l=uf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Qa(e,1,!1,null,null,r,!1,s,l),e[Ft]=t.current,$r(e.nodeType===8?e.parentNode:e),new Za(t)},st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=zu(t),e=e===null?null:e.stateNode,e},st.flushSync=function(e){return An(e)},st.hydrate=function(e,t,r){if(!zo(t))throw Error(o(200));return Vo(null,e,t,!0,r)},st.hydrateRoot=function(e,t,r){if(!qa(e))throw Error(o(405));var s=r!=null&&r.hydratedSources||null,l=!1,u="",h=uf;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),t=af(t,null,e,1,r??null,l,!1,u,h),e[Ft]=t.current,$r(e),s)for(e=0;e<s.length;e++)r=s[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Lo(t)},st.render=function(e,t,r){if(!zo(t))throw Error(o(200));return Vo(null,e,t,!1,r)},st.unmountComponentAtNode=function(e){if(!zo(e))throw Error(o(40));return e._reactRootContainer?(An(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1},st.unstable_batchedUpdates=Wa,st.unstable_renderSubtreeIntoContainer=function(e,t,r,s){if(!zo(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Vo(e,t,r,!1,s)},st.version="18.3.1-next-f1338f8080-20240426",st}var vf;function S0(){if(vf)return tl.exports;vf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),tl.exports=w0(),tl.exports}var xf;function k0(){if(xf)return _o;xf=1;var n=S0();return _o.createRoot=n.createRoot,_o.hydrateRoot=n.hydrateRoot,_o}var j0=k0();const Il=O.createContext({});function Jo(n){const i=O.useRef(null);return i.current===null&&(i.current=n()),i.current}const es=O.createContext(null),yi=O.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class T0 extends O.Component{getSnapshotBeforeUpdate(i){const o=this.props.childRef.current;if(o&&i.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=o.offsetHeight||0,a.width=o.offsetWidth||0,a.top=o.offsetTop,a.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function E0({children:n,isPresent:i}){const o=O.useId(),a=O.useRef(null),c=O.useRef({width:0,height:0,top:0,left:0}),{nonce:p}=O.useContext(yi);return O.useInsertionEffect(()=>{const{width:d,height:m,top:g,left:y}=c.current;if(i||!a.current||!d||!m)return;a.current.dataset.motionPopId=o;const v=document.createElement("style");return p&&(v.nonce=p),document.head.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${m}px !important;
            top: ${g}px !important;
            left: ${y}px !important;
          }
        `),()=>{document.head.removeChild(v)}},[i]),f.jsx(T0,{isPresent:i,childRef:a,sizeRef:c,children:O.cloneElement(n,{ref:a})})}const C0=({children:n,initial:i,isPresent:o,onExitComplete:a,custom:c,presenceAffectsLayout:p,mode:d})=>{const m=Jo(P0),g=O.useId(),y=O.useCallback(w=>{m.set(w,!0);for(const j of m.values())if(!j)return;a&&a()},[m,a]),v=O.useMemo(()=>({id:g,initial:i,isPresent:o,custom:c,onExitComplete:y,register:w=>(m.set(w,!1),()=>m.delete(w))}),p?[Math.random(),y]:[o,y]);return O.useMemo(()=>{m.forEach((w,j)=>m.set(j,!1))},[o]),O.useEffect(()=>{!o&&!m.size&&a&&a()},[o]),d==="popLayout"&&(n=f.jsx(E0,{isPresent:o,children:n})),f.jsx(es.Provider,{value:v,children:n})};function P0(){return new Map}function Fp(n=!0){const i=O.useContext(es);if(i===null)return[!0,null];const{isPresent:o,onExitComplete:a,register:c}=i,p=O.useId();O.useEffect(()=>{n&&c(p)},[n]);const d=O.useCallback(()=>n&&a&&a(p),[p,a,n]);return!o&&a?[!1,d]:[!0]}const Oo=n=>n.key||"";function wf(n){const i=[];return O.Children.forEach(n,o=>{O.isValidElement(o)&&i.push(o)}),i}const _l=typeof window<"u",Bp=_l?O.useLayoutEffect:O.useEffect,yr=({children:n,custom:i,initial:o=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:p="sync",propagate:d=!1})=>{const[m,g]=Fp(d),y=O.useMemo(()=>wf(n),[n]),v=d&&!m?[]:y.map(Oo),w=O.useRef(!0),j=O.useRef(y),N=Jo(()=>new Map),[z,b]=O.useState(y),[D,I]=O.useState(y);Bp(()=>{w.current=!1,j.current=y;for(let Q=0;Q<D.length;Q++){const F=Oo(D[Q]);v.includes(F)?N.delete(F):N.get(F)!==!0&&N.set(F,!1)}},[D,v.length,v.join("-")]);const U=[];if(y!==z){let Q=[...y];for(let F=0;F<D.length;F++){const ee=D[F],le=Oo(ee);v.includes(le)||(Q.splice(F,0,ee),U.push(ee))}p==="wait"&&U.length&&(Q=U),I(wf(Q)),b(y);return}const{forceRender:H}=O.useContext(Il);return f.jsx(f.Fragment,{children:D.map(Q=>{const F=Oo(Q),ee=d&&!m?!1:y===D||v.includes(F),le=()=>{if(N.has(F))N.set(F,!0);else return;let X=!0;N.forEach(ve=>{ve||(X=!1)}),X&&(H==null||H(),I(j.current),d&&(g==null||g()),a&&a())};return f.jsx(C0,{isPresent:ee,initial:!w.current||o?void 0:!1,custom:ee?void 0:i,presenceAffectsLayout:c,mode:p,onExitComplete:ee?void 0:le,children:Q},F)})})},pt=n=>n;let Up=pt;function Ol(n){let i;return()=>(i===void 0&&(i=n()),i)}const vr=(n,i,o)=>{const a=i-n;return a===0?1:(o-n)/a},Yt=n=>n*1e3,Qt=n=>n/1e3,N0={useManualTiming:!1};function b0(n){let i=new Set,o=new Set,a=!1,c=!1;const p=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function m(y){p.has(y)&&(g.schedule(y),n()),y(d)}const g={schedule:(y,v=!1,w=!1)=>{const N=w&&a?i:o;return v&&p.add(y),N.has(y)||N.add(y),y},cancel:y=>{o.delete(y),p.delete(y)},process:y=>{if(d=y,a){c=!0;return}a=!0,[i,o]=[o,i],i.forEach(m),i.clear(),a=!1,c&&(c=!1,g.process(y))}};return g}const Fo=["read","resolveKeyframes","update","preRender","render","postRender"],A0=40;function Wp(n,i){let o=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},p=()=>o=!0,d=Fo.reduce((I,U)=>(I[U]=b0(p),I),{}),{read:m,resolveKeyframes:g,update:y,preRender:v,render:w,postRender:j}=d,N=()=>{const I=performance.now();o=!1,c.delta=a?1e3/60:Math.max(Math.min(I-c.timestamp,A0),1),c.timestamp=I,c.isProcessing=!0,m.process(c),g.process(c),y.process(c),v.process(c),w.process(c),j.process(c),c.isProcessing=!1,o&&i&&(a=!1,n(N))},z=()=>{o=!0,a=!0,c.isProcessing||n(N)};return{schedule:Fo.reduce((I,U)=>{const H=d[U];return I[U]=(Q,F=!1,ee=!1)=>(o||z(),H.schedule(Q,F,ee)),I},{}),cancel:I=>{for(let U=0;U<Fo.length;U++)d[Fo[U]].cancel(I)},state:c,steps:d}}const{schedule:Se,cancel:vn,state:Be,steps:il}=Wp(typeof requestAnimationFrame<"u"?requestAnimationFrame:pt,!0),$p=O.createContext({strict:!1}),Sf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},xr={};for(const n in Sf)xr[n]={isEnabled:i=>Sf[n].some(o=>!!i[o])};function M0(n){for(const i in n)xr[i]={...xr[i],...n[i]}}const R0=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Go(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||R0.has(n)}let Hp=n=>!Go(n);function Gp(n){n&&(Hp=i=>i.startsWith("on")?!Go(i):n(i))}try{Gp(require("@emotion/is-prop-valid").default)}catch{}function D0(n,i,o){const a={};for(const c in n)c==="values"&&typeof n.values=="object"||(Hp(c)||o===!0&&Go(c)||!i&&!Go(c)||n.draggable&&c.startsWith("onDrag"))&&(a[c]=n[c]);return a}function L0({children:n,isValidProp:i,...o}){i&&Gp(i),o={...O.useContext(yi),...o},o.isStatic=Jo(()=>o.isStatic);const a=O.useMemo(()=>o,[JSON.stringify(o.transition),o.transformPagePoint,o.reducedMotion]);return f.jsx(yi.Provider,{value:a,children:n})}function z0(n){if(typeof Proxy>"u")return n;const i=new Map,o=(...a)=>n(...a);return new Proxy(o,{get:(a,c)=>c==="create"?n:(i.has(c)||i.set(c,n(c)),i.get(c))})}const ts=O.createContext({});function vi(n){return typeof n=="string"||Array.isArray(n)}function ns(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Fl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Bl=["initial",...Fl];function rs(n){return ns(n.animate)||Bl.some(i=>vi(n[i]))}function Kp(n){return!!(rs(n)||n.variants)}function V0(n,i){if(rs(n)){const{initial:o,animate:a}=n;return{initial:o===!1||vi(o)?o:void 0,animate:vi(a)?a:void 0}}return n.inherit!==!1?i:{}}function I0(n){const{initial:i,animate:o}=V0(n,O.useContext(ts));return O.useMemo(()=>({initial:i,animate:o}),[kf(i),kf(o)])}function kf(n){return Array.isArray(n)?n.join(" "):n}const _0=Symbol.for("motionComponentSymbol");function fr(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function O0(n,i,o){return O.useCallback(a=>{a&&n.onMount&&n.onMount(a),i&&(a?i.mount(a):i.unmount()),o&&(typeof o=="function"?o(a):fr(o)&&(o.current=a))},[i])}const Ul=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),F0="framerAppearId",Yp="data-"+Ul(F0),{schedule:Wl}=Wp(queueMicrotask,!1),Qp=O.createContext({});function B0(n,i,o,a,c){var p,d;const{visualElement:m}=O.useContext(ts),g=O.useContext($p),y=O.useContext(es),v=O.useContext(yi).reducedMotion,w=O.useRef(null);a=a||g.renderer,!w.current&&a&&(w.current=a(n,{visualState:i,parent:m,props:o,presenceContext:y,blockInitialAnimation:y?y.initial===!1:!1,reducedMotionConfig:v}));const j=w.current,N=O.useContext(Qp);j&&!j.projection&&c&&(j.type==="html"||j.type==="svg")&&U0(w.current,o,c,N);const z=O.useRef(!1);O.useInsertionEffect(()=>{j&&z.current&&j.update(o,y)});const b=o[Yp],D=O.useRef(!!b&&!(!((p=window.MotionHandoffIsComplete)===null||p===void 0)&&p.call(window,b))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,b)));return Bp(()=>{j&&(z.current=!0,window.MotionIsMounted=!0,j.updateFeatures(),Wl.render(j.render),D.current&&j.animationState&&j.animationState.animateChanges())}),O.useEffect(()=>{j&&(!D.current&&j.animationState&&j.animationState.animateChanges(),D.current&&(queueMicrotask(()=>{var I;(I=window.MotionHandoffMarkAsComplete)===null||I===void 0||I.call(window,b)}),D.current=!1))}),j}function U0(n,i,o,a){const{layoutId:c,layout:p,drag:d,dragConstraints:m,layoutScroll:g,layoutRoot:y}=i;n.projection=new o(n.latestValues,i["data-framer-portal-id"]?void 0:Xp(n.parent)),n.projection.setOptions({layoutId:c,layout:p,alwaysMeasureLayout:!!d||m&&fr(m),visualElement:n,animationType:typeof p=="string"?p:"both",initialPromotionConfig:a,layoutScroll:g,layoutRoot:y})}function Xp(n){if(n)return n.options.allowProjection!==!1?n.projection:Xp(n.parent)}function W0({preloadedFeatures:n,createVisualElement:i,useRender:o,useVisualState:a,Component:c}){var p,d;n&&M0(n);function m(y,v){let w;const j={...O.useContext(yi),...y,layoutId:$0(y)},{isStatic:N}=j,z=I0(y),b=a(y,N);if(!N&&_l){H0();const D=G0(j);w=D.MeasureLayout,z.visualElement=B0(c,b,j,i,D.ProjectionNode)}return f.jsxs(ts.Provider,{value:z,children:[w&&z.visualElement?f.jsx(w,{visualElement:z.visualElement,...j}):null,o(c,y,O0(b,z.visualElement,v),b,N,z.visualElement)]})}m.displayName=`motion.${typeof c=="string"?c:`create(${(d=(p=c.displayName)!==null&&p!==void 0?p:c.name)!==null&&d!==void 0?d:""})`}`;const g=O.forwardRef(m);return g[_0]=c,g}function $0({layoutId:n}){const i=O.useContext(Il).id;return i&&n!==void 0?i+"-"+n:n}function H0(n,i){O.useContext($p).strict}function G0(n){const{drag:i,layout:o}=xr;if(!i&&!o)return{};const a={...i,...o};return{MeasureLayout:i!=null&&i.isEnabled(n)||o!=null&&o.isEnabled(n)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const K0=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function $l(n){return typeof n!="string"||n.includes("-")?!1:!!(K0.indexOf(n)>-1||/[A-Z]/u.test(n))}function jf(n){const i=[{},{}];return n==null||n.values.forEach((o,a)=>{i[0][a]=o.get(),i[1][a]=o.getVelocity()}),i}function Hl(n,i,o,a){if(typeof i=="function"){const[c,p]=jf(a);i=i(o!==void 0?o:n.custom,c,p)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,p]=jf(a);i=i(o!==void 0?o:n.custom,c,p)}return i}const vl=n=>Array.isArray(n),Y0=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),Q0=n=>vl(n)?n[n.length-1]||0:n,Ke=n=>!!(n&&n.getVelocity);function Wo(n){const i=Ke(n)?n.get():n;return Y0(i)?i.toValue():i}function X0({scrapeMotionValuesFromProps:n,createRenderState:i,onUpdate:o},a,c,p){const d={latestValues:Z0(a,c,p,n),renderState:i()};return o&&(d.onMount=m=>o({props:a,current:m,...d}),d.onUpdate=m=>o(m)),d}const Zp=n=>(i,o)=>{const a=O.useContext(ts),c=O.useContext(es),p=()=>X0(n,i,a,c);return o?p():Jo(p)};function Z0(n,i,o,a){const c={},p=a(n,{});for(const j in p)c[j]=Wo(p[j]);let{initial:d,animate:m}=n;const g=rs(n),y=Kp(n);i&&y&&!g&&n.inherit!==!1&&(d===void 0&&(d=i.initial),m===void 0&&(m=i.animate));let v=o?o.initial===!1:!1;v=v||d===!1;const w=v?m:d;if(w&&typeof w!="boolean"&&!ns(w)){const j=Array.isArray(w)?w:[w];for(let N=0;N<j.length;N++){const z=Hl(n,j[N]);if(z){const{transitionEnd:b,transition:D,...I}=z;for(const U in I){let H=I[U];if(Array.isArray(H)){const Q=v?H.length-1:0;H=H[Q]}H!==null&&(c[U]=H)}for(const U in b)c[U]=b[U]}}}return c}const Sr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fn=new Set(Sr),qp=n=>i=>typeof i=="string"&&i.startsWith(n),Jp=qp("--"),q0=qp("var(--"),Gl=n=>q0(n)?J0.test(n.split("/*")[0].trim()):!1,J0=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,eh=(n,i)=>i&&typeof n=="number"?i.transform(n):n,Xt=(n,i,o)=>o>i?i:o<n?n:o,kr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},xi={...kr,transform:n=>Xt(0,1,n)},Bo={...kr,default:1},ji=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),yn=ji("deg"),_t=ji("%"),te=ji("px"),ey=ji("vh"),ty=ji("vw"),Tf={..._t,parse:n=>_t.parse(n)/100,transform:n=>_t.transform(n*100)},ny={borderWidth:te,borderTopWidth:te,borderRightWidth:te,borderBottomWidth:te,borderLeftWidth:te,borderRadius:te,radius:te,borderTopLeftRadius:te,borderTopRightRadius:te,borderBottomRightRadius:te,borderBottomLeftRadius:te,width:te,maxWidth:te,height:te,maxHeight:te,top:te,right:te,bottom:te,left:te,padding:te,paddingTop:te,paddingRight:te,paddingBottom:te,paddingLeft:te,margin:te,marginTop:te,marginRight:te,marginBottom:te,marginLeft:te,backgroundPositionX:te,backgroundPositionY:te},ry={rotate:yn,rotateX:yn,rotateY:yn,rotateZ:yn,scale:Bo,scaleX:Bo,scaleY:Bo,scaleZ:Bo,skew:yn,skewX:yn,skewY:yn,distance:te,translateX:te,translateY:te,translateZ:te,x:te,y:te,z:te,perspective:te,transformPerspective:te,opacity:xi,originX:Tf,originY:Tf,originZ:te},Ef={...kr,transform:Math.round},Kl={...ny,...ry,zIndex:Ef,size:te,fillOpacity:xi,strokeOpacity:xi,numOctaves:Ef},iy={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},oy=Sr.length;function sy(n,i,o){let a="",c=!0;for(let p=0;p<oy;p++){const d=Sr[p],m=n[d];if(m===void 0)continue;let g=!0;if(typeof m=="number"?g=m===(d.startsWith("scale")?1:0):g=parseFloat(m)===0,!g||o){const y=eh(m,Kl[d]);if(!g){c=!1;const v=iy[d]||d;a+=`${v}(${y}) `}o&&(i[d]=y)}}return a=a.trim(),o?a=o(i,c?"":a):c&&(a="none"),a}function Yl(n,i,o){const{style:a,vars:c,transformOrigin:p}=n;let d=!1,m=!1;for(const g in i){const y=i[g];if(Fn.has(g)){d=!0;continue}else if(Jp(g)){c[g]=y;continue}else{const v=eh(y,Kl[g]);g.startsWith("origin")?(m=!0,p[g]=v):a[g]=v}}if(i.transform||(d||o?a.transform=sy(i,n.transform,o):a.transform&&(a.transform="none")),m){const{originX:g="50%",originY:y="50%",originZ:v=0}=p;a.transformOrigin=`${g} ${y} ${v}`}}const ay={offset:"stroke-dashoffset",array:"stroke-dasharray"},ly={offset:"strokeDashoffset",array:"strokeDasharray"};function uy(n,i,o=1,a=0,c=!0){n.pathLength=1;const p=c?ay:ly;n[p.offset]=te.transform(-a);const d=te.transform(i),m=te.transform(o);n[p.array]=`${d} ${m}`}function Cf(n,i,o){return typeof n=="string"?n:te.transform(i+o*n)}function cy(n,i,o){const a=Cf(i,n.x,n.width),c=Cf(o,n.y,n.height);return`${a} ${c}`}function Ql(n,{attrX:i,attrY:o,attrScale:a,originX:c,originY:p,pathLength:d,pathSpacing:m=1,pathOffset:g=0,...y},v,w){if(Yl(n,y,w),v){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:j,style:N,dimensions:z}=n;j.transform&&(z&&(N.transform=j.transform),delete j.transform),z&&(c!==void 0||p!==void 0||N.transform)&&(N.transformOrigin=cy(z,c!==void 0?c:.5,p!==void 0?p:.5)),i!==void 0&&(j.x=i),o!==void 0&&(j.y=o),a!==void 0&&(j.scale=a),d!==void 0&&uy(j,d,m,g,!1)}const Xl=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),th=()=>({...Xl(),attrs:{}}),Zl=n=>typeof n=="string"&&n.toLowerCase()==="svg";function nh(n,{style:i,vars:o},a,c){Object.assign(n.style,i,c&&c.getProjectionStyles(a));for(const p in o)n.style.setProperty(p,o[p])}const rh=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ih(n,i,o,a){nh(n,i,void 0,a);for(const c in i.attrs)n.setAttribute(rh.has(c)?c:Ul(c),i.attrs[c])}const Ko={};function dy(n){Object.assign(Ko,n)}function oh(n,{layout:i,layoutId:o}){return Fn.has(n)||n.startsWith("origin")||(i||o!==void 0)&&(!!Ko[n]||n==="opacity")}function ql(n,i,o){var a;const{style:c}=n,p={};for(const d in c)(Ke(c[d])||i.style&&Ke(i.style[d])||oh(d,n)||((a=o==null?void 0:o.getValue(d))===null||a===void 0?void 0:a.liveStyle)!==void 0)&&(p[d]=c[d]);return p}function sh(n,i,o){const a=ql(n,i,o);for(const c in n)if(Ke(n[c])||Ke(i[c])){const p=Sr.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[p]=n[c]}return a}function fy(n,i){try{i.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}const Pf=["x","y","width","height","cx","cy","r"],py={useVisualState:Zp({scrapeMotionValuesFromProps:sh,createRenderState:th,onUpdate:({props:n,prevProps:i,current:o,renderState:a,latestValues:c})=>{if(!o)return;let p=!!n.drag;if(!p){for(const m in c)if(Fn.has(m)){p=!0;break}}if(!p)return;let d=!i;if(i)for(let m=0;m<Pf.length;m++){const g=Pf[m];n[g]!==i[g]&&(d=!0)}d&&Se.read(()=>{fy(o,a),Se.render(()=>{Ql(a,c,Zl(o.tagName),n.transformTemplate),ih(o,a)})})}})},hy={useVisualState:Zp({scrapeMotionValuesFromProps:ql,createRenderState:Xl})};function ah(n,i,o){for(const a in i)!Ke(i[a])&&!oh(a,o)&&(n[a]=i[a])}function my({transformTemplate:n},i){return O.useMemo(()=>{const o=Xl();return Yl(o,i,n),Object.assign({},o.vars,o.style)},[i])}function gy(n,i){const o=n.style||{},a={};return ah(a,o,n),Object.assign(a,my(n,i)),a}function yy(n,i){const o={},a=gy(n,i);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=a,o}function vy(n,i,o,a){const c=O.useMemo(()=>{const p=th();return Ql(p,i,Zl(a),n.transformTemplate),{...p.attrs,style:{...p.style}}},[i]);if(n.style){const p={};ah(p,n.style,n),c.style={...p,...c.style}}return c}function xy(n=!1){return(o,a,c,{latestValues:p},d)=>{const g=($l(o)?vy:yy)(a,p,d,o),y=D0(a,typeof o=="string",n),v=o!==O.Fragment?{...y,...g,ref:c}:{},{children:w}=a,j=O.useMemo(()=>Ke(w)?w.get():w,[w]);return O.createElement(o,{...v,children:j})}}function wy(n,i){return function(a,{forwardMotionProps:c}={forwardMotionProps:!1}){const d={...$l(a)?py:hy,preloadedFeatures:n,useRender:xy(c),createVisualElement:i,Component:a};return W0(d)}}function lh(n,i){if(!Array.isArray(i))return!1;const o=i.length;if(o!==n.length)return!1;for(let a=0;a<o;a++)if(i[a]!==n[a])return!1;return!0}function is(n,i,o){const a=n.getProps();return Hl(a,i,o!==void 0?o:a.custom,n)}const Sy=Ol(()=>window.ScrollTimeline!==void 0);class ky{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}get finished(){return Promise.all(this.animations.map(i=>"finished"in i?i.finished:i))}getAll(i){return this.animations[0][i]}setAll(i,o){for(let a=0;a<this.animations.length;a++)this.animations[a][i]=o}attachTimeline(i,o){const a=this.animations.map(c=>{if(Sy()&&c.attachTimeline)return c.attachTimeline(i);if(typeof o=="function")return o(c)});return()=>{a.forEach((c,p)=>{c&&c(),this.animations[p].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let o=0;o<this.animations.length;o++)i=Math.max(i,this.animations[o].duration);return i}runAll(i){this.animations.forEach(o=>o[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class jy extends ky{then(i,o){return Promise.all(this.animations).then(i).catch(o)}}function Jl(n,i){return n?n[i]||n.default||n:void 0}const xl=2e4;function uh(n){let i=0;const o=50;let a=n.next(i);for(;!a.done&&i<xl;)i+=o,a=n.next(i);return i>=xl?1/0:i}function eu(n){return typeof n=="function"}function Nf(n,i){n.timeline=i,n.onfinish=null}const tu=n=>Array.isArray(n)&&typeof n[0]=="number",Ty={linearEasing:void 0};function Ey(n,i){const o=Ol(n);return()=>{var a;return(a=Ty[i])!==null&&a!==void 0?a:o()}}const Yo=Ey(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ch=(n,i,o=10)=>{let a="";const c=Math.max(Math.round(i/o),2);for(let p=0;p<c;p++)a+=n(vr(0,c-1,p))+", ";return`linear(${a.substring(0,a.length-2)})`};function dh(n){return!!(typeof n=="function"&&Yo()||!n||typeof n=="string"&&(n in wl||Yo())||tu(n)||Array.isArray(n)&&n.every(dh))}const ci=([n,i,o,a])=>`cubic-bezier(${n}, ${i}, ${o}, ${a})`,wl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ci([0,.65,.55,1]),circOut:ci([.55,0,1,.45]),backIn:ci([.31,.01,.66,-.59]),backOut:ci([.33,1.53,.69,.99])};function fh(n,i){if(n)return typeof n=="function"&&Yo()?ch(n,i):tu(n)?ci(n):Array.isArray(n)?n.map(o=>fh(o,i)||wl.easeOut):wl[n]}const Mt={x:!1,y:!1};function ph(){return Mt.x||Mt.y}function Cy(n,i,o){var a;if(n instanceof Element)return[n];if(typeof n=="string"){let c=document;const p=(a=void 0)!==null&&a!==void 0?a:c.querySelectorAll(n);return p?Array.from(p):[]}return Array.from(n)}function hh(n,i){const o=Cy(n),a=new AbortController,c={passive:!0,...i,signal:a.signal};return[o,c,()=>a.abort()]}function bf(n){return i=>{i.pointerType==="touch"||ph()||n(i)}}function Py(n,i,o={}){const[a,c,p]=hh(n,o),d=bf(m=>{const{target:g}=m,y=i(m);if(typeof y!="function"||!g)return;const v=bf(w=>{y(w),g.removeEventListener("pointerleave",v)});g.addEventListener("pointerleave",v,c)});return a.forEach(m=>{m.addEventListener("pointerenter",d,c)}),p}const mh=(n,i)=>i?n===i?!0:mh(n,i.parentElement):!1,nu=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,Ny=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function by(n){return Ny.has(n.tagName)||n.tabIndex!==-1}const di=new WeakSet;function Af(n){return i=>{i.key==="Enter"&&n(i)}}function ol(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const Ay=(n,i)=>{const o=n.currentTarget;if(!o)return;const a=Af(()=>{if(di.has(o))return;ol(o,"down");const c=Af(()=>{ol(o,"up")}),p=()=>ol(o,"cancel");o.addEventListener("keyup",c,i),o.addEventListener("blur",p,i)});o.addEventListener("keydown",a,i),o.addEventListener("blur",()=>o.removeEventListener("keydown",a),i)};function Mf(n){return nu(n)&&!ph()}function My(n,i,o={}){const[a,c,p]=hh(n,o),d=m=>{const g=m.currentTarget;if(!Mf(m)||di.has(g))return;di.add(g);const y=i(m),v=(N,z)=>{window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",j),!(!Mf(N)||!di.has(g))&&(di.delete(g),typeof y=="function"&&y(N,{success:z}))},w=N=>{v(N,o.useGlobalTarget||mh(g,N.target))},j=N=>{v(N,!1)};window.addEventListener("pointerup",w,c),window.addEventListener("pointercancel",j,c)};return a.forEach(m=>{!by(m)&&m.getAttribute("tabindex")===null&&(m.tabIndex=0),(o.useGlobalTarget?window:m).addEventListener("pointerdown",d,c),m.addEventListener("focus",y=>Ay(y,c),c)}),p}function Ry(n){return n==="x"||n==="y"?Mt[n]?null:(Mt[n]=!0,()=>{Mt[n]=!1}):Mt.x||Mt.y?null:(Mt.x=Mt.y=!0,()=>{Mt.x=Mt.y=!1})}const gh=new Set(["width","height","top","left","right","bottom",...Sr]);let $o;function Dy(){$o=void 0}const Ot={now:()=>($o===void 0&&Ot.set(Be.isProcessing||N0.useManualTiming?Be.timestamp:performance.now()),$o),set:n=>{$o=n,queueMicrotask(Dy)}};function ru(n,i){n.indexOf(i)===-1&&n.push(i)}function iu(n,i){const o=n.indexOf(i);o>-1&&n.splice(o,1)}class ou{constructor(){this.subscriptions=[]}add(i){return ru(this.subscriptions,i),()=>iu(this.subscriptions,i)}notify(i,o,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,o,a);else for(let p=0;p<c;p++){const d=this.subscriptions[p];d&&d(i,o,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function yh(n,i){return i?n*(1e3/i):0}const Rf=30,Ly=n=>!isNaN(parseFloat(n));class zy{constructor(i,o={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,c=!0)=>{const p=Ot.now();this.updatedAt!==p&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=o.owner}setCurrent(i){this.current=i,this.updatedAt=Ot.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=Ly(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,o){this.events[i]||(this.events[i]=new ou);const a=this.events[i].add(o);return i==="change"?()=>{a(),Se.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,o){this.passiveEffect=i,this.stopPassiveEffect=o}set(i,o=!0){!o||!this.passiveEffect?this.updateAndNotify(i,o):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,o,a){this.set(o),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-a}jump(i,o=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Ot.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Rf)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Rf);return yh(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(i){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=i(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function wi(n,i){return new zy(n,i)}function Vy(n,i,o){n.hasValue(i)?n.getValue(i).set(o):n.addValue(i,wi(o))}function Iy(n,i){const o=is(n,i);let{transitionEnd:a={},transition:c={},...p}=o||{};p={...p,...a};for(const d in p){const m=Q0(p[d]);Vy(n,d,m)}}function _y(n){return!!(Ke(n)&&n.add)}function Sl(n,i){const o=n.getValue("willChange");if(_y(o))return o.add(i)}function vh(n){return n.props[Yp]}const xh=(n,i,o)=>(((1-3*o+3*i)*n+(3*o-6*i))*n+3*i)*n,Oy=1e-7,Fy=12;function By(n,i,o,a,c){let p,d,m=0;do d=i+(o-i)/2,p=xh(d,a,c)-n,p>0?o=d:i=d;while(Math.abs(p)>Oy&&++m<Fy);return d}function Ti(n,i,o,a){if(n===i&&o===a)return pt;const c=p=>By(p,0,1,n,o);return p=>p===0||p===1?p:xh(c(p),i,a)}const wh=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,Sh=n=>i=>1-n(1-i),kh=Ti(.33,1.53,.69,.99),su=Sh(kh),jh=wh(su),Th=n=>(n*=2)<1?.5*su(n):.5*(2-Math.pow(2,-10*(n-1))),au=n=>1-Math.sin(Math.acos(n)),Eh=Sh(au),Ch=wh(au),Ph=n=>/^0[^.\s]+$/u.test(n);function Uy(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Ph(n):!0}const pi=n=>Math.round(n*1e5)/1e5,lu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Wy(n){return n==null}const $y=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,uu=(n,i)=>o=>!!(typeof o=="string"&&$y.test(o)&&o.startsWith(n)||i&&!Wy(o)&&Object.prototype.hasOwnProperty.call(o,i)),Nh=(n,i,o)=>a=>{if(typeof a!="string")return a;const[c,p,d,m]=a.match(lu);return{[n]:parseFloat(c),[i]:parseFloat(p),[o]:parseFloat(d),alpha:m!==void 0?parseFloat(m):1}},Hy=n=>Xt(0,255,n),sl={...kr,transform:n=>Math.round(Hy(n))},In={test:uu("rgb","red"),parse:Nh("red","green","blue"),transform:({red:n,green:i,blue:o,alpha:a=1})=>"rgba("+sl.transform(n)+", "+sl.transform(i)+", "+sl.transform(o)+", "+pi(xi.transform(a))+")"};function Gy(n){let i="",o="",a="",c="";return n.length>5?(i=n.substring(1,3),o=n.substring(3,5),a=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),o=n.substring(2,3),a=n.substring(3,4),c=n.substring(4,5),i+=i,o+=o,a+=a,c+=c),{red:parseInt(i,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const kl={test:uu("#"),parse:Gy,transform:In.transform},pr={test:uu("hsl","hue"),parse:Nh("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:o,alpha:a=1})=>"hsla("+Math.round(n)+", "+_t.transform(pi(i))+", "+_t.transform(pi(o))+", "+pi(xi.transform(a))+")"},Ge={test:n=>In.test(n)||kl.test(n)||pr.test(n),parse:n=>In.test(n)?In.parse(n):pr.test(n)?pr.parse(n):kl.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?In.transform(n):pr.transform(n)},Ky=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Yy(n){var i,o;return isNaN(n)&&typeof n=="string"&&(((i=n.match(lu))===null||i===void 0?void 0:i.length)||0)+(((o=n.match(Ky))===null||o===void 0?void 0:o.length)||0)>0}const bh="number",Ah="color",Qy="var",Xy="var(",Df="${}",Zy=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Si(n){const i=n.toString(),o=[],a={color:[],number:[],var:[]},c=[];let p=0;const m=i.replace(Zy,g=>(Ge.test(g)?(a.color.push(p),c.push(Ah),o.push(Ge.parse(g))):g.startsWith(Xy)?(a.var.push(p),c.push(Qy),o.push(g)):(a.number.push(p),c.push(bh),o.push(parseFloat(g))),++p,Df)).split(Df);return{values:o,split:m,indexes:a,types:c}}function Mh(n){return Si(n).values}function Rh(n){const{split:i,types:o}=Si(n),a=i.length;return c=>{let p="";for(let d=0;d<a;d++)if(p+=i[d],c[d]!==void 0){const m=o[d];m===bh?p+=pi(c[d]):m===Ah?p+=Ge.transform(c[d]):p+=c[d]}return p}}const qy=n=>typeof n=="number"?0:n;function Jy(n){const i=Mh(n);return Rh(n)(i.map(qy))}const xn={test:Yy,parse:Mh,createTransformer:Rh,getAnimatableNone:Jy},ev=new Set(["brightness","contrast","saturate","opacity"]);function tv(n){const[i,o]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[a]=o.match(lu)||[];if(!a)return n;const c=o.replace(a,"");let p=ev.has(i)?1:0;return a!==o&&(p*=100),i+"("+p+c+")"}const nv=/\b([a-z-]*)\(.*?\)/gu,jl={...xn,getAnimatableNone:n=>{const i=n.match(nv);return i?i.map(tv).join(" "):n}},rv={...Kl,color:Ge,backgroundColor:Ge,outlineColor:Ge,fill:Ge,stroke:Ge,borderColor:Ge,borderTopColor:Ge,borderRightColor:Ge,borderBottomColor:Ge,borderLeftColor:Ge,filter:jl,WebkitFilter:jl},cu=n=>rv[n];function Dh(n,i){let o=cu(n);return o!==jl&&(o=xn),o.getAnimatableNone?o.getAnimatableNone(i):void 0}const iv=new Set(["auto","none","0"]);function ov(n,i,o){let a=0,c;for(;a<n.length&&!c;){const p=n[a];typeof p=="string"&&!iv.has(p)&&Si(p).values.length&&(c=n[a]),a++}if(c&&o)for(const p of i)n[p]=Dh(o,c)}const Lf=n=>n===kr||n===te,zf=(n,i)=>parseFloat(n.split(", ")[i]),Vf=(n,i)=>(o,{transform:a})=>{if(a==="none"||!a)return 0;const c=a.match(/^matrix3d\((.+)\)$/u);if(c)return zf(c[1],i);{const p=a.match(/^matrix\((.+)\)$/u);return p?zf(p[1],n):0}},sv=new Set(["x","y","z"]),av=Sr.filter(n=>!sv.has(n));function lv(n){const i=[];return av.forEach(o=>{const a=n.getValue(o);a!==void 0&&(i.push([o,a.get()]),a.set(o.startsWith("scale")?1:0))}),i}const wr={width:({x:n},{paddingLeft:i="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),height:({y:n},{paddingTop:i="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(i)-parseFloat(o),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:Vf(4,13),y:Vf(5,14)};wr.translateX=wr.x;wr.translateY=wr.y;const _n=new Set;let Tl=!1,El=!1;function Lh(){if(El){const n=Array.from(_n).filter(a=>a.needsMeasurement),i=new Set(n.map(a=>a.element)),o=new Map;i.forEach(a=>{const c=lv(a);c.length&&(o.set(a,c),a.render())}),n.forEach(a=>a.measureInitialState()),i.forEach(a=>{a.render();const c=o.get(a);c&&c.forEach(([p,d])=>{var m;(m=a.getValue(p))===null||m===void 0||m.set(d)})}),n.forEach(a=>a.measureEndState()),n.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}El=!1,Tl=!1,_n.forEach(n=>n.complete()),_n.clear()}function zh(){_n.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(El=!0)})}function uv(){zh(),Lh()}class du{constructor(i,o,a,c,p,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=o,this.name=a,this.motionValue=c,this.element=p,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(_n.add(this),Tl||(Tl=!0,Se.read(zh),Se.resolveKeyframes(Lh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:o,element:a,motionValue:c}=this;for(let p=0;p<i.length;p++)if(i[p]===null)if(p===0){const d=c==null?void 0:c.get(),m=i[i.length-1];if(d!==void 0)i[0]=d;else if(a&&o){const g=a.readValue(o,m);g!=null&&(i[0]=g)}i[0]===void 0&&(i[0]=m),c&&d===void 0&&c.set(i[0])}else i[p]=i[p-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),_n.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,_n.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Vh=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),cv=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function dv(n){const i=cv.exec(n);if(!i)return[,];const[,o,a,c]=i;return[`--${o??a}`,c]}function Ih(n,i,o=1){const[a,c]=dv(n);if(!a)return;const p=window.getComputedStyle(i).getPropertyValue(a);if(p){const d=p.trim();return Vh(d)?parseFloat(d):d}return Gl(c)?Ih(c,i,o+1):c}const _h=n=>i=>i.test(n),fv={test:n=>n==="auto",parse:n=>n},Oh=[kr,te,_t,yn,ty,ey,fv],If=n=>Oh.find(_h(n));class Fh extends du{constructor(i,o,a,c,p){super(i,o,a,c,p,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:o,name:a}=this;if(!o||!o.current)return;super.readKeyframes();for(let g=0;g<i.length;g++){let y=i[g];if(typeof y=="string"&&(y=y.trim(),Gl(y))){const v=Ih(y,o.current);v!==void 0&&(i[g]=v),g===i.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!gh.has(a)||i.length!==2)return;const[c,p]=i,d=If(c),m=If(p);if(d!==m)if(Lf(d)&&Lf(m))for(let g=0;g<i.length;g++){const y=i[g];typeof y=="string"&&(i[g]=parseFloat(y))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:o}=this,a=[];for(let c=0;c<i.length;c++)Uy(i[c])&&a.push(c);a.length&&ov(i,a,o)}measureInitialState(){const{element:i,unresolvedKeyframes:o,name:a}=this;if(!i||!i.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=wr[a](i.measureViewportBox(),window.getComputedStyle(i.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&i.getValue(a,c).jump(c,!1)}measureEndState(){var i;const{element:o,name:a,unresolvedKeyframes:c}=this;if(!o||!o.current)return;const p=o.getValue(a);p&&p.jump(this.measuredOrigin,!1);const d=c.length-1,m=c[d];c[d]=wr[a](o.measureViewportBox(),window.getComputedStyle(o.current)),m!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=m),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([g,y])=>{o.getValue(g).set(y)}),this.resolveNoneKeyframes()}}const _f=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(xn.test(n)||n==="0")&&!n.startsWith("url("));function pv(n){const i=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==i)return!0}function hv(n,i,o,a){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const p=n[n.length-1],d=_f(c,i),m=_f(p,i);return!d||!m?!1:pv(n)||(o==="spring"||eu(o))&&a}const mv=n=>n!==null;function os(n,{repeat:i,repeatType:o="loop"},a){const c=n.filter(mv),p=i&&o!=="loop"&&i%2===1?0:c.length-1;return!p||a===void 0?c[p]:a}const gv=40;class Bh{constructor({autoplay:i=!0,delay:o=0,type:a="keyframes",repeat:c=0,repeatDelay:p=0,repeatType:d="loop",...m}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ot.now(),this.options={autoplay:i,delay:o,type:a,repeat:c,repeatDelay:p,repeatType:d,...m},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>gv?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&uv(),this._resolved}onKeyframesResolved(i,o){this.resolvedAt=Ot.now(),this.hasAttemptedResolve=!0;const{name:a,type:c,velocity:p,delay:d,onComplete:m,onUpdate:g,isGenerator:y}=this.options;if(!y&&!hv(i,a,c,p))if(d)this.options.duration=0;else{g&&g(os(i,this.options,o)),m&&m(),this.resolveFinishedPromise();return}const v=this.initPlayback(i,o);v!==!1&&(this._resolved={keyframes:i,finalKeyframe:o,...v},this.onPostResolved())}onPostResolved(){}then(i,o){return this.currentFinishedPromise.then(i,o)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const Ce=(n,i,o)=>n+(i-n)*o;function al(n,i,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(i-n)*6*o:o<1/2?i:o<2/3?n+(i-n)*(2/3-o)*6:n}function yv({hue:n,saturation:i,lightness:o,alpha:a}){n/=360,i/=100,o/=100;let c=0,p=0,d=0;if(!i)c=p=d=o;else{const m=o<.5?o*(1+i):o+i-o*i,g=2*o-m;c=al(g,m,n+1/3),p=al(g,m,n),d=al(g,m,n-1/3)}return{red:Math.round(c*255),green:Math.round(p*255),blue:Math.round(d*255),alpha:a}}function Qo(n,i){return o=>o>0?i:n}const ll=(n,i,o)=>{const a=n*n,c=o*(i*i-a)+a;return c<0?0:Math.sqrt(c)},vv=[kl,In,pr],xv=n=>vv.find(i=>i.test(n));function Of(n){const i=xv(n);if(!i)return!1;let o=i.parse(n);return i===pr&&(o=yv(o)),o}const Ff=(n,i)=>{const o=Of(n),a=Of(i);if(!o||!a)return Qo(n,i);const c={...o};return p=>(c.red=ll(o.red,a.red,p),c.green=ll(o.green,a.green,p),c.blue=ll(o.blue,a.blue,p),c.alpha=Ce(o.alpha,a.alpha,p),In.transform(c))},wv=(n,i)=>o=>i(n(o)),Ei=(...n)=>n.reduce(wv),Cl=new Set(["none","hidden"]);function Sv(n,i){return Cl.has(n)?o=>o<=0?n:i:o=>o>=1?i:n}function kv(n,i){return o=>Ce(n,i,o)}function fu(n){return typeof n=="number"?kv:typeof n=="string"?Gl(n)?Qo:Ge.test(n)?Ff:Ev:Array.isArray(n)?Uh:typeof n=="object"?Ge.test(n)?Ff:jv:Qo}function Uh(n,i){const o=[...n],a=o.length,c=n.map((p,d)=>fu(p)(p,i[d]));return p=>{for(let d=0;d<a;d++)o[d]=c[d](p);return o}}function jv(n,i){const o={...n,...i},a={};for(const c in o)n[c]!==void 0&&i[c]!==void 0&&(a[c]=fu(n[c])(n[c],i[c]));return c=>{for(const p in a)o[p]=a[p](c);return o}}function Tv(n,i){var o;const a=[],c={color:0,var:0,number:0};for(let p=0;p<i.values.length;p++){const d=i.types[p],m=n.indexes[d][c[d]],g=(o=n.values[m])!==null&&o!==void 0?o:0;a[p]=g,c[d]++}return a}const Ev=(n,i)=>{const o=xn.createTransformer(i),a=Si(n),c=Si(i);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?Cl.has(n)&&!c.values.length||Cl.has(i)&&!a.values.length?Sv(n,i):Ei(Uh(Tv(a,c),c.values),o):Qo(n,i)};function Wh(n,i,o){return typeof n=="number"&&typeof i=="number"&&typeof o=="number"?Ce(n,i,o):fu(n)(n,i)}const Cv=5;function $h(n,i,o){const a=Math.max(i-Cv,0);return yh(o-n(a),i-a)}const be={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ul=.001;function Pv({duration:n=be.duration,bounce:i=be.bounce,velocity:o=be.velocity,mass:a=be.mass}){let c,p,d=1-i;d=Xt(be.minDamping,be.maxDamping,d),n=Xt(be.minDuration,be.maxDuration,Qt(n)),d<1?(c=y=>{const v=y*d,w=v*n,j=v-o,N=Pl(y,d),z=Math.exp(-w);return ul-j/N*z},p=y=>{const w=y*d*n,j=w*o+o,N=Math.pow(d,2)*Math.pow(y,2)*n,z=Math.exp(-w),b=Pl(Math.pow(y,2),d);return(-c(y)+ul>0?-1:1)*((j-N)*z)/b}):(c=y=>{const v=Math.exp(-y*n),w=(y-o)*n+1;return-ul+v*w},p=y=>{const v=Math.exp(-y*n),w=(o-y)*(n*n);return v*w});const m=5/n,g=bv(c,p,m);if(n=Yt(n),isNaN(g))return{stiffness:be.stiffness,damping:be.damping,duration:n};{const y=Math.pow(g,2)*a;return{stiffness:y,damping:d*2*Math.sqrt(a*y),duration:n}}}const Nv=12;function bv(n,i,o){let a=o;for(let c=1;c<Nv;c++)a=a-n(a)/i(a);return a}function Pl(n,i){return n*Math.sqrt(1-i*i)}const Av=["duration","bounce"],Mv=["stiffness","damping","mass"];function Bf(n,i){return i.some(o=>n[o]!==void 0)}function Rv(n){let i={velocity:be.velocity,stiffness:be.stiffness,damping:be.damping,mass:be.mass,isResolvedFromDuration:!1,...n};if(!Bf(n,Mv)&&Bf(n,Av))if(n.visualDuration){const o=n.visualDuration,a=2*Math.PI/(o*1.2),c=a*a,p=2*Xt(.05,1,1-(n.bounce||0))*Math.sqrt(c);i={...i,mass:be.mass,stiffness:c,damping:p}}else{const o=Pv(n);i={...i,...o,mass:be.mass},i.isResolvedFromDuration=!0}return i}function Hh(n=be.visualDuration,i=be.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:a,restDelta:c}=o;const p=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],m={done:!1,value:p},{stiffness:g,damping:y,mass:v,duration:w,velocity:j,isResolvedFromDuration:N}=Rv({...o,velocity:-Qt(o.velocity||0)}),z=j||0,b=y/(2*Math.sqrt(g*v)),D=d-p,I=Qt(Math.sqrt(g/v)),U=Math.abs(D)<5;a||(a=U?be.restSpeed.granular:be.restSpeed.default),c||(c=U?be.restDelta.granular:be.restDelta.default);let H;if(b<1){const F=Pl(I,b);H=ee=>{const le=Math.exp(-b*I*ee);return d-le*((z+b*I*D)/F*Math.sin(F*ee)+D*Math.cos(F*ee))}}else if(b===1)H=F=>d-Math.exp(-I*F)*(D+(z+I*D)*F);else{const F=I*Math.sqrt(b*b-1);H=ee=>{const le=Math.exp(-b*I*ee),X=Math.min(F*ee,300);return d-le*((z+b*I*D)*Math.sinh(X)+F*D*Math.cosh(X))/F}}const Q={calculatedDuration:N&&w||null,next:F=>{const ee=H(F);if(N)m.done=F>=w;else{let le=0;b<1&&(le=F===0?Yt(z):$h(H,F,ee));const X=Math.abs(le)<=a,ve=Math.abs(d-ee)<=c;m.done=X&&ve}return m.value=m.done?d:ee,m},toString:()=>{const F=Math.min(uh(Q),xl),ee=ch(le=>Q.next(F*le).value,F,30);return F+"ms "+ee}};return Q}function Uf({keyframes:n,velocity:i=0,power:o=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:p=500,modifyTarget:d,min:m,max:g,restDelta:y=.5,restSpeed:v}){const w=n[0],j={done:!1,value:w},N=X=>m!==void 0&&X<m||g!==void 0&&X>g,z=X=>m===void 0?g:g===void 0||Math.abs(m-X)<Math.abs(g-X)?m:g;let b=o*i;const D=w+b,I=d===void 0?D:d(D);I!==D&&(b=I-w);const U=X=>-b*Math.exp(-X/a),H=X=>I+U(X),Q=X=>{const ve=U(X),Pe=H(X);j.done=Math.abs(ve)<=y,j.value=j.done?I:Pe};let F,ee;const le=X=>{N(j.value)&&(F=X,ee=Hh({keyframes:[j.value,z(j.value)],velocity:$h(H,X,j.value),damping:c,stiffness:p,restDelta:y,restSpeed:v}))};return le(0),{calculatedDuration:null,next:X=>{let ve=!1;return!ee&&F===void 0&&(ve=!0,Q(X),le(X)),F!==void 0&&X>=F?ee.next(X-F):(!ve&&Q(X),j)}}}const Dv=Ti(.42,0,1,1),Lv=Ti(0,0,.58,1),Gh=Ti(.42,0,.58,1),zv=n=>Array.isArray(n)&&typeof n[0]!="number",Vv={linear:pt,easeIn:Dv,easeInOut:Gh,easeOut:Lv,circIn:au,circInOut:Ch,circOut:Eh,backIn:su,backInOut:jh,backOut:kh,anticipate:Th},Wf=n=>{if(tu(n)){Up(n.length===4);const[i,o,a,c]=n;return Ti(i,o,a,c)}else if(typeof n=="string")return Vv[n];return n};function Iv(n,i,o){const a=[],c=o||Wh,p=n.length-1;for(let d=0;d<p;d++){let m=c(n[d],n[d+1]);if(i){const g=Array.isArray(i)?i[d]||pt:i;m=Ei(g,m)}a.push(m)}return a}function _v(n,i,{clamp:o=!0,ease:a,mixer:c}={}){const p=n.length;if(Up(p===i.length),p===1)return()=>i[0];if(p===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[p-1]&&(n=[...n].reverse(),i=[...i].reverse());const m=Iv(i,a,c),g=m.length,y=v=>{if(d&&v<n[0])return i[0];let w=0;if(g>1)for(;w<n.length-2&&!(v<n[w+1]);w++);const j=vr(n[w],n[w+1],v);return m[w](j)};return o?v=>y(Xt(n[0],n[p-1],v)):y}function Ov(n,i){const o=n[n.length-1];for(let a=1;a<=i;a++){const c=vr(0,i,a);n.push(Ce(o,1,c))}}function Fv(n){const i=[0];return Ov(i,n.length-1),i}function Bv(n,i){return n.map(o=>o*i)}function Uv(n,i){return n.map(()=>i||Gh).splice(0,n.length-1)}function Xo({duration:n=300,keyframes:i,times:o,ease:a="easeInOut"}){const c=zv(a)?a.map(Wf):Wf(a),p={done:!1,value:i[0]},d=Bv(o&&o.length===i.length?o:Fv(i),n),m=_v(d,i,{ease:Array.isArray(c)?c:Uv(i,c)});return{calculatedDuration:n,next:g=>(p.value=m(g),p.done=g>=n,p)}}const Wv=n=>{const i=({timestamp:o})=>n(o);return{start:()=>Se.update(i,!0),stop:()=>vn(i),now:()=>Be.isProcessing?Be.timestamp:Ot.now()}},$v={decay:Uf,inertia:Uf,tween:Xo,keyframes:Xo,spring:Hh},Hv=n=>n/100;class pu extends Bh{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:g}=this.options;g&&g()};const{name:o,motionValue:a,element:c,keyframes:p}=this.options,d=(c==null?void 0:c.KeyframeResolver)||du,m=(g,y)=>this.onKeyframesResolved(g,y);this.resolver=new d(p,m,o,a,c),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:o="keyframes",repeat:a=0,repeatDelay:c=0,repeatType:p,velocity:d=0}=this.options,m=eu(o)?o:$v[o]||Xo;let g,y;m!==Xo&&typeof i[0]!="number"&&(g=Ei(Hv,Wh(i[0],i[1])),i=[0,100]);const v=m({...this.options,keyframes:i});p==="mirror"&&(y=m({...this.options,keyframes:[...i].reverse(),velocity:-d})),v.calculatedDuration===null&&(v.calculatedDuration=uh(v));const{calculatedDuration:w}=v,j=w+c,N=j*(a+1)-c;return{generator:v,mirroredGenerator:y,mapPercentToKeyframes:g,calculatedDuration:w,resolvedDuration:j,totalDuration:N}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,o=!1){const{resolved:a}=this;if(!a){const{keyframes:X}=this.options;return{done:!0,value:X[X.length-1]}}const{finalKeyframe:c,generator:p,mirroredGenerator:d,mapPercentToKeyframes:m,keyframes:g,calculatedDuration:y,totalDuration:v,resolvedDuration:w}=a;if(this.startTime===null)return p.next(0);const{delay:j,repeat:N,repeatType:z,repeatDelay:b,onUpdate:D}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-v/this.speed,this.startTime)),o?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const I=this.currentTime-j*(this.speed>=0?1:-1),U=this.speed>=0?I<0:I>v;this.currentTime=Math.max(I,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let H=this.currentTime,Q=p;if(N){const X=Math.min(this.currentTime,v)/w;let ve=Math.floor(X),Pe=X%1;!Pe&&X>=1&&(Pe=1),Pe===1&&ve--,ve=Math.min(ve,N+1),!!(ve%2)&&(z==="reverse"?(Pe=1-Pe,b&&(Pe-=b/w)):z==="mirror"&&(Q=d)),H=Xt(0,1,Pe)*w}const F=U?{done:!1,value:g[0]}:Q.next(H);m&&(F.value=m(F.value));let{done:ee}=F;!U&&y!==null&&(ee=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const le=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ee);return le&&c!==void 0&&(F.value=os(g,this.options,c)),D&&D(F.value),le&&this.finish(),F}get duration(){const{resolved:i}=this;return i?Qt(i.calculatedDuration):0}get time(){return Qt(this.currentTime)}set time(i){i=Yt(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const o=this.playbackSpeed!==i;this.playbackSpeed=i,o&&(this.time=Qt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=Wv,onPlay:o,startTime:a}=this.options;this.driver||(this.driver=i(p=>this.tick(p))),o&&o();const c=this.driver.now();this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=c):this.startTime=a??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const Gv=new Set(["opacity","clipPath","filter","transform"]);function Kv(n,i,o,{delay:a=0,duration:c=300,repeat:p=0,repeatType:d="loop",ease:m="easeInOut",times:g}={}){const y={[i]:o};g&&(y.offset=g);const v=fh(m,c);return Array.isArray(v)&&(y.easing=v),n.animate(y,{delay:a,duration:c,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:p+1,direction:d==="reverse"?"alternate":"normal"})}const Yv=Ol(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Zo=10,Qv=2e4;function Xv(n){return eu(n.type)||n.type==="spring"||!dh(n.ease)}function Zv(n,i){const o=new pu({...i,keyframes:n,repeat:0,delay:0,isGenerator:!0});let a={done:!1,value:n[0]};const c=[];let p=0;for(;!a.done&&p<Qv;)a=o.sample(p),c.push(a.value),p+=Zo;return{times:void 0,keyframes:c,duration:p-Zo,ease:"linear"}}const Kh={anticipate:Th,backInOut:jh,circInOut:Ch};function qv(n){return n in Kh}class $f extends Bh{constructor(i){super(i);const{name:o,motionValue:a,element:c,keyframes:p}=this.options;this.resolver=new Fh(p,(d,m)=>this.onKeyframesResolved(d,m),o,a,c),this.resolver.scheduleResolve()}initPlayback(i,o){let{duration:a=300,times:c,ease:p,type:d,motionValue:m,name:g,startTime:y}=this.options;if(!m.owner||!m.owner.current)return!1;if(typeof p=="string"&&Yo()&&qv(p)&&(p=Kh[p]),Xv(this.options)){const{onComplete:w,onUpdate:j,motionValue:N,element:z,...b}=this.options,D=Zv(i,b);i=D.keyframes,i.length===1&&(i[1]=i[0]),a=D.duration,c=D.times,p=D.ease,d="keyframes"}const v=Kv(m.owner.current,g,i,{...this.options,duration:a,times:c,ease:p});return v.startTime=y??this.calcStartTime(),this.pendingTimeline?(Nf(v,this.pendingTimeline),this.pendingTimeline=void 0):v.onfinish=()=>{const{onComplete:w}=this.options;m.set(os(i,this.options,o)),w&&w(),this.cancel(),this.resolveFinishedPromise()},{animation:v,duration:a,times:c,type:d,ease:p,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:o}=i;return Qt(o)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:o}=i;return Qt(o.currentTime||0)}set time(i){const{resolved:o}=this;if(!o)return;const{animation:a}=o;a.currentTime=Yt(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:o}=i;return o.playbackRate}set speed(i){const{resolved:o}=this;if(!o)return;const{animation:a}=o;a.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:o}=i;return o.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:o}=i;return o.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:o}=this;if(!o)return pt;const{animation:a}=o;Nf(a,i)}return pt}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.playState==="finished"&&this.updateFinishedPromise(),o.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:o,keyframes:a,duration:c,type:p,ease:d,times:m}=i;if(o.playState==="idle"||o.playState==="finished")return;if(this.time){const{motionValue:y,onUpdate:v,onComplete:w,element:j,...N}=this.options,z=new pu({...N,keyframes:a,duration:c,type:p,ease:d,times:m,isGenerator:!0}),b=Yt(this.time);y.setWithVelocity(z.sample(b-Zo).value,z.sample(b).value,Zo)}const{onStop:g}=this.options;g&&g(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:o,name:a,repeatDelay:c,repeatType:p,damping:d,type:m}=i;if(!o||!o.owner||!(o.owner.current instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:y}=o.owner.getProps();return Yv()&&a&&Gv.has(a)&&!g&&!y&&!c&&p!=="mirror"&&d!==0&&m!=="inertia"}}const Jv={type:"spring",stiffness:500,damping:25,restSpeed:10},e1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),t1={type:"keyframes",duration:.8},n1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},r1=(n,{keyframes:i})=>i.length>2?t1:Fn.has(n)?n.startsWith("scale")?e1(i[1]):Jv:n1;function i1({when:n,delay:i,delayChildren:o,staggerChildren:a,staggerDirection:c,repeat:p,repeatType:d,repeatDelay:m,from:g,elapsed:y,...v}){return!!Object.keys(v).length}const hu=(n,i,o,a={},c,p)=>d=>{const m=Jl(a,n)||{},g=m.delay||a.delay||0;let{elapsed:y=0}=a;y=y-Yt(g);let v={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:i.getVelocity(),...m,delay:-y,onUpdate:j=>{i.set(j),m.onUpdate&&m.onUpdate(j)},onComplete:()=>{d(),m.onComplete&&m.onComplete()},name:n,motionValue:i,element:p?void 0:c};i1(m)||(v={...v,...r1(n,v)}),v.duration&&(v.duration=Yt(v.duration)),v.repeatDelay&&(v.repeatDelay=Yt(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let w=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(w=!0)),w&&!p&&i.get()!==void 0){const j=os(v.keyframes,m);if(j!==void 0)return Se.update(()=>{v.onUpdate(j),v.onComplete()}),new jy([])}return!p&&$f.supports(v)?new $f(v):new pu(v)};function o1({protectedKeys:n,needsAnimating:i},o){const a=n.hasOwnProperty(o)&&i[o]!==!0;return i[o]=!1,a}function Yh(n,i,{delay:o=0,transitionOverride:a,type:c}={}){var p;let{transition:d=n.getDefaultTransition(),transitionEnd:m,...g}=i;a&&(d=a);const y=[],v=c&&n.animationState&&n.animationState.getState()[c];for(const w in g){const j=n.getValue(w,(p=n.latestValues[w])!==null&&p!==void 0?p:null),N=g[w];if(N===void 0||v&&o1(v,w))continue;const z={delay:o,...Jl(d||{},w)};let b=!1;if(window.MotionHandoffAnimation){const I=vh(n);if(I){const U=window.MotionHandoffAnimation(I,w,Se);U!==null&&(z.startTime=U,b=!0)}}Sl(n,w),j.start(hu(w,j,N,n.shouldReduceMotion&&gh.has(w)?{type:!1}:z,n,b));const D=j.animation;D&&y.push(D)}return m&&Promise.all(y).then(()=>{Se.update(()=>{m&&Iy(n,m)})}),y}function Nl(n,i,o={}){var a;const c=is(n,i,o.type==="exit"?(a=n.presenceContext)===null||a===void 0?void 0:a.custom:void 0);let{transition:p=n.getDefaultTransition()||{}}=c||{};o.transitionOverride&&(p=o.transitionOverride);const d=c?()=>Promise.all(Yh(n,c,o)):()=>Promise.resolve(),m=n.variantChildren&&n.variantChildren.size?(y=0)=>{const{delayChildren:v=0,staggerChildren:w,staggerDirection:j}=p;return s1(n,i,v+y,w,j,o)}:()=>Promise.resolve(),{when:g}=p;if(g){const[y,v]=g==="beforeChildren"?[d,m]:[m,d];return y().then(()=>v())}else return Promise.all([d(),m(o.delay)])}function s1(n,i,o=0,a=0,c=1,p){const d=[],m=(n.variantChildren.size-1)*a,g=c===1?(y=0)=>y*a:(y=0)=>m-y*a;return Array.from(n.variantChildren).sort(a1).forEach((y,v)=>{y.notify("AnimationStart",i),d.push(Nl(y,i,{...p,delay:o+g(v)}).then(()=>y.notify("AnimationComplete",i)))}),Promise.all(d)}function a1(n,i){return n.sortNodePosition(i)}function l1(n,i,o={}){n.notify("AnimationStart",i);let a;if(Array.isArray(i)){const c=i.map(p=>Nl(n,p,o));a=Promise.all(c)}else if(typeof i=="string")a=Nl(n,i,o);else{const c=typeof i=="function"?is(n,i,o.custom):i;a=Promise.all(Yh(n,c,o))}return a.then(()=>{n.notify("AnimationComplete",i)})}const u1=Bl.length;function Qh(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?Qh(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const i={};for(let o=0;o<u1;o++){const a=Bl[o],c=n.props[a];(vi(c)||c===!1)&&(i[a]=c)}return i}const c1=[...Fl].reverse(),d1=Fl.length;function f1(n){return i=>Promise.all(i.map(({animation:o,options:a})=>l1(n,o,a)))}function p1(n){let i=f1(n),o=Hf(),a=!0;const c=g=>(y,v)=>{var w;const j=is(n,v,g==="exit"?(w=n.presenceContext)===null||w===void 0?void 0:w.custom:void 0);if(j){const{transition:N,transitionEnd:z,...b}=j;y={...y,...b,...z}}return y};function p(g){i=g(n)}function d(g){const{props:y}=n,v=Qh(n.parent)||{},w=[],j=new Set;let N={},z=1/0;for(let D=0;D<d1;D++){const I=c1[D],U=o[I],H=y[I]!==void 0?y[I]:v[I],Q=vi(H),F=I===g?U.isActive:null;F===!1&&(z=D);let ee=H===v[I]&&H!==y[I]&&Q;if(ee&&a&&n.manuallyAnimateOnMount&&(ee=!1),U.protectedKeys={...N},!U.isActive&&F===null||!H&&!U.prevProp||ns(H)||typeof H=="boolean")continue;const le=h1(U.prevProp,H);let X=le||I===g&&U.isActive&&!ee&&Q||D>z&&Q,ve=!1;const Pe=Array.isArray(H)?H:[H];let Je=Pe.reduce(c(I),{});F===!1&&(Je={});const{prevResolvedValues:at={}}=U,Qe={...at,...Je},et=oe=>{X=!0,j.has(oe)&&(ve=!0,j.delete(oe)),U.needsAnimating[oe]=!0;const _=n.getValue(oe);_&&(_.liveStyle=!1)};for(const oe in Qe){const _=Je[oe],Z=at[oe];if(N.hasOwnProperty(oe))continue;let W=!1;vl(_)&&vl(Z)?W=!lh(_,Z):W=_!==Z,W?_!=null?et(oe):j.add(oe):_!==void 0&&j.has(oe)?et(oe):U.protectedKeys[oe]=!0}U.prevProp=H,U.prevResolvedValues=Je,U.isActive&&(N={...N,...Je}),a&&n.blockInitialAnimation&&(X=!1),X&&(!(ee&&le)||ve)&&w.push(...Pe.map(oe=>({animation:oe,options:{type:I}})))}if(j.size){const D={};j.forEach(I=>{const U=n.getBaseTarget(I),H=n.getValue(I);H&&(H.liveStyle=!0),D[I]=U??null}),w.push({animation:D})}let b=!!w.length;return a&&(y.initial===!1||y.initial===y.animate)&&!n.manuallyAnimateOnMount&&(b=!1),a=!1,b?i(w):Promise.resolve()}function m(g,y){var v;if(o[g].isActive===y)return Promise.resolve();(v=n.variantChildren)===null||v===void 0||v.forEach(j=>{var N;return(N=j.animationState)===null||N===void 0?void 0:N.setActive(g,y)}),o[g].isActive=y;const w=d(g);for(const j in o)o[j].protectedKeys={};return w}return{animateChanges:d,setActive:m,setAnimateFunction:p,getState:()=>o,reset:()=>{o=Hf(),a=!0}}}function h1(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!lh(i,n):!1}function Ln(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Hf(){return{animate:Ln(!0),whileInView:Ln(),whileHover:Ln(),whileTap:Ln(),whileDrag:Ln(),whileFocus:Ln(),exit:Ln()}}class wn{constructor(i){this.isMounted=!1,this.node=i}update(){}}class m1 extends wn{constructor(i){super(i),i.animationState||(i.animationState=p1(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();ns(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:o}=this.node.prevProps||{};i!==o&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let g1=0;class y1 extends wn{constructor(){super(...arguments),this.id=g1++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:o}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===a)return;const c=this.node.animationState.setActive("exit",!i);o&&!i&&c.then(()=>o(this.id))}mount(){const{register:i}=this.node.presenceContext||{};i&&(this.unmount=i(this.id))}unmount(){}}const v1={animation:{Feature:m1},exit:{Feature:y1}};function ki(n,i,o,a={passive:!0}){return n.addEventListener(i,o,a),()=>n.removeEventListener(i,o)}function Ci(n){return{point:{x:n.pageX,y:n.pageY}}}const x1=n=>i=>nu(i)&&n(i,Ci(i));function hi(n,i,o,a){return ki(n,i,x1(o),a)}const Gf=(n,i)=>Math.abs(n-i);function w1(n,i){const o=Gf(n.x,i.x),a=Gf(n.y,i.y);return Math.sqrt(o**2+a**2)}class Xh{constructor(i,o,{transformPagePoint:a,contextWindow:c,dragSnapToOrigin:p=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=dl(this.lastMoveEventInfo,this.history),j=this.startEvent!==null,N=w1(w.offset,{x:0,y:0})>=3;if(!j&&!N)return;const{point:z}=w,{timestamp:b}=Be;this.history.push({...z,timestamp:b});const{onStart:D,onMove:I}=this.handlers;j||(D&&D(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),I&&I(this.lastMoveEvent,w)},this.handlePointerMove=(w,j)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=cl(j,this.transformPagePoint),Se.update(this.updatePoint,!0)},this.handlePointerUp=(w,j)=>{this.end();const{onEnd:N,onSessionEnd:z,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=dl(w.type==="pointercancel"?this.lastMoveEventInfo:cl(j,this.transformPagePoint),this.history);this.startEvent&&N&&N(w,D),z&&z(w,D)},!nu(i))return;this.dragSnapToOrigin=p,this.handlers=o,this.transformPagePoint=a,this.contextWindow=c||window;const d=Ci(i),m=cl(d,this.transformPagePoint),{point:g}=m,{timestamp:y}=Be;this.history=[{...g,timestamp:y}];const{onSessionStart:v}=o;v&&v(i,dl(m,this.history)),this.removeListeners=Ei(hi(this.contextWindow,"pointermove",this.handlePointerMove),hi(this.contextWindow,"pointerup",this.handlePointerUp),hi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),vn(this.updatePoint)}}function cl(n,i){return i?{point:i(n.point)}:n}function Kf(n,i){return{x:n.x-i.x,y:n.y-i.y}}function dl({point:n},i){return{point:n,delta:Kf(n,Zh(i)),offset:Kf(n,S1(i)),velocity:k1(i,.1)}}function S1(n){return n[0]}function Zh(n){return n[n.length-1]}function k1(n,i){if(n.length<2)return{x:0,y:0};let o=n.length-1,a=null;const c=Zh(n);for(;o>=0&&(a=n[o],!(c.timestamp-a.timestamp>Yt(i)));)o--;if(!a)return{x:0,y:0};const p=Qt(c.timestamp-a.timestamp);if(p===0)return{x:0,y:0};const d={x:(c.x-a.x)/p,y:(c.y-a.y)/p};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}const qh=1e-4,j1=1-qh,T1=1+qh,Jh=.01,E1=0-Jh,C1=0+Jh;function ht(n){return n.max-n.min}function P1(n,i,o){return Math.abs(n-i)<=o}function Yf(n,i,o,a=.5){n.origin=a,n.originPoint=Ce(i.min,i.max,n.origin),n.scale=ht(o)/ht(i),n.translate=Ce(o.min,o.max,n.origin)-n.originPoint,(n.scale>=j1&&n.scale<=T1||isNaN(n.scale))&&(n.scale=1),(n.translate>=E1&&n.translate<=C1||isNaN(n.translate))&&(n.translate=0)}function mi(n,i,o,a){Yf(n.x,i.x,o.x,a?a.originX:void 0),Yf(n.y,i.y,o.y,a?a.originY:void 0)}function Qf(n,i,o){n.min=o.min+i.min,n.max=n.min+ht(i)}function N1(n,i,o){Qf(n.x,i.x,o.x),Qf(n.y,i.y,o.y)}function Xf(n,i,o){n.min=i.min-o.min,n.max=n.min+ht(i)}function gi(n,i,o){Xf(n.x,i.x,o.x),Xf(n.y,i.y,o.y)}function b1(n,{min:i,max:o},a){return i!==void 0&&n<i?n=a?Ce(i,n,a.min):Math.max(n,i):o!==void 0&&n>o&&(n=a?Ce(o,n,a.max):Math.min(n,o)),n}function Zf(n,i,o){return{min:i!==void 0?n.min+i:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function A1(n,{top:i,left:o,bottom:a,right:c}){return{x:Zf(n.x,o,c),y:Zf(n.y,i,a)}}function qf(n,i){let o=i.min-n.min,a=i.max-n.max;return i.max-i.min<n.max-n.min&&([o,a]=[a,o]),{min:o,max:a}}function M1(n,i){return{x:qf(n.x,i.x),y:qf(n.y,i.y)}}function R1(n,i){let o=.5;const a=ht(n),c=ht(i);return c>a?o=vr(i.min,i.max-a,n.min):a>c&&(o=vr(n.min,n.max-c,i.min)),Xt(0,1,o)}function D1(n,i){const o={};return i.min!==void 0&&(o.min=i.min-n.min),i.max!==void 0&&(o.max=i.max-n.min),o}const bl=.35;function L1(n=bl){return n===!1?n=0:n===!0&&(n=bl),{x:Jf(n,"left","right"),y:Jf(n,"top","bottom")}}function Jf(n,i,o){return{min:ep(n,i),max:ep(n,o)}}function ep(n,i){return typeof n=="number"?n:n[i]||0}const tp=()=>({translate:0,scale:1,origin:0,originPoint:0}),hr=()=>({x:tp(),y:tp()}),np=()=>({min:0,max:0}),Re=()=>({x:np(),y:np()});function kt(n){return[n("x"),n("y")]}function em({top:n,left:i,right:o,bottom:a}){return{x:{min:i,max:o},y:{min:n,max:a}}}function z1({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function V1(n,i){if(!i)return n;const o=i({x:n.left,y:n.top}),a=i({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:a.y,right:a.x}}function fl(n){return n===void 0||n===1}function Al({scale:n,scaleX:i,scaleY:o}){return!fl(n)||!fl(i)||!fl(o)}function zn(n){return Al(n)||tm(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function tm(n){return rp(n.x)||rp(n.y)}function rp(n){return n&&n!=="0%"}function qo(n,i,o){const a=n-o,c=i*a;return o+c}function ip(n,i,o,a,c){return c!==void 0&&(n=qo(n,c,a)),qo(n,o,a)+i}function Ml(n,i=0,o=1,a,c){n.min=ip(n.min,i,o,a,c),n.max=ip(n.max,i,o,a,c)}function nm(n,{x:i,y:o}){Ml(n.x,i.translate,i.scale,i.originPoint),Ml(n.y,o.translate,o.scale,o.originPoint)}const op=.999999999999,sp=1.0000000000001;function I1(n,i,o,a=!1){const c=o.length;if(!c)return;i.x=i.y=1;let p,d;for(let m=0;m<c;m++){p=o[m],d=p.projectionDelta;const{visualElement:g}=p.options;g&&g.props.style&&g.props.style.display==="contents"||(a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&gr(n,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,nm(n,d)),a&&zn(p.latestValues)&&gr(n,p.latestValues))}i.x<sp&&i.x>op&&(i.x=1),i.y<sp&&i.y>op&&(i.y=1)}function mr(n,i){n.min=n.min+i,n.max=n.max+i}function ap(n,i,o,a,c=.5){const p=Ce(n.min,n.max,c);Ml(n,i,o,p,a)}function gr(n,i){ap(n.x,i.x,i.scaleX,i.scale,i.originX),ap(n.y,i.y,i.scaleY,i.scale,i.originY)}function rm(n,i){return em(V1(n.getBoundingClientRect(),i))}function _1(n,i,o){const a=rm(n,o),{scroll:c}=i;return c&&(mr(a.x,c.offset.x),mr(a.y,c.offset.y)),a}const im=({current:n})=>n?n.ownerDocument.defaultView:null,O1=new WeakMap;class F1{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Re(),this.visualElement=i}start(i,{snapToCursor:o=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const c=v=>{const{dragSnapToOrigin:w}=this.getProps();w?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(Ci(v).point)},p=(v,w)=>{const{drag:j,dragPropagation:N,onDragStart:z}=this.getProps();if(j&&!N&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ry(j),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),kt(D=>{let I=this.getAxisMotionValue(D).get()||0;if(_t.test(I)){const{projection:U}=this.visualElement;if(U&&U.layout){const H=U.layout.layoutBox[D];H&&(I=ht(H)*(parseFloat(I)/100))}}this.originPoint[D]=I}),z&&Se.postRender(()=>z(v,w)),Sl(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},d=(v,w)=>{const{dragPropagation:j,dragDirectionLock:N,onDirectionLock:z,onDrag:b}=this.getProps();if(!j&&!this.openDragLock)return;const{offset:D}=w;if(N&&this.currentDirection===null){this.currentDirection=B1(D),this.currentDirection!==null&&z&&z(this.currentDirection);return}this.updateAxis("x",w.point,D),this.updateAxis("y",w.point,D),this.visualElement.render(),b&&b(v,w)},m=(v,w)=>this.stop(v,w),g=()=>kt(v=>{var w;return this.getAnimationState(v)==="paused"&&((w=this.getAxisMotionValue(v).animation)===null||w===void 0?void 0:w.play())}),{dragSnapToOrigin:y}=this.getProps();this.panSession=new Xh(i,{onSessionStart:c,onStart:p,onMove:d,onSessionEnd:m,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,contextWindow:im(this.visualElement)})}stop(i,o){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:p}=this.getProps();p&&Se.postRender(()=>p(i,o))}cancel(){this.isDragging=!1;const{projection:i,animationState:o}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(i,o,a){const{drag:c}=this.getProps();if(!a||!Uo(i,c,this.currentDirection))return;const p=this.getAxisMotionValue(i);let d=this.originPoint[i]+a[i];this.constraints&&this.constraints[i]&&(d=b1(d,this.constraints[i],this.elastic[i])),p.set(d)}resolveConstraints(){var i;const{dragConstraints:o,dragElastic:a}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,p=this.constraints;o&&fr(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&c?this.constraints=A1(c.layoutBox,o):this.constraints=!1,this.elastic=L1(a),p!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&kt(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=D1(c.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:o}=this.getProps();if(!i||!fr(i))return!1;const a=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const p=_1(a,c.root,this.visualElement.getTransformPagePoint());let d=M1(c.layout.layoutBox,p);if(o){const m=o(z1(d));this.hasMutatedConstraints=!!m,m&&(d=em(m))}return d}startAnimation(i){const{drag:o,dragMomentum:a,dragElastic:c,dragTransition:p,dragSnapToOrigin:d,onDragTransitionEnd:m}=this.getProps(),g=this.constraints||{},y=kt(v=>{if(!Uo(v,o,this.currentDirection))return;let w=g&&g[v]||{};d&&(w={min:0,max:0});const j=c?200:1e6,N=c?40:1e7,z={type:"inertia",velocity:a?i[v]:0,bounceStiffness:j,bounceDamping:N,timeConstant:750,restDelta:1,restSpeed:10,...p,...w};return this.startAxisValueAnimation(v,z)});return Promise.all(y).then(m)}startAxisValueAnimation(i,o){const a=this.getAxisMotionValue(i);return Sl(this.visualElement,i),a.start(hu(i,a,0,o,this.visualElement,!1))}stopAnimation(){kt(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){kt(i=>{var o;return(o=this.getAxisMotionValue(i).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(i){var o;return(o=this.getAxisMotionValue(i).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(i){const o=`_drag${i.toUpperCase()}`,a=this.visualElement.getProps(),c=a[o];return c||this.visualElement.getValue(i,(a.initial?a.initial[i]:void 0)||0)}snapToCursor(i){kt(o=>{const{drag:a}=this.getProps();if(!Uo(o,a,this.currentDirection))return;const{projection:c}=this.visualElement,p=this.getAxisMotionValue(o);if(c&&c.layout){const{min:d,max:m}=c.layout.layoutBox[o];p.set(i[o]-Ce(d,m,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:o}=this.getProps(),{projection:a}=this.visualElement;if(!fr(o)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};kt(d=>{const m=this.getAxisMotionValue(d);if(m&&this.constraints!==!1){const g=m.get();c[d]=R1({min:g,max:g},this.constraints[d])}});const{transformTemplate:p}=this.visualElement.getProps();this.visualElement.current.style.transform=p?p({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),kt(d=>{if(!Uo(d,i,null))return;const m=this.getAxisMotionValue(d),{min:g,max:y}=this.constraints[d];m.set(Ce(g,y,c[d]))})}addListeners(){if(!this.visualElement.current)return;O1.set(this.visualElement,this);const i=this.visualElement.current,o=hi(i,"pointerdown",g=>{const{drag:y,dragListener:v=!0}=this.getProps();y&&v&&this.start(g)}),a=()=>{const{dragConstraints:g}=this.getProps();fr(g)&&g.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,p=c.addEventListener("measure",a);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Se.read(a);const d=ki(window,"resize",()=>this.scalePositionWithinConstraints()),m=c.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(kt(v=>{const w=this.getAxisMotionValue(v);w&&(this.originPoint[v]+=g[v].translate,w.set(w.get()+g[v].translate))}),this.visualElement.render())}));return()=>{d(),o(),p(),m&&m()}}getProps(){const i=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:p=!1,dragElastic:d=bl,dragMomentum:m=!0}=i;return{...i,drag:o,dragDirectionLock:a,dragPropagation:c,dragConstraints:p,dragElastic:d,dragMomentum:m}}}function Uo(n,i,o){return(i===!0||i===n)&&(o===null||o===n)}function B1(n,i=10){let o=null;return Math.abs(n.y)>i?o="y":Math.abs(n.x)>i&&(o="x"),o}class U1 extends wn{constructor(i){super(i),this.removeGroupControls=pt,this.removeListeners=pt,this.controls=new F1(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||pt}unmount(){this.removeGroupControls(),this.removeListeners()}}const lp=n=>(i,o)=>{n&&Se.postRender(()=>n(i,o))};class W1 extends wn{constructor(){super(...arguments),this.removePointerDownListener=pt}onPointerDown(i){this.session=new Xh(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:im(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:o,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:lp(i),onStart:lp(o),onMove:a,onEnd:(p,d)=>{delete this.session,c&&Se.postRender(()=>c(p,d))}}}mount(){this.removePointerDownListener=hi(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ho={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function up(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const ui={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(te.test(n))n=parseFloat(n);else return n;const o=up(n,i.target.x),a=up(n,i.target.y);return`${o}% ${a}%`}},$1={correct:(n,{treeScale:i,projectionDelta:o})=>{const a=n,c=xn.parse(n);if(c.length>5)return a;const p=xn.createTransformer(n),d=typeof c[0]!="number"?1:0,m=o.x.scale*i.x,g=o.y.scale*i.y;c[0+d]/=m,c[1+d]/=g;const y=Ce(m,g,.5);return typeof c[2+d]=="number"&&(c[2+d]/=y),typeof c[3+d]=="number"&&(c[3+d]/=y),p(c)}};class H1 extends O.Component{componentDidMount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:a,layoutId:c}=this.props,{projection:p}=i;dy(G1),p&&(o.group&&o.group.add(p),a&&a.register&&c&&a.register(p),p.root.didUpdate(),p.addEventListener("animationComplete",()=>{this.safeToRemove()}),p.setOptions({...p.options,onExitComplete:()=>this.safeToRemove()})),Ho.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:o,visualElement:a,drag:c,isPresent:p}=this.props,d=a.projection;return d&&(d.isPresent=p,c||i.layoutDependency!==o||o===void 0?d.willUpdate():this.safeToRemove(),i.isPresent!==p&&(p?d.promote():d.relegate()||Se.postRender(()=>{const m=d.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Wl.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:o,switchLayoutGroup:a}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function om(n){const[i,o]=Fp(),a=O.useContext(Il);return f.jsx(H1,{...n,layoutGroup:a,switchLayoutGroup:O.useContext(Qp),isPresent:i,safeToRemove:o})}const G1={borderRadius:{...ui,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ui,borderTopRightRadius:ui,borderBottomLeftRadius:ui,borderBottomRightRadius:ui,boxShadow:$1};function K1(n,i,o){const a=Ke(n)?n:wi(n);return a.start(hu("",a,i,o)),a.animation}function Y1(n){return n instanceof SVGElement&&n.tagName!=="svg"}const Q1=(n,i)=>n.depth-i.depth;class X1{constructor(){this.children=[],this.isDirty=!1}add(i){ru(this.children,i),this.isDirty=!0}remove(i){iu(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(Q1),this.isDirty=!1,this.children.forEach(i)}}function Z1(n,i){const o=Ot.now(),a=({timestamp:c})=>{const p=c-o;p>=i&&(vn(a),n(p-i))};return Se.read(a,!0),()=>vn(a)}const sm=["TopLeft","TopRight","BottomLeft","BottomRight"],q1=sm.length,cp=n=>typeof n=="string"?parseFloat(n):n,dp=n=>typeof n=="number"||te.test(n);function J1(n,i,o,a,c,p){c?(n.opacity=Ce(0,o.opacity!==void 0?o.opacity:1,ex(a)),n.opacityExit=Ce(i.opacity!==void 0?i.opacity:1,0,tx(a))):p&&(n.opacity=Ce(i.opacity!==void 0?i.opacity:1,o.opacity!==void 0?o.opacity:1,a));for(let d=0;d<q1;d++){const m=`border${sm[d]}Radius`;let g=fp(i,m),y=fp(o,m);if(g===void 0&&y===void 0)continue;g||(g=0),y||(y=0),g===0||y===0||dp(g)===dp(y)?(n[m]=Math.max(Ce(cp(g),cp(y),a),0),(_t.test(y)||_t.test(g))&&(n[m]+="%")):n[m]=y}(i.rotate||o.rotate)&&(n.rotate=Ce(i.rotate||0,o.rotate||0,a))}function fp(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const ex=am(0,.5,Eh),tx=am(.5,.95,pt);function am(n,i,o){return a=>a<n?0:a>i?1:o(vr(n,i,a))}function pp(n,i){n.min=i.min,n.max=i.max}function St(n,i){pp(n.x,i.x),pp(n.y,i.y)}function hp(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function mp(n,i,o,a,c){return n-=i,n=qo(n,1/o,a),c!==void 0&&(n=qo(n,1/c,a)),n}function nx(n,i=0,o=1,a=.5,c,p=n,d=n){if(_t.test(i)&&(i=parseFloat(i),i=Ce(d.min,d.max,i/100)-d.min),typeof i!="number")return;let m=Ce(p.min,p.max,a);n===p&&(m-=i),n.min=mp(n.min,i,o,m,c),n.max=mp(n.max,i,o,m,c)}function gp(n,i,[o,a,c],p,d){nx(n,i[o],i[a],i[c],i.scale,p,d)}const rx=["x","scaleX","originX"],ix=["y","scaleY","originY"];function yp(n,i,o,a){gp(n.x,i,rx,o?o.x:void 0,a?a.x:void 0),gp(n.y,i,ix,o?o.y:void 0,a?a.y:void 0)}function vp(n){return n.translate===0&&n.scale===1}function lm(n){return vp(n.x)&&vp(n.y)}function xp(n,i){return n.min===i.min&&n.max===i.max}function ox(n,i){return xp(n.x,i.x)&&xp(n.y,i.y)}function wp(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function um(n,i){return wp(n.x,i.x)&&wp(n.y,i.y)}function Sp(n){return ht(n.x)/ht(n.y)}function kp(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class sx{constructor(){this.members=[]}add(i){ru(this.members,i),i.scheduleRender()}remove(i){if(iu(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(i){const o=this.members.findIndex(c=>i===c);if(o===0)return!1;let a;for(let c=o;c>=0;c--){const p=this.members[c];if(p.isPresent!==!1){a=p;break}}return a?(this.promote(a),!0):!1}promote(i,o){const a=this.lead;if(i!==a&&(this.prevLead=a,this.lead=i,i.show(),a)){a.instance&&a.scheduleRender(),i.scheduleRender(),i.resumeFrom=a,o&&(i.resumeFrom.preserveOpacity=!0),a.snapshot&&(i.snapshot=a.snapshot,i.snapshot.latestValues=a.animationValues||a.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:o,resumingFrom:a}=i;o.onExitComplete&&o.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function ax(n,i,o){let a="";const c=n.x.translate/i.x,p=n.y.translate/i.y,d=(o==null?void 0:o.z)||0;if((c||p||d)&&(a=`translate3d(${c}px, ${p}px, ${d}px) `),(i.x!==1||i.y!==1)&&(a+=`scale(${1/i.x}, ${1/i.y}) `),o){const{transformPerspective:y,rotate:v,rotateX:w,rotateY:j,skewX:N,skewY:z}=o;y&&(a=`perspective(${y}px) ${a}`),v&&(a+=`rotate(${v}deg) `),w&&(a+=`rotateX(${w}deg) `),j&&(a+=`rotateY(${j}deg) `),N&&(a+=`skewX(${N}deg) `),z&&(a+=`skewY(${z}deg) `)}const m=n.x.scale*i.x,g=n.y.scale*i.y;return(m!==1||g!==1)&&(a+=`scale(${m}, ${g})`),a||"none"}const Vn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},fi=typeof window<"u"&&window.MotionDebug!==void 0,pl=["","X","Y","Z"],lx={visibility:"hidden"},jp=1e3;let ux=0;function hl(n,i,o,a){const{latestValues:c}=i;c[n]&&(o[n]=c[n],i.setStaticValue(n,0),a&&(a[n]=0))}function cm(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const o=vh(i);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:p}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",Se,!(c||p))}const{parent:a}=n;a&&!a.hasCheckedOptimisedAppear&&cm(a)}function dm({attachResizeListener:n,defaultParent:i,measureScroll:o,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},m=i==null?void 0:i()){this.id=ux++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,fi&&(Vn.totalNodes=Vn.resolvedTargetDeltas=Vn.recalculatedProjection=0),this.nodes.forEach(fx),this.nodes.forEach(yx),this.nodes.forEach(vx),this.nodes.forEach(px),fi&&window.MotionDebug.record(Vn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new X1)}addEventListener(d,m){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new ou),this.eventHandlers.get(d).add(m)}notifyListeners(d,...m){const g=this.eventHandlers.get(d);g&&g.notify(...m)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,m=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Y1(d),this.instance=d;const{layoutId:g,layout:y,visualElement:v}=this.options;if(v&&!v.current&&v.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),m&&(y||g)&&(this.isLayoutDirty=!0),n){let w;const j=()=>this.root.updateBlockedByResize=!1;n(d,()=>{this.root.updateBlockedByResize=!0,w&&w(),w=Z1(j,250),Ho.hasAnimatedSinceResize&&(Ho.hasAnimatedSinceResize=!1,this.nodes.forEach(Ep))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&v&&(g||y)&&this.addEventListener("didUpdate",({delta:w,hasLayoutChanged:j,hasRelativeTargetChanged:N,layout:z})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||v.getDefaultTransition()||jx,{onLayoutAnimationStart:D,onLayoutAnimationComplete:I}=v.getProps(),U=!this.targetLayout||!um(this.targetLayout,z)||N,H=!j&&N;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||H||j&&(U||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(w,H);const Q={...Jl(b,"layout"),onPlay:D,onComplete:I};(v.shouldReduceMotion||this.options.layoutRoot)&&(Q.delay=0,Q.type=!1),this.startAnimation(Q)}else j||Ep(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=z})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,vn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(xx),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&cm(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const w=this.path[v];w.shouldResetTransform=!0,w.updateScroll("snapshot"),w.options.layoutRoot&&w.willUpdate(!1)}const{layoutId:m,layout:g}=this.options;if(m===void 0&&!g)return;const y=this.getTransformTemplate();this.prevTransformTemplateValue=y?y(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Tp);return}this.isUpdating||this.nodes.forEach(mx),this.isUpdating=!1,this.nodes.forEach(gx),this.nodes.forEach(cx),this.nodes.forEach(dx),this.clearAllSnapshots();const m=Ot.now();Be.delta=Xt(0,1e3/60,m-Be.timestamp),Be.timestamp=m,Be.isProcessing=!0,il.update.process(Be),il.preRender.process(Be),il.render.process(Be),Be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(hx),this.sharedNodes.forEach(wx)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Re(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(m=!1),m){const g=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:g,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!lm(this.projectionDelta),g=this.getTransformTemplate(),y=g?g(this.latestValues,""):void 0,v=y!==this.prevTransformTemplateValue;d&&(m||zn(this.latestValues)||v)&&(c(this.instance,y),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const m=this.measurePageBox();let g=this.removeElementScroll(m);return d&&(g=this.removeTransform(g)),Tx(g),{animationId:this.root.animationId,measuredBox:m,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:m}=this.options;if(!m)return Re();const g=m.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(Ex))){const{scroll:v}=this.root;v&&(mr(g.x,v.offset.x),mr(g.y,v.offset.y))}return g}removeElementScroll(d){var m;const g=Re();if(St(g,d),!((m=this.scroll)===null||m===void 0)&&m.wasRoot)return g;for(let y=0;y<this.path.length;y++){const v=this.path[y],{scroll:w,options:j}=v;v!==this.root&&w&&j.layoutScroll&&(w.wasRoot&&St(g,d),mr(g.x,w.offset.x),mr(g.y,w.offset.y))}return g}applyTransform(d,m=!1){const g=Re();St(g,d);for(let y=0;y<this.path.length;y++){const v=this.path[y];!m&&v.options.layoutScroll&&v.scroll&&v!==v.root&&gr(g,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),zn(v.latestValues)&&gr(g,v.latestValues)}return zn(this.latestValues)&&gr(g,this.latestValues),g}removeTransform(d){const m=Re();St(m,d);for(let g=0;g<this.path.length;g++){const y=this.path[g];if(!y.instance||!zn(y.latestValues))continue;Al(y.latestValues)&&y.updateSnapshot();const v=Re(),w=y.measurePageBox();St(v,w),yp(m,y.latestValues,y.snapshot?y.snapshot.layoutBox:void 0,v)}return zn(this.latestValues)&&yp(m,this.latestValues),m}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var m;const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const y=!!this.resumingFrom||this!==g;if(!(d||y&&this.isSharedProjectionDirty||this.isProjectionDirty||!((m=this.parent)===null||m===void 0)&&m.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:w,layoutId:j}=this.options;if(!(!this.layout||!(w||j))){if(this.resolvedRelativeTargetAt=Be.timestamp,!this.targetDelta&&!this.relativeTarget){const N=this.getClosestProjectingParent();N&&N.layout&&this.animationProgress!==1?(this.relativeParent=N,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Re(),this.relativeTargetOrigin=Re(),gi(this.relativeTargetOrigin,this.layout.layoutBox,N.layout.layoutBox),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Re(),this.targetWithTransforms=Re()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),N1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):St(this.target,this.layout.layoutBox),nm(this.target,this.targetDelta)):St(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const N=this.getClosestProjectingParent();N&&!!N.resumingFrom==!!this.resumingFrom&&!N.options.layoutScroll&&N.target&&this.animationProgress!==1?(this.relativeParent=N,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Re(),this.relativeTargetOrigin=Re(),gi(this.relativeTargetOrigin,this.target,N.target),St(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}fi&&Vn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Al(this.parent.latestValues)||tm(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const m=this.getLead(),g=!!this.resumingFrom||this!==m;let y=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(y=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(y=!1),this.resolvedRelativeTargetAt===Be.timestamp&&(y=!1),y)return;const{layout:v,layoutId:w}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||w))return;St(this.layoutCorrected,this.layout.layoutBox);const j=this.treeScale.x,N=this.treeScale.y;I1(this.layoutCorrected,this.treeScale,this.path,g),m.layout&&!m.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(m.target=m.layout.layoutBox,m.targetWithTransforms=Re());const{target:z}=m;if(!z){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(hp(this.prevProjectionDelta.x,this.projectionDelta.x),hp(this.prevProjectionDelta.y,this.projectionDelta.y)),mi(this.projectionDelta,this.layoutCorrected,z,this.latestValues),(this.treeScale.x!==j||this.treeScale.y!==N||!kp(this.projectionDelta.x,this.prevProjectionDelta.x)||!kp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",z)),fi&&Vn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var m;if((m=this.options.visualElement)===null||m===void 0||m.scheduleRender(),d){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=hr(),this.projectionDelta=hr(),this.projectionDeltaWithTransform=hr()}setAnimationOrigin(d,m=!1){const g=this.snapshot,y=g?g.latestValues:{},v={...this.latestValues},w=hr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const j=Re(),N=g?g.source:void 0,z=this.layout?this.layout.source:void 0,b=N!==z,D=this.getStack(),I=!D||D.members.length<=1,U=!!(b&&!I&&this.options.crossfade===!0&&!this.path.some(kx));this.animationProgress=0;let H;this.mixTargetDelta=Q=>{const F=Q/1e3;Cp(w.x,d.x,F),Cp(w.y,d.y,F),this.setTargetDelta(w),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(gi(j,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Sx(this.relativeTarget,this.relativeTargetOrigin,j,F),H&&ox(this.relativeTarget,H)&&(this.isProjectionDirty=!1),H||(H=Re()),St(H,this.relativeTarget)),b&&(this.animationValues=v,J1(v,y,this.latestValues,F,U,I)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(vn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Se.update(()=>{Ho.hasAnimatedSinceResize=!0,this.currentAnimation=K1(0,jp,{...d,onUpdate:m=>{this.mixTargetDelta(m),d.onUpdate&&d.onUpdate(m)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(jp),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:m,target:g,layout:y,latestValues:v}=d;if(!(!m||!g||!y)){if(this!==d&&this.layout&&y&&fm(this.options.animationType,this.layout.layoutBox,y.layoutBox)){g=this.target||Re();const w=ht(this.layout.layoutBox.x);g.x.min=d.target.x.min,g.x.max=g.x.min+w;const j=ht(this.layout.layoutBox.y);g.y.min=d.target.y.min,g.y.max=g.y.min+j}St(m,g),gr(m,v),mi(this.projectionDeltaWithTransform,this.layoutCorrected,m,v)}}registerSharedNode(d,m){this.sharedNodes.has(d)||this.sharedNodes.set(d,new sx),this.sharedNodes.get(d).add(m);const y=m.options.initialPromotionConfig;m.promote({transition:y?y.transition:void 0,preserveFollowOpacity:y&&y.shouldPreserveFollowOpacity?y.shouldPreserveFollowOpacity(m):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:m}=this.options;return m?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:m}=this.options;return m?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:m,preserveFollowOpacity:g}={}){const y=this.getStack();y&&y.promote(this,g),d&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let m=!1;const{latestValues:g}=d;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(m=!0),!m)return;const y={};g.z&&hl("z",d,y,this.animationValues);for(let v=0;v<pl.length;v++)hl(`rotate${pl[v]}`,d,y,this.animationValues),hl(`skew${pl[v]}`,d,y,this.animationValues);d.render();for(const v in y)d.setStaticValue(v,y[v]),this.animationValues&&(this.animationValues[v]=y[v]);d.scheduleRender()}getProjectionStyles(d){var m,g;if(!this.instance||this.isSVG)return;if(!this.isVisible)return lx;const y={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,y.opacity="",y.pointerEvents=Wo(d==null?void 0:d.pointerEvents)||"",y.transform=v?v(this.latestValues,""):"none",y;const w=this.getLead();if(!this.projectionDelta||!this.layout||!w.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=Wo(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!zn(this.latestValues)&&(b.transform=v?v({},""):"none",this.hasProjected=!1),b}const j=w.animationValues||w.latestValues;this.applyTransformsToTarget(),y.transform=ax(this.projectionDeltaWithTransform,this.treeScale,j),v&&(y.transform=v(j,y.transform));const{x:N,y:z}=this.projectionDelta;y.transformOrigin=`${N.origin*100}% ${z.origin*100}% 0`,w.animationValues?y.opacity=w===this?(g=(m=j.opacity)!==null&&m!==void 0?m:this.latestValues.opacity)!==null&&g!==void 0?g:1:this.preserveOpacity?this.latestValues.opacity:j.opacityExit:y.opacity=w===this?j.opacity!==void 0?j.opacity:"":j.opacityExit!==void 0?j.opacityExit:0;for(const b in Ko){if(j[b]===void 0)continue;const{correct:D,applyTo:I}=Ko[b],U=y.transform==="none"?j[b]:D(j[b],w);if(I){const H=I.length;for(let Q=0;Q<H;Q++)y[I[Q]]=U}else y[b]=U}return this.options.layoutId&&(y.pointerEvents=w===this?Wo(d==null?void 0:d.pointerEvents)||"":"none"),y}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var m;return(m=d.currentAnimation)===null||m===void 0?void 0:m.stop()}),this.root.nodes.forEach(Tp),this.root.sharedNodes.clear()}}}function cx(n){n.updateLayout()}function dx(n){var i;const o=((i=n.resumeFrom)===null||i===void 0?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&o&&n.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=n.layout,{animationType:p}=n.options,d=o.source!==n.layout.source;p==="size"?kt(w=>{const j=d?o.measuredBox[w]:o.layoutBox[w],N=ht(j);j.min=a[w].min,j.max=j.min+N}):fm(p,o.layoutBox,a)&&kt(w=>{const j=d?o.measuredBox[w]:o.layoutBox[w],N=ht(a[w]);j.max=j.min+N,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[w].max=n.relativeTarget[w].min+N)});const m=hr();mi(m,a,o.layoutBox);const g=hr();d?mi(g,n.applyTransform(c,!0),o.measuredBox):mi(g,a,o.layoutBox);const y=!lm(m);let v=!1;if(!n.resumeFrom){const w=n.getClosestProjectingParent();if(w&&!w.resumeFrom){const{snapshot:j,layout:N}=w;if(j&&N){const z=Re();gi(z,o.layoutBox,j.layoutBox);const b=Re();gi(b,a,N.layoutBox),um(z,b)||(v=!0),w.options.layoutRoot&&(n.relativeTarget=b,n.relativeTargetOrigin=z,n.relativeParent=w)}}}n.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:g,layoutDelta:m,hasLayoutChanged:y,hasRelativeTargetChanged:v})}else if(n.isLead()){const{onExitComplete:a}=n.options;a&&a()}n.options.transition=void 0}function fx(n){fi&&Vn.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function px(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function hx(n){n.clearSnapshot()}function Tp(n){n.clearMeasurements()}function mx(n){n.isLayoutDirty=!1}function gx(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function Ep(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function yx(n){n.resolveTargetDelta()}function vx(n){n.calcProjection()}function xx(n){n.resetSkewAndRotation()}function wx(n){n.removeLeadSnapshot()}function Cp(n,i,o){n.translate=Ce(i.translate,0,o),n.scale=Ce(i.scale,1,o),n.origin=i.origin,n.originPoint=i.originPoint}function Pp(n,i,o,a){n.min=Ce(i.min,o.min,a),n.max=Ce(i.max,o.max,a)}function Sx(n,i,o,a){Pp(n.x,i.x,o.x,a),Pp(n.y,i.y,o.y,a)}function kx(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const jx={duration:.45,ease:[.4,0,.1,1]},Np=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),bp=Np("applewebkit/")&&!Np("chrome/")?Math.round:pt;function Ap(n){n.min=bp(n.min),n.max=bp(n.max)}function Tx(n){Ap(n.x),Ap(n.y)}function fm(n,i,o){return n==="position"||n==="preserve-aspect"&&!P1(Sp(i),Sp(o),.2)}function Ex(n){var i;return n!==n.root&&((i=n.scroll)===null||i===void 0?void 0:i.wasRoot)}const Cx=dm({attachResizeListener:(n,i)=>ki(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ml={current:void 0},pm=dm({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ml.current){const n=new Cx({});n.mount(window),n.setOptions({layoutScroll:!0}),ml.current=n}return ml.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Px={pan:{Feature:W1},drag:{Feature:U1,ProjectionNode:pm,MeasureLayout:om}};function Mp(n,i,o){const{props:a}=n;n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,p=a[c];p&&Se.postRender(()=>p(i,Ci(i)))}class Nx extends wn{mount(){const{current:i}=this.node;i&&(this.unmount=Py(i,o=>(Mp(this.node,o,"Start"),a=>Mp(this.node,a,"End"))))}unmount(){}}class bx extends wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ei(ki(this.node.current,"focus",()=>this.onFocus()),ki(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Rp(n,i,o){const{props:a}=n;n.animationState&&a.whileTap&&n.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),p=a[c];p&&Se.postRender(()=>p(i,Ci(i)))}class Ax extends wn{mount(){const{current:i}=this.node;i&&(this.unmount=My(i,o=>(Rp(this.node,o,"Start"),(a,{success:c})=>Rp(this.node,a,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Rl=new WeakMap,gl=new WeakMap,Mx=n=>{const i=Rl.get(n.target);i&&i(n)},Rx=n=>{n.forEach(Mx)};function Dx({root:n,...i}){const o=n||document;gl.has(o)||gl.set(o,{});const a=gl.get(o),c=JSON.stringify(i);return a[c]||(a[c]=new IntersectionObserver(Rx,{root:n,...i})),a[c]}function Lx(n,i,o){const a=Dx(i);return Rl.set(n,o),a.observe(n),()=>{Rl.delete(n),a.unobserve(n)}}const zx={some:0,all:1};class Vx extends wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:o,margin:a,amount:c="some",once:p}=i,d={root:o?o.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:zx[c]},m=g=>{const{isIntersecting:y}=g;if(this.isInView===y||(this.isInView=y,p&&!y&&this.hasEnteredView))return;y&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",y);const{onViewportEnter:v,onViewportLeave:w}=this.node.getProps(),j=y?v:w;j&&j(g)};return Lx(this.node.current,d,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:o}=this.node;["amount","margin","root"].some(Ix(i,o))&&this.startObserver()}unmount(){}}function Ix({viewport:n={}},{viewport:i={}}={}){return o=>n[o]!==i[o]}const _x={inView:{Feature:Vx},tap:{Feature:Ax},focus:{Feature:bx},hover:{Feature:Nx}},Ox={layout:{ProjectionNode:pm,MeasureLayout:om}},Dl={current:null},hm={current:!1};function Fx(){if(hm.current=!0,!!_l)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Dl.current=n.matches;n.addListener(i),i()}else Dl.current=!1}const Bx=[...Oh,Ge,xn],Ux=n=>Bx.find(_h(n)),Dp=new WeakMap;function Wx(n,i,o){for(const a in i){const c=i[a],p=o[a];if(Ke(c))n.addValue(a,c);else if(Ke(p))n.addValue(a,wi(c,{owner:n}));else if(p!==c)if(n.hasValue(a)){const d=n.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(a);n.addValue(a,wi(d!==void 0?d:c,{owner:n}))}}for(const a in o)i[a]===void 0&&n.removeValue(a);return i}const Lp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class $x{scrapeMotionValuesFromProps(i,o,a){return{}}constructor({parent:i,props:o,presenceContext:a,reducedMotionConfig:c,blockInitialAnimation:p,visualState:d},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=du,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const N=Ot.now();this.renderScheduledAt<N&&(this.renderScheduledAt=N,Se.render(this.render,!1,!0))};const{latestValues:g,renderState:y,onUpdate:v}=d;this.onUpdate=v,this.latestValues=g,this.baseTarget={...g},this.initialValues=o.initial?{...g}:{},this.renderState=y,this.parent=i,this.props=o,this.presenceContext=a,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=m,this.blockInitialAnimation=!!p,this.isControllingVariants=rs(o),this.isVariantNode=Kp(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:w,...j}=this.scrapeMotionValuesFromProps(o,{},this);for(const N in j){const z=j[N];g[N]!==void 0&&Ke(z)&&z.set(g[N],!1)}}mount(i){this.current=i,Dp.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),hm.current||Fx(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Dl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Dp.delete(this.current),this.projection&&this.projection.unmount(),vn(this.notifyUpdate),vn(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const o=this.features[i];o&&(o.unmount(),o.isMounted=!1)}this.current=null}bindToMotionValue(i,o){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const a=Fn.has(i),c=o.on("change",m=>{this.latestValues[i]=m,this.props.onUpdate&&Se.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),p=o.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,o)),this.valueSubscriptions.set(i,()=>{c(),p(),d&&d(),o.owner&&o.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in xr){const o=xr[i];if(!o)continue;const{isEnabled:a,Feature:c}=o;if(!this.features[i]&&c&&a(this.props)&&(this.features[i]=new c(this)),this.features[i]){const p=this.features[i];p.isMounted?p.update():(p.mount(),p.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Re()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,o){this.latestValues[i]=o}update(i,o){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let a=0;a<Lp.length;a++){const c=Lp[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const p="on"+c,d=i[p];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Wx(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(i),()=>o.variantChildren.delete(i)}addValue(i,o){const a=this.values.get(i);o!==a&&(a&&this.removeValue(i),this.bindToMotionValue(i,o),this.values.set(i,o),this.latestValues[i]=o.get())}removeValue(i){this.values.delete(i);const o=this.valueSubscriptions.get(i);o&&(o(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,o){if(this.props.values&&this.props.values[i])return this.props.values[i];let a=this.values.get(i);return a===void 0&&o!==void 0&&(a=wi(o===null?void 0:o,{owner:this}),this.addValue(i,a)),a}readValue(i,o){var a;let c=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(a=this.getBaseTargetFromProps(this.props,i))!==null&&a!==void 0?a:this.readValueFromInstance(this.current,i,this.options);return c!=null&&(typeof c=="string"&&(Vh(c)||Ph(c))?c=parseFloat(c):!Ux(c)&&xn.test(o)&&(c=Dh(i,o)),this.setBaseTarget(i,Ke(c)?c.get():c)),Ke(c)?c.get():c}setBaseTarget(i,o){this.baseTarget[i]=o}getBaseTarget(i){var o;const{initial:a}=this.props;let c;if(typeof a=="string"||typeof a=="object"){const d=Hl(this.props,a,(o=this.presenceContext)===null||o===void 0?void 0:o.custom);d&&(c=d[i])}if(a&&c!==void 0)return c;const p=this.getBaseTargetFromProps(this.props,i);return p!==void 0&&!Ke(p)?p:this.initialValues[i]!==void 0&&c===void 0?void 0:this.baseTarget[i]}on(i,o){return this.events[i]||(this.events[i]=new ou),this.events[i].add(o)}notify(i,...o){this.events[i]&&this.events[i].notify(...o)}}class mm extends $x{constructor(){super(...arguments),this.KeyframeResolver=Fh}sortInstanceNodePosition(i,o){return i.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(i,o){return i.style?i.style[o]:void 0}removeValueFromRenderState(i,{vars:o,style:a}){delete o[i],delete a[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;Ke(i)&&(this.childSubscription=i.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}function Hx(n){return window.getComputedStyle(n)}class Gx extends mm{constructor(){super(...arguments),this.type="html",this.renderInstance=nh}readValueFromInstance(i,o){if(Fn.has(o)){const a=cu(o);return a&&a.default||0}else{const a=Hx(i),c=(Jp(o)?a.getPropertyValue(o):a[o])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:o}){return rm(i,o)}build(i,o,a){Yl(i,o,a.transformTemplate)}scrapeMotionValuesFromProps(i,o,a){return ql(i,o,a)}}class Kx extends mm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Re}getBaseTargetFromProps(i,o){return i[o]}readValueFromInstance(i,o){if(Fn.has(o)){const a=cu(o);return a&&a.default||0}return o=rh.has(o)?o:Ul(o),i.getAttribute(o)}scrapeMotionValuesFromProps(i,o,a){return sh(i,o,a)}build(i,o,a){Ql(i,o,this.isSVGTag,a.transformTemplate)}renderInstance(i,o,a,c){ih(i,o,a,c)}mount(i){this.isSVGTag=Zl(i.tagName),super.mount(i)}}const Yx=(n,i)=>$l(n)?new Kx(i):new Gx(i,{allowProjection:n!==O.Fragment}),Qx=wy({...v1,..._x,...Px,...Ox},Yx),ne=z0(Qx);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gm=(...n)=>n.filter((i,o,a)=>!!i&&i.trim()!==""&&a.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=O.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:c="",children:p,iconNode:d,...m},g)=>O.createElement("svg",{ref:g,...Zx,width:i,height:i,stroke:n,strokeWidth:a?Number(o)*24/Number(i):o,className:gm("lucide",c),...m},[...d.map(([y,v])=>O.createElement(y,v)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=(n,i)=>{const o=O.forwardRef(({className:a,...c},p)=>O.createElement(qx,{ref:p,iconNode:i,className:gm(`lucide-${Xx(n)}`,a),...c}));return o.displayName=`${n}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=Ye("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=Ye("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=Ye("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=Ye("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=Ye("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=Ye("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=Ye("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=Ye("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=Ye("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=Ye("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=Ye("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=Ye("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=Ye("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=Ye("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=Ye("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=Ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),pe={couple:{groom:"Golu (Divya)",bride:"Aastha",monogram:"G&A"},date:{iso:"2026-11-26T00:00:00+05:30",envelope:"26 . 11 . 2026",hero:"Thursday, 26 November 2026"},location:{city:"Dausa",venue:"The Ram Lee Grand, Dausa",mapsUrl:"https://www.google.com/maps/place/THE+RAM+LEE+GRAND/@26.910767,76.328255,17z/data=!3m1!4b1!4m9!3m8!1s0x396d8d73de3a22af:0x231c83b658e8453e!5m2!4m1!1i2!8m2!3d26.9107622!4d76.3308299!16s%2Fg%2F11tp0md3k0?entry=ttu&g_ep=EgoyMDI2MTExNi4wIKXMDSoASAFQAw%3D%3D"},phone:"+919782208204",families:{groom:{name:"Golu (Divya)",parents:"Mrs. Pinky & Mr. Omprakesh Sakuniya",grandparents:"Late Mrs. Shanti Devi & Late Mr. Ramgopal Sakuniya"},bride:{name:"Aastha",parents:"Mrs. Lata & Mr. Prem Prakash Tamboliya",grandparents:"Late Mrs. Ram payari & Late Mr. Rameshwar Lal Tamboliya"}},events:[{title:"तेल",subtitle:"TUESDAY",date:"Tuesday, 24 November 2026",time:"प्रातः 9 बजे",venue:"खण्डेलवाल वैश्य समाज धर्मशाला, भाण्डारेज",symbol:"☼",tone:"saffron"},{title:"मेहंदी",subtitle:"TUESDAY",date:"Tuesday, 24 November 2026",time:"दोपहर 11 बजे",venue:"खण्डेलवाल वैश्य समाज धर्मशाला, भाण्डारेज",symbol:"✧",tone:"rose"},{title:"मंगल चाक",subtitle:"TUESDAY",date:"Tuesday, 24 November 2026",time:"सायं 4 बजे",venue:"खण्डेलवाल वैश्य समाज धर्मशाला, भाण्डारेज",symbol:"♫",tone:"plum"},{title:"लग्न",subtitle:"WEDNESDAY",date:"Wednesday, 25 November 2026",time:"प्रातः 10 बजे",venue:"शिवम लॉन, भाण्डारेज",symbol:"❦",tone:"red"},{title:"हल्दी",subtitle:"WEDNESDAY",date:"Wednesday, 25 November 2026",time:"दोपहर 12 बजे",venue:"शिवम लॉन, भाण्डारेज",symbol:"☼",tone:"green"},{title:"प्रीतिभोज",subtitle:"WEDNESDAY",date:"Wednesday, 25 November 2026",time:"सायं 4 बजे से",venue:"शिवम लॉन, भाण्डारेज",symbol:"✧",tone:"rose"},{title:"निकासी",subtitle:"THURSDAY",date:"Thursday, 26 November 2026",time:"प्रातः 9 बजे",venue:"दी रामोली ग्राण्ड होटल, सिविल लाइन के पास, दौसा",symbol:"♫",tone:"plum"},{title:"पाणिग्रहण संस्कार",subtitle:"THURSDAY",date:"Thursday, 26 November 2026",time:"दोपहर 12 बजे",venue:"दी रामोली ग्राण्ड होटल, सिविल लाइन के पास, दौसा",symbol:"❦",tone:"red"},{title:"आशीर्वाद समारोह एवं प्रीतिभोज",subtitle:"THURSDAY",date:"Thursday, 26 November 2026",time:"सायं 6 बजे से",venue:"दी रामोली ग्राण्ड होटल, सिविल लाइन के पास, दौसा",symbol:"☼",tone:"green"}]};function uw(){return f.jsxs("svg",{viewBox:"0 0 100 100",className:"ganesh-icon",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",role:"img","aria-label":"Lord Ganesha",children:[f.jsx("path",{d:"M35 29 L38 13 L50 21 L62 13 L65 29"}),f.jsx("path",{d:"M38 29 Q50 35 62 29"}),f.jsx("path",{d:"M43 19 L50 12 L57 19"}),f.jsx("circle",{cx:"50",cy:"12",r:"2"}),f.jsx("path",{d:"M37 36 C24 26 12 34 17 49 C20 58 29 57 38 48"}),f.jsx("path",{d:"M63 36 C76 26 88 34 83 49 C80 58 71 57 62 48"}),f.jsx("path",{d:"M36 31 Q50 25 64 31 L65 48 Q64 63 50 68 Q36 63 35 48 Z"}),f.jsx("path",{d:"M40 43 Q44 40 48 43"}),f.jsx("path",{d:"M52 43 Q56 40 60 43"}),f.jsx("path",{d:"M46 35 Q50 32 54 35"}),f.jsx("path",{d:"M48 48 C48 57 57 57 58 64 C60 72 51 78 43 72"}),f.jsx("path",{d:"M43 72 Q39 68 42 65"}),f.jsx("path",{d:"M38 51 L32 58"}),f.jsx("path",{d:"M62 51 L68 58"}),f.jsx("path",{d:"M36 68 Q24 74 27 88 Q50 98 73 88 Q76 74 64 68"}),f.jsx("path",{d:"M40 73 Q50 82 60 73"}),f.jsx("path",{d:"M50 80 L50 92"}),f.jsx("path",{d:"M29 77 L19 72"}),f.jsx("path",{d:"M71 77 L81 72"}),f.jsx("circle",{cx:"50",cy:"27",r:"2"}),f.jsx("path",{d:"M22 91 L28 94 M78 91 L72 94"})]})}function cw({onOpen:n}){const[i,o]=O.useState(!1),a=()=>{i||(o(!0),window.setTimeout(()=>{n==null||n()},1900))};return f.jsxs(ne.section,{className:"royal-envelope-screen",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,scale:1.04,filter:"blur(12px)",transition:{duration:.9}},children:[f.jsx("div",{className:"envelope-bg"}),f.jsx("div",{className:"envelope-bg-overlay"}),f.jsx("div",{className:"envelope-glow envelope-glow-one"}),f.jsx("div",{className:"envelope-glow envelope-glow-two"}),f.jsx("div",{className:"envelope-particles",children:Array.from({length:24}).map((c,p)=>f.jsx("span",{style:{"--particle":p}},p))}),f.jsx("div",{className:"corner-ornament top-left",children:"✧"}),f.jsx("div",{className:"corner-ornament top-right",children:"✧"}),f.jsx("div",{className:"corner-ornament bottom-left",children:"✧"}),f.jsx("div",{className:"corner-ornament bottom-right",children:"✧"}),f.jsxs(ne.div,{className:"royal-envelope-container",initial:{opacity:0,y:35,scale:.94},animate:{opacity:1,y:0,scale:1},transition:{duration:1,ease:[.22,1,.36,1]},children:[f.jsxs("div",{className:"envelope-heading",children:[f.jsx("div",{className:"heading-ganesh",children:f.jsx(uw,{})}),f.jsx("p",{className:"heading-blessing",children:"॥ SHREE GANESHAYA NAMAH ॥"}),f.jsxs("div",{className:"heading-decoration",children:[f.jsx("span",{}),f.jsx(On,{size:15}),f.jsx("span",{})]}),f.jsx("p",{className:"heading-location",children:"A ROYAL WEDDING INVITATION"})]}),f.jsx("div",{className:"envelope-scene",children:f.jsx("div",{className:"envelope-perspective",children:f.jsxs(ne.div,{className:"royal-envelope",animate:i?{y:35,scale:.97}:{y:[0,-5,0],scale:1},transition:i?{duration:.8,ease:"easeInOut"}:{duration:4,repeat:1/0,ease:"easeInOut"},children:[f.jsx("div",{className:"envelope-shadow"}),f.jsx("div",{className:"envelope-back"}),f.jsx(ne.div,{className:"royal-letter",initial:!1,animate:i?{y:-205,scale:1.02,opacity:1}:{y:0,scale:.96,opacity:.96},transition:{duration:1.15,delay:i?.45:0,ease:[.22,1,.36,1]},children:f.jsx("div",{className:"letter-border",children:f.jsxs("div",{className:"letter-inner",children:[f.jsxs("div",{className:"royal-divider",children:[f.jsx("span",{}),f.jsx("b",{children:"✧"}),f.jsx("span",{})]}),f.jsx("p",{className:"letter-small",children:"WITH THE BLESSINGS OF OUR FAMILIES"}),f.jsx("div",{className:"letter-line"}),f.jsx("p",{className:"letter-invite",children:"JOYFULLY INVITE YOU TO CELEBRATE"}),f.jsxs("h2",{children:[pe.couple.groom,f.jsx("span",{children:"&"}),pe.couple.bride]}),f.jsxs("div",{className:"letter-heart",children:[f.jsx("span",{}),f.jsx(Rt,{size:13,fill:"currentColor"}),f.jsx("span",{})]}),f.jsx("p",{className:"letter-date",children:pe.date.envelope}),f.jsx("p",{className:"letter-place",children:"KISHANGARH · RAJASTHAN"}),f.jsx("div",{className:"royal-bottom-ornament",children:"◇"})]})})}),f.jsxs("div",{className:"envelope-front",children:[f.jsx("div",{className:"front-left-fold"}),f.jsx("div",{className:"front-right-fold"}),f.jsx("div",{className:"front-bottom-fold"}),f.jsx("div",{className:"front-border"}),f.jsxs("div",{className:"envelope-front-content",children:[f.jsx("div",{className:"front-floral",children:"✧"}),f.jsx("p",{className:"front-kicker",children:"THE BEGINNING OF FOREVER"}),f.jsx("p",{className:"front-title",children:"WEDDING INVITATION"}),f.jsxs("h1",{children:[pe.couple.groom,f.jsx("span",{children:"&"}),pe.couple.bride]}),f.jsxs("div",{className:"front-divider",children:[f.jsx("span",{}),f.jsx(On,{size:14}),f.jsx("span",{})]}),f.jsx("p",{className:"front-date",children:pe.date.envelope}),f.jsx("p",{className:"front-venue",children:pe.location.venue})]})]}),f.jsx(ne.div,{className:"envelope-flap",animate:i?{rotateX:-180}:{rotateX:0},transition:{duration:.95,delay:i?.12:0,ease:[.6,0,.3,1]},children:f.jsx("div",{className:"flap-inner",children:f.jsx("div",{className:"flap-ornament",children:"◇"})})}),f.jsx(yr,{children:!i&&f.jsx(ne.button,{type:"button",className:"royal-wax-seal",onClick:a,"aria-label":`Open ${pe.couple.groom} and ${pe.couple.bride}'s wedding invitation`,initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.5,opacity:0,rotate:25},transition:{duration:.45,ease:"backOut"},whileHover:{scale:1.1,rotate:-5},whileTap:{scale:.88},children:f.jsxs("span",{className:"wax-outer-ring",children:[f.jsx("span",{className:"wax-monogram",children:pe.couple.monogram}),f.jsx("span",{className:"wax-small-detail",children:"✧"})]})})}),f.jsx("div",{className:"envelope-gold-flecks",children:Array.from({length:12}).map((c,p)=>f.jsx("i",{},p))})]})})}),f.jsxs(ne.div,{className:"envelope-instruction",animate:i?{opacity:0,y:10}:{opacity:1,y:0},children:[f.jsx(ne.div,{className:"instruction-icon",animate:{y:[0,5,0]},transition:{duration:1.5,repeat:1/0},children:f.jsx(Jx,{size:15})}),f.jsx("p",{children:i?"PREPARING YOUR INVITATION":"TOUCH THE GOLDEN SEAL TO OPEN"})]}),f.jsxs("div",{className:"envelope-footer",children:[f.jsx("span",{children:pe.date.hero}),f.jsx("i",{children:"✧"}),f.jsx("span",{children:"WITH LOVE, WE INVITE YOU"})]})]}),f.jsx(yr,{children:i&&f.jsx(ne.div,{className:"envelope-opening-light",initial:{opacity:0,scale:.2},animate:{opacity:[0,.7,1,0],scale:[.2,1.1,2.5,4]},exit:{opacity:0},transition:{duration:1.5,ease:"easeOut"}})}),f.jsx("style",{children:`
        .royal-envelope-screen {
          --env-gold: #d9ad66;
          --env-light: #f8e6c1;
          --env-cream: #fff4dc;
          position: fixed;
          inset: 0;
          z-index: 9999;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 25px 18px;
          color: var(--env-cream);
          background: #24110f;
          isolation: isolate;
        }

        .envelope-bg {
          position: absolute;
          inset: 0;
          z-index: -3;
          background:
            radial-gradient(ellipse at 50% 35%, rgba(135, 74, 43, 0.55), transparent 55%),
            linear-gradient(135deg, #160b0d, #45201c 48%, #170c0c);
        }

        .envelope-bg-overlay {
          position: absolute;
          inset: 0;
          z-index: -2;
          background: radial-gradient(ellipse at center, transparent 20%, rgba(8, 4, 5, 0.6) 100%);
        }

        .envelope-glow {
          position: absolute;
          z-index: -1;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: rgba(221, 166, 91, 0.15);
          filter: blur(100px);
          pointer-events: none;
        }

        .envelope-glow-one {
          top: -170px;
          left: -100px;
        }

        .envelope-glow-two {
          right: -140px;
          bottom: -180px;
        }

        .envelope-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .envelope-particles span {
          position: absolute;
          left: calc(var(--particle) * 4.2% + 2%);
          bottom: -12px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #f9d18c;
          box-shadow: 0 0 12px 3px rgba(243, 185, 94, 0.55);
          opacity: 0;
          animation: envelopeParticle calc(7s + var(--particle) * 0.28s) linear infinite;
          animation-delay: calc(var(--particle) * -0.65s);
        }

        @keyframes envelopeParticle {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-110vh) scale(1.3); opacity: 0; }
        }

        .corner-ornament {
          position: absolute;
          color: rgba(219, 176, 109, 0.55);
          font-size: 55px;
          line-height: 1;
          pointer-events: none;
        }

        .top-left { top: 20px; left: 25px; }
        .top-right { top: 20px; right: 25px; }
        .bottom-left { bottom: 20px; left: 25px; }
        .bottom-right { bottom: 20px; right: 25px; }

        .royal-envelope-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 660px;
          text-align: center;
        }

        .envelope-heading {
          margin-bottom: 27px;
        }

        .heading-ganesh {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          color: #e6bd7b;
          filter: drop-shadow(0 0 12px rgba(225, 172, 97, 0.4));
        }

        .ganesh-icon {
          width: 65px;
          height: 65px;
        }

        .heading-blessing {
          font-family: Georgia, serif;
          font-size: 11px;
          letter-spacing: 3px;
          color: #f3d9ac;
          margin: 0;
        }

        .heading-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: var(--env-gold);
          margin: 17px auto;
        }

        .heading-decoration span {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--env-gold));
        }

        .heading-decoration span:last-child {
          transform: rotate(180deg);
        }

        .heading-location {
          font-size: 9px;
          letter-spacing: 4px;
          color: #e7c99b;
          margin: 0;
        }

        .envelope-scene {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          perspective: 1400px;
        }

        .envelope-perspective {
          width: min(100%, 440px);
          perspective: 1400px;
        }

        .royal-envelope {
          position: relative;
          width: 100%;
          aspect-ratio: 1.55 / 1;
          transform-style: preserve-3d;
          isolation: isolate;
        }

        .envelope-shadow {
          position: absolute;
          inset: 12% 5% -12%;
          border-radius: 12px;
          background: #080405;
          filter: blur(25px);
          opacity: 0.7;
          z-index: -2;
        }

        .envelope-back {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(145deg, #8e5937, #5a3028 60%, #3b1d1c);
          border: 1px solid #d8ad69;
          border-radius: 7px;
          box-shadow: inset 0 0 25px rgba(20, 8, 7, 0.35);
        }

        .royal-letter {
          position: absolute;
          z-index: 2;
          left: 9%;
          top: 5%;
          width: 82%;
          height: 90%;
          padding: 9px;
          background: #f8edda;
          color: #593a25;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
          transform-origin: bottom center;
        }

        .letter-border {
          width: 100%;
          height: 100%;
          border: 1px solid #c9a46a;
          padding: 5px;
        }

        .letter-inner {
          height: 100%;
          border: 1px solid rgba(190, 147, 84, 0.55);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px;
        }

        .royal-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #ad7b3f;
          margin-bottom: 9px;
        }

        .royal-divider span,
        .letter-heart span,
        .front-divider span {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #b98a4c);
        }

        .royal-divider span:last-child,
        .letter-heart span:last-child,
        .front-divider span:last-child {
          transform: rotate(180deg);
        }

        .royal-divider b {
          font-size: 22px;
          font-weight: 400;
        }

        .letter-small {
          font-size: 7px;
          letter-spacing: 1.5px;
          margin: 0 0 8px;
        }

        .letter-line {
          width: 65%;
          height: 1px;
          background: #c7a46e;
          margin: 5px 0 10px;
        }

        .letter-invite {
          font-size: 7px;
          letter-spacing: 1px;
          margin: 0;
        }

        .letter-inner h2 {
          font-family: Georgia, serif;
          font-size: clamp(18px, 4vw, 27px);
          font-weight: 400;
          margin: 10px 0;
          line-height: 1.15;
        }

        .letter-inner h2 span {
          display: block;
          font-size: 15px;
          color: #ae814b;
          font-style: italic;
          margin: 3px 0;
        }

        .letter-heart {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #a96d50;
          margin: 4px 0 8px;
        }

        .letter-heart span { width: 24px; }

        .letter-date {
          font-family: Georgia, serif;
          font-size: 12px;
          margin: 0 0 6px;
        }

        .letter-place {
          font-size: 7px;
          letter-spacing: 2px;
          margin: 0;
        }

        .royal-bottom-ornament {
          color: #b98a4c;
          font-size: 22px;
          margin-top: 8px;
        }

        .envelope-front {
          position: absolute;
          inset: 0;
          z-index: 4;
          overflow: hidden;
          border-radius: 7px;
          background: linear-gradient(145deg, #824d35, #613128 55%, #482321);
          border: 1px solid rgba(236, 196, 126, 0.8);
          box-shadow: inset 0 0 30px rgba(24, 9, 8, 0.35);
        }

        .front-left-fold,
        .front-right-fold,
        .front-bottom-fold {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .front-left-fold {
          background: linear-gradient(135deg, rgba(207, 156, 91, 0.28), transparent 50%);
          clip-path: polygon(0 0, 52% 51%, 0 100%);
        }

        .front-right-fold {
          background: linear-gradient(225deg, rgba(32, 10, 9, 0.28), transparent 50%);
          clip-path: polygon(100% 0, 48% 51%, 100% 100%);
        }

        .front-bottom-fold {
          background: linear-gradient(0deg, #4b2522, #81503a);
          clip-path: polygon(0 100%, 50% 43%, 100% 100%);
        }

        .front-border {
          position: absolute;
          inset: 10px;
          border: 1px solid rgba(236, 195, 125, 0.55);
          pointer-events: none;
        }

        .envelope-front-content {
          position: absolute;
          z-index: 5;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
        }

        .front-floral {
          font-size: 34px;
          line-height: 1;
          color: #e4bd7b;
          margin-bottom: 9px;
          text-shadow: 0 0 15px rgba(255, 215, 151, 0.35);
        }

        .front-kicker {
          font-size: 8px;
          letter-spacing: 2px;
          color: #f0d7ad;
          margin: 0 0 7px;
        }

        .front-title {
          font-size: 9px;
          letter-spacing: 3px;
          color: #f3d6a6;
          margin: 0 0 10px;
        }

        .envelope-front-content h1 {
          font-family: Georgia, serif;
          font-size: clamp(24px, 5vw, 37px);
          font-weight: 400;
          line-height: 1.15;
          color: #ffdfaa;
          text-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
          margin: 0;
        }

        .envelope-front-content h1 span {
          display: block;
          font-size: 17px;
          font-style: italic;
          color: #e5c18c;
          margin: 3px 0;
        }

        .front-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #edcc91;
          margin: 11px 0;
        }

        .front-divider span {
          width: 28px;
          background: #d4ad72;
        }

        .front-date {
          color: #f5dfba;
          font-family: Georgia, serif;
          font-size: 12px;
          margin: 0 0 6px;
        }

        .front-venue {
          font-size: 8px;
          letter-spacing: 1px;
          color: #e9cba0;
          margin: 0;
        }

        .envelope-flap {
          position: absolute;
          z-index: 7;
          top: 0;
          left: 0;
          width: 100%;
          height: 58%;
          transform-origin: top center;
          transform-style: preserve-3d;
          backface-visibility: visible;
          background: linear-gradient(155deg, #a66d46, #79432f 65%, #58302a);
          clip-path: polygon(0 0, 100% 0, 50% 100%);
          border-top: 1px solid #e5bd7b;
        }

        .flap-inner {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          padding-top: 20px;
          background: linear-gradient(145deg, rgba(255, 220, 159, 0.16), transparent);
        }

        .flap-ornament {
          color: #f2d49e;
          font-size: 30px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .royal-wax-seal {
          position: absolute;
          z-index: 10;
          left: 43%;
          top: 53%;
          transform: translate(-50%, -50%);
          width: 75px;
          height: 75px;
          padding: 0;
          border: 1px solid rgba(255, 221, 153, 0.8);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 25%, #d9a65e, #9d5d36 55%, #633323);
          color: #ffe6b3;
          box-shadow:
            0 5px 14px rgba(0, 0, 0, 0.4),
            inset 0 0 0 4px rgba(255, 226, 172, 0.12),
            inset 0 0 0 7px rgba(255, 226, 172, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .wax-outer-ring {
          width: 57px;
          height: 57px;
          border: 1px solid rgba(255, 229, 177, 0.8);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }

        .wax-monogram {
          font-family: Georgia, serif;
          font-size: 19px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #fff0ce;
          line-height: 1;
        }

        .wax-small-detail {
          font-size: 9px;
          color: #f5d397;
          line-height: 1;
        }

        .envelope-gold-flecks {
          position: absolute;
          inset: 0;
          z-index: 6;
          pointer-events: none;
        }

        .envelope-gold-flecks i {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #f5d397;
          border-radius: 50%;
          box-shadow: 0 0 8px #e4b86d;
        }

        .envelope-gold-flecks i:nth-child(1) { top: 18%; left: 14%; }
        .envelope-gold-flecks i:nth-child(2) { top: 24%; right: 15%; }
        .envelope-gold-flecks i:nth-child(3) { bottom: 19%; left: 17%; }
        .envelope-gold-flecks i:nth-child(4) { bottom: 20%; right: 17%; }
        .envelope-gold-flecks i:nth-child(5) { top: 42%; left: 8%; }
        .envelope-gold-flecks i:nth-child(6) { top: 43%; right: 8%; }
        .envelope-gold-flecks i:nth-child(7) { top: 13%; left: 48%; }
        .envelope-gold-flecks i:nth-child(8) { bottom: 13%; left: 49%; }
        .envelope-gold-flecks i:nth-child(9) { top: 32%; left: 27%; }
        .envelope-gold-flecks i:nth-child(10) { top: 32%; right: 27%; }
        .envelope-gold-flecks i:nth-child(11) { bottom: 32%; left: 29%; }
        .envelope-gold-flecks i:nth-child(12) { bottom: 32%; right: 29%; }

        .envelope-instruction {
          margin-top: 40px;
          color: #f1d7a8;
        }

        .instruction-icon {
          color: var(--env-gold);
          margin-bottom: 9px;
        }

        .envelope-instruction p {
          font-size: 9px;
          letter-spacing: 3px;
          margin: 0;
        }

        .envelope-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          color: #cfae7c;
          font-size: 9px;
          letter-spacing: 2px;
          margin-top: 27px;
        }

        .envelope-footer i {
          color: #e4bb77;
          font-style: normal;
          font-size: 13px;
        }

        .envelope-opening-light {
          position: absolute;
          z-index: 20;
          left: 50%;
          top: 50%;
          width: 200px;
          height: 200px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(255, 232, 180, 0.9), rgba(222, 168, 92, 0.35) 40%, transparent 70%);
          filter: blur(15px);
        }

        @media (max-width: 600px) {
          .royal-envelope-screen {
            padding: 20px 16px;
          }

          .envelope-heading {
            margin-bottom: 32px;
          }

          .ganesh-icon {
            width: 58px;
            height: 58px;
          }

          .heading-blessing {
            font-size: 9px;
            letter-spacing: 2px;
          }

          .heading-location {
            font-size: 8px;
            letter-spacing: 2.5px;
          }

          .heading-decoration {
            margin: 13px auto;
          }

          .envelope-perspective {
            width: min(100%, 390px);
          }

          .royal-envelope {
            aspect-ratio: 1.38 / 1;
          }

          .royal-letter {
            left: 8%;
            width: 84%;
            height: 91%;
          }

          .letter-inner {
            padding: 5px;
          }

          .letter-small,
          .letter-invite,
          .letter-place {
            font-size: 6px;
          }

          .letter-inner h2 {
            font-size: clamp(17px, 5vw, 24px);
          }

          .letter-date {
            font-size: 10px;
          }

          .royal-wax-seal {
            width: 66px;
            height: 66px;
          }

          .wax-outer-ring {
            width: 50px;
            height: 50px;
          }

          .wax-monogram {
            font-size: 17px;
          }

          .front-floral {
            font-size: 27px;
            margin-bottom: 6px;
          }

          .front-kicker {
            font-size: 6px;
            letter-spacing: 1.5px;
          }

          .front-title {
            font-size: 7px;
            margin-bottom: 6px;
          }

          .envelope-front-content h1 {
            font-size: clamp(22px, 6vw, 30px);
          }

          .front-divider {
            margin: 7px 0;
          }

          .front-date {
            font-size: 10px;
          }

          .front-venue {
            font-size: 7px;
          }

          .envelope-instruction {
            margin-top: 34px;
          }

          .envelope-instruction p {
            font-size: 8px;
            letter-spacing: 2px;
          }

          .envelope-footer {
            font-size: 8px;
            letter-spacing: 1px;
            gap: 9px;
            margin-top: 23px;
          }

          .corner-ornament {
            font-size: 37px;
          }

          .top-left,
          .top-right {
            top: 12px;
          }

          .bottom-left,
          .bottom-right {
            bottom: 12px;
          }

          .top-left,
          .bottom-left {
            left: 12px;
          }

          .top-right,
          .bottom-right {
            right: 12px;
          }
        }

        @media (max-height: 700px) and (min-width: 601px) {
          .envelope-heading {
            margin-bottom: 12px;
          }

          .ganesh-icon {
            width: 48px;
            height: 48px;
          }

          .royal-envelope-container {
            transform: scale(0.86);
          }

          .envelope-instruction {
            margin-top: 25px;
          }

          .envelope-footer {
            margin-top: 17px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .envelope-particles span {
            animation: none;
            display: none;
          }
        }
      `})]})}function dw(){const n=[["Families","#families"],["Story","#story"],["Events","#schedule"],["RSVP","#rsvp"]];return f.jsx(ne.nav,{className:"quick-nav",initial:{y:-70,opacity:0},animate:{y:0,opacity:1},children:n.map(([i,o],a)=>f.jsxs("span",{className:"nav-unit",children:[f.jsx("a",{href:o,children:i}),a<3&&f.jsx("b",{children:"✦"})]},o))})}const zp=()=>{const n=Math.max(0,new Date(pe.date.iso).getTime()-Date.now());return[Math.floor(n/864e5),Math.floor(n/36e5)%24,Math.floor(n/6e4)%60,Math.floor(n/1e3)%60]};function fw({showToast:n=()=>{}}){const[i,o]=O.useState(zp);O.useEffect(()=>{const p=window.setInterval(()=>{o(zp())},1e3);return()=>window.clearInterval(p)},[]);const a=async()=>{const p={title:`${pe.couple.groom} & ${pe.couple.bride}`,text:`Join us ${pe.date.hero} in ${pe.location.city}, Rajasthan`,url:window.location.href};try{navigator.share?await navigator.share(p):(await navigator.clipboard.writeText(window.location.href),n("Invitation link copied!"))}catch(d){d.name!=="AbortError"&&n("Please copy the invitation link from your browser.")}},c=[{label:"DAYS",value:i[0]},{label:"HOURS",value:i[1]},{label:"MINUTES",value:i[2]},{label:"SECONDS",value:i[3]}];return f.jsxs("section",{className:"royal-hero",children:[f.jsx("div",{className:"royal-hero-bg"}),f.jsx("div",{className:"royal-hero-overlay"}),f.jsx("div",{className:"hero-glow hero-glow-left"}),f.jsx("div",{className:"hero-glow hero-glow-right"}),f.jsx("div",{className:"hero-particles",children:Array.from({length:18}).map((p,d)=>f.jsx("span",{style:{"--i":d}},d))}),f.jsxs("div",{className:"hero-side-label",children:[f.jsx("span",{children:"EST. IN LOVE"}),f.jsx(Rt,{size:13,fill:"currentColor"}),f.jsx("span",{children:"2026"})]}),f.jsxs(ne.div,{className:"royal-hero-content",initial:{opacity:0,y:35},animate:{opacity:1,y:0},transition:{duration:1.1,ease:"easeOut"},children:[f.jsx(ne.div,{className:"hero-ganesh",initial:{opacity:0,scale:.7},animate:{opacity:1,scale:1},transition:{delay:.3,duration:.8},children:"ॐ"}),f.jsx("p",{className:"hero-blessing",children:"॥ Shree Ganeshaya Namah ॥"}),f.jsxs("div",{className:"hero-divider",children:[f.jsx("span",{}),f.jsx(On,{size:17}),f.jsx("span",{})]}),f.jsx("p",{className:"hero-kicker",children:"TOGETHER WITH THEIR FAMILIES"}),f.jsxs("h1",{className:"royal-couple-title",children:[f.jsx("span",{children:pe.couple.groom}),f.jsx("small",{children:"WEDS"}),f.jsx("span",{children:pe.couple.bride})]}),f.jsxs("div",{className:"hero-heart",children:[f.jsx("span",{}),f.jsx(Rt,{size:17,fill:"currentColor"}),f.jsx("span",{})]}),f.jsx("p",{className:"hero-getting-married",children:"WE ARE GETTING MARRIED"}),f.jsxs(ne.div,{className:"hero-date-card",initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{delay:.5,duration:.8},children:[f.jsx("div",{className:"date-card-top",children:"SAVE THE DATE"}),f.jsxs("div",{className:"date-card-date",children:[f.jsx(ym,{size:19}),f.jsx("strong",{children:pe.date.hero})]}),f.jsxs("div",{className:"date-card-location",children:[f.jsx(mu,{size:15}),f.jsx("span",{children:pe.location.venue})]})]}),f.jsxs("div",{className:"hero-countdown-heading",children:[f.jsx("span",{}),"THE COUNTDOWN BEGINS",f.jsx("span",{})]}),f.jsx("div",{className:"royal-countdown",children:c.map((p,d)=>f.jsxs(ne.div,{className:"royal-count-box",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.65+d*.12},children:[f.jsx("strong",{children:String(p.value).padStart(2,"0")}),f.jsx("span",{children:p.label})]},p.label))}),f.jsxs("div",{className:"royal-hero-actions",children:[f.jsxs("button",{className:"hero-share-btn",onClick:a,children:[f.jsx(iw,{size:17}),"SHARE INVITATION"]}),f.jsxs("a",{className:"hero-call-btn",href:`tel:${pe.phone}`,children:[f.jsx(rw,{size:17}),"CALL US"]})]}),f.jsxs("div",{className:"hero-closing",children:[f.jsxs("div",{className:"closing-divider",children:[f.jsx("span",{}),f.jsx(Rt,{size:13,fill:"currentColor"}),f.jsx("span",{})]}),f.jsx("p",{children:"Until our forever begins"}),f.jsx("small",{children:"Thank you for being a part of our special day."})]})]}),f.jsx("style",{children:`
        .royal-hero {
          --gold: #e8c27b;
          --gold-light: #f8e7bd;
          --cream: #fff6e5;
          position: relative;
          isolation: isolate;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 85px 22px 65px;
          color: var(--cream);
          background: #24150f;
        }

        .royal-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -3;
          background-image: url("/images/royal-wedding-bg.jpg");
          background-size: cover;
          background-position: center 48%;
          transform: scale(1.025);
          animation: heroBgReveal 1.8s ease-out both;
        }

        .royal-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(
              90deg,
              rgba(20, 10, 7, 0.48),
              rgba(25, 13, 8, 0.30) 50%,
              rgba(20, 10, 7, 0.48)
            ),
            linear-gradient(
              180deg,
              rgba(15, 8, 5, 0.42),
              rgba(20, 10, 6, 0.25) 45%,
              rgba(15, 8, 5, 0.65)
            );
        }

        .hero-glow {
          position: absolute;
          z-index: -1;
          width: 330px;
          height: 330px;
          border-radius: 50%;
          background: rgba(232, 194, 123, 0.15);
          filter: blur(90px);
          pointer-events: none;
        }

        .hero-glow-left {
          top: 10%;
          left: -180px;
        }

        .hero-glow-right {
          bottom: 5%;
          right: -180px;
        }

        .hero-particles {
          position: absolute;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-particles span {
          position: absolute;
          left: calc((var(--i) * 5.7%) + 2%);
          bottom: -15px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #ffe3a0;
          box-shadow: 0 0 12px 3px rgba(255, 203, 110, 0.45);
          opacity: 0;
          animation: goldenFloat
            calc(6s + (var(--i) * 0.35s))
            linear infinite;
          animation-delay: calc(var(--i) * -0.7s);
        }

        .hero-side-label {
          position: absolute;
          top: 50%;
          right: 28px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 9px;
          color: var(--gold-light);
          font-family: Georgia, serif;
          font-size: 9px;
          letter-spacing: 3px;
          writing-mode: vertical-rl;
          padding: 20px 11px;
          border: 1px solid rgba(232, 194, 123, 0.55);
          border-radius: 30px;
          background: rgba(31, 17, 11, 0.28);
          backdrop-filter: blur(8px);
        }

        .royal-hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 920px;
          margin: auto;
          text-align: center;
        }

        .hero-ganesh {
          font-family: Georgia, serif;
          font-size: clamp(42px, 5vw, 58px);
          line-height: 1;
          color: var(--gold);
          text-shadow: 0 0 28px rgba(255, 198, 103, 0.45);
          margin-bottom: 13px;
        }

        .hero-blessing {
          color: var(--gold-light);
          font-family: Georgia, serif;
          font-size: 13px;
          letter-spacing: 3px;
          margin: 0;
        }

        .hero-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          color: var(--gold);
          margin: 21px auto 28px;
        }

        .hero-divider span,
        .hero-heart span,
        .closing-divider span {
          display: block;
          width: 65px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--gold)
          );
        }

        .hero-divider span:last-child,
        .hero-heart span:last-child,
        .closing-divider span:last-child {
          transform: rotate(180deg);
        }

        .hero-kicker {
          font-size: 10px;
          letter-spacing: 5px;
          color: #f3d9a7;
          margin-bottom: 13px;
        }

        .royal-couple-title {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin: 0;
          color: #ffdda0;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(48px, 8vw, 92px);
          font-weight: 500;
          line-height: 1.05;
          text-shadow: 0 4px 25px rgba(0, 0, 0, 0.35);
        }

        .royal-couple-title small {
          font-family: Georgia, serif;
          font-size: 15px;
          letter-spacing: 5px;
          color: #fff0d2;
          font-weight: 400;
        }

        .hero-heart {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          color: var(--gold);
          margin: 13px auto 17px;
        }

        .hero-getting-married {
          color: #fff0d7;
          font-size: 12px;
          letter-spacing: 7px;
          margin: 0 0 28px;
        }

        .hero-date-card {
          width: min(100%, 390px);
          margin: 0 auto 27px;
          padding: 17px 22px;
          color: #4b2a17;
          background:
            linear-gradient(
              135deg,
              #fff4d9,
              #f2d6a1 48%,
              #fff1d2
            );
          border: 1px solid #e4b96d;
          outline: 1px solid rgba(255, 236, 193, 0.65);
          outline-offset: 5px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
          clip-path: polygon(
            4% 0, 96% 0, 100% 50%,
            96% 100%, 4% 100%, 0 50%
          );
        }

        .date-card-top {
          font-family: Georgia, serif;
          font-size: 10px;
          letter-spacing: 4px;
          margin-bottom: 8px;
        }

        .date-card-date {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 11px;
          font-family: Georgia, serif;
          font-size: clamp(18px, 3vw, 25px);
        }

        .date-card-date svg {
          color: #8b5a25;
        }

        .date-card-location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          font-size: 12px;
          margin-top: 7px;
        }

        .hero-countdown-heading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: var(--gold-light);
          font-family: Georgia, serif;
          font-size: 12px;
          letter-spacing: 4px;
          margin-bottom: 17px;
        }

        .hero-countdown-heading span {
          width: 30px;
          height: 1px;
          background: var(--gold);
        }

        .royal-countdown {
          display: flex;
          justify-content: center;
          gap: 13px;
          margin-bottom: 29px;
        }

        .royal-count-box {
          width: 91px;
          min-height: 91px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          background: rgba(255, 243, 218, 0.94);
          border: 1px solid #e9c37d;
          outline: 1px solid rgba(255, 231, 180, 0.45);
          outline-offset: 3px;
          color: #4c2b18;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .royal-count-box strong {
          font-family: Georgia, serif;
          font-size: 31px;
          font-weight: 500;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }

        .royal-count-box span {
          font-size: 9px;
          letter-spacing: 2px;
        }

        .royal-hero-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 13px;
        }

        .hero-share-btn,
        .hero-call-btn {
          min-width: 190px;
          min-height: 48px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 40px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-share-btn {
          border: 1px solid #f0c578;
          color: #3e2415;
          background: linear-gradient(135deg, #f8d89d, #dba44d);
          box-shadow: 0 5px 22px rgba(0, 0, 0, 0.2);
        }

        .hero-call-btn {
          border: 1px solid rgba(255, 226, 174, 0.8);
          color: #fff0d7;
          background: rgba(30, 16, 10, 0.3);
          backdrop-filter: blur(8px);
        }

        .hero-share-btn:hover,
        .hero-call-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .hero-closing {
          margin-top: 27px;
          color: var(--gold-light);
        }

        .closing-divider {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          color: var(--gold);
          margin-bottom: 10px;
        }

        .closing-divider span {
          width: 42px;
        }

        .hero-closing p {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: 24px;
          font-style: italic;
          margin: 0 0 5px;
        }

        .hero-closing small {
          font-size: 11px;
          letter-spacing: 0.5px;
          color: #f3dfbd;
        }

        @keyframes goldenFloat {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
          }
          15% { opacity: 0.8; }
          85% { opacity: 0.6; }
          100% {
            transform: translateY(-100vh) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes heroBgReveal {
          from { transform: scale(1.1); }
          to { transform: scale(1.025); }
        }

        @media (min-width: 1400px) {
          .royal-hero {
            min-height: 100vh;
          }
        }

        @media (max-width: 768px) {
          .royal-hero {
            min-height: 100svh;
            padding: 75px 18px 45px;
          }

          .royal-hero-bg {
            background-position: 52% center;
          }

          .royal-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(20, 10, 7, 0.52),
                rgba(20, 10, 7, 0.35) 45%,
                rgba(20, 10, 7, 0.68)
              );
          }

          .hero-side-label {
            display: none;
          }

          .hero-kicker {
            font-size: 8px;
            letter-spacing: 3px;
          }

          .royal-couple-title {
            gap: 7px 12px;
            font-size: clamp(43px, 11vw, 65px);
          }

          .royal-couple-title small {
            font-size: 11px;
            letter-spacing: 3px;
          }

          .hero-getting-married {
            font-size: 9px;
            letter-spacing: 4px;
          }

          .hero-date-card {
            max-width: 340px;
            padding: 15px 16px;
          }

          .royal-countdown {
            gap: 10px;
          }

          .royal-count-box {
            width: min(21vw, 78px);
            min-height: 76px;
          }

          .royal-count-box strong {
            font-size: 26px;
          }

          .royal-count-box span {
            font-size: 8px;
            letter-spacing: 1px;
          }
        }

        @media (max-width: 420px) {
          .royal-hero {
            padding: 65px 15px 35px;
          }

          .hero-ganesh {
            font-size: 40px;
          }

          .hero-blessing {
            font-size: 11px;
            letter-spacing: 2px;
          }

          .hero-divider {
            margin: 17px auto 23px;
          }

          .royal-couple-title {
            font-size: clamp(39px, 10.5vw, 48px);
          }

          .hero-getting-married {
            letter-spacing: 3px;
            font-size: 8px;
            margin-bottom: 23px;
          }

          .hero-countdown-heading {
            font-size: 10px;
            letter-spacing: 2px;
            gap: 8px;
          }

          .hero-countdown-heading span {
            width: 19px;
          }

          .royal-countdown {
            gap: 8px;
          }

          .royal-count-box {
            width: calc((100vw - 65px) / 4);
            min-height: 69px;
          }

          .royal-count-box strong {
            font-size: 23px;
          }

          .royal-count-box span {
            font-size: 7px;
          }

          .hero-share-btn,
          .hero-call-btn {
            min-width: 155px;
            min-height: 44px;
            font-size: 9px;
          }

          .hero-closing p {
            font-size: 21px;
          }

          .hero-closing small {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-particles span,
          .royal-hero-bg {
            animation: none;
          }
        }
      `})]})}const Vp=[{key:"groom",role:"THE GROOM'S FAMILY",relation:"Beloved Son of",grandRelation:"Grandson of",description:"Surrounded by a lifetime of love and blessings"},{key:"bride",role:"THE BRIDE'S FAMILY",relation:"Beloved Daughter of",grandRelation:"Granddaughter of",description:"Surrounded by a lifetime of love and blessings"}],pw=Array.from({length:38},(n,i)=>({id:i,left:`${(i*37+11)%100}%`,top:`${(i*53+7)%100}%`,delay:`${i%11*.65}s`,duration:`${4+i%7}s`,size:2+i%3})),hw=Array.from({length:16},(n,i)=>({id:i,left:`${(i*29+5)%100}%`,delay:`${i*1.1}s`,duration:`${12+i%5*2}s`}));function mw(){return f.jsxs("div",{className:"animated-wedding-bg","aria-hidden":"true",children:[f.jsx("div",{className:"bg-golden-glow glow-a"}),f.jsx("div",{className:"bg-golden-glow glow-b"}),f.jsx("div",{className:"bg-golden-glow glow-c"}),f.jsx("div",{className:"bg-mandala mandala-a",children:f.jsx(yl,{})}),f.jsx("div",{className:"bg-mandala mandala-b",children:f.jsx(yl,{})}),f.jsx("div",{className:"bg-mandala mandala-c",children:f.jsx(yl,{})}),f.jsx("div",{className:"bg-particles",children:pw.map(n=>f.jsx("span",{className:"bg-particle",style:{left:n.left,top:n.top,width:`${n.size}px`,height:`${n.size}px`,animationDelay:n.delay,animationDuration:n.duration}},n.id))}),f.jsx("div",{className:"bg-petals",children:hw.map(n=>f.jsx("span",{className:"bg-petal",style:{left:n.left,animationDelay:n.delay,animationDuration:n.duration}},n.id))}),f.jsx("div",{className:"bg-light-beam beam-one"}),f.jsx("div",{className:"bg-light-beam beam-two"}),f.jsx("div",{className:"bg-orbit orbit-one"}),f.jsx("div",{className:"bg-orbit orbit-two"})]})}function yl(){return f.jsxs("svg",{viewBox:"0 0 400 400",fill:"none",children:[f.jsx("circle",{cx:"200",cy:"200",r:"185"}),f.jsx("circle",{cx:"200",cy:"200",r:"160"}),f.jsx("circle",{cx:"200",cy:"200",r:"130"}),f.jsx("circle",{cx:"200",cy:"200",r:"100"}),f.jsx("circle",{cx:"200",cy:"200",r:"65"}),Array.from({length:24}).map((n,i)=>f.jsxs("g",{transform:`rotate(${i*15} 200 200)`,children:[f.jsx("path",{d:"M200 15 C160 65 165 105 200 125 C235 105 240 65 200 15Z"}),f.jsx("path",{d:"M200 75 C175 105 180 135 200 150 C220 135 225 105 200 75Z"}),f.jsx("circle",{cx:"200",cy:"12",r:"3"})]},i))]})}function zl(){return f.jsxs("div",{className:"family-gold-divider","aria-hidden":"true",children:[f.jsx("span",{}),f.jsx(On,{size:16}),f.jsx("span",{})]})}function gw(){return f.jsxs("svg",{viewBox:"0 0 160 160",className:"family-mandala",fill:"none","aria-hidden":"true",children:[f.jsx("circle",{cx:"80",cy:"80",r:"74"}),f.jsx("circle",{cx:"80",cy:"80",r:"63"}),f.jsx("circle",{cx:"80",cy:"80",r:"48"}),f.jsx("circle",{cx:"80",cy:"80",r:"31"}),Array.from({length:16}).map((n,i)=>f.jsxs("g",{transform:`rotate(${i*22.5} 80 80)`,children:[f.jsx("path",{d:"M80 6 C65 23 65 40 80 49 C95 40 95 23 80 6Z"}),f.jsx("circle",{cx:"80",cy:"4",r:"2",fill:"currentColor"})]},i)),Array.from({length:8}).map((n,i)=>f.jsx("g",{transform:`rotate(${i*45} 80 80)`,children:f.jsx("path",{d:"M80 39 C68 50 68 63 80 70 C92 63 92 50 80 39Z"})},i))]})}function Ip({side:n,index:i}){var a,c;const o=(a=pe.families)==null?void 0:a[n.key];return o?f.jsx(ne.article,{className:`family-card family-card-${n.key}`,initial:{opacity:0,x:i===0?-90:90,y:45,rotateY:i===0?-9:9,scale:.92},whileInView:{opacity:1,x:0,y:0,rotateY:0,scale:1},viewport:{once:!0,amount:.15},transition:{duration:1.15,delay:i*.18,ease:[.22,1,.36,1]},whileHover:{y:-12,rotateX:2,scale:1.015,transition:{duration:.4}},children:f.jsxs("div",{className:"family-card-inner",children:[f.jsx("div",{className:"family-card-glow"}),f.jsx("div",{className:"family-light-sweep"}),f.jsx("span",{className:"family-corner corner-tl"}),f.jsx("span",{className:"family-corner corner-tr"}),f.jsx("span",{className:"family-corner corner-bl"}),f.jsx("span",{className:"family-corner corner-br"}),f.jsxs("div",{className:"family-top-decoration",children:[f.jsx("span",{}),f.jsx(vm,{size:20,strokeWidth:1.2}),f.jsx("span",{})]}),f.jsxs(ne.div,{className:"family-emblem",initial:{scale:.5,opacity:0,rotate:-30},whileInView:{scale:1,opacity:1,rotate:0},viewport:{once:!0},transition:{duration:1.2,delay:.35+i*.2,ease:[.22,1,.36,1]},children:[f.jsx(ne.div,{className:"family-mandala-wrap",animate:{rotate:360},transition:{duration:55,repeat:1/0,ease:"linear"},children:f.jsx(gw,{})}),f.jsx(ne.div,{className:"family-initial",animate:{boxShadow:["0 0 10px rgba(185,145,76,.12)","0 0 35px rgba(185,145,76,.42)","0 0 10px rgba(185,145,76,.12)"]},transition:{duration:3.5,repeat:1/0,ease:"easeInOut"},children:((c=o.name)==null?void 0:c.charAt(0))||""}),f.jsx(ne.span,{className:"family-emblem-star",animate:{rotate:[0,90,180,270,360],scale:[1,1.35,1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},children:"✦"})]}),f.jsx(ne.p,{className:"family-role",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.45+i*.2},children:n.role}),f.jsx(ne.h3,{className:"family-name",initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.55+i*.2},children:o.name}),f.jsx("p",{className:"family-description",children:n.description}),f.jsx(zl,{}),f.jsxs(ne.div,{className:"family-details",initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.7+i*.2},children:[f.jsx("p",{className:"family-label",children:n.relation}),f.jsx("p",{className:"family-person",children:o.parents})]}),f.jsxs(ne.div,{className:"family-heart-divider",animate:{scale:[1,1.12,1]},transition:{duration:2.6,repeat:1/0,ease:"easeInOut"},children:[f.jsx("span",{}),f.jsx(Rt,{size:18,strokeWidth:1.3}),f.jsx("span",{})]}),f.jsxs(ne.div,{className:"family-details",initial:{opacity:0,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.85+i*.2},children:[f.jsx("p",{className:"family-label",children:n.grandRelation}),f.jsx("p",{className:"family-person",children:o.grandparents})]}),f.jsxs("div",{className:"family-card-footer",children:[f.jsx(Ll,{size:17}),f.jsx("span",{children:"WITH LOVE & BLESSINGS"}),f.jsx(Ll,{size:17})]})]})}):null}function _p(){return f.jsxs(ne.div,{className:"families-crest",initial:{opacity:0,scale:.4,rotate:-35},whileInView:{opacity:1,scale:1,rotate:0},viewport:{once:!0},transition:{duration:1.3,delay:.4,ease:[.22,1,.36,1]},children:[f.jsx(ne.div,{className:"crest-glow",animate:{scale:[1,1.18,1],opacity:[.3,.9,.3]},transition:{duration:3,repeat:1/0,ease:"easeInOut"}}),f.jsxs(ne.div,{className:"crest-orbit",animate:{rotate:360},transition:{duration:22,repeat:1/0,ease:"linear"},children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]}),f.jsx("div",{className:"crest-border",children:f.jsxs("div",{className:"crest-content",children:[f.jsx("span",{className:"crest-top",children:"TWO FAMILIES"}),f.jsx("span",{className:"crest-monogram",children:pe.couple.monogram}),f.jsx(Rt,{size:15,className:"crest-heart"}),f.jsx("span",{className:"crest-bottom",children:"ONE FOREVER"})]})})]})}function yw(){return f.jsxs("section",{id:"families",className:"section-shell section-pad families-section",children:[f.jsx(mw,{}),f.jsxs(ne.header,{className:"section-heading families-heading",initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:1},children:[f.jsx(ne.div,{className:"family-heading-icon",animate:{rotate:[0,10,-10,0],scale:[1,1.12,1]},transition:{duration:5,repeat:1/0,ease:"easeInOut"},children:f.jsx(Ll,{size:28,strokeWidth:1.1})}),f.jsx("p",{className:"script-line",children:"The people behind our happiness"}),f.jsx(zl,{}),f.jsx("h2",{children:"Two Families, One Beautiful Beginning"}),f.jsx("span",{className:"gold-kicker",children:"UNITED BY LOVE · BLESSED BY TRADITIONS"}),f.jsx("p",{className:"families-intro",children:"A beautiful celebration where two families come together, hearts unite and a new journey begins with love, laughter and endless blessings."})]}),f.jsxs("div",{className:"families-container",children:[f.jsxs(ne.div,{className:"family-connection",initial:{scaleX:0,opacity:0},whileInView:{scaleX:1,opacity:1},viewport:{once:!0},transition:{duration:1.8,delay:.6},children:[f.jsx("span",{}),f.jsx(ow,{size:15}),f.jsx("span",{})]}),f.jsxs("div",{className:"families-cards",children:[f.jsx(Ip,{side:Vp[0],index:0}),f.jsx("div",{className:"family-mobile-crest",children:f.jsx(_p,{})}),f.jsx(Ip,{side:Vp[1],index:1})]}),f.jsx("div",{className:"family-desktop-crest",children:f.jsx(_p,{})})]}),f.jsxs(ne.footer,{className:"families-footer",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:1},children:[f.jsx(zl,{}),f.jsxs("p",{className:"families-quote",children:["Two hearts, two families,",f.jsx("span",{children:" one forever."})]}),f.jsx("p",{className:"families-blessing",children:"WITH LOVE, RESPECT & BLESSINGS"}),f.jsx(ne.div,{className:"footer-sparkle",animate:{rotate:360,scale:[.8,1.25,.8]},transition:{duration:7,repeat:1/0,ease:"linear"},children:"✧"})]}),f.jsx("style",{children:`
        .families-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          color: #4c332a;
          background: #fbf5e9;
        }

        /* BACKGROUND LAYER */

        .animated-wedding-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 50% 45%, rgba(210,170,105,.18), transparent 65%),
            linear-gradient(145deg, #fffaf1, #f8eedf 50%, #fffaf1);
        }

        .families-heading,
        .families-container,
        .families-footer {
          position: relative;
          z-index: 1;
        }

        .bg-golden-glow {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: .25;
          background: #d5aa68;
          animation: glow-float 13s ease-in-out infinite alternate;
        }

        .glow-a {
          top: 3%;
          left: -12%;
        }

        .glow-b {
          top: 32%;
          right: -15%;
          background: #b98255;
          animation-delay: -5s;
        }

        .glow-c {
          bottom: -18%;
          left: 30%;
          background: #e3c58f;
          animation-delay: -8s;
        }

        @keyframes glow-float {
          0% { transform: translate3d(0,0,0) scale(.8); }
          50% { transform: translate3d(85px,55px,0) scale(1.2); }
          100% { transform: translate3d(-40px,-45px,0) scale(.95); }
        }

        /* MANDALA BACKGROUND */

        .bg-mandala {
          position: absolute;
          width: min(470px,75vw);
          aspect-ratio: 1;
          color: #ad8448;
          opacity: .075;
        }

        .bg-mandala svg {
          width: 100%;
          height: 100%;
          stroke: currentColor;
          stroke-width: 1;
        }

        .mandala-a {
          top: -155px;
          left: -140px;
          animation: mandala-rotate 100s linear infinite;
        }

        .mandala-b {
          right: -155px;
          bottom: -155px;
          width: min(520px,80vw);
          opacity: .065;
          animation: mandala-reverse 120s linear infinite;
        }

        .mandala-c {
          top: 38%;
          left: 50%;
          width: min(300px,55vw);
          opacity: .035;
          transform: translateX(-50%);
          animation: mandala-rotate 150s linear infinite;
        }

        @keyframes mandala-rotate {
          to { rotate: 360deg; }
        }

        @keyframes mandala-reverse {
          to { rotate: -360deg; }
        }

        /* PARTICLES */

        .bg-particles,
        .bg-petals {
          position: absolute;
          inset: 0;
        }

        .bg-particle {
          position: absolute;
          border-radius: 50%;
          background: #bd985d;
          box-shadow: 0 0 10px rgba(189,152,93,.8);
          opacity: 0;
          animation: particle-twinkle 7s ease-in-out infinite;
        }

        @keyframes particle-twinkle {
          0%,100% {
            opacity: 0;
            transform: scale(.3);
          }
          50% {
            opacity: .8;
            transform: scale(1.8);
          }
        }

        /* FALLING PETALS */

        .bg-petal {
          position: absolute;
          top: -35px;
          width: 11px;
          height: 16px;
          border-radius: 80% 10% 80% 10%;
          background: linear-gradient(145deg,#e7c99a,#b78b57);
          opacity: 0;
          transform: rotate(35deg);
          box-shadow: 0 2px 8px rgba(155,111,59,.2);
          animation: petal-fall 16s linear infinite;
        }

        @keyframes petal-fall {
          0% {
            transform: translate3d(0,-5vh,0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: .65; }
          50% {
            transform: translate3d(55px,50vh,0) rotate(220deg);
            opacity: .65;
          }
          90% { opacity: .35; }
          100% {
            transform: translate3d(-35px,110vh,0) rotate(440deg);
            opacity: 0;
          }
        }

        /* MOVING LIGHT BEAMS */

        .bg-light-beam {
          position: absolute;
          top: -40%;
          left: -80%;
          width: 38%;
          height: 180%;
          transform: rotate(25deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.35),
            transparent
          );
          animation: background-shimmer 17s ease-in-out infinite;
        }

        .beam-two {
          width: 20%;
          opacity: .45;
          animation-delay: -8s;
          animation-duration: 22s;
        }

        @keyframes background-shimmer {
          0%,55% { left: -80%; }
          100% { left: 150%; }
        }

        .bg-orbit {
          position: absolute;
          width: 250px;
          height: 250px;
          border: 1px solid rgba(180,137,75,.12);
          border-radius: 50%;
          animation: orbit-float 18s ease-in-out infinite alternate;
        }

        .orbit-one {
          top: 20%;
          right: 8%;
        }

        .orbit-two {
          bottom: 10%;
          left: 5%;
          width: 180px;
          height: 180px;
          animation-delay: -7s;
        }

        @keyframes orbit-float {
          from { transform: translateY(-15px) rotate(0deg) scale(.9); }
          to { transform: translateY(20px) rotate(35deg) scale(1.08); }
        }

        /* HEADING */

        .families-heading {
          max-width: 760px;
          margin: 0 auto 65px;
          padding: 0 16px;
          text-align: center;
        }

        .family-heading-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 13px;
          color: #a67c43;
        }

        .families-heading .script-line {
          color: #a47b4a;
          font-size: clamp(17px,2vw,22px);
        }

        .family-gold-divider {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          margin: 20px auto;
          color: #ad8448;
        }

        .family-gold-divider span {
          width: 53px;
          height: 1px;
          background: linear-gradient(90deg,transparent,#ad8448,transparent);
        }

        .families-heading h2 {
          margin: 12px auto 16px;
          color: #63332e;
          font-family: var(--font-heading,Georgia,serif);
          font-size: clamp(32px,4.4vw,49px);
          font-weight: 500;
          line-height: 1.2;
        }

        .families-heading .gold-kicker {
          color: #a47b4a;
          font-size: 10px;
          letter-spacing: .25em;
        }

        .families-intro {
          max-width: 540px;
          margin: 20px auto 0;
          color: #88735f;
          font-size: 14px;
          line-height: 1.9;
        }

        /* CARD LAYOUT */

        .families-container {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          perspective: 1400px;
        }

        .families-cards {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: clamp(25px,5vw,70px);
          align-items: stretch;
        }

        .family-card {
          position: relative;
          min-width: 0;
          padding: 9px;
          overflow: hidden;
          border: 1px solid rgba(174,135,75,.65);
          background: linear-gradient(145deg,#fffdf9,#f9f0e3);
          box-shadow: 0 18px 55px rgba(75,47,30,.10);
          transform-style: preserve-3d;
          transition: box-shadow .6s ease, border-color .6s ease;
        }

        .family-card:hover {
          border-color: #bd985d;
          box-shadow: 0 30px 75px rgba(75,47,30,.18);
        }

        .family-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(
            125deg,
            transparent 10%,
            rgba(191,151,88,.8) 30%,
            transparent 50%,
            rgba(255,255,255,.9) 70%,
            transparent 90%
          );
          background-size: 250% 250%;
          animation: card-border-shine 9s linear infinite;
          pointer-events: none;
          opacity: .65;
        }

        @keyframes card-border-shine {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }

        .family-card-inner {
          position: relative;
          box-sizing: border-box;
          min-height: 555px;
          height: 100%;
          padding: 34px 25px 27px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
          border: 1px solid rgba(174,135,75,.35);
          background:
            radial-gradient(circle at 50% 20%,rgba(255,255,255,.9),transparent 55%),
            linear-gradient(145deg,rgba(255,255,255,.4),rgba(247,235,215,.45));
        }

        .family-card-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          transform: translateX(-50%);
          background: rgba(218,184,127,.13);
          filter: blur(50px);
          pointer-events: none;
          animation: card-glow 6s ease-in-out infinite alternate;
        }

        @keyframes card-glow {
          from { opacity: .35; transform: translateX(-50%) scale(.8); }
          to { opacity: .9; transform: translateX(-50%) scale(1.2); }
        }

        .family-light-sweep {
          position: absolute;
          z-index: 2;
          top: -100%;
          left: -85%;
          width: 45%;
          height: 300%;
          transform: rotate(25deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.75),
            transparent
          );
          animation: family-light 8s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes family-light {
          0%,55% { left: -85%; }
          85%,100% { left: 150%; }
        }

        /* ORNAMENTAL CORNERS */

        .family-corner {
          position: absolute;
          z-index: 3;
          width: 32px;
          height: 32px;
          border-color: #ae874b;
          border-style: solid;
          opacity: .85;
          transition: width .5s ease, height .5s ease, opacity .5s ease;
        }

        .family-card:hover .family-corner {
          width: 43px;
          height: 43px;
          opacity: 1;
        }

        .corner-tl {
          top: 10px;
          left: 10px;
          border-width: 1px 0 0 1px;
        }

        .corner-tr {
          top: 10px;
          right: 10px;
          border-width: 1px 1px 0 0;
        }

        .corner-bl {
          bottom: 10px;
          left: 10px;
          border-width: 0 0 1px 1px;
        }

        .corner-br {
          bottom: 10px;
          right: 10px;
          border-width: 0 1px 1px 0;
        }

        .family-top-decoration {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: #a98249;
        }

        .family-top-decoration span {
          width: 42px;
          height: 1px;
          background: linear-gradient(90deg,transparent,#a98249,transparent);
        }

        /* FAMILY EMBLEM */

        .family-emblem {
          position: relative;
          z-index: 1;
          width: 150px;
          height: 150px;
          margin: 24px auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b18b4d;
        }

        .family-mandala-wrap {
          position: absolute;
          inset: 0;
        }

        .family-mandala {
          width: 100%;
          height: 100%;
          stroke: currentColor;
          stroke-width: .8;
          opacity: .9;
        }

        .family-initial {
          position: relative;
          width: 82px;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid #b18b4d;
          background: radial-gradient(circle at 30% 25%,#fffaf0,#f1dfbf);
          color: #753d37;
          font-family: Georgia,serif;
          font-size: 48px;
          box-shadow: 0 0 25px rgba(185,145,76,.25);
        }

        .family-emblem-star {
          position: absolute;
          right: 12px;
          bottom: 3px;
          font-size: 20px;
          color: #a98249;
        }

        .family-role {
          position: relative;
          z-index: 1;
          margin: 9px 0 11px;
          color: #a17a45;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .3em;
        }

        .family-name {
          position: relative;
          z-index: 1;
          margin: 0;
          color: #60332e;
          font-family: var(--font-heading,Georgia,serif);
          font-size: clamp(27px,3vw,38px);
          font-weight: 500;
          line-height: 1.25;
          overflow-wrap: anywhere;
        }

        .family-description {
          position: relative;
          z-index: 1;
          margin: 10px 0 0;
          color: #947e68;
          font-size: 12px;
          font-style: italic;
          line-height: 1.7;
        }

        .family-details {
          position: relative;
          z-index: 1;
          width: 100%;
          margin: 4px 0;
        }

        .family-label {
          margin: 0 0 9px;
          color: #a98249;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .family-person {
          margin: 0 auto;
          color: #604832;
          font-family: Georgia,serif;
          font-size: clamp(16px,1.8vw,20px);
          line-height: 1.65;
          overflow-wrap: anywhere;
        }

        .family-heart-divider {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 20px 0;
          color: #ae874b;
        }

        .family-heart-divider span {
          width: 55px;
          height: 1px;
          background: linear-gradient(90deg,transparent,#ae874b,transparent);
        }

        .family-heart-divider svg {
          fill: rgba(174,135,75,.15);
        }

        .family-card-footer {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: auto;
          padding-top: 27px;
          color: #a98249;
        }

        .family-card-footer span {
          font-size: 8px;
          letter-spacing: .2em;
        }

        /* CENTRAL CREST */

        .family-connection {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 50%;
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transform: translate(-50%,-50%);
          color: #ae874b;
        }

        .family-connection span {
          width: 25px;
          height: 1px;
          background: linear-gradient(90deg,transparent,#ae874b);
        }

        .family-connection span:last-child {
          transform: rotate(180deg);
        }

        .family-desktop-crest {
          position: absolute;
          z-index: 4;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }

        .family-mobile-crest {
          display: none;
        }

        .families-crest {
          position: relative;
          width: 132px;
          height: 132px;
          padding: 6px;
          box-sizing: border-box;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 25%,#955d50,#713b35 70%);
          border: 4px solid #fff8ed;
          outline: 1px solid #ae874b;
          box-shadow: 0 12px 35px rgba(65,39,26,.25);
        }

        .crest-glow {
          position: absolute;
          inset: -15px;
          border-radius: 50%;
          border: 1px solid rgba(174,135,75,.65);
          pointer-events: none;
        }

        .crest-orbit {
          position: absolute;
          inset: -9px;
          border: 1px dashed rgba(174,135,75,.7);
          border-radius: 50%;
          pointer-events: none;
        }

        .crest-orbit span {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c49a5d;
        }

        .crest-orbit span:nth-child(1) {
          top: 50%;
          left: -3px;
        }

        .crest-orbit span:nth-child(2) {
          top: 50%;
          right: -3px;
        }

        .crest-orbit span:nth-child(3) {
          top: -3px;
          left: 50%;
        }

        .crest-orbit span:nth-child(4) {
          bottom: -3px;
          left: 50%;
        }

        .crest-border {
          width: 100%;
          height: 100%;
          padding: 6px;
          box-sizing: border-box;
          border: 1px solid rgba(255,237,205,.7);
          border-radius: 50%;
        }

        .crest-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px dashed rgba(255,237,205,.4);
          border-radius: 50%;
          color: #fff1d9;
        }

        .crest-top,
        .crest-bottom {
          font-size: 7px;
          letter-spacing: .2em;
        }

        .crest-monogram {
          margin: 4px 0 1px;
          font-family: Georgia,serif;
          font-size: 25px;
          letter-spacing: .06em;
        }

        .crest-heart {
          margin-bottom: 3px;
          color: #f5d8ae;
          fill: #f5d8ae;
        }

        /* FOOTER */

        .families-footer {
          margin: 55px auto 0;
          padding: 0 15px;
          text-align: center;
        }

        .families-quote {
          margin: 0;
          color: #76563b;
          font-family: Georgia,serif;
          font-size: clamp(23px,3vw,33px);
          font-style: italic;
          line-height: 1.5;
        }

        .families-quote span {
          color: #8b4540;
        }

        .families-blessing {
          margin-top: 15px;
          color: #a17a45;
          font-size: 9px;
          letter-spacing: .28em;
        }

        .footer-sparkle {
          margin-top: 20px;
          color: #ae874b;
          font-size: 25px;
        }

        /* TABLET */

        @media (max-width: 900px) and (min-width: 641px) {
          .families-cards {
            gap: 28px;
          }

          .family-card-inner {
            padding-left: 18px;
            padding-right: 18px;
          }

          .family-connection {
            display: none;
          }

          .families-crest {
            width: 108px;
            height: 108px;
          }

          .crest-monogram {
            font-size: 21px;
          }
        }

        /* MOBILE */

        @media (max-width: 640px) {
          .families-heading {
            margin-bottom: 40px;
          }

          .families-heading h2 {
            font-size: clamp(29px,8vw,37px);
          }

          .families-intro {
            font-size: 13px;
          }

          .families-cards {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            padding: 0 5px;
          }

          .family-card {
            width: 100%;
            max-width: 440px;
            box-sizing: border-box;
          }

          .family-card-inner {
            min-height: 0;
            padding: 29px 20px 25px;
          }

          .family-emblem {
            width: 130px;
            height: 130px;
            margin-top: 19px;
          }

          .family-initial {
            width: 70px;
            height: 70px;
            font-size: 42px;
          }

          .family-name {
            font-size: clamp(28px,8vw,35px);
          }

          .family-person {
            font-size: 17px;
          }

          .family-desktop-crest,
          .family-connection {
            display: none;
          }

          .family-mobile-crest {
            display: flex;
            justify-content: center;
            position: relative;
            z-index: 4;
            margin: -2px 0;
          }

          .families-crest {
            width: 112px;
            height: 112px;
          }

          .families-footer {
            margin-top: 40px;
          }

          .families-quote {
            font-size: 23px;
          }

          .bg-golden-glow {
            width: 300px;
            height: 300px;
            filter: blur(60px);
            opacity: .18;
          }

          .bg-mandala {
            opacity: .055;
          }

          .bg-petal {
            width: 8px;
            height: 12px;
          }

          .bg-light-beam {
            opacity: .5;
          }

          .family-card:hover {
            transform: none;
          }
        }

        @media (max-width: 380px) {
          .family-card-inner {
            padding: 26px 14px 22px;
          }

          .family-name {
            font-size: 27px;
          }

          .family-person {
            font-size: 15px;
          }

          .family-label {
            font-size: 9px;
            letter-spacing: .14em;
          }

          .families-heading h2 {
            font-size: 28px;
          }

          .families-blessing {
            font-size: 8px;
            letter-spacing: .18em;
          }
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .bg-golden-glow,
          .bg-mandala,
          .bg-particle,
          .bg-petal,
          .bg-light-beam,
          .bg-orbit,
          .family-light-sweep,
          .family-card::before {
            animation: none !important;
          }

          .bg-particle {
            opacity: .25;
          }

          .family-card {
            transition: none;
          }
        }
      `})]})}const vw=["/pre-wedding/img1.jpeg","/pre-wedding/img2.jpeg","/pre-wedding/img3.jpeg","/pre-wedding/img4.jpeg","/pre-wedding/img5.jpeg","/pre-wedding/img6.jpeg","/pre-wedding/img7.jpeg","/pre-wedding/img8.jpeg","/pre-wedding/img9.jpeg","/pre-wedding/img10.jpeg","/pre-wedding/img11.jpeg","/pre-wedding/img12.jpeg","/pre-wedding/img13.jpeg","/pre-wedding/img14.jpeg","/pre-wedding/img15.jpeg"];function xw(){return f.jsxs("section",{id:"story",className:"section-shell section-pad story",children:[f.jsxs(ne.div,{className:"section-heading",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},children:[f.jsx("p",{className:"gold-kicker",children:"A BEAUTIFUL BEGINNING"}),f.jsxs("div",{className:"story-heading-icon",children:[f.jsx("span",{}),f.jsx(On,{size:17}),f.jsx("span",{})]}),f.jsxs("h2",{children:["Two families.",f.jsx("br",{}),f.jsx("em",{children:"One beautiful forever."})]}),f.jsx("p",{className:"story-intro",children:"Some journeys begin with a beautiful introduction, and turn into a lifetime of togetherness."})]}),f.jsxs(ne.div,{className:"prewedding-gallery",initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[f.jsxs("div",{className:"gallery-top-label",children:[f.jsx("span",{children:"DIVYA & ASTHA"}),f.jsx(Rt,{size:15,fill:"currentColor"}),f.jsx("span",{children:"PRE-WEDDING MEMORIES"})]}),f.jsx("div",{className:"gallery-slider",children:f.jsx("div",{className:"gallery-track",children:[0,1].map(n=>f.jsx("div",{className:"gallery-group","aria-hidden":n===1?"true":void 0,children:vw.map((i,o)=>f.jsxs("div",{className:"gallery-photo",children:[f.jsx("img",{src:i,alt:n===0?`${pe.couple.groom} and ${pe.couple.bride} pre-wedding photograph ${o+1}`:"",loading:n===0&&o<4?"eager":"lazy",draggable:"false"}),f.jsx("div",{className:"photo-overlay",children:f.jsx("span",{children:"✧"})})]},`${n}-${o}`))},n))})}),f.jsxs("div",{className:"gallery-bottom",children:[f.jsx("span",{className:"gallery-line"}),f.jsx("p",{children:"15 MOMENTS · A LIFETIME OF MEMORIES"}),f.jsx("span",{className:"gallery-line"})]})]}),f.jsxs(ne.div,{className:"story-closing",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:[f.jsx("div",{className:"closing-ornament",children:"✧"}),f.jsx("p",{children:"From a beautiful beginning to a forever together."}),f.jsxs("h3",{children:[pe.couple.groom," ",f.jsx("span",{children:"&"})," ",pe.couple.bride]}),f.jsx("div",{className:"closing-heart",children:f.jsx(Rt,{size:15,fill:"currentColor"})})]}),f.jsx("style",{children:`
        .story {
          overflow: hidden;
        }

        .story-heading-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #b58a4c;
          margin: 18px 0;
        }

        .story-heading-icon span {
          width: 45px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #b58a4c
          );
        }

        .story-heading-icon span:last-child {
          transform: rotate(180deg);
        }

        .story-intro {
          max-width: 490px;
          margin: 18px auto 0;
          color: #887664;
          font-size: 14px;
          line-height: 1.9;
        }

        .prewedding-gallery {
          width: 100%;
          margin: 55px auto 0;
          position: relative;
        }

        .gallery-top-label {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          margin-bottom: 25px;
          color: #9b7445;
          font-size: 9px;
          letter-spacing: 2.5px;
          font-weight: 600;
        }

        .gallery-top-label svg {
          color: #b58a4c;
        }

        .gallery-slider {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 10px 0 22px;
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
          mask-image: linear-gradient(
            90deg,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
        }

        .gallery-track {
          display: flex;
          width: max-content;
          animation: prewedding-scroll 75s linear infinite;
          will-change: transform;
        }

        .gallery-slider:hover .gallery-track {
          animation-play-state: paused;
        }

        .gallery-group {
          display: flex;
          flex-shrink: 0;
          gap: 20px;
          padding-right: 20px;
        }

        .gallery-photo {
          position: relative;
          flex-shrink: 0;
          width: 245px;
          height: 325px;
          overflow: hidden;
          border-radius: 7px;
          background: #eadfce;
          border: 1px solid rgba(173, 132, 76, 0.35);
          box-shadow: 0 12px 30px rgba(75, 48, 26, 0.12);
          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease;
        }

        .gallery-photo:nth-child(even) {
          transform: translateY(18px);
        }

        .gallery-photo:hover {
          transform: translateY(-5px) scale(1.025);
          box-shadow: 0 18px 38px rgba(75, 48, 26, 0.2);
        }

        .gallery-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }

        .gallery-photo:hover img {
          transform: scale(1.08);
        }

        .photo-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding-bottom: 18px;
          background: linear-gradient(
            to top,
            rgba(35, 18, 15, 0.3),
            transparent 35%
          );
          pointer-events: none;
        }

        .photo-overlay span {
          color: #ffe6b4;
          font-size: 22px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        @keyframes prewedding-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .gallery-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 18px;
          margin-top: 18px;
        }

        .gallery-bottom p {
          color: #9b805f;
          font-size: 9px;
          letter-spacing: 2.5px;
          white-space: nowrap;
          margin: 0;
        }

        .gallery-line {
          width: 45px;
          height: 1px;
          background: #c5a575;
        }

        .story-closing {
          text-align: center;
          margin: 65px auto 10px;
        }

        .closing-ornament {
          color: #b58a4c;
          font-size: 26px;
          margin-bottom: 12px;
        }

        .story-closing p {
          color: #8e7967;
          font-family: Georgia, serif;
          font-size: 16px;
          font-style: italic;
          margin-bottom: 12px;
        }

        .story-closing h3 {
          font-family: Georgia, serif;
          font-size: clamp(27px, 4vw, 40px);
          font-weight: 400;
          color: #755a3c;
          margin: 0;
        }

        .story-closing h3 span {
          color: #b58a4c;
          font-style: italic;
          font-size: 0.8em;
        }

        .closing-heart {
          display: flex;
          justify-content: center;
          margin-top: 17px;
          color: #b58a4c;
        }

        @media (max-width: 768px) {
          .prewedding-gallery {
            margin-top: 35px;
          }

          .gallery-top-label {
            font-size: 8px;
            letter-spacing: 1.5px;
            gap: 9px;
          }

          .gallery-group {
            gap: 13px;
            padding-right: 13px;
          }

          .gallery-photo {
            width: 190px;
            height: 255px;
          }

          .gallery-track {
            animation-duration: 65s;
          }

          .gallery-bottom {
            gap: 9px;
          }

          .gallery-bottom p {
            font-size: 7px;
            letter-spacing: 1.3px;
          }

          .gallery-line {
            width: 22px;
          }

          .story-closing {
            margin-top: 48px;
          }

          .story-closing p {
            font-size: 14px;
            padding: 0 12px;
          }
        }

        @media (max-width: 400px) {
          .gallery-photo {
            width: 165px;
            height: 225px;
          }

          .gallery-track {
            animation-duration: 58s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-track {
            animation: none;
          }
        }
      `})]})}const Op=["/images/wedding-florals.jpg","/images/sangeet-decor.jpg","/images/reception-stage.jpg","/images/royal-mandap.jpg","/images/palace-hospitality.jpg"];function ww(){const[n,i]=O.useState(null);return O.useEffect(()=>{if(!n)return;const o=a=>{a.key==="Escape"&&i(null)};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[n]),f.jsxs("section",{id:"schedule",className:"section-shell section-pad",children:[f.jsxs(ne.div,{className:"section-heading",initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[f.jsx("p",{className:"gold-kicker",children:"SCHEDULE OF EVENTS"}),f.jsx("div",{className:"heading-flower",children:"♥"}),f.jsxs("h2",{children:["A celebration of tradition,",f.jsx("br",{}),f.jsx("em",{children:"love & forever"})]})]}),f.jsx("div",{className:"event-grid",children:pe.events.map((o,a)=>f.jsxs(ne.button,{className:`event-card ${o.tone}`,style:{"--event-image":`url(${Op[a%Op.length]})`},onClick:()=>i(o),whileHover:{y:-7},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:a*.07},children:[f.jsxs("span",{className:"event-index",children:["0",a+1]}),f.jsxs("span",{className:"event-art",children:[f.jsx("i",{children:o.symbol}),f.jsx("b",{children:"❦"})]}),f.jsx("span",{className:"event-title",children:o.title}),f.jsx("span",{className:"event-subtitle",children:o.subtitle}),f.jsx("span",{className:"event-line"}),f.jsx("span",{className:"event-date",children:o.date}),f.jsx("span",{className:"event-open",children:"VIEW INVITATION ↗"})]},o.title))}),f.jsx("p",{className:"schedule-note",children:"Five moments. A lifetime of memories. We cannot wait to celebrate with you."}),f.jsx(yr,{children:n&&f.jsx(ne.div,{className:"lightbox",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>i(null),children:f.jsxs(ne.div,{className:`lightbox-card ${n.tone}`,initial:{scale:.85},animate:{scale:1},exit:{scale:.9},onClick:o=>o.stopPropagation(),role:"dialog","aria-modal":"true",children:[f.jsx("button",{className:"lightbox-close",onClick:()=>i(null),"aria-label":"Close event invitation",children:f.jsx(lw,{})}),f.jsxs("span",{className:"event-art large",children:[f.jsx("i",{children:n.symbol}),f.jsx("b",{children:"❦"})]}),f.jsx("p",{className:"gold-kicker",children:"YOU ARE CORDIALLY INVITED"}),f.jsx("h3",{children:n.title}),f.jsx("p",{className:"event-subtitle",children:n.subtitle}),f.jsxs("div",{className:"lightbox-detail",children:[f.jsx(ym,{size:16}),n.date]}),f.jsxs("div",{className:"lightbox-detail",children:[f.jsx(tw,{size:16}),n.time]}),f.jsxs("div",{className:"lightbox-detail",children:[f.jsx(mu,{size:16}),n.venue]}),f.jsxs("p",{className:"lightbox-blessing",children:["With love, ",pe.couple.groom," & ",pe.couple.bride]})]})})})]})}function Sw(){return f.jsxs("section",{id:"rsvp",className:"section-shell section-pad rsvp-section",children:[f.jsxs("div",{className:"rsvp-background","aria-hidden":"true",children:[f.jsx("div",{className:"rsvp-bg-circle rsvp-circle-one"}),f.jsx("div",{className:"rsvp-bg-circle rsvp-circle-two"}),f.jsx(On,{className:"rsvp-sparkle rsvp-sparkle-one"}),f.jsx(On,{className:"rsvp-sparkle rsvp-sparkle-two"})]}),f.jsxs(ne.div,{className:"section-heading rsvp-heading",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[f.jsx("p",{className:"script-line",children:"We would be delighted by your presence"}),f.jsxs("div",{className:"rsvp-ornament",children:[f.jsx("span",{}),f.jsx(vm,{size:19}),f.jsx("span",{})]}),f.jsx("p",{className:"gold-kicker",children:"KINDLY REPLY"}),f.jsxs("div",{className:"rsvp-monogram",children:[f.jsx("span",{children:pe.couple.monogram}),f.jsx("div",{className:"rsvp-monogram-ring"})]}),f.jsx("h2",{children:"RSVP"}),f.jsx("p",{className:"rsvp-intro",children:"Your presence will make our celebration even more special. We look forward to celebrating this beautiful occasion with you."})]}),f.jsx(ne.div,{className:"rsvp-footer",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:f.jsxs("div",{className:"rsvp-footer-inner",children:[f.jsx("div",{className:"footer-decoration",children:f.jsx(mu,{size:25,strokeWidth:1.2})}),f.jsx("p",{className:"script-line",children:"We can't wait to see you"}),f.jsx("h3",{children:"Celebrate This New Chapter With Us."}),f.jsx("p",{className:"rsvp-footer-description",children:"Join us as we begin a beautiful journey filled with love, laughter and lifelong memories."}),f.jsxs("a",{className:"rsvp-directions",href:pe.location.mapsUrl,target:"_blank",rel:"noopener noreferrer",children:[f.jsx(nw,{size:17}),f.jsx("span",{children:"GET DIRECTIONS"}),f.jsx(ew,{size:16})]}),f.jsxs("div",{className:"rsvp-footer-bottom",children:[f.jsx("span",{}),f.jsx(Rt,{size:14}),f.jsx("span",{})]})]})}),f.jsx("style",{children:`

        /* MAIN SECTION */

        .rsvp-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background:
            radial-gradient(
              ellipse at 50% 40%,
              rgba(214,185,133,.12),
              transparent 65%
            ),
            #fbf8f1;
          color: #493725;
        }

        .rsvp-background {
          position: absolute;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
        }

        .rsvp-bg-circle {
          position: absolute;
          border: 1px solid rgba(177,139,77,.13);
          border-radius: 50%;
        }

        .rsvp-circle-one {
          width: 430px;
          height: 430px;
          top: -220px;
          right: -170px;
        }

        .rsvp-circle-two {
          width: 500px;
          height: 500px;
          bottom: -280px;
          left: -220px;
        }

        .rsvp-sparkle {
          position: absolute;
          color: #b18b4d;
          opacity: .35;
        }

        .rsvp-sparkle-one {
          top: 16%;
          left: 9%;
        }

        .rsvp-sparkle-two {
          bottom: 20%;
          right: 10%;
        }

        /* RSVP HEADING */

        .rsvp-heading {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto 55px;
          text-align: center;
        }

        .rsvp-ornament {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          color: #b18b4d;
          margin: 20px auto;
        }

        .rsvp-ornament span {
          width: 55px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #b18b4d,
            transparent
          );
        }

        .rsvp-monogram {
          position: relative;
          width: 90px;
          height: 90px;
          margin: 22px auto;
          border-radius: 50%;
          background: #f8f0e1;
          border: 1px solid #bd9a5b;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8c693c;
          font-family: Georgia, serif;
          font-size: 27px;
          letter-spacing: 2px;
        }

        .rsvp-monogram-ring {
          position: absolute;
          inset: 6px;
          border: 1px dashed rgba(177,139,77,.7);
          border-radius: 50%;
        }

        .rsvp-heading h2 {
          font-family: var(--font-heading, Georgia, serif);
          font-size: clamp(42px, 7vw, 62px);
          color: #4b3727;
          letter-spacing: .12em;
          margin: 12px 0;
        }

        .rsvp-intro {
          max-width: 520px;
          margin: 15px auto 0;
          color: #8c7860;
          font-size: 14px;
          line-height: 1.9;
        }

        /* CELEBRATION FOOTER */

        .rsvp-footer {
          position: relative;
          z-index: 1;
          max-width: 850px;
          margin: 0 auto;
          padding: 10px;
          background: rgba(255,253,248,.8);
          border: 1px solid rgba(189,154,91,.55);
          box-shadow: 0 15px 45px rgba(83,58,29,.07);
          text-align: center;
        }

        .rsvp-footer-inner {
          position: relative;
          padding: 45px 25px;
          border: 1px solid rgba(189,154,91,.22);
        }

        .footer-decoration {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          border: 1px solid #bd9a5b;
          border-radius: 50%;
          background: #f8f0e1;
          color: #9b7847;
        }

        .rsvp-footer h3 {
          font-family: var(--font-heading, Georgia, serif);
          font-size: clamp(25px, 4vw, 36px);
          line-height: 1.3;
          font-weight: 500;
          color: #4b3727;
          margin: 12px 0;
        }

        .rsvp-footer-description {
          max-width: 480px;
          margin: 15px auto 25px;
          color: #8c7860;
          font-size: 13px;
          line-height: 1.9;
        }

        .rsvp-directions {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 49px;
          padding: 0 26px;
          background: #8c693c;
          color: #fff9eb;
          border: 1px solid #8c693c;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .2em;
          text-decoration: none;
          transition: all .3s ease;
        }

        .rsvp-directions:hover {
          background: #6d4e2d;
          border-color: #6d4e2d;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(83,58,29,.18);
        }

        .rsvp-footer-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          color: #bd9a5b;
          margin-top: 30px;
        }

        .rsvp-footer-bottom span {
          width: 45px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #bd9a5b,
            transparent
          );
        }

        /* TABLET */

        @media (max-width: 768px) {
          .rsvp-heading {
            margin-bottom: 40px;
          }

          .rsvp-footer {
            max-width: 650px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .rsvp-heading {
            padding: 0 10px;
            margin-bottom: 35px;
          }

          .rsvp-monogram {
            width: 78px;
            height: 78px;
            font-size: 23px;
          }

          .rsvp-intro {
            font-size: 13px;
          }

          .rsvp-footer {
            margin-top: 20px;
          }

          .rsvp-footer-inner {
            padding: 35px 17px;
          }

          .rsvp-footer-description {
            font-size: 12px;
          }

          .rsvp-directions {
            width: 100%;
            max-width: 260px;
            box-sizing: border-box;
            padding: 0 12px;
          }

          .rsvp-sparkle {
            opacity: .18;
          }
        }

        @media (max-width: 380px) {
          .rsvp-footer h3 {
            font-size: 25px;
          }

          .rsvp-footer-inner {
            padding: 30px 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rsvp-directions {
            transition: none;
          }
        }

      `})]})}function kw(){const[n,i]=O.useState(!1),[o,a]=O.useState(!1),[c,p]=O.useState(""),d=O.useRef(null),m=O.useRef(null),g=w=>{p(w),m.current&&window.clearTimeout(m.current),m.current=window.setTimeout(()=>{p("")},2800)};O.useEffect(()=>()=>{m.current&&window.clearTimeout(m.current)},[]);const y=async()=>{i(!0);const w=d.current;if(w){w.muted=o,w.volume=.35;try{await w.play()}catch{g("Tap the sound button to start the wedding music.")}}},v=async()=>{const w=d.current;if(!w)return;const j=!o;if(a(j),w.muted=j,!j&&w.paused)try{await w.play()}catch{g("Please tap again to start the music.")}g(j?"Music turned off":"Music turned on")};return f.jsx(L0,{reducedMotion:"user",children:f.jsxs("div",{className:"wedding-app",children:[f.jsx("audio",{ref:d,src:"/ambient-wedding.wav",loop:!0,preload:"auto"}),f.jsx(yr,{mode:"wait",children:!n&&f.jsx(ne.div,{initial:{opacity:1},exit:{opacity:0,scale:1.025,filter:"blur(8px)"},transition:{duration:.8,ease:"easeInOut"},children:f.jsx(cw,{onOpen:y})},"envelope")}),f.jsx(yr,{children:n&&f.jsxs(ne.div,{className:"wedding-website",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[f.jsx(dw,{}),f.jsxs("main",{children:[f.jsx(fw,{showToast:g}),f.jsx(ne.div,{initial:{opacity:0,y:25},animate:{opacity:1,y:0},transition:{delay:.3,duration:.8},children:f.jsx(yw,{})}),f.jsx(ne.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.08},transition:{duration:.8},children:f.jsx(xw,{})}),f.jsx(ne.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.08},transition:{duration:.8},children:f.jsx(ww,{})}),f.jsx(ne.div,{initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.08},transition:{duration:.8},children:f.jsx(Sw,{})})]}),f.jsxs(ne.button,{className:"sound-toggle",onClick:v,"aria-label":o?"Turn music on":"Turn music off",title:o?"Turn music on":"Turn music off",initial:{opacity:0,scale:.7},animate:{opacity:1,scale:1},transition:{delay:1,duration:.5},whileHover:{scale:1.08},whileTap:{scale:.92},children:[f.jsx("span",{className:"sound-icon",children:o?f.jsx(aw,{size:19}):f.jsx(sw,{size:19})}),f.jsx("span",{className:"sound-label",children:o?"Sound off":"Sound on"}),!o&&f.jsxs("span",{className:"sound-wave",children:[f.jsx("i",{}),f.jsx("i",{}),f.jsx("i",{})]})]}),f.jsxs("footer",{className:"site-footer",children:[f.jsx("span",{children:"MADE WITH"}),f.jsx(Rt,{size:13,fill:"currentColor",className:"footer-heart"}),f.jsx("span",{children:"FOR A BEAUTIFUL BEGINNING"})]})]},"wedding-website")}),f.jsx(yr,{children:c&&f.jsxs(ne.div,{className:"toast",role:"status","aria-live":"polite",initial:{opacity:0,y:25,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:15,scale:.95},transition:{duration:.25},children:[f.jsx(Rt,{size:15,fill:"currentColor"}),c]})}),f.jsx("style",{children:`
          .wedding-app {
            min-height: 100vh;
            overflow: clip;
            position: relative;
          }

          .wedding-website {
            min-height: 100vh;
          }

          .sound-toggle {
            position: fixed;
            z-index: 1000;
            right: 22px;
            bottom: 24px;
            display: flex;
            align-items: center;
            gap: 9px;
            padding: 11px 15px;
            border: 1px solid rgba(218, 181, 112, 0.65);
            border-radius: 50px;
            background: rgba(39, 24, 17, 0.88);
            color: #f5dfb4;
            backdrop-filter: blur(14px);
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            font-size: 11px;
            letter-spacing: 1px;
          }

          .sound-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #eac47f;
          }

          .sound-wave {
            display: flex;
            align-items: center;
            gap: 2px;
            height: 15px;
          }

          .sound-wave i {
            display: block;
            width: 2px;
            height: 5px;
            border-radius: 5px;
            background: #eac47f;
            animation: soundWave 0.8s ease-in-out infinite alternate;
          }

          .sound-wave i:nth-child(2) {
            animation-delay: 0.25s;
          }

          .sound-wave i:nth-child(3) {
            animation-delay: 0.45s;
          }

          @keyframes soundWave {
            from { height: 4px; }
            to { height: 14px; }
          }

          .site-footer {
            min-height: 75px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 9px;
            padding: 22px 18px;
            background: #241811;
            color: #e7c993;
            font-family: Georgia, serif;
            font-size: 9px;
            letter-spacing: 2px;
            text-align: center;
          }

          .footer-heart {
            color: #c77b66;
          }

          .toast {
            position: fixed;
            z-index: 2000;
            left: 50%;
            bottom: 85px;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            max-width: calc(100vw - 30px);
            padding: 13px 20px;
            border: 1px solid rgba(225, 190, 126, 0.6);
            border-radius: 50px;
            background: #302016;
            color: #f7e3bd;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
            font-size: 12px;
            text-align: center;
          }

          .toast svg {
            flex-shrink: 0;
            color: #e7bd77;
          }

          @media (max-width: 600px) {
            .sound-toggle {
              right: 13px;
              bottom: 14px;
              padding: 10px 12px;
            }

            .sound-label {
              font-size: 10px;
            }

            .site-footer {
              font-size: 8px;
              letter-spacing: 1.3px;
              gap: 6px;
            }

            .toast {
              bottom: 70px;
              font-size: 11px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .sound-wave i {
              animation: none;
            }
          }
        `})]})})}j0.createRoot(document.getElementById("root")).render(f.jsx(kw,{}));
