"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5968],{21975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),r=n(61839);const i={author:"Guillaume Meyer",tags:["automation","connectors","power-platform"]},l="Setup the Automation Connector for Power Platform",p={unversionedId:"automation/power-platform-automation-connector",id:"automation/power-platform-automation-connector",title:"Setup the Automation Connector for Power Platform",description:"Abstract",source:"@site/contents/70-automation/power-platform-automation-connector.md",sourceDirName:"70-automation",slug:"/automation/power-platform-automation-connector",permalink:"/automation/power-platform-automation-connector",draft:!1,editUrl:"https://github.com/nboldhq/docs/tree/main/contents/70-automation/power-platform-automation-connector.md",tags:[{label:"automation",permalink:"/tags/automation"},{label:"connectors",permalink:"/tags/connectors"},{label:"power-platform",permalink:"/tags/power-platform"}],version:"current",frontMatter:{author:"Guillaume Meyer",tags:["automation","connectors","power-platform"]},sidebar:"autoSidebar",previous:{title:"Setup the Automation Connector for Logic Apps",permalink:"/automation/logic-apps-automation-connector"},next:{title:"Open-source",permalink:"/open-source/"}},s={},m=[{value:"Procedure Overview",id:"procedure-overview",level:2},{value:"1. Create a new app registration in Azure Active Directory",id:"1-create-a-new-app-registration-in-azure-active-directory",level:2},{value:"2. Import the nBold OpenAPI definition",id:"2-import-the-nbold-openapi-definition",level:2},{value:"3. Update the Power Platform Connector",id:"3-update-the-power-platform-connector",level:2},{value:"4. Next Steps",id:"4-next-steps",level:2}],c={toc:m};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-the-automation-connector-for-power-platform"},"Setup the Automation Connector for Power Platform"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Abstract"),(0,o.kt)("br",{parentName:"p"}),"\n","This article explains how to register the nBold Connector as a custom connector for Microsoft ",(0,o.kt)("a",{parentName:"p",href:"https://powerplatform.microsoft.com"},"Power Platform"),"."),(0,o.kt)("admonition",{title:"\u23f1 Expected Duration",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Creating the custom connector only requires a few operations that are described hereafter as a detailed step-by-step procedure. Assuming you have all the required access and permissions to execute it properly, it should take ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"less than 10 minutes")),".")),(0,o.kt)("h2",{id:"procedure-overview"},"Procedure Overview"),(0,o.kt)("p",null,"Here is an overview of the overall procedure:"),(0,o.kt)(r.G,{chart:"graph LR\n\n    %% Nodes\n    s([Start])\n    subgraph adop[Azure AD]\n        appreg(1. AD App Registration)\n    end\n    subgraph pp[Power Platform]\n        openapi(2. OpenAPI Import)\n        papps(3. Power Apps)\n        pauto(3. Power Automate)\n        pbi(3. Power BI)\n    end\n    e([End])\n\n    %% Styles\n    classDef startend fill:#9099d8, stroke-width:0px;\n        class s startend\n        class e startend\n\n    %% Links\n    s --\x3e appreg\n    appreg --\x3e|Client id & secret| openapi\n    openapi --\x3e|Use| papps\n    openapi --\x3e|Use| pauto\n    openapi --\x3e|Use| pbi\n    papps --\x3e e\n    pauto --\x3e e\n    pbi --\x3e e",mdxType:"Mermaid"}),(0,o.kt)("h2",{id:"1-create-a-new-app-registration-in-azure-active-directory"},"1. Create a new app registration in Azure Active Directory"),(0,o.kt)("p",null,"To securely access your Microsoft 365 environment through the Microsoft Graph APIs, the first step is to create a dedicated app registration. An Azure AD app registration identifies a third-party app such as nBold, and defines the permissions you wan to grant to it. To learn more, you can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-how-applications-are-added"},"How and why applications are added to Azure AD"),"."),(0,o.kt)("p",null,"To create a new app registration, follow these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open your ",(0,o.kt)("a",{parentName:"li",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview"},"Azure Active Directory portal")),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"App registrations")," from the left menu"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"New registration")," from the top bar"),(0,o.kt)("li",{parentName:"ul"},"Give the app a name, such as:")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nBold Power Platform Connector\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the option ",(0,o.kt)("inlineCode",{parentName:"li"},"Accounts in this organizational directory only"),", as you want to restrict access to your own tenant."),(0,o.kt)("li",{parentName:"ul"},"Use this web redirection URL:")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://global.consent.azure-apim.net/redirect\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Register")),(0,o.kt)("li",{parentName:"ul"},"From the ",(0,o.kt)("inlineCode",{parentName:"li"},"Overview")," menu, copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"Application (client) ID"),", and keep it as we're gonna reuse it later."),(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authentication")," menu"),(0,o.kt)("li",{parentName:"ul"},"Ensure that the ",(0,o.kt)("inlineCode",{parentName:"li"},"Access tokens (used for implicit flows)")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ID tokens (used for implicit and hybrid flows)")," options are checked from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Implicit grant and hybrid flows")," section, and save your updates if required."),(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"Certificates and secrets")," menu and click ",(0,o.kt)("inlineCode",{parentName:"li"},"New client secret"),". A client secret is a kind of a password for your app, so manage it carefully."),(0,o.kt)("li",{parentName:"ul"},"Give a name to your client secret such as:")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nBold Power Platform Connector client secret\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the expiration option, and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Add")),(0,o.kt)("li",{parentName:"ul"},"Copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"Secret Value")," value (be careful, it will only be shown once), and keep it as we're gonna reuse it later.")),(0,o.kt)("admonition",{title:"Be careful",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret Value"),", not the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret ID"),"!"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"App client secret value",src:n(38121).Z,width:"928",height:"244"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("inlineCode",{parentName:"li"},"API permissions")," from the left menu and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Add a permission")," from the top bar"),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft Graph"),", then ",(0,o.kt)("inlineCode",{parentName:"li"},"Delegated permissions")),(0,o.kt)("li",{parentName:"ul"},"From the permissions list, select:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"OpenId permissions >",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"email")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"offline_access")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"profile")))),(0,o.kt)("li",{parentName:"ul"},"Directory >",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Directory.AccessAsUser.All")))),(0,o.kt)("li",{parentName:"ul"},"Group >",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Group.ReadWrite.All")))),(0,o.kt)("li",{parentName:"ul"},"InformationProtectionPolicy >",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"InformationProtectionPolicy.Read")))),(0,o.kt)("li",{parentName:"ul"},"Mail >",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Mail.Send")))),(0,o.kt)("li",{parentName:"ul"},"User >",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"User.Read")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"User.Read.All")))))),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Add permissions")),(0,o.kt)("li",{parentName:"ul"},"Then click ",(0,o.kt)("inlineCode",{parentName:"li"},"Grant admin consent for...")," then ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes"))),(0,o.kt)("p",null,"You're done, you've created your app registration for the nBold Connector. You should also have saved for later the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application (client) ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Client secret")," that we're gonna use in the next steps."),(0,o.kt)("h2",{id:"2-import-the-nbold-openapi-definition"},"2. Import the nBold OpenAPI definition"),(0,o.kt)("p",null,"Now that we've created the app registration, we're gonna use it to create our custom connector."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To import the nBold API OpenAPI definitions for Power Automate and Power Apps, go to ",(0,o.kt)("a",{parentName:"li",href:"https://powerapps.com"},"PowerApps")," or ",(0,o.kt)("a",{parentName:"li",href:"https://flow.microsoft.com"},"Power Automate"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The custom connector you're about to create will be available for both PowerApps and Power Automate, as they're sharing the same list of connectors.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the navigation pane, select ",(0,o.kt)("inlineCode",{parentName:"li"},"Data")," then ",(0,o.kt)("inlineCode",{parentName:"li"},"Custom connectors"),"."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"New custom connector")," then choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Import an OpenAPI from URL")),(0,o.kt)("li",{parentName:"ul"},"Give your connector a name, such as :")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nBold\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Paste this URL:")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://assets.nbold.io/api/nbold-api-openapi-latest.json\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Import"),", then ",(0,o.kt)("inlineCode",{parentName:"li"},"Continue")),(0,o.kt)("li",{parentName:"ul"},"Upload the connector logo that you can download from:")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://nbold.co/wp-content/uploads/2020/12/Logo_degrade_blanc.svg\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set the icon background color to:")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#000000\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Security")),(0,o.kt)("li",{parentName:"ul"},"Ensure that the authentication type is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"OAuth 2.0")," and the identity provider is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"Azure Active Directory")),(0,o.kt)("li",{parentName:"ul"},"Paste the previously copied ",(0,o.kt)("inlineCode",{parentName:"li"},"Client id")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Client secret")),(0,o.kt)("li",{parentName:"ul"},"Ensure that the login url is set to:")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://login.windows.net\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure that the tenant ID is set to:")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"common")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set the resource URL to:")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://graph.microsoft.com\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set the scope to:")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://graph.microsoft.com/.default\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Create connector"),", then ",(0,o.kt)("inlineCode",{parentName:"li"},"Close"))),(0,o.kt)("h2",{id:"3-update-the-power-platform-connector"},"3. Update the Power Platform Connector"),(0,o.kt)("p",null,"To update your Power Platform connector:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the updated connector definition from:")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"https://assets.nbold.io/api/nbold-api-openapi-latest.json\n")),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the whole content"),(0,o.kt)("li",{parentName:"ul"},"From Power Apps or Power Automate, open your custom connector from the ",(0,o.kt)("inlineCode",{parentName:"li"},"Data \\ Custom connectors")," menu"),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Swagger Editor")),(0,o.kt)("li",{parentName:"ul"},"From the left page, replace the content by pasting the updated connector definition"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Update connector"))),(0,o.kt)("h2",{id:"4-next-steps"},"4. Next Steps"),(0,o.kt)("p",null,"Now that you've created the nBold connector, you can use it from ",(0,o.kt)("a",{parentName:"p",href:"https://powerapps.com"},"Power Apps"),", ",(0,o.kt)("a",{parentName:"p",href:"https://flow.microsoft.com"},"Power Automate"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://powerbi.microsoft.com"},"Power BI"),". See the available ",(0,o.kt)("a",{parentName:"p",href:"/automation/automation-connectors-actions"},"Triggers and Actions")," for reference."),(0,o.kt)("admonition",{title:"\ud83d\udca1 To Go Further",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Here are a few interesting articles that may give you some guidelines and new ideas on how to use the nBold Connector:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nbold.co/top-5-power-automate-flow-examples-for-microsoft-teams/"},"Top 5 Power Automate Flow Examples for Microsoft Teams - nBold")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/power-automate/getting-started"},"Get started with Power Automate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nbold.co/power-bi-with-microsoft-teams-how-to-manage-reports-effectively/"},"Power BI with Microsoft Teams: How to Manage Reports Effectively"),"\n:::")),(0,o.kt)("h2",{parentName:"admonition",id:"update-your-connector-authentication"},"Update your connector authentication"),(0,o.kt)("h4",{parentName:"admonition",id:"issue"},(0,o.kt)("strong",{parentName:"h4"},"Issue:")),(0,o.kt)("p",{parentName:"admonition"},"In case your Power Automate flow stops working, one of the possible reasons for that issue can be an ",(0,o.kt)("strong",{parentName:"p"},"expiration of a Power Automate connector authentification.")),(0,o.kt)("p",{parentName:"admonition"},"You can check it by looking at your client secret expiration date in Azure Active Directory."),(0,o.kt)("h4",{parentName:"admonition",id:"to-check-it"},(0,o.kt)("strong",{parentName:"h4"},"To check it:")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps"},"App registration in your Azure Active Directory portal")),(0,o.kt)("li",{parentName:"ul"},"Select your connector ",(0,o.kt)("img",{src:n(19463).Z,width:"2880",height:"1478"})),(0,o.kt)("li",{parentName:"ul"},"Click on Certificates & Secrets and check if your client secret has expired.",(0,o.kt)("img",{src:n(50082).Z,width:"2878",height:"1488"}))),(0,o.kt)("h4",{parentName:"admonition",id:"solution-"},(0,o.kt)("strong",{parentName:"h4"},"Solution :")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If it is the case, you need to modify a secret value in the already excising connector in Power Automate, so that it is valid for 24 months.")),(0,o.kt)("h4",{parentName:"admonition",id:"actions-to-do-"},(0,o.kt)("strong",{parentName:"h4"},"Actions to do :")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Go to Azure Active Directory portal ==> App registration ==> Select your connector ==> Certificates & Secrets"),(0,o.kt)("li",{parentName:"ul"},"Add a new client secret that expires in 24 months")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{src:n(23997).Z,width:"2878",height:"966"})),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"And then re-try the authentification:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://emea.flow.microsoft.com/en-us/"},"Power Automate")),(0,o.kt)("li",{parentName:"ul"},"Click on Data ==> Custom Connectors"),(0,o.kt)("li",{parentName:"ul"},"Select your nBold connector")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(56844).Z,width:"2878",height:"1486"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Click on Edit")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(46819).Z,width:"2878",height:"1486"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to the Security tab, scroll down, and click edit")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(58045).Z,width:"2878",height:"1486"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Change ",(0,o.kt)("strong",{parentName:"li"},"Client secret")," with a new secret value from a new client secret that you just created in Azure Active Directory."),(0,o.kt)("li",{parentName:"ul"},"Update a connector")))),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{src:n(69056).Z,width:"2878",height:"1486"})),(0,o.kt)("p",{parentName:"admonition"},"It should be all up and running now \ud83d\ude09")))}u.isMDXComponent=!0},38121:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app_client_secret_value-b32073e7e85f35cc594144e66a41ffa8.png"},19463:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-2022-07-08-at-13-29-50-1f65e7c2f46c3d600d548d22c17268f2.png"},50082:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-2022-07-08-at-13-31-30-9f68015a5edc274ef0edd75dd8ddce96.png"},23997:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-2022-07-08-at-13-44-10-91ae2fd8e0e9d32b9bdc35a092aae788.png"},56844:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-2022-07-08-at-16-54-25-6d2407040d95ea463b809ef62027fd27.png"},46819:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-2022-07-08-at-16-55-38-c523cdeeb715611bd1c4d011e578499e.png"},58045:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-2022-07-08-at-16-56-09-bf515c22ba069d5810f6d5675475ea95.png"},69056:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-2022-07-08-at-16-57-09-5e54f855589b50ebe0d0fce54a0e65fd.png"}}]);