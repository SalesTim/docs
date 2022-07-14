(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{446:function(e,t,s){"use strict";s.r(t);var i=s(36),n=function(e){e.options.__data__block__={mermaid_382ee14b:"flowchart TB\n\n    %% Nodes\n\n    subgraph in[Inputs]\n        graphhook(Microsoft Graph<br>Webhook notification)\n        scheduler(Scheduler)\n    end\n\n    pre(Pre-processing)\n    buildteamslist(Build the list of managed teams)\n    eachteam(For each team)\n\n    processing(Processing)\n    checkteam(Check if the team is managed through a template)\n    checkpolicy(Control membership policy)\n    applypolicy(Apply membership policy)\n\n    post(Post-processing)\n    notif(Team members are notified by Microsoft Teams)\n\n    subgraph out[Outputs]\n        audit(Audit trails)\n    end\n    \n    done(End)\n\n    %% Links\n    graphhook --\x3e|Triggers| processing\n    scheduler --\x3e|Triggers| pre\n\n    pre --\x3e buildteamslist\n    buildteamslist --\x3e eachteam\n    eachteam --\x3e processing\n\n\n    processing --\x3e checkteam\n    \n    checkteam --\x3e checkpolicy\n    checkpolicy --\x3e applypolicy\n    applypolicy --\x3e post\n\n    post --\x3e notif\n    notif --\x3e done\n\n    pre --\x3e out\n    processing --\x3e out\n    post --\x3e out\n    done --\x3e out\n\n    %% Styles\n\n    classDef inputs fill:#9099d8, stroke-width:0px;\n        class graphhook inputs\n        class scheduler inputs\n    classDef step fill:#90EE90, stroke-width:0px;\n        class pre step\n        class processing step\n        class post step\n        class done step\n        class theend step\n    classDef outputs fill:#FFFFE0, stroke-width:0px;\n        class audit outputs\n",mermaid_382ee164:"graph TB\n    inputs(Inputs)\n    step(Phase / Step)\n    activity(Activity)\n    outputs(Outputs)\n\n    classDef inputs fill:#9099d8, stroke-width:0px;\n        class inputs inputs\n    classDef step fill:#90EE90, stroke-width:0px;\n        class step step\n    classDef outputs fill:#FFFFE0, stroke-width:0px;\n        class outputs outputs\n"}},r=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"permanent-membership-policy-job"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#permanent-membership-policy-job"}},[e._v("#")]),e._v(" Permanent Membership Policy Job")]),e._v(" "),s("p",[s("strong",[e._v("TABLE OF CONTENTS")])]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#process-overview"}},[e._v("Process overview")])]),s("li",[s("a",{attrs:{href:"#inputs"}},[e._v("Inputs")])]),s("li",[s("a",{attrs:{href:"#pre-processing"}},[e._v("Pre-processing")])]),s("li",[s("a",{attrs:{href:"#processing"}},[e._v("Processing")])]),s("li",[s("a",{attrs:{href:"#post-processing"}},[e._v("Post-processing")])]),s("li",[s("a",{attrs:{href:"#outputs"}},[e._v("Outputs")])])])]),s("p"),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"process-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-overview"}},[e._v("#")]),e._v(" Process overview")]),e._v(" "),s("p",[e._v("A simplified representation of a permanent membership policy job is comprised of the following activities:")]),e._v(" "),s("Mermaid",{attrs:{id:"mermaid_382ee14b",graph:e.$dataBlock.mermaid_382ee14b}}),s("p",[s("strong",[e._v("Legend:")])]),e._v(" "),s("Mermaid",{attrs:{id:"mermaid_382ee164",graph:e.$dataBlock.mermaid_382ee164}}),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[e._v("#")]),e._v(" Inputs")]),e._v(" "),s("p",[e._v("Permanent membership policy jobs execution could be triggered from the following events:")]),e._v(" "),s("ul",[s("li",[e._v("The Microsoft Graph notifies nBold through a webhook that a team membership has been updated.")]),e._v(" "),s("li",[e._v("nBold's internal scheduler makes sure (as a fallback mechanism) that the permanent membership policy, if defined, is applied to managed teams.")])]),e._v(" "),s("h2",{attrs:{id:"pre-processing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-processing"}},[e._v("#")]),e._v(" Pre-processing")]),e._v(" "),s("p",[e._v("During the pre-processing phase, the permanent membership policy job executes controls to make sure that the appropriate configuration has been defined, and that everything is ready for the processing step:")]),e._v(" "),s("ul",[s("li",[e._v("Build the list of managed teams that have a valid permanent membership policy defined")]),e._v(" "),s("li",[e._v("Once built, the processing phase is started for each team")])]),e._v(" "),s("h2",{attrs:{id:"processing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processing"}},[e._v("#")]),e._v(" Processing")]),e._v(" "),s("p",[e._v("During the processing phase, the job applies if necessary the permanent membership policy defined in the associated template:")]),e._v(" "),s("ul",[s("li",[e._v("Validate if the team is associated with a template")]),e._v(" "),s("li",[e._v("Validate if this template has a valid permanent membership policy")]),e._v(" "),s("li",[e._v("Apply the permanent membership policy to the team if necessary")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Depending on the configuration defined from the "),s("code",[e._v("Settings")]),e._v(" tab, the permanent membership policy job could be executed in the security context of:")]),e._v(" "),s("ul",[s("li",[e._v("A registered service account. In this context, the provisioning job uses the permissions defined in the "),s("RouterLink",{attrs:{to:"/trust-center/microsoft-graph-permissions.html#service-account-scope"}},[e._v("Service account scope")]),e._v(".")],1),e._v(" "),s("li",[e._v("An Azure AD registered app. In this context, the provisioning job uses the permissions defined in the "),s("RouterLink",{attrs:{to:"/trust-center/microsoft-graph-permissions.html#application-scope"}},[e._v("Application scope")]),e._v(".")],1)])]),e._v(" "),s("h2",{attrs:{id:"post-processing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-processing"}},[e._v("#")]),e._v(" Post-processing")]),e._v(" "),s("p",[e._v("The permanent membership policy doesn't notify users directly to prevent duplicated notifications. Instead, it relies on the native Microsoft Teams notifications / messages generated when membership of a team is updated.")]),e._v(" "),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),s("p",[e._v("During the different phases, the permanent membership policy job generates events that are handled by the audit trails module, that creates a new record for each event.")]),e._v(" "),s("p",[e._v("To see the list of events generated during the execution of the permanent membership policy job, please refer to our "),s("RouterLink",{attrs:{to:"/hosting/references/events-reference.html"}},[e._v("events reference")]),e._v(".")],1)],1)}),[],!1,null,null,null);"function"==typeof n&&n(r);t.default=r.exports}}]);