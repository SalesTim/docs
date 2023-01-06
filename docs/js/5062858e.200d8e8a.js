"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[763],{35130:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));t(19959);const o={author:"Guillaume Meyer"},i="Audience Targeting",l={unversionedId:"catalog-manager-guide/governance-policies/audience-targeting",id:"catalog-manager-guide/governance-policies/audience-targeting",title:"Audience Targeting",description:"ABSTRACT",source:"@site/contents/35-catalog-manager-guide/40-governance-policies/audience-targeting.md",sourceDirName:"35-catalog-manager-guide/40-governance-policies",slug:"/catalog-manager-guide/governance-policies/audience-targeting",permalink:"/catalog-manager-guide/governance-policies/audience-targeting",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/35-catalog-manager-guide/40-governance-policies/audience-targeting.md",tags:[],version:"current",frontMatter:{author:"Guillaume Meyer"},sidebar:"autoSidebar",previous:{title:"Team creation approval workflow",permalink:"/catalog-manager-guide/governance-policies/approval"},next:{title:"Mandatory Number of Owners and Members at teams Creation",permalink:"/catalog-manager-guide/governance-policies/mandatory-number-of-owners-and-members"}},s={},p=[{value:"Available tags",id:"available-tags",level:2},{value:"Examples",id:"examples",level:2},{value:"Comparison operators",id:"comparison-operators",level:3},{value:"Combining multiple criteria",id:"combining-multiple-criteria",level:3},{value:"Functions",id:"functions",level:3},{value:"Using groups membership",id:"using-groups-membership",level:3},{value:"Azure AD Schema Extension",id:"azure-ad-schema-extension",level:3},{value:"Validate and test your audience targeting rule",id:"validate-and-test-your-audience-targeting-rule",level:2}],m={toc:p};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"audience-targeting"},"Audience Targeting"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ABSTRACT"),(0,r.kt)("br",{parentName:"p"}),"\n","An audience targeting rule could be applied to a template to define who can access and therefore use it, based on the user profile data. Intrinsically, targeting rules are a combination of tags and expressions that are evaluated against a user profile to determine if a template is shown or not."),(0,r.kt)("h2",{id:"available-tags"},"Available tags"),(0,r.kt)("p",null,"Targeting rules can use user profile information through the following tags:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tag"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.displayName")),(0,r.kt)("td",{parentName:"tr",align:null},'User full name (for example "Bob Dirac".)')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.userPrincipalName")),(0,r.kt)("td",{parentName:"tr",align:null},'User UPN. In Active Directory, a User Principal Name (UPN) is the name of a system user in an email address format. A UPN (for example: "',(0,r.kt)("a",{parentName:"td",href:"mailto:bob.dirac@contoso.onmicrosoft.com"},"bob.dirac@contoso.onmicrosoft.com"),'") consists of the user name (logon name), separator (the @ symbol), and domain name (UPN suffix). ',(0,r.kt)("hr",null),"Important: A UPN is not the same as an email address. Sometimes, a UPN can match a user's email address, but this is not a general rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.mail")),(0,r.kt)("td",{parentName:"tr",align:null},'User email (for example: "',(0,r.kt)("a",{parentName:"td",href:"mailto:bob.dirac@domain.com"},"bob.dirac@domain.com"),'").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.preferredLanguage")),(0,r.kt)("td",{parentName:"tr",align:null},"User preferred language in Microsoft 365. ",(0,r.kt)("hr",null),"Language and locale codes are limited to those in the ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/ISO_639-1"},"ISO 639-1 standard"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.givenName")),(0,r.kt)("td",{parentName:"tr",align:null},'User given name (for example: "Bob").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.country")),(0,r.kt)("td",{parentName:"tr",align:null},'User country (for example: "France").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.companyName")),(0,r.kt)("td",{parentName:"tr",align:null},'User company name (for example: "Contoso").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.department")),(0,r.kt)("td",{parentName:"tr",align:null},'User department (for example: "Marketing").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.city")),(0,r.kt)("td",{parentName:"tr",align:null},'User city (for example: "Paris").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.jobTitle")),(0,r.kt)("td",{parentName:"tr",align:null},'User job title (for example: "Product Manager").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.surname")),(0,r.kt)("td",{parentName:"tr",align:null},'User surname (for example: "Dirac").')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.usageLocation")),(0,r.kt)("td",{parentName:"tr",align:null},'Office 365 usage location. (for example: "US") ',(0,r.kt)("hr",null),"Rely on the ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"},"ISO 3166-1 alpha-2 country codes..."),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user.groups.direct")),(0,r.kt)("td",{parentName:"tr",align:null},"All the groups that the user is a DIRECT member of.")))),(0,r.kt)("admonition",{title:"Case sensitivity",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be careful: These tags are ",(0,r.kt)("strong",{parentName:"p"},"CASE-SENSITIVE")," and therefore must be always used lower-cased. ")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"In combination with tags, targeting rules can use any standard JavaScript operator and function. This section provides some typical examples, from the simplest to the most complex one, to target your templates to specific audiences in an organization."),(0,r.kt)("h3",{id:"comparison-operators"},"Comparison operators"),(0,r.kt)("p",null,"To compare two values, your expression can use any standard JavaScript ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators"},"comparison operator"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// From France\nuser.country === 'FR'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// From any country except from Germany\nuser.country !== 'DE'\n")),(0,r.kt)("admonition",{title:"Evaluation",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"N.B: The template will be shown to a user only if the expression is evaluated as ",(0,r.kt)("inlineCode",{parentName:"p"},"true"))),(0,r.kt)("h3",{id:"combining-multiple-criteria"},"Combining multiple criteria"),(0,r.kt)("p",null,"Rules follows the standard JavaScript ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence"},"operator precedence"),", so you can combine multiple rules in one expression."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// From France or Belgium, member of the Marketing Department\n( user.country === 'FR' || user.country === 'BE' ) && user.department === 'Marketing' \n")),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,"As part of your rules, you can use any standard JavaScript function, for instance ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods"},"strings methods"),", or for more advanced scenarios, ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"regular expressions"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// English speakers from any country\nuser.preferredLanguage.includes('en-')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// users with @contoso.com or @contoso.fr in their email domain name\nuser.mail.includes('@contoso.com') || user.mail.includes('@contoso.fr')\n")),(0,r.kt)("h3",{id:"using-groups-membership"},"Using groups membership"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"user.groups.direct")," tag gives you access to all the groups that the user is a DIRECT member of, as an array of groups objects. Therefore, you can use any standard JavaScript ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods"},"array function")," for your evaluation."),(0,r.kt)("p",null,"There are several types of groups, that can be differentiated by their ",(0,r.kt)("inlineCode",{parentName:"p"},"@odata.type")," property:"),(0,r.kt)("admonition",{title:"Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The response object shown here might be shortened for readability. All the default properties are returned for each group in an actual call.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@odata.type":"#microsoft.graph.directoryRole", // Standard Azure AD groups, such as the admin roles from your Microsoft 365 environment\n    "id":"3b4b0f4e-d037-4116-bd0e-1a2173d95d5a",\n    "deletedDateTime":null,\n    "description":"Company Administrator role has full access to perform any operation in the company scope.",\n    "displayName":"Global Administrator",\n    "roleTemplateId":"72e90394-69f5-4237-9190-012177145e10"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@odata.type":"#microsoft.graph.group", // Microsoft 365 groups, associated with a team or a SharePoint site.\n    "id":"e9090752-4430-4361-8594-e6ce98a7fbfa",\n    "deletedDateTime":null,\n    "classification":null,\n    "createdDateTime":"2020-08-04T15:39:08Z",\n    "description":"A fantastic group!!!",\n    "displayName":"Onboarding",\n    "groupTypes":["Unified"],\n    "mail":"Onboarding@contoso.com",\n    "mailEnabled":true,\n    "mailNickname":"Onboarding",\n    "preferredDataLocation":null,\n    "preferredLanguage":null,\n    "resourceProvisioningOptions":["Team"],\n    "visibility":"Private"\n}\n')),(0,r.kt)("p",null,'In this example, we\'re testing user membership by checking if one of its groups contains the word "Onboarding" in its display name:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Is a member of an \"Onboarding\" group\nuser.groups.direct.some(group => group.displayName.includes('Onboarding'))\n")),(0,r.kt)("admonition",{title:"Case sensitivity",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be careful, evaluations are ",(0,r.kt)("strong",{parentName:"p"},"case-sensitive"),". Therefore to make sure your evaluation work independently of the case, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"toLowerCase")," function, such as: ",(0,r.kt)("inlineCode",{parentName:"p"},"group.displayName.toLowerCase().includes('Onboarding')"))),(0,r.kt)("p",null,"In this example, we're testing is the user is a member of a specific group by checking if one of its groups has a specific ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Is a member of a specific group by its ID\nuser.groups.direct.some(group => group.id === ('a937979b-5dbb-4f54-a405-936046244b0b'))\n")),(0,r.kt)("h3",{id:"azure-ad-schema-extension"},"Azure AD Schema Extension"),(0,r.kt)("p",null,"To use Azure AD schema extensions in your audience targeting rules, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/governance-policies/use-ad-schema-extensions"},"this article")),(0,r.kt)("h2",{id:"validate-and-test-your-audience-targeting-rule"},"Validate and test your audience targeting rule"),(0,r.kt)("admonition",{title:"Syntax Assistant",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'A "Check Syntax" button is available to test the rule against the current logged user. You can expect 3 kind of outcomes.'),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"You would have access"),(0,r.kt)("li",{parentName:"ol"},"You would not have access"),(0,r.kt)("li",{parentName:"ol"},"An error is detected. In case of error, the technical details are also available, helping you solve the issue."))))}u.isMDXComponent=!0}}]);