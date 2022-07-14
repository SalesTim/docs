(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{633:function(t,e,s){"use strict";s.r(e);var n=s(36),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"how-to-use-active-directory-schema-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-active-directory-schema-extensions"}},[t._v("#")]),t._v(" How to use Active Directory Schema Extensions")]),t._v(" "),s("p",[s("strong",[t._v("ABSTRACT")]),s("br"),t._v("\nThis article describes how you can leverage the nBold platform to create "),s("RouterLink",{attrs:{to:"/governance-policies/naming-conventions.html"}},[t._v("naming conventions")]),t._v(" and "),s("RouterLink",{attrs:{to:"/governance-policies/audience-targeting.html"}},[t._v("audience targeting")]),t._v(" rules based on user profiles Active Directory schema extensions (aka "),s("code",[t._v("extension attributes")]),t._v(").")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This article only applies to "),s("code",[t._v("Azure Active Directory Schema Extensions")]),t._v(", that are different from the Microsoft Graph specific "),s("code",[t._v("Open extensions")]),t._v(" and "),s("code",[t._v("Schema extensions")]),t._v(". To learn more about Microsoft Graph extensions, see "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/graph/extensibility-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Add custom data to resources using extensions"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("TABLE OF CONTENTS")])]),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#understanding-extension-attributes"}},[t._v("Understanding Extension Attributes")])]),s("li",[s("a",{attrs:{href:"#on-premises-extension-attributes"}},[t._v("On-premises Extension Attributes")])]),s("li",[s("a",{attrs:{href:"#application-managed-extension-attributes"}},[t._v("Application-managed Extension Attributes")])])])]),s("p"),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"understanding-extension-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#understanding-extension-attributes"}},[t._v("#")]),t._v(" Understanding Extension Attributes")]),t._v(" "),s("p",[t._v("Azure AD extension attributes may be accessed from two different locations depending on their origin:")]),t._v(" "),s("ol",[s("li",[t._v("Synchronized from an on-premises Active Directory. See "),s("a",{attrs:{href:"#on-premises-extension-attributes"}},[t._v("On-premises Extension Attributes")]),t._v(".")]),t._v(" "),s("li",[t._v("Managed by an application. See "),s("a",{attrs:{href:"#application-managed-extension-attributes"}},[t._v("Application-managed Extension Attributes")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"on-premises-extension-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-premises-extension-attributes"}},[t._v("#")]),t._v(" On-premises Extension Attributes")]),t._v(" "),s("p",[t._v("On-premises extension attributes are synchronized with Azure Active Directory from an on-premises Active Directory.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("These extension attributes are also known as "),s("code",[t._v("Exchange custom attributes 1-15")]),t._v(", and can also be accessed from the Microsoft 365 Exchange Admin UI as mailbox properties.")])]),t._v(" "),s("p",[t._v("On-premises extension attributes may be accessed from the "),s("code",[t._v("onPremisesExtensionAttributes")]),t._v(" property of the user profile. This property is comprised of fifteen custom extension attribute properties:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@odata.context"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://graph.microsoft.com/beta/$metadata#users/$entity"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e463251c-f0c1-42ce-a8f0-e09f89895323"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"onPremisesExtensionAttributes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REDACTED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute2"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REDACTED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute3"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REDACTED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute4"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REDACTED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute5"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REDACTED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute6"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute7"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"M"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute8"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10/03/1982"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute9"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute10"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REDACTED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute11"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute12"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute13"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute14"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extensionAttribute15"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("To see the available extensions in your tenant, you can use this link from the "),s("a",{attrs:{href:"https://developer.microsoft.com/en-us/graph/graph-explorer?request=me&method=GET&version=beta&GraphUrl=https://graph.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Graph Explorer"),s("OutboundLink")],1),t._v(" that list all the user profile properties for the current user.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("For an "),s("code",[t._v("onPremisesSyncEnabled")]),t._v(" user, the source of authority for this set of properties is the on-premises Active Directory which is synchronized to Azure AD, and is read-only. For a cloud-only user (where "),s("code",[t._v("onPremisesSyncEnabled")]),t._v(" is false), these properties may be set during creation or update.")])]),t._v(" "),s("p",[t._v("Usage example in naming conventions and audience targeting:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onPremisesExtensionAttributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extensionAttribute10\n")])])]),s("h2",{attrs:{id:"application-managed-extension-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-managed-extension-attributes"}},[t._v("#")]),t._v(" Application-managed Extension Attributes")]),t._v(" "),s("p",[t._v("Application-managed extension attributes may be accessed from the root of the user profile:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@odata.context"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://graph.microsoft.com/beta/$metadata#users/$entity"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"e463251c-f0c1-42ce-a8f0-e09f89895323"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extension_e3049e305790413ca1b11bb53526f057_extensionAttribute10"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REDACTED"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("These attributes are named by using the convention "),s("code",[t._v("extension_<extensions-app-id>_attributename")]),t._v(", and note that the "),s("code",[t._v("<extensions-app-id>")]),t._v(" is specific to each tenant.")]),t._v(" "),s("p",[t._v("Usage example in naming conventions and audience targeting:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extension_e3049e305790413ca1b11bb53526f057_extensionAttribute10\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("To see the available extensions in your tenant, you can use this link from the "),s("a",{attrs:{href:"https://developer.microsoft.com/en-us/graph/graph-explorer?request=me&method=GET&version=beta&GraphUrl=https://graph.microsoft.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Graph Explorer"),s("OutboundLink")],1),t._v(" that list all the user profile properties for the current user.")])])])}),[],!1,null,null,null);e.default=a.exports}}]);