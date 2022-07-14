(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{442:function(e,t,a){"use strict";a.r(t);var n=a(36),o=function(e){e.options.__data__block__={mermaid_382ee14e:"sequenceDiagram\n    autonumber\n\n    participant st as nBold<br>Continuous Deployment\n    participant acr as Your dedicated Azure<br>Container Registry\n    participant nonprod as Non-production<br>containers\n    \n    st->>acr: Publish updated image\n    acr->>nonprod: Triggers update Webhook\n    nonprod->>nonprod: Update image and restart\n",mermaid_382ee1ab:"sequenceDiagram\n    autonumber\n    \n    participant st as nBold\n    participant gcr as GitHub Container Registry\n    participant it as Your IT department\n    participant nonprod as Non-production<br>containers\n    participant prod as Production containers\n    \n    st->>gcr: Publish updated image\n    st->>it: Sending release notes\n    it->>it: Validate release notes and breaking changes\n    \n    it->>nonprod: Start non-production update process\n    nonprod->>gcr: Pull the updated image\n    nonprod->>nonprod: Update image and restart\n    it->>nonprod: Validates the update\n\n    it->>prod: Start production update process\n    prod->>gcr: Pull the updated image\n    prod->>prod: Update image and restart\n    it->>prod: Validates the update\n\n"}},r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"updates-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updates-management"}},[e._v("#")]),e._v(" Updates Management")]),e._v(" "),a("p",[e._v("nBold offers two default options to manage upgrades in your environment when we're publishing a new release.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#live-update"}},[e._v("Live update")])]),a("li",[a("a",{attrs:{href:"#staged-update"}},[e._v("Staged update")])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"live-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#live-update"}},[e._v("#")]),e._v(" Live update")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("live update")]),e._v(" mode is ideal for non-production environments (such as "),a("code",[e._v("QA")]),e._v(", "),a("code",[e._v("UAT")]),e._v(", etc.) as you'll continuously receive all the new releases automatically.\nIn this mode, you'll receive all our updates (features, fixes, patches...) as soon as they're released.")]),e._v(" "),a("p",[e._v("Here's a sequence diagram of the live updates process:")]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee14e",graph:e.$dataBlock.mermaid_382ee14e}}),a("p",[a("strong",[e._v("Legend:")])]),e._v(" "),a("ol",[a("li",[e._v("After a new release has been published and tested in our "),a("code",[e._v("nBold Cloud")]),e._v(" environments, our continuous deployment process pushes this updated image of the application directly to a dedicated Azure Container Registry ("),a("code",[e._v("ACR")]),e._v(") hosted in your own Azure tenant.")]),e._v(" "),a("li",[e._v("ACR automatically triggers a webhook for each container instance of nBold you're running")]),e._v(" "),a("li",[e._v("All your containers are updated automatically.")])]),e._v(" "),a("h2",{attrs:{id:"staged-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staged-update"}},[e._v("#")]),e._v(" Staged update")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("staged update")]),e._v(" mode is ideal for production environments as you'll be able to control the entire release process.\nIn this mode, you'll receive updates between 2 weeks / 1 month after the public release in our own "),a("code",[e._v("nBold Cloud")]),e._v(" environments, except for hotfixes and security patches that will be released at the same time as our own production environments.")]),e._v(" "),a("p",[e._v("Here's a sequence diagram of the staged updates process:")]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee1ab",graph:e.$dataBlock.mermaid_382ee1ab}}),a("p",[a("strong",[e._v("Legend:")])]),e._v(" "),a("ol",[a("li",[e._v("After a new release has been published and tested in our "),a("code",[e._v("nBold Cloud")]),e._v(" environments, our continuous deployment process pushes this updated image of the application to our secured GitHub Container Registry ("),a("code",[e._v("GCR")]),e._v(").")]),e._v(" "),a("li",[e._v("We're sending the release notes to all our "),a("code",[e._v("nBold Self-Hosted")]),e._v(" customers.")]),e._v(" "),a("li",[e._v("Your IT department validates the release notes and its breaking changes.")]),e._v(" "),a("li",[e._v("Once validated, your IT department starts the non-production update process")]),e._v(" "),a("li",[e._v("The non-production containers are pulling the updated nBold image from our GCR")]),e._v(" "),a("li",[e._v("Your non-production containers are updated and restarted.")]),e._v(" "),a("li",[e._v("Your IT department validates the update in non-production.")]),e._v(" "),a("li",[e._v("Once validated in non-production, your IT department starts the production update process")]),e._v(" "),a("li",[e._v("The production containers are pulling the updated nBold image from our GCR")]),e._v(" "),a("li",[e._v("Your production containers are updated and restarted.")]),e._v(" "),a("li",[e._v("Your IT department validates the update in production.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Specific technical and organizational constraints?")]),e._v(" "),a("p",[e._v("We’re of course available to discuss with you what would be the best solution that encompass your specific technical and organizational constraints.")])])],1)}),[],!1,null,null,null);"function"==typeof o&&o(r);t.default=r.exports}}]);