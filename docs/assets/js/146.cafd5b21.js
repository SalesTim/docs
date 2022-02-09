(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{587:function(t,s,e){"use strict";e.r(s);var a=e(36),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"grant-consent-on-behalf-of-a-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grant-consent-on-behalf-of-a-user"}},[t._v("#")]),t._v(" Grant consent on behalf of a user")]),t._v(" "),e("hr"),t._v(" "),e("p",[e("strong",[t._v("TABLE OF CONTENTS")])]),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#abstract"}},[t._v("Abstract")])]),e("li",[e("a",{attrs:{href:"#what-happens-when-consent-is-granted"}},[t._v("What happens when consent is granted?")])]),e("li",[e("a",{attrs:{href:"#prerequisites"}},[t._v("Prerequisites")])]),e("li",[e("a",{attrs:{href:"#powershell-script"}},[t._v("PowerShell script")])])])]),e("p"),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"abstract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),e("p",[t._v("In some organizations, end-users are not permitted to consent to permissions requested by an app like ours.\nIn this article, you'll learn how you can, as an administrator, grant consent to specific users on their behalf.")]),t._v(" "),e("h2",{attrs:{id:"what-happens-when-consent-is-granted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-happens-when-consent-is-granted"}},[t._v("#")]),t._v(" What happens when consent is granted?")]),t._v(" "),e("p",[t._v("When a user grants consent on his or her own behalf, the following events occur:")]),t._v(" "),e("ul",[e("li",[t._v("A service principal for the client application is created, if it doesn't already exist. A service principal is the instance of an application or a service in your Azure Active Directory (Azure AD) tenant. Access that's granted to the app or service is associated with this service principal object.")]),t._v(" "),e("li",[t._v("For each API to which the application requires access, a delegated permission grant to that API is created for the permissions that are needed by the application, for access on behalf of the user. A delegated permission grant authorizes an application to access an API on behalf of a user, when that user has signed in.")]),t._v(" "),e("li",[t._v("The user is assigned the client application. Assigning the application to the user ensures that the application is listed in the My Apps portal for that user, which allows them to review and revoke the access that has been granted on their behalf.")])]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("p",[t._v("To grant consent to an application on behalf of one user, you need:")]),t._v(" "),e("ul",[e("li",[t._v("A "),e("code",[t._v("Global Administrator")]),t._v(" or "),e("code",[t._v("Privileged Administrator")]),t._v(" role.")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.microsoft.com/en-us/graph/powershell/installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Graph PowerShell SDK"),e("OutboundLink")],1),t._v(", that you can install using the "),e("code",[t._v("Install-Module Microsoft.Graph -Scope CurrentUser")]),t._v(" PowerShell command.")])]),t._v(" "),e("h2",{attrs:{id:"powershell-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#powershell-script"}},[t._v("#")]),t._v(" PowerShell script")]),t._v(" "),e("p",[t._v("This script has to be executed for each user on behalf of whom access will be granted. It could also easily be adapted to execute these operations in batch.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("Before you execute this script, retrieve the username or object ID for the user on whose behalf access will be granted from the Azure portal, and update the "),e("code",[t._v("$userUpnOrId")]),t._v(" variable.")])]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -----------------------------------------------------------------------------")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Variables")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -----------------------------------------------------------------------------")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The user on behalf of whom access will be granted. Note: the app will be able to access the API on behalf of this user.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userUpnOrId")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serviceaccount@example.com"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The app client ID for which consent is being granted (This GUID is the nBold app client ID).")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$clientAppId")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2a651f59-97ce-42bb-97d7-cf7a2af4b635"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The API to which access will be granted (Microsoft Graph API) referenced by its ID.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resourceAppId")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00000003-0000-0000-c000-000000000000"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The permissions to grant.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$permissions")]),t._v(" = @"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openid"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"offline_access"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"profile"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User.ReadBasic.All"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Team.ReadBasic.All"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Channel.ReadBasic.All"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TeamSettings.Read.All"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TeamMember.Read.All"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ChannelMember.Read.All"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ChannelSettings.Read.All"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TeamsTab.Read.All"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -----------------------------------------------------------------------------")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Step 0. Connect to Microsoft Graph PowerShell.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -----------------------------------------------------------------------------")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# We need User.ReadBasic.All to get")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# users' IDs, Application.ReadWrite.All to list and create service principals, ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DelegatedPermissionGrant.ReadWrite.All to create delegated permission grants, ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# and AppRoleAssignment.ReadWrite.All to assign an app role.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# WARNING: These are high-privilege permissions!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Connect-MgGraph")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Scopes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User.ReadBasic.All Application.ReadWrite.All "')]),t._v(" `\n                        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DelegatedPermissionGrant.ReadWrite.All "')]),t._v(" `\n                        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AppRoleAssignment.ReadWrite.All"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -----------------------------------------------------------------------------")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Step 1. Check if a service principal exists for the client application. ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -----------------------------------------------------------------------------")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If one does not exist, create it.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$clientSp")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-MgServicePrincipal")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Filter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"appId eq '"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$clientAppId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v("'\"")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-not")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$clientSp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$clientSp")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-MgServicePrincipal")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AppId "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$clientAppId")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -----------------------------------------------------------------------------")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Step 2. Create a delegated permission that grants the client app access to the")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -----------------------------------------------------------------------------")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# API, on behalf of the user. (This example assumes that an existing delegated ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# permission grant does not already exist, in which case it would be necessary ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# to update the existing grant, rather than create a new one.)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-MgUser")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("UserId "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userUpnOrId")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resourceSp")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-MgServicePrincipal")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Filter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"appId eq '"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resourceAppId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v("'\"")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scopeToGrant")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$permissions")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-join")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$grant")]),t._v(" = New-MgOauth2PermissionGrant "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ResourceId "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resourceSp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id `\n                                     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Scope "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scopeToGrant")]),t._v(" `\n                                     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ClientId "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$clientSp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id `\n                                     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ConsentType "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Principal"')]),t._v(" `\n                                     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PrincipalId "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -----------------------------------------------------------------------------")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Step 3. Assign the app to the user.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -----------------------------------------------------------------------------")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This ensures that the user can sign in if assignment is required, and ensures that the app shows up under the user's My Apps.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$clientSp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AppRoles "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" ? "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AllowedMemberTypes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-contains")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Warning")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A default app role assignment cannot be created because the "')]),t._v(" `\n                 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client application exposes user-assignable app roles. You must "')]),t._v(" `\n                 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"assign the user a specific app role for the app to be listed "')]),t._v(" `\n                 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"in the user\'s My Apps access panel."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The app role ID 00000000-0000-0000-0000-000000000000 is the default app role")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# indicating that the app is assigned to the user, but not for any specific ")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app role.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$assignment")]),t._v(" = "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-MgServicePrincipalAppRoleAssignedTo")]),t._v(" `\n          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ServicePrincipalId "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$clientSp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id `\n          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ResourceId "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$clientSp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id `\n          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PrincipalId "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Id `\n          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AppRoleId "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"00000000-0000-0000-0000-000000000000"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);