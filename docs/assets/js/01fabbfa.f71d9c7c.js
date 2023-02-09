"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[117],{74305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));r(78561);const i={},o="Errors",s={unversionedId:"integrate-with-nbold/api/errors",id:"integrate-with-nbold/api/errors",title:"Errors",description:"While your application should handle all error responses (in the 400 and 500 ranges), pay special attention to certain expected errors and responses, listed in the following table.",source:"@site/contents/70-integrate-with-nbold/10-api/50-errors.md",sourceDirName:"70-integrate-with-nbold/10-api",slug:"/integrate-with-nbold/api/errors",permalink:"/integrate-with-nbold/api/errors",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/70-integrate-with-nbold/10-api/50-errors.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"autoSidebar",previous:{title:"Rate limits",permalink:"/integrate-with-nbold/api/rate-limits"},next:{title:"Webhooks",permalink:"/integrate-with-nbold/api/webhooks"}},l={},d=[{value:"Reliability and support",id:"reliability-and-support",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"errors"},"Errors"),(0,n.kt)("p",null,"While your application should handle all error responses (in the 400 and 500 ranges), pay special attention to certain expected errors and responses, listed in the following table."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Topic"),(0,n.kt)("th",{parentName:"tr",align:"left"},"HTTP code"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Best practice"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"User does not have access"),(0,n.kt)("td",{parentName:"tr",align:"left"},"403"),(0,n.kt)("td",{parentName:"tr",align:"left"},'If your application is up and running, it could encounter this error even if it has been granted the necessary permissions. In this case, it\'s most likely that the signed-in user or virtual app does not have privileges to access the resource requested. Your application should provide a generic "Access denied" error back to the signed-in user.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Not found"),(0,n.kt)("td",{parentName:"tr",align:"left"},"404"),(0,n.kt)("td",{parentName:"tr",align:"left"},"In certain cases, a requested resource might not be found. For example a resource might not exist, because it has not yet been provisioned or because it has been deleted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Throttling"),(0,n.kt)("td",{parentName:"tr",align:"left"},"429"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIs might throttle at any time for a variety of reasons, so your application must ",(0,n.kt)("strong",{parentName:"td"},"always")," be prepared to handle 429 responses. This error response includes the ",(0,n.kt)("inlineCode",{parentName:"td"},"Retry-After")," field in the HTTP response header. Backing off requests using the ",(0,n.kt)("inlineCode",{parentName:"td"},"Retry-After")," delay is the fastest way to recover from throttling. For more information, see the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.nbold.co/api#tag/Rate-limits"},"Rate-limit")," article.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Service unavailable"),(0,n.kt)("td",{parentName:"tr",align:"left"},"503"),(0,n.kt)("td",{parentName:"tr",align:"left"},"This is likely because the services is busy. You should employ a back-off strategy similar to 429. Additionally, you should ",(0,n.kt)("strong",{parentName:"td"},"always")," make new retry requests over a new HTTP connection.")))),(0,n.kt)("h2",{id:"reliability-and-support"},"Reliability and support"),(0,n.kt)("p",null,"To ensure reliability and facilitate support for your application, generate a unique GUID and send it on each nBold API REST request. This will help nBold investigate any errors more easily if you need to report an issue with nBold API.\nTo do so, on every request to nBold API, generate a unique GUID, send it in the ",(0,n.kt)("inlineCode",{parentName:"p"},"client-request-id")," HTTP request header, and also log it in your application's logs."))}u.isMDXComponent=!0}}]);