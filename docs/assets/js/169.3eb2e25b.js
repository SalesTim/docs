(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{761:function(t,a,e){"use strict";e.r(a);var s=e(36),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"naming-conventions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#naming-conventions"}},[t._v("#")]),t._v(" Naming Conventions")]),t._v(" "),e("p",[e("strong",[t._v("ABSTRACT")]),e("br"),t._v("\nYou use a naming conventions to enforce a consistent naming strategy for teams created by users in your organization. A naming convention can help you and your users identify the function of the team, membership, geographic region, or who created the team. The naming covention can also help categorize teams and underlying groups in the address book."),e("br"),t._v("\nIntrinsically, naming conventions are a combination of values and expressions that are evaluated against a user profile and a request form, that defines the final value of fields.")]),t._v(" "),e("hr"),t._v(" "),e("p",[e("strong",[t._v("TABLE OF CONTENTS")])]),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#available-tags"}},[t._v("Available tags")]),e("ul",[e("li",[e("a",{attrs:{href:"#request-form"}},[t._v("Request Form")])]),e("li",[e("a",{attrs:{href:"#user-profile-active-directory-attributes"}},[t._v("User Profile (Active Directory attributes)")])]),e("li",[e("a",{attrs:{href:"#app-registration"}},[t._v("App Registration")])])])]),e("li",[e("a",{attrs:{href:"#common-scenarios"}},[t._v("Common scenarios")]),e("ul",[e("li",[e("a",{attrs:{href:"#examples-static-naming-convention"}},[t._v("Examples: Static naming convention")])]),e("li",[e("a",{attrs:{href:"#examples-dynamic-naming-convention"}},[t._v("Examples: Dynamic naming convention")])]),e("li",[e("a",{attrs:{href:"#examples-conditional-naming-convention"}},[t._v("Examples: Conditional naming convention")])]),e("li",[e("a",{attrs:{href:"#azure-ad-schema-extension"}},[t._v("Azure AD Schema Extension")])])])]),e("li",[e("a",{attrs:{href:"#tips"}},[t._v("Tips")]),e("ul",[e("li",[e("a",{attrs:{href:"#team-name-length"}},[t._v("Team Name Length")])]),e("li",[e("a",{attrs:{href:"#special-characters"}},[t._v("Special characters")])])])])])]),e("p"),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"available-tags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-tags"}},[t._v("#")]),t._v(" Available tags")]),t._v(" "),e("p",[t._v("Naming conventions can use information coming from the user profile and the user request form through the following tags.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Be careful: These tags are "),e("strong",[t._v("CASE-SENSITIVE")]),t._v("!")])]),t._v(" "),e("h3",{attrs:{id:"request-form"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-form"}},[t._v("#")]),t._v(" Request Form")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Tag")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("request.team.name")])]),t._v(" "),e("td",[t._v("Requested team name")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("request.team.description")])]),t._v(" "),e("td",[t._v("Requested team description")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("request.team.welcomeMessage")])]),t._v(" "),e("td",[t._v("Requested team welcome message")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("request.template.name")])]),t._v(" "),e("td",[t._v("Requested template name")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("request.request.requester.name")])]),t._v(" "),e("td",[t._v("Requester name (Same as "),e("code",[t._v("user.displayName")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("request.request.requester.email")])]),t._v(" "),e("td",[t._v("Requester email ("),e("code",[t._v("user.mail")]),t._v(")")])])])]),t._v(" "),e("h3",{attrs:{id:"user-profile-active-directory-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-profile-active-directory-attributes"}},[t._v("#")]),t._v(" User Profile (Active Directory attributes)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Tag")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("user.displayName")])]),t._v(" "),e("td",[t._v('User full name. (for example "Bob Dirac")')])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("user.userPrincipalName")])]),t._v(" "),e("td",[t._v('User UPN. In Active Directory, a User Principal Name (UPN) is the name of a system user in an email address format. A UPN (for example: "bob.dirac@contoso.com") consists of the user name (logon name), separator (the @ symbol), and domain name (UPN suffix). '),e("hr"),t._v("❗ A UPN is not the same as an email address. Sometimes, a UPN can match a user's email address, but this is not a general rule.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("user.mail")])]),t._v(" "),e("td",[t._v('User email (for example: "bob.dirac@domain.com")')])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("user.preferredLanguage")])]),t._v(" "),e("td",[t._v("User preferred language in Microsoft 365. "),e("hr"),t._v("Language and locale codes are limited to those in the "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_639-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISO 639-1 standard"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("user.givenName")])]),t._v(" "),e("td",[t._v('User given name (for example: "Bob")')])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("user.country")])]),t._v(" "),e("td",[t._v('User country (for example: "France")')])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("user.companyName")])]),t._v(" "),e("td",[t._v('User company name (for example: "Contoso")')])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("user.department")])]),t._v(" "),e("td",[t._v('User department (for example: "Marketing")')])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("user.city")])]),t._v(" "),e("td",[t._v('User city (for example: "Paris")')])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("user.jobTitle")])]),t._v(" "),e("td",[t._v('User job title (for example: "Product Manager")')])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("user.surname")])]),t._v(" "),e("td",[t._v('User surname (for example: "Dirac")')])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("user.usageLocation")])]),t._v(" "),e("td",[t._v('Office 365 usage location. (for example: "US") '),e("hr"),t._v("Rely on the "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISO 3166-1 alpha-2 country codes..."),e("OutboundLink")],1)])])])]),t._v(" "),e("h3",{attrs:{id:"app-registration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#app-registration"}},[t._v("#")]),t._v(" App Registration")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Tag")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("app.id")])]),t._v(" "),e("td",[t._v("Application ID as defined during the app registration in Azure.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("app.name")])]),t._v(" "),e("td",[t._v("Application name as defined during the app registration in Azure.")])])])]),t._v(" "),e("h2",{attrs:{id:"common-scenarios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-scenarios"}},[t._v("#")]),t._v(" Common scenarios")]),t._v(" "),e("p",[t._v("In addition to tags, naming conventions can use standard javascript operators and functions.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Syntax")]),t._v(" "),e("p",[t._v("Naming conventions follows the "),e("a",{attrs:{href:"https://ejs.co/#docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("EJS syntax"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"examples-static-naming-convention"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-static-naming-convention"}},[t._v("#")]),t._v(" Examples: Static naming convention")]),t._v(" "),e("h4",{attrs:{id:"add-a-prj-prefix-to-project-management-teams"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-a-prj-prefix-to-project-management-teams"}},[t._v("#")]),t._v(' "Add a "PRJ-" prefix to project management teams"')]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PRJ")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("team"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h4",{attrs:{id:"add-a-mkt-suffix-to-teams-related-to-the-marketing-team"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-a-mkt-suffix-to-teams-related-to-the-marketing-team"}},[t._v("#")]),t._v(' "Add a "-MKT" suffix to teams related to the marketing team"')]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("team"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MKT")]),t._v("\n")])])]),e("h4",{attrs:{id:"add-marketing-related-tags-to-teams-descriptions-for-categorization-purpose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-marketing-related-tags-to-teams-descriptions-for-categorization-purpose"}},[t._v("#")]),t._v(' "Add marketing-related tags to teams descriptions for categorization purpose"')]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("team"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" #marketingcampaign #retargeting #seo\n")])])]),e("h3",{attrs:{id:"examples-dynamic-naming-convention"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-dynamic-naming-convention"}},[t._v("#")]),t._v(" Examples: Dynamic naming convention")]),t._v(" "),e("h4",{attrs:{id:"generate-a-unique-name-based-on-the-current-date"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-unique-name-based-on-the-current-date"}},[t._v("#")]),t._v(' "Generate a unique name based on the current date"')]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("team"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" Date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.. Example: `1592241059000`")]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("team"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns the current date and time in the ISO 8601 format. Example: `2020-06-15T17:09:51.312Z`")]),t._v("\n")])])]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("team"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns the current date and time in the ISO 8601 format. Example: `2020-06-15T17:09:51.312Z`")]),t._v("\n")])])]),e("p",[t._v("or")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("team"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns the current date and time in the ISO 8601 format. Example: `2020-06-15T17:09:51.312Z`")]),t._v("\n")])])]),e("h4",{attrs:{id:"add-country-as-a-suffix-to-teams-names-based-on-the-requester-location"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-country-as-a-suffix-to-teams-names-based-on-the-requester-location"}},[t._v("#")]),t._v(' "Add country as a suffix to teams names based on the requester location"')]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("team"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("usageLocation "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h4",{attrs:{id:"add-the-business-solution-name-to-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-the-business-solution-name-to-description"}},[t._v("#")]),t._v(' "Add the Business Solution name to description"')]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("team"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" Created from the "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<%= request.template.name %>"')]),t._v(" team template"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),e("h3",{attrs:{id:"examples-conditional-naming-convention"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-conditional-naming-convention"}},[t._v("#")]),t._v(" Examples: Conditional naming convention")]),t._v(" "),e("h4",{attrs:{id:"use-a-specific-suffix-for-users-from-a-specific-domain-use-the-domain-name-for-the-others"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-a-specific-suffix-for-users-from-a-specific-domain-use-the-domain-name-for-the-others"}},[t._v("#")]),t._v(' "Use a specific suffix for users from a specific domain, use the domain name for the others"')]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("team"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@contoso.fr'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CT")]),t._v(" France "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Use "CT France" instead of contoso.fr')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%=")]),t._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(".*@")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Extract domain name from user email address")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("h3",{attrs:{id:"azure-ad-schema-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#azure-ad-schema-extension"}},[t._v("#")]),t._v(" Azure AD Schema Extension")]),t._v(" "),e("p",[t._v("To use Azure AD schema extensions in your naming conventions, please refer to "),e("RouterLink",{attrs:{to:"/nocode/ad-schema-extensions.html"}},[t._v("this article")])],1),t._v(" "),e("h2",{attrs:{id:"tips"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[t._v("#")]),t._v(" Tips")]),t._v(" "),e("h3",{attrs:{id:"team-name-length"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#team-name-length"}},[t._v("#")]),t._v(" Team Name Length")]),t._v(" "),e("p",[t._v("The maximum team name length (including prefix, suffix, etc...) is fixed to "),e("strong",[t._v("264 characters")]),t._v(", which is the limit of the "),e("a",{attrs:{href:"https://docs.microsoft.com/en-us/microsoft-365/solutions/groups-naming-policy?view=o365-worldwide#things-to-look-out-for",target:"_blank",rel:"noopener noreferrer"}},[t._v("underlying group name"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("This limit is validated by adding the lengths of "),e("strong",[t._v("BOTH")]),t._v(" the requested team name "),e("strong",[t._v("AND")]),t._v(" the dynamic naming convention!")])]),t._v(" "),e("h3",{attrs:{id:"special-characters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#special-characters"}},[t._v("#")]),t._v(" Special characters")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('" * : < > ? / \\\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('" * : < > ? / \\\n')])])]),e("p",[t._v("The following characters are forbidden in teams names:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('" * : < > ? / \\\n')])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v('You can use " '),e("strong",[t._v("-")]),t._v(' " or " '),e("strong",[t._v("|")]),t._v(' " as separators.')])]),t._v(" "),e("Classification",{attrs:{label:"public"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);