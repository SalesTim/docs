"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1963],{25839:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=a(87462),i=(a(67294),a(3905));a(61839);const n={author:"Guillaume Meyer"},r="Team creation approval workflow",s={unversionedId:"governance-policies/approval",id:"governance-policies/approval",title:"Team creation approval workflow",description:"ABSTRACT",source:"@site/contents/50-governance-policies/approval.md",sourceDirName:"50-governance-policies",slug:"/governance-policies/approval",permalink:"/governance-policies/approval",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/50-governance-policies/approval.md",tags:[],version:"current",frontMatter:{author:"Guillaume Meyer"},sidebar:"autoSidebar",previous:{title:"Create Teams only through Microsoft Teams Templates by nBold",permalink:"/governance-policies/Creating Teams only through Templates"},next:{title:"Audience Targeting",permalink:"/governance-policies/audience-targeting"}},l={},p=[{value:"Understanding your options",id:"understanding-your-options",level:2},{value:"Approval email sent by nBold",id:"approval-email-sent-by-nbold",level:2},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"What about security?",id:"what-about-security",level:3},{value:"Approval email sent by your organization",id:"approval-email-sent-by-your-organization",level:2},{value:"How does it work?",id:"how-does-it-work-1",level:3},{value:"What do I have to do?",id:"what-do-i-have-to-do",level:3},{value:"What about security?",id:"what-about-security-1",level:3},{value:"Microsoft Teams &quot;Approval&quot; app",id:"microsoft-teams-approval-app",level:2},{value:"Use your own custom app",id:"use-your-own-custom-app",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"team-creation-approval-workflow"},"Team creation approval workflow"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ABSTRACT"),(0,i.kt)("br",{parentName:"p"}),"\n","This article describes the different options you have to configure your team creation approval workflow."),(0,i.kt)("h2",{id:"understanding-your-options"},"Understanding your options"),(0,i.kt)("p",null,"Team creation approval workflow in nBold could be configured using one of these options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#approval-email-sent-by-salestim"},"Approval email sent by nBold"),": This is the default and easiest option, works without any configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#approval-email-sent-by-your-organization"},"Approval email sent by your organization"),": If you need advanced security/compliance control over your notification emails."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#microsoft-teams-approval-app"},"Microsoft Teams Approval App"),": A Microsoft Teams native experience, that you can customize using Power Automate or Logic Apps."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#use-your-own-custom-app"},"Use your own custom app"),": Bring your own aproval workflow as a custom application.")),(0,i.kt)("h2",{id:"approval-email-sent-by-nbold"},"Approval email sent by nBold"),(0,i.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"This is the option enabled by default in any new organization, and doesn't require any configuration. In this mode, the approval process is implemented as an Outlook actionable email, send from the ",(0,i.kt)("inlineCode",{parentName:"p"},"notifications@salestim.io")," address."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nBold Approval Workflow Actionable Message",src:a(77216).Z,width:"673",height:"448"})),(0,i.kt)("admonition",{title:"\ud83d\udce7 IMPORTANT",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"nBold does ",(0,i.kt)("strong",{parentName:"p"},"NOT")," collect ",(0,i.kt)("strong",{parentName:"p"},"ANYTHING")," from these notification emails, neither openings, nor clicks, and does not include any invisible image or other form of tracker.")),(0,i.kt)("h3",{id:"what-about-security"},"What about security?"),(0,i.kt)("p",null,"Actionable messages security is guaranteed by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The fact that the actionable message could only be used from the context of a secured Outlook client, and that end-user authentication is entirely managed by the Outlook client (Desktop, Web and Mobile) by providing to the actionable message the required token."),(0,i.kt)("li",{parentName:"ul"},"A sender verification is enforced using signed cards. See: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#sender-verification"},"Sender verification\n")),(0,i.kt)("li",{parentName:"ul"},"Phishing prevention is ensured by using a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#signed-card-payloads"},"Card Signing")," mechanism"),(0,i.kt)("li",{parentName:"ul"},"Requests sent by the actionable message are verified to ensure that they originate from Microsoft. See: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-that-requests-come-from-microsoft"},"Verifying that requests come from Microsoft")),(0,i.kt)("li",{parentName:"ul"},"The token provided by Outlook to the actionable message is used to verify the end-user identity. See: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-the-identity-of-the-user"},"Verifying the identity of the user"),".")),(0,i.kt)("p",null,"Learn more by reading ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements"},"Security requirements for actionable messages in Office 365"),"."),(0,i.kt)("admonition",{title:"\ud83d\udca1 Configure Exchange safelist collections on a mailbox",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"As a Microsoft 365 administrator, you can directly manage an end-user mailbox rules, and add the ",(0,i.kt)("inlineCode",{parentName:"p"},"notifications@salestim.io"),' address to its "Safe Senders" list.',(0,i.kt)("br",{parentName:"p"}),"\n","See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes?view=o365-worldwide#use-exchange-online-powershell-to-configure-the-safelist-collection-on-a-mailbox"},"Use Exchange Online PowerShell to configure the safelist collection on a mailbox"))),(0,i.kt)("h2",{id:"approval-email-sent-by-your-organization"},"Approval email sent by your organization"),(0,i.kt)("h3",{id:"how-does-it-work-1"},"How does it work?"),(0,i.kt)("p",null,"For advanced control over your approval notification emails (for instance to implement custom Exchange transport rules), you can configure nBold to send your approval emails from your own internal email as a sender."),(0,i.kt)("h3",{id:"what-do-i-have-to-do"},"What do I have to do?"),(0,i.kt)("p",null,"You need to enable the service account that you configured in nBold to be authorized to send actionable messages. For that, and to ensure the security around the messages that are sent, Microsoft require to follow these quick steps: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("a",{parentName:"p",href:"https://aka.ms/publishoam"},"Actionable Email Developer Dashboard")," and login with a Microsoft 365 user with ",(0,i.kt)("inlineCode",{parentName:"p"},"Exchange Administrator")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Global administrator")," permissions.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"New provider")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nBold Approval Actionable Message New Provider 2",src:a(80286).Z,width:"3240",height:"1012"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill the form:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- Friendly Name: `nBold` Or `Teams Approval` for example\n- Provider Id (originator): Copy the value that is **Automatically generated** \n- Organization Info: **Automatically generated**\n- Sender email address from which actionable emails will originate: **Your service account email address**\n- Target URLs: `https://api.salestim.io`\n- Public Key:\n```xml\n<RSAKeyValue><Modulus>k0Qqob12HSdll52CbnXkQNW6nZO9477sE9pI8Y6z5M8hPtJinAf2r41Sxss3Y9oP1nzcfs3fHpi1AUjffyD44I2FxmqF+FGfgKsuWeYce/75Kb1QCEDOwTjP4kqgPD8NeJbWNIe2ZRRKilmxmmUZ6NErNEWvf8vzQvvpVeP9CLUIERuBxLlLlitjNTyCUjgTTkC+giKtmcxTnJ/lUav3erPsev8isS+IQwz6SaXCqj/eYnFkhM2ADF2UCL4ssgHEj6jYe4m8IyMQBgxxr4+4fziixn0uimGQqt54VbT4BToq7l7S8wSj3WNRwR7KBBWvo6pnx39fDMWazfLbe5NmsQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>\n```\n- Logo: **You can use the [nBold Logo](https://docs.nbold.co/Logo_degrade_noir@4x.png)**\n")),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("img",{alt:"nBold Approval Actionable Message New Provider Form",src:a(64887).Z,width:"2113",height:"2036"})),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- Scope of submission: `Organization`\n- Additional Information: **One of your Microsoft 365 Exchange or Global administrators**  \n")),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Before submitting the form, ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"BE SURE TO COPY THE PROVIDER ID VALUE")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Accept the terms and conditions and hit "Save"'))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nBold Approval Actionable Message New Provider Form 2",src:a(43904).Z,width:"1698",height:"1194"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait for your Microsoft 365 Exchange or Global administrators to approve this request\n",(0,i.kt)("img",{alt:"nBold Approval Actionable Message New Provider Pending Approval",src:a(4453).Z,width:"2073",height:"600"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Global Admin and Exchange Administrators are then receiving the request in inbox that needs to be approved. "))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nBold Approval Actionable Message New Provider Approval email",src:a(81215).Z,width:"3240",height:"1446"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the administrator needs to approve: ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nBold Approval Actionable Message New Provider Approve",src:a(12360).Z,width:"1896",height:"2008"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Provider is then confirmed as approved")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nBold Approval Actionable Message New Provider Approved",src:a(86854).Z,width:"2811",height:"991"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},'Open the nBold Settings tab and open "Approval" and check the "Enable organization-level provider" option'),(0,i.kt)("li",{parentName:"ol"},'Paste the provider id you copied in the step 3 and hit "Save"')),(0,i.kt)("p",null,"From the nBold Catalog, you should now be able to enable the approval workflow on your templates (You may have to refresh the page to see your changes)."),(0,i.kt)("p",null,"For more details about this procedure, you may refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/email-dev-dashboard"},"Register your service with the actionable email developer dashboard"),"."),(0,i.kt)("h3",{id:"what-about-security-1"},"What about security?"),(0,i.kt)("p",null,"Actionable messages security is guaranteed by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The fact that the actionable message could only be used from the context of a secured Outlook client, and that end-user authentication is entirely managed by the Outlook client (Desktop, Web and Mobile) by providing to the actionable message the required token."),(0,i.kt)("li",{parentName:"ul"},"A sender verification is enforced using signed cards. See: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#sender-verification"},"Sender verification\n")),(0,i.kt)("li",{parentName:"ul"},"Phishing prevention is ensured by using a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#signed-card-payloads"},"Card Signing")," mechanism"),(0,i.kt)("li",{parentName:"ul"},"Requests sent by the actionable message are verified to ensure that they originate from Microsoft. See: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-that-requests-come-from-microsoft"},"Verifying that requests come from Microsoft")),(0,i.kt)("li",{parentName:"ul"},"The token provided by Outlook to the actionable message is used to verify the end-user identity. See: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements#verifying-the-identity-of-the-user"},"Verifying the identity of the user"),".")),(0,i.kt)("p",null,"Learn more by reading ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/security-requirements"},"Security requirements for actionable messages in Office 365"),"."),(0,i.kt)("h2",{id:"microsoft-teams-approval-app"},'Microsoft Teams "Approval" app'),(0,i.kt)("p",null,"Instead of relying on Outlook actionable emails, you can leverage the ",(0,i.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/office/what-is-approvals-a9a01c95-e0bf-4d20-9ada-f7be3fc283d3"},"Microsoft Teams Approvals app")," to implement your team creation approval workflow."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nBold Approval Workflow with Approval App",src:a(47875).Z,width:"4800",height:"2745"})),(0,i.kt)("p",null,"This options brings some valuable benefits and new options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multi-stage approvals"),(0,i.kt)("li",{parentName:"ul"},"Dynamic approvers list (for instance based on the requester profile and manager) "),(0,i.kt)("li",{parentName:"ul"},"Integration with third-party apps")),(0,i.kt)("p",null,"To learn more about this option, please read the ",(0,i.kt)("a",{parentName:"p",href:"/automation/get-started"},"Power Platform and Logic Apps Connectors")," documentation, and refer to these connector's triggers that you can leverage from Microsoft Power Platform and Azure Logic Apps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When a Team Creation Approval is Requested"),(0,i.kt)("li",{parentName:"ul"},"When a Team Creation is Approved"),(0,i.kt)("li",{parentName:"ul"},"When a Team Creation is Rejected")),(0,i.kt)("h2",{id:"use-your-own-custom-app"},"Use your own custom app"),(0,i.kt)("p",null,"Instead of relying on Outlook actionable emails, you can use your own custom application to manage approval workflows."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nBold Approval Workflow with Custom App",src:a(72181).Z,width:"655",height:"415"})),(0,i.kt)("p",null,"To learn more about this option, please read the ",(0,i.kt)("a",{parentName:"p",href:"/api/get-started"},"nBold API")," documentation, and refer to these webhooks that you can leverage from your custom application:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/webhooks#team-creation-approval-requested"},"Team Creation Approval Requested")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/webhooks#supported-events"},"Team Creation Approved")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/webhooks#team-creation-rejected"},"Team Creation Rejected"))))}m.isMDXComponent=!0},80286:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/approval-actionable-message-new-provider-add-27989c3964471562ef6d8b07b9420b67.png"},81215:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/approval-actionable-message-new-provider-approval-email-80a46172ed267d81f93648cc29f6335b.png"},12360:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/approval-actionable-message-new-provider-approve-16674614d4c7366a38dd62f5d14862aa.png"},86854:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/approval-actionable-message-new-provider-approved-1542bd58c6eb8359a51af9820b1a2153.png"},43904:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/approval-actionable-message-new-provider-form-2-32862326f72a48a15e6c6bd27d5d1c8c.png"},64887:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/approval-actionable-message-new-provider-form-31da4175a30c43394a7788299ac86323.png"},4453:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/approval-actionable-message-new-provider-pending-approval-ad0812722fb600b441dd47cbd2172bdc.png"},77216:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/approval-actionable-message-089a5b46ea456dd013566824c7392496.png"},47875:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/approvals-app-531dd139ed0bf3db61b19aa2070e6882.png"},72181:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/custom-approval-705e8f937d1019e3af450cf186ceebc6.png"}}]);