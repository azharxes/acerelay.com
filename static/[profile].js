(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Z5CE:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[profile]",function(){return t("xd0G")}])},xd0G:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSP",(function(){return j}));var i=t("ERkP"),r=t.n(i),o=t("98R4"),c=t("Nhdc"),a=function(e){return new Blob([e]).size>6e3},u=function(e){return JSON.stringify(e.map(encodeURIComponent))},s=function(e){for(;5500<new Blob([u(e)]).size;)e.shift();return e},f=function(e){return e.split("; ").find((function(e){return e.includes("visited_profiles")}))||""},l=function(e){var n=f(e);if(0===n.length)return[];var t=decodeURIComponent(n.replace("".concat("visited_profiles","="),""));return JSON.parse(t)},p=function(e,n){return!(e.indexOf(n)>0)},d=function(e,n){return e.concat(n)},b=function(e,n){var t=new Date;t.setDate(t.getDate()+30);var i=n?"secure;":"";return"visited_profiles=".concat(u(e),"; ").concat(i," expires=").concat(t.toUTCString())},m=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(i.useEffect)((function(){var t=[],i=f(document.cookie);p(i,e)&&(t=l(document.cookie),t=d(t,e),a(i)&&(t=s(t)),document.cookie=b(t,n))}),[])},w=t("EzOB"),k=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(i.useEffect)((function(){var t=n?"secure":"";Object(w.a)(document.cookie).initial_referrer||(document.cookie="initial_referrer=/".concat(e,"; ").concat(t,";"))}),[])},g=t("VtSi"),v=t.n(g),h=t("QsI/"),O=t("ggb3"),_=t.n(O);var C=t("VwCi"),P=function(e){return"/api/profiles/integration/".concat(e,"/subscribe")};function E(e,n){return T.apply(this,arguments)}function T(){return(T=Object(h.a)(v.a.mark((function e(n,t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.a.post(P(n),{value:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,n){var t,i,r=e.find((function(e){return e.id.toString()===n.toString()}));r&&(t="linkClick",i={destination:r.url,title:r.title},"undefined"!==typeof window.fbq&&window.fbq("trackCustom",t,i))}var V=r.a.createElement,j=!0;n.default=function(e){var n=e.theme,t=e.username,a=e.pageTitle,u=e.metaTitle,s=e.metaDescription,f=e.description,l=e.profilePictureUrl,p=e.links,d=e.leapLink,b=e.socialLinks,w=e.integrations,g=e.account,O=e.isProfileVerified,P=e.hasConsentedToView,T=e.isOwner,j=e.isLogoVisible,x=e.mobileDetected;k(t),m(t),Object(i.useEffect)((function(){Object(C.c)(g,document)}),[]);var L=Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.a.post("/api/profiles/user/request-verification"));case 1:case"end":return e.stop()}}),e)})));return V(r.a.Fragment,null,V(c.b,{leapLink:d,pageTitle:a,username:t,title:u,metaDescription:s,profilePictureUrl:l,facebookPixelId:g.facebookPixelId,googleAnalyticsId:g.googleAnalyticsId}),V(o.m,{global:{username:t}},V(o.y,null,V(c.c,{links:p,socialLinks:b,integrations:w,onSubscribe:E,onRequestVerification:L,onLinkClick:function(e){setTimeout((function(){S(g.links,e),Object(C.a)(g,document,e)}),100)},isProfileVerified:O,description:f,isOwner:T,account:g,username:t,leapLink:d,profilePictureUrl:l,pageTitle:a,hasConsentedToView:P,isLogoVisible:j,theme:n,mobileDetected:x}))))}}},[["Z5CE",1,2,6,5,4,10,11,0,7,8]]]);