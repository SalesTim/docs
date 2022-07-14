(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{459:function(t,e,a){"use strict";a.r(e);var r=a(36),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"approvalsapi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#approvalsapi"}},[t._v("#")]),t._v(" ApprovalsApi")]),t._v(" "),a("p",[t._v("All URIs are relative to "),a("em",[t._v("https://api.salestim.io/api/v1.0")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("HTTP request")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/api/latest/reference/Apis/ApprovalsApi.html#approveTeamCreation"}},[a("strong",[t._v("approveTeamCreation")])])],1),t._v(" "),a("td",[a("strong",[t._v("POST")]),t._v(" /approvals/{approvalRequestId}/approve")]),t._v(" "),a("td",[t._v("Approve a team creation request")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/api/latest/reference/Apis/ApprovalsApi.html#rejectTeamCreation"}},[a("strong",[t._v("rejectTeamCreation")])])],1),t._v(" "),a("td",[a("strong",[t._v("POST")]),t._v(" /approvals/{approvalRequestId}/reject")]),t._v(" "),a("td",[t._v("Reject a team creation request")])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"approveTeamCreation"}})]),t._v(" "),a("h1",{attrs:{id:"approveteamcreation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#approveteamcreation"}},[t._v("#")]),t._v(" "),a("strong",[t._v("approveTeamCreation")])]),t._v(" "),a("blockquote",[a("p",[t._v("approveTeamCreation(approvalRequestId, ApprovedApprovalResponsePayload)")])]),t._v(" "),a("p",[t._v("Approve a team creation request")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Approve a team creation request. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.\n")])])]),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("approvalRequestId")])]),t._v(" "),a("td",[a("strong",[t._v("String")])]),t._v(" "),a("td",[t._v("The approval request ID.")]),t._v(" "),a("td",[t._v("[default to null]")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("ApprovedApprovalResponsePayload")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/api/latest/reference/Models/ApprovedApprovalResponsePayload.html"}},[a("strong",[t._v("ApprovedApprovalResponsePayload")])])],1),t._v(" "),a("td",[t._v("An ApprovedApprovalResponsePayload object.")]),t._v(" "),a("td",[t._v("[optional]")])])])]),t._v(" "),a("h3",{attrs:{id:"return-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-type"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),a("p",[t._v("null (empty response body)")]),t._v(" "),a("h3",{attrs:{id:"authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/latest/reference/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),a("h3",{attrs:{id:"http-request-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Content-Type")]),t._v(": application/json")]),t._v(" "),a("li",[a("strong",[t._v("Accept")]),t._v(": application/json")])]),t._v(" "),a("p",[a("a",{attrs:{name:"rejectTeamCreation"}})]),t._v(" "),a("h1",{attrs:{id:"rejectteamcreation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rejectteamcreation"}},[t._v("#")]),t._v(" "),a("strong",[t._v("rejectTeamCreation")])]),t._v(" "),a("blockquote",[a("p",[t._v("rejectTeamCreation(approvalRequestId, RejectedApprovalResponsePayload)")])]),t._v(" "),a("p",[t._v("Reject a team creation request")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Reject a team creation request. TIER 3️⃣ | ROLES - AUTHENTICATED_USER.\n")])])]),a("h3",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Notes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("approvalRequestId")])]),t._v(" "),a("td",[a("strong",[t._v("String")])]),t._v(" "),a("td",[t._v("The approval request ID.")]),t._v(" "),a("td",[t._v("[default to null]")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("RejectedApprovalResponsePayload")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/api/latest/reference/Models/RejectedApprovalResponsePayload.html"}},[a("strong",[t._v("RejectedApprovalResponsePayload")])])],1),t._v(" "),a("td",[t._v("An RejectedApprovalResponsePayload object.")]),t._v(" "),a("td",[t._v("[optional]")])])])]),t._v(" "),a("h3",{attrs:{id:"return-type-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-type-2"}},[t._v("#")]),t._v(" Return type")]),t._v(" "),a("p",[t._v("null (empty response body)")]),t._v(" "),a("h3",{attrs:{id:"authorization-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorization-2"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/api/latest/reference/#bearerAuth"}},[t._v("bearerAuth")])],1),t._v(" "),a("h3",{attrs:{id:"http-request-headers-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-request-headers-2"}},[t._v("#")]),t._v(" HTTP request headers")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Content-Type")]),t._v(": application/json")]),t._v(" "),a("li",[a("strong",[t._v("Accept")]),t._v(": application/json")])])])}),[],!1,null,null,null);e.default=s.exports}}]);