"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4716],{71089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=r(87462),a=(r(67294),r(3905));r(8209);const s={position:8,status:"published",tags:[],author:"Guillaume Meyer"},n="Secure Software Development Lifecycle (SSDLC)",o={unversionedId:"trust-center/secure-software-development-life-cycle",id:"trust-center/secure-software-development-life-cycle",title:"Secure Software Development Lifecycle (SSDLC)",description:"Secure Development Principles",source:"@site/contents/90-trust-center/secure-software-development-life-cycle.md",sourceDirName:"90-trust-center",slug:"/trust-center/secure-software-development-life-cycle",permalink:"/trust-center/secure-software-development-life-cycle",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/90-trust-center/secure-software-development-life-cycle.md",tags:[],version:"current",frontMatter:{position:8,status:"published",tags:[],author:"Guillaume Meyer"},sidebar:"autoSidebar",previous:{title:"Release process",permalink:"/trust-center/release-process"},next:{title:"Security Policy",permalink:"/trust-center/security-policy"}},l={},u=[{value:"Secure Development Principles",id:"secure-development-principles",level:2},{value:"Standard JavaScript Style",id:"standard-javascript-style",level:2},{value:"ESLint Security",id:"eslint-security",level:2},{value:"NPM Audit",id:"npm-audit",level:2},{value:"GitHub Security Alerts",id:"github-security-alerts",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"secure-software-development-lifecycle-ssdlc"},"Secure Software Development Lifecycle (SSDLC)"),(0,a.kt)("h2",{id:"secure-development-principles"},"Secure Development Principles"),(0,a.kt)("p",null,"We at nBold know you care about how your personal information is used and shared, and we take your privacy seriously by implementing the most rigorous practices for our developments."),(0,a.kt)("p",null,"These best practices are gounded by the ",(0,a.kt)("a",{parentName:"p",href:"https://www.owasp.org"},"OWASP Security Design Principles"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Minimize attack surface area : The aim for secure development is to reduce the overall risk by reducing the attack surface area."),(0,a.kt)("li",{parentName:"ul"},"Establish secure defaults: By default, the experience should be secure, and it should be up to the user to reduce their security \u2013 if they are allowed."),(0,a.kt)("li",{parentName:"ul"},"Principle of Least privilege: The principle of least privilege recommends that accounts have the least amount of privilege required to perform their business processes. See ",(0,a.kt)("a",{parentName:"li",href:"/trust-center/microsoft-graph-permissions"},"Microsoft Graph Permissions")," as an example."),(0,a.kt)("li",{parentName:"ul"},"Principle of Defense in depth: The principle of defense in depth suggests that where one control would be reasonable, more controls that approach risks in different fashions are better."),(0,a.kt)("li",{parentName:"ul"},"Fail securely: Applications regularly fail to process transactions for many reasons. How they fail can determine if an application is secure or not."),(0,a.kt)("li",{parentName:"ul"},"Don\u2019t trust services: Many organizations utilize the processing capabilities of third party partners, who more than likely have differing security policies and posture than you. Therefore, implicit trust of externally run systems is not warranted. All external systems should be treated in a similar fashion."),(0,a.kt)("li",{parentName:"ul"},"Separation of duties: Certain roles have different levels of trust than normal users. In particular, administrators are different to normal users. In general, administrators should not be users of the application."),(0,a.kt)("li",{parentName:"ul"},"Avoid security by obscurity: Security through obscurity is a weak security control, and nearly always fails when it is the only control."),(0,a.kt)("li",{parentName:"ul"},"Keep security simple: Developers should avoid the use of double negatives and complex architectures when a simpler approach would be faster and simpler."),(0,a.kt)("li",{parentName:"ul"},"Fix security issues correctly: Once a security issue has been identified, it is important to develop a test for it, and to understand the root cause of the issue. When design patterns are used, it is likely that the security issue is widespread amongst all code bases, so developing the right fix without introducing regressions is essential."),(0,a.kt)("li",{parentName:"ul"},"Secure Release Process: Aside from the Secure Development Principles, we're using several tools during our release process as a gateway before each release and deployment, to reduce risks and avoid common pitfalls.")),(0,a.kt)("h2",{id:"standard-javascript-style"},"Standard JavaScript Style"),(0,a.kt)("p",null,"This module enforces JavaScript development best practices in different ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automatically format code: Ease code maintenance and prevents messy or inconsistent code."),(0,a.kt)("li",{parentName:"ul"},"Catch style issues & programmer errors early: Save precious code review time by eliminating back-and-forth between reviewer & contributor, avoiding common style issues that may impact security.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See our latest JavaScript Style Report: ",(0,a.kt)("a",{parentName:"p",href:"https://assets.nbold.io/audits/code/code_linting_report.log"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/code_style-standard-success.svg",alt:"JavaScript Style Report"})))),(0,a.kt)("p",null,"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/standard#usage"},"Standard JavaScript Style")," and its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/standard/standard/blob/HEAD/RULES"},"Enforced Rules")),(0,a.kt)("h2",{id:"eslint-security"},"ESLint Security"),(0,a.kt)("p",null,"This security plugin helps us to identify potential security hotspots during development, take proactive countermeasure and therefore enforce our security best practices.  "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See our latest ESLint Security Report: ",(0,a.kt)("a",{parentName:"p",href:"https://assets.nbold.io/audits/code/code_security_report.log"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/eslint_security-audited-success.svg",alt:"ESLint Security"})))),(0,a.kt)("p",null,"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodesecurity/eslint-plugin-security"},"ESLint Security Plugin")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodesecurity/eslint-plugin-security#rules"},"Security Rules")),(0,a.kt)("h2",{id:"npm-audit"},"NPM Audit"),(0,a.kt)("p",null,"This tool performs a moment-in-time security review of our project\u2019s dependency tree and looks for known vulnerabilities.",(0,a.kt)("br",{parentName:"p"}),"\n","Audit reports contain information about potential security vulnerabilities in our dependencies and helps us fix a potential vulnerability by providing recommendations for further troubleshooting.  "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"See our latest NPM Audit Report: ",(0,a.kt)("a",{parentName:"p",href:"https://assets.nbold.io/audits/third_party/third_party_security_report.log"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/npm_audit-audited-success.svg",alt:"NPM Audit Report"})))),(0,a.kt)("p",null,"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/audit"},"NPM Audit")),(0,a.kt)("h2",{id:"github-security-alerts"},"GitHub Security Alerts"),(0,a.kt)("p",null,"The nBold Platform sources and build tools are hosted on a secure GitHub enterprise environment.",(0,a.kt)("br",{parentName:"p"}),"\n","GitHub automatically tracks public vulnerabilities in packages from supported languages on MITRE's ",(0,a.kt)("a",{parentName:"p",href:"https://cve.mitre.org/"},"Common Vulnerabilities and Exposures (CVE) List"),", and use a combination of machine learning and human review to detect vulnerabilities that are not published in the CVE list.",(0,a.kt)("br",{parentName:"p"}),"\n","When GitHub discovers or is notified of a new vulnerability, the nBold team is notified with a security alert. Each security alert includes a severity level and a link to the affected file in our projects. When available, the alert will include further details about the vulnerability and a suggested fix.  "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Any alert of any severity breaks our build and deployment process until resolution.")),(0,a.kt)("p",null,"Learn more about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies"},"GitHub Security Alerts")))}d.isMDXComponent=!0}}]);