"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5447],{74553:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));a(8209);const i={position:3,status:"published",author:"Guillaume Meyer"},l="Authentication and access control",o={unversionedId:"trust-center/authentication-and-access-control",id:"trust-center/authentication-and-access-control",title:"Authentication and access control",description:"Authentication",source:"@site/contents/90-trust-center/authentication-and-access-control.md",sourceDirName:"90-trust-center",slug:"/trust-center/authentication-and-access-control",permalink:"/trust-center/authentication-and-access-control",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/90-trust-center/authentication-and-access-control.md",tags:[],version:"current",frontMatter:{position:3,status:"published",author:"Guillaume Meyer"},sidebar:"autoSidebar",previous:{title:"Anti-malware policy",permalink:"/trust-center/anti-malware-policy"},next:{title:"Classification",permalink:"/trust-center/classification"}},p={},s=[{value:"Authentication",id:"authentication",level:2},{value:"Identity Provider (IdP)",id:"identity-provider-idp",level:3},{value:"Single Sign On (SSO)",id:"single-sign-on-sso",level:3},{value:"Role Based Access Control (RBAC)",id:"role-based-access-control-rbac",level:2},{value:"Supported roles",id:"supported-roles",level:3},{value:"Roles Permissions",id:"roles-permissions",level:3}],d={toc:s},c="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authentication-and-access-control"},"Authentication and access control"),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("h3",{id:"identity-provider-idp"},"Identity Provider (IdP)"),(0,r.kt)("p",null,"Access to nBold relies 100% on Microsoft Azure Active Directory (AAD) as an IdP for authentication.",(0,r.kt)("br",{parentName:"p"}),"\n","Especially, it means that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User authentication is performed against your own AAD, just like any other regular Office 365 authentication process."),(0,r.kt)("li",{parentName:"ul"},"You can enable, disable and manage individual permissions grants from your own AAD."),(0,r.kt)("li",{parentName:"ul"},"We're not accessing, processing nor storing any login / password."),(0,r.kt)("li",{parentName:"ul"},"Our authentication mechanism is compatible with any ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Multi-factor_authentication"},"MFA")," authentication method supported by AAD.")),(0,r.kt)("h3",{id:"single-sign-on-sso"},"Single Sign On (SSO)"),(0,r.kt)("p",null,"Single Sign On (SSO) for Microsoft Teams custom apps such as nBold is not yet fully supported by Microsoft, as the current implementation for SSO only grants consent for user-level permissions (email, profile, offline_access, openid) but not for other APIs (such as Microsoft Graph).",(0,r.kt)("br",{parentName:"p"}),"\n","For further reference, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-aad-sso#known-limitations"},"Microsoft Teams SSO for custom apps known limitations")),(0,r.kt)("admonition",{title:"Service account authentication details ",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For service account authentication details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/trust-center/microsoft-graph-permissions"},"Microsoft Graph Permissions"))),(0,r.kt)("h2",{id:"role-based-access-control-rbac"},"Role Based Access Control (RBAC)"),(0,r.kt)("p",null,"Role based access control (RBAC) enables Microsoft 365 global administrators to define permissions and restrict access to specific nBold's features to specific groups of users."),(0,r.kt)("p",null,"To implement RBAC and provide a high level of granularity, nBold relies on both standard Microsoft 365 roles, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"Teams service admin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Global admin"),", and also on some application specific roles, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Catalog managers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Integration manager"),"."),(0,r.kt)("h3",{id:"supported-roles"},"Supported roles"),(0,r.kt)("p",null,"The nBold platform supports the following roles:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Origin"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"End-User"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AUTHENTICATED_USER")),(0,r.kt)("td",{parentName:"tr",align:null},"nBold")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorized App"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AUTHORIZED_APP")),(0,r.kt)("td",{parentName:"tr",align:null},"nBold")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Catalog Manager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CATALOG_MANAGER")),(0,r.kt)("td",{parentName:"tr",align:null},"nBold")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integration Manager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INTEGRATION_MANAGER")),(0,r.kt)("td",{parentName:"tr",align:null},"nBold")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Change Manager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CHANGE_MANAGER")),(0,r.kt)("td",{parentName:"tr",align:null},"nBold")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Teams Service Admin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TEAMS_SERVICE_ADMIN")),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft 365")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Global Admin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GLOBAL_ADMIN")),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft 365")))),(0,r.kt)("h3",{id:"roles-permissions"},"Roles Permissions"),(0,r.kt)("p",null,"Here is the matrix of features/roles supported by the nBold platform:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"center"},"End-User"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Authorized App"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Catalog Manager"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Integration Manager"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Change Manager"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Teams Service Admin"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Global Admin"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Home")," - View teams you're a member of from the homepage"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"New team")," - Create a new team based on a template"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Approval")," - Approve / Reject a team creation request"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Templates Catalog")," - Create / Update / Delete team templates, define their content, select their approvers, define their audience targeting and select a governance policy"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Integration")," - Manage platform's webhooks and external connected apps integration settings"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Preview Features")," - Allows change managers responsible for nBold updates to prepare for the upcoming changes by letting them test and validate new updates before they are released to all the users in the organization"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Governance policies")," - Define global governance policies available from the template catalog, including security and compliance rules"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Settings")," - Manage service credentials and other platform's system configuration"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Audit trails")," - View company-wide and user-level audit trails"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Roles management")," - Assign roles to specific users"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udeab"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")))))}m.isMDXComponent=!0}}]);