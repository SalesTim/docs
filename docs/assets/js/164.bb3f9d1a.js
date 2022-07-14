(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{440:function(e,t,o){"use strict";o.r(t);var r=o(36),a=function(e){e.options.__data__block__={mermaid_382ee166:"graph LR\n\n    %% Nodes\n    s([Start])\n    subgraph adop[Azure AD]\n        appreg(1. AD App Registration)\n    end\n    subgraph pp[Power Platform]\n        openapi(2. OpenAPI Import)\n        papps(3. Power Apps)\n        pauto(3. Power Automate)\n        pbi(3. Power BI)\n    end\n    e([End])\n\n    %% Styles\n    classDef startend fill:#9099d8, stroke-width:0px;\n        class s startend\n        class e startend\n\n    %% Links\n    s --\x3e appreg\n    appreg --\x3e|Client id & secret| openapi\n    openapi --\x3e|Use| papps\n    openapi --\x3e|Use| pauto\n    openapi --\x3e|Use| pbi\n    papps --\x3e e\n    pauto --\x3e e\n    pbi --\x3e e\n"}},n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"setup-the-automation-connector-for-power-platform"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-the-automation-connector-for-power-platform"}},[e._v("#")]),e._v(" Setup the Automation Connector for Power Platform")]),e._v(" "),o("p",[o("strong",[e._v("Abstract")]),o("br"),e._v("\nThis article explains how to register the nBold Connector as a custom connector for Microsoft "),o("a",{attrs:{href:"https://powerplatform.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Platform"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("⏱ Expected Duration")]),e._v(" "),o("p",[e._v("Creating the custom connector only requires a few operations that are described hereafter as a detailed step-by-step procedure. Assuming you have all the required access and permissions to execute it properly, it should take "),o("strong",[o("em",[e._v("less than 10 minutes")])]),e._v(".")])]),e._v(" "),o("hr"),e._v(" "),o("p",[o("strong",[e._v("TABLE OF CONTENTS")]),e._v(":\n[[toc]]")]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"procedure-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#procedure-overview"}},[e._v("#")]),e._v(" Procedure Overview")]),e._v(" "),o("p",[e._v("Here is an overview of the overall procedure:")]),e._v(" "),o("Mermaid",{attrs:{id:"mermaid_382ee166",graph:e.$dataBlock.mermaid_382ee166}}),o("h2",{attrs:{id:"_1-create-a-new-app-registration-in-azure-active-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-new-app-registration-in-azure-active-directory"}},[e._v("#")]),e._v(" 1. Create a new app registration in Azure Active Directory")]),e._v(" "),o("p",[e._v("To securely access your Microsoft 365 environment through the Microsoft Graph APIs, the first step is to create a dedicated app registration. An Azure AD app registration identifies a third-party app such as nBold, and defines the permissions you wan to grant to it. To learn more, you can refer to "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-how-applications-are-added",target:"_blank",rel:"noopener noreferrer"}},[e._v("How and why applications are added to Azure AD"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("To create a new app registration, follow these steps:")]),e._v(" "),o("ul",[o("li",[e._v("Open your "),o("a",{attrs:{href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Active Directory portal"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Select "),o("code",[e._v("App registrations")]),e._v(" from the left menu")]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("New registration")]),e._v(" from the top bar")]),e._v(" "),o("li",[e._v("Give the app a name, such as:")])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("nBold Power Platform Connector\n")])])]),o("hr"),e._v(" "),o("ul",[o("li",[e._v("Select the option "),o("code",[e._v("Accounts in this organizational directory only")]),e._v(", as you want to restrict access to your own tenant.")]),e._v(" "),o("li",[e._v("Use this web redirection URL:")])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("https://global.consent.azure-apim.net/redirect\n")])])]),o("hr"),e._v(" "),o("ul",[o("li",[e._v("Click "),o("code",[e._v("Register")])]),e._v(" "),o("li",[e._v("From the "),o("code",[e._v("Overview")]),e._v(" menu, copy the "),o("code",[e._v("Application (client) ID")]),e._v(", and keep it as we're gonna reuse it later. You can temporarily paste it here:")])]),e._v(" "),o("p",[o("strong",[e._v("Application (client) ID")]),e._v(":"),o("br"),e._v(" "),o("input",{staticStyle:{width:"500px"},attrs:{type:"text",id:"clientIdInput",placeholder:"Paste your Application ID here"}})]),e._v(" "),o("ul",[o("li",[e._v("Open the "),o("code",[e._v("Authentication")]),e._v(" menu")]),e._v(" "),o("li",[e._v("Ensure that the "),o("code",[e._v("Access tokens (used for implicit flows)")]),e._v(" and "),o("code",[e._v("ID tokens (used for implicit and hybrid flows)")]),e._v(" options are checked from the "),o("code",[e._v("Implicit grant and hybrid flows")]),e._v(" section, and save your updates if required.")]),e._v(" "),o("li",[e._v("Open the "),o("code",[e._v("Certificates and secrets")]),e._v(" menu and click "),o("code",[e._v("New client secret")]),e._v(". A client secret is a kind of a password for your app, so manage it carefully.")]),e._v(" "),o("li",[e._v("Give a name to your client secret such as:")])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("nBold Power Platform Connector client secret\n")])])]),o("hr"),e._v(" "),o("ul",[o("li",[e._v("Select the expiration option, and click "),o("code",[e._v("Add")])]),e._v(" "),o("li",[e._v("Copy the "),o("code",[e._v("Secret Value")]),e._v(" value (be careful, it will only be shown once), and keep it as we're gonna reuse it later. You can temporarily paste it here:")])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("Be careful")]),e._v(" "),o("p",[e._v("You should use the "),o("code",[e._v("Secret Value")]),e._v(", not the "),o("code",[e._v("Secret ID")]),e._v("!")]),e._v(" "),o("p",[o("img",{attrs:{src:"/img/app_client_secret_value.png",alt:"App client secret value"}})])]),e._v(" "),o("p",[o("strong",[e._v("Secret value")]),e._v(":"),o("br"),e._v(" "),o("input",{staticStyle:{width:"500px"},attrs:{type:"text",placeholder:"Paste your secret value here"}})]),e._v(" "),o("ul",[o("li",[e._v("Open the "),o("code",[e._v("API permissions")]),e._v(" from the left menu and click "),o("code",[e._v("Add a permission")]),e._v(" from the top bar")]),e._v(" "),o("li",[e._v("Select "),o("code",[e._v("Microsoft Graph")]),e._v(", then "),o("code",[e._v("Delegated permissions")])]),e._v(" "),o("li",[e._v("From the permissions list, select:\n"),o("ul",[o("li",[e._v("OpenId permissions >\n"),o("ul",[o("li",[o("code",[e._v("email")])]),e._v(" "),o("li",[o("code",[e._v("offline_access")])]),e._v(" "),o("li",[o("code",[e._v("openid")])]),e._v(" "),o("li",[o("code",[e._v("profile")])])])]),e._v(" "),o("li",[e._v("Directory >\n"),o("ul",[o("li",[o("code",[e._v("Directory.AccessAsUser.All")])])])]),e._v(" "),o("li",[e._v("Group >\n"),o("ul",[o("li",[o("code",[e._v("Group.ReadWrite.All")])])])]),e._v(" "),o("li",[e._v("InformationProtectionPolicy >\n"),o("ul",[o("li",[o("code",[e._v("InformationProtectionPolicy.Read")])])])]),e._v(" "),o("li",[e._v("Mail >\n"),o("ul",[o("li",[o("code",[e._v("Mail.Send")])])])]),e._v(" "),o("li",[e._v("User >\n"),o("ul",[o("li",[o("code",[e._v("User.Read")])]),e._v(" "),o("li",[o("code",[e._v("User.Read.All")])])])])])]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Add permissions")])]),e._v(" "),o("li",[e._v("Then click "),o("code",[e._v("Grant admin consent for...")]),e._v(" then "),o("code",[e._v("Yes")])])]),e._v(" "),o("p",[e._v("You're done, you've created your app registration for the nBold Connector. You should also have saved for later the "),o("code",[e._v("Application (client) ID")]),e._v(" and "),o("code",[e._v("Client secret")]),e._v(" that we're gonna use in the next steps.")]),e._v(" "),o("h2",{attrs:{id:"_2-import-the-nbold-openapi-definition"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-import-the-nbold-openapi-definition"}},[e._v("#")]),e._v(" 2. Import the nBold OpenAPI definition")]),e._v(" "),o("p",[e._v("Now that we've created the app registration, we're gonna use it to create our custom connector.")]),e._v(" "),o("ul",[o("li",[e._v("To import the nBold API OpenAPI definitions for Power Automate and Power Apps, go to "),o("a",{attrs:{href:"https://powerapps.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerApps"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://flow.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Automate"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("The custom connector you're about to create will be available for both PowerApps and Power Automate, as they're sharing the same list of connectors.")])]),e._v(" "),o("ul",[o("li",[e._v("In the navigation pane, select "),o("code",[e._v("Data")]),e._v(" then "),o("code",[e._v("Custom connectors")]),e._v(".")]),e._v(" "),o("li",[e._v("Select "),o("code",[e._v("New custom connector")]),e._v(" then choose "),o("code",[e._v("Import an OpenAPI from URL")])]),e._v(" "),o("li",[e._v("Give your connector a name, such as :")])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("nBold\n")])])]),o("hr"),e._v(" "),o("ul",[o("li",[e._v("Paste this URL:")])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("https://docs.nbold.co/api/latest/definition/power-platform/apiDefinition.swagger.json\n")])])]),o("hr"),e._v(" "),o("ul",[o("li",[e._v("Click "),o("code",[e._v("Import")]),e._v(", then "),o("code",[e._v("Continue")])]),e._v(" "),o("li",[e._v("Upload the connector logo that you can download from:")])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("https://nbold.co/wp-content/uploads/2020/12/Logo_degrade_blanc.svg\n")])])]),o("hr"),e._v(" "),o("ul",[o("li",[e._v("Set the icon background color to:")])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("#000000\n")])])]),o("hr"),e._v(" "),o("ul",[o("li",[e._v("Click "),o("code",[e._v("Security")])]),e._v(" "),o("li",[e._v("Ensure that the authentication type is set to "),o("code",[e._v("OAuth 2.0")]),e._v(" and the identity provider is set to "),o("code",[e._v("Azure Active Directory")])]),e._v(" "),o("li",[e._v("Paste the previously copied "),o("code",[e._v("Client id")]),e._v(" and "),o("code",[e._v("Client secret")])]),e._v(" "),o("li",[e._v("Ensure that the login url is set to:")])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("https://login.windows.net\n")])])]),o("hr"),e._v(" "),o("ul",[o("li",[e._v("Ensure that the tenant ID is set to:")])]),e._v(" "),o("hr"),e._v(" "),o("p",[o("code",[e._v("common")])]),e._v(" "),o("ul",[o("li",[e._v("Set the resource URL to:")])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("https://graph.microsoft.com\n")])])]),o("hr"),e._v(" "),o("ul",[o("li",[e._v("Set the scope to:")])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("https://graph.microsoft.com/.default\n")])])]),o("hr"),e._v(" "),o("ul",[o("li",[e._v("Click "),o("code",[e._v("Create connector")]),e._v(", then "),o("code",[e._v("Close")])])]),e._v(" "),o("h2",{attrs:{id:"_3-update-the-power-platform-connector"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-update-the-power-platform-connector"}},[e._v("#")]),e._v(" 3. Update the Power Platform Connector")]),e._v(" "),o("p",[e._v("To update your Power Platform connector:")]),e._v(" "),o("ul",[o("li",[e._v("Open the updated "),o("a",{attrs:{target:"_blank",href:"https://docs.nbold.co/api/latest/definition/power-platform/apiDefinition.swagger.json"}},[e._v("connector definition")])])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[e._v("https://docs.nbold.co/api/latest/definition/power-platform/apiDefinition.swagger.json\n")])])]),o("hr"),e._v(" "),o("ul",[o("li",[e._v("Copy the whole content")]),e._v(" "),o("li",[e._v("From Power Apps or Power Automate, open your custom connector from the "),o("code",[e._v("Data \\ Custom connectors")]),e._v(" menu")]),e._v(" "),o("li",[e._v("Click on "),o("code",[e._v("Swagger Editor")])]),e._v(" "),o("li",[e._v("From the left page, replace the content by pasting the updated connector definition")]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Update connector")])])]),e._v(" "),o("h2",{attrs:{id:"_4-next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-next-steps"}},[e._v("#")]),e._v(" 4. Next Steps")]),e._v(" "),o("p",[e._v("Now that you've created the nBold connector, you can use it from "),o("a",{attrs:{href:"https://powerapps.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Apps"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://flow.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Automate"),o("OutboundLink")],1),e._v(", and "),o("a",{attrs:{href:"https://powerbi.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power BI"),o("OutboundLink")],1),e._v(". See the available "),o("RouterLink",{attrs:{to:"/automation/automation-connectors-actions.html"}},[e._v("Triggers and Actions")]),e._v(" for reference.")],1),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("💡 To Go Further")]),e._v(" "),o("p",[e._v("Here are a few interesting articles that may give you some guidelines and new ideas on how to use the nBold Connector:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://nbold.co/top-5-power-automate-flow-examples-for-microsoft-teams/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Top 5 Power Automate Flow Examples for Microsoft Teams - nBold"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/en-us/power-automate/getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("Get started with Power Automate"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://nbold.co/power-bi-with-microsoft-teams-how-to-manage-reports-effectively/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power BI with Microsoft Teams: How to Manage Reports Effectively"),o("OutboundLink")],1)])])]),e._v(" "),o("h2",{attrs:{id:"update-your-connector-authentication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update-your-connector-authentication"}},[e._v("#")]),e._v(" Update your connector authentication")]),e._v(" "),o("h4",{attrs:{id:"issue"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#issue"}},[e._v("#")]),e._v(" "),o("strong",[e._v("Issue:")])]),e._v(" "),o("p",[e._v("In case your Power Automate flow stops working, one of the possible reasons for that issue can be an "),o("strong",[e._v("expiration of a Power Automate connector authentification.")])]),e._v(" "),o("p",[e._v("You can check it by looking at your client secret expiration date in Azure Active Directory.")]),e._v(" "),o("h4",{attrs:{id:"to-check-it"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#to-check-it"}},[e._v("#")]),e._v(" "),o("strong",[e._v("To check it:")])]),e._v(" "),o("ul",[o("li",[e._v("Go to "),o("a",{attrs:{href:"https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps",target:"_blank",rel:"noopener noreferrer"}},[e._v("App registration in your Azure Active Directory portal"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Select your connector "),o("img",{attrs:{src:"/media/screenshot-2022-07-08-at-13-29-50.png",alt:""}})]),e._v(" "),o("li",[e._v("Click on Certificates & Secrets and check if your client secret has expired."),o("img",{attrs:{src:"/media/screenshot-2022-07-08-at-13-31-30.png",alt:""}})])]),e._v(" "),o("h4",{attrs:{id:"solution"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" "),o("strong",[e._v("Solution :")])]),e._v(" "),o("ul",[o("li",[e._v("If it is the case, you need to modify a secret value in the already excising connector in Power Automate, so that it is valid for 24 months.")])]),e._v(" "),o("h4",{attrs:{id:"actions-to-do"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#actions-to-do"}},[e._v("#")]),e._v(" "),o("strong",[e._v("Actions to do :")])]),e._v(" "),o("ul",[o("li",[e._v("Go to Azure Active Directory portal ==> App registration ==> Select your connector ==> Certificates & Secrets")]),e._v(" "),o("li",[e._v("Add a new client secret that expires in 24 months")])]),e._v(" "),o("p",[o("img",{attrs:{src:"/media/screenshot-2022-07-08-at-13-44-10.png",alt:""}})]),e._v(" "),o("ul",[o("li",[o("p",[e._v("And then re-try the authentification:")]),e._v(" "),o("ul",[o("li",[e._v("Go to "),o("a",{attrs:{href:"https://emea.flow.microsoft.com/en-us/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Automate"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Click on Data ==> Custom Connectors")]),e._v(" "),o("li",[e._v("Select your nBold connector")])]),e._v(" "),o("p",[o("img",{attrs:{src:"/media/screenshot-2022-07-08-at-16-54-25.png",alt:""}})]),e._v(" "),o("ul",[o("li",[e._v("Click on Edit")])]),e._v(" "),o("p",[o("img",{attrs:{src:"/media/screenshot-2022-07-08-at-16-55-38.png",alt:""}})]),e._v(" "),o("ul",[o("li",[e._v("Go to the Security tab, scroll down, and click edit")])]),e._v(" "),o("p",[o("img",{attrs:{src:"/media/screenshot-2022-07-08-at-16-56-09.png",alt:""}})]),e._v(" "),o("ul",[o("li",[e._v("Change "),o("strong",[e._v("Client secret")]),e._v(" with a new secret value from a new client secret that you just created in Azure Active Directory.")]),e._v(" "),o("li",[e._v("Update a connector")])])])]),e._v(" "),o("p",[o("img",{attrs:{src:"/media/screenshot-2022-07-08-at-16-57-09.png",alt:""}})]),e._v(" "),o("p",[e._v("It should be all up and running now 😉")])],1)}),[],!1,null,null,null);"function"==typeof a&&a(n);t.default=n.exports}}]);